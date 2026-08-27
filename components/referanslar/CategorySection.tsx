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

const DASH = '–'

function Metric({ value, label, gold = false }: { value: string | number; label: string; gold?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center px-1 text-center">
      <span
        className={`font-headline text-xl md:text-[1.7rem] font-bold leading-none tracking-tight ${
          gold ? 'text-primary' : value === DASH ? 'text-outline-variant/50' : 'text-on-surface'
        }`}
      >
        {value}
      </span>
      <span className="mt-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant/70">
        {label}
      </span>
    </div>
  )
}

function Card({ item, icon }: { item: RefItem; icon: string }) {
  const numeric = Boolean(item.blocks || item.units || item.commercial)
  const footer = item.types || (item.note && (numeric || item.classrooms))

  return (
    <SpotlightCard className="group flex h-full flex-col rounded-2xl border border-outline-variant/25 bg-surface-container-lowest p-5 shadow-ambient transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-xl">
      {/* Başlık — sabit yükseklik (2 satır) → tüm kartlar hizalı */}
      <div className="flex items-start gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
          <MaterialIcon icon={icon} size={18} className="text-primary transition-colors duration-300 group-hover:text-on-primary" />
        </div>
        <h3 className="font-headline text-[13px] md:text-sm font-bold leading-snug text-on-surface line-clamp-2 min-h-[2.4em]">
          {item.name}
        </h3>
      </div>

      {/* Sayılar — kartın altına hizalı */}
      <div className="mt-auto pt-5">
        {numeric ? (
          <div className="grid grid-cols-3 divide-x divide-outline-variant/20">
            <Metric value={item.blocks ?? DASH} label="Blok" />
            <Metric value={item.units ?? DASH} label="Daire" gold />
            <Metric value={item.commercial ?? DASH} label="Ticari" />
          </div>
        ) : item.classrooms ? (
          <div className="grid grid-cols-1">
            <Metric value={item.classrooms} label="Derslik" gold />
          </div>
        ) : (
          <p className="py-2 text-center font-headline text-base font-bold text-primary">{item.note}</p>
        )}

        {/* Alt bilgi — sabit yükseklik → hizalı */}
        <div className="mt-4 flex min-h-[1.75rem] flex-wrap items-center justify-center gap-2 border-t border-outline-variant/15 pt-3">
          {item.types && (
            <span className="rounded-md bg-primary/8 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-primary">
              {item.types}
            </span>
          )}
          {item.note && (numeric || item.classrooms) && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-on-surface-variant">
              <MaterialIcon icon="add" size={12} className="text-primary/70" />
              {item.note}
            </span>
          )}
          {!footer && <span className="text-[11px] text-transparent">.</span>}
        </div>
      </div>
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

        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5"
          stagger={0.05}
        >
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
