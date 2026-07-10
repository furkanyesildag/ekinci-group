import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedProjects } from '@/lib/projects'
import Badge from '@/components/ui/Badge'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Reveal from '@/components/ui/motion/Reveal'
import SpotlightCard from '@/components/ui/motion/SpotlightCard'

export default function ProjectCarousel() {
  const projects = getFeaturedProjects()

  return (
    <section className="bg-surface-container py-14 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel>Öne Çıkan Projeler</SectionLabel>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-on-surface">
                Seçkin Koleksiyonumuz
              </h2>
            </div>
            <Link href="/projeler" className="hidden md:inline-flex items-center gap-2 text-primary font-body font-semibold text-sm hover:gap-3 transition-all duration-300 group">
              Tüm Projeler
              <MaterialIcon icon="arrow_forward" size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Scroll container */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pl-4 sm:pl-6 lg:pl-[calc((100vw-80rem)/2+1.5rem)] pr-4 sm:pr-6 pb-4">
        {projects.map(project => (
          <Link key={project.slug} href={`/projeler/${project.slug}`}
            className="group relative shrink-0 w-[280px] sm:w-[360px] md:w-[480px] snap-start rounded-3xl overflow-hidden shadow-ambient hover:shadow-ambient-xl transition-all duration-500 hover:-translate-y-1">
            <SpotlightCard className="rounded-3xl">
              <div className="relative aspect-[16/10]">
                <Image src={project.heroImage.src} alt={project.heroImage.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="480px" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <Badge status={project.status} className="mb-3" />
                <h3 className="font-headline text-xl font-bold text-white tracking-tight mb-1">{project.name}</h3>
                <p className="flex items-center gap-1 text-xs text-white/70 font-body">
                  <MaterialIcon icon="location_on" size={14} className="text-primary-fixed" />
                  {project.location}
                </p>
              </div>
            </SpotlightCard>
          </Link>
        ))}

        {/* See all card */}
        <Link href="/projeler"
          className="group shrink-0 w-[200px] snap-start rounded-3xl bg-surface-container-high flex flex-col items-center justify-center gap-3 hover:bg-primary-fixed/30 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <MaterialIcon icon="arrow_forward" size={20} className="text-on-primary" />
          </div>
          <p className="text-sm font-body font-semibold text-on-surface-variant group-hover:text-primary transition-colors text-center px-4">
            Tüm Projeleri<br />Görüntüle
          </p>
        </Link>
      </div>

      <div className="mt-6 flex justify-center md:hidden">
        <Link href="/projeler" className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm">
          Tüm Projeler
          <MaterialIcon icon="arrow_forward" size={18} />
        </Link>
      </div>
    </section>
  )
}
