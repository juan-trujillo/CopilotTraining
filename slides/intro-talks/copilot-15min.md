---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot in 15 Minutes
  A business-technical overview of AI-powered development
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot Overview
module: intro-talks/copilot-15min
mdc: true
status: active
updated: 2026-04-27
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: #0d1117;">
  <div class="flex items-center gap-2 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
    <span class="text-sm font-medium tracking-wide uppercase" style="color: #8b949e;">GitHub Copilot</span>
  </div>
  <h1 class="!text-6xl !font-bold !leading-tight text-center max-w-4xl" style="color: #e6edf3;">
    AI-Powered Development<br>in 15 Minutes
  </h1>
  <p class="mt-6 text-xl text-center max-w-2xl" style="color: #8b949e;">
    What it is, where it lives, and why it matters for your team.
  </p>
  <div class="mt-8 flex items-center gap-4">
    <span class="px-5 py-2.5 rounded-md text-white font-medium" style="background: #238636;">
      Let's get started →
    </span>
    <span class="px-5 py-2.5 rounded-md font-medium" style="color: #e6edf3; border: 1px solid #30363d;">
      15 min · 10 slides
    </span>
  </div>
  <div class="mt-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#58a6ff" opacity="0.3"><path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"/><path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"/></svg>
  </div>
</div>

---

# What Is GitHub Copilot?

<div class="mt-6">
<div class="p-6 rounded-xl mb-6" style="background: #161b22; border: 1px solid #30363d;">
  <div class="flex items-center justify-center gap-8 text-lg">
    <div class="text-center">
      <div class="text-3xl mb-2">📄</div>
      <div class="font-bold" style="color: #58a6ff;">Your Context</div>
      <div class="text-xs" style="color: #8b949e;">Code, files, questions</div>
    </div>
    <div class="text-3xl" style="color: #58a6ff;">→</div>
    <div class="text-center">
      <div class="text-3xl mb-2">🧠</div>
      <div class="font-bold" style="color: #58a6ff;">AI Model</div>
      <div class="text-xs" style="color: #8b949e;">Hosted by GitHub</div>
    </div>
    <div class="text-3xl" style="color: #58a6ff;">→</div>
    <div class="text-center">
      <div class="text-3xl mb-2">✨</div>
      <div class="font-bold" style="color: #58a6ff;">Result</div>
      <div class="text-xs" style="color: #8b949e;">Code, answers, reviews</div>
    </div>
  </div>
</div>
<div class="grid grid-cols-2 gap-6">
<div>
  <div class="font-bold mb-3 text-lg" style="color: #58a6ff;">What It Does</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Writes code</b> — real-time suggestions as developers type
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Answers questions</b> — conversational AI that understands your codebase
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Reviews code</b> — automated PR analysis with actionable feedback
    </div>
  </div>
</div>
<div>
  <div class="font-bold mb-3 text-lg" style="color: #3fb950;">Business Impact</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>55% faster</b> task completion (GitHub research)
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>Reduces friction</b> on the 60-70% of work that's mechanical
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>Integrates</b> into existing tools — no workflow disruption
    </div>
  </div>
</div>
</div>
</div>

---

# Three Surfaces, One AI

<div class="mt-8">
<div class="grid grid-cols-3 gap-6">
<div class="p-5 rounded-xl text-center" style="background: #161b22; border: 2px solid #58a6ff;">
  <div class="text-4xl mb-3">💻</div>
  <div class="text-lg font-bold" style="color: #58a6ff;">VS Code</div>
  <div class="text-xs mt-2" style="color: #8b949e;">Your editor — where code gets written</div>
  <div class="mt-3 text-xs p-2 rounded" style="background: rgba(88, 166, 255, 0.1);">
    Completions · Chat · Agent Mode
  </div>
</div>
<div class="p-5 rounded-xl text-center" style="background: #161b22; border: 2px solid #a371f7;">
  <div class="text-4xl mb-3">⌨️</div>
  <div class="text-lg font-bold" style="color: #a371f7;">GitHub CLI</div>
  <div class="text-xs mt-2" style="color: #8b949e;">Your terminal — where commands run</div>
  <div class="mt-3 text-xs p-2 rounded" style="background: rgba(163, 113, 247, 0.1);">
    Interactive Chat · Automation · Scripts
  </div>
</div>
<div class="p-5 rounded-xl text-center" style="background: #161b22; border: 2px solid #3fb950;">
  <div class="text-4xl mb-3">🌐</div>
  <div class="text-lg font-bold" style="color: #3fb950;">GitHub.com</div>
  <div class="text-xs mt-2" style="color: #8b949e;">Your platform — where teams collaborate</div>
  <div class="mt-3 text-xs p-2 rounded" style="background: rgba(63, 185, 80, 0.1);">
    Code Review · PR Chat · Cloud Agent
  </div>
