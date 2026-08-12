import {
  FaNode, FaAws, FaDocker,
} from 'react-icons/fa';
import {
  SiMongodb, SiRedis, SiCplusplus, SiFastapi, SiMysql, SiPython,
  SiJavascript, SiAmazonsqs, SiCelery, SiApachekafka, SiAwslambda,
  SiAwsfargate, SiAmazonec2, SiAmazons3, SiGitlab, SiAmazoncloudwatch, SiPytest,
} from 'react-icons/si';

export const skillCategories = [
  {
    title: 'Backend',
    skills: [
      { name: 'Python',     Icon: SiPython,     color: '#3776AB' },
      { name: 'FastAPI',    Icon: SiFastapi,    color: '#009688' },
      { name: 'Node.js',    Icon: FaNode,       color: '#339933' },
      { name: 'Celery',     Icon: SiCelery,     color: '#37814A' },
    ],
  },
  {
    title: 'AWS',
    skills: [
      { name: 'Lambda',          Icon: SiAwslambda, color: '#FF9900' },
      { name: 'ECS / Fargate',   Icon: SiAwsfargate, color: '#FF9900' },
      { name: 'EC2 / ECR',       Icon: SiAmazonec2, color: '#FF9900' },
      { name: 'S3 / IAM',        Icon: SiAmazons3, color: '#FF9900' },
      { name: 'CloudFormation',  Icon: FaAws, color: '#FF9900' },
    ],
  },
  {
    title: 'Data & Messaging',
    skills: [
      { name: 'Redis',    Icon: SiRedis,       color: '#DC382D' },
      { name: 'MongoDB',  Icon: SiMongodb,     color: '#47A248' },
      { name: 'MySQL',    Icon: SiMysql,       color: '#00758F' },
      { name: 'SQS',      Icon: SiAmazonsqs, color: '#F29111' },
      { name: 'Kafka',    Icon: SiApachekafka, color: '#96CC00' },
    ],
  },
  {
    title: 'Delivery & Observability',
    skills: [
      { name: 'Docker',              Icon: FaDocker,          color: '#2496ED' },
      { name: 'GitLab CI/CD',        Icon: SiGitlab,          color: '#FC6D26' },
      { name: 'CloudWatch',          Icon: SiAmazoncloudwatch, color: '#FF4F8B' },
      { name: 'EventBridge',         Icon: FaAws,              color: '#FF9900' },
      { name: 'Playwright / Pytest', Icon: SiPytest,           color: '#0A9EDC' },
    ],
  },
  {
    title: 'Languages & Foundations',
    skills: [
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'C++',        Icon: SiCplusplus,  color: '#00599C' },
      { name: 'System Design',   Icon: null, color: '#9333ea' },
      { name: 'Data Structures & Algorithms', Icon: null, color: '#22d3ee' },
    ],
  },
];
