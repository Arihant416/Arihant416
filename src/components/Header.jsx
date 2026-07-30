import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const NAV = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Recommendations', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let animationFrame = null;

    const updateActiveSection = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        const triggerLine = window.innerHeight * 0.4;
        const nextActive = NAV.reduce((currentHref, { href }) => {
          const section = document.querySelector(href);
          if (!section) return currentHref;
          return section.getBoundingClientRect().top <= triggerLine ? href : currentHref;
        }, null);

        setActiveHref(nextActive);
        animationFrame = null;
      });
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5 lg:px-8">
      <motion.nav
        className={`glass-surface pointer-events-auto mx-auto flex h-14 w-full max-w-[1320px] items-center justify-between gap-3 px-2.5 transition-all duration-300 sm:h-16 sm:px-3 ${
          scrolled ? 'shadow-[var(--panel-shadow)]' : 'shadow-[var(--panel-shadow-soft)]'
        }`}
        initial={shouldReduceMotion ? false : { y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.52, ease: EASE }}
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="group flex min-h-10 min-w-0 items-center gap-2.5 rounded-md px-2 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:gap-3"
          aria-label="Arihant Jain, back to top"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-card2 font-serif text-sm text-accent shadow-[var(--inset-light)] sm:h-9 sm:w-9">
            AJ
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-[12px] font-semibold leading-none text-text">Arihant Jain</span>
            <span className="mt-1 block truncate text-[9px] leading-none text-muted">Backend systems engineer</span>
          </span>
        </a>

        <div className="hidden h-full items-center md:flex">
          {NAV.map(({ label, href }) => {
            const isActive = activeHref === href;
            return (
              <a
                key={href}
                href={href}
                className={`relative inline-flex h-full items-center px-3 text-[10px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:px-4 lg:text-[11px] ${
                  isActive ? 'text-text' : 'text-muted hover:text-text'
                }`}
                aria-current={isActive ? 'location' : undefined}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavigationLine"
                    className="absolute inset-x-3 bottom-0 h-0.5 bg-accent lg:inset-x-4"
                    transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 36 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card2 text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? 'close' : 'menu'}
                initial={shouldReduceMotion ? false : { opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 10 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.16 }}
                className="inline-flex"
              >
                {mobileMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card2 text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={toggleTheme}
            aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'dark' : 'light'}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -5 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.16 }}
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
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-accent bg-accent px-3 text-[10px] font-bold text-[#11131b] transition-all duration-200 hover:-translate-y-px hover:border-text hover:bg-text hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-3.5 sm:text-[11px]"
          >
            <span className="hidden sm:inline">Resume</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="glass-surface pointer-events-auto mx-auto mt-2 grid w-full max-w-[1320px] grid-cols-1 gap-px overflow-hidden bg-border p-px md:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: EASE }}
          >
            {NAV.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={activeHref === href ? 'location' : undefined}
                className={`flex min-h-11 items-center justify-between bg-card px-4 text-[11px] font-semibold text-muted transition-colors duration-200 hover:bg-card2 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent ${
                  activeHref === href ? 'text-text' : ''
                }`}
              >
                {label}
                <span className="font-mono text-[9px] text-accent" aria-hidden="true">
                  0{NAV.findIndex((item) => item.href === href) + 1}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
