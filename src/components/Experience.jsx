import { motion, useReducedMotion } from 'framer-motion';
import { workExperience } from '../data/experience';
import { itemIn } from './motionPresets';
import { keepRanges, outcomeText, rich } from './text';

// One timeline, newest role first. Each fact appears once on the page:
// - a role flagged `systemCards` shows its `built` items as the system cards instead;
// - outcomes with a `placement` (e.g. DR in the hero map) are shown there instead;
// - a metric whose figure already appears in the role's outcomes is not repeated.
const figureOf = (value) => value.replace(/^[−+-]/, '');

function RoleItem({ role, company, index, reduceMotion }) {
  const outcomes = (role.outcomes || []).filter((o) => typeof o === 'string' || !o.placement).map(outcomeText);
  const shown = outcomes.join(' ');
  const built = role.systemCards ? [] : (role.built || []);
  const metrics = (role.metrics || []).filter((m) => !shown.includes(figureOf(m.value)));
  const hasMore = built.length > 0 || metrics.length > 0;

  return (
    <motion.li className={`tl-item ${role.date.includes('Present') ? 'is-current' : ''}`} {...itemIn(index, reduceMotion)}>
      <p className="tl-when">{role.date}</p>
      <div className="tl-body">
        <h3 className="tl-role">{role.title}</h3>
        <p className="tl-org">{role.org || `${company} · ${role.location}`}</p>
        {role.promotedFrom && (
          <p className="chip tl-promo"><span aria-hidden="true">↑</span> Promoted from {role.promotedFrom}</p>
        )}
        <p className="tl-summary">{rich(role.summary)}</p>

        {outcomes.length > 0 && (
          <ul className="tl-points" aria-label={`Outcomes as ${role.title}`}>
            {outcomes.map((text) => <li key={text}>{rich(text)}</li>)}
          </ul>
        )}


        {hasMore && (
          <details className="tl-more">
            <summary>More from this role</summary>
            <ul className="tl-points">
              {built.map((item) => (
                <li key={item.name}>
                  <strong>{item.stat ? keepRanges(item.stat.value) : item.name}</strong>
                  {' '}{item.stat?.label} with {item.name}: {keepRanges(item.text.charAt(0).toLowerCase() + item.text.slice(1))}
                </li>
              ))}
              {metrics.map((m) => (
                <li key={m.label}><strong>{m.value}</strong> {keepRanges(m.label)}</li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </motion.li>
  );
}

export default function Experience() {
  const reduceMotion = useReducedMotion();
  const roles = workExperience.flatMap((employer) => employer.roles.map((role) => ({ role, company: employer.company })));

  return (
    <div className="section">
      <div className="page-shell experience">
        <header className="section-head experience-head">
          <p className="kicker">Experience</p>
          <h2 className="section-title">Product delivery → backend → platform.</h2>
          <p className="section-dek">5+ years in software engineering, including 4+ in backend engineering.</p>
        </header>

        <ol className="tl">
          {roles.map(({ role, company }, index) => (
            <RoleItem key={`${company}-${role.title}`} role={role} company={company} index={index} reduceMotion={reduceMotion} />
          ))}
        </ol>
      </div>
    </div>
  );
}
