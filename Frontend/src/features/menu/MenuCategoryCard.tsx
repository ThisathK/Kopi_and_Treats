import clsx from 'clsx'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { SmartLink } from '@/components/ui/SmartLink'
import type { CardTheme, MenuCategory } from '@/types/content'

const themes: Record<CardTheme, { card: string; subtitle: string; well: string }> = {
  espresso: { card: 'bg-espresso text-cream', subtitle: 'text-latte', well: 'bg-roast text-latte' },
  latte: { card: 'bg-latte text-espresso', subtitle: '', well: 'bg-latte-deep' },
  sky: { card: 'bg-sky text-espresso', subtitle: '', well: 'bg-sky-soft' },
  orange: { card: 'bg-orange text-espresso', subtitle: '', well: 'bg-orange-soft' },
}

export function MenuCategoryCard({ category }: { category: MenuCategory }) {
  const theme = themes[category.theme]
  return (
    <SmartLink
      href={category.href}
      className={clsx(
        'group row-span-3 grid grid-rows-subgrid rounded-card px-[18px] pt-[22px] pb-5 text-center no-underline',
        'transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift',
        theme.card,
      )}
    >
      <div className="flex flex-col items-center justify-center gap-1.5">
        <DisplayHeading as="h3" size="card">
          {category.title}
        </DisplayHeading>
        <span className={clsx('text-label font-bold uppercase tracking-label-wide', theme.subtitle)}>
          {category.subtitle}
        </span>
      </div>

      <PhotoFrame image={category.image} className={clsx('h-[230px] w-full rounded-photo', theme.well)} />

      <span className="inline-flex min-h-10 items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-nav">
        Order now
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </SmartLink>
  )
}
