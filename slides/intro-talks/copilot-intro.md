---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot: Your AI Pair Programmer
  CopilotTraining Intro Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot - Your AI Pair Programmer
module: intro-talks/copilot-intro
mdc: true
status: active
updated: 2026-02-23
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="../tech-talks/sdp-logo.png" class="w-64" alt="" />
    </div>
    <img src="../tech-talks/sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
  </div>
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
    GitHub Copilot
  </h1>
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
      Your AI Pair Programmer
    </span>
  </div>
  <div class="mt-8 text-lg opacity-70 relative z-10">
    From "I've heard about it" to "I know exactly how to use it"
  </div>
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">Intro Talk · 45 minutes</span>
</div>

---

# The Question This Talk Answers

<div class="mt-10 flex items-center justify-center">
  <div class="p-8 bg-gradient-to-br from-blue-900/60 to-cyan-900/60 rounded-xl border-2 border-blue-400 max-w-3xl">
    <div class="text-4xl mb-4 text-center">💭</div>
    <div class="text-2xl font-bold text-blue-200 text-center leading-relaxed">
      "What can GitHub Copilot actually do for an experienced developer, and how do I get the most out of it from day one?"
    </div>
  </div>
</div>

<div class="mt-12 text-center">
  <div class="inline-block px-6 py-3 bg-cyan-600/80 rounded-lg">
    <div class="text-lg font-medium text-white">Target: Experienced Developers · 45 Minutes</div>
  </div>
</div>

---
layout: center
name: toc
---

# Table of Contents

<div class="mt-8 grid grid-cols-3 gap-5">

<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-cyan-900/20 rounded-xl border border-cyan-500/30 cursor-pointer hover:scale-105 transition-transform" @click="$nav.go($nav.currentPage+1)">
  <div class="text-2xl mb-2">🌍</div>
  <div class="font-bold text-cyan-300">The Landscape</div>
  <div class="text-sm text-gray-400 mt-1">Why now, how it works, the context model</div>
</div>

<div class="p-5 bg-gradient-to-br from-blue-900/40 to-blue-900/20 rounded-xl border border-blue-500/30 cursor-pointer hover:scale-105 transition-transform" @click="$nav.go($nav.currentPage+3)">
  <div class="text-2xl mb-2">⚡</div>
  <div class="font-bold text-blue-300">Code Completions</div>
  <div class="text-sm text-gray-400 mt-1">Inline suggestions, ghost text, NES</div>
</div>

<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-indigo-900/20 rounded-xl border border-indigo-500/30 cursor-pointer hover:scale-105 transition-transform" @click="$nav.go($nav.currentPage+6)">
  <div class="text-2xl mb-2">💬</div>
  <div class="font-bold text-indigo-300">Copilot Chat</div>
  <div class="text-sm text-gray-400 mt-1">Context variables, agents, workflows</div>
</div>

<div class="p-5 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-xl border border-purple-500/30 cursor-pointer hover:scale-105 transition-transform" @click="$nav.go($nav.currentPage+10)">
  <div class="text-2xl mb-2">🔧</div>
  <div class="font-bold text-purple-300">CLI & Code Review</div>
  <div class="text-sm text-gray-400 mt-1">Terminal AI, automated PR review</div>
</div>

<div class="p-5 bg-gradient-to-br from-emerald-900/40 to-emerald-900/20 rounded-xl border border-emerald-500/30 cursor-pointer hover:scale-105 transition-transform" @click="$nav.go($nav.currentPage+13)">
  <div class="text-2xl mb-2">🎨</div>
  <div class="font-bold text-emerald-300">Customization</div>
  <div class="text-sm text-gray-400 mt-1">Instructions, prompts, agents, MCP</div>
</div>

<div class="p-5 bg-gradient-to-br from-amber-900/40 to-amber-900/20 rounded-xl border border-amber-500/30 cursor-pointer hover:scale-105 transition-transform" @click="$nav.go($nav.currentPage+16)">
  <div class="text-2xl mb-2">🚀</div>
  <div class="font-bold text-amber-300">Getting Started</div>
  <div class="text-sm text-gray-400 mt-1">Immediate actions, resources, next steps</div>
</div>

</div>

---
name: the-landscape
---

