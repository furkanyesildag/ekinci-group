import Image from 'next/image'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7VVzlXjqTtMzzbczDB3GLphxMylYUbgrmaDJnPbzRQIBZXbj89Uky4_9g8KHNqgVFTeqoLAy4Ry2feXOIdMy8aucC1lH4eadsw1SC03UCAGkikkMWtq029tdorUEwO3tYB5oRq81U3geNSLGqQreEUwz6x4Aesvc2cA1Dw10hiJLKZr4g3F5SCwMjgdgNZV62PivYvJlRgD_2GCW8BjaHl68XplWh2RIBqt621qtgVlkXhK9VXYi3wg7Ku0HXNLVc2idymim6Cqal'

export default function KurumsalHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden -mt-[72px]">
      <Image src={HERO_IMG} alt="EKİNCİ GROUP kurumsal bina" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-on-surface/50 via-on-surface/30 to-surface/80 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary-fixed/80 font-body mb-4">Est. 1974</p>
        <div className="w-12 h-px bg-primary-fixed/40 mb-6 mx-auto" />
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight mb-6 max-w-4xl">
          Yarım asrı aşkın<br />
          <em className="not-italic text-primary-fixed">güven</em> ve tecrübe
        </h1>
        <p className="text-base md:text-lg text-white/70 font-body max-w-2xl leading-relaxed">
          1974&apos;ten bu yana Türkiye&apos;nin inşaat sektörüne yön veriyor, her projemizde mükemmellik standartlarını yeniden belirliyoruz.
        </p>
      </div>
    </section>
  )
}
