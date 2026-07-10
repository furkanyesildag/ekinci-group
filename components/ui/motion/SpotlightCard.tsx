'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'

interface Props {
  children: ReactNode
  className?: string
  /** Parıltı rengi (rgba/hex) */
  glow?: string
  /** Parıltı yarıçapı px */
  radius?: number
}

/**
 * İmleci takip eden yumuşak radyal parıltı.
 * Performans: setState yok — konum doğrudan CSS değişkenine yazılır (re-render yok).
 * Yalnızca hover destekli (masaüstü) cihazlarda görünür; dokunmatikte tamamen atıl.
 */
export default function SpotlightCard({
  children,
  className = '',
  glow = 'rgba(202,163,105,0.22)',
  radius = 340,
}: Props) {
  const glowRef = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = glowRef.current
    if (!el) return
    const rect = e.currentTarget.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      onMouseMove={onMove}
      className={`spotlight-host relative overflow-hidden ${className}`}
    >
      <div
        ref={glowRef}
        className="spotlight-glow pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 50%), ${glow}, transparent 65%)`,
        }}
      />
      {children}
    </div>
  )
}
