import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { heroMetrics, metrics } from '../data/metrics';

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            Arihant Jain · Senior Backend Engineer
          </p>

          <h1>
            Production backend systems, built for <em>reliability.</em>
          </h1>

          <p className="hero-thesis">
            At Perfios, I work across fintech and KYC platforms serving {metrics.dailyRequests.display} daily
            requests—owning architecture, distributed execution, modernization, recovery, and cost.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="button button-primary">
              View experience
              <FiArrowDownRight aria-hidden="true" />
            </a>
            <a
              href="https://arihant416.github.io/resume/index.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              Open resume
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <p className="hero-status">
            <span className="status-dot is-pulsing" />
            Open to senior backend and platform engineering opportunities
          </p>
        </div>

        <ul
          className="hero-metrics"
          aria-label="Selected engineering outcomes"
        >
          {heroMetrics.map((metric, index) => (
            <li key={metric.label}>
              <span className="metric-index">{String(index + 1).padStart(2, '0')}</span>
              <strong className="metric-value">{metric.display}</strong>
              <span className="metric-label">{metric.label}</span>
              <p>{metric.context}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
