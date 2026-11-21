import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import SystemMap from './SystemMap';

// `ok` marks a healthy figure (teal dot, always with its text label).
const proof = [
  { value: '99.9%+', label: 'platform availability', ok: true },
  { value: '5M+', label: 'daily requests' },
  { value: '$700K+', label: 'saved since Apr 2024' },
];

const reveal = (delay, reduceMotion) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <motion.p className="hero-eyebrow" {...reveal(0.05, reduceMotion)}>
            Arihant Jain · Senior Backend Engineer · Platform
          </motion.p>

          {/* No reveal on the headline: it must paint with the first frame (LCP). */}
          <h1 className="hero-title">
            I build the shared infrastructure that <em>200+ production APIs</em> run on.
          </h1>

          <motion.p className="hero-lede" {...reveal(0.12, reduceMotion)}>
            At Perfios, I scale and maintain TotalKYC's core APIs and engineer the shared layer they run on.
          </motion.p>

          <motion.ul className="hero-proof" {...reveal(0.2, reduceMotion)}>
            {proof.map(({ value, label, ok }) => (
              <li key={label}>
                <b>{value}</b>
                <span>{ok && <i className="dot dot--ok" aria-hidden="true" />}{label}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div className="hero-ctas" {...reveal(0.28, reduceMotion)}>
            <a href="#platform" className="btn btn-primary">
              See the platform
              <FiArrowDownRight aria-hidden="true" />
            </a>
            <a href="https://github.com/Arihant416" target="_blank" rel="noopener noreferrer" className="btn">
              GitHub
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div className="hero-map" {...reveal(0.2, reduceMotion)}>
          <SystemMap />
        </motion.div>
      </div>
    </section>
  );
}
