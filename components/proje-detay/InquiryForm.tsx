'use client'

import { useState } from 'react'
import type { Project } from '@/types'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props { project: Project }

export default function InquiryForm({ project }: Props) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <SectionLabel>İlgi Formu</SectionLabel>
        <h2 className="font-headline text-4xl font-bold tracking-tighter text-on-surface mb-3">
          {project.name} İçin Bilgi Alın
        </h2>
        <p className="text-on-surface-variant font-body text-sm">
          Satış ekibimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-16 bg-surface-container rounded-3xl">
          <MaterialIcon icon="check_circle" size={48} fill className="text-primary mb-4" />
          <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Teşekkürler!</h3>
          <p className="text-on-surface-variant font-body text-sm">Talebiniz alındı. 24 saat içinde sizinle iletişime geçeceğiz.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { id: 'name', label: 'Adınız Soyadınız', type: 'text', placeholder: 'Mehmet Yılmaz', colSpan: 1 },
            { id: 'phone', label: 'Telefon', type: 'tel', placeholder: '+90 5XX XXX XX XX', colSpan: 1 },
            { id: 'email', label: 'E-posta', type: 'email', placeholder: 'ornek@email.com', colSpan: 2 },
          ].map(field => (
            <div key={field.id} className={`flex flex-col gap-2 ${field.colSpan === 2 ? 'md:col-span-2' : ''}`}>
              <label htmlFor={field.id} className="text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface-variant font-body">
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required
                className="bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary outline-none py-3 font-body text-sm text-on-surface placeholder:text-outline-variant/50 transition-colors duration-200"
              />
            </div>
          ))}

          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="note" className="text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface-variant font-body">
              Notunuz (İsteğe Bağlı)
            </label>
            <textarea
              id="note"
              rows={3}
              placeholder="Tercihlerinizi, sorularınızı veya özel isteklerinizi yazın..."
              className="bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary outline-none py-3 font-body text-sm text-on-surface placeholder:text-outline-variant/50 transition-colors duration-200 resize-none"
            />
          </div>

          <div className="flex flex-col gap-4 md:col-span-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" required className="mt-0.5 accent-primary w-4 h-4 rounded" />
              <span className="text-xs text-on-surface-variant font-body leading-relaxed">
                <a href="#" className="text-primary hover:underline">KVKK Aydınlatma Metni</a>&apos;ni okudum, kişisel verilerimin işlenmesine onay veriyorum.
              </span>
            </label>

            <button type="submit"
              className="w-full md:w-auto md:self-end inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-primary-dim shadow-primary hover:shadow-primary-lg transition-all duration-300">
              <MaterialIcon icon="send" size={18} className="text-primary-fixed" />
              Bilgi Talebi Gönder
            </button>
          </div>
        </form>
      )}
    </section>
  )
}
