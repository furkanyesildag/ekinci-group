import Image from 'next/image'
import Link from 'next/link'
import { PROJECT_IMAGES } from '@/lib/projects'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Reveal from '@/components/ui/motion/Reveal'
import TiltCard from '@/components/ui/motion/TiltCard'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

const features = [
  { icon: 'verified', label: 'Kalite odaklı işçilik', desc: 'Şantiye ve teslim süreçlerinde kontrollü üretim' },
  { icon: 'trending_up', label: 'Güvenilir teslim', desc: 'Planlı iş programı ve şeffaf iletişim' },
]

export default function VisionSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        {/* Image */}
        <Reveal direction="right" className="w-full lg:w-5/12 shrink-0" distance={40}>
          <TiltCard max={7} lift={10}>
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-ambient-xl">
              <Image
                src={PROJECT_IMAGES.vision}
                alt="EKİNCİ GROUP — modern konut ve kurumsal kimlik"
                fill
                className="object-cover object-center"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-on-surface/50 via-on-surface/10 to-transparent" />
              <div
                className="absolute bottom-4 right-4 z-10 hidden max-w-[220px] rounded-2xl border border-white/15 bg-surface/93 p-5 shadow-ambient-lg backdrop-blur-md lg:block"
                style={{ transform: 'translateZ(50px)' }}
              >
                <p className="font-headline text-sm italic text-primary leading-snug">
                  &ldquo;Her yapı, bir neslin güvenini taşır.&rdquo;
                </p>
                <p className="mt-2 font-body text-[10px] uppercase tracking-wider text-on-surface-variant">
                  — EKİNCİ GROUP
                </p>
              </div>
            </div>
          </TiltCard>
          <div className="mt-4 rounded-2xl border border-outline-variant/25 bg-surface-container-low p-5 shadow-ambient-lg lg:hidden">
            <p className="font-headline text-sm italic text-primary leading-snug">
              &ldquo;Her yapı, bir neslin güvenini taşır.&rdquo;
            </p>
            <p className="mt-2 font-body text-[10px] uppercase tracking-wider text-on-surface-variant">
              — EKİNCİ GROUP
            </p>
          </div>
        </Reveal>

        {/* Content */}
        <div className="w-full lg:w-7/12">
          <Reveal>
            <SectionLabel>Vizyonumuz</SectionLabel>
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-on-surface leading-tight mb-6">
              Kalite, güven ve<br />
              <em className="not-italic text-primary">mükemmellik</em> üzerine<br />
              inşa ediyoruz
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-on-surface-variant font-body leading-relaxed mb-4">
              1968&apos;den bu yana Türkiye&apos;nin dört bir yanında konut, ticari yapı ve taahhüt işleri üreten Ekinci Şirketler Grubu olarak güven ve sürdürülebilir kaliteyi önceliklendiriyoruz.
            </p>
            <p className="text-base text-on-surface-variant font-body leading-relaxed mb-10">
              Ankara, İstanbul ve Siirt&apos;teki operasyonlarımızla tamamladığımız projeler, gerek konut gerek ticari alanda güvenilir teslim ve zamanında sonuç odaklıdır.
            </p>
          </Reveal>

          {/* Features */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10" stagger={0.12}>
            {features.map(f => (
              <StaggerItem key={f.icon} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                  <MaterialIcon icon={f.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-on-surface mb-0.5">{f.label}</p>
                  <p className="font-body text-xs text-on-surface-variant">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.15}>
            <Link href="/kurumsal" className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm hover:gap-3 transition-all duration-300 group">
              Kurumsal Hikayemiz
              <MaterialIcon icon="arrow_forward" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
