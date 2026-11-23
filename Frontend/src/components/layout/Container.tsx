import type { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  /** "wide" = header/hero (1320px content + 32px gutters); "main" = content (1240px content + 24px gutters) */
  size?: 'wide' | 'main'
  className?: string
  children: ReactNode
}

export function Container({ size = 'main', className, children }: Props) {
  return (
    <div
      className={clsx(
        'mx-auto w-full',
        size === 'wide' ? 'max-w-wide px-4 sm:px-6 md:px-8' : 'max-w-main px-4 sm:px-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
