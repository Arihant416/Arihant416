# Portfolio Roadmap

## Source of truth

The **Professional Profile — Master Reference** (claude.ai project "My Personal Portfolio Website") is the only source for public facts and deliberate exclusions. `resume/` and `tmp/` in this folder are stale and are **not** sources of truth.

## Current Positioning

"I build the shared infrastructure that 200+ production APIs run on."
Senior Backend Engineer · Distributed Systems & Platform Infrastructure · Python · AWS.

## Public content rules

- Do not mention sources, crawling, scraping, WAF/anti-bot, or upstream logins anywhere on the site.
- Named systems allowed publicly: `shared-utilities`, `proxy-service`, `vendor-biller`. TotalKYC may be named as the core product.
- Never double-count: $700K+ is cumulative since Apr 2024 (not annualized) and is a composite figure.
- Excluded: Kubernetes, MySQL, AI tooling as skills, the 40s→6s PDF-generation latency claim, and the crawler-migration story.
- C++ and PostgreSQL are listed in portfolio skills by owner decision (2026-09-20), even though the master reference keeps them off the resume.

## Approved Public Metrics

| Role | Metric |
| --- | --- |
| Senior (Apr 2024 –) | $700K+ cumulative savings since Apr 2024; 55% vendor dependency cut |
| Senior | 5M+ daily requests at 99.9%+ availability (active-passive DR, Mumbai/Hyderabad) |
| Senior | shared-utilities across 200+ production APIs; 300–400 duplicated lines removed |
| Senior | proxy-service across 120+ APIs; 21% of failing requests recovered; 12–20 manual interventions/week removed |
| Senior | 35% fewer session-related failures across 15K–30K daily requests |
| Senior | 60+ PRs reviewed; triage SLA 3 days → 3–4 hours |
| SE-I at Karza (Oct 2022 – Apr 2024) | 30+ APIs shipped in six months; 100+ maintained; P99 8s → 3s; 245 of 260 APIs containerized; Celery/Fargate throughput 3× |
| InTimeTec (Mar 2021 – Sep 2022) | RedBuilt (US client): 9 modules .NET → Angular; 3× throughput; −44% deployment cycles; +54% test coverage |

## Do Not Change Without Approval

- Testimonial quote text
- Factual job titles
- Public metrics (must match the Master Reference)
- Backend-console inspired visual identity
- Framer Motion architecture
- Vite tooling
- Vercel deployment config

## Pending

- Phase 3: Systems case studies with diagrams, quota-meter flagship expansion, Earlier projects list
