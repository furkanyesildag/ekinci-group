import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { publicImage } from '@/lib/publicImage'
import Reveal from '@/components/ui/motion/Reveal'
import TiltCard from '@/components/ui/motion/TiltCard'
import AnimatedCounter from '@/components/ui/motion/AnimatedCounter'

const STORY_IMG = publicImage('ekinci-brand-portrait.png')

const miniStats = [
  { value: '50+', label: 'Tamamlanan Proje' },
  { value: '15+', label: 'İlde Faaliyet' },
  { value: '55+', label: 'Yıllık Deneyim' },
]

export default function CompanyStory() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <Reveal className="lg:col-span-7">
          <SectionLabel>Hikayemiz</SectionLabel>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-on-surface leading-tight mb-6 md:mb-8">
            Yarım asrı aşkın<br />
            <em className="not-italic text-primary">bir disiplin</em> ve<br />
            vizyon hikayesi
          </h2>
          <p className="text-base text-on-surface-variant font-body leading-relaxed mb-5">
            Şirketimiz, Cuma Ekinci tarafından 1968 yılında kurulmuş köklü bir aile şirketidir. Servet Ekinci yönetiminde Türkiye&apos;nin birçok ilinde inşaat sektöründe faaliyetlerini sürdürmekte; geleneksel güveni modern projelerle birleştirmeyi ilke edinmiştir.
          </p>
          <p className="text-base text-on-surface-variant font-body leading-relaxed mb-10">
            Konut projelerinden ticari yapılara ve kentsel dönüşüme kadar geniş bir yelpazede, müşteri memnuniyetini ve zamanında teslimi önceliklendiriyoruz.
          </p>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8 border-t border-outline-variant/30">
            {miniStats.map(s => (
              <div key={s.label}>
                <AnimatedCounter value={s.value} className="font-headline text-3xl font-bold text-primary" />
                <p className="text-[11px] font-body text-on-surface-variant mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Image */}
        <Reveal direction="left" className="lg:col-span-5" distance={40}>
          <TiltCard max={6} lift={8}>
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-ambient-xl">
              <Image
                src={STORY_IMG}
                alt="EKİNCİ GROUP — modern konut ve kurumsal kimlik"
                fill
                className="object-cover object-center"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-on-surface/45 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 z-10 hidden max-w-[210px] rounded-2xl border border-white/15 bg-surface/93 p-5 shadow-ambient-lg backdrop-blur-md lg:block" style={{ transform: 'translateZ(45px)' }}>
                <p className="font-headline text-xs italic text-primary leading-snug">
                  &ldquo;Güven, inşa ettiğimiz her yapının temelidir.&rdquo;
                </p>
              </div>
            </div>
          </TiltCard>
          <div className="mt-4 rounded-2xl border border-outline-variant/25 bg-surface-container-low p-5 shadow-ambient-lg lg:hidden">
            <p className="font-headline text-xs italic text-primary leading-snug">
              &ldquo;Güven, inşa ettiğimiz her yapının temelidir.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
