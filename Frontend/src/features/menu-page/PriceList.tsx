import clsx from 'clsx'
import { formatPrice } from '@/data/menuPage'
import type { MenuItem } from '@/types/content'

type Props = {
  items: MenuItem[]
  /** Two-column grid (wide panels) vs single column (stacked panels) */
  columns?: boolean
  leaderClassName: string
  noteClassName: string
}

/** Item names and prices joined by a dotted leader line. */
export function PriceList({ items, columns, leaderClassName, noteClassName }: Props) {
  return (
    <ul
      className={clsx(
        'm-0 list-none p-0',
        columns ? 'grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-x-11' : 'flex flex-col',
      )}
    >
      {items.map((item, i) => (
        <li key={`${item.name}-${i}`} className="flex items-baseline gap-2.5 py-[5px] text-base leading-normal">
          <span className="font-medium">
            {item.name}
            {item.note && <span className={clsx('text-[13px]', noteClassName)}> {item.note}</span>}
          </span>
          <span aria-hidden="true" className={clsx('min-w-4 flex-auto -translate-y-[5px] border-b-2 border-dotted', leaderClassName)} />
          <span className="font-bold whitespace-nowrap">{formatPrice(item.price)}</span>
        </li>
      ))}
    </ul>
  )
}
