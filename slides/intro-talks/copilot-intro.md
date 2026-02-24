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
updated: 2026-02-24
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: #0d1117;">
  <!-- Hero: Label -->
  <div class="flex items-center gap-2 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
    <span class="text-sm font-medium tracking-wide uppercase" style="color: #8b949e;">GitHub Copilot</span>
  </div>
  <!-- Hero: Heading -->
  <h1 class="!text-6xl !font-bold !leading-tight text-center max-w-4xl" style="color: #e6edf3;">
    Your AI<br>Pair Programmer
  </h1>
  <!-- Hero: Description -->
  <p class="mt-6 text-xl text-center max-w-2xl" style="color: #8b949e;">
    A 45-minute introduction for experienced developers — from completions to chat to customization.
  </p>
  <!-- Hero: Actions -->
  <div class="mt-8 flex items-center gap-4">
    <span class="px-5 py-2.5 rounded-md text-white font-medium" style="background: #238636;">
      Let's get started →
    </span>
    <span class="px-5 py-2.5 rounded-md font-medium" style="color: #e6edf3; border: 1px solid #30363d;">
      45 min · 19 slides
    </span>
  </div>
  <!-- Hero: Copilot icon -->
  <div class="mt-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#58a6ff" opacity="0.3"><path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"/><path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"/></svg>
  </div>
</div>

---

# The Question This Talk Answers

<div class="mt-10 flex items-center justify-center">
  <div class="p-8 rounded-xl max-w-3xl" style="background: #161b22; border: 1px solid #30363d;">
    <div class="text-4xl mb-4 text-center">💭</div>
    <div class="text-2xl font-bold text-center leading-relaxed" style="color: #e6edf3;">
      "What can GitHub Copilot actually do for an experienced developer, and how do I get the most out of it from day one?"
    </div>
  </div>
</div>

<div class="mt-12 text-center">
  <div class="inline-block px-6 py-3 rounded-lg" style="background: #0d419d;">
    <div class="text-lg font-medium text-white">Target: Experienced Developers · 45 Minutes</div>
  </div>
</div>

---
layout: center
name: toc
---

# Table of Contents

<div class="mt-8 grid grid-cols-3 gap-5">

<div class="p-5 rounded-xl cursor-pointer hover:scale-105 transition-transform" style="background: #161b22; border: 1px solid #30363d;" @click="$nav.go($nav.currentPage+1)">
  <div class="text-2xl mb-2">🌍</div>
  <div class="font-bold" style="color: #58a6ff;">The Landscape</div>
  <div class="text-sm mt-1" style="color: #8b949e;">Why now, how it works, the context model</div>
</div>

<div class="p-5 rounded-xl cursor-pointer hover:scale-105 transition-transform" style="background: #161b22; border: 1px solid #30363d;" @click="$nav.go($nav.currentPage+3)">
  <div class="text-2xl mb-2">⚡</div>
  <div class="font-bold" style="color: #58a6ff;">Code Completions</div>
  <div class="text-sm mt-1" style="color: #8b949e;">Inline suggestions, ghost text, NES</div>
</div>

<div class="p-5 rounded-xl cursor-pointer hover:scale-105 transition-transform" style="background: #161b22; border: 1px solid #30363d;" @click="$nav.go($nav.currentPage+6)">
  <div class="text-2xl mb-2">💬</div>
  <div class="font-bold" style="color: #58a6ff;">Copilot Chat</div>
  <div class="text-sm mt-1" style="color: #8b949e;">Context variables, agents, workflows</div>
</div>

<div class="p-5 rounded-xl cursor-pointer hover:scale-105 transition-transform" style="background: #161b22; border: 1px solid #30363d;" @click="$nav.go($nav.currentPage+10)">
  <div class="text-2xl mb-2">🔧</div>
  <div class="font-bold" style="color: #a371f7;">CLI & Code Review</div>
  <div class="text-sm mt-1" style="color: #8b949e;">Terminal AI, automated PR review</div>
</div>

<div class="p-5 rounded-xl cursor-pointer hover:scale-105 transition-transform" style="background: #161b22; border: 1px solid #30363d;" @click="$nav.go($nav.currentPage+13)">
  <div class="text-2xl mb-2">🎨</div>
  <div class="font-bold" style="color: #3fb950;">Customization</div>
  <div class="text-sm mt-1" style="color: #8b949e;">Instructions, prompts, agents, MCP</div>
