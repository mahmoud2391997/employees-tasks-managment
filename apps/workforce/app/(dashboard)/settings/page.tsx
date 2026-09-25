import { redirect } from 'next/navigation'

import { getServerSession } from '@/server/auth/server-session'
import { prisma } from '@/server/db'

export default async function SettingsPage() {
  const session = await getServerSession()
  if (!session) redirect('/auth/login')

  const teamId = session.profile?.teamId ?? null
  const team = teamId ? await prisma.workforceTeam.findUnique({ where: { id: teamId }, select: { id: true, name: true, createdAt: true } }) : null

  return (
    <main className="space-y-4">
      <div className="rounded-lg border border-[#d0d7de] bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">الإعدادات</h1>
        <p className="mt-2 text-sm text-[#656d76]">إعدادات الشركة.</p>
      </div>

      <div className="rounded-lg border border-[#d0d7de] bg-white p-6 shadow-sm">
        <div className="text-sm font-semibold">الشركة</div>
        <div className="mt-2 grid gap-2 text-sm">
          <div>
            <span className="text-[#656d76]">الاسم:</span> {team?.name ?? '—'}
          </div>
          <div className="ltr font-mono text-xs text-[#656d76]">id: {team?.id ?? '—'}</div>
        </div>
      </div>
    </main>
  )
}

