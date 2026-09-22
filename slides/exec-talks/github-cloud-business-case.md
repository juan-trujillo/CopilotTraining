---
theme: default
colorSchema: dark
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Cloud: A Platform Decision, Not a Hosting Decision
  The executive business case for moving from GitHub Enterprise Server to GitHub Enterprise Cloud
drawings:
  persist: false
transition: slide-left
title: GitHub Cloud — The Executive Business Case
module: exec-talks/github-cloud-business-case
mdc: true
status: active
updated: 2026-09-16
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: #0d1117;">
  <div class="absolute inset-0" style="background: radial-gradient(circle at 50% 35%, rgba(31,111,235,.22), transparent 42%);"></div>
  <div class="relative flex items-center gap-2 mb-7">
    <img src="./sdp-logo.png" class="w-7 h-7" alt="" />
    <span class="text-sm font-medium tracking-wide uppercase" style="color: #8b949e;">Executive Talk</span>
  </div>
  <h1 class="relative !text-5xl !font-bold !leading-tight text-center max-w-5xl" style="color: #e6edf3;">
    GitHub Cloud: A Platform Decision,<br/><span style="color: #79c0ff;">Not a Hosting Decision</span>
  </h1>
  <p class="relative mt-6 text-xl text-center max-w-3xl" style="color: #8b949e;">
    Building the business case to move from GitHub Enterprise Server
  </p>
  <div class="relative mt-9 flex gap-4">
    <div class="px-5 py-2 rounded-md text-sm font-medium" style="background: #238636; color: white;">30–40 Minutes</div>
    <div class="px-5 py-2 rounded-md text-sm border" style="border-color: #30363d; color: #e6edf3;">Engineering Leaders</div>
    <div class="px-5 py-2 rounded-md text-sm border" style="border-color: #30363d; color: #e6edf3;">Security & Platform</div>
  </div>
</div>

---
layout: center
---

# The Decision Standard

<div class="max-w-4xl mx-auto mt-7">
  <div class="p-6 rounded-xl border" style="background: #161b22; border-color: #388bfd;">
    <div class="text-2xl font-bold leading-snug" style="color: #e6edf3;">
      Move only if a representative pilot shows that the benefits outweigh
      <span style="color: #f0b429;">migration risk and transition cost.</span>
    </div>
  </div>
  <div class="mt-5 grid grid-cols-3 gap-4 text-left">
    <div class="p-4 border-t-3" style="background: #161b22; border-color: #3fb950;">
      <div class="font-bold" style="color: #3fb950;">Reduce risk</div>
      <div class="mt-2 text-sm leading-relaxed" style="color: #8b949e;">Faster remediation, stronger control coverage, and less internally owned reliability risk.</div>
    </div>
    <div class="p-4 border-t-3" style="background: #161b22; border-color: #79c0ff;">
      <div class="font-bold" style="color: #79c0ff;">Improve delivery</div>
      <div class="mt-2 text-sm leading-relaxed" style="color: #8b949e;">Shorter cycle time, better developer experience, and governed access to new capabilities.</div>
    </div>
    <div class="p-4 border-t-3" style="background: #161b22; border-color: #d29922;">
      <div class="font-bold" style="color: #d29922;">Simplify operations</div>
      <div class="mt-2 text-sm leading-relaxed" style="color: #8b949e;">Less platform toil with clear ownership for the operations that remain.</div>
    </div>
  </div>
  <div class="mt-5 flex items-center justify-between px-5 py-3 border" style="border-color: #30363d; color: #8b949e;">
    <span class="text-sm">Evidence required: baseline, pilot result, transition estimate</span>
    <span class="text-sm font-bold" style="color: #e6edf3;">No proven net benefit → do not proceed</span>
  </div>
</div>

---

# 🌐 Why Now? The Operating Model Has Changed

