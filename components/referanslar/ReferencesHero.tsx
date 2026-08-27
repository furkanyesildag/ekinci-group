import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'
import AnimatedCounter from '@/components/ui/motion/AnimatedCounter'
import BorderBeam from '@/components/ui/motion/BorderBeam'
import Aurora from '@/components/ui/motion/Aurora'
import Reveal from '@/components/ui/motion/Reveal'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'
import { REF_STATS } from '@/lib/references'

export default function ReferencesHero() {
  return (
    <section className="relative overflow-hidden bg-inverse-surface text-white -mt-[72px] pt-32 pb-16 md:pt-40 md:pb-24">
      <Aurora dark />
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <SectionLabel light>Referanslar</SectionLabel>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
            Tamamlanan <em className="not-italic text-gradient-gold">Projeler</em>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-body text-sm md:text-base text-white/60 leading-relaxed">
            1968’den bu yana Ekinci Şirketler Grubu; konut, ticari, TOKİ ve eğitim yapılarında
            binlerce aileye güvenle teslim edilmiş projeler üretti. İşte bir kısmı.
          </p>
        </Reveal>

        {/* İstatistik kutuları */}
        <StaggerContainer className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5" stagger={0.1}>
          {REF_STATS.map((s, i) => (
            <StaggerItem
              key={s.label}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7 text-center backdrop-blur-sm"
            >
              {i === 0 && <BorderBeam duration={8} colorFrom="#fbd092" colorTo="#ffffff" />}
              <MaterialIcon icon={s.icon} size={26} className="text-primary-fixed mb-3" />
              <AnimatedCounter
                value={s.value}
                className="block font-headline text-3xl md:text-4xl font-bold text-white tracking-tight"
              />
              <span className="mt-1 block text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] text-white/55 font-body">
                {s.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
