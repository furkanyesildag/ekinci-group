interface Props {
  /** Işık noktasının uzunluğu (px) */
  size?: number
  /** Tam tur süresi (sn) */
  duration?: number
  className?: string
  colorFrom?: string
  colorTo?: string
  /** Kenar kalınlığı (px) */
  borderWidth?: number
}

/**
 * Kartın kenarında dönen ışık huzmesi. Ebeveyn `position: relative`
 * ve `overflow-hidden` olmalı. Yuvarlaklık ebeveynden miras alınır.
 */
export default function BorderBeam({
  size = 220,
  duration = 8,
  className = '',
  colorFrom = '#CAA369',
  colorTo = '#fbd092',
  borderWidth = 1.5,
}: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border-beam ${className}`}
      style={
        {
          '--bb-size': `${size}px`,
          '--bb-duration': `${duration}s`,
          '--bb-from': colorFrom,
          '--bb-to': colorTo,
          '--bb-border': `${borderWidth}px`,
        } as React.CSSProperties
      }
    />
  )
}
