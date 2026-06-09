import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    <motion.nav 
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#" className="nav-logo font-mono font-medium tracking-tighter hover:text-accent transition-colors duration-300">
        AJ
      </a>

      <div className="nav-right flex items-center gap-6 lg:gap-8">
        {/* Desktop Links Container */}
        <div className="nav-desktop-links flex items-center gap-8">
          {NAV.map(({ label, href }) => (
            <a 
              key={href} 
              href={href} 
              className="nav-link text-xs font-mono tracking-wider transition-colors duration-300 hover:text-accent relative py-1"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Minimal Circle Theme Trigger */}
        <button 
          className="nav-theme-btn w-8 h-8 rounded-full border border-transparent hover:border-border flex items-center justify-center text-base transition-all duration-300 active:scale-95" 
          onClick={toggleTheme} 
          aria-label="Toggle theme"
        >
          {isDark ? '☀︎' : '☽'}
        </button>

        {/* Tactical Call To Action */}
        <a
          href="https://arihant416.github.io/resume/index.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary font-mono tracking-wider transition-all duration-300"
          style={{ padding: '.4rem 1rem', fontSize: '10.5px' }}
        >
          Resume ↗
        </a>
      </div>
    </motion.nav>
  );
}