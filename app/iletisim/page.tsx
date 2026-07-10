import type { Metadata } from 'next'
import ContactHero from '@/components/iletisim/ContactHero'
import OfficeCards from '@/components/iletisim/OfficeCards'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Siirt merkez ofis ve Türkiye geneli projeler için iletişim. Ekinci Group ile görüşün.',
}

export default function IletisimPage() {
  return (
    <>
      <ContactHero />
      <OfficeCards />
    </>
  )
}
