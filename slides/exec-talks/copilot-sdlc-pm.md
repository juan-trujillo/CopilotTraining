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
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent relative z-10">
    Your Team's New Teammate
  </h1>
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-blue-500/25">
      GitHub Copilot Across the Delivery Lifecycle
    </span>
  </div>
  <div class="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">For Product Owners & Project Managers · 45 min</span>
</div>

---
layout: center
class: text-center
---

# The Four Questions This Talk Answers

<div class="grid grid-cols-2 gap-5 mt-8 max-w-3xl mx-auto text-left">

<div class="p-5 bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/40">
  <div class="text-3xl mb-3">🤔</div>
  <div class="text-lg font-bold text-blue-300 mb-1">Why should my team use this?</div>
  <div class="text-sm text-gray-400">Evidence-backed business case</div>
</div>

<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 rounded-xl border border-cyan-500/40">
  <div class="text-3xl mb-3">📣</div>
  <div class="text-lg font-bold text-cyan-300 mb-1">Why should I encourage adoption?</div>
  <div class="text-sm text-gray-400">Competitive reality & team health</div>
</div>

<div class="p-5 bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-xl border border-green-500/40">
  <div class="text-3xl mb-3">🎯</div>
  <div class="text-lg font-bold text-green-300 mb-1">What features should we encourage?</div>
  <div class="text-sm text-gray-400">Practical adoption roadmap</div>
</div>

<div class="p-5 bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/40">
  <div class="text-3xl mb-3">📊</div>
  <div class="text-lg font-bold text-purple-300 mb-1">How do I measure the value?</div>
  <div class="text-sm text-gray-400">Metrics framework & ROI</div>
</div>

</div>

---

# 🌐 The Window for "Wait and See" Has Closed

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-5 bg-gradient-to-br from-blue-600/30 to-blue-800/20 rounded-xl border border-blue-500/40 text-center">
  <div class="text-5xl font-bold text-white mb-2">15M+</div>
  <div class="text-blue-300 font-semibold">Active Users</div>
  <div class="text-sm text-gray-400 mt-1">Globally, and growing</div>
</div>
<div class="p-5 bg-gradient-to-br from-cyan-600/30 to-cyan-800/20 rounded-xl border border-cyan-500/40 text-center">
  <div class="text-5xl font-bold text-white mb-2">90%</div>
  <div class="text-cyan-300 font-semibold">Fortune 100</div>
  <div class="text-sm text-gray-400 mt-1">Already deployed</div>
</div>
<div class="p-5 bg-gradient-to-br from-green-600/30 to-green-800/20 rounded-xl border border-green-500/40 text-center">
  <div class="text-5xl font-bold text-white mb-2">50K+</div>
  <div class="text-green-300 font-semibold">Organizations</div>
  <div class="text-sm text-gray-400 mt-1">Across every industry</div>
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">
<div class="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
  <div class="text-white font-bold mb-2">🤖 What is Copilot, really?</div>
  <div class="text-gray-300">Not just autocomplete. An AI system that writes code, reviews PRs, generates tests, documents changes, and — increasingly — autonomously completes tasks from your backlog.</div>
</div>
<div class="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
  <div class="text-white font-bold mb-2">⚡ What does "Agentic" mean?</div>
  <div class="text-gray-300">Assign a GitHub Issue → Copilot creates a branch, writes the code, runs tests, opens a PR. A teammate who works while others sleep, never misses a standup, and always follows your standards.</div>
</div>
</div>

---

# 📊 The Research Is In — And It's Not Vendor Marketing

<div class="space-y-3 mt-4 text-sm">

<div class="p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-400 flex items-center justify-between">
  <div>
    <div class="font-bold text-blue-300">MIT / Wharton / GitHub — Randomized Controlled Trial</div>
    <div class="text-gray-400">4,867 developers across 3 companies · Peer-reviewed · 2024</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-3xl font-bold text-white">26%</div>
    <div class="text-blue-300 text-xs">faster task completion</div>
  </div>
</div>

