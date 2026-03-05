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
updated: 2026-03-05
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: #0d1117;">
  <!-- Hero: Label -->
  <div class="flex items-center gap-2 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
    <span class="text-sm font-medium tracking-wide uppercase" style="color: #8b949e;">GitHub Copilot</span>
  </div>
  <!-- Hero: Heading -->
  <h1 class="!text-6xl !font-bold !leading-tight text-center max-w-4xl" style="color: #e6edf3;">
    Copilot CLI
  </h1>
  <!-- Hero: Description -->
  <p class="mt-6 text-xl text-center max-w-2xl" style="color: #8b949e;">
    Terminal-Native AI for Developers and DevOps
  </p>
  <!-- Hero: Actions -->
  <div class="mt-8 flex gap-4">
    <div class="px-5 py-2 rounded-md text-sm font-medium" style="background: #238636; color: #ffffff;">
      45 Minutes
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      Software Developers
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      DevOps Engineers
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      CLI Power Users
    </div>
  </div>
</div>

---

# The Central Question

<div class="h-full flex items-center justify-center" style="background: #0d1117;">
<div class="max-w-4xl">
<div class="text-6xl text-center mb-8">🤔</div>
<div class="text-3xl font-bold text-center mb-6 leading-snug" style="color: #e6edf3;">
"How do I bring AI into my terminal workflow — whether I'm building something new, debugging my own code, or managing infrastructure?"
</div>
<div class="mt-8 flex gap-6 justify-center text-sm">
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #3fb950;">👩‍💻 Developers</div>
<div class="text-xs mt-1" style="color: #8b949e;">Greenfield work &amp; debugging</div>
</div>
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #58a6ff;">⚙️ DevOps</div>
<div class="text-xs mt-1" style="color: #8b949e;">Infrastructure &amp; CI/CD</div>
</div>
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #d29922;">⚡ CLI Power Users</div>
<div class="text-xs mt-1" style="color: #8b949e;">Automation &amp; scripting</div>
</div>
</div>
</div>
</div>

---
layout: center
---

# 📖 Table of Contents

<div class="grid grid-cols-3 gap-4 mt-8">
  <div @click="$nav.go(10)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🎯</div>
    <div class="font-semibold" style="color: #e6edf3;">Plan Mode & Steering</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Collaborative planning</div>
  </div>

  <div @click="$nav.go(15)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">⚙️</div>
    <div class="font-semibold" style="color: #e6edf3;">Operating Modes</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Interactive, programmatic, cloud</div>
  </div>

  <div @click="$nav.go(19)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🧠</div>
    <div class="font-semibold" style="color: #e6edf3;">Context Management</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Infinite sessions + memory</div>
  </div>

  <div @click="$nav.go(22)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🤖</div>
    <div class="font-semibold" style="color: #e6edf3;">Built-in Agents</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Explore, Task, Plan, Code-review</div>
  </div>

  <div @click="$nav.go(25)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🔌</div>
    <div class="font-semibold" style="color: #e6edf3;">Plugins</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Extend with community packages</div>
  </div>

  <div @click="$nav.go(27)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🧪</div>
    <div class="font-semibold" style="color: #e6edf3;">Use Cases</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Real-world examples</div>
  </div>
</div>

---

# The Problem

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="font-bold mb-2" style="color: #f85149;">🌱 Greenfield Development is Decision-Dense</div>
<div style="color: #8b949e;">Library choices, architecture, patterns — every hour brings decisions with no one to consult. Developers spend 90+ minutes reading competing docs before writing a line of code</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="font-bold mb-2" style="color: #f85149;">🔇 Terminal is Powerful but Silent</div>
<div style="color: #8b949e;">Developers scaffold projects, debug failures, and explore APIs all from terminals — but must leave to get AI help, forcing them to re-explain context that's already at their fingertips</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #d29922;">
<div class="font-bold mb-2" style="color: #d29922;">🐌 Manual Investigation Overhead</div>
<div style="color: #8b949e;">Docker debugging: 45+ minutes manually parsing stack traces, checking config files, verifying env vars, searching docs — traditional tools can't adapt to context</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #d29922;">
<div class="font-bold mb-2" style="color: #d29922;">🔄 Context Switching Breaks Flow</div>
<div style="color: #8b949e;">Moving between terminal and IDE/web for AI assistance costs 5-10 minutes per switch, disrupts concentration, and forces re-explaining what's already present</div>
</div>
</div>
<div class="mt-4 p-3 rounded-xl border text-center text-sm" style="background: #161b22; border-color: #f85149;">
<div class="font-bold" style="color: #e6edf3;">Both developers and DevOps engineers need conversational AI that lives where they already work</div>
</div>

