import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { label: 'Work',    href: '#experience'      },
  { label: 'Skills',  href: '#skills'          },
  { label: 'Say Hi',  href: '#contact'         },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close menu on anchor click
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="nav-logo">AJ</a>

        {/* Desktop */}
        <div className="nav-links">
          {NAV.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
          <a
            href="https://arihant416.github.io/resume/index.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '.4rem 1rem' }}
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            {NAV.map(({ label, href }) => (
              <a key={href} href={href} className="nav-link" onClick={close}>{label}</a>
            ))}
            <a
              href="https://arihant416.github.io/resume/index.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start' }}
              onClick={close}
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
