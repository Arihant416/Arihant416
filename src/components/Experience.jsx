import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects, workExperience } from '../data/experience';

const EASE = [0.22, 1, 0.36, 1];

const reveal = (index, shouldReduceMotion) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.56, delay: index * 0.06, ease: EASE },
});

function ChipList({ chips }) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span key={chip} className="chip">{chip}</span>
      ))}
    </div>
  );
}

function CareerEntry({ job, index, shouldReduceMotion }) {
  return (
    <motion.article className="career-entry" {...reveal(index, shouldReduceMotion)}>
      <div className="career-entry-rail" aria-hidden="true">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span className={`career-node ${job.current ? 'is-current' : ''}`} />
      </div>

      <div className="career-entry-content">
        <header className="grid gap-4 border-b border-border pb-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-semibold text-text sm:text-2xl">{job.title}</h3>
              {job.current && <span className="meta-tag"><span className="status-dot" />Current</span>}
            </div>
            <p className="mt-2 text-sm text-text-dim">
              {job.company}
              {job.companyContext && <span className="text-muted"> · {job.companyContext}</span>}
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-mono text-[10px] text-muted">{job.date}</p>
            <p className="mt-1 text-[11px] text-muted">{job.location}</p>
          </div>
        </header>

        <div className="grid gap-7 pt-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(250px,0.7fr)] xl:gap-10">
          <div>
            <p className="max-w-3xl text-[13px] leading-7 text-text-dim sm:text-[15px]">
              {job.summary}
            </p>
            <p className="career-outcome">{job.selectedOutcome}</p>
          </div>

          <dl className="career-metrics">
            {job.outcomes.map(({ value, label }) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-7 border-t border-border pt-5">
          <ChipList chips={job.chips} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const [flagship, ...earlierProjects] = projects;

  return (
    <div className="w-full">
      <section className="experience-band border-b border-border px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-6 lg:grid-cols-[0.68fr_1.32fr] lg:items-end lg:gap-16">
            <div>
              <span className="section-kicker">Experience</span>
              <h2 className="display-type mt-5 text-[var(--fs-h2)] leading-[var(--lh-heading)] text-text">
                A career shaped by
                <em className="block text-accent">production consequences.</em>
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-text-dim sm:text-[15px] lg:justify-self-end">
              I started close to the product, moved deeper through real API security and scaling
              problems, and grew into ownership across architecture, reliability, delivery, and cost.
            </p>
          </div>

          <div className="career-list mt-12 lg:mt-16">
            {workExperience.map((job, index) => (
              <CareerEntry
                key={`${job.company}-${job.title}`}
                job={job}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="projects-band border-b border-border px-4 py-[var(--section-padding)] sm:px-6 lg:px-8" id="projects">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
            <div>
              <span className="section-kicker">Selected project</span>
              <h2 className="display-type mt-5 text-[var(--fs-h2)] leading-[var(--lh-heading)] text-text">
                Systems thinking,
                <em className="block text-accent3">made inspectable.</em>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-text-dim sm:text-[15px] lg:justify-self-end">
              A focused personal project is more useful here than a crowded gallery. This one makes
              concurrency, atomicity, idempotency, and failure handling visible in code.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.38fr_0.62fr] lg:gap-8">
            <motion.article className="project-feature" {...reveal(0, shouldReduceMotion)}>
              <div>
                <p className="font-mono text-[10px] text-accent">{flagship.kind}</p>
                <a
                  href={flagship.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex items-start gap-3 text-2xl font-semibold leading-tight text-text transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-3xl"
                >
                  {flagship.name}
                  <FiArrowUpRight className="mt-1 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <p className="mt-6 max-w-3xl text-[13px] leading-7 text-text-dim sm:text-[15px]">
                  {flagship.description}
                </p>
              </div>

              <div>
                <p className="project-proof">{flagship.outcome}</p>
                <div className="mt-6">
                  <ChipList chips={flagship.chips} />
                </div>
              </div>
            </motion.article>

            <aside className="earlier-projects" aria-label="Earlier product builds">
              <div className="border-b border-border pb-4">
                <p className="font-mono text-[10px] text-muted">Earlier product builds</p>
              </div>
              {earlierProjects.map((project, index) => (
                <motion.article
                  key={project.name}
                  className="border-b border-border py-6 last:border-b-0"
                  {...reveal(index + 1, shouldReduceMotion)}
                >
                  <p className="font-mono text-[9px] text-muted">{project.kind}</p>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 font-semibold text-text transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {project.name}
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  ) : (
                    <h3 className="mt-2 font-semibold text-text">{project.name}</h3>
                  )}
                  <p className="mt-3 text-xs leading-6 text-muted">{project.description}</p>
                </motion.article>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
