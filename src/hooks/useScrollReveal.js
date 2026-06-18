// import { useEffect, useRef, useState } from 'react'

// export function useScrollReveal(threshold = 0.1) {
//   const ref = useRef(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el) } },
//       { threshold }
//     )
//     obs.observe(el)
//     return () => obs.disconnect()
//   }, [threshold])

//   return { ref, visible }
// }

/**
 * useScrollReveal.js
 * --------------------------------------------------
 * Watches every element with the `.reveal` class currently in
 * the DOM and adds `.in` once it scrolls into view — that class
 * triggers the fade/slide-up transition defined in global.css.
 * Each element is revealed once, then unobserved.
 *
 * Call this once near the root of the app, after the page's
 * sections have mounted, e.g. in App.jsx:
 *
 *   import { useScrollReveal } from "./hooks/useScrollReveal";
 *
 *   export default function App() {
 *     useScrollReveal();
 *     return ( ...all your sections... );
 *   }
 * --------------------------------------------------
 */

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}