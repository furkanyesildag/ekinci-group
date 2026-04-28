interface Props {
  children: React.ReactNode
  light?: boolean
  className?: string
}

export default function SectionLabel({ children, light = false, className = '' }: Props) {
  return (
    <p className={`text-[11px] font-bold tracking-[0.2em] uppercase font-body mb-4 ${light ? 'text-primary-fixed/80' : 'text-primary'} ${className}`}>
      {children}
    </p>
  )
}
