# Arihant Jain

Senior Backend Engineer building reliable fintech and KYC systems at scale, with a focus on API performance, recovery, modernization, and operating cost.

---

## Tech Stack

- **Backend:** Python, FastAPI, REST APIs, Node.js
- **Cloud:** AWS Lambda, ECS/Fargate, Docker
- **Data & Background Work:** Redis, Celery, MongoDB, MySQL
- **Delivery & Quality:** GitLab CI/CD, Pytest, Playwright, monitoring

---

## Engineering Impact

- **Scale:** Operate backend systems handling **5M+ daily API requests** across critical identity and KYC flows.
- **Latency:** Reduced P99 latency from **8s to 5s** on re-engineered legacy KYC paths, alongside broader latency work across production APIs.
- **Ownership:** Designed **30+ APIs from scratch** and maintained/operated **200+ APIs** across TotalKYC, Data Science, and VideoKYC integrations.
- **Cost:** Delivered **$700K+ in cumulative savings since April 2024** through caching, higher in-house serving, and lower vendor use.
- **Reliability:** Owned disaster-recovery testing, deployment, monitoring, incident handling, and CI/CD for regional APIs.

---

## Projects

### [Distributed Quota-Metering Engine](https://github.com/Arihant416/quota-meter)

A backend service for enforcing monthly API usage limits in multi-tenant products without losing accuracy under concurrent traffic.

- **Race Conditions:** Uses **Redis Lua scripts** to keep quota checks and deductions atomic.
- **Failures & Retries:** Uses a deduct-then-refund flow so quota state can recover when upstream requests fail mid-flight.

### [GitDev Finder](https://gitdevfinder416.netlify.app/)

A developer discovery tool for filtering public repository/profile data by language stack and activity, useful for faster engineering research and candidate discovery.

### [Systems Portfolio](https://arihant416.vercel.app)

A focused React and Tailwind portfolio built to communicate backend impact, production metrics, project history, and direct hiring/freelance contact paths.

---

## Connect

- **Profiles:** [LinkedIn](https://linkedin.com/in/arihant416) | [Portfolio](https://arihant416.vercel.app) | [Technical Blog](https://arihant.hashnode.dev)
- **Email:** <arihantjain416@gmail.com>
