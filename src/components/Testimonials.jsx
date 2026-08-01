import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { testimonials } from '../data/testimonials';

const EASE = [0.22, 1, 0.36, 1];
const initials = (name) => name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
const displayText = (text) => text
  .replaceAll('Ã¢â‚¬â„¢', 'â€™')
  .replaceAll('Ã¢â‚¬â€', 'â€”')
  .replaceAll('Ã¢â‚¬â€œ', 'â€“');

export default function Testimonials() {
  const trackRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const moveTrack = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.82, 320),
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section id="testimonials" className="site-section testimonials-section">
      <div className="section-heading recommendation-heading">
        <div>
          <p className="section-kicker">Recommendations</p>
          <h2>Peer recommendations.</h2>
        </div>

        <div className="recommendation-heading-side">
          <p>
            LinkedIn recommendations from colleagues across
            Perfios, Karza Technologies, and InTimeTec.
          </p>
          <div className="recommendation-controls" aria-label="Recommendation navigation">
            <button type="button" onClick={() => moveTrack(-1)} aria-label="Previous recommendations">
              <FiArrowLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => moveTrack(1)} aria-label="Next recommendations">
              <FiArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="recommendation-viewport">
        <div
          ref={trackRef}
          className="recommendation-track"
          aria-label="Peer recommendations"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.48, delay: Math.min(index, 2) * 0.07, ease: EASE }}
            >
              <div className="recommendation-card-head">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>Peer recommendation</span>
              </div>

              <footer>
                <div className="recommendation-person">
                  <span className="recommendation-avatar">{initials(testimonial.name)}</span>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <p>{displayText(testimonial.role)}</p>
                  </div>
                </div>
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${testimonial.name}'s LinkedIn profile`}
                >
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </footer>

              <blockquote>{displayText(testimonial.quote)}</blockquote>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
