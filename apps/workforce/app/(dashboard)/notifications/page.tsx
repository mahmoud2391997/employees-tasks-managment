import { getServerSession } from '@/server/auth/server-session'
import { prisma } from '@/server/db'
import { NotificationsContainer } from '@/components/dashboard/notifications-container'

export default async function NotificationsPage() {
  const session = await getServerSession()
  const profileId = session?.profile?.id ?? null

  if (!profileId) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">الإشعارات</h1>
        <p className="mt-2 text-sm text-slate-500">غير مصرح.</p>
      </main>
    )
  }

  const take = 50
  const skip = 0
  const [total, rows] = await Promise.all([
    prisma.workforceNotification.count({ where: { userId: profileId } }),
    prisma.workforceNotification.findMany({
      where: { userId: profileId },
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
      </div>
      <NotificationsContainer initial={rows as any} initialTotal={total} initialHasMore={skip + rows.length < total} />
    </main>
  )
}

