import {NextResponse,type NextRequest} from 'next/server'
import {z} from 'zod'
import {requirePermission} from '@/server/auth/require-permission'
import {FALLBACK_ADMIN_ID} from '@/server/company'
import {prisma} from '@/server/db'
import {reconcileOutbox,ReconciliationConflict} from '@/server/outbox-reconciliation'
export const runtime='nodejs'
async function authorized(req:NextRequest){
 const auth=await requirePermission(req,'settings.manage')
 if(!auth.ok)return {response:NextResponse.json({success:false},{status:auth.status})} as const
 if(auth.user.id===FALLBACK_ADMIN_ID)return {response:NextResponse.json({success:false},{status:403})} as const
 return {user:auth.user} as const
}
export async function GET(req:NextRequest){
 const auth=await authorized(req);if(auth.response)return auth.response
 const rows=await prisma.workforceNotification.findMany({where:{teamId:auth.user.profile!.teamId!,emailStatus:{in:['SENDING','UNCERTAIN']}},select:{id:true,emailStatus:true,emailAttempts:true,updatedAt:true},orderBy:{updatedAt:'asc'},take:100})
 return NextResponse.json({success:true,data:rows})
}
export async function POST(req:NextRequest){
 const auth=await authorized(req);if(auth.response)return auth.response
 if(req.headers.get('origin')!==new URL(process.env.SITE_URL||req.nextUrl.origin).origin)return NextResponse.json({success:false},{status:403})
 const parsed=z.object({id:z.string().min(1).max(100),reason:z.string().trim().min(10).max(300),action:z.enum(['requeue','mark_delivered']),nonDeliveryConfirmed:z.boolean(),workerPaused:z.literal(true)}).safeParse(await req.json().catch(()=>null))
 if(!parsed.success)return NextResponse.json({success:false,message:'راجع سبب القرار وإقرارات التحقق'},{status:400})
 try{return NextResponse.json({success:true,data:await reconcileOutbox({...parsed.data,actorId:auth.user.id,teamId:auth.user.profile!.teamId!})})}
 catch(error){if(error instanceof ReconciliationConflict)return NextResponse.json({success:false,message:error.message},{status:409});throw error}
}
