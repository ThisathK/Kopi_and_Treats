import { Container } from '@/components/layout/Container'
import { Header } from '@/components/layout/Header'
import { BeanScatter } from '@/components/illustrations/BeanScatter'
import { OrderAheadBadge } from '@/components/illustrations/OrderAheadBadge'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { images } from '@/data/images'

export function HeroSection() {
  const cup = images.icedCoffee
  return (
    <div className="relative overflow-hidden bg-espresso text-cream">
      <Header />
      <BeanScatter />

      <section id="top" aria-labelledby="hero-title" tabIndex={-1} className="relative z-[1] outline-none">
        <Container size="wide" className="flex flex-col items-center pt-8 text-center md:pt-12">
          <DisplayHeading as="h1" id="hero-title" size="hero" className="mt-6 text-cream">
            Brewed
            <br />
            like home
          </DisplayHeading>
          <p className="m-0 mt-6 max-w-[520px] text-lead text-latte">
            Rich, slow kopi and treats made with love. The kind of place you came for one cup and stayed for three.
          </p>

          {/*
            The cup is cropped to its top ~75% (down to the sleeve logo) so the next section looks like it covers the bottom.
            --cup-h is the full (uncropped) image height; the wrapper shows only part of it.
          */}
          <div className="relative mt-8 [--cup-h:clamp(420px,46vw,660px)]">
            <div className="h-[calc(var(--cup-h)*0.75)] overflow-hidden">
              <img
                src={cup.src}
                alt={cup.alt}
                width={cup.width}
                height={cup.height}
                fetchPriority="high"
                className="block h-(--cup-h) w-auto drop-shadow-[0_24px_32px_rgb(0_0_0/0.35)]"
              />
            </div>
            <OrderAheadBadge className="absolute top-[14%] left-[calc(100%-20px)] w-24 sm:w-[120px] md:left-[calc(100%+12px)] md:w-[150px]" />
          </div>
        </Container>
      </section>
    </div>
  )
}
