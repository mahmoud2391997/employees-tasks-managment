'use client'

import type { HTMLAttributes, TableHTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from 'react'
import clsx from 'clsx'

export function TableWrapper({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_-4px_rgba(15,23,42,0.08)]', className)} {...props} />
}

export function Table({ className, ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return <table className={clsx('w-full text-start text-sm', className)} {...props} />
}

export function THead({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={clsx('bg-slate-50/80 text-slate-400', className)} {...props} />
}

export function TH({ className, ...props }: ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className={clsx('px-5 py-4 text-start text-[11px] font-semibold uppercase tracking-wider rtl:tracking-normal', className)} {...props} />
}

export function TD({ className, ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={clsx('px-5 py-4 text-start align-middle text-slate-600', className)} {...props} />
}

