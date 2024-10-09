export function isMobileByUserAgent(userAgent: string = '') {
  return /MOBILE|iPhone|iPad|iPod|Android/i.test(userAgent);
}