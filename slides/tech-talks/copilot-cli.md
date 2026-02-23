---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot CLI: Terminal-Native AI for Developers and DevOps
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot CLI - Terminal AI
module: tech-talks/copilot-cli
mdc: true
status: active
updated: 2026-02-23
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <!-- Gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-cyan-900/20"></div>

  <!-- Glowing orb -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>

  <!-- Logo with glow -->
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-64" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
  </div>

  <!-- Gradient text title -->
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
    Copilot CLI
  </h1>

  <!-- Pill subtitle -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-emerald-600/80 to-teal-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-emerald-500/25">
      Terminal-Native AI for Developers and DevOps
    </span>
  </div>

  <!-- Tagline -->
  <div class="mt-8 text-lg opacity-70 relative z-10">
    ⏰ <strong>45 minutes</strong> • Software Developers • DevOps Engineers • CLI Power Users
  </div>

  <!-- Decorative line -->
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full relative z-10"></div>
</div>

---

# The Central Question

<div class="h-full flex items-center justify-center">
<div class="max-w-4xl">
<div class="text-6xl text-center mb-8">🤔</div>
<div class="text-3xl font-bold text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6 leading-snug">
"How do I bring AI into my terminal workflow — whether I'm building something new, debugging my own code, or managing infrastructure?"
</div>
<div class="mt-8 flex gap-6 justify-center text-sm">
<div class="px-4 py-2 bg-emerald-900/40 rounded-lg border border-emerald-500/50 text-center">
<div class="font-bold text-emerald-300">👩‍💻 Developers</div>
<div class="text-xs opacity-80 mt-1">Greenfield work &amp; debugging</div>
</div>
<div class="px-4 py-2 bg-teal-900/40 rounded-lg border border-teal-500/50 text-center">
<div class="font-bold text-teal-300">⚙️ DevOps</div>
<div class="text-xs opacity-80 mt-1">Infrastructure &amp; CI/CD</div>
</div>
<div class="px-4 py-2 bg-cyan-900/40 rounded-lg border border-cyan-500/50 text-center">
<div class="font-bold text-cyan-300">⚡ CLI Power Users</div>
<div class="text-xs opacity-80 mt-1">Automation &amp; scripting</div>
</div>
</div>
</div>
</div>

---
layout: center
---

# 📖 Table of Contents

<div class="grid grid-cols-3 gap-4 mt-8">
  <div @click="$nav.go(10)" class="cursor-pointer p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all hover:scale-105">
    <div class="text-2xl mb-2">🎯</div>
    <div class="font-semibold">Plan Mode & Steering</div>
    <div class="text-xs opacity-70 mt-1">Collaborative planning</div>
  </div>

  <div @click="$nav.go(15)" class="cursor-pointer p-4 bg-gradient-to-br from-teal-500/10 to-teal-600/5 rounded-xl border border-teal-500/30 hover:border-teal-400/60 transition-all hover:scale-105">
    <div class="text-2xl mb-2">⚙️</div>
    <div class="font-semibold">Operating Modes</div>
    <div class="text-xs opacity-70 mt-1">Interactive, programmatic, cloud</div>
  </div>

  <div @click="$nav.go(19)" class="cursor-pointer p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all hover:scale-105">
    <div class="text-2xl mb-2">🧠</div>
    <div class="font-semibold">Context Management</div>
    <div class="text-xs opacity-70 mt-1">Infinite sessions + memory</div>
  </div>

  <div @click="$nav.go(22)" class="cursor-pointer p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/30 hover:border-blue-400/60 transition-all hover:scale-105">
    <div class="text-2xl mb-2">🤖</div>
    <div class="font-semibold">Built-in Agents</div>
    <div class="text-xs opacity-70 mt-1">Explore, Task, Plan, Code-review</div>
  </div>

  <div @click="$nav.go(25)" class="cursor-pointer p-4 bg-gradient-to-br from-violet-500/10 to-violet-600/5 rounded-xl border border-violet-500/30 hover:border-violet-400/60 transition-all hover:scale-105">
    <div class="text-2xl mb-2">🔌</div>
    <div class="font-semibold">Plugins</div>
    <div class="text-xs opacity-70 mt-1">Extend with community packages</div>
  </div>

  <div @click="$nav.go(27)" class="cursor-pointer p-4 bg-gradient-to-br from-pink-500/10 to-pink-600/5 rounded-xl border border-pink-500/30 hover:border-pink-400/60 transition-all hover:scale-105">
    <div class="text-2xl mb-2">🧪</div>
    <div class="font-semibold">Use Cases</div>
    <div class="text-xs opacity-70 mt-1">Real-world examples</div>
  </div>
</div>

---

