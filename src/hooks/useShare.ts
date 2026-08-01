import { useCallback } from 'react';
import { profile } from '../data/profile';

interface UseShareReturn {
  canShare: boolean;
  share: () => Promise<boolean>;
}

/**
 * Hook for native Web Share API with fallback detection.
 * Returns whether sharing is supported and a share function.
 */
export function useShare(): UseShareReturn {
  const canShare = typeof navigator !== 'undefined' && !!navigator.share;

  const share = useCallback(async (): Promise<boolean> => {
    if (!canShare) return false;

    try {
      await navigator.share({
        title: profile.name,
        text: profile.bio,
        url: window.location.href,
      });
      return true;
    } catch (err) {
      // User cancelled the share dialog — not an error
      if (err instanceof Error && err.name === 'AbortError') {
        return false;
      }
      return false;
    }
  }, [canShare]);

  return { canShare, share };
}
