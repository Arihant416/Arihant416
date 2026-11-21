import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  SiAmazoncloudwatch, SiAmazons3, SiAmazonsqs, SiAwsfargate, SiAwslambda, SiCelery, SiCplusplus,
  SiDocker, SiFastapi, SiGitlab, SiGrafana, SiJavascript, SiMongodb, SiMysql, SiNodedotjs,
  SiPrometheus, SiPytest, SiPython, SiRabbitmq, SiRedis, SiSelenium,
} from 'react-icons/si';
import { TbMasksTheater, TbStack2 } from 'react-icons/tb';
import { tools } from '../data/skills';

// Icon + brand colour. Icons rest in the text colour and take the brand colour on hover.
// CloudFormation and Playwright have no Simple Icons mark, so they use Tabler line icons.
const ICONS = {
  Python: [SiPython, '#3776AB'],
  Redis: [SiRedis, '#DC382D'],
  Celery: [SiCelery, '#37814A'],
  'ECS / Fargate': [SiAwsfargate, '#FF9900'],
  'AWS Lambda': [SiAwslambda, '#FF9900'],
  Docker: [SiDocker, '#2496ED'],
  'GitLab CI/CD': [SiGitlab, '#FC6D26'],
  FastAPI: [SiFastapi, '#009688'],
  'Node.js': [SiNodedotjs, '#339933'],
  JavaScript: [SiJavascript, '#E3C400'],
  'C++': [SiCplusplus, '#00599C'],
  MongoDB: [SiMongodb, '#47A248'],
  MySQL: [SiMysql, '#4479A1'],
  RabbitMQ: [SiRabbitmq, '#FF6600'],
  'Amazon SQS': [SiAmazonsqs, '#FF4F8B'],
  S3: [SiAmazons3, '#569A31'],
  CloudFormation: [TbStack2, '#FF4F8B'],
  'AWS CloudWatch': [SiAmazoncloudwatch, '#FF4F8B'],
  Prometheus: [SiPrometheus, '#E6522C'],
  Grafana: [SiGrafana, '#F46800'],
  Pytest: [SiPytest, '#0A9EDC'],
  Playwright: [TbMasksTheater, '#2EAD33'],
  Selenium: [SiSelenium, '#43B02A'],
};

// Long names may break at an inner capital ("Cloud|Formation") on narrow tiles, never mid-word.
const breakable = (name) => name.split(/(?<=[a-z])(?=[A-Z])/).flatMap((part, i) => (i ? [<wbr key={i} />, part] : [part]));

const logoTools = tools.filter((tool) => !tool.concept && ICONS[tool.name]);
const concepts = tools.filter((tool) => tool.concept);

// Cloud order. The first 16 tiles are the ones phones show (4 rows of 4): the 7 larger
// tiles (P) spread through the 9 others (O) so no row or column bunches them. The `low`
// tiles follow, shown from 700px up; on phones they appear as chips instead.
const PHONE_PATTERN = 'POOPOPOOPOPOOPOP';
const primaries = logoTools.filter((tool) => tool.primary);
const others = logoTools.filter((tool) => !tool.primary && !tool.low);
const lows = logoTools.filter((tool) => tool.low);
const cloud = [...PHONE_PATTERN].map((slot) => (slot === 'P' ? primaries : others).shift()).filter(Boolean);
cloud.push(...primaries, ...others, ...lows);

// Deterministic depth and float rhythm per tile, so no two neighbours move in step.
const DEPTHS = [-40, 30, 70, -10, 45, -55, 15, 55, -25];
const tileStyle = (index, brand) => ({
  '--z': `${DEPTHS[index % DEPTHS.length]}px`,
  '--float-duration': `${5 + ((index * 7) % 5) * 0.6}s`,
  '--float-delay': `${-((index * 0.83) % 4).toFixed(2)}s`,
  '--float-distance': `${index % 3 === 0 ? 10 : 6}px`,
  '--brand': brand,
});

export default function Skills() {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef(null);
  const [inView, setInView] = useState(false);
  // Touch has no hover: a tap lights a tile up (a second tap, or another tile, clears it).
  const [lit, setLit] = useState(null);

  // Pointer position (−0.5…0.5) → a spring-smoothed tilt of the whole cloud.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 110, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [16, 0]), spring);

  // Float only while the section is on screen.
  useEffect(() => {
    const node = stageRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: '120px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const onPointerMove = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };
  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div className="section section--tools">
      <div className="page-shell">
        <header className="section-head">
          <p className="kicker">Skills</p>
          <h2 className="section-title">Tools I work with.</h2>
          <p className="section-dek">The larger tiles are the tools behind the production work above.</p>
        </header>

        <div
          ref={stageRef}
          className="tool-stage"
          data-running={inView && !reduceMotion ? 'true' : 'false'}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <motion.ul className="tool-cloud" style={reduceMotion ? undefined : { rotateX, rotateY }}>
            {cloud.map(({ name, primary, low }, index) => {
              const [Icon, brand] = ICONS[name];
              const classes = ['tool', primary && 'tool--primary', low && 'tool--low', lit === name && 'is-lit'];
              return (
                <li
                  key={name}
                  className={classes.filter(Boolean).join(' ')}
                  style={tileStyle(index, brand)}
                  onPointerUp={(event) => {
                    if (event.pointerType !== 'mouse') setLit((current) => (current === name ? null : name));
                  }}
                >
                  <span className="tool-chip">
                    <span className="tool-icon" aria-hidden="true"><Icon /></span>
                    <span className="tool-name">{breakable(name)}</span>
                  </span>
                </li>
              );
            })}
          </motion.ul>
        </div>

        <div className="tool-also">
          <p className="strip-title">Also</p>
          <ul className="toolbox-chips">
            {lows.map(({ name }) => (
              <li key={name} className="chip chip--phone">{name}</li>
            ))}
            {concepts.map(({ name }) => <li key={name} className="chip">{name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