# The Problem

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="font-bold text-red-300 mb-2">🌱 Greenfield Development is Decision-Dense</div>
<div class="text-gray-300">Library choices, architecture, patterns — every hour brings decisions with no one to consult. Developers spend 90+ minutes reading competing docs before writing a line of code</div>
</div>
<div class="p-4 bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
<div class="font-bold text-orange-300 mb-2">🔇 Terminal is Powerful but Silent</div>
<div class="text-gray-300">Developers scaffold projects, debug failures, and explore APIs all from terminals — but must leave to get AI help, forcing them to re-explain context that's already at their fingertips</div>
</div>
<div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
<div class="font-bold text-yellow-300 mb-2">🐌 Manual Investigation Overhead</div>
<div class="text-gray-300">Docker debugging: 45+ minutes manually parsing stack traces, checking config files, verifying env vars, searching docs — traditional tools can't adapt to context</div>
</div>
<div class="p-4 bg-amber-900/30 rounded-lg border-l-4 border-amber-500">
<div class="font-bold text-amber-300 mb-2">🔄 Context Switching Breaks Flow</div>
<div class="text-gray-300">Moving between terminal and IDE/web for AI assistance costs 5-10 minutes per switch, disrupts concentration, and forces re-explaining what's already present</div>
</div>
</div>
<div class="mt-4 p-3 bg-gradient-to-r from-red-600/40 to-orange-600/40 rounded-xl border border-red-500/50 text-center text-sm">
<div class="font-bold">Both developers and DevOps engineers need conversational AI that lives where they already work</div>
</div>

---

# The Solution: GitHub Copilot CLI

<div class="text-sm space-y-4 mt-4">

**Conversational AI directly in terminal workflows — interactive, autonomous, and IDE-independent**

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-3 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="text-xl mb-1">🤝</div>
<div class="font-semibold mb-1">Plan Mode</div>
<div class="text-xs opacity-90">Collaborative planning with clarifying questions before code — reduces iterations from 8 to 2</div>
</div>

<div class="p-3 bg-teal-900/40 rounded-lg border border-teal-500/50">
<div class="text-xl mb-1">💬</div>
<div class="font-semibold mb-1">Interactive Mode</div>
<div class="text-xs opacity-90">Terminal-native conversations with persistent context — perfect for "figure this out" scenarios</div>
</div>

<div class="p-3 bg-cyan-900/40 rounded-lg border border-cyan-500/50">
<div class="text-xl mb-1">🔄</div>
<div class="font-semibold mb-1">Programmatic Mode</div>
<div class="text-xs opacity-90">Single-command headless execution for CI/CD pipelines — structured output for scripts</div>
</div>

<div class="p-3 bg-blue-900/40 rounded-lg border border-blue-500/50">
<div class="text-xl mb-1">☁️</div>
<div class="font-semibold mb-1">Cloud Delegation</div>
<div class="text-xs opacity-90"><code>&</code> prefix offloads long tasks to GitHub's agent — IDE and terminal both stay completely free</div>
</div>

<div class="p-3 bg-violet-900/40 rounded-lg border border-violet-500/50">
<div class="text-xl mb-1">🤖</div>
<div class="font-semibold mb-1">Built-in Agents</div>
<div class="text-xs opacity-90">Explore, Task, Plan, Code-review — routed automatically based on intent, run in parallel</div>
</div>

<div class="p-3 bg-indigo-900/40 rounded-lg border border-indigo-500/50">
<div class="text-xl mb-1">🪟</div>
<div class="font-semibold mb-1">IDE Bridge <code>/ide</code></div>
<div class="text-xs opacity-90">Open any file in VS Code mid-session — CLI context and conversation stay fully alive</div>
</div>

<div class="p-3 bg-sky-900/40 rounded-lg border border-sky-500/50 col-span-2">
<div class="text-xl mb-1">🧠</div>
<div class="font-semibold mb-1">Repository Memory + Auto-Compaction</div>
<div class="text-xs opacity-90">AI learns your conventions across sessions; auto-compaction at 95% token limit makes sessions virtually infinite</div>
</div>

<div class="p-3 bg-slate-900/40 rounded-lg border border-slate-500/50">
<div class="text-xl mb-1">🧩</div>
<div class="font-semibold mb-1">MCP Integration</div>
<div class="text-xs opacity-90">Discover and connect external tools via GitHub MCP Registry with org-level governance</div>
</div>

</div>

</div>

---

# Latest CLI Updates

<div class="grid grid-cols-2 gap-6 mt-6 text-xs">

<div class="p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="text-2xl mb-2">🧠</div>
<div class="font-bold mb-2">Configurable Reasoning Models</div>
<div class="opacity-90">GPT-5.2-Codex with effort tiers (low → extra high) and Ctrl+T reasoning visibility</div>
</div>

<div class="p-4 bg-teal-900/40 rounded-lg border border-teal-500/50">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold mb-2">Performance & UX Upgrades</div>
<div class="opacity-90">~45% faster output, richer diffs/timelines, prefix-aware history filtering, Windows/PowerShell polish</div>
</div>

