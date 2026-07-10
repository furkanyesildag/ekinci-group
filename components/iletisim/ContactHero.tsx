import Image from 'next/image'
import { publicImage } from '@/lib/publicImage'

const HERO_IMG = publicImage('iletisim-hero.png')

export default function ContactHero() {
  return (
    <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[380px] overflow-hidden -mt-[72px]">
      <Image src={HERO_IMG} alt="İletişim — EKİNCİ GROUP ofis" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-on-surface/50 via-on-surface/30 to-surface/80 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 pt-20">
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary-fixed/80 font-body mb-4">Bize Ulaşın</p>
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight mb-4">
          İletişim
        </h1>
        <p className="text-base text-white/70 font-body max-w-xl leading-relaxed">
          Uzman ekibimiz sorularınızı yanıtlamak, projelerimiz hakkında bilgi vermek ve yatırım danışmanlığı sunmak için hazır.
        </p>
        {/* Scroll line */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
