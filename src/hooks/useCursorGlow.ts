import { useCallback } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';

/**
 * Tracks the cursor position inside the target element and writes it as
 * CSS custom properties (--mx, --my). Pair with .cta-magnetic CSS that uses
 * those vars for a radial-gradient spotlight.
 */
export function useCursorGlow<T extends HTMLElement = HTMLAnchorElement>() {
  return useCallback((e: ReactMouseEvent<T>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);
}
