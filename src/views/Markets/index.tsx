import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { MapPin, DollarSign, TrendingUp } from 'react-feather'
import styled from 'styled-components'
import { Link, Button } from 'uikit'
import Usdt from '../../assets/svg/usdt-icon.svg'
import Dai from '../../assets/svg/dai-icon.svg'
import Busd from '../../assets/svg/busd-icon.svg'
import Tusd from '../../assets/svg/tusd-icon.svg'
import Usdc from '../../assets/svg/usd-coin-usdc-logo.svg'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 120px 16px 0px 16px;
  align-items: center;
  flex: 1;
  z-index: 1;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 6rem 16px 16px 16px;
  }
`
const Main = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`
const Cards = styled.div`
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  display: contents;
`
const CardsItems = styled.div`
  padding: 1rem;
  width: 25%;
  min-width: 21rem;
  max-width: 24rem;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  :hover {
    transform: scale(1.05);
  }
`
const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: solid 0.25px ${({ theme }) => theme.colors.text4};
`
const CardImage = styled.div`
  padding-top: 4rem;
  padding-bottom: 8rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover !important;
  height: 195px;
`
const CardContent = styled.div`
  background: ${({ theme }) => theme.colors.bg1};
  color: ${({ theme }) => theme.colors.text1};
  padding: 1rem;
`
const CardDetails = styled.div`
  justify-content: space-between;
  display: flex;
`
const CardSubContent = styled.div`
  margin-right: 1rem;
`
const CardAmount = styled.div`
  margin-bottom: 0.25rem;
  align-items: center;
  display: flex;
`
const CardAmountIcon = styled.div`
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  width: 1rem;
`
const CardAmountText = styled.div`
  line-height: 1;
  font-weight: 500;
`
const CardAmountDetails = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 400;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`
const CardChart = styled.div`
  margin-bottom: 0.25rem;
  align-items: center;
  display: flex;
`
const CardChartIcon = styled.div`
  margin-right: 0.3rem;
  margin-bottom: 0.25rem;
`
const CardChartText = styled.div`
  line-height: 1;
  font-weight: 500;
`
const CardChartDetails = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 400;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
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
const CardSubtitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text1};
`
const CardLocation = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text2};
`
const CardDivisor = styled.div`
  height: 24px;
  margin-right: auto;
  margin-left: auto;
  font-size: 0.75rem;
  padding: 0.5rem;
  width: 100%;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({ theme }) => theme.colors.text1};
  background-color: ${({ theme }) => theme.colors.bg2};
`
const PageTitleWrapper = styled.div`
  padding: 0px 10px;
  text-align: center;
  @media screen and (min-width: 640px){
      padding: 40px 25px;
  }
`
const PageTitle = styled.span`
  font-weight: Bold;
  font-size: 32px;
  line-height: 1.4em;
  letter-spacing: 0;
  text-aling: center !important;
  color: ${({ theme }) => theme.colors.text1};
  text-transform: none;
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
export default function Markets() {
  const { t } = useTranslation()
  return (
    <BodyWrapper>
      <PageTitleWrapper>
        <h1><PageTitle>{t('Open Investment Opportunities')}</PageTitle></h1>
      </PageTitleWrapper>
      <div className="container">
        <div className="upmmy">
          <div className="kfVDzu">
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
                    <Link href="/theter">
                      <Button type="button" scale="md">{t('View Details')}</Button>
                    </Link>
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
                    <Link href="/trueusd">
                      <Button type="button" scale="md">{t('View Details')}</Button>
                    </Link>
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
            <div className="dFMloS">
              <SectionVCard>
                <CardHeader>
                  <CardIcon>
                    <img width="100%" src={Dai} alt="Dai" />
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
                    <img className="fTHuJT" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
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
                    <img width="100%" src={Usdc} alt="Tusd" />
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
                    <img className="fTHuJT" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
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
                    <img width="100%" src={Busd} alt="busd" />
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
                    <img className="fTHuJT" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
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

    </BodyWrapper>
  )
}