</div>

---
layout: center
name: plan-mode
---

<!-- 🎬 MAJOR SECTION: Plan Mode & Steering -->

<div class="text-center">
  <div class="text-6xl mb-6">🎯</div>
  <h1 class="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
    Plan Mode
  </h1>
  <div class="text-2xl mt-4 opacity-80">
    Collaborative Planning Before Implementation
  </div>
</div>

---

# Plan Mode: The Fundamental Shift

<div class="mt-8 space-y-6 text-sm">

<div class="p-5 bg-red-900/40 rounded-lg border-2 border-red-500/50">
<div class="text-xl font-bold mb-3">❌ Traditional Workflow</div>
<div class="flex items-center gap-3">
<div>Request</div>
<div class="text-2xl">→</div>
<div>AI generates solution</div>
<div class="text-2xl">→</div>
<div>Review and fix</div>
<div class="text-2xl">→</div>
<div>Repeat (8 attempts average)</div>
</div>
</div>

<div class="p-5 bg-emerald-900/40 rounded-lg border-2 border-emerald-500/50">
<div class="text-xl font-bold mb-3">✅ Plan Mode Workflow</div>
<div class="flex items-center gap-3">
<div>Request</div>
<div class="text-2xl">→</div>
<div>AI asks questions</div>
<div class="text-2xl">→</div>
<div>Collaborate on plan</div>
<div class="text-2xl">→</div>
<div>Generate (2 attempts average)</div>
</div>
</div>

<div class="p-5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-center">
<div class="text-lg font-bold">Press Shift+Tab to toggle Plan Mode • Reduces debugging cycles by 75%</div>
</div>

</div>

---

# Real-Time Steering

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 bg-blue-900/40 rounded-lg border border-blue-500/50">
<div class="text-2xl mb-3">💬</div>
<div class="font-bold mb-3">Enqueue Messages</div>
<div class="space-y-2">
<div class="opacity-90">Send follow-up instructions mid-response:</div>
<div class="font-mono text-xs bg-black/40 p-3 rounded">
> "Also check if Redis is running"<br/>
> "Focus on auth errors first"
</div>
<div class="text-xs opacity-70 mt-2">Steer direction while Copilot is thinking</div>
</div>
</div>

<div class="p-5 bg-purple-900/40 rounded-lg border border-purple-500/50">
<div class="text-2xl mb-3">⏹️</div>
<div class="font-bold mb-3">Inline Feedback on Rejection</div>
<div class="space-y-2">
<div class="opacity-90">Reject with explanation:</div>
<div class="font-mono text-xs bg-black/40 p-3 rounded">
[Esc] "Don't delete tmp/ — it has<br/>
cached artifacts we need"
</div>
<div class="text-xs opacity-70 mt-2">Copilot adapts without stopping</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-lg">
<div class="font-semibold">Advanced: Ctrl+T toggles reasoning visibility to see AI's thought process</div>
</div>

---

# Example: Docker Debugging with Plan Mode

<div class="text-xs space-y-3 mt-4">

```bash
$ copilot
> "Debug why the backend container won't start"

🤔 Copilot (Plan Mode):
Before I start, a few questions:
1. Should I check docker-compose config, container logs, or both?
2. Do you want environment variable analysis?
3. Any recent changes to services or network?

> "Start with logs, then check config if needed"

🤔 Copilot: Here's my plan:
1. Retrieve container logs for backend service
2. Analyze error patterns and stack traces
3. If logs suggest config issue, inspect docker-compose.yml

Proceed? (y/n)
```

</div>

<div class="mt-4 p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="font-bold">✅ Outcome: 45 minutes → 8 minutes (83% reduction)</div>
<div class="text-sm mt-2">Root cause: Misconfigured port binding found in 2 targeted checks vs 8 trial-and-error attempts</div>
</div>

---
layout: center
name: operating-modes
---

<!-- 🎬 MAJOR SECTION: Operating Modes -->

<div class="text-center">
  <div class="text-6xl mb-6">⚙️</div>
  <h1 class="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
    Operating Modes
  </h1>
  <div class="text-2xl mt-4 opacity-80">
    Interactive • Programmatic • Cloud Delegation
  </div>
</div>

---

# Three Operating Modes

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="text-3xl mb-2">💬</div>
<div class="font-bold text-lg mb-2">Interactive</div>
<div class="font-mono text-xs mb-2">$ copilot</div>
<div class="space-y-2 opacity-90">
<div>✓ Conversational sessions</div>
<div>✓ Persistent context</div>
<div>✓ Plan Mode support</div>
<div>✓ Multi-turn debugging</div>
</div>
<div class="mt-3 pt-3 border-t border-emerald-500/30 text-xs font-semibold">
Best for: Complex debugging, unknown root causes
</div>
</div>

