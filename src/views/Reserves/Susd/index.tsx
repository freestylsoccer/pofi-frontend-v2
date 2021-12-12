import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { MapPin, FileText } from 'react-feather'
import SimpleReactLightbox from 'simple-react-lightbox'
import { Link } from 'react-router-dom'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import {useReserveLiquidity, useReserveUserDeposited} from 'hooks/useReserveLiquidity'
import { getSusdAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { PROTOCOL_DATA_PROVIDER_ADDRESS, PROJECT_SUSD } from 'config/constants'
import { Button, Slider } from 'uikit'
import Earn from 'assets/svg/earn.svg'
import distribution from 'assets/svg/distribution.svg'
import income from 'assets/svg/income.svg'
import diversification from 'assets/svg/diversification.svg'
import PageLoader from 'components/Loader/PageLoader'
import MyComponent from '../components/MyComponent'

const elements = [
  {
    src: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    caption: 'Lorem ipsum dolor sit amet',
    height: 'auto',
  },
  {
    src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    caption: 'Lorem ipsum dolor sit amet',
    height: 'auto',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    caption: 'Lorem ipsum dolor sit amet',
    height: 'auto',
  },
  {
    src: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    caption: 'Lorem ipsum dolor sit amet',
    height: 'auto',
  }, 
]

const Subtitle = styled.span`
  font-size: .75rem;
  text-transform: uppercase;
  margin: 0;
  color: #fff;
  @media screen and (min-width: 60em) {
    font-size: .875rem;
  }
`
const Title = styled.h1`
  font-size: 1.5rem;margin-top: .25rem !important;
  margin-bottom: .25rem !important;
  color: #fff !important;
  line-height: 1.25 !important;
`
const NormalText = styled.div`
  font-size: .75rem;
  margin: 0;
  color: #fff;
  @media screen and (min-width: 60em) {
    font-weight: 300;
    font-size: .875rem;
  }
`
const NormalTextSpanI = styled.span`
  padding-right: .25rem;
  font-size: .75rem;
  color: #fff;
  @media screen and (min-width: 60em) {
    font-weight: 300;
    font-size: .875rem;
  }
`
const NormalTextSpanII = styled.span`
  padding-left: .25rem;
  font-size: .75rem;
  color: #fff;
  @media screen and (min-width: 60em) {
    font-weight: 300;
    font-size: .875rem;
  }
`
const SecondaryNav = styled.div`
  background-color: ${({ theme }) => theme.colors.bg0};
  text-align: center;
  visibility: visible;
  display: block;
  opacity: 1;
  z-index: auto;
  overflow: visible;
  box-sizing: content-box;
  transition: all 0s ease 0s;
`
const NavButton = styled.button`
  font-size: 10px;
  max-width: 260px;
  min-width: 160px;
  margin-bottom: 0px;
  padding: 15px 20px;
  border-width: 3px 0px 0px;
  border-style: solid none none;
  border-right-color: initial;
  border-bottom-color: initial;
  border-left-color: initial;
  border-image: initial;
  background-color: ${({ theme }) => theme.colors.bg0};
  color: ${({ theme }) => theme.colors.text1};
  background-color: ${({ theme }) => theme.colors.bg0};
  text-align: center;
  line-height: 1.5em;
  font-weight: 500;
  letter-spacing: 0.25em;
  -webkit-font-smoothing: antialiased;
  font-family: "Gotham SSm A", "Gotham SSm B", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-style: normal;
  white-space: normal;
  display: inline-block;
  opacity: 1;
  box-sizing: border-box;
  text-decoration: none;
  transition: color 0.2s linear 0s, background-color 0.2s linear 0s, border-color 0.2s linear 0s, fill 0.2s linear 0s, border 500ms ease-out 0s;
  outline: none;  
`
const PTitle = styled.div`
  font-size: 28px;
  margin: 0px 20px 30px;
  color: ${({ theme }) => theme.colors.text1};
  text-align: center;
  font-weight: normal;
  letter-spacing: 0.036em;
  -webkit-font-smoothing: antialiased;
  text-indent: 0px;
  font-style: normal;
  white-space: normal;
  text-shadow: inherit;
  display: block;
  opacity: 1;
  box-sizing: border-box;
  transition: none 0s ease 0s;
  visibility: visible;
`
const PSubtitle = styled.p`
  font-size: .875rem;
  margin: 0px 40px;
  color: ${({ theme }) => theme.colors.text1};
  text-align: center;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  text-indent: 0px;
  font-style: normal;
  white-space: normal;
  text-shadow: inherit;
  display: inline;
  opacity: 1;
  box-sizing: border-box;
  transition: opacity 75ms linear 75ms;
  visibility: visible;
`
const PCenter = styled.div`
  font-size: .875rem;
  margin: 40px;
  color: ${({ theme }) => theme.colors.text1};
  text-align: center;
  line-height: 1.75;
  font-weight: 300;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  text-indent: 0px;
  text-transform: none;
  font-style: normal;
  white-space: normal;
  text-shadow: inherit;
  display: inline;
  opacity: 1;
  box-sizing: border-box;
  transition: opacity 75ms linear 150ms;
  visibility: visible;
`
const PImgColTitle = styled.p`
  font-size: 0.975rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.text1};
  text-align: center;
  line-height: 1.5;
  font-weight: normal;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  text-indent: 0px;
  text-transform: uppercase;
  font-style: normal;
  white-space: normal;
  text-shadow: inherit;
  display: inline;
  opacity: 1;
  box-sizing: border-box;
  transition: none 0s ease 0s;
  visibility: visible;
`
const PImgColSubtitle = styled.p`
  font-size: 0.875rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.text1};
  text-align: center;
  line-height: 1.75;
  font-weight: normal;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  text-indent: 0px;
  text-transform: none;
  font-style: normal;
  white-space: normal;
  text-shadow: inherit;
  display: inline;
  opacity: 1;
  box-sizing: border-box;
  transition: none 0s ease 0s;
  visibility: visible;
`
const TextStrong = styled.p`
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.text1};
`
const SliderLabel = styled.p`
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: .25rem !important;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text1};
`
const TextDefault = styled.p`
  color: ${({ theme }) => theme.colors.text1};
`
const TdTextLeft = styled.td`
  text-align: left !important;
  padding-bottom: .5rem !important;
  color: ${({ theme }) => theme.colors.text1};
`
const TdTextRight = styled.td`
  text-align: right !important;
  padding-bottom: .5rem !important;
  color: ${({ theme }) => theme.colors.text1};
`
const ReturnsText = styled.div`
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.text2};
`
const ReturnsTextSpanI = styled.span`
  border-bottom-style: solid;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text1};
  font-weight: 600;
  border-width: .125rem;
  border-color: ${({ theme }) => theme.colors.text2};
`
const ReturnsTextSpanII = styled.span`
  color: ${({ theme }) => theme.colors.text1};
  font-weight: 600;
`
const ReturnsTextSpanIV = styled.span`
  color: ${({ theme }) => theme.colors.text1};
  font-weight: 600;
`
const ReturnsTextIII = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text1};
`
const ReturnsInfoText = styled.div`
  font-size: .75rem;
  margin-top: 1.5rem !important;
  color: ${({ theme }) => theme.colors.text3};
