import clsx from 'clsx'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { PriceList } from '@/features/menu-page/PriceList'
import type { MenuPanel, MenuPanelTheme } from '@/types/content'

const themes: Record<MenuPanelTheme, { panel: string; tagline: string; leader: string; note: string }> = {
  latte: { panel: 'bg-latte text-espresso', tagline: 'text-caramel', leader: 'border-espresso/35', note: 'text-cocoa-soft' },
  cream: {
    panel: 'border-2 border-latte-deep bg-cream-soft text-espresso',
    tagline: 'text-caramel',
    leader: 'border-espresso/35',
    note: 'text-cocoa-soft',
  },
  espresso: { panel: 'bg-espresso text-cream', tagline: 'text-orange', leader: 'border-latte/45', note: 'text-latte' },
  orange: { panel: 'bg-orange text-espresso', tagline: 'text-espresso', leader: 'border-espresso/40', note: 'text-espresso/80' },
  sky: {
    panel: 'border-2 border-sky-mist bg-sky-pale text-espresso',
    tagline: 'text-sky-ink',
    leader: 'border-sky-ink/45',
    note: 'text-sky-ink',
  },
}

type Props = {
  panel: MenuPanel
  /** "wide" = photo beside a two-column list; "stacked" = photo on top (half-width pairs) */
  layout: 'wide' | 'stacked'
  photoSide?: 'left' | 'right'
}

export function MenuPanelCard({ panel, layout, photoSide = 'left' }: Props) {
  const theme = themes[panel.theme]
  const wide = layout === 'wide'
  const titleId = `${panel.id}-title`

  const photo = (
    <PhotoFrame
      image={panel.image}
      placeholder={panel.photoLabel}
      placeholderStyle="tag"
      className={clsx(
        'rounded-well',
        wide ? 'min-h-[260px] flex-[1_1_320px] sm:min-h-[360px]' : 'min-h-[230px]',
        // On narrow screens a right-hand photo would land below the list; keep it on top instead.
        wide && photoSide === 'right' && 'max-lg:order-first',
        panel.wellClassName,
      )}
    />
  )

  return (
    <section
      id={panel.id}
      aria-labelledby={titleId}
      className={clsx(
        'rounded-section p-[clamp(18px,3vw,28px)]',
        wide ? 'flex flex-wrap items-stretch gap-9' : 'flex min-w-0 flex-[1_1_440px] flex-col gap-[22px]',
        theme.panel,
      )}
    >
      {photoSide === 'left' || !wide ? photo : null}

      <div className={clsx('flex min-w-0 flex-col', wide ? 'flex-[2_1_520px] gap-[22px]' : 'gap-3.5 px-1.5 pb-1.5')}>
        <div className="flex flex-col gap-3">
          <span className="text-label font-bold uppercase tracking-label-wide opacity-85">{panel.kicker}</span>
          <DisplayHeading id={titleId} size="category">
            {panel.title}
          </DisplayHeading>
          <p className={clsx('m-0 font-script text-tagline-xs', theme.tagline)}>{panel.tagline}</p>
        </div>

        {panel.groups.map((group, i) => (
          <div key={group.heading ?? i} className="flex flex-col gap-3.5">
            {group.heading && <h3 className="m-0 mt-1.5 text-lg font-bold">{group.heading}</h3>}
            <PriceList items={group.items} columns={wide} leaderClassName={theme.leader} noteClassName={theme.note} />
          </div>
        ))}

        {panel.footnote && (
          <p className="m-0 mt-1 self-start rounded-pill bg-orange px-3.5 py-1.5 text-[13px] font-bold text-espresso">
            {panel.footnote}
          </p>
        )}
      </div>

      {wide && photoSide === 'right' ? photo : null}
    </section>
  )
}
