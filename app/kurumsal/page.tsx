import type { Metadata } from 'next'
import KurumsalHero from '@/components/kurumsal/KurumsalHero'
import CompanyStory from '@/components/kurumsal/CompanyStory'
import ValuesGrid from '@/components/kurumsal/ValuesGrid'
import LeadershipGrid from '@/components/kurumsal/LeadershipGrid'
import SustainabilityBanner from '@/components/kurumsal/SustainabilityBanner'

export const metadata: Metadata = {
  title: 'Kurumsal',
  description:
    '1968\'den beri Türkiye\'de inşaat faaliyeti yürüten Ekinci Şirketler Grubu; güven, kalite ve müşteri memnuniyeti.',
}

export default function KurumsalPage() {
  return (
    <>
      <KurumsalHero />
      <CompanyStory />
      <ValuesGrid />
      <LeadershipGrid />
      <SustainabilityBanner />
    </>
  )
}