---

# The Solution: GitHub Copilot CLI

<div class="text-sm space-y-4 mt-4">

**Conversational AI directly in terminal workflows — interactive, autonomous, and IDE-independent**

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">🤝</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">Plan Mode</div>
<div class="text-xs" style="color: #8b949e;">Collaborative planning with clarifying questions before code — reduces iterations from 8 to 2</div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">💬</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">Interactive Mode</div>
<div class="text-xs" style="color: #8b949e;">Terminal-native conversations with persistent context — perfect for "figure this out" scenarios</div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">🔄</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">Programmatic Mode</div>
<div class="text-xs" style="color: #8b949e;">Single-command headless execution for CI/CD pipelines — structured output for scripts</div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">☁️</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">Cloud Delegation</div>
<div class="text-xs" style="color: #8b949e;"><code>&</code> prefix offloads long tasks to GitHub's agent — IDE and terminal both stay completely free</div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">🤖</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">Built-in Agents</div>
<div class="text-xs" style="color: #8b949e;">Explore, Task, Plan, Code-review — routed automatically based on intent, run in parallel</div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">🪟</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">IDE Bridge <code>/ide</code></div>
<div class="text-xs" style="color: #8b949e;">Open any file in VS Code mid-session — CLI context and conversation stay fully alive</div>
</div>

<div class="p-3 rounded-lg border col-span-2" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">🧠</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">Repository Memory + Auto-Compaction</div>
<div class="text-xs" style="color: #8b949e;">AI learns your conventions across sessions; auto-compaction at 95% token limit makes sessions virtually infinite</div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">🧩</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">MCP Integration</div>
<div class="text-xs" style="color: #8b949e;">Discover and connect external tools via GitHub MCP Registry with org-level governance</div>
</div>

</div>

</div>

---

# Latest CLI Updates

<div class="grid grid-cols-2 gap-6 mt-6 text-xs">

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d; border-left: 4px solid #3fb950;">
<div class="text-2xl mb-2">🎉</div>
<div class="font-bold mb-2" style="color: #3fb950;">Generally Available</div>
<div style="color: #8b949e;">Copilot CLI reached GA on Feb 25, 2026. Available on all Copilot plans — Free, Pro, Business, Enterprise.</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d; border-left: 4px solid #58a6ff;">
<div class="text-2xl mb-2">🔌</div>
<div class="font-bold mb-2" style="color: #58a6ff;">Plugin System & Marketplaces</div>
<div style="color: #8b949e;">Install community plugins from registered marketplaces. Default: copilot-plugins and awesome-copilot. Cross-compatible with Claude Code plugins.</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d; border-left: 4px solid #a371f7;">
<div class="text-2xl mb-2">🤖</div>
<div class="font-bold mb-2" style="color: #a371f7;">Parallel Agent Execution</div>
<div style="color: #8b949e;">Multiple built-in agents (Explore, Task, Plan, Code-review) run in parallel. Prefix with & to delegate to cloud agents in background.</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d; border-left: 4px solid #d29922;">
<div class="text-2xl mb-2">🧠</div>
<div class="font-bold mb-2" style="color: #d29922;">New Models & Commands</div>
<div style="color: #8b949e;">GPT-5 Mini, GPT-4.1 (no premium quota), Claude Opus 4.6, Gemini 3 Pro. New /chronicle command for standups and session insights.</div>
</div>

</div>

---
layout: center
name: plan-mode
---

