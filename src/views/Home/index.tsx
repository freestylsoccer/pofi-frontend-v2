import React from 'react'
import { MapPin, DollarSign, TrendingUp } from 'react-feather'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Button } from 'uikit'
import myVideo from 'assets/video/myvideo.mp4'
import step1 from 'assets/svg/step1.svg'
import step2 from 'assets/svg/step2.svg'
import step3 from 'assets/svg/step3.svg'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Usdt from 'assets/svg/usdt-icon.svg'
import Busd from 'assets/svg/busd-icon.svg'
import Tusd from 'assets/svg/tusd-icon.svg'

const SectionI = styled.div`
  -webkit-flex-direction:column;
  -ms-flex-direction:column;
  flex-direction:column;
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  box-sizing:border-box;
  position:static;
  opacity:1;
  -webkit-transition:all 0s 0s ease;
  transition:all 0s 0s ease;
  z-index:auto;
  color: ${({ theme }) => theme.colors.text1};

  @media screen and (min-width:640px) {  
    -webkit-flex-direction:column;
    -ms-flex-direction:column;
    flex-direction:column;
  }

  @media screen and (min-width:832px) {
    -webkit-flex-direction:row;
    -ms-flex-direction:row;
    flex-direction:row;
  }

  @media screen and (min-width:1024px) {
    -webkit-flex-direction:row;
    -ms-flex-direction:row;
    flex-direction:row;
  }
  @media screen and (min-width:1920px) {
    -webkit-flex-direction:row;
    -ms-flex-direction:row;
    flex-direction:row;
  }

  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionIRigth = styled.div`
  padding-bottom:0px;
  padding-top:5rem;
  padding-left:15%;
  padding-right:15%;
  width:100%;
  visibility:visible;
  display:block;
  opacity:1;
  z-index:auto;
  overflow-x:visible;
  overflow-y:visible;
  box-sizing:border-box;
  -webkit-transition:all 0s 0s ease;
  transition:all 0s 0s ease;

  @media screen and (min-width:640px) {
    padding-bottom:0px;
    padding-top:5rem;
    padding-left:25%;
    padding-right:25%;
  }
  @media screen and (min-width:832px) {
    padding-bottom:3rem;
    padding-top:5rem;
    padding-left:5%;
    padding-right:5%;
  }
  @media screen and (min-width:1024px) {
    padding-bottom:5rem;
    padding-top:8rem;
    padding-left:5%;
    padding-right:5%;
  }
  @media screen and (min-width:1920px) {
    padding-bottom:5rem;
    padding-top:8rem;
    padding-left:5%;
    padding-right:5%;
  }
  @media screen and (min-width:640px) {
    width:100%;
  }
  @media screen and (min-width:832px) {
    width:50%;
  }
  @media screen and (min-width:1024px) {
    width:50%;
  }
  @media screen and (min-width:1920px) {
    width:50%;
  }
  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionIRigthSubI = styled.div`
  -webkit-flex-direction:column;
  -ms-flex-direction:column;
  flex-direction:column;
  -webkit-align-items:flex-end;
  -webkit-box-align:flex-end;
  -ms-flex-align:flex-end;
  align-items:flex-end;
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  box-sizing:border-box;
  position:static;
  opacity:1;
  -webkit-transition:all 0s 0s ease;
  transition:all 0s 0s ease;
  z-index:auto;

  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionIRigthSubII = styled.div`
  max-width:100%;
  -webkit-flex-direction:column;
  -ms-flex-direction:column;
  flex-direction:column;
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  box-sizing:border-box;
  position:static;
  opacity:1;
  -webkit-transition:all 0s 0s ease;
  transition:all 0s 0s ease;
  z-index:auto;

  @media screen and (min-width:640px) {
    max-width:100%;
  }
  @media screen and (min-width:832px) {
    max-width:320px;
  }
  @media screen and (min-width:1024px) {
    max-width:400px;
  }
  @media screen and (min-width:1920px) {
    max-width:540px;
  }
  
  :hover {
  box-shadow:none;
  cursor:auto;
  }
