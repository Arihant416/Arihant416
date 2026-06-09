import { motion } from 'framer-motion';

const rise = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const STATS = [
  { num: '4+',  label: 'Years experience',   sub: 'backend & distributed systems' },
  { num: '1M+', label: 'Daily API requests',  sub: '99.9% uptime @ Perfios'         },
  { num: '₹4L', label: 'Monthly cost saved',  sub: 'via microservice optimization'  },
  { num: '30+', label: 'APIs shipped',         sub: 'production-grade, low-latency'  },
];

export default function Hero() {
  return (
    <section style={{ borderTop: 'none', padding: 0 }}>
      <div className="hero-section">
        <div className="hero-inner">

          <motion.p className="hero-eyebrow" {...rise(0.05)}>
            Arihant Jain &nbsp;·&nbsp; New Delhi, India
          </motion.p>

          <motion.h1 className="hero-h1" {...rise(0.30)}>
            Software <em>Engineer.</em>
          </motion.h1>

          <motion.div className="hero-body" {...rise(0.45)}>
            {/* Left col */}
            <div>
              <p className="hero-sub">
                Backend-focused engineer building distributed APIs, microservices,
                and cloud-native systems that scale to millions of requests a day.
                Currently at Perfios, designing APIs for the fintech ecosystem.
              </p>
              <p className="hero-status">
                <span className="status-dot" />
                Available for senior backend / staff engineer roles
              </p>
              <div className="hero-cta">
                <a href="#experience" className="btn btn-primary">View Work</a>
                <a href="#contact"    className="btn btn-ghost">Get in Touch</a>
              </div>
            </div>

            {/* Right col — stats */}
            <div className="hero-stats">
              {STATS.map(({ num, label, sub }) => (
                <div key={label} className="hero-stat-row">
                  <span className="stat-big">{num}</span>
                  <div>
                    <span style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{label}</span>
                    <span className="stat-sub">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <div className="scroll-hint-line" />
          <span>scroll</span>
        </div>
      </div>
    </section>
  );
}