import { afterEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'
vi.mock('@/server/db', () => ({ prisma: new Proxy({}, { get() { throw new Error('Demo accessed production database') } }) }))
import { POST as createTask, GET as listTasks } from '@/app/api/tasks/route'
import { PATCH as updateTask, DELETE as deleteTask } from '@/app/api/tasks/[id]/route'
import { POST as createEmployee } from '@/app/api/employees/route'
import { POST as invite } from '@/app/api/members/invite/route'
import { POST as accept } from '@/app/api/invitations/accept/route'
import { getVirtualCompany } from '@/server/virtual-data'
import { DEMO_PREVIEW_TOKEN } from '@/lib/demo-config'
afterEach(() => vi.unstubAllEnvs())
function request(path: string, key: string, method = 'GET', body?: object) {
  return new NextRequest(`http://localhost/api/${path}`, { method, headers: { cookie: `wf_auth=${DEMO_PREVIEW_TOKEN}; wf_demo=${key}`, 'content-type': 'application/json' }, ...(body ? { body: JSON.stringify(body) } : {}) })
}
describe('interactive demo actions', () => {
  it('creates, moves, reloads and deletes tasks without database access, isolated per visitor', async () => {
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'true')
    const key = crypto.randomUUID()
    const response = await createTask(request('tasks', key, 'POST', { title: 'Demo task' }))
    expect(response.status).toBe(200)
    const { data } = await response.json()
    const ctx = { params: Promise.resolve({ id: data.id }) }
    expect((await updateTask(request(`tasks/${data.id}`, key, 'PATCH', { status: 'COMPLETED' }), ctx)).status).toBe(200)
    const reload = await (await listTasks(request('tasks', key))).json()
    expect(reload.data.find((row: { id: string }) => row.id === data.id).status).toBe('COMPLETED')
    expect(getVirtualCompany(crypto.randomUUID()).tasks.some(row => row.id === data.id)).toBe(false)
    expect((await deleteTask(request(`tasks/${data.id}`, key, 'DELETE'), ctx)).status).toBe(200)
    expect(getVirtualCompany(key).tasks.some(row => row.id === data.id)).toBe(false)
  })
  it('rejects invalid relationships and duplicate employees', async () => {
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'true')
    const key = crypto.randomUUID()
    expect((await createTask(request('tasks', key, 'POST', { title: 'Invalid', departmentId: 'missing' }))).status).toBe(400)
    const body = { firstName: 'New', email: 'new@example.com' }
    expect((await createEmployee(request('employees', key, 'POST', body))).status).toBe(200)
    expect((await createEmployee(request('employees', key, 'POST', body))).status).toBe(409)
  })
  it('simulates invitations and acceptance without sending email or creating real accounts', async () => {
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'true')
    const key = crypto.randomUUID()
    const response = await invite(request('members/invite', key, 'POST', { email: 'invited@example.com' }))
    const { data } = await response.json()
    expect(data.emailSent).toBe(false)
    const body = { token: data.invitation.token, firstName: 'Invited', password: 'demopassword' }
    expect((await accept(request('invitations/accept', key, 'POST', body))).status).toBe(200)
    expect(getVirtualCompany(key).members.some(row => row.user.email === 'invited@example.com')).toBe(true)
    expect((await accept(request('invitations/accept', key, 'POST', body))).status).toBe(409)
  })
})
