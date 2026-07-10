import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'
import { COMPANY } from '@/lib/constants'

export default function ContactBar() {
  return (
    <div className="bg-surface-container-low border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MaterialIcon icon="support_agent" size={22} className="text-primary" />
          <p className="text-sm font-body text-on-surface-variant">
            Proje hakkında bilgi almak ister misiniz?
            <span className="font-semibold text-on-surface ml-1">Uzmanlarımız size yardımcı olsun.</span>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center gap-1.5 border border-primary text-primary text-xs font-bold tracking-wider uppercase px-5 py-3 min-h-[44px] rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300">
            <MaterialIcon icon="call" size={16} />
            Ara
          </a>
          <Link href="/iletisim"
            className="inline-flex items-center gap-1.5 bg-primary text-on-primary text-xs font-bold tracking-wider uppercase px-5 py-3 min-h-[44px] rounded-xl hover:bg-primary-dim transition-all duration-300 shadow-primary">
            <MaterialIcon icon="mail" size={16} />
            Portföy Talep Et
          </Link>
        </div>
      </div>
    </div>
  )
}
