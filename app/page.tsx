import type { Metadata } from 'next'
import HeroSlider from '@/components/home/HeroSlider'
import StatsBand from '@/components/home/StatsBand'
import VisionSection from '@/components/home/VisionSection'
import ProjectCarousel from '@/components/home/ProjectCarousel'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'EKİNCİ GROUP İNŞAAT | Geleceğin Yaşam Alanlarını İnşa Ediyoruz',
  description: '50 yılı aşkın tecrübemizle İstanbul, Bodrum ve Ankara\'da lüks konut ve ticari projeler geliştiriyoruz. 2.5 milyon m² tamamlanmış alan.',
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBand />
      <VisionSection />
      <ProjectCarousel />
      <CtaBanner />
    </>
  )
}
