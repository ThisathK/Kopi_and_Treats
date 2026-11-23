import { useId } from 'react'
import clsx from 'clsx'

/** Orange "ORDER AHEAD •" ring badge. The ring text rotates slowly unless reduced motion is requested. */
export function OrderAheadBadge({ className }: { className?: string }) {
  const ringId = useId()
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Order ahead" className={clsx('block', className)}>
      <defs>
        <path id={ringId} d="M100 100m-72 0a72 72 0 1 1 144 0a72 72 0 1 1 -144 0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="var(--color-orange)" />
      <g className="origin-center motion-safe:animate-spin-slow">
        <text fontFamily="Inter, sans-serif" fontWeight="800" fontSize="19" letterSpacing="4" fill="var(--color-espresso)">
          <textPath href={`#${ringId}`}>ORDER AHEAD • ORDER AHEAD • </textPath>
        </text>
      </g>
      <path
        d="M80 100h40M106 86l14 14-14 14"
        fill="none"
        stroke="var(--color-espresso)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
