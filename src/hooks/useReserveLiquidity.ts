import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getBep20Contract } from 'utils/contractHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import useRefresh from './useRefresh'

type UseReserveLiquidity = {
  balance: BigNumber
  fetchStatus: FetchStatus
}

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
}

const useReserveLiquidity = (tokenAddress: string, account: string) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus
  const [balanceState, setBalanceState] = useState<UseReserveLiquidity>({
    balance: BIG_ZERO,
    fetchStatus: NOT_FETCHED,
  })  
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress)
      try {
        const res = await contract.balanceOf(account)
        setBalanceState({ balance: new BigNumber(res.toString()), fetchStatus: SUCCESS })
      } catch (e) {
        console.error(e)
        setBalanceState((prev) => ({
          ...prev,
          fetchStatus: FAILED,
        }))
      }
    }

    if (account) {
      fetchBalance()
    }
  }, [account, tokenAddress, fastRefresh, SUCCESS, FAILED])

  return balanceState
}

export default useReserveLiquidity
