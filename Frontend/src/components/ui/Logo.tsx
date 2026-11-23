import clsx from 'clsx'
import logoLight from '@/assets/logos/logo-long-light.png'

type Props = { className?: string; alt?: string }

/** Cream long-form logo for dark backgrounds (header, footer, story mockup). Size via className height. */
export function Logo({ className, alt = 'Kopi & Treats — Sip. Savour. Smile' }: Props) {
  return (
    <img src={logoLight} alt={alt} width={1200} height={416} className={clsx('block w-auto', className)} />
  )
}
