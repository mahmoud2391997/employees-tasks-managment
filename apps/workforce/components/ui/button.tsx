'use client'

import { type ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md'
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 disabled:opacity-60 disabled:cursor-not-allowed'
  const sizes = size === 'sm' ? 'h-9 px-3 text-sm' : 'h-10 px-4 text-sm'
  const variants =
    variant === 'primary'
      ? 'border border-slate-900 bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-900'
      : variant === 'danger'
        ? 'border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 active:bg-rose-50'
        : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 active:bg-slate-50'
  return <button className={clsx(base, sizes, variants, className)} {...props} />
}

