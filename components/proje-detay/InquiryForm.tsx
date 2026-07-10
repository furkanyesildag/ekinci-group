import Link from 'next/link'
import type { Project } from '@/types'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props {
  project: Project
}

export default function InquiryForm({ project }: Props) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="rounded-3xl border border-outline-variant/30 bg-surface-container-low/50 px-5 py-8 sm:px-8 sm:py-12 md:px-14 md:py-14 text-center shadow-ambient">
        <SectionLabel>İletişim</SectionLabel>
          <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tighter text-on-surface mt-3 mb-4 text-balance">
          {project.name} hakkında bilgi alın
        </h2>
        <p className="text-on-surface-variant font-body text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-10">
          Telefon, e-posta ve ofis bilgilerimiz iletişim sayfamızda. Ekibimiz taleplerinize en kısa sürede dönüş yapmaktadır.
        </p>
        <Link
          href="/iletisim"
          className="inline-flex items-center justify-center gap-2.5 bg-primary text-on-primary px-10 py-4 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-primary-dim shadow-primary hover:shadow-primary-lg transition-all duration-300 group"
        >
          <MaterialIcon icon="mail" size={20} className="text-primary-fixed" />
          İletişime Geçin
          <MaterialIcon
            icon="arrow_forward"
            size={18}
            className="text-primary-fixed group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>
    </section>
  )
}
