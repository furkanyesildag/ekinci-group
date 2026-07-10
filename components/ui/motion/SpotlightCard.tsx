'use client'

import { useRef, useState, type ReactNode, type MouseEvent } from 'react'

interface Props {
  children: ReactNode
  className?: string
  /** Parıltı rengi (rgba/hex) */
  glow?: string
  /** Parıltı yarıçapı px */
  radius?: number
}

/** İmleci takip eden yumuşak radyal parıltı — kart içine sarılır. */
export default function SpotlightCard({
  children,
  className = '',
  glow = 'rgba(202,163,105,0.25)',
  radius = 360,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, ${glow}, transparent 65%)`,
        }}
      />
      {children}
    </div>
  )
}
