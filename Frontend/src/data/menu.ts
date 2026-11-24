import { images } from '@/data/images'
import type { MenuCategory } from '@/types/content'

/** Home-page menu preview. Each card links to its section on the menu page. */
export const menuCategories: MenuCategory[] = [
  {
    id: 'hot-latte',
    title: 'Hot latte',
    subtitle: 'Smooth & creamy',
    theme: 'espresso',
    image: images.hotLatte,
    href: '/menu#hot-coffee',
  },
  {
    id: 'strawberry-waffles',
    title: 'Strawberry waffles',
    subtitle: 'Fresh off the iron',
    theme: 'latte',
    image: images.strawberryWaffles,
    href: '/menu#waffles',
  },
  {
    id: 'iced-kopi',
    title: 'Iced Kopi',
    subtitle: 'Cold & creamy',
    theme: 'sky',
    image: images.icedCoffee,
    href: '/menu#cold-coffee',
  },
  {
    id: 'iced-tea',
    title: 'Iced tea',
    subtitle: 'Bright & refreshing',
    theme: 'orange',
    image: images.icedTea,
    href: '/menu#iced-tea',
  },
]
