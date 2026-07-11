import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { testimonials } from '../data/testimonials';

const initials = (name) => name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
const wrapIndex = (index) => (index + testimonials.length) % testimonials.length;

const cardTransition = (shouldReduceMotion = false) => (
  shouldReduceMotion ? { duration: 0 } : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
);

function Identity({ testimonial, compact = false }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span
        className={`flex shrink-0 items-center justify-center border border-border bg-card2 font-mono font-bold text-accent ${
          compact ? 'h-9 w-9 rounded-xl text-[10px]' : 'h-12 w-12 rounded-2xl text-sm'
        }`}
      >
        {initials(testimonial.name)}
      </span>
      <div className="min-w-0">
        <p className={`${compact ? 'text-sm' : 'text-base sm:text-lg'} font-semibold leading-tight text-text`}>
          {testimonial.name}
        </p>
        <p className={`${compact ? 'text-[10px]' : 'text-[11px]'} mt-1 leading-relaxed text-muted`}>
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}

function ActiveCard({ testimonial, shouldReduceMotion, direction }) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.article
        key={testimonial.name}
        custom={direction}
        className="console-panel rounded-[1.45rem] border-accent/55 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:rounded-[1.8rem] sm:p-6 lg:p-7 xl:p-8"
        initial={shouldReduceMotion ? false : { opacity: 0, x: direction * 34, y: 14, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -28, y: -8, scale: 0.98 }}
        transition={cardTransition(shouldReduceMotion)}
      >
        <div className="mb-6 flex items-start justify-between gap-4 border-b border-border pb-5">
          <Identity testimonial={testimonial} />

          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            aria-label={`View ${testimonial.name}'s LinkedIn profile`}
          >
            <FiExternalLink aria-hidden="true" />
          </a>
        </div>

        <blockquote>
          <p className="text-[15px] font-light leading-relaxed text-text-dim sm:text-base lg:text-lg xl:text-xl">
            <span className="mr-2 font-serif text-3xl leading-none text-accent">"</span>
            {testimonial.quote}
            <span className="ml-2 font-serif text-3xl leading-none text-accent">"</span>
          </p>
        </blockquote>
      </motion.article>
    </AnimatePresence>
  );
}

function PreviewCard({ testimonial, side, onClick, shouldReduceMotion }) {
  const isLeft = side === 'left';

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`testimonial-preview-card group rounded-[1.25rem] border border-border bg-card/70 p-4 text-left opacity-55 shadow-[0_20px_60px_rgba(0,0,0,0.16)] blur-[0.2px] transition duration-200 hover:opacity-85 hover:blur-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
        isLeft ? 'testimonial-preview-left' : 'testimonial-preview-right'
      }`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.9 }}
      animate={{ opacity: 0.55, y: 0, scale: 0.92 }}
      whileHover={shouldReduceMotion ? undefined : { opacity: 0.85, y: -2, scale: 0.94 }}
      transition={cardTransition(shouldReduceMotion)}
      aria-label={`Show testimonial from ${testimonial.name}`}
    >
      <Identity testimonial={testimonial} compact />
      <p className="mt-4 max-h-24 overflow-hidden text-[12px] leading-relaxed text-text-dim">
        <span className="mr-1 font-serif text-accent">"</span>
        {testimonial.quote}
        <span className="ml-1 font-serif text-accent">"</span>
      </p>
      <span className="mt-4 inline-flex font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors duration-200 group-hover:text-accent">
        Bring forward
      </span>
    </motion.button>
  );
}

function ArrowButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
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
  const total = testimonials.length;
  const previousIndex = wrapIndex(activeIndex - 1);
  const nextIndex = wrapIndex(activeIndex + 1);

  const goTo = (index, nextDirection = 1) => {
    setDirection(nextDirection);
    setActiveIndex(wrapIndex(index));
  };

  const goPrevious = () => goTo(activeIndex - 1, -1);
  const goNext = () => goTo(activeIndex + 1, 1);

  return (
    <div className="section testimonial-section border-b border-border bg-bg" id="testimonials">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between min-[960px]:flex-col min-[960px]:items-start min-[960px]:justify-start">
        <div>
          <span className="section-kicker">04 Endorsements</span>
          <h2 className="mt-4 text-2xl font-light leading-tight text-text sm:text-3xl">
            Trusted <span className="font-serif italic text-accent">Peer Review</span>
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="console-tag">{total} LinkedIn notes</span>
            <span className="console-tag">Peer written</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ArrowButton label="Previous testimonial" onClick={goPrevious}>
            <FiChevronLeft aria-hidden="true" />
          </ArrowButton>
          <span className="mono-label min-w-14 text-center text-muted">
            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <ArrowButton label="Next testimonial" onClick={goNext}>
            <FiChevronRight aria-hidden="true" />
          </ArrowButton>
        </div>
      </div>

      <div>
        <div className="testimonial-stage">
          <PreviewCard
            testimonial={testimonials[previousIndex]}
            side="left"
            onClick={() => goTo(previousIndex, -1)}
            shouldReduceMotion={shouldReduceMotion}
          />
          <PreviewCard
            testimonial={testimonials[nextIndex]}
            side="right"
            onClick={() => goTo(nextIndex, 1)}
            shouldReduceMotion={shouldReduceMotion}
          />

          <div className="testimonial-active-frame">
            <ActiveCard
              testimonial={testimonials[activeIndex]}
              shouldReduceMotion={shouldReduceMotion}
              direction={direction}
            />
          </div>
        </div>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => goTo(index, index >= activeIndex ? 1 : -1)}
              className="flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              aria-label={`Show testimonial ${index + 1} from ${testimonial.name}`}
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  index === activeIndex ? 'w-6 bg-accent' : 'w-1.5 bg-border'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
