import type { ContentImage } from '@/types/content'

/** Copy shown inside the two phone mockups in the Offers section. */
export const offerPost = {
  handle: '[handle]',
  kicker: 'This weekend only',
  title: ['Weekend', 'treat deal'],
  details: '[offer details]',
}

export const storyPost: { title: string[]; itemName: string; badge: string; image?: ContentImage } = {
  title: ['New on', 'the menu'],
  itemName: '[new item name]',
  badge: 'Available at both branches',
}
