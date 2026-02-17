---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot Code Review
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot Code Review
module: tech-talks/copilot-code-review
mdc: true
status: active
updated: 2026-02-17
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50">
<img src="./sdp-logo.png" class="w-64" alt="" />
</div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
Copilot Code Review
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
Accelerating PR Velocity & Maximizing ROI
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">
⏰ <strong>30-40 minutes</strong> · Developers · DevOps Teams · Engineering Managers
</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

---

# The Central Question

<div class="h-full flex items-center justify-center">
<div class="max-w-4xl">
<div class="text-6xl text-center mb-8">🤔</div>
<div class="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
"How can Copilot Code Review reduce PR review time by 40-60% while delivering measurable ROI?"
</div>
<div class="text-xl text-center opacity-80 mt-8">
PRs sit for days. Reviewers are overwhelmed. Quality vs. speed is a false choice.
</div>
</div>
</div>

---
layout: center
---

# 📖 Navigate by Section

<div class="grid grid-cols-2 gap-6 mt-8">
<div @click="$nav.go(5)" class="cursor-pointer p-6 bg-cyan-900/40 rounded-lg border-2 border-cyan-500 hover:bg-cyan-900/60 transition-all">
<div class="text-2xl mb-2">⚙️</div>
<div class="text-lg font-bold text-cyan-300">Setup & Configuration</div>
<div class="text-sm text-gray-300 mt-1">From zero to first review in 15 min</div>
<div class="text-xs text-gray-400 mt-2">YAML config + status checks</div>
</div>
<div @click="$nav.go(8)" class="cursor-pointer p-6 bg-blue-900/40 rounded-lg border-2 border-blue-500 hover:bg-blue-900/60 transition-all">
<div class="text-2xl mb-2">🔒</div>
<div class="text-lg font-bold text-blue-300">Compliance & Security</div>
<div class="text-sm text-gray-300 mt-1">Custom rulesets for HIPAA, PCI, SOC2</div>
<div class="text-xs text-gray-400 mt-2">Automated audit trails</div>
</div>
<div @click="$nav.go(11)" class="cursor-pointer p-6 bg-indigo-900/40 rounded-lg border-2 border-indigo-500 hover:bg-indigo-900/60 transition-all">
<div class="text-2xl mb-2">📊</div>
<div class="text-lg font-bold text-indigo-300">ROI Metrics</div>
<div class="text-sm text-gray-300 mt-1">Track savings and prove business value</div>
<div class="text-xs text-gray-400 mt-2">$15K+ monthly savings / 10-person team</div>
</div>
<div @click="$nav.go(14)" class="cursor-pointer p-6 bg-purple-900/40 rounded-lg border-2 border-purple-500 hover:bg-purple-900/60 transition-all">
<div class="text-2xl mb-2">🚀</div>
<div class="text-lg font-bold text-purple-300">Team Adoption</div>
<div class="text-sm text-gray-300 mt-1">Phased rollout and best practices</div>
<div class="text-xs text-gray-400 mt-2">Avoid alert fatigue pitfalls</div>
</div>
</div>

<div class="mt-8 p-4 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg text-center">
<span class="text-white font-bold">💡 Click any section to jump directly there</span>
</div>

---

# ❌ The Problem: PR Review Bottleneck

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">⏳ Capacity Crunch</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• 50-100+ PRs/week with 2-3 senior reviewers</div>
<div>• Average <strong>3.2 days</strong> to merge</div>
<div>• 30% of senior dev time spent reviewing</div>
</div>
</div>
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">💸 Hidden Costs</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• 15-20 min context-switch per PR</div>
<div>• Security issues missed 40-60% under pressure</div>
<div>• New devs wait 6-8 weeks to learn standards</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
<span class="text-white font-bold">⚠️ Organizations face a painful choice: sacrifice speed for quality, or ship fast and accept risk</span>
</div>

---
layout: center
name: setup
---

