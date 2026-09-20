import {
  FaNode, FaAws, FaDocker, FaLinux,
} from 'react-icons/fa';
import {
  SiMongodb, SiRedis, SiFastapi, SiCplusplus, SiPostgresql, SiPython, SiPydantic, SiRabbitmq,
  SiJavascript, SiAmazonsqs, SiCelery, SiApachekafka, SiAwslambda,
  SiAwsfargate, SiAmazonec2, SiAmazons3, SiGitlab, SiAmazoncloudwatch, SiPytest,
} from 'react-icons/si';

export const skillCategories = [
  {
    title: 'Languages & Backend',
    skills: [
      { name: 'Python',     Icon: SiPython,     color: '#3776AB' },
      { name: 'FastAPI',    Icon: SiFastapi,    color: '#009688' },
      { name: 'Pydantic',   Icon: SiPydantic,   color: '#E92063' },
      { name: 'Celery',     Icon: SiCelery,     color: '#37814A' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Node.js',    Icon: FaNode,       color: '#339933' },
      { name: 'C++',        Icon: SiCplusplus,  color: '#00599C' },
      { name: 'SQL',        Icon: null,         color: '#9333ea' },
    ],
  },
  {
    title: 'AWS',
    skills: [
      { name: 'Lambda',          Icon: SiAwslambda,  color: '#FF9900' },
      { name: 'ECS / Fargate',   Icon: SiAwsfargate, color: '#FF9900' },
      { name: 'EC2',             Icon: SiAmazonec2,  color: '#FF9900' },
      { name: 'S3',              Icon: SiAmazons3,   color: '#FF9900' },
      { name: 'EventBridge',     Icon: FaAws,        color: '#FF9900' },
      { name: 'CloudFormation',  Icon: FaAws,        color: '#FF9900' },
    ],
  },
  {
    title: 'Data & Messaging',
    skills: [
      { name: 'Redis',    Icon: SiRedis,       color: '#DC382D' },
      { name: 'MongoDB',  Icon: SiMongodb,     color: '#47A248' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'Kafka',    Icon: SiApachekafka, color: '#96CC00' },
      { name: 'RabbitMQ', Icon: SiRabbitmq,    color: '#FF6600' },
      { name: 'SQS',      Icon: SiAmazonsqs,   color: '#F29111' },
    ],
  },
  {
    title: 'Delivery & Observability',
    skills: [
      { name: 'Docker',       Icon: FaDocker,           color: '#2496ED' },
      { name: 'Linux',        Icon: FaLinux,            color: '#FCC624' },
      { name: 'GitLab CI/CD', Icon: SiGitlab,           color: '#FC6D26' },
      { name: 'CloudWatch',   Icon: SiAmazoncloudwatch, color: '#FF4F8B' },
      { name: 'Pytest',       Icon: SiPytest,           color: '#0A9EDC' },
    ],
  },
  {
    title: 'Systems',
    skills: [
      { name: 'Microservices',              Icon: null, color: '#9333ea' },
      { name: 'Event-driven architecture',  Icon: null, color: '#22d3ee' },
      { name: 'Async processing',           Icon: null, color: '#9333ea' },
      { name: 'Distributed locking',        Icon: null, color: '#22d3ee' },
      { name: 'Multi-region DR',            Icon: null, color: '#9333ea' },
    ],
  },
];
