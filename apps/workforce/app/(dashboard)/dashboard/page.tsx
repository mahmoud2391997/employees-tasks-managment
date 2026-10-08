import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { taskVisibilityWhere } from '@/lib/task-access'
import { getDemoCompany } from '@/server/demo-sandbox'
import { getTranslations } from '@/lib/i18n/server'

import { getServerSession } from '@/server/auth/server-session'
import { FALLBACK_ADMIN_ID } from '@/server/company'
import { prisma } from '@/server/db'
import { TaskStatusChart } from '@/components/dashboard/task-status-chart'
import { VirtualLoginNotice } from '@/components/dashboard/virtual-login-notice'
import { servesVirtualDemoData, VIRTUAL_SAMPLE_NOTE, virtualDashboardStats } from '@/server/virtual-data'

export default async function DashboardPage() {
  const tr = await getTranslations()

  const session = await getServerSession()
  if (!session?.permissions.includes('dashboard.view' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("لوحة التحكم")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("ليس لديك صلاحية.")}</p>
      </main>
    )
  }
  const teamId = session?.profile?.teamId ?? null

  if (session.userId === FALLBACK_ADMIN_ID && !servesVirtualDemoData(session.userId)) {
    return <VirtualLoginNotice title={tr("لوحة التحكم")} />
  }

  if (!teamId && session.userId !== FALLBACK_ADMIN_ID) {
    return (
      <main className="space-y-4">
        <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-bold tracking-tight">{tr("لوحة التحكم")}</h1>
          <p className="mt-2 text-sm text-slate-500">{tr("هذا الحساب غير مرتبط بالشركة. اطلب من المسؤول إضافتك.")}</p>
        </div>
      </main>
    )
  }

  const taskWhere = taskVisibilityWhere(teamId ?? '', session.profile, session.permissions)

  const sampleData = servesVirtualDemoData(session.userId)
  const virtualStats = sampleData ? virtualDashboardStats(await getDemoCompany()) : null

  const [employees, departments, tasks, completed] = virtualStats
    ? [virtualStats.employees, virtualStats.departments, virtualStats.tasks, virtualStats.completed]
    : await Promise.all([
        prisma.workforceEmployee.count({ where: { teamId: teamId! } }),
        prisma.workforceDepartment.count({ where: { teamId: teamId! } }),
        prisma.workforceTask.count({ where: taskWhere }),
        prisma.workforceTask.count({ where: { ...taskWhere, status: 'COMPLETED' } }),
      ])

  const statusRows = virtualStats
    ? virtualStats.statusRows
    : await prisma.workforceTask
        .groupBy({
          by: ['status'],
          where: taskWhere,
          _count: { status: true },
        })
        .then((grouped) =>
          ['TODO', 'IN_PROGRESS', 'REVIEW', 'COMPLETED'].map((status) => ({
            status,
            count: grouped.find((g) => g.status === status)?._count.status ?? 0,
          })),
        )

  const profileId = session.profile?.id ?? ''
  const canViewTasks = session.permissions.includes('tasks.view')
  const canSeeCreated = canViewTasks && ['ADMIN', 'MANAGER'].includes(session.profile?.role ?? '')
  const demoCompany = sampleData ? await getDemoCompany() : null
  const taskSelect = { id: true, title: true, status: true, dueDate: true, assignee: { select: { firstName: true, lastName: true } } } as const
  const [assignedTasks, createdTasks] = demoCompany
    ? [demoCompany.tasks.filter(t => t.assigneeId === profileId).slice(0, 10), demoCompany.tasks.filter(t => t.createdById === profileId && t.assigneeId && t.assigneeId !== profileId).slice(0, 10)]
    : await Promise.all([
        canViewTasks ? prisma.workforceTask.findMany({ where: { teamId: teamId!, assigneeId: profileId }, select: taskSelect, orderBy: { createdAt: 'desc' }, take: 10 }) : [],
        canSeeCreated ? prisma.workforceTask.findMany({ where: { teamId: teamId!, createdById: profileId, assigneeId: { not: null }, NOT: { assigneeId: profileId } }, select: taskSelect, orderBy: { createdAt: 'desc' }, take: 10 }) : [],
      ])

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("لوحة التحكم")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("إحصائيات عامة عن الفريق والمهام.")}</p>
        {sampleData ? <p className="mt-2 text-sm text-amber-700">{tr(VIRTUAL_SAMPLE_NOTE)}</p> : null}
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        <Stat label={tr("الموظفون")} value={String(employees)} />
        <Stat label={tr("الأقسام")} value={String(departments)} />
        <Stat label={tr("المهام")} value={String(tasks)} />
        <Stat label={tr("المكتملة")} value={String(completed)} />
      </div>

      {canViewTasks ? <div className="grid gap-4 lg:grid-cols-2">
        {[{ title: tr('المسندة لي'), rows: assignedTasks }, ...(canSeeCreated ? [{ title: tr('مهام أنشأتها للآخرين'), rows: createdTasks }] : [])].map(section => (
          <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-semibold">{section.title}</h2>
              <Link href="/tasks" className="text-sm text-brand-600 hover:underline">{tr('عرض المهام')}</Link>
            </div>
            <p className="mb-3 text-xs text-slate-500">{tr('أحدث 10 مهام')}</p>
            {section.rows.length ? <ul className="divide-y divide-slate-100">
              {section.rows.map(task => <li key={task.id} className="py-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="break-words text-sm font-medium">{task.title}</span>
                  <Badge variant="neutral">{tr(task.status)}</Badge>
                </div>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
                  {task.assignee ? <span>{tr('الموظف المسند إليه')}: {[task.assignee.firstName, task.assignee.lastName].filter(Boolean).join(' ') || tr('مستخدم')}</span> : null}
                  {task.dueDate ? <span>{tr('تاريخ الاستحقاق')}: {new Date(task.dueDate).toISOString().slice(0, 10)}</span> : null}
                </div>
              </li>)}
            </ul> : <p className="py-6 text-sm text-slate-500">{tr('لا توجد مهام')}</p>}
          </section>
        ))}
      </div> : null}

      <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
        <div className="mb-2 text-sm font-semibold">{tr("حالة المهام")}</div>
        <TaskStatusChart data={statusRows} />
      </div>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-bold">{value}</div>
    </div>
  )
}

