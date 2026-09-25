'use client'

import type { HTMLAttributes } from 'react'
import clsx from 'clsx'

export function Badge({
  variant = 'neutral',
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: 'neutral' | 'info' | 'success' | 'warning' | 'danger' }) {
  const styles =
    variant === 'success'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
      : variant === 'warning'
        ? 'border-amber-200 bg-amber-50 text-amber-700'
        : variant === 'danger'
          ? 'border-rose-200 bg-rose-50 text-rose-700'
          : variant === 'info'
            ? 'border-blue-200 bg-blue-50 text-blue-700'
            : 'border-slate-200 bg-slate-50 text-slate-700'
  return <span className={clsx('inline-flex items-center rounded-lg border px-2 py-1 text-xs font-semibold', styles, className)} {...props} />
}

