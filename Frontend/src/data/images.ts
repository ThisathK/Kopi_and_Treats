import hotLatte from '@/assets/images/hot-latte.webp'
import icedCoffee from '@/assets/images/iced-coffee.webp'
import icedTea from '@/assets/images/iced-tea.webp'
import strawberryWaffles from '@/assets/images/strawberry-waffles.webp'
import treatsBox from '@/assets/images/treats-box.webp'
import type { ContentImage } from '@/types/content'

export const images = {
  icedCoffee: {
    src: icedCoffee,
    alt: 'Kopi & Treats iced coffee in a branded cup',
    width: 524,
    height: 1100,
    fit: 'contain',
  },
  hotLatte: {
    src: hotLatte,
    alt: 'A hand holding a Kopi & Treats hot latte',
    width: 750,
    height: 1000,
  },
  strawberryWaffles: {
    src: strawberryWaffles,
    alt: 'Waffle topped with fresh strawberries, cream and syrup',
    width: 1200,
    height: 800,
  },
  icedTea: {
    src: icedTea,
    alt: 'A hand holding a Kopi & Treats iced lemon tea',
    width: 896,
    height: 1200,
  },
  treatsBox: {
    src: treatsBox,
    alt: 'Kopi & Treats boxes filled with cookies, brownies and treats',
    width: 1046,
    height: 1400,
  },
} satisfies Record<string, ContentImage>
