import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/experience';

const EASE = [0.22, 1, 0.36, 1];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="projects" className="site-section projects-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Projects</p>
          <h2>Selected backend projects.</h2>
        </div>
        <p>Two projects that show how I approach backend problems.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className={`project-card ${index === 0 ? 'project-card-featured' : ''}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.5, delay: index * 0.05, ease: EASE }}
          >
            <div>
              <p className="project-type">{project.type}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-title">
                {project.name}
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <p className="project-description">{project.description}</p>
              {project.evidence && <p className="project-evidence">{project.evidence}</p>}
            </div>
            <div className="tag-list" aria-label={`${project.name} technologies`}>
              {project.chips.map((chip) => <span key={chip}>{chip}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