<!-- 🎬 MAJOR SECTION: Plan Mode & Steering -->

<div class="text-center">
  <div class="text-6xl mb-6">🎯</div>
  <h1 class="text-5xl font-bold" style="color: #e6edf3;">
    Plan Mode
  </h1>
  <div class="text-2xl mt-4" style="color: #8b949e;">
    Collaborative Planning Before Implementation
  </div>
</div>

---

# Plan Mode: The Fundamental Shift

<div class="mt-8 space-y-6 text-sm">

<div class="p-5 rounded-lg border-2" style="background: #161b22; border-color: #f85149;">
<div class="text-xl font-bold mb-3" style="color: #f85149;">❌ Traditional Workflow</div>
<div class="flex items-center gap-3" style="color: #e6edf3;">
<div>Request</div>
<div class="text-2xl">→</div>
<div>AI generates solution</div>
<div class="text-2xl">→</div>
<div>Review and fix</div>
<div class="text-2xl">→</div>
<div>Repeat (8 attempts average)</div>
</div>
</div>

<div class="p-5 rounded-lg border-2" style="background: #161b22; border-color: #3fb950;">
<div class="text-xl font-bold mb-3" style="color: #3fb950;">✅ Plan Mode Workflow</div>
<div class="flex items-center gap-3" style="color: #e6edf3;">
<div>Request</div>
<div class="text-2xl">→</div>
<div>AI asks questions</div>
<div class="text-2xl">→</div>
<div>Collaborate on plan</div>
<div class="text-2xl">→</div>
<div>Generate (2 attempts average)</div>
</div>
</div>

<div class="p-5 rounded-xl text-center" style="background: #238636;">
<div class="text-lg font-bold" style="color: #ffffff;">Press Shift+Tab to toggle Plan Mode • Reduces debugging cycles by 75%</div>
</div>

</div>

---

# Real-Time Steering

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-2xl mb-3">💬</div>
<div class="font-bold mb-3" style="color: #58a6ff;">Enqueue Messages</div>
<div class="space-y-2">
<div style="color: #8b949e;">Send follow-up instructions mid-response:</div>
<div class="font-mono text-xs p-3 rounded" style="background: #21262d; color: #e6edf3;">
> "Also check if Redis is running"<br/>
> "Focus on auth errors first"
</div>
<div class="text-xs mt-2" style="color: #8b949e;">Steer direction while Copilot is thinking</div>
</div>
</div>

<div class="p-5 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-2xl mb-3">⏹️</div>
<div class="font-bold mb-3" style="color: #a371f7;">Inline Feedback on Rejection</div>
<div class="space-y-2">
<div style="color: #8b949e;">Reject with explanation:</div>
<div class="font-mono text-xs p-3 rounded" style="background: #21262d; color: #e6edf3;">
[Esc] "Don't delete tmp/ — it has<br/>
cached artifacts we need"
</div>
<div class="text-xs mt-2" style="color: #8b949e;">Copilot adapts without stopping</div>
</div>
</div>

</div>

<div class="mt-6 p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="font-semibold" style="color: #e6edf3;">Advanced: Ctrl+T toggles reasoning visibility to see AI's thought process</div>
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

<div class="mt-4 p-4 rounded-lg border" style="background: #161b22; border-color: #3fb950;">
<div class="font-bold" style="color: #3fb950;">✅ Outcome: 45 minutes → 8 minutes (83% reduction)</div>
<div class="text-sm mt-2" style="color: #8b949e;">Root cause: Misconfigured port binding found in 2 targeted checks vs 8 trial-and-error attempts</div>
</div>

---
layout: center
name: operating-modes
---

<!-- 🎬 MAJOR SECTION: Operating Modes -->

<div class="text-center">
  <div class="text-6xl mb-6">⚙️</div>
  <h1 class="text-5xl font-bold" style="color: #e6edf3;">
    Operating Modes
  </h1>
  <div class="text-2xl mt-4" style="color: #8b949e;">
    Interactive • Programmatic • Cloud Delegation
  </div>
</div>

---

