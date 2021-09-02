import React from 'react'
import { useTranslation } from 'contexts/Localization'
import myVideo from 'assets/video/myvideo.mp4'
import step1 from 'assets/svg/step1.svg'
import step2 from 'assets/svg/step2.svg'
import step3 from 'assets/svg/step3.svg'



const Home: React.FC = () => {  
  const { t } = useTranslation()
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
                                    <h3 className="mt-3 subtitle">{t('You deserve a better way to invest in real estate Simple, low-cost, and more powerful than ever Powered by Blockchain Tech.')}</h3>
                                    <div>
                                      <button type="button">{t('Get Started')}</button>
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

      <div className="caYAva">
        <div className="bvBEdq">
          <div className="XYtKs">
            <div className="bVLBoW">
              <p className="glHQJt">{t('EXPLORE OPPORTUNITIES BEYOND STOCKS AND BONDS')}</p>
              <p className="bkOndA">{t('Diversify with thoroughly vetted commercial real estate with the potential to generate income and grow in value.')}
              </p>
              <div className="dZGjWY">
                <a className="gPmAng"href="investment-opportunities.html">{t('Open Investments')}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="duxOcS">
          <div className="gAeGzz">
            <div className="bPHxiG">
              <div className="fQtwOd">
                <p className="cAyDCf">{t('Access')}
                </p>
                <p className="jGZFMF">{t('Private Market Offerings.')}
                </p>
              </div>
            </div>
            <div className="jCWujc">
              <div className="fQtwOd">
                <p className="cAyDCf">{t('Invest')}
                </p>
                <p className="jGZFMF">{t('IN PRIVATE PLACEMENTS AND REAL ESTATE INVESTMENT TRUSTS (“REITS”)')}</p>
              </div>
            </div>
            <div className="jRJUUs">
              <div className="cwbiEW">
                <p className="cAyDCf">{t('GAIN')}
                </p>
                <p className="jGZFMF">{t('EXPOSURE TO  MORE DEALS.')}</p>
              </div>
            </div>
            <div className="cMzbYy">
              <a className="XzGWN" href="investment-options.html">{t('Open Investments')}</a>
            </div>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="fl-row-content fl-row-fixed-width">
          <div className="">
            <div className="fl-col">
              <div className="fl-module fl-module-heading xlg">
                <div className="fl-module-content">
                  <h1 className="text-center">
                    <span className="fl-heading-text">{t('Why invest with Origin?')}</span>
                  </h1>
                </div>
              </div>
              <div className="fl-module-content">
                <p className="text-center">{t('We are on a mission to transform the way individuals invest in real estate. ')}
                  <a className="" href="our-story.html">{t('Learn more')}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="fl-col-group fl-col-group-equal-height text-center">
            <div className="fl-col fl-col-small">
              <div className="fl-col-content">
                <div className="fl-module-content">
                  <h1 className="">
                    <span className="fl-heading-text xxlg">28%</span>
                  </h1>
                </div>
                <div className="fl-module-content">
                  <h3 className="">{t('Average Gross IRR**')}</h3>
                </div>
              </div>
            </div>
            <div className="fl-col fl-col-small">
              <div className="fl-col-content">
                <div className="fl-module-content">
                  <h1 className="">
                    <span className="fl-heading-text xxlg">$60M</span>
                  </h1>
                </div>
                <div className="fl-module-content">
                  <h3 className="">{t('CEO Co-Investment')}</h3>
                </div>
              </div>
            </div>
            <div className="fl-col fl-col-small">
              <div className="fl-col-content">
                <div className="fl-module-content">
                  <h1 className="">
                    <span className="fl-heading-text xxlg">$2.5B</span>
                  </h1>
                </div>
                <div className="fl-module-content">
                  <h3 className="">{t('Transactions Executed')}</h3>
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
                  <h1><span className="fl-heading-text">{t('How PeerStreet works')}</span></h1>
                </div>
              </div>
              <div className="fl-module-content text-center">
                <h4>{t('It’s simple. Borrowers pay monthly interest on real estate loans, and you get your share of those payments as they are received. That is real estate debt investing.')}
                </h4>
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
                  <h3 className="fl-module-heading mt-0 mb-3">{t('Borrowers get loans')}</h3>
                  <p>{t('Your investment gives lenders capital to support real estate borrowers.')}</p>
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
                  <h3 className="fl-module-heading mt-0 mb-3">{t('We collect payments')}</h3>
                  <p>{t('Those borrowers pay monthly interest on their real estate loans.')}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="fl-col-content">
                <div className="fl-module-content">
                  <img src={step3} alt="step three"/>
                </div>
                <div className="fl-module-content">
                  <h3 className="fl-module-heading mt-0 mb-3">{t('You get paid')}</h3>
                  <p>{t('You receive your share of those monthly payments.')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>        
      
      <div className="container">
        <div className="sc-bxivhb upmmy">
          <div className="sc-bxivhb kfVDzu">
            <div className="sc-htpNat dFMloS">
              <div className="sc-bxivhb gnyMrl">
                <div className="sc-htoDjs cjEsQP">
                  <a className="sc-chPdSV cgTYkN" href="/investment-opportunity/193744">
                    <img className="sc-iwsKbI fTHuJT" src="https://www.realtymogul.com/sites/default/files/styles/io_browse_page/public/mri_0_0.jpg?itok=0CVPylBr" alt=""/>
                  </a>
                </div>
                <div className="sc-htoDjs hgjGUh">
                  <p className="sc-kGXeez hlWnwG">Open for investment</p>
                </div>
              <div className="sc-bdVaJa dvdkfg">
                <div className="sc-bdVaJa QYKnJ">
                  <p className="sc-kGXeez gNWDmm">
                    Nationwide
                  </p>
                </div>
                <div className="sc-bdVaJa fLgokR">
                  <p className="sc-kGXeez cTnXae">
                    MogulREIT I
                  </p>
                </div>
              <div className="sc-bdVaJa evkgqp">
                <div className="sc-bxivhb VUgHi">
                  <div className="sc-htoDjs fkJsUS">
                    <p className="sc-kGXeez iTWuKL">
                      $5K
                    </p>
                    <p className="sc-kGXeez dLPGoD">
                      Minimum
                    </p>
                  </div>
                  <div className="sc-htoDjs ZLaWg">
                    <div className="sc-bxivhb gKEFyt">
                      <p className="sc-kGXeez ifjPnA">
                        Monthly
                      </p>
                      <div className="sc-htoDjs iXKSiJ">
                        <span>
                          <img className="sc-iwsKbI ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                        </span>
                      </div>
                    </div>
                <p className="sc-kGXeez dLPGoD">
                  Distributions
                </p>
                </div>
                <div className="sc-htoDjs sYJTM">
                <div className="sc-bxivhb gKEFyt">
                <p className="sc-kGXeez iTWuKL">
                  6.00%

                </p>
                <div className="sc-htoDjs iXKSiJ">
                <span>
                <img className="sc-iwsKbI ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                </span>
                </div>
                </div>
                <p className="sc-kGXeez dLPGoD">
                  Annualized Rate

                </p>
                </div>
                </div>
              </div>
              <div className="sc-htoDjs fbsxOy">
              <p className="sc-kGXeez bXpmEq">A Real Estate Investment Trust with the objectives to pay attractive and consistent cash distributions; and to preserve, protect, increase and return your capital contribution.

              </p>
              </div>
              <div className="sc-htoDjs cWyFIK"/>
              <div className="sc-htoDjs eBIylG">
              <a className="sc-chPdSV fWWiwV" href=".">
                View Details
              </a>
              </div>
              </div>
              </div>
            </div>
            <div className="sc-htpNat dFMloS">
              <div className="sc-bxivhb gnyMrl">
                <div className="sc-htoDjs cjEsQP">
                  <a className="sc-chPdSV cgTYkN" href="/investment-opportunity/193744">
                    <img className="sc-iwsKbI fTHuJT" src="https://www.realtymogul.com/sites/default/files/styles/io_browse_page/public/757_n._hudson.jpg?itok=EaYkTmBF" alt=""/>
                  </a>
                </div>
                <div className="sc-htoDjs hgjGUh">
                  <p className="sc-kGXeez hlWnwG">Open for investment</p>
                </div>
              <div className="sc-bdVaJa dvdkfg">
                <div className="sc-bdVaJa QYKnJ">
                  <p className="sc-kGXeez gNWDmm">
                    Nationwide
                  </p>
                </div>
                <div className="sc-bdVaJa fLgokR">
                  <p className="sc-kGXeez cTnXae">
                    MogulREIT I
                  </p>
                </div>
              <div className="sc-bdVaJa evkgqp">
                <div className="sc-bxivhb VUgHi">
                  <div className="sc-htoDjs fkJsUS">
                    <p className="sc-kGXeez iTWuKL">
                      $5K
                    </p>
                    <p className="sc-kGXeez dLPGoD">
                      Minimum
                    </p>
                  </div>
                  <div className="sc-htoDjs ZLaWg">
                    <div className="sc-bxivhb gKEFyt">
                      <p className="sc-kGXeez ifjPnA">
                        Monthly
                      </p>
                      <div className="sc-htoDjs iXKSiJ">
                        <span>
                          <img className="sc-iwsKbI ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                        </span>
                      </div>
                    </div>
                <p className="sc-kGXeez dLPGoD">
                  Distributions
                </p>
                </div>
                <div className="sc-htoDjs sYJTM">
                <div className="sc-bxivhb gKEFyt">
                <p className="sc-kGXeez iTWuKL">
                  6.00%

                </p>
                <div className="sc-htoDjs iXKSiJ">
                <span>
                <img className="sc-iwsKbI ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                </span>
                </div>
                </div>
                <p className="sc-kGXeez dLPGoD">
                  Annualized Rate

                </p>
                </div>
                </div>
              </div>
              <div className="sc-htoDjs fbsxOy">
              <p className="sc-kGXeez bXpmEq">A Real Estate Investment Trust with the objectives to pay attractive and consistent cash distributions; and to preserve, protect, increase and return your capital contribution.

              </p>
              </div>
              <div className="sc-htoDjs cWyFIK"/>
              <div className="sc-htoDjs eBIylG">
              <a className="sc-chPdSV fWWiwV" href=".">
                View Details
              </a>
              </div>
              </div>
              </div>
            </div>
            <div className="sc-htpNat dFMloS">
              <div className="sc-bxivhb gnyMrl">
                <div className="sc-htoDjs cjEsQP">
                  <a className="sc-chPdSV cgTYkN" href="/investment-opportunity/193744">
                    <img className="sc-iwsKbI fTHuJT" src="https://www.realtymogul.com/sites/default/files/styles/io_browse_page/public/mrii_0_0.jpg?itok=fLuX8MuM" alt=""/>
                  </a>
                </div>
                <div className="sc-htoDjs hgjGUh">
                  <p className="sc-kGXeez hlWnwG">Open for investment</p>
                </div>
              <div className="sc-bdVaJa dvdkfg">
                <div className="sc-bdVaJa QYKnJ">
                  <p className="sc-kGXeez gNWDmm">
                    Nationwide
                  </p>
                </div>
                <div className="sc-bdVaJa fLgokR">
                  <p className="sc-kGXeez cTnXae">
                    MogulREIT I
                  </p>
                </div>
              <div className="sc-bdVaJa evkgqp">
                <div className="sc-bxivhb VUgHi">
                  <div className="sc-htoDjs fkJsUS">
                    <p className="sc-kGXeez iTWuKL">
                      $5K
                    </p>
                    <p className="sc-kGXeez dLPGoD">
                      Minimum
                    </p>
                  </div>
                  <div className="sc-htoDjs ZLaWg">
                    <div className="sc-bxivhb gKEFyt">
                      <p className="sc-kGXeez ifjPnA">
                        Monthly
                      </p>
                      <div className="sc-htoDjs iXKSiJ">
                        <span>
                          <img className="sc-iwsKbI ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                        </span>
                      </div>
                    </div>
                <p className="sc-kGXeez dLPGoD">
                  Distributions
                </p>
                </div>
                <div className="sc-htoDjs sYJTM">
                <div className="sc-bxivhb gKEFyt">
                <p className="sc-kGXeez iTWuKL">
                  6.00%

                </p>
                <div className="sc-htoDjs iXKSiJ">
                <span>
                <img className="sc-iwsKbI ClucN" src="/static/media/tooltip_icon.091e1161.svg" alt=""/>
                </span>
                </div>
                </div>
                <p className="sc-kGXeez dLPGoD">
                  Annualized Rate

                </p>
                </div>
                </div>
              </div>
              <div className="sc-htoDjs fbsxOy">
              <p className="sc-kGXeez bXpmEq">A Real Estate Investment Trust with the objectives to pay attractive and consistent cash distributions; and to preserve, protect, increase and return your capital contribution.

              </p>
              </div>
              <div className="sc-htoDjs cWyFIK"/>
              <div className="sc-htoDjs eBIylG">
              <a className="sc-chPdSV fWWiwV" href=".">
                View Details
              </a>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-5 bg-s3'>
        <div className='container'>
          <h2 className='fl-heading-text mb-5'>Quiero invertir, ¿qué hago?</h2>
          <div className='d-flex flex-row'>
            <div className='w-70-m w-40-l'>
              <div className='d-flex mb-4 nl-container align-items-center'>
                <div className='w-10 fs-5 mr-3'>1</div>
                <div className='w-90'>
                  <p className='mt-0 mb-1'>Regístrate como usuario.</p>
                  <a className="btn btn-blue f6 pv2 f5-ns db tc grow" href="recursos/sign_up.html">Regístrate</a>
                </div>
              </div>
              <div className='d-flex mb-4 nl-container align-items-center'>
                <div className='w-10 fs-5 mr-3'>2</div>
                <div className='w-90'>
                  <p className='mb-1'>Conoce las oportunidades para invertir y elige en cuálesparticipar.</p>
                  <a className="btn btn-light" href="proyectos.html">Opciones para invertir</a>
                </div>
              </div>
              <div className='d-flex mb-4 nl-container align-items-center'>
                <div className='w-10 fs-5 mr-3'>3</div>
                <div className='w-90'>
                  <p className='mv0'>Te daremos más información sobre cada proyecto que te interese e instrucciones para realizar tu inversión.</p>
                </div>
              </div>
              <div className='d-flex mb-4 nl-container align-items-center'>
                <div className='w-10 fs-5 mr-3'>4</div>
                <div className='w-90'>
                  <p className='mv0'>Invierte, entérate de los avances de los proyectos y recibetus ganancias.</p>
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
