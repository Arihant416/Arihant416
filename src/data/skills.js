// Skills, decided 2026-11-21: 28 tools, the same 28 as README.md. Check the Skills
// rules in CLAUDE.md before adding anything.
// - primary: used in the production work on this page; rendered as a larger tile.
// - concept: no logo (a practice, not a product); listed as text under the cloud.
export const tools = [
  { name: 'Python', primary: true },
  { name: 'Redis', primary: true },
  { name: 'Celery', primary: true },
  { name: 'ECS / Fargate', primary: true },
  { name: 'AWS Lambda', primary: true },
  { name: 'Docker', primary: true },
  { name: 'GitLab CI/CD', primary: true },
  { name: 'FastAPI' },
  { name: 'Node.js' },
  { name: 'JavaScript' },
  { name: 'C++' },
  { name: 'MongoDB' },
  { name: 'MySQL' },
  { name: 'RabbitMQ' },
  { name: 'Amazon SQS' },
  { name: 'S3' },
  { name: 'CloudFormation' },
  { name: 'AWS CloudWatch' },
  { name: 'Prometheus' },
  { name: 'Grafana' },
  { name: 'Pytest' },
  { name: 'Playwright' },
  { name: 'Selenium' },
  { name: 'SQL', concept: true },
  { name: 'REST APIs', concept: true },
  { name: 'Microservices', concept: true },
  { name: 'Event-driven architecture', concept: true },
  { name: 'Security', concept: true },
];

// All 28 names, for anything that needs the flat list.
export const allTools = tools.map((tool) => tool.name);