# Three Operating Modes

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-3xl mb-2">💬</div>
<div class="font-bold text-lg mb-2" style="color: #3fb950;">Interactive</div>
<div class="font-mono text-xs mb-2" style="color: #8b949e;">$ copilot</div>
<div class="space-y-2" style="color: #e6edf3;">
<div>✓ Conversational sessions</div>
<div>✓ Persistent context</div>
<div>✓ Plan Mode support</div>
<div>✓ Multi-turn debugging</div>
</div>
<div class="mt-3 pt-3 text-xs font-semibold" style="border-top: 1px solid #30363d; color: #8b949e;">
Best for: Complex debugging, unknown root causes
</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-3xl mb-2">🔄</div>
<div class="font-bold text-lg mb-2" style="color: #58a6ff;">Programmatic</div>
<div class="font-mono text-xs mb-2" style="color: #8b949e;">$ copilot -p</div>
<div class="space-y-2" style="color: #e6edf3;">
<div>✓ Single-command</div>
<div>✓ Structured output</div>
<div>✓ Headless operation</div>
<div>✓ CI/CD ready</div>
</div>
<div class="mt-3 pt-3 text-xs font-semibold" style="border-top: 1px solid #30363d; color: #8b949e;">
Best for: Automation, pipelines, scripts
</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-3xl mb-2">☁️</div>
<div class="font-bold text-lg mb-2" style="color: #a371f7;">Cloud Delegation</div>
<div class="font-mono text-xs mb-2" style="color: #8b949e;">$ copilot<br/>> "&task"</div>
<div class="space-y-2" style="color: #e6edf3;">
<div>✓ Background execution</div>
<div>✓ Terminal stays free</div>
<div>✓ GitHub cloud agents</div>
<div>✓ PR created on completion</div>
</div>
<div class="mt-3 pt-3 text-xs font-semibold" style="border-top: 1px solid #30363d; color: #8b949e;">
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

<div class="mt-4 p-4 rounded-lg border" style="background: #161b22; border-color: #3fb950;">
<div class="font-bold" style="color: #3fb950;">Impact: 25 minutes → 5 minutes investigation time</div>
<div class="text-sm mt-1" style="color: #8b949e;">Zero human intervention for known failure types • Pattern recognition across historical failures</div>
</div>

---
layout: center
name: context-management
---

<!-- 🎬 MAJOR SECTION: Context Management -->

<div class="text-center">
  <div class="text-6xl mb-6">🧠</div>
  <h1 class="text-5xl font-bold" style="color: #e6edf3;">
    Context Management
  </h1>
  <div class="text-2xl mt-4" style="color: #8b949e;">
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
  <h1 class="text-5xl font-bold" style="color: #e6edf3;">
    Built-in Agents
  </h1>
  <div class="text-2xl mt-4" style="color: #8b949e;">
    Automatic Expert Delegation
  </div>
</div>

---

# Four Specialized Agents

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-2xl mb-2">🔍</div>
<div class="font-bold mb-2" style="color: #58a6ff;">Explore Agent</div>
<div class="mb-3" style="color: #8b949e;">Fast codebase analysis</div>
<div class="space-y-1 text-xs" style="color: #e6edf3;">
<div>• Returns concise answers (&lt;300 words)</div>
<div>• Safe parallel execution</div>
<div>• Doesn't pollute main context</div>
</div>
<div class="font-mono text-xs mt-3 p-2 rounded" style="background: #21262d; color: #e6edf3;">
> "How does auth work?"
</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold mb-2" style="color: #3fb950;">Task Agent</div>
<div class="mb-3" style="color: #8b949e;">Smart output filtering</div>
<div class="space-y-1 text-xs" style="color: #e6edf3;">
<div>• Brief summary on success</div>
<div>• Full output on failure</div>
<div>• Reduces conversation clutter</div>
</div>
<div class="font-mono text-xs mt-3 p-2 rounded" style="background: #21262d; color: #e6edf3;">
> "Run tests, tell me if failed"
</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-2xl mb-2">📋</div>
<div class="font-bold mb-2" style="color: #a371f7;">Plan Agent</div>
<div class="mb-3" style="color: #8b949e;">Multi-step strategies</div>
<div class="space-y-1 text-xs" style="color: #e6edf3;">
<div>• Analyzes dependencies</div>
<div>• Creates structured plans</div>
<div>• Surfaces risks upfront</div>
</div>
<div class="font-mono text-xs mt-3 p-2 rounded" style="background: #21262d; color: #e6edf3;">
> "Plan API versioning refactor"
</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-2xl mb-2">👀</div>
<div class="font-bold mb-2" style="color: #d29922;">Code-Review Agent</div>
<div class="mb-3" style="color: #8b949e;">High signal-to-noise</div>
<div class="space-y-1 text-xs" style="color: #e6edf3;">
<div>• Only bugs and security issues</div>
<div>• Never style/formatting</div>
<div>• Focuses human attention</div>
</div>
<div class="font-mono text-xs mt-3 p-2 rounded" style="background: #21262d; color: #e6edf3;">
/review
</div>
</div>

