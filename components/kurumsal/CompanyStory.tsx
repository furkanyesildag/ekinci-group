import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'

const STORY_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-p_TdNSXU_Q-G8cZoOebv6AsWeuIB33tK32s99uJJV9vL1lyNz_LwgIplatu-6rO_Lx3dMogdF2LPhuVxqJ_4g3z43cZDSFsNwU2nOidAeZGfv00gvVkaCgz2KF_DdByIFWPFsL7Z6j1muSeDUIRbQbKbmYs8d41QvBJarTH6zvOc8-GkP8NScuNeRUPhc1Yt43VlImWmUcvx9he62HrqACD2XdRpzNOvl-85r8Kvane8FX5Pl0N7b2C9mHgqff-dttQwzeJd5cN5'

const miniStats = [
  { value: '120+', label: 'Tamamlanan Proje' },
  { value: '12',   label: 'Ulusal & Uluslararası Ödül' },
  { value: '50+',  label: 'Yıllık Sektör Deneyimi' },
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
            EKİNCİ GROUP, 1974 yılında İstanbul&apos;da küçük bir müteahhitlik firması olarak kurulmuştur. Kuruluşumuzdan bu yana güven, estetik ve kalite ilkeleri, her projemizin temel taşları olmaya devam etmektedir.
          </p>
          <p className="text-base text-on-surface-variant font-body leading-relaxed mb-10">
            Onlarca yıl boyunca edindiğimiz tecrübe, binlerce aileye teslim ettiğimiz yaşam alanları ve kazandığımız uluslararası ödüller, bugün Türkiye&apos;nin en prestijli inşaat şirketlerinden biri olmamızı sağlamıştır.
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
