import {NextResponse,type NextRequest} from 'next/server'
import {timingSafeEqual,createHash} from 'node:crypto'
import {deliverNotificationOutbox} from '@/server/notify'
export async function POST(req:NextRequest){const key=process.env.NOTIFICATION_OUTBOX_SECRET||'',presented=req.headers.get('authorization')||'';const hash=(v:string)=>createHash('sha256').update(v).digest();if(key.length<32||!timingSafeEqual(hash(presented),hash('Bearer '+key)))return NextResponse.json({success:false},{status:403});return NextResponse.json(await deliverNotificationOutbox())}
