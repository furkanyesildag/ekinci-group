import Image from 'next/image'
import { OFFICES, SALES_OFFICES } from '@/lib/constants'
import MaterialIcon from '@/components/ui/MaterialIcon'

export default function OfficeCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Genel Merkez */}
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-ambient-xl">
          {OFFICES[0].imageUrl && (
            <div className="relative h-44 overflow-hidden">
              <Image src={OFFICES[0].imageUrl} alt="EKİNCİ GROUP Genel Merkez" fill className="object-cover" sizes="33vw" />
            </div>
          )}
          <div className="p-7">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary font-body mb-3">Genel Merkez</p>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Siirt Merkez</h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-on-surface-variant font-body leading-relaxed whitespace-pre-line">{OFFICES[0].address}</p>
              <a href={`tel:${OFFICES[0].phone}`}
                className="flex items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors group">
                <MaterialIcon icon="call" size={16} className="text-primary" />
                <span className="group-hover:translate-x-2 transition-transform duration-300">{OFFICES[0].phone}</span>
              </a>
              <a href={`mailto:${OFFICES[0].email}`}
                className="flex items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors group">
                <MaterialIcon icon="mail" size={16} className="text-primary" />
                <span className="group-hover:translate-x-2 transition-transform duration-300">{OFFICES[0].email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Satış Ofisleri */}
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-ambient-xl">
          {OFFICES[1].imageUrl && (
            <div className="relative h-44 overflow-hidden">
              <Image src={OFFICES[1].imageUrl} alt="EKİNCİ GROUP Satış Ofisleri" fill className="object-cover" sizes="33vw" />
            </div>
          )}
          <div className="p-7">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary font-body mb-3">Satış Ofisleri</p>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Türkiye geneli</h3>
            <div className="flex flex-col gap-2">
              {SALES_OFFICES.map(office => (
                <details key={office.city} className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-3 border-b border-outline-variant/20 list-none">
                    <span className="text-sm font-semibold text-on-surface font-body">{office.city}</span>
                    <MaterialIcon icon="expand_more" size={18} className="text-outline-variant group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="pt-3 pb-2 text-xs text-on-surface-variant font-body leading-relaxed space-y-1">
                    <p className="whitespace-pre-line">{office.address}</p>
                    <a href={`tel:${office.phone}`} className="text-primary hover:underline block">{office.phone}</a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Müşteri Hizmetleri */}
        <div className="bg-[#303330] rounded-3xl p-7 shadow-ambient-xl flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary-fixed/60 font-body mb-3">Müşteri Hizmetleri</p>
            <h3 className="font-headline text-xl font-bold text-white mb-6">7/24 Destek</h3>
            <a href={`tel:${OFFICES[2].phone}`} className="font-headline text-4xl font-bold text-primary-fixed block mb-2">
              {OFFICES[2].phone}
            </a>
            <p className="text-xs text-white/50 font-body leading-relaxed">
              Hafta içi ve hafta sonu, günün her saatinde satış danışmanlarımıza ulaşabilirsiniz.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-headline text-sm italic text-white/60 leading-snug">
              &ldquo;Müşteri memnuniyeti, başarımızın ölçütüdür.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
