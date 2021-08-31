import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import myVideo from 'assets/video/myvideo.mp4'

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
                                    <h1 className="mb-auto">Welcome to the future of real estate investing.</h1>
                                    <h3 className="mt-3 subtitle">You deserve a better way to invest in real estate Simple, low-cost, and more powerful than ever Powered by Blockchain Tech.</h3>
                                    <div>
                                      <button type="button">Get Started</button>
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

      <div>
        <div className="caYAva">
          <div className="bvBEdq">
            <div className="XYtKs">
              <div className="bVLBoW">
                <p className="glHQJt">EXPLORE OPPORTUNITIES BEYOND STOCKS AND BONDS</p>
                <p className="bkOndA">Diversify with thoroughly vetted commercial real estate with the potential to generate income and grow in value.
                </p>
                <div className="dZGjWY">
                  <a className="gPmAng"href="investment-opportunities.html">Open Investments</a>
                </div>
              </div>
            </div>
          </div>

          <div className="duxOcS">
            <div className="gAeGzz">
              <div className="bPHxiG">
                <div className="fQtwOd">
                  <p className="cAyDCf">Access
                  </p>
                  <p className="jGZFMF">Private Market Offerings.
                  </p>
                </div>
              </div>
              <div className="jCWujc">
                <div className="fQtwOd">
                  <p className="cAyDCf">Invest
                  </p>
                  <p className="jGZFMF">IN PRIVATE PLACEMENTS AND REAL ESTATE INVESTMENT TRUSTS (“REITS”)</p>
                </div>
              </div>
              <div className="jRJUUs">
                <div className="cwbiEW">
                  <p className="cAyDCf">GAIN
                  </p>
                  <p className="jGZFMF">EXPOSURE TO  MORE DEALS.</p>
                </div>
              </div>
              <div className="cMzbYy">
                <a className="XzGWN" href="investment-options.html">Open Investments</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="content">
          <main className="main">
            <div className="fl-builder-content">
              <div className="fl-row fl-row-fixed-width">
                <div className="fl-row-content-wrap">
                  <div className="fl-row-content fl-row-fixed-width">
                    <div className="fl-col-group">
                      <div className="fl-col">
                        <div className="fl-col-content">
                          <div className="fl-module fl-module-heading xlg">
                            <div className="fl-module-content">
                              <h1 className="fl-heading">
                                <span className="fl-heading-text">Why invest with Origin?</span>
                              </h1>
                            </div>
                          </div>
                          <div className="fl-module lg">
                            <div className="fl-module-content">
                              <div className="fl-rich-text">
                                <p className="text-center">We are on a mission to transform the way individuals invest in real estate.
                                  <a className="utility-link" href="our-story.html">Learn more</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fl-col-group fl-col-group-equal-height fl-col-group-align-center">
                      <div className="fl-col fl-col-small">
                        <div className="fl-col-content">
                          <div className="fl-module fl-module-heading">
                            <div className="fl-module-content">
                              <h1 className="fl-heading">
                                <span className="fl-heading-text xxlg">28%</span>
                              </h1>
                            </div>
                          </div>
                          <div className="fl-module fl-module-heading header-bar-md">
                            <div className="fl-module-content">
                              <h3 className="fl-heading">
                                <span className="fl-heading-text">Average Gross IRR**</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fl-col fl-col-small">
                        <div className="fl-col-content">
                          <div className="fl-module fl-module-heading">
                            <div className="fl-module-content">
                              <h1 className="fl-heading">
                                <span className="fl-heading-text xxlg">$60M</span>
                              </h1>
                            </div>
                          </div>
                          <div className="fl-module fl-module-heading header-bar-md">
                            <div className="fl-module-content">
                              <h3 className="fl-heading">
                                <span className="fl-heading-text">CEO Co-Investment</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fl-col fl-col-small">
                        <div className="fl-col-content">
                          <div className="fl-module fl-module-heading">
                            <div className="fl-module-content">
                              <h1 className="fl-heading">
                                <span className="fl-heading-text xxlg">$2.5B</span>
                              </h1>
                            </div>
                          </div>
                          <div className="fl-module fl-module-heading header-bar-md">
                            <div className="fl-module-content">
                              <h3 className="fl-heading">
                                <span className="fl-heading-text">Transactions Executed</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Home