# The Landscape: AI-Assisted Development

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
  <div class="font-bold text-cyan-300 mb-4 text-xl">Why Now?</div>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-cyan-900/20 rounded-lg border-l-3 border-cyan-500">
      <b>60-70% of dev work is mechanical</b> — boilerplate, API lookups, test scaffolding, docs
    </div>
    <div class="p-3 bg-blue-900/20 rounded-lg border-l-3 border-blue-500">
      <b>AI removes friction</b> — not replacing developers, amplifying expertise
    </div>
    <div class="p-3 bg-indigo-900/20 rounded-lg border-l-3 border-indigo-500">
      <b>Integrated, not separate</b> — lives in your editor, terminal, and PR workflow
    </div>
  </div>
</div>

<div>
  <div class="font-bold text-blue-300 mb-4 text-xl">The Full Surface Map</div>
  <div class="space-y-2 text-sm">
    <div class="flex items-center gap-3 p-2 bg-gray-800/50 rounded">
      <span class="text-lg">⚡</span>
      <div><b class="text-cyan-300">Completions</b> — Inline suggestions as you type</div>
    </div>
    <div class="flex items-center gap-3 p-2 bg-gray-800/50 rounded">
      <span class="text-lg">💬</span>
      <div><b class="text-blue-300">Chat</b> — Conversational AI with codebase context</div>
    </div>
    <div class="flex items-center gap-3 p-2 bg-gray-800/50 rounded">
      <span class="text-lg">🔧</span>
      <div><b class="text-indigo-300">CLI</b> — Terminal command assistance</div>
    </div>
    <div class="flex items-center gap-3 p-2 bg-gray-800/50 rounded">
      <span class="text-lg">📋</span>
      <div><b class="text-purple-300">Code Review</b> — Automated PR analysis</div>
    </div>
    <div class="flex items-center gap-3 p-2 bg-gray-800/50 rounded">
      <span class="text-lg">🎨</span>
      <div><b class="text-emerald-300">Customization</b> — Team patterns & conventions</div>
    </div>
  </div>
</div>

</div>

---

# How Copilot Works

<div class="mt-6">

<div class="p-6 bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30 mb-6">
  <div class="flex items-center justify-center gap-8 text-lg">
    <div class="text-center">
      <div class="text-3xl mb-2">📄</div>
      <div class="font-bold text-cyan-300">Your Context</div>
      <div class="text-xs text-gray-400">Files, code, questions</div>
    </div>
    <div class="text-3xl text-blue-400">→</div>
    <div class="text-center">
      <div class="text-3xl mb-2">🧠</div>
      <div class="font-bold text-blue-300">Language Model</div>
      <div class="text-xs text-gray-400">Hosted by GitHub</div>
    </div>
    <div class="text-3xl text-blue-400">→</div>
    <div class="text-center">
      <div class="text-3xl mb-2">✨</div>
      <div class="font-bold text-indigo-300">Suggestion</div>
      <div class="text-xs text-gray-400">Code, answers, reviews</div>
    </div>
  </div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-400 mb-4">
  <div class="font-bold text-green-300">🎯 The Key Insight</div>
  <div class="text-sm text-gray-200 mt-1">The model is the same across all surfaces. What changes is the <b>context</b> each surface provides. <b>More context = better suggestions.</b></div>
</div>

<div class="grid grid-cols-4 gap-3 text-xs">
  <div class="p-2 bg-gray-800/50 rounded text-center">
    <div class="font-bold text-cyan-300">Completions</div>
    <div class="text-gray-400">Current file + open tabs</div>
  </div>
  <div class="p-2 bg-gray-800/50 rounded text-center">
    <div class="font-bold text-blue-300">Chat</div>
    <div class="text-gray-400">What you reference</div>
  </div>
  <div class="p-2 bg-gray-800/50 rounded text-center">
    <div class="font-bold text-indigo-300">CLI</div>
    <div class="text-gray-400">Command + history</div>
  </div>
  <div class="p-2 bg-gray-800/50 rounded text-center">
    <div class="font-bold text-purple-300">Code Review</div>
    <div class="text-gray-400">PR diff + context</div>
  </div>
</div>

</div>

---

# 🧠 The Shift

<div class="mt-16 flex items-center justify-center">
  <div class="p-10 bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-2xl border-2 border-purple-400 max-w-3xl">
    <div class="text-center">
      <div class="text-lg text-gray-400 mb-4">The Mental Model</div>
      <div class="grid grid-cols-3 gap-4 items-center">
        <div class="text-right">
          <div class="text-xl font-bold text-red-400">❌ "AI writes code for me"</div>
        </div>
        <div class="text-4xl text-center text-blue-400">→</div>
        <div class="text-left">
          <div class="text-xl font-bold text-green-400">✅ "AI amplifies my expertise when I give it the right context"</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-10 text-center text-sm text-gray-400">
  This shift applies to every surface you'll see today