</div>

<div class="mt-4 text-center text-sm">
<div class="font-semibold" style="color: #e6edf3;">✨ Copilot automatically routes tasks to the right agent — no explicit calls needed</div>
<div class="text-xs mt-1" style="color: #8b949e;">Use <code>/ide &lt;file&gt;</code> at any point to open a file in VS Code — CLI conversation stays alive, use both tools simultaneously</div>
</div>

---
layout: center
name: plugins
---

<!-- 🎬 MAJOR SECTION: Plugins -->

<div class="text-center">
  <div class="text-6xl mb-6">🔌</div>
  <h1 class="text-5xl font-bold" style="color: #e6edf3;">
    Plugins
  </h1>
  <div class="text-2xl mt-4" style="color: #8b949e;">
    Extend CLI with Community Packages
  </div>
</div>

---

# Plugins: Extending Copilot CLI

<div class="grid grid-cols-2 gap-6 mt-6 text-xs">

<div class="space-y-4">

### What Plugins Are

<div style="color: #8b949e;">
Packages that extend Copilot CLI's functionality beyond built-in capabilities — new tools, specialized workflows, domain-specific knowledge.
</div>

### Default Marketplaces

<div class="space-y-2 mt-3">
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #a371f7;">copilot-plugins</div>
<div class="text-xs" style="color: #8b949e;">GitHub's official plugin collection</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #a371f7;">awesome-copilot</div>
<div class="text-xs" style="color: #8b949e;">Community-curated plugins</div>
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
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="font-bold text-sm mb-2" style="color: #3fb950;">🌱 Greenfield Project Scaffolding</div>
<div class="mb-2" style="color: #8b949e;">AI as thought partner for new projects</div>
<div class="space-y-1" style="color: #e6edf3;">
<div>⏱️ <strong>90 min → 15 min</strong> library research &amp; setup</div>
<div>🎯 <strong>Documented rationale</strong> for each decision</div>
<div>✅ Plan Mode clarifies requirements before code</div>
</div>
</div>
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="font-bold text-sm mb-2" style="color: #58a6ff;">🐛 Debugging Your Own Failing Code</div>
<div class="mb-2" style="color: #8b949e;">Async, CI vs local, intermittent failures</div>
<div class="space-y-1" style="color: #e6edf3;">
<div>⏱️ <strong>30 min → 5 min</strong> to root cause</div>
<div>🎯 <strong>Reads your actual code</strong>, not a description</div>
<div>✅ Fix + prevention, no re-explaining context</div>
</div>
</div>
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="font-bold text-sm mb-2" style="color: #a371f7;">🐳 Docker Debugging with Plan Mode</div>
<div class="mb-2" style="color: #8b949e;">Container won't start investigation</div>
<div class="space-y-1" style="color: #e6edf3;">
<div>⏱️ <strong>45 min → 8 min</strong> (83% reduction)</div>
<div>🎯 <strong>8 attempts → 2 attempts</strong></div>
<div>✅ Collaborative strategy before execution</div>
</div>
</div>
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="font-bold text-sm mb-2" style="color: #d29922;">🔄 CI/CD Build Failure Analysis</div>
<div class="mb-2" style="color: #8b949e;">Programmatic automation in pipelines</div>
<div class="space-y-1" style="color: #e6edf3;">
<div>⏱️ <strong>25 min → 5 min</strong> investigation</div>
<div>🎯 <strong>12 steps → 3 automated steps</strong></div>
<div>✅ Pattern recognition across historical failures</div>
</div>
</div>
</div>

