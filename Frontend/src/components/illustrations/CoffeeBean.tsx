type Props = { fill: string; className?: string }

/** Coffee bean silhouette. Position, size and rotation come from className. */
export function CoffeeBean({ fill, className }: Props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 80" className={className}>
      <ellipse cx="60" cy="40" rx="56" ry="36" fill={fill} />
      <path d="M14 46c20-14 40 10 92-12" fill="none" stroke="var(--color-espresso)" strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}
