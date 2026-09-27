import { NextResponse, type NextRequest } from 'next/server'

import { prisma } from '@/server/db'
import { requirePermission } from '@/server/auth/require-permission'
import { canViewAllEmails, redactEmailForViewer } from '@/lib/email-privacy'
import { virtualMembersApi } from '@/server/virtual-data'

export const runtime = 'nodejs'

function parseTakeSkip(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  let take = Number(sp.get('take') ?? '50')
  let skip = Number(sp.get('skip') ?? '0')
  if (!Number.isFinite(take) || take <= 0) take = 50
  if (!Number.isFinite(skip) || skip < 0) skip = 0
  take = Math.min(200, Math.max(1, Math.floor(take)))
  skip = Math.max(0, Math.floor(skip))
  return { take, skip }
}

export async function GET(req: NextRequest) {
  const auth = await requirePermission(req, 'members.view')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })
  const canInvite = auth.user.permissions.includes('members.invite')
  const { take, skip } = parseTakeSkip(req)
  const virtual = virtualMembersApi(auth.user.id, take, skip, canInvite)
  if (virtual) return NextResponse.json(virtual.body, { status: virtual.status })

  const teamId = auth.user.profile!.teamId!
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

  const canViewEmails = canViewAllEmails({ permissions: auth.user.permissions, role: auth.user.profile?.role })
  const viewerEmail = auth.user.email
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

  return NextResponse.json({
    success: true,
    data: { members: safeMembers, invitations: safeInvitations, roles },
    total: totalMembers,
    hasMore: skip + members.length < totalMembers,
  })
}

