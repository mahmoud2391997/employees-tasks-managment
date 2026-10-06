import { BRAND } from '@/lib/brand'
import type { ReactNode } from 'react'
import { Cairo } from 'next/font/google'

import './globals.css'
import { LanguageProvider } from '@/lib/i18n/provider'
import { getLocale } from '@/lib/i18n/server'

export const metadata = {
  icons: { icon: BRAND.logo, apple: BRAND.logo },
  title: 'أعلاف الكوثر | Al Kawther Feeds',
  description: 'إدارة الموظفين والمهام — أعلاف الكوثر، بحار الجوبة للتجارة.',
}

const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
})

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale()
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={cairo.variable}>
        <LanguageProvider locale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  )
}

