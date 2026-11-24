import type { ReactNode } from 'react'
import clsx from 'clsx'
import { SmartLink } from '@/components/ui/SmartLink'

type Variant = 'primary' | 'brick' | 'outline-dark' | 'outline-light'
type Size = 'header' | 'md' | 'lg' | 'xl'

type Props = {
  href: string
  variant?: Variant
  size?: Size
  /** Solid espresso drop shadow ("pressed" look) used on the gatherings CTA */
  offsetShadow?: boolean
  className?: string
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary: 'bg-orange text-espresso hover:bg-orange-soft',
  brick: 'bg-brick text-cream hover:bg-caramel',
  'outline-dark': 'border-2 border-espresso text-espresso hover:bg-espresso hover:text-cream',
  'outline-light': 'border-2 border-cream text-cream hover:bg-cream hover:text-espresso',
}

const sizes: Record<Size, string> = {
  header: 'min-h-[46px] px-[22px] text-sm font-bold tracking-header-cta',
  md: 'min-h-12 px-[22px] text-button font-extrabold tracking-button',
  lg: 'min-h-[50px] px-6 text-button font-extrabold tracking-button',
  xl: 'min-h-[52px] px-[26px] text-button font-extrabold tracking-button',
}

export function Button({ href, variant = 'primary', size = 'lg', offsetShadow, className, children }: Props) {
  return (
    <SmartLink
      href={href}
      className={clsx(
        'inline-flex items-center justify-center gap-2.5 rounded-pill uppercase no-underline',
        'transition-[background-color,color,transform,box-shadow] duration-200',
        variants[variant],
        sizes[size],
        offsetShadow &&
          'shadow-offset hover:-translate-y-px hover:shadow-[0_5px_0_var(--color-espresso)] active:translate-y-1 active:shadow-none',
        className,
      )}
    >
      {children}
    </SmartLink>
  )
}
