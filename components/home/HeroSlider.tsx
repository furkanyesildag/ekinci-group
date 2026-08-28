'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'
import type { ProjectStatus } from '@/types'
import { publicImage } from '@/lib/publicImage'
import Badge from '@/components/ui/Badge'
import MaterialIcon from '@/components/ui/MaterialIcon'
import ShimmerButton from '@/components/ui/motion/ShimmerButton'
import Magnetic from '@/components/ui/motion/Magnetic'

type HeroSlide = {
  slug: string
  name: string
  location: string
  status: ProjectStatus
  heroImage: { src: string; alt: string }
  /** Tıklanınca gidilecek özel bağlantı (proje değilse) */
  link?: string
  /** Marka görseli — sol alttaki proje kartı gösterilmez */
  hideCard?: boolean
  /** object-position — mobil dik kırpmada görselin odak noktası */
  focus?: string
}

// Küratörlü premium hero: amiral gemisi Ekinci Prime + Öztatlı gece + marka render'ı
const SLIDES: HeroSlide[] = [
  {
    slug: 'ekinci-prime',
    name: 'Ekinci Prime',
    location: 'Siirt',
    status: 'SATIŞTA',
    heroImage: {
      src: publicImage('prime/aerial-gece.jpg'),
      alt: 'Ekinci Prime — aydınlatılmış konut kompleksi gece kuşbakışı',
    },
    link: '/projeler/ekinci-prime',
    focus: '50% 45%',
  },
  {
    slug: 'oztatli-konutlari',
    name: 'Öztatlı Konutları',
    location: 'Siirt',
    status: 'TAMAMLANDI',
    heroImage: {
      src: publicImage('hero-gece.jpg'),
      alt: 'Öztatlı Konutları — aydınlatılmış konut projesi gece görünümü',
    },
    link: '/projeler/oztatli-konutlari',
    focus: '50% 50%',
  },
  {
    slug: 'brand-vizyon',
    name: 'EKİNCİ GROUP',
    location: 'Türkiye',
    status: 'TAMAMLANDI',
    heroImage: {
      src: publicImage('hero-kurumsal.jpg'),
      alt: 'EKİNCİ GROUP — gün batımında modern yaşam',
    },
    link: '/projeler',
    hideCard: true,
    focus: '78% 45%',
  },
]

const slideHref = (s: HeroSlide) => s.link ?? `/projeler/${s.slug}`

const AUTO_PLAY_MS = 6000