<div class="p-4 bg-cyan-900/30 rounded-lg border-l-4 border-cyan-400 flex items-center justify-between">
  <div>
    <div class="font-bold text-cyan-300">GitHub Internal Experiment</div>
    <div class="text-gray-400">2,000+ developers · 78 min vs. 161 min average task time</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-3xl font-bold text-white">55%</div>
    <div class="text-cyan-300 text-xs">faster task completion</div>
  </div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-400 flex items-center justify-between">
  <div>
    <div class="font-bold text-green-300">Microsoft & Accenture Field Trial</div>
    <div class="text-gray-400">1,974 developers · Pull requests per week measured</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-3xl font-bold text-white">+22%</div>
    <div class="text-green-300 text-xs">more PRs merged/week</div>
  </div>
</div>

<div class="p-4 bg-purple-900/30 rounded-lg border-l-4 border-purple-400 flex items-center justify-between">
  <div>
    <div class="font-bold text-purple-300">Industry-Wide Survey 2025</div>
    <div class="text-gray-400">15M users · 50K organizations · All industries</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-3xl font-bold text-white">84%</div>
    <div class="text-purple-300 text-xs">more successful builds</div>
  </div>
</div>

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-xl border border-blue-500/50 text-center text-sm">
  <span class="text-white font-bold">88% of developers</span><span class="text-gray-300"> report feeling more productive · Junior developers see the largest individual gains</span>
</div>

---

# 💼 What This Means for Your Delivery Cycle

<div class="grid grid-cols-2 gap-5 mt-6 text-sm">

<div>
  <h3 class="text-lg font-bold text-red-400 mb-3">❌ Before Copilot</h3>
  <div class="space-y-2">
    <div class="p-3 bg-red-900/20 rounded-lg border border-red-800/50">
      <div class="text-white font-semibold">PR reviews: 3+ day wait</div>
      <div class="text-gray-400">Senior devs are the bottleneck</div>
    </div>
    <div class="p-3 bg-red-900/20 rounded-lg border border-red-800/50">
      <div class="text-white font-semibold">Boilerplate eats sprint capacity</div>
      <div class="text-gray-400">Test writing, docs, repetitive setup</div>
    </div>
    <div class="p-3 bg-red-900/20 rounded-lg border border-red-800/50">
      <div class="text-white font-semibold">New devs slow for months</div>
      <div class="text-gray-400">Learning codebase = high PM overhead</div>
    </div>
    <div class="p-3 bg-red-900/20 rounded-lg border border-red-800/50">
      <div class="text-white font-semibold">Stories carry over every sprint</div>
      <div class="text-gray-400">Velocity unpredictable</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-green-400 mb-3">✅ After Copilot</h3>
  <div class="space-y-2">
    <div class="p-3 bg-green-900/20 rounded-lg border border-green-800/50">
      <div class="text-white font-semibold">PR reviews: same-day</div>
      <div class="text-gray-400">AI reviews first, humans approve</div>
    </div>
    <div class="p-3 bg-green-900/20 rounded-lg border border-green-800/50">
      <div class="text-white font-semibold">Boilerplate is automatic</div>
      <div class="text-gray-400">Devs focus on the hard, interesting work</div>
    </div>
    <div class="p-3 bg-green-900/20 rounded-lg border border-green-800/50">
      <div class="text-white font-semibold">New devs ramp in weeks</div>
      <div class="text-gray-400">Copilot is their knowledgeable pair programmer</div>
    </div>
    <div class="p-3 bg-green-900/20 rounded-lg border border-green-800/50">
      <div class="text-white font-semibold">Sprint velocity stabilizes</div>
      <div class="text-gray-400">More predictable planning and commitments</div>
    </div>
  </div>
</div>

</div>

---

# 🗺️ Copilot Touches Every Phase of the SDLC

<div class="grid grid-cols-5 gap-2 mt-6 text-xs">

<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40 text-center">
  <div class="text-2xl mb-2">📋</div>
  <div class="font-bold text-blue-300 mb-2">Requirements</div>
  <div class="text-gray-400">Translates stories to tasks</div>
  <div class="text-gray-400 mt-1">Flags missing edge cases</div>
  <div class="text-gray-400 mt-1">Reduces mid-sprint surprises</div>
