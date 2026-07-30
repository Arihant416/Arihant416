import { motion, useReducedMotion } from 'framer-motion';
import { capabilityGroups, engineeringPrinciples } from '../data/skills';

const EASE = [0.22, 1, 0.36, 1];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="capabilities-band border-b border-border" id="skills-content">
      <div className="mx-auto max-w-[1320px] px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          <motion.div
            className="lg:sticky lg:top-28 lg:h-max"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: EASE }}
          >
            <span className="section-kicker">Capabilities, not a checklist</span>
            <h2 className="display-type mt-5 text-[var(--fs-h2)] leading-[var(--lh-heading)] text-text">
              The tools change.
              <em className="block text-accent">The engineering judgment compounds.</em>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-text-dim sm:text-[15px]">
              My strongest work sits where backend design, production reliability, and business
              constraints meet. I choose languages and infrastructure around the problem rather
              than treating a framework as the identity.
            </p>

            <div className="mt-8 border-l border-border pl-5">
              <p className="font-mono text-[10px] text-muted">Working principles</p>
              <ul className="mt-4 space-y-3">
                {engineeringPrinciples.map((principle) => (
                  <li key={principle} className="flex items-center gap-3 text-xs font-semibold text-text-dim sm:text-sm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="capability-deck">
            {capabilityGroups.map((group, groupIndex) => (
              <motion.article
                key={group.title}
                className="capability-layer"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.56, delay: groupIndex * 0.07, ease: EASE }
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] text-accent">{group.number}</p>
                    <h3 className="mt-3 text-xl font-semibold text-text sm:text-2xl">{group.title}</h3>
                  </div>
                  <span className="capability-proof">{group.proof}</span>
                </div>

                <p className="mt-5 max-w-2xl text-[13px] leading-6 text-text-dim sm:text-sm sm:leading-7">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map(({ name, Icon }) => (
                    <span key={name} className="skill-token">
                      <span className="skill-token-icon">
                        {Icon ? <Icon aria-hidden="true" /> : <span className="h-1.5 w-1.5 rounded-full bg-accent3" />}
                      </span>
                      {name}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
