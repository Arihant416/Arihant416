# Arihant Jain

Senior Backend Engineer focused on production API systems, source orchestration, Redis-backed reliability guardrails, AWS/Fargate worker pipelines, and cost-aware backend architecture.

---

## Tech Stack

- **Languages:** Python (FastAPI), Node.js, TypeScript
- **Infrastructure:** AWS (Fargate, ECS, SQS), Docker, Linux
- **Databases & Messaging:** Redis, Kafka, Celery, MongoDB, RabbitMQ

---

## Engineering Impact

- **Scale:** Operate backend systems handling **5M+ daily API requests** across critical identity and KYC flows.
- **Latency:** Reduced P99 latency by **~70% across multiple APIs** by reworking high-volume response paths and worker execution.
- **Ownership:** Designed **30 APIs from scratch** and maintained/operated **200+ APIs** across TotalKYC, Data Science, and VideoKYC integrations.
- **Cost:** Contributed to **$700K+ annualized savings** through in-house serving improvements, source orchestration, and vendor dependency reduction.
- **Reliability:** Owned DR testing, deployment, monitoring, incident handling, and CI/CD setup for regional API paths.

---

## Projects

### [Distributed Quota-Metering Engine](https://github.com/Arihant416/quota-meter)

A backend service for enforcing monthly API usage limits in multi-tenant products without losing accuracy under concurrent traffic.

- **Race Conditions:** Keeps token deduction and idempotency validation atomic with **Redis Lua scripts**.
- **Failures & Retries:** Uses a deduct-then-refund flow so quota state can recover when upstream requests fail mid-flight.

### [GitDev Finder](https://gitdevfinder416.netlify.app/)

A developer discovery tool for filtering public repository/profile data by language stack and activity, useful for faster engineering research and candidate discovery.

### [Systems Portfolio](https://arihant416.vercel.app)

A focused React and Tailwind portfolio built to communicate backend impact, production metrics, project history, and direct hiring/freelance contact paths.

---

## Connect

- **Profiles:** [LinkedIn](https://linkedin.com/in/arihant416) | [Portfolio](https://arihant416.vercel.app) | [Technical Blog](https://arihant.hashnode.dev)
- **Email:** <arihantjain416@gmail.com>