</div>

<div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/40 text-center">
  <div class="text-2xl mb-2">💻</div>
  <div class="font-bold text-cyan-300 mb-2">Development</div>
  <div class="text-gray-400">Writes code from descriptions</div>
  <div class="text-gray-400 mt-1">Follows your patterns</div>
  <div class="text-gray-400 mt-1">Agent picks up issues autonomously</div>
</div>

<div class="p-3 bg-green-900/30 rounded-lg border border-green-500/40 text-center">
  <div class="text-2xl mb-2">🔍</div>
  <div class="font-bold text-green-300 mb-2">Code Review</div>
  <div class="text-gray-400">Every PR reviewed instantly</div>
  <div class="text-gray-400 mt-1">Security + quality + coverage</div>
  <div class="text-gray-400 mt-1">3 days → same day</div>
</div>

<div class="p-3 bg-yellow-900/30 rounded-lg border border-yellow-500/40 text-center">
  <div class="text-2xl mb-2">🧪</div>
  <div class="font-bold text-yellow-300 mb-2">Testing</div>
  <div class="text-gray-400">Generates test suites</div>
  <div class="text-gray-400 mt-1">Edge cases covered</div>
  <div class="text-gray-400 mt-1">Fewer bugs escaping to QA</div>
</div>

<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40 text-center">
  <div class="text-2xl mb-2">🚀</div>
  <div class="font-bold text-purple-300 mb-2">Ops & Maintenance</div>
  <div class="text-gray-400">Writes changelogs & runbooks</div>
  <div class="text-gray-400 mt-1">Triages user issues</div>
  <div class="text-gray-400 mt-1">Patches dependencies</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-500/40 text-center">
  <div class="text-sm text-gray-300">
    <span class="font-bold text-white">The Agentic flywheel: </span>
    PO writes clear story → Agent codes & tests → Code Review catches issues → Developer approves → Copilot documents → PO validates ✅
  </div>
</div>

---

# ⚡ The Coding Agent: Assign Issues to Copilot

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
  <h3 class="text-xl font-bold text-cyan-400 mb-4">How It Works</h3>
  <div class="space-y-3 text-sm">
    <div class="flex items-start gap-3 p-3 bg-gray-800/60 rounded-lg">
      <span class="text-xl shrink-0">1️⃣</span>
      <div><div class="text-white font-semibold">Assign a GitHub Issue to Copilot</div><div class="text-gray-400">From the issue page, assignees dropdown, or Copilot Chat</div></div>
    </div>
    <div class="flex items-start gap-3 p-3 bg-gray-800/60 rounded-lg">
      <span class="text-xl shrink-0">2️⃣</span>
      <div><div class="text-white font-semibold">Agent starts working</div><div class="text-gray-400">Runs in a secure, sandboxed environment. Creates a branch.</div></div>
    </div>
    <div class="flex items-start gap-3 p-3 bg-gray-800/60 rounded-lg">
      <span class="text-xl shrink-0">3️⃣</span>
      <div><div class="text-white font-semibold">Copilot writes, tests, and proposes</div><div class="text-gray-400">Opens a pull request when complete. No auto-merge.</div></div>
    </div>
    <div class="flex items-start gap-3 p-3 bg-gray-800/60 rounded-lg">
      <span class="text-xl shrink-0">4️⃣</span>
      <div><div class="text-white font-semibold">Developer reviews & approves</div><div class="text-gray-400">Human owns every merge. Full audit trail.</div></div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-400 mb-4">Best Suited For</h3>
  <div class="space-y-2 text-sm">
    <div class="p-2 bg-green-900/30 rounded border border-green-500/50 flex items-center gap-2">
      <span>✅</span><span class="text-gray-300">Bug fixes with clear reproduction steps</span>
    </div>
    <div class="p-2 bg-green-900/30 rounded border border-green-500/50 flex items-center gap-2">
      <span>✅</span><span class="text-gray-300">Adding test coverage to existing code</span>
    </div>
    <div class="p-2 bg-green-900/30 rounded border border-green-500/50 flex items-center gap-2">
      <span>✅</span><span class="text-gray-300">Documentation updates and changelogs</span>
    </div>
    <div class="p-2 bg-green-900/30 rounded border border-green-500/50 flex items-center gap-2">
      <span>✅</span><span class="text-gray-300">Well-specified incremental features</span>
    </div>
    <div class="p-2 bg-green-900/30 rounded border border-green-500/50 flex items-center gap-2">
      <span>✅</span><span class="text-gray-300">Dependency updates and security patches</span>
    </div>
    <div class="p-2 bg-red-900/30 rounded border border-red-500/50 flex items-center gap-2 mt-4">
      <span>⚠️</span><span class="text-gray-400">Vague stories with unclear acceptance criteria</span>
    </div>
    <div class="p-2 bg-red-900/30 rounded border border-red-500/50 flex items-center gap-2">
      <span>⚠️</span><span class="text-gray-400">Complex multi-system architectural changes</span>
    </div>
  </div>
  <div class="mt-4 p-3 bg-blue-900/40 rounded-lg border border-blue-500/40 text-xs">
    <span class="text-blue-300 font-bold">PO insight: </span>
    <span class="text-gray-300">The quality of your acceptance criteria is now the direct input to agent performance.</span>
  </div>
