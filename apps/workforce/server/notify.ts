import { prisma } from '@/server/db'
import { configuredSiteUrl, sendNotificationEmail } from '@/server/mail'

const STATUS_LABELS: Record<string, string> = {
  TODO: 'قيد الانتظار',
  IN_PROGRESS: 'قيد العمل',
  REVIEW: 'للمراجعة',
  COMPLETED: 'مكتملة',
}

export function taskStatusLabel(status: string | null | undefined) {
  if (!status) return '—'
  return STATUS_LABELS[status] ?? status
}

export async function recordNotification(input: {
  userId: string
  teamId: string
  type: string
  title: string
  message: string
  data?: Record<string, string | number | boolean | null>
}) {
  const row = await prisma.workforceNotification.create({
    data: {
      userId: input.userId,
      teamId: input.teamId,
      type: input.type,
      title: input.title,
      message: input.message,
      data: input.data,
    },
  })

  try {
    await emailNotification(input.userId, input.title, input.message)
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'unknown'
    console.error('mail: notification email failed', { userId: input.userId, type: input.type, reason })
  }

  return row
}

async function emailNotification(profileId: string, title: string, message: string) {
  const profile = await prisma.workforceProfile.findUnique({
    where: { id: profileId },
    select: { email: true },
  })
  const to = profile?.email?.trim().toLowerCase()
  if (!to) {
    console.warn('mail: notification has no recipient email', { profileId })
    return
  }

  const site = configuredSiteUrl()
  await sendNotificationEmail({
    to,
    companyName: process.env.COMPANY_NAME?.trim() || 'الشركة',
    title,
    message,
    actionUrl: site ? `${site}/notifications` : null,
  })
}