# ⚙️ Setup & Configuration

<div class="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
From Zero to First Review
</div>

<div class="mt-6 text-xl opacity-80">
15 minutes to automated code review
</div>

<div class="mt-8 text-sm opacity-60">
Section 1 of 4 · Basic config to required status checks
</div>

---

# ⚙️ Quick Start: 3 Ways to Activate

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-4 bg-cyan-900/40 rounded-lg border-2 border-cyan-500">
<div class="text-2xl mb-2">👤</div>
<div class="text-sm font-bold text-cyan-300">Manual Request</div>
<div class="text-xs text-gray-300 mt-2 space-y-1">
<div>• Open any PR on GitHub</div>
<div>• Select <strong>Copilot</strong> from Reviewers</div>
<div>• Review arrives in ~30 seconds</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
<div class="text-2xl mb-2">📋</div>
<div class="text-sm font-bold text-blue-300">Repo Ruleset</div>
<div class="text-xs text-gray-300 mt-2 space-y-1">
<div>• Settings → Rules → Rulesets</div>
<div>• New branch ruleset</div>
<div>• Enable "Auto request Copilot review"</div>
</div>
</div>
<div class="p-4 bg-indigo-900/40 rounded-lg border-2 border-indigo-500">
<div class="text-2xl mb-2">🏢</div>
<div class="text-sm font-bold text-indigo-300">Org-Wide Ruleset</div>
<div class="text-xs text-gray-300 mt-2 space-y-1">
<div>• Org Settings → Repository → Rulesets</div>
<div>• Target repos by name pattern</div>
<div>• Enforces across all matching repos</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-900/30 to-indigo-900/30 rounded-lg text-center">
<span class="text-white text-sm">📖 <a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review" class="text-cyan-300 underline">Configure automatic review docs</a> · Customize via <code>.github/copilot-instructions.md</code></span>
</div>

---

# 🏗️ Architecture: How It Works

<div class="flex flex-col items-center gap-3 mt-4">
<div class="p-3 bg-cyan-900/40 rounded-lg border-2 border-cyan-500 w-80 text-center">
<div class="text-sm font-bold text-cyan-300">PR Event (create / update / @mention)</div>
</div>
<div class="text-2xl text-gray-400">↓</div>
<div class="grid grid-cols-3 gap-3 w-full">
<div class="p-3 bg-blue-900/40 rounded-lg border border-blue-500 text-center">
<div class="text-xs font-bold text-blue-300">🔍 Static Analysis</div>
<div class="text-xs text-gray-400 mt-1">Linting, patterns</div>
</div>
<div class="p-3 bg-indigo-900/40 rounded-lg border border-indigo-500 text-center">
<div class="text-xs font-bold text-indigo-300">🌳 AST Parsing</div>
<div class="text-xs text-gray-400 mt-1">Structural issues</div>
</div>
<div class="p-3 bg-purple-900/40 rounded-lg border border-purple-500 text-center">
<div class="text-xs font-bold text-purple-300">🧠 LLM Semantic</div>
<div class="text-xs text-gray-400 mt-1">Contextual understanding</div>
</div>
</div>
<div class="text-2xl text-gray-400">↓</div>
<div class="p-3 bg-green-900/40 rounded-lg border-2 border-green-500 w-96 text-center">
<div class="text-sm font-bold text-green-300">Inline PR Comments · Categorized by Severity</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Full repo context: commit history, file relationships, test suites</span>
</div>

---
layout: center
name: compliance
---

# 🔒 Compliance & Security

<div class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
Custom Rulesets for Your Organization
</div>

<div class="mt-6 text-xl opacity-80">
HIPAA · PCI-DSS · SOC2 · Custom Standards
</div>

<div class="mt-8 text-sm opacity-60">
Section 2 of 4 · Automated compliance enforcement
</div>

---

# 🔒 Custom Review Instructions

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

