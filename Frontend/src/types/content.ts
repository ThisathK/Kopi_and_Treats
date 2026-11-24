export type CardTheme = 'espresso' | 'latte' | 'sky' | 'orange'

export type ChipTone = 'brick' | 'espresso' | 'latte' | 'orange' | 'white' | 'sky'

export type NavLink = {
  label: string
  /** Internal links start with "/" (e.g. "/#menu"); anything else is treated as external. */
  href: string
  /** Marks the link for the page being viewed (orange + aria-current) */
  current?: boolean
}

export type ContentImage = {
  src: string
  alt: string
  width: number
  height: number
  /** "contain" for cut-out product shots on transparent backgrounds */
  fit?: 'cover' | 'contain'
  /** CSS object-position for cropping, e.g. '50% 40%' (default centre) */
  position?: string
  /**
   * "Top-anchored" sizing for transparent cut-outs: the whole image starts just inside the top of
   * the frame at this fraction of the frame's width (e.g. 0.8), and anything below the frame crops off.
   * Overrides fit/position.
   */
  topAnchoredWidth?: number
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

/* ---------- Menu page ---------- */

export type MenuPanelTheme = 'latte' | 'cream' | 'espresso' | 'orange' | 'sky'

export type MenuItem = {
  name: string
  /** Small qualifier after the name, e.g. "(chocolate / caramel)" */
  note?: string
  /** Price in LKR */
  price: number
}

export type MenuItemGroup = {
  /** Optional sub-heading inside a panel ("Savory", "Sweet") */
  heading?: string
  items: MenuItem[]
}

export type MenuPanel = {
  /** Anchor id, also used by the category nav (e.g. "hot-coffee") */
  id: string
  /** Short label for the category nav pill */
  navLabel: string
  kicker: string
  title: string
  tagline: string
  theme: MenuPanelTheme
  /** Photo-well background class (design varies it per panel) */
  wellClassName: string
  photoLabel: string
  image?: ContentImage
  groups: MenuItemGroup[]
  /** Orange pill under the list, e.g. "Add whipped cream for Rs. 200" */
  footnote?: string
}

/** A row on the menu page: one wide panel (photo beside the list) or a pair of stacked panels */
export type MenuRow =
  | { kind: 'wide'; panel: MenuPanel; photoSide: 'left' | 'right' }
  | { kind: 'pair'; panels: [MenuPanel, MenuPanel] }

export type MenuSectionGroup = {
  id: string
  eyebrow: string
  title: string
  /** Full-width latte background band behind the group */
  band?: boolean
  rows: MenuRow[]
}