<div class="p-4 bg-teal-900/40 rounded-lg border border-teal-500/50">
<div class="text-3xl mb-2">🔄</div>
<div class="font-bold text-lg mb-2">Programmatic</div>
<div class="font-mono text-xs mb-2">$ copilot -p</div>
<div class="space-y-2 opacity-90">
<div>✓ Single-command</div>
<div>✓ Structured output</div>
<div>✓ Headless operation</div>
<div>✓ CI/CD ready</div>
</div>
<div class="mt-3 pt-3 border-t border-teal-500/30 text-xs font-semibold">
Best for: Automation, pipelines, scripts
</div>
</div>

<div class="p-4 bg-cyan-900/40 rounded-lg border border-cyan-500/50">
<div class="text-3xl mb-2">☁️</div>
<div class="font-bold text-lg mb-2">Cloud Delegation</div>
<div class="font-mono text-xs mb-2">$ copilot<br/>> "&task"</div>
<div class="space-y-2 opacity-90">
<div>✓ Background execution</div>
<div>✓ Terminal stays free</div>
<div>✓ GitHub cloud agents</div>
<div>✓ PR created on completion</div>
</div>
<div class="mt-3 pt-3 border-t border-cyan-500/30 text-xs font-semibold">
Best for: Large refactors, security audits
</div>
</div>

</div>

---

# CI/CD Build Failure Automation

<div class="text-xs mt-4">

```yaml
# .github/workflows/build.yml
name: Build and Analyze
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build application
        run: npm run build

      - name: Analyze failure with Copilot CLI
        if: failure()
        env:
          GITHUB_TOKEN: ${{ secrets.COPILOT_GITHUB_TOKEN }}
        run: |
          npm install -g @github/copilot
          copilot -p "Analyze build failure. Check commits, deps, error patterns." \
            --allow-tool 'shell(gh)' --allow-tool 'shell(git)' > analysis.txt

      - name: Post analysis as comment
        if: failure()
        run: gh pr comment ${{ github.event.pull_request.number }} --body-file analysis.txt
```

</div>

<div class="mt-4 p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="font-bold">Impact: 25 minutes → 5 minutes investigation time</div>
<div class="text-sm mt-1">Zero human intervention for known failure types • Pattern recognition across historical failures</div>
</div>

---
layout: center
name: context-management
---

<!-- 🎬 MAJOR SECTION: Context Management -->

<div class="text-center">
  <div class="text-6xl mb-6">🧠</div>
  <h1 class="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
    Context Management
  </h1>
  <div class="text-2xl mt-4 opacity-80">
    Infinite Sessions • Repository Memory
  </div>
</div>

---

# Automatic Context Management

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div>

### ♾️ Infinite Sessions

<div class="space-y-3 mt-4">

**The problem:**
- Traditional AI: 12-20 exchanges then loses context

**The solution:**
- Auto-compaction at 95% token limit
- Important context persists
- Redundant details pruned
- No interruptions

**Monitoring tools:**
```bash
/context   # Token usage breakdown
/usage     # Session statistics
```

</div>

</div>

<div>

### 🧠 Repository Memory

<div class="space-y-3 mt-4">

**What gets remembered:**
- Coding standards and conventions
- Project architecture patterns
- Preferred debugging approaches
- Configuration patterns

**Cross-session learning:**
```bash
Session 1 (Monday):
> [Explain docker-compose networking]

Session 2 (Wednesday):
> "Service A can't reach Service B"
✅ Copilot remembers network setup
```

</div>

</div>

</div>

---
layout: center
name: built-in-agents
---

<!-- 🎬 MAJOR SECTION: Built-in Agents -->

<div class="text-center">
  <div class="text-6xl mb-6">🤖</div>
  <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
    Built-in Agents
  </h1>
  <div class="text-2xl mt-4 opacity-80">
    Automatic Expert Delegation
  </div>
</div>

---

# Four Specialized Agents

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">

<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/50">
<div class="text-2xl mb-2">🔍</div>
<div class="font-bold mb-2">Explore Agent</div>
<div class="opacity-90 mb-3">Fast codebase analysis</div>
<div class="space-y-1 text-xs">
<div>• Returns concise answers (&lt;300 words)</div>
<div>• Safe parallel execution</div>
<div>• Doesn't pollute main context</div>
</div>
<div class="font-mono text-xs mt-3 bg-black/40 p-2 rounded">
> "How does auth work?"
</div>
</div>

