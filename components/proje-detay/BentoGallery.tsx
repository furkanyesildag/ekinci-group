import Image from 'next/image'
import type { Project } from '@/types'
import SectionLabel from '@/components/ui/SectionLabel'

interface Props { project: Project }

export default function BentoGallery({ project }: Props) {
  const imgs = project.galleryImages
  if (imgs.length < 3) return null

  /** Tasarım 4 kare bekliyor; sadece 3 görsel varsa dördüncüyü birinciyle tamamlarız */
  const quad = imgs.length >= 4 ? imgs.slice(0, 4) : [...imgs, imgs[0]]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
      <div className="mb-8">
        <SectionLabel>Proje Galerisinden</SectionLabel>
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-on-surface">Seçilmiş Kareler</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* Large — col-span-2 row-span-2 */}
        <div className="group relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden min-h-[300px] md:min-h-0">
          <Image src={quad[0].src} alt={quad[0].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent" />
          {quad[0].label && (
            <div className="absolute bottom-5 left-5">
              <span className="text-xs tracking-widest uppercase text-white/70 font-body font-bold">{quad[0].label}</span>
            </div>
          )}
        </div>

        {/* Top right — col-span-2 */}
        <div className="group relative md:col-span-2 rounded-2xl overflow-hidden min-h-[180px] md:min-h-0">
          <Image src={quad[1].src} alt={quad[1].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 50vw" />
          {quad[1].label && (
            <div className="absolute bottom-4 left-4">
              <span className="text-xs tracking-widest uppercase text-white/70 font-body font-bold bg-black/30 px-3 py-1 rounded-full">{quad[1].label}</span>
            </div>
          )}
        </div>

        {/* Bottom right 2 cells */}
        <div className="group relative rounded-2xl overflow-hidden min-h-[180px] md:min-h-0">
          <Image src={quad[2].src} alt={quad[2].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 25vw" />
        </div>
        <div className="group relative rounded-2xl overflow-hidden min-h-[180px] md:min-h-0">
          <Image src={quad[3].src} alt={quad[3].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 25vw" />
        </div>
      </div>
    </section>
  )
}
