import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Tagline } from '@/components/ui/Tagline'

type Props = { id: string; eyebrow: string; title: string; tagline: string }

/** Centred eyebrow + display H2 + script tagline used by Menu and Branches. */
export function SectionHeading({ id, eyebrow, title, tagline }: Props) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <DisplayHeading id={id} size="section">
        {title}
      </DisplayHeading>
      <Tagline>{tagline}</Tagline>
    </div>
  )
}
