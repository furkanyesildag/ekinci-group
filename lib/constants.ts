import type { NavLink, OfficeLocation } from '@/types'
import { publicImage } from '@/lib/publicImage'

export const NAV_LINKS: NavLink[] = [
  { label: 'Projeler', href: '/projeler' },
  { label: 'Kurumsal', href: '/kurumsal' },
  { label: 'İletişim', href: '/iletisim' },
]

export const COMPANY = {
  name: 'EKİNCİ GROUP İNŞAAT',
  nameShort: 'EKİNCİ GROUP',
  tagline: 'Kalite, Güven, Gelecek',
  founded: 1968,
  phone: '+90 545 735 91 23',
  whatsapp: '905457359123',
  email: 'info@ekincigroup.com',
  address: 'Siirt, Türkiye — Merkez Ofis',
}

export const STATS = [
  { value: '55+', label: 'Yıllık Deneyim', icon: 'workspace_premium' },
  { value: '2.000+', label: 'Tamamlanan Daire', icon: 'apartment' },
  { value: '50+', label: 'Tamamlanan Proje', icon: 'foundation' },
]

export const OFFICES: OfficeLocation[] = [
  {
    id: 'hq',
    name: 'Genel Merkez',
    address: 'Siirt\nMerkez Ofis\nTürkiye',
    phone: COMPANY.phone,
    email: COMPANY.email,
    imageUrl: publicImage('ekinci.jpg'),
    type: 'HQ',
  },
  {
    id: 'satis',
    name: 'Satış Ofisleri',
    address: '',
    type: 'SATIS',
    imageUrl: publicImage('armada/armada.jpeg'),
  },
  {
    id: 'hizmet',
    name: 'Müşteri Hizmetleri',
    address: '7/24 Destek Hattı',
    phone: COMPANY.phone,
    email: COMPANY.email,
    type: 'HIZMET',
  },
]

export const SALES_OFFICES = [
  {
    city: 'Siirt — Merkez',
    address: 'Merkez ofis ile görüşme için iletişim formunu kullanabilir veya telefon ile randevu alabilirsiniz.',
    phone: COMPANY.phone,
  },
  {
    city: 'Türkiye geneli',
    address:
      'Projelerimiz Siirt başta olmak üzere Türkiye\'nin çeşitli illerindedir. Detaylar için projeler sayfamızı inceleyin.',
    phone: COMPANY.phone,
  },
]
