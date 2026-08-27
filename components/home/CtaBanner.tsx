import Link from 'next/link'
import { COMPANY } from '@/lib/constants'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Reveal from '@/components/ui/motion/Reveal'
import Magnetic from '@/components/ui/motion/Magnetic'
import BorderBeam from '@/components/ui/motion/BorderBeam'
import SpotlightCard from '@/components/ui/motion/SpotlightCard'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

const ACTIONS = [
  {
    icon: 'call',
    eyebrow: 'Telefon',
    title: COMPANY.phone,
    desc: 'Pazartesi – Cumartesi, 09:00 – 18:00 arası ulaşabilirsiniz.',
    cta: 'Hemen Ara',
    href: `tel:${COMPANY.phone}`,
    external: false,
  },
  {
    icon: 'chat',
    eyebrow: 'WhatsApp',
    title: 'Hızlı Mesaj',
    desc: 'Proje bilgisi, fiyat teklifi veya randevu için bize yazın.',
    cta: 'Mesaj Gönder',
    href: `https://wa.me/${COMPANY.whatsapp}`,
    external: true,
  },
  {
    icon: 'location_on',
    eyebrow: 'Satış Ofisleri',
    title: 'Ankara · Siirt',
    desc: 'Showroom ziyareti için iletişim sayfasından randevu alabilirsiniz.',
    cta: 'Ofisleri Gör',
    href: '/iletisim',
    external: false,
  },
]

export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

      {/* Başlık */}
      <Reveal className="text-center mb-10 md:mb-14">
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary font-body mb-3">
          Bizimle İletişime Geçin
        </p>
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface tracking-tighter leading-tight mb-4">
          Bir adım ötede<br />
          <em className="not-italic text-primary">birlikte inşa</em> ediyoruz
        </h2>
        <p className="text-on-surface-variant font-body text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Konut veya ticari proje danışmanlığı için ekibimize ulaşın. Size en uygun yolu birlikte bulalım.
        </p>
      </Reveal>

      {/* Aksiyon Kartları */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8" stagger={0.12}>
        {ACTIONS.map((a) => {
          const cardClass =
            'group relative flex h-full flex-col rounded-3xl p-7 shadow-ambient-xl hover:shadow-ambient-2xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1'
          const inner = (
            <SpotlightCard className={cardClass} glow="rgba(202,163,105,0.18)">
              {/* İkon */}
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <MaterialIcon icon={a.icon} size={22} className="text-primary" />
              </div>

              {/* Metin */}
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary font-body mb-1.5">
                {a.eyebrow}
              </p>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3 leading-snug">
                {a.title}
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6 flex-1">
                {a.desc}
              </p>

              {/* CTA */}
              <span className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                {a.cta}
                <MaterialIcon icon="arrow_forward" size={15} />
              </span>
            </SpotlightCard>
          )
          return (
            <StaggerItem key={a.eyebrow} className="bg-surface-container-lowest rounded-3xl">
              {a.external ? (
                <a href={a.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {inner}
                </a>
              ) : (
                <Link href={a.href} className="block h-full">
                  {inner}
                </Link>
              )}
            </StaggerItem>
          )
        })}
      </StaggerContainer>

      {/* Alt bant */}
      <Reveal>
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-primary px-7 py-5 overflow-hidden">
          <BorderBeam duration={9} colorFrom="#fbd092" colorTo="#ffffff" size={280} />
          <p className="font-headline text-base font-bold text-on-primary text-center sm:text-left">
            Tüm sorularınız için iletişim sayfamıza göz atın.
          </p>
          <Magnetic className="shrink-0">
            <Link
              href="/iletisim"
              className="shrink-0 inline-flex items-center gap-2 bg-on-primary text-primary px-6 py-3 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity duration-200 group"
            >
              İletişim Sayfası
              <MaterialIcon icon="arrow_forward" size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Magnetic>
        </div>
      </Reveal>

    </section>
  )
}
