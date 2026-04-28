'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'
import { PROJECTS } from '@/lib/projects'
import Badge from '@/components/ui/Badge'
import MaterialIcon from '@/components/ui/MaterialIcon'

// Sadece featured projeleri hero'da göster
const SLIDES = PROJECTS.filter(p => p.featured)

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
    setCurrent(((index % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Otomatik oynatma
  useEffect(() => {
    if (paused || isDragging) return
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

  // Slayta tıklandığında proje detayına git (sürükleme değilse)
  const handleSlideClick = (slug: string) => {
    if (Math.abs(dragDeltaX) > 10) return
    router.push(`/projeler/${slug}`)
  }

  const slide = SLIDES[current]

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
        onClick={() => handleSlideClick(slide.slug)}
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
              sizes="100vw"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-on-surface/55 via-on-surface/20 to-on-surface/65 z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />

      {/* ── ANA İÇERİK ── */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 pt-20 pointer-events-none">
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary-fixed/80 font-body mb-5">
          Est. 1974 · İstanbul · Bodrum · Ankara
        </p>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-[1.05] max-w-5xl mb-5 text-balance">
          Yarının Yaşam<br />
          <em className="not-italic text-primary-fixed">Standartlarını</em><br />
          Bugünden İnşa Ediyoruz
        </h1>
        <p className="text-base md:text-lg text-white/70 font-body max-w-xl mb-10 leading-relaxed">
          50 yılı aşkın tecrübe, 2.5 milyon m² tamamlanmış alan ve sınırsız mükemmellik anlayışı.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center pointer-events-auto">
          <Link href="/projeler"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-primary-dim shadow-primary hover:shadow-primary-lg transition-all duration-300">
            <MaterialIcon icon="apartment" size={18} className="text-primary-fixed" />
            Projelerimizi Keşfet
          </Link>
          <Link href="/iletisim"
            className="inline-flex items-center gap-2 border border-white/50 text-white px-8 py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
            İletişime Geç
          </Link>
        </div>
      </div>

      {/* ── AKTİF PROJE KARTI (sol alt) ── */}
      <div className="absolute left-6 lg:left-10 bottom-24 z-20 pointer-events-auto">
        <Link href={`/projeler/${slide.slug}`}
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

      {/* ── PREV / NEXT ── */}
      <div className="absolute right-6 lg:right-10 bottom-24 z-20 flex gap-2 pointer-events-auto">
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

      {/* ── OTOMATİK OYNATMA İLERLEME ÇUBUĞU ── */}
      {!paused && (
        <div className="absolute bottom-0 left-0 z-20 h-0.5 bg-primary/60 pointer-events-none"
          style={{
            width: '100%',
            animation: `progressBar ${AUTO_PLAY_MS}ms linear`,
            animationFillMode: 'forwards',
          }}
        />
      )}

      {/* Scroll cue */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/35 pointer-events-none">
        <span className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes progressBar {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </section>
  )
}
