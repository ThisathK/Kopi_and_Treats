import { Button } from '@/components/ui/Button'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { site } from '@/data/site'

/** "Hungry yet?" closing banner. */
export function MenuCta() {
  return (
    <section
      aria-labelledby="menu-cta-title"
      className="mt-6 flex flex-wrap items-center justify-between gap-6 rounded-section bg-latte p-[clamp(28px,4vw,48px)] shadow-banner"
    >
      <div className="flex flex-col gap-1.5">
        <DisplayHeading id="menu-cta-title" size="category">
          Hungry yet?
        </DisplayHeading>
        <p className="m-0 font-script text-tagline-xs text-bean-600">come say hi at either of our branches</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button href={site.orderHref} variant="primary" size="xl" offsetShadow>
          Order ahead →
        </Button>
        <Button href="/#branches" variant="outline-dark" size="xl">
          Find a branch
        </Button>
      </div>
    </section>
  )
}
