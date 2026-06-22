/**
 * useTheme
 * --------
 * Manages dark / light mode by toggling a `light` class on <html>.
 * Default is dark (the "Ink & Parchment" palette).
 * Persists the preference to localStorage.
 */

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Read persisted preference; default to 'dark'
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }

    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme, isDark: theme === 'dark' };
}