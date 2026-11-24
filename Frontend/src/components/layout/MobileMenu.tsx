import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import clsx from 'clsx'
import { CloseIcon, MenuIcon } from '@/components/icons'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { site } from '@/data/site'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import type { NavLink } from '@/types/content'

/** Hamburger + full-screen espresso drawer, shown below the lg breakpoint. */
export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  useLockBodyScroll(open)

  function close() {
    setOpen(false)
    toggleRef.current?.focus()
  }

  useEffect(() => {
    if (!open) return
    firstLinkRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="inline-flex size-12 items-center justify-center rounded-pill border-2 border-cream text-cream"
      >
        <MenuIcon size={22} />
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-espresso px-4 py-4 text-cream sm:px-6"
        >
          <div className="flex items-center justify-between">
            <Logo className="h-12" alt="" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="inline-flex size-12 items-center justify-center rounded-pill border-2 border-cream text-cream"
            >
              <CloseIcon size={22} />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center">
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {links.map((link, i) => (
                <li key={link.href}>
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    to={link.href}
                    aria-current={link.current ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      'font-display text-[64px] leading-none uppercase no-underline hover:text-orange',
                      link.current ? 'text-orange' : 'text-cream',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div onClick={() => setOpen(false)}>
            <Button href={site.orderHref} variant="primary" size="lg" className="w-full">
              Order ahead
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
