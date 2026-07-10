import Image from 'next/image'
import type { Project } from '@/types'
import SectionLabel from '@/components/ui/SectionLabel'

interface Props { project: Project }

export default function LocationSection({ project }: Props) {
  return (
    <section className="bg-surface-container-low py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <SectionLabel>Konum & Çevre</SectionLabel>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-on-surface">
            {project.city}&apos;nin Kalbinde
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Proximity list */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {project.proximity.map((point, i) => (
              <div key={i} className="flex items-start gap-5">
                <span className="font-headline text-4xl font-bold text-primary/20 leading-none tabular-nums w-12 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-body font-semibold text-sm text-on-surface">{point.label}</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary font-body">{point.distance}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-body">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map image */}
          <div className="lg:col-span-8 relative h-[280px] sm:h-[360px] lg:h-[500px] rounded-3xl overflow-hidden shadow-ambient-xl">
            <Image
              src={project.galleryImages[2]?.src ?? project.heroImage.src}
              alt={`${project.name} konumu`}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              sizes="(max-width:1024px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 to-transparent" />
            {/* Map marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-5 h-5">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <span className="absolute inset-1 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
