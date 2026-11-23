export type CardTheme = 'espresso' | 'latte' | 'sky' | 'orange'

export type ChipTone = 'brick' | 'espresso' | 'latte' | 'orange' | 'white' | 'sky'

export type NavLink = {
  label: string
  /** Internal links start with "/" (e.g. "/#menu"); anything else is treated as external. */
  href: string
}

export type ContentImage = {
  src: string
  alt: string
  width: number
  height: number
  /** "contain" for cut-out product shots on transparent backgrounds */
  fit?: 'cover' | 'contain'
}

export type Feature = {
  label: string
  tone: ChipTone
}

export type MenuCategory = {
  id: string
  title: string
  subtitle: string
  theme: CardTheme
  image?: ContentImage
  href: string
}

export type Branch = {
  id: string
  name: string
  address: string
  city: string
  hours: string
  phone: string
  theme: Extract<CardTheme, 'latte' | 'espresso'>
  photoLabel: string
  image?: ContentImage
  directionsHref: string
  phoneHref: string
}
