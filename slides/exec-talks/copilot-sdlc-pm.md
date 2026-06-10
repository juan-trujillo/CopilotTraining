---
theme: default
colorSchema: dark
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

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: #0d1117;">
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-72" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-72 relative" alt="SDP Logo" />
  </div>
  <h1 class="!text-5xl !font-bold !mt-8 relative z-10" style="background: linear-gradient(135deg, #bc8cff 0%, #79c0ff 50%, #3fb950 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
    Your Team's New Teammate
  </h1>
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 rounded-full text-xl font-medium" style="background: linear-gradient(135deg, rgba(110,64,201,0.8) 0%, rgba(33,136,255,0.8) 100%); color: #e6edf3;">
      GitHub Copilot Across the Delivery Lifecycle
    </span>
  </div>
  <div class="mt-8 w-32 h-1 rounded-full relative z-10" style="background: linear-gradient(to right, transparent, #bc8cff, transparent);"></div>
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

<div class="p-5 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-3xl mb-3">🤔</div>
  <div class="text-lg font-bold mb-1" style="color: #79c0ff;">Why should my team use this?</div>
  <div class="text-sm" style="color: #8b949e;">Evidence-backed business case</div>
</div>

<div class="p-5 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-3xl mb-3">📣</div>
  <div class="text-lg font-bold mb-1" style="color: #79c0ff;">Why should I encourage adoption?</div>
  <div class="text-sm" style="color: #8b949e;">Competitive reality & team health</div>
</div>

<div class="p-5 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-3xl mb-3">🎯</div>
  <div class="text-lg font-bold mb-1" style="color: #3fb950;">What features should we encourage?</div>
  <div class="text-sm" style="color: #8b949e;">Practical adoption roadmap</div>
</div>

<div class="p-5 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-3xl mb-3">📊</div>
  <div class="text-lg font-bold mb-1" style="color: #bc8cff;">How do I measure the value?</div>
  <div class="text-sm" style="color: #8b949e;">Metrics framework & ROI</div>
</div>

</div>

---

# 🌐 The Window for "Wait and See" Has Closed

<div style="background: #0d1117;">
<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-5 rounded-xl border text-center" style="background: #161b22; border-color: #30363d;">
  <div class="text-5xl font-bold mb-2" style="color: #e6edf3;">15M+</div>
  <div class="font-semibold" style="color: #79c0ff;">Active Users</div>
  <div class="text-sm mt-1" style="color: #8b949e;">Globally, and growing</div>
</div>
<div class="p-5 rounded-xl border text-center" style="background: #161b22; border-color: #30363d;">
  <div class="text-5xl font-bold mb-2" style="color: #e6edf3;">90%</div>
  <div class="font-semibold" style="color: #79c0ff;">Fortune 100</div>
  <div class="text-sm mt-1" style="color: #8b949e;">Already deployed</div>
</div>
<div class="p-5 rounded-xl border text-center" style="background: #161b22; border-color: #30363d;">
  <div class="text-5xl font-bold mb-2" style="color: #e6edf3;">50K+</div>
  <div class="font-semibold" style="color: #3fb950;">Organizations</div>
  <div class="text-sm mt-1" style="color: #8b949e;">Across every industry</div>
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-2" style="color: #e6edf3;">🤖 What is Copilot, really?</div>
  <div style="color: #8b949e;">Not just autocomplete. An AI system that writes code, reviews PRs, generates tests, documents changes, and — increasingly — autonomously completes tasks from your backlog.</div>
</div>
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-2" style="color: #e6edf3;">⚡ What does "Agentic" mean?</div>
  <div style="color: #8b949e;">Assign a GitHub Issue → Copilot creates a branch, writes the code, runs tests, opens a PR. A teammate who works while others sleep, never misses a standup, and always follows your standards.</div>
</div>
</div>
</div>

---

# 📊 The Research Is In — And It's Not Vendor Marketing

<div style="background: #0d1117;">
<div class="space-y-2 mt-2 text-sm">

<div class="p-2.5 rounded-lg flex items-center justify-between" style="background: #161b22; border-left: 4px solid #79c0ff;">
  <div>
    <div class="font-bold" style="color: #79c0ff;">MIT / Wharton / GitHub — Randomized Controlled Trial</div>
    <div style="color: #8b949e;">4,867 developers across 3 companies · Peer-reviewed · 2024</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-2xl font-bold" style="color: #e6edf3;">26%</div>
    <div class="text-xs" style="color: #79c0ff;">faster task completion</div>
  </div>
