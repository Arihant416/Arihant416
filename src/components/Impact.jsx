import { motion, useReducedMotion } from 'framer-motion';
import {
  latencyChartData,
  metrics,
  savingsChartData,
  sourceServingChartData,
} from '../data/metrics';

const EASE = [0.22, 1, 0.36, 1];

function MetricBars({
  ariaLabel,
  data,
  valueKey,
  max,
  formatValue,
  shouldReduceMotion,
}) {
  return (
    <ul className="metric-bars" aria-label={ariaLabel}>
      {data.map((item, index) => {
        const value = item[valueKey];
        const width = `${Math.min((value / max) * 100, 100)}%`;

        return (
          <li className="metric-bar-row" key={item.name}>
            <div className="metric-bar-copy">
              <span>{item.name}</span>
              <strong>{formatValue(value)}</strong>
            </div>
            <div className="metric-bar-track" aria-hidden="true">
              <motion.span
                className={index === 0 ? 'metric-bar metric-bar-muted' : 'metric-bar'}
                style={{ width }}
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.7, delay: index * 0.08, ease: EASE }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function Impact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="impact" className="impact-section">
      <div className="impact-inner">
        <motion.div
          className="impact-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.52, ease: EASE }}
        >
          <p className="section-kicker">02 / Impact, in numbers</p>
          <h2>Proof that is easier to <em>inspect.</em></h2>
          <p>Three measured changes, shown without combining unlike units or implying additive savings.</p>
        </motion.div>

        <div className="impact-grid">
          <article className="chart-panel">
            <header>
              <div>
                <span className="chart-label">P99 latency</span>
                <h3>{metrics.p99Latency.display}</h3>
              </div>
              <p>{metrics.p99Latency.context}</p>
            </header>
            <MetricBars
              ariaLabel="P99 latency before and after re-engineering"
              data={latencyChartData}
              valueKey="seconds"
              max={10}
              formatValue={(value) => `${value}s`}
              shouldReduceMotion={shouldReduceMotion}
            />
          </article>

          <article className="chart-panel chart-panel-wide">
            <header>
              <div>
                <span className="chart-label">Cost impact / USD thousands</span>
                <h3>{metrics.cumulativeSavings.display}</h3>
              </div>
              <p>Cumulative senior-role initiatives and a separately identified earlier program.</p>
            </header>
            <MetricBars
              ariaLabel="Cost savings in thousands of US dollars"
              data={savingsChartData}
              valueKey="thousands"
              max={800}
              formatValue={(value) => `$${value}K+`}
              shouldReduceMotion={shouldReduceMotion}
            />
          </article>

          <article className="chart-panel">
            <header>
              <div>
                <span className="chart-label">In-house serving</span>
                <h3>{metrics.sourceServing.display}</h3>
              </div>
              <p>{metrics.sourceServing.context}; throughput increased {metrics.sourceServing.multiplier}x.</p>
            </header>
            <MetricBars
              ariaLabel="In-house request serving ratio before and after source orchestration"
              data={sourceServingChartData}
              valueKey="percentage"
              max={100}
              formatValue={(value) => `${value}%`}
              shouldReduceMotion={shouldReduceMotion}
            />
          </article>
        </div>
      </div>
    </section>
  );
}