</div>

---
name: code-completions
---

# Code Completions: Your Typing Accelerator

<div class="mt-4 grid grid-cols-2 gap-6">

<div>
  <div class="font-bold text-cyan-300 mb-3 text-lg">How It Works</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 bg-cyan-900/20 rounded-lg border-l-3 border-cyan-500">
      <b>Ghost text appears</b> as you type — press <code class="bg-gray-700 px-1 rounded">Tab</code> to accept, <code class="bg-gray-700 px-1 rounded">Esc</code> to dismiss
    </div>
    <div class="p-3 bg-blue-900/20 rounded-lg border-l-3 border-blue-500">
      <b>Single lines to entire functions</b> — Copilot infers intent from your code and comments
    </div>
    <div class="p-3 bg-indigo-900/20 rounded-lg border-l-3 border-indigo-500">
      <b>Next Edit Suggestions (NES)</b> — predicts your next edit location after accepting
    </div>
  </div>
</div>

<div>
  <div class="font-bold text-blue-300 mb-3 text-lg">What Copilot Sees</div>
  <div class="space-y-2 text-sm">
    <div class="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
      <span class="text-cyan-400">✦</span> Current file content (before & after cursor)
    </div>
    <div class="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
      <span class="text-blue-400">✦</span> Open editor tabs (neighboring files)
    </div>
    <div class="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
      <span class="text-indigo-400">✦</span> Language & framework from file extension
    </div>
    <div class="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
      <span class="text-purple-400">✦</span> Comments & function signatures as intent signals
    </div>
  </div>
</div>

</div>

---

# Getting Better Completions

<div class="mt-4 space-y-4">

<div class="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
  <div class="font-bold text-green-300 mb-2">✅ Write intent before implementation</div>

```python
# Calculate the monthly subscription cost including tax
# and any active discounts. Return final amount rounded to 2 decimals.
def calculate_monthly_cost(subscription, tax_rate, discounts):
```

  <div class="text-xs text-gray-400 mt-2">Copilot now knows the full intent — not just "write a function"</div>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
  <div class="font-bold text-red-300 mb-2">❌ Vague naming</div>

```typescript
function process(data) { }
```

</div>

<div class="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
  <div class="font-bold text-green-300 mb-2">✅ Specific naming</div>

```typescript
function validateUserRegistration(
  formData: RegistrationForm
) { }
```

</div>

</div>

<div class="p-3 bg-blue-900/30 rounded-lg border-l-4 border-blue-400 text-sm">
  💡 <b>Pro tip:</b> Open relevant files in editor tabs — Copilot uses them as context for completions
</div>

</div>

---

# Completions: Patterns That Work

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
  <div class="font-bold text-green-300 mb-3">🎯 High-Value Patterns</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 bg-green-900/20 rounded border-l-3 border-green-500">
      <b>Boilerplate generation</b> — CRUD endpoints, model definitions, config files
    </div>
    <div class="p-3 bg-green-900/20 rounded border-l-3 border-green-500">
      <b>Pattern continuation</b> — Write one example, Copilot follows for the rest
    </div>
    <div class="p-3 bg-green-900/20 rounded border-l-3 border-green-500">
      <b>Test scaffolding</b> — Describe the test in a comment, get the implementation
    </div>
    <div class="p-3 bg-green-900/20 rounded border-l-3 border-green-500">
      <b>Documentation</b> — JSDoc, docstrings, README sections from code context
    </div>
  </div>
</div>

<div>
  <div class="font-bold text-amber-300 mb-3">⚠️ Know the Limits</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 bg-amber-900/20 rounded border-l-3 border-amber-500">
      <b>Always review</b> — suggestions may look right but have subtle bugs
    </div>
    <div class="p-3 bg-amber-900/20 rounded border-l-3 border-amber-500">
      <b>Novel algorithms</b> — Copilot is better at applying known patterns than inventing new ones
    </div>
    <div class="p-3 bg-amber-900/20 rounded border-l-3 border-amber-500">
      <b>Business logic</b> — complex domain rules need explicit specification
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-3 bg-purple-900/30 rounded-lg text-center text-sm">
  Completions keep you in <b class="text-purple-300">flow state</b> — for deeper tasks, switch to <b class="text-blue-300">Chat</b>
</div>