```markdown
<!-- .github/copilot-instructions.md -->

When performing a code review, apply the
checks in /security/security-checklist.md.

When performing a code review, ensure all
API endpoints use try/catch with structured
error logging and appropriate status codes.

When performing a code review, verify that
PII fields (email, SSN, DOB) are encrypted
using approved libraries before storage.

When performing a code review, flag any
multi-table database operations that lack
transaction wrappers.
```

</div>
<div class="space-y-3">
<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-sm font-bold text-red-300">🛡️ PII Protection</div>
<div class="text-xs text-gray-300 mt-1">Natural language rules Copilot applies to every review</div>
</div>
<div class="p-3 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-300">⚡ Error Handling</div>
<div class="text-xs text-gray-300 mt-1">Reference external checklists for detailed standards</div>
</div>
<div class="p-3 bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-300">📁 Path-Specific Rules</div>
<div class="text-xs text-gray-300 mt-1">Use .github/instructions/**/*.instructions.md for scoped rules</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-900/30 to-indigo-900/30 rounded-lg text-center">
<span class="text-white text-sm">📖 <a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review#customizing-copilots-reviews-with-custom-instructions" class="text-cyan-300 underline">Customizing Copilot reviews docs</a></span>
</div>

---

# 🔒 Security Detection Capabilities

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-3 bg-red-900/30 rounded-lg text-center">
<div class="text-2xl mb-2">💉</div>
<div class="text-sm font-bold text-red-300">Injection Attacks</div>
<div class="text-xs text-gray-400 mt-1">SQL injection, XSS, command injection</div>
</div>
<div class="p-3 bg-orange-900/30 rounded-lg text-center">
<div class="text-2xl mb-2">🔑</div>
<div class="text-sm font-bold text-orange-300">Secrets & Auth</div>
<div class="text-xs text-gray-400 mt-1">Hardcoded creds, weak authentication</div>
</div>
<div class="p-3 bg-yellow-900/30 rounded-lg text-center">
<div class="text-2xl mb-2">📦</div>
<div class="text-sm font-bold text-yellow-300">Dependencies</div>
<div class="text-xs text-gray-400 mt-1">Insecure packages, CVE detection</div>
</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="p-3 bg-blue-900/30 rounded-lg text-center">
<div class="text-2xl mb-2">🧪</div>
<div class="text-sm font-bold text-blue-300">Test Coverage</div>
<div class="text-xs text-gray-400 mt-1">Missing tests, weak assertions, edge cases</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg text-center">
<div class="text-2xl mb-2">⚡</div>
<div class="text-sm font-bold text-purple-300">Performance</div>
<div class="text-xs text-gray-400 mt-1">N+1 queries, memory leaks, complexity</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">90%+ reduction in security-related production incidents</span>
</div>

---
layout: center
name: roi
---

# 📊 ROI Metrics

<div class="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
Measuring Business Impact
</div>

<div class="mt-6 text-xl opacity-80">
Prove the value with concrete numbers
</div>

<div class="mt-8 text-sm opacity-60">
Section 3 of 4 · Time savings, quality gains, cost-benefit
</div>

---

# 📊 Before vs. After

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">❌ Before Copilot Review</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• PR merge time: <strong>3.2 days</strong> average</div>
<div>• Security issues missed: <strong>40-60%</strong></div>
<div>• Review coverage: <strong>30%</strong> of PRs</div>
<div>• New dev onboarding: <strong>6-8 weeks</strong></div>
</div>
</div>
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">✅ After Copilot Review</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• PR merge time: <strong>same day</strong></div>
<div>• Security issues caught: <strong>90%+</strong></div>
<div>• Review coverage: <strong>100%</strong> of PRs</div>
<div>• New dev onboarding: <strong>3-4 weeks</strong></div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">40-60% reduction in review cycle time · 25-35% higher first-submission acceptance</span>
</div>

---

