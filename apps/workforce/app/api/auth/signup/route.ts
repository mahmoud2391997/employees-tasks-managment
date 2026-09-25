import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST() {
  return NextResponse.json(
    { success: false, message: 'الحسابات يضيفها مسؤول الشركة عبر الدعوة.' },
    { status: 403 },
  )
}
