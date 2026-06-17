/** @type {import('tailwindcss').Config} */
export default {
  // Enable class-based dark mode toggling
  darkMode: 'class',

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      // ── Color Tokens ───────────────────────────────────────────────────────
      // Original palette: "Ink & Parchment Neo-Classical Dark"
      colors: {
        // Core ink / background scale
        ink:       '#0e0c0a',
        deep:      '#141210',
        parchment: '#1c1915',
        warm:      '#252118',

        // Text / surface scale
        sand:      '#c8b896',
        gold: {
          DEFAULT: '#c9a84c',
          pale:    '#e2cc96',
        },
        cream:     '#f0e8d8',

        // Light-mode palette (for dark/light toggle)
        light: {
          bg:   '#FFFFFF',
          card: '#F8FAFC',
          text: '#0F172A',
        },
        dark: {
          bg:   '#0F172A',
          card: '#1E293B',
          text: '#F8FAFC',
        },

        // Accent (kept from user's own :root spec)
        primary: {
          DEFAULT: '#3B82F6',
          hover:   '#2563EB',
        },
        border:  '#334155',
        muted:   '#94A3B8',
      },

      // ── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      // ── Spacing / sizing extras ────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '110': '27.5rem',
      },

      // ── Letter spacing ────────────────────────────────────────────────────
      letterSpacing: {
        widest2: '0.38em',
        widest3: '0.28em',
      },

      // ── Custom easing ─────────────────────────────────────────────────────
      transitionTimingFunction: {
        'ease-neo': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },

      // ── Box shadow ────────────────────────────────────────────────────────
      boxShadow: {
        'gold-sm': '0 0 0 1px rgba(201,168,76,0.18)',
        'gold-md': '0 4px 24px rgba(201,168,76,0.12)',
        'gold-lg': '0 8px 48px rgba(201,168,76,0.18)',
      },

      // ── Background image (noise) ──────────────────────────────────────────
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'gold-rule':        'linear-gradient(90deg, #c9a84c, transparent)',
        'gold-rule-center': 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
      },

      // ── Animation ─────────────────────────────────────────────────────────
      animation: {
        'loader-fill':   'loaderFill 1.8s ease-neo forwards',
        'fade-up':       'fadeUp 0.6s ease-neo forwards',
        'fade-in':       'fadeIn 0.5s ease-neo forwards',
      },
      keyframes: {
        loaderFill: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },

  plugins: [],
};