export default function HeroSlider() {
  const router = useRouter()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragDeltaX, setDragDeltaX] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((index: number) => {
    if (SLIDES.length === 0) return
    setCurrent(((index % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Otomatik oynatma
  useEffect(() => {
    if (SLIDES.length === 0 || paused || isDragging) return
    timerRef.current = setTimeout(next, AUTO_PLAY_MS)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, paused, isDragging, next])

  // --- Mouse sürükleme ---
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStartX(e.clientX)
    setDragDeltaX(0)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setDragDeltaX(e.clientX - dragStartX)
  }
  const onMouseUp = () => {
    if (!isDragging) return
    if (dragDeltaX < -50) next()
    else if (dragDeltaX > 50) prev()
    setIsDragging(false)
    setDragDeltaX(0)
  }

  // --- Touch sürükleme ---
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setDragStartX(e.touches[0].clientX)
    setDragDeltaX(0)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    setDragDeltaX(e.touches[0].clientX - dragStartX)
  }
  const onTouchEnd = () => {
    if (dragDeltaX < -40) next()
    else if (dragDeltaX > 40) prev()
    setIsDragging(false)
    setDragDeltaX(0)
  }

  // Slayta tıklandığında proje detayına (veya showcase bağlantısına) git (sürükleme değilse)
  const handleSlideClick = (href: string) => {
    if (Math.abs(dragDeltaX) > 10) return
    router.push(href)
  }

  if (SLIDES.length === 0) {
    return (
      <section className="relative -mt-[72px] flex min-h-[600px] w-full items-center justify-center bg-on-surface px-6 pt-20 text-center text-white">
        <p className="font-body text-sm text-white/80">
          Projeler yüklenemedi. Lütfen sayfayı yenileyin veya{' '}
          <Link href="/projeler" className="text-primary-fixed underline">
            projeler
          </Link>{' '}
          sayfasına gidin.
        </p>
      </section>
    )
  }

  const slide = SLIDES[current] ?? SLIDES[0]

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden -mt-[72px] select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); if (isDragging) { setIsDragging(false); setDragDeltaX(0) } }}
    >
      {/* ── SLIDE TRACK ── */}
      <div
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={() => handleSlideClick(slideHref(slide))}
      >
        {SLIDES.map((s, i) => (
          <div
            key={s.slug}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
          >
            <Image
              src={s.heroImage.src}
              alt={s.heroImage.alt}
              fill
              priority={i === 0}
              className={`object-cover transition-transform duration-[8000ms] ease-linear ${i === current ? 'scale-110' : 'scale-100'}`}
              style={{ objectPosition: s.focus ?? '50% 50%' }}
              sizes="100vw"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays — parlak gündüz görsellerinde bile başlık okunur kalsın */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70 z-10 pointer-events-none" />
      {/* Merkez vinyet: yazının arkasını koyulaştırır, kenarlarda görsel açık kalır */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 75% 60% at 50% 42%, rgba(0,0,0,0.55), rgba(0,0,0,0.12) 62%, transparent 78%)' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />

      {/* ── ANA İÇERİK — saf CSS giriş (mobilde güvenli, JS beklemez) ── */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 pt-20 pointer-events-none">
        <p className="hero-in flex items-center gap-2 text-[11px] sm:text-[15px] font-bold tracking-[0.25em] text-primary-fixed/80 font-body mb-5" style={{ animationDelay: '0.05s' }}>
          <span className="hidden sm:inline h-px w-8 bg-primary-fixed/50" />
          EST. 1968 · İSTANBUL · ANKARA · İZMİR · SİİRT
          <span className="hidden sm:inline h-px w-8 bg-primary-fixed/50" />
        </p>
        <h1 className="hero-in font-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-[1.05] max-w-5xl mb-5 text-balance" style={{ animationDelay: '0.18s' }}>
          Yarının Yaşam<br />
          <em className="not-italic text-gradient-gold">Standartlarını</em><br />
          Bugünden İnşa Ediyoruz
        </h1>
        <p className="hero-in text-sm md:text-lg text-white/70 font-body max-w-xl mb-8 leading-relaxed px-2 sm:px-0" style={{ animationDelay: '0.32s' }}>
          Yarım asırdan fazla tecrübe; konut, ticari yapılar ve kentsel dönüşümde güvenilir teslim.
        </p>
        <div className="hero-in flex flex-col sm:flex-row gap-3 sm:gap-4 items-center pointer-events-auto w-full sm:w-auto px-4 sm:px-0" style={{ animationDelay: '0.45s' }}>
          <Magnetic className="w-full sm:w-auto">
            <ShimmerButton href="/projeler" className="w-full sm:w-auto">
              <MaterialIcon icon="apartment" size={18} className="text-primary-fixed" />
              Projelerimizi Keşfet
            </ShimmerButton>
          </Magnetic>
          <Magnetic className="w-full sm:w-auto">
            <Link href="/iletisim"
              className="inline-flex items-center justify-center gap-2 border border-white/50 text-white w-full sm:w-auto px-8 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              İletişime Geç
            </Link>
          </Magnetic>
        </div>
      </div>

      {/* ── AKTİF PROJE KARTI (sol alt) — yalnızca gerçek proje slaytlarında ── */}
      {!slide.hideCard && (
        <div className="absolute left-4 lg:left-10 bottom-24 z-20 pointer-events-auto hidden sm:block">
          <Link href={slideHref(slide)}
            className="group flex items-center gap-4 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 hover:bg-black/50 transition-all duration-300 max-w-xs">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
              <Image src={slide.heroImage.src} alt={slide.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="56px" />
            </div>
            <div>
              <Badge status={slide.status} className="mb-1.5" />
              <p className="font-headline text-sm font-bold text-white leading-tight">{slide.name}</p>
              <p className="text-[11px] text-white/60 font-body flex items-center gap-1 mt-0.5">
                <MaterialIcon icon="location_on" size={12} className="text-primary-fixed" />
                {slide.location}
              </p>
            </div>
            <MaterialIcon icon="arrow_forward" size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ml-auto" />
          </Link>
        </div>
      )}

      {/* ── PREV / NEXT ── */}
      <div className="absolute right-4 lg:right-10 bottom-24 z-20 flex gap-2 pointer-events-auto">
        <button onClick={prev}
          className="w-11 h-11 rounded-full border border-white/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/15 transition-all duration-200">
          <MaterialIcon icon="arrow_back" size={18} />
        </button>
        <button onClick={next}
          className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-primary-dim shadow-primary transition-all duration-200">
          <MaterialIcon icon="arrow_forward" size={18} />
        </button>
      </div>

      {/* ── DOT İNDİKATÖRLERİ (orta alt) ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 pointer-events-auto">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-400 ${
              i === current ? 'w-7 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/60'
            }`}
            aria-label={`Slayt ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}
