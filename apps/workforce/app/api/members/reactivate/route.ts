import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/server/db'
import { requirePermission } from '@/server/auth/require-permission'

export const runtime = 'nodejs'

const bodySchema = z.object({
  email: z.string().email(),
})

export async function POST(req: NextRequest) {
  const auth = await requirePermission(req, 'members.invite')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })

  const teamId = auth.user.profile!.teamId!

  const json = await req.json().catch(() => null)
  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) return NextResponse.json({ success: false, message: 'بيانات غير صحيحة' }, { status: 400 })

  const email = parsed.data.email.toLowerCase().trim()

  const existing = await prisma.workforceUser.findUnique({
    where: { email },
    select: {
      id: true,
      profileId: true,
      profile: { select: { id: true, role: true } },
      memberships: { where: { teamId }, select: { id: true, role: true, isActive: true } },
    },
  })
  if (!existing) return NextResponse.json({ success: false, message: 'غير موجود' }, { status: 404 })

  const updated = await prisma.$transaction(async (tx) => {
    let profileId = existing.profileId
    if (!profileId) {
      const createdProfile = await tx.workforceProfile.create({
        data: {
          email,
          teamId,
          role: existing.profile?.role ?? 'EMPLOYEE',
        },
        select: { id: true },
      })
      profileId = createdProfile.id
      await tx.workforceUser.update({ where: { id: existing.id }, data: { profileId } })
    } else {
      await tx.workforceProfile.update({ where: { id: profileId }, data: { teamId } })
    }

    const role = existing.memberships[0]?.role ?? existing.profile?.role ?? 'EMPLOYEE'
    return await tx.workforceTeamMember.upsert({
      where: { userId_teamId: { userId: existing.id, teamId } },
      create: { userId: existing.id, teamId, isActive: true, role },
      update: { isActive: true },
    })
  })

  return NextResponse.json({ success: true, data: updated })
}

