# Kopi & Treats — Website

Marketing website for **Kopi & Treats**, a coffee shop (kopi + baked treats) with two branches.
Tagline: *Sip. Savour. Smile.*

**Scope (decided):** a **single long scrolling home page**. The nav items (Menu, Branches, Events)
scroll smoothly to sections on that page. There are no separate content pages. React Router
provides only `/` and a 404 page.

## Repository layout

```
Kopi and Treats Website/
├── CLAUDE.md            ← this file
├── UI Design/           ← design source of truth (read-only)
│   ├── Kopi and treats UI.png   2880×8000 @2x render of the 1440px-wide artboard
│   └── Kopi and treats UI.zip   HTML export (G-Socials-Offers.dc.html): exact values
├── Assets/              ← raw brand assets (originals; optimized copies live in Frontend/src/assets)
├── Frontend/            ← the React app
└── Backend/             ← empty, out of scope
```

**Design source of truth:** `G-Socials-Offers.dc.html` inside the zip. Its inline styles hold the
precise values. Use the PNG for visual checks. The artboard is 1440px wide.
**Gotcha:** the export uses `content-box` sizing, so its `max-width: 1240px; padding: 0 24px`
means 1240px of *content*. Our containers use border-box, so their max-width tokens include the
gutters (1288 / 1384).

## Stack

- Vite 8 + React 19 + TypeScript 6 (strict)
- Tailwind CSS v4: CSS-first theme in `src/styles/theme.css` (`@theme`). This is the single
  source of truth. The default palette is reset, so only brand colours exist. Every token is
  also a CSS variable (e.g. `var(--color-espresso)`), which the SVG illustrations use.
- React Router 7 (`react-router`, `createBrowserRouter`), `clsx`

### Commands (run in `Frontend/`)

```
npm install
npm run dev       # dev server
npm run build     # tsc -b && vite build
npm run preview
npm run lint
```

---

## Design tokens (`src/styles/theme.css`)

### Colours
| Token | Hex | Use |
|---|---|---|
| `espresso` | `#341a0e` | Text, hero/footer bg, dark cards |
| `espresso-deep` | `#1f0f07` | Phone bezel |
| `roast` | `#4f2a17` | Photo well on dark cards |
| `bean-500/600/700` | `#7a4126` `#6b3a1f` `#5a2f19` | Coffee beans. 600 is also used for Optima taglines |
| `cocoa` | `#5a3a2a` | Body copy on latte cards |
| `caramel` | `#a4500a` | Section taglines |
| `brick` | `#a63a1c` | Red accent |
| `orange` / `orange-soft` | `#f79420` / `#fbb35c` | Primary CTA, orange card + well |
| `sky` / `sky-soft` | `#10b9ff` / `#7fd5fb` | Sky card + well, story badge |
| `latte` / `latte-deep` | `#f2d7b3` / `#e4c08f` | Light cards, banner, wells, borders |
| `cream` / `cream-soft` | `#fff4e2` / `#fff8ee` | Text on dark / offers panel |
| `paper` | `#f6ecdd` | Page background |

### Typography
- `font-display`: **Brother** Bold (always uppercase)
- `font-script`: **Optima** Regular (lowercase taglines)
- `font-sans`: **Inter** variable

Type-scale utilities:
- `text-hero`: clamp 76–200px / 0.86
- `text-section`: clamp 48–76 / 0.95
- `text-banner`: clamp 48–80 / 0.9
- `text-offers`: clamp 44–64 / 0.92
- `text-branch`: 38 / 0.95
- `text-card`: 34 / 1
- `text-price`: 32
- `text-tagline`: 21–26
- `text-tagline-sm`: 20–24
- `text-lead`: 18 / 1.6
- `text-body`: 16 / 1.6
- `text-button`: 13
- `text-label`: 11

Tracking utilities: `tracking-header-cta` .08em, `tracking-button` .1em, `tracking-nav` .12em,
`tracking-label` .14em, `tracking-label-wide` .16em, `tracking-tag` .06em.

