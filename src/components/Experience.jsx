import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects, workExperience } from '../data/experience';

const itemIn = (index = 0, shouldReduceMotion = false) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.42, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] },
});

function ExperienceCard({ job, index, shouldReduceMotion }) {
  const isCurrent = job.date.includes('Present');

  return (
    <motion.article
      className={`career-entry ${isCurrent ? 'is-current' : ''}`}
      {...itemIn(index, shouldReduceMotion)}
    >
      <div className="career-entry-meta">
        <span className="career-entry-index">0{index + 1}</span>
        <div>
          <p className="career-entry-date">{job.date}</p>
          <p className="career-entry-location">{job.location}</p>
        </div>
      </div>

      <div className="career-entry-body">
        <div className="career-entry-heading">
          <div>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
          </div>
        </div>

        <p className="career-entry-summary">{job.shortDesc}</p>

        {job.details?.length > 0 && (
          <ul className="career-entry-details" aria-label={`${job.title} selected work`}>
            {job.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}

        <dl className="career-entry-proof">
          {job.metrics.map(({ value, label }) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full">
      <div className="w-full border-b border-border bg-bg px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="experience-heading-row">
            <h2 className="section-kicker section-numbered-title">01 Experience</h2>
            <p className="experience-heading-note">Product delivery → backend systems at scale.</p>
          </div>

          <div className="career-list">
            {workExperience.map((job, index) => (
              <ExperienceCard
                key={`${job.company}-${index}`}
                job={job}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border-b border-border bg-bg px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20" id="projects">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="section-kicker section-numbered-title mb-8 lg:mb-10">02 Projects</h2>

          <div className="project-grid">
            {projects.map((proj, index) => (
              <motion.article
                key={proj.name}
                className={`project-entry ${proj.flagship ? 'is-flagship' : ''}`}
                {...itemIn(index, shouldReduceMotion)}
              >
                <div className="project-entry-heading">
                  <div>
                    {proj.flagship && <span className="project-flagship">Flagship project</span>}
                    {proj.url ? (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-entry-link"
                      >
                        {proj.name}
                        <FiArrowUpRight aria-hidden="true" />
                      </a>
                    ) : (
                      <h3>{proj.name}</h3>
                    )}
                  </div>
                  <span className="mono-label text-muted">0{index + 1}</span>
                </div>

                <div className="project-story">
                  <div>
                    <span>Problem</span>
                    <p>{proj.problem}</p>
                  </div>
                  <div>
                    <span>Built</span>
                    <p>{proj.solution}</p>
                  </div>
                </div>

                {proj.metrics?.length > 0 && (
                  <dl className="project-proof">
                    {proj.metrics.map(({ value, label }) => (
                      <div key={label}>
                        <dt>{value}</dt>
                        <dd>{label}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
