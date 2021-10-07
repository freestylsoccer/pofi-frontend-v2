import { Currency, ETHER, Token } from '@pancakeswap/sdk'
import { BinanceIcon } from '@pancakeswap/uikit'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import getTokenLogoURL from '../../utils/getTokenLogoURL'
import Logo from './Logo'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }
      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    return <BinanceIcon width={size} style={style} />
  }

  if (currency.name === "USDT") {    
    return <StyledLogo size={size} srcs={["data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzI2QTE3QiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNy45MjIgMTcuMzgzdi0uMDAyYy0uMTEuMDA4LS42NzcuMDQyLTEuOTQyLjA0Mi0xLjAxIDAtMS43MjEtLjAzLTEuOTcxLS4wNDJ2LjAwM2MtMy44ODgtLjE3MS02Ljc5LS44NDgtNi43OS0xLjY1OCAwLS44MDkgMi45MDItMS40ODYgNi43OS0xLjY2djIuNjQ0Yy4yNTQuMDE4Ljk4Mi4wNjEgMS45ODguMDYxIDEuMjA3IDAgMS44MTItLjA1IDEuOTI1LS4wNnYtMi42NDNjMy44OC4xNzMgNi43NzUuODUgNi43NzUgMS42NTggMCAuODEtMi44OTUgMS40ODUtNi43NzUgMS42NTdtMC0zLjU5di0yLjM2Nmg1LjQxNFY3LjgxOUg4LjU5NXYzLjYwOGg1LjQxNHYyLjM2NWMtNC40LjIwMi03LjcwOSAxLjA3NC03LjcwOSAyLjExOCAwIDEuMDQ0IDMuMzA5IDEuOTE1IDcuNzA5IDIuMTE4djcuNTgyaDMuOTEzdi03LjU4NGM0LjM5My0uMjAyIDcuNjk0LTEuMDczIDcuNjk0LTIuMTE2IDAtMS4wNDMtMy4zMDEtMS45MTQtNy42OTQtMi4xMTciLz48L2c+PC9zdmc+"]} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  }
  if (currency.name === "TUSD") {    
    return <StyledLogo size={size} srcs={["data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJUVVNEIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MDAgNTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MHtmaWxsOiMwMDI4Njh9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBpZD0iQ29pbl9CRyIgZD0iTTI1MCA1MDBDMTEyLjUgNTAwIDAgMzg3LjUgMCAyNTBTMTEyLjUgMCAyNTAgMHMyNTAgMTEyLjUgMjUwIDI1MC0xMTIuNSAyNTAtMjUwIDI1MHoiIGNsYXNzPSJzdDAiLz48cGF0aCBpZD0iQkdfMV8iIGQ9Ik0zNzYgNDAwSDEyNGMtMTMuMiAwLTI0LTEwLjgtMjQtMjRWMTI0YzAtMTMuMiAxMC44LTI0IDI0LTI0aDI1MmMxMy4yIDAgMjQgMTAuOCAyNCAyNHYyNTJjMCAxMy4yLTEwLjggMjQtMjQgMjR6IiBjbGFzcz0ic3QxIi8+PHBhdGggZD0iTTE1OC41NCAzNjkuOGMtLjc5IDAtMS40My0uNzItMS40My0xLjUxdi00MC4zMWMwLS43OS0uNjQtMS41MS0xLjQzLTEuNTFoLTE0LjIzYy0uOCAwLTEuNTEtLjY0LTEuNTEtMS40M3YtNy43OWMwLS43OS43Mi0xLjUxIDEuNTEtMS41MWg0My44Yy43OSAwIDEuNTEuNzEgMS41MSAxLjUxdjcuNzljMCAuNzktLjcyIDEuNDMtMS41MSAxLjQzSDE3MS4xYy0uNzkgMC0xLjUxLjcxLTEuNTEgMS41MXY0MC4zMWMwIC43OS0uNjQgMS41MS0xLjQzIDEuNTFoLTkuNjJ6bTcxLjk0LTUyLjU1YzAtLjc5LjY0LTEuNTEgMS40My0xLjUxaDkuNTRjLjc5IDAgMS41MS43MSAxLjUxIDEuNTF2MjcuNTFjMCAxNi4zLTkuMjIgMjUuNzYtMjMuODUgMjUuNzYtMTQuNTUgMC0yMy42OS05LjQ2LTIzLjY5LTI1Ljc2di0yNy41MWMwLS43OS42NC0xLjUxIDEuNDMtMS41MWg5LjU0Yy43OSAwIDEuNTEuNzEgMS41MSAxLjUxdjI3LjljMCA4LjAzIDQuMTMgMTMuNzUgMTEuMjkgMTMuNzVzMTEuMjktNS43MiAxMS4yOS0xMy43NXYtMjcuOXptNTYuMjkgMTYuMTRjLTEuMjcgMC0xLjY3LS40OC0yLjE1LTEuNDMtMS42Ny0zLjktNS4zMy02LjM2LTEwLjg5LTYuMzYtNS4wMSAwLTkuMjIgMS43NS05LjIyIDUuMDkgMCAzLjY2IDMuOSA1LjE3IDEyLjQ4IDYuMiAxMy4wNCAxLjUxIDIwLjUxIDUuNDkgMjAuNTEgMTUuODIgMCAxMS42MS0xMC4xOCAxNy43My0yMy4yMSAxNy43My0xMS4yOSAwLTIwLjk5LTUuNDktMjIuNS0xNy4wMS0uMTYtMS4xMS40LTEuNTEgMS41MS0xLjUxaDguNzVjMS4xMSAwIDEuNzUuNDggMi4wNyAxLjM1IDEuMTkgMy44MiA1LjI1IDYuNzYgMTEuMTMgNi43NiA1LjE3IDAgOS43LTEuOTEgOS43LTUuOTYgMC00Ljg1LTQuNzctNS43Mi0xNC4zMS02LjkyLTEwLjk3LTEuNDMtMTguNi00LjYxLTE4LjYtMTQuNzFzOC42Ny0xNy4zMyAyMi4yNi0xNy4zM2MxMi4yNCAwIDIwLjc1IDYuNiAyMi41IDE2LjQ2LjI0IDEuMTEtLjA4IDEuODMtMS4yNyAxLjgzaC04Ljc2em0yMS41NCAzNi40MWMtLjc5IDAtMS40My0uNzItMS40My0xLjUxdi01MS4wNGMwLS43OS42NC0xLjUxIDEuNDMtMS41MWgyMS42MmMxNi4wNiAwIDI4LjU0IDExLjA1IDI4LjU0IDI3LjE5IDAgMTUuOS0xMi4zMiAyNi44Ny0yOC41NCAyNi44N2gtMjEuNjJ6bTIxLjYyLTEwLjc0YzguNjcgMCAxNS40Mi02Ljg0IDE1LjQyLTE2LjNzLTYuNzYtMTYuMy0xNS41LTE2LjNoLTguOThjLS43OSAwLTEuNDMuNzEtMS40MyAxLjUxdjI5LjY1YzAgLjc5LjY0IDEuNDMgMS40MyAxLjQzaDkuMDZ6IiBjbGFzcz0ic3QwIi8+PHBhdGggaWQ9IkJHIiBkPSJNMzkyIDI4NkgxMDhjLTIuMiAwLTQtMS44LTQtNFYxMjRjMC0xMSA5LTIwIDIwLTIwaDI1MmMxMSAwIDIwIDkgMjAgMjB2MTU4YzAgMi4yLTEuOCA0LTQgNHoiIGNsYXNzPSJzdDAiLz48cGF0aCBpZD0iX3g3Q18iIGQ9Ik0yNjQuNzMgMjUzLjU2aC0yNmMtMS42NSAwLTMtMS4zNS0zLTN2LTExMGMwLTEuNjUgMS4zNS0zIDMtM2gyNmMxLjY1IDAgMyAxLjM1IDMgM3YxMTBjMCAxLjY1LTEuMzUgMy0zIDN6IiBjbGFzcz0ic3QxIi8+PHBhdGggaWQ9Il94MjAxNF8iIGQ9Ik0zMDkgMTY5LjU2SDE5MWMtMS42NSAwLTMtMS4zNS0zLTN2LTI2YzAtMS42NSAxLjM1LTMgMy0zaDExOGMxLjY1IDAgMyAxLjM1IDMgM3YyNmMwIDEuNjUtMS4zNSAzLTMgM3oiIGNsYXNzPSJzdDEiLz48L3N2Zz4="]} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  }
  
  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
