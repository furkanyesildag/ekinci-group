import type { Project } from '@/types'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props { project: Project }

export default function AmenitiesGrid({ project }: Props) {
  return (
    <section className="bg-surface-container py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Özellikler & Olanaklar</SectionLabel>
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-on-surface">Ayrıcalıklı Yaşam</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8">
          {project.amenities.map((amenity, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high group-hover:bg-primary transition-colors duration-300 flex items-center justify-center mb-5 shadow-ambient">
                <MaterialIcon icon={amenity.icon} size={28} className="text-primary group-hover:text-on-primary transition-colors duration-300" />
              </div>
              <h3 className="font-headline text-base font-bold text-on-surface mb-2">{amenity.title}</h3>
              <p className="text-xs text-on-surface-variant font-body leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