</div>

<div class="p-2.5 rounded-lg flex items-center justify-between" style="background: #161b22; border-left: 4px solid #79c0ff;">
  <div>
    <div class="font-bold" style="color: #79c0ff;">GitHub Internal Experiment</div>
    <div style="color: #8b949e;">2,000+ developers · 78 min vs. 161 min average task time</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-2xl font-bold" style="color: #e6edf3;">55%</div>
    <div class="text-xs" style="color: #79c0ff;">faster task completion</div>
  </div>
</div>

<div class="p-2.5 rounded-lg flex items-center justify-between" style="background: #161b22; border-left: 4px solid #3fb950;">
  <div>
    <div class="font-bold" style="color: #3fb950;">Microsoft & Accenture Field Trial</div>
    <div style="color: #8b949e;">1,974 developers · Pull requests per week measured</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-2xl font-bold" style="color: #e6edf3;">+22%</div>
    <div class="text-xs" style="color: #3fb950;">more PRs merged/week</div>
  </div>
</div>

<div class="p-2.5 rounded-lg flex items-center justify-between" style="background: #161b22; border-left: 4px solid #bc8cff;">
  <div>
    <div class="font-bold" style="color: #bc8cff;">Industry-Wide Survey 2025</div>
    <div style="color: #8b949e;">15M users · 50K organizations · All industries</div>
  </div>
  <div class="text-right ml-6 shrink-0">
    <div class="text-2xl font-bold" style="color: #e6edf3;">84%</div>
    <div class="text-xs" style="color: #bc8cff;">more successful builds</div>
  </div>
</div>

</div>

<div class="mt-2 p-2.5 rounded-xl border text-center text-sm" style="background: #161b22; border-color: #30363d;">
  <span class="font-bold" style="color: #e6edf3;">88% of developers</span><span style="color: #8b949e;"> report feeling more productive · Junior developers see the largest individual gains</span>
</div>
</div>

---

# 💼 What This Means for Your Delivery Cycle

<div style="background: #0d1117;">
<div class="grid grid-cols-2 gap-5 mt-4 text-sm">

<div>
  <h3 class="text-lg font-bold mb-2" style="color: #f85149;">❌ Before Copilot</h3>
  <div class="space-y-2">
    <div class="p-2 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-semibold" style="color: #e6edf3;">PR reviews: 3+ day wait</div>
      <div style="color: #8b949e;">Senior devs are the bottleneck</div>
    </div>
    <div class="p-2 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-semibold" style="color: #e6edf3;">Boilerplate eats sprint capacity</div>
      <div style="color: #8b949e;">Test writing, docs, repetitive setup</div>
    </div>
    <div class="p-2 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-semibold" style="color: #e6edf3;">New devs slow for months</div>
      <div style="color: #8b949e;">Learning codebase = high PM overhead</div>
    </div>
    <div class="p-2 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-semibold" style="color: #e6edf3;">Stories carry over every sprint</div>
      <div style="color: #8b949e;">Velocity unpredictable</div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold mb-2" style="color: #3fb950;">✅ After Copilot</h3>
  <div class="space-y-2">
    <div class="p-2 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-semibold" style="color: #e6edf3;">PR reviews: same-day</div>
      <div style="color: #8b949e;">AI reviews first, humans approve</div>
    </div>
    <div class="p-2 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-semibold" style="color: #e6edf3;">Boilerplate is automatic</div>
      <div style="color: #8b949e;">Devs focus on the hard, interesting work</div>
    </div>
    <div class="p-2 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-semibold" style="color: #e6edf3;">New devs ramp in weeks</div>
      <div style="color: #8b949e;">Copilot is their knowledgeable pair programmer</div>
    </div>
    <div class="p-2 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-semibold" style="color: #e6edf3;">Sprint velocity stabilizes</div>
      <div style="color: #8b949e;">More predictable planning and commitments</div>
    </div>
  </div>
</div>

</div>
</div>

---

# 🗺️ Copilot Touches Every Phase of the SDLC

