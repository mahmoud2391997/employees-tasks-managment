import { getServerSession } from '@/server/auth/server-session'
import { FALLBACK_ADMIN_ID } from '@/server/company'
import { prisma } from '@/server/db'
import { NotificationsContainer } from '@/components/dashboard/notifications-container'
import { VirtualLoginNotice } from '@/components/dashboard/virtual-login-notice'
import { getVirtualCompany, servesLocalVirtualData, VIRTUAL_SAMPLE_NOTE } from '@/server/virtual-data'

export default async function NotificationsPage() {
  const session = await getServerSession()
  const profileId = session?.profile?.id ?? null

  if (session?.userId === FALLBACK_ADMIN_ID && !servesLocalVirtualData(session.userId)) {
    return <VirtualLoginNotice title="الإشعارات" />
  }

  const sampleData = servesLocalVirtualData(session?.userId)

  if (!profileId && !sampleData) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">الإشعارات</h1>
        <p className="mt-2 text-sm text-slate-500">غير مصرح.</p>
      </main>
    )
  }

  const take = 50
  const skip = 0
  const virtualRows = sampleData ? getVirtualCompany().notifications.filter((row) => row.userId === profileId) : null
  const [total, rows] = virtualRows
    ? [virtualRows.length, virtualRows.slice(skip, skip + take)]
    : await Promise.all([
        prisma.workforceNotification.count({ where: { userId: profileId! } }),
        prisma.workforceNotification.findMany({
          where: { userId: profileId! },
          orderBy: [{ createdAt: 'desc' }],
          take,
          skip,
        }),
      ])

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">الإشعارات</h1>
        <p className="mt-2 text-sm text-slate-500">آخر التنبيهات.</p>
        {sampleData ? <p className="mt-1 text-sm text-amber-700">{VIRTUAL_SAMPLE_NOTE}</p> : null}
      </div>
      <NotificationsContainer initial={rows as any} initialTotal={total} initialHasMore={skip + rows.length < total} />
    </main>
  )
}