</div>

<div class="p-5 rounded-xl cursor-pointer hover:scale-105 transition-transform" style="background: #161b22; border: 1px solid #30363d;" @click="$nav.go($nav.currentPage+16)">
  <div class="text-2xl mb-2">🚀</div>
  <div class="font-bold" style="color: #d29922;">Getting Started</div>
  <div class="text-sm mt-1" style="color: #8b949e;">Immediate actions, resources, next steps</div>
</div>

</div>

---
name: the-landscape
---

# The Landscape: AI-Assisted Development

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
  <div class="font-bold mb-4 text-xl" style="color: #58a6ff;">Why Now?</div>
  <div class="space-y-3 text-sm">
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>60-70% of dev work is mechanical</b> — boilerplate, API lookups, test scaffolding, docs
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>AI removes friction</b> — not replacing developers, amplifying expertise
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Integrated, not separate</b> — lives in your editor, terminal, and PR workflow
    </div>
  </div>
</div>

<div>
  <div class="font-bold mb-4 text-xl" style="color: #58a6ff;">The Full Surface Map</div>
  <div class="space-y-2 text-sm">
    <div class="flex items-center gap-3 p-2 rounded" style="background: #161b22;">
      <span class="text-lg">⚡</span>
      <div><b style="color: #58a6ff;">Completions</b> — Inline suggestions as you type</div>
    </div>
    <div class="flex items-center gap-3 p-2 rounded" style="background: #161b22;">
      <span class="text-lg">💬</span>
      <div><b style="color: #58a6ff;">Chat</b> — Conversational AI with codebase context</div>
    </div>
    <div class="flex items-center gap-3 p-2 rounded" style="background: #161b22;">
      <span class="text-lg">🔧</span>
      <div><b style="color: #58a6ff;">CLI</b> — Terminal command assistance</div>
    </div>
    <div class="flex items-center gap-3 p-2 rounded" style="background: #161b22;">
      <span class="text-lg">📋</span>
      <div><b style="color: #a371f7;">Code Review</b> — Automated PR analysis</div>
    </div>
    <div class="flex items-center gap-3 p-2 rounded" style="background: #161b22;">
      <span class="text-lg">🎨</span>
      <div><b style="color: #3fb950;">Customization</b> — Team patterns & conventions</div>
    </div>
  </div>
</div>

</div>

---

# How Copilot Works

<div class="mt-6">

<div class="p-6 rounded-xl mb-6" style="background: #161b22; border: 1px solid #30363d;">
  <div class="flex items-center justify-center gap-8 text-lg">
    <div class="text-center">
      <div class="text-3xl mb-2">📄</div>
      <div class="font-bold" style="color: #58a6ff;">Your Context</div>
      <div class="text-xs" style="color: #8b949e;">Files, code, questions</div>
    </div>
    <div class="text-3xl" style="color: #58a6ff;">→</div>
    <div class="text-center">
      <div class="text-3xl mb-2">🧠</div>
      <div class="font-bold" style="color: #58a6ff;">Language Model</div>
      <div class="text-xs" style="color: #8b949e;">Hosted by GitHub</div>
    </div>
    <div class="text-3xl" style="color: #58a6ff;">→</div>
    <div class="text-center">
      <div class="text-3xl mb-2">✨</div>
      <div class="font-bold" style="color: #58a6ff;">Suggestion</div>
      <div class="text-xs" style="color: #8b949e;">Code, answers, reviews</div>
    </div>
  </div>
</div>

<div class="p-4 rounded-lg border-l-4 mb-4" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
  <div class="font-bold" style="color: #3fb950;">🎯 The Key Insight</div>
  <div class="text-sm mt-1" style="color: #e6edf3;">The model is the same across all surfaces. What changes is the <b>context</b> each surface provides. <b>More context = better suggestions.</b></div>
</div>

<div class="grid grid-cols-4 gap-3 text-xs">
  <div class="p-2 rounded text-center" style="background: #161b22;">
    <div class="font-bold" style="color: #58a6ff;">Completions</div>
    <div style="color: #8b949e;">Current file + open tabs</div>
  </div>
  <div class="p-2 rounded text-center" style="background: #161b22;">
    <div class="font-bold" style="color: #58a6ff;">Chat</div>
    <div style="color: #8b949e;">What you reference</div>
  </div>
  <div class="p-2 rounded text-center" style="background: #161b22;">
    <div class="font-bold" style="color: #58a6ff;">CLI</div>
    <div style="color: #8b949e;">Command + history</div>
  </div>
  <div class="p-2 rounded text-center" style="background: #161b22;">
    <div class="font-bold" style="color: #a371f7;">Code Review</div>
    <div style="color: #8b949e;">PR diff + context</div>
  </div>
