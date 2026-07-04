import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from 'framer-motion';
import { workExperience, projects } from '../data/experience';

export default function Experience() {
  const scrollContainerRef = useRef(null);
  const [expandedMobileJobs, setExpandedMobileJobs] = useState({});
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // 1. FIX: Added explicit "start start" to "end end" offsets 
  // Tracks progress strictly while the container is actively pinning/docked
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  // 2. Safe step-scroll conversion matrix
  const totalJobs = workExperience.length;
  const activeIndexTransform = useTransform(scrollYProgress, [0, 1], [0, totalJobs - 0.01]);

  useEffect(() => {
    const unsubscribe = activeIndexTransform.on('change', (latest) => {
      const calculatedIndex = Math.floor(latest);
      if (calculatedIndex !== activeIdx) {
        setActiveIdx(calculatedIndex);
      }
    });
    return () => unsubscribe();
  }, [activeIdx, activeIndexTransform]);

  // Toggle utility for mobile viewports
  const toggleMobileJob = (index) => {
    setExpandedMobileJobs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full relative">

      {/* 🖥️ DESKTOP VIEW: APPLE-STYLE FIXED TRACK WITH MODERNIZED TOKENS */ }
      <div ref={ scrollContainerRef } className="hidden lg:block relative h-[285vh] w-full bg-bg">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

          <div className="max-w-[1200px] mx-auto w-full px-12 xl:px-24 grid grid-cols-3 gap-16 items-center">

            {/* Left Column Layout: Pinned Typography Navigation */ }
            <div className="col-span-1 flex flex-col h-[380px] justify-between border-r border-border pr-10">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent font-medium">
                  01 // Systems Architecture
                </span>
                <h2 className="text-4xl font-serif italic font-normal tracking-tight text-text mt-2">
                  Engineering <span className="font-sans not-italic font-light text-text-dim">History</span>
                </h2>
              </div>

              {/* Monospace Interactive Indicator Steps */ }
              <div className="flex flex-col gap-4 my-8">
                { workExperience.map((job, idx) => (
                  <div key={ job.company } className="flex items-center gap-4 group">
                    <div className={ `h-[1px] transition-all duration-500 ${idx === activeIdx ? 'w-10 bg-accent' : 'w-3 bg-border'}` } />
                    <span className={ `font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${idx === activeIdx ? 'text-text font-semibold' : 'text-muted group-hover:text-text-dim'}` }>
                      { job.company.split(' ')[0] }
                    </span>
                  </div>
                )) }
              </div>

              <div className="flex items-center gap-2.5 text-[9px] font-mono text-muted tracking-[0.15em] opacity-40">
                <span>SCROLL WORK HISTORY</span>
                <span className={ shouldReduceMotion ? '' : 'animate-bounce' }>↓</span>
              </div>
            </div>

            {/* Right Column Layout: Premium Metrics Crossfade Canvas */ }
            <div className="col-span-2 min-h-[480px] flex flex-col justify-center relative pl-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={ activeIdx }
                  initial={ shouldReduceMotion ? false : { opacity: 0, y: 10 } }
                  animate={ { opacity: 1, y: 0 } }
                  exit={ shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 } }
                  transition={ shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease: [0.25, 1, 0.5, 1] } }
                  className="w-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-col gap-1.5 mb-8">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-accent font-medium tracking-wide">
                          { workExperience[activeIdx].date }
                        </span>
                        { workExperience[activeIdx].date.includes('Present') && (
                          <span className={ `inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20 ${shouldReduceMotion ? '' : 'animate-pulse'}` }>
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            Active Runtime
                          </span>
                        ) }
                      </div>

                      <h3 className="text-2xl font-sans font-light tracking-tight text-text leading-none mt-1">
                        { workExperience[activeIdx].title }{ ' ' }
                        <span className="font-serif italic text-accent font-normal text-xl mx-1">at</span>{ ' ' }
                        <span className="font-medium">{ workExperience[activeIdx].company }</span>
                      </h3>

                      <p className="text-[11px] font-mono text-muted uppercase tracking-widest mt-0.5">
                        { workExperience[activeIdx].location }
                      </p>
                    </div>

                    {/* Structural Bullet Hierarchies */ }
                    <ul className="space-y-4 mb-10">
                      { workExperience[activeIdx].bullets.map((bullet, index) => (
                        <li key={ index } className="text-[14px] font-sans text-text-dim leading-relaxed flex items-start gap-3.5 text-justify">
                          <span className="text-accent text-xs mt-1.5 shrink-0 select-none opacity-70">▪</span>
                          <span className="font-light">{ bullet }</span>
                        </li>
                      )) }
                    </ul>
                  </div>

                  { workExperience[activeIdx].chips && (
                    <div className="flex flex-wrap gap-2 pt-5 border-t border-border/40 w-full">
                      { workExperience[activeIdx].chips.map((chip) => (
                        <span key={ chip } className="font-mono text-[9px] uppercase tracking-widest bg-bg-card text-muted px-2.5 py-0.5 rounded border border-border">
                          { chip }
                        </span>
                      )) }
                    </div>
                  ) }
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>


      {/* 📱 MOBILE & TABLET VIEW: ACCORDION ENGINE */ }
      <div className="block lg:hidden w-full px-6 py-16 bg-bg border-b border-border">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
          01 // Professional Journey
        </span>
        <h2 className="text-3xl font-serif italic text-text mt-1 mb-12">
          Engineering <span className="font-sans not-italic font-light text-text-dim">History</span>
        </h2>

        <div className="flex flex-col gap-12">
          { workExperience.map((job, idx) => {
            const isExpanded = expandedMobileJobs[idx];
            return (
              <div key={ `${job.company}-mobile` } className="border-l border-border pl-4 flex flex-col gap-4">

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] text-accent">
                      { job.date }
                    </span>
                    { job.date.includes('Present') && (
                      <span className="inline-flex items-center gap-1 font-mono text-[8px] uppercase tracking-wider bg-accent/10 text-accent px-1.5 py-0.5 rounded border border-accent/20">
                        Active
                      </span>
                    ) }
                  </div>

                  <h3 className="text-lg font-sans font-medium text-text tracking-tight leading-tight">
                    { job.title } <br />
                    <span className="text-sm font-serif italic text-muted font-normal">with { job.company }</span>
                  </h3>
                </div>

                <div className="min-h-[40px]">
                  <AnimatePresence mode="wait">
                    { !isExpanded ? (
                      <motion.p
                        key="short-desc"
                        initial={ shouldReduceMotion ? false : { opacity: 0, y: -4 } }
                        animate={ { opacity: 1, y: 0 } }
                        exit={ shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 } }
                        transition={ shouldReduceMotion ? { duration: 0 } : { duration: 0.15 } }
                        className="text-sm font-sans text-text-dim leading-relaxed font-light"
                      >
                        { job.shortDesc }
                      </motion.p>
                    ) : (
                      <motion.div
                        key="long-bullets"
                        initial={ shouldReduceMotion ? false : { opacity: 0, y: 4 } }
                        animate={ { opacity: 1, y: 0 } }
                        exit={ shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4 } }
                        transition={ shouldReduceMotion ? { duration: 0 } : { duration: 0.2 } }
                      >
                        <ul className="space-y-3.5 pl-0.5">
                          { job.bullets.map((bullet, bIdx) => (
                            <li key={ bIdx } className="text-xs font-sans text-muted leading-relaxed flex items-start gap-2.5">
                              <span className="text-accent mt-1 shrink-0">▪</span>
                              <span className="font-light text-left">{ bullet }</span>
                            </li>
                          )) }
                        </ul>
                      </motion.div>
                    ) }
                  </AnimatePresence>
                </div>

                <button
                  onClick={ () => toggleMobileJob(idx) }
                  className="text-left w-fit min-h-11 font-mono text-[10px] uppercase tracking-widest font-medium text-accent flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm pt-1"
                >
                  <span>{ isExpanded ? '// Collapse View ↑' : '// Read Metrics ↓' }</span>
                </button>

                { job.chips && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    { job.chips.map((chip) => (
                      <span key={ chip } className="font-mono text-[8px] uppercase tracking-wider bg-bg-card text-muted px-2 py-0.5 rounded border border-border">
                        { chip }
                      </span>
                    )) }
                  </div>
                ) }
              </div>
            );
          }) }
        </div>
      </div>


      {/* 🛠️ INDEPENDENT PROJECT MATRIX GRID SECTION */ }
      <div className="w-full bg-bg py-24 border-t border-border" id="projects">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block mb-2">
            02 // Production Artifacts
          </span>
          <h2 className="text-3xl font-serif italic text-text mb-12">
            Featured <span className="font-sans not-italic font-light text-text-dim">Systems</span>
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            { projects.map((proj, i) => (
              <motion.div
                key={ proj.name }
                className="bg-bg-card border border-border hover:border-accent p-6 lg:p-8 rounded-xl flex flex-col justify-between transition-all duration-300 group"
                initial={ shouldReduceMotion ? false : { opacity: 0, y: 16 } }
                whileInView={ { opacity: 1, y: 0 } }
                viewport={ { once: true, margin: '-40px' } }
                transition={ shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.05 } }
              >
                <div className="flex flex-col gap-3">
                  { proj.url ? (
                    <a
                      href={ proj.url }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-11 text-lg font-sans font-medium tracking-tight text-text hover:text-accent transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                    >
                      { proj.name }
                      <span className="transition-transform duration-300 inline-block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent text-sm">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <div className="min-h-11 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-sans font-medium tracking-tight text-text">
                        { proj.name }
                      </h3>
                      { proj.status && (
                        <span className="font-mono text-[9px] uppercase tracking-wider bg-bg/50 text-muted px-2 py-0.5 rounded border border-border">
                          { proj.status }
                        </span>
                      ) }
                    </div>
                  ) }
                  <p className="text-sm font-sans text-muted leading-relaxed font-light text-left">
                    { proj.description }
                  </p>
                </div>

                { proj.chips && (
                  <div className="mt-8 flex flex-wrap gap-1.5">
                    { proj.chips.map((chip) => (
                      <span key={ chip } className="font-mono text-[9px] uppercase tracking-wider bg-bg/50 text-muted px-2 py-0.5 rounded border border-border">
                        { chip }
                      </span>
                    )) }
                  </div>
                ) }
              </motion.div>
            )) }
          </div>

        </div>
      </div>

    </div>
  );
}