# 💰 Cost-Benefit Analysis

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-4 bg-green-900/40 rounded-lg text-center">
<div class="text-3xl font-bold text-green-300">$150/hr</div>
<div class="text-sm text-gray-400 mt-2">Developer time saved</div>
<div class="text-xs text-gray-500 mt-1">Context switching + review hours</div>
</div>
<div class="p-4 bg-cyan-900/40 rounded-lg text-center">
<div class="text-3xl font-bold text-cyan-300">$39/mo</div>
<div class="text-sm text-gray-400 mt-2">License cost per user</div>
<div class="text-xs text-gray-500 mt-1">Copilot Enterprise tier</div>
</div>
<div class="p-4 bg-purple-900/40 rounded-lg text-center">
<div class="text-3xl font-bold text-purple-300">$15K+</div>
<div class="text-sm text-gray-400 mt-2">Monthly savings</div>
<div class="text-xs text-gray-500 mt-1">For a 10-person team</div>
</div>
</div>

<div class="mt-6 p-3 bg-gray-800 rounded-lg">

```sql
-- ROI = (time_saved * hourly_rate) - (users * license_cost)
SELECT (avg_hours_saved * 150) - (team_size * 39)
  AS monthly_roi FROM review_metrics;
```

</div>

---
layout: center
name: adoption
---

# 🚀 Team Adoption

<div class="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
Best Practices & Rollout
</div>

<div class="mt-6 text-xl opacity-80">
Technology creates value only when people use it well
</div>

<div class="mt-8 text-sm opacity-60">
Section 4 of 4 · Phased rollout, training, iteration
</div>

---

# 🚀 Phased Rollout Strategy

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-4 bg-cyan-900/40 rounded-lg border-2 border-cyan-500">
<div class="text-2xl mb-2">1️⃣</div>
<div class="text-sm font-bold text-cyan-300">Pilot (Week 1-2)</div>
<div class="text-xs text-gray-300 mt-2 space-y-1">
<div>• Enable on 1 team repo</div>
<div>• Default configuration</div>
<div>• Gather baseline metrics</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
<div class="text-2xl mb-2">2️⃣</div>
<div class="text-sm font-bold text-blue-300">Expand (Week 3-4)</div>
<div class="text-xs text-gray-300 mt-2 space-y-1">
<div>• Add custom rulesets</div>
<div>• Tune severity thresholds</div>
<div>• Train team on @mentions</div>
</div>
</div>
<div class="p-4 bg-indigo-900/40 rounded-lg border-2 border-indigo-500">
<div class="text-2xl mb-2">3️⃣</div>
<div class="text-sm font-bold text-indigo-300">Scale (Month 2+)</div>
<div class="text-xs text-gray-300 mt-2 space-y-1">
<div>• Organization-wide deploy</div>
<div>• Required status checks</div>
<div>• ROI dashboards live</div>
</div>
</div>
</div>

<div class="mt-6 p-3 bg-gradient-to-r from-cyan-900/30 to-indigo-900/30 rounded-lg text-center">
<span class="text-white font-bold text-sm">💡 Start small, measure, then scale with data</span>
</div>

---

# 🧠 Mental Model Shift

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-sm font-bold text-green-300 mb-2">✅ Move Toward</div>
<div class="text-xs text-gray-300 space-y-2">
<div>• <strong>Immediate feedback</strong> over delayed review</div>
<div>• <strong>Consistent enforcement</strong> over variable quality</div>
<div>• <strong>Educational review</strong> over gatekeeping</div>
<div>• <strong>Measurable ROI</strong> over qualitative value</div>
</div>
</div>
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-sm font-bold text-red-300 mb-2">🛑 Move Away From</div>
<div class="text-xs text-gray-300 space-y-2">
<div>• Manual-only review for all code</div>
<div>• Rubber-stamping under deadline pressure</div>
<div>• Inconsistent standards across teams</div>
<div>• Learning through production incidents</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">🧠 From "review as manual quality gate" → "review as automated continuous feedback"</span>
</div>