</div>
</div>
<div class="mt-8 p-4 rounded-lg border-l-4" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
  <div class="text-sm" style="color: #e6edf3;">🎯 <b>Key insight:</b> Same AI, different entry points. Copilot meets your team <b>where they already work</b> — no new tools to learn, no context switching.</div>
</div>
</div>

---
name: vs-code
---

# Surface 1: VS Code

<div class="mt-4 grid grid-cols-2 gap-6">
<div>
  <div class="font-bold mb-3 text-lg" style="color: #58a6ff;">⚡ Code Completions</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Ghost text</b> appears as you type — Tab to accept
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Single lines to entire functions</b> — infers intent from context
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Pattern continuation</b> — write one example, it follows for the rest
    </div>
  </div>
  <div class="mt-4 font-bold mb-3 text-lg" style="color: #58a6ff;">💬 Copilot Chat</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Ask questions</b> about your codebase in natural language
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Debug, refactor, explain</b> — conversational, not just autocomplete
    </div>
  </div>
</div>
<div>
  <div class="font-bold mb-3 text-lg" style="color: #a371f7;">🤖 Agent Mode</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Autonomous execution</b> — plans, implements, and iterates
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Multi-file edits</b> — creates, modifies files across the project
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Runs terminal commands</b> — build, test, lint automatically
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Self-corrects</b> — detects errors and fixes without intervention
    </div>
  </div>
  <div class="mt-4 p-3 rounded-lg text-xs" style="background: rgba(63, 185, 80, 0.1); border: 1px solid #3fb950;">
    💡 <b>For teams:</b> Agent mode turns a feature request into a working PR — developers describe <i>what</i>, Copilot handles <i>how</i>.
  </div>
</div>
</div>

---
name: github-cli
---

# Surface 2: GitHub CLI

<div class="mt-6 grid grid-cols-2 gap-6">
<div>
  <div class="font-bold mb-3 text-lg" style="color: #a371f7;">AI in Your Terminal</div>
  <div class="text-sm mb-4" style="color: #e6edf3;">Full conversational AI — right where commands run. Interactive sessions or single-shot automation.</div>
<div class="space-y-3">

```bash
# Start an interactive session
$ copilot
> "Why did the build fail?"
> "Fix the failing test in auth.spec.ts"
```

```bash
# Single-shot for scripts & CI
$ copilot -p "Create a migration to add
  a status column to the orders table" \
  --allow-tool 'shell(command)'
```

</div>
</div>
<div>
  <div class="font-bold mb-3 text-lg" style="color: #a371f7;">Why It Matters</div>
  <div class="space-y-3 text-sm">
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>No context switching</b> — stay in the terminal, ask naturally
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Reads your codebase</b> — understands project structure and files
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Runs commands</b> — executes shell commands with your approval
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Plan mode</b> — press Shift+Tab to plan before coding
    </div>
  </div>
  <div class="mt-4 p-3 rounded-lg text-xs" style="background: rgba(63, 185, 80, 0.1); border: 1px solid #3fb950;">
    💡 <b>For teams:</b> CLI sessions can be scripted into CI/CD pipelines — AI-assisted automation at scale.
  </div>
</div>
</div>

---
name: github-com
---

# Surface 3: GitHub.com

<div class="mt-6 grid grid-cols-2 gap-6">
<div>
  <div class="font-bold mb-3 text-lg" style="color: #3fb950;">📋 Copilot Code Review</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">🐛 <b>Logic errors</b> & edge cases</div>
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">🔒 <b>Security vulnerabilities</b> (SQL injection, XSS)</div>
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">⚡ <b>Performance issues</b> (N+1 queries, memory leaks)</div>
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">📏 <b>Inline suggestions</b> with fix-it code diffs</div>
  </div>
  <div class="mt-3 p-3 rounded-lg text-xs" style="background: rgba(210, 153, 34, 0.1); border: 1px solid #d29922;">
    💡 Copilot handles <b>mechanical checks</b> so human reviewers focus on <b>architecture and design</b>.
  </div>
