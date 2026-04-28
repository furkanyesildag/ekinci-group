import Link from 'next/link'
import Image from 'next/image'
import MaterialIcon from '@/components/ui/MaterialIcon'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <Link href="/" className="mb-10 hover:opacity-80 transition-opacity">
        <Image src="/logo.png" alt="EKİNCİ GROUP İNŞAAT" width={160} height={52} className="object-contain h-12 w-auto brightness-0" />
      </Link>
      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary font-body mb-4">404</p>
      <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface mb-4">
        Sayfa<br />Bulunamadı
      </h1>
      <p className="text-on-surface-variant font-body text-base max-w-sm mb-10 leading-relaxed">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfadan devam edebilirsiniz.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/"
          className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-primary-dim shadow-primary transition-all duration-300">
          <MaterialIcon icon="home" size={18} className="text-primary-fixed" />
          Ana Sayfaya Dön
        </Link>
        <Link href="/projeler"
          className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-primary hover:text-on-primary transition-all duration-300">
          <MaterialIcon icon="apartment" size={18} />
          Projeleri İncele
        </Link>
      </div>
    </div>
  )
}
