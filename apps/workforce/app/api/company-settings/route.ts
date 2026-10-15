import {NextResponse,type NextRequest} from 'next/server'
import {requirePermission} from '@/server/auth/require-permission'
import {prisma} from '@/server/db'
import {z} from 'zod'
import {FALLBACK_ADMIN_ID} from '@/server/company'
export async function POST(req:NextRequest){
 const auth=await requirePermission(req,'settings.manage');if(!auth.ok)return NextResponse.json({success:false},{status:auth.status})
 if(auth.user.id===FALLBACK_ADMIN_ID||req.headers.get('origin')!==new URL(process.env.SITE_URL||req.nextUrl.origin).origin)return NextResponse.json({success:false},{status:403})
 const parsed=z.object({name:z.string().trim().min(2).max(120),phone:z.string().trim().max(30).optional(),email:z.union([z.literal(''),z.string().email()]).optional(),address:z.string().trim().max(300).optional()}).safeParse(await req.json());if(!parsed.success)return NextResponse.json({success:false},{status:400})
 const teamId=auth.user.profile!.teamId!;await prisma.$transaction(async tx=>{await tx.workforceTeam.update({where:{id:teamId},data:{name:parsed.data.name,details:{phone:parsed.data.phone||'',email:parsed.data.email||'',address:parsed.data.address||''}}});await tx.workforceAuditEvent.create({data:{actorId:auth.user.id,teamId,action:'company.name.updated'}})});return NextResponse.json({success:true})
}

export async function GET(req:NextRequest){const auth=await requirePermission(req,'settings.manage');if(!auth.ok)return NextResponse.json({success:false},{status:auth.status});if(auth.user.id===FALLBACK_ADMIN_ID)return NextResponse.json({success:true,data:{name:'عرض تجريبي'}});const row=await prisma.workforceTeam.findUnique({where:{id:auth.user.profile!.teamId!},select:{name:true,details:true}});return NextResponse.json({success:true,data:{name:row?.name,...(row?.details as Record<string,string>||{})}})}
