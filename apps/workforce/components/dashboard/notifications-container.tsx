'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

type Notification = {
  id: string
  type: string
  title: string
  message: string
  read: boolean
  createdAt: string
  data: any
}

export function NotificationsContainer({ initial }: { initial: Notification[] }) {
  const [rows, setRows] = useState<Notification[]>(initial)

  async function markRead(id: string) {
    setRows((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
    await fetch('/api/notifications', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id }) })
    const res = await fetch('/api/notifications', { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as { success?: boolean; data?: Notification[] } | null
    if (res.ok && json?.success) setRows(json.data ?? [])
  }

  const unread = rows.filter((r) => !r.read).length

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm font-semibold text-slate-900">الإشعارات</div>
          <Badge variant={unread ? 'info' : 'neutral'}>غير مقروء: {unread}</Badge>
        </div>
      </Card>

      <div className="space-y-2">
        {rows.map((n) => (
          <Card key={n.id} className={`p-4 ${n.read ? 'opacity-75' : ''}`}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="font-semibold">{n.title}</div>
                <div className="mt-1 text-sm text-slate-500">{n.message}</div>
                <div className="mt-2 text-xs text-slate-500">
                  <span className="ltr font-mono">{n.type}</span> · <span className="ltr">{n.createdAt.slice(0, 19).replace('T', ' ')}</span>
                </div>
              </div>
              {!n.read ? (
                <Button size="sm" variant="secondary" type="button" onClick={() => markRead(n.id)}>
                  تحديد كمقروء
                </Button>
              ) : (
                <Badge variant="neutral">مقروء</Badge>
              )}
            </div>
          </Card>
        ))}
        {rows.length === 0 ? <Card className="p-6 text-sm text-slate-500">لا توجد إشعارات</Card> : null}
      </div>
    </div>
  )
}

