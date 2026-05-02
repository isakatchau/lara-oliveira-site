import { useCallback, useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => unknown;
};

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const applyTheme = useCallback((next: Theme) => {
    const swap = () => {
      if (next === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore storage failures */
      }
      setThemeState(next);
    };

    const doc = document as ViewTransitionDoc;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typeof doc.startViewTransition === 'function' && !reduced) {
      // Native cross-fade across the whole document.
      doc.startViewTransition(swap);
      return;
    }

    // Fallback: temporarily enable a global color transition class so older
    // browsers still get a smooth fade across all surfaces.
    const root = document.documentElement;
    root.classList.add('theme-transition');
    swap();
    window.setTimeout(() => root.classList.remove('theme-transition'), 460);
  }, []);

  const toggle = useCallback(() => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, applyTheme]);

  return { theme, toggle, setTheme: applyTheme };
}
