import type { Metadata } from 'next'
import { Noto_Serif, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/ui/WhatsAppFAB'
import ChatWidget from '@/components/ui/ChatWidget'
import ScrollProgress from '@/components/ui/motion/ScrollProgress'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'EKİNCİ GROUP İNŞAAT | Geleceğin Yaşam Alanlarını İnşa Ediyoruz',
    template: '%s | EKİNCİ GROUP İNŞAAT',
  },
  description: '1968\'den beri Türkiye\'de konut, ticari yapılar ve kentsel dönüşüm projeleri. Ankara, İstanbul ve Siirt\'te operasyonları bulunan Ekinci Şirketler Grubu.',
  keywords: ['inşaat', 'konut', 'Ekinci Group', 'Siirt', 'gayrimenkul', 'kentsel dönüşüm', 'EKİNCİ GROUP'],
  openGraph: {
    siteName: 'EKİNCİ GROUP İNŞAAT',
    locale: 'tr_TR',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body className="font-body bg-surface text-on-surface antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <ChatWidget />
      </body>
    </html>
  )
}
