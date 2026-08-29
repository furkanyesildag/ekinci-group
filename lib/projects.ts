import type { Project } from '@/types'
import { publicImage as img } from '@/lib/publicImage'


/** Vizyon ve ortak bölümlerde kullanılan görsel */
export const PROJECT_IMAGES = {
  /** Dikey pazarlama görseli — vizyon vb. sütun yerleşimleri */
  vision: img('ekinci-brand-portrait.png'),
}

/** Sabit liste sırası: projeler sayfası, grid ve öne çıkan bölümler bu düzene göre */
const PROJECT_SLUG_ORDER: string[] = [
  'ekinci-prime',
  'rize-guneysu-toki',
  'oztatli-konutlari',
  'ekinci-royal-park',
  'armada-city',
  'mar-vista',
  'prestij-park',
  'newbahar',
  'prestij-gold',
  'ekinci-plaza',
  'saray-sitesi',
  'saray-2-sitesi',
  'ekinci-residence',
  'barroce-evleri',
]

function sortProjectList(list: Project[]): Project[] {
  const idx = new Map(PROJECT_SLUG_ORDER.map((s, i) => [s, i]))
  return [...list].sort((a, b) => (idx.get(a.slug) ?? 999) - (idx.get(b.slug) ?? 999))
}

const PROJECTS_DATA: Project[] = [
  {
    slug: 'ekinci-prime',
    name: 'Ekinci Prime',
    location: 'Siirt',
    city: 'Siirt',
    status: 'SATIŞTA',
    category: 'KONUT',
    year: 2026,
    tagline: 'Huzurlu bir hayatın içinde, doğru yatırımın merkezinde',
    description:
      '13 blok, 217 adet geniş 4+1 daire ve 48 ticari alandan oluşan; kapalı havuz, sauna, Türk hamamı ve fitness gibi ayrıcalıklarıyla öne çıkan amiral gemisi projemiz.',
    narrative: [
      'Ekinci Prime; geleneksel yaşam çizgisini modern mimariyle buluşturan, 19.400 m² inşaat alanı ve 13.500 m² yeşil alanıyla ferah bir yaşam sunar.',
      'Kapalı yüzme havuzu, sauna, Türk hamamı, fitness spor salonu, kitap okuma salonu ve kapalı çocuk oyun alanı gibi sosyal donatılarıyla; kapalı ve açık otopark çözümleriyle konforu bir arada yaşatır.',
      'Geniş salonları, iki çocuk odası ve ebeveyn banyolu yatak odasıyla tasarlanan 4+1 daireler, aileler için üst düzey bir yaşam standardı hedefler.',
    ],
    heroImage: {
      src: img('prime/hero.jpg'),
      alt: 'Ekinci Prime — kırmızı cepheli modern konut projesi ve peyzajlı avlu',
    },
    galleryImages: [
      { src: img('prime/aerial-gece.jpg'), alt: 'Ekinci Prime gece kuşbakışı', label: 'Gece' },
      { src: img('prime/avlu-fiskiye.jpg'), alt: 'Ekinci Prime avlu ve fıskiye', label: 'Avlu' },
      { src: img('prime/avlu.jpg'), alt: 'Ekinci Prime peyzaj alanı', label: 'Peyzaj' },
      { src: img('prime/aerial-aksam.jpg'), alt: 'Ekinci Prime akşam kuşbakışı', label: 'Genel' },
      { src: img('prime/sokak.jpg'), alt: 'Ekinci Prime sokak görünümü', label: 'Cephe' },
      { src: img('prime/cephe.jpg'), alt: 'Ekinci Prime bina cephesi', label: 'Detay' },
      { src: img('prime/aerial2.jpg'), alt: 'Ekinci Prime kuşbakışı yerleşim', label: 'Yerleşim' },
      { src: img('prime/avlu2.jpg'), alt: 'Ekinci Prime iç avlu ve sosyal alan', label: 'Sosyal Alan' },
      { src: img('prime/cephe2.jpg'), alt: 'Ekinci Prime ön cephe', label: 'Ön Cephe' },
      { src: img('prime/cephe3.jpg'), alt: 'Ekinci Prime yan cephe', label: 'Yan Cephe' },
    ],
    catalogUrl: '/katalog/ekinci-prime-katalog.pdf',
    videoUrl: '/images/prime/tanitim.mp4',
    amenities: [
      { icon: 'pool', title: 'Kapalı Yüzme Havuzu', description: 'Dört mevsim kullanım' },
      { icon: 'spa', title: 'Sauna & Türk Hamamı', description: 'Wellness alanları' },
      { icon: 'fitness_center', title: 'Fitness Salonu', description: 'Tam donanımlı spor salonu' },
      { icon: 'local_parking', title: 'Kapalı & Açık Otopark', description: 'Geniş otopark alanı' },
      { icon: 'child_friendly', title: 'Kapalı Çocuk Oyun Alanı', description: 'Güvenli oyun alanı' },
      { icon: 'menu_book', title: 'Kitap Okuma Salonu', description: 'Sakin çalışma ortamı' },
      { icon: 'park', title: '13.500 m² Yeşil Alan', description: 'Geniş peyzaj ve sosyal alan' },
      { icon: 'storefront', title: '48 Ticari Alan', description: 'Site içi ticari üniteler' },
    ],
    floorPlans: [{ label: '4+1 konforlu daireler — 30 m² salon, geniş balkonlar' }],
    proximity: [
      { label: 'Konum', distance: 'Merkez', description: 'Veysel Karani Mah., Kurtalan Yolu Cd. No.104' },
      { label: 'Şehir merkezi', distance: 'Yakın', description: 'Siirt çevre yoluna cepheli' },
    ],
    featured: true,
  },
  {
    slug: 'rize-guneysu-toki',
    name: 'Rize Güneysu TOKİ',
    location: 'Rize / Güneysu',
    city: 'Rize',
    status: 'İNŞAAT SÜRÜYOR',
    category: 'KONUT',
    year: 2026,
    tagline: 'Karadeniz’in yeşiliyle iç içe modern yaşam',
    description:
      'Rize Güneysu’da, doğal dokuyu koruyan konumu ve deprem yönetmeliğine uygun sağlam yapısıyla hayata geçirdiğimiz TOKİ konut projesi.',
    narrative: [
      'Rize Güneysu TOKİ projesi; Karadeniz’in eşsiz yeşil dokusu ve dağ manzarası içinde, çağdaş mimariyle tasarlanmış çok bloklu bir konut yerleşimidir.',
      'Güncel deprem yönetmeliğine uygun betonarme taşıyıcı sistem, kaliteli cephe ve yalıtım uygulamalarıyla; bölgenin iklim koşullarına dayanıklı, uzun ömürlü yapılar inşa ediyoruz.',
      'Geniş otopark alanları, sosyal donatılar ve çocuk oyun alanlarıyla; aileler için huzurlu ve güvenli bir yaşam çevresi hedefleniyor.',
    ],
    heroImage: {
      src: img('rize-guneysu/hero.jpg'),
      alt: 'Rize Güneysu TOKİ — Karadeniz’de inşa edilen konut blokları',
    },
    galleryImages: [
      { src: img('rize-guneysu/genel.jpg'), alt: 'Rize Güneysu TOKİ genel yerleşim', label: 'Genel' },
      { src: img('rize-guneysu/cephe.jpg'), alt: 'Rize Güneysu TOKİ cephe uygulaması', label: 'Cephe' },
      { src: img('rize-guneysu/bloklar.jpg'), alt: 'Rize Güneysu TOKİ tamamlanan bloklar', label: 'Bloklar' },
      { src: img('rize-guneysu/insaat.jpg'), alt: 'Rize Güneysu TOKİ inşaat aşaması', label: 'İnşaat' },
      { src: img('rize-guneysu/santiye.jpg'), alt: 'Rize Güneysu TOKİ şantiye görünümü', label: 'Şantiye' },
      { src: img('rize-guneysu/sokak.jpg'), alt: 'Rize Güneysu TOKİ ara sokak', label: 'Detay' },
    ],
    amenities: [
      { icon: 'foundation', title: 'Deprem Yönetmeliğine Uygun', description: 'Güçlü betonarme taşıyıcı sistem' },
      { icon: 'ac_unit', title: 'Isı & Su Yalıtımı', description: 'Karadeniz iklimine uygun cephe' },
      { icon: 'local_parking', title: 'Otopark Alanları', description: 'Geniş açık otopark' },
      { icon: 'child_friendly', title: 'Çocuk Oyun Alanı', description: 'Güvenli sosyal donatı' },
      { icon: 'landscape', title: 'Doğa Manzarası', description: 'Yeşil yamaçlar ve dağ manzarası' },
      { icon: 'shield', title: 'Kaliteli İşçilik', description: 'Denetimli üretim süreci' },
    ],
    floorPlans: [{ label: 'TOKİ konut tipi daireler' }],
    proximity: [
      { label: 'Konum', distance: 'Güneysu', description: 'Rize / Güneysu, Karadeniz Bölgesi' },
      { label: 'Doğa', distance: 'İç içe', description: 'Yeşil yamaçlar ve dağ manzarası' },
    ],
    featured: true,
  },
  {
    slug: 'mar-vista',
    name: 'Mar Vista',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2022,
    tagline: 'Şehir manzarasına açılan yaşam',
    description:
      'Modern cephe ve geniş peyzaj alanlarıyla öne çıkan konut projesi.',
    narrative: [
      'Mar Vista, bölgenin ihtiyaçlarına göre tasarlanmış konforlu daire seçenekleri sunar.',
      'Detaylı cephe çözümleri ve ortak yaşam alanlarıyla ailelere güvenli bir yuva hedeflenmiştir.',
    ],
    heroImage: {
      src: img('marvista/1.jpg'),
      alt: 'Mar Vista konut projesi',
    },
    galleryImages: [
      { src: img('marvista/1.jpg'), alt: 'Mar Vista görünüm 1', label: 'Genel' },
      { src: img('marvista/2.jpg'), alt: 'Mar Vista görünüm 2', label: 'Detay' },
      { src: img('marvista/3.jpg'), alt: 'Mar Vista görünüm 3', label: 'Peyzaj' },
    ],
    amenities: [
      { icon: 'apartment', title: 'Geniş Planlar', description: 'Farklı metrekare seçenekleri' },
      { icon: 'local_parking', title: 'Otopark', description: 'Kapalı ve açık park alanları' },
      { icon: 'park', title: 'Yeşil Alan', description: 'Açık hava dinlenme bölgeleri' },
      { icon: 'shield', title: 'Güvenlik', description: 'Kontrollü site girişi' },
    ],
    floorPlans: [{ label: '2+1 — 3+1 daire planları' }],
    proximity: [
      { label: 'Şehir merkezi', distance: '—', description: 'Ulaşım hatlarına yakın' },
      { label: 'Sosyal donatılar', distance: 'Site içi', description: 'Çocuk oyun alanı' },
    ],
    featured: false,
  },
  {
    slug: 'oztatli-konutlari',
    name: 'Öztatlı Konutları',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2021,
    tagline: 'Aile odaklı blok düzeni',
    description: 'Depreme dayanıklı yapı tekniği ile hayata geçirilmiş konut kompleksi.',
    narrative: [
      'Öztatlı Konutları, günlük ihtiyaçlara uygun plan çözümleri ile öne çıkar.',
      'Ortak kullanım alanları ve cephe düzeni ile sürdürülebilir bir yaşam alanı sunar.',
    ],
    heroImage: {
      src: img('tatli/oztatli-konutlari-hero.jpeg'),
      alt: 'Öztatlı Konutları',
    },
    galleryImages: [
      { src: img('tatli/1.jpeg'), alt: 'Öztatlı 1', label: 'Blok' },
      { src: img('tatli/2.jpeg'), alt: 'Öztatlı 2', label: 'Bahçe' },
      { src: img('tatli/3.jpeg'), alt: 'Öztatlı 3', label: 'Detay' },
    ],
    amenities: [
      { icon: 'foundation', title: 'Statik Güvenlik', description: 'Güncel yönetmelik uyumu' },
      { icon: 'water_drop', title: 'Altyapı', description: 'Tam donanımlı tesisat' },
      { icon: 'balcony', title: 'Balkon', description: 'Geniş kullanım yüzeyleri' },
      { icon: 'elevator', title: 'Asansör', description: 'Engelsiz erişim' },
    ],
    floorPlans: [{ label: 'Standart kat planları' }],
    proximity: [{ label: 'Çevre', distance: '—', description: 'Okul ve market erişimi' }],
    featured: false,
  },
  {
    slug: 'barroce-evleri',
    name: 'Barroce Evleri',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2020,
    tagline: 'Sakin mahalle dokusu',
    description: 'Düşük katlı yapılanma ile mahalle kültürünü destekleyen proje.',
    narrative: [
      'Barroce Evleri, sakin çevre ile uyumlu mimari çizgiyi ön planda tutar.',
      'Bahçeli kullanım ve cephe malzemeleri ile uzun ömürlü bir yaşam sunar.',
    ],
    heroImage: { src: img('baroce/baroce.jpeg'), alt: 'Barroce Evleri' },
    galleryImages: [
      { src: img('baroce/1.jpeg'), alt: 'Barroce 1', label: 'Villa' },
      { src: img('baroce/2.jpeg'), alt: 'Barroce 2', label: 'Bahçe' },
      { src: img('baroce/3.jpeg'), alt: 'Barroce 3', label: 'Cephe' },
    ],
    amenities: [
      { icon: 'yard', title: 'Özel Bahçe', description: 'Yeşil kullanım alanı' },
      { icon: 'garage', title: 'Otopark', description: 'Konut başına park yeri' },
      { icon: 'fence', title: 'Site Çevresi', description: 'Çevre duvarı ve giriş' },
      { icon: 'wb_sunny', title: 'Doğal Işık', description: 'Geniş pencereler' },
    ],
    floorPlans: [{ label: 'Müstakil ve ikiz villa planları' }],
    proximity: [{ label: 'Mahalle', distance: '—', description: 'Yaya erişimli sokaklar' }],
    featured: false,
  },
  {
    slug: 'armada-city',
    name: 'Armada City',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2025,
    tagline: 'Modern yaşamın yeni adresi',
    description: 'Geniş cephe cam kullanımı ve sosyal donatılarla öne çıkan karma yaşam alanı.',
    narrative: [
      'Armada City, şehir dokusu içinde güvenli ve prestijli bir yaşam vadeder.',
      'Sosyal alanlar ve peyzaj ile desteklenen site yaşamı sunulmaktadır.',
    ],
    heroImage: { src: img('armada/armada.jpeg'), alt: 'Armada City' },
    galleryImages: [
      { src: img('armada/1.jpg'), alt: 'Armada 1', label: 'Genel' },
      { src: img('armada/2.jpg'), alt: 'Armada 2', label: 'Gece' },
      { src: img('armada/3.jpg'), alt: 'Armada 3', label: 'Detay' },
    ],
    amenities: [
      { icon: 'fitness_center', title: 'Sosyal Tesis', description: 'Site içi kullanım alanları' },
      { icon: 'pool', title: 'Havuz', description: 'Yüzme ve dinlenme' },
      { icon: 'security', title: '7/24 Güvenlik', description: 'Kamera ve güvenlik' },
      { icon: 'storefront', title: 'Ticari Ünite', description: 'Zemin kat iş yerleri' },
    ],
    floorPlans: [{ label: '1+1 — 4+1 seçenekleri' }],
    proximity: [
      { label: 'Ulaşım', distance: 'Yakın', description: 'Ana arter bağlantısı' },
      { label: 'Alışveriş', distance: '—', description: 'Çevre hizmetler' },
    ],
    featured: false,
  },
  {
    slug: 'ekinci-royal-park',
    name: 'Ekinci Royal Park',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2025,
    tagline: 'Yeşil ile iç içe yaşam',
    description: 'Geniş peyzaj ve düzenli blok yerleşimi ile öne çıkan park konseptli proje.',
    narrative: [
      'Royal Park, yeşil alan odaklı yerleşim planı ile öne çıkar.',
      'Aileler için güvenli site içi yaşam ve sosyal donatılar sunar.',
    ],
    heroImage: { src: img('royalpark/royal.jpeg'), alt: 'Ekinci Royal Park' },
    galleryImages: [
      { src: img('royalpark/1.jpg'), alt: 'Royal Park 1', label: 'Genel' },
      { src: img('royalpark/2.jpg'), alt: 'Royal Park 2', label: 'Peyzaj' },
      { src: img('royalpark/3.jpg'), alt: 'Royal Park 3', label: 'Detay' },
    ],
    amenities: [
      { icon: 'park', title: 'Park Alanı', description: 'Geniş yeşil kullanım' },
      { icon: 'child_care', title: 'Çocuk Oyun', description: 'Güvenli oyun parkuru' },
      { icon: 'pets', title: 'Yürüyüş', description: 'Açık hava parkuru' },
      { icon: 'local_cafe', title: 'Ortak Alan', description: 'Sosyal buluşma noktası' },
    ],
    floorPlans: [{ label: '3+1 — 4+1 konutlar' }],
    proximity: [{ label: 'Şehir', distance: '—', description: 'Hızlı erişim' }],
    featured: false,
  },
  {
    slug: 'saray-2-sitesi',
    name: 'Saray 2 Sitesi',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2019,
    tagline: 'İkinci etap ile devam eden kalite',
    description: 'Saray projelerinin ikinci etabı; güçlendirilmiş sosyal donatılar.',
    narrative: [
      'Saray 2, ilk etaptan edinilen deneyimle iyileştirilmiş plan çözümleri sunar.',
      'Site yaşamını kolaylaştıran ortak alanlar ile tamamlanmıştır.',
    ],
    heroImage: { src: img('saray2/1.jpg'), alt: 'Saray 2 Sitesi' },
    galleryImages: [
      { src: img('saray2/1.jpg'), alt: 'Saray 2 — 1', label: 'Genel' },
      { src: img('saray2/2.jpg'), alt: 'Saray 2 — 2', label: 'Bahçe' },
      { src: img('saray2/3.jpg'), alt: 'Saray 2 — 3', label: 'Detay' },
    ],
    amenities: [
      { icon: 'apartment', title: 'Modern Planlar', description: 'Geniş odalar' },
      { icon: 'local_parking', title: 'Kapalı Otopark', description: 'Konut başına park' },
      { icon: 'terrain', title: 'Peyzaj', description: 'Yeşil düzenek' },
      { icon: 'groups', title: 'Site Yönetimi', description: 'Profesyonel işletme' },
    ],
    floorPlans: [{ label: 'Çok katlı konut planları' }],
    proximity: [{ label: 'Komşu projeler', distance: '—', description: 'Saray Sitesi ile uyum' }],
    featured: false,
  },
  {
    slug: 'saray-sitesi',
    name: 'Saray Sitesi',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2018,
    tagline: 'Kökleri güçlü site yaşamı',
    description: 'Ekinci kalitesinin ilk Saray etabı; güvenilir teslim ve işçilik.',
    narrative: [
      'Saray Sitesi, bölgede referans gösterilen ilk etap projelerden biridir.',
      'Sağlam cephe ve kullanışlı daire planları ile öne çıkar.',
    ],
    heroImage: { src: img('saray/saray.jpg'), alt: 'Saray Sitesi' },
    galleryImages: [
      { src: img('saray/1.jpg'), alt: 'Saray 1', label: 'Genel' },
      { src: img('saray/2.jpg'), alt: 'Saray 2', label: 'Gece' },
      { src: img('saray/3.jpg'), alt: 'Saray 3', label: 'Detay' },
    ],
    amenities: [
      { icon: 'home_work', title: 'Donanım', description: 'Hazır teslim daireler' },
      { icon: 'construction', title: 'Kalite', description: 'Denetlenen işçilik' },
      { icon: 'architecture', title: 'Cephe', description: 'Modern görünüm' },
      { icon: 'hub', title: 'Konum', description: 'Şehir bağlantısı' },
    ],
    floorPlans: [{ label: 'Standart daire tipleri' }],
    proximity: [{ label: 'Çevre', distance: '—', description: 'Günlük ihtiyaçlara yakın' }],
    featured: false,
  },
  {
    slug: 'ekinci-plaza',
    name: 'Ekinci Plaza',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'TİCARİ',
    year: 2021,
    tagline: 'Şehir ticaretine merkezî adres',
    description: 'Ofis ve ticari ünitelerin bir arada olduğu çok katlı plaza yapısı.',
    narrative: [
      'Ekinci Plaza, ticari vitrin ihtiyaçlarına uygun geniş cephe ve iç mekan çözümleri sunar.',
      'Ofis katları ve dükkânların uyumlu yerleşimi ile iş dünyasına hitap eder.',
    ],
    heroImage: { src: img('plaza/2.jpg'), alt: 'Ekinci Plaza' },
    galleryImages: [
      { src: img('plaza/1.jpg'), alt: 'Plaza 1', label: 'Dış cephe' },
      { src: img('plaza/2.jpg'), alt: 'Plaza 2', label: 'Genel' },
      { src: img('plaza/3.jpg'), alt: 'Plaza 3', label: 'Detay' },
    ],
    amenities: [
      { icon: 'elevator', title: 'Asansör', description: 'Yüksek kat taşıma' },
      { icon: 'meeting_room', title: 'Ofis Katları', description: 'Esnek planlar' },
      { icon: 'storefront', title: 'Dükkanlar', description: 'Caddeye cephe' },
      { icon: 'bolt', title: 'Altyapı', description: 'Güç ve iletişim hatları' },
    ],
    floorPlans: [{ label: 'Ofis ve ticari birim planları' }],
    proximity: [{ label: 'Şehir merkezi', distance: 'Merkezî', description: 'Yoğun ticari bölge' }],
    featured: false,
  },
  {
    slug: 'ekinci-residence',
    name: 'Ekinci Residence',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2022,
    tagline: 'Konforlu rezidans yaşamı',
    description: 'Üst segment konut ve cephe çözümleri ile rezidans konsepti.',
    narrative: [
      'Ekinci Residence, güvenlik ve konfor odaklı rezidans yaşamı sunar.',
      'Geniş cam yüzeyleri ve sundurmalar ile modern yaşam alanı oluşturulmuştur.',
    ],
    heroImage: { src: img('plaza/plaza.jpeg'), alt: 'Ekinci Residence' },
    galleryImages: [
      { src: img('plaza/1.jpg'), alt: 'Residence 1', label: 'Genel' },
      { src: img('plaza/2.jpg'), alt: 'Residence 2', label: 'Cephe' },
      { src: img('plaza/3.jpg'), alt: 'Residence 3', label: 'Detay' },
    ],
    amenities: [
      { icon: 'door_front', title: 'Lobi', description: 'Karşılama alanı' },
      { icon: 'videocam', title: 'Güvenlik', description: 'Kapalı devre sistem' },
      { icon: 'balcony', title: 'Teras', description: 'Geniş balkon kullanımı' },
      { icon: 'ac_unit', title: 'İklimlendirme', description: 'Modern HVAC altyapısı' },
    ],
    floorPlans: [{ label: 'Üst segment daire planları' }],
    proximity: [{ label: 'Kent içi', distance: '—', description: 'Ulaşım avantajı' }],
    featured: false,
  },
  {
    slug: 'prestij-gold',
    name: 'Prestij Gold',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2020,
    tagline: 'Prestijli blok düzeni',
    description: 'Üç boyutlu cephe hareketi ve gold detaylarla öne çıkan konut projesi.',
    narrative: [
      'Prestij Gold, görünürlüğü yüksek cephe tasarımı ile dikkat çeker.',
      'Dağıtılmış ortak alanlar ile günlük kullanım kolaylığı sağlanmıştır.',
    ],
    heroImage: { src: img('prestij/prestij3.jpg'), alt: 'Prestij Gold' },
    galleryImages: [
      { src: img('prestij/prestij1.jpg'), alt: 'Prestij 1', label: 'Genel' },
      { src: img('prestij/prestij2.jpg'), alt: 'Prestij 2', label: 'Gece' },
      { src: img('prestij/prestij3.jpg'), alt: 'Prestij 3', label: 'Detay' },
    ],
    amenities: [
      { icon: 'star', title: 'Prestij', description: 'Üst segment malzeme' },
      { icon: 'landscape', title: 'Peyzaj', description: 'Düzenli yeşil alan' },
      { icon: 'nightlight', title: 'Aydınlatma', description: 'Cephe ve bahçe ışığı' },
      { icon: 'roofing', title: 'Çatı', description: 'Su yalıtımı ve izolasyon' },
    ],
    floorPlans: [{ label: 'Çok katlı konut planları' }],
    proximity: [{ label: 'Mahalle', distance: '—', description: 'Site içi güvenlik' }],
    featured: false,
  },
  {
    slug: 'prestij-park',
    name: 'Prestij Park',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2021,
    tagline: 'Yeşil odaklı Prestij serisi',
    description: 'Park Prestij çizgisinin doğayla harmanlanmış örneği.',
    narrative: [
      'Prestij Park, yeşil alan oranı ile öne çıkar.',
      'Konforlu daire planları ve dış mekan kullanımı dengelenmiştir.',
    ],
    heroImage: { src: img('park/park3.jpg'), alt: 'Prestij Park' },
    galleryImages: [
      { src: img('park/park3.jpg'), alt: 'Park 3', label: 'Genel' },
      { src: img('park/park1.jpg'), alt: 'Park 1', label: 'Yeşil alan' },
      { src: img('park/park.jpg'), alt: 'Park', label: 'Detay' },
    ],
    amenities: [
      { icon: 'forest', title: 'Yeşil Alan', description: 'Geniş peyzaj' },
      { icon: 'deck', title: 'Parkuru', description: 'Yürüyüş yolu' },
      { icon: 'wb_cloudy', title: 'Havalandırma', description: 'Geniş cephe aralığı' },
      { icon: 'eco', title: 'Doğal Dokunuş', description: 'Bitki seçimi' },
    ],
    floorPlans: [{ label: 'Standart residence planları' }],
    proximity: [{ label: 'Şehir', distance: '—', description: 'Yeşil koridor' }],
    featured: false,
  },
  {
    slug: 'newbahar',
    name: 'Newbahar',
    location: 'Siirt',
    city: 'Siirt',
    status: 'TAMAMLANDI',
    category: 'KONUT',
    year: 2026,
    tagline: 'Yeni dönem konut anlayışı',
    description: 'Güncel yalıtım ve cephe sistemleri ile yükselen yeni nesil proje.',
    narrative: [
      'Newbahar, güncel enerji verimliliği yaklaşımıyla tasarlanmaktadır.',
      'İnşaat süreci şeffaf planlama ve güvenli şantiye disiplini ile yürütülmektedir.',
    ],
    heroImage: { src: img('new/new1.jpg'), alt: 'Newbahar' },
    galleryImages: [
      { src: img('new/new1.jpg'), alt: 'Newbahar 1', label: 'Şantiye / genel' },
      { src: img('new/new.jpg'), alt: 'Newbahar 2', label: 'İlerleme' },
      { src: img('new/new3.jpg'), alt: 'Newbahar 3', label: 'Detay' },
    ],
    amenities: [
      { icon: 'engineering', title: 'Şantiye Takibi', description: 'Periyodik raporlama' },
      { icon: 'energy_savings_leaf', title: 'Yalıtım', description: 'Isı köprüsü kontrolü' },
      { icon: 'precision_manufacturing', title: 'Kalite', description: 'Malzeme onayı' },
      { icon: 'schedule', title: 'Teslim Planı', description: 'Net takvim' },
    ],
    floorPlans: [{ label: 'Ön talebe göre plan seçenekleri' }],
    proximity: [{ label: 'Bölge', distance: '—', description: 'Yeni yerleşim aksı' }],
    featured: false,
  },
]

export const PROJECTS = sortProjectList(PROJECTS_DATA)

/** Filtrelenmiş listeyi sayfa sırasına göre düzenler */
export function sortProjectsByDisplayOrder(projects: Project[]): Project[] {
  return sortProjectList(projects)
}

/** Ana sayfa hero slider: ilk dört proje (Tatlı → Royal Park → Armada → Mar Vista) */
export function getHomeHeroSliderProjects(): Project[] {
  return PROJECTS.slice(0, 4)
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find(p => p.slug === slug)
}

export function getFeaturedProjects(): typeof PROJECTS {
  return PROJECTS.slice(0, 6)
}

export function getProjectsByCategory(cat: Project['category']) {
  return PROJECTS.filter(p => p.category === cat)
}

export function getProjectsByStatus(status: Project['status']) {
  return PROJECTS.filter(p => p.status === status)
}
