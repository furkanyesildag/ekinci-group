import { STATS } from '@/lib/constants'
import MaterialIcon from '@/components/ui/MaterialIcon'

export default function StatsBand() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 -mt-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 rounded-2xl overflow-hidden shadow-ambient-xl">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-center px-8 py-10 gap-3 transition-all duration-300 ${
              i === 1
                ? 'bg-primary text-on-primary md:-translate-y-6 rounded-2xl z-10 shadow-primary'
                : 'bg-surface-container-lowest'
            }`}
          >
            <MaterialIcon icon={stat.icon} size={28} fill weight={300}
              className={i === 1 ? 'text-primary-fixed/90' : 'text-primary'} />
            <span className={`font-headline text-4xl font-bold tracking-tight ${i === 1 ? 'text-on-primary' : 'text-primary'}`}>
              {stat.value}
            </span>
            <span className={`text-[11px] font-bold tracking-[0.15em] uppercase font-body ${i === 1 ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
