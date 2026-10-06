import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import crypto from 'crypto'

import { prisma } from '@/server/db'
import { canGrantRole } from '@/server/auth/access'
import { DEFAULT_ROLES } from '@/lib/permissions'
import { requirePermission } from '@/server/auth/require-permission'
import { MailDeliveryError, MailNotConfiguredError, readSmtpConfig, requireSiteUrl, sendInvitationEmail } from '@/server/mail'

export const runtime = 'nodejs'

const bodySchema = z.object({
  email: z.string().email(),
  role: z.string().trim().min(1).optional(),
})

async function generateUniqueToken() {
  // Extremely low collision probability, but we still guard by retrying on unique constraint.
  return crypto.randomBytes(24).toString('hex')
}

export async function POST(req: NextRequest) {
  const auth = await requirePermission(req, 'members.invite')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })
  const teamId = auth.user.profile!.teamId!
  const invitedById = auth.user.profile!.id

  const json = await req.json().catch(() => null)
  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) return NextResponse.json({ success: false, message: 'بيانات غير صحيحة' }, { status: 400 })

  const email = parsed.data.email.toLowerCase().trim()
  const role = (parsed.data.role?.trim() || 'EMPLOYEE').toUpperCase().replace(/\s+/g, '_')
  const customRole = DEFAULT_ROLES[role] ? true : await prisma.workforceCustomRole.findUnique({ where: { teamId_name: { teamId, name: role } }, select: { id: true } })
  if (!customRole) return NextResponse.json({ success: false, message: 'الدور غير موجود' }, { status: 400 })
  if (!(await canGrantRole(auth.user.permissions, role, teamId))) return NextResponse.json({ success: false, message: 'لا يمكنك منح دور أعلى من صلاحياتك' }, { status: 403 })

  const existingUser = await prisma.workforceUser.findUnique({ where: { email }, select: { id: true } })
  if (existingUser) {
    const existingMember = await prisma.workforceTeamMember.findUnique({
      where: { userId_teamId: { userId: existingUser.id, teamId } },
      select: { id: true, isActive: true },
    })
    if (existingMember?.isActive) {
      return NextResponse.json({ success: false, message: 'هذا المستخدم عضو بالفعل' }, { status: 409 })
    }
    return NextResponse.json(
      { success: false, code: 'EXISTING_USER_CAN_REACTIVATE', message: 'الحساب موجود بالفعل، يمكنك إعادة تفعيله مباشرة' },
      { status: 409 },
    )
  }

  const pending = await prisma.workforceInvitation.findFirst({
    where: { teamId, email, acceptedAt: null, OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }] },
    select: { id: true },
  })
  if (pending) return NextResponse.json({ success: false, message: 'تم إرسال دعوة مسبقاً لهذا البريد' }, { status: 409 })

  if (process.env.NODE_ENV === 'production' && !readSmtpConfig()) {
    return NextResponse.json({ success: false, message: 'إعدادات البريد غير مكتملة' }, { status: 503 })
  }

  let origin: string
  try {
    origin = requireSiteUrl(req.nextUrl.origin)
  } catch (error) {
    if (error instanceof MailNotConfiguredError) {
      return NextResponse.json({ success: false, message: 'إعدادات الموقع غير مكتملة' }, { status: 503 })
    }
    throw error
  }

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const companyName = process.env.COMPANY_NAME?.trim() || 'الشركة'

  let lastError: unknown = null
  for (let attempt = 0; attempt < 3; attempt++) {
    const token = await generateUniqueToken()
    try {
      const created = await prisma.workforceInvitation.create({
        data: { teamId, email, role, token, expiresAt, invitedById },
        include: { invitedBy: { select: { id: true, email: true, firstName: true, lastName: true } } },
      })
      const inviteUrl = `${origin}/invite/${created.token}`
      try {
        const delivery = await sendInvitationEmail({
          to: email,
          companyName,
          role,
          inviteUrl,
          expiresAt,
        })
        return NextResponse.json({
          success: true,
          data: {
            invitation: created,
            inviteUrl,
            emailSent: delivery.sent,
          },
        })
      } catch (error) {
        if (error instanceof MailNotConfiguredError || error instanceof MailDeliveryError) {
          await prisma.workforceInvitation.delete({ where: { id: created.id } }).catch((deleteError) => {
            console.error('members/invite: failed to roll back invitation after email failure', deleteError)
          })
          const message = error instanceof MailNotConfiguredError ? 'إعدادات البريد غير مكتملة' : 'تعذر إرسال رسالة الدعوة'
          return NextResponse.json({ success: false, message }, { status: 503 })
        }
        throw error
      }
    } catch (e: any) {
      // Retry on unique token constraint.
      lastError = e
      const msg = String(e?.message ?? '')
      if (msg.includes('WorkforceInvitation_token_key') || msg.toLowerCase().includes('unique constraint')) continue
      throw e
    }
  }

  console.error(
    'members/invite: failed to create invitation after retries',
    { teamId, invitedById, email },
    lastError,
  )
  return NextResponse.json({ success: false, message: 'تعذر إنشاء الدعوة، حاول مرة أخرى' }, { status: 500 })
}

