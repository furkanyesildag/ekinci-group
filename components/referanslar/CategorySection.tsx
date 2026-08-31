import type { RefCategory, RefItem } from '@/lib/references'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'
import SpotlightCard from '@/components/ui/motion/SpotlightCard'
import BorderBeam from '@/components/ui/motion/BorderBeam'

interface Props {
  category: RefCategory
  index: number
}

function Chip({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-lg bg-surface-container px-2 py-1 font-body text-[11px] font-semibold text-on-surface-variant">
      <MaterialIcon icon={icon} size={12} className="text-primary/70" />
      {children}
    </span>
  )
}

function Card({ item, icon, featured }: { item: RefItem; icon: string; featured: boolean }) {
  const heroValue = item.units ?? item.classrooms
  const heroText = heroValue ? heroValue.toLocaleString('tr-TR') : ''
  const heroLabel = item.units ? 'Daire' : item.classrooms ? 'Derslik' : ''
  const highlight = featured || Boolean(item.summary)

  return (
    <SpotlightCard
      className={`group relative flex h-full min-h-[15rem] flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-ambient-xl ${
        highlight
          ? 'border-primary/40 bg-gradient-to-br from-primary-fixed/20 via-surface-container-lowest to-surface-container-lowest shadow-ambient-md'
          : 'border-outline-variant/40 bg-surface-container-lowest shadow-ambient hover:border-primary/30'
      }`}
      glow={highlight ? 'rgba(202,163,105,0.28)' : 'rgba(202,163,105,0.16)'}
    >
      {highlight && <BorderBeam duration={9} colorFrom="#CAA369" colorTo="#fbd092" />}

      {/* Üst ince altın vurgu (hover) */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-fixed to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Filigran sayı */}
      {heroValue && (
        <span className="pointer-events-none absolute -bottom-4 -right-2 select-none font-headline text-[6rem] font-bold leading-none text-primary/[0.05]">
          {heroText}
        </span>
      )}

      {/* Üst satır: ikon + Tamamlandı rozeti */}
      <div className="relative flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary-fixed/25 transition-transform duration-300 group-hover:scale-110">
          <MaterialIcon icon={icon} size={22} className="text-primary" />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/8 px-2.5 py-1 font-body text-[9px] font-bold uppercase tracking-[0.12em] text-primary">
          <MaterialIcon icon="check_circle" size={11} fill />
          Tamamlandı
        </span>
      </div>

      {/* İsim */}
      <div className="relative mt-4">
        <h3 className="font-headline text-base font-bold leading-snug text-on-surface line-clamp-2 min-h-[2.6em]">
          {item.name}
        </h3>
        {item.location && (
          <p className="mt-0.5 flex items-center gap-1 font-body text-[11px] text-on-surface-variant">
            <MaterialIcon icon="location_on" size={12} className="text-primary/70" />
            {item.location}
          </p>
        )}
      </div>

      {/* Başrol sayı */}
      <div className="relative mt-3">
        {heroValue ? (
          <div className="flex items-baseline gap-1.5">
            <span className="font-headline text-4xl md:text-5xl font-bold leading-none tracking-tight text-primary">
              {heroText}
            </span>
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.14em] text-primary/60">
              {heroLabel}
            </span>
          </div>
        ) : (
          <span className="font-headline text-lg font-bold text-on-surface">{item.note}</span>
        )}
      </div>

      {/* Metrik çipleri + tip */}
      <div className="relative mt-auto flex flex-wrap items-center gap-2 pt-5">
        {item.blocks ? <Chip icon="apartment">{item.blocks} {item.summary ? 'Bina' : 'Blok'}</Chip> : null}
        {item.commercial ? <Chip icon="storefront">{item.commercial} Ticari</Chip> : null}
        {item.note && heroValue ? <Chip icon="add_circle">{item.note}</Chip> : null}
        {item.types ? (
          <span className="ml-auto rounded-md bg-primary/10 px-2.5 py-1 font-body text-[11px] font-bold tracking-wide text-primary">
            {item.types}
          </span>
        ) : null}
      </div>
    </SpotlightCard>
  )
}

export default function CategorySection({ category, index }: Props) {
  const alt = index % 2 === 1
  // Kategorinin en büyük projesi (en çok daire) öne çıkarılır — özet kartı hariç
  const maxUnits = Math.max(0, ...category.items.filter((i) => !i.summary).map((i) => i.units ?? 0))

  return (
    <section className={alt ? 'bg-surface-container py-14 md:py-20' : 'py-14 md:py-20'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 flex items-end justify-between gap-4">
          <div>
            <SectionLabel>{`0${index + 1}`.slice(-2)} — Referans</SectionLabel>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-on-surface">
              {category.title}
            </h2>
          </div>
          <span className="hidden sm:flex items-center gap-2 rounded-full border border-outline-variant/30 px-4 py-1.5 font-body text-xs font-bold text-on-surface-variant">
            <MaterialIcon icon={category.icon} size={16} className="text-primary" />
            {category.items.filter((i) => !i.summary).length} proje
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {category.items.map((item) => (
            <Card
              key={item.name}
              item={item}
              icon={category.icon}
              featured={maxUnits > 0 && item.units === maxUnits}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
