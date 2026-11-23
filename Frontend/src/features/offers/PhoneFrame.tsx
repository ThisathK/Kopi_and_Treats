import type { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  label: string
  /** Rotation / offset / z-index for the frame */
  className?: string
  /** Background and padding for the screen */
  screenClassName?: string
  children: ReactNode
}

/** 236×470 phone bezel. Announced as a single image; contents are decorative. */
export function PhoneFrame({ label, className, screenClassName, children }: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={clsx(
        'relative h-[470px] w-[236px] shrink-0 rounded-phone bg-espresso-deep p-2.5 shadow-phone',
        className,
      )}
    >
      <div className={clsx('flex h-full flex-col overflow-hidden rounded-phone-screen', screenClassName)}>
        {children}
      </div>
    </div>
  )
}
