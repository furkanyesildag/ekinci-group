interface Props {
  className?: string
  /** Koyu zeminde mi kullanılıyor (parlaklık artar) */
  dark?: boolean
}

/**
 * Yavaşça süzülen yumuşak altın/kahve parıltı blobları.
 * Ebeveyn `position: relative` + `overflow-hidden` olmalı.
 */
export default function Aurora({ className = '', dark = false }: Props) {
  const op = dark ? 0.55 : 0.4
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div
        className="aurora-blob absolute -left-24 -top-24 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, rgba(202,163,105,${op}), transparent 70%)` }}
      />
      <div
        className="aurora-blob absolute -right-20 top-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, rgba(121,89,39,${op * 0.9}), transparent 70%)`, animationDelay: '-6s' }}
      />
      <div
        className="aurora-blob absolute bottom-[-6rem] left-1/3 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, rgba(251,208,146,${op * 0.8}), transparent 70%)`, animationDelay: '-11s' }}
      />
    </div>
  )
}
