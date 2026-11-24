import clsx from 'clsx'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Tagline } from '@/components/ui/Tagline'

type Props = {
  id: string
  eyebrow: string
  title: string
  tagline?: string
  /** "tight" = 8px gaps (home page); "loose" = 16px gaps + 1.05 leading (menu page) */
  spacing?: 'tight' | 'loose'
  className?: string
}

/** Centred eyebrow + display H2 (+ optional script tagline). */
export function SectionHeading({ id, eyebrow, title, tagline, spacing = 'tight', className }: Props) {
  return (
    <div className={clsx('flex flex-col items-center text-center', spacing === 'tight' ? 'gap-2' : 'gap-4', className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <DisplayHeading id={id} size="section" className={spacing === 'loose' ? 'leading-[1.05]' : undefined}>
        {title}
      </DisplayHeading>
      {tagline && <Tagline>{tagline}</Tagline>}
    </div>
  )
}
