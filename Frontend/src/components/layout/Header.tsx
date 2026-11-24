import { Link } from 'react-router'
import clsx from 'clsx'
import { Container } from '@/components/layout/Container'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { homeNav } from '@/data/navigation'
import { site } from '@/data/site'
import type { NavLink } from '@/types/content'

type Props = { links?: NavLink[] }

/** Sits inside HeroBand so the band's background and beans run behind it. */
export function Header({ links = homeNav }: Props) {
  return (
    <header className="relative z-10">
      <Container size="wide" className="flex items-center justify-between gap-4 py-4 lg:grid lg:grid-cols-3 lg:py-[22px]">
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="m-0 flex list-none flex-wrap gap-x-7 gap-y-2 p-0 text-sm font-semibold uppercase tracking-nav">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  aria-current={link.current ? 'page' : undefined}
                  className={clsx(
                    'no-underline transition-colors hover:text-orange',
                    link.current ? 'text-orange' : 'text-cream',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/#top" aria-label="Kopi & Treats home" className="block leading-none lg:justify-self-center">
          <Logo className="h-12 lg:h-[60px]" />
        </Link>

        <div className="hidden justify-self-end lg:block">
          <Button href={site.orderHref} variant="outline-light" size="header">
            Order ahead
          </Button>
        </div>

        <MobileMenu links={links} />
      </Container>
    </header>
  )
}
