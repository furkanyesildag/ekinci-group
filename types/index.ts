export type ProjectStatus = 'SATIŞTA' | 'TAMAMLANDI' | 'İNŞAAT SÜRÜYOR' | 'YAKINDA'
export type ProjectCategory = 'KONUT' | 'TİCARİ' | 'KARMA'

export interface ProjectImage {
  src: string
  alt: string
  label?: string
}

export interface AmenityItem {
  icon: string
  title: string
  description: string
}

export interface FloorPlanType {
  label: string
  pdfUrl?: string
}

export interface ProximityPoint {
  label: string
  distance: string
  description: string
}

export interface Project {
  slug: string
  name: string
  location: string
  city: string
  status: ProjectStatus
  category: ProjectCategory
  year: number
  tagline: string
  description: string
  narrative: string[]
  heroImage: ProjectImage
  galleryImages: ProjectImage[]
  amenities: AmenityItem[]
  floorPlans: FloorPlanType[]
  proximity: ProximityPoint[]
  featured: boolean
  /** Proje kataloğu PDF yolu (opsiyonel) */
  catalogUrl?: string
  /** Proje tanıtım videosu yolu (opsiyonel) */
  videoUrl?: string
  /** Tamamlanmış projeden gerçek fotoğraflar (16:9, kırpmasız gösterilir) */
  realPhotos?: ProjectImage[]
}

export interface OfficeLocation {
  id: string
  name: string
  address: string
  phone?: string
  email?: string
  imageUrl?: string
  type: 'HQ' | 'SATIS' | 'HIZMET'
}

export interface NavLink {
  label: string
  href: string
}