<div class="grid grid-cols-5 gap-3 mt-8 text-center text-sm">
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="text-3xl mb-3">🔐</div><div class="font-bold" style="color: #79c0ff;">Identity & Policy</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="text-3xl mb-3">🔀</div><div class="font-bold" style="color: #79c0ff;">Pull Requests</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="text-3xl mb-3">🛡️</div><div class="font-bold" style="color: #3fb950;">Security</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="text-3xl mb-3">⚙️</div><div class="font-bold" style="color: #d29922;">Automation</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="text-3xl mb-3">🤖</div><div class="font-bold" style="color: #bc8cff;">AI & Agents</div>
  </div>
</div>

<div class="mt-8 p-6 rounded-xl border text-center" style="background: rgba(31,111,235,.12); border-color: rgba(56,139,253,.45);">
  <div class="text-xl font-bold" style="color: #e6edf3;">GitHub is becoming the engineering control plane.</div>
  <div class="mt-2" style="color: #8b949e;">The opportunity cost of Server now includes delayed or unavailable cloud-native workflows—not only appliance operations.</div>
</div>

---

# The Business Problem We Are Solving

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="font-bold mb-2" style="color: #f85149;">⏳ Platform work competes with product work</div>
    <div style="color: #8b949e;">Upgrades, capacity, resilience, and appliance incidents consume engineering capacity.</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="font-bold mb-2" style="color: #d29922;">🧱 Controls scale slowly</div>
    <div style="color: #8b949e;">Rollout depends on release currency, runner capacity, and local integrations.</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="font-bold mb-2" style="color: #bc8cff;">🚧 Capability access is delayed</div>
    <div style="color: #8b949e;">Cloud-first AI, governance, and remediation widen the availability gap.</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="font-bold mb-2" style="color: #79c0ff;">🧩 Governance is fragmented</div>
    <div style="color: #8b949e;">Permissions, policies, repository settings, and audit patterns drift.</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="font-bold mb-2" style="color: #3fb950;">📡 Reliability risk is internally owned</div>
    <div style="color: #8b949e;">Availability, failover, backup integrity, restore, and recovery remain internal.</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
    <div class="font-bold mb-2" style="color: #e6edf3;">🔗 Workflows stop at the platform boundary</div>
    <div style="color: #8b949e;">Agents, AI review, and remediation cannot operate as one governed loop.</div>
  </div>
</div>

---

# 💰 Do Not Lead with COGS

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="p-6 rounded-2xl border" style="background: rgba(248,81,73,.07); border-color: rgba(248,81,73,.45);">
    <div class="text-4xl mb-4">📉</div>
    <div class="text-xl font-bold" style="color: #f85149;">Cost-only migration</div>
    <div class="mt-4 space-y-3 text-sm" style="color: #8b949e;">
      <div>• Savings consumed by migration and coexistence</div>
      <div>• Disruption without visible developer benefit</div>
      <div>• New consumption charges surprise sponsors</div>
      <div>• Weak reason to change established workflows</div>
    </div>
  </div>
  <div class="p-6 rounded-2xl border" style="background: rgba(46,160,67,.07); border-color: rgba(46,160,67,.5);">
    <div class="text-4xl mb-4">📈</div>
    <div class="text-xl font-bold" style="color: #3fb950;">Outcome-led migration</div>
    <div class="mt-4 space-y-3 text-sm" style="color: #8b949e;">
      <div>• Reduced security exposure and remediation time</div>
      <div>• Lower internally owned reliability risk</div>
      <div>• Faster engineering flow and governed AI adoption</div>
      <div>• Platform capacity redirected to differentiated work</div>
    </div>
  </div>
</div>

<div class="mt-7 text-center text-xl font-bold" style="color: #e6edf3;">COGS is one row in the scorecard—not the headline.</div>

---

# 📊 Five Outcomes That Justify the Move

