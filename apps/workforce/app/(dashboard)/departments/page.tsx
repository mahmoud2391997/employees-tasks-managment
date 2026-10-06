import { getTranslations } from '@/lib/i18n/server'

import { getServerSession } from '@/server/auth/server-session'
import { FALLBACK_ADMIN_ID } from '@/server/company'
import { prisma } from '@/server/db'
import { DepartmentsContainer } from '@/components/dashboard/departments-container'
import { VirtualLoginNotice } from '@/components/dashboard/virtual-login-notice'
import { getVirtualCompany, servesVirtualDemoData, VIRTUAL_SAMPLE_NOTE } from '@/server/virtual-data'

export default async function DepartmentsPage() {
  const tr = await getTranslations()

  const session = await getServerSession()
  if (!session?.permissions.includes('departments.view' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الأقسام")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("ليس لديك صلاحية.")}</p>
      </main>
    )
  }
  if (session.userId === FALLBACK_ADMIN_ID && !servesVirtualDemoData(session.userId)) {
    return <VirtualLoginNotice title={tr("الأقسام")} />
  }

  const teamId = session?.profile?.teamId ?? null
  const sampleData = servesVirtualDemoData(session.userId)

  if (!teamId && !sampleData) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الأقسام")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("لا يوجد فريق مرتبط.")}</p>
      </main>
    )
  }

  const virtual = sampleData ? getVirtualCompany() : null
  const [departments, profiles] = virtual
    ? [virtual.departments, virtual.profiles]
    : await Promise.all([
        prisma.workforceDepartment.findMany({ where: { teamId: teamId! }, include: { manager: true }, orderBy: [{ createdAt: 'desc' }] }),
        prisma.workforceProfile.findMany({
          where: { teamId: teamId! },
          select: { id: true, firstName: true, lastName: true, email: true },
          orderBy: [{ createdAt: 'desc' }],
        }),
      ])

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الأقسام")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("إدارة الأقسام.")}</p>
        {sampleData ? <p className="mt-1 text-sm text-amber-700">{tr(VIRTUAL_SAMPLE_NOTE)}</p> : null}
      </div>
      <DepartmentsContainer initialDepartments={departments as any} profiles={profiles as any} permissions={session.permissions as any} />
    </main>
  )
}

