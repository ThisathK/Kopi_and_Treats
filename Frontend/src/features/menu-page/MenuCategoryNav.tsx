import clsx from 'clsx'
import { SmartLink } from '@/components/ui/SmartLink'
import { menuCategoryNav } from '@/data/menuPage'

/**
 * Floating pill bar overlapping the hero's bottom edge. Jumps to each menu panel.
 * Below lg it becomes a horizontally scrolling strip instead of wrapping.
 */
export function MenuCategoryNav() {
  return (
    <nav
      aria-label="Menu sections"
      className="relative z-[2] -mt-[30px] rounded-pill bg-cream-soft p-2.5 shadow-float"
    >
      <ul className="m-0 flex list-none gap-2 overflow-x-auto p-0 [scrollbar-width:none] lg:flex-wrap lg:justify-center lg:overflow-visible">
        {menuCategoryNav.map((item) => (
          <li key={item.id} className="flex shrink-0">
            <SmartLink
              href={`/menu#${item.id}`}
              className={clsx(
                'inline-flex min-h-11 items-center rounded-pill px-5 text-sm font-bold whitespace-nowrap no-underline',
                'transition-transform duration-200 hover:-translate-y-0.5',
                item.className,
              )}
            >
              {item.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
