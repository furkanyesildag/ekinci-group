/**
 * `public/images/` altındaki göreli yolu URL yoluna çevirir.
 * Segments burada encode edilmez: Next.js `<Image>` src'yi kendi akışında işler;
 * `encodeURIComponent` kullanmak çift kodlamaya (%25…) ve kırık görsellere yol açar.
 */
export function publicImage(path: string): string {
  return '/images/' + path.split('/').filter(Boolean).join('/')
}
