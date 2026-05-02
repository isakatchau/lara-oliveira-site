import { useEffect, useRef } from 'react';

const PROXIMITY = 180; // px from CTA bounding box to "activate"
const NEAR_CLASS = 'cta-near';
const PENDING_ATTR = 'data-cta-pending-clear';

export default function CursorGlow() {
  const layerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduced || isCoarse) return;

    const layer = layerRef.current;
    if (!layer) return;
    layer.style.opacity = '1';

    let lastX = -9999;
    let lastY = -9999;

    // Bubbles up from the ::after pseudo when each shimmer cycle completes.
    // We use it to remove .cta-near *only* after the current cycle finishes,
    // so the shimmer never freezes mid-pass.
    const onIter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if (target.getAttribute(PENDING_ATTR) === '1') {
        target.classList.remove(NEAR_CLASS);
        target.removeAttribute(PENDING_ATTR);
      }
    };

    const attached = new WeakSet<Element>();
    const ensureListener = (cta: HTMLElement) => {
      if (!attached.has(cta)) {
        cta.addEventListener('animationiteration', onIter);
        attached.add(cta);
      }
    };

    const tick = () => {
      rafRef.current = null;
      layer.style.setProperty('--gx', `${lastX}px`);
      layer.style.setProperty('--gy', `${lastY}px`);

      const ctas = document.querySelectorAll<HTMLElement>('[data-cta-near]');
      ctas.forEach((cta) => {
        ensureListener(cta);
        const r = cta.getBoundingClientRect();
        const dx = Math.max(r.left - lastX, 0, lastX - r.right);
        const dy = Math.max(r.top - lastY, 0, lastY - r.bottom);
        const d = Math.hypot(dx, dy);
        const isNear = d < PROXIMITY;

        if (isNear) {
          // Cursor approached: cancel any pending clear and keep shimmer on.
          if (!cta.classList.contains(NEAR_CLASS)) cta.classList.add(NEAR_CLASS);
          if (cta.hasAttribute(PENDING_ATTR)) cta.removeAttribute(PENDING_ATTR);
        } else if (cta.classList.contains(NEAR_CLASS)) {
          // Cursor left: do NOT remove now — let current shimmer cycle finish.
          if (!cta.hasAttribute(PENDING_ATTR)) cta.setAttribute(PENDING_ATTR, '1');
        }
      });
    };

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      lastX = -9999;
      lastY = -9999;
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      document.querySelectorAll<HTMLElement>('[data-cta-near]').forEach((cta) => {
        cta.removeEventListener('animationiteration', onIter);
      });
    };
  }, []);

  return <div ref={layerRef} aria-hidden="true" className="cursor-glow" />;
}
