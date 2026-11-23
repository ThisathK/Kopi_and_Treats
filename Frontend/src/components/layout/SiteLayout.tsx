import { Outlet } from 'react-router'
import { Footer } from '@/components/layout/Footer'
import { useScrollToHash } from '@/hooks/useScrollToHash'

export function SiteLayout() {
  useScrollToHash()
  return (
    <div className="min-h-screen overflow-x-clip bg-paper font-sans text-espresso">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-pill focus:bg-orange focus:px-5 focus:py-3 focus:font-bold"
      >
        Skip to content
      </a>
      <Outlet />
      <Footer />
    </div>
  )
}