</div>
<div>
  <div class="font-bold mb-3 text-lg" style="color: #3fb950;">🤖 Copilot Cloud Agent</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>Assign an issue</b> to Copilot on GitHub.com
    </div>
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>Copilot creates a PR</b> — branch, code, tests, docs
    </div>
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>Team reviews normally</b> — human approval still required
    </div>
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>Best for:</b> well-defined tasks, bug fixes, feature additions
    </div>
  </div>
  <div class="mt-3 font-bold mb-2 text-lg" style="color: #3fb950;">💬 Copilot Chat on PRs</div>
  <div class="text-sm p-3 rounded" style="background: rgba(63, 185, 80, 0.1);">
    Ask Copilot questions directly in PR comments — summarize changes, explain code, suggest improvements.
  </div>
</div>
</div>

---

# How It All Fits Together

<div class="mt-6">
<div class="p-5 rounded-xl mb-6" style="background: #161b22; border: 1px solid #30363d;">
<div class="grid grid-cols-3 gap-4 text-sm">
<div class="text-center p-4 rounded-lg" style="background: rgba(88, 166, 255, 0.15);">
  <div class="text-3xl mb-2">💻</div>
  <div class="font-bold" style="color: #58a6ff;">VS Code</div>
  <div class="text-xs mt-2" style="color: #8b949e;">Writing & building code</div>
  <div class="text-xs mt-1" style="color: #58a6ff;">Completions · Chat · Agent</div>
</div>
<div class="text-center p-4 rounded-lg" style="background: rgba(163, 113, 247, 0.15);">
  <div class="text-3xl mb-2">⌨️</div>
  <div class="font-bold" style="color: #a371f7;">GitHub CLI</div>
  <div class="text-xs mt-2" style="color: #8b949e;">Terminal & automation</div>
  <div class="text-xs mt-1" style="color: #a371f7;">Interactive · Scripted · CI/CD</div>
</div>
<div class="text-center p-4 rounded-lg" style="background: rgba(63, 185, 80, 0.15);">
  <div class="text-3xl mb-2">🌐</div>
  <div class="font-bold" style="color: #3fb950;">GitHub.com</div>
  <div class="text-xs mt-2" style="color: #8b949e;">Review & collaboration</div>
  <div class="text-xs mt-1" style="color: #3fb950;">Code Review · Cloud Agent</div>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="p-4 rounded-lg border-l-4" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
  <div class="font-bold text-sm" style="color: #3fb950;">✅ The Developer Workflow</div>
  <div class="text-xs mt-1" style="color: #e6edf3;">Write code in <b>VS Code</b> with Copilot → commit & push → Copilot <b>reviews the PR</b> on GitHub.com → fix issues via <b>CLI</b> or editor → merge with confidence.</div>
</div>
<div class="p-4 rounded-lg border-l-4" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
  <div class="font-bold text-sm" style="color: #58a6ff;">🎯 The Key Principle</div>
  <div class="text-xs mt-1" style="color: #e6edf3;"><b>More context = better results.</b> The same AI powers every surface. What changes is the context each one provides.</div>
</div>
</div>
</div>

---

# Customization: Teaching Copilot Your Patterns

<div class="mt-6">
<div class="text-sm mb-5" style="color: #e6edf3;">Out of the box, Copilot knows general programming. With customization, it knows <b style="color: #58a6ff;">your team's</b> programming.</div>
<div class="grid grid-cols-2 gap-4 text-sm">
<div class="space-y-3">
  <div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22; border: 1px solid #30363d;">
    <span class="text-2xl">📋</span>
    <div>
      <div class="font-bold" style="color: #58a6ff;">Instructions</div>
      <div class="text-xs" style="color: #8b949e;">Team conventions applied to every response</div>
    </div>
  </div>
  <div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22; border: 1px solid #30363d;">
    <span class="text-2xl">📝</span>
    <div>
      <div class="font-bold" style="color: #58a6ff;">Prompt Templates</div>
      <div class="text-xs" style="color: #8b949e;">Reusable, shareable prompt files</div>
    </div>
  </div>
  <div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22; border: 1px solid #30363d;">
    <span class="text-2xl">🤖</span>
    <div>
      <div class="font-bold" style="color: #a371f7;">Custom Agents</div>
      <div class="text-xs" style="color: #8b949e;">Role-based AI specialists for your workflows</div>
    </div>
  </div>
  <div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22; border: 1px solid #30363d;">
    <span class="text-2xl">🔌</span>
    <div>
      <div class="font-bold" style="color: #3fb950;">MCP Servers</div>
      <div class="text-xs" style="color: #8b949e;">Connect to databases, APIs, external tools</div>
    </div>
  </div>
