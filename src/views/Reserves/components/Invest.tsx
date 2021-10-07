import React, { useCallback, useState } from 'react'
import { TokenAmount } from '@pancakeswap/sdk'
import { Button } from '@pancakeswap/uikit'
import { RouteComponentProps, Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import { useGasPrice } from 'state/user/hooks'
import { useCurrency } from 'hooks/Tokens'
import { useMintState, useDerivedMintInfo, useMintActionHandlers } from 'state/mint/hooks'
import useTokenBalance from 'hooks/useTokenBalance'
import { getBalanceNumber } from 'utils/formatBalance'
import { maxAmountSpend } from 'utils/maxAmountSpend'
import { Field } from 'state/mint/actions'
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback'
import { useTransactionAdder, useIsTransactionPending } from 'state/transactions/hooks'
import { LENDING_POOL_ADDRESS } from 'config/constants'
import { calculateGasMargin, getRouterContractv2 } from 'utils'
import CurrencyInputPanel from 'components/CurrencyInputPanelv2'
import Dots from 'components/Loader/Dots'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { tryParseAmount } from 'state/swap/hooks'
import { CurrencyLogo } from 'components/Logo'
import PageLoader from 'components/Loader/PageLoader'


const Container = styled.div.attrs(() => ({
  className: 'container',
}))`
  color: ${({ theme }) => theme.colors.text1};
`
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 120px 16px 0px 16px;
  align-items: center;
  flex: 1;
  z-index: 1;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 6rem 16px 16px 16px;
  }
`
const StepTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
`
const ConfirmationHeader = styled.div`
  background: ${({ theme }) => theme.colors.bg2};
  border: 1px solid ${({ theme }) => theme.colors.bg3};
  padding: 15px;
  border-radius: 2px;
`
const ConfirmationBody = styled.form`
  width: 100%;
  max-width: 380px;
  background: ${({ theme }) => theme.colors.bg2};
  border: 1px solid ${({ theme }) => theme.colors.bg3};
  padding: 15px;
  border-radius: 2px;
  margin-bottom: 1rem !important;
`
const HeaderCardsWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.bg3};
  width: 100%;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease 0s;
`
const HeaderCardActive = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.bg3};
  background: ${({ theme }) => theme.colors.gradients.blue};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  min-height: 20px;
  font-size: 12px;
  flex: 1 1 0%;
  font-weight: 400;
  transition: all 0.2s ease 0s;
`
const HeaderCardDisabled = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.bg3};
  background: ${({ theme }) => theme.colors.backgroundDisabled};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  min-height: 20px;
  font-size: 12px;
  flex: 1 1 0%;
  font-weight: 400;
  transition: all 0.2s ease 0s;
