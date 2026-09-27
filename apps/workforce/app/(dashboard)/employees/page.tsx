import { getServerSession } from '@/server/auth/server-session'
import { prisma } from '@/server/db'
import { EmployeesContainer } from '@/components/dashboard/employees-container'
import { canViewAllEmails, redactEmailForViewer } from '@/lib/email-privacy'

export default async function EmployeesPage() {
  const session = await getServerSession()
  if (!session?.permissions.includes('employees.view' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">الموظفون</h1>
        <p className="mt-2 text-sm text-slate-500">ليس لديك صلاحية.</p>
      </main>
    )
  }
  const teamId = session?.profile?.teamId ?? null

  if (!teamId) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">الموظفون</h1>
        <p className="mt-2 text-sm text-slate-500">لا يوجد فريق مرتبط.</p>
      </main>
    )
  }

  const take = 50
  const skip = 0

  const [totalEmployees, employees, departments, profiles] = await Promise.all([
    prisma.workforceEmployee.count({ where: { teamId } }),
    prisma.workforceEmployee.findMany({
      where: { teamId },
      include: { profile: true, department: true, manager: true },
      orderBy: [{ createdAt: 'desc' }],
      take,
      skip,
    }),
    prisma.workforceDepartment.findMany({ where: { teamId }, select: { id: true, name: true }, orderBy: [{ createdAt: 'desc' }] }),
    prisma.workforceProfile.findMany({ where: { teamId }, select: { id: true, firstName: true, lastName: true, email: true }, orderBy: [{ createdAt: 'desc' }] }),
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
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">الموظفون</h1>
        <p className="mt-2 text-sm text-slate-500">سجل الموظفين داخل الفريق مع تطبيق الصلاحيات.</p>
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

