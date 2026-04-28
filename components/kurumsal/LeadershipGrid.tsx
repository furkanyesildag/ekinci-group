import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'

const leaders = [
  {
    name: 'Ahmet EKİNCİ',
    title: 'Yönetim Kurulu Başkanı',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmHHXbzrbAiSbGK4W-5BIfecXAX-q5fcx2oS_xGBWsfv0fXr_qRHZCEEHQ9XCfZQlWEPqF0TVoO4pgt3M-0AMZEFhLjoqNoNwZZmF86xrQeL80jYo97JD8_9suArregWBZw0vZS2Gil6z3iqQHJNHcCoXjzV7uh2uL99Mrr8Wa8fIU6_8U944Cq6kJngCw9CjLSCuiHmOsTZqgUddJBOnMc9kUiy0nnUANyRuWtXTVbRPvtipJWj0TDXo69xlPs2usk-K93Vqca0ab',
  },
  {
    name: 'Mehmet EKİNCİ',
    title: 'CEO & Genel Müdür',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmzQm-czqTsjlYexf94z2DKQOLVRiqfHYVx3WZjHNyL_C8xojqI8tR09_aiVruqwTkTJHwawymq0cubGWOPp2WqCuVEvZu0aDoNg1ZEXnvT1-du0OGI0X0HGCnVao2G7EytuY-YGx6WtL9VciTJgawujr9mTtuDcEOtSVB4o4wOyQzUw1N8CshkF9PDM5AvIY64BwqL-IDHFnQ_YJHIzBsZFKU8XbSlto-sDB69FY7XGfCEfY7UPJZD2pxsX4E-gSMuvbaosyyZlKm',
  },
  {
    name: 'Zeynep ARSLAN',
    title: 'Baş Mimar',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0D3GtHeo0xDHqBZQVCH-BWWdNar25xmA_Dqawgu0hGTH1jln1Q6Zdz9ubX_v_BAm3KtgG4VPKOcwJYaP5U2xAhdV8KEtp8XrfLnhanr8aIJ1qVPgsKUChO8gxuAWjPCgNT016D16LxowOAioOktjxJxNmswP03i9OYZs8Gf6JaQQ6FGR5m6ERdpJjBtG2dTqCIlW3oFOh_vzsFrbSoBKXqxdx7ox0LLdWbRDMI1KgYq_OiFmoTPndfaphzBGDtJx8uFtIdSIdiT-d',
  },
  {
    name: 'Can YILMAZ',
    title: 'Proje Geliştirme Direktörü',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSf2V_Wr3DKlAQ7tKlYJhIr0eKB1sehKwRoVHw-ACTslH7bMfKthe-FKV8FyckFk1rKCikfZj83oyS5L2I9LujZAwTXj14Ejv-BGtDiR_G6TctBzFBmnnJX-nvjHoN1DknAq5cUeo8Oest8CoFRmQpW1xS2H-76-whtGbyunlLbouBA9BxNc2CackCMkb3JOdXtLGYQcB0bfQZ5TfvO89Gx_QZP9M8S0adcyijlQJihvmNj7qPFBpefXW1I4Hr-K4g9nDwMqdqnZQG',
  },
]

export default function LeadershipGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-14">
        <SectionLabel>Liderlik Ekibi</SectionLabel>
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-surface">
          Vizyonumuzu şekillendirenler
        </h2>
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
