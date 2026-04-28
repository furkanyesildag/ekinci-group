import type { Metadata } from 'next'
import KurumsalHero from '@/components/kurumsal/KurumsalHero'
import CompanyStory from '@/components/kurumsal/CompanyStory'
import ValuesGrid from '@/components/kurumsal/ValuesGrid'
import LeadershipGrid from '@/components/kurumsal/LeadershipGrid'
import SustainabilityBanner from '@/components/kurumsal/SustainabilityBanner'

export const metadata: Metadata = {
  title: 'Kurumsal',
  description: '1974\'ten bu yana güven, estetik ve kalite ilkeleriyle inşaat sektörünün öncüsü olan EKİNCİ GROUP\'u tanıyın.',
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
