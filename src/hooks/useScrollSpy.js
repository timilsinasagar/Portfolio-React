/**
 * useScrollSpy
 * ------------
 * Observes a list of section IDs and returns the one currently
 * visible in the viewport. Used to highlight the active nav link.
 *
 * @param {string[]} sectionIds  - IDs of the sections to watch
 * @param {number}   [offset=80] - Top offset in px (navbar height)
 * @returns {string} activeId    - The currently visible section ID
 */

import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}