<div class="grid grid-cols-5 gap-3 mt-7 text-center">
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #238636;">
    <div class="text-3xl mb-2">🛡️</div><div class="font-bold" style="color: #3fb950;">Security</div>
    <div class="text-xs mt-2" style="color: #8b949e;">Prevention, coverage, remediation</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #388bfd;">
    <div class="text-3xl mb-2">📡</div><div class="font-bold" style="color: #79c0ff;">Reliability</div>
    <div class="text-xs mt-2" style="color: #8b949e;">Availability, recovery, capacity</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #8957e5;">
    <div class="text-3xl mb-2">⚡</div><div class="font-bold" style="color: #bc8cff;">Effectiveness</div>
    <div class="text-xs mt-2" style="color: #8b949e;">Flow, quality, onboarding</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #9e6a03;">
    <div class="text-3xl mb-2">⚙️</div><div class="font-bold" style="color: #d29922;">Simplicity</div>
    <div class="text-xs mt-2" style="color: #8b949e;">Less maintenance and toil</div>
  </div>
  <div class="p-4 rounded-xl border" style="background: #161b22; border-color: #a371f7;">
    <div class="text-3xl mb-2">🤖</div><div class="font-bold" style="color: #d2a8ff;">Capability</div>
    <div class="text-xs mt-2" style="color: #8b949e;">Cloud-native AI and agents</div>
  </div>
</div>

<div class="mt-8 p-5 rounded-xl border" style="background: #161b22; border-color: #30363d;">
  <div class="grid grid-cols-5 gap-3 text-xs text-center" style="color: #8b949e;">
    <div>MTTR<br/>Secrets blocked</div>
    <div>Incidents<br/>Recovery evidence</div>
    <div>PR cycle time<br/>Change failure rate</div>
    <div>Ops hours<br/>Policy lead time</div>
    <div>Release-to-adoption<br/>Agent-ready repos</div>
  </div>
</div>

---

# ⚖️ Cloud vs. Server: Executive Scorecard

<div class="mt-4 grid grid-cols-[1fr_1.35fr_1.35fr] text-xs">
  <div class="p-3 font-bold" style="color: #8b949e;">DIMENSION</div>
  <div class="p-3 font-bold" style="color: #79c0ff;">ENTERPRISE CLOUD</div>
  <div class="p-3 font-bold" style="color: #d29922;">ENTERPRISE SERVER</div>

  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Operations</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">GitHub-operated service</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Customer-operated appliance and resilience</div>

  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Feature velocity</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Continuous, generally cloud-first</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Release and upgrade dependent</div>

  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Control</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">SaaS service boundaries</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Infrastructure, network, and timing control</div>

  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Security</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Broadest current integrated portfolio</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Strong core controls; customer owns currency and capacity</div>

  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">AI & agents</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Hosted Copilot, code review, cloud agent</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Distinct GHES 3.22 offline CLI technical preview</div>

  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Economics</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Seats plus consumption</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Seats plus infrastructure and operations</div>
</div>

---

# 🏢 Where Server Can Still Be the Right Choice

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">
  <div class="p-5 rounded-xl border" style="background:#161b22;border-color:#30363d;">
    <div class="font-bold" style="color:#d29922;">🔌 Disconnected operation</div>
    <div class="mt-2" style="color:#8b949e;">Air-gapped or tightly isolated environments without dependable GitHub service connectivity.</div>
  </div>
  <div class="p-5 rounded-xl border" style="background:#161b22;border-color:#30363d;">
    <div class="font-bold" style="color:#d29922;">🗄️ Infrastructure sovereignty</div>
    <div class="mt-2" style="color:#8b949e;">Direct control of placement, network boundaries, maintenance, backup, and forensic access.</div>
  </div>
  <div class="p-5 rounded-xl border" style="background:#161b22;border-color:#30363d;">
    <div class="font-bold" style="color:#d29922;">🌍 Unmet residency requirements</div>
    <div class="mt-2" style="color:#8b949e;">Required geography or data-flow boundary is not supported by documented GHE.com options.</div>
  </div>
  <div class="p-5 rounded-xl border" style="background:#161b22;border-color:#30363d;">
    <div class="font-bold" style="color:#d29922;">🧩 Critical legacy coupling</div>
    <div class="mt-2" style="color:#8b949e;">Integration incompatibility or remediation risk outweighs near-term Cloud value.</div>
  </div>
