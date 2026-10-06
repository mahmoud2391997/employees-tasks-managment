'use client'

import type { TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={clsx(
        'min-h-24 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 transition-shadow placeholder:text-slate-400',
        'focus-visible:outline-none focus-visible:border-blue-400 focus-visible:ring-4 focus-visible:ring-blue-500/10',
        className,
      )}
      {...props}
    />
  )
}

