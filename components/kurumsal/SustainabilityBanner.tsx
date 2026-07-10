import Image from 'next/image'
import Link from 'next/link'
import { publicImage } from '@/lib/publicImage'
import MaterialIcon from '@/components/ui/MaterialIcon'

const SUST_IMG = publicImage('sustainability-hero.png')

export default function SustainabilityBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
      <div className="bg-[#1a1c1a] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row min-h-[400px]">
        {/* Text */}
        <div className="flex-1 p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary-fixed/60 font-body mb-4">Sürdürülebilirlik</p>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tighter leading-tight mb-6">
            Geleceğe<br />
            <em className="not-italic text-primary-fixed">sorumlu</em> inşa<br />
            ediyoruz
          </h2>
          <p className="text-white/60 font-body text-sm leading-relaxed mb-8 max-w-sm">
            Her projemizde çevresel etkiyi en aza indirgeyecek malzeme ve yöntemleri tercih ediyor, karbon ayak izimizi sürekli azaltmayı hedefliyoruz.
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 text-primary-fixed font-body font-semibold text-sm hover:gap-3 transition-all duration-300 group w-fit">
            Sürdürülebilirlik Raporumuz
            <MaterialIcon icon="arrow_forward" size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-1/2 min-h-[280px] lg:min-h-0">
          <Image src={SUST_IMG} alt="EKİNCİ GROUP proje girişi ve peyzaj" fill className="object-cover opacity-75" sizes="(max-width:1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1a]/60 to-transparent lg:bg-gradient-to-l" />
        </div>
      </div>
    </section>
  )
}
