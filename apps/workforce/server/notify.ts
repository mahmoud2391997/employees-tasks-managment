import {getTeamBranding} from '@/server/branding'
import { prisma } from '@/server/db'
import { configuredSiteUrl, sendNotificationEmail,readSmtpConfig } from '@/server/mail'

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
}, database: Pick<typeof prisma, 'workforceNotification'> = prisma) {
  const row = await database.workforceNotification.create({
    data: {
      userId: input.userId,
      teamId: input.teamId,
      type: input.type,
      title: input.title,
      message: input.message,
      data: input.data,
    },
  })


  return row
}

async function emailNotification(profileId: string, title: string, message: string,deliveryId?: string,teamId?:string|null) {
  const profile = await prisma.workforceProfile.findUnique({
    where: { id: profileId },
    select: { email: true },
  })
  const to = profile?.email?.trim().toLowerCase()
  if (!to) {
    throw Error('OUTBOX_RECIPIENT_MISSING')
  }

  const branding=await getTeamBranding(teamId)
  const site = configuredSiteUrl()
  const delivered=await sendNotificationEmail({
    to,
    deliveryId,
    companyName: branding.systemName,
    brandColor: branding.brandColor,
    title,
    message,
    actionUrl: site ? `${site}/notifications` : null,
  })
  if(!delivered.sent)throw Error('DELIVERY_NOT_CONFIRMED')
}

/** Existing rows are the durable outbox; SMTP ambiguity requires explicit reconciliation. */
export async function deliverNotificationOutbox(limit=20){
 if(!readSmtpConfig())return {sent:0,configured:false}
 const pending=await prisma.workforceNotification.findMany({where:{emailStatus:'PENDING',emailAttempts:{lt:5}},orderBy:{createdAt:'asc'},take:Math.min(limit,100)})
 let sent=0
 for(const item of pending){const claimed=await prisma.workforceNotification.updateMany({where:{id:item.id,emailStatus:'PENDING',emailAttempts:item.emailAttempts},data:{emailStatus:'SENDING',emailAttempts:{increment:1}}});if(!claimed.count)continue
  try{await emailNotification(item.userId,item.title,item.message,item.id,item.teamId)}catch{await prisma.workforceNotification.updateMany({where:{id:item.id,emailStatus:'SENDING',emailAttempts:item.emailAttempts+1},data:{emailStatus:'UNCERTAIN'}});continue}
  await prisma.workforceNotification.updateMany({where:{id:item.id,emailStatus:'SENDING',emailAttempts:item.emailAttempts+1},data:{emailStatus:'SENT'}});sent++
 }return {sent,configured:true}
}
