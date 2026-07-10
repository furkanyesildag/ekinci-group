import Image from 'next/image'
import { publicImage } from '@/lib/publicImage'

const HERO_IMG = publicImage('kurumsal-hero.png')

export default function KurumsalHero() {
  return (
    <section className="relative w-full h-screen min-h-[500px] md:min-h-[600px] overflow-hidden -mt-[72px]">
      <Image src={HERO_IMG} alt="EKİNCİ GROUP — kurumsal vizyon ve mimari" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-on-surface/50 via-on-surface/30 to-surface/80 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 pt-20">
        <p className="text-sm sm:text-[0.9375rem] md:text-base font-bold tracking-[0.22em] uppercase text-primary-fixed font-body mb-4">
          Est. 1968
        </p>
        <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-primary-fixed/50 mb-7 mx-auto rounded-full" />
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight mb-6 max-w-4xl">
          Yarım asrı aşkın<br />
          <em className="not-italic text-primary-fixed">güven</em> ve tecrübe
        </h1>
        <p className="text-sm md:text-lg text-white/70 font-body max-w-2xl leading-relaxed">
          1968&apos;den bu yana Türkiye&apos;nin çeşitli illerinde inşaat faaliyetleri yürütüyor; güven ve kalite ilkelerimizi koruyoruz.
        </p>
      </div>
    </section>
  )
}
