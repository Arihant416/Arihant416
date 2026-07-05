import { motion, useReducedMotion } from 'framer-motion';

const rise = (delay = 0, shouldReduceMotion = false) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const STATS = [
  { num: '5M+', label: 'Daily API Requests', sub: 'across critical API suites' },
  { num: '~70%', label: 'P99 Latency Reduction', sub: 'across multiple APIs' },
  { num: '$700K+', label: 'Annualized Savings', sub: 'through cost-aware architecture' },
  { num: '30', label: 'APIs Designed', sub: 'from scratch for production' },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="w-full border-b border-border bg-bg pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-between min-h-[60vh]">

        {/* Core Spread Content Container */ }
        <div className="flex flex-col w-full">

          {/* Eyebrow Frame */ }
          <motion.p
            className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-6 block"
            { ...rise(0.05, shouldReduceMotion) }
          >
            Arihant Jain <span className="text-muted2 mx-2">{ '//' }</span> Senior Backend Engineer
          </motion.p>

          {/* Premium Editorial Display Title */ }
          <motion.h1
            className="font-serif text-[4.5rem] md:text-[6rem] leading-[0.95] tracking-tight font-normal text-text mb-16 md:mb-20 max-w-[15ch]"
            { ...rise(0.2, shouldReduceMotion) }
          >
            Crafting Backend <em className="italic font-normal text-accent">systems.</em>
          </motion.h1>

          {/* Asymmetric Core Bio & Metrics Grid Split */ }
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start"
            { ...rise(0.35, shouldReduceMotion) }
          >
            {/* Left Column: Summary and Engagement Framework */ }
            <div className="flex flex-col items-start">
              <p className="font-sans font-light text-lg md:text-xl leading-relaxed text-text-dim max-w-[48ch] mb-8 text-left">
                I build production backend systems where architecture decisions show up in latency,
                reliability, and cost. At Perfios, I work across high-throughput API suites, source
                orchestration, Redis/Celery/Fargate pipelines, and disaster-recovery paths serving
                5M+ daily requests.
              </p>

              <p className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted mb-10 select-none">
                <span className={ `w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] ${shouldReduceMotion ? '' : 'animate-pulse'}` } />
                Focused on production backend systems and cost-aware reliability work.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a href="#experience" className="btn btn-primary px-8 py-3.5 text-center">
                  Explore Systems Work
                </a>
                <a href="#contact" className="btn btn-ghost px-8 py-3.5 text-center">
                  Discuss Backend Work ↗
                </a>
              </div>
            </div>

            {/* Right Column: Quantitative Impact Metrics Matrix */ }
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t lg:border-t-0 lg:border-l border-border pt-10 lg:pt-0 lg:pl-12">
              { STATS.map(({ num, label, sub }) => (
                <div key={ label } className="flex flex-col items-start text-left group">
                  <span className="font-serif text-4xl md:text-5xl font-normal text-text tracking-tight group-hover:text-accent transition-colors duration-300">
                    { num }
                  </span>
                  <div className="mt-2">
                    <span className="block font-sans font-medium text-xs text-text-dim tracking-wide">
                      { label }
                    </span>
                    <span className="block font-mono text-[10px] text-muted tracking-wide mt-0.5 leading-normal">
                      { sub }
                    </span>
                  </div>
                </div>
              )) }
            </div>

          </motion.div>
        </div>

        {/* Scroll Indicator Rails Anchor */ }
        <div className="flex items-center gap-4 mt-16 md:mt-24 text-muted select-none">
          <div className="w-10 h-[1px] bg-border" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Work History</span>
        </div>

      </div>
    </section>
  );
}