### Radii, shadows, layout
- **Radii:** `rounded-pill` 999, `rounded-card` 26, `rounded-section` 28, `rounded-photo` 18,
  `rounded-photo-lg` 20, `rounded-phone` 38, `rounded-phone-screen` 30
- **Shadows:**
  - `shadow-banner` (events banner)
  - `shadow-phone`
  - `shadow-offset`: solid espresso 4px, on the gathering CTA
  - `shadow-lift`: card hover
- **Containers:** `max-w-wide` (header/hero), `max-w-main` (content/footer), via `<Container size>`

---

## Component breakdown

**Layout** (`components/layout/`)
- `SiteLayout`: skip link, `<Outlet/>`, `Footer`. Calls `useScrollToHash`.
- `Header`: lives *inside* the dark hero band, so pages render it themselves (`HeroSection`, `NotFoundPage`).
  - At `lg` and up: 3-column grid (nav · logo · "Order ahead").
  - Below `lg`: logo + `MobileMenu`.
- `MobileMenu`: hamburger and full-screen espresso drawer. Closes on Esc, locks body scroll, returns focus to the toggle.
- `Footer`: `WaveDivider`, logo + underlined nav, then a bottom bar.
- `Container`: `size="wide" | "main"`.

**UI primitives** (`components/ui/`)
- `Button`: `variant` primary / brick / outline-dark / outline-light; `size` header / md / lg; optional `offsetShadow`.
- `IconButton`: 50px circular social link.
- `SmartLink`: router `Link` for paths starting with `/`; `<a>` otherwise; external links open in a new tab.
- `Chip`, `Eyebrow`, `DisplayHeading` (`size` maps to the type scale), `Tagline`, `SectionHeading`.
- `PhotoFrame`: image well (`cover` / `contain`) or a labelled placeholder.
- `Logo`: cream long logo, taken from the design export; the `Assets/Logos` files are dark only.
- `DottedRule`.

**Icons / illustrations**
- `components/icons/index.tsx`: every stroke icon.
- `components/illustrations/`: `CoffeeBean`, `BeanScatter`, `OrderAheadBadge` (ring text spins slowly, `motion-safe` only), `MiniCup`, `WaveDivider`.

