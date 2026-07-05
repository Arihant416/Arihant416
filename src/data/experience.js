export const workExperience = [
  {
    company: 'Perfios',
    title: 'Senior Software Engineer',
    location: 'New Delhi, IN',
    date: 'Apr 2024 - Present',
    shortDesc: 'Designing high-throughput backend systems for identity APIs, source orchestration, reliability guardrails, and multi-region DR across 5M+ daily requests.',
    bullets: [
      'Built Celery/Redis/Fargate controlled worker pipelines for constrained in-house sources, raising in-house serving from ~35% to 82% and contributing to $700K+ annualized savings.',
      'Separated Redis-backed rate-limit decisioning from core business logic through guard-style dependencies, enabling deliberate fail-open behavior for critical KYC flows during Redis instability.',
      'Reworked high-volume response paths and worker execution to reduce P99 latency by ~70% across multiple APIs while keeping request handling predictable under load.',
      'Owned DR testing, deployment, monitoring, incident handling, and CI/CD setup for regional API paths supporting 5M+ daily requests.'
    ],
    chips: ['Python', 'FastAPI', 'Redis', 'AWS Fargate', 'Kafka', 'Playwright']
  },
  {
    company: 'Perfios',
    title: 'Software Engineer I',
    location: 'Mumbai, IN (Remote)',
    date: 'Oct 2022 - Apr 2024',
    shortDesc: 'Designed 30 APIs from scratch and maintained/operated 200+ APIs across TotalKYC, Data Science, and VideoKYC integrations.',
    bullets: [
      'Designed and shipped 30 APIs from scratch across TotalKYC workflows, with patterns for validation, error handling, observability, and client-ready integration.',
      'Maintained and operated 200+ APIs across TotalKYC, Data Science, and VideoKYC integrations, balancing reliability work with cross-team delivery.',
      'Built data ingestion and public-source integration APIs for high-volume KYC flows while keeping response contracts stable for enterprise clients.',
      'Migrated Celery worker pipelines onto AWS Fargate and tightened webhook/accounting flows, reducing operational overhead while keeping asynchronous processing predictable.'
    ],
    chips: ['Python', 'Celery', 'AWS ECS', 'Fargate', 'AWS SQS', 'Webhooks']
  },
  {
    company: 'InTimeTec',
    title: 'Software Engineer',
    location: 'Jaipur, IN',
    date: 'Mar 2021 - Sep 2022',
    shortDesc: 'Started in product/web engineering through a 0-to-1 enterprise migration, then moved deeper into backend through API security, debugging, scale, and thread-safety problems.',
    bullets: [
      'Led a 0-to-1 Angular migration from a legacy .NET desktop application to a modular web platform across 9 modules, earning early client trust as an early-career engineer.',
      'Scaled an early backend API from 20 to 50 supported users by making request handling thread-safe and easier to debug under load.',
      'Improved CI/CD release flow and component regression coverage with standardized pipelines, Karma, and Jasmine suites.'
    ],
    chips: ['JavaScript', 'React', 'Angular', 'CI/CD', 'Karma', 'Jasmine']
  }
];

export const projects = [
  {
    name: 'Distributed Quota-Metering Engine',
    url: 'https://github.com/Arihant416/quota-meter', // Replace with real repo link if public
    description: 'Backend service for multi-tenant API products where usage limits must stay accurate under concurrent traffic. It pairs FastAPI with Redis Lua token-bucket checks and MongoDB state so quota deduction, idempotency validation, and rollback logic stay deterministic.',
    chips: ['FastAPI', 'Redis Lua', 'MongoDB', 'Docker Compose', 'Asynchronous Python'],
  },
  {
    name: 'GitDev Finder',
    url: 'https://gitdevfinder416.netlify.app/',
    description: 'Developer discovery app that turns repository and profile data into searchable views by language stack and activity. It demonstrates API integration, filtering workflows, and deployable full-stack product polish for teams that need faster engineering discovery.',
    chips: ['React', 'Node.js', 'MongoDB', 'Netlify API'],
  },
  {
    name: 'FXFlow',
    url: null,
    status: 'Demo archived',
    description: 'Archived finance utility that consumes exchange-rate APIs and keeps currency calculations responsive in the browser. It demonstrates clean API-state handling, error-aware UI flows, and lightweight delivery for small client tools.',
    chips: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
  }
];
