/* Shared hooks + utilities for scroll-driven sections */

const { useState, useEffect, useRef, useLayoutEffect, useMemo, useCallback } = React;

// Clamp + interpolate helpers
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);

// Returns how far you've scrolled through the element.
// 0 = element top just hit viewport bottom
// 1 = element bottom just left viewport top
function useScrollProgress(ref, opts = {}) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress through the pinned element
      const total = rect.height - vh;
      const scrolled = -rect.top;
      const prog = clamp(scrolled / Math.max(1, total));
      setP(prog);
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    tick();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
}

// Reveal on enter viewport
function useInView(ref, margin = '0px 0px -15% 0px') {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { rootMargin: margin });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, margin]);
  return inView;
}

// Map progress range to 0..1
function range(p, a, b) { return clamp((p - a) / (b - a)); }

// Detect mobile — either real narrow viewport or explicit device preview
function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => {
      const device = document.documentElement.getAttribute('data-device');
      setM(device === 'mobile' || window.innerWidth < 820);
    };
    check();
    window.addEventListener('resize', check);
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-device'] });
    return () => { window.removeEventListener('resize', check); obs.disconnect(); };
  }, []);
  return m;
}

Object.assign(window, { useScrollProgress, useInView, range, clamp, lerp, smooth, useIsMobile });