`
const SectionIRigthSubIIP = styled.p`
  font-size:28px;
  margin:0px;
  margin-bottom:1em;
  color: ${({ theme }) => theme.colors.text1};
  font-weight:normal;
  -webkit-letter-spacing:0.036em;
  -moz-letter-spacing:0.036em;
  -ms-letter-spacing:0.036em;
  letter-spacing:0.036em;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-indent:0;
  text-transform:uppercase;
  font-style:normal;
  white-space:normal;
  text-shadow:inherit;
  display:inline;
  box-sizing:border-box;
  -webkit-transition:opacity 75ms 75ms linear;
  transition:opacity 75ms 75ms linear;
  visibility:visible;

  @media screen and (min-width:640px) {
    font-size:36px;
  }
  @media screen and (min-width:832px) {
    font-size:36px;
  }
  @media screen and (min-width:1024px) {
    font-size:44px;
  }
  @media screen and (min-width:1920px) {
    font-size:52px;
  }
`
const SectionIRigthSubIIPI = styled.p`
  font-size:13px;
  margin-bottom:0px;
  color: ${({ theme }) => theme.colors.text1};
  line-height:1.75;
  font-weight:300;
  -webkit-letter-spacing:normal;
  -moz-letter-spacing:normal;
  -ms-letter-spacing:normal;
  letter-spacing:normal;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-indent:0;
  text-transform:none;
  font-style:normal;
  white-space:normal;
  text-shadow:inherit;
  display:inline;
  box-sizing:border-box;
  -webkit-transition:opacity 75ms 150ms linear;
  transition:opacity 75ms 150ms linear;
  visibility:visible;

  @media screen and (min-width:640px) {
    font-size:13px;
  }
  @media screen and (min-width:832px) {
    font-size:14px;
  }
  @media screen and (min-width:1024px) {
    font-size:16px;
  }
  @media screen and (min-width:1920px) {
    font-size:18px;
  }
  @media screen and (min-width:640px) {
    margin-bottom:0px;
  }
  @media screen and (min-width:832px) {
    margin-bottom:80px;
  }
  @media screen and (min-width:1024px) {
    margin-bottom:80px;
  }
  @media screen and (min-width:1920px) {
    margin-bottom:100px;
  }
