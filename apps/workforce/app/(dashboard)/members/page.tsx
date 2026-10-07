import { getDemoCompany } from '@/server/demo-sandbox'
import { getTranslations } from '@/lib/i18n/server'

import { getServerSession } from '@/server/auth/server-session'
import { FALLBACK_ADMIN_ID } from '@/server/company'
import { prisma } from '@/server/db'
import { MembersContainer } from '@/components/dashboard/members-container'
import { VirtualLoginNotice } from '@/components/dashboard/virtual-login-notice'
import { canViewAllEmails, redactEmailForViewer } from '@/lib/email-privacy'
import { servesVirtualDemoData, VIRTUAL_SAMPLE_NOTE } from '@/server/virtual-data'

export default async function MembersPage() {
  const tr = await getTranslations()

  const session = await getServerSession()
  if (!session?.permissions.includes('members.view' as any)) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الأعضاء")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("ليس لديك صلاحية.")}</p>
      </main>
    )
  }
  if (session.userId === FALLBACK_ADMIN_ID && !servesVirtualDemoData(session.userId)) {
    return <VirtualLoginNotice title={tr("الأعضاء")} />
  }

  const teamId = session?.profile?.teamId ?? null
  const sampleData = servesVirtualDemoData(session.userId)

  if (!teamId && !sampleData) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الأعضاء")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("لا يوجد فريق مرتبط.")}</p>
      </main>
    )
  }

  const take = 50
  const skip = 0

  const virtual = sampleData ? await getDemoCompany() : null
  const [totalMembers, members, invitations, roles] = virtual
    ? [
        virtual.members.length,
        virtual.members.slice(skip, skip + take),
        virtual.invitations.filter(row => !row.acceptedAt),
        virtual.roles.map((role) => ({ name: role.name, label: role.label })),
      ]
    : await Promise.all([
        prisma.workforceTeamMember.count({ where: { teamId: teamId! } }),
        prisma.workforceTeamMember.findMany({
          where: { teamId: teamId! },
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
          where: { teamId: teamId!, acceptedAt: null },
          include: { invitedBy: { select: { id: true, email: true, firstName: true, lastName: true } } },
          orderBy: [{ createdAt: 'desc' }],
        }),
        prisma.workforceCustomRole.findMany({ where: { teamId: teamId! }, select: { name: true, label: true }, orderBy: [{ createdAt: 'asc' }] }),
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
      <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الأعضاء")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("إدارة أعضاء الفريق والدعوات.")}</p>
        {sampleData ? <p className="mt-1 text-sm text-amber-700">{tr(VIRTUAL_SAMPLE_NOTE)}</p> : null}
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

