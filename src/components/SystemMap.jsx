import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { workExperience } from '../data/experience';

// DR lives in experience.js as the outcome with placement 'map'; this is its only render.
const dr = workExperience
  .flatMap((employer) => employer.roles)
  .flatMap((role) => role.outcomes || [])
  .find((outcome) => typeof outcome === 'object' && outcome.placement === 'map');

// The platform, simplified. Structure and DR only: figures live in the h1, the hero
// proof strip and the system cards, so nothing on the page is said twice.
// Packets animate `transform` only and run only while the map is on screen; with
// reduced motion they are not rendered at all.
function Wire({ delay = 0, packets }) {
  return (
    <div className="map-wire" aria-hidden="true">
      {packets && <i style={{ animationDelay: `${delay}s` }} />}
    </div>
  );
}

export default function SystemMap() {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (reduceMotion || !ref.current || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setLive(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const packets = !reduceMotion;

  return (
    <figure ref={ref} className={`map ${live ? 'is-live' : ''}`} aria-labelledby={dr?.caption ? 'map-caption' : undefined}>
      <div className="map-head">
        <span>TotalKYC · simplified</span>
      </div>

      <div className="map-region">
        <p className="map-region-tag">Mumbai · active</p>
        <div className="map-node"><b>Clients</b></div>
        <Wire packets={packets} />
        <div className="map-node"><b>API gateway</b></div>
        <Wire packets={packets} delay={0.5} />
        <div className="map-node map-node--core"><b>Production APIs</b>built on shared-utilities</div>
        <div className="map-split">
          <div>
            <Wire packets={packets} delay={1} />
            <div className="map-node"><b>Routing layer</b>health-aware</div>
          </div>
          <div>
            <Wire packets={packets} delay={0.25} />
            <div className="map-node"><b>Redis</b>session locks</div>
          </div>
        </div>
      </div>

      <div className="map-region map-region--passive">
        <p className="map-region-tag">Hyderabad · passive</p>
        {dr?.chip && <span className="chip">{dr.chip}</span>}
      </div>

      {dr?.caption && (
        <figcaption id="map-caption" className="map-note">{dr.caption}</figcaption>
      )}
    </figure>
  );
}
