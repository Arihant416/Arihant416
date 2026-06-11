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
    <div className="section section-border">
      {/* Retained your working explicit framer-motion properties */ }
      <motion.p
        className="section-label"
        initial={ { opacity: 0, y: 14 } }
        whileInView={ { opacity: 1, y: 0 } }
        viewport={ { once: true } }
        transition={ { duration: 0.5 } }
      >
        Recommendations
      </motion.p>

      {/* NEW WRAPPER CONTAINER: Groups everything together as the single 
          right-hand column child item for the new grid layout rules */}
      <div className="flex flex-col justify-between w-full">
        <div style={ { minHeight: 150, position: 'relative' } }>
          <AnimatePresence mode="wait" custom={ dir }>
            <motion.div
              key={ idx }
              custom={ dir }
              variants={ {
                enter: d => ({ opacity: 0, x: d * 28 }),
                center: { opacity: 1, x: 0 },
                exit: d => ({ opacity: 0, x: d * -28 }),
              } }
              initial="enter"
              animate="center"
              exit="exit"
              transition={ { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }
              className="t-wrap"
            >
              <p className="t-quote">"{ t.quote }"</p>
              <div className="t-meta">
                {/* Name & Logo locked together on a single full-width line */ }
                <div className="t-identity">
                  <p className="t-name">{ t.name }</p>
                  <a
                    href={ t.linkedin }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-link"
                    aria-label={ `View ${t.name}'s LinkedIn profile` }
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>

                {/* Stacks perfectly underneath */ }
                <span className="t-role">{ t.role }</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation block lives comfortably inside the column container now */ }
        <div className="t-nav">
          <button className="t-btn" onClick={ prev } aria-label="Previous">←</button>
          <button className="t-btn" onClick={ next } aria-label="Next">→</button>
          <div className="t-dots">
            { testimonials.map((_, i) => (
              <button
                key={ i }
                className={ `t-dot${i === idx ? ' active' : ''}` }
                style={ { width: i === idx ? 22 : 6 } }
                onClick={ () => go(i, i > idx ? 1 : -1) }
                aria-label={ `Go to ${i + 1}` }
              />
            )) }
          </div>
          <span className="t-counter">{ idx + 1 } / { total }</span>
        </div>
      </div>
    </div>
  );
}