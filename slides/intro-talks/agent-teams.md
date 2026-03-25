---
theme: default
title: "Agent Teams: Coordinating Specialized AI Roles"
info: |
  A 20-minute introduction to agent teams — why single agents hit limits,
  how the conductor-delegate pattern works, and getting started with Squad.
drawings:
  persist: false
transition: slide-left
mdc: true
colorSchema: dark
fonts:
  sans: Inter
  mono: Fira Code
module: intro-talks/agent-teams
status: active
updated: 2026-03-24
---

<div class="h-full flex flex-col items-center justify-center" style="background: linear-gradient(135deg, #000000 0%, #0d1117 50%, #161b22 100%);">
  <div class="flex items-center gap-3 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
    <span class="text-sm font-medium tracking-wide uppercase" style="color: #8b949e;">GitHub Copilot</span>
  </div>
  <h1 class="text-5xl font-bold mb-4" style="color: #ffffff !important;">Agent Teams</h1>
  <p class="text-xl" style="color: #8b949e;">Coordinating Specialized AI Roles</p>
  <div class="mt-8 px-4 py-2 rounded-full border border-[#58a6ff] text-sm" style="color: #58a6ff;">From solo agents to specialist teams · 20 minutes</div>
</div>

---

# The Question

<div class="mt-8 p-6 rounded-xl border-2 border-[#58a6ff]/30" style="background: linear-gradient(135deg, rgba(88,166,255,0.1), rgba(136,108,255,0.1));">
  <div class="text-2xl font-bold mb-4" style="color: #58a6ff;">
    "How do I coordinate multiple specialized agents to handle complex tasks that exceed single-agent capacity?"
  </div>
  <div class="text-lg" style="color: #8b949e;">
    When tasks require planning, implementation, review, and testing — different cognitive modes that single agents struggle to balance.
  </div>
</div>

---

# Why Single Agents Hit Limits

<div class="mt-6 space-y-3 text-sm">

<div class="p-4 rounded-lg border-l-4 border-[#f85149]" style="background: rgba(248,81,73,0.1);">
  <div class="font-bold" style="color: #f85149;">Complex tasks exceed single-agent capacity</div>
  <div class="mt-1" style="color: #8b949e;">Real development requires planning, coding, review, testing — different cognitive modes that one agent can't balance simultaneously</div>
</div>

<div class="p-4 rounded-lg border-l-4 border-[#d29922]" style="background: rgba(210,153,34,0.1);">
  <div class="font-bold" style="color: #d29922;">Context pollution degrades quality</div>
  <div class="mt-1" style="color: #8b949e;">One agent juggling everything accumulates 50-80% of its context window on irrelevant information, reducing output quality by 30-40%</div>
</div>

<div class="p-4 rounded-lg border-l-4 border-[#a371f7]" style="background: rgba(163,113,247,0.1);">
  <div class="font-bold" style="color: #a371f7;">No specialization, no expertise</div>
  <div class="mt-1" style="color: #8b949e;">General-purpose agents: 60-70% effectiveness. Specialists tuned for one mode: 90-95% effectiveness</div>
</div>

</div>

---

# The Mental Model Shift

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold mb-3" style="color: #3fb950;">✅ Move Toward</div>
<div class="space-y-2">
  <div class="p-2 rounded border-l-3 border-[#3fb950]" style="background: rgba(63,185,80,0.08);">Conductor-delegate architecture</div>
  <div class="p-2 rounded border-l-3 border-[#3fb950]" style="background: rgba(63,185,80,0.08);">Single responsibility per agent</div>
  <div class="p-2 rounded border-l-3 border-[#3fb950]" style="background: rgba(63,185,80,0.08);">Tool constraints = role enforcement</div>
  <div class="p-2 rounded border-l-3 border-[#3fb950]" style="background: rgba(63,185,80,0.08);">Persistent agent memory</div>
  <div class="p-2 rounded border-l-3 border-[#3fb950]" style="background: rgba(63,185,80,0.08);">Parallel independent work</div>
