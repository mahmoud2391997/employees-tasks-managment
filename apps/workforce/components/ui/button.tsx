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
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 disabled:opacity-40 disabled:cursor-not-allowed'
  const sizes = size === 'sm' ? 'h-9 px-3 text-sm' : 'h-10 px-4 text-sm'
  const variants =
    variant === 'primary'
      ? 'border border-brand-600 bg-brand-600 text-white shadow-sm shadow-brand-600/20 hover:border-brand-700 hover:bg-brand-700 active:scale-[0.98]'
      : variant === 'danger'
        ? 'border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 active:bg-rose-50'
        : 'border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100'
  return <button className={clsx(base, sizes, variants, className)} {...props} />
}

