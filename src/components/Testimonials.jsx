import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { testimonials } from '../data/testimonials';

const LINKEDIN_RECOMMENDATIONS = 'https://www.linkedin.com/in/arihant416/details/recommendations/';
const SHOWN = 2;
const ease = [0.22, 1, 0.36, 1];

const initials = (name) => name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();

// Approved redesign: two verbatim excerpts, then a link to all of them on LinkedIn.
// Editorial layout: the first is a lead pull-quote, the second a smaller companion.
// `excerpt` is always an exact substring of the LinkedIn quote (never edited).
export default function Testimonials() {
  const reduceMotion = useReducedMotion();
  const shown = testimonials.filter((t) => t.excerpt && t.quote.includes(t.excerpt)).slice(0, SHOWN);

  return (
    <div className="section">
      <div className="page-shell">
        <header className="section-head">
          <p className="kicker">Recommendations</p>
          <h2 className="section-title">What colleagues say.</h2>
          <p className="section-dek">From people I've built with, in their own words.</p>
        </header>

        <div className="quotes">
          {shown.map((item, index) => (
            <motion.figure
              key={item.name}
              className={`quote ${index === 0 ? 'quote--lead' : 'quote--side'}`}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.06, ease }}
            >
              {index === 0 && <span className="quote-mark" aria-hidden="true">“</span>}
              <blockquote cite={item.linkedin}>“…{item.excerpt}…”</blockquote>
              <figcaption>
                <span className="quote-initials" aria-hidden="true">{initials(item.name)}</span>
                <span className="quote-who">
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer">{item.name}</a>
                  <span>{item.relation}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <a className="text-link" href={LINKEDIN_RECOMMENDATIONS} target="_blank" rel="noopener noreferrer">
          Read all recommendations on LinkedIn
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
