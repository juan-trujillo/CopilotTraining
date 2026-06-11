# Draft Plan: GitHub Copilot & Agentic Development in the SDLC

*Talking points, sources, and general structure for a 45-minute session*
*Audience: Product Owners and Project Managers (non-technical)*

---

## At a Glance

| Field | Value |
|-------|-------|
| **Duration** | 45 minutes |
| **Audience** | Product Owners, Project Managers (non-technical) |
| **Section** | Executive Talks |
| **Core Questions Answered** | Why should my team use this? What should we encourage? How do I measure value? |
| **Tone** | Accessible, evidence-based, strategy-focused — no code required |

---

## The Four Questions This Talk Answers

1. **"I don't know why my team should use this."** → Business case with real research data
2. **"Why should I *encourage* my team to take this?"** → Competitive pressure, team health, delivery acceleration
3. **"What features do we want to encourage?"** → Practical Copilot capabilities mapped to the delivery lifecycle
4. **"How do I measure the value this is adding to my teams?"** → Metrics framework using GitHub's own tools + DORA

---

## Proposed Title Options

- *From Stories to Shipped: GitHub Copilot and the PM's SDLC Advantage*
- *The AI-Augmented Sprint: What Product Owners Need to Know About GitHub Copilot*
- *Your Team's New Teammate: GitHub Copilot Across the Delivery Lifecycle*

**Recommended:** *Your Team's New Teammate: GitHub Copilot Across the Delivery Lifecycle*

---

## General Structure (45 Minutes)

```
SEGMENT                              DURATION   CUMULATIVE
─────────────────────────────────────────────────────────────
1. The Landscape Has Changed         5 min      0:05
2. The Business Case — Why Bother?   10 min     0:15
3. Copilot Across the SDLC          10 min     0:25
4. Features to Encourage             8 min      0:33
5. Measuring the Value               8 min      0:41
6. The Human in the Loop             4 min      0:45
─────────────────────────────────────────────────────────────
```

---

## Segment 1 — The Landscape Has Changed (5 min)

### Core Message
AI-assisted development is no longer experimental. It is the new standard of practice. Teams that don't adopt it will fall behind — not because AI replaces developers, but because AI-equipped developers deliver faster with fewer errors.

### Talking Points

- **The shift is already happening.** GitHub's Octoverse 2025 reports that **80% of new developers** joining GitHub adopt Copilot in their first week, **50% of open-source projects** have at least one Copilot-using maintainer, and the Coding Agent opened **1M+ pull requests** in its first 4 months — this is mainstream, not emerging tech.
- **What is GitHub Copilot, really?** Not just a spell-checker for code. It is an AI system that works alongside developers — suggesting code, reviewing pull requests, writing tests, and even independently picking up and completing tasks from a backlog.
- **What is "Agentic" development?** The next evolution: instead of just suggesting the next line of code, AI agents can be *assigned* a task from your GitHub issues and autonomously write, test, and propose a solution — like having an asynchronous team member who works while others sleep.
- **The reframe for PMs and POs:** You don't need to understand how the AI works. You need to understand what it *delivers* — and how to create the conditions where your team uses it well.

### Framing Metaphor
> "Think of GitHub Copilot not as a tool your developers use, but as a new team member who's extremely fast, never tired, always following your style guidelines, and needs good instructions to do their best work. Your job as PM or PO? Give that team member clear stories with clear acceptance criteria."

---

## Segment 2 — The Business Case: Why Bother? (10 min)

### Core Message
The productivity and quality data is real. Teams using Copilot ship more, ship faster, and with fewer bugs. For PMs and POs, this means predictable velocity, shorter cycles, and more time for your team to work on what matters.

### Key Statistics & Evidence

> **Note (2026-06-11 refresh):** Slide 6 of the deck now uses 2025-2026 first-party evidence (GitHub + Microsoft Research) instead of the 2024 stats. The table below mirrors what the audience sees on the slide.

#### Productivity & Throughput Evidence (2025-2026)

