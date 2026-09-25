import { getServerSession } from '@/server/auth/server-session'
import { prisma } from '@/server/db'
import { TaskStatusChart } from '@/components/dashboard/task-status-chart'

export default async function DashboardPage() {
  const session = await getServerSession()
  if (!session?.permissions.includes('dashboard.view' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">لوحة التحكم</h1>
        <p className="mt-2 text-sm text-slate-500">ليس لديك صلاحية.</p>
      </main>
    )
  }
  const teamId = session?.profile?.teamId ?? null

  if (!teamId) {
    return (
      <main className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-xl font-semibold">لوحة التحكم</h1>
          <p className="mt-2 text-sm text-slate-500">هذا الحساب غير مرتبط بالشركة. اطلب من المسؤول إضافتك.</p>
        </div>
      </main>
    )
  }

  const [employees, departments, tasks, completed] = await Promise.all([
    prisma.workforceEmployee.count({ where: { teamId } }),
    prisma.workforceDepartment.count({ where: { teamId } }),
    prisma.workforceTask.count({ where: { teamId } }),
    prisma.workforceTask.count({ where: { teamId, status: 'COMPLETED' } }),
  ])

  const grouped = await prisma.workforceTask.groupBy({
    by: ['status'],
    where: { teamId },
    _count: { status: true },
  })

  const statusRows = ['TODO', 'IN_PROGRESS', 'REVIEW', 'COMPLETED'].map((status) => ({
    status,
    count: grouped.find((g) => g.status === status)?._count.status ?? 0,
  }))

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">لوحة التحكم</h1>
        <p className="mt-2 text-sm text-slate-500">إحصائيات عامة عن الفريق والمهام.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        <Stat label="الموظفون" value={String(employees)} />
        <Stat label="الأقسام" value={String(departments)} />
        <Stat label="المهام" value={String(tasks)} />
        <Stat label="المكتملة" value={String(completed)} />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-2 text-sm font-semibold">حالة المهام</div>
        <TaskStatusChart data={statusRows} />
      </div>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-bold">{value}</div>
    </div>
  )
}

