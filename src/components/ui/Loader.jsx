/**
 * Loader
 * ------
 * Full-screen intro overlay shown on first page load.
 * Fades out after `duration` ms and calls `onComplete`.
 *
 * Props:
 *   onComplete {Function} - called when the loader finishes
 *   duration   {number}   - total visible time in ms (default 2200)
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo-circle.png";

export default function Loader({ onComplete, duration = 2200 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      // Give the exit animation time to finish before unmounting
      setTimeout(onComplete, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="fixed inset-0 z-[9000] flex flex-col items-center justify-center gap-8"
          style={{ background: "var(--ink)" }}
        >
          {/* ── Logo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            className="flex flex-col items-center gap-4"
          >
            {/* Logo image — falls back gracefully */}
            <img
              src={logo}
              alt="ST"
              className="w-16 h-16 rounded-full object-contain"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />

            {/* Monogram fallback (shown if image fails) */}
            <div
              className="font-display italic text-gold text-4xl tracking-widest select-none"
              aria-hidden="true"
            >
              Sagar Timilsina
            </div>

            <p className="text-[0.6rem] tracking-[0.4em] uppercase text-sand/60">
              Loading portfolio…
            </p>
          </motion.div>

          {/* ── Progress bar ── */}
          <div
            className="w-48 h-px overflow-hidden"
            style={{ background: "rgba(201,168,76,0.15)" }}
          >
            <motion.div
              className="h-full"
              style={{ background: "var(--gold)" }}
              initial={{ width: "0%" }}
              animate={{
                width: "100%",
                transition: {
                  duration: duration / 1000 - 0.3,
                  ease: "easeInOut",
                },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