</div>
</div>

<div>
<div class="font-bold mb-3" style="color: #f85149;">🛑 Move Away From</div>
<div class="space-y-2">
  <div class="p-2 rounded border-l-3 border-[#f85149]" style="background: rgba(248,81,73,0.08);">Single agent for everything</div>
  <div class="p-2 rounded border-l-3 border-[#f85149]" style="background: rgba(248,81,73,0.08);">Universal tool access</div>
  <div class="p-2 rounded border-l-3 border-[#f85149]" style="background: rgba(248,81,73,0.08);">Implicit phase transitions</div>
  <div class="p-2 rounded border-l-3 border-[#f85149]" style="background: rgba(248,81,73,0.08);">Raw data returns from subagents</div>
  <div class="p-2 rounded border-l-3 border-[#f85149]" style="background: rgba(248,81,73,0.08);">Sequential when parallel possible</div>
</div>
</div>

</div>

---

# When to Use Agent Teams

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold mb-2" style="color: #3fb950;">✅ Use Agent Teams When</div>
<div class="space-y-2">
  <div class="p-2 rounded" style="background: rgba(63,185,80,0.08);">3+ cognitive modes needed (plan/code/review)</div>
  <div class="p-2 rounded" style="background: rgba(63,185,80,0.08);">Context window hits 70-80%+ before implementation</div>
  <div class="p-2 rounded" style="background: rgba(63,185,80,0.08);">Separation of concerns matters</div>
  <div class="p-2 rounded" style="background: rgba(63,185,80,0.08);">Knowledge should compound across sessions</div>
</div>
</div>

<div>
<div class="font-bold mb-2" style="color: #f85149;">❌ Don't Use When</div>
<div class="space-y-2">
  <div class="p-2 rounded" style="background: rgba(248,81,73,0.08);">Simple task (&lt;200 LOC) → use Plan Mode</div>
  <div class="p-2 rounded" style="background: rgba(248,81,73,0.08);">Sequential phases only → multi-step-tasks</div>
  <div class="p-2 rounded" style="background: rgba(248,81,73,0.08);">Branch-level parallelism → parallel-execution</div>
  <div class="p-2 rounded" style="background: rgba(248,81,73,0.08);">&lt;5 agent tasks/week → overhead exceeds benefit</div>
</div>
</div>

</div>

---
layout: center
---

<div class="text-center">
  <div class="text-6xl mb-6">🏗️</div>
  <h1 class="text-4xl font-bold" style="color: #58a6ff !important;">The Coordinator Pattern</h1>
  <p class="mt-4 text-lg" style="color: #8b949e;">How agent teams actually work under the hood</p>
</div>

---

# The Coordinator Pattern

<div class="mt-2">

<div class="grid grid-cols-5 gap-2 text-center text-xs mb-3">

<div class="col-span-5 p-3 rounded-lg border border-[#58a6ff]/30" style="background: linear-gradient(90deg, rgba(88,166,255,0.15), rgba(136,108,255,0.15));">
  <div class="font-bold text-sm" style="color: #58a6ff;">🎼 COORDINATOR</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Interprets requests → routes via table → spawns specialists → validates → aggregates</div>
  <div class="text-xs mt-1 font-bold" style="color: #d29922;">NEVER implements directly</div>
</div>

<div class="col-span-5 text-center text-xs" style="color: #484f58;">↓ delegates to isolated subagents ↓</div>

<div class="p-2 rounded-lg border border-[#3fb950]/30" style="background: rgba(63,185,80,0.1);">
  <div class="font-bold text-xs" style="color: #3fb950;">🏗️ Lead</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Scope, review</div>
</div>

<div class="p-2 rounded-lg border border-[#58a6ff]/30" style="background: rgba(88,166,255,0.1);">
  <div class="font-bold text-xs" style="color: #58a6ff;">⚛️ Frontend</div>
  <div class="text-xs mt-1" style="color: #8b949e;">UI, React</div>
