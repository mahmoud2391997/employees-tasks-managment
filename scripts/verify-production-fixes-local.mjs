// Disposable local acceptance: two real production servers share one fresh PostgreSQL database.
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { randomUUID, createHash } from 'node:crypto'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { mkdtempSync, openSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const url = new URL(process.env.WORKFORCE_DATABASE_URL || '')
assert(['localhost', '127.0.0.1'].includes(url.hostname) && url.pathname.includes('mail_acceptance_fixes'), 'Use a dedicated disposable local fixes database')
assert(!process.env.SMTP_HOST, 'External SMTP must be disabled')
const require = createRequire(join(root, 'apps/workforce/package.json'))
const { PrismaClient } = require(join(root, 'packages/workforce-database/src/generated/client'))
const bcrypt = require('bcryptjs')
const db = new PrismaClient()
const temp = mkdtempSync(join(tmpdir(), 'employees-fixes-acceptance-'))
const password = randomUUID() + randomUUID()
const tag = randomUUID()
const env = { ...process.env, NODE_ENV: 'production', COMPANY_NAME: 'Isolated fixes acceptance',
  COMPANY_ADMIN_EMAIL: `owner-${tag}@example.invalid`, COMPANY_ADMIN_PASSWORD: password,
  WORKFORCE_JWT_SECRET: randomUUID() + randomUUID(), WORKFORCE_DEMO_MODE: 'true',
  SITE_URL: 'https://localhost:4441', SMTP_HOST: '', SMTP_USER: '', SMTP_PASS: '', SMTP_FROM: '' }
const servers = new Map()
let checks = 0
const hash = email => createHash('sha256').update(email.trim().toLowerCase()).digest('hex')
async function start(port) {
  const log = openSync(join(temp, `${port}.log`), 'a', 0o600)
  const child = spawn(process.execPath, [join(root, 'apps/workforce/node_modules/next/dist/bin/next'), 'start', '--hostname', '127.0.0.1', '--port', String(port)],
    { cwd: join(root, 'apps/workforce'), env, stdio: ['ignore', log, log] })
  servers.set(port, child)
  for (let i = 0; i < 100; i++) {
    if (child.exitCode !== null) throw Error(`Server failed; local log ${temp}`)
    try { if ((await fetch(`http://localhost:${port}/auth/login`)).ok) return } catch {}
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  throw Error('Local server startup timed out')
}
async function stop(port) {
  const child = servers.get(port)
  if (!child || child.exitCode !== null) return
  await new Promise(resolve => { child.once('exit', resolve); child.kill('SIGTERM') })
  servers.delete(port)
}
async function call(path, { port = 4441, cookie = '', body, method = body === undefined ? 'GET' : 'POST', expected = 200, headers = {} } = {}) {
  const res = await fetch(`http://localhost:${port}${path}`, { method, redirect: 'manual',
    headers: { cookie, origin: env.SITE_URL, 'content-type': 'application/json', ...headers }, body: body === undefined ? undefined : JSON.stringify(body) })
  assert.equal(res.status, expected, `${method} ${path}: ${res.status} instead of ${expected}`)
  checks++
  return { res, json: () => res.json(), cookie: res.headers.getSetCookie().map(value => value.split(';')[0]).join('; ') }
}
async function login(email, port = 4441) { return (await call('/api/auth/login', { port, body: { email, password } })).cookie }
try {
  await start(4441); await start(4442)
  assert.deepEqual(await (await call('/api/health')).json(), { status: 'ok' }); checks++
  const adminCookie = await login(env.COMPANY_ADMIN_EMAIL)
  const owner = await db.workforceUser.findUniqueOrThrow({ where: { email: env.COMPANY_ADMIN_EMAIL }, include: { profile: true } })
  const teamId = owner.profile.teamId
  const passwordHash = await bcrypt.hash(password, 12)
  async function user(role, suffix, team = teamId) {
    const email = `${suffix}-${tag}@example.invalid`
    const profile = await db.workforceProfile.create({ data: { email, firstName: suffix, role, teamId: team } })
    const account = await db.workforceUser.create({ data: { email, passwordHash, profileId: profile.id } })
    await db.workforceTeamMember.create({ data: { userId: account.id, teamId: team, role } })
    return { ...profile, cookie: await login(email) }
  }
  const manager = await user('MANAGER', 'manager')
  const employee = await user('EMPLOYEE', 'employee')
  await db.workforceCustomRole.create({ data: { teamId, name: `LIMITED_${tag}`, label: 'Limited test role', permissions: ['dashboard.view', 'tasks.view', 'tasks.edit'] } })
  const limited = await user(`LIMITED_${tag}`, 'limited')
  const foreignOwner = await db.workforceUser.create({ data: { email: `foreign-owner-${tag}@example.invalid`, passwordHash } })
  const foreignTeam = await db.workforceTeam.create({ data: { name: 'Foreign fixture', ownerId: foreignOwner.id } })
  const foreign = await user('ADMIN', 'foreign', foreignTeam.id)
  const manualEmail = `manual-${tag}@example.invalid`
  const manual = (await (await call('/api/members/invite', { cookie: adminCookie, body: { email: manualEmail, role: 'EMPLOYEE', delivery: 'link' } })).json()).data
  assert.equal(manual.emailSent, false); checks++
  const accepted = await call('/api/invitations/accept', { body: { token: manual.invitation.token, password, firstName: 'Manual fixture' } })
  assert(accepted.cookie); checks++
  assert.equal((await db.workforceProfile.findUniqueOrThrow({ where: { email: manualEmail } })).teamId, teamId); checks++
  await call('/api/invitations/accept', { body: { token: manual.invitation.token, password, firstName: 'Repeated' }, expected: 409 })
  await call('/api/members/invite', { cookie: employee.cookie, body: { email: `forbidden-manual-${tag}@example.invalid`, role: 'EMPLOYEE', delivery: 'link' }, expected: 403 })
  const dep = await db.workforceDepartment.create({ data: { teamId, name: 'Managed fixture department', managerId: manager.id } })
  await db.workforceEmployee.create({ data: { teamId, profileId: employee.id, departmentId: dep.id, salary: '1234.56' } })
  const assigned = (await (await call('/api/tasks', { cookie: adminCookie, body: { title: `Assigned manager ${tag}`, assigneeId: manager.id, departmentId: dep.id } })).json()).data
  const created = (await (await call('/api/tasks', { cookie: manager.cookie, body: { title: `Created manager ${tag}`, assigneeId: employee.id, departmentId: dep.id } })).json()).data
  const hidden = (await (await call('/api/tasks', { cookie: adminCookie, body: { title: `Unrelated ${tag}`, assigneeId: employee.id } })).json()).data
  const customTask = await db.workforceTask.create({ data: { teamId, title: `Limited ${tag}`, createdById: owner.profile.id, assigneeId: limited.id } })
  const foreignTask = await db.workforceTask.create({ data: { teamId: foreignTeam.id, title: `Foreign ${tag}`, createdById: manager.id, assigneeId: manager.id } })
  const tasks = async (cookie, params = '') => (await (await call('/api/tasks' + params, { cookie })).json())
  const managerList = await tasks(manager.cookie)
  assert.equal(managerList.total, 2)
  assert.deepEqual(new Set(managerList.data.map(row => row.id)), new Set([assigned.id, created.id])); checks++
  for (const params of ['?assignment=me', `?q=Assigned&departmentId=${dep.id}`, '?take=1&skip=1']) {
    const result = await tasks(manager.cookie, params)
    assert(result.data.length === 1 && [assigned.id, created.id].includes(result.data[0].id)); checks++
  }
  const secondPage = await tasks(manager.cookie, '?take=1&skip=1')
  assert.equal(secondPage.total, 2); assert.equal(secondPage.hasMore, false); checks++
  const page = await (await call('/tasks', { cookie: manager.cookie })).res.text()
  assert(page.includes(assigned.title) && page.includes(created.title)); assert(!page.includes(hidden.title) && !page.includes(foreignTask.title)); checks++
  const dashboard = await (await call('/dashboard', { cookie: manager.cookie })).res.text()
  assert(dashboard.includes(assigned.title)); assert(!dashboard.includes(foreignTask.title)); checks++
  await call(`/api/tasks/${assigned.id}`, { cookie: manager.cookie, method: 'PATCH', body: { status: 'COMPLETED' } })
  assert.equal((await db.workforceTask.findUniqueOrThrow({ where: { id: assigned.id } })).status, 'COMPLETED'); checks++
  await call(`/api/tasks/${hidden.id}`, { cookie: manager.cookie, method: 'PATCH', body: { status: 'COMPLETED' }, expected: 403 })
  await call(`/api/tasks/${foreignTask.id}`, { cookie: manager.cookie, method: 'PATCH', body: { status: 'COMPLETED' }, expected: 404 })
  assert.deepEqual(new Set((await tasks(employee.cookie)).data.map(row => row.id)), new Set([created.id, hidden.id])); checks++
  assert.deepEqual((await tasks(limited.cookie)).data.map(row => row.id), [customTask.id]); checks++
  await call('/api/members/invite', { cookie: employee.cookie, body: { email: `blocked-${tag}@example.invalid`, role: 'ADMIN' }, expected: 403 })
  const employees = await (await call('/api/employees', { cookie: employee.cookie })).json()
  assert(employees.data.every(row => !Object.hasOwn(row, 'salary'))); checks++
  assert((await tasks(foreign.cookie)).data.every(row => row.teamId === foreignTeam.id)); checks++

  // Concurrent callers from two independent processes share exactly five reservations.
  const guessed = `guess-${tag}@example.invalid`
  const responses = await Promise.all(Array.from({ length: 16 }, (_, index) => fetch(`http://localhost:${index % 2 ? 4441 : 4442}/api/auth/login`, {
    method: 'POST', headers: { origin: env.SITE_URL, 'content-type': 'application/json', 'x-forwarded-for': `203.0.113.${index + 1}` },
    body: JSON.stringify({ email: index % 2 ? guessed : guessed.toUpperCase(), password: 'wrong-password' }),
  })))
  assert.equal(responses.filter(res => res.status === 401).length, 5)
  assert.equal(responses.filter(res => res.status === 429).length, 11)
  assert(responses.filter(res => res.status === 429).every(res => Number(res.headers.get('retry-after')) > 0)); checks += 3
  await stop(4442); await start(4442)
  await call('/api/auth/login', { port: 4442, body: { email: guessed, password }, expected: 429 })
  await db.workforceLoginAttempt.update({ where: { key: hash(guessed) }, data: { expiresAt: new Date(Date.now() - 1000) } })
  await call('/api/auth/login', { port: 4442, body: { email: guessed, password }, expected: 401 })
  assert.equal((await db.workforceLoginAttempt.findUniqueOrThrow({ where: { key: hash(guessed) } })).attempts, 1); checks++

  const expiredKey = hash(`expired-${tag}@example.invalid`)
  const activeKey = hash(`active-${tag}@example.invalid`)
  await db.workforceLoginAttempt.createMany({ data: [
    { key: expiredKey, attempts: 6, expiresAt: new Date(Date.now() - 2 * 86400000) },
    { key: activeKey, attempts: 5, expiresAt: new Date(Date.now() + 600000) },
  ] })
  await call('/api/auth/login', { body: { email: `cleanup-${tag}@example.invalid`, password }, expected: 401 })
  assert.equal(await db.workforceLoginAttempt.findUnique({ where: { key: expiredKey } }), null); checks++
  assert.equal((await db.workforceLoginAttempt.findUniqueOrThrow({ where: { key: activeKey } })).attempts, 5); checks++

  // A known valid account has the same fixed budget; successful auth cannot erase concurrent attempts.
  for (let index = 0; index < 4; index++) await login(manager.email, index % 2 ? 4441 : 4442)
  await call('/api/auth/login', { body: { email: manager.email, password }, expected: 429 })
  await db.$executeRawUnsafe('ALTER TABLE "WorkforceLoginAttempt" RENAME TO "WorkforceLoginAttempt_fixture_unavailable"')
  try {
    assert.deepEqual(await (await call('/api/health', { expected: 503 })).json(), { status: 'unavailable' }); checks++
    const outage = await call('/api/auth/login', { body: { email: env.COMPANY_ADMIN_EMAIL, password }, expected: 503 })
    assert.equal(outage.res.headers.get('set-cookie'), null); checks++
  } finally { await db.$executeRawUnsafe('ALTER TABLE "WorkforceLoginAttempt_fixture_unavailable" RENAME TO "WorkforceLoginAttempt"') }
  await stop(4441); await start(4441)
  assert.equal((await tasks(manager.cookie)).data.find(row => row.id === assigned.id).status, 'COMPLETED'); checks++
  await db.workforceLoginAttempt.update({ where: { key: hash(manager.email) }, data: { expiresAt: new Date(Date.now() - 1000) } })
  writeFileSync(join(temp, 'browser-fixture.json'), JSON.stringify({ site: env.SITE_URL, managerEmail: manager.email, ownerEmail: env.COMPANY_ADMIN_EMAIL, password, assignedTitle: assigned.title, createdTitle: created.title }), { mode: 0o600 })
  console.log(`PASS: ${checks} local API/database assertions; two processes, concurrent limiter, restart persistence, expiry, fail-closed outage, manager/employee/custom-role/company isolation and salary redaction. SMTP disabled.`)
  console.log(`Private browser fixture and server logs: ${temp}`)
  if (process.env.KEEP_FIXTURE_SERVERS === 'true') {
    console.log('Fixture servers retained for browser acceptance; terminate this process after inspection.')
    await new Promise(resolve => { process.once('SIGTERM', resolve); process.once('SIGINT', resolve) })
  }
} finally {
  for (const port of servers.keys()) await stop(port)
  await db.$disconnect()
}
