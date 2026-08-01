import { motion, useReducedMotion } from 'framer-motion';
import { workExperience } from '../data/experience';

const EASE = [0.22, 1, 0.36, 1];

const reveal = (index, shouldReduceMotion) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.56, delay: index * 0.08, ease: EASE },
});

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="site-section experience-section">
      <div className="experience-handoff" aria-hidden="true">
        <span />
      </div>

      <div className="section-heading experience-heading">
        <div>
          <p className="section-kicker">Experience / Current to foundation</p>
          <h2>Career progression.</h2>
        </div>
        <p>
          From product delivery to backend ownership, modernization, and recovery.
        </p>
      </div>

      <div className="experience-route" aria-label="Reverse-chronological work experience">
        <div className="route-line" aria-hidden="true">
          <span>Current</span>
          <i />
          <span>Foundation</span>
        </div>

        <div className="experience-list">
          {workExperience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.title}`}
              className="experience-entry"
              {...reveal(index, shouldReduceMotion)}
            >
              <div className="experience-node" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <aside className="experience-meta">
                <p>{job.date}</p>
                <p>{job.location}</p>
              </aside>

              <div className="experience-body">
                <header>
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
                    {job.companyContext && <span> / {job.companyContext}</span>}
                  </p>
                </header>

                <p className="role-summary">{job.summary}</p>

                <dl className="experience-signals">
                  {job.signals.map((signal) => (
                    <div key={`${signal.value}-${signal.label}`}>
                      <dt>{signal.value}</dt>
                      <dd>{signal.label}</dd>
                    </div>
                  ))}
                </dl>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
