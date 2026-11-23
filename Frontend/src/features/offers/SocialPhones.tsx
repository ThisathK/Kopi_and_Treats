import { OfferPostScreen } from '@/features/offers/OfferPostScreen'
import { PhoneFrame } from '@/features/offers/PhoneFrame'
import { StoryScreen } from '@/features/offers/StoryScreen'

/** Two overlapping, tilted phones on a latte circle. Scaled down on narrow screens. */
export function SocialPhones() {
  return (
    <div className="relative flex min-h-[340px] min-w-0 flex-[1_1_460px] items-center justify-center min-[420px]:min-h-[400px] sm:min-h-[470px]">
      <div aria-hidden="true" className="absolute size-[220px] rounded-pill bg-latte min-[420px]:size-[280px] sm:size-[340px]" />
      <div className="flex scale-[0.6] items-center justify-center min-[420px]:scale-75 sm:scale-100">
        <PhoneFrame
          label="Phone mockup showing a Kopi & Treats offer post"
          className="z-[1] translate-x-[18px] -rotate-6"
          screenClassName="bg-cream-soft"
        >
          <OfferPostScreen />
        </PhoneFrame>
        <PhoneFrame
          label="Phone mockup showing a Kopi & Treats story announcing something new on the menu"
          className="z-[2] translate-x-[-18px] translate-y-[26px] rotate-[7deg]"
          screenClassName="gap-3 bg-espresso px-4 pt-3.5 pb-[18px] text-cream"
        >
          <StoryScreen />
        </PhoneFrame>
      </div>
    </div>
  )
}