**Sections** (`features/`)
- `home/HeroSection`: header, beans, H1, the iced-coffee photo (replaces the design's cup illustration), and the badge.
- `home/FeatureChips`
- `home/MenuPreview` with `menu/MenuCategoryCard`. The grid uses **subgrid** rows (`row-span-3 grid-rows-subgrid`), so titles, photos and CTAs line up even when a title wraps.
- `home/GatheringsBanner` (`#events`)
- `home/OffersSection` (`#offers`) with `offers/SocialPhones`, `PhoneFrame`, `OfferPostScreen`, `StoryScreen`
- `branches/BranchesSection` (`#branches`) with `branches/BranchCard`

**Pages:** `HomePage` (`/`), `NotFoundPage` (`*`)

### Section anchors
`#top` (hero) · `#menu` · `#events` · `#offers` · `#branches` · `#main` (skip-link target).
Internal links use the form `/#menu`. `useScrollToHash` handles smooth scrolling (respecting
reduced motion) and also works when the same link is clicked twice or when coming from the 404 page.

## File structure (`Frontend/`)

```
Frontend/
├── index.html · vite.config.ts (@ alias → src) · tsconfig*.json · eslint.config.js
├── public/favicon.png
└── src/
    ├── main.tsx · router.tsx
    ├── styles/      index.css · theme.css · fonts.css
    ├── assets/
    │   ├── fonts/   brother-bold.woff · optima-regular.woff · inter-var.woff2
    │   ├── logos/   logo-long-light.png
    │   └── images/  iced-coffee · hot-latte · strawberry-waffles · iced-tea · treats-box (.webp)
    ├── components/
    │   ├── layout/        SiteLayout · Header · MobileMenu · Footer · Container
    │   ├── ui/            Button · IconButton · SmartLink · Chip · Eyebrow · DisplayHeading ·
    │   │                  Tagline · SectionHeading · PhotoFrame · Logo · DottedRule
    │   ├── icons/         index.tsx
    │   └── illustrations/ CoffeeBean · BeanScatter · OrderAheadBadge · MiniCup · WaveDivider
    ├── features/
    │   ├── home/      HeroSection · FeatureChips · MenuPreview · GatheringsBanner · OffersSection
    │   ├── menu/      MenuCategoryCard
    │   ├── offers/    SocialPhones · PhoneFrame · OfferPostScreen · StoryScreen
    │   └── branches/  BranchesSection · BranchCard
    ├── pages/     HomePage · NotFoundPage
    ├── data/      site · navigation · features · menu · branches · offers · images
    ├── hooks/     useScrollToHash · useLockBodyScroll
    └── types/     content.ts
```

## Content

All copy and image wiring lives in `src/data/`. Components contain no hard-coded content.

**Menu cards** (`data/menu.ts`)

| Card | Image | Theme |
|---|---|---|
| Hot latte | hot coffee | espresso |
| Strawberry waffles | waffles | latte |
| Iced Kopi | iced coffee | sky |
| Iced tea | iced tea | orange |

The card sub-labels were written to fit the new names. Change them freely.

**Hero:** the iced-coffee cut-out PNG (transparent background, trimmed).

**Gatherings banner:** treats box photo.

**Still placeholders, deliberately** ("leave the other specifics for now"):
- `[PRICE]`, `[HANDLE]`, `[WEBSITE]` and the social URLs (`data/site.ts`)
- Branch names, addresses, hours, phones and photos (`data/branches.ts`)
- Offer and story mockup copy, plus the story photo (`data/offers.ts`)
- `site.orderHref` (currently `/#branches`) and `site.gatheringsHref` (currently `/#events`), until real destinations exist

## Responsive rules

| Area | Below `sm` (< 640px) | `sm`–`lg` (640–1023px) | `lg` and up (≥ 1024px) |
|---|---|---|---|
| Header | Logo + hamburger | Logo + hamburger | As designed |
| Hero | Smaller beans, 2 hidden; cup about 300px tall; 96px badge | Badge grows | As designed |
| Menu grid | 1 column | 2 columns | 4 columns |
| Events banner, Offers | Stacked (flex-wrap with design flex-bases) | Stacked | Side by side |
| Phone mockups | Scaled 0.6 (0.75 at 420px and up) | Full size | Full size |
| Branches | 1 column (`auto-fit minmax(min(320px,100%))`) | 2 columns | 2 columns |
| Footer | Stacked and centred | — | One row |

There must be no horizontal scroll at 320px or wider. Flex children that hold fixed-width
content need `min-w-0`.

## Conventions

- Match the design's exact values through tokens. Arbitrary values (`h-[230px]`) are OK for one-off design dimensions.
- Function components, typed props, named exports, `@/` imports.
- Variants go in typed lookup maps, not nested ternaries.
- `clsx` does **not** resolve Tailwind conflicts. To hide a component whose base classes set
  `display` (e.g. `Button`), wrap it in an element rather than passing `hidden`.
- **Accessibility:**
  - Semantic landmarks and `aria-labelledby` on sections.
  - Decorative SVGs get `aria-hidden`. Phone mockups use `role="img"`.
  - Visible orange focus ring. `motion-safe` for all animation.
- **Images:** webp, explicit `width`/`height`, `loading="lazy"` below the fold. Process originals from `Assets/` with `cwebp`.
- **Fonts:** browsers can't load `Optima.ttc`, so Regular was extracted to WOFF; Brother was converted OTF → WOFF.
  - Before launch, confirm the **web-embedding licences** for Brother and Optima.
- Visual QA: screenshot with headless Chromium at widths 1440, 820 and 390, and compare against the design PNG.
