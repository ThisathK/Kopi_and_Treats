import { images } from '@/data/images'
import { site } from '@/data/site'
import type { MenuCategory } from '@/types/content'

export const menuCategories: MenuCategory[] = [
  {
    id: 'hot-latte',
    title: 'Hot latte',
    subtitle: 'Smooth & creamy',
    theme: 'espresso',
    image: images.hotLatte,
    href: site.orderHref,
  },
  {
    id: 'strawberry-waffles',
    title: 'Strawberry waffles',
    subtitle: 'Fresh off the iron',
    theme: 'latte',
    image: images.strawberryWaffles,
    href: site.orderHref,
  },
  {
    id: 'iced-kopi',
    title: 'Iced Kopi',
    subtitle: 'Cold & creamy',
    theme: 'sky',
    image: images.icedCoffee,
    href: site.orderHref,
  },
  {
    id: 'iced-tea',
    title: 'Iced tea',
    subtitle: 'Bright & refreshing',
    theme: 'orange',
    image: images.icedTea,
    href: site.orderHref,
  },
]
