import assert from 'node:assert/strict'
import {mkdirSync,writeFileSync} from 'node:fs'
import {resolve,join} from 'node:path'
import {randomUUID} from 'node:crypto'
import {chromium} from 'playwright'

/** Business writes below originate only from browser form submissions/clicks. */
export async function runWorkforceUiJourney({site,env,messages,db}) {
 const output=resolve(process.env.WORKFORCE_UI_ARTIFACTS||'test-artifacts/ui-local')
 mkdirSync(output,{recursive:true})
 const browser=await chromium.launch({headless:true,channel:process.env.PLAYWRIGHT_CHANNEL||undefined})
 const contexts=[],errors=[],screenshots=[],measurements=[]
 async function measure(page,name,scope='main'){const region=typeof scope==='string'?page.locator(scope).first():scope;await region.waitFor({state:'visible'});measurements.push({name,visibleFields:await region.locator('input:not([type=hidden]),select,textarea').filter({visible:true}).count(),firstContentTop:await region.evaluate(el=>Math.round(el.getBoundingClientRect().top)),visibleButtons:await region.getByRole('button').filter({visible:true}).count()})}
 async function page(){const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1,ignoreHTTPSErrors:true,locale:'ar-OM'});contexts.push(context);const page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));return page}
 async function screenshot(page,name){assert.equal(await page.locator('html').getAttribute('dir'),'rtl');assert.equal(await page.locator('html').getAttribute('lang'),'ar');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Page must fit the mobile viewport');const path=join(output,name+'.png');await page.screenshot({path,fullPage:true});screenshots.push(path)}
 async function navigate(page,label,path){await page.getByRole('button',{name:'فتح القائمة',exact:true}).click();await page.getByRole('dialog',{name:'القائمة',exact:true}).getByRole('link',{name:label,exact:true}).click();await page.waitForURL(site+path)}
 try {
  const tag=randomUUID().slice(0,8),email=`ui-${tag}@example.test`,password=randomUUID()+randomUUID(),firstName=`موظف تجربة ${tag}`,title=`مهمة تجريبية ${tag}`
  const admin=await page();await admin.goto(site+'/auth/login');await screenshot(admin,'01-login-rtl-390')
  await admin.getByLabel('البريد الإلكتروني',{exact:true}).fill(env.COMPANY_ADMIN_EMAIL);await admin.getByLabel('كلمة المرور',{exact:true}).fill(env.COMPANY_ADMIN_PASSWORD);await admin.getByRole('button',{name:'دخول',exact:true}).click();await admin.waitForURL(site+'/dashboard')
  await measure(admin,'admin-dashboard');await navigate(admin,'الأعضاء','/members');await measure(admin,'invitation')
  await admin.getByLabel('البريد الإلكتروني',{exact:true}).fill(email);await admin.getByLabel(/^الدور/).first().selectOption('EMPLOYEE')
  const inviteResponse=admin.waitForResponse(response=>response.url()===site+'/api/members/invite'&&response.request().method()==='POST')
  await admin.getByRole('button',{name:'إرسال الدعوة',exact:true}).click();const response=await inviteResponse;assert.equal(response.status(),200)
  const invitation=(await response.json()).data
  const link=admin.getByText(invitation.inviteUrl,{exact:true});await link.waitFor();assert.equal(await link.textContent(),invitation.inviteUrl)
  assert(messages.some(message=>message.replace(/=\r\n/g,'').includes(invitation.invitation.token)),'Invitation must actually reach the local TLS catcher')
  await screenshot(admin,'02-admin-invitation-rtl-390')
  const employee=await page();await employee.goto(await link.textContent())
  await employee.getByLabel('الاسم الأول',{exact:true}).fill(firstName);await employee.getByLabel('كلمة المرور',{exact:true}).fill(password);await screenshot(employee,'03-accept-invitation-rtl-390')
  await measure(employee,'invitation-acceptance','form');await employee.getByRole('button',{name:'انضمام',exact:true}).click();await employee.waitForURL(site+'/dashboard')
  await navigate(admin,'المهام','/tasks');await admin.getByRole('button',{name:'+ إضافة مهمة',exact:true}).click()
  const dialog=admin.getByRole('dialog',{name:'مهمة جديدة',exact:true});await measure(admin,'new-task',dialog);await dialog.getByLabel('العنوان',{exact:true}).fill(title);await dialog.getByLabel(/^الموظف المسند إليه/).selectOption({label:firstName});await dialog.getByLabel('الوصف',{exact:true}).fill('مهمة مصطنعة لاختبار دورة الإسناد والإشعار من الواجهة فقط')
  const taskResponse=admin.waitForResponse(response=>response.url()===site+'/api/tasks'&&response.request().method()==='POST')
  await dialog.getByRole('button',{name:'حفظ',exact:true}).click();const saved=await taskResponse;assert.equal(saved.status(),200);const task=(await saved.json()).data
  await admin.getByText(title,{exact:true}).waitFor();await screenshot(admin,'04-task-assigned-rtl-390')
  await employee.getByRole('link',{name:'الإشعارات',exact:true}).filter({visible:true}).click();await employee.waitForURL(site+'/notifications');await employee.getByText(title,{exact:false}).waitFor()
  await screenshot(employee,'05-employee-notification-rtl-390')
  const readResponse=employee.waitForResponse(response=>response.url()===site+'/api/notifications'&&response.request().method()==='POST')
  await employee.getByRole('button',{name:'تحديد كمقروء',exact:true}).first().click();assert.equal((await readResponse).status(),200);await employee.getByText('مقروء',{exact:true}).waitFor()
  await navigate(employee,'المهام','/tasks');assert.equal(await employee.getByRole('button',{name:'+ إضافة مهمة',exact:true}).count(),0)
  await employee.getByText(title,{exact:true}).waitFor();await screenshot(employee,'06-employee-task-no-create-rtl-390')
  await employee.goto(site+'/roles');await employee.getByText('ليس لديك صلاحية.',{exact:true}).waitFor();await screenshot(employee,'07-role-denial-rtl-390')
  const stored=await db.workforceTask.findUnique({where:{id:task.id}});assert.equal(stored.title,title);assert(stored.assigneeId)
  const notification=await db.workforceNotification.findFirst({where:{userId:stored.assigneeId,type:'task_assigned'},orderBy:{createdAt:'desc'}});assert.equal(notification.data.taskId,task.id);assert.equal(notification.read,true)
  assert.deepEqual(errors,[],'No unhandled browser errors');writeFileSync(join(output,'measurements.json'),JSON.stringify(measurements,null,2)+'\n')
  console.log(`PASS: actual UI invitation→acceptance→task assignment→notification/read→role denial; Arabic RTL390; ${screenshots.length} screenshots; no business action driven by API calls.`)
 } catch(error){for(let i=0;i<contexts.length;i++)for(const page of contexts[i].pages())await page.screenshot({path:join(output,`failure-${i}.png`),fullPage:true}).catch(()=>{});throw error}
 finally{await Promise.all(contexts.map(context=>context.close()));await browser.close()}
}
