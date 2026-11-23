import { SectionHeading } from '@/components/ui/SectionHeading'
import { menuCategories } from '@/data/menu'
import { MenuCategoryCard } from '@/features/menu/MenuCategoryCard'

export function MenuPreview() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="flex flex-col gap-6 pt-6">
      <SectionHeading
        id="menu-title"
        eyebrow="On the menu"
        title="Pick your kopi"
        tagline="then pick a treat to go with it"
      />
      {/* Cards use subgrid rows so titles, photos and CTAs line up across a row even when a title wraps. */}
      <div className="grid grid-cols-1 gap-x-[18px] gap-y-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {menuCategories.map((category) => (
          <MenuCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