<div style="background: #0d1117;">
<div class="grid grid-cols-5 gap-2 mt-3 text-xs">

<div class="p-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
  <div class="text-2xl mb-2">📋</div>
  <div class="font-bold mb-1" style="color: #79c0ff;">Requirements</div>
  <div style="color: #8b949e;">Translates stories to tasks</div>
  <div style="color: #8b949e;">Flags missing edge cases</div>
  <div style="color: #8b949e;">Reduces mid-sprint surprises</div>
</div>

<div class="p-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
  <div class="text-2xl mb-2">💻</div>
  <div class="font-bold mb-1" style="color: #79c0ff;">Development</div>
  <div style="color: #8b949e;">Writes code from descriptions</div>
  <div style="color: #8b949e;">Follows your patterns</div>
  <div style="color: #8b949e;">Agent picks up issues autonomously</div>
</div>

<div class="p-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
  <div class="text-2xl mb-2">🔍</div>
  <div class="font-bold mb-1" style="color: #3fb950;">Code Review</div>
  <div style="color: #8b949e;">Every PR reviewed instantly</div>
  <div style="color: #8b949e;">Security + quality + coverage</div>
  <div style="color: #8b949e;">3 days → same day</div>
</div>

<div class="p-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
  <div class="text-2xl mb-2">🧪</div>
  <div class="font-bold mb-1" style="color: #d29922;">Testing</div>
  <div style="color: #8b949e;">Generates test suites</div>
  <div style="color: #8b949e;">Edge cases covered</div>
  <div style="color: #8b949e;">Fewer bugs escaping to QA</div>
</div>

<div class="p-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
  <div class="text-2xl mb-2">🚀</div>
  <div class="font-bold mb-1" style="color: #bc8cff;">Ops & Maintenance</div>
  <div style="color: #8b949e;">Writes changelogs & runbooks</div>
  <div style="color: #8b949e;">Triages user issues</div>
  <div style="color: #8b949e;">Patches dependencies</div>
</div>

</div>

<div class="mt-3 p-4 rounded-xl border text-center" style="background: #161b22; border-color: #30363d;">
  <div class="text-sm" style="color: #8b949e;">
    <span class="font-bold" style="color: #e6edf3;">The Agentic flywheel: </span>
    PO writes clear story → Agent codes & tests → Code Review catches issues → Developer approves → Copilot documents → PO validates ✅
  </div>
</div>
</div>

---

# ⚡ The Coding Agent: Assign Issues to Copilot

<div style="background: #0d1117;">
<div class="grid grid-cols-2 gap-6 mt-3">

