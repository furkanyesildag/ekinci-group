'use client'

import { useState, useRef, useEffect } from 'react'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'Projeleriniz hakkında bilgi alabilir miyim?',
  'Satış ofisleriniz nerede?',
  'İletişim bilgileriniz nelerdir?',
]

function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 2C7.477 2 3 6.254 3 11.5c0 2.196.8 4.21 2.118 5.788L4 22l5.118-1.964A10.17 10.17 0 0013 21c5.523 0 10-4.254 10-9.5S18.523 2 13 2z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="11.5" r="1.25" fill="currentColor" />
      <circle cx="13" cy="11.5" r="1.25" fill="currentColor" />
      <circle cx="17" cy="11.5" r="1.25" fill="currentColor" />
    </svg>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function send(text: string) {
    if (!text.trim() || loading) return
    const userMsg: Message = { role: 'user', content: text.trim() }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setShowSuggestions(false)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply ?? data.error ?? 'Bir hata oluştu.' }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Bağlantı hatası. Lütfen tekrar deneyin.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat paneli */}
      <div
        className={`fixed left-3 right-3 sm:left-6 sm:right-auto sm:w-[390px] z-[60] rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${
          open ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{
          bottom: '5rem',
          maxHeight: 'calc(100vh - 7rem)',
          transformOrigin: 'bottom left',
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-inverse-surface shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shrink-0 text-on-primary">
            <ChatIcon />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-body font-semibold text-sm text-white leading-none">Ekinci Asistan</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              <p className="font-body text-[11px] text-white/50">Çevrimiçi · EKİNCİ GROUP</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
            aria-label="Kapat"
          >
            <MaterialIcon icon="close" size={18} className="text-white/70" />
          </button>
        </div>

        {/* Mesajlar */}
        <div className="flex-1 overflow-y-auto bg-surface-container-low px-4 py-4 flex flex-col gap-3 min-h-[200px]">

          {/* Karşılama mesajı */}
          {messages.length === 0 && (
            <div className="flex gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5 text-on-primary">
                <ChatIcon />
              </div>
              <div className="bg-surface rounded-2xl rounded-tl-sm px-4 py-3 max-w-[88%] shadow-sm">
                <p className="text-sm text-on-surface font-body leading-relaxed">
                  Merhaba, hoş geldiniz! 👋<br />
                  Ben <strong>Ekinci Asistan</strong>, EKİNCİ GROUP İNŞAAT&apos;ın dijital yardımcısıyım.<br /><br />
                  Projelerimiz, satış ofislerimiz veya iletişim hakkında size yardımcı olmaktan memnuniyet duyarım.
                </p>
              </div>
            </div>
          )}

          {/* Konuşma */}
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5 text-on-primary">
                  <ChatIcon />
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl max-w-[88%] shadow-sm text-sm font-body leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-primary text-on-primary rounded-tr-sm'
                    : 'bg-surface text-on-surface rounded-tl-sm'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {/* Yazıyor göstergesi */}
          {loading && (
            <div className="flex gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5 text-on-primary">
                <ChatIcon />
              </div>
              <div className="bg-surface rounded-2xl rounded-tl-sm px-4 py-3.5 shadow-sm">
                <div className="flex gap-1.5 items-center h-4">
                  <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Öneri butonları */}
        {showSuggestions && (
          <div className="flex flex-col gap-1.5 px-4 py-3 bg-surface-container-low border-t border-outline-variant/15 shrink-0">
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-left text-xs font-body text-primary bg-primary/8 hover:bg-primary/15 rounded-xl px-3.5 py-2.5 transition-colors duration-200 active:scale-[0.98]"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="flex items-center gap-2 px-3 py-3 bg-surface border-t border-outline-variant/20 shrink-0">
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="Mesajınızı yazın..."
            className="flex-1 bg-surface-container rounded-xl px-4 py-2.5 text-sm font-body text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:ring-2 focus:ring-primary/30 transition-shadow min-w-0"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading}
            className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0 hover:bg-primary-dim disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
          >
            <MaterialIcon icon="send" size={17} className="text-on-primary" />
          </button>
        </div>
      </div>

      {/* FAB butonu */}
      <button
        onClick={() => setOpen(v => !v)}
        className={`fixed bottom-6 left-4 sm:left-6 z-[60] flex items-center gap-2.5 shadow-xl transition-all duration-300 ${
          open
            ? 'bg-inverse-surface text-white w-12 h-12 rounded-2xl justify-center'
            : 'bg-primary text-on-primary px-4 h-12 rounded-2xl hover:bg-primary-dim hover:scale-105'
        }`}
        aria-label="Ekinci Asistan"
      >
        {open ? (
          <MaterialIcon icon="close" size={22} className="text-white" />
        ) : (
          <>
            <ChatIcon />
            <span className="font-body font-semibold text-sm whitespace-nowrap">Asistan</span>
          </>
        )}
        {/* Canlı nokta */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#4ade80] border-2 border-surface" />
        )}
      </button>
    </>
  )
}