</div>

</div>

---

# 🧠 The Shift

<div class="mt-16 flex items-center justify-center">
  <div class="p-10 rounded-2xl max-w-3xl" style="background: #161b22; border: 1px solid #30363d;">
    <div class="text-center">
      <div class="text-lg mb-4" style="color: #8b949e;">The Mental Model</div>
      <div class="grid grid-cols-3 gap-4 items-center">
        <div class="text-right">
          <div class="text-xl font-bold" style="color: #f85149;">❌ "AI writes code for me"</div>
        </div>
        <div class="text-4xl text-center" style="color: #58a6ff;">→</div>
        <div class="text-left">
          <div class="text-xl font-bold" style="color: #3fb950;">✅ "AI amplifies my expertise when I give it the right context"</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-10 text-center text-sm" style="color: #8b949e;">
  This shift applies to every surface you'll see today
</div>

---
name: code-completions
---

# Code Completions: Your Typing Accelerator

<div class="mt-4 grid grid-cols-2 gap-6">

<div>
  <div class="font-bold mb-3 text-lg" style="color: #58a6ff;">How It Works</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Ghost text appears</b> as you type — press <code class="bg-gray-700 px-1 rounded">Tab</code> to accept, <code class="bg-gray-700 px-1 rounded">Esc</code> to dismiss
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Single lines to entire functions</b> — Copilot infers intent from your code and comments
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Next Edit Suggestions (NES)</b> — predicts your next edit location after accepting
    </div>
  </div>
</div>

<div>
  <div class="font-bold mb-3 text-lg" style="color: #58a6ff;">What Copilot Sees</div>
  <div class="space-y-2 text-sm">
    <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
      <span style="color: #58a6ff;">✦</span> Current file content (before & after cursor)
    </div>
    <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
      <span style="color: #58a6ff;">✦</span> Open editor tabs (neighboring files)
    </div>
    <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
      <span style="color: #58a6ff;">✦</span> Language & framework from file extension
    </div>
    <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
      <span style="color: #58a6ff;">✦</span> Comments & function signatures as intent signals
    </div>
  </div>
</div>

</div>

---

# Getting Better Completions

<div class="mt-4 space-y-4">

<div class="p-4 rounded-lg" style="background: rgba(63, 185, 80, 0.1); border: 1px solid #3fb950;">
  <div class="font-bold mb-2" style="color: #3fb950;">✅ Write intent before implementation</div>

```python
# Calculate the monthly subscription cost including tax
# and any active discounts. Return final amount rounded to 2 decimals.
def calculate_monthly_cost(subscription, tax_rate, discounts):
```

  <div class="text-xs mt-2" style="color: #8b949e;">Copilot now knows the full intent — not just "write a function"</div>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded-lg" style="background: rgba(248, 81, 73, 0.1); border: 1px solid #f85149;">
  <div class="font-bold mb-2" style="color: #f85149;">❌ Vague naming</div>

```typescript
function process(data) { }
```

</div>

<div class="p-4 rounded-lg" style="background: rgba(63, 185, 80, 0.1); border: 1px solid #3fb950;">
  <div class="font-bold mb-2" style="color: #3fb950;">✅ Specific naming</div>

```typescript
function validateUserRegistration(
  formData: RegistrationForm
) { }
```

</div>

</div>

<div class="p-3 rounded-lg border-l-4 text-sm" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
  💡 <b>Pro tip:</b> Open relevant files in editor tabs — Copilot uses them as context for completions
</div>

</div>

---

# Completions: Patterns That Work

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
  <div class="font-bold mb-3" style="color: #3fb950;">🎯 High-Value Patterns</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>Boilerplate generation</b> — CRUD endpoints, model definitions, config files
    </div>
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>Pattern continuation</b> — Write one example, Copilot follows for the rest
    </div>
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>Test scaffolding</b> — Describe the test in a comment, get the implementation
    </div>
    <div class="p-3 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
      <b>Documentation</b> — JSDoc, docstrings, README sections from code context
    </div>
  </div>
</div>

