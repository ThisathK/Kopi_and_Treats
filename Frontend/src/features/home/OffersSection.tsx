import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/icons'
import { Button } from '@/components/ui/Button'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { DottedRule } from '@/components/ui/DottedRule'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { IconButton } from '@/components/ui/IconButton'
import { Tagline } from '@/components/ui/Tagline'
import { site } from '@/data/site'
import { SocialPhones } from '@/features/offers/SocialPhones'

export function OffersSection() {
  const { instagram, facebook, tiktok } = site.socials
  return (
    <section
      id="offers"
      aria-labelledby="offers-title"
      className="mt-6 flex flex-wrap items-center gap-10 overflow-hidden rounded-section border-2 border-latte-deep bg-cream-soft p-[clamp(28px,4vw,48px)]"
    >
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-3.5">
        <Eyebrow className="self-start">Offers &amp; news</Eyebrow>
        <DisplayHeading id="offers-title" size="offers" className="text-brick">
          Never miss
          <br />a sweet deal
        </DisplayHeading>
        <Tagline tone="bean" size="sm">
          keep track of our offers on socials
        </Tagline>
        <DottedRule />
        <p className="m-0 max-w-[420px] text-body">
          Weekend treats, new drinks and little surprises — we post them all first on our socials. Follow along so you
          are always the first to know.
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-3">
          <Button href={instagram.href} variant="brick" className="w-full sm:w-auto">
            <InstagramIcon /> Follow @{instagram.handle}
          </Button>
          <IconButton href={facebook.href} label="Kopi & Treats on Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton href={tiktok.href} label="Kopi & Treats on TikTok">
            <TikTokIcon />
          </IconButton>
        </div>
      </div>

      <SocialPhones />
    </section>
  )
}
