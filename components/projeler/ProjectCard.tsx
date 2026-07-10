import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/types'
import Badge from '@/components/ui/Badge'
import MaterialIcon from '@/components/ui/MaterialIcon'
import SpotlightCard from '@/components/ui/motion/SpotlightCard'

interface Props {
  project: Project
  className?: string
  imageAspect?: string
}

export default function ProjectCard({ project, className = '', imageAspect = 'aspect-video' }: Props) {
  return (
    <Link href={`/projeler/${project.slug}`}
      className={`group relative rounded-2xl overflow-hidden shadow-ambient hover:shadow-ambient-xl transition-all duration-500 hover:-translate-y-1.5 block ${className}`}>
      <SpotlightCard className="h-full rounded-2xl">
        {/* Altın hover halkası */}
        <span className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-transparent transition-colors duration-500 group-hover:ring-primary-fixed/40" />
        <div className={`relative w-full ${imageAspect}`}>
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/10 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <Badge status={project.status} className="mb-3" />
          <h3 className="font-headline text-xl font-bold text-white tracking-tight mb-1 group-hover:text-primary-fixed transition-colors">{project.name}</h3>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-xs text-white/70 font-body">
              <MaterialIcon icon="location_on" size={14} className="text-primary-fixed" />
              {project.location}
            </p>
            <span className="text-[10px] tracking-widest uppercase text-white/50 font-body font-bold">{project.category}</span>
          </div>
        </div>
      </SpotlightCard>
    </Link>
  )
}