<div>
  <div class="font-bold mb-3" style="color: #d29922;">⚠️ Know the Limits</div>
  <div class="space-y-2 text-sm">
    <div class="p-3 rounded border-l-3" style="background: rgba(210, 153, 34, 0.1); border-color: #d29922;">
      <b>Always review</b> — suggestions may look right but have subtle bugs
    </div>
    <div class="p-3 rounded border-l-3" style="background: rgba(210, 153, 34, 0.1); border-color: #d29922;">
      <b>Novel algorithms</b> — Copilot is better at applying known patterns than inventing new ones
    </div>
    <div class="p-3 rounded border-l-3" style="background: rgba(210, 153, 34, 0.1); border-color: #d29922;">
      <b>Business logic</b> — complex domain rules need explicit specification
    </div>
  </div>
</div>

</div>

<div class="mt-6 p-3 rounded-lg text-center text-sm" style="background: rgba(163, 113, 247, 0.1);">
  Completions keep you in <b style="color: #a371f7;">flow state</b> — for deeper tasks, switch to <b style="color: #58a6ff;">Chat</b>
</div>

---
name: copilot-chat
---

# Copilot Chat: Your Codebase Expert

<div class="mt-6">

<div class="grid grid-cols-3 gap-4 mb-6">

<div class="p-4 rounded-xl text-center" style="background: #161b22; border: 1px solid #30363d;">
  <div class="text-3xl mb-2">📋</div>
  <div class="font-bold" style="color: #58a6ff;">Chat Panel</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Side panel for extended conversations and complex questions</div>
</div>

<div class="p-4 rounded-xl text-center" style="background: #161b22; border: 1px solid #30363d;">
  <div class="text-3xl mb-2">✏️</div>
  <div class="font-bold" style="color: #58a6ff;">Inline Chat</div>
  <div class="text-xs mt-1" style="color: #8b949e;"><code>Ctrl+I</code> — Quick edits right in your code</div>
</div>

<div class="p-4 rounded-xl text-center" style="background: #161b22; border: 1px solid #30363d;">
  <div class="text-3xl mb-2">⚡</div>
  <div class="font-bold" style="color: #58a6ff;">Quick Chat</div>
  <div class="text-xs mt-1" style="color: #8b949e;"><code>Ctrl+Shift+I</code> — Fast questions, no context switch</div>
</div>

</div>

<div class="p-4 rounded-lg border-l-4" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
  <div class="font-bold" style="color: #3fb950;">🎯 Key Difference from Completions</div>
  <div class="text-sm mt-1" style="color: #e6edf3;">Completions are <b>reactive</b> (suggestions as you type). Chat is <b>proactive</b> (you ask questions, explore, and direct). Use completions for flow, Chat for exploration.</div>
</div>

</div>

---

# Chat Context Variables: The Power Feature

<div class="mt-4">

<div class="text-sm mb-4" style="color: #e6edf3;">Context variables tell Chat <b>exactly what to look at</b> — the difference between generic and codebase-specific answers.</div>

<div class="grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-1" style="color: #58a6ff;"><code>#file</code> — Reference a specific file</div>
  <div class="text-xs" style="color: #8b949e;">"Explain #file:auth.ts"</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-1" style="color: #58a6ff;"><code>@workspace</code> — Search entire workspace</div>
  <div class="text-xs" style="color: #8b949e;">"@workspace how is auth implemented?"</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-1" style="color: #58a6ff;"><code>#codebase</code> — Semantic search</div>
  <div class="text-xs" style="color: #8b949e;">"#codebase find error handling patterns"</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-1" style="color: #58a6ff;"><code>#selection</code> — Selected code</div>
  <div class="text-xs" style="color: #8b949e;">Select code → "Refactor #selection"</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-1" style="color: #58a6ff;"><code>@terminal</code> — Terminal context</div>
  <div class="text-xs" style="color: #8b949e;">"@terminal why did my last command fail?"</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-1" style="color: #58a6ff;"><code>@vscode</code> — Editor features</div>
  <div class="text-xs" style="color: #8b949e;">"@vscode how do I enable word wrap?"</div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg border-l-4 text-sm" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
  💡 <b>The more specific your context, the better the response.</b> "@workspace how does auth work" is good. "Explain the JWT validation in #file:middleware/auth.ts" is much better.
</div>

</div>

---

# Chat in Practice

<div class="mt-4 space-y-4">

