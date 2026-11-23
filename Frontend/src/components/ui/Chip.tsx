import clsx from 'clsx'
import type { ChipTone } from '@/types/content'

const tones: Record<ChipTone, string> = {
  brick: 'bg-brick text-cream',
  espresso: 'bg-espresso text-cream',
  latte: 'bg-latte text-espresso',
  orange: 'bg-orange text-espresso',
  white: 'bg-white text-espresso',
  sky: 'bg-sky text-espresso',
}

export function Chip({ tone, children }: { tone: ChipTone; children: string }) {
  return (
    <span className={clsx('rounded-pill px-[18px] py-2 text-sm font-bold', tones[tone])}>{children}</span>
  )
}
