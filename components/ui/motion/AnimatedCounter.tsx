'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, animate, useReducedMotion } from 'framer-motion'

interface Props {
  /** Örn "55+", "2.000+", "50+" — sayı otomatik ayrıştırılır */
  value: string
  className?: string
  duration?: number
}

/** "2.000+" → { prefix:"", number:2000, suffix:"+", decimals:0, useGrouping:true } */
function parse(value: string) {
  const match = value.match(/([^\d]*)([\d.,]+)(.*)/)
  if (!match) return { prefix: '', number: 0, suffix: value, decimals: 0, grouping: false }
  const [, prefix, rawNum, suffix] = match
  // Türkçe biçim: "." binlik ayırıcı, "," ondalık
  const grouping = rawNum.includes('.')
  const cleaned = rawNum.replace(/\./g, '').replace(',', '.')
  const number = parseFloat(cleaned) || 0
  const decimals = cleaned.includes('.') ? cleaned.split('.')[1].length : 0
  return { prefix, number, suffix, decimals, grouping }
}

export default function AnimatedCounter({ value, className, duration = 2 }: Props) {
  const { prefix, number, suffix, decimals, grouping } = parse(value)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  const format = (n: number) =>
    n.toLocaleString('tr-TR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      useGrouping: grouping,
    })

  useEffect(() => {
    if (reduce) {
      setDisplay(format(number))
      return
    }
    if (!inView) return
    const controls = animate(mv, number, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(format(v)),
    })
    return controls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, number, reduce])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
