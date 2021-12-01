import { MaxUint256 } from '@ethersproject/constants'
import { TransactionResponse } from '@ethersproject/providers'
import { Trade, TokenAmount, CurrencyAmount, ETHER } from '@pancakeswap/sdk'
import { useCallback, useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { ROUTER_ADDRESS } from '../config/constants'
import useBorrowAllowance from './useBorrowAllowance'
import { Field } from '../state/swap/actions'
import { useTransactionAdder, useHasPendingApproval } from '../state/transactions/hooks'
import { computeSlippageAdjustedAmounts } from '../utils/prices'
import { calculateGasMargin } from '../utils'
import { useStableDebtTokenContract } from './useContract'
import { useCallWithGasPrice } from './useCallWithGasPrice'

export enum ApprovalDelegationState {
  UNKNOWN,
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveDelegation(
  amountToApprove?: CurrencyAmount,
  spender?: string,
): [ApprovalDelegationState, () => Promise<void>] {
  const { account } = useActiveWeb3React()
  const { callWithGasPrice } = useCallWithGasPrice()
  const token = amountToApprove instanceof TokenAmount ? amountToApprove.token : undefined
  const currentAllowance = useBorrowAllowance(token, account ?? undefined, spender) // cambiar por borrowAllowance
  const pendingApproval = useHasPendingApproval(token?.address, spender)

  // check the current approval status
  const approvalDelegationState: ApprovalDelegationState = useMemo(() => {
    if (!amountToApprove || !spender) return ApprovalDelegationState.UNKNOWN
    if (amountToApprove.currency === ETHER) return ApprovalDelegationState.APPROVED
    // we might not have enough data to know whether or not we need to approve
    if (!currentAllowance) return ApprovalDelegationState.UNKNOWN

    // amountToApprove will be defined if currentAllowance is
    return currentAllowance.lessThan(amountToApprove)
      ? pendingApproval
        ? ApprovalDelegationState.PENDING
        : ApprovalDelegationState.NOT_APPROVED
      : ApprovalDelegationState.APPROVED
  }, [amountToApprove, currentAllowance, pendingApproval, spender])

  const tokenContract = useStableDebtTokenContract(token?.address)
  const addTransaction = useTransactionAdder()

  const approveDelegation = useCallback(async (): Promise<void> => {
    if (approvalDelegationState !== ApprovalDelegationState.NOT_APPROVED) {
      console.error('approve delegation was called unnecessarily')
      return
    }
    if (!token) {
      console.error('no token')
      return
    }

    if (!tokenContract) {
      console.error('tokenContract is null')
      return
    }

    if (!amountToApprove) {
      console.error('missing amount to approve')
      return
    }

    if (!spender) {
      console.error('no delegatee')
      return
    }

    let useExact = false

    const estimatedGas = await tokenContract.estimateGas.approveDelegation(spender, MaxUint256).catch(() => {
      // general fallback for tokens who restrict approval amounts
      useExact = true
      return tokenContract.estimateGas.approveDelegation(spender, amountToApprove.raw.toString())
    })

    // eslint-disable-next-line consistent-return
    return callWithGasPrice(
      tokenContract,
      'approveDelegation',
      [spender, useExact ? amountToApprove.raw.toString() : MaxUint256],
      {
        gasLimit: calculateGasMargin(estimatedGas),
      },
    )
      .then((response: TransactionResponse) => {
        addTransaction(response, {
          summary: `Approve Delegation ${amountToApprove.currency.symbol}`,
          approval: { tokenAddress: token.address, spender },
        })
      })
      .catch((error: Error) => {
        console.error('Failed to approve delegation token', error)
        throw error
      })
  }, [approvalDelegationState, token, tokenContract, amountToApprove, spender, addTransaction, callWithGasPrice])

  return [approvalDelegationState, approveDelegation]
}
