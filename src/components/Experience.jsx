import { motion } from 'framer-motion';
import { workExperience, projects } from '../data/experience';

export default function Experience() {
  return (
    <div className="w-full">
      {/* ══════════════════════════════════════════
         BLOCK 1: WORK EXPERIENCE
      ══════════════════════════════════════════ */}
      <div className="section">
        {/* Child 1: Left Sticky Label Context */}
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Work Experience
        </motion.p>

        {/* Child 2: Right Column Timeline Layout */}
        <div className="exp-grid w-full">
          {workExperience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.title}`}
              className={`exp-card${job.current ? ' current' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="exp-header">
                <div>
                  <h4 className="font-sans text-xl font-medium tracking-tight">
                    <a 
                      href={job.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="exp-company"
                    >
                      {job.company} <span className="text-sm font-normal text-muted">· {job.location} ↗</span>
                    </a>
                  </h4>
                  <p className="exp-title">{job.title}</p>
                </div>
                <span className="exp-date">{job.date}</span>
              </div>

              {/* Verified description selector matching your key */}
              {job.description && (
                <p className="exp-desc">{job.description}</p>
              )}

              {/* Bullet highlights block */}
              {job.highlights && (
                <ul className="highlight-list">
                  {job.highlights.map((highlight, index) => (
                    <li key={index} className="highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {/* Verified chips map matching your array schema */}
              {job.chips && (
                <div className="chip-row">
                  {job.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
         BLOCK 2: PROJECTS
      ══════════════════════════════════════════ */}
      <div className="section">
        {/* Child 1: Left Sticky Label Context */}
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Projects
        </motion.p>

        {/* Child 2: Right Column Balanced Card Matrix */}
        <div className="proj-grid w-full">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              className="proj-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-2">
                <a 
                  href={proj.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="proj-name group"
                >
                  {proj.name}{' '}
                  <span className="transition-transform duration-200 inline-block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent">
                    ↗
                  </span>
                </a>
                <p className="proj-desc">{proj.description}</p>
              </div>

              {/* Corrected chips container */}
              {proj.chips && (
                <div className="chip-row mt-4">
                  {proj.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}