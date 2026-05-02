import { useEffect, useRef } from 'react';

const PROXIMITY = 180; // px from CTA center to "activate"

export default function CursorGlow() {
  const layerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduced || isCoarse) return; // skip on touch / accessibility

    const layer = layerRef.current;
    if (!layer) return;
    layer.style.opacity = '1';

    let lastX = -9999;
    let lastY = -9999;

    const tick = () => {
      rafRef.current = null;
      layer.style.setProperty('--gx', `${lastX}px`);
      layer.style.setProperty('--gy', `${lastY}px`);

      const ctas = document.querySelectorAll<HTMLElement>('[data-cta-near]');
      ctas.forEach((cta) => {
        const r = cta.getBoundingClientRect();
        // distance from cursor to nearest edge of CTA's bounding box
        const dx = Math.max(r.left - lastX, 0, lastX - r.right);
        const dy = Math.max(r.top - lastY, 0, lastY - r.bottom);
        const d = Math.hypot(dx, dy);
        cta.classList.toggle('cta-near', d < PROXIMITY);
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
    };
  }, []);

  return <div ref={layerRef} aria-hidden="true" className="cursor-glow" />;
}
