import type { RefCategory, RefItem } from '@/lib/references'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Reveal from '@/components/ui/motion/Reveal'
import SpotlightCard from '@/components/ui/motion/SpotlightCard'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

interface Props {
  category: RefCategory
  index: number
}

function Pill({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/8 px-2.5 py-1 text-[11px] font-semibold text-primary font-body">
      <MaterialIcon icon={icon} size={13} className="text-primary/80" />
      {children}
    </span>
  )
}

function Card({ item, icon }: { item: RefItem; icon: string }) {
  const hasStats = item.blocks || item.units || item.commercial
  return (
    <SpotlightCard className="group h-full rounded-2xl border border-outline-variant/25 bg-surface-container-lowest p-6 shadow-ambient transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-xl">
      <div className="flex items-start gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-on-primary">
          <MaterialIcon icon={icon} size={22} className="text-primary transition-colors duration-300 group-hover:text-on-primary" />
        </div>
        <div className="min-w-0">
          <h3 className="font-headline text-lg font-bold leading-snug text-on-surface">{item.name}</h3>
          {item.location && (
            <p className="mt-0.5 flex items-center gap-1 font-body text-xs text-on-surface-variant">
              <MaterialIcon icon="location_on" size={13} className="text-primary/70" />
              {item.location}
            </p>
          )}
        </div>
      </div>

      {(hasStats || item.note) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.blocks ? <Pill icon="apartment">{item.blocks} Blok</Pill> : null}
          {item.units ? <Pill icon="meeting_room">{item.units} Daire</Pill> : null}
          {item.commercial ? <Pill icon="storefront">{item.commercial} Ticari</Pill> : null}
          {item.note ? <Pill icon="check_circle">{item.note}</Pill> : null}
        </div>
      )}

      {item.types && (
        <p className="mt-3 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-on-surface-variant/70">
          {item.types}
        </p>
      )}
    </SpotlightCard>
  )
}

export default function CategorySection({ category, index }: Props) {
  const alt = index % 2 === 1
  return (
    <section className={alt ? 'bg-surface-container py-14 md:py-20' : 'py-14 md:py-20'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8 md:mb-12 flex items-end justify-between gap-4">
          <div>
            <SectionLabel>{`0${index + 1}`.slice(-2)} — Referans</SectionLabel>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-on-surface">
              {category.title}
            </h2>
          </div>
          <span className="hidden sm:flex items-center gap-2 rounded-full border border-outline-variant/30 px-4 py-1.5 font-body text-xs font-bold text-on-surface-variant">
            <MaterialIcon icon={category.icon} size={16} className="text-primary" />
            {category.items.length} proje
          </span>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" stagger={0.07}>
          {category.items.map((item) => (
            <StaggerItem key={item.name} className="flex">
              <Card item={item} icon={category.icon} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
