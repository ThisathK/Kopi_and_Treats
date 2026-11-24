import { Container } from '@/components/layout/Container'
import { HeroBand } from '@/components/layout/HeroBand'
import { Button } from '@/components/ui/Button'
import { DisplayHeading } from '@/components/ui/DisplayHeading'

export function NotFoundPage() {
  return (
    <HeroBand>
      <title>Page not found — Kopi &amp; Treats</title>
      <main id="main">
        <Container size="wide" className="flex flex-col items-center gap-6 py-24 text-center">
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
    </HeroBand>
  )
}
