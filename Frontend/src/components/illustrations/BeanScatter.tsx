import { CoffeeBean } from '@/components/illustrations/CoffeeBean'

/** The five beans floating behind the hero. Positions are from the design; the two smallest hide on mobile. */
export function BeanScatter() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <CoffeeBean fill="var(--color-bean-500)" className="absolute top-[26%] left-[6%] w-[84px] -rotate-[24deg] md:w-[150px]" />
      <CoffeeBean fill="var(--color-bean-600)" className="absolute top-[64%] left-[14%] hidden w-[96px] rotate-30 md:block" />
      <CoffeeBean fill="var(--color-bean-600)" className="absolute top-[22%] right-[8%] w-[64px] rotate-[18deg] md:w-[110px]" />
      <CoffeeBean fill="var(--color-bean-500)" className="absolute top-[58%] right-[4%] w-[96px] -rotate-[14deg] md:w-[170px]" />
      <CoffeeBean fill="var(--color-bean-700)" className="absolute top-[82%] left-[30%] hidden w-[70px] rotate-60 md:block" />
    </div>
  )
}
