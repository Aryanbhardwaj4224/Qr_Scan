import { profile } from '../data/profile';

/** True when a URL points at this machine only (unreachable from other devices). */
export function isLocalhostUrl(url: string): boolean {
  try {
    const { hostname } = new URL(url);
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
  } catch {
    return false;
  }
}

/**
 * Resolves the public URL encoded in the QR code.
 *
 * Priority:
 * 1. VITE_SITE_URL (production / explicit LAN IP for dev)
 * 2. Current browser origin in dev (when env is empty or localhost)
 * 3. profile.website fallback
 */
export function getSiteUrl(): string {
  const envUrl = import.meta.env.VITE_SITE_URL?.trim();

  if (envUrl && !isLocalhostUrl(envUrl)) {
    return envUrl.replace(/\/$/, '');
  }

  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    if (!isLocalhostUrl(origin)) {
      return origin;
    }
    // Dev on localhost: still prefer live origin so QR matches what you see in the modal
    if (import.meta.env.DEV) {
      return origin;
    }
  }

  return profile.website.replace(/\/$/, '');
}

/** URL used by the build-time QR generator (Node, no window). */
export function getBuildSiteUrl(envUrl?: string): string {
  const url = envUrl?.trim();
  if (url && !isLocalhostUrl(url)) {
    return url.replace(/\/$/, '');
  }
  return profile.website.replace(/\/$/, '');
}