</div>

<div class="p-2 rounded-lg border border-[#a371f7]/30" style="background: rgba(163,113,247,0.1);">
  <div class="font-bold text-xs" style="color: #a371f7;">🔧 Backend</div>
  <div class="text-xs mt-1" style="color: #8b949e;">API, DB</div>
</div>

<div class="p-2 rounded-lg border border-[#d29922]/30" style="background: rgba(210,153,34,0.1);">
  <div class="font-bold text-xs" style="color: #d29922;">🧪 Tester</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Tests, QA</div>
</div>

<div class="p-2 rounded-lg border border-[#db61a2]/30" style="background: rgba(219,97,162,0.1);">
  <div class="font-bold text-xs" style="color: #db61a2;">📋 Scribe</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Memory</div>
</div>

</div>

<div class="text-xs text-center mb-2" style="color: #8b949e;">Each specialist in <b style="color: #58a6ff;">isolated context window</b> — 6.6% coordinator overhead, 93%+ available for work</div>

<div class="grid grid-cols-2 gap-2 text-xs">
  <div class="p-2 rounded border border-[#58a6ff]/20" style="background: rgba(88,166,255,0.06);">
    <div class="font-bold" style="color: #58a6ff;">🎯 Focused Context</div>
    <div style="color: #8b949e;">Each agent gets only what it needs. No accumulated context from other domains.</div>
  </div>
  <div class="p-2 rounded border border-[#3fb950]/20" style="background: rgba(63,185,80,0.06);">
    <div class="font-bold" style="color: #3fb950;">🔧 Right Tools</div>
    <div style="color: #8b949e;">Tool constraints = role enforcement. Planners can't edit; implementers can't over-research.</div>
  </div>
</div>

</div>

---

# Why This Works

<div class="mt-4 grid grid-cols-2 gap-3 text-xs">

<div class="p-3 rounded-lg border border-[#58a6ff]/20" style="background: rgba(88,166,255,0.06);">
  <div class="font-bold mb-2" style="color: #58a6ff;">🎯 Focused Context</div>
  <div style="color: #8b949e;">Each agent gets only what it needs. Lead at 1.7%, Frontend at 1.2%, Backend at 1.9% of 200K window. No cross-domain noise.</div>
</div>

<div class="p-3 rounded-lg border border-[#3fb950]/20" style="background: rgba(63,185,80,0.06);">
  <div class="font-bold mb-2" style="color: #3fb950;">⚡ Parallel Execution</div>
  <div style="color: #8b949e;">"Team, build the login page" → all agents start simultaneously. 3-5x throughput on parallelizable work.</div>
</div>

<div class="p-3 rounded-lg border border-[#a371f7]/20" style="background: rgba(163,113,247,0.06);">
  <div class="font-bold mb-2" style="color: #a371f7;">✅ Quality Checkpoints</div>
  <div style="color: #8b949e;">Rejected work must be revised by a <i>different</i> agent. No self-review loops. 40-60% less rework.</div>
</div>

<div class="p-3 rounded-lg border border-[#d29922]/20" style="background: rgba(210,153,34,0.06);">
  <div class="font-bold mb-2" style="color: #d29922;">🧠 Persistent Memory</div>
  <div style="color: #8b949e;">Agents write learnings after every session. Week 4 agents know your conventions, patterns, preferences.</div>
</div>

</div>

<div class="mt-3 p-3 rounded-lg border border-[#3fb950]/20 text-xs" style="background: rgba(63,185,80,0.06);">
  <div class="font-bold" style="color: #3fb950;">💡 Specialization Advantage</div>
  <div style="color: #8b949e;">Backend agent tuned for APIs, auth, data modeling outperforms generalist by 20-30%. Team of specialists beats single generalist every time.</div>
</div>

---
layout: center
---