</div>

</div>

---

# 🎯 Features to Encourage — Phased Adoption Roadmap

<div class="grid grid-cols-3 gap-4 mt-4 text-xs">

<div class="p-4 bg-green-900/25 rounded-xl border-2 border-green-500/50">
  <div class="text-center mb-3">
    <span class="px-3 py-1 bg-green-600/50 rounded-full text-green-200 font-bold text-xs">🏆 TIER 1 · Days 1–30</span>
  </div>
  <div class="space-y-3">
    <div class="p-2 bg-gray-800/60 rounded">
      <div class="font-bold text-white">Copilot Chat</div>
      <div class="text-gray-400 mt-1">Q&A, code explanations, brainstorming, drafting. Replaces "quick question" Slack interruptions.</div>
    </div>
    <div class="p-2 bg-gray-800/60 rounded">
      <div class="font-bold text-white">Copilot Code Review</div>
      <div class="text-gray-400 mt-1">Automatic PR review for security, quality, coverage. PR queue drops to same-day.</div>
    </div>
  </div>
  <div class="mt-3 p-2 bg-green-900/40 rounded text-center">
    <div class="text-green-300 font-bold">Target: 80% weekly active use</div>
  </div>
</div>

<div class="p-4 bg-blue-900/25 rounded-xl border-2 border-blue-500/50">
  <div class="text-center mb-3">
    <span class="px-3 py-1 bg-blue-600/50 rounded-full text-blue-200 font-bold text-xs">🥈 TIER 2 · Days 30–60</span>
  </div>
  <div class="space-y-3">
    <div class="p-2 bg-gray-800/60 rounded">
      <div class="font-bold text-white">Coding Agent</div>
      <div class="text-gray-400 mt-1">Assign GitHub Issues to Copilot. Low-medium complexity tasks completed autonomously.</div>
    </div>
    <div class="p-2 bg-gray-800/60 rounded">
      <div class="font-bold text-white">Custom Instructions</div>
      <div class="text-gray-400 mt-1">Team standards baked in. Consistent quality without repeated review feedback.</div>
    </div>
  </div>
  <div class="mt-3 p-2 bg-blue-900/40 rounded text-center">
    <div class="text-blue-300 font-bold">Target: 1+ agent task/sprint</div>
  </div>
</div>

<div class="p-4 bg-purple-900/25 rounded-xl border-2 border-purple-500/50">
  <div class="text-center mb-3">
    <span class="px-3 py-1 bg-purple-600/50 rounded-full text-purple-200 font-bold text-xs">🥉 TIER 3 · Days 60–90</span>
  </div>
  <div class="space-y-3">
    <div class="p-2 bg-gray-800/60 rounded">
      <div class="font-bold text-white">MCP Integrations</div>
      <div class="text-gray-400 mt-1">Connect Copilot to Jira, Confluence, Azure DevOps. AI sees your actual requirements.</div>
    </div>
    <div class="p-2 bg-gray-800/60 rounded">
      <div class="font-bold text-white">Multi-Agent Workflows</div>
      <div class="text-gray-400 mt-1">Multiple agents collaborating on a larger feature. For teams with mature AI practices.</div>
    </div>
  </div>
  <div class="mt-3 p-2 bg-purple-900/40 rounded text-center">
    <div class="text-purple-300 font-bold">Target: Workflow integration</div>
  </div>
