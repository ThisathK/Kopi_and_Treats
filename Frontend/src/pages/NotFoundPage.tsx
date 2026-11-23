import { Container } from '@/components/layout/Container'
import { Header } from '@/components/layout/Header'
import { BeanScatter } from '@/components/illustrations/BeanScatter'
import { Button } from '@/components/ui/Button'
import { DisplayHeading } from '@/components/ui/DisplayHeading'

export function NotFoundPage() {
  return (
    <div className="relative overflow-hidden bg-espresso text-cream">
      <Header />
      <BeanScatter />
      <main id="main">
        <Container size="wide" className="relative z-[1] flex flex-col items-center gap-6 py-24 text-center">
          <DisplayHeading as="h1" size="section">
            Spilt the kopi
          </DisplayHeading>
          <p className="m-0 max-w-[440px] text-lead text-latte">
            We couldn&apos;t find that page. Head back home — there&apos;s a warm cup waiting.
          </p>
          <Button href="/" variant="primary">
            Back to home →
          </Button>
        </Container>
      </main>
    </div>
  )
}
