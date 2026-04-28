import type { NavLink, OfficeLocation } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Projeler',      href: '/projeler' },
  { label: 'Kurumsal',      href: '/kurumsal' },
  { label: 'İletişim',      href: '/iletisim' },
]

export const COMPANY = {
  name:       'EKİNCİ GROUP İNŞAAT',
  nameShort:  'EKİNCİ GROUP',
  tagline:    'Geleceğin Yaşam Alanlarını İnşa Ediyoruz',
  founded:    1974,
  phone:      '+90 212 345 67 89',
  whatsapp:   '+902123456789',
  email:      'info@ekincigroup.com.tr',
  address:    'Levent Loft, Büyükdere Cad. No:201, Levent / İstanbul',
}

export const STATS = [
  { value: '50+',    label: 'Yıllık Tecrübe',     icon: 'workspace_premium' },
  { value: '2.5M',   label: 'm² İnşaat Alanı',    icon: 'foundation' },
  { value: '%100',   label: 'Zamanında Teslim',    icon: 'verified' },
]

export const OFFICES: OfficeLocation[] = [
  {
    id:       'hq',
    name:     'Genel Merkez',
    address:  'Levent Loft, Büyükdere Cad. No:201 K:12\nLevent, Beşiktaş / İstanbul 34394',
    phone:    '+90 212 345 67 89',
    email:    'info@ekincigroup.com.tr',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARL66STNL3aUsxlN_Hujz5kLtGARLcYwKxSlOUjJGN2UDrOY-Zq7jWMre4byyXaPW5O0Zp0ap9xCZmnBO2aI178ivqbEH_KY_UngsI2CihaRsOvkwGInSOs3HDm9vAo4k6qW_ym2Sw8snBJpYzuGRU0ZE7JgIV0KCmoK1K1v59XUj7JPR5uV7LadUOCjiNwZvTz-ARtSLU0iErweaipyohkf22trojcjgmsrRp4OuKuFtzJzh1C1uQhvjgrXy3jsDtsi3JyovkPvPy',
    type:     'HQ',
  },
  {
    id:       'satis',
    name:     'Satış Ofisleri',
    address:  '',
    type:     'SATIS',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5UCrJi2UGO2uQ45ufJPpnyB5sdSHz8mtZ-nWAJzc_2xT_ZWKFhvtQS9jxa7-G3VOo4LGFZkZDq4EIDc2FzZXasGMhJ5__n97BvSCp8E0OdYU4taPWVGaZXXn1InmkLi7eEAkw0AS6qAhUnIYQUPy2D1CsvKbjeyrmGILB4XdXlVv0VpNSeouHbmiYiLzaqDu8HwjOzdwb7VnUwpC2AZYU2r44dc2rhxNoXhwmJHSv9WM7ve0kGFjax_8SdsIC3CNgL_-jW-TAjg_1',
  },
  {
    id:       'hizmet',
    name:     'Müşteri Hizmetleri',
    address:  '7/24 Destek Hattı',
    phone:    '+90 850 123 45 67',
    email:    'destek@ekincigroup.com.tr',
    type:     'HIZMET',
  },
]

export const SALES_OFFICES = [
  {
    city:    'İstanbul — Ataköy',
    address: 'Ataköy 7-8-9-10. Kısım, E-5 Yan Yol Cad. No:14\nBakırköy / İstanbul 34158',
    phone:   '+90 212 456 78 90',
  },
  {
    city:    'Bodrum — Muğla',
    address: 'Bodrum Kıyı Mah. Neyzen Tevfik Cad. No:56\nBodrum / Muğla 48400',
    phone:   '+90 252 316 12 34',
  },
  {
    city:    'Ankara',
    address: 'Çankaya Mah. Atatürk Bulvarı No:191 K:8\nÇankaya / Ankara 06680',
    phone:   '+90 312 234 56 78',
  },
]
