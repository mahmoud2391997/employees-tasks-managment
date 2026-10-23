import { NextResponse } from 'next/server'
import { prisma } from '@/server/db'

export const runtime = 'nodejs'

/** Public infrastructure readiness probe. Never reads company records. */
export async function GET() {
  let healthy = false
  try {
    const [result] = await prisma.$queryRaw<{ healthy: boolean }[]>`
      SELECT (
        has_table_privilege(current_user, '"WorkforceLoginAttempt"', 'SELECT') AND
        has_table_privilege(current_user, '"WorkforceLoginAttempt"', 'INSERT') AND
        has_table_privilege(current_user, '"WorkforceLoginAttempt"', 'UPDATE') AND
        has_table_privilege(current_user, '"WorkforceLoginAttempt"', 'DELETE')
      ) AS healthy
    `
    healthy = result?.healthy === true
  } catch {
    console.error('health: database readiness check failed')
  }
  return NextResponse.json(
    { status: healthy ? 'ok' : 'unavailable' },
    { status: healthy ? 200 : 503, headers: { 'Cache-Control': 'no-store' } },
  )
}
