'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface Props {
  children: ReactNode
  className?: string
  /** Görünüme girince tetiklenir; giriş yönü */
  direction?: Direction
  /** Saniye cinsinden gecikme */
  delay?: number
  /** Saniye cinsinden süre */
  duration?: number
  /** Kaç px kayarak gelsin */
  distance?: number
  /** Bir kere mi oynasın (varsayılan) yoksa her görünümde mi */
  once?: boolean
  /** Blur girişi */
  blur?: boolean
  as?: 'div' | 'section' | 'span' | 'li' | 'article'
}

const offset = (dir: Direction, d: number) => {
  switch (dir) {
    case 'up':    return { y: d }
    case 'down':  return { y: -d }
    case 'left':  return { x: d }
    case 'right': return { x: -d }
    default:      return {}
  }
}

export default function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 28,
  once = true,
  blur = true,
  as = 'div',
}: Props) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduce) {
    const Tag = as as 'div'
    return <Tag className={className}>{children}</Tag>
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offset(direction, distance),
      filter: blur ? 'blur(8px)' : 'blur(0px)',
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25, margin: '0px 0px -80px 0px' }}
    >
      {children}
    </MotionTag>
  )
}
