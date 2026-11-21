import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiFileText, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import AppLink from './AppLink';

const NAV = [
  { label: 'Platform', href: '#platform' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Recommendations', href: '#recommendations' },
  { label: 'Contact', href: '#contact' },
  { label: 'Beyond work', href: '/beyond-work', isRoute: true },
];

// Moves focus to a destination heading once it exists (a lazy route may render a few
// frames later). preventScroll keeps the anchor's smooth scroll undisturbed.
function focusHeading(findHeading, framesLeft = 120) {
  const heading = findHeading();
  if (heading) {
    if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
    return;
  }
  if (framesLeft > 0) window.requestAnimationFrame(() => focusHeading(findHeading, framesLeft - 1));
}

const headingIn = (href) => () => {
  const target = document.querySelector(href);
  if (!target) return null;
  return target.matches('h1, h2') ? target : target.querySelector('h1, h2');
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let animationFrame;
    const update = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        const triggerLine = window.innerHeight * 0.42;
        const next = NAV.reduce((current, { href, isRoute }) => {
          if (isRoute) return current;
          const section = document.querySelector(href);
          return section?.getBoundingClientRect().top <= triggerLine ? href : current;
        }, null);
        setActiveHref(next);
        animationFrame = null;
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return;
      setMobileMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className={`spatial-header ${scrolled ? 'is-scrolled' : ''}`}>
      <motion.nav
        className="spatial-nav"
        aria-label="Primary navigation"
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#top" className="site-brand" aria-label="Arihant Jain, back to top">
          <span className="site-brand-mark" aria-hidden="true">AJ</span>
          <span className="site-brand-name">Arihant Jain</span>
        </a>

        <div className="spatial-desktop-nav">
          {NAV.map(({ label, href, isRoute }) => (
            isRoute ? (
              <AppLink key={href} to={href} className="spatial-beyond-nav-link">
                <span>{label}</span>
                <FiArrowUpRight aria-hidden="true" />
              </AppLink>
            ) : (
              <a key={href} href={href} aria-current={activeHref === href ? 'location' : undefined}>
                {label}
              </a>
            )
          ))}
        </div>

        <div className="spatial-nav-actions">
          <button
            ref={menuButtonRef}
            type="button"
            className="spatial-icon-button spatial-menu-button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="spatial-mobile-navigation"
          >
            {mobileMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>

          <button type="button" className="spatial-icon-button" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>

          <a
            href="https://arihant416.github.io/resume/index.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="spatial-resume-link"
          >
            <FiFileText aria-hidden="true" />
            <span>Resume</span>
          </a>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="spatial-mobile-navigation"
            className="spatial-mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
          >
            {NAV.map(({ label, href, isRoute }) => (
              isRoute ? (
                <AppLink
                  key={href}
                  to={href}
                  className="spatial-mobile-beyond"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.requestAnimationFrame(() => focusHeading(() => document.querySelector('.bw-page h1')));
                  }}
                >
                  <span>{label}</span>
                  <FiArrowUpRight aria-hidden="true" />
                </AppLink>
              ) : (
                <a
                  key={href}
                  href={href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.requestAnimationFrame(() => focusHeading(headingIn(href)));
                  }}
                >
                  {label}
                </a>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
