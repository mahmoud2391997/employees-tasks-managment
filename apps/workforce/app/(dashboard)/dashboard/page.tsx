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

  const sampleData = servesVirtualDemoData(session.userId)
  const virtualStats = sampleData ? virtualDashboardStats(await getDemoCompany()) : null

  const [employees, departments, tasks, completed] = virtualStats
    ? [virtualStats.employees, virtualStats.departments, virtualStats.tasks, virtualStats.completed]
    : await Promise.all([
        prisma.workforceEmployee.count({ where: { teamId: teamId! } }),
        prisma.workforceDepartment.count({ where: { teamId: teamId! } }),
        prisma.workforceTask.count({ where: { teamId: teamId! } }),
        prisma.workforceTask.count({ where: { teamId: teamId!, status: 'COMPLETED' } }),
      ])

  const statusRows = virtualStats
    ? virtualStats.statusRows
    : await prisma.workforceTask
        .groupBy({
          by: ['status'],
          where: { teamId: teamId! },
          _count: { status: true },
        })
        .then((grouped) =>
          ['TODO', 'IN_PROGRESS', 'REVIEW', 'COMPLETED'].map((status) => ({
            status,
            count: grouped.find((g) => g.status === status)?._count.status ?? 0,
          })),
        )

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

