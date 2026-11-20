import {
  SiAmazoncloudwatch, SiAmazons3, SiAmazonsqs, SiAwsfargate, SiAwslambda, SiCelery, SiCplusplus,
  SiDocker, SiFastapi, SiGitlab, SiGrafana, SiJavascript, SiMongodb, SiMysql, SiNodedotjs,
  SiPrometheus, SiPytest, SiPython, SiRabbitmq, SiRedis, SiSelenium,
} from 'react-icons/si';
import {
  TbApi, TbBolt, TbHexagons, TbMasksTheater, TbShieldCode, TbShieldSearch, TbSql, TbStack2,
} from 'react-icons/tb';
import { tools } from '../data/skills';

// Icons sit in the room's ink colour and take their brand colour on hover. Concepts
// without a brand mark (REST APIs, SAST, …) use Tabler line icons and the accent colour.
const ICONS = {
  Python: [SiPython, '#3776AB'],
  Redis: [SiRedis, '#DC382D'],
  FastAPI: [SiFastapi, '#009688'],
  Docker: [SiDocker, '#2496ED'],
  'AWS Lambda': [SiAwslambda, '#FF9900'],
  Celery: [SiCelery, '#37814A'],
  MongoDB: [SiMongodb, '#47A248'],
  RabbitMQ: [SiRabbitmq, '#FF6600'],
  'ECS / Fargate': [SiAwsfargate, '#FF9900'],
  'Node.js': [SiNodedotjs, '#339933'],
  'Amazon SQS': [SiAmazonsqs, '#FF4F8B'],
  JavaScript: [SiJavascript, '#E3C400'],
  S3: [SiAmazons3, '#569A31'],
  MySQL: [SiMysql, '#4479A1'],
  'REST APIs': [TbApi],
  'GitLab CI/CD': [SiGitlab, '#FC6D26'],
  Microservices: [TbHexagons],
  'Event-driven architecture': [TbBolt],
  CloudFormation: [TbStack2, '#FF4F8B'],
  'AWS CloudWatch': [SiAmazoncloudwatch, '#FF4F8B'],
  Prometheus: [SiPrometheus, '#E6522C'],
  Grafana: [SiGrafana, '#F46800'],
  SQL: [TbSql],
  Pytest: [SiPytest, '#0A9EDC'],
  Playwright: [TbMasksTheater, '#2EAD33'],
  Selenium: [SiSelenium, '#43B02A'],
  SAST: [TbShieldCode],
  VAPT: [TbShieldSearch],
  'C++': [SiCplusplus, '#00599C'],
};

// Deterministic, varied float rhythm per tile (no two neighbours move in step).
const floatStyle = (index) => ({
  '--float-duration': `${4.6 + ((index * 7) % 5) * 0.55}s`,
  '--float-delay': `${-((index * 0.83) % 4).toFixed(2)}s`,
  '--float-distance': `${index % 3 === 0 ? 7 : 5}px`,
});

export default function Skills() {
  return (
    <div className="room room--teal">
      <div className="page-shell">
        <header className="section-head">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools I use.</h2>
        </header>

        <ul className="tool-cloud" aria-label="Tools">
          {tools.map(({ name, primary }, index) => {
            const [Icon, brand] = ICONS[name] || [TbApi];
            return (
              <li
                key={name}
                className={`tool ${primary ? 'tool--primary' : ''}`}
                style={floatStyle(index)}
              >
                <span className="tool-chip" style={brand ? { '--brand': brand } : undefined}>
                  <span className="tool-icon" aria-hidden="true"><Icon /></span>
                  <span className="tool-name">{name}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
