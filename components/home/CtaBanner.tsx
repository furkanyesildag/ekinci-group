import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="relative bg-inverse-surface rounded-[2.5rem] overflow-hidden px-10 py-16 md:px-16 md:py-20">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #fbd092 0%, transparent 70%)' }} />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary-fixed/70 font-body mb-4">Hayalinizdeki Eve Kavuşun</p>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight">
              Bir sonraki büyük<br />
              adımı birlikte<br />
              <em className="not-italic text-primary-fixed">atalım</em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
            <Link href="/projeler"
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-primary-dim shadow-primary transition-all duration-300 whitespace-nowrap">
              <MaterialIcon icon="apartment" size={18} className="text-primary-fixed" />
              Projeleri İncele
            </Link>
            <Link href="/iletisim"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/90 px-8 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-white/10 transition-all duration-300 whitespace-nowrap">
              <MaterialIcon icon="call" size={18} />
              Bizi Arayın
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