<div class="p-4 bg-indigo-900/40 rounded-lg border border-indigo-500/50">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold mb-2">Task Agent</div>
<div class="opacity-90 mb-3">Smart output filtering</div>
<div class="space-y-1 text-xs">
<div>• Brief summary on success</div>
<div>• Full output on failure</div>
<div>• Reduces conversation clutter</div>
</div>
<div class="font-mono text-xs mt-3 bg-black/40 p-2 rounded">
> "Run tests, tell me if failed"
</div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border border-purple-500/50">
<div class="text-2xl mb-2">📋</div>
<div class="font-bold mb-2">Plan Agent</div>
<div class="opacity-90 mb-3">Multi-step strategies</div>
<div class="space-y-1 text-xs">
<div>• Analyzes dependencies</div>
<div>• Creates structured plans</div>
<div>• Surfaces risks upfront</div>
</div>
<div class="font-mono text-xs mt-3 bg-black/40 p-2 rounded">
> "Plan API versioning refactor"
</div>
</div>

<div class="p-4 bg-pink-900/40 rounded-lg border border-pink-500/50">
<div class="text-2xl mb-2">👀</div>
<div class="font-bold mb-2">Code-Review Agent</div>
<div class="opacity-90 mb-3">High signal-to-noise</div>
<div class="space-y-1 text-xs">
<div>• Only bugs and security issues</div>
<div>• Never style/formatting</div>
<div>• Focuses human attention</div>
</div>
<div class="font-mono text-xs mt-3 bg-black/40 p-2 rounded">
/review
</div>
</div>

</div>

<div class="mt-4 text-center text-sm">
<div class="font-semibold">✨ Copilot automatically routes tasks to the right agent — no explicit calls needed</div>
<div class="text-xs opacity-70 mt-1">Use <code>/ide &lt;file&gt;</code> at any point to open a file in VS Code — CLI conversation stays alive, use both tools simultaneously</div>
</div>

---
layout: center
name: plugins
---

<!-- 🎬 MAJOR SECTION: Plugins -->

<div class="text-center">
  <div class="text-6xl mb-6">🔌</div>
  <h1 class="text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
    Plugins
  </h1>
  <div class="text-2xl mt-4 opacity-80">
    Extend CLI with Community Packages
  </div>
</div>

---

# Plugins: Extending Copilot CLI

<div class="grid grid-cols-2 gap-6 mt-6 text-xs">

<div class="space-y-4">

### What Plugins Are

<div class="opacity-90">
Packages that extend Copilot CLI's functionality beyond built-in capabilities — new tools, specialized workflows, domain-specific knowledge.
</div>

### Default Marketplaces

<div class="space-y-2 mt-3">
<div class="p-3 bg-violet-900/40 rounded-lg border border-violet-500/50">
<div class="font-bold">copilot-plugins</div>
<div class="text-xs opacity-80">GitHub's official plugin collection</div>
</div>
<div class="p-3 bg-purple-900/40 rounded-lg border border-purple-500/50">
<div class="font-bold">awesome-copilot</div>
<div class="text-xs opacity-80">Community-curated plugins</div>
</div>
</div>

</div>

<div class="space-y-4">

### Finding & Installing

```bash
# List registered marketplaces
copilot plugin marketplace list

# Browse a marketplace
copilot plugin marketplace browse awesome-copilot

# Install from marketplace
copilot plugin install database-data-management@awesome-copilot

# Install from GitHub repo
copilot plugin install OWNER/REPO

# Install from local path
copilot plugin install ./path/to/plugin
```

### Managing Plugins

```bash
copilot plugin list       # View installed
copilot plugin update X   # Update plugin
copilot plugin uninstall X
```

</div>

</div>

---

# Real-World Use Cases (1 of 2)

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">
<div class="p-4 bg-emerald-900/40 rounded-lg border border-emerald-500/50">
<div class="font-bold text-sm mb-2">🌱 Greenfield Project Scaffolding</div>
<div class="opacity-90 mb-2">AI as thought partner for new projects</div>
<div class="space-y-1">
<div>⏱️ <strong>90 min → 15 min</strong> library research &amp; setup</div>
<div>🎯 <strong>Documented rationale</strong> for each decision</div>
<div>✅ Plan Mode clarifies requirements before code</div>
</div>
</div>
<div class="p-4 bg-teal-900/40 rounded-lg border border-teal-500/50">
<div class="font-bold text-sm mb-2">🐛 Debugging Your Own Failing Code</div>
<div class="opacity-90 mb-2">Async, CI vs local, intermittent failures</div>
<div class="space-y-1">
<div>⏱️ <strong>30 min → 5 min</strong> to root cause</div>
<div>🎯 <strong>Reads your actual code</strong>, not a description</div>
<div>✅ Fix + prevention, no re-explaining context</div>
</div>
</div>
<div class="p-4 bg-cyan-900/40 rounded-lg border border-cyan-500/50">
<div class="font-bold text-sm mb-2">🐳 Docker Debugging with Plan Mode</div>
<div class="opacity-90 mb-2">Container won't start investigation</div>
<div class="space-y-1">
<div>⏱️ <strong>45 min → 8 min</strong> (83% reduction)</div>
<div>🎯 <strong>8 attempts → 2 attempts</strong></div>
<div>✅ Collaborative strategy before execution</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg border border-blue-500/50">
<div class="font-bold text-sm mb-2">🔄 CI/CD Build Failure Analysis</div>
<div class="opacity-90 mb-2">Programmatic automation in pipelines</div>
<div class="space-y-1">
<div>⏱️ <strong>25 min → 5 min</strong> investigation</div>
<div>🎯 <strong>12 steps → 3 automated steps</strong></div>
<div>✅ Pattern recognition across historical failures</div>
</div>
</div>
</div>

