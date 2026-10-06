import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { randomUUID } from 'node:crypto'
import { fileURLToPath } from 'node:url'
const root = fileURLToPath(new URL('../', import.meta.url))
process.loadEnvFile(`${root}apps/workforce/.env`)
const dbUrl = new URL(process.env.WORKFORCE_DATABASE_URL)
assert(['localhost', '127.0.0.1'].includes(dbUrl.hostname), 'This check only uses a local database')
assert(!process.env.SMTP_HOST, 'Disable SMTP before running local checks')
const require = createRequire(`${root}apps/workforce/package.json`)
const { PrismaClient } = require(`${root}packages/workforce-database/src/generated/client`)
const db = new PrismaClient()
const base = process.env.VERIFY_BASE_URL || 'http://localhost:3001'
assert(['localhost','127.0.0.1'].includes(new URL(base).hostname), 'Only localhost is supported')
let cookie = ''
const ids = { employees: [], departments: [], tasks: [], invitations: [], profiles: [], users: [], roles: [] }
let passed = 0
async function call(path, method='GET', body, expected=200, auth=cookie) {
  const res = await fetch(`${base}${path}`, { method, headers: { 'content-type':'application/json', cookie:auth }, body:body === undefined ? undefined : JSON.stringify(body), redirect:'manual' })
  assert.equal(res.status, expected, `${method} ${path}: unexpected status ${res.status}`)
  passed++
  const data = await res.json()
  return { data, cookie: res.headers.get('set-cookie')?.split(';')[0] }
}
const tag = randomUUID()
const email = `verify-${tag}@example.invalid`
const password = randomUUID()+randomUUID()
try {
  const login = await call('/api/auth/login','POST',{email:process.env.COMPANY_ADMIN_EMAIL,password:process.env.COMPANY_ADMIN_PASSWORD},200,'')
  cookie=login.cookie
  assert(cookie)
  const me=(await call('/api/auth/me')).data
  const owner=await db.workforceUser.findUnique({where:{email:process.env.COMPANY_ADMIN_EMAIL},include:{profile:true}})
  assert(owner?.profile?.teamId)
  const teamId=owner.profile.teamId
  for (const path of ['/dashboard','/employees','/departments','/tasks','/members','/roles','/profile','/settings','/notifications']) {
    const res = await fetch(`${base}${path}`,{headers:{cookie},redirect:'manual'})
    assert.equal(res.status,200,`Page ${path}`);passed++
    assert(!(await res.text()).includes('Internal Server Error'))
  }
  for(const path of ['/api/employees','/api/tasks','/api/departments','/api/members','/api/roles','/api/notifications'])await call(path)
  await call('/api/employees','POST',{email,firstName:'Verify',salary:'invalid'},400)
  const dep=(await call('/api/departments','POST',{name:`Verify ${tag}`})).data.data
  ids.departments.push(dep.id)
  const emp=(await call('/api/employees','POST',{email,firstName:'Verify',salary:'1250.50',departmentId:dep.id})).data.data
  ids.employees.push(emp.id);ids.profiles.push(emp.profileId)
  await call('/api/employees','POST',{email,firstName:'Duplicate'},409)
  await call(`/api/employees/${emp.id}`,'PATCH',{status:'ON_LEAVE',salary:'1500.25'})
  await call(`/api/departments/${dep.id}`,'PATCH',{managerId:'nonexistent'},400)
  await call(`/api/departments/${dep.id}`,'PATCH',{name:'Verify updated',managerId:emp.profileId})
  const invite=await db.workforceInvitation.create({data:{email,teamId,role:'EMPLOYEE',token:randomUUID()+randomUUID(),invitedById:owner.profile.id,expiresAt:new Date(Date.now()+60000)}})
  ids.invitations.push(invite.id)
  const accepted=await call('/api/invitations/accept','POST',{token:invite.token,password,firstName:'Verified'},200,'')
  const user=await db.workforceUser.findUnique({where:{email}})
  ids.users.push(user.id)
  assert.equal(user.profileId,emp.profileId)
  await call('/api/invitations/accept','POST',{token:invite.token,password,firstName:'Verified'},409,'')
  await call('/api/auth/me','GET',undefined,200,accepted.cookie)
  await call('/api/roles','POST',{name:'FORBIDDEN',label:'Forbidden',permissions:[]},403,accepted.cookie)
  const task=(await call('/api/tasks','POST',{title:`Verify ${tag}`,assigneeId:emp.profileId,departmentId:dep.id})).data.data
  ids.tasks.push(task.id)
  await call(`/api/tasks/${task.id}`,'PATCH',{status:'COMPLETED',dueDate:'2027-01-01',description:'Details'})
  const cleared=(await call(`/api/tasks/${task.id}`,'PATCH',{dueDate:null,description:null,departmentId:null})).data.data
  assert.equal(cleared.dueDate,null);assert.equal(cleared.description,null);assert.equal(cleared.departmentId,null)
  const notifications=(await call('/api/notifications','GET',undefined,200,accepted.cookie)).data.data
  assert(notifications.some(n=>n.data?.taskId===task.id))
  await call('/api/notifications','POST',{id:notifications[0].id},200,accepted.cookie)
  const role=(await call('/api/roles','POST',{name:`VERIFY_${tag.replaceAll('-','')}`,label:'Verification role',permissions:['tasks.view']})).data.data
  ids.roles.push(role.id)
  await call(`/api/roles/${role.id}`,'PATCH',{label:'Updated verification role',permissions:['tasks.view','dashboard.view']})
  const member=await db.workforceTeamMember.findUnique({where:{userId_teamId:{userId:user.id,teamId}}})
  await call(`/api/members/${member.id}`,'PATCH',{role:role.name})
  await call('/api/employees','GET',undefined,403,accepted.cookie)
  await call(`/api/members/${member.id}`,'PATCH',{role:'EMPLOYEE'})
  await call(`/api/roles/${role.id}`,'DELETE');ids.roles=[]
  await call(`/api/members/${member.id}`,'DELETE')
  await call('/api/auth/me','GET',undefined,401,accepted.cookie)
  await call('/api/members/reactivate','POST',{email})
  await call('/api/auth/me','GET',undefined,200,accepted.cookie)
  const demo=await call('/api/auth/demo','POST',{},200,'')
  await call(`/api/tasks/${task.id}`,'PATCH',{status:'TODO'},403,demo.cookie)
  const demoNotifications=(await call('/api/notifications','GET',undefined,200,demo.cookie)).data.data
  await call('/api/notifications','POST',{id:demoNotifications[0].id},403,demo.cookie)
  for(const path of ['/api/employees','/api/tasks','/api/departments','/api/members','/api/roles'])await call(path,'GET',undefined,200,demo.cookie)
  await call(`/api/tasks/${task.id}`,'DELETE');ids.tasks=[]
  await call(`/api/employees/${emp.id}`,'DELETE');ids.employees=[]
  const concurrent=await Promise.all([1,2].map(async () => {
    const res=await fetch(`${base}/api/employees`,{method:'POST',headers:{cookie,'content-type':'application/json'},body:JSON.stringify({email,firstName:'Concurrent'})})
    const json=await res.json();if(res.ok)ids.employees.push(json.data.id)
    return res.status
  }))
  assert.deepEqual(concurrent.sort(),[200,409]);passed+=2
  await call(`/api/departments/${dep.id}`,'DELETE');ids.departments=[]
  console.log(`PASS: ${passed} local API/database checks; employee-to-invite reused profile, task notifications persisted, inactive member denied, demo writes denied.`)
} finally {
  const fixtureUser = await db.workforceUser.findUnique({where:{email},select:{id:true}})
  if(fixtureUser && !ids.users.includes(fixtureUser.id))ids.users.push(fixtureUser.id)
  await db.workforceCustomRole.deleteMany({where:{id:{in:ids.roles}}})
  await db.workforceTask.deleteMany({where:{id:{in:ids.tasks}}})
  await db.workforceInvitation.deleteMany({where:{id:{in:ids.invitations}}})
  await db.workforceEmployee.deleteMany({where:{id:{in:ids.employees}}})
  await db.workforceDepartment.deleteMany({where:{id:{in:ids.departments}}})
  await db.workforceUser.deleteMany({where:{id:{in:ids.users}}})
  await db.workforceProfile.deleteMany({where:{id:{in:ids.profiles}}})
  await db.workforceNotification.deleteMany({where:{data:{path:['email'],equals:email}}})
  await db.$disconnect()
}
