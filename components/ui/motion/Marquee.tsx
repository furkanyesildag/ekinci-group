'use client'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** saniye — tam tur süresi */
  speed?: number
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
  /** Kenarlarda yumuşak solma */
  fade?: boolean
}

/** CSS tabanlı sonsuz kayan şerit. İçerik iki kez render edilir → kesintisiz döngü. */
export default function Marquee({
  children,
  speed = 40,
  reverse = false,
  pauseOnHover = true,
  className = '',
  fade = true,
}: Props) {
  return (
    <div
      className={`group relative flex w-full overflow-hidden ${className}`}
      style={
        fade
          ? {
              maskImage:
                'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            }
          : undefined
      }
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={`flex shrink-0 items-center marquee-track ${
            pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
          }`}
          style={{
            animationDuration: `${speed}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
