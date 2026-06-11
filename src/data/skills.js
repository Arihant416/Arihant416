import {
  FaNode, FaAws, FaReact, FaAngular, FaJava, FaPython, FaDocker,
} from 'react-icons/fa';
import {
  SiMongodb, SiRedis, SiCplusplus, SiSelenium, SiPandas,
  SiFastapi, SiMysql, SiRabbitmq, SiLinux, SiPython,
  SiJavascript, SiAmazonsqs, SiCelery, SiJira, SiKubernetes,
  SiGo, SiServerless, SiApachekafka,
} from 'react-icons/si';

export const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python',     Icon: SiPython,     color: '#3776AB' },
      { name: 'JavaScript', Icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'C++',        Icon: SiCplusplus,   color: '#00599C' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'FastAPI',    Icon: SiFastapi,    color: '#009688' },
      { name: 'Node.js',    Icon: FaNode,       color: '#339933' },
      // { name: 'Angular',    Icon: FaAngular,    color: '#DD0031' },
      // { name: 'Selenium',   Icon: SiSelenium,   color: '#43B02A' },
      { name: 'Celery',     Icon: SiCelery,     color: '#37814A' },
      // { name: 'Serverless', Icon: SiServerless, color: '#FD5750' },
    ],
  },
  {
    title: 'Cloud & Databases',
    skills: [
      { name: 'AWS',     Icon: FaAws,        color: '#FF9900' },
      { name: 'Docker',  Icon: FaDocker,     color: '#2496ED' },
      { name: 'K8s',     Icon: SiKubernetes, color: '#326CE5' },
      { name: 'MongoDB', Icon: SiMongodb,    color: '#47A248' },
      { name: 'Redis',   Icon: SiRedis,      color: '#DC382D' },
      { name: 'MySQL',   Icon: SiMysql,      color: '#00758F' },
    ],
  },
  {
    title: 'Messaging & Tools',
    skills: [
      { name: 'SQS',      Icon: SiAmazonsqs, color: '#F29111' },
      // { name: 'RabbitMQ', Icon: SiRabbitmq,  color: '#FF6600' },
      // { name: 'Linux',    Icon: SiLinux,     color: '#FCC624' },
      { name: 'Kafka',     Icon: SiApachekafka,      color: '#96cc00' },
    ],
  },
  {
    title: 'CS Fundamentals',
    skills: [
      { name: 'System Design',   Icon: null, color: '#9333ea' },
      { name: 'Data Structures & Algorithms', Icon: null, color: '#22d3ee' },
    ],
  },
];
