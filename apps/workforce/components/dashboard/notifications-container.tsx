'use client'

import { apiFetch } from '@/lib/api-fetch'

import { useTranslations } from '@/lib/i18n/provider'

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

export function NotificationsContainer({
  initial,
  initialTotal,
  initialHasMore,
  readOnly = false,
}: {
  initial: Notification[]
  initialTotal: number
  initialHasMore: boolean
  readOnly?: boolean
}) {
  const tr = useTranslations()

  const [rows, setRows] = useState<Notification[]>(initial)
  const [total, setTotal] = useState<number>(initialTotal)
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore)
  const [loadingMore, setLoadingMore] = useState(false)

  const apiTake = 50

  async function refresh() {
    const res = await apiFetch(`/api/notifications?take=${apiTake}&skip=0`, { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as
      | { success?: boolean; data?: Notification[]; total?: number; hasMore?: boolean }
      | null
    if (res.ok && json?.success) {
      const next = json.data ?? []
      setRows(next)
      setTotal(Number(json.total ?? next.length))
      setHasMore(Boolean(json.hasMore))
    }
  }

  async function loadMore() {
    if (!hasMore || loadingMore) return
    setLoadingMore(true)
    const res = await apiFetch(`/api/notifications?take=${apiTake}&skip=${rows.length}`, { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as
      | { success?: boolean; data?: Notification[]; total?: number; hasMore?: boolean }
      | null
    setLoadingMore(false)
    if (res.ok && json?.success) {
      const next = json.data ?? []
      setRows((prev) => [...prev, ...next])
      setTotal(Number(json.total ?? total))
      setHasMore(Boolean(json.hasMore))
    }
  }

  async function markRead(id: string) {
    const res = await apiFetch('/api/notifications', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id }) })
    if (!res.ok) {
      const json = await res.json().catch(() => null)
      window.alert(tr(json?.message || 'تعذر الحفظ'))
      return
    }
    setRows((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const unread = rows.filter((r) => !r.read).length

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm font-semibold text-slate-900">{tr("الإشعارات")}</div>
          <Badge variant={unread ? 'info' : 'neutral'}>{tr("غير مقروء:")}{unread}</Badge>
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
                  <span className="ltr font-mono">{n.type}</span> · <span className="ltr">{new Date(n.createdAt).toISOString().slice(0, 19).replace('T', ' ')}</span>
                </div>
              </div>
              {!n.read ? (
                <Button disabled={readOnly} size="sm" variant="secondary" type="button" onClick={() => markRead(n.id)}>
                  {tr("تحديد كمقروء")}</Button>
              ) : (
                <Badge variant="neutral">{tr("مقروء")}</Badge>
              )}
            </div>
          </Card>
        ))}
        {rows.length === 0 ? <Card className="p-6 text-sm text-slate-500">{tr("لا توجد إشعارات")}</Card> : null}
      </div>

      {rows.length > 0 ? (
        <Card className="p-3">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
            <div>
              {tr("تم تحميل")}{' '}{rows.length} {tr("من")}{' '}{total}
            </div>
            {hasMore ? (
              <Button variant="secondary" size="sm" type="button" disabled={loadingMore} onClick={loadMore}>
                {loadingMore ? '...' : tr("تحميل المزيد")}
              </Button>
            ) : (
              <Badge variant="neutral">{tr("آخر صفحة")}</Badge>
            )}
          </div>
        </Card>
      ) : null}
    </div>
  )
}

