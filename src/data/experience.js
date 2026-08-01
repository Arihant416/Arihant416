import { metrics } from './metrics';

export const workExperience = [
  {
    company: 'Perfios',
    title: 'Senior Software Engineer',
    location: 'New Delhi, IN (Hybrid)',
    date: 'Apr 2024 - Present',
    current: true,
    summary: 'Own backend and platform work across TotalKYC, covering reliability, disaster recovery, modernization, deployment, and cost.',
    signals: [
      { value: metrics.dailyRequests.display, label: 'daily requests with multi-region recovery' },
      { value: metrics.apisContainerized.display, label: 'APIs containerized during modernization' },
    ],
  },
  {
    company: 'Karza Technologies',
    companyContext: 'Merged into Perfios',
    title: 'Software Engineer I',
    location: 'Mumbai, IN (Remote)',
    date: 'Oct 2022 - Apr 2024',
    summary: 'Moved fully into backend engineering through high-volume KYC APIs, source integrations, background processing, and production support.',
    signals: [
      { value: '3x', label: 'throughput after redesigning request handling' },
      { value: metrics.apisDesigned.display, label: 'production APIs designed from scratch' },
    ],
  },
  {
    company: 'InTimeTec',
    title: 'Software Engineer',
    location: 'Jaipur, IN',
    date: 'Mar 2021 - Sep 2022',
    summary: 'Started in product engineering and moved toward backend work through API security, debugging, scale, and concurrency problems.',
    signals: [
      { value: '0 to 1', label: 'legacy desktop-to-web product migration' },
      { value: metrics.earlyApiUsers.display, label: 'supported users after thread-safety work' },
    ],
  },
];

export const projects = [
  {
    name: 'Distributed Quota-Metering Engine',
    url: 'https://github.com/Arihant416/quota-meter',
    type: 'Distributed systems project',
    description: 'A quota service that keeps usage accurate when many requests arrive at the same time.',
    evidence: 'Tested with 10,000 simulated requests without over-serving; repeated requests with the same key were charged once.',
    chips: ['FastAPI', 'Redis Lua', 'MongoDB', 'Docker Compose', 'Async Python'],
  },
  {
    name: 'GitDev Finder',
    url: 'https://gitdevfinder416.netlify.app/',
    type: 'Developer tooling',
    description: 'Search developers by language and recent activity using public repository data.',
    chips: ['React', 'Node.js', 'MongoDB', 'Netlify API'],
  },
];
