'use client'

import type { ReactNode } from 'react'
import clsx from 'clsx'

import { Card, CardBody } from '@/components/ui/card'

export function PageHeader({
  title,
  description,
  right,
  className,
}: {
  title: string
  description?: string
  right?: ReactNode
  className?: string
}) {
  return (
    <Card className={clsx(className)}>
      <CardBody className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h1>
          {description ? <p className="mt-2 text-sm text-slate-500">{description}</p> : null}
        </div>
        {right ? <div className="flex shrink-0 items-center gap-2">{right}</div> : null}
      </CardBody>
    </Card>
  )
}

