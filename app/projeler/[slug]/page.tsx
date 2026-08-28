import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PROJECTS, getProjectBySlug } from '@/lib/projects'
import DetailHero from '@/components/proje-detay/DetailHero'
import ProjectNarrative from '@/components/proje-detay/ProjectNarrative'
import BentoGallery from '@/components/proje-detay/BentoGallery'
import ProjectVideo from '@/components/proje-detay/ProjectVideo'
import AmenitiesGrid from '@/components/proje-detay/AmenitiesGrid'
import FloorPlans from '@/components/proje-detay/FloorPlans'
import LocationSection from '@/components/proje-detay/LocationSection'
import InquiryForm from '@/components/proje-detay/InquiryForm'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: project.name,
    description: project.tagline + ' — ' + project.description,
  }
}

export default function ProjeDetayPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return (
    <>
      <DetailHero project={project} />
      <ProjectNarrative project={project} />
      <BentoGallery project={project} />
      <ProjectVideo project={project} />
      <AmenitiesGrid project={project} />
      <FloorPlans project={project} />
      <LocationSection project={project} />
      <InquiryForm project={project} />
    </>
  )
}