<div class="p-4 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-2" style="color: #58a6ff;">🔍 Debugging with Context</div>

```
I'm getting a NullReferenceException in #file:OrderService.cs at line 47.
@workspace show me how other services handle null order lookups.
```

</div>

<div class="p-4 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-2" style="color: #58a6ff;">🏗️ Architecture Exploration</div>

```
@workspace explain the authentication flow from login to token refresh.
Include which files are involved.
```

</div>

<div class="p-4 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-2" style="color: #58a6ff;">⚙️ Code Generation with Constraints</div>

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
  <div class="font-bold mb-3 text-lg" style="color: #a371f7;">What Is Agent Mode?</div>
  <div class="space-y-3 text-sm">
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Autonomous multi-step execution</b> — Copilot plans, implements, and iterates
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Multi-file edits</b> — creates, modifies, and deletes files across your project
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Terminal commands</b> — runs build, test, and lint automatically
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(163, 113, 247, 0.1); border-color: #a371f7;">
      <b>Self-correction</b> — detects errors and fixes them without manual intervention
    </div>
  </div>
</div>

<div>
  <div class="font-bold mb-3 text-lg" style="color: #58a6ff;">When to Use It</div>
  <div class="space-y-2 text-sm">
    <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
      <span style="color: #3fb950;">✅</span> Multi-file refactoring
    </div>
    <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
      <span style="color: #3fb950;">✅</span> New feature scaffolding
    </div>
    <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
      <span style="color: #3fb950;">✅</span> Test generation across modules
    </div>
    <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
      <span style="color: #3fb950;">✅</span> Bug fixing with iteration
    </div>
    <div class="flex items-center gap-2 p-2 rounded mt-4" style="background: #161b22;">
      <span style="color: #d29922;">⚠️</span> Always review changes before accepting
    </div>
  </div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg text-sm text-center" style="background: rgba(88, 166, 255, 0.1);">
  Agent mode = <b style="color: #a371f7;">Chat</b> + <b style="color: #58a6ff;">code editing</b> + <b style="color: #3fb950;">terminal</b> in one autonomous loop
</div>

---
name: cli-code-review
---

# Copilot in the CLI

<div class="mt-6 grid grid-cols-2 gap-6">

<div>
  <div class="font-bold mb-3 text-lg" style="color: #58a6ff;">Terminal AI Assistance</div>
  <div class="text-sm mb-4" style="color: #e6edf3;">Interactive conversations and programmatic execution — right in your terminal.</div>

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
  <div class="font-bold mb-3 text-lg" style="color: #58a6ff;">Why It Matters</div>
  <div class="space-y-3 text-sm">
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Plan Mode</b> — press Shift+Tab to plan before coding
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>No context switching</b> — stay in your terminal, ask naturally
    </div>
    <div class="p-3 rounded-lg border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">
      <b>Two modes</b> — interactive for exploration, <code>-p</code> for scripts/CI
    </div>
  </div>

  <div class="mt-4 p-3 rounded text-xs" style="background: #161b22;">
    <div class="font-bold mb-1" style="color: #e6edf3;">Install:</div>
    <code>gh copilot</code> <span style="color: #8b949e;">(auto-installs)</span> or <code>npm i -g @github/copilot</code>
  </div>
</div>

</div>

---

# Copilot Code Review

<div class="mt-6">

<div class="p-5 rounded-xl mb-6" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold text-lg mb-2" style="color: #a371f7;">Automated PR Analysis</div>
  <div class="text-sm" style="color: #e6edf3;">Copilot reviews your pull requests and provides specific, actionable feedback — inline comments just like a human reviewer.</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
  <div class="font-bold mb-3" style="color: #3fb950;">What It Catches</div>
  <div class="space-y-2">
    <div class="p-2 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">🐛 Logic errors & edge cases</div>
    <div class="p-2 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">🔒 Security vulnerabilities (SQL injection, XSS)</div>
    <div class="p-2 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">⚡ Performance issues (N+1 queries)</div>
    <div class="p-2 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">❌ Missing error handling</div>
    <div class="p-2 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">📏 Codebase inconsistencies</div>
  </div>
</div>

