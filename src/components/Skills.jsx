import { motion, useReducedMotion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="section border-b border-border bg-bg">
      <div className="col-span-1">
        <span className="section-kicker">03 Competencies</span>
        <h2 className="mt-4 text-2xl font-light leading-tight text-text sm:text-3xl">
          Technical <span className="font-serif italic text-accent">Stack</span>
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <motion.article
            key={category.title}
            className="console-panel rounded-[1.25rem] p-4 sm:rounded-[1.5rem] sm:p-6"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.42, delay: categoryIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center justify-between gap-3 border-b border-border pb-4">
              <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-text sm:text-[11px]">
                {category.title}
              </h3>
              <span className="mono-label text-muted">{String(categoryIndex + 1).padStart(2, '0')}</span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {category.skills.map((skill, index) => {
                const Icon = skill.Icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="group flex min-h-[3.35rem] items-center gap-3 rounded-xl border border-border bg-bg/70 px-3 py-2.5 transition-colors duration-200 hover:border-accent sm:min-h-[4rem] sm:rounded-2xl sm:px-4 sm:py-3"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.34, delay: categoryIndex * 0.04 + index * 0.03 }}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card2">
                      {Icon ? (
                        <Icon className="h-5 w-5" style={{ color: skill.color }} aria-hidden="true" />
                      ) : (
                        <span className="status-dot" />
                      )}
                    </span>
                    <span className="text-[13px] font-semibold text-text-dim transition-colors duration-200 group-hover:text-text sm:text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
