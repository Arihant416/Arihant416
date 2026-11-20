import { motion, useReducedMotion } from 'framer-motion';
import SystemMap from './SystemMap';
import { itemIn } from './motionPresets';

// What sits under TotalKYC's core APIs, and Arihant's part in each.
// Verbs and numbers follow the register in CLAUDE.md. `short` is the one-line phone
// version: same verb and claim; any number it drops is shown in the map right above it.
const PIECES = [
  {
    tone: 'cobalt',
    text: 'Designed and rolled out shared-utilities, the package under 200+ production APIs.',
    short: 'Designed and rolled out shared-utilities.',
  },
  {
    tone: 'teal',
    text: 'Built health-aware routing with cooldowns for 120+ APIs.',
    short: 'Built health-aware routing, 120+ APIs.',
  },
  {
    tone: 'amber',
    text: 'Built the Redis session library with distributed locks.',
    short: 'Built the Redis session library.',
  },
  {
    tone: 'coral',
    text: 'Designed and set up active-passive disaster recovery, Mumbai to Hyderabad.',
    short: 'Designed and set up active-passive DR.',
  },
];

export default function Platform() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="room room--cobalt">
      <div className="page-shell platform">
        <motion.div className="platform-copy" {...itemIn(0, reduceMotion)}>
          <p className="section-kicker">The platform</p>
          <h2 className="section-title">What 200+ APIs run&nbsp;on.</h2>
          <p className="room-lead">
            TotalKYC is Perfios' identity-verification platform: 5M+ requests a day at
            99.9%+ availability. These are the shared pieces under its core APIs, and my part in each.
          </p>
          <ul className="platform-pieces">
            {PIECES.map(({ tone, text, short }) => (
              <li key={text} className={`tone-${tone}`}>
                <span className="piece-long">{text}</span>
                <span className="piece-short">{short}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="platform-map" {...itemIn(1, reduceMotion)}>
          <SystemMap reduceMotion={reduceMotion} />
        </motion.div>
      </div>
    </div>
  );
}
