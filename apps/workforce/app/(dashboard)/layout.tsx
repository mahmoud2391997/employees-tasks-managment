import { BRAND } from '@/lib/brand'
import { getTranslations } from '@/lib/i18n/server'

import type { ReactNode } from 'react'
import { redirect } from 'next/navigation'

import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { getServerSession } from '@/server/auth/server-session'

export const dynamic = 'force-dynamic'

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const tr = await getTranslations()

  const session = await getServerSession()
  if (!session) redirect('/auth/login')

  const perms = session.permissions
  const companyName = tr(BRAND.name)

  return (
    <DashboardShell
      name={`${session.profile?.firstName || ''} ${session.profile?.lastName || ''}`.trim()}
      role={session.profile?.role}
      permissions={perms as string[]}
      demo={session.demo}
      companyName={companyName}
    >
      {children}
    </DashboardShell>
  )
}

