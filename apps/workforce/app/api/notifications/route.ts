import { NextResponse, type NextRequest } from 'next/server'

import { prisma } from '@/server/db'
import { getSessionUser } from '@/server/auth/session'

export const runtime = 'nodejs'

function parseTakeSkip(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  let take = Number(sp.get('take') ?? '50')
  let skip = Number(sp.get('skip') ?? '0')
  if (!Number.isFinite(take) || take <= 0) take = 50
  if (!Number.isFinite(skip) || skip < 0) skip = 0
  take = Math.min(200, Math.max(1, Math.floor(take)))
  skip = Math.max(0, Math.floor(skip))
  return { take, skip }
}

export async function GET(req: NextRequest) {
  const user = await getSessionUser(req)
  if (!user?.profile) return NextResponse.json({ success: false, message: 'غير مصرح' }, { status: 401 })
  const { take, skip } = parseTakeSkip(req)
  const where = { userId: user.profile.id }
  const [total, rows] = await prisma.$transaction([
    prisma.workforceNotification.count({ where }),
    prisma.workforceNotification.findMany({
      where,
      orderBy: [{ createdAt: 'desc' }],
      take,
      skip,
    }),
  ])
  return NextResponse.json({ success: true, data: rows, total, hasMore: skip + rows.length < total })
}

export async function POST(req: NextRequest) {
  const user = await getSessionUser(req)
  if (!user?.profile) return NextResponse.json({ success: false, message: 'غير مصرح' }, { status: 401 })
  const json = (await req.json().catch(() => null)) as { id?: string } | null
  const id = String(json?.id ?? '')
  if (!id) return NextResponse.json({ success: false, message: 'id مطلوب' }, { status: 400 })
  const existing = await prisma.workforceNotification.findFirst({ where: { id, userId: user.profile.id } })
  if (!existing) return NextResponse.json({ success: false, message: 'غير موجود' }, { status: 404 })
  const updated = await prisma.workforceNotification.update({ where: { id }, data: { read: true } })
  return NextResponse.json({ success: true, data: updated })
}

