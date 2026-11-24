import clsx from 'clsx'
import { Container } from '@/components/layout/Container'
import { menuSectionGroups } from '@/data/menuPage'
import { MenuCategoryNav } from '@/features/menu-page/MenuCategoryNav'
import { MenuCta } from '@/features/menu-page/MenuCta'
import { MenuGroup } from '@/features/menu-page/MenuGroup'
import { MenuHero } from '@/features/menu-page/MenuHero'

export function MenuPage() {
  const lastIndex = menuSectionGroups.length - 1
  return (
    <>
      <title>Menu — Kopi &amp; Treats</title>
      <MenuHero />
      <main id="main">
        {menuSectionGroups.map((group, i) => {
          const content = (
            <Container className={clsx('flex flex-col gap-7', !group.band && i > 0 && 'pt-[72px]')}>
              {i === 0 && <MenuCategoryNav />}
              <MenuGroup group={group} className={i === 0 ? 'pt-6' : undefined} />
              {i === lastIndex && <MenuCta />}
            </Container>
          )
          return group.band ? (
            <div key={group.id} className="mt-[72px] bg-latte pt-16 pb-20">
              {content}
            </div>
          ) : (
            <div key={group.id}>{content}</div>
          )
        })}
      </main>
    </>
  )
}
