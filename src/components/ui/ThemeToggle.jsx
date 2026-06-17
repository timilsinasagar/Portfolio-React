/**
 * ThemeToggle
 * -----------
 * Sun / Moon icon button that switches between dark and light mode.
 * Receives `isDark` and `onToggle` from the parent (App.jsx via useTheme).
 *
 * Props:
 *   isDark   {boolean}  - current mode
 *   onToggle {Function} - flip the mode
 *   className {string}  - optional extra Tailwind classes
 */

import { motion, AnimatePresence } from 'framer-motion';

const iconVariants = {
  initial: { opacity: 0, rotate: -90, scale: 0.6 },
  animate: { opacity: 1, rotate: 0,   scale: 1,   transition: { duration: 0.3 } },
  exit:    { opacity: 0, rotate:  90, scale: 0.6, transition: { duration: 0.2 } },
};

export default function ThemeToggle({ isDark, onToggle, className = '' }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={[
        'relative w-8 h-8 flex items-center justify-center',
        'border border-[var(--border)] text-gold',
        'transition-colors duration-300 hover:border-gold hover:bg-gold/10',
        className,
      ].join(' ')}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          /* ── Moon ── */
          <motion.svg
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
            />
          </motion.svg>
        ) : (
          /* ── Sun ── */
          <motion.svg
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-4 h-4"
          >
            <circle cx="12" cy="12" r="5" />
            <path
              strokeLinecap="round"
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}