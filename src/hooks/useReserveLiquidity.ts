import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getProtocolDataProvider } from 'utils/contractHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import useRefresh from './useRefresh'

type UseReserveLiquidity = {
  liquidity: BigNumber
  fetchStatus: FetchStatus
}

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
}

const useReserveLiquidity = (dataProviderAddress: string, reserve: string) => {
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

export default useReserveLiquidity
