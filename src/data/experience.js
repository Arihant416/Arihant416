// Every number here must trace to the metric register in CLAUDE.md.
// **text** marks a key figure; the Experience component renders it bold.
// Shape: employer { company, date, roles[] } → role { title, date, location,
// promotedFrom?, org?, summary, built?, outcomes?, metrics?, systemCards? }.
// `org` overrides the timeline's "company · location" line.
// Layout rules (Iteration 2 design): each fact appears once on the page.
// - systemCards: this role's `built` items render as the system cards, not in the timeline.
// - an outcome may be { placement: 'map', chip, caption }: SystemMap renders it, the timeline skips it.
// - stat.tone 'ok' marks a healthy figure (teal, always with its text label).
export const workExperience = [
  {
    company: 'Perfios (Karza Technologies)',
    date: 'Oct 2022 – Present',
    roles: [
      {
        title: 'Senior Software Engineer',
        date: 'Apr 2024 – Present',
        location: 'New Delhi, IN (Remote)',
        promotedFrom: 'Software Engineer I',
        summary: 'Scale and maintain the core APIs of TotalKYC, Perfios\' identity-verification platform, and build the shared infrastructure underneath them.',
        systemCards: true,
        built: [
          {
            name: 'shared-utilities',
            verb: 'designed and rolled out',
            tone: 'cobalt',
            text: 'One package for secrets access, schema validation and request config. It replaced 300–400 duplicated lines.',
            stat: { value: '1 package update', label: 'for a fleet-wide change, instead of a redeploy of every API' },
          },
          {
            name: 'health-aware routing',
            verb: 'built',
            tone: 'coral',
            text: 'Cooldowns across 120+ APIs replace random route selection.',
            stat: { value: '90–95%', label: 'first-attempt success, up from 60–70%', tone: 'ok' },
          },
          {
            name: 'session library',
            verb: 'built',
            tone: 'teal',
            text: 'Redis-backed session state with distributed locks, so concurrent Lambda runs stop racing each other.',
            stat: { value: '−35%', label: 'session failures', sub: '15K–30K requests a day recovered', tone: 'ok' },
          },
          {
            // Confirmed by Arihant 2026-11-21. No figure (no metric in the register), so
            // the row is story-only.
            name: 'deployment pipeline',
            verb: 'implemented',
            text: 'GitLab CI/CD replaced a dedicated EC2 deployment box: parallel, multi-stage pipelines that ship many functions across both regions, with SAST and vulnerability reports on every run.',
          },
        ],
        outcomes: [
          'Cut third-party vendor spend **55%** by rebuilding the routing and caching layer; with retired infrastructure, cumulative savings reached **$700K+** since Apr 2024.',
          'Brought incidents from **12–13 a week to 2–3** with trend-based monitoring.',
          {
            // Rendered by SystemMap (hero), not the timeline.
            placement: 'map',
            chip: 'built for a 40–45 min switchover (design target)',
            caption: 'I designed and set up active-passive disaster recovery between the two regions, with switchover via GitLab CI/CD.',
          },
          'Cut triage SLA from **3 days to 3–4 hours** by introducing triage practices for support engineers; reviewed 60+ pull requests.',
        ],
      },
      {
        title: 'Software Engineer I',
        date: 'Oct 2022 – Apr 2024',
        location: 'Mumbai, IN (Remote)',
        summary: 'Built and maintained TotalKYC\'s core verification APIs, with a focus on latency, throughput and safe migrations.',
        built: [
          {
            name: 'vendor-biller',
            tone: 'cobalt',
            text: 'A usage-tracking invoicing service that automated vendor billing across products.',
            stat: { value: '+25%', label: 'billing accuracy' },
          },
        ],
        outcomes: [
          'Rebuilt a Lambda-based integration as long-running Celery workers on AWS Fargate with Redis that keep state between jobs: **3× throughput**, and caching and rate limiting made an external vendor unnecessary.',
          'Led the Python 3.9 → 3.12 migration across **260 APIs**: 245 containerized for cloud and on-prem, **zero production rollbacks**.',
          'Cut P99 from **8s to 3s** on legacy client-facing KYC APIs by removing redundant ingestion steps and reworking each API\'s fetch strategy.',
        ],
        metrics: [
          { value: '30+', label: 'APIs shipped in six months' },
          { value: '100+', label: 'APIs maintained across 300+ data integrations' },
        ],
      },
    ],
  },
  {
    company: 'InTimeTec',
    date: 'Mar 2021 – Sep 2022',
    roles: [
      {
        title: 'Software Engineer',
        date: 'Aug 2021 – Sep 2022',
        location: 'Jaipur, IN (Onsite)',
        promotedFrom: 'Intern (Mar – Aug 2021)',
        org: 'InTimeTec · client RedBuilt (US) · Jaipur, IN (Onsite)',
        summary: "Led front-end, then the whole project, taking the client's desktop-only .NET tool to the web.",
        outcomes: [
          'Rebuilt the desktop tool as a responsive Angular web app: from a handful of on-site users to **~70**, plus 6 new modules.',
          'Led the project as the team grew from one engineer to four. Cut deployment cycles **44%** with CI/CD and raised test coverage **54%** with Karma/Jasmine.',
        ],
        metrics: [
          { value: '~70', label: 'users, up from a handful' },
          { value: '−44%', label: 'deployment cycle time' },
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: 'Distributed Quota-Metering Engine',
    url: 'https://github.com/Arihant416/quota-meter',
    flagship: true,
    problem: 'Usage limits drift when concurrent requests retry, batch, or fail midway.',
    solution: 'A per-organization, per-feature quota service where one Redis Lua script validates, deduplicates, deducts, and records denials atomically, with all-or-nothing batches, idempotent refunds, and cron-free monthly resets.',
    tested: 'Load-tested 1,000 requests across 50 concurrent workers and 3 service instances with zero over-serving.',
    // The decision path one Redis Lua script runs atomically. Wording decided by Arihant (2026-11-20).
    flow: {
      title: 'One atomic Redis Lua script',
      replay: 'Replay → return saved decision ✓',
      load: 'New request: load limit and usage',
      branches: ['Allow: deduct', 'Deny: usage unchanged'],
      save: 'Save the decision',
    },
    metrics: [
      { value: '1,000', label: 'requests' },
      { value: '50', label: 'concurrent workers' },
      { value: '0', label: 'over-served' },
      { value: '1×', label: 'charge on same-key retries' },
    ],
  },
  {
    name: 'GitDev Finder',
    url: 'https://gitdevfinder416.netlify.app/',
    problem: 'Finding developers by language and recent activity takes repetitive manual filtering.',
    solution: 'Built a searchable view that brings profile and repository signals into one place.',
  },
];
