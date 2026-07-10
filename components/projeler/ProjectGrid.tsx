import type { Project } from '@/types'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Magnetic from '@/components/ui/motion/Magnetic'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

interface Props {
  projects: Project[]
}

/** Tüm kartlarda aynı en-boy; satır hizası düzgün */
const CARD_ASPECT = 'aspect-[16/10]'

export default function ProjectGrid({ projects }: Props) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 md:py-24">
        <MaterialIcon icon="search_off" size={48} className="text-outline-variant mb-4" />
        <p className="font-body text-on-surface-variant">Bu filtrede proje bulunamadı.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch" stagger={0.08}>
        {projects.map(project => (
          <StaggerItem key={project.slug} className="min-w-0 flex">
            <ProjectCard project={project} imageAspect={CARD_ASPECT} className="w-full" />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="text-center pt-10">
        <Magnetic className="inline-block">
          <Link href="/iletisim"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-primary-dim shadow-primary hover:shadow-primary-lg transition-all duration-300">
            <MaterialIcon icon="mail" size={18} className="text-primary-fixed" />
            Özel Portföy Talep Et
          </Link>
        </Magnetic>
      </div>
    </div>
  )
}
