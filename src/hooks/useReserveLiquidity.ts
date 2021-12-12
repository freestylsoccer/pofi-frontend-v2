import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getProtocolDataProvider } from 'utils/contractHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import useRefresh from './useRefresh'

type UseReserveLiquidity = {
  liquidity: BigNumber
  fetchStatus: FetchStatus
}
type UseUserReserveLiquidity = {
  aTokenBalance: BigNumber
  balanceFetchStatus: FetchStatus
}
export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export const useReserveLiquidity = (dataProviderAddress: string, reserve: string) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus
  const [liquidityState, setLiquidityState] = useState<UseReserveLiquidity>({
    liquidity: BIG_ZERO,
    fetchStatus: NOT_FETCHED,
  })  
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchLiquidity = async () => {
      const contract = getProtocolDataProvider(dataProviderAddress)
      try {
        const res = await contract.getReserveData(reserve)
        setLiquidityState({ liquidity: new BigNumber(res.availableLiquidity.toString()), fetchStatus: SUCCESS })
      } catch (e) {
        console.error(e)
        setLiquidityState((prev) => ({
          ...prev,
          fetchStatus: FAILED,
        }))
      }
    }

    if (reserve) {
      fetchLiquidity()
    }
  }, [reserve, dataProviderAddress, fastRefresh, SUCCESS, FAILED])

  return liquidityState
}
export const useReserveUserDeposited = (dataProviderAddress: string, reserve: string, user: string) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus
  const [depositedBalance, setDepositedBalanceState] = useState<UseUserReserveLiquidity>({
    aTokenBalance: BIG_ZERO,
    balanceFetchStatus: NOT_FETCHED,
  })  
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getProtocolDataProvider(dataProviderAddress)
      try {
        const res = await contract.getUserReserveData(reserve, user)
        setDepositedBalanceState({ aTokenBalance: new BigNumber(res.currentATokenBalance.toString()), balanceFetchStatus: SUCCESS })
      } catch (e) {
        console.error(e)
        setDepositedBalanceState((prev) => ({
          ...prev,
          fetchStatus: FAILED,
        }))
      }
    }

    if (reserve) {
      fetchBalance()
    }
  }, [reserve, dataProviderAddress, user, fastRefresh, SUCCESS, FAILED])

  return depositedBalance
}

