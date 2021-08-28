import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`


const Home: React.FC = () => {  
  const { t } = useTranslation()
  return (
    <Page>
      <StyledNotFound>
        <Heading scale="xxl">{t('coming soon...')}</Heading>
      </StyledNotFound>
    </Page>
  )
}

export default Home
