import { metrics } from './metrics';

export const workExperience = [
  {
    company: 'Perfios',
    title: 'Senior Software Engineer',
    location: 'New Delhi, IN (Hybrid)',
    date: 'Apr 2024 - Present',
    current: true,
    summary: 'Backend and platform ownership across TotalKYC, with production responsibility spanning reliability, regional recovery, modernization, delivery tooling, and cost.',
    bullets: [
      `Own backend systems supporting ${metrics.dailyRequests.display} daily requests, including active-passive disaster recovery across Mumbai and Hyderabad and production incident response.`,
      `Delivered ${metrics.cumulativeSavings.display} in cumulative savings since April 2024 through caching, source-strengthening, and cost-aware architecture across identity workflows.`,
      `Migrated Python 3.9 services stack by stack to 3.12 and containerized ${metrics.apisContainerized.display} APIs, while building multi-region CI/CD with SAST and removing a dedicated EC2 deployment host.`,
      `Moved browser-based PDF parsing and generation to Playwright, increasing success from ${metrics.browserWorkflow.successBefore}% to ${metrics.browserWorkflow.successAfter}% and reducing average latency from ${metrics.browserWorkflow.latencyBefore}s to ${metrics.browserWorkflow.latencyAfter}s.`,
    ],
    chips: ['Python', 'AWS', 'Redis', 'Celery', 'Fargate', 'Playwright', 'GitLab CI/CD'],
  },
  {
    company: 'Karza Technologies',
    companyContext: 'Merged into Perfios',
    title: 'Software Engineer I',
    location: 'Mumbai, IN (Remote)',
    date: 'Oct 2022 - Apr 2024',
    summary: 'Transitioned fully into backend engineering through high-volume KYC APIs, source integrations, asynchronous processing, and production operations.',
    bullets: [
      `Re-architected a session-sensitive Lambda source as a Redis-backed Celery workload on Fargate; controlled execution tripled throughput, raised in-house serving from ${metrics.sourceServing.before}% to ${metrics.sourceServing.after}%, and enabled vendor retirement worth ${metrics.vendorRetirementSavings.display} over two years.`,
      `Designed ${metrics.apisDesigned.display} production APIs and maintained ${metrics.apisOperated.display} across TotalKYC, Data Science, and VideoKYC integrations.`,
      `Reduced ${metrics.p99Latency.label} from ${metrics.p99Latency.before}s to ${metrics.p99Latency.after}s on legacy KYC paths and cut database writes from 9–10 to 3–4 on APIs receiving more than 500K daily requests.`,
    ],
    chips: ['FastAPI', 'Redis', 'Celery', 'AWS Lambda', 'Fargate', 'MongoDB'],
  },
  {
    company: 'InTimeTec',
    title: 'Software Engineer',
    location: 'Jaipur, IN',
    date: 'Mar 2021 - Sep 2022',
    summary: 'Started in product engineering and moved toward backend work through API security, debugging, scale, and concurrency problems.',
    bullets: [
      `Led a 0-to-1 migration from a legacy .NET desktop application to an Angular web platform across ${metrics.productModules.display} modules.`,
      `Made an early request-processing API thread-safe and easier to debug, increasing supported users from ${metrics.earlyApiUsers.before} to ${metrics.earlyApiUsers.after}.`,
      'Improved release confidence through CI/CD pipeline work and component regression coverage with Karma and Jasmine.',
    ],
    chips: ['Angular', 'React', 'JavaScript', 'API security', 'CI/CD', 'Karma', 'Jasmine'],
  },
];

export const projects = [
  {
    name: 'Distributed Quota-Metering Engine',
    url: 'https://github.com/Arihant416/quota-meter',
    type: 'Distributed systems project',
    description: 'Prepaid usage metering for multi-tenant APIs, with atomic quota deduction and refund, idempotent retries, and concurrency-safe accounting.',
    evidence: 'Load-tested with 10,000 simulated consume requests and zero over-serving; retries using the same idempotency key were charged once.',
    chips: ['FastAPI', 'Redis Lua', 'MongoDB', 'Docker Compose', 'Async Python'],
  },
  {
    name: 'GitDev Finder',
    url: 'https://gitdevfinder416.netlify.app/',
    type: 'Developer tooling',
    description: 'Searchable developer discovery built from repository and profile data, with filtering by language stack and activity.',
    chips: ['React', 'Node.js', 'MongoDB', 'Netlify API'],
  },
  {
    name: 'FXFlow',
    url: null,
    type: 'Archived utility',
    description: 'Currency conversion utility with explicit loading, failure, and API-state handling.',
    chips: ['JavaScript', 'REST APIs', 'HTML', 'CSS'],
  },
];
