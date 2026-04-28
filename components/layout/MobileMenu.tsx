'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, COMPANY } from '@/lib/constants'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  const pathname = usePathname()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-on-surface/40 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-full z-50 bg-surface shadow-ambient-xl transition-transform duration-400 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Link href="/" onClick={onClose}>
              <Image src="/logo.png" alt={COMPANY.name} width={130} height={42} className="object-contain h-10 w-auto brightness-0" />
            </Link>
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors">
              <MaterialIcon icon="close" size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-2 flex-1">
            <Link href="/" onClick={onClose} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-medium transition-colors ${pathname === '/' ? 'bg-primary-fixed text-on-primary-fixed' : 'text-on-surface hover:bg-surface-container'}`}>
              <MaterialIcon icon="home" size={20} />
              Ana Sayfa
            </Link>
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href} onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-medium transition-colors ${pathname === link.href ? 'bg-primary-fixed text-on-primary-fixed' : 'text-on-surface hover:bg-surface-container'}`}
              >
                <MaterialIcon icon={link.href === '/projeler' ? 'apartment' : link.href === '/kurumsal' ? 'groups' : 'mail'} size={20} />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-8 pt-8 border-t border-outline-variant/30">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-on-surface-variant">
              <MaterialIcon icon="call" size={18} />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
