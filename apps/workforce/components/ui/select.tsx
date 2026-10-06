'use client'

import type { SelectHTMLAttributes } from 'react'
import clsx from 'clsx'

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={clsx(
        'h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900',
        'focus-visible:outline-none focus-visible:border-brand-400 focus-visible:ring-4 focus-visible:ring-brand-500/10',
        className,
      )}
      {...props}
    />
  )
}