---

# Real-World Use Cases (2 of 2)

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">
<div class="p-4 bg-indigo-900/40 rounded-lg border border-indigo-500/50">
<div class="font-bold text-sm mb-2">📚 Infrastructure Documentation</div>
<div class="opacity-90 mb-2">Auto-generated from docker-compose &amp; IaC</div>
<div class="space-y-1">
<div>⏱️ <strong>3 days → 30 min</strong> documentation</div>
<div>🎯 <strong>Automated diagram generation</strong> from config</div>
<div>✅ Always-current architecture docs</div>
</div>
</div>
<div class="p-4 bg-purple-900/40 rounded-lg border border-purple-500/50">
<div class="font-bold text-sm mb-2">🧠 Team Onboarding via Repository Memory</div>
<div class="opacity-90 mb-2">Institutional knowledge that compounds</div>
<div class="space-y-1">
<div>⏱️ <strong>2 weeks → 3 days</strong> to productivity</div>
<div>🎯 <strong>5-6 explanations → 1 explanation</strong></div>
<div>✅ AI retains conventions learned from senior engineers</div>
</div>
</div>
</div>
<div class="mt-4 p-4 bg-gradient-to-r from-emerald-600/40 to-teal-600/40 rounded-xl">
<div class="font-bold text-sm mb-2">Aggregate Impact</div>
<div class="grid grid-cols-4 gap-2 text-xs text-center">
<div class="p-2 bg-black/30 rounded">
<div class="font-bold text-emerald-300">75 min saved</div>
<div class="opacity-70">per greenfield project</div>
</div>
<div class="p-2 bg-black/30 rounded">
<div class="font-bold text-teal-300">83% faster</div>
<div class="opacity-70">Docker debugging</div>
</div>
<div class="p-2 bg-black/30 rounded">
<div class="font-bold text-cyan-300">80% less</div>
<div class="opacity-70">CI investigation time</div>
</div>
<div class="p-2 bg-black/30 rounded">
<div class="font-bold text-blue-300">~11 days</div>
<div class="opacity-70">faster onboarding</div>
</div>
</div>
</div>

---

# Mental Model Shift

<div class="text-xs mt-2 mb-4 px-4 py-2 bg-gradient-to-r from-slate-700/60 to-slate-600/40 rounded-lg border border-slate-500/40 italic opacity-90 text-center">
From "execute commands manually and search docs when stuck" → "collaborate with AI in the terminal — whether building something new, debugging failing code, or running autonomous agents independently of your IDE"
</div>

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="space-y-2">
<div class="text-sm font-bold text-emerald-300 flex items-center gap-2 mb-3">
  <span class="px-2 py-0.5 bg-emerald-500/20 rounded-full border border-emerald-500/40">✅ Move Toward</span>
</div>

<div class="p-2.5 bg-emerald-900/30 rounded-lg border border-emerald-500/30 flex gap-3 items-start">
  <span class="text-lg flex-shrink-0">🌱</span>
  <div><span class="font-semibold text-emerald-300">AI as Greenfield Thought Partner</span><br><span class="opacity-80">Explore library choices before committing → minutes vs hours of rework</span></div>
</div>

<div class="p-2.5 bg-emerald-900/30 rounded-lg border border-emerald-500/30 flex gap-3 items-start">
  <span class="text-lg flex-shrink-0">🤝</span>
  <div><span class="font-semibold text-emerald-300">Collaborative Planning First</span><br><span class="opacity-80">Plan Mode before coding → reduces debugging cycles from 8 to 2</span></div>
</div>

<div class="p-2.5 bg-emerald-900/30 rounded-lg border border-emerald-500/30 flex gap-3 items-start">
  <span class="text-lg flex-shrink-0">💻</span>
  <div><span class="font-semibold text-emerald-300">Terminal as Collaboration Space</span><br><span class="opacity-80">Eliminate 5-10 min context-switching overhead per switch</span></div>
</div>

<div class="p-2.5 bg-emerald-900/30 rounded-lg border border-emerald-500/30 flex gap-3 items-start">
  <span class="text-lg flex-shrink-0">☁️</span>
  <div><span class="font-semibold text-emerald-300">Cloud Delegation for Long Tasks</span><br><span class="opacity-80"><code>&</code> prefix runs agents independently — IDE and terminal both stay free</span></div>