---

# Real-World Use Cases (2 of 2)

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="font-bold text-sm mb-2" style="color: #58a6ff;">📚 Infrastructure Documentation</div>
<div class="mb-2" style="color: #8b949e;">Auto-generated from docker-compose &amp; IaC</div>
<div class="space-y-1" style="color: #e6edf3;">
<div>⏱️ <strong>3 days → 30 min</strong> documentation</div>
<div>🎯 <strong>Automated diagram generation</strong> from config</div>
<div>✅ Always-current architecture docs</div>
</div>
</div>
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="font-bold text-sm mb-2" style="color: #a371f7;">🧠 Team Onboarding via Repository Memory</div>
<div class="mb-2" style="color: #8b949e;">Institutional knowledge that compounds</div>
<div class="space-y-1" style="color: #e6edf3;">
<div>⏱️ <strong>2 weeks → 3 days</strong> to productivity</div>
<div>🎯 <strong>5-6 explanations → 1 explanation</strong></div>
<div>✅ AI retains conventions learned from senior engineers</div>
</div>
</div>
</div>
<div class="mt-4 p-4 rounded-xl border" style="background: #161b22; border-color: #30363d;">
<div class="font-bold text-sm mb-2" style="color: #e6edf3;">Aggregate Impact</div>
<div class="grid grid-cols-4 gap-2 text-xs text-center">
<div class="p-2 rounded" style="background: #21262d;">
<div class="font-bold" style="color: #3fb950;">75 min saved</div>
<div style="color: #8b949e;">per greenfield project</div>
</div>
<div class="p-2 rounded" style="background: #21262d;">
<div class="font-bold" style="color: #58a6ff;">83% faster</div>
<div style="color: #8b949e;">Docker debugging</div>
</div>
<div class="p-2 rounded" style="background: #21262d;">
<div class="font-bold" style="color: #a371f7;">80% less</div>
<div style="color: #8b949e;">CI investigation time</div>
</div>
<div class="p-2 rounded" style="background: #21262d;">
<div class="font-bold" style="color: #d29922;">~11 days</div>
<div style="color: #8b949e;">faster onboarding</div>
</div>
</div>
</div>

---

# Mental Model Shift

<div class="text-xs mt-2 mb-4 px-4 py-2 rounded-lg border italic text-center" style="background: #161b22; border-color: #30363d; color: #8b949e;">
From "execute commands manually and search docs when stuck" → "collaborate with AI in the terminal — whether building something new, debugging failing code, or running autonomous agents independently of your IDE"
</div>

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="space-y-2">
<div class="text-sm font-bold flex items-center gap-2 mb-3" style="color: #3fb950;">
  <span class="px-2 py-0.5 rounded-full border" style="background: #161b22; border-color: #3fb950;">✅ Move Toward</span>
</div>

<div class="p-2.5 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-lg flex-shrink-0">🌱</span>
  <div><span class="font-semibold" style="color: #3fb950;">AI as Greenfield Thought Partner</span><br><span style="color: #8b949e;">Explore library choices before committing → minutes vs hours of rework</span></div>
</div>

<div class="p-2.5 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-lg flex-shrink-0">🤝</span>
  <div><span class="font-semibold" style="color: #3fb950;">Collaborative Planning First</span><br><span style="color: #8b949e;">Plan Mode before coding → reduces debugging cycles from 8 to 2</span></div>
</div>

<div class="p-2.5 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-lg flex-shrink-0">💻</span>
  <div><span class="font-semibold" style="color: #3fb950;">Terminal as Collaboration Space</span><br><span style="color: #8b949e;">Eliminate 5-10 min context-switching overhead per switch</span></div>
