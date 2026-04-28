import { COMPANY } from '@/lib/constants'

export default function MapSection() {
  return (
    <section className="relative h-[500px] overflow-hidden bg-[#1a1c1a]">
      {/* Stylized grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 208, 146, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 208, 146, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fbd092 0%, transparent 70%)' }} />

      {/* Center marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="relative">
          <span className="absolute -inset-3 rounded-full bg-primary animate-ping opacity-30" />
          <span className="relative w-4 h-4 rounded-full bg-primary block shadow-primary" />
        </div>
        {/* Tooltip */}
        <div className="mt-4 bg-surface-container-low rounded-xl px-5 py-3 shadow-ambient-xl text-center min-w-[220px]">
          <p className="font-body text-xs font-bold text-on-surface">{COMPANY.nameShort} İNŞAAT</p>
          <p className="font-body text-[11px] text-on-surface-variant mt-0.5">Levent Loft, Büyükdere Cad.</p>
          <p className="font-body text-[11px] text-primary mt-0.5">Levent / İstanbul</p>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-xs font-body transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 16" }}>open_in_new</span>
          Google Maps&apos;te Aç
        </a>
      </div>
    </section>
  )
}
