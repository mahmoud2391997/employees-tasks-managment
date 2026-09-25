'use client'

import type { SelectHTMLAttributes } from 'react'
import clsx from 'clsx'

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={clsx(
        'h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30',
        className,
      )}
      {...props}
    />
  )
}