<div>
  <h3 class="text-xl font-bold mb-4" style="color: #79c0ff;">How It Works</h3>
  <div class="space-y-3 text-sm">
    <div class="flex items-start gap-3 p-2.5 rounded-lg" style="background: #161b22;">
      <span class="text-xl shrink-0">1️⃣</span>
      <div><div class="font-semibold" style="color: #e6edf3;">Assign a GitHub Issue to Copilot</div><div style="color: #8b949e;">From the issue page, assignees dropdown, or Copilot Chat</div></div>
    </div>
    <div class="flex items-start gap-3 p-2.5 rounded-lg" style="background: #161b22;">
      <span class="text-xl shrink-0">2️⃣</span>
      <div><div class="font-semibold" style="color: #e6edf3;">Agent starts working</div><div style="color: #8b949e;">Runs in a secure, sandboxed environment. Creates a branch.</div></div>
    </div>
    <div class="flex items-start gap-3 p-2.5 rounded-lg" style="background: #161b22;">
      <span class="text-xl shrink-0">3️⃣</span>
      <div><div class="font-semibold" style="color: #e6edf3;">Copilot writes, tests, and proposes</div><div style="color: #8b949e;">Opens a pull request when complete. No auto-merge.</div></div>
    </div>
    <div class="flex items-start gap-3 p-2.5 rounded-lg" style="background: #161b22;">
      <span class="text-xl shrink-0">4️⃣</span>
      <div><div class="font-semibold" style="color: #e6edf3;">Developer reviews & approves</div><div style="color: #8b949e;">Human owns every merge. Full audit trail.</div></div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold mb-4" style="color: #3fb950;">Best Suited For</h3>
  <div class="space-y-2 text-sm">
    <div class="p-2 rounded border flex items-center gap-2" style="background: #161b22; border-color: #30363d;">
      <span>✅</span><span style="color: #8b949e;">Bug fixes with clear reproduction steps</span>
    </div>
    <div class="p-2 rounded border flex items-center gap-2" style="background: #161b22; border-color: #30363d;">
      <span>✅</span><span style="color: #8b949e;">Adding test coverage to existing code</span>
    </div>
    <div class="p-2 rounded border flex items-center gap-2" style="background: #161b22; border-color: #30363d;">
      <span>✅</span><span style="color: #8b949e;">Documentation updates and changelogs</span>
    </div>
    <div class="p-2 rounded border flex items-center gap-2" style="background: #161b22; border-color: #30363d;">
      <span>✅</span><span style="color: #8b949e;">Well-specified incremental features</span>
    </div>
    <div class="p-2 rounded border flex items-center gap-2" style="background: #161b22; border-color: #30363d;">
      <span>✅</span><span style="color: #8b949e;">Dependency updates and security patches</span>
    </div>
    <div class="p-2 rounded border flex items-center gap-2 mt-4" style="background: #161b22; border-color: #30363d;">
      <span>⚠️</span><span style="color: #8b949e;">Vague stories with unclear acceptance criteria</span>
    </div>
    <div class="p-2 rounded border flex items-center gap-2" style="background: #161b22; border-color: #30363d;">
      <span>⚠️</span><span style="color: #8b949e;">Complex multi-system architectural changes</span>
    </div>
  </div>
  <div class="mt-4 p-3 rounded-lg border text-xs" style="background: #161b22; border-color: #30363d;">
    <span class="font-bold" style="color: #79c0ff;">PO insight: </span>
    <span style="color: #8b949e;">The quality of your acceptance criteria is now the direct input to agent performance.</span>
  </div>
</div>

</div>
</div>

---

# 🎯 Features to Encourage — Phased Adoption Roadmap

<div style="background: #0d1117;">
<div class="grid grid-cols-3 gap-4 mt-3 text-xs">

<div class="p-3 rounded-xl border-2" style="background: #161b22; border-color: #30363d;">
  <div class="text-center mb-3">
    <span class="px-3 py-1 rounded-full font-bold text-xs border" style="background: #161b22; color: #3fb950; border-color: #30363d;">🏆 TIER 1 · Days 1–30</span>
  </div>
  <div class="space-y-3">
    <div class="p-2 rounded" style="background: #0d1117;">
      <div class="font-bold" style="color: #e6edf3;">Copilot Chat</div>
      <div class="mt-1" style="color: #8b949e;">Q&A, code explanations, brainstorming, drafting. Replaces "quick question" Slack interruptions.</div>
    </div>
    <div class="p-2 rounded" style="background: #0d1117;">
      <div class="font-bold" style="color: #e6edf3;">Copilot Code Review</div>
      <div class="mt-1" style="color: #8b949e;">Automatic PR review for security, quality, coverage. PR queue drops to same-day.</div>
    </div>
  </div>
  <div class="mt-3 p-2 rounded text-center" style="background: #0d1117;">
    <div class="font-bold" style="color: #3fb950;">Target: 80% weekly active use</div>
  </div>
</div>

<div class="p-3 rounded-xl border-2" style="background: #161b22; border-color: #30363d;">
  <div class="text-center mb-3">
    <span class="px-3 py-1 rounded-full font-bold text-xs border" style="background: #161b22; color: #79c0ff; border-color: #30363d;">🥈 TIER 2 · Days 30–60</span>
  </div>
  <div class="space-y-3">
    <div class="p-2 rounded" style="background: #0d1117;">
      <div class="font-bold" style="color: #e6edf3;">Coding Agent</div>
      <div class="mt-1" style="color: #8b949e;">Assign GitHub Issues to Copilot. Low-medium complexity tasks completed autonomously.</div>
    </div>
    <div class="p-2 rounded" style="background: #0d1117;">
      <div class="font-bold" style="color: #e6edf3;">Custom Instructions</div>
      <div class="mt-1" style="color: #8b949e;">Team standards baked in. Consistent quality without repeated review feedback.</div>
    </div>
  </div>
  <div class="mt-3 p-2 rounded text-center" style="background: #0d1117;">
    <div class="font-bold" style="color: #79c0ff;">Target: 1+ agent task/sprint</div>
  </div>