</div>

</div>

---

# 📈 Measuring Value: The GitHub Metrics Dashboard

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
  <h3 class="text-xl font-bold text-cyan-400 mb-3">Built-In Metrics (No Setup Required)</h3>
  <div class="space-y-2 text-sm">
    <div class="p-3 bg-gray-800/60 rounded-lg flex items-center gap-3">
      <span class="text-xl">👥</span>
      <div><div class="text-white font-semibold">Active Users</div><div class="text-gray-400">Daily / weekly — who's using it consistently</div></div>
    </div>
    <div class="p-3 bg-gray-800/60 rounded-lg flex items-center gap-3">
      <span class="text-xl">✅</span>
      <div><div class="text-white font-semibold">Acceptance Rate</div><div class="text-gray-400">>25% = suggestions are relevant and useful</div></div>
    </div>
    <div class="p-3 bg-gray-800/60 rounded-lg flex items-center gap-3">
      <span class="text-xl">🔬</span>
      <div><div class="text-white font-semibold">Feature Adoption Breakdown</div><div class="text-gray-400">Chat vs. Code Review vs. Coding Agent</div></div>
    </div>
    <div class="p-3 bg-gray-800/60 rounded-lg flex items-center gap-3">
      <span class="text-xl">📊</span>
      <div><div class="text-white font-semibold">AI Adoption Cohorts</div><div class="text-gray-400">Track teams on their maturity journey</div></div>
    </div>
    <div class="p-3 bg-gray-800/60 rounded-lg flex items-center gap-3">
      <span class="text-xl">🔌</span>
      <div><div class="text-white font-semibold">REST API</div><div class="text-gray-400">Pipe data into your own dashboards</div></div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold text-green-400 mb-3">Connect to DORA Metrics</h3>
  <div class="space-y-2 text-xs">
    <div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/30">
      <div class="font-bold text-blue-300">Deployment Frequency</div>
      <div class="text-gray-400 mt-1">More throughput → more frequent, smaller releases</div>
    </div>
    <div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
      <div class="font-bold text-cyan-300">Lead Time for Changes</div>
      <div class="text-gray-400 mt-1">Faster coding + review → shorter commit-to-deploy</div>
    </div>
    <div class="p-3 bg-green-900/30 rounded-lg border border-green-500/30">
      <div class="font-bold text-green-300">Change Failure Rate</div>
      <div class="text-gray-400 mt-1">Better coverage + review → fewer bad deploys</div>
    </div>
    <div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
      <div class="font-bold text-purple-300">Mean Time to Restore</div>
      <div class="text-gray-400 mt-1">Faster diagnosis + fix generation → quicker recovery</div>
    </div>
  </div>
  <div class="mt-3 p-2 bg-gray-800/60 rounded text-xs text-center text-gray-400">
    Track PR cycle time (open → merge) as your leading indicator
  </div>
</div>

</div>

---

# 📅 Your 90-Day Measurement Plan

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-4 bg-blue-900/25 rounded-xl border border-blue-500/40">
  <div class="text-center mb-3">
    <div class="text-2xl mb-1">📏</div>
    <div class="font-bold text-blue-300 text-sm">Weeks 1–4: Baseline</div>
  </div>
  <div class="space-y-2">
    <div class="p-2 bg-gray-800/50 rounded">Pull DORA metrics from GitHub Insights</div>
    <div class="p-2 bg-gray-800/50 rounded">Measure PR cycle time (open → merge)</div>
    <div class="p-2 bg-gray-800/50 rounded">Survey: hours/week on mechanical work?</div>
    <div class="p-2 bg-gray-800/50 rounded">Record sprint carry-over rate</div>
  </div>
</div>

