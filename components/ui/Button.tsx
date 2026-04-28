import Link from 'next/link'

type Variant = 'primary' | 'ghost' | 'text' | 'dark'

interface Props {
  children: React.ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

const styles: Record<Variant, string> = {
  primary: 'bg-primary text-on-primary hover:bg-primary-dim shadow-primary hover:shadow-primary-lg',
  ghost:   'border border-primary text-primary hover:bg-primary hover:text-on-primary',
  text:    'text-primary hover:text-primary-dim underline-offset-4 hover:underline',
  dark:    'bg-inverse-surface text-white hover:bg-[#1a1c1a]',
}

const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm tracking-wide transition-all duration-300'

export default function Button({ children, variant = 'primary', href, onClick, className = '', type = 'button' }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`
  if (href) return <Link href={href} className={cls}>{children}</Link>
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
