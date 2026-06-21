# Arihant Jain

Senior Software Engineer specializing in backend infrastructure, distributed systems, and database optimization.

---

## 🛠️ Tech Stack

- **Languages:** Python (FastAPI), Node.js, TypeScript
- **Infrastructure:** AWS (Fargate, ECS, SQS), Docker, Linux
- **Databases & Messaging:** Redis, Kafka, Celery, MongoDB, RabbitMQ

---

## 📈 Engineering Impact

- **Scale:** Engineered microservices handling **5M+ daily API requests** while maintaining **99.99% uptime**.
- **Cost Reduction:** Built an in-house identity routing pipeline at Perfios, saving **₹6.5 Crore ($780K+ USD) annually** by cutting third-party vendor dependencies.
- **Latency Optimization:** Re-architected legacy processing engines, dropping P99 latencies by **85% (from 40s down to 6s)** using distributed worker pools.
- **Reliability:** Set up Active-Passive multi-region disaster recovery for international banking connections.

---

## 🚀 Projects

### ⚡ [Distributed Quota-Metering Engine](https://github.com/Arihant416/quota-meter)

A system designed to enforce monthly API usage limits for multi-tenant applications without breaking under heavy traffic.

- **Race Conditions:** Handled potential data races by executing token deductions and validation checks atomically using **Redis Lua scripts**.
- **Failures & Retries:** Implemented a deduct-then-refund flow with custom transactional loops to ensure accurate tracking even if an upstream network request drops mid-way.

### 🔍 [GitDev Finder](https://gitdevfinder416.netlify.app/)

A tool to find active open-source developers by filtering public repositories based on language stacks and contribution data.

### 🌐 [Systems Portfolio](https://arihant416.vercel.app)

A clean, minimal portfolio built with React and Tailwind CSS to display my production metrics and project history.

---

## 🤝 Connect

- **Profiles:** [LinkedIn](https://linkedin.com/in/arihant416) | [Portfolio](https://arihant416.vercel.app) | [Technical Blog](https://arihant.hashnode.dev)
- **Email:** <arihantjain416@gmail.com>
