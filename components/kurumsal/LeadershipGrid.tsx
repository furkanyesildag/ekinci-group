import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { publicImage } from '@/lib/publicImage'

/** Gerçek portre görselleri olmadığı için yerel proje/kurumsal fotoğraflarıyla temsil edilir */
const leaders = [
  {
    name: 'Yönetim Kurulu',
    title: 'Strateji ve kurumsal işleyiş',
    img: publicImage('armada/armada.jpeg'),
  },
  {
    name: 'Teknik Koordinasyon',
    title: 'İnşaat ve mühendislik',
    img: publicImage('royalpark/royal.jpeg'),
  },
  {
    name: 'Proje Geliştirme',
    title: 'Planlama ve sahada uygulama',
    img: publicImage('plaza/plaza.jpeg'),
  },
  {
    name: 'Müşteri İlişkileri',
    title: 'Satış ve teslim süreçleri',
    img: publicImage('ekinci.jpg'),
  },
]

export default function LeadershipGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-14">
        <SectionLabel>Ekibimiz</SectionLabel>
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface">
          Projelerimizi taşıyan yapı
        </h2>
        <p className="mt-4 text-sm text-on-surface-variant font-body max-w-2xl mx-auto leading-relaxed">
          Kişisel tanıtım görselleri yerine, Ekinci Group’un üstlendiği projelerden oluşturulmuş görsel özetler.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
        {leaders.map((leader, i) => (
          <div key={leader.name} className={`group ${i % 2 === 1 ? 'lg:translate-y-12' : ''}`}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 shadow-ambient">
              <Image
                src={leader.img}
                alt={leader.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
            <h3 className="font-headline text-sm font-bold text-on-surface tracking-tight">{leader.name}</h3>
            <p className="text-[11px] tracking-[0.1em] uppercase text-primary font-body font-bold mt-1">{leader.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