</div>

<div class="mt-6 p-4 rounded-xl border text-center" style="background:rgba(210,153,34,.08);border-color:rgba(210,153,34,.45);color:#e6edf3;">
  A requirement-led decision is stronger than a blanket claim that either platform is “more secure.”
</div>

---

# 🛡️ Security Posture: Change the Work

<div class="grid grid-cols-2 gap-6 mt-7">
  <div class="p-5 rounded-xl border" style="background:#161b22;border-color:#388bfd;">
    <div class="text-xl font-bold" style="color:#79c0ff;">Cloud shared responsibility</div>
    <div class="mt-4 space-y-2 text-sm" style="color:#8b949e;">
      <div>✓ GitHub operates the platform</div>
      <div>• Customer governs identity and permissions</div>
      <div>• Customer configures policies and integrations</div>
      <div>• Customer triages and remediates findings</div>
      <div>• Customer governs runners and workflows</div>
    </div>
  </div>
  <div class="p-5 rounded-xl border" style="background:#161b22;border-color:#9e6a03;">
    <div class="text-xl font-bold" style="color:#d29922;">Server adds platform responsibility</div>
    <div class="mt-4 space-y-2 text-sm" style="color:#8b949e;">
      <div>+ Patching and feature upgrades</div>
      <div>+ Capacity and network configuration</div>
      <div>+ Backup, HA, failover, and recovery</div>
      <div>+ Monitoring and appliance incidents</div>
      <div>+ Security tooling and content currency</div>
    </div>
  </div>
</div>

<div class="mt-6 text-center font-bold" style="color:#3fb950;">The value is redirecting effort from maintaining controls to increasing coverage and reducing exposure.</div>

---

# 🔐 Advanced Security: Cloud-Native Advantage

<div class="mt-4 grid grid-cols-[1.2fr_.9fr_.9fr] text-xs">
  <div class="p-3 font-bold" style="color:#8b949e;">CAPABILITY</div>
  <div class="p-3 font-bold text-center" style="color:#79c0ff;">CLOUD</div>
  <div class="p-3 font-bold text-center" style="color:#d29922;">SERVER*</div>

  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Secret scanning & push protection</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#3fb950;">Available</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#3fb950;">Available</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Code scanning / CodeQL / default setup</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#3fb950;">Available</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#3fb950;">Available</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">PR status checks and merge gates</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#3fb950;">Available</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#3fb950;">Available</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Security campaigns</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#bc8cff;">Stronger documented portfolio</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#8b949e;">Validate release</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Classic Copilot Autofix</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#79c0ff;">Available</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#8b949e;">No parity claim</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Agentic Autofix</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#bc8cff;">Cloud-only preview</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#8b949e;">Not documented</div>
</div>

<div class="mt-4 text-xs" style="color:#8b949e;">*GHES availability depends on installed release, licensing, runner capacity, and configuration.</div>

---

# 🤖 AI & Agents Change the Platform Equation

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="p-5 rounded-xl border" style="background:rgba(31,111,235,.10);border-color:#388bfd;">
    <div class="text-xl font-bold" style="color:#79c0ff;">GitHub Enterprise Cloud</div>
    <div class="mt-4 space-y-3 text-sm" style="color:#8b949e;">
      <div>✓ Copilot Business and Enterprise</div>
      <div>✓ Central policy and consumption visibility</div>
      <div>✓ Copilot code review</div>
      <div>✓ Asynchronous cloud coding agent</div>
      <div>✓ Agent-assisted security remediation</div>
    </div>
  </div>
  <div class="p-5 rounded-xl border" style="background:rgba(210,153,34,.07);border-color:#9e6a03;">
    <div class="text-xl font-bold" style="color:#d29922;">GitHub Enterprise Server</div>
    <div class="mt-4 space-y-3 text-sm" style="color:#8b949e;">
      <div>• Standard hosted Copilot plans not documented for GHES</div>
      <div>• GHES 3.22: separate offline CLI technical preview</div>
      <div>• Customer-configured model endpoint</div>
      <div>• Not the cloud coding agent or code review</div>
      <div>• Customer owns model capacity and governance</div>
    </div>
  </div>
