import React from 'react'
import styled from 'styled-components/macro'
import SimpleReactLightbox from 'simple-react-lightbox'
import { Link } from 'react-router-dom'
import useReserveLiquidity from 'hooks/useReserveLiquidity'
import { getUSDT2Addres, getAusdtAddress } from 'utils/addressHelpers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { Button } from 'uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import MyComponent from './components/MyComponent'

const Container = styled.div.attrs((props) => ({
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
  padding: 1rem;
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
const Pricing = styled.div.attrs((props) => ({
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
const AchievementsCard = styled.div.attrs((props) => ({
  className: 'col-lg-6 card',
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

const Theter: React.FC = () => {
  const { balance:liquidity, fetchStatus:liquidityFst } = useReserveLiquidity(getUSDT2Addres(), getAusdtAddress())
  const { account, chainId, library } = useActiveWeb3React()
  
  return(
    <>
      <section className="reserve">
        <div className="cover">
          <div className="bg-reserve">
            <div className="container content-end">
              <div className="col-xl-5 col-lg-6">
                <div className="pb-3">
                  <h4 className="sub-title">Lorem ipsum..</h4>
                  <h3 className="title">Lorem ipsum dolor sit..</h3>
                  <p>Lorem ipsum dolor sit amet..</p>
                  <SimpleReactLightbox>
                    <MyComponent />
                  </SimpleReactLightbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="proy-desc" className="proy-desc-area pt-125 pb-130">
        <Container>
          <div className="row">
            <div className="col-lg-8">
              <Container>
                <div className="row">
                  <div className="col-12">
                    <div className="proy-desc-content mt-50">
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
                            <div className="single-info d-flex align-items-center">
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
                            <div className="single-info d-flex align-items-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex align-items-center">
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
                            <div className="single-info d-flex align-items-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex align-items-center">
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
                            <div className="single-info d-flex align-items-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex align-items-center">
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
                            <div className="single-info d-flex align-items-center">
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
                            <div className="single-info d-flex align-items-center">
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
                            <div className="single-info d-flex align-items-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex align-items-center">
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
                            <div className="single-info d-flex align-items-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex align-items-center">
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
                            <div className="single-info d-flex align-items-center">
                              <div className="info-text">
                                <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-info d-flex align-items-center">
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
                            <div className="single-info d-flex align-items-center">
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
                      Quedan
                      <h6>$2,747,847 MXN</h6>
                      disponibles para invertir
                    </PackageTitle>
                  </div>
                  <div className="pricing-body">
                    <div className="advance px-3 pb-3">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "30%" }}
                        >
                          <span> </span>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-text text-center pt-3">
                      <h5>Monto Conseguido</h5>
                      <Price>$8,738,731</Price>
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
                              <p className="pl-5">Risk Type</p>
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
                        {!account ? (
                          <ConnectWalletButton />
                        ) : (
                          <Button
                            type="button"
                            as={Link}
                            to="/theter-reserve/add/0x080De04372D5f1E317d492645b923f6286C7eC86"
                          >
                          invest
                          </Button>
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
            <div className="col">
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
            <div className="col">
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

      <section className="achievements p-5">
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
