import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Aurora from '@/components/ui/motion/Aurora'
import { REF_FOOTNOTE } from '@/lib/references'

const EXTRA = [
  { value: '39', label: 'Bina', icon: 'domain' },
  { value: '1.330', label: 'Daire', icon: 'meeting_room' },
  { value: '120', label: 'Ticari Alan', icon: 'storefront' },
]

export default function ReferencesSummary() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ek tamamlanan yapılar */}
        <div className="relative overflow-hidden rounded-[2rem] bg-inverse-surface p-8 md:p-14 text-white">
          <Aurora dark />
          <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative z-10">
            <p className="text-center font-body text-sm md:text-base leading-relaxed text-white/70 max-w-3xl mx-auto">
              {REF_FOOTNOTE}
            </p>
            <div className="mt-10 grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">
              {EXTRA.map((s) => (
                <div key={s.label} className="text-center">
                  <MaterialIcon icon={s.icon} size={24} className="text-primary-fixed mb-2" />
                  <span className="block font-headline text-3xl md:text-5xl font-bold text-white tracking-tight">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-[10px] md:text-xs font-bold uppercase tracking-[0.14em] text-white/50 font-body">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-2xl bg-primary px-7 py-6 md:px-10">
            <div>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-on-primary">
                Siz de Ekinci güvencesiyle tanışın
              </h3>
              <p className="mt-1 font-body text-sm text-on-primary/80">
                Yeni projelerimiz ve yatırım fırsatları için ekibimize ulaşın.
              </p>
            </div>
            <Link
              href="/iletisim"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-on-primary px-6 py-3 font-body text-sm font-semibold text-primary transition-opacity duration-200 hover:opacity-90 group"
            >
              İletişime Geç
              <MaterialIcon icon="arrow_forward" size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
