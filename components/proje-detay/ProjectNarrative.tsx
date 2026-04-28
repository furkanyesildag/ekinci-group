import Image from 'next/image'
import type { Project } from '@/types'
import SectionLabel from '@/components/ui/SectionLabel'

interface Props { project: Project }

export default function ProjectNarrative({ project }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="lg:col-span-7">
          <SectionLabel>Felsefe & Vizyon</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-8 leading-tight">
            {project.tagline}
          </h2>
          {project.narrative.map((para, i) => (
            <p key={i} className="text-base text-on-surface-variant font-body leading-relaxed mb-5">
              {para}
            </p>
          ))}
        </div>

        {/* Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-ambient-xl">
            <Image
              src={project.galleryImages[0]?.src ?? project.heroImage.src}
              alt={project.galleryImages[0]?.alt ?? project.heroImage.alt}
              fill className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
            />
          </div>
          {/* Circular quote */}
          <div className="hidden lg:flex absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary items-center justify-center shadow-primary-lg">
            <span className="text-on-primary font-headline text-3xl font-bold">&ldquo;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