`
const SectionIRigthSubIII = styled.div`
  display:none;
  visibility:visible;
  display:nonenoneblock;
  opacity:1;
  z-index:auto;
  overflow-x:visible;
  overflow-y:visible;
  box-sizing:content-box;
  -webkit-transition:all 0s 0s ease;
  transition:all 0s 0s ease;

  @media screen and (min-width:640px) {
    display:none;
  }
  @media screen and (min-width:832px) {
    display:block;
  }
  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionILeft = styled.div`
  padding-bottom:100px;
  padding-top:5rem;
  padding-left:15%;
  padding-right:15%;
  width:100%;
  visibility:visible;
  display:block;
  opacity:1;
  z-index:auto;
  overflow-x:visible;
  overflow-y:visible;
  box-sizing:border-box;
  -webkit-transition:all 0s 0s ease;
  transition:all 0s 0s ease;

  @media screen and (min-width:640px) {
    padding-bottom:100px;
    padding-top:5rem;
    padding-left:25%;
    padding-right:25%;
  }

  @media screen and (min-width:832px) {
    padding-bottom:3rem;
    padding-top:15rem;
    padding-left:5%;
    padding-right:5%;
  }
  @media screen and (min-width:1024px) {
    padding-bottom:5rem;
    padding-top:8rem;
    padding-left:5%;
    padding-right:5%;
  }
  @media screen and (min-width:1920px) {
    padding-bottom:5rem;
    padding-top:8rem;
    padding-left:5%;
    padding-right:5%;
  }
  @media screen and (min-width:640px) {
    width:100%;
  }
  @media screen and (min-width:832px) {
    width:50%;
  }
  @media screen and (min-width:1024px) {
    width:50%;
  }
  @media screen and (min-width:1920px) {
    width:50%;
  }
  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionILeftSubI = styled.div`
  margin-right:0;
  -webkit-flex-direction:column;
  -ms-flex-direction:column;
  flex-direction:column;
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  box-sizing:border-box;
  position:static;
  opacity:1;
  -webkit-transition:all 0s 0s ease;
  transition:all 0s 0s ease;
  z-index:auto;
  @media screen and (min-width:640px) {
    margin-right:0;
  }
  @media screen and (min-width:832px) {
    margin-right:10%;
  }
  @media screen and (min-width:1024px) {
    margin-right:10%;
  }
  @media screen and (min-width:1920px) {
    margin-right:10%;
  }
  @media screen and (min-width:832px) {
    max-width:300px;
  }
  @media screen and (min-width:1024px) {
    max-width:380px;
  }
  @media screen and (min-width:1920px) {
    max-width:500px;
  }
  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionILeftSubII = styled.div`
  margin:0px;
  margin-bottom:30px;
  padding-bottom:30px;
  border-bottom:1px solid;
  border-color: ${({ theme }) => theme.colors.bg6};
  visibility:visible;
  display:block;
  opacity:1;
  z-index:auto;
  overflow-x:visible;
  overflow-y:visible;
  box-sizing:content-box;
  -webkit-transition:opacity 75ms 75ms linear;
  transition:opacity 75ms 75ms linear;

  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionILeftSubIII = styled.div`
  margin-bottom:30px;
  padding-bottom:30px;
  border-bottom:1px solid;
  border-color: ${({ theme }) => theme.colors.bg6};
  visibility:visible;
  display:block;
  opacity:1;
  z-index:auto;
  overflow-x:visible;
  overflow-y:visible;
  box-sizing:content-box;
  -webkit-transition:opacity 75ms 150ms linear;
  transition:opacity 75ms 150ms linear;

  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionILeftSubIV = styled.div`
  visibility:visible;
  display:block;
  opacity:1;
  z-index:auto;
  overflow-x:visible;
  overflow-y:visible;
  box-sizing:content-box;
  -webkit-transition:opacity 75ms 225ms linear;
  transition:opacity 75ms 225ms linear;

  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionILeftSubIISub = styled.div`
  -webkit-flex-direction:column;
  -ms-flex-direction:column;
  flex-direction:column;
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  box-sizing:border-box;
  position:static;
  opacity:1;
  -webkit-transition:all 0s 0s ease;
  transition:all 0s 0s ease;
  z-index:auto;

  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionILeftSubIISubPI = styled.p`
  font-size:18px;
  margin:0px;
  margin-bottom:0.2em;
  color: ${({ theme }) => theme.colors.text1};
  font-weight:normal;
  -webkit-letter-spacing:normal;
  -moz-letter-spacing:normal;
  -ms-letter-spacing:normal;
  letter-spacing:normal;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-indent:0;
  text-transform:uppercase;
  font-style:normal;
  white-space:normal;
  text-shadow:inherit;
  display:inline;
  display:inline;
  opacity:1;
  box-sizing:border-box;
  -webkit-transition:none;
  transition:none;
  visibility:visible;

  @media screen and (min-width:640px) {
    font-size:18px;
  }
  @media screen and (min-width:832px) {
    font-size:20px;
  }
  @media screen and (min-width:1024px) {
    font-size:20px;
  }
  @media screen and (min-width:1920px) {
    font-size:28px;
  }
`
const SectionILeftSubIISubPII = styled.p`
  font-size:12px;
  margin:0px;
  margin-bottom:0.8em;
  color: ${({ theme }) => theme.colors.text1};
  line-height:1.8em;
  font-weight:300;
  -webkit-letter-spacing:normal;
  -moz-letter-spacing:normal;
  -ms-letter-spacing:normal;
  letter-spacing:normal;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-indent:0;
  text-transform:uppercase;
  font-style:normal;
  white-space:normal;
  text-shadow:inherit;
  display:inline;
  display:inline;
  opacity:1;
  box-sizing:border-box;
  -webkit-transition:none;
  transition:none;
  visibility:visible;

  @media screen and (min-width:640px) {
    font-size:12px;
  }
  @media screen and (min-width:832px) {
    font-size:14px;
  }
  @media screen and (min-width:1024px) {
    font-size:14px;
  }
  @media screen and (min-width:1920px) {
    font-size:20px;
  }
`
const SectionILeftSubIISubSubI = styled.div`
  margin-bottom:60px;
  -webkit-flex-direction:column;
  -ms-flex-direction:column;
  flex-direction:column;
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  box-sizing:border-box;
  position:static;
  opacity:1;
  -webkit-transition:all 0s 0s ease;
  transition:all 0s 0s ease;
  z-index:auto;

  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SectionILeftSubIISubSubII = styled.div`
  display:block;
  visibility:visible;
  display:blocknone;
  opacity:1;
  z-index:auto;
  overflow-x:visible;
  overflow-y:visible;
  box-sizing:content-box;
  -webkit-transition:all 0s 0s ease;
  transition:all 0s 0s ease;

  @media screen and (min-width:832px) {
    display:none;
  }

  :hover {
    box-shadow:none;
    cursor:auto;
  }
