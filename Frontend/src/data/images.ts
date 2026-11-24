import hotLatte from '@/assets/images/hot-latte.webp'
import icedCoffee from '@/assets/images/iced-coffee.webp'
import icedTea from '@/assets/images/iced-tea.webp'
import milkshake from '@/assets/images/milkshake.webp'
import mochaFrappe from '@/assets/images/mocha-frappe.webp'
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
  milkshake: {
    src: milkshake,
    alt: 'Cookie milkshake in a mason jar topped with cream, marshmallows and a cookie',
    width: 840,
    height: 1200,
  },
  mochaFrappe: {
    src: mochaFrappe,
    alt: 'Mocha frappe topped with whipped cream and chocolate sauce',
    width: 1024,
    height: 1024,
  },
  treatsBox: {
    src: treatsBox,
    alt: 'Kopi & Treats boxes filled with cookies, brownies and treats',
    width: 1046,
    height: 1400,
  },
} satisfies Record<string, ContentImage>