---
name: copilot-chat
---

# Copilot Chat: Your Codebase Expert

<div class="mt-6">

<div class="grid grid-cols-3 gap-4 mb-6">

<div class="p-4 bg-gradient-to-b from-cyan-900/40 to-cyan-900/20 rounded-xl border border-cyan-500/30 text-center">
  <div class="text-3xl mb-2">📋</div>
  <div class="font-bold text-cyan-300">Chat Panel</div>
  <div class="text-xs text-gray-400 mt-1">Side panel for extended conversations and complex questions</div>
</div>

<div class="p-4 bg-gradient-to-b from-blue-900/40 to-blue-900/20 rounded-xl border border-blue-500/30 text-center">
  <div class="text-3xl mb-2">✏️</div>
  <div class="font-bold text-blue-300">Inline Chat</div>
  <div class="text-xs text-gray-400 mt-1"><code>Ctrl+I</code> — Quick edits right in your code</div>
</div>

<div class="p-4 bg-gradient-to-b from-indigo-900/40 to-indigo-900/20 rounded-xl border border-indigo-500/30 text-center">
  <div class="text-3xl mb-2">⚡</div>
  <div class="font-bold text-indigo-300">Quick Chat</div>
  <div class="text-xs text-gray-400 mt-1"><code>Ctrl+Shift+I</code> — Fast questions, no context switch</div>
</div>

</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-400">
  <div class="font-bold text-green-300">🎯 Key Difference from Completions</div>
  <div class="text-sm text-gray-200 mt-1">Completions are <b>reactive</b> (suggestions as you type). Chat is <b>proactive</b> (you ask questions, explore, and direct). Use completions for flow, Chat for exploration.</div>
</div>

</div>

---

# Chat Context Variables: The Power Feature

<div class="mt-4">

<div class="text-sm mb-4 text-gray-300">Context variables tell Chat <b>exactly what to look at</b> — the difference between generic and codebase-specific answers.</div>

<div class="grid grid-cols-2 gap-3 text-sm">

<div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300 mb-1"><code>#file</code> — Reference a specific file</div>
  <div class="text-xs text-gray-400">"Explain #file:auth.ts"</div>
</div>

<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300 mb-1"><code>@workspace</code> — Search entire workspace</div>
  <div class="text-xs text-gray-400">"@workspace how is auth implemented?"</div>
</div>

<div class="p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/20">
  <div class="font-bold text-indigo-300 mb-1"><code>#codebase</code> — Semantic search</div>
  <div class="text-xs text-gray-400">"#codebase find error handling patterns"</div>
</div>

<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/20">
  <div class="font-bold text-purple-300 mb-1"><code>#selection</code> — Selected code</div>
  <div class="text-xs text-gray-400">Select code → "Refactor #selection"</div>
</div>

<div class="p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/20">
  <div class="font-bold text-emerald-300 mb-1"><code>@terminal</code> — Terminal context</div>
  <div class="text-xs text-gray-400">"@terminal why did my last command fail?"</div>
</div>

<div class="p-3 bg-amber-900/30 rounded-lg border border-amber-500/20">
  <div class="font-bold text-amber-300 mb-1"><code>@vscode</code> — Editor features</div>
  <div class="text-xs text-gray-400">"@vscode how do I enable word wrap?"</div>
</div>

</div>

<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border-l-4 border-blue-400 text-sm">
  💡 <b>The more specific your context, the better the response.</b> "@workspace how does auth work" is good. "Explain the JWT validation in #file:middleware/auth.ts" is much better.
</div>

</div>

---

# Chat in Practice

<div class="mt-4 space-y-4">

<div class="p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300 mb-2">🔍 Debugging with Context</div>

```
I'm getting a NullReferenceException in #file:OrderService.cs at line 47.
@workspace show me how other services handle null order lookups.
```

</div>

<div class="p-4 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/20">
  <div class="font-bold text-blue-300 mb-2">🏗️ Architecture Exploration</div>

```
@workspace explain the authentication flow from login to token refresh.
Include which files are involved.
```

</div>

<div class="p-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/20">
  <div class="font-bold text-indigo-300 mb-2">⚙️ Code Generation with Constraints</div>

```
Generate a REST endpoint for user profiles following the patterns
in #file:UserController.cs. Use the same error handling approach.
```

</div>

</div>

---

