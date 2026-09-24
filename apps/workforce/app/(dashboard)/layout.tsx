import type { ReactNode } from 'react'
import { redirect } from 'next/navigation'

import { Sidebar } from '@/components/dashboard/sidebar'
import { getServerSession } from '@/server/auth/server-session'

export const dynamic = 'force-dynamic'

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession()
  if (!session) redirect('/auth/login')

  const perms = session.permissions
  const hasTeam = Boolean(session.profile?.teamId)

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        name={`${session.profile?.firstName || ''} ${session.profile?.lastName || ''}`.trim()}
        role={session.profile?.role}
        permissions={perms as string[]}
        hasTeam={hasTeam}
      />
      <main className="min-h-screen pr-[72px] transition-[padding] duration-200 md:pr-64">
        <div className="mx-auto max-w-[1400px] p-6 md:p-8">{children}</div>
      </main>
    </div>
  )
}

