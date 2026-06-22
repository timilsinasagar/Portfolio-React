/**
 * useCursor
 * ---------
 * Tracks mouse position and whether the cursor is hovering over
 * an interactive element. Returns refs to attach to the dot/ring divs
 * and a boolean `isHovering` for the ring's "grow" state.
 *
 * Auto-disables on touch-only devices.
 */

import { useEffect, useRef, useState } from 'react';

export function useCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [visible,    setVisible]    = useState(false);

  useEffect(() => {
    // Skip on touch devices
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    // Animate dot with direct DOM updates (avoids React re-render overhead)
    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top  = `${y}px`;
      }
      if (ringRef.current) {
        // Slight lag on ring for the trailing effect
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top  = `${y}px`;
      }

      if (!visible) setVisible(true);
    };

    const onEnterInteractive = () => setIsHovering(true);
    const onLeaveInteractive = () => setIsHovering(false);

    // Attach hover listeners to all interactive elements
    const attachListeners = () => {
      document
        .querySelectorAll('a, button, [role="button"], input, textarea, select, label')
        .forEach(el => {
          el.addEventListener('mouseenter', onEnterInteractive);
          el.addEventListener('mouseleave', onLeaveInteractive);
        });
    };

    document.addEventListener('mousemove', onMove);
    attachListeners();

    // Re-run listener attachment after navigation (SPA route changes)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { dotRef, ringRef, isHovering, visible };
}