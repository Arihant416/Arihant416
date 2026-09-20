import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import { testimonials } from '../data/testimonials';

const LINKEDIN_RECOMMENDATIONS = 'https://www.linkedin.com/in/arihant416/details/recommendations/';
const ease = [0.22, 1, 0.36, 1];

const initials = (name) => name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();

function HighlightedQuote({ quote, excerpt }) {
  const start = excerpt ? quote.indexOf(excerpt) : -1;
  if (start === -1) return quote;
  return (
    <>
      {quote.slice(0, start)}
      <mark className="rec-mark">{excerpt}</mark>
      {quote.slice(start + excerpt.length)}
    </>
  );
}

function RecommendationCard({ item, index, reduceMotion }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const hasExcerpt = item.excerpt && item.quote.includes(item.excerpt);

  return (
    <motion.article
      className={`rec-card ${open ? 'is-open' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: (index % 2) * 0.06, ease }}
    >
      <blockquote className="rec-pull">
        <p>{hasExcerpt ? `“…${item.excerpt}…”` : `“${item.quote}”`}</p>
      </blockquote>

      <div className="rec-person">
        <span className="rec-initials" aria-hidden="true">{initials(item.name)}</span>
        <div className="rec-person-copy">
          <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="rec-name">
            {item.name}
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <p className="rec-relation">{item.relation}</p>
          {item.current && <p className="rec-current">Now {item.current}</p>}
        </div>
      </div>

      {hasExcerpt && (
        <>
          <button
            type="button"
            className="rec-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Show less' : 'Read in full'}
            <FiChevronDown aria-hidden="true" />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                className="rec-full"
                initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.32, ease }}
              >
                <p>
                  <HighlightedQuote quote={item.quote} excerpt={item.excerpt} />
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.article>
  );
}

function useScrollEdges() {
  const ref = useRef(null);
  const [edges, setEdges] = useState({ start: false, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const vertical = getComputedStyle(el).overflowY !== 'hidden';
    const pos = vertical ? el.scrollTop : el.scrollLeft;
    const max = vertical ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
    const next = { start: pos > 4, end: max - pos > 4 };
    setEdges((prev) => (prev.start === next.start && prev.end === next.end ? prev : next));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    if (el.firstElementChild) observer.observe(el.firstElementChild);
    return () => observer.disconnect();
  }, [update]);

  return { ref, edges, onScroll: update };
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();
  const scroller = useScrollEdges();

  return (
    <div className="section rec-section border-b border-border bg-bg" id="testimonials">
      <div className="rec-intro">
        <h2 className="section-kicker section-numbered-title">04 Recommendations</h2>
        <p className="rec-lede">
          {testimonials.length} engineers from two teams, quoted word for word from LinkedIn.
        </p>
        <a
          href={LINKEDIN_RECOMMENDATIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="rec-source"
        >
          See them on LinkedIn
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="rec-body">
        <div
          ref={scroller.ref}
          onScroll={scroller.onScroll}
          className={`rec-scroller ${scroller.edges.start ? 'fade-start' : ''} ${scroller.edges.end ? 'fade-end' : ''}`}
          role="region"
          aria-label="Recommendations (scrollable)"
          tabIndex={0}
        >
          <div className="rec-grid">
            {testimonials.map((item, index) => (
              <RecommendationCard key={item.name} item={item} index={index} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
        <p className={`rec-hint ${scroller.edges.end ? 'is-visible' : ''}`} aria-hidden="true">
          <span className="rec-hint-scroll">Scroll for more</span>
          <span className="rec-hint-swipe">Swipe for more</span>
        </p>
      </div>
    </div>
  );
}
