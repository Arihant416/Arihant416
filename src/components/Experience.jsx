import { motion } from 'framer-motion';
import { workExperience, projects } from '../data/experience';

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: '-50px' },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Experience() {
  return (
    <div className="section">

      {/* ── Work ── */}
      <motion.p className="section-label" {...inView(0)}>
        Work Experience
      </motion.p>

      <div className="exp-list">
        {workExperience.map((job, i) => (
          <motion.div
            key={job.company}
            className={`exp-card${job.current ? ' current' : ''}`}
            {...inView(i * 0.07)}
          >
            <div className="exp-header">
              <div>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="exp-company">
                  {job.company} · {job.location} ↗
                </a>
                <p className="exp-title">{job.title}</p>
              </div>
              <span className="exp-date">{job.date}</span>
            </div>

            <p className="exp-desc">{job.description}</p>

            <ul className="highlight-list">
              {job.highlights.map(h => (
                <li key={h} className="highlight-item">{h}</li>
              ))}
            </ul>

            <div className="chip-row">
              {job.chips.map(c => <span key={c} className="chip">{c}</span>)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Projects ── */}
      <motion.p className="section-label" style={{ marginTop: '4rem' }} {...inView(0)}>
        Projects
      </motion.p>

      <div className="proj-list">
        {projects.map((proj, i) => (
          <motion.div key={proj.name} className="proj-card" {...inView(i * 0.07)}>
            <a href={proj.url} target="_blank" rel="noopener noreferrer" className="proj-name">
              {proj.name}
              <span style={{ fontSize: '.85rem', color: 'var(--accent)' }}>↗</span>
            </a>
            <p className="proj-desc">{proj.description}</p>
            <div className="chip-row">
              {proj.chips.map(c => <span key={c} className="chip">{c}</span>)}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
