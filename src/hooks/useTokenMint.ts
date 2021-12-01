import { BigNumber } from '@ethersproject/bignumber'
import { useTokenContract } from './useContract'
import { useSingleCallResult } from '../state/multicall/hooks'

// returns undefined if input token is undefined, or fails to get token contract,
// or contract total supply cannot be fetched
function useTokenMint(token?: string): boolean | undefined {
  const contract = useTokenContract(token, false)

  const mint: BigNumber = useSingleCallResult(contract, 'mint')?.result?.[0]

  return token && mint ? true : undefined
}

export default useTokenMint
