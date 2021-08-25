import React from 'react'
import { Currency, Pair } from '@pancakeswap/sdk'
import { Button, ChevronDownIcon, Text, useModal, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import { CurrencyLogo, DoubleCurrencyLogo } from '../Logo'

import { RowBetween } from '../Layout/Row'
import { Input as NumericalInput } from './NumericalInput'

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`
const CurrencySelectButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })`
  padding: 0 0.5rem;
`
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
`
const InputPanel = styled.div<{ hideInput?: boolean }>`
  max-width: 350px;
  border: 1px solid rgb(56, 61, 8);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 15px;
  border-radius: 2px;
  transition: all 0.2s ease 0s;
`
const Container = styled.div<{ hideInput: boolean }>`
  border-radius: 0px;
`
interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  hideInput?: boolean
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
}
export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = true,
  hideBalance = false,
  pair = null, // used for double token logo
  hideInput = false,
  otherCurrency,
  id,
  showCommonBases,
}: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()
  const translatedLabel = label || t('Input')

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />,
  )

  return (
    <>
    <div className="basic-form-inner mb-3">
      <div className="amount-field-inner">
        <div className="row-amount-field">
          <div className="row-title-inner">
            <div className="row-title">Available to deposit</div>
          </div>
          <div className="row-content">
            <div className="content-value">
              <div className="content-value-line">                
                {account && (
                  <Text onClick={onMax} fontSize="14px" style={{ display: 'inline', cursor: 'pointer' }}>
                    {!hideBalance && !!currency && selectedCurrencyBalance
                      ? t('%amount%', { amount: selectedCurrencyBalance?.toSignificant(6) ?? '' })
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
