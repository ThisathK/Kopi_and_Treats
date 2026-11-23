import clsx from 'clsx'
import { Button } from '@/components/ui/Button'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import type { Branch } from '@/types/content'

const themes = {
  latte: { card: 'bg-latte text-espresso', well: 'bg-latte-deep', body: 'text-cocoa', outline: 'outline-dark' },
  espresso: { card: 'bg-espresso text-cream', well: 'bg-roast', body: 'text-latte', outline: 'outline-light' },
} as const

export function BranchCard({ branch }: { branch: Branch }) {
  const theme = themes[branch.theme]
  return (
    <article className={clsx('flex flex-col gap-[18px] rounded-section p-4', theme.card)}>
      <PhotoFrame
        image={branch.image}
        placeholder={branch.photoLabel}
        placeholderStyle="tag"
        className={clsx('h-[220px] rounded-photo-lg sm:h-[260px]', theme.well)}
      />
      <div className="flex flex-col gap-3 px-3 pb-3">
        <DisplayHeading as="h3" size="branch">
          {branch.name}
        </DisplayHeading>
        <p className={clsx('m-0 text-body', theme.body)}>
          {branch.address}, {branch.city}
          <br />
          {branch.hours}
          <br />
          {branch.phone}
        </p>
        <div className="mt-1 flex flex-wrap gap-3">
          <Button href={branch.directionsHref} variant="primary" size="md">
            Get directions
          </Button>
          <Button href={branch.phoneHref} variant={theme.outline} size="md">
            Call us
          </Button>
        </div>
      </div>
    </article>
  )
}
