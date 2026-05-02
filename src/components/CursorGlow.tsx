import { useEffect, useRef } from 'react';

const PROXIMITY = 180; // px from CTA bbox to "activate"
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

    let lastX = -9999;
    let lastY = -9999;
    let insideHideZone = false;
    let visible = false;

    const setVisible = (next: boolean) => {
      if (next === visible) return;
      visible = next;
      if (visible) layer.setAttribute('data-visible', 'true');
      else layer.removeAttribute('data-visible');
    };

    // animationiteration bubbles up from the shimmer ::after on each cycle.
    // Used to delay removal of .cta-near until cycle finishes.
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

    const isInsideAnyCard = () => {
      const cards = document.querySelectorAll<HTMLElement>('.tilt-card');
      for (const c of cards) {
        const r = c.getBoundingClientRect();
        if (lastX >= r.left && lastX <= r.right && lastY >= r.top && lastY <= r.bottom) {
          return true;
        }
      }
      return false;
    };

    const tick = () => {
      rafRef.current = null;
      layer.style.setProperty('--gx', `${lastX}px`);
      layer.style.setProperty('--gy', `${lastY}px`);

      const shouldShow = !insideHideZone && !isInsideAnyCard() && lastX > -1000;
      setVisible(shouldShow);

      // CTA proximity (shimmer activation with completion-aware removal)
      const ctas = document.querySelectorAll<HTMLElement>('[data-cta-near]');
      ctas.forEach((cta) => {
        ensureListener(cta);
        const r = cta.getBoundingClientRect();
        const dx = Math.max(r.left - lastX, 0, lastX - r.right);
        const dy = Math.max(r.top - lastY, 0, lastY - r.bottom);
        const d = Math.hypot(dx, dy);
        const isNear = d < PROXIMITY;

        if (isNear) {
          if (!cta.classList.contains(NEAR_CLASS)) cta.classList.add(NEAR_CLASS);
          if (cta.hasAttribute(PENDING_ATTR)) cta.removeAttribute(PENDING_ATTR);
        } else if (cta.classList.contains(NEAR_CLASS)) {
          if (!cta.hasAttribute(PENDING_ATTR)) cta.setAttribute(PENDING_ATTR, '1');
        }
      });
    };

    const scheduleTick = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      scheduleTick();
    };
    const onLeave = () => {
      lastX = -9999;
      lastY = -9999;
      scheduleTick();
    };

    // Some surfaces (Google Maps iframe, etc.) swallow mousemove from the
    // parent document, so the rAF tick can't naturally detect "cursor is
    // here". For those zones we explicitly toggle the hide flag using
    // mouseenter/mouseleave on the wrapper element.
    const hideZoneEnter = () => {
      insideHideZone = true;
      scheduleTick();
    };
    const hideZoneLeave = () => {
      insideHideZone = false;
      scheduleTick();
    };

    const hideZones = document.querySelectorAll<HTMLElement>('[data-glow-hide]');
    hideZones.forEach((z) => {
      z.addEventListener('mouseenter', hideZoneEnter);
      z.addEventListener('mouseleave', hideZoneLeave);
    });

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      hideZones.forEach((z) => {
        z.removeEventListener('mouseenter', hideZoneEnter);
        z.removeEventListener('mouseleave', hideZoneLeave);
      });
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      document.querySelectorAll<HTMLElement>('[data-cta-near]').forEach((cta) => {
        cta.removeEventListener('animationiteration', onIter);
      });
    };
  }, []);

  return <div ref={layerRef} aria-hidden="true" className="cursor-glow" />;
}
