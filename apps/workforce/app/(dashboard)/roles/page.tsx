import { getDemoCompany } from '@/server/demo-sandbox'
import { getTranslations } from '@/lib/i18n/server'

import { getServerSession } from '@/server/auth/server-session'
import { FALLBACK_ADMIN_ID } from '@/server/company'
import { prisma } from '@/server/db'
import { RolesContainer } from '@/components/dashboard/roles-container'
import { VirtualLoginNotice } from '@/components/dashboard/virtual-login-notice'
import { servesVirtualDemoData, VIRTUAL_SAMPLE_NOTE } from '@/server/virtual-data'

export default async function RolesPage() {
  const tr = await getTranslations()

  const session = await getServerSession()
  if (!session?.permissions.includes('roles.manage' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الأدوار")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("ليس لديك صلاحية.")}</p>
      </main>
    )
  }
  if (session.userId === FALLBACK_ADMIN_ID && !servesVirtualDemoData(session.userId)) {
    return <VirtualLoginNotice title={tr("الأدوار")} />
  }

  const teamId = session?.profile?.teamId ?? null
  const sampleData = servesVirtualDemoData(session.userId)

  if (!teamId && !sampleData) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الأدوار")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("لا يوجد فريق مرتبط.")}</p>
      </main>
    )
  }

  const roles = sampleData
    ? (await getDemoCompany()).roles
    : await prisma.workforceCustomRole.findMany({
        where: { teamId: teamId! },
        orderBy: [{ createdAt: 'asc' }],
      })

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الأدوار")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("إدارة الأدوار والصلاحيات.")}</p>
        {sampleData ? <p className="mt-1 text-sm text-amber-700">{tr(VIRTUAL_SAMPLE_NOTE)}</p> : null}
      </div>
      <RolesContainer initialRoles={roles as any}  />
    </main>
  )
}

