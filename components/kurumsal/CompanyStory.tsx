import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { publicImage } from '@/lib/publicImage'

const STORY_IMG = publicImage('ekinci.jpg')

const miniStats = [
  { value: '50+', label: 'Tamamlanan Proje' },
  { value: '15+', label: 'İlde Faaliyet' },
  { value: '55+', label: 'Yıllık Deneyim' },
]

export default function CompanyStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="lg:col-span-7">
          <SectionLabel>Hikayemiz</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface leading-tight mb-8">
            Yarım asrı aşkın<br />
            <em className="not-italic text-primary">bir disiplin</em> ve<br />
            vizyon hikayesi
          </h2>
          <p className="text-base text-on-surface-variant font-body leading-relaxed mb-5">
            Ekinci Şirketler Grubu, Cuma Ekinci tarafından 1968 yılında kurulmuş köklü bir aile şirketidir. Türkiye&apos;nin çeşitli illerinde inşaat faaliyetleri yürütür; geleneksel güven ile modern projeleri birleştirmeyi ilke edinmiştir.
          </p>
          <p className="text-base text-on-surface-variant font-body leading-relaxed mb-10">
            Konut projelerinden ticari yapılara ve kentsel dönüşüme kadar geniş bir yelpazede, müşteri memnuniyetini ve zamanında teslimi önceliklendiriyoruz.
          </p>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-outline-variant/30">
            {miniStats.map(s => (
              <div key={s.label}>
                <p className="font-headline text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-[11px] font-body text-on-surface-variant mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-ambient-xl">
            <Image src={STORY_IMG} alt="EKİNCİ GROUP inşaat alanında çalışma" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
          </div>
          {/* Floating quote */}
          <div className="hidden lg:block absolute -bottom-8 -left-8 bg-surface-container-low rounded-2xl p-5 shadow-ambient-xl max-w-[200px]">
            <p className="font-headline text-xs italic text-primary leading-snug">
              &ldquo;Güven, inşa ettiğimiz her yapının temelidir.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
