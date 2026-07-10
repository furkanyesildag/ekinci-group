'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/constants'
import MobileMenu from './MobileMenu'
import MaterialIcon from '@/components/ui/MaterialIcon'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hero sayfalarında navbar transparan + beyaz logo; scroll sonrası glass + koyu logo
  const isHeroPage = pathname === '/' || pathname === '/projeler' || pathname === '/kurumsal' || pathname === '/iletisim'
  const logoLight = isHeroPage && !scrolled

  return (
    <>
      <header className={`sticky top-0 z-30 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-outline/10 shadow-ambient' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="relative block hover:opacity-90 transition-opacity duration-200">
              <Image
                src="/logo.png"
                alt="EKİNCİ GROUP İNŞAAT"
                width={160}
                height={52}
                priority
                className={`object-contain h-12 w-auto transition-all duration-300 ${
                  logoLight
                    ? 'brightness-100'          // beyaz/altın logo — koyu hero üzerinde mükemmel
                    : 'brightness-0'             // siyaha çevir — açık glass navbar üzerinde görünür
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <Link key={link.href} href={link.href}
                  className={`relative text-[11px] font-bold tracking-[0.15em] uppercase font-body transition-colors duration-200 group pb-1 ${
                    pathname === link.href
                      ? logoLight ? 'text-white' : 'text-primary'
                      : logoLight
                        ? 'text-white/80 hover:text-white'
                        : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ${
                    logoLight ? 'bg-white' : 'bg-primary'
                  } ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <Link href="/iletisim"
                className={`hidden md:inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-xl transition-all duration-300 ${
                  logoLight
                    ? 'border border-white/50 text-white hover:bg-white/15 backdrop-blur-sm'
                    : 'bg-primary text-on-primary hover:bg-primary-dim shadow-primary hover:shadow-primary-lg'
                }`}
              >
                <MaterialIcon icon="mail" size={16} />
                İletişime Geç
              </Link>
              {/* Hamburger */}
              <button
                className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-white/10 transition-colors`}
                onClick={() => setMenuOpen(true)}
                aria-label="Menüyü aç"
              >
                <span className={`w-5 h-0.5 rounded-full ${logoLight ? 'bg-white' : 'bg-on-surface'}`} />
                <span className={`w-4 h-0.5 rounded-full ${logoLight ? 'bg-white' : 'bg-on-surface'}`} />
                <span className={`w-5 h-0.5 rounded-full ${logoLight ? 'bg-white' : 'bg-on-surface'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