`
const NormalTextSpanIII = styled.span`
  padding-right: .25rem;
  font-size: 1rem;
  color: #fff;
  @media screen and (min-width: 60em) {
    font-weight: 300;
    font-size: 1.375rem;
  }
`

const TrueUsd: React.FC = () => {
  const { account } = useActiveWeb3React()
  const { liquidity, fetchStatus } = useReserveLiquidity(PROTOCOL_DATA_PROVIDER_ADDRESS, PROJECT_SUSD)
  const { t } = useTranslation()
  
  const decimals = 18;
  const projectTotalDeposited = getBalanceNumber(liquidity, decimals);
  const { aTokenBalance, balanceFetchStatus } = useReserveUserDeposited(PROTOCOL_DATA_PROVIDER_ADDRESS, PROJECT_SUSD, account)
  const targeAmount = 650000 - getBalanceNumber(liquidity, 18)
  const maxAmount = 750000
  const progress = (getBalanceNumber(liquidity, 6) / 650000) * 100
  const [amount, setAmount] = useState(100)
  const [months, setMonths] = useState(1)
  const apy = 0.125
  const roi = amount * (((months+2) * apy) / 12)
  const comission = ((((amount*0.01)/12) * (months+2)) + ((((amount*0.01)/12) * (months+2))*0.16) + (roi*0.01) + ((roi*0.01)*0.16))

  if(fetchStatus !== "success") {
    return <PageLoader />
  }

  return(
    <>
      <section className="reserve">
        <div className="cover-tusd">
          <div className="bg-reserve">
            <div className="container content-end">
              <div className="col-xl-5 col-lg-6">
                <div className="pb-3">
                  <Subtitle>Lorem ipsum..</Subtitle>
                  <Title>Lorem ipsum dolor sit..</Title>
                  <NormalText>
                    <NormalTextSpanI>Campain 1</NormalTextSpanI>
                    <span><MapPin width="12" /></span>
                    <NormalTextSpanII>Tulum </NormalTextSpanII>
                    • By
                    <a target="_blank" href="/desarrolladores/pofi"> Pofi</a>
                  </NormalText>
                  <SimpleReactLightbox>
                    <MyComponent elements={elements}/>
                  </SimpleReactLightbox>
                </div>
              </div>
              <div>
                <div className="pb-3">
                  <Subtitle>Total Deposited</Subtitle>
                  <Title>${`${projectTotalDeposited.toLocaleString('en-US')} sUSD`}</Title>
                  <NormalText>
                    <NormalTextSpanIII>You have deposited: </NormalTextSpanIII>
                    <NormalTextSpanIII>${`${getBalanceNumber(aTokenBalance, decimals).toLocaleString('en-US')} sUSD`}</NormalTextSpanIII>
                  </NormalText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="jnfVXW">
        <div className="kAufvr">
          <div className="jHsIAQ">
            <div className="fwWFNh">
              <span className="fZGRWW">
                <FileText />
              </span>
              <a className="jaXTYb" href="/materials/pofi/offering_circular.pdf">Offering Circular</a>
            </div>
          </div>
          <div className="jHsIAQ">
            <div className="fwWFNh">
              <span className="fZGRWW">
                <FileText />
              </span>
              <a className="jaXTYb" href="/materials/pofi/brochure.pdf">Investor Brochure</a>
            </div>
          </div>
          <div className="jHsIAQ">
            <div className="fwWFNh">
              <span className="fZGRWW">
                <FileText />
              </span>
              <button className="dSVVHs" type="button">Contact Investor Relations</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="NnZDJ m-5 justify-content-center">
        <SecondaryNav>
          <div className="gYxduF">
            <div className="jvpGIb">
              <button type="button" className="ctGDLs">
                Overview
              </button>
              <NavButton>Strategy</NavButton>
              <NavButton>Performance</NavButton>
              <NavButton>Portfolio</NavButton>
              <NavButton>FAQS</NavButton>
              <NavButton>Resources</NavButton>
            </div>
            <div className="iXjtZw" >
              { getBalanceNumber(liquidity, 6) < maxAmount ? (
                <Button
                  type="button"
                  as={Link}
                  to={`/add/${getSusdAddress()}/${PROJECT_SUSD}`}
                >
                {t('Invest')}
                </Button>
              ) : getBalanceNumber(liquidity, 6) >= maxAmount && (
                <span>{t('This opportunity is no longer receiving investments')}</span>
              )}
            </div>
          </div>
        </SecondaryNav>
      </div>

      <div className="gpMxXk">
        <div className="fuJzBa">
          <PTitle>
            Overview
          </PTitle>
          <div className="esEBud">
            <PSubtitle>
              Since inception, the REIT has distributed between 6% and 8% annualized based on purchase price.
            </PSubtitle>
            <PCenter>
              MogulREIT I is a public, non-traded REIT making debt and equity investments in commercial real estate properties diversified by investment, geography and property type. The REIT’s primary focus is providing monthly income to investors by rigorously evaluating numerous investment opportunities to find those that can support the REIT’s distribution target.
            </PCenter>
            <div className="dAORTk">
              <div className="fMTQqS">
                <img className="iYdxMO" src={distribution} alt="" />
                <PImgColTitle>
                  Distribution History
                </PImgColTitle>
                <PImgColSubtitle>
                  Since inception, MogulREIT I has distributed 57 consecutive months of distributions to investors totaling approximately $15.7 million.
                </PImgColSubtitle>
              </div>
              <div className="duLoRX">
                <img className="iYdxMO" src={diversification} alt=""/>
                <PImgColTitle>
                  Diversified
                </PImgColTitle>
                <PImgColSubtitle>
                  Broad selection of investments across property types and geographies designed to reduce risk.
                </PImgColSubtitle>
              </div>
              <div className="jGshr">
                <img className="iYdxMO" src={income} alt=""/>
                <PImgColTitle>
                  Passive Income
                </PImgColTitle>
                <PImgColSubtitle>
                  Cash flow from debt and equity investments in commercial real estate properties.
                </PImgColSubtitle>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-4'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='f6 mb-2 pt-3'>
              <TextStrong>1. Elige el monto a invertir</TextStrong>
            </div>
            <div>
              <div className="text-center pb-1">
                <SliderLabel>
                  ${amount.toLocaleString('en-US')}
                </SliderLabel>
              </div>
              <Slider 
                onValueChanged={(value) => setAmount(Math.ceil(value))}
                name="amount"
                value={amount}
                min={100}
                max={500000}
                step={100}
              />
            </div>
            <div className='mt-2 f6 d-flex justify-content-between'>
              <div>
                <TextDefault>
                  $100
                </TextDefault>
              </div>
              <div>
                <TextDefault>
                  $500,000
                </TextDefault>
              </div>
            </div>
            <div className='navy f6 fw6 mb-2 mt-4 mb3-l d-flex'>
              <div className='mr-2'>
                <TextStrong>2. Plazo estimado para fines del cálculo</TextStrong>
              </div>              
            </div>
            <div>
              <div className="text-center pb-1">
                <SliderLabel>
                  {months+2} meses
                </SliderLabel>
              </div >
              <Slider 
                onValueChanged={(value) => setMonths(Math.ceil(value))}
                name="months"
                value={months}
                min={1}
                max={26}
                step={1}
              />
            </div>
            <div className='mt-2 f6 d-flex justify-content-between'>
              <div>
                <TextDefault>
                  3 meses
                </TextDefault>
              </div>
              <div>
                <TextDefault>
                  28 meses
                </TextDefault>
              </div>
            </div>
          </div>
        </div>
      </div>  
      
      <div className='container text-center'>
        <div className='p-3'>
          <div className='row justify-content-center mt-4'>
            <table className='col-lg-3'>
              <tbody>
                <tr>
                  <TdTextLeft>Tu inversión</TdTextLeft>
                  <TdTextRight>${amount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</TdTextRight>
                </tr>
                <tr>
                  <TdTextLeft>Rendimientos</TdTextLeft>
                  <TdTextRight>${roi.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</TdTextRight>
                </tr>
                <tr className='f5 fw5'>
                  <TdTextLeft>Total</TdTextLeft>
                  <TdTextRight>${(amount+roi).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</TdTextRight>
                </tr>
                <tr>
                  <TdTextLeft>Impuestos*</TdTextLeft>
                  <TdTextRight>${(roi*0.2).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</TdTextRight>
                </tr>
                <tr>
                  <TdTextLeft>Comisión briq.mx*</TdTextLeft>
                  <TdTextRight>${comission.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</TdTextRight>
                </tr>
                <tr className='f5 fw5'>
                  <TdTextLeft>A recibir</TdTextLeft>
                  <TdTextRight>${(roi-(roi*0.02)-comission).toLocaleString('en-Us', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</TdTextRight>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className='container mt-4 mb-4'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 text-center'>
                <div className='tc mb2 mt3'>
                  <img src={Earn} width="123" height="123" alt=""/>
                </div>
                <ReturnsText>
                  Si inviertes 
                  <br/>
                  <ReturnsTextSpanI>${amount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})} </ReturnsTextSpanI>
                  <br/>
                  recibirás 
                  <br/>
                  <ReturnsTextSpanII>${roi.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})} </ReturnsTextSpanII>
                  de intereses cada 
                  <br/>
                  <ReturnsTextIII>{months+2} meses </ReturnsTextIII>
                  y <ReturnsTextSpanIV>${amount.toLocaleString('en-US')} </ReturnsTextSpanIV>de
                  <br/>
                  tu inversión al finalizar el plazo.*
                </ReturnsText>
                <ReturnsInfoText>
                  *Los impuestos aplican únicamente para personas físicas.
                  <br/>
                  La comisión briq.mx incluye 16% de IVA.
                </ReturnsInfoText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TrueUsd
