import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/experience';
import { itemIn } from './motionPresets';

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const flagship = projects.find((project) => project.flagship);
  const others = projects.filter((project) => !project.flagship);

  return (
    <div className="room room--coral">
      <div className="page-shell">
        <header className="section-head">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Side projects, built in the open.</h2>
        </header>

        {flagship && (
          <motion.article className="project-feature" {...itemIn(0, shouldReduceMotion)}>
            <header className="project-feature-head">
              <div>
                <p className="project-flag">Flagship project</p>
                <h3 className="project-title">{flagship.name}</h3>
              </div>
              {flagship.url && (
                <a href={flagship.url} target="_blank" rel="noopener noreferrer" className="button">
                  View on GitHub
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </header>

            <div className="project-feature-body">
              <dl className="project-story">
                <div>
                  <dt>Problem</dt>
                  <dd>{flagship.problem}</dd>
                </div>
                <div>
                  <dt>Built</dt>
                  <dd>{flagship.solution}</dd>
                </div>
                {flagship.tested && (
                  <div>
                    <dt>Tested</dt>
                    <dd>{flagship.tested}</dd>
                  </div>
                )}
              </dl>

              <div className="project-feature-side">
                {flagship.flow && (
                  <figure className="lua-flow" aria-labelledby="lua-flow-title">
                    <figcaption id="lua-flow-title" className="role-label">{flagship.flow.title}</figcaption>
                    <ol className="lua-flow-steps">
                      {/* Start dot, then a side exit for replays: it ends there and never
                          joins the main path, which starts at "New request". */}
                      <li className="lua-start" aria-hidden="true" />
                      <li className="lua-exit-row">
                        <span className="lua-node lua-node--exit">{flagship.flow.replay}</span>
                      </li>
                      <li className="lua-node">{flagship.flow.load}</li>
                      <li className="lua-branches">
                        <ul>
                          {flagship.flow.branches.map((branch) => (
                            <li key={branch} className="lua-node">{branch}</li>
                          ))}
                        </ul>
                      </li>
                      <li className="lua-node lua-node--save">{flagship.flow.save}</li>
                    </ol>
                  </figure>
                )}
              </div>
            </div>

            {flagship.metrics?.length > 0 && (
              <dl className="project-metrics">
                {flagship.metrics.map(({ value, label }) => (
                  <div key={label}>
                    <dt>{value}</dt>
                    <dd>{label}</dd>
                  </div>
                ))}
              </dl>
            )}
          </motion.article>
        )}

        {others.length > 0 && (
          <ul className="project-list">
            {others.map((project, index) => (
              <motion.li key={project.name} className="project-row" {...itemIn(index + 1, shouldReduceMotion)}>
                <h3 className="project-row-title">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.name}
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  ) : project.name}
                </h3>
                <p>{project.problem} {project.solution}</p>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
