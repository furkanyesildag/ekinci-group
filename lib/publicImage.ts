/**
 * `public/images/` altındaki göreli yolu güvenli URL'ye çevirir.
 * Türkçe ve özel karakterli dosya adlarında `encodeURIComponent` kullanılır.
 */
export function publicImage(path: string): string {
  return '/images/' + path.split('/').filter(Boolean).map(seg => encodeURIComponent(seg)).join('/')
}
