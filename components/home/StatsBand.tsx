'use client'

import { STATS } from '@/lib/constants'
import MaterialIcon from '@/components/ui/MaterialIcon'
import AnimatedCounter from '@/components/ui/motion/AnimatedCounter'
import BorderBeam from '@/components/ui/motion/BorderBeam'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

export default function StatsBand() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 -mt-4 md:-mt-8 mb-12 md:mb-16">
      <StaggerContainer
        stagger={0.12}
        className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden shadow-ambient-xl divide-y md:divide-y-0"
      >
        {STATS.map((stat, i) => (
          <StaggerItem
            key={i}
            className={`relative flex flex-col items-center text-center px-6 md:px-8 py-8 md:py-10 gap-3 transition-all duration-300 ${
              i === 1
                ? 'bg-primary text-on-primary md:-translate-y-6 rounded-2xl z-10 shadow-primary'
                : 'bg-surface-container-lowest'
            }`}
          >
            {i === 1 && <BorderBeam duration={7} colorFrom="#fbd092" colorTo="#ffffff" />}
            <MaterialIcon icon={stat.icon} size={28} fill weight={300}
              className={i === 1 ? 'text-primary-fixed/90' : 'text-primary'} />
            <AnimatedCounter
              value={stat.value}
              className={`font-headline text-4xl font-bold tracking-tight ${i === 1 ? 'text-on-primary' : 'text-primary'}`}
            />
            <span className={`text-[11px] font-bold tracking-[0.15em] uppercase font-body ${i === 1 ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>
              {stat.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