</div>

<div class="p-2.5 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-lg flex-shrink-0">☁️</span>
  <div><span class="font-semibold" style="color: #3fb950;">Cloud Delegation for Long Tasks</span><br><span style="color: #8b949e;"><code>&</code> prefix runs agents independently — IDE and terminal both stay free</span></div>
</div>

</div>

<div class="space-y-2">
<div class="text-sm font-bold flex items-center gap-2 mb-3" style="color: #f85149;">
  <span class="px-2 py-0.5 rounded-full border" style="background: #161b22; border-color: #f85149;">🛑 Move Against</span>
</div>

<div class="p-2.5 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-lg flex-shrink-0">⚡</span>
  <div><span class="font-semibold" style="color: #f85149;">Jumping to Implementation</span><br><span style="color: #8b949e;">On greenfield work, explore options first — wrong library choice costs hours</span></div>
</div>

<div class="p-2.5 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-lg flex-shrink-0">🔁</span>
  <div><span class="font-semibold" style="color: #f85149;">Interactive Mode in CI/CD</span><br><span style="color: #8b949e;">Builds break when it prompts for input → use <code>copilot -p</code></span></div>
</div>

<div class="p-2.5 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-lg flex-shrink-0">⚠️</span>
  <div><span class="font-semibold" style="color: #f85149;">Over-Approving Permissions</span><br><span style="color: #8b949e;">Avoid <code>--yolo</code> in production — use targeted <code>--allow-tool</code></span></div>
</div>

<div class="p-2.5 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-lg flex-shrink-0">🔀</span>
  <div><span class="font-semibold" style="color: #f85149;">Context-Switching for AI Help</span><br><span style="color: #8b949e;">Use <code>/ide</code> to bridge to VS Code mid-session instead</span></div>
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

<div class="mt-6 p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="font-bold mb-2" style="color: #e6edf3;">Quick Comparison</div>
<div class="grid grid-cols-3 gap-4 text-xs" style="color: #8b949e;">
<div><strong style="color: #e6edf3;">Copilot CLI:</strong> Terminal workflows, infrastructure</div>
<div><strong style="color: #e6edf3;">VS Code Copilot:</strong> Code editing, rapid development</div>
<div><strong style="color: #e6edf3;">Copilot Web:</strong> Cross-repo analysis, PR review</div>
</div>
</div>

</div>

---

# ✅ What You Can Do Today

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">
<div class="p-5 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-2xl mb-3">⚡</div>
<div class="font-bold mb-3" style="color: #58a6ff;">Immediate (15 min)</div>
<div class="space-y-2" style="color: #e6edf3;">
<div>□ Install: <code class="text-xs">gh copilot</code></div>
<div>□ Ask about your current project</div>
<div>□ Test Plan Mode (Shift+Tab)</div>
<div>□ Try <code>/ide</code> to open a file in VS Code</div>
</div>
</div>
<div class="p-5 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-2xl mb-3">🚀</div>
<div class="font-bold mb-3" style="color: #3fb950;">Short-term (1 hour)</div>
<div class="space-y-2" style="color: #e6edf3;">
<div>□ Scaffold next project interactively</div>
<div>□ Debug next failing test with Copilot</div>
<div>□ Create <code>.github/copilot-instructions.md</code></div>
<div>□ Add to one CI/CD pipeline</div>
</div>
</div>
<div class="p-5 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-2xl mb-3">🎓</div>
<div class="font-bold mb-3" style="color: #a371f7;">Advanced (2-4 hours)</div>
<div class="space-y-2" style="color: #e6edf3;">
<div>□ Create custom agents in <code>.github/agents/</code></div>
<div>□ Configure all CI/CD workflows</div>
<div>□ Browse plugins: <code>copilot plugin marketplace browse</code></div>
<div>□ Measure ROI: track before/after metrics</div>
</div>
</div>
</div>

<div class="mt-6 p-4 rounded-xl text-center" style="background: #238636;">
<div class="font-bold text-lg" style="color: #ffffff;">Installation: 2 minutes • Immediate value for terminal workflows</div>
</div>

