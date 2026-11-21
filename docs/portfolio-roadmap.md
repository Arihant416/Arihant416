# Portfolio Roadmap

## Source of truth

1. What Arihant decides.
2. The resume: `github.com/Arihant416/resume` → `resume.tex` (live at arihant416.github.io/resume/index.pdf).

The site, this README and the page metadata must say the same thing, in the same numbers. When the resume and the site disagree, the resume wins until Arihant says otherwise.

## Positioning

"I build the shared infrastructure that 200+ production APIs run on."
Senior Backend Engineer · Distributed Systems & Platform Infrastructure · Python · AWS.

## Public content rules

- Every number on the site traces to the resume. No invented or rounded-up figures.
- Plain verbs, result first, then how. No inflation: "designed and rolled out", "designed and set up … built for a 40–45 minute switchover", never "owned" for work that was not.
- Internal system names: only `shared-utilities` and `vendor-biller`. Everything else is described by what it does.
- Skills list only what can be defended in a deep-dive interview.
- Testimonials are verbatim LinkedIn quotes and are never edited.

## Published metrics

| Role | Metric |
| --- | --- |
| Senior SWE, Perfios (Apr 2024 –) | Third-party vendor spend −55%; $700K+ cumulative savings since Apr 2024 (with retired infrastructure) |
| Senior | Incidents 12–13 → 2–3 a week; triage SLA 3 days → 3–4 hours; 60+ pull requests reviewed |
| Senior | `shared-utilities` across 200+ production APIs; 300–400 duplicated lines removed |
| Senior | Health-aware routing for 120+ APIs: first-attempt success 60–70% → 90–95% |
| Senior | Redis session library with distributed locks: −35% session failures, 15K–30K requests a day recovered |
| Senior | Active-passive disaster recovery, Mumbai active and Hyderabad passive: 5M+ requests a day at 99.9%+ availability, 40–45 minute switchover as the design target |
| SE-I, Karza → Perfios (Oct 2022 – Apr 2024) | Celery workers on Fargate: 3× throughput; Python 3.9 → 3.12 across 260 APIs, 245 containerized, zero rollbacks; P99 8s → 3s; `vendor-biller` +25% billing accuracy; 30+ APIs in six months; 100+ APIs maintained across 300+ data integrations |
| InTimeTec (Intern from Mar 2021; Software Engineer Aug 2021 – Sep 2022) | RedBuilt (US client), front-end then the whole project: .NET desktop → responsive Angular web app, a handful of users → ~70, plus 6 new modules; team grew from one engineer to four; −44% deployment cycle time; +54% test coverage |
| Project: quota-meter | 1,000 requests across 50 concurrent workers and 3 service instances, zero over-served; same-key retries charged once |

## Do not change without approval

Testimonial quote text · job titles · the visual identity (display type over a quiet body, colour rooms, light and dark themes) · Framer Motion architecture · Vite tooling · Vercel config · reduced-motion support.

## Plan

- Iteration 1, facts and structure: done.
- Iteration 2, readability, UI and the "systems notebook" redesign: done, in review. The recommendations card layout still needs a mock before it changes.
- Iteration 3, depth: prerender `/` for non-JS readers; case studies (quota-meter first, then the shared framework); retire GitDev Finder after the first case study; mobile Lighthouse pass (LCP under 2.5s).
