import { motion, useReducedMotion } from 'framer-motion';
import { workExperience } from '../data/experience';

const EASE = [0.22, 1, 0.36, 1];

const reveal = (index, shouldReduceMotion) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.52, delay: index * 0.05, ease: EASE },
});

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="site-section experience-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">01 · Experience</p>
          <h2>Production ownership, role by <em>role.</em></h2>
        </div>
        <p>
          Reverse-chronological evidence across fintech infrastructure, distributed execution,
          modernization, and the product work that led me into backend engineering.
        </p>
      </div>

      <div className="experience-list">
        {workExperience.map((job, index) => (
          <motion.article
            key={`${job.company}-${job.title}`}
            className="experience-entry"
            {...reveal(index, shouldReduceMotion)}
          >
            <aside className="experience-meta">
              <span className="entry-number">{String(index + 1).padStart(2, '0')}</span>
              <p>{job.date}</p>
              <p>{job.location}</p>
            </aside>

            <div className="experience-body">
              <header>
                <div>
                  <div className="role-title-row">
                    <h3>{job.title}</h3>
                    {job.current && (
                      <span className="current-label">
                        <span className={`status-dot ${shouldReduceMotion ? '' : 'is-pulsing'}`} />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="company-name">
                    {job.company}
                    {job.companyContext && <span> · {job.companyContext}</span>}
                  </p>
                </div>
              </header>

              <p className="role-summary">{job.summary}</p>

              <ul className="experience-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span aria-hidden="true">—</span>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>

              <div className="tag-list" aria-label={`${job.title} technologies`}>
                {job.chips.map((chip) => <span key={chip}>{chip}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
