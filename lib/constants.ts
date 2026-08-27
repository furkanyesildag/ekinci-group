import type { NavLink, OfficeLocation } from '@/types'
import { publicImage } from '@/lib/publicImage'

export const NAV_LINKS: NavLink[] = [
  { label: 'Projeler', href: '/projeler' },
  { label: 'Referanslar', href: '/referanslar' },
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
    imageUrl: publicImage('ekinci-brand-hero.png'),
    type: 'HQ',
  },
  {
    id: 'satis',
    name: 'Satış Ofisleri',
    address: '',
    type: 'SATIS',
    imageUrl: publicImage('satis-ofisleri-hero.png'),
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

export const CITY_OFFICES = [
  {
    city: 'Ankara',
    label: 'Satış Ofisi',
    address: 'Kızılırmak Mahallesi 150. Sokak ATM A Blok 1/4 Çukurambar',
    mapsUrl: 'https://maps.google.com/?q=Kızılırmak+Mahallesi+150.+Sokak+ATM+A+Blok+1/4+Çukurambar+Ankara',
    phone: COMPANY.phone,
    email: COMPANY.email,
    imageUrl: publicImage('satis-ofisi-ankara.png'),
  },
  {
    city: 'Siirt',
    label: 'Satış Ofisi',
    address: 'Veysel Karani Mahallesi Kurtalan Yolu Caddesi Armada City Altı',
    mapsUrl: 'https://maps.google.com/?q=Veysel+Karani+Mahallesi+Kurtalan+Yolu+Caddesi+Armada+City+Alti+Siirt',
    phone: COMPANY.phone,
    email: COMPANY.email,
    imageUrl: publicImage('satis-ofisleri-hero.png'),
  },
]
