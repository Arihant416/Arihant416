import { FaAws, FaDocker, FaNode } from 'react-icons/fa';
import {
  SiAmazonsqs,
  SiApachekafka,
  SiCelery,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPython,
  SiRedis,
} from 'react-icons/si';

export const skillCategories = [
  {
    title: 'Languages and APIs',
    description: 'Service contracts, validation, error handling, and maintainable API boundaries.',
    skills: [
      { name: 'Python', Icon: SiPython },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'Node.js', Icon: FaNode },
      { name: 'REST API design', Icon: null },
    ],
  },
  {
    title: 'Distributed execution',
    description: 'Asynchronous work, concurrency control, idempotency, quotas, retries, and rate limits.',
    skills: [
      { name: 'Celery', Icon: SiCelery },
      { name: 'Redis', Icon: SiRedis },
      { name: 'Amazon SQS', Icon: SiAmazonsqs },
      { name: 'Kafka', Icon: SiApachekafka },
      { name: 'Lua scripting', Icon: null },
    ],
  },
  {
    title: 'Cloud and delivery',
    description: 'Repeatable deployments, containerized runtimes, regional recovery, and delivery controls.',
    skills: [
      { name: 'AWS Lambda', Icon: FaAws },
      { name: 'ECS / Fargate', Icon: FaAws },
      { name: 'Docker', Icon: FaDocker },
      { name: 'GitLab CI/CD', Icon: null },
      { name: 'SAST workflows', Icon: null },
    ],
  },
  {
    title: 'Data and reliability',
    description: 'Storage, caching, observability, testing, degradation paths, and incident response.',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'Redis caching', Icon: SiRedis },
      { name: 'Playwright', Icon: null },
      { name: 'Pytest', Icon: null },
      { name: 'Observability', Icon: null },
    ],
  },
];
