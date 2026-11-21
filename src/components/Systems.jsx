import { motion, useReducedMotion } from 'framer-motion';
import { workExperience } from '../data/experience';
import { itemIn } from './motionPresets';
import { keepRanges } from './text';

// The three shared systems under TotalKYC, laid out as a ledger: the result at display
// size on the left, the story on the right. They come from the role flagged
// `systemCards` in experience.js, which then does not repeat them in the timeline.
const cardRole = workExperience.flatMap((employer) => employer.roles).find((role) => role.systemCards);

export default function Systems() {
  const reduceMotion = useReducedMotion();
  if (!cardRole) return null;

  return (
    <div className="section">
      <div className="page-shell">
        <header className="section-head">
          <p className="kicker">What I built</p>
          <h2 className="section-title">The shared pieces under TotalKYC, and what they changed.</h2>
        </header>

        <ol className="ledger">
          {cardRole.built.map((item, index) => (
            <motion.li key={item.name} className={`ledger-row ${item.stat ? '' : 'ledger-row--story'}`} {...itemIn(index, reduceMotion)}>
              {item.stat && (
                <div className="ledger-figure">
                  <p className={`ledger-metric ${item.stat.tone === 'ok' ? 'is-ok' : ''}`}>{keepRanges(item.stat.value)}</p>
                  <p className="ledger-label">{keepRanges(item.stat.label)}</p>
                  {item.stat.sub && <p className="ledger-label">{keepRanges(item.stat.sub)}</p>}
                </div>
              )}
              <div className="ledger-story">
                <div className="ledger-name">
                  <h3>{item.name}</h3>
                  {item.verb && <span className="chip">{item.verb}</span>}
                </div>
                <p className="ledger-text">{keepRanges(item.text)}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
