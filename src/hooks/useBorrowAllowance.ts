import { Token, TokenAmount } from '@pancakeswap/sdk'
import { useMemo } from 'react'

import { useStableDebtTokenContract } from './useContract'
import { useSingleCallResult } from '../state/multicall/hooks'

function useBorrowAllowance(token?: Token, owner?: string, spender?: string): TokenAmount | undefined {
  const contract = useStableDebtTokenContract(token?.address, false)

  const inputs = useMemo(() => [owner, spender], [owner, spender])
  const allowance = useSingleCallResult(contract, 'borrowAllowance', inputs).result

  return useMemo(
    () => (token && allowance ? new TokenAmount(token, allowance.toString()) : undefined),
    [token, allowance],
  )
}

export default useBorrowAllowance
