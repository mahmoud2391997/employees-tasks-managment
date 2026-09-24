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
    'inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 disabled:opacity-60 disabled:cursor-not-allowed'
  const sizes = size === 'sm' ? 'h-9 px-3 text-sm' : 'h-10 px-4 text-sm'
  const variants =
    variant === 'primary'
      ? 'border border-slate-900 bg-slate-900 text-white hover:bg-slate-800'
      : variant === 'danger'
        ? 'border border-red-200 bg-red-50 text-red-700 hover:bg-red-100'
        : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
  return <button className={clsx(base, sizes, variants, className)} {...props} />
}

