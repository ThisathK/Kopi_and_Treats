import { Button } from '@/components/ui/Button'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { Tagline } from '@/components/ui/Tagline'
import { images } from '@/data/images'
import { site } from '@/data/site'

export function GatheringsBanner() {
  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="mt-6 flex flex-wrap overflow-hidden rounded-section bg-latte shadow-banner"
    >
      <div className="flex flex-[1_1_380px] flex-col justify-center gap-4 p-[clamp(28px,4.5vw,56px)]">
        <DisplayHeading id="events-title" size="banner">
          Bring the
          <br />
          whole crew
        </DisplayHeading>
        <Tagline tone="bean" size="sm">
          kopi by the jug, treats by the platter
        </Tagline>
        <p className="m-0 max-w-[380px] text-body">
          Birthdays, office mornings, study sessions — tell us how many and we will box it all up, ready to share.
        </p>
        <div className="mt-1.5 flex flex-wrap items-center gap-3.5">
          <Button href={site.gatheringsHref} variant="primary" offsetShadow>
            Plan a gathering →
          </Button>
          <span className="font-display text-price">from {site.gatheringsPrice}</span>
        </div>
      </div>

      <PhotoFrame
        image={images.treatsBox}
        className="min-h-[280px] flex-[1.3_1_440px] bg-latte-deep md:min-h-[380px]"
      />
    </section>
  )
}
