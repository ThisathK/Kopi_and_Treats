import { Container } from '@/components/layout/Container'
import { InstagramIcon } from '@/components/icons'
import { WaveDivider } from '@/components/illustrations/WaveDivider'
import { Logo } from '@/components/ui/Logo'
import { SmartLink } from '@/components/ui/SmartLink'
import { footerNav } from '@/data/navigation'
import { site } from '@/data/site'

export function Footer() {
  return (
    <footer className="mt-[72px]">
      <WaveDivider />
      <div className="bg-espresso text-cream">
        <Container className="flex flex-col items-center gap-8 pt-10 pb-7 sm:flex-row sm:flex-wrap sm:justify-between">
          <Logo alt="Kopi & Treats" className="h-[70px]" />
          <nav aria-label="Footer">
            <ul className="m-0 flex list-none flex-wrap justify-center gap-x-7 gap-y-2 p-0 text-sm font-semibold">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <SmartLink href={link.href} className="text-cream underline underline-offset-2 hover:text-orange">
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
        <div className="border-t border-latte/25">
          <Container className="flex flex-col items-center gap-x-8 gap-y-3 py-[18px] text-xs font-bold uppercase tracking-label text-latte sm:flex-row sm:flex-wrap sm:justify-between">
            <SmartLink
              href={site.socials.instagram.href}
              className="inline-flex items-center gap-2 text-latte no-underline hover:text-orange"
            >
              <InstagramIcon size={16} />@{site.socials.instagram.handle}
            </SmartLink>
            <span>Baked fresh daily</span>
            <span>{site.website}</span>
          </Container>
        </div>
      </div>
    </footer>
  )
}
