import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { MapPin, FileText } from 'react-feather'
import SimpleReactLightbox from 'simple-react-lightbox'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import useReserveLiquidity from 'hooks/useReserveLiquidity'
import { getUSDT2Addres } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { PROTOCOL_DATA_PROVIDER_ADDRESS } from 'config/constants'
import { Button, Slider } from 'uikit'
import Earn from 'assets/svg/earn.svg'
import PageLoader from 'components/Loader/PageLoader'
import MyComponent from './components/MyComponent'



const Container = styled.div.attrs(() => ({
  className: 'container',
}))`
  color: ${({ theme }) => theme.colors.text1};
`
const InfoTextPrimary = styled.span`
  color: ${({ theme }) => theme.colors.text1};
`
const InfoTextSecondary = styled.p`
  color: ${({ theme }) => theme.colors.text2};
`
const PackageTitle = styled.div`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.text1};
`
const Price = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue5};
`
const TextLeft = styled.div`
  display: flex !important;
  padding-left: 13px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin: 0px;
  text-align: left !important;
  color: ${({ theme }) => theme.colors.text2};
`
const TextRight = styled.div`
  text-align: right !important;
  padding-right: 1rem !important;
  color: ${({ theme }) => theme.colors.text1};
`
const Pricing = styled.div.attrs(() => ({
  className: 'single-pricing active mt-30',
}))`
  background: ${({ theme }) => theme.colors.bg0};
  border: solid 0.25px ${({ theme }) => theme.colors.text4};
`
const CardH3 = styled.h5`
  color: ${({ theme }) => theme.colors.text2};
`
const CardSpan = styled.span`
  color: ${({ theme }) => theme.colors.text3};
`
const AchievementsCard = styled.div.attrs(() => ({
  className: 'card',
}))`
  background: ${({ theme }) => theme.colors.bg0};
  color: ${({ theme }) => theme.colors.blue5};
  :hover {
    transform: scale(1.02);
    transition: 0.5s;
    background-color: #fff;
    box-shadow: 0px 5px 50px -8px #ddd;
  }
