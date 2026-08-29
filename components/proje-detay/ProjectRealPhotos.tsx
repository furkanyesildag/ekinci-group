import Image from 'next/image'
import type { Project } from '@/types'
import SectionLabel from '@/components/ui/SectionLabel'

interface Props { project: Project }

export default function ProjectRealPhotos({ project }: Props) {
  const photos = project.realPhotos
  if (!photos || photos.length === 0) return null

  return (
    <section className="bg-surface-container py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10 text-center">
          <SectionLabel className="mx-auto w-fit">Tamamlanan Projeden</SectionLabel>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-on-surface">
            Gerçek Görünüm
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((p, i) => (
            <div
              key={i}
              className="group relative aspect-video overflow-hidden rounded-2xl shadow-ambient"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
