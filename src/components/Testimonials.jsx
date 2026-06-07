import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const total = testimonials.length;

  const go = (newIdx, d) => { setDir(d); setIdx(newIdx); };
  const prev = () => go((idx - 1 + total) % total, -1);
  const next = () => go((idx + 1) % total,          1);

  const t = testimonials[idx];

  return (
    <div className="section">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Recommendations
      </motion.p>

      {/* Slide area */}
      <div style={{ position: 'relative', minHeight: 180 }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={idx}
            custom={dir}
            variants={{
              enter:  d => ({ opacity: 0, x: d * 28 }),
              center:   { opacity: 1, x: 0 },
              exit:   d => ({ opacity: 0, x: d * -28 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="testimonial-wrap"
          >
            {/* Avatar + meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.1rem' }}>
              <img
                src={t.avatar}
                alt={t.name}
                style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--border2)', background: 'var(--bg-card)' }}
              />
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-link"
                style={{ marginLeft: 'auto' }}
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Quote */}
            <p className="testimonial-quote">"{t.quote}"</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="testimonial-nav">
        <button className="testimonial-nav-btn" onClick={prev} aria-label="Previous">←</button>
        <button className="testimonial-nav-btn" onClick={next} aria-label="Next">→</button>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`t-dot${i === idx ? ' active' : ''}`}
              style={{ width: i === idx ? 22 : 6 }}
              onClick={() => go(i, i > idx ? 1 : -1)}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>

        <span className="testimonial-counter">{idx + 1} / {total}</span>
      </div>
    </div>
  );
}