</div>

<div class="p-3 rounded-xl border-2" style="background: #161b22; border-color: #30363d;">
  <div class="text-center mb-3">
    <span class="px-3 py-1 rounded-full font-bold text-xs border" style="background: #161b22; color: #bc8cff; border-color: #30363d;">🥉 TIER 3 · Days 60–90</span>
  </div>
  <div class="space-y-3">
    <div class="p-2 rounded" style="background: #0d1117;">
      <div class="font-bold" style="color: #e6edf3;">MCP Integrations</div>
      <div class="mt-1" style="color: #8b949e;">Connect Copilot to Jira, Confluence, Azure DevOps. AI sees your actual requirements.</div>
    </div>
    <div class="p-2 rounded" style="background: #0d1117;">
      <div class="font-bold" style="color: #e6edf3;">Multi-Agent Workflows</div>
      <div class="mt-1" style="color: #8b949e;">Multiple agents collaborating on a larger feature. For teams with mature AI practices.</div>
    </div>
  </div>
  <div class="mt-3 p-2 rounded text-center" style="background: #0d1117;">
    <div class="font-bold" style="color: #bc8cff;">Target: Workflow integration</div>
  </div>
</div>

</div>
</div>

---

# 📈 Measuring Value: The GitHub Metrics Dashboard

<div style="background: #0d1117;">
<div class="grid grid-cols-2 gap-6 mt-4">

<div>
  <h3 class="text-xl font-bold mb-3" style="color: #79c0ff;">Built-In Metrics (No Setup Required)</h3>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22;">
      <span class="text-xl">👥</span>
      <div><div class="font-semibold" style="color: #e6edf3;">Active Users</div><div style="color: #8b949e;">Daily / weekly — who's using it consistently</div></div>
    </div>
    <div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22;">
      <span class="text-xl">✅</span>
      <div><div class="font-semibold" style="color: #e6edf3;">Acceptance Rate</div><div style="color: #8b949e;">>25% = suggestions are relevant and useful</div></div>
    </div>
    <div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22;">
      <span class="text-xl">🔬</span>
      <div><div class="font-semibold" style="color: #e6edf3;">Feature Adoption Breakdown</div><div style="color: #8b949e;">Chat vs. Code Review vs. Coding Agent</div></div>
    </div>
    <div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22;">
      <span class="text-xl">📊</span>
      <div><div class="font-semibold" style="color: #e6edf3;">AI Adoption Cohorts</div><div style="color: #8b949e;">Track teams on their maturity journey</div></div>
    </div>
    <div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22;">
      <span class="text-xl">🔌</span>
      <div><div class="font-semibold" style="color: #e6edf3;">REST API</div><div style="color: #8b949e;">Pipe data into your own dashboards</div></div>
    </div>
  </div>
</div>

<div>
  <h3 class="text-xl font-bold mb-3" style="color: #3fb950;">Connect to DORA Metrics</h3>
  <div class="space-y-2 text-xs">
    <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-bold" style="color: #79c0ff;">Deployment Frequency</div>
      <div class="mt-1" style="color: #8b949e;">More throughput → more frequent, smaller releases</div>
    </div>
    <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-bold" style="color: #79c0ff;">Lead Time for Changes</div>
      <div class="mt-1" style="color: #8b949e;">Faster coding + review → shorter commit-to-deploy</div>
    </div>
    <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-bold" style="color: #3fb950;">Change Failure Rate</div>
      <div class="mt-1" style="color: #8b949e;">Better coverage + review → fewer bad deploys</div>
    </div>
    <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="font-bold" style="color: #bc8cff;">Mean Time to Restore</div>
      <div class="mt-1" style="color: #8b949e;">Faster diagnosis + fix generation → quicker recovery</div>
    </div>
  </div>
  <div class="mt-3 p-2 rounded text-xs text-center" style="background: #161b22; color: #8b949e;">
    Track PR cycle time (open → merge) as your leading indicator
  </div>
</div>

</div>
</div>

---

# 📅 Your 90-Day Measurement Plan