`
const SetionIISpanH1 = styled.span`
  font-weight: Bold;
  font-size: 32px;
  line-height: 1.4em;
  letter-spacing: 0;
  text-aling: center !important;
  color: ${({ theme }) => theme.colors.text1};
  text-transform: none;
`
const SectionIIP = styled.p`
  text-aling: center !important;
  color: ${({ theme }) => theme.colors.text1};
`
const SectionIISpanXXL = styled.span`
  font-weight: Bold;
  font-size:60px !important;
  line-height: 1.4em;
  letter-spacing: 0;
  text-aling: center !important;
  color: ${({ theme }) => theme.colors.text1};
  text-transform: none;
`
const SectionIIH3 = styled.h3`
  color: ${({ theme }) => theme.colors.text1};
`
const SetionIVH1 = styled.h1`
font-weight: Bold;
font-size: 32px;
line-height: 1.4em;
letter-spacing: 0;
text-aling: center !important;
color: ${({ theme }) => theme.colors.text1};
text-transform: none;
`
const SectionIVP1mt0mb1 = styled.p`
  color: ${({ theme }) => theme.colors.text1};
  margin-top: 0 !important;
  margin-bottom: .25rem !important;
`
const SectionIVP1mb1 = styled.p`
  color: ${({ theme }) => theme.colors.text1};
  margin-bottom: .25rem !important;
`
const SectionIVNum = styled.div.attrs(() => ({
  className: 'w-10 fs-5 mr-3',
}))`
  color: ${({ theme }) => theme.colors.text1};
`
const SectionVCard = styled.div`
  @media screen and (min-width: 1024px) {
    height: 700px;
  }
  @media screen and (min-width: 832px) {
    height: 700px;
  }
  @media screen and (min-width: 640px) {
    height: 550px;
  }
  @media screen and (min-width: 1024px) {
    width: 410px;
  }
  @media screen and (min-width: 832px) {
    width: 320px;
  }
  @media screen and (min-width: 640px) {
    width: 315px;
  }
  
  margin-top: 30px;
  margin-left: 4px;
  margin-right: 4px;
  padding: 10px;
  width: 315px;
  height: 550px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg0};
  display: flex;
  box-sizing: border-box;
  position: relative;
  opacity: 1;
  transition: box-shadow 0.3s linear 0s;
  z-index: 0;
  color: ${({ theme }) => theme.colors.text1};
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  
  :hover {
    transform: scale(1.03);
  }
`
const CardHeader = styled.div`
  padding: 1rem;
  display: flex;
  background: ${({ theme }) => theme.colors.bg0};
`
const CardIcon = styled.div`
  margin-right: 1rem;
  overflow: hidden;
  width: 2rem;
  height: 2rem;
  align-items: center;
  display: flex;
  box-shadow: 0 0 4px 2px rgb(0 0 0 / 20%);
  border-radius: 100%;
`
const CardTitleSection = styled.div`
  width: 80%;
`
const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text1};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  margin: 0;
`
const CardLocation = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text2};
`
const CardChartIcon = styled.div`
  margin-right: 0.3rem;
  margin-bottom: 0.25rem;