</div>
<div>
  <div class="p-4 rounded-xl mb-4" style="background: rgba(248, 81, 73, 0.1); border: 1px solid #f85149;">
    <div class="text-sm font-bold mb-1" style="color: #f85149;">Without Customization</div>
    <div class="text-xs" style="color: #8b949e;">"Create a user endpoint" → Generic REST boilerplate that doesn't match your patterns</div>
  </div>
  <div class="p-4 rounded-xl mb-4" style="background: rgba(63, 185, 80, 0.1); border: 1px solid #3fb950;">
    <div class="text-sm font-bold mb-1" style="color: #3fb950;">With Customization</div>
    <div class="text-xs" style="color: #8b949e;">"Create a user endpoint" → Follows your error handling, auth patterns, naming conventions, and queries your DB schema</div>
  </div>
  <div class="p-3 rounded-lg border-l-4 text-xs" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
    💡 <b>5 minutes to set up</b> — one markdown file transforms every Copilot interaction from generic to team-specific.
  </div>
</div>
</div>
</div>

---

# Getting Started

<div class="mt-6">
<div class="grid grid-cols-3 gap-5 text-sm">
<div class="p-5 rounded-xl" style="background: #161b22; border: 2px solid #3fb950;">
  <div class="font-bold mb-3 text-lg" style="color: #3fb950;">Today</div>
  <div class="space-y-3">
    <div class="flex items-start gap-2">
      <span style="color: #3fb950;">→</span>
      <span>Enable Copilot in your GitHub org settings</span>
    </div>
    <div class="flex items-start gap-2">
      <span style="color: #3fb950;">→</span>
      <span>Install the Copilot extension in VS Code</span>
    </div>
    <div class="flex items-start gap-2">
      <span style="color: #3fb950;">→</span>
      <span>Try Chat: <code class="text-xs">@workspace explain this project</code></span>
    </div>
  </div>
</div>
<div class="p-5 rounded-xl" style="background: #161b22; border: 2px solid #58a6ff;">
  <div class="font-bold mb-3 text-lg" style="color: #58a6ff;">This Week</div>
  <div class="space-y-3">
    <div class="flex items-start gap-2">
      <span style="color: #58a6ff;">→</span>
      <span>Create <code class="text-xs">copilot-instructions.md</code> with team conventions</span>
    </div>
    <div class="flex items-start gap-2">
      <span style="color: #58a6ff;">→</span>
      <span>Request Copilot Code Review on a PR</span>
    </div>
    <div class="flex items-start gap-2">
      <span style="color: #58a6ff;">→</span>
      <span>Install the GitHub CLI (<code class="text-xs">gh copilot</code>)</span>
    </div>
  </div>
</div>
<div class="p-5 rounded-xl" style="background: #161b22; border: 2px solid #a371f7;">
  <div class="font-bold mb-3 text-lg" style="color: #a371f7;">This Month</div>
  <div class="space-y-3">
    <div class="flex items-start gap-2">
      <span style="color: #a371f7;">→</span>
      <span>Build prompt templates for recurring tasks</span>
    </div>
    <div class="flex items-start gap-2">
      <span style="color: #a371f7;">→</span>
      <span>Try the Cloud Agent on a well-defined issue</span>
    </div>
    <div class="flex items-start gap-2">
      <span style="color: #a371f7;">→</span>
      <span>Measure team adoption & time savings</span>
    </div>
  </div>
</div>
</div>
<div class="mt-6 p-4 rounded-lg text-center" style="background: rgba(63, 185, 80, 0.1); border: 1px solid #3fb950;">
  <div class="text-sm" style="color: #e6edf3;">🎯 <b>Start where your team already works.</b> VS Code for developers. GitHub.com for reviewers. CLI for automation. Copilot is the same AI across all three.</div>
</div>
</div>

---
layout: center
---

<div class="flex flex-col items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#58a6ff" class="mb-4" opacity="0.6"><path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"/><path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"/></svg>
  <div class="flex items-center gap-3 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
    <h1 class="!text-4xl !font-bold !m-0" style="color: #e6edf3;">Thank You</h1>
  </div>
  <p class="text-lg" style="color: #8b949e;">
    Same AI. Three surfaces. Your team's context.
  </p>
  <div class="mt-6 w-32 h-px" style="background: #30363d;"></div>
  <div class="mt-6 grid grid-cols-3 gap-6 text-sm">
    <div class="text-center" style="color: #58a6ff;">💻 VS Code</div>
    <div class="text-center" style="color: #a371f7;">⌨️ GitHub CLI</div>
    <div class="text-center" style="color: #3fb950;">🌐 GitHub.com</div>
  </div>
  <p class="mt-6 text-sm" style="color: #484f58;">
    github.com/features/copilot
  </p>
</div>
