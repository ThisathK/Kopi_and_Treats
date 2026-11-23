import { SectionHeading } from '@/components/ui/SectionHeading'
import { branches } from '@/data/branches'
import { BranchCard } from '@/features/branches/BranchCard'

export function BranchesSection() {
  return (
    <section id="branches" aria-labelledby="branches-title" className="mt-6 flex flex-col gap-6">
      <SectionHeading
        id="branches-title"
        eyebrow="Come visit"
        title="Our branches"
        tagline="two cozy corners, one warm welcome"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
        {branches.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </section>
  )
}
