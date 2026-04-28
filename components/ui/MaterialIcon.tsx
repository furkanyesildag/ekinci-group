interface Props {
  icon: string
  fill?: boolean
  weight?: number
  size?: number
  className?: string
}

export default function MaterialIcon({ icon, fill = false, weight = 300, size = 24, className = '' }: Props) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
        fontSize: `${size}px`,
        lineHeight: 1,
      }}
    >
      {icon}
    </span>
  )
}
