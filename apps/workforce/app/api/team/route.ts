import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST() {
  return NextResponse.json(
    { success: false, message: 'هذا النظام لشركة واحدة. إضافة الأعضاء تتم عبر الدعوة.' },
    { status: 403 },
  )
}
