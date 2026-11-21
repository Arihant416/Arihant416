// Skills, decided 2026-11-21: 28 tools, the same 28 as README.md. Check the Skills
// rules in CLAUDE.md before adding anything.
// - primary: used in the production work on this page; rendered as a larger tile.
// - concept: no logo (a practice, not a product); listed as text under the cloud.
// - low: a logo tile on larger screens only; on phones it moves to the chips under the
//   cloud, so all 28 stay visible at every width.
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
  { name: 'JavaScript', low: true },
  { name: 'C++', low: true },
  { name: 'MongoDB' },
  { name: 'MySQL' },
  { name: 'RabbitMQ' },
  { name: 'Amazon SQS' },
  { name: 'S3' },
  { name: 'CloudFormation', low: true },
  { name: 'AWS CloudWatch' },
  { name: 'Prometheus', low: true },
  { name: 'Grafana', low: true },
  { name: 'Pytest' },
  { name: 'Playwright', low: true },
  { name: 'Selenium', low: true },
  { name: 'SQL', concept: true },
  { name: 'REST APIs', concept: true },
  { name: 'Microservices', concept: true },
  { name: 'Event-driven architecture', concept: true },
  { name: 'Security', concept: true },
];

// All 28 names, for anything that needs the flat list.
export const allTools = tools.map((tool) => tool.name);
