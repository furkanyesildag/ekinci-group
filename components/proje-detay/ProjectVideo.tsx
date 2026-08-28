'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Project } from '@/types'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props { project: Project }

export default function ProjectVideo({ project }: Props) {
  const [play, setPlay] = useState(false)
  if (!project.videoUrl) return null
  const poster = project.galleryImages[0]?.src ?? project.heroImage.src

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="mb-8 md:mb-10 text-center">
        <SectionLabel className="mx-auto w-fit">Proje Tanıtımı</SectionLabel>
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-on-surface">
          Videoyla Keşfedin
        </h2>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-ambient-xl bg-inverse-surface">
        {play ? (
          <video
            src={project.videoUrl}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <button
            onClick={() => setPlay(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label="Tanıtım videosunu oynat"
          >
            <Image src={poster} alt={`${project.name} tanıtım videosu`} fill className="object-cover" sizes="100vw" />
            <span className="absolute inset-0 bg-on-surface/40 transition-colors duration-300 group-hover:bg-on-surface/30" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/90 shadow-primary-lg transition-transform duration-300 group-hover:scale-110">
              <MaterialIcon icon="play_arrow" size={40} fill className="text-on-primary" />
            </span>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
              İzlemek için tıklayın
            </span>
          </button>
        )}
      </div>
    </section>
  )
}
