import React, {useState} from 'react'
import {
  BookOpen,
  Code,
  Info,
  MessageCircle,
  PieChart,
  Moon,
  Sun,
  ChevronRight,
  ChevronLeft,
  Check,
} from 'react-feather'
import useTheme from 'hooks/useTheme'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import {
  PreferencesMenu as UIKitPreferencesMenu,
  PreferencesMenuItem,
  MenuItemExternal,
  ToggleMenuItem,
  DropdownContent,
} from 'uikit'
import MenuButton from 'uikit/widgets/Menu/components/MenuButton'

function LanguageMenu(
  { close, setLang, currentLanguage}) {
  return (
    <DropdownContent>
      <ToggleMenuItem onClick={close}>
        <ChevronLeft size={16} />
      </ToggleMenuItem>
      {languageList.map((lang) => (
        <MenuButton
          key={lang.locale}
          fullWidth
          onClick={() => setLang(lang)}
          // Safari fix
          style={{ minHeight: "32px", height: "auto", width: "100%"}}
        >
          {lang.language}
          {currentLanguage.code === lang.code && <Check opacity={0.6} size={16} />}
        </MenuButton>
      ))}
    </DropdownContent>    
  )
}
const PreferencesMenu = () => {
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { isDark, toggleTheme } = useTheme()
  const [menu, setMenu] = useState<'main' | 'lang'>('main')
  
  return (
    <>
      <UIKitPreferencesMenu>      
        { menu === "main" ? (
          <>
            <MenuItemExternal href="https://uniswap.org/">
              <div>{t('About')}</div>
              <Info opacity={0.6} size={16} />
            </MenuItemExternal>
            <MenuItemExternal href="https://docs.uniswap.org/">
              {t('Docs')}
              <BookOpen opacity={0.6} size={16} />
            </MenuItemExternal>
            <MenuItemExternal href="https://github.com/Uniswap/uniswap-interface">
              {t('Code')}
              <Code opacity={0.6} size={16} />
            </MenuItemExternal>
            <MenuItemExternal href="https://discord.gg/FCfyBSbCU5">
              {t('Discord')}
              <MessageCircle opacity={0.6} size={16} />
            </MenuItemExternal>
            <MenuItemExternal href="https://info.uniswap.org/#/">
              {t('Analytics')}
              <PieChart opacity={0.6} size={16} />
            </MenuItemExternal>
            <PreferencesMenuItem as="button" onClick={() => setMenu('lang')}>
              {t('Language ')}
              <ChevronRight size={16} opacity={0.6} />
            </PreferencesMenuItem>
            <PreferencesMenuItem as="button" onClick={toggleTheme}>
              <div>{isDark ? t('Light Theme') : t('Dark Theme')}</div>
              {isDark ? <Moon opacity={0.6} size={16} /> : <Sun opacity={0.6} size={16} />}
            </PreferencesMenuItem>
          </>
        ) : (
          <LanguageMenu close={() => setMenu('main')} setLang={setLanguage} currentLanguage={currentLanguage}/>
        )}
      </UIKitPreferencesMenu>
    </>
  )
}

export default PreferencesMenu