</div>

<div class="mt-6 text-center text-lg font-bold" style="color:#bc8cff;">This is a delivery-system difference—not an autocomplete difference.</div>

---

# 🔄 The Cloud-Native Engineering Loop

<div class="flex items-center justify-between gap-2 mt-10 text-center text-xs">
  <div class="w-32 p-4 rounded-xl border" style="background:#161b22;border-color:#30363d;"><div class="text-3xl">📋</div><div class="mt-2 font-bold" style="color:#e6edf3;">Issue or alert</div></div>
  <div style="color:#388bfd;">→</div>
  <div class="w-32 p-4 rounded-xl border" style="background:#161b22;border-color:#8957e5;"><div class="text-3xl">🤖</div><div class="mt-2 font-bold" style="color:#bc8cff;">Agent creates change</div></div>
  <div style="color:#388bfd;">→</div>
  <div class="w-32 p-4 rounded-xl border" style="background:#161b22;border-color:#238636;"><div class="text-3xl">🧪</div><div class="mt-2 font-bold" style="color:#3fb950;">Tests & scans</div></div>
  <div style="color:#388bfd;">→</div>
  <div class="w-32 p-4 rounded-xl border" style="background:#161b22;border-color:#388bfd;"><div class="text-3xl">🔍</div><div class="mt-2 font-bold" style="color:#79c0ff;">AI + human review</div></div>
  <div style="color:#388bfd;">→</div>
  <div class="w-32 p-4 rounded-xl border" style="background:#161b22;border-color:#9e6a03;"><div class="text-3xl">✅</div><div class="mt-2 font-bold" style="color:#d29922;">Governed merge</div></div>
</div>

<div class="mt-10 grid grid-cols-3 gap-4 text-sm">
  <div class="p-4 rounded-xl text-center" style="background:#161b22;color:#8b949e;"><strong style="color:#e6edf3;">Automation</strong><br/>executes the repeatable work</div>
  <div class="p-4 rounded-xl text-center" style="background:#161b22;color:#8b949e;"><strong style="color:#e6edf3;">Controls</strong><br/>verify policy and quality</div>
  <div class="p-4 rounded-xl text-center" style="background:#161b22;color:#8b949e;"><strong style="color:#e6edf3;">Humans</strong><br/>own intent, risk, and approval</div>
</div>

---

# 📡 Reliability and Operational Simplicity

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="text-lg font-bold mb-4" style="color:#d29922;">Internally owned on Server</div>
    <div class="space-y-2 text-sm">
      <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Capacity and performance</div>
      <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Upgrade projects and maintenance windows</div>
      <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Replica health, failover, and traffic redirection</div>
      <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Backup integrity, restore, and recovery tests</div>
    </div>
  </div>
  <div>
    <div class="text-lg font-bold mb-4" style="color:#79c0ff;">Still owned in Cloud</div>
    <div class="space-y-2 text-sm">
      <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Identity, policy, and audit operations</div>
      <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Runner, workflow, and integration resilience</div>
      <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Incident communication and continuity plans</div>
      <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Consumption governance and platform ownership</div>
    </div>
  </div>
</div>

<div class="mt-6 p-4 rounded-xl border text-center" style="background:rgba(46,160,67,.08);border-color:rgba(46,160,67,.45);color:#e6edf3;">
  Measure reduced effort and risk. Do not assume “SaaS” means “no operations.”
</div>

---