# Chat: Agent Mode

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
  <div class="font-bold text-purple-300 mb-3 text-lg">What Is Agent Mode?</div>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-purple-900/20 rounded-lg border-l-3 border-purple-500">
      <b>Autonomous multi-step execution</b> — Copilot plans, implements, and iterates
    </div>
    <div class="p-3 bg-purple-900/20 rounded-lg border-l-3 border-purple-500">
      <b>Multi-file edits</b> — creates, modifies, and deletes files across your project
    </div>
    <div class="p-3 bg-purple-900/20 rounded-lg border-l-3 border-purple-500">
      <b>Terminal commands</b> — runs build, test, and lint automatically
    </div>
    <div class="p-3 bg-purple-900/20 rounded-lg border-l-3 border-purple-500">
      <b>Self-correction</b> — detects errors and fixes them without manual intervention
    </div>
  </div>
</div>

<div>
  <div class="font-bold text-cyan-300 mb-3 text-lg">When to Use It</div>
  <div class="space-y-2 text-sm">
    <div class="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
      <span class="text-green-400">✅</span> Multi-file refactoring
    </div>
    <div class="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
      <span class="text-green-400">✅</span> New feature scaffolding
    </div>
    <div class="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
      <span class="text-green-400">✅</span> Test generation across modules
    </div>
    <div class="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
      <span class="text-green-400">✅</span> Bug fixing with iteration
    </div>
    <div class="flex items-center gap-2 p-2 bg-gray-800/50 rounded mt-4">
      <span class="text-amber-400">⚠️</span> Always review changes before accepting
    </div>
  </div>
</div>

</div>

<div class="mt-4 p-3 bg-blue-900/30 rounded-lg text-sm text-center">
  Agent mode = <b class="text-purple-300">Chat</b> + <b class="text-cyan-300">code editing</b> + <b class="text-green-300">terminal</b> in one autonomous loop
</div>

---
name: cli-code-review
---

# Copilot in the CLI

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
  <div class="font-bold text-cyan-300 mb-3 text-lg">Terminal AI Assistance</div>
  <div class="text-sm text-gray-300 mb-4">Interactive conversations and programmatic execution — right in your terminal.</div>

<div class="space-y-3">

```bash
# Interactive mode — start a session
$ copilot
> "Explain what this command does:
   find . -name '*.log' -mtime +30 -delete"
```

```bash
# Ask for help with a task
> "Compress all PNGs in this dir recursively"
```

```bash
# Programmatic mode — single command
copilot -p "Why did the build fail?" \
  --allow-tool 'shell(command)'
```

</div>

</div>

<div>
  <div class="font-bold text-blue-300 mb-3 text-lg">Why It Matters</div>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-cyan-900/20 rounded-lg border-l-3 border-cyan-500">
      <b>Plan Mode</b> — press Shift+Tab to plan before coding
    </div>
    <div class="p-3 bg-blue-900/20 rounded-lg border-l-3 border-blue-500">
      <b>No context switching</b> — stay in your terminal, ask naturally
    </div>
    <div class="p-3 bg-indigo-900/20 rounded-lg border-l-3 border-indigo-500">
      <b>Two modes</b> — interactive for exploration, <code>-p</code> for scripts/CI
    </div>
  </div>

  <div class="mt-4 p-3 bg-gray-800/50 rounded text-xs">
    <div class="font-bold text-gray-300 mb-1">Install:</div>
    <code>gh copilot</code> <span class="text-gray-500">(auto-installs)</span> or <code>npm i -g @github/copilot</code>
  </div>
</div>

</div>

---

# Copilot Code Review

<div class="mt-6">

<div class="p-5 bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-xl border border-purple-500/30 mb-6">
  <div class="font-bold text-purple-300 text-lg mb-2">Automated PR Analysis</div>
  <div class="text-sm text-gray-200">Copilot reviews your pull requests and provides specific, actionable feedback — inline comments just like a human reviewer.</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
  <div class="font-bold text-green-300 mb-3">What It Catches</div>
  <div class="space-y-2">
    <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">🐛 Logic errors & edge cases</div>
    <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">🔒 Security vulnerabilities (SQL injection, XSS)</div>
    <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">⚡ Performance issues (N+1 queries)</div>
    <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">❌ Missing error handling</div>
    <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500">📏 Codebase inconsistencies</div>
  </div>
</div>

