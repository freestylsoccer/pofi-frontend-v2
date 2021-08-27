import React, { useState } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import useTheme from 'hooks/useTheme'
import { Menu as SideBarMenu, X } from 'react-feather'
import { useTranslation } from 'contexts/Localization'
import UserMenu from 'components/Menu/UserMenu'
import Logo from '../../assets/svg/logo.svg'
import LogoDark from '../../assets/svg/logo_white.svg'

const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: grid;
  padding:  1rem;
  grid-template-columns: 36px 1fr;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  padding: 1rem;
  z-index: 21;
  position: relative;
  /* Background slide effect on scroll. */
  background-image: ${({ theme }) => `linear-gradient(to bottom, transparent 50%, ${theme.colors.bg0} 50% )}}`};
  background-position: ${({ showBackground }) => (showBackground ? '0 -100%' : '0 0')};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px ${({ theme, showBackground }) => (showBackground ? theme.colors.bg2 : 'transparent;')};
  transition: background-position 0.1s, box-shadow 0.1s;
  background-blend-mode: hard-light;

  ${({ theme }) => theme.mediaQueries.md} {
    padding:  1rem;
    grid-template-columns: 1fr 1fr;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: 48px 10fr 1fr;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: 48px 10fr 1fr;
  }
`
const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`
const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  :hover {
    cursor: pointer;
  }
`
const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`
const HeaderLinks = styled.div<{ isShown: boolean }>`
	${(props) =>    
    props.isShown
      ? css`
        display: flex;
        padding: 0;
        align-items: center;
        justify-content: flex-end;
        padding: 0rem;
        border: 0px;
        border-radius: 0px;
        background-color: ${({ theme }) => theme.colors.bg0};
        width: fit-content;
        position: fixed;
        right: 2rem;

        @media (max-width: 960px) {
          flex-direction: row;
          justify-self: flex-end;
          align-items: center;
          justify-content: end;
          padding: 2rem;
          z-index: 99;
          position: fixed;
          right: 0;
          transform: translate(50%, -50%);
          margin: 0 auto;
          background-color: ${({ theme }) => theme.colors.bg0};
          border: 1px solid ${({ theme }) => theme.colors.bg2};
          box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
          display: flex;
          position: fixed;
          top: 0;
          width: 276px;
          height: 100%;
          flex-direction: column;
          transition: transform 0.25s ease;
          will-change: transform;
          transform: translateX(1000%);
          overflow-y: scroll;
          z-index: 6;
          transform: translateX(0);
          box-shadow: -0.125rem 0 1.25rem 0 #343851;
        }
        `
      : css`
        display: flex;
        padding: 0;
        align-items: center;
        justify-content: flex-end;
        padding: 0rem;
        border: 0px;
        border-radius: 0px;
        background-color: ${({ theme }) => theme.colors.bg0};
        width: fit-content;
        position: fixed;
        right: 2rem;

        @media (max-width: 960px) {
          display: none;
        }
      `};
`
const SideBarWrapper = styled.div`
  vertical-align: middle;
  padding-top: 1rem;
  display: block;
	${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`
const NavToggle = styled.button`
	justify-self: self-end;
	padding-rigth: 1rem;
	background: transparent;
	border: 0;
	border-radius: 3px;
	outline: 0;
	cursor: pointer;
	display: block;
	${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`
const NavClose = styled(NavToggle)`
  position: absolute;
  top: 16px;
  left: 16px;
`
const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
	display: flex;
	flex-flow: row nowrap;
  align-items: left;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text2};
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 12px;
  word-break: break-word;
  overflow: hidden;
  white-space: nowrap;
  &.${activeClassName} {
    font-weight: 600;
    justify-content: center;
    border-bottom: 0.25rem solid #000;
    color: ${({ theme }) => theme.colors.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.text1};
  }
`

export default function Header() {
	const { theme } = useTheme()
  const { t } = useTranslation()
	const scrollY = useScrollPosition()
	const [isShown, setIsShown] = useState(false)

  return (
    <HeaderFrame showBackground={scrollY > 45}>
			<Title href="/">
        <UniIcon>
          <img width="24px" src={theme.isDark ? LogoDark : Logo} alt="logo" />
        </UniIcon>
      </Title>
			<HeaderLinks isShown={isShown}>
				<SideBarWrapper>
          <NavClose onClick={() => setIsShown(!isShown)}>
            <X strokeWidth="3" color="#000" />
          </NavClose>
        </SideBarWrapper>
        <StyledNavLink id="swap-nav-link" to="/markets" onClick={() => setIsShown(!isShown)}>
          {t('Markets')}
        </StyledNavLink>
        <StyledNavLink
          id="pool-nav-link"
          to="/test"
          isActive={(match, { pathname }) =>
            Boolean(match) ||
            pathname.startsWith('/add') ||
            pathname.startsWith('/remove') ||
            pathname.startsWith('/increase') ||
            pathname.startsWith('/find')
          }
          onClick={() => setIsShown(!isShown)}
        >
          {t('My Dashboard')}
        </StyledNavLink>        
          <StyledNavLink id="stake-nav-link" to="/vote" onClick={() => setIsShown(!isShown)}>
            {t('Deposit')}
          </StyledNavLink>
          <HeaderControls>
            <UserMenu />
          </HeaderControls>
			</HeaderLinks>
      <NavToggle onClick={() => setIsShown(!isShown)}>
        <SideBarMenu size="30" strokeWidth="3" />
      </NavToggle>
    </HeaderFrame>
  )
}
