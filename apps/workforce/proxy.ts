import { updateSession } from '@/lib/auth-middleware'
import {allowsApiOrigin} from '@/lib/request-origin'
import {NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  if (!allowsApiOrigin({method:request.method,pathname:request.nextUrl.pathname,origin:request.headers.get('origin'),requestUrl:request.url,siteUrl:process.env.SITE_URL,production:process.env.NODE_ENV==='production'})) return NextResponse.json({success:false,message:'غير مصرح'},{status:403})
  return await updateSession(request)
}

export const config = {
  matcher: ['/api/:path*', '/((?!_next/static|_next/image|.*\\..*).*)'],
}