<div class="text-center">
  <div class="text-6xl mb-6">🎯</div>
  <h1 class="text-4xl font-bold" style="color: #58a6ff !important;">Squad</h1>
  <p class="mt-4 text-lg" style="color: #8b949e;">A persistent AI development team that lives in your repo</p>
</div>

---

# What Is Squad?

<div class="mt-2">

<div class="p-4 rounded-lg border-2 border-[#58a6ff]/30 mb-3" style="background: linear-gradient(90deg, rgba(88,166,255,0.1), rgba(136,108,255,0.1));">
  <div class="text-lg font-bold mb-2" style="color: #58a6ff;">github.com/bradygaster/squad</div>
  <div class="text-sm" style="color: #e6edf3;">
    Squad gives you an AI development team through GitHub Copilot. Describe what you're building, and Squad proposes specialists — lead, frontend, backend, tester — that <b>persist as files in your repo</b>. Each agent runs in its own context window, reads its own history, and writes back what it learned. <b>Knowledge compounds across sessions.</b>
  </div>
</div>

<div class="grid grid-cols-2 gap-3 text-xs">
  <div class="p-3 rounded-lg border border-[#3fb950]/20" style="background: rgba(63,185,80,0.06);">
    <div class="font-bold mb-1" style="color: #3fb950;">✅ Not a Chatbot Wearing Hats</div>
    <div style="color: #8b949e;">Each team member is spawned as a real subagent with its own tools, memory, and expertise.</div>
  </div>
  <div class="p-3 rounded-lg border border-[#58a6ff]/20" style="background: rgba(88,166,255,0.06);">
    <div class="font-bold mb-1" style="color: #58a6ff;">✅ Production-Ready Today</div>
    <div style="color: #8b949e;">Install in &lt;10 minutes. Full team with routing, memory, ceremonies, and GitHub Issues integration.</div>
  </div>
</div>

</div>

---

# Squad Architecture

<div class="mt-2 text-xs">

```
┌─────────────────────────────────┐
│     "Team, build login page"    │  ← You
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│      SQUAD COORDINATOR          │
│  • Routes via routing.md        │
│  • Spawns agents in parallel    │
│  • Enforces reviewer protocol   │
│  • Cost-first model selection   │
└─────────────────────────────────┘
     │       │       │       │
     ▼       ▼       ▼       ▼
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ Lead │ │  FE  │ │  BE  │ │ Test │
│ Scope│ │  UI  │ │ APIs │ │  QA  │
└──────┘ └──────┘ └──────┘ └──────┘
  Own      Own      Own      Own
 Context  Context  Context  Context
     │       │       │       │
     └───────┴───────┴───────┘
              ↓
┌─────────────────────────────────┐
│   🧠 SHARED MEMORY              │
│  • decisions.md (all read)      │
│  • history.md (personal)        │
│  • skills/ (earned over time)   │
└─────────────────────────────────┘
```

</div>

---

# Squad Memory System

<div class="mt-2">

<div class="text-xs">

| Layer | What | Who Writes | Who Reads |
|-------|------|-----------|-----------|
| `charter.md` | Identity, expertise, voice | Squad (at init) | The agent itself |
| `history.md` | Project-specific learnings | Each agent | That agent only |
| `decisions.md` | Team-wide decisions | Any agent (via inbox) | All agents |
| `skills/` | Reusable patterns (earned) | Agents from real work | All agents |
| `log/` | Session history | Scribe | Anyone (searchable) |

</div>

<div class="mt-3 p-3 rounded-lg border border-[#58a6ff]/20 text-xs" style="background: rgba(88,166,255,0.06);">
  <div class="font-bold mb-2" style="color: #58a6ff;">💡 How Knowledge Compounds Over Time</div>
  <div class="grid grid-cols-3 gap-2" style="color: #8b949e;">
    <div>
      <div class="font-bold" style="color: #3fb950;">🌱 Week 1</div>
      <div>Project description, tech stack, user name</div>
    </div>
    <div>
      <div class="font-bold" style="color: #58a6ff;">🌿 Week 4</div>
      <div>Conventions, patterns, API design, test strategies</div>
    </div>
    <div>
      <div class="font-bold" style="color: #a371f7;">🌳 Week 12</div>
      <div>Full architecture, tech debt, regressions, performance</div>
    </div>
  </div>
