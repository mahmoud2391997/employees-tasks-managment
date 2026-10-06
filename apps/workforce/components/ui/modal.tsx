'use client'

import { useTranslations } from '@/lib/i18n/provider'
import { type ReactNode, useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'

export function Modal({ open, title, description, children, onClose }: {
  open: boolean; title: string; description?: string; children: ReactNode; onClose: () => void
}) {
  const tr = useTranslations()
  const dialog = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const descriptionId = useId()
  useEffect(() => {
    const element = dialog.current
    if (!element) return
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    if (open && !element.open) element.showModal()
    if (!open && element.open) element.close()
    return () => { if (element.open) element.close(); if (open && previous?.isConnected) previous.focus() }
  }, [open])
  return <dialog ref={dialog} aria-labelledby={titleId} aria-describedby={description ? descriptionId : undefined}
    onCancel={event => { event.preventDefault(); onClose() }}
    onClick={event => { if (event.target === event.currentTarget) onClose() }}
    className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%_-_2rem)] max-w-xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/40">
    <div className="sticky top-0 flex items-start justify-between gap-3 border-b border-slate-100 bg-white p-5 sm:p-6">
      <div><h2 id={titleId} className="text-lg font-bold tracking-tight">{title}</h2>{description ? <p id={descriptionId} className="mt-1.5 text-sm text-slate-500">{description}</p> : null}</div>
      <button type="button" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-700" onClick={onClose} aria-label={tr('إغلاق')}><X size={18} /></button>
    </div>
    <div className="p-5 sm:p-6">{children}</div>
  </dialog>
}