`
const HeaderCardLoading = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.bg3};
  background: ${({ theme }) => theme.colors.gradients.gold};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  min-height: 20px;
  font-size: 12px;
  flex: 1 1 0%;
  font-weight: 400;
  transition: all 0.2s ease 0s;
`
const HeaderCardFinished = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.bg3};
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.text1};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  min-height: 20px;
  font-size: 12px;
  flex: 1 1 0%;
  font-weight: 400;
  transition: all 0.2s ease 0s;
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
  const [amountLimits, setAmountLimits] = useState<number>(0)

  const currencyA = useCurrency(currencyIdA)  
  const currencyB = useCurrency(currencyIdB)

  const defaultAmountParsed = tryParseAmount("1", currencyA)

  const { balance, fetchStatus } = useTokenBalance(currencyIdA)
  
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
  // try to parse a user entered amount for a given token
  const defaultApproval = useApproveCallback(defaultAmountParsed, LENDING_POOL_ADDRESS)

  const addTransaction = useTransactionAdder()
  const rtr = getRouterContractv2(chainId, library, account)
  // console.log(rtr)
  
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
    onFieldAInput('')
    setTxHash('')
  }, [onFieldAInput, txHash])
  // const navHistory = useHistory();
  function handleCancelation(){
    onFieldAInput('')
    setTxHash('')
    history.goBack()
  }

  if(!account) {
    return (
      <BodyWrapper>
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
              <div className="basic-form">
                <div className="caption">
                  <h6>{t('Please connect a wallet')}</h6>
                  <p>
                    {t('We couldn’t detect a wallet. Connect a wallet to deposit and see your balance grow.')}
                  </p>
                </div>
                <div className="text-center mb-3">
                  <ConnectWalletButton />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </BodyWrapper>
    )
  }

  if(fetchStatus !== "success"  && currencyA === null) {
    <PageLoader />
  }

  return (
      <BodyWrapper>
      {account && fetchStatus === "success" && currencyA !== null && getBalanceNumber(balance, currencyA.decimals) < 1 ? (
        <Container>
          <div className="row">
            <div className="col">
              <Button onClick={() => handleCancelation()}>
                back
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="basic-form">
                <div className="caption">
                  <StepTitle>{t('Your balance is zero')}</StepTitle>
                  <p className="mt-3">
                    {t('Your balance of %name% is 0. Transfer %name% to your wallet to be able to deposit' , { name: currencyA.name })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : !showInvestOverview && account  && currencyA !== null && fetchStatus === "success" ? (
        <Container>
          <div className="row">
            <div className="col">
              <Button onClick={() => handleCancelation()}>
                back
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="basic-form">
                <div className="caption">
                  <StepTitle>{t('How much would you like to deposit?')}</StepTitle>
                  <p className="mt-3">
                    {t('Please enter an amount you would like to deposit. The maximum amount you can deposit is shown below.')}
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
                      showMaxButton={!atMaxAmounts[Field.CURRENCY_A]}
                      currency={currencies[Field.CURRENCY_A]}
                      id="add-liquidity-input-tokena"
                      address={currencyIdA}
                      showCommonBases
                    />
                  </div>
                </div>
                <div className="text-center mb-3">
                  { parsedAmounts[Field.CURRENCY_A] && +typedValue <= getBalanceNumber(balance, currencyA.decimals) ? (
                      <Button
                        type="button"
                        onClick={() => {setShowInvestOverview(!showInvestOverview)}}
                      >
                        Continue
                      </Button>
                    ) : parsedAmounts[Field.CURRENCY_A] && +typedValue > getBalanceNumber(balance, currencyA.decimals) && (
                      <span>{t('Insufficient balance, choose a lower amount')}</span>
                    )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : account  && currencyA !== null && fetchStatus === "success" && defaultApproval["0"] === ApprovalState.APPROVED ? (
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
                <StepTitle>Deposit overview</StepTitle>
                <p className="mt-3">These are your transaction details. Make sure to check if this is correct before submitting.</p>
              </div>
              <div className="confirmation-view-content-inner">
                <ConfirmationHeader>
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
                </ConfirmationHeader>
              </div>              
                <div className="conformation-view-actions-inner">
                  <HeaderCardsWrapper>
                    <div className="action-wrapper-buttons">
                    {isPending || attemptingTxn ? (
                      <>
                        <HeaderCardLoading>
                          <p>{t('Loading')}</p>
                        </HeaderCardLoading>
                        <HeaderCardLoading>                            
                          <p>{t('Loading')}</p>
                        </HeaderCardLoading>
                      </>
                      ) : (
                        <>
                          {txHash === '' ? (
                            <>
                              <HeaderCardActive>
                                <p>{t('Deposit')}</p>
                              </HeaderCardActive>
                              <HeaderCardDisabled>
                                <p>{t('Finished')}</p>
                              </HeaderCardDisabled>
                            </>
                          ) : (
                            <>
                              <HeaderCardFinished>
                                <p>{t('Deposit')}</p>
                              </HeaderCardFinished>
                              <HeaderCardFinished>
                                <p>{t('Finished')}</p>
                              </HeaderCardFinished>
                            </>
                          )}
                        </>
                      )}                      
                    </div>
                  </HeaderCardsWrapper>
                </div>
                <ConfirmationBody>
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
                </ConfirmationBody>
            </div>
          </Container>
        </>
      ) : account  && currencyA !== null && fetchStatus === "success" && defaultApproval["0"] !== ApprovalState.APPROVED ? (
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
                <StepTitle>Deposit overview</StepTitle>
                <p className="mt-3">These are your transaction details. Make sure to check if this is correct before submitting.</p>
              </div>
              <div className="confirmation-view-content-inner">
                <ConfirmationHeader>
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
                </ConfirmationHeader>
              </div>
              <div className="conformation-view-actions-inner">
                <HeaderCardsWrapper>
                  <div className="action-wrapper-buttons">
                    <HeaderCardActive>
                      <p>Approve</p>
                    </HeaderCardActive>
                    <HeaderCardDisabled>
                      <p>Deposit</p>
                    </HeaderCardDisabled>
                    <HeaderCardDisabled>
                      <p>Finished</p>
                    </HeaderCardDisabled>
                  </div>
                </HeaderCardsWrapper>
              </div>
              <ConfirmationBody>
                <div className="txtop-info">
                  <div className="txtop-info-inner">
                    <div className="txtop-info-left-inner">
                      <div className="txtop-info-title">Approve</div>
                      <span className="fs-14">Please approve before depositing</span>
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
              </ConfirmationBody>
            </div>
          </Container>
        </>
      ) : (
        <PageLoader />
      )}
    </BodyWrapper>
  )
}