# 💳 Consumption and Cost: Build the Full Model

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">
  <div class="p-5 rounded-xl border" style="background:#161b22;border-color:#9e6a03;">
    <div class="font-bold" style="color:#d29922;">Current Server</div>
    <div class="mt-3 space-y-2" style="color:#8b949e;">
      <div>Licenses</div><div>Compute, storage, network</div><div>Backup, HA, DR</div><div>Runners and artifacts</div><div>Platform labor</div><div>Upgrade and incident effort</div>
    </div>
  </div>
  <div class="p-5 rounded-xl border" style="background:#161b22;border-color:#388bfd;">
    <div class="font-bold" style="color:#79c0ff;">Future Cloud</div>
    <div class="mt-3 space-y-2" style="color:#8b949e;">
      <div>Enterprise seats</div><div>Security active committers</div><div>Copilot seats and AI credits</div><div>Actions and runners</div><div>Storage and data transfer</div><div>Governance and FinOps</div>
    </div>
  </div>
  <div class="p-5 rounded-xl border" style="background:#161b22;border-color:#8957e5;">
    <div class="font-bold" style="color:#bc8cff;">Transition</div>
    <div class="mt-3 space-y-2" style="color:#8b949e;">
      <div>Discovery and remediation</div><div>Migration tooling</div><div>Parallel operation</div><div>Integration changes</div><div>Training and support</div><div>Contingency and rework</div>
    </div>
  </div>
</div>

<div class="mt-6 p-4 rounded-xl text-center" style="background:rgba(31,111,235,.12);color:#e6edf3;">
  Compare total consumption and operations—not an appliance invoice with a Cloud seat price.
</div>

---

# 📈 Value Model: Measure What Changes

<div class="mt-5 grid grid-cols-[1.15fr_1fr_1.1fr_.65fr] text-xs">
  <div class="p-3 font-bold" style="color:#8b949e;">MEASURE</div><div class="p-3 font-bold" style="color:#8b949e;">EVIDENCE SOURCE</div><div class="p-3 font-bold" style="color:#79c0ff;">TARGET BASIS</div><div class="p-3 font-bold text-center" style="color:#3fb950;">OWNER</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Critical alert remediation time</div><div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Security telemetry</div><div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Approved exposure reduction</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#8b949e;">Security</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Developer-impacting incidents</div><div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Incident records</div><div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Lower frequency and severity</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#8b949e;">Platform</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Pull-request cycle time</div><div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">GitHub insights / DORA</div><div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Pilot improvement vs. baseline</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#8b949e;">Engineering</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Platform operations hours</div><div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Time and cost records</div><div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Validated capacity redirected</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#8b949e;">Platform</div>
  <div class="p-3 border-t" style="border-color:#30363d;color:#e6edf3;">Release-to-governed-adoption</div><div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Release and policy log</div><div class="p-3 border-t" style="border-color:#30363d;color:#8b949e;">Within approved adoption window</div><div class="p-3 border-t text-center" style="border-color:#30363d;color:#8b949e;">Product</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-4 text-center text-sm">
  <div class="p-3 rounded-lg" style="background:#161b22;color:#f85149;"><strong>Conservative</strong><br/><span style="color:#8b949e;">slow adoption, long coexistence</span></div>
  <div class="p-3 rounded-lg" style="background:#161b22;color:#79c0ff;"><strong>Expected</strong><br/><span style="color:#8b949e;">pilot-proven, planned waves</span></div>
  <div class="p-3 rounded-lg" style="background:#161b22;color:#3fb950;"><strong>Upside</strong><br/><span style="color:#8b949e;">broad adoption, rapid retirement</span></div>
</div>

---

# 🚚 Minimize Disruption with Migration Waves

