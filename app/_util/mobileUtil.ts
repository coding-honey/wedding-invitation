export function isMobileByUserAgent(userAgent: string = '') {
  return /MOBILE|iPhone|iPad|iPod|Android/i.test(userAgent);
}

export function isAppleByUserAgent(userAgent: string = '') {
  return /iPhone|iPad|iPod/i.test(userAgent);
}