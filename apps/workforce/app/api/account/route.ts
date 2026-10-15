import {NextResponse,type NextRequest} from 'next/server'
import {getSessionUser} from '@/server/auth/session'
import {updateOwnAccount} from '@/server/account-settings'
import {clearAuthCookie} from '@/server/auth/jwt'
import {FALLBACK_ADMIN_ID} from '@/server/company'
export async function POST(req:NextRequest){
 const user=await getSessionUser(req);if(!user?.profile?.teamId)return NextResponse.json({success:false},{status:401})
 if(user.id===FALLBACK_ADMIN_ID)return NextResponse.json({success:false,message:'تعديل حساب العرض غير متاح'},{status:403})
 if(req.headers.get('origin')!==new URL(process.env.SITE_URL||req.nextUrl.origin).origin)return NextResponse.json({success:false},{status:403})
 try{const result=await updateOwnAccount(user.id,user.profile.teamId,await req.json());const response=NextResponse.json({success:true,...result});if(result.changedPassword)clearAuthCookie(response);return response}catch{return NextResponse.json({success:false,message:'تحقق من البيانات وكلمة المرور الحالية'},{status:400})}
}
