import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

// Browser chrome colour per theme; must match --bg in index.css and the pre-paint
// script in index.html.
const THEME_COLOR = { light: '#f6f5f1', dark: '#0c0d10' };

// Both <meta name="theme-color"> tags (one per prefers-color-scheme) follow the
// active theme, so the chrome matches even when it differs from the OS setting.
const syncThemeColor = (theme) => {
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute('content', THEME_COLOR[theme]);
  });
};

const getInitial = () => {
  if (typeof window === 'undefined') return 'dark';
  let stored = null;
  try { stored = localStorage.getItem('theme'); } catch { /* storage blocked */ }
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    syncThemeColor(theme);
    try { localStorage.setItem('theme', theme); } catch { /* storage blocked */ }
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider');
  return ctx;
};