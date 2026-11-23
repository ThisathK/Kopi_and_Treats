/**
 * Site-wide content. Values in [BRACKETS] are placeholders from the design,
 * still waiting on real content.
 */
export const site = {
  name: 'Kopi & Treats',
  tagline: 'Sip. Savour. Smile',
  website: '[WEBSITE]',
  /** Where every "Order ahead" / "Order now" CTA points. Placeholder until an ordering destination exists. */
  orderHref: '/#branches',
  /** "Plan a gathering" CTA. Placeholder until an enquiry form / contact exists. */
  gatheringsHref: '/#events',
  gatheringsPrice: '[PRICE]',
  socials: {
    instagram: { handle: '[HANDLE]', href: 'https://instagram.com/' },
    facebook: { href: 'https://facebook.com/' },
    tiktok: { href: 'https://tiktok.com/' },
  },
} as const
