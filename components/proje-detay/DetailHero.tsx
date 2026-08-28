import Image from 'next/image'
import type { Project } from '@/types'
import Badge from '@/components/ui/Badge'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props { project: Project }

export default function DetailHero({ project }: Props) {
  return (
    <section className="relative w-full h-screen min-h-[500px] md:min-h-[600px] overflow-hidden -mt-[72px]">
      <Image src={project.heroImage.src} alt={project.heroImage.alt} fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-on-surface/40 via-on-surface/20 to-on-surface/70 z-10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-surface to-transparent z-10" />

      {/* Location tag */}
      <div className="absolute top-24 sm:top-28 left-4 sm:left-8 z-20 flex items-center gap-2 bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
        <MaterialIcon icon="location_on" size={16} className="text-primary-fixed" />
        <span className="text-xs text-white/90 font-body font-medium">{project.location}</span>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-end h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32">
        <div>
          <Badge status={project.status} className="mb-4" />
          <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-3">
            {project.name}
          </h1>
          <p className="font-headline text-base md:text-xl italic text-primary-fixed/80 max-w-2xl">{project.tagline}</p>
          {project.catalogUrl && (
            <a
              href={project.catalogUrl}
              download
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-body text-sm font-semibold text-on-primary shadow-primary transition-all duration-300 hover:bg-primary-dim hover:shadow-primary-lg"
            >
              <MaterialIcon icon="download" size={18} className="text-primary-fixed" />
              Katalog İndir
            </a>
          )}
        </div>
      </div>

      {/* Year tag */}
      <div className="absolute bottom-20 md:bottom-28 right-4 sm:right-8 z-20">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-body">{project.year}</span>
      </div>
    </section>
  )
}