<div class="flex items-stretch justify-between gap-3 mt-7 text-center text-xs">
  <div class="flex-1 p-4 rounded-xl border" style="background:#161b22;border-color:#30363d;"><div class="text-3xl">🔎</div><div class="font-bold mt-2" style="color:#e6edf3;">Discover</div><div class="mt-2" style="color:#8b949e;">Inventory, classify, baseline</div></div>
  <div class="flex items-center" style="color:#388bfd;">→</div>
  <div class="flex-1 p-4 rounded-xl border" style="background:#161b22;border-color:#30363d;"><div class="text-3xl">🏗️</div><div class="font-bold mt-2" style="color:#e6edf3;">Design</div><div class="mt-2" style="color:#8b949e;">Identity, network, governance</div></div>
  <div class="flex items-center" style="color:#388bfd;">→</div>
  <div class="flex-1 p-4 rounded-xl border" style="background:#161b22;border-color:#8957e5;"><div class="text-3xl">🧪</div><div class="font-bold mt-2" style="color:#bc8cff;">Pilot</div><div class="mt-2" style="color:#8b949e;">Representative—not easiest</div></div>
  <div class="flex items-center" style="color:#388bfd;">→</div>
  <div class="flex-1 p-4 rounded-xl border" style="background:#161b22;border-color:#388bfd;"><div class="text-3xl">🌊</div><div class="font-bold mt-2" style="color:#79c0ff;">Waves</div><div class="mt-2" style="color:#8b949e;">Dependencies, cutover, validate</div></div>
  <div class="flex items-center" style="color:#388bfd;">→</div>
  <div class="flex-1 p-4 rounded-xl border" style="background:#161b22;border-color:#238636;"><div class="text-3xl">✅</div><div class="font-bold mt-2" style="color:#3fb950;">Stabilize</div><div class="mt-2" style="color:#8b949e;">Adopt, measure, decommission</div></div>
</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-sm">
  <div class="p-4 rounded-xl border" style="background:rgba(210,153,34,.08);border-color:rgba(210,153,34,.4);color:#8b949e;">
    <strong style="color:#d29922;">Migration reality:</strong> GEI is not a complete environment clone and does not provide delta migration.
  </div>
  <div class="p-4 rounded-xl border" style="background:rgba(31,111,235,.10);border-color:rgba(56,139,253,.4);color:#8b949e;">
    <strong style="color:#79c0ff;">Risk control:</strong> trial migrations, validation, source-change control, coexistence, and explicit contingency.
  </div>
</div>

---

# 🚦 Decision Gates and Risk Controls

<div class="grid grid-cols-3 gap-4 mt-5 text-xs">
  <div class="p-4 rounded-xl border" style="background:#161b22;border-color:#30363d;"><div class="font-bold" style="color:#79c0ff;">Identity & governance</div><div class="mt-2" style="color:#8b949e;">Provisioning, roles, policies, audit, external collaboration</div></div>
  <div class="p-4 rounded-xl border" style="background:#161b22;border-color:#30363d;"><div class="font-bold" style="color:#79c0ff;">Residency & compliance</div><div class="mt-2" style="color:#8b949e;">Region, data flows, telemetry, support, Copilot boundaries</div></div>
  <div class="p-4 rounded-xl border" style="background:#161b22;border-color:#30363d;"><div class="font-bold" style="color:#79c0ff;">Network & integrations</div><div class="mt-2" style="color:#8b949e;">Runners, apps, APIs, packages, webhooks, connectivity</div></div>
  <div class="p-4 rounded-xl border" style="background:#161b22;border-color:#30363d;"><div class="font-bold" style="color:#3fb950;">Repository fidelity</div><div class="mt-2" style="color:#8b949e;">History, metadata, rules, LFS, unsupported data</div></div>
  <div class="p-4 rounded-xl border" style="background:#161b22;border-color:#30363d;"><div class="font-bold" style="color:#3fb950;">Change readiness</div><div class="mt-2" style="color:#8b949e;">Training, support, champions, communications, adoption</div></div>
  <div class="p-4 rounded-xl border" style="background:#161b22;border-color:#30363d;"><div class="font-bold" style="color:#3fb950;">Operating model</div><div class="mt-2" style="color:#8b949e;">Platform product, security operations, ownership, FinOps</div></div>
