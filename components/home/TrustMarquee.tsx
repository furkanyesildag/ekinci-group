import Marquee from '@/components/ui/motion/Marquee'
import MaterialIcon from '@/components/ui/MaterialIcon'

const ITEMS = [
  { icon: 'location_city', label: 'Siirt' },
  { icon: 'apartment', label: 'Konut Projeleri' },
  { icon: 'location_city', label: 'Ankara' },
  { icon: 'storefront', label: 'Ticari Yapılar' },
  { icon: 'location_city', label: 'İstanbul' },
  { icon: 'foundation', label: 'Kentsel Dönüşüm' },
  { icon: 'location_city', label: 'İzmir' },
  { icon: 'verified', label: '1968’den Beri' },
  { icon: 'workspace_premium', label: 'Zamanında Teslim' },
  { icon: 'diamond', label: 'Kalite Odaklı' },
]

export default function TrustMarquee() {
  return (
    <section className="border-y border-outline-variant/20 bg-surface-container-low py-5">
      <Marquee speed={38} pauseOnHover>
        {ITEMS.map((it, i) => (
          <div key={i} className="flex items-center gap-2.5 px-7">
            <MaterialIcon icon={it.icon} size={20} className="text-primary/80" />
            <span className="font-body text-sm font-semibold tracking-wide text-on-surface-variant whitespace-nowrap">
              {it.label}
            </span>
            <span className="ml-7 h-1.5 w-1.5 rounded-full bg-primary/30" />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
