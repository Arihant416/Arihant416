import { motion } from 'framer-motion';

// Staggered fade-up helper
const item = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const WHAT_I_DO = [
  { icon: '⚡', title: 'Distributed APIs',     desc: 'High-throughput, low-latency REST services with resilient patterns.' },
  { icon: '☁️', title: 'Cloud-native systems', desc: 'AWS, Docker, Kubernetes — cost-conscious and observable.' },
  { icon: '⚙️', title: 'Performance & scale',  desc: 'Caching, queuing, profiling, and sub-100ms engineering.' },
  { icon: '🤝', title: 'Mentorship',           desc: 'Lead cross-functional workstreams and grow engineering teams.' },
];

export default function Hero() {
  return (
    <section style={{ borderTop: 'none' }}>
      <div className="hero">
        <div style={{ width: '100%' }}>

          {/* Eyebrow */}
          <motion.p className="hero-eyebrow" {...item(0.05)}>
            Arihant Jain &nbsp;·&nbsp; New Delhi, India
          </motion.p>

          {/* H1 */}
          <motion.h1 className="hero-h1" {...item(0.15)}>
            Senior Software<br />
            <em>Engineer.</em>
          </motion.h1>

          {/* Sub */}
          <motion.p className="hero-sub" {...item(0.25)}>
            Backend-focused engineer building distributed APIs, microservices,
            and cloud-native systems that scale to millions of requests a day.
          </motion.p>

          {/* Status badge */}
          <motion.p className="hero-status" {...item(0.32)}>
            <span className="hero-status-dot" />
            Currently: scaling fintech infrastructure @ Perfios
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero-cta" {...item(0.4)}>
            <a href="#experience" className="btn btn-primary">View Work</a>
            <a href="#contact"    className="btn btn-ghost">Get in Touch</a>
            <a
              href="https://arihant416.github.io/resume/index.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Resume ↗
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div className="stats-row" {...item(0.5)}>
            {[
              { num: '4+',   label: 'Years experience'   },
              { num: '1M+',  label: 'Daily API requests'  },
              { num: '₹4L',  label: 'Monthly cost saved'  },
            ].map(({ num, label }) => (
              <div key={label} className="stat-cell">
                <span className="stat-num">{num}</span>
                <span className="stat-lbl">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* What I do grid */}
          <motion.div {...item(0.6)} style={{ marginTop: '3.5rem' }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              What I do
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1px', background: 'var(--border2)', border: '1px solid var(--border2)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
              {WHAT_I_DO.map(({ icon, title, desc }) => (
                <div key={title} style={{ background: 'var(--bg-card)', padding: '1.25rem', transition: 'background .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-card2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
                >
                  <div style={{ fontSize: '1.25rem', marginBottom: '.5rem', lineHeight: 1 }}>{icon}</div>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text)', letterSpacing: '.03em', marginBottom: '.35rem', fontWeight: 500 }}>{title}</p>
                  <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
