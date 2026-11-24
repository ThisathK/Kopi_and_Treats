import type { NavLink } from '@/types/content'

/** Header nav on the home page */
export const homeNav: NavLink[] = [
  { label: 'Menu', href: '/menu' },
  { label: 'Branches', href: '/#branches' },
  { label: 'Events', href: '/#events' },
]

/** Header nav on the menu page (per the menu design) */
export const menuPageNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu', current: true },
  { label: 'Branches', href: '/#branches' },
]

export const footerNav: NavLink[] = [
  { label: 'Menu', href: '/menu' },
  { label: 'Offers', href: '/#offers' },
  { label: 'Gatherings', href: '/#events' },
  { label: 'Branches', href: '/#branches' },
]
