import type { Project } from '@/types'
import ProjectCard from './ProjectCard'
import MaterialIcon from '@/components/ui/MaterialIcon'
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
    </div>
  )
}
