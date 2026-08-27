'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const FILTERS = [
  { label: 'Tümü',   value: '' },
  { label: 'Konut',  value: 'KONUT' },
  { label: 'Ticari', value: 'TİCARİ' },
]

export default function FilterBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const active = searchParams.get('filtre') ?? ''

  const setFilter = (val: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (val) params.set('filtre', val)
    else params.delete('filtre')
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map(f => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`relative px-4 sm:px-5 py-2.5 min-h-[44px] text-[11px] font-bold tracking-[0.1em] uppercase font-body rounded-xl transition-all duration-200 ${
            active === f.value
              ? 'text-primary bg-primary-fixed/40'
              : 'text-on-surface-variant/70 hover:text-primary hover:bg-surface-container'
          }`}
        >
          {f.label}
          {active === f.value && (
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
          )}
        </button>
      ))}
    </div>
  )
}
