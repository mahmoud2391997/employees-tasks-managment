import {NextResponse,type NextRequest} from 'next/server'
import {requirePermission} from '@/server/auth/require-permission'
import {prisma} from '@/server/db'
import {FALLBACK_ADMIN_ID} from '@/server/company'
import {companySettingsSchema,brandingFromDetails} from '@/lib/branding'
import {saveCompanySettings} from '@/server/company-settings'
export async function POST(req:NextRequest){
 const auth=await requirePermission(req,'settings.manage');if(!auth.ok)return NextResponse.json({success:false},{status:auth.status})
 if(auth.user.id===FALLBACK_ADMIN_ID||req.headers.get('origin')!==new URL(process.env.SITE_URL||req.nextUrl.origin).origin)return NextResponse.json({success:false},{status:403})
 const parsed=companySettingsSchema.safeParse(await req.json().catch(()=>null));if(!parsed.success)return NextResponse.json({success:false,message:'بيانات الهوية غير صحيحة'},{status:400})
 await saveCompanySettings(auth.user.profile!.teamId!,auth.user.id,parsed.data)
 return NextResponse.json({success:true})
}
export async function GET(req:NextRequest){
 const auth=await requirePermission(req,'settings.manage');if(!auth.ok)return NextResponse.json({success:false},{status:auth.status})
 if(auth.user.id===FALLBACK_ADMIN_ID)return NextResponse.json({success:true,data:{name:'عرض تجريبي',...brandingFromDetails(null)}})
 const row=await prisma.workforceTeam.findUnique({where:{id:auth.user.profile!.teamId!},select:{name:true,details:true}})
 const details=row?.details&&typeof row.details==='object'&&!Array.isArray(row.details)?row.details as Record<string,unknown>:{}
 return NextResponse.json({success:true,data:{...details,name:row?.name,...brandingFromDetails(row?.details)}})
}
