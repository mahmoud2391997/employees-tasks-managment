import assert from 'node:assert/strict'
import {createRequire} from 'node:module'
import {randomUUID} from 'node:crypto'
import {fileURLToPath} from 'node:url'
import {mkdirSync} from 'node:fs'
import {resolve,join} from 'node:path'
import {chromium} from 'playwright'
const require=createRequire(fileURLToPath(new URL('../apps/workforce/package.json',import.meta.url)))
const bcrypt=require('bcryptjs')
/** Only invoked by the disposable HTTPS/TLS catcher harness. */
export async function verifyBrandingPayroll({call,db,cookie,site,env}){
 const owner=await db.workforceUser.findUnique({where:{email:env.COMPANY_ADMIN_EMAIL},include:{profile:true}}),teamId=owner.profile.teamId
 const name='مكتب الاختبار المعتمد',color='#f5c400'
 await call('/api/company-settings',{name:'Synthetic company',systemName:name,brandColor:color},cookie)
 const settings=(await call('/api/company-settings',undefined,cookie)).json().data
 assert.equal(settings.systemName,name);assert.equal(settings.brandColor,color)
 const publicPage=await call('/auth/login');assert(publicPage.text.includes(name));assert(publicPage.text.includes('--brand-selected:'+color))
 await call('/api/company-settings',{name:'Synthetic company',brandColor:'#fff;display:none'},cookie,400)
 const after=(await db.workforceTeam.findUnique({where:{id:teamId}})).details;assert.equal(after.brandColor,color)
 const employee=(await call('/api/employees',{email:`payroll-subject-${randomUUID()}@example.test`,firstName:'Synthetic payroll subject',salary:'31415.92'},cookie)).json().data
 const role=await db.workforceCustomRole.create({data:{teamId,name:'DIRECTORY_OPERATOR_'+randomUUID().replaceAll('-',''),label:'Synthetic directory operator',permissions:['dashboard.view','employees.view','employees.create','employees.edit']}})
 const password=randomUUID()+randomUUID(),email=`payroll-editor-${randomUUID()}@example.test`
 const profile=await db.workforceProfile.create({data:{teamId,email,firstName:'Synthetic operator',role:role.name}})
 const user=await db.workforceUser.create({data:{email,passwordHash:await bcrypt.hash(password,4),profileId:profile.id}})
 await db.workforceTeamMember.create({data:{teamId,userId:user.id,role:role.name,isActive:true}})
 const operator=(await call('/api/auth/login',{email,password})).cookie
 const directory=(await call('/api/employees',undefined,operator)).json();assert(!JSON.stringify(directory).includes('31415.92'));assert(directory.data.every(row=>!Object.hasOwn(row,'salary')))
 const search=(await call('/api/employees?q=31415.92',undefined,operator)).json();assert.equal(search.total,0)
 for(const page of ['/employees','/employees/'+employee.id]){const response=await call(page,undefined,operator);assert(!response.text.includes('31415.92'),'Salary absent from server HTML/RSC '+page)}
 const changed=(await call('/api/employees/'+employee.id,{position:'Profile changed without payroll'},operator,200,{},'PATCH')).json();assert(!Object.hasOwn(changed.data,'salary'));assert.equal((await db.workforceEmployee.findUnique({where:{id:employee.id}})).salary.toString(),'31415.92')
 for(const salary of [null,'999.99'])await call('/api/employees/'+employee.id,{salary},operator,403,{},'PATCH')
 await call('/api/employees',{email:`denied-payroll-${randomUUID()}@example.test`,firstName:'Denied',salary:'100'},operator,403)
 const created=(await call('/api/employees',{email:`allowed-profile-${randomUUID()}@example.test`,firstName:'Allowed'},operator)).json().data;assert(!Object.hasOwn(created,'salary'))
 // Grant write-only payroll through the existing role API; read access remains separate.
 await call('/api/roles/'+role.id,{permissions:['dashboard.view','employees.view','employees.create','employees.edit','salary.edit']},cookie,200,{},'PATCH')
 const written=(await call('/api/employees/'+employee.id,{salary:'27182.81'},operator,200,{},'PATCH')).json();assert(!Object.hasOwn(written.data,'salary'));assert.equal((await db.workforceEmployee.findUnique({where:{id:employee.id}})).salary.toString(),'27182.81')
 await call('/api/roles/'+role.id,{permissions:['dashboard.view','employees.view','employees.create','employees.edit','salary.view']},cookie,200,{},'PATCH')
 const visible=(await call('/api/employees',undefined,operator)).json();assert.equal(visible.data.find(row=>row.id===employee.id).salary,'27182.81')
 await call('/api/employees/'+employee.id,{salary:'1'},operator,403,{},'PATCH')
 // Browser confirms visible branding, derived readable palette, and restricted salary editor.
 const output=resolve(process.env.WORKFORCE_UI_ARTIFACTS||'test-artifacts/ui-local');mkdirSync(output,{recursive:true})
 const browser=await chromium.launch({headless:true,channel:process.env.PLAYWRIGHT_CHANNEL||undefined})
 const context=await browser.newContext({viewport:{width:390,height:844},ignoreHTTPSErrors:true,locale:'ar-OM'}),page=await context.newPage(),errors=[]
 page.on('pageerror',error=>errors.push(error.message))
 try{
  await page.goto(site+'/auth/login');await page.getByText(name,{exact:true}).first().waitFor();assert.equal(await page.locator('html').getAttribute('dir'),'rtl');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));assert.equal(await page.locator('body').evaluate(el=>getComputedStyle(el).getPropertyValue('--brand-selected').trim()),color);const primary=page.getByRole('button',{name:'دخول',exact:true});const bg=await primary.evaluate(el=>getComputedStyle(el).backgroundColor);const ink=await page.locator('body').evaluate(el=>getComputedStyle(el).getPropertyValue('--color-brand-600').trim());const expected='rgb('+ink.slice(1).match(/../g).map(v=>parseInt(v,16)).join(', ')+')';assert.equal(bg,expected,'Tailwind primary button must use the approved derived theme color');await page.screenshot({path:join(output,'08-approved-brand-login-rtl390.png'),fullPage:true})
  await page.getByLabel('البريد الإلكتروني',{exact:true}).fill(email);await page.getByLabel('كلمة المرور',{exact:true}).fill(password);await page.getByRole('button',{name:'دخول',exact:true}).click();await page.waitForURL(site+'/dashboard');await page.goto(site+'/employees');await page.getByRole('button',{name:'موظف جديد',exact:true}).click();assert.equal(await page.getByText('الراتب (اختياري)',{exact:true}).count(),0);await page.screenshot({path:join(output,'09-salary-view-without-edit-rtl390.png'),fullPage:true});
  const ownerContext=await browser.newContext({viewport:{width:390,height:844},ignoreHTTPSErrors:true,locale:'ar-OM'}),ownerPage=await ownerContext.newPage();
  try{await ownerPage.goto(site+'/auth/login');await ownerPage.getByLabel('البريد الإلكتروني',{exact:true}).fill(env.COMPANY_ADMIN_EMAIL);await ownerPage.getByLabel('كلمة المرور',{exact:true}).fill(env.COMPANY_ADMIN_PASSWORD);await ownerPage.getByRole('button',{name:'دخول',exact:true}).click();await ownerPage.waitForURL(site+'/dashboard');await ownerPage.goto(site+'/settings');await ownerPage.getByLabel('اسم النظام',{exact:true}).fill(name);await ownerPage.getByLabel('لون الهوية',{exact:true}).fill(color);const saved=ownerPage.waitForResponse(r=>r.url()===site+'/api/company-settings'&&r.request().method()==='POST');const form=ownerPage.locator('form').filter({has:ownerPage.getByLabel('اسم النظام',{exact:true})});await form.getByRole('button',{name:'حفظ',exact:true}).click();assert.equal((await saved).status(),200);await ownerPage.getByRole('status').filter({hasText:'تم الحفظ'}).waitFor();assert.equal((await db.workforceTeam.findUnique({where:{id:teamId}})).details.systemName,name);assert(await ownerPage.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await ownerPage.screenshot({path:join(output,'10-brand-settings-saved-rtl390.png'),fullPage:true})}finally{await ownerContext.close()}
  assert.deepEqual(errors,[])
 }finally{await context.close();await browser.close()}
 console.log('PASS: real PostgreSQL settings persistence/public login branding; independent payroll read/write via role API, server HTML/RSC/API redaction, profile edits preserve salary; mobile browser brand and restricted salary form. No external mail/provider.')
}
