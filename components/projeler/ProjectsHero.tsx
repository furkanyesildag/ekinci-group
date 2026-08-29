'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { getFeaturedProjects } from '@/lib/projects'
import Badge from '@/components/ui/Badge'
import MaterialIcon from '@/components/ui/MaterialIcon'

export default function ProjectsHero() {
  const projects = getFeaturedProjects().slice(0, 3)
  const [current, setCurrent] = useState(0)
  const proj = projects[current]

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] min-h-[460px] overflow-hidden -mt-[72px]">
      {projects.map((p, i) => (
        <div key={p.slug} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={p.heroImage.src} alt={p.heroImage.alt} fill className="object-cover" sizes="100vw" priority={i === 0} />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-on-surface/70 via-on-surface/40 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-surface to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-end h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="max-w-2xl">
          <Badge status={proj.status} className="mb-4" />
          <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight mb-3">
            {proj.name}
          </h2>
          <p className="font-headline text-base md:text-lg italic text-primary-fixed/80 mb-6">{proj.tagline}</p>
          <Link href={`/projeler/${proj.slug}`}
            className="inline-flex items-center gap-2 border border-white/40 text-white text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
            Projeyi İncele
            <MaterialIcon icon="arrow_forward" size={16} />
          </Link>
        </div>
      </div>

      {/* Prev/Next */}
      <div className="absolute bottom-8 right-4 sm:right-8 z-20 flex gap-3">
        <button onClick={() => setCurrent((current - 1 + projects.length) % projects.length)}
          className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
          <MaterialIcon icon="arrow_back" size={18} />
        </button>
        <button onClick={() => setCurrent((current + 1) % projects.length)}
          className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-primary-dim transition-colors">
          <MaterialIcon icon="arrow_forward" size={18} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {projects.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-white/40'}`} />
        ))}
      </div>
    </section>
  )
}