<div>
  <div class="font-bold mb-3" style="color: #58a6ff;">How to Use</div>
  <div class="space-y-2">
    <div class="p-2 rounded border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">Enable in repository settings</div>
    <div class="p-2 rounded border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">Or request review from <code>@copilot</code></div>
    <div class="p-2 rounded border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">Comments appear inline on the diff</div>
    <div class="p-2 rounded border-l-3" style="background: rgba(88, 166, 255, 0.1); border-color: #58a6ff;">Each comment includes a suggested fix</div>
  </div>

  <div class="mt-4 p-3 rounded-lg border-l-3 text-xs" style="background: rgba(210, 153, 34, 0.1); border-color: #d29922;">
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

<div class="text-sm mb-4" style="color: #e6edf3;">Out of the box, Copilot knows general programming. With customization, it knows <b style="color: #58a6ff;">your team's</b> programming.</div>

<div class="space-y-2 text-sm">

<div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22; border: 1px solid #30363d;">
  <span class="text-2xl">📋</span>
  <div>
    <div class="font-bold" style="color: #58a6ff;">Instructions</div>
    <div class="text-xs" style="color: #8b949e;"><code>.github/copilot-instructions.md</code> — Team conventions applied to every response</div>
  </div>
</div>

<div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22; border: 1px solid #30363d;">
  <span class="text-2xl">📝</span>
  <div>
    <div class="font-bold" style="color: #58a6ff;">Custom Prompts</div>
    <div class="text-xs" style="color: #8b949e;"><code>.github/prompts/*.prompt.md</code> — Reusable, shareable prompt templates</div>
  </div>
</div>

<div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22; border: 1px solid #30363d;">
  <span class="text-2xl">🧠</span>
  <div>
    <div class="font-bold" style="color: #58a6ff;">Agent Skills</div>
    <div class="text-xs" style="color: #8b949e;"><code>.github/skills/*/SKILL.md</code> — Domain knowledge loaded when relevant</div>
  </div>
</div>

<div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22; border: 1px solid #30363d;">
  <span class="text-2xl">🔌</span>
  <div>
    <div class="font-bold" style="color: #a371f7;">MCP Servers</div>
    <div class="text-xs" style="color: #8b949e;"><code>.vscode/mcp.json</code> — Connect to databases, APIs, external tools</div>
  </div>
</div>

