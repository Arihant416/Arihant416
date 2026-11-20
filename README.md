# Arihant Jain

**Senior Backend Engineer · Distributed Systems & Platform Infrastructure · Python · AWS**

I build the shared infrastructure that 200+ production APIs run on. I work at Perfios, where I scale and maintain the core APIs of TotalKYC, an identity-verification platform.

---

## What that looks like

- **Cost:** cut third-party vendor spend **55%** by rebuilding the routing and caching layer; with retired infrastructure, cumulative savings reached **$700K+** since Apr 2024.
- **Reliability:** designed and set up active-passive disaster recovery across Mumbai and Hyderabad for a platform serving **5M+ daily requests at 99.9%+ availability**, built for a 40–45 minute region switchover.
- **Platform:** designed and rolled out **shared-utilities** (secrets access, schema validation, request configuration) across **200+ production APIs**. A fleet-wide change now ships as one package update instead of a redeploy of every API.
- **Routing:** built health-aware routing with cooldowns for **120+ APIs**, replacing random route selection and raising first-attempt success from **60–70% to 90–95%**.
- **Coordination:** built a Redis-backed session library with distributed locks for concurrent Lambda runs, cutting session failures by **35%** and recovering **15K–30K requests a day**.
- **Operations:** brought incidents from **12–13 a week to 2–3** with trend-based monitoring.

---

## Tech

- **Languages:** Python, JavaScript, SQL, C++
- **Backend & system design:** FastAPI, Node.js, Celery, REST APIs, event-driven architecture, microservices
- **Data & messaging:** Redis, MongoDB, MySQL, RabbitMQ, Amazon SQS
- **Cloud & infrastructure:** AWS Lambda, ECS/Fargate, S3, CloudFormation, Docker, GitLab CI/CD
- **Observability, security & testing:** Prometheus, Grafana, AWS CloudWatch, Pytest, Playwright, Selenium, SAST, VAPT

---

## Project

### [Distributed Quota-Metering Engine](https://github.com/Arihant416/quota-meter)

A per-organization, per-feature quota service. A single Redis Lua script validates, deduplicates, deducts, and records denials atomically, with all-or-nothing batches, idempotent refunds, and cron-free monthly resets. Load-tested 1,000 requests across 50 concurrent workers and 3 service instances with zero over-serving; same-key retries are charged once.

---

## Elsewhere

[Portfolio](https://arihant416.vercel.app) · [LinkedIn](https://linkedin.com/in/arihant416) · [arihantjain416@gmail.com](mailto:arihantjain416@gmail.com)
