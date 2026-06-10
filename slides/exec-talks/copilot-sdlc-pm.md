---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Your Team's New Teammate
  GitHub Copilot Across the Delivery Lifecycle — for Product Owners & Project Managers
drawings:
  persist: false
transition: slide-left
title: Your Team's New Teammate — GitHub Copilot for PMs & POs
module: exec-talks/copilot-sdlc-pm
mdc: true
status: active
updated: 2026-06-10
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20"></div>
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-green-500/20 rounded-full blur-3xl"></div>
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-72" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-72 relative" alt="SDP Logo" />
  </div>
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-[#bc8cff] via-[#79c0ff] to-[#7ee787] bg-clip-text text-transparent relative z-10">
    Your Team's New Teammate
  </h1>
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-[#6E40C9]/80 to-[#2188FF]/80 rounded-full text-[#c9d1d9] text-xl font-medium shadow-lg shadow-blue-500/25">
      GitHub Copilot Across the Delivery Lifecycle
    </span>
  </div>
  <div class="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-[#bc8cff] to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">For Product Owners & Project Managers · 45 min</span>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wdth,wght@0,75..125,200..900;1,75..125,200..900&display=swap');
:global(.slidev-layout) { font-family: 'Mona Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important; }
</style>

---
layout: center
class: text-center
---

# The Four Questions This Talk Answers

<div class="grid grid-cols-2 gap-5 mt-8 max-w-3xl mx-auto text-left">

<div class="p-5 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-3xl mb-3">🤔</div>
  <div class="text-lg font-bold text-[#79c0ff] mb-1">Why should my team use this?</div>
  <div class="text-sm text-[#7d8590]">Evidence-backed business case</div>
</div>

<div class="p-5 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-3xl mb-3">📣</div>
  <div class="text-lg font-bold text-[#79c0ff] mb-1">Why should I encourage adoption?</div>
  <div class="text-sm text-[#7d8590]">Competitive reality & team health</div>
</div>

<div class="p-5 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-3xl mb-3">🎯</div>
  <div class="text-lg font-bold text-[#7ee787] mb-1">What features should we encourage?</div>
  <div class="text-sm text-[#7d8590]">Practical adoption roadmap</div>
</div>

<div class="p-5 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-3xl mb-3">📊</div>
  <div class="text-lg font-bold text-[#bc8cff] mb-1">How do I measure the value?</div>
  <div class="text-sm text-[#7d8590]">Metrics framework & ROI</div>
</div>

</div>

---

# 🌐 The Window for "Wait and See" Has Closed

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-5 bg-[#161b22] rounded-xl border border-[#30363d] text-center">
  <div class="text-5xl font-bold text-[#c9d1d9] mb-2">15M+</div>
  <div class="text-[#79c0ff] font-semibold">Active Users</div>
  <div class="text-sm text-[#7d8590] mt-1">Globally, and growing</div>
</div>
<div class="p-5 bg-[#161b22] rounded-xl border border-[#30363d] text-center">
  <div class="text-5xl font-bold text-[#c9d1d9] mb-2">90%</div>
  <div class="text-[#79c0ff] font-semibold">Fortune 100</div>
  <div class="text-sm text-[#7d8590] mt-1">Already deployed</div>
</div>
<div class="p-5 bg-[#161b22] rounded-xl border border-[#30363d] text-center">
  <div class="text-5xl font-bold text-[#c9d1d9] mb-2">50K+</div>
  <div class="text-[#7ee787] font-semibold">Organizations</div>
  <div class="text-sm text-[#7d8590] mt-1">Across every industry</div>
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">
<div class="p-4 bg-[#161b22] rounded-lg border border-[#30363d]">
  <div class="text-[#c9d1d9] font-bold mb-2">🤖 What is Copilot, really?</div>
  <div class="text-[#8b949e]">Not just autocomplete. An AI system that writes code, reviews PRs, generates tests, documents changes, and — increasingly — autonomously completes tasks from your backlog.</div>
</div>
<div class="p-4 bg-[#161b22] rounded-lg border border-[#30363d]">
  <div class="text-[#c9d1d9] font-bold mb-2">⚡ What does "Agentic" mean?</div>
  <div class="text-[#8b949e]">Assign a GitHub Issue → Copilot creates a branch, writes the code, runs tests, opens a PR. A teammate who works while others sleep, never misses a standup, and always follows your standards.</div>
</div>
</div>

---

# 📊 The Research Is In — And It's Not Vendor Marketing

<div class="space-y-2 mt-2 text-sm">

<div class="p-2.5 bg-[#161b22] rounded-lg border-l-4 border-[#79c0ff] flex items-center justify-between">
  <div>
    <div class="font-bold text-[#79c0ff]">MIT / Wharton / GitHub — Randomized Controlled Trial</div>
    <div class="text-[#7d8590]">4,867 developers across 3 companies · Peer-reviewed · 2024</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-2xl font-bold text-[#c9d1d9]">26%</div>
    <div class="text-[#79c0ff] text-xs">faster task completion</div>
  </div>
</div>

<div class="p-2.5 bg-[#161b22] rounded-lg border-l-4 border-[#79c0ff] flex items-center justify-between">
  <div>
    <div class="font-bold text-[#79c0ff]">GitHub Internal Experiment</div>
    <div class="text-[#7d8590]">2,000+ developers · 78 min vs. 161 min average task time</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-2xl font-bold text-[#c9d1d9]">55%</div>
    <div class="text-[#79c0ff] text-xs">faster task completion</div>
  </div>
</div>

<div class="p-2.5 bg-[#161b22] rounded-lg border-l-4 border-[#7ee787] flex items-center justify-between">
  <div>
    <div class="font-bold text-[#7ee787]">Microsoft & Accenture Field Trial</div>
    <div class="text-[#7d8590]">1,974 developers · Pull requests per week measured</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-2xl font-bold text-[#c9d1d9]">+22%</div>
    <div class="text-[#7ee787] text-xs">more PRs merged/week</div>
  </div>
</div>

<div class="p-2.5 bg-[#161b22] rounded-lg border-l-4 border-[#bc8cff] flex items-center justify-between">
  <div>
    <div class="font-bold text-[#bc8cff]">Industry-Wide Survey 2025</div>
    <div class="text-[#7d8590]">15M users · 50K organizations · All industries</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-2xl font-bold text-[#c9d1d9]">84%</div>
    <div class="text-[#bc8cff] text-xs">more successful builds</div>
  </div>
</div>

</div>

<div class="mt-2 p-2.5 bg-[#161b22] rounded-xl border border-[#30363d] text-center text-sm">
  <span class="text-[#c9d1d9] font-bold">88% of developers</span><span class="text-[#8b949e]"> report feeling more productive · Junior developers see the largest individual gains</span>
</div>

---

# 💼 What This Means for Your Delivery Cycle

<div class="grid grid-cols-2 gap-5 mt-4 text-sm">

<div>
  <h3 class="text-lg font-bold text-[#ff7b72] mb-2">❌ Before Copilot</h3>
  <div class="space-y-2">
    <div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="text-[#c9d1d9] font-semibold">PR reviews: 3+ day wait</div>
      <div class="text-[#7d8590]">Senior devs are the bottleneck</div>
    </div>
    <div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="text-[#c9d1d9] font-semibold">Boilerplate eats sprint capacity</div>
      <div class="text-[#7d8590]">Test writing, docs, repetitive setup</div>
    </div>
    <div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="text-[#c9d1d9] font-semibold">New devs slow for months</div>
      <div class="text-[#7d8590]">Learning codebase = high PM overhead</div>
    </div>
    <div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="text-[#c9d1d9] font-semibold">Stories carry over every sprint</div>
      <div class="text-[#7d8590]">Velocity unpredictable</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-[#7ee787] mb-2">✅ After Copilot</h3>
  <div class="space-y-2">
    <div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="text-[#c9d1d9] font-semibold">PR reviews: same-day</div>
      <div class="text-[#7d8590]">AI reviews first, humans approve</div>
    </div>
    <div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="text-[#c9d1d9] font-semibold">Boilerplate is automatic</div>
      <div class="text-[#7d8590]">Devs focus on the hard, interesting work</div>
    </div>
    <div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="text-[#c9d1d9] font-semibold">New devs ramp in weeks</div>
      <div class="text-[#7d8590]">Copilot is their knowledgeable pair programmer</div>
    </div>
    <div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="text-[#c9d1d9] font-semibold">Sprint velocity stabilizes</div>
      <div class="text-[#7d8590]">More predictable planning and commitments</div>
    </div>
  </div>
</div>

</div>

---

# 🗺️ Copilot Touches Every Phase of the SDLC

<div class="grid grid-cols-5 gap-2 mt-3 text-xs">

<div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d] text-center">
  <div class="text-2xl mb-2">📋</div>
  <div class="font-bold text-[#79c0ff] mb-1">Requirements</div>
  <div class="text-[#7d8590]">Translates stories to tasks</div>
  <div class="text-[#7d8590]">Flags missing edge cases</div>
  <div class="text-[#7d8590]">Reduces mid-sprint surprises</div>
</div>

<div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d] text-center">
  <div class="text-2xl mb-2">💻</div>
  <div class="font-bold text-[#79c0ff] mb-1">Development</div>
  <div class="text-[#7d8590]">Writes code from descriptions</div>
  <div class="text-[#7d8590]">Follows your patterns</div>
  <div class="text-[#7d8590]">Agent picks up issues autonomously</div>
</div>

<div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d] text-center">
  <div class="text-2xl mb-2">🔍</div>
  <div class="font-bold text-[#7ee787] mb-1">Code Review</div>
  <div class="text-[#7d8590]">Every PR reviewed instantly</div>
  <div class="text-[#7d8590]">Security + quality + coverage</div>
  <div class="text-[#7d8590]">3 days → same day</div>
</div>

<div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d] text-center">
  <div class="text-2xl mb-2">🧪</div>
  <div class="font-bold text-[#e3b341] mb-1">Testing</div>
  <div class="text-[#7d8590]">Generates test suites</div>
  <div class="text-[#7d8590]">Edge cases covered</div>
  <div class="text-[#7d8590]">Fewer bugs escaping to QA</div>
</div>

<div class="p-2 bg-[#161b22] rounded-lg border border-[#30363d] text-center">
  <div class="text-2xl mb-2">🚀</div>
  <div class="font-bold text-[#bc8cff] mb-1">Ops & Maintenance</div>
  <div class="text-[#7d8590]">Writes changelogs & runbooks</div>
  <div class="text-[#7d8590]">Triages user issues</div>
  <div class="text-[#7d8590]">Patches dependencies</div>
</div>

</div>

<div class="mt-3 p-4 bg-[#161b22] rounded-xl border border-[#30363d] text-center">
  <div class="text-sm text-[#8b949e]">
    <span class="font-bold text-[#c9d1d9]">The Agentic flywheel: </span>
    PO writes clear story → Agent codes & tests → Code Review catches issues → Developer approves → Copilot documents → PO validates ✅
  </div>
</div>

---

# ⚡ The Coding Agent: Assign Issues to Copilot

<div class="grid grid-cols-2 gap-6 mt-3">

<div>
  <h3 class="text-xl font-bold text-[#79c0ff] mb-4">How It Works</h3>
  <div class="space-y-3 text-sm">
    <div class="flex items-start gap-3 p-2.5 bg-[#161b22] rounded-lg">
      <span class="text-xl shrink-0">1️⃣</span>
      <div><div class="text-[#c9d1d9] font-semibold">Assign a GitHub Issue to Copilot</div><div class="text-[#7d8590]">From the issue page, assignees dropdown, or Copilot Chat</div></div>
    </div>
    <div class="flex items-start gap-3 p-2.5 bg-[#161b22] rounded-lg">
      <span class="text-xl shrink-0">2️⃣</span>
      <div><div class="text-[#c9d1d9] font-semibold">Agent starts working</div><div class="text-[#7d8590]">Runs in a secure, sandboxed environment. Creates a branch.</div></div>
    </div>
    <div class="flex items-start gap-3 p-2.5 bg-[#161b22] rounded-lg">
      <span class="text-xl shrink-0">3️⃣</span>
      <div><div class="text-[#c9d1d9] font-semibold">Copilot writes, tests, and proposes</div><div class="text-[#7d8590]">Opens a pull request when complete. No auto-merge.</div></div>
    </div>
    <div class="flex items-start gap-3 p-2.5 bg-[#161b22] rounded-lg">
      <span class="text-xl shrink-0">4️⃣</span>
      <div><div class="text-[#c9d1d9] font-semibold">Developer reviews & approves</div><div class="text-[#7d8590]">Human owns every merge. Full audit trail.</div></div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-[#7ee787] mb-4">Best Suited For</h3>
  <div class="space-y-2 text-sm">
    <div class="p-2 bg-[#161b22] rounded border border-[#30363d] flex items-center gap-2">
      <span>✅</span><span class="text-[#8b949e]">Bug fixes with clear reproduction steps</span>
    </div>
    <div class="p-2 bg-[#161b22] rounded border border-[#30363d] flex items-center gap-2">
      <span>✅</span><span class="text-[#8b949e]">Adding test coverage to existing code</span>
    </div>
    <div class="p-2 bg-[#161b22] rounded border border-[#30363d] flex items-center gap-2">
      <span>✅</span><span class="text-[#8b949e]">Documentation updates and changelogs</span>
    </div>
    <div class="p-2 bg-[#161b22] rounded border border-[#30363d] flex items-center gap-2">
      <span>✅</span><span class="text-[#8b949e]">Well-specified incremental features</span>
    </div>
    <div class="p-2 bg-[#161b22] rounded border border-[#30363d] flex items-center gap-2">
      <span>✅</span><span class="text-[#8b949e]">Dependency updates and security patches</span>
    </div>
    <div class="p-2 bg-[#161b22] rounded border border-[#30363d] flex items-center gap-2 mt-4">
      <span>⚠️</span><span class="text-[#7d8590]">Vague stories with unclear acceptance criteria</span>
    </div>
    <div class="p-2 bg-[#161b22] rounded border border-[#30363d] flex items-center gap-2">
      <span>⚠️</span><span class="text-[#7d8590]">Complex multi-system architectural changes</span>
    </div>
  </div>
  <div class="mt-4 p-3 bg-[#161b22] rounded-lg border border-[#30363d] text-xs">
    <span class="text-[#79c0ff] font-bold">PO insight: </span>
    <span class="text-[#8b949e]">The quality of your acceptance criteria is now the direct input to agent performance.</span>
  </div>
</div>

</div>

---

# 🎯 Features to Encourage — Phased Adoption Roadmap

<div class="grid grid-cols-3 gap-4 mt-3 text-xs">

<div class="p-3 bg-[#161b22] rounded-xl border-2 border-[#30363d]">
  <div class="text-center mb-3">
    <span class="px-3 py-1 bg-[#161b22] rounded-full text-[#7ee787] font-bold text-xs border border-[#30363d]">🏆 TIER 1 · Days 1–30</span>
  </div>
  <div class="space-y-3">
    <div class="p-2 bg-[#0d1117] rounded">
      <div class="font-bold text-[#c9d1d9]">Copilot Chat</div>
      <div class="text-[#7d8590] mt-1">Q&A, code explanations, brainstorming, drafting. Replaces "quick question" Slack interruptions.</div>
    </div>
    <div class="p-2 bg-[#0d1117] rounded">
      <div class="font-bold text-[#c9d1d9]">Copilot Code Review</div>
      <div class="text-[#7d8590] mt-1">Automatic PR review for security, quality, coverage. PR queue drops to same-day.</div>
    </div>
  </div>
  <div class="mt-3 p-2 bg-[#0d1117] rounded text-center">
    <div class="text-[#7ee787] font-bold">Target: 80% weekly active use</div>
  </div>
</div>

<div class="p-3 bg-[#161b22] rounded-xl border-2 border-[#30363d]">
  <div class="text-center mb-3">
    <span class="px-3 py-1 bg-[#161b22] rounded-full text-[#79c0ff] font-bold text-xs border border-[#30363d]">🥈 TIER 2 · Days 30–60</span>
  </div>
  <div class="space-y-3">
    <div class="p-2 bg-[#0d1117] rounded">
      <div class="font-bold text-[#c9d1d9]">Coding Agent</div>
      <div class="text-[#7d8590] mt-1">Assign GitHub Issues to Copilot. Low-medium complexity tasks completed autonomously.</div>
    </div>
    <div class="p-2 bg-[#0d1117] rounded">
      <div class="font-bold text-[#c9d1d9]">Custom Instructions</div>
      <div class="text-[#7d8590] mt-1">Team standards baked in. Consistent quality without repeated review feedback.</div>
    </div>
  </div>
  <div class="mt-3 p-2 bg-[#0d1117] rounded text-center">
    <div class="text-[#79c0ff] font-bold">Target: 1+ agent task/sprint</div>
  </div>
</div>

<div class="p-3 bg-[#161b22] rounded-xl border-2 border-[#30363d]">
  <div class="text-center mb-3">
    <span class="px-3 py-1 bg-[#161b22] rounded-full text-[#bc8cff] font-bold text-xs border border-[#30363d]">🥉 TIER 3 · Days 60–90</span>
  </div>
  <div class="space-y-3">
    <div class="p-2 bg-[#0d1117] rounded">
      <div class="font-bold text-[#c9d1d9]">MCP Integrations</div>
      <div class="text-[#7d8590] mt-1">Connect Copilot to Jira, Confluence, Azure DevOps. AI sees your actual requirements.</div>
    </div>
    <div class="p-2 bg-[#0d1117] rounded">
      <div class="font-bold text-[#c9d1d9]">Multi-Agent Workflows</div>
      <div class="text-[#7d8590] mt-1">Multiple agents collaborating on a larger feature. For teams with mature AI practices.</div>
    </div>
  </div>
  <div class="mt-3 p-2 bg-[#0d1117] rounded text-center">
    <div class="text-[#bc8cff] font-bold">Target: Workflow integration</div>
  </div>
</div>

</div>

---

# 📈 Measuring Value: The GitHub Metrics Dashboard

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
  <h3 class="text-xl font-bold text-[#79c0ff] mb-3">Built-In Metrics (No Setup Required)</h3>
  <div class="space-y-2 text-sm">
    <div class="p-3 bg-[#161b22] rounded-lg flex items-center gap-3">
      <span class="text-xl">👥</span>
      <div><div class="text-[#c9d1d9] font-semibold">Active Users</div><div class="text-[#7d8590]">Daily / weekly — who's using it consistently</div></div>
    </div>
    <div class="p-3 bg-[#161b22] rounded-lg flex items-center gap-3">
      <span class="text-xl">✅</span>
      <div><div class="text-[#c9d1d9] font-semibold">Acceptance Rate</div><div class="text-[#7d8590]">>25% = suggestions are relevant and useful</div></div>
    </div>
    <div class="p-3 bg-[#161b22] rounded-lg flex items-center gap-3">
      <span class="text-xl">🔬</span>
      <div><div class="text-[#c9d1d9] font-semibold">Feature Adoption Breakdown</div><div class="text-[#7d8590]">Chat vs. Code Review vs. Coding Agent</div></div>
    </div>
    <div class="p-3 bg-[#161b22] rounded-lg flex items-center gap-3">
      <span class="text-xl">📊</span>
      <div><div class="text-[#c9d1d9] font-semibold">AI Adoption Cohorts</div><div class="text-[#7d8590]">Track teams on their maturity journey</div></div>
    </div>
    <div class="p-3 bg-[#161b22] rounded-lg flex items-center gap-3">
      <span class="text-xl">🔌</span>
      <div><div class="text-[#c9d1d9] font-semibold">REST API</div><div class="text-[#7d8590]">Pipe data into your own dashboards</div></div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-[#7ee787] mb-3">Connect to DORA Metrics</h3>
  <div class="space-y-2 text-xs">
    <div class="p-3 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="font-bold text-[#79c0ff]">Deployment Frequency</div>
      <div class="text-[#7d8590] mt-1">More throughput → more frequent, smaller releases</div>
    </div>
    <div class="p-3 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="font-bold text-[#79c0ff]">Lead Time for Changes</div>
      <div class="text-[#7d8590] mt-1">Faster coding + review → shorter commit-to-deploy</div>
    </div>
    <div class="p-3 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="font-bold text-[#7ee787]">Change Failure Rate</div>
      <div class="text-[#7d8590] mt-1">Better coverage + review → fewer bad deploys</div>
    </div>
    <div class="p-3 bg-[#161b22] rounded-lg border border-[#30363d]">
      <div class="font-bold text-[#bc8cff]">Mean Time to Restore</div>
      <div class="text-[#7d8590] mt-1">Faster diagnosis + fix generation → quicker recovery</div>
    </div>
  </div>
  <div class="mt-3 p-2 bg-[#161b22] rounded text-xs text-center text-[#7d8590]">
    Track PR cycle time (open → merge) as your leading indicator
  </div>
</div>

</div>

---

# 📅 Your 90-Day Measurement Plan

<div class="grid grid-cols-3 gap-4 mt-4 text-xs">

<div class="p-4 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-center mb-3">
    <div class="text-2xl mb-1">📏</div>
    <div class="font-bold text-[#79c0ff] text-sm">Weeks 1–4: Baseline</div>
  </div>
  <div class="space-y-2">
    <div class="p-1.5 bg-[#0d1117] rounded">Pull DORA metrics from GitHub Insights</div>
    <div class="p-1.5 bg-[#0d1117] rounded">Measure PR cycle time (open → merge)</div>
    <div class="p-1.5 bg-[#0d1117] rounded">Survey: hours/week on mechanical work?</div>
    <div class="p-1.5 bg-[#0d1117] rounded">Record sprint carry-over rate</div>
  </div>
</div>

<div class="p-4 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-center mb-3">
    <div class="text-2xl mb-1">👀</div>
    <div class="font-bold text-[#79c0ff] text-sm">Weeks 5–8: Track Adoption</div>
  </div>
  <div class="space-y-2">
    <div class="p-1.5 bg-[#0d1117] rounded">Weekly active users in dashboard</div>
    <div class="p-1.5 bg-[#0d1117] rounded">Feature breakdown: what's being used?</div>
    <div class="p-1.5 bg-[#0d1117] rounded">Flag teams &lt;50% for coaching</div>
    <div class="p-1.5 bg-[#0d1117] rounded">First Coding Agent task?</div>
  </div>
</div>

<div class="p-4 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-center mb-3">
    <div class="text-2xl mb-1">📊</div>
    <div class="font-bold text-[#7ee787] text-sm">Weeks 9–12: Measure Impact</div>
  </div>
  <div class="space-y-2">
    <div class="p-1.5 bg-[#0d1117] rounded">Compare PR cycle time: before vs. after</div>
    <div class="p-1.5 bg-[#0d1117] rounded">Sprint carry-over rate: changed?</div>
    <div class="p-1.5 bg-[#0d1117] rounded">Re-survey developer satisfaction</div>
    <div class="p-1.5 bg-[#0d1117] rounded">Calculate ROI</div>
  </div>
</div>

</div>

<div class="mt-3 p-4 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-center text-sm">
    <span class="font-bold text-[#c9d1d9]">Simple ROI: </span>
    <span class="text-[#8b949e]">(10 devs × 5 hrs/week saved × $75/hr × 52 weeks) = </span>
    <span class="text-[#7ee787] font-bold">$195,000/year</span>
    <span class="text-[#8b949e]"> vs. </span>
    <span class="text-[#e3b341]">$2,280/year</span>
    <span class="text-[#8b949e]"> license cost → </span>
    <span class="text-[#7ee787] font-bold">~85x ROI</span>
  </div>
</div>

---
layout: center
class: text-center
---

# 🤝 The Human in the Loop

<div class="mt-6 grid grid-cols-2 gap-8 max-w-3xl mx-auto text-left">

<div class="p-5 bg-[#161b22] rounded-xl border border-[#30363d]">
  <h3 class="text-lg font-bold text-[#79c0ff] mb-3">🤖 What AI Does Better</h3>
  <div class="space-y-2 text-sm text-[#8b949e]">
    <div>⚡ Execute well-specified tasks at speed</div>
    <div>⚡ Review code consistently at any hour</div>
    <div>⚡ Generate boilerplate without fatigue</div>
    <div>⚡ Follow standards without reminders</div>
    <div>⚡ Work in parallel across multiple tasks</div>
  </div>
</div>

<div class="p-5 bg-[#161b22] rounded-xl border border-[#30363d]">
  <h3 class="text-lg font-bold text-[#bc8cff] mb-3">👤 What Stays Irreversibly Human</h3>
  <div class="space-y-2 text-sm text-[#8b949e]">
    <div>🎯 <strong class="text-[#c9d1d9]">Product judgment</strong> — what should we build?</div>
    <div>🤝 <strong class="text-[#c9d1d9]">Stakeholder trust</strong> — relationships & alignment</div>
    <div>⚖️ <strong class="text-[#c9d1d9]">Ethical assessment</strong> — is this the right thing?</div>
    <div>🎭 <strong class="text-[#c9d1d9]">User empathy</strong> — does this solve the real problem?</div>
    <div>🏆 <strong class="text-[#c9d1d9]">Final validation</strong> — acceptance criteria sign-off</div>
  </div>
</div>

</div>

<div class="mt-6 p-4 bg-[#161b22] rounded-xl border border-[#30363d] max-w-2xl mx-auto text-sm">
  <span class="font-bold text-[#c9d1d9]">Your new superpower as a PO: </span>
  <span class="text-[#8b949e]">Well-written stories with clear acceptance criteria now have a direct multiplier on delivery speed. Invest in story quality.</span>
</div>

---

# ➡️ Your Next Steps

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-center mb-3">
    <div class="text-3xl mb-1">📅</div>
    <div class="font-bold text-[#79c0ff]">This Week</div>
  </div>
  <div class="space-y-2 text-[#8b949e]">
    <div class="flex items-start gap-2"><span>☐</span><span>Ask: does your team have Copilot licenses?</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Ask: are they using them consistently?</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Identify the access or adoption gap</span></div>
  </div>
</div>

<div class="p-4 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-center mb-3">
    <div class="text-3xl mb-1">🗓️</div>
    <div class="font-bold text-[#79c0ff]">This Month</div>
  </div>
  <div class="space-y-2 text-[#8b949e]">
    <div class="flex items-start gap-2"><span>☐</span><span>Enable the Copilot Metrics Dashboard</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Establish your DORA baseline</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Drive Tier 1 adoption to >80% weekly</span></div>
  </div>
</div>

<div class="p-4 bg-[#161b22] rounded-xl border border-[#30363d]">
  <div class="text-center mb-3">
    <div class="text-3xl mb-1">📆</div>
    <div class="font-bold text-[#7ee787]">This Quarter</div>
  </div>
  <div class="space-y-2 text-[#8b949e]">
    <div class="flex items-start gap-2"><span>☐</span><span>Set sprint velocity improvement target (15–25%)</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Trial Coding Agent on 2–3 items/sprint</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Calculate ROI with the 90-day framework</span></div>
  </div>
</div>

</div>

<div class="mt-4 p-4 bg-[#161b22] rounded-xl border border-[#30363d] text-center text-sm">
  <span class="font-bold text-[#e3b341]">The competitive risk of inaction: </span>
  <span class="text-[#8b949e]">Teams using Copilot are shipping 20–55% faster. Every sprint without adoption is a sprint where the gap widens.</span>
</div>

---
layout: center
class: text-center
---

# 📚 Sources & Further Reading

<div class="grid grid-cols-2 gap-4 mt-6 max-w-3xl mx-auto text-xs text-left">

<div class="space-y-2">
  <div class="p-3 bg-[#161b22] rounded-lg">
    <div class="font-bold text-[#79c0ff]">ACM: Measuring Copilot's Impact (2024)</div>
    <div class="text-[#7d8590]">26% faster completion · RCT with 4,867 devs</div>
    <div class="text-[#7d8590] mt-1">cacm.acm.org</div>
  </div>
  <div class="p-3 bg-[#161b22] rounded-lg">
    <div class="font-bold text-[#79c0ff]">MIT GenAI Field Experiment (2024)</div>
    <div class="text-[#7d8590]">12–22% more PRs/week · Microsoft & Accenture</div>
    <div class="text-[#7d8590] mt-1">mit-genai.pubpub.org</div>
  </div>
  <div class="p-3 bg-[#161b22] rounded-lg">
    <div class="font-bold text-[#7ee787]">GitHub Copilot Usage Metrics Docs</div>
    <div class="text-[#7d8590]">Dashboard guide & REST API reference</div>
    <div class="text-[#7d8590] mt-1">docs.github.com/en/copilot</div>
  </div>
</div>

<div class="space-y-2">
  <div class="p-3 bg-[#161b22] rounded-lg">
    <div class="font-bold text-[#bc8cff]">Copilot Coding Agent 101 (GitHub Blog)</div>
    <div class="text-[#7d8590]">Getting started with agentic workflows</div>
    <div class="text-[#7d8590] mt-1">github.blog</div>
  </div>
  <div class="p-3 bg-[#161b22] rounded-lg">
    <div class="font-bold text-[#e3b341]">DORA Research</div>
    <div class="text-[#7d8590]">Gold-standard DevOps delivery metrics</div>
    <div class="text-[#7d8590] mt-1">devops-research.com</div>
  </div>
  <div class="p-3 bg-[#161b22] rounded-lg">
    <div class="font-bold text-[#ff7b72]">Second Talent: Copilot Stats 2025</div>
    <div class="text-[#7d8590]">84% more successful builds · 15M users</div>
    <div class="text-[#7d8590] mt-1">secondtalent.com</div>
  </div>
</div>

</div>

<div class="mt-6 text-[#7d8590] text-xs">
  Full reference list at <span class="text-[#79c0ff]">exec-talks/copilot-sdlc-pm/README.md</span>
</div>
