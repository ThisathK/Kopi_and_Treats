import clsx from 'clsx'

type Props = {
  tone?: 'caramel' | 'bean'
  size?: 'md' | 'sm'
  className?: string
  children: string
}

/** Optima script line under headings ("then pick a treat to go with it"). */
export function Tagline({ tone = 'caramel', size = 'md', className, children }: Props) {
  return (
    <p
      className={clsx(
        'm-0 font-script',
        size === 'md' ? 'text-tagline' : 'text-tagline-sm',
        tone === 'caramel' ? 'text-caramel' : 'text-bean-600',
        className,
      )}
    >
      {children}
    </p>
  )
}