<div>
  <div class="font-bold text-blue-300 mb-3">How to Use</div>
  <div class="space-y-2">
    <div class="p-2 bg-blue-900/20 rounded border-l-3 border-blue-500">Enable in repository settings</div>
    <div class="p-2 bg-blue-900/20 rounded border-l-3 border-blue-500">Or request review from <code>@copilot</code></div>
    <div class="p-2 bg-blue-900/20 rounded border-l-3 border-blue-500">Comments appear inline on the diff</div>
    <div class="p-2 bg-blue-900/20 rounded border-l-3 border-blue-500">Each comment includes a suggested fix</div>
  </div>

  <div class="mt-4 p-3 bg-amber-900/20 rounded-lg border-l-3 border-amber-500 text-xs">
    💡 Code Review handles <b>mechanical checks</b> so human reviewers focus on <b>architecture and design</b>
  </div>
</div>

</div>

</div>

---
name: customization
---

# Customization: Teaching Copilot Your Patterns

<div class="mt-4">

<div class="text-sm text-gray-300 mb-4">Out of the box, Copilot knows general programming. With customization, it knows <b class="text-cyan-300">your team's</b> programming.</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-gradient-to-r from-cyan-900/30 to-cyan-900/10 rounded-lg border border-cyan-500/20 flex items-center gap-3">
  <span class="text-2xl">📋</span>
  <div>
    <div class="font-bold text-cyan-300">Instructions</div>
    <div class="text-xs text-gray-400"><code>.github/copilot-instructions.md</code> — Team conventions applied to every response</div>
  </div>
</div>

<div class="p-3 bg-gradient-to-r from-blue-900/30 to-blue-900/10 rounded-lg border border-blue-500/20 flex items-center gap-3">
  <span class="text-2xl">📝</span>
  <div>
    <div class="font-bold text-blue-300">Custom Prompts</div>
    <div class="text-xs text-gray-400"><code>.github/prompts/*.prompt.md</code> — Reusable, shareable prompt templates</div>
  </div>
</div>

<div class="p-3 bg-gradient-to-r from-indigo-900/30 to-indigo-900/10 rounded-lg border border-indigo-500/20 flex items-center gap-3">
  <span class="text-2xl">🧠</span>
  <div>
    <div class="font-bold text-indigo-300">Agent Skills</div>
    <div class="text-xs text-gray-400"><code>.github/skills/*/SKILL.md</code> — Domain knowledge loaded when relevant</div>
  </div>
</div>

<div class="p-3 bg-gradient-to-r from-purple-900/30 to-purple-900/10 rounded-lg border border-purple-500/20 flex items-center gap-3">
  <span class="text-2xl">🔌</span>
  <div>
    <div class="font-bold text-purple-300">MCP Servers</div>
    <div class="text-xs text-gray-400"><code>.vscode/mcp.json</code> — Connect to databases, APIs, external tools</div>
  </div>
</div>

