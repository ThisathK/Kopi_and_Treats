import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { BeanScatter } from '@/components/illustrations/BeanScatter'
import type { NavLink } from '@/types/content'

type Props = { links?: NavLink[]; children: ReactNode }

/** Dark espresso band at the top of every page: header + floating beans behind the page's hero content. */
export function HeroBand({ links, children }: Props) {
  return (
    <div className="relative overflow-hidden bg-espresso text-cream">
      <Header links={links} />
      <BeanScatter />
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
