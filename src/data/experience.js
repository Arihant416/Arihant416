export const workExperience = [
  {
    company: 'Perfios',
    title: 'Senior Software Engineer',
    location: 'New Delhi, IN',
    date: 'Apr 2024 – Present',
    shortDesc: 'Architecting high-frequency fintech platforms and multi-region disaster recovery lines handling 5M+ daily requests.',
    bullets: [
      'Architected an identity routing engine with adaptive rate-limiting and predictive fallback logic, eliminating a major external vendor dependency to save INR 6.5 Cr (~$780K USD) annually.',
      'Designed a multi-tier TTL Redis caching layer with fail-open socket fallback, cutting redundant API inquiries to save INR 22 Lakhs/month while ensuring onboarding SLA continuity.',
      'Overhauled a legacy rendering engine into a Playwright-based distributed worker cluster, slashing P99 processing latencies by 85% (40s → 6s) and lifting node uptime to 98%.',
      'Engineered multi-region disaster recovery failovers across Kenya, UAE, and India hubs—sustaining 5M+ daily API requests at 99.9% uptime.'
    ],
    chips: ['Python', 'FastAPI', 'Redis', 'AWS Fargate', 'Kafka', 'Playwright']
  },
  {
    company: 'Karza Technologies (Perfios)',
    title: 'Software Engineer I',
    location: 'Mumbai, IN (Remote)',
    date: 'Oct 2022 – Apr 2024',
    shortDesc: 'Scaled high-traffic ingestion endpoints to handle 1M+ daily transactions while wiping out ₹20L/month in external infrastructure overhead.',
    bullets: [
      'Built 100+ automated integration APIs extracting real-time assets from 300+ registries, scaling TotalKYC to handle 1M+ daily transactions.',
      'Re-engineered high-volume response paths to cut P99 latency by 30%, accelerating B2B client acquisition rates by 40%.',
      'Migrated distributed Celery worker pipelines onto AWS Fargate, eliminating INR 20 Lakhs/month in recurring vendor billing while reducing latency by 1.2s.',
      'Automated asynchronous accounting audits by 25% via event-driven webhooks and integrated automated VAPT security validation gates.'
    ],
    chips: ['Python', 'Celery', 'AWS ECS', 'Fargate', 'AWS SQS', 'Webhooks']
  },
  {
    company: 'InTimeTec',
    title: 'Software Engineer',
    location: 'Jaipur, IN',
    date: 'Mar 2021 – Sep 2022',
    shortDesc: 'Led a 0-to-1 migration of an enterprise desktop footprint into a modular web suite, boosting deployment speed and component code coverage.',
    bullets: [
      'Led the 0-to-1 engineering path for an enterprise desktop migration across 9 modules, tripling operational transaction throughput within 10 months.',
      'Slashed end-to-end continuous deployment release cycles by 44% by architecting clean, standardized CI/CD orchestration blueprints.',
      'Expanded core baseline component testing boundaries by 54% through the introduction of Karma and Jasmine regression suites.'
    ],
    chips: ['JavaScript', 'React', 'Angular', 'CI/CD', 'Karma', 'Jasmine']
  }
];

export const projects = [
  {
    name: 'Distributed Quota-Metering Engine',
    url: 'https://github.com/Arihant416/quota-meter', // Replace with real repo link if public
    description: 'A horizontally scalable, low-latency quota enforcement engine built to handle high-concurrency API tracking. Mitigates TOCTOU race conditions by executing token-bucket deduction and idempotency validation atomically inside single-shotted Redis Lua scripts.',
    chips: ['FastAPI', 'Redis Lua', 'MongoDB', 'Docker Compose', 'Asynchronous Python'],
  },
  {
    name: 'GitDev Finder',
    url: 'https://gitdevfinder416.netlify.app/',
    description: 'A discovery hub for open-source developers. Aggregates and filters active repositories based on developer language stacks, simplifying how engineers locate and contribute to global codebases.',
    chips: ['React', 'Node.js', 'MongoDB', 'Netlify API'],
  },
  {
    name: 'FXFlow',
    url: 'https://wild-iris-sing.glitch.me/',
    description: 'A lightweight financial utility delivering real-time currency calculations. Optimized for zero-dependency client performance, processing multi-currency exchange rates instantaneously via live API state integration.',
    chips: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
  }
];