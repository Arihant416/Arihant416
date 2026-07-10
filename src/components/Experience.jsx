import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
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

function ExperienceCard({ job, shouldReduceMotion }) {
  return (
    <motion.article
      key={job.company}
      className="console-panel rounded-[1.45rem] p-5 sm:rounded-[1.7rem] sm:p-8 lg:p-10"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mono-label text-accent">{job.date}</p>
          <h3 className="mt-3 text-xl font-light leading-tight text-text sm:text-2xl md:text-3xl">
            {job.title}
            <span className="mx-2 font-serif italic text-accent">at</span>
            <span className="font-semibold">{job.company}</span>
          </h3>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            {job.location}
          </p>
        </div>

        {job.date.includes('Present') && (
          <span className="console-tag w-fit">
            <span className={`status-dot ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
            Current role
          </span>
        )}
      </div>

      <ul className="space-y-4">
        {job.bullets.map((bullet) => (
          <li key={bullet} className="grid grid-cols-[auto_1fr] gap-3 text-[13px] leading-relaxed text-text-dim sm:text-sm md:text-[15px]">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--ring)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-border pt-5">
        <ChipList chips={job.chips} />
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const scrollContainerRef = useRef(null);
  const [expandedMobileJobs, setExpandedMobileJobs] = useState({});
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  const totalJobs = workExperience.length;
  const activeIndexTransform = useTransform(scrollYProgress, [0, 1], [0, totalJobs - 0.01]);

  useEffect(() => {
    const unsubscribe = activeIndexTransform.on('change', (latest) => {
      const calculatedIndex = Math.min(totalJobs - 1, Math.max(0, Math.floor(latest)));
      setActiveIdx((current) => (current === calculatedIndex ? current : calculatedIndex));
    });
    return () => unsubscribe();
  }, [activeIndexTransform, totalJobs]);

  const toggleMobileJob = (index) => {
    setExpandedMobileJobs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="relative w-full">
      <div ref={scrollContainerRef} className="hidden h-[255vh] w-full border-b border-border bg-bg lg:block">
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-[1320px] grid-cols-[320px_minmax(0,1fr)] items-center gap-10 px-8 xl:px-12">
            <aside className="console-panel rounded-[1.7rem] p-6">
              <span className="section-kicker">01 Backend Experience</span>
              <h2 className="mt-5 text-4xl font-light leading-tight text-text">
                Engineering <span className="font-serif italic text-accent">History</span>
              </h2>

              <div className="mt-10 space-y-4">
                {workExperience.map((job, idx) => (
                  <div key={job.company} className="grid grid-cols-[auto_1fr] items-center gap-4">
                    <span
                      className={`h-10 w-[3px] rounded-full transition-colors duration-300 ${
                        idx === activeIdx ? 'bg-accent shadow-[0_0_18px_var(--ring)]' : 'bg-border'
                      }`}
                    />
                    <div>
                      <p
                        className={`font-mono text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                          idx === activeIdx ? 'text-text' : 'text-muted'
                        }`}
                      >
                        {job.company}
                      </p>
                      <p className="mt-1 text-xs text-muted">{job.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-border pt-5 text-muted">
                <span className="mono-label">Scroll work history</span>
                <span className={shouldReduceMotion ? '' : 'animate-bounce'} aria-hidden="true">
                  v
                </span>
              </div>
            </aside>

            <div className="min-w-0">
              <AnimatePresence mode="wait">
                <ExperienceCard
                  key={workExperience[activeIdx].company}
                  job={workExperience[activeIdx]}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="block border-b border-border bg-bg px-3 py-14 sm:px-6 sm:py-16 lg:hidden">
        <div className="mx-auto max-w-3xl">
          <span className="section-kicker">01 Professional Journey</span>
          <h2 className="mt-4 text-2xl font-light leading-tight text-text sm:text-3xl">
            Engineering <span className="font-serif italic text-accent">History</span>
          </h2>

          <div className="mt-10 flex flex-col gap-5">
            {workExperience.map((job, idx) => {
              const isExpanded = expandedMobileJobs[idx];
              return (
                <motion.article
                  key={`${job.company}-mobile`}
                  className="console-panel rounded-[1.25rem] p-4 sm:rounded-[1.35rem] sm:p-5"
                  {...itemIn(idx, shouldReduceMotion)}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="mono-label text-accent">{job.date}</span>
                      {job.date.includes('Present') && (
                        <span className="console-tag">
                          <span className="status-dot" />
                          Active
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-semibold leading-snug text-text sm:text-lg">
                      {job.title}
                      <span className="block font-serif font-normal italic text-muted">with {job.company}</span>
                    </h3>
                  </div>

                  <div className="mt-5">
                    <AnimatePresence mode="wait">
                      {!isExpanded ? (
                        <motion.p
                          key="short-desc"
                          initial={shouldReduceMotion ? false : { opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
                          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.15 }}
                          className="text-[13px] leading-relaxed text-text-dim sm:text-sm"
                        >
                          {job.shortDesc}
                        </motion.p>
                      ) : (
                        <motion.ul
                          key="long-bullets"
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4 }}
                          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
                          className="space-y-3"
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
                  </div>

                  <button
                    onClick={() => toggleMobileJob(idx)}
                    className="mt-5 inline-flex min-h-11 items-center rounded-full border border-border px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  >
                    {isExpanded ? 'Collapse View' : 'Read Impact'}
                  </button>

                  <div className="mt-5">
                    <ChipList chips={job.chips} />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full border-b border-border bg-bg px-3 py-16 sm:px-6 sm:py-20 lg:px-8" id="projects">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">02 Backend Project Work</span>
              <h2 className="mt-4 text-2xl font-light leading-tight text-text sm:text-3xl md:text-4xl">
                Featured <span className="font-serif italic text-accent">Projects</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {projects.map((proj, index) => (
              <motion.article
                key={proj.name}
                className="console-panel flex min-h-[260px] flex-col justify-between rounded-[1.25rem] p-5 sm:min-h-[320px] sm:rounded-[1.5rem] sm:p-6"
                {...itemIn(index, shouldReduceMotion)}
              >
                <div>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    {proj.url ? (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 rounded-sm text-lg font-semibold leading-tight text-text transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent sm:min-h-11 sm:text-xl"
                      >
                        {proj.name}
                        <span className="font-mono text-xs text-accent" aria-hidden="true">
                          -&gt;
                        </span>
                      </a>
                    ) : (
                      <div>
                        <h3 className="text-lg font-semibold leading-tight text-text sm:text-xl">{proj.name}</h3>
                        {proj.status && <span className="console-tag mt-3">{proj.status}</span>}
                      </div>
                    )}
                    <span className="mono-label text-muted">0{index + 1}</span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-text-dim sm:text-sm">{proj.description}</p>
                </div>

                <div className="mt-8 border-t border-border pt-5">
                  <ChipList chips={proj.chips} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
