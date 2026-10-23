import { describe, expect, it, vi } from 'vitest'

const { query } = vi.hoisted(() => ({ query: vi.fn() }))
vi.mock('@/server/db', () => ({ prisma: { $queryRaw: query } }))
import { GET } from '@/app/api/health/route'

describe('public infrastructure health', () => {
  it('reports ready only when the runtime database and login-table privileges are available', async () => {
    query.mockResolvedValue([{ healthy: true }])
    const response = await GET()
    expect(response.status).toBe(200)
    expect(response.headers.get('cache-control')).toBe('no-store')
    expect(response.headers.get('set-cookie')).toBeNull()
    expect(await response.json()).toEqual({ status: 'ok' })
  })
  it('rejects incomplete runtime privileges or an absent result', async () => {
    for (const result of [[{ healthy: false }], []]) {
      query.mockResolvedValue(result)
      const response = await GET()
      expect(response.status).toBe(503)
      expect(await response.json()).toEqual({ status: 'unavailable' })
    }
  })
  it('fails without disclosing connection errors, credentials or company records', async () => {
    query.mockRejectedValue(new Error('private connection diagnostic'))
    const response = await GET()
    expect(response.status).toBe(503)
    expect(await response.json()).toEqual({ status: 'unavailable' })
  })
})
