import type { Project } from '@/types'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props {
  projects: Project[]
}

export default function ProjectGrid({ projects }: Props) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-24">
        <MaterialIcon icon="search_off" size={48} className="text-outline-variant mb-4" />
        <p className="font-body text-on-surface-variant">Bu filtrede proje bulunamadı.</p>
      </div>
    )
  }

  const [first, second, ...rest] = projects

  return (
    <div className="space-y-6">
      {/* Row 1: asymmetric 8/4 */}
      {first && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <ProjectCard project={first} imageAspect="aspect-[16/10]" />
          </div>
          {second && (
            <div className="md:col-span-4 md:pt-16">
              <ProjectCard project={second} imageAspect="aspect-[3/4]" />
            </div>
          )}
        </div>
      )}

      {/* Remaining rows: 6/6 with alternating offsets */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <div key={project.slug} className={i % 2 === 1 ? 'md:-mt-12' : ''}>
              <ProjectCard project={project} imageAspect="aspect-video" />
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="text-center pt-10">
        <Link href="/iletisim"
          className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-primary-dim shadow-primary transition-all duration-300">
          <MaterialIcon icon="mail" size={18} className="text-primary-fixed" />
          Özel Portföy Talep Et
        </Link>
      </div>
    </div>
  )
}