---

# Related Patterns

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">

<div class="space-y-3">
<div class="text-sm font-bold mb-3 uppercase tracking-wider" style="color: #484f58;">Complementary Features</div>

<div class="p-3 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-xl flex-shrink-0">🪝</span>
  <div><span class="font-semibold" style="color: #a371f7;">Copilot Hooks</span><br><span style="color: #8b949e;">Add validation, logging, and security scanning at key execution points in CLI workflows</span></div>
</div>

<div class="p-3 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-xl flex-shrink-0">🔌</span>
  <div><span class="font-semibold" style="color: #58a6ff;">MCP Apps</span><br><span style="color: #8b949e;">Extend Copilot CLI with external tools and data sources via Model Context Protocol</span></div>
</div>

<div class="p-3 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-xl flex-shrink-0">🔒</span>
  <div><span class="font-semibold" style="color: #d29922;">Terminal Sandboxing</span><br><span style="color: #8b949e;">Secure execution environments for untrusted Copilot CLI operations</span></div>
</div>

<div class="p-3 rounded-lg border flex gap-3 items-start" style="background: #161b22; border-color: #30363d;">
  <span class="text-xl flex-shrink-0">📡</span>
  <div><span class="font-semibold" style="color: #3fb950;">Copilot CLI ACP</span><br><span style="color: #8b949e;">Drive Copilot CLI programmatically via the Agent Client Protocol — embed it in your own tooling or automation</span></div>
</div>

</div>

<div class="space-y-3">
<div class="text-sm font-bold mb-3 uppercase tracking-wider" style="color: #484f58;">Decision Flow</div>

<div class="font-mono p-4 rounded-lg border text-xs space-y-1 leading-relaxed" style="background: #21262d; border-color: #30363d; color: #e6edf3;">
  <div style="color: #8b949e;">Q: What's your actual goal?</div>
  <div class="flex gap-2"><span style="color: #484f58;">├─</span><span>In-editor code assistance</span></div>
  <div class="flex gap-2"><span style="color: #484f58;">│ </span><span style="color: #3fb950;">→ VS Code Copilot</span></div>
  <div class="flex gap-2"><span style="color: #484f58;">├─</span><span>Cross-repo analysis</span></div>
  <div class="flex gap-2"><span style="color: #484f58;">│ </span><span style="color: #3fb950;">→ Copilot Web</span></div>
  <div class="flex gap-2"><span style="color: #484f58;">├─</span><span>Organization-wide governance</span></div>
  <div class="flex gap-2"><span style="color: #484f58;">│ </span><span style="color: #3fb950;">→ Copilot Hooks</span></div>
  <div class="flex gap-2"><span style="color: #484f58;">├─</span><span>Extending with external tools</span></div>
  <div class="flex gap-2"><span style="color: #484f58;">│ </span><span style="color: #3fb950;">→ MCP Apps</span></div>
  <div class="flex gap-2"><span style="color: #484f58;">└─</span><span>Embed CLI in your own tooling</span></div>
  <div class="flex gap-2"><span style="color: #484f58;">  </span><span style="color: #3fb950;">→ Copilot CLI ACP, Copilot SDK</span></div>
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

<div class="mt-6 text-center text-xs" style="color: #484f58;">
docs.github.com/en/copilot
</div>

---

<div class="h-full flex flex-col items-center justify-center" style="background: #0d1117;">
  <div class="flex items-center gap-3 mb-8">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
  </div>
  <h1 class="!text-5xl !font-bold mb-4" style="color: #e6edf3;">Thank You!</h1>
  <p class="text-xl mb-8" style="color: #8b949e;">Terminal-Native AI for Developers and DevOps</p>
  <div class="flex gap-4 mb-10">
    <div class="px-5 py-2 rounded-md text-sm font-medium" style="background: #238636; color: #ffffff;">
      Install Copilot CLI →
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      Try Plan Mode →
    </div>
  </div>
  <p class="text-sm" style="color: #484f58;">
    Questions? Let's discuss terminal workflows and AI collaboration
  </p>
</div>