`

const Home: React.FC = () => {  
  const { t } = useTranslation()
  const { account } = useActiveWeb3React()
  // https://undraw.co/illustrations
  return (
    <div>
      <main id="main">
        <article>
          <div className="container-fluid dnd_area_main">
            <div className="row-fluid">
              <div className="span12">                              
                <article className="full-width-lg home">
                  <header className="hero" style={{background: 'rgb(0 0 1 / 65%)'}}>
                    <div id="video-background-wrapper">
                      <video playsInline autoPlay loop muted poster="https://f.hubspotusercontent00.net/hubfs/5438855/Imported%20images/Screen-Shot-2021-02-09-at-10.53.31-AM.png" id="bgvideo" width="100%" height="100%">
                        <source src={myVideo} type="video/mp4"/>
                      </video>
                    </div>
                    <div className="container h-100">
                      <div className="row justify-content-center h-100">
                        <div className="col-lg-12 px-lg-5 px-3 d-flex hero-inner align-items-stretch h-100">
                          <div className="row justify-content-start align-items-stretch">
                            <div className="col-md-7 col-sm-12 d-flex flex-row">
                              <div id="hero-text" className="pr-xl-3 ml-3">
                                <div className="d-flex flex-column align-items-end justify-content-center h-100">
                                  <div className="hero-header-text mb-3">
                                    <h1 className="mb-auto">{t('Welcome to the future of real estate investing.')}</h1>
                                    <h3 className="mt-3 subtitle">{t('You deserve a better way to invest in real estate Simple, low-cost, and more powerful than ever Powered by Blockchain Technology.')}</h3>
                                    <div>
                                      <Button type="button" scale="md" >{t('Open Investments')}</Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5 col-sm-12 d-flex flex-column justify-content-center"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </article>
      </main>

      <SectionI>
        <SectionIRigth>
          <SectionIRigthSubI>
            <SectionIRigthSubII>
              <SectionIRigthSubIIP>{t('EXPLORE OPPORTUNITIES BEYOND STOCKS AND BONDS')}</SectionIRigthSubIIP>
              <SectionIRigthSubIIPI>{t('Diversify with thoroughly vetted commercial real estate with the potential to generate income and grow in value.')}
              </SectionIRigthSubIIPI>
              <SectionIRigthSubIII>
                <Button type="button" scale="md" >{t('Open Investments')}</Button>
              </SectionIRigthSubIII>
            </SectionIRigthSubII>
          </SectionIRigthSubI>
        </SectionIRigth>

        <SectionILeft>
          <SectionILeftSubI>
            <SectionILeftSubII>
              <SectionILeftSubIISub>
                <SectionILeftSubIISubPI>{t('Access')}</SectionILeftSubIISubPI>
                <SectionILeftSubIISubPII>{t('Private Market Offerings.')}</SectionILeftSubIISubPII>
              </SectionILeftSubIISub>
            </SectionILeftSubII>
            <SectionILeftSubIII>
              <SectionILeftSubIISub>
                <SectionILeftSubIISubPI>{t('Invest')}</SectionILeftSubIISubPI>
                <SectionILeftSubIISubPII>{t('IN PRIVATE PLACEMENTS AND REAL ESTATE INVESTMENT TRUSTS (“REITS”)')}</SectionILeftSubIISubPII>
              </SectionILeftSubIISub>
            </SectionILeftSubIII>
            <SectionILeftSubIV>
              <SectionILeftSubIISubSubI>
                <SectionILeftSubIISubPI>{t('GAIN')}</SectionILeftSubIISubPI>
                <SectionILeftSubIISubPII>{t('EXPOSURE TO  MORE DEALS.')}</SectionILeftSubIISubPII>
              </SectionILeftSubIISubSubI>
            </SectionILeftSubIV>
            <SectionILeftSubIISubSubII>
              <Button type="button" scale="md" >{t('Open Investments')}</Button>
            </SectionILeftSubIISubSubII>
          </SectionILeftSubI>
        </SectionILeft>
      </SectionI>

      <main className="p-3 main">
        <div className="fl-row-content fl-row-fixed-width">
          <div className="">
            <div className="fl-col">
              <div className="fl-module fl-module-heading text-center xlg">
                <div className="fl-module-content">
                  <h1>
                    <SetionIISpanH1>{t('Why invest with Origin?')}</SetionIISpanH1>
                  </h1>
                </div>
              </div>
              <div className="fl-module-content text-center ">
                <SectionIIP>{t('We are on a mission to transform the way individuals invest in real estate. ')}
                  <a className="" href="our-story.html">{t('Learn more')}</a>
                </SectionIIP>
              </div>
            </div>
          </div>
          <div className="fl-col-group fl-col-group-equal-height text-center">
            <div className="fl-col fl-col-small">
              <div className="fl-col-content">
                <div className="fl-module-content">
                  <h1>
                    <SectionIISpanXXL>28%</SectionIISpanXXL>
                  </h1>
                </div>
                <div className="fl-module-content">
                  <SectionIIH3 className="">{t('Average Gross IRR**')}</SectionIIH3>
                </div>
              </div>
            </div>
            <div className="fl-col fl-col-small">
              <div className="fl-col-content">
                <div className="fl-module-content">
                  <h1>
                    <SectionIISpanXXL>$60M</SectionIISpanXXL>
                  </h1>
                </div>
                <div className="fl-module-content">
                  <SectionIIH3>{t('CEO Co-Investment')}</SectionIIH3>
                </div>
              </div>
            </div>
            <div className="fl-col fl-col-small">
              <div className="fl-col-content">
                <div className="fl-module-content">
                  <h1>
                    <SectionIISpanXXL>$2.5B</SectionIISpanXXL>
                  </h1>
                </div>
                <div className="fl-module-content">
                  <SectionIIH3>{t('Transactions Executed')}</SectionIIH3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="main mt-5">
        <div className="fl-row-content fl-row-fixed-width">
          <div className="">
            <div className="fl-col">
              <div className="fl-module fl-module-heading xlg text-center">
                <div className="fl-module-content">                
                  <h1><SetionIISpanH1>{t('How PeerStreet works')}</SetionIISpanH1></h1>
                </div>
              </div>
              <div className="fl-module-content text-center">
                <SectionIRigthSubIIPI>{t('It’s simple. Borrowers pay monthly interest on real estate loans, and you get your share of those payments as they are received. That is real estate debt investing.')}
                </SectionIRigthSubIIPI>
              </div>
            </div>
          </div>
          <div className="fl-col-group fl-col-group-equal-height text-center">
            <div className="col">
              <div className="fl-col-content">
                <div className="fl-module-content">
                  <img src={step1} alt="step one"/>
                  <img className="arrow" src="https://assets.website-files.com/5e150becb578f4b1614f023f/5e87609c29ebdb30a43ac547_arrow.svg" alt=""/>
                </div>
                <div className="fl-module-content">
                  <SectionIIH3 className="fl-module-heading mt-0 mb-3">{t('Borrowers get loans')}</SectionIIH3>
                  <SectionIRigthSubIIPI>{t('Your investment gives lenders capital to support real estate borrowers.')}</SectionIRigthSubIIPI>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="fl-col-content">
                <div className="fl-module-content">
                  <img src={step2} alt=""/>
                  <img className="arrow" src="https://assets.website-files.com/5e150becb578f4b1614f023f/5e87609c29ebdb30a43ac547_arrow.svg" alt=""/>
                </div>
                <div className="fl-module-content">
                  <SectionIIH3 className="fl-module-heading mt-0 mb-3">{t('We collect payments')}</SectionIIH3>
                  <SectionIRigthSubIIPI>{t('Those borrowers pay monthly interest on their real estate loans.')}</SectionIRigthSubIIPI>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="fl-col-content">
                <div className="fl-module-content">
                  <img src={step3} alt="step three"/>
                </div>
                <div className="fl-module-content">
                  <SectionIIH3 className="fl-module-heading mt-0 mb-3">{t('You get paid')}</SectionIIH3>
                  <SectionIRigthSubIIPI>{t('You receive your share of those monthly payments.')}</SectionIRigthSubIIPI>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>        
      
      <div className="container">
        <div className="sc-bxivhb upmmy">
          <div className="sc-bxivhb kfVDzu">
            <div className="dFMloS">
              <SectionVCard>
                <CardHeader>
                  <CardIcon>
                    <img width="100%" src={Usdt} alt="usdt" />
                  </CardIcon>
                  <CardTitleSection>
                    <CardTitle>
                      Title
                    </CardTitle>
                    <CardLocation>
                      <MapPin width="14" height="14" />
                      Lorem, ipsum dolor.
                    </CardLocation>
                  </CardTitleSection>
                </CardHeader>
                <div className="cjEsQP">
                  <a className="cgTYkN" href="/investment-opportunity/193744">
                    <img className="fTHuJT" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80" alt=""/>
                  </a>
                </div>
                <div className="hgjGUh">
                  <p className="hlWnwG">{t('Open for investment')}</p>
                </div>
                <div className="dvdkfg">
                  <div className="evkgqp">
                    <div className="VUgHi">
                      <div className="fkJsUS">
                        <p className="iTWuKL">$5K</p>
                        <p className="dLPGoD">{t('Minimum')}</p>
                      </div>
                      <div className="ZLaWg">
                        <div className="gKEFyt">
                          <p className="ifjPnA">{t('Monthly')}</p>
                          <div className="iXKSiJ">
                            <span>
                              <img className="ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                            </span>
                          </div>
                        </div>
                      <p className="dLPGoD">{t('Distributions')}</p>
                      </div>
                      <div className="sYJTM">
                        <div className="gKEFyt">
                          <CardChartIcon>
                            <TrendingUp />
                          </CardChartIcon>
                          <p className="iTWuKL">6.00%</p>
                          <div className="iXKSiJ">
                            <span>
                            <img className="ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                            </span>
                          </div>
                        </div>
                        <p className="dLPGoD">{t('Annualized Rate')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="fbsxOy">
                    <p className="bXpmEq">
                      {t('A Real Estate Investment Trust with the objectives to pay attractive and consistent cash distributions; and to preserve, protect, increase and return your capital contribution.')}
                    </p>
                  </div>
                  <div className="cWyFIK"/>
                  <div className="eBIylG">
                    <Button type="button" scale="md" >{t('View Details')}</Button>
                  </div>
                </div>
              </SectionVCard>
            </div>
            <div className="dFMloS">
              <SectionVCard>
                <CardHeader>
                  <CardIcon>
                    <img width="100%" src={Tusd} alt="Tusd" />
                  </CardIcon>
                  <CardTitleSection>
                    <CardTitle>
                      Title
                    </CardTitle>
                    <CardLocation>
                      <MapPin width="14" height="14" />
                      Lorem, ipsum dolor.
                    </CardLocation>
                  </CardTitleSection>
                </CardHeader>
                <div className="cjEsQP">
                  <a className="cgTYkN" href="/investment-opportunity/193744">
                    <img className="fTHuJT" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
                  </a>
                </div>
                <div className="hgjGUh">
                  <p className="hlWnwG">{t('Open for investment')}</p>
                </div>
                <div className="dvdkfg">
                  <div className="evkgqp">
                    <div className="VUgHi">
                      <div className="fkJsUS">
                        <p className="iTWuKL">$5K</p>
                        <p className="dLPGoD">{t('Minimum')}</p>
                      </div>
                      <div className="ZLaWg">
                        <div className="gKEFyt">
                          <p className="ifjPnA">{t('Monthly')}</p>
                          <div className="iXKSiJ">
                            <span>
                              <img className="ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                            </span>
                          </div>
                        </div>
                      <p className="dLPGoD">{t('Distributions')}</p>
                      </div>
                      <div className="sYJTM">
                        <div className="gKEFyt">
                          <CardChartIcon>
                            <TrendingUp />
                          </CardChartIcon>
                          <p className="iTWuKL">6.00%</p>
                          <div className="iXKSiJ">
                            <span>
                            <img className="ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                            </span>
                          </div>
                        </div>
                        <p className="dLPGoD">{t('Annualized Rate')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="fbsxOy">
                    <p className="bXpmEq">
                      {t('A Real Estate Investment Trust with the objectives to pay attractive and consistent cash distributions; and to preserve, protect, increase and return your capital contribution.')}
                    </p>
                  </div>
                  <div className="cWyFIK"/>
                  <div className="eBIylG">
                    <Button type="button" scale="md" >{t('View Details')}</Button>
                  </div>
                </div>
              </SectionVCard>
            </div>
            <div className="dFMloS">
              <SectionVCard>
                <CardHeader>
                  <CardIcon>
                    <img width="100%" src={Busd} alt="Busd" />
                  </CardIcon>
                  <CardTitleSection>
                    <CardTitle>
                      Title
                    </CardTitle>
                    <CardLocation>
                      <MapPin width="14" height="14" />
                      Lorem, ipsum dolor.
                    </CardLocation>
                  </CardTitleSection>
                </CardHeader>
                <div className="cjEsQP">
                  <a className="cgTYkN" href="/investment-opportunity/193744">
                    <img className="fTHuJT" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
                  </a>
                </div>
                <div className="hgjGUh">
                  <p className="hlWnwG">{t('Open for investment')}</p>
                </div>
                <div className="dvdkfg">
                  <div className="evkgqp">
                    <div className="VUgHi">
                      <div className="fkJsUS">
                        <p className="iTWuKL">$5K</p>
                        <p className="dLPGoD">{t('Minimum')}</p>
                      </div>
                      <div className="ZLaWg">
                        <div className="gKEFyt">
                          <p className="ifjPnA">{t('Monthly')}</p>
                          <div className="iXKSiJ">
                            <span>
                              <img className="ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                            </span>
                          </div>
                        </div>
                      <p className="dLPGoD">{t('Distributions')}</p>
                      </div>
                      <div className="sYJTM">
                        <div className="gKEFyt">
                          <CardChartIcon>
                            <TrendingUp />
                          </CardChartIcon>
                          <p className="iTWuKL">6.00%</p>
                          <div className="iXKSiJ">
                            <span>
                            <img className="ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                            </span>
                          </div>
                        </div>
                        <p className="dLPGoD">{t('Annualized Rate')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="fbsxOy">
                    <p className="bXpmEq">
                      {t('A Real Estate Investment Trust with the objectives to pay attractive and consistent cash distributions; and to preserve, protect, increase and return your capital contribution.')}
                    </p>
                  </div>
                  <div className="cWyFIK"/>
                  <div className="eBIylG">
                    <Button type="button" scale="md" >{t('View Details')}</Button>
                  </div>
                </div>
              </SectionVCard>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center">
        <Button type="button" scale="md">{t('Open Investments')}</Button>
      </div>

      <div className='p-5 bg-s3'>
        <div className='container'>
          <SetionIVH1>{t('I want to invest, what do I do?')}</SetionIVH1>
          <div className='d-flex flex-row'>
            <div className='w-70-m w-40-l'>
              <div className='d-flex mb-4 nl-container align-items-center'>
                <SectionIVNum>1</SectionIVNum>
                <div className='w-90'>
                  <SectionIVP1mt0mb1>{t('Connect wallet')}</SectionIVP1mt0mb1>
                  {!account && 
                    <ConnectWalletButton />
                  }
                </div>
              </div>
              <div className='d-flex mb-4 nl-container align-items-center'>
                <SectionIVNum>2</SectionIVNum>
                <div className='w-90'>
                  <SectionIVP1mb1>{t('Learn about the opportunities to invest and choose which ones to participate in.')}</SectionIVP1mb1>
                  <Button type="button" scale="md">{t('Open Investments')}</Button>
                </div>
              </div>
              <div className='d-flex mb-4 nl-container align-items-center'>
                <SectionIVNum>3</SectionIVNum>
                <div className='w-90'>
                  <SectionIVP1mb1>{t('We will give you more information about each project that interests you and instructions to make your investment.')}</SectionIVP1mb1>
                </div>
              </div>
              <div className='d-flex mb-4 nl-container align-items-center'>
                <SectionIVNum>4</SectionIVNum>
                <div className='w-90'>
                  <SectionIVP1mb1>{t('Invest, find out about the progress of the projects and receive your profits.')}</SectionIVP1mb1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home