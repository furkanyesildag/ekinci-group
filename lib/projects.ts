import type { Project, ProjectCategory, ProjectStatus } from '@/types'

// ─── Unsplash yüksek kaliteli mimari/lüks yaşam fotoğrafları ───────────────
const U = (id: string, w = 1920, q = 95) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`

const IMG = {
  // ── HERO SLİDER (featured projelerin hero görselleri) ─────────────────────
  // Elysium Heights — Bodrum sonsuzluk havuzlu ultra-lüks villa
  elysiumHero:     U('1613977257363-707ba9348227'),
  // Azure Coast — Akdeniz kıyısında beyaz taş villa
  azureCoast:      U('1580587771525-78b9dba3b914'),
  // Vertex Tower — modern cam gökdelen, şehir silüeti
  vertexTower:     U('1486325212027-8081e485255e'),
  // Amber Center — çağdaş şehir yapısı
  amberCenter:     U('1545324418-cc1a3fa10c00'),
  // Serene Atoll — minimalist kıyı rezidansı
  sereneAtoll:     U('1564013799919-ab600027ffc6'),

  // ── VİZYON BÖLÜMÜ ─────────────────────────────────────────────────────────
  // Kaliteli lüks villa dış cephe gün batımı ışığında
  vision:          U('1600585154340-be6161a56a0c', 1200),

  // ── PROJE GALERİ ──────────────────────────────────────────────────────────
  // infinity havuz & teras
  gallery1:        U('1613490493576-7fde63acd811', 1200),
  // lüks iç mekan / yaşam odası
  gallery2:        U('1600607687939-ce8a6d349a58', 1200),
  // denize sıfır teras / dış mekan
  gallery3:        U('1600566753190-17f0baa2a6c3', 1200),
  // modern yatak odası
  gallery4:        U('1631049307264-da0ec9d70304', 1200),
  // lüks mutfak/yemek odası
  gallery5:        U('1556909114-f6e7ad7d3136', 1200),
  // mimari detay / havuz kenarı
  gallery6:        U('1512917774080-9991f1c4c750', 1200),
  // panoramik şehir manzarası
  gallery7:        U('1477959858617-67f85cf4f1df', 1200),
  // ofis lobi / kurumsal iç mekan
  gallery8:        U('1497366216548-37526070297c', 1200),
  // doğal taş & ahşap villa detayı
  gallery9:        U('1600047509807-ba8f99d2cdde', 1200),
  // sonsuzluk havuz gece görünümü
  gallery10:       U('1571896349842-33c89424de2d', 1200),
}

export const PROJECTS: Project[] = [
  {
    slug:     'elysium-heights',
    name:     'Elysium Heights',
    location: 'Yalıkavak, Bodrum',
    city:     'Bodrum',
    status:   'SATIŞTA',
    category: 'KONUT',
    year:     2025,
    tagline:  'Ege\'nin Sonsuz Ufkuna Açılan Kapı',
    description: 'Bodrum\'un en prestijli konumunda, doğa ile mimarinin mükemmel birleşimi. Panoramik deniz manzarası ve özel marina erişimi.',
    narrative: [
      'Elysium Heights, EKİNCİ GROUP\'un Ege kıyısındaki en iddialı projesidir. Yalıkavak\'ın bozulmamış doğal güzellikleri arasında yükselen bu rezidans, her detayında mükemmeliyetin izlerini taşır.',
      'Proje, 180 derecelik panoramik deniz manzarası sunan özel villalar ve rezidanslardan oluşmaktadır. Bodrum\'un eşsiz akbatı ışığıyla tasarlanan iç mekanlar, Akdeniz yaşam kültürünü modern konforla buluşturmaktadır.',
    ],
    heroImage:     { src: IMG.elysiumHero,   alt: 'Elysium Heights — Bodrum sonsuzluk havuzlu lüks villa' },
    galleryImages: [
      { src: IMG.gallery1,  alt: 'Elysium Heights infinity pool', label: 'Infinity Havuz' },
      { src: IMG.gallery2,  alt: 'Elysium Heights yaşam odası',   label: 'Ana Salon' },
      { src: IMG.gallery3,  alt: 'Elysium Heights teras',         label: 'Deniz Terası' },
      { src: IMG.gallery10, alt: 'Elysium Heights gece havuz',    label: 'Gece Manzarası' },
    ],
    amenities: [
      { icon: 'pool',            title: 'Özel Yüzme Havuzu',  description: 'Her villaya özel sonsuzluk havuzu' },
      { icon: 'spa',             title: 'Spa & Wellness',      description: 'Hammam, sauna ve masaj odaları' },
      { icon: 'directions_boat', title: 'Marina Erişimi',      description: 'Yalıkavak Marina\'ya özel yat rıhtımı' },
      { icon: 'local_parking',   title: 'Kapalı Otopark',      description: 'Akıllı güvenlik sistemli kapalı garaj' },
    ],
    floorPlans: [
      { label: 'Tip A: Bahçe Villası (4+1, 320 m²)' },
      { label: 'Tip B: Deniz Villası (5+1, 480 m²)' },
      { label: 'Tip C: Penthouse (6+2, 650 m²)' },
    ],
    proximity: [
      { label: 'Yalıkavak Marina',  distance: '3 dk',  description: 'Türkiye\'nin en prestijli yat limanı' },
      { label: 'Bodrum Havalimanı', distance: '45 dk', description: 'Milas-Bodrum Havalimanı' },
      { label: 'Bodrum Merkez',     distance: '20 dk', description: 'Bodrum çarşısı ve tarihi yarımada' },
      { label: 'Özel Plaj',         distance: '5 dk',  description: 'Projeye ait özel plaj şeridi' },
    ],
    featured: true,
  },
  {
    slug:     'azure-coast-villas',
    name:     'Azure Coast Villas',
    location: 'Göltürkbükü, Bodrum',
    city:     'Bodrum',
    status:   'TAMAMLANDI',
    category: 'KONUT',
    year:     2023,
    tagline:  'Doğanın Kollarında Lüks Bir Sığınak',
    description: 'Göltürkbükü koyunun huzurlu sularına nazır, özel plaja sahip lüks villa kompleksi.',
    narrative: [
      'Azure Coast Villas, doğa ile lüksün benzersiz bir sentezini sunar. Bodrum\'un en sakin koylarından birine inşa edilen bu proje, misafirlerine gerçek bir kaçış noktası olmayı hedeflemektedir.',
      'Her villa, zemin kattan sonsuzluk havuzuna uzanan özel bir deniz manzarasına sahiptir. Organik formlar ve doğal taş kullanımıyla Ege mimarisinin ruhunu yansıtmaktadır.',
    ],
    heroImage:     { src: IMG.azureCoast, alt: 'Azure Coast Villas — Bodrum kıyı beyaz villa' },
    galleryImages: [
      { src: IMG.gallery6,  alt: 'Azure Coast havuz alanı',  label: 'Havuz Alanı' },
      { src: IMG.gallery9,  alt: 'Azure Coast villa detayı', label: 'Villa Detayı' },
      { src: IMG.gallery3,  alt: 'Azure Coast teras',        label: 'Deniz Terası' },
      { src: IMG.gallery4,  alt: 'Azure Coast yatak odası',  label: 'Master Suit' },
    ],
    amenities: [
      { icon: 'beach_access',   title: 'Özel Plaj',  description: 'Projeye özel 200m plaj şeridi' },
      { icon: 'pool',           title: 'Havuz',      description: 'Sonsuzluk havuzu ve çocuk havuzu' },
      { icon: 'restaurant',     title: 'Restoran',   description: 'Çiftlik ürünleri mutfağı' },
      { icon: 'fitness_center', title: 'Fitness',    description: 'Açık hava fitness parkuru' },
    ],
    floorPlans: [
      { label: 'Tip A: Bahçe Villası (3+1, 220 m²)' },
      { label: 'Tip B: Koy Villası (4+1, 320 m²)' },
    ],
    proximity: [
      { label: 'Göltürkbükü',   distance: '2 dk',  description: 'Bodrum\'un gözde eğlence merkezi' },
      { label: 'Bodrum Merkez', distance: '25 dk', description: 'Tarihi yarımada ve çarşı' },
      { label: 'Havalimanı',    distance: '50 dk', description: 'Milas-Bodrum Havalimanı' },
      { label: 'Özel Tekne',    distance: '0 dk',  description: 'Rıhtımdan günlük tekne turları' },
    ],
    featured: true,
  },
  {
    slug:     'serene-atoll-residence',
    name:     'Serene Atoll Residence',
    location: 'Çeşme, İzmir',
    city:     'İzmir',
    status:   'SATIŞTA',
    category: 'KONUT',
    year:     2025,
    tagline:  'Ege Rüzgarıyla Süzülen Bir Yaşam',
    description: 'Çeşme\'nin kristal sularına sıfır, surf plajına yürüme mesafesinde ultra-lüks rezidans.',
    narrative: [
      'Serene Atoll, Çeşme\'nin en değerli noktasında yükselen bir mimarlık şaheseridir. Turkuaz sulara ve kumsal yaşamına olan yakınlığıyla eşsiz bir konum sunar.',
      'Minimalist tasarım anlayışı ile Ege\'nin açık ve özgür ruhunu yansıtan bu rezidans, yılın tüm mevsimlerinde konuklarına olağanüstü bir yaşam deneyimi vadeder.',
    ],
    heroImage:     { src: IMG.sereneAtoll, alt: 'Serene Atoll — Çeşme minimalist kıyı rezidansı' },
    galleryImages: [
      { src: IMG.gallery2,  alt: 'Serene Atoll salon',    label: 'Ana Salon' },
      { src: IMG.gallery1,  alt: 'Serene Atoll teras',    label: 'Teras' },
      { src: IMG.gallery5,  alt: 'Serene Atoll mutfak',   label: 'Mutfak' },
      { src: IMG.gallery4,  alt: 'Serene Atoll yatak',    label: 'Yatak Odası' },
    ],
    amenities: [
      { icon: 'surfing',      title: 'Surf Okulu',      description: 'Plaja sıfır surf ve sörf dersleri' },
      { icon: 'spa',          title: 'Spa Merkezi',     description: 'Deniz manzaralı tam donanımlı spa' },
      { icon: 'wine_bar',     title: 'Şarap Mahzeni',   description: 'İklimlendirmeli özel şarap mahzeni' },
      { icon: 'electric_car', title: 'Elektrikli Araç', description: 'Ücretsiz EV şarj istasyonları' },
    ],
    floorPlans: [
      { label: 'Tip A: Deniz Cephesi (2+1, 140 m²)' },
      { label: 'Tip B: Köşe Rezidans (3+1, 210 m²)' },
      { label: 'Tip C: Penthouse (4+1, 380 m²)' },
    ],
    proximity: [
      { label: 'Ilıca Plajı',  distance: '5 dk',  description: 'Türkiye\'nin en iyi surf plajı' },
      { label: 'Çeşme Merkez', distance: '10 dk', description: 'Çarşı, marina ve tarihi kale' },
      { label: 'İzmir Merkez', distance: '70 dk', description: 'Alsancak ve Kordon sahili' },
      { label: 'Alaçatı',      distance: '15 dk', description: 'Ünlü taş evler ve butik restoranlar' },
    ],
    featured: false,
  },
  {
    slug:     'vertex-corporate-tower',
    name:     'Vertex Corporate Tower',
    location: 'Levent, İstanbul',
    city:     'İstanbul',
    status:   'İNŞAAT SÜRÜYOR',
    category: 'TİCARİ',
    year:     2026,
    tagline:  'İstanbul\'un Siluetine Yeni Bir İmza',
    description: 'Levent\'in göbeğinde 42 katlı A+ ofis kulesi. 2026 teslim hedefli, LEED Platinum sertifikalı.',
    narrative: [
      'Vertex Corporate Tower, EKİNCİ GROUP\'un İstanbul\'daki en büyük ticari yatırımıdır. 42 katlı bu A+ ofis kulesi, İstanbul\'un skyline\'ına kalıcı bir iz bırakmak için tasarlanmıştır.',
      'LEED Platinum sertifikasyonunu hedefleyen bu proje, enerji verimliliği ve sürdürülebilirlik alanında İstanbul\'un öncü binası olmayı amaçlamaktadır.',
    ],
    heroImage:     { src: IMG.vertexTower, alt: 'Vertex Corporate Tower — İstanbul modern cam gökdelen' },
    galleryImages: [
      { src: IMG.gallery7,  alt: 'Vertex Tower şehir manzarası', label: 'Şehir Manzarası' },
      { src: IMG.gallery8,  alt: 'Vertex Tower lobi',            label: 'Lobi' },
      { src: IMG.gallery2,  alt: 'Vertex Tower ofis katı',       label: 'Ofis Katı' },
      { src: IMG.gallery1,  alt: 'Vertex Tower teras',           label: 'Sky Teras' },
    ],
    amenities: [
      { icon: 'meeting_room',    title: 'Konferans Merkezi', description: '1.200 kişilik konferans salonu' },
      { icon: 'local_parking',   title: 'Otopark',           description: '600 araçlık kapalı otopark' },
      { icon: 'restaurant_menu', title: 'Restoran & Cafe',   description: '3 kat yeme-içme alanı' },
      { icon: 'eco',             title: 'LEED Platinum',     description: 'Yeşil bina sertifikası' },
    ],
    floorPlans: [
      { label: 'Standart Kat (800-1.200 m²)' },
      { label: 'Üst Kat Ofisler (1.200-2.400 m²)' },
      { label: 'Sky Lounge Katlar (3.800 m²)' },
    ],
    proximity: [
      { label: 'Levent Metro',      distance: '2 dk',  description: 'M2 metro hattı direkt bağlantı' },
      { label: 'İTÜ Maslak',        distance: '10 dk', description: 'İTÜ kampüs ve teknokent' },
      { label: 'Boğaz Köprüsü',     distance: '15 dk', description: 'Fatih Sultan Mehmet Köprüsü' },
      { label: 'Havalimanı',         distance: '30 dk', description: 'İstanbul Havalimanı' },
    ],
    featured: true,
  },
  {
    slug:     'amber-center',
    name:     'Amber Center',
    location: 'Ataşehir, İstanbul',
    city:     'İstanbul',
    status:   'TAMAMLANDI',
    category: 'KARMA',
    year:     2022,
    tagline:  'Şehrin Kalbinde Yaşam ve İş Bir Arada',
    description: 'Ataşehir\'in yükselen aksında karma kullanımlı proje: konut, ofis ve AVM bir arada.',
    narrative: [
      'Amber Center, modern şehir yaşamının tüm ihtiyaçlarını tek bir adreste buluşturan yenilikçi karma kullanım projesidir.',
      'İstanbul\'un en dinamik iş ve yaşam merkezlerinden birinde yer alan Amber Center, 1.200 konuta, 35.000 m² ofis alanına ve 220 mağazalı alışveriş merkezine ev sahipliği yapmaktadır.',
    ],
    heroImage:     { src: IMG.amberCenter, alt: 'Amber Center — karma kullanım yapısı İstanbul' },
    galleryImages: [
      { src: IMG.gallery7,  alt: 'Amber Center şehir manzarası', label: 'Şehir Manzarası' },
      { src: IMG.gallery8,  alt: 'Amber Center lobi',            label: 'Merkezi Lobi' },
      { src: IMG.gallery5,  alt: 'Amber Center konut',           label: 'Konut Mutfak' },
      { src: IMG.gallery4,  alt: 'Amber Center yatak odası',     label: 'Konut Yatak' },
    ],
    amenities: [
      { icon: 'shopping_bag',    title: '220 Mağaza',     description: 'Ulusal ve uluslararası markalar' },
      { icon: 'apartment',       title: '1.200 Konut',    description: 'Farklı tipte lüks konut seçenekleri' },
      { icon: 'business_center', title: '35.000 m² Ofis', description: 'A sınıfı ofis alanları' },
      { icon: 'school',          title: 'Okul & Kreş',    description: 'İlkokul ve anaokuluna yürüme mesafesi' },
    ],
    floorPlans: [
      { label: 'Konut: 1+1 (75 m²)' },
      { label: 'Konut: 2+1 (120 m²)' },
      { label: 'Konut: 3+1 (175 m²)' },
    ],
    proximity: [
      { label: 'Ataşehir Metro', distance: '3 dk',  description: 'M4 metro hattı' },
      { label: 'Kadıköy',        distance: '15 dk', description: 'Kadıköy iskelesi ve çarşı' },
      { label: 'Sabiha Gökçen',  distance: '35 dk', description: 'Sabiha Gökçen Havalimanı' },
      { label: 'TEM Otoyolu',    distance: '5 dk',  description: 'TEM bağlantı yolu' },
    ],
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter(p => p.featured)
}

export function getProjectsByCategory(cat: ProjectCategory): Project[] {
  return PROJECTS.filter(p => p.category === cat)
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return PROJECTS.filter(p => p.status === status)
}

export { IMG as PROJECT_IMAGES }
