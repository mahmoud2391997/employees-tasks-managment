// Disposable localhost acceptance only. Never connects to a real mail provider.
import assert from 'node:assert/strict'
import {spawn,execFileSync} from 'node:child_process'
import {randomUUID} from 'node:crypto'
import {mkdtempSync,readFileSync,rmSync,openSync,closeSync} from 'node:fs'
import {tmpdir} from 'node:os'
import {join} from 'node:path'
import {fileURLToPath} from 'node:url'
import {createServer as createTlsServer} from 'node:tls'
import {createServer as createHttpsServer,request as httpsRequest} from 'node:https'
import {request as httpRequest} from 'node:http'
import {createRequire} from 'node:module'
const root=fileURLToPath(new URL('../',import.meta.url))
const dbUrl=new URL(process.env.WORKFORCE_DATABASE_URL||'')
assert(['localhost','127.0.0.1'].includes(dbUrl.hostname),'Only a disposable localhost database is allowed')
assert(dbUrl.pathname.includes('mail_acceptance'),'Database name must contain mail_acceptance')
const require=createRequire(join(root,'apps/workforce/package.json'))
const {PrismaClient}=require(join(root,'packages/workforce-database/src/generated/client'))
const db=new PrismaClient()
const temp=mkdtempSync(join(tmpdir(),'workforce-mail-'))
const appPort=Number(process.env.MAIL_TEST_APP_PORT||4363),sitePort=Number(process.env.MAIL_TEST_SITE_PORT||4364),smtpPort=Number(process.env.MAIL_TEST_SMTP_PORT||5365)
const site=`https://localhost:${sitePort}`,messages=[],sockets=new Set()
let app,smtp,proxy,checks=0,completed=false
const logFd=openSync(join(temp,'app.log'),'w',0o600)
const env={...process.env,NODE_ENV:'production',COMPANY_NAME:'Synthetic mail acceptance',COMPANY_ADMIN_EMAIL:'owner@example.test',COMPANY_ADMIN_PASSWORD:process.env.COMPANY_ADMIN_PASSWORD||randomUUID()+randomUUID(),WORKFORCE_JWT_SECRET:randomUUID()+randomUUID(),NOTIFICATION_OUTBOX_SECRET:randomUUID()+randomUUID(),WORKFORCE_DEMO_MODE:'on',DEMO_MODE:'on',SITE_URL:site,SMTP_HOST:'',SMTP_FROM:'',SMTP_USER:'',SMTP_PASS:''}
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms))
async function startApp(smtpEnabled){
 app=spawn(process.execPath,[join(root,'apps/workforce/node_modules/next/dist/bin/next'),'start','--hostname','127.0.0.1','--port',String(appPort)],{cwd:join(root,'apps/workforce'),env:{...env,...(smtpEnabled?{SMTP_HOST:'127.0.0.1',SMTP_PORT:String(smtpPort),SMTP_SECURE:'true',SMTP_FROM:'fixture@example.test',NODE_EXTRA_CA_CERTS:join(temp,'cert.pem')}:{})},stdio:['ignore',logFd,logFd]})
 for(let i=0;i<100;i++){if(app.exitCode!==null)throw Error('App exited; inspect local test log');try{const response=await fetch(`http://127.0.0.1:${appPort}/auth/login`);if(response.ok)return}catch{}await delay(200)}throw Error('App startup timeout')
}
async function stopApp(){if(!app||app.exitCode!==null)return;const ended=new Promise(resolve=>app.once('exit',resolve));app.kill('SIGTERM');await ended}
async function call(path,body,cookie='',expected=200,headers={}){
 const response=await new Promise((resolve,reject)=>{const request=httpsRequest(site+path,{family:4,ca:readFileSync(join(temp,'cert.pem')),method:body===undefined?'GET':'POST',headers:{'content-type':'application/json',cookie,origin:site,...headers}},result=>{let text='';result.on('data',chunk=>text+=chunk);result.on('end',()=>resolve({status:result.statusCode,text,headers:result.headers,cookie:(result.headers['set-cookie']||[]).map(value=>value.split(';')[0]).join('; ')}))});request.on('error',reject);if(body!==undefined)request.write(JSON.stringify(body));request.end()})
 if(Array.isArray(expected))assert(expected.includes(response.status),`${path}: unexpected status ${response.status}`);else assert.equal(response.status,expected,`${path}: expected ${expected}, got ${response.status}`);checks++;return {...response,json:()=>JSON.parse(response.text)}
}
try{
 execFileSync('openssl',['req','-x509','-newkey','rsa:2048','-nodes','-days','1','-subj','/CN=localhost','-addext','subjectAltName=DNS:localhost,IP:127.0.0.1','-keyout',join(temp,'key.pem'),'-out',join(temp,'cert.pem')],{stdio:'ignore'})
 const tls={key:readFileSync(join(temp,'key.pem')),cert:readFileSync(join(temp,'cert.pem'))}
 proxy=createHttpsServer(tls,(request,response)=>{const upstream=httpRequest({hostname:'127.0.0.1',port:appPort,path:request.url,method:request.method,headers:{...request.headers,'x-forwarded-proto':'https','x-forwarded-host':`localhost:${sitePort}`}},res=>{response.writeHead(res.statusCode,res.headers);res.pipe(response)});upstream.on('error',()=>{response.writeHead(502);response.end()});request.pipe(upstream)})
 await new Promise(resolve=>proxy.listen(sitePort,'127.0.0.1',resolve))
 // Existing full API/database regression suite with SMTP explicitly absent.
 await startApp(false)
 await new Promise((resolve,reject)=>{const child=spawn('pnpm',['verify:local'],{cwd:root,env:{...env,VERIFY_BASE_URL:`http://127.0.0.1:${appPort}`},stdio:['ignore','inherit','inherit']});child.on('exit',code=>code===0?resolve():reject(Error('SMTP-disabled regression failed')))})
 await stopApp()
 smtp=createTlsServer(tls,socket=>{sockets.add(socket);socket.on('close',()=>sockets.delete(socket));socket.on('error',()=>{});socket.write('220 localhost synthetic catcher\r\n');let buffer='',data=false,body='';socket.on('data',chunk=>{buffer+=chunk.toString();let end;while((end=buffer.indexOf('\r\n'))>=0){const line=buffer.slice(0,end);buffer=buffer.slice(end+2);if(data){if(line==='.') {messages.push(body);body='';data=false;socket.write('250 captured locally\r\n')}else body+=line+'\r\n';continue}if(/^EHLO|^HELO/.test(line))socket.write('250-localhost\r\n250 SIZE 1000000\r\n');else if(/^DATA/.test(line)){data=true;socket.write('354 End with dot\r\n')}else if(/^QUIT/.test(line)){socket.end('221 bye\r\n')}else socket.write('250 OK\r\n')}})})
 await new Promise(resolve=>smtp.listen(smtpPort,'127.0.0.1',resolve))
 await startApp(true)
 await call('/api/outbox/reconcile',undefined,'',401)
 await call('/api/tasks',{},'',403,{origin:''})
 const login=await call('/api/auth/login',{email:env.COMPANY_ADMIN_EMAIL,password:env.COMPANY_ADMIN_PASSWORD}),cookie=login.cookie
 assert(cookie)
 for(const flag of ['HttpOnly','Secure','SameSite=Lax','Path=/'])assert(login.headers['set-cookie'].some(value=>value.toLowerCase().includes(flag.toLowerCase())));checks++
 for(const [name,value] of Object.entries({'x-content-type-options':'nosniff','x-frame-options':'DENY','referrer-policy':'strict-origin-when-cross-origin'}))assert.equal(login.headers[name],value);checks++
 const limitedEmail=`throttle-${randomUUID()}@example.test`
 for(let attempt=0;attempt<5;attempt++)await call('/api/auth/login',{email:limitedEmail,password:'synthetic-invalid'},'',401,{'x-forwarded-for':`203.0.113.${attempt+1}`})
 await call('/api/auth/login',{email:limitedEmail,password:'synthetic-invalid'},'',429,{'x-forwarded-for':'203.0.113.99'})
 await call('/api/outbox/reconcile',{id:'missing',action:'requeue',reason:'Synthetic reason',workerPaused:true,nonDeliveryConfirmed:true},cookie,403,{origin:'https://foreign.example.test'})
 const burstEmail=`burst-${randomUUID()}@example.test`
 const burst=await Promise.all(Array.from({length:6},()=>call('/api/auth/login',{email:burstEmail,password:'synthetic-invalid'},'',[401,429])))
 assert.equal(burst.filter(response=>response.status===401).length,5);assert.equal(burst.filter(response=>response.status===429).length,1)
 const tag=randomUUID(),email=`invite-${tag}@example.test`,password=randomUUID()+randomUUID()
 const invited=(await call('/api/members/invite',{email,role:'EMPLOYEE'},cookie)).json()
 assert.equal(invited.data.emailSent,true);assert.equal(messages.length,1);assert(messages[0].replace(/=\r\n/g,'').includes(site+'/invite/'+invited.data.invitation.token));checks++
 const inviteUrl=new URL(invited.data.inviteUrl);assert.equal(inviteUrl.origin,site)
 await call(inviteUrl.pathname)
 const accepted=await call('/api/invitations/accept',{token:invited.data.invitation.token,password,firstName:'Synthetic'},'')
 await call('/api/auth/me',undefined,accepted.cookie)
 await call('/api/invitations/accept',{token:invited.data.invitation.token,password,firstName:'Synthetic'},'',409)
 const employee=await call('/api/auth/login',{email,password})
 await call('/api/outbox/reconcile',undefined,employee.cookie,403)
 await call('/api/outbox/reconcile',{id:'missing',action:'requeue',reason:'Verified no delivery',workerPaused:true,nonDeliveryConfirmed:true},employee.cookie,403)
 const row=await db.workforceNotification.findFirst({where:{teamId:invited.data.invitation.teamId}})
 assert(row,'Acceptance creates a durable notification')
 await db.workforceNotification.update({where:{id:row.id},data:{emailStatus:'UNCERTAIN'}})
 await call('/api/outbox/reconcile',{id:row.id,action:'requeue',reason:'Synthetic catcher verified no delivery',workerPaused:true,nonDeliveryConfirmed:false},cookie,409)
 await call('/api/outbox/reconcile',{id:row.id,action:'requeue',reason:'Synthetic catcher verified no delivery',workerPaused:true,nonDeliveryConfirmed:true},cookie)
 assert.equal((await db.workforceNotification.findUnique({where:{id:row.id}})).emailStatus,'PENDING');checks++
 assert(await db.workforceAuditEvent.findFirst({where:{action:'outbox.requeue',teamId:invited.data.invitation.teamId}}));checks++
 const beforeWorker=messages.length
 await call('/api/internal/outbox',{},'',200,{authorization:'Bearer '+env.NOTIFICATION_OUTBOX_SECRET})
 assert.equal((await db.workforceNotification.findUnique({where:{id:row.id}})).emailStatus,'SENT')
 assert(messages.slice(beforeWorker).some(message=>message.includes('Message-ID: <workforce-'+row.id+'@notifications.invalid>')));checks++
 const afterWorker=messages.length
 await call('/api/internal/outbox',{},'',200,{authorization:'Bearer '+env.NOTIFICATION_OUTBOX_SECRET})
 assert.equal(messages.length,afterWorker);checks++
 const expiring=(await call('/api/members/invite',{email:`expired-${tag}@example.test`,role:'EMPLOYEE'},cookie)).json()
 await db.workforceInvitation.update({where:{id:expiring.data.invitation.id},data:{expiresAt:new Date(Date.now()-1000)}})
 await call('/api/invitations/accept',{token:expiring.data.invitation.token,password,firstName:'Synthetic'},'',410)
 completed=true
 console.log(`Local HTTPS invitation, TLS SMTP catcher and reconciliation acceptance passed: ${checks} checks; no external messages.`)
}finally{
 await stopApp();for(const socket of sockets)socket.destroy();if(smtp)await new Promise(resolve=>smtp.close(resolve));if(proxy)await new Promise(resolve=>proxy.close(resolve));await db.$disconnect();closeSync(logFd);if(completed)rmSync(temp,{recursive:true,force:true});else console.error('Local private failure log:',join(temp,'app.log'))
}
