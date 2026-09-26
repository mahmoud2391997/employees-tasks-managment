'use client'

import { useState, type CSSProperties, type ReactNode } from 'react'

import { Sidebar } from '@/components/dashboard/sidebar'

const SIDEBAR_OPEN = '16rem'
const SIDEBAR_CLOSED = '72px'

export function DashboardShell({
  children,
  name,
  role,
  permissions,
  companyName,
}: {
  children: ReactNode
  name: string
  role?: string | null
  permissions: string[]
  companyName: string
}) {
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
      <main className="min-h-screen pr-[var(--sidebar-width)] transition-[padding] duration-200 ease-in-out">
        <div className="mx-auto max-w-[1400px] p-4 sm:p-6 md:p-8">{children}</div>
      </main>
    </div>
  )
}
