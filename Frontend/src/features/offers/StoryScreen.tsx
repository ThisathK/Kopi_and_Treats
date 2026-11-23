import { Logo } from '@/components/ui/Logo'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { storyPost } from '@/data/offers'

/** Instagram-style story announcing a new menu item. */
export function StoryScreen() {
  return (
    <>
      <div className="flex gap-1">
        <span className="h-[3px] flex-1 rounded-sm bg-cream" />
        <span className="h-[3px] flex-1 rounded-sm bg-cream/35" />
        <span className="h-[3px] flex-1 rounded-sm bg-cream/35" />
      </div>
      <Logo alt="" className="mt-1.5 w-[110px] self-center" />
      <span className="text-center font-display text-[38px] leading-[0.9] uppercase">
        {storyPost.title[0]}
        <br />
        {storyPost.title[1]}
      </span>
      <PhotoFrame
        image={storyPost.image}
        className="size-[150px] shrink-0 self-center rounded-pill border-[5px] border-cream bg-orange text-[10px] text-espresso"
      />
      <span className="text-center font-script text-lg text-latte">{storyPost.itemName}</span>
      <span className="mt-auto self-center rounded-pill bg-sky px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-button text-espresso">
        {storyPost.badge}
      </span>
    </>
  )
}
