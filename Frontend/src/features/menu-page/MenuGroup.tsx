import { SectionHeading } from '@/components/ui/SectionHeading'
import { MenuPanelCard } from '@/features/menu-page/MenuPanelCard'
import type { MenuSectionGroup } from '@/types/content'

/** A titled block of menu panels ("The kopi bar", "Shakes & sips", "The treats"). */
export function MenuGroup({ group, className }: { group: MenuSectionGroup; className?: string }) {
  return (
    <>
      <SectionHeading
        id={`${group.id}-title`}
        eyebrow={group.eyebrow}
        title={group.title}
        spacing="loose"
        className={className}
      />
      {group.rows.map((row) =>
        row.kind === 'wide' ? (
          <MenuPanelCard key={row.panel.id} panel={row.panel} layout="wide" photoSide={row.photoSide} />
        ) : (
          <div key={row.panels[0].id} className="flex flex-wrap gap-7">
            {row.panels.map((panel) => (
              <MenuPanelCard key={panel.id} panel={panel} layout="stacked" />
            ))}
          </div>
        ),
      )}
    </>
  )
}
