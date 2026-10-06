import { getTranslations } from '@/lib/i18n/server'

import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getServerSession } from '@/server/auth/server-session'
import { FALLBACK_ADMIN_ID } from '@/server/company'
import { prisma } from '@/server/db'
import { VirtualLoginNotice } from '@/components/dashboard/virtual-login-notice'
import { canViewAllEmails, redactEmailForViewer } from '@/lib/email-privacy'
import { getVirtualCompany, servesLocalVirtualData } from '@/server/virtual-data'

export default async function EmployeeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const tr = await getTranslations()

  const session = await getServerSession()
  if (!session?.permissions.includes('employees.view' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">{tr("الموظف")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("ليس لديك صلاحية.")}</p>
      </main>
    )
  }

  if (session.userId === FALLBACK_ADMIN_ID && !servesLocalVirtualData(session.userId)) {
    return <VirtualLoginNotice title={tr("الموظف")} />
  }

  const teamId = session?.profile?.teamId ?? null
  const sampleData = servesLocalVirtualData(session.userId)
  if (!teamId && !sampleData) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">{tr("الموظف")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("لا يوجد فريق مرتبط.")}</p>
      </main>
    )
  }

  const { id } = await params

  const virtual = sampleData ? getVirtualCompany() : null
  const employee = virtual
    ? virtual.employees.find((row) => row.id === id) ?? null
    : await prisma.workforceEmployee.findFirst({
        where: { id, teamId: teamId! },
        include: { profile: true, department: true, manager: true },
      })
  if (!employee) notFound()

  const tasks = virtual
    ? virtual.tasks
        .filter((task) => task.assigneeId === employee.profileId)
        .map((task) => ({ ...task, dueDate: task.dueDate ? new Date(task.dueDate) : null }))
    : await prisma.workforceTask.findMany({
        where: { teamId: teamId!, assigneeId: employee.profileId },
        include: { department: true, creator: true },
        orderBy: [{ createdAt: 'desc' }],
      })

  const canViewEmails = canViewAllEmails({ permissions: session.permissions as any, role: session.profile?.role })
  const viewerEmail = session.email
  const safeEmployeeEmail = redactEmailForViewer(employee.profile.email, viewerEmail, canViewEmails)

  const displayName =
    (employee.profile.firstName || safeEmployeeEmail || tr("مستخدم")) + (employee.profile.lastName ? ` ${employee.profile.lastName}` : '')

  return (
    <main className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div>
          <h1 className="text-xl font-semibold">{displayName}</h1>
          {safeEmployeeEmail ? <p className="ltr mt-1 text-sm text-slate-500">{safeEmployeeEmail}</p> : null}
        </div>
        <Link className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" href="/employees">
          {tr("رجوع →")}</Link>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <InfoCard label={tr("القسم")} value={employee.department?.name ?? '—'} />
        <InfoCard label={tr("المسمى")} value={employee.position ?? '—'} />
        <InfoCard label={tr("الحالة")} value={employee.status} />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-sm font-semibold">{tr("المهام المسندة")}</div>
          <div className="text-xs text-slate-500">{tasks.length} {tr("مهمة")}</div>
        </div>
        <div className="space-y-2">
          {tasks.map((t) => (
            <div key={t.id} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="truncate font-semibold">{t.title}</div>
                  {t.description ? <div className="mt-1 text-sm text-slate-500">{t.description}</div> : null}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <Pill kind="neutral">{tr(t.priority)}</Pill>
                  <Pill kind={t.status === 'COMPLETED' ? 'good' : 'neutral'}>{tr(t.status)}</Pill>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">
                {t.department?.name ? <span>{tr("القسم:")}{t.department.name}</span> : null}
                {t.creator ? (
                  <span>
                    {tr("· أنشأها:")}{' '}
                    {(t.creator.firstName || redactEmailForViewer(t.creator.email, viewerEmail, canViewEmails) || tr("مستخدم")) +
                      (t.creator.lastName ? ` ${t.creator.lastName}` : '')}
                  </span>
                ) : null}
                {t.dueDate ? <span>{tr("· الاستحقاق:")}<span className="ltr">{t.dueDate.toISOString().slice(0, 10)}</span></span> : null}
              </div>
            </div>
          ))}
          {tasks.length === 0 ? <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">{tr("لا توجد مهام مسندة.")}</div> : null}
        </div>
      </div>
    </main>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-lg font-semibold">{value}</div>
    </div>
  )
}

function Pill({ children, kind }: { children: string; kind: 'good' | 'neutral' }) {
  const cls =
    kind === 'good'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
      : 'border-slate-200 bg-slate-50 text-slate-700'
  return <span className={`inline-flex rounded-lg border px-2 py-1 font-semibold ${cls}`}>{children}</span>
}

