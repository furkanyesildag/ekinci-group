'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  /** Çocuklar arası gecikme (sn) */
  stagger?: number
  /** İlk çocuğun gecikmesi (sn) */
  delayChildren?: number
  once?: boolean
  as?: 'div' | 'ul' | 'section'
}

interface ItemProps {
  children: ReactNode
  className?: string
  distance?: number
  as?: 'div' | 'li' | 'article'
}

const containerVariants = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

const itemVariants = (distance: number): Variants => ({
  hidden: { opacity: 0, y: distance, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
})

/** Görünüme girince çocuklarını sırayla açar */
export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
  once = true,
  as = 'div',
}: ContainerProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduce) {
    const Tag = as as 'div'
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      variants={containerVariants(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  )
}

/** StaggerContainer içinde tek bir eleman */
export function StaggerItem({ children, className, distance = 24, as = 'div' }: ItemProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduce) {
    const Tag = as as 'div'
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag className={className} variants={itemVariants(distance)}>
      {children}
    </MotionTag>
  )
}
