export const workExperience = [
  {
    company: 'Perfios',
    title: 'Senior Software Engineer',
    location: 'New Delhi, IN (Hybrid)',
    date: 'Apr 2024 - Present',
    current: true,
    summary: 'I lead backend and platform work across identity and KYC systems where reliability, cost, and operational clarity have direct business consequences. My scope spans regional recovery, asynchronous processing, source orchestration, service modernization, delivery tooling, and production ownership across API suites serving more than five million requests a day.',
    selectedOutcome: 'Since moving into the senior role, caching, source-strengthening, and architecture initiatives I led have delivered more than $700K in cumulative savings.',
    outcomes: [
      { value: '5M+', label: 'daily requests supported' },
      { value: '$700K+', label: 'cumulative savings since Apr 2024' },
      { value: '245 / 260', label: 'APIs containerized' },
    ],
    chips: ['Python', 'AWS', 'Redis', 'Celery', 'Fargate', 'Playwright', 'CI/CD'],
  },
  {
    company: 'Karza Technologies',
    companyContext: 'Merged into Perfios',
    title: 'Software Engineer I',
    location: 'Mumbai, IN (Remote)',
    date: 'Oct 2022 - Apr 2024',
    summary: 'This is where backend engineering became my primary craft. I designed more than 30 production APIs and helped operate a much wider KYC estate, working across data ingestion, integrations, performance, billing accuracy, and high-volume request paths.',
    selectedOutcome: 'I moved a session-sensitive integration from concurrent Lambda execution to a controlled Redis-backed Celery worker on Fargate. Serializing the critical session path tripled throughput, enabled vendor retirement, and saved more than $230K over two years.',
    outcomes: [
      { value: '30+', label: 'production APIs designed' },
      { value: '200+', label: 'APIs maintained and operated' },
      { value: '3x', label: 'throughput on a constrained workflow' },
    ],
    chips: ['FastAPI', 'Redis', 'Celery', 'AWS Lambda', 'Fargate', 'MongoDB'],
  },
  {
    company: 'InTimeTec',
    title: 'Software Engineer',
    location: 'Jaipur, IN',
    date: 'Mar 2021 - Sep 2022',
    summary: 'I began in product and web engineering, taking a legacy desktop workflow into a modular web platform. The work gave me early client ownership and a practical view of how interface decisions, release quality, and backend behavior meet in a real product.',
    selectedOutcome: 'A request-processing problem became the turning point: securing and making an early API thread-safe helped it grow from roughly 20 to 50 supported users, and drew me deeper into debugging, scale, and backend reliability.',
    outcomes: [
      { value: '0 → 1', label: 'enterprise web migration' },
      { value: '9', label: 'product modules delivered' },
      { value: '20 → 50', label: 'users supported by an early API' },
    ],
    chips: ['Angular', 'React', 'JavaScript', 'API security', 'CI/CD', 'Testing'],
  },
];

export const projects = [
  {
    name: 'Distributed Quota-Metering Engine',
    url: 'https://github.com/Arihant416/quota-meter',
    kind: 'Independent systems project',
    description: 'A prepaid usage-metering service for multi-tenant APIs, built around atomicity rather than optimistic accounting. FastAPI handles the contract, Redis Lua performs concurrency-safe quota deduction and refund, and MongoDB persists plans, balances, and idempotency records.',
    outcome: 'Load-tested with 10,000 simulated consume requests and zero over-serving; retries using the same idempotency key were charged once.',
    chips: ['FastAPI', 'Redis Lua', 'MongoDB', 'Docker Compose', 'Async Python'],
  },
  {
    name: 'GitDev Finder',
    url: 'https://gitdevfinder416.netlify.app/',
    kind: 'Earlier product build',
    description: 'A developer-discovery product that turns repository and profile data into searchable views by language and activity.',
    chips: ['React', 'Node.js', 'MongoDB', 'Netlify API'],
  },
  {
    name: 'FXFlow',
    url: null,
    kind: 'Archived product build',
    description: 'A lightweight currency utility focused on clear API-state handling, errors, and responsive browser interactions.',
    chips: ['JavaScript', 'REST APIs', 'HTML', 'CSS'],
  },
];
