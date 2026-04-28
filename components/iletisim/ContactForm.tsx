'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PROJECTS } from '@/lib/projects'
import { publicImage } from '@/lib/publicImage'
import SectionLabel from '@/components/ui/SectionLabel'
import MaterialIcon from '@/components/ui/MaterialIcon'

const FORM_IMG = publicImage('plaza/plaza.jpeg')

const PROJECTS_LIST = [...PROJECTS.map(p => p.name), 'Diğer / Genel bilgi']

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[600px]">
          <Image src={FORM_IMG} alt="EKİNCİ GROUP iletişim" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-headline text-2xl italic text-white leading-snug">
              &ldquo;Hayalinizdeki yaşam alanı, bir telefon kadar yakın.&rdquo;
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          <SectionLabel>Bize Yazın</SectionLabel>
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-on-surface mb-8">
            Hemen İletişime Geçin
          </h2>

          {submitted ? (
            <div className="text-center py-16 bg-surface-container rounded-3xl">
              <MaterialIcon icon="check_circle" size={48} fill className="text-primary mb-4" />
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Mesajınız Alındı!</h3>
              <p className="text-on-surface-variant font-body text-sm">24 saat içinde sizinle iletişime geçeceğiz.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
              className="glass-card rounded-3xl p-8 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface-variant font-body">Ad</label>
                  <input type="text" required placeholder="Adınız"
                    className="bg-transparent border-b border-outline-variant focus:border-primary outline-none py-2.5 font-body text-sm text-on-surface placeholder:text-outline-variant/50 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface-variant font-body">Soyad</label>
                  <input type="text" required placeholder="Soyadınız"
                    className="bg-transparent border-b border-outline-variant focus:border-primary outline-none py-2.5 font-body text-sm text-on-surface placeholder:text-outline-variant/50 transition-colors" />
                </div>
              </div>

              {[
                { label: 'Telefon', type: 'tel', placeholder: '+90 5XX XXX XX XX', required: true },
                { label: 'E-posta', type: 'email', placeholder: 'ornek@email.com', required: true },
              ].map(field => (
                <div key={field.label} className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface-variant font-body">{field.label}</label>
                  <input type={field.type} required={field.required} placeholder={field.placeholder}
                    className="bg-transparent border-b border-outline-variant focus:border-primary outline-none py-2.5 font-body text-sm text-on-surface placeholder:text-outline-variant/50 transition-colors" />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface-variant font-body">İlgilendiğiniz Proje</label>
                <select className="bg-transparent border-b border-outline-variant focus:border-primary outline-none py-2.5 font-body text-sm text-on-surface transition-colors cursor-pointer">
                  {PROJECTS_LIST.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface-variant font-body">Notunuz</label>
                <textarea rows={3} placeholder="Mesajınızı buraya yazın..."
                  className="bg-transparent border-b border-outline-variant focus:border-primary outline-none py-2.5 font-body text-sm text-on-surface placeholder:text-outline-variant/50 transition-colors resize-none" />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-0.5 accent-primary w-4 h-4" />
                <span className="text-xs text-on-surface-variant font-body leading-relaxed">
                  <a href="#" className="text-primary hover:underline">KVKK Aydınlatma Metni</a>&apos;ni okudum, kişisel verilerimin işlenmesine onay veriyorum.
                </span>
              </label>

              <button type="submit"
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-body font-semibold text-sm tracking-wide hover:bg-primary-dim shadow-primary hover:shadow-primary-lg transition-all duration-300 flex items-center justify-center gap-2">
                <MaterialIcon icon="send" size={18} className="text-primary-fixed" />
                Gönder
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
