import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PROJECTS, sortProjectsByDisplayOrder } from '@/lib/projects'
import ProjectsHero from '@/components/projeler/ProjectsHero'
import ContactBar from '@/components/projeler/ContactBar'
import FilterBar from '@/components/projeler/FilterBar'
import ProjectGrid from '@/components/projeler/ProjectGrid'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Projelerimiz',
  description:
    'Ekinci Group’un tamamlanan, devam eden ve satıştaki konut ile ticari projeleri. Siirt ve Türkiye geneli.',
}

interface Props {
  searchParams: { filtre?: string }
}

export default function ProjelerPage({ searchParams }: Props) {
  const filtre = searchParams.filtre ?? ''

  const filtered = sortProjectsByDisplayOrder(
    PROJECTS.filter(p => {
      if (!filtre) return true
      return p.status === filtre || p.category === filtre
    }),
  )

  return (
    <>
      <ProjectsHero />
      <ContactBar />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Koleksiyon Arşivi</SectionLabel>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface">
              Projelerimiz
            </h1>
            <p className="font-headline text-lg italic text-on-surface-variant mt-2">
              {filtered.length} proje listeleniyor
            </p>
          </div>
          <Suspense>
            <FilterBar />
          </Suspense>
        </div>

        <ProjectGrid projects={filtered} />
      </section>
    </>
  )
}
