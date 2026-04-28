import Image from 'next/image'
import type { Project } from '@/types'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props { project: Project }

export default function FloorPlans({ project }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Blueprint image */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-container-high">
          <Image
            src={project.galleryImages[1]?.src ?? project.heroImage.src}
            alt="Kat planı görseli"
            fill
            className="object-cover mix-blend-multiply opacity-70"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>

        {/* Plans list */}
        <div>
          <SectionLabel>Kat Planları</SectionLabel>
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-on-surface mb-3">
            Daire Tipleri
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-8 leading-relaxed">
            Farklı yaşam gereksinimlerine yönelik kat planlarımızı inceleyin. Ayrıntılı planlar için satış ekibimizle iletişime geçin.
          </p>

          <div className="flex flex-col gap-3">
            {project.floorPlans.map((plan, i) => (
              <div key={i}
                className="flex items-center justify-between px-6 py-4 bg-surface rounded-xl hover:bg-surface-container hover:shadow-ambient transition-all duration-200 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-primary font-body">{String(i + 1).padStart(2, '0')}</span>
                  </span>
                  <span className="font-body text-sm font-medium text-on-surface">{plan.label}</span>
                </div>
                <MaterialIcon icon="download" size={18} className="text-outline-variant group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
