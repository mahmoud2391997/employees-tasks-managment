import {getPublicBranding,getTeamBranding} from '@/server/branding'
import {getServerSession} from '@/server/auth/server-session'
import {brandingFromDetails,brandingVariables} from '@/lib/branding'
import type {CSSProperties} from 'react'
import { BRAND } from '@/lib/brand'
import type { ReactNode } from 'react'
import { Cairo } from 'next/font/google'

import './globals.css'
import { LanguageProvider } from '@/lib/i18n/provider'
import { getLocale } from '@/lib/i18n/server'

const defaultMetadata = {
  icons: { icon: BRAND.logo, apple: BRAND.logo },
  title: `${BRAND.name} | ${BRAND.englishName}`,
  description: 'رِواق — مكتب افتراضي يجمع الأقسام والفرق والمهام. Riwaq — a virtual office for departments, teams, and tasks.',
}

async function requestBranding(){const session=await getServerSession();return session?.demo?brandingFromDetails(null):session?getTeamBranding(session.profile?.teamId):getPublicBranding()}
export async function generateMetadata(){const branding=await requestBranding();return {...defaultMetadata,title:branding.systemName}}

const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
})

export default async function RootLayout({ children }: { children: ReactNode }) {
  const [locale,branding] = await Promise.all([getLocale(),requestBranding()])
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={cairo.variable} style={brandingVariables(branding) as CSSProperties}>
        <LanguageProvider locale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  )
}