<div class="p-3 bg-gradient-to-r from-emerald-900/30 to-emerald-900/10 rounded-lg border border-emerald-500/20 flex items-center gap-3">
  <span class="text-2xl">🤖</span>
  <div>
    <div class="font-bold text-emerald-300">Custom Agents</div>
    <div class="text-xs text-gray-400"><code>.github/agents/*.agent.md</code> — Role-based AI specialists</div>
  </div>
</div>

</div>

</div>

---

# How Customization Compounds

<div class="mt-6">

<div class="grid grid-cols-3 gap-4 mb-6">

<div class="p-4 bg-red-900/20 rounded-xl border border-red-500/20 text-center">
  <div class="text-sm font-bold text-red-300 mb-2">No Customization</div>
  <div class="text-xs text-gray-400">"Create a user endpoint"</div>
  <div class="mt-2 text-xs text-gray-500">→ Generic REST boilerplate</div>
</div>

<div class="p-4 bg-amber-900/20 rounded-xl border border-amber-500/20 text-center">
  <div class="text-sm font-bold text-amber-300 mb-2">With Instructions</div>
  <div class="text-xs text-gray-400">"Create a user endpoint"</div>
  <div class="mt-2 text-xs text-gray-500">→ Follows your error handling, naming, auth patterns</div>
</div>

<div class="p-4 bg-green-900/20 rounded-xl border border-green-500/20 text-center">
  <div class="text-sm font-bold text-green-300 mb-2">Full Stack</div>
  <div class="text-xs text-gray-400">"Create a user endpoint"</div>
  <div class="mt-2 text-xs text-gray-500">→ Follows patterns + uses prompt template + queries DB schema</div>
</div>

</div>

<div class="p-4 bg-cyan-900/30 rounded-lg border border-cyan-500/20">
  <div class="font-bold text-cyan-300 mb-2">🚀 Quick Start: Create copilot-instructions.md</div>

```markdown
# Project Instructions
- Use TypeScript with strict mode
- Follow REST conventions: plural nouns, proper HTTP methods
- All endpoints require authentication via JWT
- Use Zod for request validation
- Return consistent error format: { error: string, code: number }
```

  <div class="text-xs text-gray-400 mt-2">This single file transforms every Copilot interaction from generic to team-specific — 5 minutes to create.</div>
</div>

</div>

---

# Which Surface When?

<div class="mt-6">

<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30 mb-6">

<div class="grid grid-cols-4 gap-3 text-sm">

<div class="text-center p-3 bg-cyan-900/30 rounded-lg">
  <div class="text-2xl mb-1">⚡</div>
  <div class="font-bold text-cyan-300 text-xs">Completions</div>
  <div class="text-xs text-gray-400 mt-1">Writing code in flow</div>
  <div class="text-xs text-cyan-400 mt-2">Auto context</div>
  <div class="text-xs text-gray-500">Instant</div>
</div>

<div class="text-center p-3 bg-blue-900/30 rounded-lg">
  <div class="text-2xl mb-1">💬</div>
  <div class="font-bold text-blue-300 text-xs">Chat</div>
  <div class="text-xs text-gray-400 mt-1">Exploration & questions</div>
  <div class="text-xs text-blue-400 mt-2">Explicit context</div>
  <div class="text-xs text-gray-500">Seconds</div>
</div>

<div class="text-center p-3 bg-indigo-900/30 rounded-lg">
  <div class="text-2xl mb-1">🔧</div>
  <div class="font-bold text-indigo-300 text-xs">CLI</div>
  <div class="text-xs text-gray-400 mt-1">Terminal tasks</div>
  <div class="text-xs text-indigo-400 mt-2">Command context</div>
  <div class="text-xs text-gray-500">Seconds</div>
</div>

<div class="text-center p-3 bg-purple-900/30 rounded-lg">
  <div class="text-2xl mb-1">📋</div>
  <div class="font-bold text-purple-300 text-xs">Code Review</div>
  <div class="text-xs text-gray-400 mt-1">PR quality</div>
  <div class="text-xs text-purple-400 mt-2">PR diff</div>
  <div class="text-xs text-gray-500">Minutes</div>
</div>

</div>

</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-400 text-sm">
  <b class="text-green-300">The golden rule:</b> Use completions to stay in flow. Switch to Chat when you need to think. Use CLI in the terminal. Let Code Review catch what you missed.
</div>

</div>

---

# 🧠 Mental Model Shift

<div class="mt-4">

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold text-green-400 mb-3">✅ Move Toward</div>
<div class="space-y-2">
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500"><b>Context-First Thinking:</b> Open relevant files, use #file refs → architecture-aware suggestions</div>
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500"><b>Conversational Iteration:</b> Use Chat for dialogue → complex problems solved through refinement</div>
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500"><b>Multi-Surface Workflow:</b> Each surface for its strength → completions for flow, Chat for exploration</div>
  <div class="p-2 bg-green-900/20 rounded border-l-3 border-green-500"><b>Teach Your Patterns:</b> copilot-instructions.md → every team member gets consistent suggestions</div>
</div>
</div>

<div>
<div class="font-bold text-red-400 mb-3">🛑 Move Away From / Against</div>
<div class="space-y-2">
  <div class="p-2 bg-amber-900/20 rounded border-l-3 border-amber-500"><b>Tab-Only Usage:</b> Ignoring Chat, CLI, Review → missing 80% of Copilot's value</div>
  <div class="p-2 bg-amber-900/20 rounded border-l-3 border-amber-500"><b>Zero-Context Prompting:</b> No file refs → generic responses</div>
  <div class="p-2 bg-amber-900/20 rounded border-l-3 border-amber-500"><b>Manual Everything:</b> Hand-writing boilerplate, tests, docs → time on tasks AI handles well</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500"><b>Blind Acceptance:</b> No review of suggestions → AI bugs are still bugs</div>
  <div class="p-2 bg-red-900/20 rounded border-l-3 border-red-500"><b>Replacing Understanding:</b> Code you can't explain → unmaintainable debt</div>
</div>
</div>

</div>

</div>

---
name: getting-started
---

# 🚀 Getting Started Today

<div class="mt-4">

<div class="grid grid-cols-3 gap-4 text-sm">

<div class="p-4 bg-gradient-to-b from-green-900/40 to-green-900/20 rounded-xl border border-green-500/30">
  <div class="font-bold text-green-300 mb-3">⏱️ 15 Minutes</div>
  <div class="space-y-2">
    <div class="flex items-start gap-2">
      <span class="text-green-400 mt-0.5">□</span>
      <span>Try completions with awareness — write a comment, then let Copilot implement</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-green-400 mt-0.5">□</span>
      <span>Open Chat panel: <code>@workspace explain this project's architecture</code></span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-green-400 mt-0.5">□</span>
      <span>Try inline Chat (<code>Ctrl+I</code>) on a function: "Add error handling"</span>
    </div>
  </div>
</div>

<div class="p-4 bg-gradient-to-b from-blue-900/40 to-blue-900/20 rounded-xl border border-blue-500/30">
  <div class="font-bold text-blue-300 mb-3">⏱️ 1 Hour</div>
  <div class="space-y-2">
    <div class="flex items-start gap-2">
      <span class="text-blue-400 mt-0.5">□</span>
      <span>Create <code>.github/copilot-instructions.md</code> with 5-10 team conventions</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-blue-400 mt-0.5">□</span>
      <span>Install CLI: <code>gh copilot</code> (auto-installs) or <code>npm i -g @github/copilot</code></span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-blue-400 mt-0.5">□</span>
      <span>Request Copilot Code Review on your next PR</span>
    </div>
  </div>
</div>

<div class="p-4 bg-gradient-to-b from-purple-900/40 to-purple-900/20 rounded-xl border border-purple-500/30">
  <div class="font-bold text-purple-300 mb-3">⏱️ 2-4 Hours</div>
  <div class="space-y-2">
    <div class="flex items-start gap-2">
      <span class="text-purple-400 mt-0.5">□</span>
      <span>Create 2-3 <code>.prompt.md</code> files for common tasks</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-purple-400 mt-0.5">□</span>
      <span>Explore Agent mode for a multi-file change</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-purple-400 mt-0.5">□</span>
      <span>Set up an MCP server for your database or API</span>
    </div>
  </div>
</div>

</div>

</div>

---

# 📖 Resources & Next Steps

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
  <div class="font-bold text-cyan-300 mb-3 text-lg">Official Documentation</div>
  <div class="space-y-2 text-sm">
    <div class="p-2 bg-gray-800/50 rounded">
      📖 <a href="https://docs.github.com/en/copilot" class="text-cyan-300">GitHub Copilot Docs</a> — Complete reference
    </div>
    <div class="p-2 bg-gray-800/50 rounded">
      📖 <a href="https://code.visualstudio.com/docs/copilot" class="text-blue-300">VS Code Copilot Guide</a> — Editor integration
    </div>
    <div class="p-2 bg-gray-800/50 rounded">
      📖 <a href="https://docs.github.com/en/copilot/github-copilot-in-the-cli" class="text-indigo-300">Copilot CLI Docs</a> — Terminal usage
    </div>
  </div>
</div>

<div>
  <div class="font-bold text-blue-300 mb-3 text-lg">Go Deeper</div>
  <div class="space-y-2 text-sm">
    <div class="p-2 bg-gray-800/50 rounded">
      🎯 <b class="text-cyan-300">Copilot Chat</b> — Context mastery deep dive
    </div>
    <div class="p-2 bg-gray-800/50 rounded">
      🔧 <b class="text-blue-300">Copilot CLI</b> — Terminal workflow optimization
    </div>
    <div class="p-2 bg-gray-800/50 rounded">
      📋 <b class="text-indigo-300">Code Review</b> — PR automation patterns
    </div>
    <div class="p-2 bg-gray-800/50 rounded">
      🎓 <b class="text-purple-300">Full Workshop</b> — 8-9 hours hands-on customization
    </div>
  </div>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/20 text-center">
  <div class="text-sm text-gray-300">Remember: <b class="text-cyan-300">More context = better suggestions.</b> That's the thread connecting everything you've seen today.</div>
</div>

---
layout: center
---

<div class="flex flex-col items-center justify-center relative">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
  <div class="relative z-10">
    <img src="../tech-talks/sdp-logo.png" class="w-48 mx-auto mb-8 opacity-80" alt="SDP Logo" />
  </div>
  <h1 class="!text-4xl !font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
    Thank You
  </h1>
  <div class="mt-6 text-lg text-gray-400 relative z-10">
    Start with context. The rest follows.
  </div>
  <div class="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
