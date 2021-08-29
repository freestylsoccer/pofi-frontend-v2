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
    <div className="body-wrapper   hs-content-id-48242504006 hs-site-page page ">
      <main id="main" className="body-container-wrapper main">
        <article>
          <div className="container-fluid dnd_area_main">
            <div className="row-fluid-wrapper">
              <div className="row-fluid">
                <div className="span12 widget-span widget-type-cell " data-widget-type="cell" data-x="0" data-w="12">
                  <div className="row-fluid-wrapper row-depth-1 row-number-3 dnd-section">
                    <div className="row-fluid ">
                      <div className="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
                        <div className="row-fluid-wrapper row-depth-1 row-number-4 dnd-row">
                          <div className="row-fluid ">
                            <div className="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
                              <div id="hs_cos_wrapper_widget_1622601668503" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                <article className="full-width-lg home page type-page status-publish has-post-thumbnail hentry" id="module-widget_1622601668503">
                                  <header className="hero entry-content">
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
                                                  <div className="hero-header-text mt5 mb-3">
                                                    <h1 className="mb-auto">Welcome to the future of real estate investing.</h1>
                                                    <h3 className="mt-3 subtitle">You deserve a better way to invest in real estate Simple, low-cost, and more powerful than ever Powered by Blockchain Tech.</h3>
                                                    <div id="hs_cos_wrapper_widget_1622601668503_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_rich_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_rich_text" data-hs-cos-field="paragraph_text">
                                                      <p>
                                                        <span className="hs-cta-wrapper" id="hs-cta-wrapper-c346d697-5d7c-4009-8121-67310e79b189">
                                                          <span className="hs-cta-node hs-cta-c346d697-5d7c-4009-8121-67310e79b189" id="hs-cta-c346d697-5d7c-4009-8121-67310e79b189">
                                                            <button type="button">Get Started</button>
                                                          </span>
                                                        </span>
                                                      </p>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export default Home
