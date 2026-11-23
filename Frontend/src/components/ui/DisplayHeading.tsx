import type { ReactNode } from 'react'
import clsx from 'clsx'

type Size = 'hero' | 'section' | 'banner' | 'offers' | 'branch' | 'card'

const sizes: Record<Size, string> = {
  hero: 'text-hero',
  section: 'text-section',
  banner: 'text-banner',
  offers: 'text-offers',
  branch: 'text-branch',
  card: 'text-card',
}

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'span'
  size: Size
  id?: string
  className?: string
  children: ReactNode
}

/** Brother display type — always uppercase. */
export function DisplayHeading({ as: Tag = 'h2', size, id, className, children }: Props) {
  return (
    <Tag id={id} className={clsx('m-0 font-display font-bold uppercase', sizes[size], className)}>
      {children}
    </Tag>
  )
}
