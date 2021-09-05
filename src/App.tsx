import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components/macro'
import useEagerConnect from 'hooks/useEagerConnect'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks'
import { useFetchProfile } from 'state/profile/hooks'
import { ResetCSS } from 'uikit'
import Header from 'components/Header'
import GlobalStyle from './style/Global'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import PageLoader from './components/Loader/PageLoader'
import history from './routerHistory'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))
const Markets = lazy(() => import('./views/Markets'))
const Theter = lazy(() => import('./views/Reserves/Theter'))
const Invest = lazy(() => import('./views/Reserves/Theter/components/Invest'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`

const App: React.FC = () => {
  usePollBlockNumber()
  useEagerConnect()
  useFetchProfile()
  usePollCoreFarmData()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <HeaderWrapper>
       <Header />
      </HeaderWrapper>
      
      <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/theter-reserve" exact>
              <Theter />
            </Route>
            <Route path="/markets" exact>
              <Markets />
            </Route>

            {/* Using this format because these components use routes injected props. We need to rework them with hooks */}
            <Route exact path="/theter-reserve/add/:currencyIdA" component={Invest} />

            {/* Redirect */}
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
    </Router>
  )
}

export default React.memo(App)
