import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';

const EASE = [0.22, 1, 0.36, 1];

const STATS = [
  { value: '5M+', label: 'Daily requests supported' },
  { value: '$700K+', label: 'Cumulative savings since Apr 2024' },
  { value: '245 / 260', label: 'APIs containerized' },
  { value: '30+', label: 'APIs designed and shipped' },
];

const reveal = (delay, shouldReduceMotion) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.68, delay, ease: EASE },
});

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero-section">
      <div className="hero-gateway">
        <motion.img
          src="/spatial-gateway.webp"
          alt=""
          aria-hidden="true"
          className="hero-art"
          fetchPriority="high"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.1, ease: EASE }}
        />

        <div className="hero-content">
          <motion.div className="hero-topline" {...reveal(0.08, shouldReduceMotion)}>
            <span>Senior Software Engineer · Backend and platform systems</span>
            <span>New Delhi, India · Working across regions</span>
          </motion.div>

          <div className="hero-copy">
            <motion.p
              className="mb-5 flex items-center gap-2 text-[11px] font-semibold text-[#b9cdf4] sm:text-xs"
              {...reveal(0.14, shouldReduceMotion)}
            >
              <span className="status-dot" />
              Production-minded, from architecture through incident response
            </motion.p>

            <motion.h1 className="hero-title" {...reveal(0.2, shouldReduceMotion)}>
              Arihant Jain
              <em>builds dependable backend systems.</em>
            </motion.h1>

            <motion.p className="hero-summary" {...reveal(0.28, shouldReduceMotion)}>
              I&apos;m a Senior Software Engineer at Perfios, shaping identity and KYC platforms that
              serve millions of requests each day. My work spans reliability, multi-region recovery,
              asynchronous pipelines, modernization, and cost-aware engineering.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
              {...reveal(0.36, shouldReduceMotion)}
            >
              <a href="#experience" className="btn btn-primary">
                Explore the work
                <FiArrowDownRight aria-hidden="true" />
              </a>
              <a
                href="https://arihant416.github.io/resume/index.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Read the resume
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-metrics"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.44, ease: EASE }}
            aria-label="Selected engineering outcomes"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="hero-metric">
                <p className="hero-metric-value">{value}</p>
                <p className="hero-metric-label">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
