import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';

const proof = [
  { value: '99.9%+', label: 'platform availability' },
  { value: '5M+', label: 'daily requests' },
  { value: '$700K+', label: 'saved since Apr 2024' },
];

const reveal = (delay, reduceMotion) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <div className="page-shell hero-inner">
        <motion.p className="hero-identity" {...reveal(0.05, reduceMotion)}>
          Arihant Jain <span>Senior Backend Engineer · Platform</span>
        </motion.p>

        {/* No reveal on the headline: it must paint with the first frame (LCP). */}
        <h1 className="display-1 hero-title">
          I build the shared infrastructure that <em>200+ production APIs</em> run on.
        </h1>

        <div className="hero-foot">
          <motion.div className="hero-lede" {...reveal(0.22, reduceMotion)}>
            <p className="hero-intro">
              At Perfios, I scale TotalKYC's core APIs and build what they
              run on: shared libraries, health-aware routing, session
              coordination, and disaster recovery.
            </p>

            <div className="hero-actions">
              <a href="#platform" className="button button-primary">
                See the platform
                <FiArrowDownRight aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Arihant416"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                GitHub
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.dl className="hero-proof" {...reveal(0.32, reduceMotion)}>
            {proof.map(({ value, label }) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
