import type { Metadata } from 'next'
import HeroSlider from '@/components/home/HeroSlider'
import StatsBand from '@/components/home/StatsBand'
import TrustMarquee from '@/components/home/TrustMarquee'
import VisionSection from '@/components/home/VisionSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProjectCarousel from '@/components/home/ProjectCarousel'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'EKİNCİ GROUP İNŞAAT | Kalite, Güven, Gelecek',
  description:
    '1968\'den beri Türkiye genelinde konut ve ticari projeler. Ekinci Şirketler Grubu ile güvenilir inşaat ve zamanında teslim.',
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBand />
      <TrustMarquee />
      <VisionSection />
      <ProjectCarousel />
      <ProcessSection />
      <CtaBanner />
    </>
  )
}
