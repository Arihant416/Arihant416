# Arihant Jain

**Senior Backend Engineer · Distributed Systems & Platform Infrastructure · Python · AWS**

I build the shared infrastructure that 200+ production APIs run on. I work at Perfios, where I scale and maintain the core APIs of TotalKYC, an identity-verification platform.

---

## What that looks like

- **Cost:** cut third-party vendor dependency by **55%** by rebuilding the routing and caching layer, for **$700K+ in cumulative savings** since Apr 2024.
- **Reliability:** own active-passive disaster recovery across Mumbai and Hyderabad, supporting **5M+ daily requests at 99.9%+ availability**.
- **Platform:** built **shared-utilities** (secrets access, schema validation, request configuration) and rolled it out across **200+ production APIs**. Changes that once required redeploying every API now ship as one package update.
- **Routing:** built **proxy-service** for **120+ APIs** with health-aware selection and automatic cooldown recovery. It recovers **21%** of requests that would otherwise fail.
- **Coordination:** built a Redis-backed session library with distributed locks across concurrent Lambda workloads, cutting session-related failures by **35%**.

---

## Tech

- **Languages & backend:** Python, FastAPI, Pydantic, Celery, JavaScript, Node.js, SQL
- **Data & messaging:** Redis, MongoDB, Kafka, RabbitMQ, Amazon SQS
- **Cloud & delivery:** AWS Lambda, ECS/Fargate, EC2, S3, EventBridge, CloudFormation, Docker, GitLab CI/CD

---

## Project

### [Distributed Quota-Metering Engine](https://github.com/Arihant416/quota-meter)

A per-organization, per-feature quota service. A single Redis Lua script handles validation, idempotency, deduction, and denial recording atomically, with all-or-nothing batches, idempotent refunds, and cron-free monthly resets. It was validated with 10,000 simulated requests and zero over-serving.

---

## Elsewhere

[Portfolio](https://arihant416.vercel.app) · [LinkedIn](https://linkedin.com/in/arihant416) · [arihantjain416@gmail.com](mailto:arihantjain416@gmail.com)
