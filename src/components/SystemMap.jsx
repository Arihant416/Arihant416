// A simplified map of the platform. Every label traces to the metric register in
// CLAUDE.md; keep it that way when editing. Internal names: only shared-utilities.
const PULSES = [
  { path: 'M200 42 V180', dur: '2.6s', begin: '0s' },
  { path: 'M200 42 V180', dur: '2.6s', begin: '1.3s' },
  { path: 'M100 246 V280', dur: '1.4s', begin: '0.4s' },
  { path: 'M288 246 V280', dur: '1.4s', begin: '1.1s' },
];

export default function SystemMap({ reduceMotion }) {
  return (
    <figure className="system-map">
      <div className="system-map-head">
        <strong>TotalKYC platform</strong>
        <span>simplified</span>
      </div>

      <svg viewBox="0 0 400 500" role="img" aria-labelledby="system-map-title system-map-desc">
        <title id="system-map-title">Platform map</title>
        <desc id="system-map-desc">
          Clients send 5M+ requests a day through an API gateway to 200+ production APIs built on
          shared-utilities. The APIs use a health-aware routing layer across 120+ APIs and a Redis
          session library with distributed locks that cut session failures by 35%. The stack runs
          active in Mumbai, with a passive standby in Hyderabad; the switchover has a design target
          of 40 to 45 minutes.
        </desc>

        {/* Active region */}
        <rect className="map-region" x="10" y="60" width="380" height="330" rx="14" />
        <text className="map-text map-text--mono map-text--accent" x="26" y="86">Mumbai · active</text>

        {/* Edges */}
        <path className="map-edge" d="M200 42 V112" />
        <path className="map-edge" d="M200 150 V180" />
        <path className="map-edge" d="M100 246 V280" />
        <path className="map-edge" d="M288 246 V280" />
        <path className="map-edge map-edge--standby" d="M200 390 V436" />
        <text className="map-text map-text--mono map-text--muted" x="212" y="86">5M+ req/day</text>

        {/* Clients */}
        <rect className="map-node" x="130" y="6" width="140" height="36" rx="8" />
        <text className="map-text" x="200" y="29" textAnchor="middle">Clients</text>

        {/* Gateway */}
        <rect className="map-node" x="115" y="112" width="170" height="38" rx="8" />
        <text className="map-text" x="200" y="136" textAnchor="middle">API gateway</text>

        {/* APIs on shared-utilities */}
        <rect className="map-node map-node--core" x="30" y="180" width="340" height="66" rx="10" />
        <text className="map-text map-text--title" x="200" y="207" textAnchor="middle">200+ production APIs</text>
        <text className="map-text map-text--mono map-text--muted" x="200" y="230" textAnchor="middle">built on shared-utilities</text>

        {/* Health-aware routing */}
        <rect className="map-node" x="18" y="280" width="164" height="88" rx="10" />
        <text className="map-text map-text--mono" x="32" y="305">routing layer</text>
        <g aria-hidden="true">
          <circle className="map-dot-ok" cx="158" cy="300" r="3.5" />
          <circle className="map-dot-ok" cx="167" cy="300" r="3.5" />
          <circle className="map-dot-cool" cx="176" cy="300" r="3.5" />
        </g>
        <text className="map-text map-text--muted" x="32" y="328">health-aware</text>
        <text className="map-text map-text--muted" x="32" y="349">120+ APIs</text>

        {/* Redis session library */}
        <rect className="map-node" x="194" y="280" width="188" height="88" rx="10" />
        <text className="map-text map-text--mono" x="208" y="305">Redis</text>
        <text className="map-text map-text--muted" x="208" y="328">session locks</text>
        <text className="map-text map-text--ok" x="208" y="349">−35% session failures</text>

        {/* Passive standby */}
        <rect className="map-standby" x="36" y="436" width="328" height="56" rx="10" />
        <text className="map-text map-text--mono map-text--muted" x="200" y="459" textAnchor="middle">Hyderabad · passive</text>
        <text className="map-text" x="200" y="480" textAnchor="middle">40–45 min switchover (design target)</text>

        {!reduceMotion && (
          <g aria-hidden="true">
            {PULSES.map(({ path, dur, begin }) => (
              <circle key={`${path}-${begin}`} className="map-pulse" r="3.5">
                <animateMotion dur={dur} begin={begin} repeatCount="indefinite" path={path} />
              </circle>
            ))}
          </g>
        )}
      </svg>
    </figure>
  );
}
