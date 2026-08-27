import type { RefCategory, RefItem } from '@/lib/references'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'
import AnimatedCounter from '@/components/ui/motion/AnimatedCounter'
import Reveal from '@/components/ui/motion/Reveal'
import SpotlightCard from '@/components/ui/motion/SpotlightCard'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

interface Props {
  category: RefCategory
  index: number
}

function Card({ item, icon }: { item: RefItem; icon: string }) {
  // Başrol sayı: daire → derslik → (yoksa) not metni
  const heroValue = item.units ?? item.classrooms
  const heroLabel = item.units ? 'Daire' : item.classrooms ? 'Derslik' : ''
  const hasSecondary = Boolean(item.blocks || item.commercial || item.types || (heroValue && item.note))

  return (
    <SpotlightCard className="group flex h-full flex-col rounded-2xl border border-outline-variant/25 bg-surface-container-lowest p-5 md:p-6 shadow-ambient transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-xl">
      {/* Başlık */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
          <MaterialIcon icon={icon} size={20} className="text-primary transition-colors duration-300 group-hover:text-on-primary" />
        </div>
        <div className="min-w-0">
          <h3 className="font-headline text-[15px] md:text-base font-bold leading-tight text-on-surface">{item.name}</h3>
          {item.location && (
            <p className="mt-0.5 flex items-center gap-1 font-body text-[11px] text-on-surface-variant">
              <MaterialIcon icon="location_on" size={12} className="text-primary/70" />
              {item.location}
            </p>
          )}
        </div>
      </div>

      {/* Başrol sayı */}
      <div className="mt-4 flex flex-1 flex-col justify-end">
        {heroValue ? (
          <div>
            <AnimatedCounter
              value={String(heroValue)}
              className="block font-headline text-[2.75rem] leading-none md:text-6xl font-bold tracking-tight text-primary"
            />
            <span className="mt-1.5 block font-body text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-primary/60">
              {heroLabel}
            </span>
          </div>
        ) : (
          <p className="font-headline text-lg md:text-xl font-bold leading-snug text-on-surface">{item.note}</p>
        )}
      </div>

      {/* İkincil bilgiler */}
      {hasSecondary && (
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-outline-variant/20 pt-3 font-body text-xs text-on-surface-variant">
          {item.blocks ? (
            <span><b className="font-bold text-on-surface">{item.blocks}</b> Blok</span>
          ) : null}
          {item.blocks && item.commercial ? <span className="text-outline-variant/60">·</span> : null}
          {item.commercial ? (
            <span><b className="font-bold text-on-surface">{item.commercial}</b> Ticari</span>
          ) : null}
          {heroValue && item.note ? (
            <span className="inline-flex items-center gap-1 text-primary">
              <MaterialIcon icon="add_circle" size={12} />
              {item.note}
            </span>
          ) : null}
          {item.types ? (
            <span className="ml-auto rounded-md bg-primary/8 px-2 py-0.5 font-bold tracking-wide text-primary">
              {item.types}
            </span>
          ) : null}
        </div>
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

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6" stagger={0.06}>
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
