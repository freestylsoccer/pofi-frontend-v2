import React from 'react'
import useTheme from 'hooks/useTheme'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import ThemeSwitcher from 'uikit/widgets/Menu/components/ThemeSwitcher'
import LangSelector from 'uikit/widgets/Menu/components/LangSelector'


export default function PageFooter() {
  const { isDark, toggleTheme } = useTheme()
  const { currentLanguage, setLanguage } = useTranslation()
  return (
    <>
    <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
    <LangSelector currentLang={currentLanguage.code}   langs={languageList}   setLang={setLanguage} />
   </>
  )
}

