import { getServerSession } from '@/server/auth/server-session'
import { prisma } from '@/server/db'
import { TasksContainer } from '@/components/dashboard/tasks-container'
import { canViewAllEmails, redactEmailForViewer } from '@/lib/email-privacy'

export default async function TasksPage() {
  const session = await getServerSession()
  if (!session?.permissions.includes('tasks.view' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">المهام</h1>
        <p className="mt-2 text-sm text-slate-500">ليس لديك صلاحية.</p>
      </main>
    )
  }
  const teamId = session?.profile?.teamId ?? null

  if (!teamId) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">المهام</h1>
        <p className="mt-2 text-sm text-slate-500">لا يوجد فريق مرتبط.</p>
      </main>
    )
  }

  const take = 50
  const skip = 0

  const [totalTasks, tasks, departments, profiles] = await Promise.all([
    prisma.workforceTask.count({ where: { teamId } }),
    prisma.workforceTask.findMany({
      where: { teamId },
      include: { department: true, assignee: true, creator: true },
      orderBy: [{ createdAt: 'desc' }],
      take,
      skip,
    }),
    prisma.workforceDepartment.findMany({ where: { teamId }, select: { id: true, name: true }, orderBy: [{ createdAt: 'desc' }] }),
    prisma.workforceProfile.findMany({ where: { teamId }, select: { id: true, firstName: true, lastName: true, email: true }, orderBy: [{ createdAt: 'desc' }] }),
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
        <h1 className="text-xl font-semibold">المهام</h1>
        <p className="mt-2 text-sm text-slate-500">لوحة كانبان لإدارة المهام مع تطبيق الصلاحيات.</p>
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

