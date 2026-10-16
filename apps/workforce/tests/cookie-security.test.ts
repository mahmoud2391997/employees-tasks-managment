import {afterEach,expect,it,vi} from 'vitest'
import {NextResponse} from 'next/server'
import {setAuthCookie,clearAuthCookie} from '@/server/auth/jwt'
afterEach(()=>vi.unstubAllEnvs())
it('sets and clears session cookies with production security flags',()=>{
 vi.stubEnv('NODE_ENV','production')
 for(const apply of [(response:NextResponse)=>setAuthCookie(response,'synthetic'),clearAuthCookie]){
  const response=NextResponse.json({success:true});apply(response)
  const cookie=response.headers.get('set-cookie')!
  expect(cookie).toContain('HttpOnly');expect(cookie).toContain('Secure');expect(cookie).toContain('SameSite=lax');expect(cookie).toContain('Path=/')
 }
})
