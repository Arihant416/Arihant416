import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projects, workExperience } from '../data/experience';

const itemIn = (index = 0, shouldReduceMotion = false) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.42, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] },
});

function ChipList({ chips }) {
  if (!chips?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span key={chip} className="chip">
          {chip}
        </span>
      ))}
    </div>
  );
}

function ExperienceCard({ job, index, isExpanded, onToggle, shouldReduceMotion }) {
  const isCurrent = job.date.includes('Present');

  return (
    <motion.article
      className={`console-panel rounded-[1.2rem] p-4 sm:rounded-[1.45rem] sm:p-6 lg:p-7 ${
        isCurrent ? 'border-accent/60' : ''
      }`}
      {...itemIn(index, shouldReduceMotion)}
    >
      <div className="grid gap-5 min-[960px]:grid-cols-[170px_minmax(0,1fr)]">
        <div className="border-b border-border pb-5 min-[960px]:border-b-0 min-[960px]:border-r min-[960px]:pb-0 min-[960px]:pr-6">
          <div className="flex items-center gap-3 min-[960px]:block">
            <span className="mono-label text-accent">0{index + 1}</span>
            <div className="h-px flex-1 bg-border min-[960px]:my-5 min-[960px]:h-16 min-[960px]:w-px min-[960px]:flex-none" />
            <span className="mono-label text-muted">{job.date}</span>
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted min-[960px]:mt-6">
            {job.location}
          </p>
        </div>

        <div className="min-w-0">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-light leading-tight text-text sm:text-2xl">
                {job.title}
                <span className="mx-2 font-serif italic text-accent">at</span>
                <span className="font-semibold">{job.company}</span>
              </h3>
              <p className="mt-4 max-w-3xl text-[13px] leading-relaxed text-text-dim sm:text-sm">
                {job.shortDesc}
              </p>
            </div>

            {isCurrent && (
              <span className="console-tag w-fit shrink-0">
                <span className={`status-dot ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                Current role
              </span>
            )}
          </div>

          <ul className="mt-6 hidden columns-1 gap-x-8 space-y-3 min-[960px]:block xl:columns-2">
            {job.bullets.map((bullet) => (
              <li key={bullet} className="mb-3 grid break-inside-avoid grid-cols-[auto_1fr] gap-3 text-[13px] leading-relaxed text-text-dim">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--ring)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="min-[960px]:hidden">
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.ul
                  key="mobile-bullets"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.18 }}
                  className="mt-5 space-y-3"
                >
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="grid grid-cols-[auto_1fr] gap-3 text-[13px] leading-relaxed text-text-dim sm:text-sm">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            <button
              onClick={onToggle}
              className="mt-5 inline-flex min-h-11 items-center rounded-full border border-border px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              {isExpanded ? 'Collapse View' : 'Read Impact'}
            </button>
          </div>

          <div className="mt-6 border-t border-border pt-5">
            <ChipList chips={job.chips} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const [expandedMobileJobs, setExpandedMobileJobs] = useState({});
  const shouldReduceMotion = useReducedMotion();

  const toggleMobileJob = (index) => {
    setExpandedMobileJobs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="relative w-full">
      <div className="w-full border-b border-border bg-bg px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">01 Backend Experience</span>
              <h2 className="mt-4 text-2xl font-light leading-tight text-text sm:text-3xl md:text-4xl">
                Engineering <span className="font-serif italic text-accent">History</span>
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:mt-10">
            {workExperience.map((job, index) => (
              <ExperienceCard
                key={`${job.company}-${index}`}
                job={job}
                index={index}
                isExpanded={Boolean(expandedMobileJobs[index])}
                onToggle={() => toggleMobileJob(index)}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border-b border-border bg-bg px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20" id="projects">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-10">
            <div>
              <span className="section-kicker">02 Backend Project Work</span>
              <h2 className="mt-4 text-2xl font-light leading-tight text-text sm:text-3xl md:text-4xl">
                Featured <span className="font-serif italic text-accent">Projects</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[960px]:grid-cols-2">
            {projects.map((proj, index) => {
              const isFlagship = index === 0;

              return (
              <motion.article
                key={proj.name}
                className={`console-panel flex flex-col justify-between rounded-[1.2rem] p-5 sm:rounded-[1.45rem] sm:p-6 ${
                  isFlagship ? 'min-h-[260px] border-accent/55 min-[960px]:col-span-2 min-[960px]:min-h-[250px]' : 'min-h-[230px] sm:min-h-[260px]'
                }`}
                {...itemIn(index, shouldReduceMotion)}
              >
                <div>
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                    {proj.url ? (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 rounded-sm text-lg font-semibold leading-tight text-text transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent sm:min-h-11 sm:text-xl"
                      >
                        {proj.name}
                        <span className="shrink-0 whitespace-nowrap font-mono text-xs text-accent" aria-hidden="true">
                          -&gt;
                        </span>
                      </a>
                    ) : (
                      <div>
                        <h3 className="text-lg font-semibold leading-tight text-text sm:text-xl">{proj.name}</h3>
                        {proj.status && <span className="console-tag mt-3">{proj.status}</span>}
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      {isFlagship && <span className="console-tag">Flagship</span>}
                      <span className="mono-label text-muted">0{index + 1}</span>
                    </div>
                  </div>
                  <p className={`text-[13px] leading-relaxed text-text-dim sm:text-sm ${isFlagship ? 'max-w-4xl' : ''}`}>
                    {proj.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-border pt-5">
                  <ChipList chips={proj.chips} />
                </div>
              </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