</div>

</div>

<div class="space-y-2">
<div class="text-sm font-bold text-red-300 flex items-center gap-2 mb-3">
  <span class="px-2 py-0.5 bg-red-500/20 rounded-full border border-red-500/40">🛑 Move Against</span>
</div>

<div class="p-2.5 bg-red-900/25 rounded-lg border border-red-500/30 flex gap-3 items-start">
  <span class="text-lg flex-shrink-0">⚡</span>
  <div><span class="font-semibold text-red-300">Jumping to Implementation</span><br><span class="opacity-80">On greenfield work, explore options first — wrong library choice costs hours</span></div>
</div>

<div class="p-2.5 bg-red-900/25 rounded-lg border border-red-500/30 flex gap-3 items-start">
  <span class="text-lg flex-shrink-0">🔁</span>
  <div><span class="font-semibold text-red-300">Interactive Mode in CI/CD</span><br><span class="opacity-80">Builds break when it prompts for input → use <code>copilot -p</code></span></div>
</div>

<div class="p-2.5 bg-red-900/25 rounded-lg border border-red-500/30 flex gap-3 items-start">
  <span class="text-lg flex-shrink-0">⚠️</span>
  <div><span class="font-semibold text-red-300">Over-Approving Permissions</span><br><span class="opacity-80">Avoid <code>--yolo</code> in production — use targeted <code>--allow-tool</code></span></div>
</div>

<div class="p-2.5 bg-red-900/25 rounded-lg border border-red-500/30 flex gap-3 items-start">
  <span class="text-lg flex-shrink-0">🔀</span>
  <div><span class="font-semibold text-red-300">Context-Switching for AI Help</span><br><span class="opacity-80">Use <code>/ide</code> to bridge to VS Code mid-session instead</span></div>
</div>

</div>

</div>

---

# When to Use Copilot CLI

<div class="mt-6 text-sm">

<div class="grid grid-cols-2 gap-6">

<div class="space-y-3">

### ✅ Use This Pattern When

<div class="text-xs space-y-2">
<div>✓ Building something new and want a thought partner for options</div>
<div>✓ Debugging your own failing code, tests, or build environment</div>
<div>✓ DevOps and infrastructure work happens in terminals</div>
<div>✓ Automating CI/CD build failure analysis</div>
<div>✓ Want AI to remember team conventions across sessions</div>
</div>

</div>

<div class="space-y-3">

### ❌ Don't Use When

<div class="text-xs space-y-2">
<div>✗ Primary workflow is IDE code editing</div>
<div>✗ Need cross-repository analysis</div>
<div>✗ Want graphical debugging with breakpoints</div>
<div>✗ Workflow doesn't involve terminals</div>
</div>

</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-emerald-600/40 to-teal-600/40 rounded-lg border border-emerald-500/50">
<div class="font-bold mb-2">Quick Comparison</div>
<div class="grid grid-cols-3 gap-4 text-xs">
<div><strong>Copilot CLI:</strong> Terminal workflows, infrastructure</div>
<div><strong>VS Code Copilot:</strong> Code editing, rapid development</div>
<div><strong>Copilot Web:</strong> Cross-repo analysis, PR review</div>
</div>
</div>

</div>

---

# ✅ What You Can Do Today

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">
<div class="p-5 bg-blue-900/40 rounded-lg border border-blue-500/50">
<div class="text-2xl mb-3">⚡</div>
<div class="font-bold mb-3">Immediate (15 min)</div>
<div class="space-y-2">
<div>□ Install: <code class="text-xs">gh copilot</code></div>
<div>□ Ask about your current project</div>
<div>□ Test Plan Mode (Shift+Tab)</div>
<div>□ Try <code>/ide</code> to open a file in VS Code</div>
</div>
</div>
<div class="p-5 bg-indigo-900/40 rounded-lg border border-indigo-500/50">
<div class="text-2xl mb-3">🚀</div>
<div class="font-bold mb-3">Short-term (1 hour)</div>
<div class="space-y-2">
<div>□ Scaffold next project interactively</div>
<div>□ Debug next failing test with Copilot</div>
<div>□ Create <code>.github/copilot-instructions.md</code></div>
<div>□ Add to one CI/CD pipeline</div>
</div>
</div>
<div class="p-5 bg-purple-900/40 rounded-lg border border-purple-500/50">
<div class="text-2xl mb-3">🎓</div>
<div class="font-bold mb-3">Advanced (2-4 hours)</div>
<div class="space-y-2">
<div>□ Create custom agents in <code>.github/agents/</code></div>
<div>□ Configure all CI/CD workflows</div>
<div>□ Browse plugins: <code>copilot plugin marketplace browse</code></div>
<div>□ Measure ROI: track before/after metrics</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-center">
<div class="font-bold text-lg">Installation: 2 minutes • Immediate value for terminal workflows</div>
</div>

