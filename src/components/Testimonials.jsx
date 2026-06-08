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
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Recommendations
      </motion.p>

      <div style={{ minHeight: 150, position: 'relative' }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={idx}
            custom={dir}
            variants={{
              enter:  d => ({ opacity: 0, x: d * 28 }),
              center:   { opacity: 1, x: 0 },
              exit:   d => ({ opacity: 0, x: d * -28 }),
            }}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="t-wrap"
          >
            <p className="t-quote">"{t.quote}"</p>
            <div className="t-meta">
              <img src={t.avatar} alt={t.name} style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--border2)', background: 'var(--bg-card)', flexShrink: 0 }} />
              <div>
                <p className="t-name">{t.name}</p>
                <p className="t-role">{t.role}</p>
              </div>
              <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="t-link">LinkedIn ↗</a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="t-nav">
        <button className="t-btn" onClick={prev} aria-label="Previous">←</button>
        <button className="t-btn" onClick={next} aria-label="Next">→</button>
        <div className="t-dots">
          {testimonials.map((_, i) => (
            <button key={i} className={`t-dot${i === idx ? ' active' : ''}`} style={{ width: i === idx ? 22 : 6 }} onClick={() => go(i, i > idx ? 1 : -1)} aria-label={`Go to ${i + 1}`} />
          ))}
        </div>
        <span className="t-counter">{idx + 1} / {total}</span>
      </div>
    </div>
  );
}