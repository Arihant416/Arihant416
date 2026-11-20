import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { workExperience } from '../data/experience';
import { itemIn } from './motionPresets';

// Keep number ranges like "2–3" or "60–70%" on one line (invisible word joiner after the dash).
const keepRanges = (text) => text.replace(/(\d)–(\d)/g, '$1–⁠$2');

// Renders **key figures** in bold. The data uses ** as the only markup.
const rich = (text) => keepRanges(text).split('**').map((part, index) => (
  index % 2 === 1 ? <strong key={index}>{part}</strong> : <Fragment key={index}>{part}</Fragment>
));

const roleId = (company, title) => `role-${`${company}-${title}`.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

function RoleBlock({ role, company }) {
  const headingId = roleId(company, role.title);

  return (
    <div className="role" role="group" aria-labelledby={headingId}>
      <header className="role-aside">
        <h4 id={headingId} className="role-title">{role.title}</h4>
        <p className="role-meta">
          <span>{role.date}</span>
          <span>{role.location}</span>
        </p>
        {role.promotedFrom && (
          <p className="role-badge">
            <span aria-hidden="true">↑</span> Promoted from {role.promotedFrom}
          </p>
        )}
      </header>

      <div className="role-body">
        <p className="role-summary">{rich(role.summary)}</p>

        {role.outcomes?.length > 0 && (
          <>
            <p className="role-label">Outcomes</p>
            <ul className="role-outcomes" aria-label={`Outcomes as ${role.title}`}>
              {role.outcomes.map((outcome) => (
                <li key={outcome}>{rich(outcome)}</li>
              ))}
            </ul>
          </>
        )}

        {role.built?.length > 0 && (
          <>
            <p className="role-label">What I built</p>
            <ul className="built-list" aria-label={`What I built as ${role.title}`}>
              {role.built.map((item) => (
                <li key={item.name} className={`built-row tone-${item.tone}`}>
                  <p className="built-name">{item.name}</p>
                  <p className="built-text">{rich(item.text)}</p>
                  {item.stat && (
                    <p className="built-stat">
                      <strong>{keepRanges(item.stat.value)}</strong>
                      <span>{keepRanges(item.stat.label)}</span>
                      {item.stat.sub && <span>{keepRanges(item.stat.sub)}</span>}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        {role.metrics?.length > 0 && (
          <dl className="role-metrics">
            {role.metrics.map(({ value, label }) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}

function EmployerBlock({ employer, index, shouldReduceMotion }) {
  return (
    <motion.article className="employer" {...itemIn(index, shouldReduceMotion)}>
      <header className="employer-head">
        <h3 className="employer-name">{employer.company}</h3>
        <p className="employer-dates">{employer.date}</p>
      </header>

      {employer.roles.map((role) => (
        <RoleBlock key={role.title} role={role} company={employer.company} />
      ))}
    </motion.article>
  );
}

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="home-section">
      <div className="page-shell">
        <header className="section-head">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Product delivery → backend → platform.</h2>
        </header>

        <div className="employers">
          {workExperience.map((employer, index) => (
            <EmployerBlock
              key={employer.company}
              employer={employer}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
