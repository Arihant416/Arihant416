import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { testimonials } from '../data/testimonials';

const EASE = [0.22, 1, 0.36, 1];
const wrapIndex = (index) => (index + testimonials.length) % testimonials.length;
const initials = (name) => name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
const cleanDisplayText = (text) => text
  .replaceAll('â€™', '’')
  .replaceAll('â€”', '—')
  .replaceAll('â€“', '–');

function ArrowButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card2 text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = testimonials[activeIndex];

  const goTo = (index, nextDirection = 1) => {
    setDirection(nextDirection);
    setActiveIndex(wrapIndex(index));
  };

  const goPrevious = () => goTo(activeIndex - 1, -1);
  const goNext = () => goTo(activeIndex + 1, 1);

  const handleDragEnd = (_, info) => {
    if (shouldReduceMotion) return;
    if (info.offset.x < -55) goNext();
    if (info.offset.x > 55) goPrevious();
  };

  return (
    <div className="recommendations-band border-b border-border" id="testimonials">
      <div className="mx-auto max-w-[1320px] px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[0.64fr_1.36fr] lg:gap-14">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <span className="section-kicker">Recommendations</span>
              <h2 className="display-type mt-5 text-[var(--fs-h2)] leading-[var(--lh-heading)] text-text">
                What the work
                <em className="block text-accent2">felt like to others.</em>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-text-dim">
                Genuine notes from engineers who worked alongside me across different stages of my career.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <ArrowButton label="Previous recommendation" onClick={goPrevious}>
                <FiArrowLeft aria-hidden="true" />
              </ArrowButton>
              <span className="min-w-16 text-center font-mono text-[10px] text-muted">
                {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
              <ArrowButton label="Next recommendation" onClick={goNext}>
                <FiArrowRight aria-hidden="true" />
              </ArrowButton>
            </div>
          </div>

          <div className="min-w-0">
            <div className="recommendation-stage" aria-live="polite">
              <span className="recommendation-mark" aria-hidden="true">“</span>

              <AnimatePresence initial={false} custom={direction}>
                <motion.article
                  key={active.name}
                  custom={direction}
                  className="recommendation-card"
                  initial={shouldReduceMotion ? false : { opacity: 0, x: direction * 42 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -32 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.42, ease: EASE }}
                  drag={shouldReduceMotion ? false : 'x'}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={handleDragEnd}
                >
                  <blockquote className="recommendation-quote">
                    {cleanDisplayText(active.quote)}
                  </blockquote>

                  <div className="recommendation-identity">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="recommendation-avatar">{initials(active.name)}</span>
                      <div className="min-w-0">
                        <p className="font-semibold text-text">{active.name}</p>
                        <p className="mt-1 text-[11px] leading-5 text-muted">
                          {cleanDisplayText(active.role)}
                        </p>
                      </div>
                    </div>

                    <a
                      href={active.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      aria-label={`View ${active.name}'s LinkedIn profile`}
                    >
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="recommendation-people" aria-label="Choose a recommendation">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => goTo(index, index >= activeIndex ? 1 : -1)}
                    className={`recommendation-person ${isActive ? 'is-active' : ''}`}
                    aria-pressed={isActive}
                  >
                    <span className="font-mono text-[9px] text-muted">{String(index + 1).padStart(2, '0')}</span>
                    <span className="truncate text-[11px] font-semibold text-text-dim">{testimonial.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