`
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
  width: 100%;
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
  min-width: 200px;
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

const Theter: React.FC = () => {
  const { liquidity, fetchStatus } = useReserveLiquidity(PROTOCOL_DATA_PROVIDER_ADDRESS, getUSDT2Addres())
  const { t } = useTranslation()
  
  const targeAmount = 650000 - getBalanceNumber(liquidity, 6)
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
        <div className="cover">
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
                    <MyComponent />
                  </SimpleReactLightbox>
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

      
      <div className="NnZDJ m-5">
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
                  to="/theter-reserve/add/0x080De04372D5f1E317d492645b923f6286C7eC86"
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
                <img className="iYdxMO" src="https://www.realtymogul.com/sites/default/files/taxonomy/highlights/icon_holdperiod_0.svg"alt="" />
                <PImgColTitle>
                  Distribution History
                </PImgColTitle>
                <PImgColSubtitle>
                  Since inception, MogulREIT I has distributed 57 consecutive months of distributions to investors totaling approximately $15.7 million.
                </PImgColSubtitle>
              </div>
              <div className="duLoRX">
                <img className="iYdxMO" src="https://www.realtymogul.com/sites/default/files/taxonomy/highlights/icon_diversification_0.svg" alt=""/>
                <PImgColTitle>
                  Diversified
                </PImgColTitle>
                <PImgColSubtitle>
                  Broad selection of investments across property types and geographies designed to reduce risk.
                </PImgColSubtitle>
              </div>
              <div className="jGshr">
                <img className="iYdxMO" src="https://www.realtymogul.com/sites/default/files/taxonomy/highlights/icon_income_1.svg" alt=""/>
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
              <strong>1. Elige el monto a invertir</strong>
            </div>
            <div>
              <div className="text-center pb-1">${amount.toLocaleString('en-US')}</div>
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
              <div>$100</div>
              <div>$500,000</div>
            </div>
            <div className='navy f6 fw6 mb-2 mt-4 mb3-l d-flex'>
              <div className='mr-2'>
                <strong>2. Plazo estimado para fines del cálculo</strong>
              </div>              
            </div>
            <div>
              <div className="text-center pb-1">{months+2} meses</div >
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
              <div className='gray'>3 meses</div>
              <div className='gray'>28 meses</div>
            </div>
          </div>
        </div>
      </div>  
      
      <div className='container text-center'>
        <div className='p-3'>
          <div className='row justify-content-center mt-4'>
            <table className='col-lg-3'>
              <tr>
                <td className='pb-2 text-left'>Tu inversión</td>
                <td className='w-30 pb-2 text-right' data-target='returns-calculation.investment'>${amount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</td>
              </tr>
              <tr>
                <td className='pb-2 text-left'>Rendimientos</td>
                <td className='w-30 pb-2 text-right' data-target='returns-calculation.returns'>${roi.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</td>
              </tr>
              <tr className='navy f5 fw5'>
                <td className='pb-2 text-left'>Total</td>
                <td className='w-30 pb-2 text-right' data-target='returns-calculation.subtotal'>${(amount+roi).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</td>
              </tr>
              <tr>
                <td className='pb-2 text-left'>Impuestos*</td>
                <td className='w-30 pb-2 text-right' data-target='returns-calculation.taxes'>${(roi*0.2).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</td>
              </tr>
              <tr>
                <td className='pb-2 text-left'>Comisión briq.mx*</td>
                <td className='w-30 pb-2 text-right' data-target='returns-calculation.fee'>${comission.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</td>
              </tr>
              <tr className='blue f5 fw5'>
                <td className='pb-2 text-left'>A recibir</td>
                <td className='w-30 pb-2 text-right' data-target='returns-calculation.total'>${(roi-(roi*0.02)-comission).toLocaleString('en-Us', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</td>
              </tr>
            </table>
          </div>
          
          <div className='container mt-4 mb-4'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 text-center'>
                <div className='tc mb2 mt3'>
                  <img src={Earn} width="123" height="123" alt=""/>
                </div>
                <div className='navy lh-copy tc w-70 center f2-l '>
                  Si inviertes ${amount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})} 
                  recibirás ${roi.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})} de intereses 
                  cada {months+2} meses
                  y ${amount.toLocaleString('en-US')} de tu inversión al finalizar el plazo.*
                </div>
                <div className='silver tc mt-4 f7'>
                  *Los impuestos aplican únicamente para personas físicas.
                  <br/>
                  La comisión briq.mx incluye 16% de IVA.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section id="proy-desc" className="proy-desc-area">        
        <Container>
          <div className="row">
            <div className="col-lg-8">
              <Container>
                <div className="row">
                  <div className="col-12">
                    <div className="proy-desc-content text-justify">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 mt-5">
                    <div className="row">
                      <div className="col-lg-6 proy-desc-content mt-50">
                        <ul className="clearfix">
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-icon">
                                <i className="lni-calendar">*</i>
                              </div>
                              <div className="info-text">
                                <p>
                                  <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-icon">
                                <i className="lni-phone-handset">*</i>
                              </div>
                              <div className="info-text">
                                <p>
                                  <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-icon">
                                <i className="lni-phone-handset">*</i>
                              </div>
                              <div className="info-text">
                                <p>
                                  <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-icon">
                                <i className="lni-map-marker">*</i>
                              </div>
                              <div className="info-text">
                                <p>
                                  <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 proy-desc-content mt-50">
                        <ul className="clearfix">
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-icon">
                                <i className="lni-calendar">*</i>
                              </div>
                              <div className="info-text">
                                <p>
                                  <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-icon">
                                <i className="lni-phone-handset">*</i>
                              </div>
                              <div className="info-text">
                                <p>
                                  <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-icon">
                                <i className="lni-phone-handset">*</i>
                              </div>
                              <div className="info-text">
                                <p>
                                  <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-icon">
                                <i className="lni-map-marker">*</i>
                              </div>
                              <div className="info-text">
                                <p>
                                  <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex justify-content-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
            <div className="col-lg-4">
              <div className="col-lg-12">
                <Pricing>
                  <div className="pricing-package text-center">
                    <PackageTitle>
                      <h6>${targeAmount.toLocaleString('en-US')}</h6>
                      {t('to get the minimum amount')}
                    </PackageTitle>
                  </div>
                  <div className="pricing-body">
                    <div className="advance px-3">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: `${progress}%`}}
                        >
                          <span> </span>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-text text-center pt-3">
                      <h5>{t('Amount achieved')}</h5>
                      <Price>${getBalanceNumber(liquidity, 6).toLocaleString('en-US')}</Price>
                    </div>
                    <div className="pricing-desc-content">
                      <ul className="clearfix">
                        <li>
                          <div className="single-info d-flex align-items-center">
                            <div className="pricing-text">
                              <p className="text-center">
                                <Price>15.86%</Price>
                                APY
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-info d-flex align-items-center">
                            <div className="pricing-text">
                              <p className="text-center">
                                <Price>A</Price>
                              </p>
                              <p className="pl-4">Risk Type</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <TextLeft>
                            <p>
                              <span>Lorem ipsum dolor:</span>
                            </p>
                          </TextLeft>
                        </li>
                        <li>
                          <TextRight>
                            <p>$14,500,000</p>
                          </TextRight>
                        </li>
                        <li>
                          <TextLeft>
                            <p>
                              <span>Minimum Required:</span>
                            </p>
                          </TextLeft>
                        </li>
                        <li>
                          <TextRight>
                            <p>$7,500,000</p>
                          </TextRight>
                        </li>
                        <li>
                          <TextLeft>
                            <p>
                              <span>Objective:</span>
                            </p>
                          </TextLeft>
                        </li>
                        <li>
                          <TextRight>
                            <p>Income</p>
                          </TextRight>
                        </li>
                        <li>
                          <TextLeft>
                            <p>
                              <span>Asset Type:</span>
                            </p>
                          </TextLeft>
                        </li>
                        <li>
                          <TextRight>
                            <p>Residence</p>
                          </TextRight>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="pricing-btn">
                        { getBalanceNumber(liquidity, 6) < maxAmount ? (
                          <Button
                            type="button"
                            as={Link}
                            to="/theter-reserve/add/0x080De04372D5f1E317d492645b923f6286C7eC86"
                          >
                          {t('Invest')}
                          </Button>
                        ) : getBalanceNumber(liquidity, 6) >= maxAmount && (
                          <span>{t('This opportunity is no longer receiving investments')}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Pricing>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="skills-section pt-5">
        <Container>
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-6">
              <h2 className="section-title">Lorem ipsum</h2>
              <div className="list-card">
                <span className="exp">Excepteur sint</span>
                <div>
                  <CardH3>amet, consectetur adipisicing elit</CardH3>
                  <CardSpan>Ut enim ad minim veniam, …</CardSpan>
                </div>
              </div>
              <div className="list-card">
                <span className="exp">occaecat cupidatat</span>
                <div>
                  <CardH3>quis nostrud exercitation</CardH3>
                  <CardSpan>aliquip ex ea commodo consequat.</CardSpan>
                </div>
              </div>
              <div className="list-card">
                <span className="exp">non proident</span>
                <div>
                  <CardH3>uries, but also the leap into</CardH3>
                  <CardSpan>It was popularised in the 1960s with the release of Letraset</CardSpan>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 col-xl-6">
              <h2 className="section-title">Lorem ipsum</h2>
              <div className="list-card">
                <div>
                  <CardH3>Lorem ipsum dolor sit</CardH3>
                  <CardSpan>laboris nisi ut aliquip ex ea commodo consequat.</CardSpan>
                </div>
              </div>
              <div className="list-card">
                <div>
                  <CardH3>Sed ut perspiciatis</CardH3>
                  <CardSpan>
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </CardSpan>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="achievements">
        <div className="container cards">
          <div className="row">
            <AchievementsCard>
              <div className="skill-level">
                <span>+</span>
                <h2>60</h2>
              </div>
              <div className="skill-meta">
                <h3>illo inventore veritatis</h3>
                <span>
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                </span>
              </div>
            </AchievementsCard>
            <AchievementsCard>
              <div className="skill-level">
                <h2>50</h2>
                <span>%</span>
              </div>
              <div className="skill-meta">
                <h3>dolor sit amet</h3>
                <span>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
              </div>
            </AchievementsCard>
            <AchievementsCard>
              <div className="skill-level">
                <h2>30</h2>
                <span>%</span>
              </div>
              <div className="skill-meta">
                <h3>Quis autem</h3>
                <span>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur
                </span>
              </div>
            </AchievementsCard>
            <AchievementsCard>
              <div className="skill-level">
                <h2>20</h2>
                <span>%</span>
              </div>
              <div className="skill-meta">
                <h3>At vero eos </h3>
                <span>
                  vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur
                </span>
              </div>
            </AchievementsCard>
          </div>
        </div>
      </section>
    </>
  )
}
export default Theter
