import { Container } from '@/components/layout/Container'
import { BranchesSection } from '@/features/branches/BranchesSection'
import { FeatureChips } from '@/features/home/FeatureChips'
import { GatheringsBanner } from '@/features/home/GatheringsBanner'
import { HeroSection } from '@/features/home/HeroSection'
import { MenuPreview } from '@/features/home/MenuPreview'
import { OffersSection } from '@/features/home/OffersSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <main id="main">
        <Container className="flex flex-col gap-7 pt-14">
          <FeatureChips />
          <MenuPreview />
          <GatheringsBanner />
          <OffersSection />
          <BranchesSection />
        </Container>
      </main>
    </>
  )
}
