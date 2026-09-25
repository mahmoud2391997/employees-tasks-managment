import type { ReactNode } from 'react'
import { Cairo } from 'next/font/google'

import './globals.css'

export const metadata = {
  title: 'Workforce',
  description: 'Teams and tasks management (separate from ERP).',
}

const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.variable}>
        {children}
      </body>
    </html>
  )
}

