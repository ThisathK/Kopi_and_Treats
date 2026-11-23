import { Chip } from '@/components/ui/Chip'
import { features } from '@/data/features'

export function FeatureChips() {
  return (
    <ul aria-label="What we are about" className="m-0 flex list-none flex-wrap justify-center gap-2.5 p-0">
      {features.map((feature) => (
        <li key={feature.label} className="flex">
          <Chip tone={feature.tone}>{feature.label}</Chip>
        </li>
      ))}
    </ul>
  )
}