<div class="p-4 bg-cyan-900/25 rounded-xl border border-cyan-500/40">
  <div class="text-center mb-3">
    <div class="text-2xl mb-1">👀</div>
    <div class="font-bold text-cyan-300 text-sm">Weeks 5–8: Track Adoption</div>
  </div>
  <div class="space-y-2">
    <div class="p-2 bg-gray-800/50 rounded">Weekly active users in dashboard</div>
    <div class="p-2 bg-gray-800/50 rounded">Feature breakdown: what's being used?</div>
    <div class="p-2 bg-gray-800/50 rounded">Flag teams &lt;50% for coaching</div>
    <div class="p-2 bg-gray-800/50 rounded">First Coding Agent task?</div>
  </div>
</div>

<div class="p-4 bg-green-900/25 rounded-xl border border-green-500/40">
  <div class="text-center mb-3">
    <div class="text-2xl mb-1">📊</div>
    <div class="font-bold text-green-300 text-sm">Weeks 9–12: Measure Impact</div>
  </div>
  <div class="space-y-2">
    <div class="p-2 bg-gray-800/50 rounded">Compare PR cycle time: before vs. after</div>
    <div class="p-2 bg-gray-800/50 rounded">Sprint carry-over rate: changed?</div>
    <div class="p-2 bg-gray-800/50 rounded">Re-survey developer satisfaction</div>
    <div class="p-2 bg-gray-800/50 rounded">Calculate ROI</div>
  </div>
</div>

</div>

<div class="mt-5 p-4 bg-gradient-to-r from-blue-600/25 to-green-600/25 rounded-xl border border-blue-500/40">
  <div class="text-center text-sm">
    <span class="font-bold text-white">Simple ROI: </span>
    <span class="text-gray-300">(10 devs × 5 hrs/week saved × $75/hr × 52 weeks) = </span>
    <span class="text-green-400 font-bold">$195,000/year</span>
    <span class="text-gray-300"> vs. </span>
    <span class="text-yellow-300">$2,280/year</span>
    <span class="text-gray-300"> license cost → </span>
    <span class="text-green-400 font-bold">~85x ROI</span>
  </div>
</div>

---
layout: center
class: text-center
---

# 🤝 The Human in the Loop

<div class="mt-6 grid grid-cols-2 gap-8 max-w-3xl mx-auto text-left">

<div class="p-5 bg-gray-800/60 rounded-xl border border-gray-600">
  <h3 class="text-lg font-bold text-cyan-300 mb-3">🤖 What AI Does Better</h3>
  <div class="space-y-2 text-sm text-gray-300">
    <div>⚡ Execute well-specified tasks at speed</div>
    <div>⚡ Review code consistently at any hour</div>
    <div>⚡ Generate boilerplate without fatigue</div>
    <div>⚡ Follow standards without reminders</div>
    <div>⚡ Work in parallel across multiple tasks</div>
  </div>
</div>

<div class="p-5 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 rounded-xl border border-blue-500/40">
  <h3 class="text-lg font-bold text-blue-300 mb-3">👤 What Stays Irreversibly Human</h3>
  <div class="space-y-2 text-sm text-gray-300">
    <div>🎯 <strong class="text-white">Product judgment</strong> — what should we build?</div>
    <div>🤝 <strong class="text-white">Stakeholder trust</strong> — relationships & alignment</div>
    <div>⚖️ <strong class="text-white">Ethical assessment</strong> — is this the right thing?</div>
    <div>🎭 <strong class="text-white">User empathy</strong> — does this solve the real problem?</div>
    <div>🏆 <strong class="text-white">Final validation</strong> — acceptance criteria sign-off</div>
  </div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-xl border border-blue-500/50 max-w-2xl mx-auto text-sm">
  <span class="font-bold text-white">Your new superpower as a PO: </span>
  <span class="text-gray-300">Well-written stories with clear acceptance criteria now have a direct multiplier on delivery speed. Invest in story quality.</span>
</div>

---

