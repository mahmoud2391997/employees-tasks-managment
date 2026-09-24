import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getServerSession } from '@/server/auth/server-session'
import { prisma } from '@/server/db'

export default async function EmployeeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession()
  if (!session?.permissions.includes('employees.view' as any)) {
    return (
      <main className="rounded-lg border border-[#d0d7de] bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Employee</h1>
        <p className="mt-2 text-sm text-[#656d76]">ليس لديك صلاحية.</p>
      </main>
    )
  }

  const teamId = session?.profile?.teamId ?? null
  if (!teamId) {
    return (
      <main className="rounded-lg border border-[#d0d7de] bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Employee</h1>
        <p className="mt-2 text-sm text-[#656d76]">لا يوجد فريق مرتبط.</p>
      </main>
    )
  }

  const { id } = await params

  const employee = await prisma.workforceEmployee.findFirst({
    where: { id, teamId },
    include: { profile: true, department: true, manager: true },
  })
  if (!employee) notFound()

  const tasks = await prisma.workforceTask.findMany({
    where: { teamId, assigneeId: employee.profileId },
    include: { department: true, creator: true },
    orderBy: [{ createdAt: 'desc' }],
  })

  const displayName =
    (employee.profile.firstName || employee.profile.email) + (employee.profile.lastName ? ` ${employee.profile.lastName}` : '')

  return (
    <main className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#d0d7de] bg-white p-5 shadow-sm">
        <div>
          <h1 className="text-xl font-semibold">{displayName}</h1>
          <p className="mt-1 text-sm text-[#656d76]">{employee.profile.email}</p>
        </div>
        <Link className="rounded-md border border-[#d0d7de] bg-[#f6f8fa] px-3 py-2 text-sm font-semibold" href="/employees">
          ← Back
        </Link>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <InfoCard label="Department" value={employee.department?.name ?? '—'} />
        <InfoCard label="Position" value={employee.position ?? '—'} />
        <InfoCard label="Status" value={employee.status} />
      </div>

      <div className="rounded-lg border border-[#d0d7de] bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-sm font-semibold">Assigned tasks</div>
          <div className="text-xs text-[#656d76]">{tasks.length} tasks</div>
        </div>
        <div className="space-y-2">
          {tasks.map((t) => (
            <div key={t.id} className="rounded-lg border border-[#d0d7de] bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="truncate font-semibold">{t.title}</div>
                  {t.description ? <div className="mt-1 text-sm text-[#656d76]">{t.description}</div> : null}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <Pill kind="neutral">{t.priority}</Pill>
                  <Pill kind={t.status === 'COMPLETED' ? 'good' : 'neutral'}>{t.status}</Pill>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-[#656d76]">
                {t.department?.name ? <span>Dept: {t.department.name}</span> : null}
                {t.creator ? <span>· Created by: {(t.creator.firstName || t.creator.email) + (t.creator.lastName ? ` ${t.creator.lastName}` : '')}</span> : null}
                {t.dueDate ? <span>· Due: {t.dueDate.toISOString().slice(0, 10)}</span> : null}
              </div>
            </div>
          ))}
          {tasks.length === 0 ? <div className="rounded-lg border border-[#d0d7de] bg-[#f6f8fa] p-6 text-sm text-[#656d76]">No tasks assigned.</div> : null}
        </div>
      </div>
    </main>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#d0d7de] bg-white p-5 shadow-sm">
      <div className="text-sm text-[#656d76]">{label}</div>
      <div className="mt-2 text-lg font-semibold">{value}</div>
    </div>
  )
}

function Pill({ children, kind }: { children: string; kind: 'good' | 'neutral' }) {
  const cls =
    kind === 'good'
      ? 'border-[#1f883d33] bg-[#dafbe1] text-[#1f883d]'
      : 'border-[#d0d7de] bg-[#f6f8fa] text-[#656d76]'
  return <span className={`inline-flex rounded-md border px-2 py-1 font-semibold ${cls}`}>{children}</span>
}

