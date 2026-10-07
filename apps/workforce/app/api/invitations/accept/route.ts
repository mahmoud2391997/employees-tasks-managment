import { demoMutation } from '@/server/demo-sandbox'
import { getSessionUser } from '@/server/auth/session'
import { NextResponse, type NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

import { prisma } from '@/server/db'
import { issueAccessToken, setAuthCookie } from '@/server/auth/jwt'
import { DEFAULT_ROLES } from '@/lib/permissions'
import { recordNotification } from '@/server/notify'

export const runtime = 'nodejs'

const bodySchema = z.object({
  token: z.string().trim().min(10),
  password: z.string().min(8),
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1).optional(),
})

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null)
  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) return NextResponse.json({ success: false, message: 'بيانات غير صحيحة' }, { status: 400 })

  if (req.cookies?.get('wf_demo')?.value) {
    const user = await getSessionUser(req)
    if (user) {
      const demo = await demoMutation(req, user.id, 'accept', parsed.data)
      if (demo) return demo
    }
  }

  const token = parsed.data.token.trim()
  const invitation = await prisma.workforceInvitation.findUnique({
    where: { token },
    include: { team: { select: { id: true, name: true } } },
  })
  if (!invitation) return NextResponse.json({ success: false, message: 'الدعوة غير موجودة' }, { status: 404 })
  if (invitation.acceptedAt) return NextResponse.json({ success: false, message: 'تم قبول الدعوة مسبقاً' }, { status: 409 })
  if (invitation.expiresAt && invitation.expiresAt.valueOf() < Date.now()) {
    return NextResponse.json({ success: false, message: 'انتهت صلاحية الدعوة' }, { status: 410 })
  }

  const email = invitation.email.toLowerCase().trim()
  const existingUser = await prisma.workforceUser.findUnique({ where: { email }, select: { id: true } })
  if (existingUser) {
    return NextResponse.json({ success: false, message: 'الحساب موجود بالفعل، قم بتسجيل الدخول واطلب إضافتك للفريق' }, { status: 409 })
  }

  const passwordHash = await bcrypt.hash(parsed.data.password, 12)

  let created
  try {
    created = await prisma.$transaction(async (tx) => {
      // Claim once inside the transaction; failed account creation rolls this back.
      const claimed = await tx.workforceInvitation.updateMany({
        where: { id: invitation.id, acceptedAt: null, OR: [{ expiresAt: null }, { expiresAt: { gte: new Date() } }] },
        data: { acceptedAt: new Date() },
      })
      if (claimed.count !== 1) throw new Error('INVITATION_UNAVAILABLE')
      const existingProfile = await tx.workforceProfile.findUnique({ where: { email } })
      if (existingProfile?.teamId && existingProfile.teamId !== invitation.teamId) throw new Error('PROFILE_COMPANY_CONFLICT')
      const user = await tx.workforceUser.create({
        data: { email, passwordHash },
        select: { id: true, email: true },
      })

      const profile = existingProfile
        ? await tx.workforceProfile.update({
            where: { id: existingProfile.id },
            data: { teamId: invitation.teamId, role: invitation.role, firstName: parsed.data.firstName, lastName: parsed.data.lastName ?? existingProfile.lastName },
            select: { id: true },
          })
        : await tx.workforceProfile.create({
            data: {
              email,
              firstName: parsed.data.firstName,
              lastName: parsed.data.lastName ?? null,
              role: invitation.role,
              teamId: invitation.teamId,
            },
            select: { id: true },
          })

      await tx.workforceUser.update({ where: { id: user.id }, data: { profileId: profile.id } })

      await tx.workforceTeamMember.create({
        data: { userId: user.id, teamId: invitation.teamId, role: invitation.role, isActive: true },
      })

      // Ensure defaults exist (in case team was created before seeding behavior existed).
      await tx.workforceCustomRole.createMany({
        data: Object.entries(DEFAULT_ROLES).map(([name, def]) => ({
          teamId: invitation.teamId,
          name,
          label: def.label,
          permissions: def.permissions as unknown as any,
        })),
        skipDuplicates: true,
      })

      return user
    })
  } catch (error) {
    const code = (error as { code?: string })?.code
    const message = error instanceof Error ? error.message : ''
    if (code === 'P2002' || message === 'INVITATION_UNAVAILABLE' || message === 'PROFILE_COMPANY_CONFLICT') {
      return NextResponse.json({ success: false, message: 'تعذر قبول الدعوة بسبب تعارض في الحساب أو الدعوة' }, { status: 409 })
    }
    throw error
  }

  try {
    await recordNotification({
      userId: invitation.invitedById,
      teamId: invitation.teamId,
      type: 'invitation_accepted',
      title: 'تم قبول الدعوة',
      message: `انضم ${email} إلى الفريق`,
      data: { email },
    })
  } catch (error) {
    console.error('invitations/accept: failed to record acceptance notification', error)
  }

  const accessToken = await issueAccessToken({ sub: created.id, email: created.email })
  const res = NextResponse.json({ success: true, data: { teamId: invitation.teamId } })
  setAuthCookie(res, accessToken)
  return res
}

