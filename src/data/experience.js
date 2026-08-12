export const workExperience = [
  {
    company: 'Perfios',
    title: 'Senior Software Engineer',
    location: 'New Delhi, IN',
    date: 'Apr 2024 - Present',
    shortDesc: 'Own backend and platform work across TotalKYC, with a focus on keeping high-volume identity APIs reliable, fast, and cost-efficient.',
    details: [
      'Reduced P99 latency from 8s to 3s across several APIs, and from 40s to 6s for browser-driven flows.',
      'Migrated services from Python 3.9 to 3.12 stack by stack with zero production rollbacks.',
      'Built unified CI/CD for multi-region, multi-stage, and multi-function deployments, with parallel releases and SAST.',
    ],
    metrics: [
      { value: '5M+', label: 'daily requests supported' },
      { value: '$700K+', label: 'saved since Apr 2024' },
    ],
  },
  {
    company: 'Perfios',
    title: 'Software Engineer I',
    location: 'Mumbai, IN (Remote)',
    date: 'Oct 2022 - Apr 2024',
    shortDesc: 'Designed new KYC APIs and supported a large production suite while improving data ingestion, background processing, and cross-team delivery.',
    metrics: [
      { value: '30+', label: 'APIs designed' },
      { value: '200+', label: 'production APIs maintained' },
    ],
  },
  {
    company: 'InTimeTec',
    title: 'Software Engineer',
    location: 'Jaipur, IN',
    date: 'Mar 2021 - Sep 2022',
    shortDesc: 'Started in product engineering with a legacy desktop-to-web migration, then moved deeper into backend work through API security, debugging, and concurrency problems.',
    metrics: [
      { value: '0 → 1', label: 'legacy product migration' },
      { value: '20 → 50', label: 'users supported by an early API' },
    ],
  }
];

export const projects = [
  {
    name: 'Distributed Quota-Metering Engine',
    url: 'https://github.com/Arihant416/quota-meter', // Replace with real repo link if public
    flagship: true,
    problem: 'Usage limits can drift when concurrent requests retry or fail midway.',
    solution: 'Built a quota engine that keeps deductions, refunds, and same-key retries consistent under load.',
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
  {
    name: 'FXFlow',
    url: null,
    problem: 'Currency tools become confusing when rate requests are slow or fail.',
    solution: 'Built clear conversion flows with responsive calculations, loading states, and useful errors.',
  }
];
