import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

export default function ReferencesSummary() {
  return (
    <section className="pb-14 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </section>
  )
}
