import {afterEach,expect,it,vi} from 'vitest';import {NextRequest} from 'next/server'
vi.mock('@/server/auth/access',()=>({loadAccountAccess:async()=>({active:true,authVersion:1,userId:'u',email:'synthetic@example.test',profile:{id:'p',teamId:'t'},permissions:[]})}))
vi.mock('@/server/db',()=>({prisma:{}}))
vi.mock('@workforce/database/env',()=>({resolveWorkforceDatabaseUrl:()=> 'postgresql://127.0.0.1/synthetic'}))
import {getSessionUser} from '@/server/auth/session';import {issueAccessToken} from '@/server/auth/jwt'
afterEach(()=>vi.unstubAllEnvs())
it('password version changes invalidate existing sessions while current version works',async()=>{vi.stubEnv('WORKFORCE_JWT_SECRET','synthetic-only-secret-with-at-least-32-characters');const request=async(version:number)=>new NextRequest('http://localhost/api/auth/me',{headers:{cookie:'wf_auth='+await issueAccessToken({sub:'u',email:'synthetic@example.test',version})}});expect(await getSessionUser(await request(0))).toBeNull();expect((await getSessionUser(await request(1)))?.id).toBe('u')})
