export function cdnImage(image: string) {
  if (import.meta.env.DEV) {
    return `/images${image}?v=4`;
  }
  const webpImage = image.replace(/\.(png|PNG|jpg|JPG)$/, ".webp");
  return `/images${webpImage}?v=4`;
}
