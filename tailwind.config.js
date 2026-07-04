/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core background mappings
        bg: 'var(--bg)',
        card: 'var(--bg-card)',
        card2: 'var(--bg-card2)',

        // Typographic colors
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        muted: 'var(--muted)',
        muted2: 'var(--muted2)',

        // Editorial accents
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',

        // Structural framing borders
        border: 'var(--border)',
        'border-mute': 'var(--border-mute)',
      },
      fontFamily: {
        // Enforces your premium editorial font families natively
        sans: ['Geist', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
