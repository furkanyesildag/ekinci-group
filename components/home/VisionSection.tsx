import Image from 'next/image'
import Link from 'next/link'
import { PROJECT_IMAGES } from '@/lib/projects'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'

const features = [
  { icon: 'verified', label: 'Sertifikalı Kalite', desc: 'ISO 9001 & TSE standartları' },
  { icon: 'trending_up', label: 'Değer Artışı', desc: 'Ortalama %40 yatırım getirisi' },
]

export default function VisionSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        {/* Image */}
        <div className="w-full lg:w-5/12 relative shrink-0">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-ambient-xl">
            <Image src={PROJECT_IMAGES.vision} alt="EKİNCİ GROUP inşaat sahasında kalite denetimi" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/30 to-transparent" />
          </div>
          {/* Floating quote */}
          <div className="hidden lg:block absolute -bottom-8 -right-8 bg-surface-container-low rounded-2xl p-6 shadow-ambient-xl max-w-[220px]">
            <p className="font-headline text-sm italic text-primary leading-snug">
              &ldquo;Her yapı, bir neslin güvenini taşır.&rdquo;
            </p>
            <p className="text-[10px] text-on-surface-variant font-body mt-2 tracking-wider uppercase">
              — EKİNCİ GROUP
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-7/12">
          <SectionLabel>Vizyonumuz</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-on-surface leading-tight mb-6">
            Kalite, güven ve<br />
            <em className="not-italic text-primary">mükemmellik</em> üzerine<br />
            inşa ediyoruz
          </h2>
          <p className="text-base text-on-surface-variant font-body leading-relaxed mb-4">
            1974&apos;ten bu yana Türkiye&apos;nin önde gelen inşaat firmalarından biri olarak, her projemizde mühendisliğin ve estetiğin en yüksek standartlarını bir araya getiriyoruz.
          </p>
          <p className="text-base text-on-surface-variant font-body leading-relaxed mb-10">
            İstanbul, Bodrum ve Ankara&apos;da hayata geçirdiğimiz projeler, sakinlerine yalnızca bir yaşam alanı değil; geleceğe sürdürülebilir bir yatırım sunuyor.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {features.map(f => (
              <div key={f.icon} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
                  <MaterialIcon icon={f.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-on-surface mb-0.5">{f.label}</p>
                  <p className="font-body text-xs text-on-surface-variant">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/kurumsal" className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm hover:gap-3 transition-all duration-300 group">
            Kurumsal Hikayemiz
            <MaterialIcon icon="arrow_forward" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
