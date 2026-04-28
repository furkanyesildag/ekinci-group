import Link from 'next/link'
import Image from 'next/image'
import { COMPANY, NAV_LINKS } from '@/lib/constants'
import MaterialIcon from '@/components/ui/MaterialIcon'

export default function Footer() {
  return (
    <footer className="bg-[#1c1e1b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo — beyaz/altın versiyonu koyu footer üzerinde mükemmel */}
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt={COMPANY.name}
                width={180}
                height={58}
                className="object-contain h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-white/50 font-body leading-relaxed max-w-xs mb-6">
              1968&apos;den beri Türkiye&apos;nin çeşitli illerinde konut, ticari yapılar ve taahhüt işleriyle güvenilir teslim.
            </p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm text-white/50 hover:text-primary-fixed transition-colors">
                <MaterialIcon icon="call" size={16} className="text-primary-fixed/60" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-sm text-white/50 hover:text-primary-fixed transition-colors">
                <MaterialIcon icon="mail" size={16} className="text-primary-fixed/60" />
                {COMPANY.email}
              </a>
              <p className="flex items-start gap-2 text-sm text-white/50">
                <MaterialIcon icon="location_on" size={16} className="mt-0.5 shrink-0 text-primary-fixed/60" />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </p>
            </div>
          </div>

          {/* Keşfet */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/30 font-body mb-5">Keşfet</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-sm text-white/50 hover:text-primary-fixed transition-colors font-body">Ana Sayfa</Link></li>
              {NAV_LINKS.map(l => (
                <li key={l.href}><Link href={l.href} className="text-sm text-white/50 hover:text-primary-fixed transition-colors font-body">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/30 font-body mb-5">Kurumsal</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/kurumsal" className="text-sm text-white/50 hover:text-primary-fixed transition-colors font-body">Hakkımızda</Link></li>
              <li><Link href="/kurumsal" className="text-sm text-white/50 hover:text-primary-fixed transition-colors font-body">Sürdürülebilirlik</Link></li>
              <li><Link href="/iletisim" className="text-sm text-white/50 hover:text-primary-fixed transition-colors font-body">Kariyer</Link></li>
              <li><Link href="/iletisim" className="text-sm text-white/50 hover:text-primary-fixed transition-colors font-body">Medya & Basın</Link></li>
              <li>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white/50 hover:text-primary-fixed transition-colors font-body">
                  <MaterialIcon icon="chat" size={15} />WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-body">
            © {new Date().getFullYear()} {COMPANY.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/25 font-body">
            <span>Gizlilik Politikası</span>
            <span className="opacity-40">·</span>
            <span>KVKK Aydınlatma Metni</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
