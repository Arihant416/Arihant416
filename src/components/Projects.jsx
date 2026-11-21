import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/experience';
import { itemIn } from './motionPresets';
import QuotaDemo from './QuotaDemo';

// The quota-meter as a "lab": the story and its proof on the left, the live demo as the
// one elevated console on the right. No outer card, so nothing is a box inside a box.
export default function Projects() {
  const reduceMotion = useReducedMotion();
  const flagship = projects.find((project) => project.flagship);
  const others = projects.filter((project) => !project.flagship);
  if (!flagship) return null;

  return (
    <div className="section section--lab">
      <div className="page-shell">
        <header className="section-head">
          <p className="kicker">Projects</p>
          <h2 className="section-title">Side projects, built in the open.</h2>
        </header>

        <article className="lab">
          <motion.div className="lab-story" {...itemIn(0, reduceMotion)}>
            <p className="card-name">quota-meter · open source</p>
            <h3 className="project-title">{flagship.name}</h3>
            <p className="lab-text">{flagship.problem} {flagship.solution}</p>

            <dl className="stat-bar">
              {flagship.metrics.map(({ value, label }) => (
                <div key={label}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
            <p className="lab-text">{flagship.tested}</p>

            <div className="lab-actions">
              <a href={flagship.url} target="_blank" rel="noopener noreferrer" className="btn">
                View on GitHub
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div className="lab-console" {...itemIn(1, reduceMotion)}>
            {flagship.flow && <QuotaDemo flow={flagship.flow} />}
          </motion.div>
        </article>

        {others.map((project) => (
          <a key={project.name} className="project-also" href={project.url} target="_blank" rel="noopener noreferrer">
            <span>Also: <span className="project-also-name">{project.name}</span>. {project.solution}</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