# ➡️ Your Next Steps

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 bg-blue-900/30 rounded-xl border border-blue-500/40">
  <div class="text-center mb-3">
    <div class="text-3xl mb-1">📅</div>
    <div class="font-bold text-blue-300">This Week</div>
  </div>
  <div class="space-y-2 text-gray-300">
    <div class="flex items-start gap-2"><span>☐</span><span>Ask: does your team have Copilot licenses?</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Ask: are they using them consistently?</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Identify the access or adoption gap</span></div>
  </div>
</div>

<div class="p-4 bg-cyan-900/30 rounded-xl border border-cyan-500/40">
  <div class="text-center mb-3">
    <div class="text-3xl mb-1">🗓️</div>
    <div class="font-bold text-cyan-300">This Month</div>
  </div>
  <div class="space-y-2 text-gray-300">
    <div class="flex items-start gap-2"><span>☐</span><span>Enable the Copilot Metrics Dashboard</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Establish your DORA baseline</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Drive Tier 1 adoption to >80% weekly</span></div>
  </div>
</div>

<div class="p-4 bg-green-900/30 rounded-xl border border-green-500/40">
  <div class="text-center mb-3">
    <div class="text-3xl mb-1">📆</div>
    <div class="font-bold text-green-300">This Quarter</div>
  </div>
  <div class="space-y-2 text-gray-300">
    <div class="flex items-start gap-2"><span>☐</span><span>Set sprint velocity improvement target (15–25%)</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Trial Coding Agent on 2–3 items/sprint</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Calculate ROI with the 90-day framework</span></div>
  </div>
</div>

</div>

<div class="mt-5 p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/40 text-center text-sm">
  <span class="font-bold text-orange-300">The competitive risk of inaction: </span>
  <span class="text-gray-300">Teams using Copilot are shipping 20–55% faster. Every sprint without adoption is a sprint where the gap widens.</span>
</div>

---
layout: center
class: text-center
---

# 📚 Sources & Further Reading

<div class="grid grid-cols-2 gap-4 mt-6 max-w-3xl mx-auto text-xs text-left">

<div class="space-y-2">
  <div class="p-3 bg-gray-800/60 rounded-lg">
    <div class="font-bold text-blue-300">ACM: Measuring Copilot's Impact (2024)</div>
    <div class="text-gray-400">26% faster completion · RCT with 4,867 devs</div>
    <div class="text-gray-600 mt-1">cacm.acm.org</div>
  </div>
  <div class="p-3 bg-gray-800/60 rounded-lg">
    <div class="font-bold text-cyan-300">MIT GenAI Field Experiment (2024)</div>
    <div class="text-gray-400">12–22% more PRs/week · Microsoft & Accenture</div>
    <div class="text-gray-600 mt-1">mit-genai.pubpub.org</div>
  </div>
  <div class="p-3 bg-gray-800/60 rounded-lg">
    <div class="font-bold text-green-300">GitHub Copilot Usage Metrics Docs</div>
    <div class="text-gray-400">Dashboard guide & REST API reference</div>
    <div class="text-gray-600 mt-1">docs.github.com/en/copilot</div>
  </div>
</div>

<div class="space-y-2">
  <div class="p-3 bg-gray-800/60 rounded-lg">
    <div class="font-bold text-purple-300">Copilot Coding Agent 101 (GitHub Blog)</div>
    <div class="text-gray-400">Getting started with agentic workflows</div>
    <div class="text-gray-600 mt-1">github.blog</div>
  </div>
  <div class="p-3 bg-gray-800/60 rounded-lg">
    <div class="font-bold text-yellow-300">DORA Research</div>
    <div class="text-gray-400">Gold-standard DevOps delivery metrics</div>
    <div class="text-gray-600 mt-1">devops-research.com</div>
  </div>
  <div class="p-3 bg-gray-800/60 rounded-lg">
    <div class="font-bold text-orange-300">Second Talent: Copilot Stats 2025</div>
    <div class="text-gray-400">84% more successful builds · 15M users</div>
    <div class="text-gray-600 mt-1">secondtalent.com</div>
  </div>
</div>

</div>

<div class="mt-6 text-gray-500 text-xs">
  Full reference list at <span class="text-blue-400">exec-talks/copilot-sdlc-pm/README.md</span>
</div>
