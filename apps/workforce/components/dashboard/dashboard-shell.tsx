'use client'

import { useState, type CSSProperties, type ReactNode } from 'react'

import { useTranslations } from '@/lib/i18n/provider'
import { Sidebar } from '@/components/dashboard/sidebar'

const SIDEBAR_OPEN = '16rem'
const SIDEBAR_CLOSED = '72px'

export function DashboardShell({
  children,
  name,
  role,
  permissions,
  companyName,
  demo,
}: {
  children: ReactNode
  name: string
  role?: string | null
  permissions: string[]
  companyName: string
  demo?: boolean
}) {
  const tr = useTranslations()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className="min-h-screen bg-slate-50"
      style={{ '--sidebar-width': collapsed ? SIDEBAR_CLOSED : SIDEBAR_OPEN } as CSSProperties}
    >
      <Sidebar
        name={name}
        role={role}
        permissions={permissions}
        companyName={companyName}
        collapsed={collapsed}
        onToggle={() => setCollapsed((value) => !value)}
      />
      <main className="min-h-screen ps-[var(--sidebar-width)] transition-[padding] duration-200 ease-in-out">
        <div className="mx-auto max-w-[1400px] p-4 sm:p-6 md:p-8">
          {demo ? <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <span>{tr('الوضع التجريبي')}</span>
            <form method="post" action="/api/auth/logout"><button className="font-semibold underline">{tr('إنهاء العرض التجريبي')}</button></form>
          </div> : null}
          {children}
        </div>
      </main>
    </div>
  )
}
