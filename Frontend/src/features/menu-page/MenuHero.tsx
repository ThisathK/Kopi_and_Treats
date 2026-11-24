import { Container } from '@/components/layout/Container'
import { HeroBand } from '@/components/layout/HeroBand'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { menuPageNav } from '@/data/navigation'

export function MenuHero() {
  return (
    <HeroBand links={menuPageNav}>
      <section id="top" aria-labelledby="menu-hero-title">
        <Container size="wide" className="flex flex-col items-center pt-6 pb-24 text-center lg:pt-10">
          <p className="m-0 font-script text-tagline-lg text-orange">brewed, shaken and baked with love</p>
          <DisplayHeading as="h1" id="menu-hero-title" size="menuHero" className="mt-9 text-cream">
            Our menu
          </DisplayHeading>
          <p className="m-0 mt-8 max-w-[520px] text-lead text-latte">
            From your first espresso of the day to a slice of something sweet — here is everything we pour and bake.
          </p>
        </Container>
      </section>
    </HeroBand>
  )
}
