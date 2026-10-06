import { cookies } from 'next/headers'
import { translate, type Locale } from './messages'
export async function getLocale(): Promise<Locale> { return (await cookies()).get('wf_locale')?.value === 'en' ? 'en' : 'ar' }
export async function getTranslations() {
  const locale = await getLocale()
  return (key: string, values?: Record<string, string | number>) => translate(locale, key, values)
}
