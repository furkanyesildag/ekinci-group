import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'
import Reveal from '@/components/ui/motion/Reveal'
import BorderBeam from '@/components/ui/motion/BorderBeam'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion/Stagger'

const values = [
  {
    icon: 'verified_user',
    title: 'Güven',
    description: 'Güven, inşa ettiğimiz her yapının temelidir. Müşterilerimize verdiğimiz her sözü, zamanında ve eksiksiz yerine getirme taahhüdü taşıyoruz.',
    highlight: false,
  },
  {
    icon: 'architecture',
    title: 'Estetik',
    description: 'Mimari güzellik ve işlevsellik, bizim için birbirini tamamlayan iki unsurdur. Her projemizde zamansız bir estetik anlayışı benimsiyoruz.',
    highlight: true,
  },
  {
    icon: 'diamond',
    title: 'Kalite',
    description: 'Kullandığımız malzemelerden uygulama süreçlerine kadar her detayda en yüksek kalite standartlarını gözetiyoruz.',
    highlight: false,
  },
]

export default function ValuesGrid() {
  return (
    <section className="bg-surface-container py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10 md:mb-14">
          <SectionLabel>Değerlerimiz</SectionLabel>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-on-surface">
            Bizi biz yapan üç ilke
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 items-start" stagger={0.14}>
          {values.map((v) => (
            <StaggerItem
              key={v.title}
              className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 ${
                v.highlight
                  ? 'bg-primary text-on-primary sm:translate-y-8 shadow-primary-lg'
                  : 'bg-surface-container-lowest shadow-ambient hover:shadow-ambient-xl'
              }`}
            >
              {v.highlight && <BorderBeam duration={8} colorFrom="#fbd092" colorTo="#ffffff" />}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${v.highlight ? 'bg-primary-fixed/20' : 'bg-primary-fixed'}`}>
                <MaterialIcon icon={v.icon} size={26} className={v.highlight ? 'text-primary-fixed' : 'text-primary'} />
              </div>
              <h3 className={`font-headline text-2xl font-bold mb-4 ${v.highlight ? 'text-on-primary' : 'text-on-surface'}`}>{v.title}</h3>
              <p className={`font-body text-sm leading-relaxed ${v.highlight ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>{v.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
