import { motion, useReducedMotion } from 'framer-motion';

const rise = (delay = 0, shouldReduceMotion = false) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.64, delay, ease: [0.22, 1, 0.36, 1] },
});

const STATS = [
  { num: '5M+', label: 'Daily API Requests', sub: 'across critical API suites' },
  { num: '~70%', label: 'P99 Latency Reduction', sub: 'across multiple APIs' },
  { num: '$700K+', label: 'Annualized Savings', sub: 'through cost-aware architecture' },
  { num: '30', label: 'APIs Designed', sub: 'from scratch for production' },
];

const SIGNALS = ['API scale', 'Reliability', 'Source orchestration', 'DR paths'];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative w-full overflow-hidden border-b border-border px-4 pb-16 pt-28 sm:px-6 md:pt-32 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-[1320px] items-center">
        <motion.div
          className="console-panel w-full rounded-[2rem] p-4 sm:p-6 lg:p-8 xl:p-10"
          {...rise(0.04, shouldReduceMotion)}
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <p className="section-kicker">
              Arihant Jain <span className="text-muted">Senior Backend Engineer</span>
            </p>
            <div className="console-tag">
              <span className={`status-dot ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
              Production systems
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-between">
              <div>
                <motion.h1
                  className="max-w-[12ch] font-sans text-[3.55rem] font-light leading-[0.94] text-text sm:text-[4.8rem] md:text-[5.6rem] lg:text-[6.4rem]"
                  {...rise(0.12, shouldReduceMotion)}
                >
                  Crafting Backend{' '}
                  <em className="font-serif font-normal italic text-accent">systems.</em>
                </motion.h1>

                <motion.p
                  className="mt-8 max-w-[58ch] text-base leading-relaxed text-text-dim md:text-lg"
                  {...rise(0.22, shouldReduceMotion)}
                >
                  I build production backend systems where architecture decisions show up in latency,
                  reliability, and cost. At Perfios, I work across high-throughput API suites, source
                  orchestration, Redis/Celery/Fargate pipelines, and disaster-recovery paths serving
                  5M+ daily requests.
                </motion.p>
              </div>

              <motion.div className="mt-8 flex flex-col gap-7" {...rise(0.32, shouldReduceMotion)}>
                <p className="flex items-start gap-3 text-xs leading-relaxed text-muted sm:items-center">
                  <span className={`status-dot mt-1 sm:mt-0 ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                  <span className="font-mono uppercase tracking-[0.12em]">
                    Focused on production backend systems and cost-aware reliability work.
                  </span>
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="#experience" className="btn btn-primary">
                    Explore Systems Work
                  </a>
                  <a href="#contact" className="btn btn-ghost">
                    Discuss Backend Work
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="grid gap-4 lg:grid-rows-[auto_1fr]"
              {...rise(0.28, shouldReduceMotion)}
            >
              <div className="rounded-[1.4rem] border border-border bg-bg/70 p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="mono-label text-muted">System Signals</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {SIGNALS.map((signal) => (
                    <div key={signal} className="flex min-h-11 items-center gap-3 rounded-xl border border-border bg-card px-3">
                      <span className="status-dot" />
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-text-dim">
                        {signal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {STATS.map(({ num, label, sub }, index) => (
                  <motion.div
                    key={label}
                    className="group rounded-[1.35rem] border border-border bg-bg/80 p-5 transition-colors duration-200 hover:border-accent"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.36 + index * 0.05 }}
                  >
                    <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      0{index + 1}
                    </span>
                    <span className="mt-4 block font-sans text-4xl font-light leading-none text-text transition-colors duration-200 group-hover:text-accent md:text-5xl">
                      {num}
                    </span>
                    <span className="mt-3 block text-sm font-semibold text-text-dim">
                      {label}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                      {sub}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-border pt-5 text-muted">
            <div className="h-px w-10 bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Work History</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
