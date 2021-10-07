import React from 'react'
import { Currency, Pair } from '@pancakeswap/sdk'
import { Button, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useTokenBalance from 'hooks/useTokenBalance'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { CurrencyLogo } from '../Logo'
import { Input as NumericalInput } from './NumericalInput'

interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  hideInput?: boolean
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
  address: string
}
export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  currency,
  disableCurrencySelect = true,
  hideBalance = false,
  pair = null, // used for double token logo
  hideInput = false,
  otherCurrency,
  id,
  showCommonBases,
  address,
}: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useTokenBalance(address ?? undefined)
  const { t } = useTranslation()

  return (
    <>
    <div className="basic-form-inner mb-3">
      <div className="amount-field-inner">
        <div className="row-amount-field">
          <div className="row-title-inner">
            <div className="row-title">{t('Available to deposit')}</div>
          </div>
          <div className="row-content">
            <div className="content-value">
              <div className="content-value-line">                
                {account && (
                  <Text onClick={onMax} fontSize="14px" style={{ display: 'inline', cursor: 'pointer' }}>
                    {!hideBalance && !!currency && selectedCurrencyBalance.fetchStatus === 'success'
                      ? t('%amount%', { amount: getFullDisplayBalance(selectedCurrencyBalance.balance, currency.decimals) ?? '' })
                      : ' -'}
                  </Text>                  
                )}
                <span className="symbol">{currency.name}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="amount-field">
          <div className="token-icon">            
            <CurrencyLogo currency={currency} size="30px" />
          </div>
          <div className="basic-field amount-field-input">
            <NumericalInput
              className="token-amount-input"
              value={value}
              onUserInput={(val) => {
                onUserInput(val)
              }}
              placeholder="Amount"
            />
          </div>
          <div className="amount-field-right-inner">
            {account && currency && showMaxButton && label !== 'To' && (
              <Button onClick={onMax} scale="sm" variant="text">
                MAX
              </Button>
            )}
          </div>
        </div>        
      </div>
    </div>
    </>
  )
}