---

# Related Patterns

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">

<div class="space-y-3">
<div class="text-sm font-bold opacity-60 mb-3 uppercase tracking-wider">Complementary Features</div>

<div class="p-3 bg-violet-900/35 rounded-lg border border-violet-500/40 flex gap-3 items-start">
  <span class="text-xl flex-shrink-0">🪝</span>
  <div><span class="font-semibold text-violet-300">Copilot Hooks</span><br><span class="opacity-80">Add validation, logging, and security scanning at key execution points in CLI workflows</span></div>
</div>

<div class="p-3 bg-blue-900/35 rounded-lg border border-blue-500/40 flex gap-3 items-start">
  <span class="text-xl flex-shrink-0">🔌</span>
  <div><span class="font-semibold text-blue-300">MCP Apps</span><br><span class="opacity-80">Extend Copilot CLI with external tools and data sources via Model Context Protocol</span></div>
</div>

<div class="p-3 bg-amber-900/35 rounded-lg border border-amber-500/40 flex gap-3 items-start">
  <span class="text-xl flex-shrink-0">🔒</span>
  <div><span class="font-semibold text-amber-300">Terminal Sandboxing</span><br><span class="opacity-80">Secure execution environments for untrusted Copilot CLI operations</span></div>
</div>

<div class="p-3 bg-teal-900/35 rounded-lg border border-teal-500/40 flex gap-3 items-start">
  <span class="text-xl flex-shrink-0">📡</span>
  <div><span class="font-semibold text-teal-300">Copilot CLI ACP</span><br><span class="opacity-80">Drive Copilot CLI programmatically via the Agent Client Protocol — embed it in your own tooling or automation</span></div>
</div>

</div>

<div class="space-y-3">
<div class="text-sm font-bold opacity-60 mb-3 uppercase tracking-wider">Decision Flow</div>

<div class="font-mono bg-black/50 p-4 rounded-lg border border-slate-600/40 text-xs space-y-1 leading-relaxed">
  <div class="opacity-70">Q: What's your actual goal?</div>
  <div class="flex gap-2"><span class="opacity-40">├─</span><span>In-editor code assistance</span></div>
  <div class="flex gap-2"><span class="opacity-40">│ </span><span class="text-emerald-400">→ VS Code Copilot</span></div>
  <div class="flex gap-2"><span class="opacity-40">├─</span><span>Cross-repo analysis</span></div>
  <div class="flex gap-2"><span class="opacity-40">│ </span><span class="text-emerald-400">→ Copilot Web</span></div>
  <div class="flex gap-2"><span class="opacity-40">├─</span><span>Organization-wide governance</span></div>
  <div class="flex gap-2"><span class="opacity-40">│ </span><span class="text-emerald-400">→ Copilot Hooks</span></div>
  <div class="flex gap-2"><span class="opacity-40">├─</span><span>Extending with external tools</span></div>
  <div class="flex gap-2"><span class="opacity-40">│ </span><span class="text-emerald-400">→ MCP Apps</span></div>
  <div class="flex gap-2"><span class="opacity-40">└─</span><span>Embed CLI in your own tooling</span></div>
  <div class="flex gap-2"><span class="opacity-40">  </span><span class="text-emerald-400">→ Copilot CLI ACP, Copilot SDK</span></div>
</div>

</div>

</div>

---

# 📚 Official Documentation

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="space-y-3">

### Primary Docs

<div class="text-xs space-y-2">
<div>📖 <strong>About GitHub Copilot CLI</strong><br/>Core concepts, capabilities, modes</div>
<div>📖 <strong>Using GitHub Copilot CLI</strong><br/>Command syntax, options, workflows</div>
<div>📖 <strong>Installing GitHub Copilot CLI</strong><br/>Setup for npm, Homebrew, WinGet</div>
</div>

</div>

<div class="space-y-3">

### Additional Resources

<div class="text-xs space-y-2">
<div>🎓 <strong>CLI Best Practices</strong><br/>Optimization patterns and anti-patterns</div>
<div>🎓 <strong>Custom Instructions</strong><br/>Repository-specific configuration</div>
<div>📋 <strong>GitHub Blog</strong><br/>Plan Mode announcement and features</div>
</div>

</div>

</div>

<div class="mt-6 text-center text-xs opacity-70">
docs.github.com/en/copilot
</div>

---
layout: center
class: text-center
---

<div class="text-6xl mb-8">🎉</div>

# Thank You!

<div class="text-2xl mt-6 opacity-80">
  Terminal-Native AI for Developers and DevOps
</div>

<div class="mt-8 text-lg">
  <strong>Next Steps:</strong> Install Copilot CLI and try Plan Mode
</div>

<div class="mt-6 text-sm opacity-70">
  Questions? Let's discuss terminal workflows and AI collaboration
</div>
