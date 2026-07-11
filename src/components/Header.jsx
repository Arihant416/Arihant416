import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiFileText, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const NAV = [
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[100] px-3 pt-3 transition-colors duration-300 sm:px-5 lg:px-8 ${
        scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <motion.nav
        className={`mx-auto flex h-14 w-full max-w-[1320px] items-center justify-between gap-3 rounded-[1.2rem] border px-3 shadow-[var(--panel-shadow)] transition-all duration-300 sm:h-16 sm:rounded-[1.35rem] sm:px-4 ${
          scrolled
            ? 'border-border bg-card/95'
            : 'border-border/70 bg-card/75 backdrop-blur-xl'
        }`}
        initial={shouldReduceMotion ? false : { y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="#top"
          className="group inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-border bg-bg px-3 font-mono text-[11px] font-bold text-text transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent sm:min-h-11 sm:min-w-11 sm:text-xs"
          aria-label="Back to top"
        >
          AJ
        </a>

        <div className="hidden items-center rounded-full border border-border bg-bg/70 p-1 md:flex">
          {NAV.map(({ label, href }, idx) => (
            <a
              key={href}
              href={href}
              className="relative z-10 inline-flex min-h-10 items-center rounded-full px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {label}
              {hoveredIdx === idx && (
                <motion.span
                  layoutId="navHoverPill"
                  className="absolute inset-0 z-[-1] rounded-full border border-border bg-card2"
                  transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? 'close' : 'menu'}
                initial={shouldReduceMotion ? false : { opacity: 0, rotate: -12, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 12, scale: 0.9 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.16 }}
                className="inline-flex"
              >
                {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'dark' : 'light'}
                initial={shouldReduceMotion ? false : { y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { y: -8, opacity: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.18 }}
                className="inline-flex"
              >
                {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href="https://arihant416.github.io/resume/index.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-accent bg-accent px-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bg transition-all duration-200 hover:bg-text hover:border-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent sm:min-h-11 sm:px-4"
          >
            <FiFileText aria-hidden="true" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mx-auto mt-2 grid w-full max-w-[1320px] grid-cols-2 gap-2 rounded-[1.2rem] border border-border bg-card p-2 shadow-[var(--panel-shadow)] backdrop-blur-2xl md:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV.map(({ label, href }, index) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-bg/75 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                  index === NAV.length - 1 ? 'col-span-2' : ''
                }`}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