<div style="background: #0d1117;">
<div class="grid grid-cols-3 gap-4 mt-4 text-xs">

<div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-center mb-3">
    <div class="text-2xl mb-1">📏</div>
    <div class="font-bold text-sm" style="color: #79c0ff;">Weeks 1–4: Baseline</div>
  </div>
  <div class="space-y-2">
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Pull DORA metrics from GitHub Insights</div>
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Measure PR cycle time (open → merge)</div>
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Survey: hours/week on mechanical work?</div>
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Record sprint carry-over rate</div>
  </div>
</div>

<div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-center mb-3">
    <div class="text-2xl mb-1">👀</div>
    <div class="font-bold text-sm" style="color: #79c0ff;">Weeks 5–8: Track Adoption</div>
  </div>
  <div class="space-y-2">
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Weekly active users in dashboard</div>
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Feature breakdown: what's being used?</div>
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Flag teams &lt;50% for coaching</div>
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">First Coding Agent task?</div>
  </div>
</div>

<div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-center mb-3">
    <div class="text-2xl mb-1">📊</div>
    <div class="font-bold text-sm" style="color: #3fb950;">Weeks 9–12: Measure Impact</div>
  </div>
  <div class="space-y-2">
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Compare PR cycle time: before vs. after</div>
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Sprint carry-over rate: changed?</div>
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Re-survey developer satisfaction</div>
    <div class="p-1.5 rounded" style="background: #0d1117; color: #8b949e;">Calculate ROI</div>
  </div>
</div>

</div>

<div class="mt-3 p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-center text-sm">
    <span class="font-bold" style="color: #e6edf3;">Simple ROI: </span>
    <span style="color: #8b949e;">(10 devs × 5 hrs/week saved × $75/hr × 52 weeks) = </span>
    <span class="font-bold" style="color: #3fb950;">$195,000/year</span>
    <span style="color: #8b949e;"> vs. </span>
    <span style="color: #d29922;">$2,280/year</span>
    <span style="color: #8b949e;"> license cost → </span>
    <span class="font-bold" style="color: #3fb950;">~85x ROI</span>
  </div>
</div>
</div>

---
layout: center
class: text-center
---

# 🤝 The Human in the Loop

<div class="mt-6 grid grid-cols-2 gap-8 max-w-3xl mx-auto text-left">

<div class="p-5 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <h3 class="text-lg font-bold mb-3" style="color: #79c0ff;">🤖 What AI Does Better</h3>
  <div class="space-y-2 text-sm" style="color: #8b949e;">
    <div>⚡ Execute well-specified tasks at speed</div>
    <div>⚡ Review code consistently at any hour</div>
    <div>⚡ Generate boilerplate without fatigue</div>
    <div>⚡ Follow standards without reminders</div>
    <div>⚡ Work in parallel across multiple tasks</div>
  </div>
</div>

<div class="p-5 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <h3 class="text-lg font-bold mb-3" style="color: #bc8cff;">👤 What Stays Irreversibly Human</h3>
  <div class="space-y-2 text-sm" style="color: #8b949e;">
    <div>🎯 <strong style="color: #e6edf3;">Product judgment</strong> — what should we build?</div>
    <div>🤝 <strong style="color: #e6edf3;">Stakeholder trust</strong> — relationships & alignment</div>
    <div>⚖️ <strong style="color: #e6edf3;">Ethical assessment</strong> — is this the right thing?</div>
    <div>🎭 <strong style="color: #e6edf3;">User empathy</strong> — does this solve the real problem?</div>
    <div>🏆 <strong style="color: #e6edf3;">Final validation</strong> — acceptance criteria sign-off</div>
  </div>
</div>

</div>

<div class="mt-6 p-4 rounded-xl border max-w-2xl mx-auto text-sm" style="background: #161b22; border-color: #30363d;">
  <span class="font-bold" style="color: #e6edf3;">Your new superpower as a PO: </span>
  <span style="color: #8b949e;">Well-written stories with clear acceptance criteria now have a direct multiplier on delivery speed. Invest in story quality.</span>
</div>

---

# ➡️ Your Next Steps

