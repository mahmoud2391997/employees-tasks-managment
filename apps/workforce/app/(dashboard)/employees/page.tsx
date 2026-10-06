import { getTranslations } from '@/lib/i18n/server'

import { getServerSession } from '@/server/auth/server-session'
import { FALLBACK_ADMIN_ID } from '@/server/company'
import { prisma } from '@/server/db'
import { EmployeesContainer } from '@/components/dashboard/employees-container'
import { VirtualLoginNotice } from '@/components/dashboard/virtual-login-notice'
import { canViewAllEmails, redactEmailForViewer } from '@/lib/email-privacy'
import { getVirtualCompany, servesVirtualDemoData, VIRTUAL_SAMPLE_NOTE } from '@/server/virtual-data'

export default async function EmployeesPage() {
  const tr = await getTranslations()

  const session = await getServerSession()
  if (!session?.permissions.includes('employees.view' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الموظفون")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("ليس لديك صلاحية.")}</p>
      </main>
    )
  }
  if (session.userId === FALLBACK_ADMIN_ID && !servesVirtualDemoData(session.userId)) {
    return <VirtualLoginNotice title={tr("الموظفون")} />
  }

  const teamId = session?.profile?.teamId ?? null
  const sampleData = servesVirtualDemoData(session.userId)

  if (!teamId && !sampleData) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الموظفون")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("لا يوجد فريق مرتبط.")}</p>
      </main>
    )
  }

  const take = 50
  const skip = 0

  const virtual = sampleData ? getVirtualCompany() : null
  const [totalEmployees, employees, departments, profiles] = virtual
    ? [virtual.employees.length, virtual.employees.slice(skip, skip + take), virtual.departments.map((d) => ({ id: d.id, name: d.name })), virtual.profiles]
    : await Promise.all([
        prisma.workforceEmployee.count({ where: { teamId: teamId! } }),
        prisma.workforceEmployee.findMany({
          where: { teamId: teamId! },
          include: { profile: true, department: true, manager: true },
          orderBy: [{ createdAt: 'desc' }],
          take,
          skip,
        }),
        prisma.workforceDepartment.findMany({ where: { teamId: teamId! }, select: { id: true, name: true }, orderBy: [{ createdAt: 'desc' }] }),
        prisma.workforceProfile.findMany({ where: { teamId: teamId! }, select: { id: true, firstName: true, lastName: true, email: true }, orderBy: [{ createdAt: 'desc' }] }),
      ])

  const canViewEmails = canViewAllEmails({ permissions: session.permissions as any, role: session.profile?.role })
  const viewerEmail = session.email
  const safeEmployees = employees.map((e) => ({
    ...e,
    profile: { ...e.profile, email: redactEmailForViewer(e.profile.email, viewerEmail, canViewEmails) },
    manager: e.manager ? { ...e.manager, email: redactEmailForViewer(e.manager.email, viewerEmail, canViewEmails) } : null,
  }))
  const safeProfiles = profiles.map((p) => ({ ...p, email: redactEmailForViewer(p.email, viewerEmail, canViewEmails) }))

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الموظفون")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("اعثر على أعضاء فريقك وأدر بياناتهم في مكان واحد.")}</p>
        {sampleData ? <p className="mt-1 text-sm text-amber-700">{tr(VIRTUAL_SAMPLE_NOTE)}</p> : null}
      </div>
      <EmployeesContainer
        initialEmployees={safeEmployees as any}
        initialTotal={totalEmployees}
        initialHasMore={skip + employees.length < totalEmployees}
        departments={departments as any}
        profiles={safeProfiles as any}
        permissions={session.permissions as any}
      />
    </main>
  )
}