| Study / Source | Finding | Source |
|---|---|---|
| **GitHub Octoverse 2025** (platform telemetry, 180M+ devs) | **1M+ pull requests** opened by Copilot Coding Agent in 4 months on established projects | [Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/) |
| **GitHub Octoverse 2025** | **+23% YoY** PR throughput (43.2M PRs merged/month avg); **986M commits** in 2025 | [Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/) |
| **GitHub Code Review Study** (mid-2025, in-depth interviews) | **72.6%** of Copilot code review users report **improved effectiveness**; ~33% reduction in PR back-and-forth | [GitHub Blog](https://github.blog/ai-and-ml/generative-ai/code-review-in-the-age-of-ai-why-developers-will-always-own-the-merge-button/) |
| **Echoes of AI** (Borg et al., July 2025) — N=151 RCT | **30.7% median time reduction** on dev tasks with Copilot+Cursor; **no maintainability harm** in Phase 2 | [arXiv:2507.00788](https://arxiv.org/abs/2507.00788) |
| **Microsoft Research — SPACE of AI** (Aug 2025, N>500) | Broad efficiency and satisfaction gains; benefits scale with task routineness, not raw seniority | [arXiv:2508.00178](https://arxiv.org/abs/2508.00178) |

#### Counter-Evidence & Caveats (Use This for Honest Framing)

| Study | Finding | Source |
|---|---|---|
| **METR — Counter-Evidence RCT** (July 2025) | Senior OSS devs were **19% slower** with Cursor + Claude on familiar codebases — even though they *believed* they were 20% faster | [arXiv:2507.09089](https://arxiv.org/abs/2507.09089) |
| **NAV IT Longitudinal** (Stray et al., Sept 2025) | **No statistically significant** change in commit activity for Copilot users over 2 years (note: commit count is the wrong metric) | [arXiv:2509.20353](https://arxiv.org/abs/2509.20353) |
| **Tomaz et al. — Agile Teams** (13 months, Feb 2026) | Performance and Efficiency rose; commit/story-point Activity stayed flat — *value density* up, not raw volume | [arXiv:2602.13766](https://arxiv.org/abs/2602.13766) |
| **AgenticFlict — Merge Conflicts** (April 2026) | **27.67%** of agentic PRs have at least one merge conflict — hidden integration overhead | [arXiv:2604.03551](https://arxiv.org/abs/2604.03551) |
| **MS Research — Human Oversight** (June 2026) | Identifies four hidden "oversight tax" workstreams that erode raw output gains | [arXiv:2606.05391](https://arxiv.org/abs/2606.05391) |

#### Agentic-Specific Evidence

| Study | Finding | Source |
|---|---|---|
| **GitHub Octoverse 2025** | Coding Agent rolled out on **established** projects (high stars, size, age) — not throwaways | [Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/) |
| **Watanabe et al.** (Sept 2025) | **83.8%** of Claude Code agentic PRs accepted; **54.9%** merged with no human modification — refactor/docs/tests dominate | [arXiv:2509.14745](https://arxiv.org/abs/2509.14745) |
| **GitHub Coding Agent Launch** (May 2025) | Carvana, EY (2,000 devs), Avanade enterprise rollouts with executive testimony | [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-meet-the-new-coding-agent/) |
| **GitHub Copilot App / Build 2026** (June 2026) | GitHub commits doubled YoY to **1.4B/month**; agentic mode mainstream | [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) |

#### Developer Experience
- Microsoft SPACE-of-AI: efficiency and satisfaction up; **collaboration metrics flat** — AI doesn't (yet) measurably help team-level coordination
- The clearest gains are on **routine tasks** for **less-familiar** code — invest in onboarding, docs, and tests first
- Junior and mid-level developers see the largest gains (consistent across multiple studies); senior devs on their own mature code are the population most at risk of *slowdown*

#### What This Means for PMs/POs
- **Faster sprint completion** for routine work → more predictable release cadence
- **Fewer blockers from boilerplate work** → developers freed for complex, creative tasks
- **Reduced bug escape rates** through automated review → fewer hot-fixes derailing planning
- **Better onboarding velocity** → new team members contribute faster
- **Don't measure success in commit volume** — the value-density studies (Tomaz, NAV IT, SPACE-of-AI) all show output volume can stay flat while delivered value rises

### Talking Points

- The data comes from a mix of GitHub's first-party platform telemetry, **Microsoft Research published studies**, and independent peer-reviewed RCTs — not vendor marketing
- Gains compound: better quality code → fewer production incidents → fewer unplanned emergency sprints
- The cost of *not* adopting: GitHub's Octoverse 2025 platform-wide PR throughput is **+23% YoY**; teams not on board are increasingly the outliers
- Frame this as a force multiplier, not a replacement: your same team delivers more value in the same time
- **Be honest about the caveats:** the METR study is the most-cited counter-evidence in 2025 industry discussion. Acknowledge it openly — it strengthens credibility and explains why measurement matters

### PO/PM Pain Points Directly Addressed
| Pain Point | How Copilot Helps |
|------------|-------------------|
| Story-to-code friction | AI drafts boilerplate; devs start real logic faster |
| Sprint predictability | Faster task completion means fewer carry-overs |
| Tech debt blocking features | Copilot specializes in refactoring and debt reduction |
| Onboarding new devs | Copilot acts as a knowledgeable pair-programmer for new hires |
| Review bottlenecks | Automated code review reduces dependency on senior reviewers |

---

## Segment 3 — Copilot Across the SDLC (10 min)

### Core Message
Copilot isn't just useful during coding. It touches every phase of your delivery pipeline — and understanding where it helps will make you a better product owner and project manager.

### SDLC Phase Walkthrough

#### 📋 Requirements & Planning
- **For POs:** Copilot Chat can help developers turn your user stories into well-structured technical tasks, quickly surfacing implementation questions *before* development starts (fewer mid-sprint surprises)
- Developers can ask Copilot to clarify ambiguous acceptance criteria, reducing back-and-forth
- AI can flag missing edge cases in user stories — acting as an always-on requirements reviewer

#### 💻 Development
- Code generation: developers describe what they want, Copilot drafts the implementation
- Context-aware suggestions that follow your project's existing patterns and conventions
- **The Coding Agent:** Assign a GitHub Issue directly to Copilot → it creates a branch, writes the code, runs tests, and opens a pull request for human review. This is the "agentic" difference — autonomous task completion, not just suggestions.

#### 🔍 Code Review
- GitHub Copilot Code Review automatically reviews every pull request: security vulnerabilities, performance issues, test coverage gaps, and consistency with standards
- Average PR review time drops from **3+ days** (waiting for a senior reviewer) to same-day
- Frees senior developers from review bottlenecks → reduces sprint delays

#### 🧪 Testing
- Copilot automatically generates unit tests, integration tests, and edge case scenarios
- Teams report significant increases in test coverage without additional testing effort
- Catches bugs before they reach QA, reducing sprint disruptions

#### 🚀 Deployment & Maintenance
- Copilot assists with writing deployment documentation, changelogs, and runbooks
- Autonomous agents can triage issues opened by users — categorizing, labeling, assigning, and drafting initial investigation
- Dependency updates and security patches: Copilot identifies and drafts fixes for known vulnerabilities

### The Agentic SDLC Flywheel
```
PO writes clear story
      ↓
Copilot Agent picks it up, codes, tests, opens PR
      ↓
Copilot Code Review catches issues automatically
      ↓
Developer reviews and merges
      ↓
Copilot documents the change
      ↓
PO validates acceptance criteria → Done
```
> "The stories you write today could become code tomorrow — without a developer touching it for the mechanical parts. What remains human is judgment: design, product decisions, and quality validation."

---

## Segment 4 — Features to Encourage (8 min)

### Core Message
Not all Copilot features are equal for every team. Here are the highest-impact capabilities PMs and POs should actively promote — and what good adoption looks like.

### Feature Tier List for PM/PO-Driven Teams

#### 🏆 Tier 1: Immediate Value, Encourage From Day One
| Feature | What It Does | PM/PO Benefit |
|---------|-------------|---------------|
| **Copilot Chat (IDE & GitHub.com)** | Ask questions, get explanations, draft code, brainstorm | Developers get unblocked faster; fewer "quick questions" interruptions |
| **Copilot Code Review** | Automatic PR review for quality, security, and consistency | Faster PR cycles; fewer escaped bugs derailing sprints |
| **Copilot for CLI** | Terminal-based assistance for DevOps tasks | Reduces infrastructure bottlenecks |

#### 🥈 Tier 2: High Value, Introduce After Initial Adoption (30–60 days in)
| Feature | What It Does | PM/PO Benefit |
|---------|-------------|---------------|
| **Copilot Coding Agent** | Assign GitHub Issues to Copilot; it codes and opens a PR | POs can hand off low-complexity tasks directly; reduces developer context-switching |
| **Custom Instructions** | Team-wide coding standards baked into Copilot behavior | Consistent quality across all team members; less review overhead |

#### 🥉 Tier 3: Power User Features (60–90 days in)
| Feature | What It Does | PM/PO Benefit |
|---------|-------------|---------------|
| **MCP Integrations** | Connect Copilot to external tools (Jira, Confluence, your systems) | Copilot can pull context from your PM tools directly |
| **Multi-Agent Workflows** | Multiple AI agents collaborating on a task | Complex features developed faster with coordinated agents |

### What Good Adoption Looks Like
- Developers using Copilot Chat actively (not just for autocomplete)
- PRs regularly include Copilot code review comments that are addressed
- At least one Coding Agent task completed per sprint
- New team members onboarding with Copilot as their first resource before asking senior devs

### What to Watch Out For
- Teams that "turn it on but don't change habits" — adoption requires workflow change, not just license activation
- Over-reliance without critical review — AI output should always be reviewed by the developer who owns it
- Inconsistent usage across team members — champions can help normalize it

---

## Segment 5 — Measuring the Value (8 min)

### Core Message
GitHub provides built-in tools to measure Copilot adoption and impact. Combined with the DORA metrics you may already be tracking, you can build a clear picture of value delivery.

### The GitHub Copilot Metrics Dashboard
GitHub provides an enterprise-level metrics dashboard (available to org admins and enterprise owners):
- **Daily/Weekly Active Users** — who is using Copilot and how often
- **Code Acceptance Rates** — what percentage of AI suggestions developers keep (high rate = relevant, useful suggestions)
- **Feature Adoption Breakdown** — which Copilot features are being used (Chat, Code Review, Coding Agent)
- **AI Adoption Cohorts** — tracks teams on their AI maturity journey (code-first → agent-first → multi-agent)
- **Programmatic Access via REST API** — integrate with your BI dashboards

*Reference: [GitHub Docs — Copilot Usage Metrics](https://docs.github.com/en/copilot/concepts/copilot-usage-metrics/copilot-metrics) | [Metrics API GA](https://github.blog/changelog/2026-02-27-copilot-metrics-is-now-generally-available/)*

### Connecting Copilot to DORA Metrics
DORA (DevOps Research and Assessment) metrics are the gold standard for software delivery health:

| DORA Metric | How Copilot Impacts It | How to Measure |
|-------------|----------------------|----------------|
| **Deployment Frequency** | More throughput → more frequent smaller releases | Track release cadence before/after adoption |
| **Lead Time for Changes** | Faster coding + review → shorter commit-to-deploy time | GitHub Insights: time from first commit to merge |
| **Change Failure Rate** | Better test coverage + code review → fewer bad deploys | Incident/rollback rate before/after |
| **Mean Time to Restore** | Faster bug investigation and fix generation → quicker recovery | Incident resolution time tracking |

### 90-Day Measurement Framework for PMs

**Week 1–4: Baseline**
- Pull pre-adoption DORA metrics from GitHub Insights
- Measure current PR cycle time (open → merge)
- Survey team on time spent on "mechanical" work (boilerplate, documentation, test writing)

**Week 5–8: Adoption Tracking**
- Monitor active users in Copilot Metrics Dashboard
- Track acceptance rates (target: >25% suggestions accepted = healthy adoption)
- Note which features are being used vs. ignored

**Week 9–12: Impact Assessment**
- Compare PR cycle time: before vs. after
- Measure sprint carry-over rate change
- Re-survey developers on perceived productivity and satisfaction
- Calculate rough ROI: (hours saved per week × fully-loaded hourly rate) − Copilot license cost

### Simple ROI Calculation for Executives
```
Estimated ROI Formula:

(# developers × avg hours saved per week × fully-loaded hourly rate × 52 weeks)
─────────────────────────────────────────────────────────────────────────────────
Annual Copilot license cost per developer

Example (10 developers, 5 hrs/week saved, $75/hr, $228/yr per dev license):
(10 × 5 × $75 × 52) / (10 × $228) = $195,000 / $2,280 = ~85x ROI
```
> Even at the conservative end (2-3 hours/week saved), ROI is typically 10–20x on license cost alone — before accounting for quality improvements and reduced incidents.

---

## Segment 6 — The Human in the Loop (4 min)

### Core Message
AI doesn't replace your team — it amplifies them. The PM/PO role doesn't shrink; it evolves. The quality of your stories, acceptance criteria, and product judgment becomes even *more* valuable in an AI-assisted team.

### Talking Points

- **The multiplier effect:** A developer with Copilot can do more. A developer with Copilot *and* a PO who writes clear stories with precise acceptance criteria can do exponentially more.
- **Your new superpower as a PO:** The clearer and more detailed your stories, the better the AI performs. Invest in story quality — it now has a direct multiplier on delivery speed.
- **What stays irreversibly human:**
  - Product judgment and prioritization
  - Stakeholder conversations and trust
  - The decision about what *should* be built
  - Ethical and business risk assessment
  - Final validation that software solves the real problem
- **The risk of doing nothing:** Teams not adopting these tools will increasingly face a velocity gap vs. competitors. The cost is not in the Copilot license — it's in the delivery advantage ceded to those who do adopt.
- **Your role:** Champion adoption, create space for habit-building, measure and celebrate early wins.

### Closing Call to Action
1. **This week:** Ask your team if they have Copilot licenses and if they're using them actively
2. **This month:** Set up the Copilot Metrics Dashboard; establish your baseline DORA metrics
3. **This quarter:** Set an adoption target (% of devs using Copilot weekly) and a sprint velocity improvement goal
4. **This year:** Evaluate ROI with the 90-day measurement framework; expand to Coding Agent for appropriate backlog items

---

## Key Sources & References

> **Refresh note (2026-06-11):** Sources reorganized to prioritize 2025–2026 first-party (GitHub + Microsoft Research) and peer-reviewed evidence. The deck (slide 17) reflects this same set.

### Official GitHub / Microsoft Documentation
| Source | URL | Topic |
|---|---|---|
| GitHub Copilot Docs | https://docs.github.com/en/copilot | Official overview of all Copilot features |
| Copilot Usage Metrics | https://docs.github.com/en/copilot/concepts/copilot-usage-metrics/copilot-metrics | Metrics dashboard and API |
| Copilot Metrics REST API | https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-usage-metrics | Programmatic access to usage data |
| Copilot Metrics GA | https://github.blog/changelog/2026-02-27-copilot-metrics-is-now-generally-available/ | GA announcement |
| AI Adoption Cohorts API | https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption/ | Cohort tracking for maturity |
| Copilot Coding Agent 101 | https://github.blog/ai-and-ml/github-copilot/github-copilot-coding-agent-101-getting-started-with-agentic-workflows-on-github/ | Agentic workflows overview |

### GitHub First-Party Research & Announcements (2025–2026)
| Source | Key Finding | URL |
|---|---|---|
| **GitHub Octoverse 2025** | 1M+ Coding Agent PRs in 4 months; +23% YoY PR throughput; 80% of new devs adopt Copilot in week 1 | https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/ |
| **Coding Agent — GA Launch** (May 2025) | Launch announcement + Carvana, EY, Avanade enterprise testimonials | https://github.blog/news-insights/product-news/github-copilot-meet-the-new-coding-agent/ |
| **GitHub Code Review Study** (mid-2025) | 72.6% report effectiveness gains; ~33% reduction in PR back-and-forth | https://github.blog/ai-and-ml/generative-ai/code-review-in-the-age-of-ai-why-developers-will-always-own-the-merge-button/ |
| **GitHub Copilot App / Build 2026** (June 2026) | 1.4B commits/month; agent-native desktop experience | https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/ |
| **EY customer story** | 150-dev pilot → 2,000-dev rollout; 1.2M lines of Copilot-generated code in weeks | https://github.com/customer-stories/ey |

### Microsoft Research & Independent Peer-Reviewed Studies (2025–2026)
| Source | Key Finding | URL |
|---|---|---|
| **Microsoft Research — SPACE of AI** (Aug 2025, N>500) | Broad efficiency and satisfaction gains; collaboration metrics flat; benefits heterogeneous | https://arxiv.org/abs/2508.00178 |
| **Microsoft Research — Human Oversight of Agentic Systems** (June 2026) | Identifies 4 hidden "oversight tax" workstreams that erode raw output gains | https://arxiv.org/abs/2606.05391 |
| **Echoes of AI** (Borg et al., July 2025) — N=151 RCT | 30.7% median time reduction in feature work; no maintainability harm | https://arxiv.org/abs/2507.00788 |
| **METR — Counter-Evidence RCT** (July 2025) | Senior OSS devs 19% slower with Cursor + Claude on familiar code (despite perceiving 20% speedup) | https://arxiv.org/abs/2507.09089 |
| **NAV IT Longitudinal Copilot Study** (Stray et al., Sept 2025) | 26K commits over 2 years; no significant change in commit activity | https://arxiv.org/abs/2509.20353 |
| **Watanabe et al. — Claude Code Agentic PRs** (Sept 2025) | 83.8% acceptance rate across 567 PRs / 157 OSS projects | https://arxiv.org/abs/2509.14745 |
| **Tomaz et al. — Agile Teams 13-month study** (Feb 2026) | Performance up; commit-volume Activity flat → "value density" rises | https://arxiv.org/abs/2602.13766 |
| **AgenticFlict — Merge Conflicts at Scale** (April 2026) | 27.67% of agentic PRs have merge conflicts; significant agent-to-agent variation | https://arxiv.org/abs/2604.03551 |

### Industry Context
| Source | Topic | URL |
|---|---|---|
| DORA Research | Gold-standard DevOps metrics | https://www.devops-research.com/research.html |

---

## Potential Objections & Responses

| Objection | Response |
|-----------|----------|
| *"My team is already productive enough"* | The question isn't whether your team is good — it's whether your competitors' teams are getting *better faster*. Octoverse 2025 reports +23% YoY platform-wide PR throughput and 1M+ Coding Agent PRs in 4 months on established projects. |
| *"AI-generated code might be wrong or insecure"* | Copilot generates drafts; developers review, own, and are responsible for all code. The Coding Agent requires human approval before any code is merged. Security scanning is built in. |
| *"This will make developers lazy"* | Research shows developers use the time saved on *more complex, higher-value work* — not less work. Satisfaction scores go up alongside productivity scores. |
| *"We don't have budget"* | GitHub Copilot Business starts at ~$19/developer/month. At even 2 hours saved/week per developer, this delivers ROI in the first week of use. |
| *"My team doesn't want to use it"* | Resistance usually comes from lack of familiarity, not capability. A structured onboarding investment (like this training) typically shifts adoption within 30 days. |
| *"We tried it and it didn't work"* | "Turned it on" ≠ adoption. Successful teams pair tool access with workflow changes, coaching, and clear success metrics. |

---

## Visual / Slide Concepts

1. **Opening slide:** "What if every routine sprint task could be drafted, tested, and PR'd while your team focuses on judgment work?" (citing Octoverse 2025: 1M+ Coding Agent PRs in 4 months)
2. **The SDLC Map:** Each phase (Requirements → Dev → Review → Test → Deploy) with Copilot touchpoints highlighted
3. **The Research Data:** Clean table with study names, sample sizes, and key findings
4. **The Feature Tier List:** Visual grid of features with recommended adoption timeline
5. **The 90-Day Measurement Plan:** Timeline visual with milestones
6. **The ROI Calculator:** Simple before/after comparison with numbers PMs can relate to
7. **The Human-in-the-Loop:** "What AI does" vs. "What you do" — complementary roles, not competitive
8. **Closing:** The three actions for this week, this month, this quarter

---

## Notes for Content Author

- **Avoid jargon:** No "LLM," "tokens," "fine-tuning," or deep technical terms. If you must use a technical term, explain it in one sentence.
- **Use business language:** "Sprint velocity," "delivery cadence," "story cycle time" — the language POs and PMs already use.
- **Anchor to problems they already have:** Every talking point should connect to a pain the audience experiences today (sprint carry-overs, review bottlenecks, new hire ramp-up time, incident fires disrupting planning).
- **Cite research, not marketing:** Lean on peer-reviewed studies and publicly verifiable statistics. PMs and POs are skeptical of vendor claims — independent research is far more persuasive.
- **The tone is "trusted colleague," not "product evangelist."** Acknowledge limitations (AI output requires review, habit change is hard) — this builds credibility.
