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

  const rows = await prisma.workforceNotification.findMany({
    where: { userId: profileId },
    orderBy: [{ createdAt: 'desc' }],
  })

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">الإشعارات</h1>
        <p className="mt-2 text-sm text-slate-500">آخر التنبيهات.</p>
      </div>
      <NotificationsContainer initial={rows as any} />
    </main>
  )
}

