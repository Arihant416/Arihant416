import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { metrics } from '../data/metrics';

const traceNodes = [
  {
    step: '01',
    label: 'Receive',
    value: metrics.dailyRequests.display,
    detail: 'daily API requests',
  },
  {
    step: '02',
    label: 'Protect',
    value: 'Redis',
    detail: 'caching and traffic limits',
  },
  {
    step: '03',
    label: 'Coordinate',
    value: 'Celery',
    detail: 'background request handling',
  },
  {
    step: '04',
    label: 'Recover',
    value: 'Multi-region',
    detail: 'regional disaster recovery',
  },
  {
    step: '05',
    label: 'Improve',
    value: metrics.cumulativeSavings.display,
    detail: 'cumulative savings',
  },
];

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-shell">
        <div className="hero-intro">
          <div className="hero-copy">
            <p className="eyebrow">
              Arihant Jain / Senior Backend Engineer
            </p>

            <h1>Crafting reliable backend systems.</h1>

            <p className="hero-thesis">
              I build and run fintech and KYC systems that handle high traffic, background
              work, regional recovery, and careful modernization.
            </p>
          </div>

          <div className="hero-side">
            <p>
              I focus on reliability, clear design, and practical operating cost.
            </p>

            <div className="hero-actions">
              <a href="#experience" className="button button-primary">
                Experience
                <FiArrowDownRight aria-hidden="true" />
              </a>
              <a
                href="https://arihant416.github.io/resume/index.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                Resume
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="production-trace">
          <div className="trace-heading">
            <span>Backend systems / selected responsibilities</span>
            <span>Request to outcome</span>
            <span className="trace-mobile-cue">Swipe for more</span>
          </div>

          <div className="trace-path" aria-hidden="true">
            <span className="trace-signal" />
          </div>

          <ol aria-label="A production request lifecycle mapped to selected engineering responsibilities">
            {traceNodes.map((node) => (
              <li key={node.step}>
                <span className="trace-node" aria-hidden="true" />
                <span className="trace-step">{node.step} / {node.label}</span>
                <strong>{node.value}</strong>
                <p>{node.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="hero-footer">
          <p className="hero-status">
            <span className="status-dot is-pulsing" />
            Open to senior backend and platform roles
          </p>
          <a href="#experience">
            View experience
            <FiArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
