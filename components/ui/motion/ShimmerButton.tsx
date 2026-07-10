'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  external?: boolean
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

/**
 * Üzerinde ince bir parıltı şeridi geçen premium birincil buton.
 * Sitenin altın/kahve paletiyle uyumlu.
 */
export default function ShimmerButton({
  children,
  href,
  external,
  onClick,
  className = '',
  ariaLabel,
}: Props) {
  const cls =
    'group/shimmer relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-on-primary shadow-primary transition-all duration-300 hover:bg-primary-dim hover:shadow-primary-lg ' +
    className

  const shine = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover/shimmer:translate-x-full"
    />
  )

  const content = (
    <>
      {shine}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
        {content}
      </a>
    ) : (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cls} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
