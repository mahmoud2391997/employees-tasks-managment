import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/server/db'
import { DEFAULT_ROLES } from '@/lib/permissions'
import { requirePermission } from '@/server/auth/require-permission'

export const runtime = 'nodejs'

const patchSchema = z.object({
  role: z.string().trim().min(1).optional(),
  isActive: z.boolean().optional(),
})

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const auth = await requirePermission(req, 'members.assign_role')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })
  const teamId = auth.user.profile!.teamId!

  const { id } = await ctx.params
  const json = await req.json().catch(() => null)
  const parsed = patchSchema.safeParse(json)
  if (!parsed.success) return NextResponse.json({ success: false, message: 'بيانات غير صحيحة' }, { status: 400 })

  const requestedRole = parsed.data.role?.toUpperCase().replace(/\s+/g, '_')
  if (requestedRole && !/^[A-Z][A-Z0-9_]*$/.test(requestedRole)) {
    return NextResponse.json({ success: false, message: 'الدور غير صحيح' }, { status: 400 })
  }

  const existing = await prisma.workforceTeamMember.findFirst({
    where: { id, teamId },
    select: { id: true, userId: true, role: true, isActive: true },
  })
  if (!existing) return NextResponse.json({ success: false, message: 'غير موجود' }, { status: 404 })

  if (requestedRole && !DEFAULT_ROLES[requestedRole]) {
    const customRole = await prisma.workforceCustomRole.findUnique({
      where: { teamId_name: { teamId, name: requestedRole } },
      select: { id: true },
    })
    if (!customRole) return NextResponse.json({ success: false, message: 'الدور غير موجود' }, { status: 400 })
  }

  const updated = await prisma.$transaction(async (tx) => {
    const m = await tx.workforceTeamMember.update({
      where: { id },
      data: {
        role: requestedRole ?? undefined,
        isActive: parsed.data.isActive ?? undefined,
      },
    })
    if (parsed.data.role) {
      const u = await tx.workforceUser.findUnique({ where: { id: existing.userId }, select: { profileId: true } })
      if (u?.profileId) {
        await tx.workforceProfile.update({ where: { id: u.profileId }, data: { role: parsed.data.role } })
      }
    }
    return m
  })

  return NextResponse.json({ success: true, data: updated })
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const auth = await requirePermission(req, 'members.remove')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })
  const teamId = auth.user.profile!.teamId!

  const { id } = await ctx.params
  const existing = await prisma.workforceTeamMember.findFirst({
    where: { id, teamId },
    select: { id: true, userId: true },
  })
  if (!existing) return NextResponse.json({ success: false, message: 'غير موجود' }, { status: 404 })

  const team = await prisma.workforceTeam.findUnique({ where: { id: teamId }, select: { ownerId: true } })
  if (team?.ownerId === existing.userId) {
    return NextResponse.json({ success: false, message: 'لا يمكن إزالة مالك الفريق' }, { status: 400 })
  }

  const updated = await prisma.workforceTeamMember.update({ where: { id }, data: { isActive: false } })
  return NextResponse.json({ success: true, data: updated })
}

