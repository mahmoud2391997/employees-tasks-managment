'use client'
import { createContext, useContext, type ReactNode } from 'react'
import { translate, type Locale } from './messages'
const LocaleContext = createContext<Locale>('ar')
export function LanguageProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}
export function useTranslations() {
  const locale = useContext(LocaleContext)
  return (key: string, values?: Record<string, string | number>) => translate(locale, key, values)
}
export function useLocale() { return useContext(LocaleContext) }
export function LanguageSwitch() {
  const locale = useLocale()
  return <div className="flex items-center gap-1" aria-label="Language / اللغة">
    {(['ar', 'en'] as const).map((language) => <button key={language} type="button" lang={language}
      aria-pressed={locale === language} className={`rounded-lg border px-3 py-2 text-sm ${locale === language ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-slate-200 bg-white text-slate-600'}`}
      onClick={() => { document.cookie = `wf_locale=${language}; Path=/; Max-Age=31536000; SameSite=Lax`; window.location.reload() }}>
      {language === 'ar' ? 'العربية' : 'English'}
    </button>)}
  </div>
}
