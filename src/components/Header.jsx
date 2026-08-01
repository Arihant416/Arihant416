import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Impact', href: '#impact' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Recommendations', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', updateScrolled, { passive: true });
    updateScrolled();
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  useEffect(() => {
    let frame = null;

    const updateActiveSection = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const trigger = window.innerHeight * 0.4;
        const current = NAV_ITEMS.reduce((match, item) => {
          const section = document.querySelector(item.href);
          return section && section.getBoundingClientRect().top <= trigger ? item.href : match;
        }, null);
        setActiveHref(current);
        frame = null;
      });
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const menu = menuRef.current;
    const focusable = Array.from(
      menu.querySelectorAll('a[href], button:not([disabled])')
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    first?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab' || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav
        className="site-nav"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="brand-link"
          aria-label="AJ, Arihant Jain, Senior Backend Engineer, back to top"
        >
          <span className="brand-mark">AJ</span>
          <span className="brand-copy">
            <strong>Arihant Jain</strong>
            <small>Senior Backend Engineer</small>
          </span>
        </a>

        <div className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeHref === item.href ? 'is-active' : ''}
              aria-current={activeHref === item.href ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>

          <button type="button" className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>

          <a
            href="https://arihant416.github.io/resume/index.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Resume
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </nav>

      {menuOpen && (
          <div
            ref={menuRef}
            id="mobile-navigation"
            className="mobile-navigation"
          >
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={activeHref === item.href ? 'is-active' : ''}
                aria-current={activeHref === item.href ? 'location' : undefined}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              </a>
            ))}
          </div>
      )}
    </header>
  );
}