</div>

</div>

---

# Key Squad Innovations

<div class="mt-3 space-y-2 text-xs">

<div class="p-3 rounded-lg border border-[#58a6ff]/20" style="background: rgba(88,166,255,0.06);">
  <div class="font-bold mb-1" style="color: #58a6ff;">🎯 Per-Agent Model Selection (Cost-First)</div>
  <div style="color: #8b949e;">Writing code → Claude Sonnet 4.5 (Standard). Non-code work → Claude Haiku 4.5 (Fast). Visual/design → Claude Opus 4.5 (Premium).</div>
</div>

<div class="p-3 rounded-lg border border-[#3fb950]/20" style="background: rgba(63,185,80,0.06);">
  <div class="font-bold mb-1" style="color: #3fb950;">✅ Reviewer Protocol — No Self-Review Loops</div>
  <div style="color: #8b949e;">Agent A submits work → Reviewer rejects → <b>Agent A locked out</b> → Agent B must revise. Prevents circular "fixing" loops.</div>
</div>

<div class="p-3 rounded-lg border border-[#a371f7]/20" style="background: rgba(163,113,247,0.06);">
  <div class="font-bold mb-1" style="color: #a371f7;">🤖 Ralph — Autonomous Work Monitor</div>
  <div style="color: #8b949e;">Continuously checks for pending work — open issues, draft PRs, review feedback, CI failures. Team never sits idle.</div>
</div>

<div class="p-3 rounded-lg border border-[#d29922]/20" style="background: rgba(210,153,34,0.06);">
  <div class="font-bold mb-1" style="color: #d29922;">🎭 Ceremonies — Structured Team Meetings</div>
  <div style="color: #8b949e;"><b>Design Review:</b> Before multi-agent tasks — each agent's perspective on interfaces, risks, contracts. <b>Retrospective:</b> After failures — focused root-cause analysis.</div>
</div>

</div>

---
layout: center
---

<div class="text-center">
  <div class="text-6xl mb-6">🚀</div>
  <h1 class="text-4xl font-bold" style="color: #58a6ff !important;">Getting Started</h1>
  <p class="mt-4 text-lg" style="color: #8b949e;">From zero to a working AI team in under 10 minutes</p>
</div>

---

# Three Steps to Your First Team

<div class="mt-4 grid grid-cols-3 gap-4 text-sm">

<div class="p-4 rounded-lg border border-[#3fb950]/30" style="background: rgba(63,185,80,0.08);">
  <div class="text-2xl mb-2">1️⃣</div>
  <div class="font-bold mb-2" style="color: #3fb950;">Install</div>
  <div class="font-mono text-xs p-2 rounded" style="background: #0d1117; color: #3fb950;">
    mkdir my-project && cd my-project<br/>
    git init<br/>
    npx github:bradygaster/squad
  </div>
  <div class="text-xs mt-2" style="color: #8b949e;">Copies squad.agent.md into .github/agents/</div>
</div>

<div class="p-4 rounded-lg border border-[#58a6ff]/30" style="background: rgba(88,166,255,0.08);">
  <div class="text-2xl mb-2">2️⃣</div>
  <div class="font-bold mb-2" style="color: #58a6ff;">Form Your Team</div>
  <div class="font-mono text-xs p-2 rounded" style="background: #0d1117; color: #58a6ff;">
    "I'm building a recipe sharing<br/>
    app with React and Node.<br/>
    Set up the team."
  </div>
  <div class="text-xs mt-2" style="color: #8b949e;">Squad proposes specialists with charters</div>
