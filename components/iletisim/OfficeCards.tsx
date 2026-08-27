import Image from 'next/image'
import { CITY_OFFICES } from '@/lib/constants'
import MaterialIcon from '@/components/ui/MaterialIcon'
import SpotlightCard from '@/components/ui/motion/SpotlightCard'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

export default function OfficeCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:-mt-16 relative z-10 pb-4">
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto" stagger={0.12}>
        {CITY_OFFICES.map(office => (
          <StaggerItem key={office.city} className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-ambient-xl hover:shadow-ambient-2xl transition-shadow duration-300">
            <SpotlightCard className="group flex h-full flex-col rounded-3xl">

              {/* Görsel */}
              <div className="relative h-52 sm:h-60 overflow-hidden shrink-0">
                <Image
                  src={office.imageUrl}
                  alt={`EKİNCİ GROUP — ${office.city}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
              </div>

              {/* İçerik */}
              <div className="p-7 flex flex-col gap-4 flex-1">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary font-body mb-2">
                    {office.label}
                  </p>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">{office.city}</h3>

                  {/* Adres — Maps linki */}
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-sm text-on-surface-variant hover:text-primary transition-colors group/link"
                  >
                    <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MaterialIcon icon="location_on" size={14} className="text-primary" />
                    </span>
                    <span className="leading-relaxed group-hover/link:underline underline-offset-2">
                      {office.address}
                    </span>
                  </a>
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-outline-variant/20">
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-2.5 text-sm text-on-surface hover:text-primary transition-colors group/link"
                  >
                    <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MaterialIcon icon="call" size={14} className="text-primary" />
                    </span>
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">{office.phone}</span>
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2.5 text-sm text-on-surface hover:text-primary transition-colors group/link"
                  >
                    <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MaterialIcon icon="mail" size={14} className="text-primary" />
                    </span>
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">{office.email}</span>
                  </a>
                </div>
              </div>

            </SpotlightCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
