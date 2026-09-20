export const workExperience = [
  {
    company: 'Perfios',
    title: 'Senior Software Engineer',
    location: 'New Delhi, IN (Remote)',
    date: 'Apr 2024 - Present',
    shortDesc: 'I scale and maintain the core APIs of TotalKYC, Perfios\' identity-verification platform, and build the shared layer they all run on.',
    libraries: [
      {
        name: 'shared-utilities',
        tone: 'cobalt',
        text: 'Built from scratch and rolled out product-wide: one package for secrets access, schema validation, and request config. It replaced 300–400 duplicated lines, and a config change is now one package bump instead of a redeploy of every API.',
        stat: { value: '200+', label: 'production APIs' },
      },
      {
        name: 'proxy-service',
        tone: 'coral',
        text: 'Health-aware routing for 120+ APIs. Unhealthy routes cool down and recover on their own, which took 12–20 manual interventions a week off the team.',
        stat: { value: '21%', label: 'of failing requests recovered' },
      },
      {
        name: 'session library',
        tone: 'teal',
        text: 'Redis-backed session state with distributed locks, so concurrent Lambda workloads stop tripping over each other.',
        stat: { value: '−35%', label: 'session failures, 15K–30K req/day' },
      },
      {
        name: 'kyc-klogger',
        tone: 'amber',
        text: 'Request and session instrumentation: latency, status codes, and session metadata, persisted even after the request context has ended.',
      },
    ],
    details: [
      'Rebuilt the routing and caching layer so we lean on third-party vendors 55% less. Together with retiring redundant infrastructure, that has saved $700K+ since April 2024.',
      'Own disaster recovery for TotalKYC: an active-passive setup across Mumbai and Hyderabad that serves 5M+ daily requests at 99.9%+ availability.',
      'Wrote maintenance-aware monitoring that checks traffic, latency, and errors against a seven-day baseline and pushes unhealthy dependencies down the priority list automatically, so degradations surface before they become incidents.',
      'Retired a dedicated EC2 deployment box for GitLab CI/CD that ships Lambda functions multi-region, multi-stage, and in parallel, with SAST built in.',
      'Reviewed 60+ pull requests and set up triage and debugging habits with junior and support engineers. Incidents that used to wait 3 days for triage now get it in 3–4 hours.',
    ],
  },
  {
    company: 'Karza (now acquired by Perfios)',
    title: 'Software Engineer I',
    location: 'Mumbai, IN (Remote)',
    date: 'Oct 2022 - Apr 2024',
    shortDesc: 'Built and looked after TotalKYC\'s core verification APIs, mostly chasing latency, throughput, and migrations that shouldn\'t break anything.',
    libraries: [
      {
        name: 'vendor-biller',
        tone: 'cobalt',
        text: 'A shared vendor-billing and invoicing service, picked up across multiple products.',
      },
    ],
    details: [
      'Moved a Lambda workflow onto Redis-backed Celery workers on Fargate. Session reuse, caching, and rate limits tripled throughput and let us drop an external vendor entirely.',
      'Brought P99 latency on legacy KYC APIs down from 8s to 3s.',
      'Led the Python 3.9 → 3.12 upgrade: 245 of 260 APIs containerized for cloud and on-prem, with zero production rollbacks.',
    ],
    metrics: [
      { value: '30+', label: 'APIs shipped in six months' },
      { value: '100+', label: 'production APIs maintained' },
    ],
  },
  {
    company: 'InTimeTec',
    title: 'Software Engineer',
    location: 'Jaipur, IN (Onsite)',
    date: 'Mar 2021 - Sep 2022',
    shortDesc: 'Worked with RedBuilt, a US-based client, taking their legacy .NET desktop application to the web.',
    details: [
      'Rebuilt the application as a 9-module Angular web platform; operational throughput tripled.',
      'Owned delivery end to end for a 4-engineer pod, including client communication with RedBuilt.',
      'Added CI/CD and automated testing along the way: deployment cycles got 44% shorter and test coverage rose 54%.',
    ],
    metrics: [
      { value: '9', label: 'modules moved to the web' },
      { value: '3×', label: 'operational throughput' },
    ],
  }
];

export const projects = [
  {
    name: 'Distributed Quota-Metering Engine',
    url: 'https://github.com/Arihant416/quota-meter',
    flagship: true,
    problem: 'Usage limits drift when concurrent requests retry, batch, or fail midway.',
    solution: 'A per-organization, per-feature quota service where one Redis Lua script validates, deduplicates, deducts, and records denials atomically, with all-or-nothing batches, idempotent refunds, and cron-free monthly resets.',
    metrics: [
      { value: '10K', label: 'simulated consume requests' },
      { value: '0', label: 'over-serving in load tests' },
      { value: '1x', label: 'charge for same-key retries' },
    ],
  },
  {
    name: 'GitDev Finder',
    url: 'https://gitdevfinder416.netlify.app/',
    problem: 'Finding developers by language and recent activity takes repetitive manual filtering.',
    solution: 'Built a searchable view that brings profile and repository signals into one place.',
  },
];
