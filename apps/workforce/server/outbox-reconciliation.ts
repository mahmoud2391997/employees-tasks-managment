import { prisma } from '@/server/db'

export class ReconciliationConflict extends Error {}

/** Transport workers must be paused and the recipient/provider consulted before requeue. */
export async function reconcileOutbox(input: {
  actorId: string; teamId: string; id: string; reason: string;
  action: 'requeue' | 'mark_delivered'; nonDeliveryConfirmed: boolean; workerPaused: boolean;
}) {
  if (!input.workerPaused || (input.action === 'requeue' && !input.nonDeliveryConfirmed)) {
    throw new ReconciliationConflict('Confirm worker pause and non-delivery first')
  }
  return prisma.$transaction(async tx => {
    const row = await tx.workforceNotification.findFirst({where:{id:input.id,teamId:input.teamId}})
    if (!row || !['SENDING','UNCERTAIN'].includes(row.emailStatus)) throw new ReconciliationConflict('Message is not awaiting reconciliation')
    if (row.emailStatus === 'SENDING' && Date.now()-row.updatedAt.getTime()<30*60*1000) throw new ReconciliationConflict('Delivery is still in progress')
    if (input.action==='requeue' && row.emailAttempts>=5) throw new ReconciliationConflict('Attempt limit reached')
    const status=input.action==='requeue'?'PENDING':'SENT'
    const updated=await tx.workforceNotification.updateMany({where:{id:row.id,teamId:input.teamId,emailStatus:row.emailStatus,updatedAt:row.updatedAt},data:{emailStatus:status}})
    if(updated.count!==1)throw new ReconciliationConflict('Message changed; reload before deciding')
    await tx.workforceAuditEvent.create({data:{actorId:input.actorId,teamId:input.teamId,action:'outbox.'+input.action,metadata:{notificationId:row.id,previousStatus:row.emailStatus,reason:input.reason,nonDeliveryConfirmed:input.nonDeliveryConfirmed,workerPaused:true,attempts:row.emailAttempts}}})
    return {id:row.id,emailStatus:status}
  })
}
