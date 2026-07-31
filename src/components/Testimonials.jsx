import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { testimonials } from '../data/testimonials';

const EASE = [0.22, 1, 0.36, 1];
const wrapIndex = (index) => (index + testimonials.length) % testimonials.length;
const initials = (name) => name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
const displayText = (text) => text
  .replaceAll('â€™', '’')
  .replaceAll('â€”', '—')
  .replaceAll('â€“', '–');

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const active = testimonials[activeIndex];

  const goTo = (index, nextDirection = 1) => {
    setDirection(nextDirection);
    setActiveIndex(wrapIndex(index));
  };

  return (
    <section id="testimonials" className="site-section testimonials-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">05 · Recommendations</p>
          <h2>Written by people who saw the <em>work.</em></h2>
        </div>
        <p>
          Genuine LinkedIn recommendations from engineers who worked with me across Perfios,
          Karza Technologies, and InTimeTec.
        </p>
      </div>

      <div className="recommendation-layout">
        <div className="recommendation-controls">
          <button type="button" onClick={() => goTo(activeIndex - 1, -1)} aria-label="Previous recommendation">
            <FiArrowLeft aria-hidden="true" />
          </button>
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => goTo(activeIndex + 1, 1)} aria-label="Next recommendation">
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>

        <div className="recommendation-stage" aria-live="polite">
          <AnimatePresence initial={false} custom={direction}>
            <motion.article
              key={active.name}
              custom={direction}
              initial={shouldReduceMotion ? false : { opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -20 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.34, ease: EASE }}
            >
              <blockquote>{displayText(active.quote)}</blockquote>
              <footer>
                <div className="recommendation-person">
                  <span className="recommendation-avatar">{initials(active.name)}</span>
                  <div>
                    <strong>{active.name}</strong>
                    <p>{displayText(active.role)}</p>
                  </div>
                </div>
                <a
                  href={active.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${active.name}'s LinkedIn profile`}
                >
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </footer>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="recommendation-index" aria-label="Choose a recommendation">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => goTo(index, index >= activeIndex ? 1 : -1)}
              className={index === activeIndex ? 'is-active' : ''}
              aria-pressed={index === activeIndex}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{testimonial.name}</strong>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