</div>

<div class="mt-6 p-4 rounded-xl border text-center" style="background:rgba(248,81,73,.07);border-color:rgba(248,81,73,.4);">
  <span class="font-bold" style="color:#f85149;">Pause</span>
  <span style="color:#8b949e;"> when a critical dependency has no safe migration path—or when the case still depends mainly on optimistic savings.</span>
</div>

---

<div class="max-w-4xl mx-auto text-center">
  <div class="text-5xl mb-6">🎯</div>
  <h1 class="!text-4xl !font-bold" style="color:#e6edf3;">Migrate for Measurable Capability Uplift</h1>
  <div class="mt-7 p-6 rounded-2xl border text-xl leading-relaxed" style="background:#161b22;border-color:#388bfd;color:#8b949e;">
    We are not moving repositories to save on servers. We are modernizing the engineering control plane to improve
    <strong style="color:#3fb950;">security</strong>,
    <strong style="color:#79c0ff;">reliability</strong>,
    <strong style="color:#bc8cff;">developer flow</strong>, and
    <strong style="color:#d29922;">governed AI adoption</strong>—
    provided a representative pilot proves those outcomes with acceptable risk.
  </div>
  <div class="mt-8 grid grid-cols-4 gap-3 text-xs">
    <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Baseline outcomes</div>
    <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Validate exact gaps</div>
    <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Pilot representative work</div>
    <div class="p-3 rounded-lg" style="background:#161b22;color:#8b949e;">Decide with evidence</div>
  </div>
</div>

---
layout: default
---

# 📚 Decision Sources

<div class="grid grid-cols-2 gap-3 mt-5 max-w-4xl mx-auto text-xs text-left">
  <a href="https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud" target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg no-underline" style="background:#161b22;"><strong style="color:#79c0ff;">Enterprise Cloud overview</strong><div style="color:#8b949e;">Service model and enterprise administration ↗</div></a>
  <a href="https://docs.github.com/en/enterprise-server@latest/admin/overview/about-github-enterprise-server" target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg no-underline" style="background:#161b22;"><strong style="color:#d29922;">Enterprise Server overview</strong><div style="color:#8b949e;">Deployment and customer responsibilities ↗</div></a>
  <a href="https://docs.github.com/en/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer" target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg no-underline" style="background:#161b22;"><strong style="color:#79c0ff;">GitHub Enterprise Importer</strong><div style="color:#8b949e;">Supported migration scope and sources ↗</div></a>
  <a href="https://docs.github.com/en/migrations/elm/about-live-migrations" target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg no-underline" style="background:#161b22;"><strong style="color:#79c0ff;">Enterprise Live Migrations</strong><div style="color:#8b949e;">Reduced-disruption repository migration ↗</div></a>
  <a href="https://docs.github.com/en/copilot/get-started/plans" target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg no-underline" style="background:#161b22;"><strong style="color:#bc8cff;">Copilot plans</strong><div style="color:#8b949e;">Availability, policy, and plan differences ↗</div></a>
  <a href="https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent" target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg no-underline" style="background:#161b22;"><strong style="color:#bc8cff;">Copilot cloud agent</strong><div style="color:#8b949e;">Asynchronous agent workflow ↗</div></a>
  <a href="https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security" target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg no-underline" style="background:#161b22;"><strong style="color:#3fb950;">GitHub Advanced Security</strong><div style="color:#8b949e;">Code Security and Secret Protection ↗</div></a>
  <a href="https://docs.github.com/en/billing/concepts/product-billing" target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg no-underline" style="background:#161b22;"><strong style="color:#d29922;">Product billing</strong><div style="color:#8b949e;">Seats, usage, and consumption categories ↗</div></a>
</div>

<div class="mt-5 text-xs text-center" style="color:#8b949e;">Capability claims are version-, plan-, region-, policy-, and preview-dependent. Validate against the installed GHES release and target Cloud configuration.</div>