</div>

<div class="p-4 rounded-lg border border-[#a371f7]/30" style="background: rgba(163,113,247,0.08);">
  <div class="text-2xl mb-2">3️⃣</div>
  <div class="font-bold mb-2" style="color: #a371f7;">Put Them to Work</div>
  <div class="font-mono text-xs p-2 rounded" style="background: #0d1117; color: #a371f7;">
    "Team, build the login page"<br/>
    <br/>
    "Ripley, fix error handling"
  </div>
  <div class="text-xs mt-2" style="color: #8b949e;">All relevant agents launch in parallel</div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg border-l-4 border-[#3fb950] text-xs" style="background: rgba(63,185,80,0.06);">
  <b style="color: #3fb950;">Commit the .ai-team/ folder.</b> <span style="color: #8b949e;">Anyone who clones your repo gets the team — with all accumulated knowledge.</span>
</div>

---

# Squad File Structure

<div class="mt-2 grid grid-cols-2 gap-3 text-xs">

<div class="font-mono p-3 rounded-lg" style="background: rgba(13,17,23,0.8);">
<div style="color: #58a6ff;">.ai-team/</div>
<div class="ml-3" style="color: #e6edf3;">├── team.md</div>
<div class="ml-3" style="color: #e6edf3;">├── routing.md</div>
<div class="ml-3" style="color: #e6edf3;">├── ceremonies.md</div>
<div class="ml-3" style="color: #e6edf3;">├── decisions.md</div>
<div class="ml-3" style="color: #e6edf3;">├── decisions/inbox/</div>
<div class="ml-3" style="color: #e6edf3;">├── agents/</div>
<div class="ml-5" style="color: #8b949e;">│   ├── {name}/</div>
<div class="ml-7" style="color: #484f58;">│   │   ├── charter.md</div>
<div class="ml-7" style="color: #484f58;">│   │   └── history.md</div>
<div class="ml-3" style="color: #e6edf3;">├── skills/</div>
<div class="ml-3" style="color: #e6edf3;">└── log/</div>
</div>

<div class="space-y-2">
  <div class="p-2 rounded border border-[#58a6ff]/20" style="background: rgba(88,166,255,0.06);">
    <div class="font-bold" style="color: #58a6ff;">team.md</div>
    <div style="color: #8b949e;">Roster — who's on the team</div>
  </div>
  <div class="p-2 rounded border border-[#3fb950]/20" style="background: rgba(63,185,80,0.06);">
    <div class="font-bold" style="color: #3fb950;">routing.md</div>
    <div style="color: #8b949e;">Who handles what (routing table)</div>
  </div>
  <div class="p-2 rounded border border-[#a371f7]/20" style="background: rgba(163,113,247,0.06);">
    <div class="font-bold" style="color: #a371f7;">charter.md</div>
    <div style="color: #8b949e;">Identity, expertise, boundaries, voice</div>
  </div>
  <div class="p-2 rounded border border-[#d29922]/20" style="background: rgba(210,153,34,0.06);">
    <div class="font-bold" style="color: #d29922;">history.md</div>
    <div style="color: #8b949e;">What agent knows about YOUR project</div>
  </div>
</div>

</div>

---

# Key Takeaways

<div class="mt-6 space-y-3 text-sm">

<div class="p-4 rounded-lg border border-[#3fb950]/30" style="background: rgba(63,185,80,0.08);">
  <span class="font-bold" style="color: #3fb950;">1.</span> <span style="color: #e6edf3;"><b>Single agents have limits</b> — complex tasks need planning, coding, review, and testing as separate cognitive modes</span>
</div>

<div class="p-4 rounded-lg border border-[#58a6ff]/30" style="background: rgba(88,166,255,0.08);">
  <span class="font-bold" style="color: #58a6ff;">2.</span> <span style="color: #e6edf3;"><b>Conductor-delegate pattern</b> — coordinator routes, specialists execute in isolated contexts, 3-5x throughput</span>
</div>

<div class="p-4 rounded-lg border border-[#a371f7]/30" style="background: rgba(163,113,247,0.08);">
  <span class="font-bold" style="color: #a371f7;">3.</span> <span style="color: #e6edf3;"><b>Squad makes it real</b> — persistent AI teams that live in your repo and grow smarter every session</span>
</div>

<div class="p-4 rounded-lg border border-[#d29922]/30" style="background: rgba(210,153,34,0.08);">
  <span class="font-bold" style="color: #d29922;">4.</span> <span style="color: #e6edf3;"><b>Start today</b> — <code style="color: #3fb950;">npx github:bradygaster/squad</code> — zero to working team in 10 minutes</span>
</div>

</div>

---
layout: center
---

<div class="text-center">
  <h1 class="text-4xl font-bold mb-6" style="color: #ffffff !important;">Questions?</h1>
  <div class="space-y-3" style="color: #8b949e;">
    <p class="text-lg">Try it now: <code class="px-2 py-1 rounded text-sm" style="background: #161b22; color: #3fb950;">npx github:bradygaster/squad</code></p>
    <p>Repo: <span style="color: #58a6ff;">github.com/bradygaster/squad</span></p>
    <p>Deep dive: <span style="color: #58a6ff;">Agent Teams Tech Talk</span> (45 min version)</p>
  </div>
  <div class="mt-8 w-32 h-1 mx-auto rounded-full" style="background: linear-gradient(90deg, transparent, #58a6ff, transparent);"></div>
</div>

<style>
:root {
  --slidev-theme-primary: #58a6ff;
  --slidev-theme-accent: #3fb950;
}

.slidev-layout {
  background: #000000 !important;
  color: #e6edf3 !important;
}

.slidev-layout h1 {
  color: #ffffff !important;
  font-weight: 700;
}

.slidev-layout h2 {
  color: #58a6ff !important;
  font-weight: 600;
}

.slidev-layout h3 {
  color: #e6edf3 !important;
  font-weight: 600;
}

.slidev-layout strong {
  color: #3fb950;
}

.slidev-layout a {
  color: #58a6ff !important;
}

.slidev-layout pre,
.slidev-layout .shiki {
  background: #0d1117 !important;
  border: 1px solid #21262d !important;
  border-radius: 8px !important;
}

.slidev-layout code:not(pre code) {
  background: #161b22 !important;
  color: #3fb950 !important;
  border-radius: 4px;
  padding: 2px 6px;
}

.slidev-layout table {
  border-collapse: collapse;
}

.slidev-layout th {
  background: #161b22 !important;
  color: #58a6ff !important;
  border-bottom: 2px solid #58a6ff !important;
  padding: 8px 16px;
}

.slidev-layout td {
  border-bottom: 1px solid #21262d !important;
  padding: 8px 16px;
  color: #e6edf3 !important;
}

.slidev-layout tr:hover td {
  background: #0d1117 !important;
}

.slidev-layout blockquote {
  border-left: 4px solid #58a6ff !important;
  background: #0d1117 !important;
  color: #8b949e !important;
  padding: 8px 16px;
  border-radius: 0 8px 8px 0;
}

.slidev-layout.slidev-layout-section {
  background: linear-gradient(135deg, #000000 0%, #0d1117 50%, #161b22 100%) !important;
}

.slidev-layout.slidev-layout-center {
  background: #000000 !important;
}

.slidev-layout ul,
.slidev-layout ol {
  color: #e6edf3;
}

.slidev-layout li::marker {
  color: #58a6ff;
}

.slidev-progress {
  background: #58a6ff !important;
}

.slidev-page-number {
  color: #484F58 !important;
}

.slidev-layout.slidev-layout-two-cols .col-right {
  border-left: 1px solid #21262d;
  padding-left: 1.5rem;
}
</style>