<div class="p-3 rounded-lg flex items-center gap-3" style="background: #161b22; border: 1px solid #30363d;">
  <span class="text-2xl">🤖</span>
  <div>
    <div class="font-bold" style="color: #3fb950;">Custom Agents</div>
    <div class="text-xs" style="color: #8b949e;"><code>.github/agents/*.agent.md</code> — Role-based AI specialists</div>
  </div>
</div>

</div>

</div>

---

# How Customization Compounds

<div class="mt-6">

<div class="grid grid-cols-3 gap-4 mb-6">

<div class="p-4 rounded-xl text-center" style="background: rgba(248, 81, 73, 0.1); border: 1px solid #f85149;">
  <div class="text-sm font-bold mb-2" style="color: #f85149;">No Customization</div>
  <div class="text-xs" style="color: #8b949e;">"Create a user endpoint"</div>
  <div class="mt-2 text-xs" style="color: #8b949e;">→ Generic REST boilerplate</div>
</div>

<div class="p-4 rounded-xl text-center" style="background: rgba(210, 153, 34, 0.1); border: 1px solid #d29922;">
  <div class="text-sm font-bold mb-2" style="color: #d29922;">With Instructions</div>
  <div class="text-xs" style="color: #8b949e;">"Create a user endpoint"</div>
  <div class="mt-2 text-xs" style="color: #8b949e;">→ Follows your error handling, naming, auth patterns</div>
</div>

<div class="p-4 rounded-xl text-center" style="background: rgba(63, 185, 80, 0.1); border: 1px solid #3fb950;">
  <div class="text-sm font-bold mb-2" style="color: #3fb950;">Full Stack</div>
  <div class="text-xs" style="color: #8b949e;">"Create a user endpoint"</div>
  <div class="mt-2 text-xs" style="color: #8b949e;">→ Follows patterns + uses prompt template + queries DB schema</div>
</div>

</div>

<div class="p-4 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-2" style="color: #58a6ff;">🚀 Quick Start: Create copilot-instructions.md</div>

```markdown
# Project Instructions
- Use TypeScript with strict mode
- Follow REST conventions: plural nouns, proper HTTP methods
- All endpoints require authentication via JWT
- Use Zod for request validation
- Return consistent error format: { error: string, code: number }
```

  <div class="text-xs mt-2" style="color: #8b949e;">This single file transforms every Copilot interaction from generic to team-specific — 5 minutes to create.</div>
</div>

</div>

---

# Which Surface When?

<div class="mt-6">

<div class="p-5 rounded-xl mb-6" style="background: #161b22; border: 1px solid #30363d;">

<div class="grid grid-cols-4 gap-3 text-sm">

<div class="text-center p-3 rounded-lg" style="background: rgba(88, 166, 255, 0.1);">
  <div class="text-2xl mb-1">⚡</div>
  <div class="font-bold text-xs" style="color: #58a6ff;">Completions</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Writing code in flow</div>
  <div class="text-xs mt-2" style="color: #58a6ff;">Auto context</div>
  <div class="text-xs" style="color: #8b949e;">Instant</div>
</div>

<div class="text-center p-3 rounded-lg" style="background: rgba(88, 166, 255, 0.1);">
  <div class="text-2xl mb-1">💬</div>
  <div class="font-bold text-xs" style="color: #58a6ff;">Chat</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Exploration & questions</div>
  <div class="text-xs mt-2" style="color: #58a6ff;">Explicit context</div>
  <div class="text-xs" style="color: #8b949e;">Seconds</div>
</div>

<div class="text-center p-3 rounded-lg" style="background: rgba(88, 166, 255, 0.1);">
  <div class="text-2xl mb-1">🔧</div>
  <div class="font-bold text-xs" style="color: #58a6ff;">CLI</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Terminal tasks</div>
  <div class="text-xs mt-2" style="color: #58a6ff;">Command context</div>
  <div class="text-xs" style="color: #8b949e;">Seconds</div>
</div>

<div class="text-center p-3 rounded-lg" style="background: rgba(163, 113, 247, 0.1);">
  <div class="text-2xl mb-1">📋</div>
  <div class="font-bold text-xs" style="color: #a371f7;">Code Review</div>
  <div class="text-xs mt-1" style="color: #8b949e;">PR quality</div>
  <div class="text-xs mt-2" style="color: #a371f7;">PR diff</div>
  <div class="text-xs" style="color: #8b949e;">Minutes</div>
</div>

</div>

</div>

<div class="p-4 rounded-lg border-l-4 text-sm" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;">
  <b style="color: #3fb950;">The golden rule:</b> Use completions to stay in flow. Switch to Chat when you need to think. Use CLI in the terminal. Let Code Review catch what you missed.
</div>

</div>

---

# 🧠 Mental Model Shift

<div class="mt-4">

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold mb-3" style="color: #3fb950;">✅ Move Toward</div>
<div class="space-y-2">
  <div class="p-2 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;"><b>Context-First Thinking:</b> Open relevant files, use #file refs → architecture-aware suggestions</div>
  <div class="p-2 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;"><b>Conversational Iteration:</b> Use Chat for dialogue → complex problems solved through refinement</div>
  <div class="p-2 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;"><b>Multi-Surface Workflow:</b> Each surface for its strength → completions for flow, Chat for exploration</div>
  <div class="p-2 rounded border-l-3" style="background: rgba(63, 185, 80, 0.1); border-color: #3fb950;"><b>Teach Your Patterns:</b> copilot-instructions.md → every team member gets consistent suggestions</div>
</div>
</div>

<div>
<div class="font-bold mb-3" style="color: #f85149;">🛑 Move Away From / Against</div>
<div class="space-y-2">
  <div class="p-2 rounded border-l-3" style="background: rgba(210, 153, 34, 0.1); border-color: #d29922;"><b>Tab-Only Usage:</b> Ignoring Chat, CLI, Review → missing 80% of Copilot's value</div>
  <div class="p-2 rounded border-l-3" style="background: rgba(210, 153, 34, 0.1); border-color: #d29922;"><b>Zero-Context Prompting:</b> No file refs → generic responses</div>
  <div class="p-2 rounded border-l-3" style="background: rgba(210, 153, 34, 0.1); border-color: #d29922;"><b>Manual Everything:</b> Hand-writing boilerplate, tests, docs → time on tasks AI handles well</div>
  <div class="p-2 rounded border-l-3" style="background: rgba(248, 81, 73, 0.1); border-color: #f85149;"><b>Blind Acceptance:</b> No review of suggestions → AI bugs are still bugs</div>
  <div class="p-2 rounded border-l-3" style="background: rgba(248, 81, 73, 0.1); border-color: #f85149;"><b>Replacing Understanding:</b> Code you can't explain → unmaintainable debt</div>
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

<div class="p-4 rounded-xl" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-3" style="color: #3fb950;">⏱️ 15 Minutes</div>
  <div class="space-y-2">
    <div class="flex items-start gap-2">
      <span class="mt-0.5" style="color: #3fb950;">□</span>
      <span>Try completions with awareness — write a comment, then let Copilot implement</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="mt-0.5" style="color: #3fb950;">□</span>
      <span>Open Chat panel: <code>@workspace explain this project's architecture</code></span>
    </div>
    <div class="flex items-start gap-2">
      <span class="mt-0.5" style="color: #3fb950;">□</span>
      <span>Try inline Chat (<code>Ctrl+I</code>) on a function: "Add error handling"</span>
    </div>
  </div>
</div>

<div class="p-4 rounded-xl" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-3" style="color: #58a6ff;">⏱️ 1 Hour</div>
  <div class="space-y-2">
    <div class="flex items-start gap-2">
      <span class="mt-0.5" style="color: #58a6ff;">□</span>
      <span>Create <code>.github/copilot-instructions.md</code> with 5-10 team conventions</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="mt-0.5" style="color: #58a6ff;">□</span>
      <span>Install CLI: <code>gh copilot</code> (auto-installs) or <code>npm i -g @github/copilot</code></span>
    </div>
    <div class="flex items-start gap-2">
      <span class="mt-0.5" style="color: #58a6ff;">□</span>
      <span>Request Copilot Code Review on your next PR</span>
    </div>
  </div>
</div>

<div class="p-4 rounded-xl" style="background: #161b22; border: 1px solid #30363d;">
  <div class="font-bold mb-3" style="color: #a371f7;">⏱️ 2-4 Hours</div>
  <div class="space-y-2">
    <div class="flex items-start gap-2">
      <span class="mt-0.5" style="color: #a371f7;">□</span>
      <span>Create 2-3 <code>.prompt.md</code> files for common tasks</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="mt-0.5" style="color: #a371f7;">□</span>
      <span>Explore Agent mode for a multi-file change</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="mt-0.5" style="color: #a371f7;">□</span>
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
  <div class="font-bold mb-3 text-lg" style="color: #58a6ff;">Official Documentation</div>
  <div class="space-y-2 text-sm">
    <div class="p-2 rounded" style="background: #161b22;">
      📖 <a href="https://docs.github.com/en/copilot" style="color: #58a6ff;">GitHub Copilot Docs</a> — Complete reference
    </div>
    <div class="p-2 rounded" style="background: #161b22;">
      📖 <a href="https://code.visualstudio.com/docs/copilot" style="color: #58a6ff;">VS Code Copilot Guide</a> — Editor integration
    </div>
    <div class="p-2 rounded" style="background: #161b22;">
      📖 <a href="https://docs.github.com/en/copilot/github-copilot-in-the-cli" style="color: #58a6ff;">Copilot CLI Docs</a> — Terminal usage
    </div>
  </div>
</div>

<div>
  <div class="font-bold mb-3 text-lg" style="color: #58a6ff;">Go Deeper</div>
  <div class="space-y-2 text-sm">
    <div class="p-2 rounded" style="background: #161b22;">
      🎯 <b style="color: #58a6ff;">Copilot Chat</b> — Context mastery deep dive
    </div>
    <div class="p-2 rounded" style="background: #161b22;">
      🔧 <b style="color: #58a6ff;">Copilot CLI</b> — Terminal workflow optimization
    </div>
    <div class="p-2 rounded" style="background: #161b22;">
      📋 <b style="color: #a371f7;">Code Review</b> — PR automation patterns
    </div>
    <div class="p-2 rounded" style="background: #161b22;">
      🎓 <b style="color: #3fb950;">Full Workshop</b> — 8-9 hours hands-on customization
    </div>
  </div>
</div>

</div>

<div class="mt-8 p-4 rounded-lg text-center" style="background: #161b22; border: 1px solid #30363d;">
  <div class="text-sm" style="color: #e6edf3;">Remember: <b style="color: #58a6ff;">More context = better suggestions.</b> That's the thread connecting everything you've seen today.</div>
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
    Start with context. The rest follows.
  </p>
  <div class="mt-6 w-32 h-px" style="background: #30363d;"></div>
  <p class="mt-6 text-sm" style="color: #484f58;">
    github.com/copilot
  </p>
</div>
