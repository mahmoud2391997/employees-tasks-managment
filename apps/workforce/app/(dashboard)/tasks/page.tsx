import { getTranslations } from '@/lib/i18n/server'

import { getServerSession } from '@/server/auth/server-session'
import { FALLBACK_ADMIN_ID } from '@/server/company'
import { prisma } from '@/server/db'
import { TasksContainer } from '@/components/dashboard/tasks-container'
import { VirtualLoginNotice } from '@/components/dashboard/virtual-login-notice'
import { canViewAllEmails, redactEmailForViewer } from '@/lib/email-privacy'
import { getVirtualCompany, servesLocalVirtualData, VIRTUAL_SAMPLE_NOTE } from '@/server/virtual-data'

export default async function TasksPage() {
  const tr = await getTranslations()

  const session = await getServerSession()
  if (!session?.permissions.includes('tasks.view' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">{tr("المهام")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("ليس لديك صلاحية.")}</p>
      </main>
    )
  }
  if (session.userId === FALLBACK_ADMIN_ID && !servesLocalVirtualData(session.userId)) {
    return <VirtualLoginNotice title={tr("المهام")} />
  }

  const teamId = session?.profile?.teamId ?? null
  const sampleData = servesLocalVirtualData(session.userId)

  if (!teamId && !sampleData) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">{tr("المهام")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("لا يوجد فريق مرتبط.")}</p>
      </main>
    )
  }

  const take = 50
  const skip = 0

  const virtual = sampleData ? getVirtualCompany() : null
  const [totalTasks, tasks, departments, profiles] = virtual
    ? [virtual.tasks.length, virtual.tasks.slice(skip, skip + take), virtual.departments.map((d) => ({ id: d.id, name: d.name })), virtual.profiles]
    : await Promise.all([
        prisma.workforceTask.count({ where: { teamId: teamId! } }),
        prisma.workforceTask.findMany({
          where: { teamId: teamId! },
          include: { department: true, assignee: true, creator: true },
          orderBy: [{ createdAt: 'desc' }],
          take,
          skip,
        }),
        prisma.workforceDepartment.findMany({ where: { teamId: teamId! }, select: { id: true, name: true }, orderBy: [{ createdAt: 'desc' }] }),
        prisma.workforceProfile.findMany({ where: { teamId: teamId! }, select: { id: true, firstName: true, lastName: true, email: true }, orderBy: [{ createdAt: 'desc' }] }),
      ])

  const canViewEmails = canViewAllEmails({ permissions: session.permissions as any, role: session.profile?.role })
  const viewerEmail = session.email
  const safeTasks = tasks.map((t) => ({
    ...t,
    assignee: t.assignee ? { ...t.assignee, email: redactEmailForViewer(t.assignee.email, viewerEmail, canViewEmails) } : null,
    creator: t.creator ? { ...t.creator, email: redactEmailForViewer(t.creator.email, viewerEmail, canViewEmails) } : null,
  }))
  const safeProfiles = profiles.map((p) => ({ ...p, email: redactEmailForViewer(p.email, viewerEmail, canViewEmails) }))

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">{tr("المهام")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("لوحة كانبان لإدارة المهام مع تطبيق الصلاحيات.")}</p>
        {sampleData ? <p className="mt-1 text-sm text-amber-700">{VIRTUAL_SAMPLE_NOTE}</p> : null}
      </div>
      <TasksContainer
        initialTasks={safeTasks as any}
        initialTotal={totalTasks}
        initialHasMore={skip + tasks.length < totalTasks}
        departments={departments as any}
        profiles={safeProfiles as any}
        currentProfileId={session.profile?.id ?? ''}
        permissions={session.permissions as any}
      />
    </main>
  )
}

