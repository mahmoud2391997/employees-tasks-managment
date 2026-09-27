import { getServerSession } from '@/server/auth/server-session'
import { prisma } from '@/server/db'
import { MembersContainer } from '@/components/dashboard/members-container'
import { canViewAllEmails, redactEmailForViewer } from '@/lib/email-privacy'

export default async function MembersPage() {
  const session = await getServerSession()
  if (!session?.permissions.includes('members.view' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">الأعضاء</h1>
        <p className="mt-2 text-sm text-slate-500">ليس لديك صلاحية.</p>
      </main>
    )
  }
  const teamId = session?.profile?.teamId ?? null

  if (!teamId) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">الأعضاء</h1>
        <p className="mt-2 text-sm text-slate-500">لا يوجد فريق مرتبط.</p>
      </main>
    )
  }

  const take = 50
  const skip = 0

  const [totalMembers, members, invitations, roles] = await Promise.all([
    prisma.workforceTeamMember.count({ where: { teamId } }),
    prisma.workforceTeamMember.findMany({
      where: { teamId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            profile: { select: { id: true, email: true, firstName: true, lastName: true, role: true, teamId: true } },
          },
        },
      },
      orderBy: [{ createdAt: 'desc' }],
      take,
      skip,
    }),
    prisma.workforceInvitation.findMany({
      where: { teamId, acceptedAt: null },
      include: { invitedBy: { select: { id: true, email: true, firstName: true, lastName: true } } },
      orderBy: [{ createdAt: 'desc' }],
    }),
    prisma.workforceCustomRole.findMany({ where: { teamId }, select: { name: true, label: true }, orderBy: [{ createdAt: 'asc' }] }),
  ])

  const canInvite = session.permissions.includes('members.invite' as any)
  const canViewEmails = canViewAllEmails({ permissions: session.permissions as any, role: session.profile?.role })
  const viewerEmail = session.email

  const safeMembers = members.map((m) => ({
    ...m,
    user: {
      ...m.user,
      email: redactEmailForViewer(m.user.email, viewerEmail, canViewEmails),
      profile: m.user.profile
        ? { ...m.user.profile, email: redactEmailForViewer(m.user.profile.email, viewerEmail, canViewEmails) }
        : null,
    },
  }))

  const safeInvitations = canInvite
    ? invitations.map((inv) => ({
        ...inv,
        email: redactEmailForViewer(inv.email, viewerEmail, canViewEmails),
        invitedBy: { ...inv.invitedBy, email: redactEmailForViewer(inv.invitedBy.email, viewerEmail, canViewEmails) },
      }))
    : []

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">الأعضاء</h1>
        <p className="mt-2 text-sm text-slate-500">إدارة أعضاء الفريق والدعوات.</p>
      </div>
      <MembersContainer
        initialMembers={safeMembers as any}
        initialTotal={totalMembers}
        initialHasMore={skip + members.length < totalMembers}
        initialInvitations={safeInvitations as any}
        roles={roles as any}
        permissions={session.permissions as any}
      />
    </main>
  )
}

