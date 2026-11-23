import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * Smooth-scrolls to the element named by the URL hash whenever the location changes
 * (including clicking the same nav link twice). With no hash, resets to the top on page change.
 */
export function useScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth'

    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const target = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!target) return
    if (target.id === 'top') window.scrollTo({ top: 0, behavior })
    else target.scrollIntoView({ behavior, block: 'start' })
  }, [pathname, hash, key])
}
