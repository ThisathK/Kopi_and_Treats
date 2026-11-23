import type { ReactNode } from 'react'
import { SmartLink } from '@/components/ui/SmartLink'

type Props = { href: string; label: string; children: ReactNode }

/** 50px circular outline button for social links. */
export function IconButton({ href, label, children }: Props) {
  return (
    <SmartLink
      href={href}
      aria-label={label}
      className="inline-flex size-[50px] items-center justify-center rounded-pill border-2 border-espresso text-espresso transition-colors duration-200 hover:bg-espresso hover:text-cream"
    >
      {children}
    </SmartLink>
  )
}
