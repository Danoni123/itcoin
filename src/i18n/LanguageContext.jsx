import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)

function detectInitialLanguage() {
  if (typeof window === 'undefined') return 'en'
  try {
    const saved = window.localStorage.getItem('itcoin-lang')
    if (saved === 'en' || saved === 'ru') return saved
  } catch (e) {
    // ignore storage errors
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage)

  useEffect(() => {
    try {
      window.localStorage.setItem('itcoin-lang', lang)
    } catch (e) {
      // ignore storage errors
    }
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'ru' : 'en'))

  const value = { lang, setLang, toggleLang, t: translations[lang] }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
