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

export const capabilityGroups = [
  {
    number: '01',
    title: 'Backend architecture',
    description: 'Designing clear API contracts, predictable failure paths, and services that remain understandable as traffic and teams grow.',
    proof: '30+ production APIs designed and shipped',
    skills: [
      { name: 'Python', Icon: SiPython },
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'Node.js', Icon: FaNode },
      { name: 'System design', Icon: null },
    ],
  },
  {
    number: '02',
    title: 'Distributed execution',
    description: 'Controlling concurrency, retries, idempotency, quotas, and asynchronous work without losing operational clarity.',
    proof: '3x throughput on a constrained source workflow',
    skills: [
      { name: 'Celery', Icon: SiCelery },
      { name: 'Redis', Icon: SiRedis },
      { name: 'SQS', Icon: SiAmazonsqs },
      { name: 'Kafka', Icon: SiApachekafka },
      { name: 'Rate limiting', Icon: null },
    ],
  },
  {
    number: '03',
    title: 'Cloud and delivery',
    description: 'Taking services from design to deployment with containerized runtimes, repeatable delivery, and regional recovery paths.',
    proof: '245 of 260 APIs containerized',
    skills: [
      { name: 'AWS', Icon: FaAws },
      { name: 'Lambda', Icon: FaAws },
      { name: 'ECS / Fargate', Icon: FaAws },
      { name: 'Docker', Icon: FaDocker },
      { name: 'CI/CD', Icon: null },
    ],
  },
  {
    number: '04',
    title: 'Data and reliability',
    description: 'Using caching, storage, observability, testing, and explicit degradation paths to keep critical flows dependable.',
    proof: '5M+ daily requests across critical API suites',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'Redis caching', Icon: SiRedis },
      { name: 'Playwright', Icon: null },
      { name: 'Observability', Icon: null },
    ],
  },
];

export const engineeringPrinciples = [
  'Design for failure',
  'Measure before tuning',
  'Treat cost as an architecture input',
  'Own delivery and recovery',
];
