import type { Metadata } from 'next'
import ContactHero from '@/components/iletisim/ContactHero'
import OfficeCards from '@/components/iletisim/OfficeCards'
import ContactForm from '@/components/iletisim/ContactForm'
import MapSection from '@/components/iletisim/MapSection'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'İstanbul Levent, Bodrum ve Ankara ofislerimize ulaşın. 7/24 satış danışmanlarımız hizmetinizde.',
}

export default function IletisimPage() {
  return (
    <>
      <ContactHero />
      <OfficeCards />
      <ContactForm />
      <MapSection />
    </>
  )
}
