/**
 * EKİNCİ GROUP — Tamamlanan projeler (referans listesi).
 * Kaynak: kurumsal referans dökümanı.
 */

export interface RefItem {
  name: string
  /** Ayrı gösterilecek konum etiketi (ör. "İstanbul / Fatih") */
  location?: string
  blocks?: number
  units?: number       // daire
  commercial?: number  // ticari alan / ünite
  classrooms?: number  // derslik (eğitim)
  types?: string       // "3+1, 4+1"
  note?: string        // "+1 Cami", "Kızılay Binası", "İş atölyesi" vb.
  /** Toplam/özet kartı (blok yerine "Bina" etiketi kullanılır) */
  summary?: boolean
}

export interface RefCategory {
  key: string
  title: string
  icon: string
  items: RefItem[]
}

export const REF_CATEGORIES: RefCategory[] = [
  {
    key: 'konut',
    title: 'Konut Projeleri',
    icon: 'apartment',
    items: [
      { name: 'Saray Sitesi', blocks: 3, units: 124, types: '3+1, 4+1' },
      { name: 'Saray 2 Sitesi', blocks: 2, units: 64, types: '3+1, 4+1' },
      { name: 'Barroce Evleri', blocks: 3, units: 131, commercial: 8, types: '3+1, 4+1' },
      { name: 'Newbahar Konutları', blocks: 3, units: 156, types: '3+1, 4+1' },
      { name: 'Prestijpark Konutları', blocks: 2, units: 96, types: '3+1, 4+1' },
      { name: 'Prestij Life Sitesi', blocks: 3, units: 96, commercial: 3, types: '3+1, 4+1' },
      { name: 'Ekinci Park Konutları', blocks: 3, units: 104, commercial: 5, types: '3+1' },
      { name: 'Ekinci Royalpark Sitesi', blocks: 3, units: 108, commercial: 18, types: '3+1, 4+1' },
      { name: 'Armada Konutları', units: 50, types: '3+1' },
      { name: 'Ekinci Group Öztatlı Konutları', blocks: 10, units: 232, commercial: 35, types: '4+1' },
      { name: 'Ekinci Tower', units: 72, commercial: 7, types: '1+1, 2+1, 3+1' },
      { name: 'Siirt Geneli — Diğer Tamamlanan Yapılar', location: 'Siirt', units: 1330, blocks: 39, commercial: 120, summary: true },
    ],
  },
  {
    key: 'toki',
    title: 'TOKİ ve Kamu Projeleri',
    icon: 'location_city',
    items: [
      { name: 'Muş / Merkez TOKİ', location: 'Muş', units: 150 },
      { name: 'Muş / Varto TOKİ', location: 'Muş', units: 80, note: 'Ticari alan' },
      { name: 'Iğdır / Tuzla TOKİ', location: 'Iğdır', units: 80, commercial: 90, note: '1 Cami' },
    ],
  },
  {
    key: 'rezidans',
    title: 'Rezidans ve Ofis Projeleri',
    icon: 'corporate_fare',
    items: [
      { name: 'Ekinci Plaza', units: 14, commercial: 3 },
      { name: 'Ekinci Rezidance', units: 35, commercial: 2, types: '1+1' },
      { name: 'İstanbul / Fatih', location: 'İstanbul', units: 20, types: '3+1' },
      { name: 'İstanbul / Esenler', location: 'İstanbul', units: 24, commercial: 4, types: '3+1' },
      { name: 'İstanbul / Bağcılar', location: 'İstanbul', units: 8, commercial: 2, types: '3+1' },
      { name: 'Ankara / Cebeci', location: 'Ankara', note: 'Kızılay Binası' },
    ],
  },
  {
    key: 'egitim',
    title: 'Eğitim Kurumları',
    icon: 'school',
    items: [
      { name: 'Siirt Türk Telekom Fen Lisesi', location: 'Siirt', classrooms: 24 },
      { name: 'Siirt Türk Telekom Rehabilitasyon Okulu', location: 'Siirt', note: 'Rehabilitasyon Okulu' },
      { name: 'Batman / Gerçüş', location: 'Batman', classrooms: 24 },
      { name: 'Gaziantep Türk Telekom Fen Lisesi', location: 'Gaziantep', classrooms: 24 },
      { name: 'Muş / Merkez', location: 'Muş', classrooms: 24, note: 'İş atölyesi dahil' },
      { name: 'Hatay / Merkez', location: 'Hatay', classrooms: 24 },
    ],
  },
]

/** Hero istatistik kutuları */
export const REF_STATS = [
  { value: '50+', label: 'Tamamlanan Proje', icon: 'verified' },
  { value: '3.000+', label: 'Teslim Edilen Daire', icon: 'meeting_room' },
  { value: '290+', label: 'Ticari Alan', icon: 'storefront' },
  { value: '6', label: 'Eğitim Kurumu', icon: 'school' },
]

/** Döküman dipnotu */
export const REF_FOOTNOTE =
  'Yukarıda belirtilen projelere ek olarak, Siirt’in farklı bölgelerinde yer alan 39 binada yaklaşık 1.330 daire ve 120 ticari alanın inşaatı başarıyla tamamlanmıştır.'