---

# 🌍 Real-World Use Cases

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-3 bg-cyan-900/30 rounded-lg border-l-4 border-cyan-400">
<div class="text-sm font-bold text-cyan-300">🛒 E-Commerce · PCI-DSS</div>
<div class="text-xs text-gray-300 mt-1">Security review: 30% → 100% coverage</div>
<div class="text-xs text-gray-400 mt-1">Critical vulns to prod: 8/qtr → 0/qtr</div>
</div>
<div class="p-3 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
<div class="text-sm font-bold text-blue-300">💰 FinTech · Onboarding</div>
<div class="text-xs text-gray-300 mt-1">Onboarding time: 6-8 weeks → 3-4 weeks</div>
<div class="text-xs text-gray-400 mt-1">Revert rate for new devs: 15% → 4%</div>
</div>
<div class="p-3 bg-indigo-900/30 rounded-lg border-l-4 border-indigo-400">
<div class="text-sm font-bold text-indigo-300">🌐 Open Source · Scale</div>
<div class="text-xs text-gray-300 mt-1">PR backlog: 150 → 25 pending</div>
<div class="text-xs text-gray-400 mt-1">Velocity: 25 → 65 PRs merged/month</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border-l-4 border-purple-400">
<div class="text-sm font-bold text-purple-300">🏥 Healthcare · HIPAA</div>
<div class="text-xs text-gray-300 mt-1">HIPAA violations: 25/qtr → 1/qtr</div>
<div class="text-xs text-gray-400 mt-1">Audit prep: 200 hrs → 40 hrs</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Proven across industries: security, compliance, velocity, onboarding</span>
</div>

---

# 🔄 Decision Guide: When to Use What

<div class="mt-4">

| Aspect       |  Copilot Review  | GitHub Advanced Security | Manual Review  |
| ------------ | :--------------: | :----------------------: | :------------: |
| **Best For** | Holistic quality |  Deep security scanning  | Business logic |
| **Speed**    |     1-2 min      |         5-10 min         | Hours to days  |
| **Cost**     |   $39/user/mo    |       $49/user/mo        |    $150+/hr    |
| **Setup**    |     5-10 min     |        1-2 hours         |      N/A       |

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-lg text-center">
<span class="text-white font-bold text-sm">✅ Use all three together: Copilot handles mechanical, GHAS handles CVEs, humans handle strategy</span>
</div>

---

# ✅ Actionable Next Steps

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-4 bg-green-900/40 rounded-lg border-2 border-green-500">
<div class="text-sm font-bold text-green-300 mb-2">⚡ 15 Minutes</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Enable on a pilot repo</div>
<div>• Create basic YAML config</div>
<div>• Submit a test PR</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border-2 border-blue-500">
<div class="text-sm font-bold text-blue-300 mb-2">🔧 1 Hour</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Configure file pattern filtering</div>
<div>• Set up required status checks</div>
<div>• Establish baseline metrics</div>
</div>
</div>
<div class="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500">
<div class="text-sm font-bold text-purple-300 mb-2">📐 Half Day</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Build custom compliance rulesets</div>
<div>• Deploy ROI tracking workflow</div>
<div>• Org-wide rollout plan</div>
</div>
</div>
</div>

<div class="mt-6 p-3 bg-gradient-to-r from-green-600/80 to-purple-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">All example configs available in examples/ — copy, customize, deploy</span>
</div>

---
layout: end
---

# Thank You

<div class="text-center">
<div class="text-6xl mb-4">🔍</div>
<div class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
Copilot Code Review
</div>
<div class="text-lg opacity-80 mt-2">Accelerating PR Velocity & Maximizing ROI</div>
<div class="mt-6 text-sm opacity-60">
Examples: tech-talks/copilot-code-review/examples/
</div>
</div>
