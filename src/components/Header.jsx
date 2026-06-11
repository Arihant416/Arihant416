import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const NAV = [
  { label: 'Work', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Say Hi', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* 
      Intelligent Full-Bleed Occlusion Shield
      Masks climbing viewport elements seamlessly without rendering sharp lines.
    */
    <div className={ `fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 sm:px-8 md:px-12 pt-3 pb-3 transition-all duration-300 ${scrolled
        ? 'bg-bg/70 backdrop-blur-xl pointer-events-auto'
        : 'bg-transparent pointer-events-none'
      }` }>
      <motion.nav
        className={ `pointer-events-auto flex items-center justify-between w-full max-w-[1200px] h-14 rounded-full border transition-all duration-300 px-6 ${scrolled
            ? 'bg-card border-border shadow-sm scale-[0.99]'
            : 'bg-bg border-border/40 shadow-none scale-100'
          }` }
        initial={ { y: -20, opacity: 0 } }
        animate={ { y: 0, opacity: 1 } }
        transition={ { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
      >
        {/* LEFT SECTOR: Clean Brand Mark */ }
        <div className="flex-1 flex justify-start">
          <a
            href="#"
            className="font-mono text-xs font-semibold tracking-tighter !text-text hover:!text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-full px-3 py-1 border border-transparent hover:border-border transition-all duration-300"
          >
            AJ
          </a>
        </div>

        {/* CENTER SECTOR: Airbnb-Style Segmented Navigation Pill */ }
        <div className="hidden sm:flex items-center bg-card border border-border/60 rounded-full p-1 shadow-sm relative">
          { NAV.map(({ label, href }, idx) => (
            <a
              key={ href }
              href={ href }
              className="relative text-[10px] font-mono tracking-widest !text-text-dim uppercase px-4 py-1.5 rounded-full transition-colors duration-300 hover:!text-text z-10 focus-visible:outline-none"
              onMouseEnter={ () => setHoveredIdx(idx) }
              onMouseLeave={ () => setHoveredIdx(null) }
            >
              { label }

              {/* Kinetic Slider Background Tracking */ }
              { hoveredIdx === idx && (
                <motion.span
                  layoutId="navHoverPill"
                  className="absolute inset-0 bg-card2 border border-border rounded-full z-[-1]"
                  transition={ { type: 'spring', stiffness: 380, damping: 28 } }
                />
              ) }
            </a>
          )) }
        </div>

        {/* RIGHT SECTOR: Controls & Utilities Menu Capsule */ }
        <div className="flex-1 flex items-center justify-end gap-3">
          {/* Micro-animated Theme Trigger */ }
          <button
            className="w-8 h-8 rounded-full border border-border/60 bg-card hover:bg-card2 flex items-center justify-center text-xs !text-text-dim hover:!text-text transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent overflow-hidden relative shadow-sm"
            onClick={ toggleTheme }
            aria-label="Toggle structural interface palette"
          >
            <AnimatePresence mode="wait" initial={ false }>
              <motion.span
                key={ isDark ? 'dark' : 'light' }
                initial={ { y: 12, opacity: 0, scale: 0.8 } }
                animate={ { y: 0, opacity: 1, scale: 1 } }
                exit={ { y: -12, opacity: 0, scale: 0.8 } }
                transition={ { duration: 0.18 } }
                className="block will-change-transform select-none font-sans"
              >
                { isDark ? '☀' : '☽' }
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Core Call to Action */ }
          <a
            href="https://arihant416.github.io/resume/index.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center font-mono text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-full transition-all duration-300 select-none active:scale-95 border border-transparent
              !bg-text !text-bg hover:opacity-85 shadow-sm hover:shadow-md"
          >
            Resume ↗
          </a>
        </div>
      </motion.nav>
    </div>
  );
}