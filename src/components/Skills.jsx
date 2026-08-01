import { motion, useReducedMotion } from 'framer-motion';
import { FiActivity, FiCode, FiGlobe, FiMonitor } from 'react-icons/fi';
import {
  SiAmazonecs,
  SiAwslambda,
  SiCelery,
  SiDocker,
  SiFastapi,
  SiGitlab,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPytest,
  SiPython,
  SiRedis,
} from 'react-icons/si';
import { skillCategories } from '../data/skills';

const EASE = [0.22, 1, 0.36, 1];
const skillIcons = {
  Python: SiPython,
  FastAPI: SiFastapi,
  'REST APIs': FiCode,
  'Node.js': SiNodedotjs,
  'AWS Lambda': SiAwslambda,
  'ECS / Fargate': SiAmazonecs,
  Docker: SiDocker,
  'Multi-region systems': FiGlobe,
  Redis: SiRedis,
  Celery: SiCelery,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  'GitLab CI/CD': SiGitlab,
  Pytest: SiPytest,
  Playwright: FiMonitor,
  Monitoring: FiActivity,
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="site-section skills-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Skills</p>
          <h2>Focused backend toolkit.</h2>
        </div>
        <p>Core technologies I use in production and personal work.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <motion.article
            key={category.title}
            className="skill-group"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.44, delay: categoryIndex * 0.04, ease: EASE }}
          >
            <header>
              <span>{String(categoryIndex + 1).padStart(2, '0')}</span>
              <h3>{category.title}</h3>
            </header>
            <ul>
              {category.skills.map((skill) => {
                const Icon = skillIcons[skill] || FiCode;
                return (
                  <li key={skill}>
                    <Icon aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                );
              })}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
