import type { Metadata } from 'next'
import { REF_CATEGORIES } from '@/lib/references'
import ReferencesHero from '@/components/referanslar/ReferencesHero'
import CategorySection from '@/components/referanslar/CategorySection'
import ReferencesSummary from '@/components/referanslar/ReferencesSummary'

export const metadata: Metadata = {
  title: 'Referanslar',
  description:
    'EKİNCİ GROUP İNŞAAT tamamlanan projeler: konut, ticari, TOKİ ve eğitim yapıları. Siirt, Muş, Iğdır, İstanbul, Ankara, Batman, Gaziantep ve Hatay’da binlerce daire ve ticari alan.',
}

export default function ReferanslarPage() {
  return (
    <>
      <ReferencesHero />
      {REF_CATEGORIES.map((category, i) => (
        <CategorySection key={category.key} category={category} index={i} />
      ))}
      <ReferencesSummary />
    </>
  )
}
