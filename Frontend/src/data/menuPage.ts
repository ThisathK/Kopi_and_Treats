import { images } from '@/data/images'
import type { MenuPanel, MenuSectionGroup } from '@/types/content'

/* Full menu, transcribed from the menu page design. Prices in LKR. */

const hotCoffee: MenuPanel = {
  id: 'hot-coffee',
  navLabel: 'Hot coffee',
  kicker: 'Coffee & tea',
  title: 'Hot coffee',
  tagline: 'warm cups, pulled with care',
  theme: 'latte',
  wellClassName: 'bg-latte-deep',
  photoLabel: 'Photo: hot coffee',
  image: images.hotLatte,
  groups: [
    {
      items: [
        { name: 'Espresso', price: 450 },
        { name: 'Espresso Doppio', price: 550 },
        { name: 'Espresso Macchiato', price: 600 },
        { name: 'Black coffee', price: 550 },
        { name: 'Americano', price: 550 },
        { name: 'Cortado', price: 580 },
        { name: 'Cappuccino', price: 700 },
        { name: 'Latte', price: 850 },
        { name: 'Flat white', price: 850 },
        { name: 'Spanish latte', price: 950 },
        { name: 'Hazelnut latte', price: 1050 },
        { name: 'Almond latte', price: 1050 },
        { name: 'Mocha', note: '(chocolate / caramel)', price: 850 },
        { name: 'Hot chocolate', price: 800 },
      ],
    },
  ],
}

const coldCoffee: MenuPanel = {
  id: 'cold-coffee',
  navLabel: 'Cold coffee',
  kicker: 'Coffee & tea',
  title: 'Cold coffee',
  tagline: 'over ice, never watered down',
  theme: 'cream',
  wellClassName: 'bg-sky-mist',
  photoLabel: 'Photo: iced coffee',
  // Zoomed in: whole straw + lid visible at the top, the bottom of the cup runs off the frame
  image: { ...images.icedCoffee, topAnchoredWidth: 0.62 },
  groups: [
    {
      items: [
        { name: 'Iced Americano', price: 600 },
        { name: 'Iced Orange Americano', price: 700 },
        { name: 'King Coconut Americano', price: 850 },
        { name: 'Iced latte', price: 850 },
        { name: 'Iced Hazelnut latte', price: 1100 },
        { name: 'Iced Almond latte', price: 1100 },
        { name: 'Iced coffee', price: 850 },
        { name: 'Coffee shake', price: 1200 },
        { name: 'Iced chocolate', price: 800 },
        { name: 'Affogato', price: 900 },
      ],
    },
  ],
}

const tea: MenuPanel = {
  id: 'tea',
  navLabel: 'Tea',
  kicker: 'Coffee & tea',
  title: 'Tea selection',
  tagline: 'for a gentler cup',
  theme: 'espresso',
  wellClassName: 'bg-roast',
  photoLabel: 'Photo: tea',
  groups: [
    {
      items: [
        { name: 'Milk tea', price: 400 },
        { name: 'Green tea', price: 350 },
        { name: 'Black tea', price: 300 },
      ],
    },
  ],
}

const icedTea: MenuPanel = {
  id: 'iced-tea',
  navLabel: 'Iced tea',
  kicker: 'Cold beverages',
  title: 'Iced tea',
  tagline: 'fruity and refreshing',
  theme: 'orange',
  wellClassName: 'bg-orange-soft',
  photoLabel: 'Photo: iced tea',
  image: images.icedTea,
  groups: [
    {
      items: [
        { name: 'Lemon', price: 400 },
        { name: 'Strawberry', price: 400 },
        { name: 'Blueberry', price: 400 },
        { name: 'Peach', price: 400 },
        { name: 'Lychee', price: 400 },
      ],
    },
  ],
}

const milkshakes: MenuPanel = {
  id: 'milkshakes',
  navLabel: 'Milkshakes',
  kicker: 'Cold beverages',
  title: 'Milkshakes',
  tagline: 'thick, creamy, very slurpable',
  theme: 'espresso',
  wellClassName: 'bg-roast',
  photoLabel: 'Photo: milkshake',
  image: images.milkshake,
  groups: [
    {
      items: [
        { name: 'Vanilla', price: 750 },
        { name: 'Chocolate', price: 800 },
        { name: 'Strawberry', price: 750 },
        { name: 'Milo', price: 950 },
        { name: 'Malt shake', price: 950 },
        { name: 'Cookie', price: 950 },
        { name: 'Faluda', price: 950 },
        { name: 'Nutella shake', price: 1200 },
        { name: 'Peanut butter shake', price: 1200 },
      ],
    },
  ],
  footnote: 'Add whipped cream for Rs. 200',
}

