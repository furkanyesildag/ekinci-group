import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Reveal from '@/components/ui/motion/Reveal'
import Aurora from '@/components/ui/motion/Aurora'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

const STEPS = [
  {
    no: '01',
    icon: 'draw',
    title: 'Planlama',
    desc: 'İhtiyaç analizi, fizibilite ve ruhsat süreçleriyle sağlam bir temel kuruyoruz.',
  },
  {
    no: '02',
    icon: 'architecture',
    title: 'Tasarım',
    desc: 'Mimari ve mühendislik ekiplerimiz estetiği işlevle buluşturan projeler üretir.',
  },
  {
    no: '03',
    icon: 'construction',
    title: 'İnşa',
    desc: 'Kaliteli malzeme ve kontrollü şantiye yönetimiyle güvenli yapılar inşa ederiz.',
  },
  {
    no: '04',
    icon: 'key',
    title: 'Teslim',
    desc: 'Zamanında anahtar teslimi ve teslim sonrası şeffaf müşteri desteği sunarız.',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-inverse-surface py-16 md:py-24 text-white">
      <Aurora dark />
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12 md:mb-16">
          <SectionLabel light>Nasıl Çalışıyoruz</SectionLabel>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Fikirden anahtara <em className="not-italic text-gradient-gold">dört adım</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm md:text-base text-white/60 leading-relaxed">
            Her projede aynı disiplinli süreci izliyor; şeffaflık ve zamanında teslim taahhüdümüzü koruyoruz.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" stagger={0.13}>
          {STEPS.map((s) => (
            <StaggerItem
              key={s.no}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-fixed/40 hover:bg-white/[0.06]"
            >
              <span className="font-headline text-5xl font-bold text-white/10 transition-colors duration-300 group-hover:text-primary-fixed/25">
                {s.no}
              </span>
              <div className="mt-4 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-fixed/10 transition-colors duration-300 group-hover:bg-primary-fixed/20">
                <MaterialIcon icon={s.icon} size={24} className="text-primary-fixed" />
              </div>
              <h3 className="font-headline text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="font-body text-sm leading-relaxed text-white/60">{s.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
