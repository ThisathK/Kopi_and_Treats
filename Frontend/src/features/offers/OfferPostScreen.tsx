import { CommentIcon, HeartIcon, SendIcon } from '@/components/icons'
import { MiniCup } from '@/components/illustrations/MiniCup'
import { offerPost } from '@/data/offers'

/** Instagram-style feed post: weekend deal on an orange square. */
export function OfferPostScreen() {
  return (
    <>
      <div className="flex h-[22px] items-center justify-center">
        <span className="h-1.5 w-[70px] rounded-pill bg-espresso-deep" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5">
        <span className="size-[26px] rounded-pill border-2 border-orange bg-espresso" />
        <span className="text-label font-bold">{offerPost.handle}</span>
      </div>
      <div className="flex aspect-square flex-col justify-between bg-orange p-4">
        <span className="text-[9px] font-extrabold uppercase tracking-label">{offerPost.kicker}</span>
        <span className="font-display text-[34px] leading-[0.9] uppercase">
          {offerPost.title[0]}
          <br />
          {offerPost.title[1]}
        </span>
        <span className="flex items-end justify-between">
          <span className="font-script text-[13px] leading-[1.2]">{offerPost.details}</span>
          <MiniCup />
        </span>
      </div>
      <div className="flex gap-3 px-3 pt-2.5 pb-1">
        <HeartIcon size={16} />
        <CommentIcon size={16} />
        <SendIcon size={16} />
      </div>
      <div className="flex flex-col gap-[5px] px-3">
        <span className="h-1.5 w-4/5 rounded bg-latte-deep" />
        <span className="h-1.5 w-[55%] rounded bg-latte-deep" />
      </div>
    </>
  )
}
