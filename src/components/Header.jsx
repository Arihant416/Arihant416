import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const NAV = [
  { label: 'Work',   href: '#experience' },
  { label: 'Skills', href: '#skills'     },
  { label: 'Say Hi', href: '#contact'    },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">AJ</a>

      <div className="nav-right">
        {/* Desktop nav links */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {NAV.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </div>

        {/* Theme toggle — always visible */}
        <button className="nav-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? '☀︎' : '☽'}
        </button>

        {/* Resume — always visible, replaces hamburger on mobile */}
        <a
          href="https://arihant416.github.io/resume/index.pdf"
          target="_blank" rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ padding: '.4rem 1rem', fontSize: '10.5px' }}
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
}