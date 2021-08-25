import React, { useCallback, useState } from 'react'
import { Currency, currencyEquals, ETHER, TokenAmount, WETH } from '@pancakeswap/sdk'
import { Button } from '@pancakeswap/uikit'
import { RouteComponentProps, Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import { useGasPrice } from 'state/user/hooks'
import { useCurrency } from 'hooks/Tokens'
import { useMintState, useDerivedMintInfo, useMintActionHandlers } from 'state/mint/hooks'
import { getUSDT2Addres } from 'utils/addressHelpers'
import { maxAmountSpend } from 'utils/maxAmountSpend'
import { Field } from 'state/mint/actions'
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback'
import { useTransactionAdder, useIsTransactionPending } from 'state/transactions/hooks'
import { LENDING_POOL_ADDRESS } from 'config/constants'
import { calculateGasMargin, getRouterContractv2 } from 'utils'
import CurrencyInputPanel from 'components/CurrencyInputPanelv2'
import { currencyId } from 'utils/currencyId'
import Dots from 'components/Loader/Dots'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { tryParseAmount } from 'state/swap/hooks'
import { CurrencyLogo } from 'components/Logo'

const Container = styled.div.attrs((props) => ({
  className: 'container',
}))`
  color: ${({ theme }) => theme.colors.text1};
`

export default function Invest({
  match: {
  params: { currencyIdA, currencyIdB },
},
history,
}: RouteComponentProps<{ currencyIdA?: string; currencyIdB?: string }>) {
  
  const { account, chainId, library } = useActiveWeb3React()
  const { t } = useTranslation()
  const gasPrice = useGasPrice()
  
  const [showInvestOverview, setShowInvestOverview] = useState<boolean>(false)

  const currencyA = useCurrency(currencyIdA)  
  const currencyB = useCurrency(currencyIdB)

  const defaultAmountParsed = tryParseAmount("1", currencyA)
  
  // mint state
  const { independentField, typedValue, otherTypedValue } = useMintState()
  const {
    dependentField,
    currencies,
    pair,
    pairState,
    currencyBalances,
    parsedAmounts,
    price,
    noLiquidity,
    liquidityMinted,
    poolTokenPercentage,
    error,
  } = useDerivedMintInfo(currencyA ?? undefined, currencyB ?? undefined)
  
  const { onFieldAInput, onFieldBInput } = useMintActionHandlers(noLiquidity)

  const isValid = !error

  // modal and loading
  const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false) // clicked confirm

  const [txHash, setTxHash] = useState<string>('')

  // get formatted amounts
  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: noLiquidity ? otherTypedValue : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }
  
  // get the max amounts user can add
  const maxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmountSpend(currencyBalances[field]),
      }
    },
    {},
  )
  
  const atMaxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? '0'),
      }
    },
    {},
  )

  // check whether the user has approved the router on the tokens
  const [approvalA, approveACallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_A], LENDING_POOL_ADDRESS)
  
  const defaultApproval = useApproveCallback(defaultAmountParsed, LENDING_POOL_ADDRESS)

  const addTransaction = useTransactionAdder()  

  const handleCurrencyASelect = useCallback(
    (currencyA_: Currency) => {
      const newCurrencyIdA = currencyId(currencyA_)
      if (newCurrencyIdA === currencyIdB) {
        history.push(`/add/${currencyIdB}/${currencyIdA}`)
      } else {
        history.push(`/add/${newCurrencyIdA}/${currencyIdB}`)
      }
    },
    [currencyIdB, history, currencyIdA],
  )

  // try to parse a user entered amount for a given token
  
  
  async function onAdd() {
    if (!chainId || !library || !account) return
    const router = getRouterContractv2(chainId, library, account)

    const { [Field.CURRENCY_A]: parsedAmountA } = parsedAmounts
    if (!parsedAmountA || !currencyA) {
      return
    }

    const estimate = router.estimateGas.deposit
    const method = router.deposit

    const args = [
      currencyIdA,
      parsedAmountA.raw.toString(),
      account,
      0,
    ]
    const value = null

    setAttemptingTxn(true)

    await estimate(...args, value ? { value } : {})
      .then((estimatedGasLimit) =>
        method(...args, {
          ...(value ? { value } : {}),
          gasLimit: calculateGasMargin(estimatedGasLimit),
          gasPrice,
        }).then((response) => {
          setAttemptingTxn(false)

          addTransaction(response, {
            summary: `Deposit ${parsedAmounts[Field.CURRENCY_A]?.toSignificant(3)} ${
              currencies[Field.CURRENCY_A]?.symbol
            }`,
          })

          setTxHash(response.hash)
        }),
      )
      .catch((err) => {
        setAttemptingTxn(false)
        // we only care if the error is something _other_ than the user rejected the tx
        if (err?.code !== 4001) {
          console.error(err)
        }
      })
  }
  const isPending = useIsTransactionPending(txHash)

  const handleDismissConfirmation = useCallback(() => {
    // if there was a tx hash, we want to clear the input
    if (txHash) {
      onFieldAInput('')
    }
    setTxHash('')
  }, [onFieldAInput, txHash])

  return (
      <>
      {!showInvestOverview ? (
        <>
        <Container>
          <div className="row">
            <div className="col">
              <Button
                type="button"
                as={Link}
                to="/theter-reserve"
              >
                back
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <form className="basic-form">
                <div className="caption">
                  <h6>How much would you like to deposit?</h6>
                  <p>
                    Please enter an amount you would like to deposit. The maximum amount you can deposit is shown below.
                  </p>
                </div>
                <div className="basic-form-inner mb-3">
                  <div className="amount-field-inner">
                    <CurrencyInputPanel
                      value={formattedAmounts[Field.CURRENCY_A]}
                      onUserInput={onFieldAInput}
                      onMax={() => {
                        onFieldAInput(maxAmounts[Field.CURRENCY_A]?.toExact() ?? '')
                      }}
                      onCurrencySelect={handleCurrencyASelect}
                      showMaxButton={!atMaxAmounts[Field.CURRENCY_A]}
                      currency={currencies[Field.CURRENCY_A]}
                      id="add-liquidity-input-tokena"
                      showCommonBases
                    />
                  </div>
                </div>
                <div className="text-center mb-3">
                  {!account ? (
                    <ConnectWalletButton />
                  ) : (
                  <>
                    { parsedAmounts[Field.CURRENCY_A] && (
                        <Button
                          type="button"
                          onClick={() => {setShowInvestOverview(!showInvestOverview)}}
                        >
                          Continue
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Container>        
      </>
      ) : defaultApproval["0"] === ApprovalState.APPROVED ? (
        <>
          <Container>
            <div className="row">
              <div className="col">
                <Button onClick={() => {setShowInvestOverview(!showInvestOverview); handleDismissConfirmation()}}>
                  back
                </Button>
              </div>
            </div>
            <div className="confirmation-view">
              <div className="caption">
                <h6>Deposit overview</h6>
                <p>These are your transaction details. Make sure to check if this is correct before submitting.</p>
              </div>
              <div className="confirmation-view-content-inner">
                <div className="conformation-view-content">
                  <div className="row-amount-field">
                    <div className="row-title-inner">
                      <div className="row-title">Amount</div>
                    </div>
                    <div className="row-content">
                      <div className="content-value">
                        <div className="content-value-line">
                          <div className="token-icon">
                            <CurrencyLogo currency={currencyA} size="16px" />
                          </div>
                          <p className="value">
                            {formattedAmounts[Field.CURRENCY_A]}
                            <span className="symbol">{currencyA.name}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>              
                <div className="conformation-view-actions-inner">
                  <div className="actions-wrapper">
                    <div className="action-wrapper-buttons">
                    {isPending || attemptingTxn ? (
                      <>
                        <button type="button" className="actions-wrapper-button actions-wrapper-button-loading" disabled>
                          <p>{t('Loading')}</p>
                        </button>
                        <button type="button" className="actions-wrapper-button actions-wrapper-button-loading" disabled>                            
                          <p>{t('Loading')}</p>
                        </button>
                      </>
                      ) : (
                        <>
                          {txHash === '' ? (
                            <>
                              <button type="button" className="actions-wrapper-button actions-wrapper-button-active" disabled>
                                <p>{t('Deposit')}</p>
                              </button>
                              <button type="button" className="actions-wrapper-button" disabled>                            
                                <p>{t('Finished')}</p>
                              </button>
                            </>
                          ) : (
                            <>
                              <button type="button" className="actions-wrapper-button actions-wrapper-button-finished" disabled>                            
                                <p>{t('Deposit')}</p>
                              </button>
                              <button type="button" className="actions-wrapper-button actions-wrapper-button-finished" disabled>                            
                                <p>{t('Finished')}</p>
                              </button>
                            </>
                          )}
                        </>                        
                      )}                      
                    </div>
                  </div>
                </div>
                <form className="actions-execute mb-3">
                  <div className="txtop-info">
                    <div className="txtop-info-inner">
                      <div className="txtop-info-left-inner">                        
                        {isPending || attemptingTxn ? (
                          <>
                            <div className="txtop-info-title">{t('Deposit')}</div>
                            <Dots>{t('Loading')}</Dots>
                          </>
                        ) : (
                          <>
                            {txHash === '' ? (
                              <>
                                <div className="txtop-info-title">{t('Deposit')}</div>
                                <span>{t('Please submit to deposit')}</span>
                              </>
                            ) : (
                              <>
                                <div className="txtop-info-title">{t('Finished')}</div>
                                <span>{t('success')}</span>
                              </>
                            )}
                          </>
                        )}
                      </div>
                      <div className="txtop-info-right-inner">
                        <div className="txtop-info-button-inner">                          
                            {isPending || attemptingTxn ? (
                              <Button
                                width='100%'
                                type="button"
                                onClick={() => {
                                  onAdd()
                                }}
                                disabled={isPending || attemptingTxn}
                              >
                                <Dots>{t('Loading')}</Dots>
                              </Button>
                            ) : (
                              <>
                                {txHash === '' ? (
                                  <Button
                                    width='100%'
                                    type="button"
                                    onClick={() => {
                                      onAdd()
                                    }}
                                    disabled={attemptingTxn}
                                  >
                                    {t('Deposit')}
                                  </Button>
                                  ) : (
                                    <Button
                                      width='100%'
                                      type="button"
                                      as={Link}
                                      to="/markets"
                                      disabled={isPending || attemptingTxn}
                                    >
                                      {t('Markets')}
                                    </Button>
                                  )}
                              </>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
            </div>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <div className="row">
              <div className="col">
                <Button onClick={() => setShowInvestOverview(!showInvestOverview)}>
                  back
                </Button>
              </div>
            </div>
            <div className="confirmation-view">
              <div className="caption">
                <h6>Deposit overview</h6>
                <p>These are your transaction details. Make sure to check if this is correct before submitting.</p>
              </div>
              <div className="confirmation-view-content-inner">
                <div className="conformation-view-content">
                  <div className="row-amount-field">
                    <div className="row-title-inner">
                      <div className="row-title">Amount</div>
                    </div>
                    <div className="row-content">
                      <div className="content-value">
                        <div className="content-value-line">
                          <div className="token-icon">
                            <CurrencyLogo currency={currencyA} size="16px" />
                          </div>
                          <p className="value">
                            {formattedAmounts[Field.CURRENCY_A]}
                            <span className="symbol">{currencyA.name}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="conformation-view-actions-inner">
                <div className="actions-wrapper">
                  <div className="action-wrapper-buttons">
                    <button type="button" className="actions-wrapper-button actions-wrapper-button-active" disabled>
                      <p>Approve</p>
                    </button>
                    <button type="button" className="actions-wrapper-button" disabled>
                      <p>Deposit</p>
                    </button>
                    <button type="button" className="actions-wrapper-button" disabled>
                      <p>Finished</p>
                    </button>
                  </div>
                </div>
              </div>
              <form className="actions-execute mb-3">
                <div className="txtop-info">
                  <div className="txtop-info-inner">
                    <div className="txtop-info-left-inner">
                      <div className="txtop-info-title">Approve</div>
                      <span>Please approve before depositing</span>
                    </div>
                    <div className="txtop-info-right-inner">
                      <div className="txtop-info-button-inner">                          
                        <Button
                          onClick={approveACallback}
                          disabled={approvalA === ApprovalState.PENDING}
                          width='100%'
                          type="button"
                        >
                          {approvalA === ApprovalState.PENDING ? (
                            <Dots>{t('Enabling %asset%', { asset: currencies[Field.CURRENCY_A]?.symbol })}</Dots>
                          ) : (
                            t('Approve')
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Container>
        </>
      )}
    </>
  )
}
