import clsx from 'clsx'

/** Outlined uppercase pill label above section headings ("On the menu"). */
export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={clsx(
        'rounded-pill border-[1.5px] border-espresso px-3.5 py-[5px] text-label font-bold uppercase tracking-label',
        className,
      )}
    >
      {children}
    </span>
  )
}
