import { motion, useReducedMotion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const EASE = [0.22, 1, 0.36, 1];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="site-section skills-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">04 · Technical stack</p>
          <h2>Organized by <em>responsibility.</em></h2>
        </div>
        <p>
          Tools are grouped by the engineering problem they solve, not by logo recognition.
          Languages and frameworks remain adaptable to the team and system.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <motion.article
            key={category.title}
            className="skill-group"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.48, delay: categoryIndex * 0.05, ease: EASE }}
          >
            <header>
              <span>{String(categoryIndex + 1).padStart(2, '0')}</span>
              <h3>{category.title}</h3>
            </header>
            <p>{category.description}</p>
            <div className="skill-list">
              {category.skills.map(({ name, Icon }) => (
                <div key={name}>
                  <span className="skill-icon" aria-hidden="true">
                    {Icon ? <Icon /> : <span>·</span>}
                  </span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
