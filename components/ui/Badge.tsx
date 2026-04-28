import type { ProjectStatus } from '@/types'

const styles: Record<ProjectStatus, string> = {
  'SATIŞTA':        'bg-gold-accent text-white shadow-md shadow-gold-accent/30 animate-pulse',
  'TAMAMLANDI':     'bg-primary/90 text-on-primary backdrop-blur-md',
  'İNŞAAT SÜRÜYOR': 'bg-secondary text-white',
  'YAKINDA':        'bg-on-surface/80 text-surface',
}

interface Props {
  status: ProjectStatus
  className?: string
}

export default function Badge({ status, className = '' }: Props) {
  return (
    <span className={`inline-block px-4 py-1.5 rounded text-[10px] font-bold tracking-widest uppercase ${styles[status]} ${className}`}>
      {status}
    </span>
  )
}
