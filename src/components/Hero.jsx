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
    <section id="top" className="relative w-full overflow-hidden border-b border-border px-3 pb-12 pt-24 sm:px-6 sm:pb-16 md:pt-32 lg:px-8">
      <div className="mx-auto flex min-h-0 w-full max-w-[1320px] items-center md:min-h-[calc(100vh-7rem)]">
        <motion.div
          className="console-panel w-full rounded-[1.45rem] p-4 sm:rounded-[2rem] sm:p-6 lg:p-8 xl:p-10"
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
                  className="max-w-[12ch] font-sans text-[2.9rem] font-light leading-[0.96] text-text sm:text-[4.25rem] md:text-[5.6rem] lg:text-[6.4rem]"
                  {...rise(0.12, shouldReduceMotion)}
                >
                  Crafting Backend{' '}
                  <em className="font-serif font-normal italic text-accent">systems.</em>
                </motion.h1>

                <motion.p
                  className="mt-6 max-w-[58ch] text-sm leading-relaxed text-text-dim sm:text-base md:mt-8 md:text-lg"
                  {...rise(0.22, shouldReduceMotion)}
                >
                  I build production backend systems where architecture decisions show up in latency,
                  reliability, and cost. At Perfios, I work across high-throughput API suites, source
                  orchestration, Redis/Celery/Fargate pipelines, and disaster-recovery paths serving
                  5M+ daily requests.
                </motion.p>
              </div>

              <motion.div className="mt-8 flex flex-col gap-7" {...rise(0.32, shouldReduceMotion)}>
                <p className="flex items-start gap-3 text-[10px] leading-relaxed text-muted sm:items-center sm:text-xs">
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
                    <div key={signal} className="flex min-h-10 items-center gap-3 rounded-xl border border-border bg-card px-3 sm:min-h-11">
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
                    className="group rounded-[1.15rem] border border-border bg-bg/80 p-4 transition-colors duration-200 hover:border-accent sm:rounded-[1.35rem] sm:p-5"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.36 + index * 0.05 }}
                  >
                    <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      0{index + 1}
                    </span>
                    <span className="mt-3 block font-sans text-3xl font-light leading-none text-text transition-colors duration-200 group-hover:text-accent sm:text-4xl md:mt-4 md:text-5xl">
                      {num}
                    </span>
                    <span className="mt-2 block text-xs font-semibold text-text-dim sm:mt-3 sm:text-sm">
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
        </motion.div>
      </div>
    </section>
  );
}
