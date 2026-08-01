import { motion, useReducedMotion } from 'framer-motion';
import { FiCode, FiLayers, FiMonitor, FiPackage, FiRepeat } from 'react-icons/fi';
import {
  SiAmazoncloudwatch,
  SiAmazonec2,
  SiAmazonecs,
  SiAmazoniam,
  SiAmazons3,
  SiAmazonwebservices,
  SiApachekafka,
  SiAwsfargate,
  SiCelery,
  SiDocker,
  SiFastapi,
  SiGitlab,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPytest,
  SiPython,
  SiRedis,
  SiAwslambda,
} from 'react-icons/si';
import { skillCategories } from '../data/skills';

const EASE = [0.22, 1, 0.36, 1];
const skillIcons = {
  Python: SiPython,
  FastAPI: SiFastapi,
  'REST APIs': FiCode,
  'Node.js': SiNodedotjs,
  AWS: SiAmazonwebservices,
  EC2: SiAmazonec2,
  ECS: SiAmazonecs,
  ECR: FiPackage,
  Lambda: SiAwslambda,
  Fargate: SiAwsfargate,
  IAM: SiAmazoniam,
  S3: SiAmazons3,
  CloudFormation: FiLayers,
  Docker: SiDocker,
  Redis: SiRedis,
  Celery: SiCelery,
  Kafka: SiApachekafka,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  EventBridge: FiRepeat,
  'GitLab CI/CD': SiGitlab,
  Pytest: SiPytest,
  Playwright: FiMonitor,
  'AWS CloudWatch': SiAmazoncloudwatch,
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="site-section skills-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Skills</p>
          <h2>Focused backend toolkit.</h2>
        </div>
        <p>Core technologies I use in production and personal work.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <motion.article
            key={category.title}
            className="skill-group"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.44, delay: categoryIndex * 0.04, ease: EASE }}
          >
            <header>
              <span>{String(categoryIndex + 1).padStart(2, '0')}</span>
              <h3>{category.title}</h3>
            </header>
            <ul>
              {category.skills.map((skill) => {
                const Icon = skillIcons[skill] || FiCode;
                return (
                  <li key={skill}>
                    <Icon aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                );
              })}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
