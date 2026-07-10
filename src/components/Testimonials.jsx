import { motion, useReducedMotion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { testimonials } from '../data/testimonials';

const initials = (name) => name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();

const cardIn = (index = 0, shouldReduceMotion = false) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.38, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] },
});

function TestimonialCard({ testimonial, index, shouldReduceMotion, className = '' }) {
  return (
    <motion.article
      className={`rounded-[1.1rem] border border-border bg-card/75 p-4 transition-colors duration-200 hover:border-accent/55 sm:rounded-[1.25rem] sm:p-5 ${className}`}
      {...cardIn(index, shouldReduceMotion)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card2 font-mono text-[11px] font-bold text-accent">
            {initials(testimonial.name)}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-tight text-text sm:text-[15px]">{testimonial.name}</p>
            <p className="mt-1 text-[10px] leading-relaxed text-muted sm:text-[11px]">{testimonial.role}</p>
          </div>
        </div>

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
        <p className="mt-4 text-[12.5px] leading-relaxed text-text-dim sm:text-[13px]">
          <span className="mr-1 font-serif text-accent">"</span>
          {testimonial.quote}
          <span className="ml-1 font-serif text-accent">"</span>
        </p>
      </blockquote>
    </motion.article>
  );
}

function FeaturedTestimonial({ testimonial, shouldReduceMotion }) {
  return (
    <motion.article
      className="console-panel rounded-[1.35rem] border-accent/55 p-5 sm:rounded-[1.65rem] sm:p-7 lg:p-8"
      {...cardIn(0, shouldReduceMotion)}
    >
      <div className="mb-6 flex items-start justify-between gap-4 border-b border-border pb-5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-card2 font-mono text-sm font-bold text-accent">
            {initials(testimonial.name)}
          </span>
          <div className="min-w-0">
            <p className="font-semibold leading-tight text-text sm:text-lg">{testimonial.name}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted">{testimonial.role}</p>
          </div>
        </div>

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
        <p className="text-base font-light leading-relaxed text-text-dim sm:text-lg lg:text-xl">
          <span className="mr-2 font-serif text-3xl leading-none text-accent">"</span>
          {testimonial.quote}
          <span className="ml-2 font-serif text-3xl leading-none text-accent">"</span>
        </p>
      </blockquote>
    </motion.article>
  );
}

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const [featured, ...supporting] = testimonials;

  return (
    <div className="section border-b border-border bg-bg" id="testimonials">
      <div className="col-span-1">
        <span className="section-kicker">04 Endorsements</span>
        <h2 className="mt-4 text-2xl font-light leading-tight text-text sm:text-3xl">
          Trusted <span className="font-serif italic text-accent">Peer Review</span>
        </h2>
        <div className="mt-5 hidden flex-wrap gap-2 lg:flex">
          <span className="console-tag">{testimonials.length} LinkedIn notes</span>
          <span className="console-tag">Peer written</span>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <FeaturedTestimonial testimonial={featured} shouldReduceMotion={shouldReduceMotion} />

        <div className="-mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-1">
          {supporting.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index + 1}
              shouldReduceMotion={shouldReduceMotion}
              className="min-w-[84%] snap-start sm:min-w-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
