/**
 * useScrollReveal.js
 * --------------------------------------------------
 * Per-element scroll reveal hook.
 * Attach the returned `ref` to any element — once that element
 * scrolls into view, `visible` flips to true (one-time trigger),
 * which the <Reveal> wrapper uses to animate opacity/transform.
 *
 * Usage:
 *   const { ref, visible } = useScrollReveal();
 *   <div ref={ref} style={{ opacity: visible ? 1 : 0 }}>...</div>
 * --------------------------------------------------
 */

import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}