<div style="background: #0d1117;">
<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-center mb-3">
    <div class="text-3xl mb-1">📅</div>
    <div class="font-bold" style="color: #79c0ff;">This Week</div>
  </div>
  <div class="space-y-2" style="color: #8b949e;">
    <div class="flex items-start gap-2"><span>☐</span><span>Ask: does your team have Copilot licenses?</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Ask: are they using them consistently?</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Identify the access or adoption gap</span></div>
  </div>
</div>

<div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-center mb-3">
    <div class="text-3xl mb-1">🗓️</div>
    <div class="font-bold" style="color: #79c0ff;">This Month</div>
  </div>
  <div class="space-y-2" style="color: #8b949e;">
    <div class="flex items-start gap-2"><span>☐</span><span>Enable the Copilot Metrics Dashboard</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Establish your DORA baseline</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Drive Tier 1 adoption to >80% weekly</span></div>
  </div>
</div>

<div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="text-center mb-3">
    <div class="text-3xl mb-1">📆</div>
    <div class="font-bold" style="color: #3fb950;">This Quarter</div>
  </div>
  <div class="space-y-2" style="color: #8b949e;">
    <div class="flex items-start gap-2"><span>☐</span><span>Set sprint velocity improvement target (15–25%)</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Trial Coding Agent on 2–3 items/sprint</span></div>
    <div class="flex items-start gap-2"><span>☐</span><span>Calculate ROI with the 90-day framework</span></div>
  </div>
</div>

</div>

<div class="mt-4 p-4 rounded-xl border text-center text-sm" style="background: #161b22; border-color: #30363d;">
  <span class="font-bold" style="color: #d29922;">The competitive risk of inaction: </span>
  <span style="color: #8b949e;">Teams using Copilot are shipping 20–55% faster. Every sprint without adoption is a sprint where the gap widens.</span>
</div>
</div>

---
layout: center
class: text-center
---

# 📚 Sources & Further Reading

<div class="grid grid-cols-2 gap-4 mt-6 max-w-3xl mx-auto text-xs text-left">

<div class="space-y-2">
  <div class="p-3 rounded-lg" style="background: #161b22;">
    <div class="font-bold" style="color: #79c0ff;">ACM: Measuring Copilot's Impact (2024)</div>
    <div style="color: #8b949e;">26% faster completion · RCT with 4,867 devs</div>
    <div class="mt-1" style="color: #8b949e;">cacm.acm.org</div>
  </div>
  <div class="p-3 rounded-lg" style="background: #161b22;">
    <div class="font-bold" style="color: #79c0ff;">MIT GenAI Field Experiment (2024)</div>
    <div style="color: #8b949e;">12–22% more PRs/week · Microsoft & Accenture</div>
    <div class="mt-1" style="color: #8b949e;">mit-genai.pubpub.org</div>
  </div>
  <div class="p-3 rounded-lg" style="background: #161b22;">
    <div class="font-bold" style="color: #3fb950;">GitHub Copilot Usage Metrics Docs</div>
    <div style="color: #8b949e;">Dashboard guide & REST API reference</div>
    <div class="mt-1" style="color: #8b949e;">docs.github.com/en/copilot</div>
  </div>
</div>

<div class="space-y-2">
  <div class="p-3 rounded-lg" style="background: #161b22;">
    <div class="font-bold" style="color: #bc8cff;">Copilot Coding Agent 101 (GitHub Blog)</div>
    <div style="color: #8b949e;">Getting started with agentic workflows</div>
    <div class="mt-1" style="color: #8b949e;">github.blog</div>
  </div>
  <div class="p-3 rounded-lg" style="background: #161b22;">
    <div class="font-bold" style="color: #d29922;">DORA Research</div>
    <div style="color: #8b949e;">Gold-standard DevOps delivery metrics</div>
    <div class="mt-1" style="color: #8b949e;">devops-research.com</div>
  </div>
  <div class="p-3 rounded-lg" style="background: #161b22;">
    <div class="font-bold" style="color: #f85149;">Second Talent: Copilot Stats 2025</div>
    <div style="color: #8b949e;">84% more successful builds · 15M users</div>
    <div class="mt-1" style="color: #8b949e;">secondtalent.com</div>
  </div>
</div>

</div>

<div class="mt-6 text-xs" style="color: #8b949e;">
  Full reference list at <span style="color: #79c0ff;">exec-talks/copilot-sdlc-pm/README.md</span>
</div>
