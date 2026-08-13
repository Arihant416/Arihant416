import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import HeroIllustration from './HeroIllustration';

const SpatialScene = lazy(() => import('./SpatialScene'));

const proof = [
  { value: '5M+', label: 'requests each day' },
  { value: '30+', label: 'APIs designed' },
  { value: '$700K+', label: 'saved since Apr 2024' },
];

const reveal = (delay, reduceMotion) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="spatial-hero">
      <Suspense fallback={<div className="spatial-scene-loading" aria-hidden="true" />}>
        <SpatialScene reduceMotion={reduceMotion} />
      </Suspense>

      <div className="spatial-hero-shade" aria-hidden="true" />

      <div className="spatial-hero-content">
        <motion.p className="spatial-identity" {...reveal(0.05, reduceMotion)}>
          Arihant Jain <span>Senior Software Engineer</span>
        </motion.p>

        <div className="spatial-hero-main">
          <div className="spatial-hero-copy">
            <motion.h1 {...reveal(0.12, reduceMotion)}>
              I build reliable backend systems.
            </motion.h1>

            <motion.p className="spatial-hero-intro" {...reveal(0.2, reduceMotion)}>
              I work on fintech and KYC platforms at Perfios. I focus on dependable
              APIs, clear decisions, and sensible operating costs.
            </motion.p>

            <motion.div className="spatial-hero-actions" {...reveal(0.28, reduceMotion)}>
              <a href="#experience" className="spatial-action spatial-action-primary">
                View my work
                <FiArrowDownRight aria-hidden="true" />
              </a>
              <a
                href="https://arihant416.github.io/resume/index.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="spatial-action spatial-action-secondary"
              >
                Resume
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <HeroIllustration />
        </div>

        <motion.dl className="spatial-proof" {...reveal(0.36, reduceMotion)}>
          {proof.map(({ value, label }) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
