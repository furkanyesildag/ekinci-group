'use client'

import { STATS } from '@/lib/constants'
import MaterialIcon from '@/components/ui/MaterialIcon'
import AnimatedCounter from '@/components/ui/motion/AnimatedCounter'
import BorderBeam from '@/components/ui/motion/BorderBeam'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

export default function StatsBand() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-4 md:-mt-8 mb-12 md:mb-16">
      <StaggerContainer
        stagger={0.09}
        className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4"
      >
        {STATS.map((stat, i) => {
          const hi = i === 2 // Tamamlanan Daire — vurgulu merkez
          return (
            <StaggerItem
              key={i}
              className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl px-3 py-6 md:py-8 text-center transition-all duration-300 ${
                hi
                  ? 'col-span-2 bg-primary text-on-primary shadow-primary lg:col-span-1 lg:-translate-y-3'
                  : 'bg-surface-container-lowest shadow-ambient-xl'
              }`}
            >
              {hi && <BorderBeam duration={7} colorFrom="#fbd092" colorTo="#ffffff" />}
              <MaterialIcon
                icon={stat.icon}
                size={26}
                fill
                weight={300}
                className={hi ? 'text-primary-fixed/90' : 'text-primary'}
              />
              <AnimatedCounter
                value={stat.value}
                className={`whitespace-nowrap font-headline text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${
                  hi ? 'text-on-primary' : 'text-primary'
                }`}
              />
              <span
                className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] font-body ${
                  hi ? 'text-on-primary/70' : 'text-on-surface-variant'
                }`}
              >
                {stat.label}
              </span>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </section>
  )
}
