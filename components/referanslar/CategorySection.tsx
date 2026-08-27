import type { RefCategory, RefItem } from '@/lib/references'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'
import AnimatedCounter from '@/components/ui/motion/AnimatedCounter'
import Reveal from '@/components/ui/motion/Reveal'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

interface Props {
  category: RefCategory
  index: number
}

function Card({ item, icon }: { item: RefItem; icon: string }) {
  // Başrol sayı: daire → derslik
  const heroValue = item.units ?? item.classrooms
  const heroLabel = item.units ? 'Daire' : item.classrooms ? 'Derslik' : ''

  // İkincil satır
  const parts: string[] = []
  if (item.blocks) parts.push(`${item.blocks} Blok`)
  if (item.commercial) parts.push(`${item.commercial} Ticari`)
  if (item.note && heroValue) parts.push(item.note)
  const secondary = parts.join(' · ')

  return (
    <div className="group flex h-full min-h-[13rem] flex-col items-center rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 text-center shadow-ambient transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-ambient-xl">
      <MaterialIcon
        icon={icon}
        size={28}
        fill
        weight={300}
        className="text-primary transition-transform duration-300 group-hover:scale-110"
      />

      <h3 className="mt-4 font-headline text-[15px] md:text-base font-bold leading-snug text-on-surface line-clamp-2 min-h-[2.6em]">
        {item.name}
      </h3>

      {/* Sayı */}
      <div className="mt-3">
        {heroValue ? (
          <>
            <AnimatedCounter
              value={String(heroValue)}
              className="block font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary leading-none"
            />
            <span className="mt-1.5 block text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-on-surface-variant">
              {heroLabel}
            </span>
          </>
        ) : (
          <span className="font-headline text-lg font-bold text-on-surface">{item.note}</span>
        )}
      </div>

      {/* İkincil + tip — alta hizalı */}
      <div className="mt-auto flex w-full flex-col items-center gap-2 pt-5">
        {secondary && (
          <p className="font-body text-xs text-on-surface-variant">{secondary}</p>
        )}
        {item.types && (
          <span className="rounded-md bg-primary/8 px-2.5 py-0.5 font-body text-[11px] font-bold tracking-wide text-primary">
            {item.types}
          </span>
        )}
      </div>
    </div>
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
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
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
