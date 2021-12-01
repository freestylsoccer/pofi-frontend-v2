import { TokenAmount, CurrencyAmount, ETHER } from '@pancakeswap/sdk'
import { useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useBorrowAllowance from './useBorrowAllowance'
import { useHasPendingApproval } from '../state/transactions/hooks'

export enum CreditDelegationState {
  UNKNOWN,
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useValidateBorrowAllowance(
  amountToApprove?: CurrencyAmount,
  spender?: string,
): [CreditDelegationState] {
  const { account } = useActiveWeb3React()
  const token = amountToApprove instanceof TokenAmount ? amountToApprove.token : undefined
  const currentAllowance = useBorrowAllowance(token, account ?? undefined, spender) // cambiar por borrowAllowance
  const pendingApproval = useHasPendingApproval(token?.address, spender)

  // check the current approval status
  const creditDelegationState: CreditDelegationState = useMemo(() => {
    if (!amountToApprove || !spender) return CreditDelegationState.UNKNOWN
    if (amountToApprove.currency === ETHER) return CreditDelegationState.APPROVED
    // we might not have enough data to know whether or not we need to approve
    if (!currentAllowance) return CreditDelegationState.UNKNOWN

    // amountToApprove will be defined if currentAllowance is
    return currentAllowance.lessThan(amountToApprove)
      ? pendingApproval
        ? CreditDelegationState.PENDING
        : CreditDelegationState.NOT_APPROVED
      : CreditDelegationState.APPROVED
  }, [amountToApprove, currentAllowance, pendingApproval, spender])

  return [creditDelegationState]
}
