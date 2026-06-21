import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const total = testimonials.length;
  const go = (i, d) => { setDir(d); setIdx(i); };
  const prev = () => go((idx - 1 + total) % total, -1);
  const next = () => go((idx + 1) % total, 1);
  const t = testimonials[idx];

  return (
    <div className="section border-b border-[var(--border)] bg-[var(--bg)]" id="testimonials">
      {/* Left Column Label Panel */ }
      <div className="col-span-1 text-center lg:text-left">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] font-medium block">
          04 // Endorsements
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif italic font-normal tracking-tight text-[var(--text)] mt-1">
          Trusted <span className="font-sans not-italic font-light text-[var(--text-dim)]">Peer Review</span>
        </h2>
      </div>

      {/* Main Layout Presentation Panel */ }
      <div className="flex flex-col justify-between w-full min-h-[300px] lg:pl-4">

        {/* Stable Wrapper to Prevent Layout Shifts */ }
        <div className="relative w-full flex-grow flex items-center py-4 sm:py-6">
          <AnimatePresence mode="wait" custom={ dir }>
            <motion.div
              key={ idx }
              custom={ dir }
              variants={ {
                enter: d => ({ opacity: 0, y: d * 12 }),
                center: { opacity: 1, y: 0 },
                exit: d => ({ opacity: 0, y: d * -12 }),
              } }
              initial="enter"
              animate="center"
              exit="exit"
              transition={ { duration: 0.3, ease: [0.25, 1, 0.5, 1] } }
              className="w-full flex flex-col gap-4 sm:gap-6 text-left"
            >
              {/* Premium Book-Spread Serifs for Quotes - Responsive text adjustments */ }
              <p className="font-serif font-light text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[var(--text-dim)] leading-relaxed tracking-tight relative pl-5 sm:pl-7">
                <span className="text-[var(--accent)] opacity-30 font-serif not-italic text-2xl sm:text-4xl absolute left-0 top-0 select-none">“</span>
                { t.quote }
                <span className="text-[var(--accent)] opacity-30 font-serif not-italic text-2xl sm:text-4xl ml-1 select-none">”</span>
              </p>

              {/* Tidy Metadata Infrastructure */ }
              <div className="flex flex-col gap-1 pt-3 border-t border-[var(--border-mute)] w-fit pl-5 sm:pl-7">
                <div className="flex items-center gap-2.5">
                  <p className="font-sans font-medium text-xs sm:text-sm md:text-base tracking-tight text-[var(--text)]">
                    { t.name }
                  </p>
                  <a
                    href={ t.linkedin }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-[var(--accent)] transition-colors duration-200 p-0.5"
                    aria-label={ `View ${t.name}'s LinkedIn profile` }
                  >
                    <svg viewBox="0 0 24 24" width="12" height="12" className="sm:w-[13px] sm:h-[13px]" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-muted">
                  { t.role }
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Micro Interactive Navigation Controls */ }
        <div className="flex items-center justify-between w-full pt-4 sm:pt-6 mt-2 border-t border-[var(--border-mute)]">
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={ prev }
              className="font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-widest text-muted hover:text-[var(--text)] transition-colors focus:outline-none"
            >
              &lt; PREV
            </button>
            <button
              onClick={ next }
              className="font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-widest text-muted hover:text-[var(--text)] transition-colors focus:outline-none"
            >
              NEXT &gt;
            </button>
          </div>

          {/* Minimalist Bar System */ }
          <div className="hidden sm:flex gap-1.5 max-w-xs w-24 md:w-32 mx-4">
            { testimonials.map((_, i) => (
              <button
                key={ i }
                className={ `h-[2px] flex-grow transition-all duration-300 focus:outline-none ${i === idx ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'}` }
                onClick={ () => go(i, i > idx ? 1 : -1) }
                aria-label={ `Go to testimonial ${i + 1}` }
              />
            )) }
          </div>

          <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-widest text-muted uppercase">
            [{ idx + 1 }/{ total }]
          </span>
        </div>

      </div>
    </div>
  );
}