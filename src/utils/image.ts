export function optimizeImage(
  imageUrl: string,
  width: string,
  height: string
): string {
  const tokens = imageUrl.split('/');
  tokens.splice(-2);
  tokens.push(width, height);
  return tokens.join('/') + '.webp';
}
