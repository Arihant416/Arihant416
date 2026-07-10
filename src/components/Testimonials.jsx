import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { testimonials } from '../data/testimonials';

const initials = (name) => name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const total = testimonials.length;
  const go = (i, d) => { setDir(d); setIdx(i); };
  const prev = () => go((idx - 1 + total) % total, -1);
  const next = () => go((idx + 1) % total, 1);
  const t = testimonials[idx];

  return (
    <div className="section border-b border-border bg-bg" id="testimonials">
      <div className="col-span-1">
        <span className="section-kicker">04 Endorsements</span>
        <h2 className="mt-4 text-2xl font-light leading-tight text-text sm:text-3xl">
          Trusted <span className="font-serif italic text-accent">Peer Review</span>
        </h2>
      </div>

      <div className="console-panel min-h-[320px] rounded-[1.35rem] p-4 sm:min-h-[380px] sm:rounded-[1.7rem] sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card2 font-mono text-sm font-bold text-accent">
              {initials(t.name)}
            </span>
            <div>
              <p className="font-semibold text-text">{t.name}</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted sm:text-[10px]">{t.role}</p>
            </div>
          </div>

          <a
            href={t.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost !min-h-10 !px-4 !py-2"
            aria-label={`View ${t.name}'s LinkedIn profile`}
          >
            LinkedIn
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>

        <div className="relative flex min-h-[180px] items-center sm:min-h-[210px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={idx}
              custom={dir}
              variants={{
                enter: (d) => shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: d * 12 },
                center: { opacity: 1, y: 0 },
                exit: (d) => shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: d * -12 },
              }}
              initial={shouldReduceMotion ? false : 'enter'}
              animate="center"
              exit="exit"
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <p className="max-w-4xl text-base font-light leading-relaxed text-text-dim sm:text-xl md:text-2xl lg:text-3xl">
                <span className="mr-2 font-serif text-accent">"</span>
                {t.quote}
                <span className="ml-2 font-serif text-accent">"</span>
              </p>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="inline-flex min-h-11 items-center rounded-full border border-border px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              Prev
            </button>
            <button
              onClick={next}
              className="inline-flex min-h-11 items-center rounded-full border border-border px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              Next
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.name}
                  className="flex h-11 w-8 items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  onClick={() => go(i, i > idx ? 1 : -1)}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className={`block h-[3px] w-full rounded-full transition-colors duration-200 ${i === idx ? 'bg-accent' : 'bg-border'}`} />
                </button>
              ))}
            </div>
            <span className="mono-label text-muted">
              {idx + 1}/{total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