const frappe: MenuPanel = {
  id: 'frappe',
  navLabel: 'Frappe',
  kicker: 'Cold beverages',
  title: 'Frappe',
  tagline: 'blended and chilled',
  theme: 'cream',
  wellClassName: 'bg-latte-deep',
  photoLabel: 'Photo: chocolate frappe',
  image: { ...images.mochaFrappe, position: '50% 30%' },
  groups: [{ items: [{ name: 'Chocolate frappe', price: 1400 }] }],
}

const fizzy: MenuPanel = {
  id: 'fizzy',
  navLabel: 'Fizzy drinks',
  kicker: 'Cold beverages',
  title: 'Fizzy drinks',
  tagline: 'bubbly mocktails',
  theme: 'sky',
  wellClassName: 'bg-sky-well',
  photoLabel: 'Photo: mojito',
  groups: [
    {
      items: [
        { name: 'Virgin mojito', price: 700 },
        { name: 'Watermelon mojito', price: 800 },
        { name: 'Pomegranate mojito', price: 800 },
        { name: 'Grenadine mojito', price: 800 },
        { name: 'Blue curaçao', price: 800 },
      ],
    },
  ],
}

const waffles: MenuPanel = {
  id: 'waffles',
  navLabel: 'Waffles',
  kicker: 'From the kitchen',
  title: 'Waffles & savories',
  tagline: 'golden, crisp and made to order',
  theme: 'orange',
  wellClassName: 'bg-orange-soft',
  photoLabel: 'Photo: waffle',
  image: images.strawberryWaffles,
  groups: [
    { heading: 'Savory', items: [{ name: 'Savory waffle', price: 1300 }] },
    {
      heading: 'Sweet',
      items: [
        { name: 'Strawberry topping', price: 1400 },
        { name: 'Chocolate waffle', price: 1300 },
        { name: 'Vanilla waffle', price: 1200 },
      ],
    },
  ],
}

const cakes: MenuPanel = {
  id: 'cakes',
  navLabel: 'Cakes',
  kicker: 'From the kitchen',
  title: 'Cakes',
  tagline: 'the perfect partner for your kopi',
  theme: 'espresso',
  wellClassName: 'bg-roast',
  photoLabel: 'Photo: cakes & cookies',
  image: images.treatsBox,
  groups: [
    {
      items: [
        { name: 'Coffee cake piece', price: 330 },
        { name: 'Butter cake piece', price: 180 },
        { name: 'Chocolate moist cake piece', price: 380 },
        { name: 'Chocolate brownie', price: 350 },
        { name: 'Chocolate brownie', note: '(with ice cream topping)', price: 380 },
        { name: 'Cakey cookie', price: 180 },
        { name: 'Lava cake', price: 250 },
      ],
    },
  ],
}

export const menuSectionGroups: MenuSectionGroup[] = [
  {
    id: 'kopi-bar',
    eyebrow: 'Coffee & tea',
    title: 'The kopi bar',
    rows: [
      { kind: 'wide', panel: hotCoffee, photoSide: 'left' },
      { kind: 'wide', panel: coldCoffee, photoSide: 'right' },
      { kind: 'pair', panels: [tea, icedTea] },
    ],
  },
  {
    id: 'shakes-and-sips',
    eyebrow: 'Cold beverages',
    title: 'Shakes & sips',
    band: true,
    rows: [
      { kind: 'wide', panel: milkshakes, photoSide: 'left' },
      { kind: 'pair', panels: [frappe, fizzy] },
    ],
  },
  {
    id: 'the-treats',
    eyebrow: 'From the kitchen',
    title: 'The treats',
    rows: [{ kind: 'pair', panels: [waffles, cakes] }],
  },
]

/** Category pill nav, in design order, with each pill's colours */
export const menuCategoryNav: { id: string; label: string; className: string }[] = [
  { id: hotCoffee.id, label: hotCoffee.navLabel, className: 'bg-brick text-cream' },
  { id: coldCoffee.id, label: coldCoffee.navLabel, className: 'bg-sky text-espresso' },
  { id: tea.id, label: tea.navLabel, className: 'bg-espresso text-cream' },
  { id: icedTea.id, label: icedTea.navLabel, className: 'bg-orange text-espresso' },
  { id: milkshakes.id, label: milkshakes.navLabel, className: 'bg-latte text-espresso' },
  { id: frappe.id, label: frappe.navLabel, className: 'bg-brick text-cream' },
  { id: fizzy.id, label: fizzy.navLabel, className: 'bg-sky-pale text-espresso' },
  { id: waffles.id, label: waffles.navLabel, className: 'bg-orange text-espresso' },
  { id: cakes.id, label: cakes.navLabel, className: 'bg-latte text-espresso' },
]

export function formatPrice(lkr: number) {
  return `Rs. ${lkr.toLocaleString('en-US')}`
}
