---
theme: default
colorSchema: dark
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Model Selection: Right Model, Right Task
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Model Selection - Right Model, Right Task
module: tech-talks/model-selection
mdc: true
status: active
updated: 2026-05-12
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: #0d1117;">
  <div class="flex items-center gap-2 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
    <span class="text-sm font-medium tracking-wide uppercase" style="color: #8b949e;">GitHub Copilot</span>
  </div>
  <h1 class="!text-6xl !font-bold !leading-tight text-center max-w-4xl" style="color: #e6edf3;">
    Model Selection
  </h1>
  <p class="mt-6 text-xl text-center max-w-2xl" style="color: #8b949e;">
    Right Model, Right Task
  </p>
  <div class="mt-8 flex gap-4">
    <div class="px-5 py-2 rounded-md text-sm font-medium" style="background: #238636; color: #ffffff;">
      20 Minutes
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      Developers
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      Architects
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      Engineering Leaders
    </div>
  </div>
</div>

---
layout: center
---

# 📖 Table of Contents

<div class="grid grid-cols-2 gap-4 mt-8">
  <div @click="$nav.go(3)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🎯</div>
    <div class="font-semibold" style="color: #e6edf3;">The 3-Step Framework</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Classify the task, identify constraints, select the tier</div>
  </div>

  <div @click="$nav.go(10)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🌐</div>
    <div class="font-semibold" style="color: #e6edf3;">The Model Landscape</div>
    <div class="text-xs mt-1" style="color: #8b949e;">GPT-5.5, Claude Opus 4.7, Gemini 3.1 — strengths and tradeoffs</div>
  </div>

  <div @click="$nav.go(13)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">📊</div>
    <div class="font-semibold" style="color: #e6edf3;">Model-Task Matrix</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Which model wins for which task</div>
  </div>

  <div @click="$nav.go(15)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">💡</div>
    <div class="font-semibold" style="color: #e6edf3;">Tier Strategy & Cost</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Real-world cost examples and savings</div>
  </div>

  <div @click="$nav.go(18)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🔧</div>
    <div class="font-semibold" style="color: #e6edf3;">Practical Patterns</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Fallback chains, task decomposition, evaluation</div>
  </div>

  <div @click="$nav.go(24)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">✅</div>
    <div class="font-semibold" style="color: #e6edf3;">What You Can Do Today</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Actionable next steps for this afternoon, week, and month</div>
  </div>
</div>

---

# The Question

<div class="h-full flex items-center justify-center" style="background: #0d1117;">
<div class="max-w-4xl">
<div class="text-6xl text-center mb-8">🤔</div>
<div class="text-3xl font-bold text-center mb-6 leading-snug" style="color: #e6edf3;">
"With dozens of frontier models available, how do I choose the right one for each task — and when does it actually matter?"
</div>
<div class="mt-8 flex gap-6 justify-center text-sm">
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #3fb950;">💰 Cost</div>
<div class="text-xs mt-1" style="color: #8b949e;">40x price difference across tiers</div>
</div>
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #58a6ff;">🎯 Quality</div>
<div class="text-xs mt-1" style="color: #8b949e;">10-25% accuracy gap on hard tasks</div>
</div>
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #d29922;">⚡ Speed</div>
<div class="text-xs mt-1" style="color: #8b949e;">10x latency variation</div>
</div>
</div>
</div>
</div>

---

# The Problem

<div class="grid grid-cols-2 gap-4 mt-4 text-xs" style="background: #0d1117;">
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="font-bold mb-2" style="color: #f85149;">💸 One-Model-Fits-All is Expensive</div>
<div style="color: #8b949e;">Teams default to the "best" model for everything — paying premium prices for tasks where a fast model produces identical results. $2,400/mo → $480/mo with routing</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="font-bold mb-2" style="color: #f85149;">🎯 Wrong Model = Wrong Results</div>
<div style="color: #8b949e;">A speed-optimized model on complex reasoning produces shallow, error-prone output. Haiku on a 15-microservice refactor → 12 bugs. Opus → zero regressions</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #d29922;">
<div class="font-bold mb-2" style="color: #d29922;">🤷 No Framework for Decisions</div>
<div style="color: #8b949e;">Without clear criteria, teams guess or follow hype — neither scales across an engineering organization with dozens of use cases</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #d29922;">
<div class="font-bold mb-2" style="color: #d29922;">🔄 The Landscape Changes Quarterly</div>
<div style="color: #8b949e;">New models ship constantly. Yesterday's best pick may not be today's — you need a repeatable process, not a static answer</div>
</div>
</div>
<div class="mt-4 p-3 rounded-xl border text-center text-sm" style="background: #161b22; border-color: #f85149;">
<div class="font-bold" style="color: #e6edf3;">You need a framework that works regardless of which models are on top this quarter</div>
</div>

---

# The Solution: Task-Based Selection

<div class="text-sm space-y-4 mt-4" style="background: #0d1117;">

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #238636;">
<div class="text-lg font-bold mb-3" style="color: #3fb950;">A 3-Step Framework</div>
<div style="color: #e6edf3;">
<div class="mb-2">🎯 <b>Step 1: Classify the task</b> — What are you actually asking the model to do?</div>
<div class="mb-2">⚖️ <b>Step 2: Identify the constraint</b> — What matters most for THIS task?</div>
<div>🏷️ <b>Step 3: Select the tier</b> — Match to the capability tier that fits</div>
</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-4">
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">🏆</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">Capability</div>
<div class="text-xs" style="color: #8b949e;">Complex reasoning, architecture, security. Highest quality, highest cost.</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">⚡</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">Balanced</div>
<div class="text-xs" style="color: #8b949e;">Daily coding, writing, general tasks. Best cost-quality tradeoff.</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
<div class="text-xl mb-1">🚀</div>
<div class="font-semibold mb-1" style="color: #e6edf3;">Speed / Cost</div>
<div class="text-xs" style="color: #8b949e;">Classification, triage, log parsing. High volume, low complexity.</div>
</div>
</div>

<div class="mt-3 p-2 rounded text-xs" style="background: #0d1117; border-left: 3px solid #238636; color: #8b949e;">
  Provider-agnostic — this framework works regardless of which models ship next quarter.
</div>

</div>

---

# Step 1: Classify the Task

<div class="mt-3" style="background: #0d1117;">

<div class="text-xs mb-3" style="color: #8b949e;">What are you actually asking the model to do? Seven categories:</div>

<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-1" style="color: #d29922;">🧠 Reasoning</div>
  <div style="color: #8b949e;">Multi-step logic, abstract problem-solving</div>
  <div class="mt-1 text-xs italic" style="color: #484f58;">Architecture decisions, root cause analysis</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-1" style="color: #a78bfa;">💻 Coding</div>
  <div style="color: #8b949e;">Code generation, refactoring, debugging</div>
  <div class="mt-1 text-xs italic" style="color: #484f58;">Multi-file changes, test generation</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-1" style="color: #58a6ff;">✍️ Writing</div>
  <div style="color: #8b949e;">Prose, brand voice, documentation</div>
  <div class="mt-1 text-xs italic" style="color: #484f58;">Blog posts, user-facing copy</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-1" style="color: #3fb950;">🏷️ Classification</div>
  <div style="color: #8b949e;">Categorization, triage, labeling</div>
  <div class="mt-1 text-xs italic" style="color: #484f58;">Ticket routing, sentiment analysis</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-1" style="color: #58a6ff;">🖼️ Multimodal</div>
  <div style="color: #8b949e;">Vision, audio, video processing</div>
  <div class="mt-1 text-xs italic" style="color: #484f58;">Image analysis, diagram interpretation</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-1" style="color: #d29922;">📊 Analysis</div>
  <div style="color: #8b949e;">Long-document processing, data extraction</div>
  <div class="mt-1 text-xs italic" style="color: #484f58;">Contract review, log analysis</div>
</div>
<div class="p-3 rounded-lg border col-span-2" style="background: #161b22; border-color: #238636;">
  <div class="font-bold mb-1" style="color: #3fb950;">🤖 Agentic</div>
  <div style="color: #8b949e;">Multi-step, tool-using, autonomous workflows — distinct because reliability and instruction-following matter more than raw benchmark scores</div>
  <div class="mt-1 text-xs italic" style="color: #484f58;">Issue-to-PR, CI pipeline debugging, multi-step research</div>
</div>
</div>

</div>

---

# Step 2: Identify the Constraint

<div class="mt-3" style="background: #0d1117;">

<div class="text-xs mb-3" style="color: #8b949e;">What matters most for THIS specific task? Resolve deployment first — it narrows your candidate list:</div>

<div class="space-y-2 text-xs">
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #d29922;">
  <div class="flex items-center gap-2">
    <span class="font-bold" style="color: #d29922;">🔓 Deployment Model</span>
    <span class="px-2 py-0.5 rounded text-xs" style="background: #d29922; color: #0d1117;">RESOLVE FIRST</span>
  </div>
  <div class="mt-1" style="color: #8b949e;">Public API / private cloud (Bedrock, Vertex, Azure) / self-hosted? This determines what's even available based on data residency and compliance.</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold" style="color: #f85149;">🎯 Accuracy</div>
  <div class="mt-1" style="color: #8b949e;">What's the cost of a wrong answer? High-stakes = premium tier, low-stakes = fast tier.</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold" style="color: #3fb950;">⚡ Latency</div>
  <div class="mt-1" style="color: #8b949e;">Does it need to respond in real-time? Interactive UX demands fast models.</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold" style="color: #58a6ff;">💰 Cost / Volume</div>
  <div class="mt-1" style="color: #8b949e;">10 requests/day or 10,000? Volume changes the math completely.</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold" style="color: #a78bfa;">📐 Context Size</div>
  <div class="mt-1" style="color: #8b949e;">How much input at once? 4K, 128K, 1M, 2M — each unlocks different strategies.</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold" style="color: #d29922;">🛡️ Safety</div>
  <div class="mt-1" style="color: #8b949e;">Security-sensitive or handling PII? Prompt injection resistance becomes critical.</div>
</div>
</div>

</div>

---

# Step 3: Select the Tier

<div class="mt-3" style="background: #0d1117;">

<div class="text-xs mb-3" style="color: #8b949e;">Match your task + constraint to a vendor-neutral capability tier (not a pricing row):</div>

<div class="space-y-2 text-xs">
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #d29922;">
  <div class="flex items-center justify-between">
    <div>
      <div class="font-bold text-sm" style="color: #d29922;">🏆 Capability Tier</div>
      <div class="mt-1" style="color: #8b949e;">Complex reasoning, architecture, security review, multi-file refactoring</div>
    </div>
    <div class="text-right" style="color: #484f58;">
      <div class="font-mono">Opus 4.7 · GPT-5.5</div>
      <div class="text-xs">as of May 2026</div>
    </div>
  </div>
</div>
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #58a6ff;">
  <div class="flex items-center justify-between">
    <div>
      <div class="font-bold text-sm" style="color: #58a6ff;">⚡ Balanced Tier</div>
      <div class="mt-1" style="color: #8b949e;">Daily coding, writing, general tasks — strong across most tasks</div>
    </div>
    <div class="text-right" style="color: #484f58;">
      <div class="font-mono">Sonnet 4.6 · GPT-5.4</div>
      <div class="text-xs">as of May 2026</div>
    </div>
  </div>
</div>
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #3fb950;">
  <div class="flex items-center justify-between">
    <div>
      <div class="font-bold text-sm" style="color: #3fb950;">🚀 Speed / Cost Tier</div>
      <div class="mt-1" style="color: #8b949e;">Classification, triage, log parsing, simple code — high volume</div>
    </div>
    <div class="text-right" style="color: #484f58;">
      <div class="font-mono">Haiku 4.5 · GPT-5.4 mini</div>
      <div class="text-xs">as of May 2026</div>
    </div>
  </div>
</div>
<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #8b949e;">
  <div class="flex items-center justify-between">
    <div>
      <div class="font-bold text-sm" style="color: #8b949e;">🔓 Self-Hosted Tier</div>
      <div class="mt-1" style="color: #8b949e;">Data sovereignty, no per-token cost, full control — evaluate, don't assume quality</div>
    </div>
    <div class="text-right" style="color: #484f58;">
      <div class="font-mono">Gemma 4 · Llama 4</div>
      <div class="text-xs">as of May 2026</div>
    </div>
  </div>
</div>
</div>

<div class="mt-3 p-2 rounded text-xs" style="background: #0d1117; border-left: 3px solid #d29922; color: #8b949e;">
  <b style="color: #d29922;">⚠️</b> Label specific model names as "example as of [date]" — the landscape shifts quarterly.
</div>

</div>

---

# 🧠 The Shift

<div class="h-full flex flex-col items-center justify-center" style="background: #0d1117;">
<div class="max-w-3xl text-center">

<div class="p-6 rounded-xl border-2 mb-8" style="background: #161b22; border-color: #238636;">
  <div class="text-3xl font-bold mb-3" style="color: #e6edf3;">
    Stop asking "what's the best model?"
  </div>
  <div class="text-2xl" style="color: #3fb950;">
    Start asking "what's the right model for <u>this</u> task?"
  </div>
</div>

<div class="grid grid-cols-2 gap-8 text-sm">
  <div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
    <div class="font-bold mb-2" style="color: #f85149;">❌ Before</div>
    <div style="color: #8b949e;">One premium model for everything<br/>$$$, slow, diminishing returns</div>
  </div>
  <div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #3fb950;">
    <div class="font-bold mb-2" style="color: #3fb950;">✅ After</div>
    <div style="color: #8b949e;">Route tasks to the right tier<br/>Same quality, 60-80% lower cost</div>
  </div>
</div>

</div>
</div>

---
layout: center
---

<div style="background: #0d1117;">
  <div class="text-6xl mb-6">🌐</div>
  <h1 class="!text-4xl !font-bold" style="color: #e6edf3;">The Model Landscape</h1>
  <p class="mt-4 text-lg" style="color: #8b949e;">Three providers, three philosophies, March 2026</p>
</div>

---

# The Big Three (May 2026)

<div class="mt-2 grid grid-cols-3 gap-3 text-xs" style="background: #0d1117;">

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #238636;">
  <div class="font-bold text-base mb-2" style="color: #3fb950;">OpenAI — GPT-5</div>
  <div class="space-y-2">
    <div class="p-2 rounded" style="background: #0d1117; color: #8b949e;">
      <b style="color: #3fb950;">GPT-5.5</b> <span style="color: #3fb950; font-size: 0.65rem;">NEW</span><br/>
      Best agentic workflows, 1M context, omnimodal, 74 tok/sec
    </div>
    <div class="p-2 rounded" style="background: #0d1117; color: #8b949e;">
      <b style="color: #3fb950;">GPT-5.4</b><br/>
      Top math reasoning (100% AIME), 83% GDPval knowledge
    </div>
    <div class="p-2 rounded" style="background: #0d1117; color: #8b949e;">
      <b style="color: #3fb950;">GPT-5.4 mini</b><br/>
      Fast/cheap tier, 0.33x request cost
    </div>
  </div>
  <div class="mt-2 font-medium" style="color: #3fb950;">🏆 Best at: Agentic, reasoning, speed</div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #8b5cf6;">
  <div class="font-bold text-base mb-2" style="color: #a78bfa;">Anthropic — Claude 4</div>
  <div class="space-y-2">
    <div class="p-2 rounded" style="background: #0d1117; color: #8b949e;">
      <b style="color: #a78bfa;">Opus 4.7</b> <span style="color: #a78bfa; font-size: 0.65rem;">NEW</span><br/>
      1M context, best agentic chaining, 15x premium request cost
    </div>
    <div class="p-2 rounded" style="background: #0d1117; color: #8b949e;">
      <b style="color: #a78bfa;">Sonnet 4.6</b><br/>
      Best writing, most natural prose, 1x cost
    </div>
    <div class="p-2 rounded" style="background: #0d1117; color: #8b949e;">
      <b style="color: #a78bfa;">Haiku 4.5</b><br/>
      Fast triage, classification, 0.33x cost
    </div>
  </div>
  <div class="mt-2 font-medium" style="color: #a78bfa;">🏆 Best at: Coding, safety, precision</div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #58a6ff;">
  <div class="font-bold text-base mb-2" style="color: #58a6ff;">Google — Gemini 3.1</div>
  <div class="space-y-2">
    <div class="p-2 rounded" style="background: #0d1117; color: #8b949e;">
      <b style="color: #58a6ff;">Gemini 3.1 Pro</b> <span style="color: #58a6ff; font-size: 0.65rem;">NEW</span><br/>
      2M context, 2x reasoning vs 3.0, best multimodal
    </div>
    <div class="p-2 rounded" style="background: #0d1117; color: #8b949e;">
      <b style="color: #58a6ff;">Gemini 3.1 Flash</b><br/>
      Ultra-fast, lowest $/token, Copilot-supported
    </div>
    <div class="p-2 rounded" style="background: #0d1117; color: #8b949e;">
      <b style="color: #58a6ff;">Gemma 4 (open)</b><br/>
      Leading open-weight model for on-premise
    </div>
  </div>
  <div class="mt-2 font-medium" style="color: #58a6ff;">🏆 Best at: Multimodal, context, cost</div>
</div>

</div>

---

# Key Differentiators

<div class="mt-3" style="background: #0d1117;">

<div class="text-xs">

| Dimension | GPT-5.5 | Claude Opus 4.7 | Gemini 3.1 Pro |
|-----------|---------|-----------------|----------------|
| **Agentic / Multi-step** | 🥇 Best autonomy | 🥇 Best chaining | 🥉 Good |
| **Coding (SWE-bench)** | 🥈 ~78% | 🥇 83%+ | 🥉 ~72% |
| **Math / Reasoning** | 🥇 100% AIME | 🥈 Strong | 🥈 2x improved |
| **Context Window** | 1M | 1M | 🥇 2M |
| **Multimodal** | 🥇 Omnimodal | 🥉 Text-focused | 🥇 Best vision+audio |
| **Speed (tokens/sec)** | 🥇 74 tok/s | 🥉 50 tok/s | 🥈 Fast |
| **Safety / Injection** | 🥈 Strong | 🥇 Lowest risk | 🥉 Good |
| **Cost ($/M tokens)** | 🥈 Moderate | 🥉 Premium (15x) | 🥇 Lowest |

</div>

<div class="mt-3 p-3 rounded-lg border text-sm" style="background: #161b22; border-color: #238636; color: #8b949e;">
  <b style="color: #3fb950;">💡 No single model wins every row.</b> That's exactly why task-based selection matters — the "best" model depends entirely on what you're optimizing for.
</div>

</div>

---
layout: center
---

<div style="background: #0d1117;">
  <div class="text-6xl mb-6">📊</div>
  <h1 class="!text-4xl !font-bold" style="color: #e6edf3;">Model-Task Matrix</h1>
  <p class="mt-4 text-lg" style="color: #8b949e;">Which model wins for which task — backed by benchmarks</p>
</div>

---

# The Matrix: Task → Model

<div class="mt-2" style="background: #0d1117;">

<div class="text-xs">

| Task | Top Pick | Runner-Up | Why This One Wins |
|------|----------|-----------|-------------------|
| **Code generation & refactoring** | Claude Opus 4.7 | GPT-5.5 | 83% SWE-bench, best multi-file accuracy |
| **Agentic multi-step workflows** | GPT-5.5 | Claude Opus 4.7 | Best autonomy, tool-use, omnimodal |
| **Mathematical reasoning** | GPT-5.5 | Gemini 3.1 Pro | 100% AIME, top ARC-AGI-2 |
| **Long-document analysis** | Gemini 3.1 Pro | Claude Opus 4.7 | 2M token native context window |
| **Multimodal (vision/audio)** | Gemini 3.1 Pro | GPT-5.5 | Best image/video/audio integration |
| **Writing & brand voice** | Claude Sonnet 4.6 | GPT-5.5 | Human-preferred, most natural prose |
| **Security-sensitive tasks** | Claude Opus 4.7 | GPT-5.5 | Lowest prompt injection rate |
| **Speed & cost at scale** | Gemini 3.1 Flash | GPT-5.4 mini | Fastest throughput, lowest $/token |
| **Data extraction** | GPT-5.5 | Gemini 3.1 Pro | Strongest structured output |

</div>

<div class="mt-2 p-2 rounded-lg text-xs" style="background: #161b22; border-left: 4px solid #3fb950; color: #8b949e;">
  <b style="color: #3fb950;">Key takeaway:</b> Each provider leads in 3 categories. There is no universal winner — only task-specific champions.
</div>

</div>

---
layout: center
---

<div style="background: #0d1117;">
  <div class="text-6xl mb-6">💡</div>
  <h1 class="!text-4xl !font-bold" style="color: #e6edf3;">Decision Framework</h1>
  <p class="mt-4 text-lg" style="color: #8b949e;">Tier strategy and real-world cost examples</p>
</div>

---

# The Tier Strategy

<div class="mt-3 space-y-3 text-sm" style="background: #0d1117;">

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #d29922;">
  <div class="flex items-center gap-3">
    <span class="text-2xl">🏆</span>
    <div>
      <div class="font-bold" style="color: #d29922;">Premium Tier</div>
      <div class="text-xs" style="color: #8b949e;">Opus 4.7 · GPT-5.5</div>
    </div>
  </div>
  <div class="mt-2" style="color: #8b949e;">Complex reasoning, architecture, security review, multi-file refactoring. High $/token but prevents costly mistakes.</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #58a6ff;">
  <div class="flex items-center gap-3">
    <span class="text-2xl">⚡</span>
    <div>
      <div class="font-bold" style="color: #58a6ff;">Standard Tier</div>
      <div class="text-xs" style="color: #8b949e;">Sonnet 4.6 · GPT-5.4 · Gemini 3.1 Pro</div>
    </div>
  </div>
  <div class="mt-2" style="color: #8b949e;">Daily coding, writing, general tasks, document analysis. Balanced cost and quality for 60% of workloads.</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #3fb950;">
  <div class="flex items-center gap-3">
    <span class="text-2xl">🚀</span>
    <div>
      <div class="font-bold" style="color: #3fb950;">Fast / Cheap Tier</div>
      <div class="text-xs" style="color: #8b949e;">Haiku 4.5 · GPT-5.4 mini · Gemini 3.1 Flash</div>
    </div>
  </div>
  <div class="mt-2" style="color: #8b949e;">Classification, triage, log parsing, simple code, bulk processing. 80% of volume should run here.</div>
</div>

</div>

---

# Real-World Cost Examples

<div class="mt-4 grid grid-cols-2 gap-4" style="background: #0d1117;">

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-3" style="color: #e6edf3;">10,000 Support Ticket Classification</div>
  <div class="space-y-2 text-xs">
    <div class="p-2 rounded flex justify-between" style="background: #0d1117;">
      <span style="color: #8b949e;">❌ Opus 4.6</span>
      <span class="font-bold" style="color: #f85149;">$500 · 8 hours · 99.2%</span>
    </div>
    <div class="p-2 rounded flex justify-between" style="background: #0d1117;">
      <span style="color: #8b949e;">✅ Haiku 4.5</span>
      <span class="font-bold" style="color: #3fb950;">$12 · 45 min · 98.8%</span>
    </div>
  </div>
  <div class="mt-3 text-xs font-medium" style="color: #d29922;">
    💡 0.4% accuracy gap doesn't justify 40x cost
  </div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-3" style="color: #e6edf3;">Auth Refactor Across 15 Microservices</div>
  <div class="space-y-2 text-xs">
    <div class="p-2 rounded flex justify-between" style="background: #0d1117;">
      <span style="color: #8b949e;">❌ Haiku 4.5</span>
      <span class="font-bold" style="color: #f85149;">Fast · Misses deps · 12 bugs</span>
    </div>
    <div class="p-2 rounded flex justify-between" style="background: #0d1117;">
      <span style="color: #8b949e;">✅ Opus 4.6</span>
      <span class="font-bold" style="color: #3fb950;">Slower · Maps all deps · 0 bugs</span>
    </div>
  </div>
  <div class="mt-3 text-xs font-medium" style="color: #d29922;">
    💡 Premium model pays for itself in avoided debugging
  </div>
</div>

</div>

<div class="mt-4 p-3 rounded-xl border text-center text-sm" style="background: #161b22; border-color: #238636;">
<div class="font-bold" style="color: #e6edf3;">Match the model cost to the <span style="color: #3fb950;">cost of getting it wrong</span></div>
</div>

---
layout: center
---

<div style="background: #0d1117;">
  <div class="text-6xl mb-6">🔧</div>
  <h1 class="!text-4xl !font-bold" style="color: #e6edf3;">Practical Patterns</h1>
  <p class="mt-4 text-lg" style="color: #8b949e;">Three proven strategies for model routing</p>
</div>

---

# Three Routing Patterns

<div class="mt-3 grid grid-cols-3 gap-3 text-xs" style="background: #0d1117;">

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-2" style="color: #3fb950;">1️⃣ Fallback Chains</div>
  <div class="text-xs mb-2" style="color: #8b949e;">Try fast first, escalate on failure</div>
  <div class="p-2 rounded font-mono mb-2" style="background: #0d1117; color: #3fb950;">
    Haiku → Sonnet → Opus
  </div>
  <div style="color: #8b949e;">80% of requests handled at fast-tier pricing. Premium only for the hard 20%.</div>
  <div class="mt-2 font-medium" style="color: #3fb950;">Best for: High-volume APIs</div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-2" style="color: #58a6ff;">2️⃣ Task Decomposition</div>
  <div class="text-xs mb-2" style="color: #8b949e;">Split complex work by tier</div>
  <div class="space-y-1 mb-2" style="color: #e6edf3;">
    <div>🏆 Planning → Premium</div>
    <div>⚡ Implementation → Standard</div>
    <div>🚀 Tests/docs → Fast</div>
  </div>
  <div style="color: #8b949e;">Each subtask gets the tier it deserves — no overspend, no quality gap.</div>
  <div class="mt-2 font-medium" style="color: #58a6ff;">Best for: Complex projects</div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-2" style="color: #d29922;">3️⃣ Evaluation-Driven</div>
  <div class="text-xs mb-2" style="color: #8b949e;">Benchmark on YOUR data</div>
  <div class="space-y-1 mb-2" style="color: #e6edf3;">
    <div>1. 50-100 examples from your domain</div>
    <div>2. Run 2-3 candidate models</div>
    <div>3. Score on YOUR criteria</div>
    <div>4. Choose the cost/quality sweet spot</div>
  </div>
  <div class="mt-2 font-medium" style="color: #d29922;">Best for: Production deployment</div>
</div>

</div>

---

# 1️⃣ Fallback Chains — Deep Dive

<div class="mt-3 grid grid-cols-2 gap-4 text-xs" style="background: #0d1117;">

<div class="space-y-3">
  <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #3fb950;">
    <div class="font-bold mb-2" style="color: #3fb950;">How It Works</div>
    <div class="space-y-1" style="color: #8b949e;">
      <div>1. Route every request to the <b style="color: #e6edf3;">fast tier</b> first</div>
      <div>2. Evaluate confidence score of response</div>
      <div>3. If below threshold → retry with <b style="color: #e6edf3;">standard tier</b></div>
      <div>4. If still uncertain → escalate to <b style="color: #e6edf3;">premium tier</b></div>
    </div>
  </div>
  <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
    <div class="font-bold mb-2" style="color: #d29922;">When to Use</div>
    <div style="color: #8b949e;">High-volume APIs, customer support, code review triage, log analysis — anywhere 80%+ of requests are routine</div>
  </div>
</div>

<div class="space-y-3">
  <div class="p-3 rounded-lg" style="background: #161b22;">
    <div class="font-bold mb-2" style="color: #e6edf3;">Example Flow</div>
    <div class="font-mono space-y-1" style="color: #8b949e;">
      <div style="color: #3fb950;">→ Haiku 4.5</div>
      <div>&nbsp;&nbsp;✓ confidence 0.92 → return</div>
      <div style="color: #3fb950;">→ Haiku 4.5</div>
      <div>&nbsp;&nbsp;✗ confidence 0.61 → escalate</div>
      <div style="color: #58a6ff;">&nbsp;&nbsp;→ Sonnet 4.6</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;✓ confidence 0.88 → return</div>
    </div>
  </div>
  <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #238636;">
    <div class="font-bold" style="color: #3fb950;">💰 Result</div>
    <div class="mt-1" style="color: #8b949e;">80% at fast-tier pricing, 15% standard, only 5% premium. <b style="color: #e6edf3;">~70% cost reduction</b> vs always-premium.</div>
  </div>
</div>

</div>

---

# 2️⃣ Task Decomposition — Deep Dive

<div class="mt-3 grid grid-cols-2 gap-4 text-xs" style="background: #0d1117;">

<div class="space-y-3">
  <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #58a6ff;">
    <div class="font-bold mb-2" style="color: #58a6ff;">How It Works</div>
    <div class="space-y-1" style="color: #8b949e;">
      <div>1. <b style="color: #e6edf3;">Analyze</b> incoming task complexity</div>
      <div>2. <b style="color: #e6edf3;">Decompose</b> into subtasks by tier need</div>
      <div>3. <b style="color: #e6edf3;">Route</b> each subtask to appropriate model</div>
      <div>4. <b style="color: #e6edf3;">Compose</b> results into final output</div>
    </div>
  </div>
  <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
    <div class="font-bold mb-2" style="color: #d29922;">When to Use</div>
    <div style="color: #8b949e;">Complex projects with mixed requirements — agent orchestration, PR reviews, feature development where planning ≠ implementation ≠ testing</div>
  </div>
</div>

<div class="space-y-3">
  <div class="p-3 rounded-lg" style="background: #161b22;">
    <div class="font-bold mb-2" style="color: #e6edf3;">Feature Build Example</div>
    <div class="space-y-2" style="color: #8b949e;">
      <div class="p-2 rounded" style="background: #0d1117;">
        <span style="color: #d29922;">🏆 Opus 4.7</span> → Architecture plan, API design
      </div>
      <div class="p-2 rounded" style="background: #0d1117;">
        <span style="color: #58a6ff;">⚡ GPT-5.4</span> → Implementation, code generation
      </div>
      <div class="p-2 rounded" style="background: #0d1117;">
        <span style="color: #3fb950;">🚀 Haiku 4.5</span> → Tests, docs, boilerplate
      </div>
    </div>
  </div>
  <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #238636;">
    <div class="font-bold" style="color: #3fb950;">💰 Result</div>
    <div class="mt-1" style="color: #8b949e;">Premium only for the 10% that needs it. <b style="color: #e6edf3;">~60% savings</b> vs premium-for-all, no quality gap where it counts.</div>
  </div>
</div>

</div>

---

# 3️⃣ Evaluation-Driven — Deep Dive

<div class="mt-3 grid grid-cols-2 gap-4 text-xs" style="background: #0d1117;">

<div class="space-y-3">
  <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #d29922;">
    <div class="font-bold mb-2" style="color: #d29922;">How It Works</div>
    <div class="space-y-1" style="color: #8b949e;">
      <div>1. Curate <b style="color: #e6edf3;">50-100 examples</b> from your domain</div>
      <div>2. Define scoring rubric (accuracy, latency, cost)</div>
      <div>3. Run <b style="color: #e6edf3;">2-3 candidate models</b> on same inputs</div>
      <div>4. Pick the <b style="color: #e6edf3;">cost/quality sweet spot</b></div>
      <div>5. Re-run quarterly as models evolve</div>
    </div>
  </div>
  <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
    <div class="font-bold mb-2" style="color: #d29922;">When to Use</div>
    <div style="color: #8b949e;">Production deployment decisions, high-stakes use cases, compliance environments — anywhere you need data-backed model selection, not vibes</div>
  </div>
</div>

<div class="space-y-3">
  <div class="p-3 rounded-lg" style="background: #161b22;">
    <div class="font-bold mb-2" style="color: #e6edf3;">Sample Eval Results</div>
    <div class="space-y-1 font-mono" style="color: #8b949e;">
      <div class="flex justify-between p-1 rounded" style="background: #0d1117;">
        <span>Opus 4.7</span>
        <span style="color: #a78bfa;">97.2% · $4.80 · 3.1s</span>
      </div>
      <div class="flex justify-between p-1 rounded" style="background: #0d1117;">
        <span>GPT-5.5</span>
        <span style="color: #3fb950;">95.8% · $1.20 · 1.4s</span>
      </div>
      <div class="flex justify-between p-1 rounded" style="background: #0d1117;">
        <span>Haiku 4.5</span>
        <span style="color: #58a6ff;">91.4% · $0.08 · 0.3s</span>
      </div>
    </div>
  </div>
  <div class="p-3 rounded-lg border" style="background: #161b22; border-color: #238636;">
    <div class="font-bold" style="color: #3fb950;">💡 Insight</div>
    <div class="mt-1" style="color: #8b949e;">Public benchmarks ≠ your workload. A 1.4% accuracy gap might justify <b style="color: #e6edf3;">4x cost savings</b> — or might be unacceptable. Only YOUR data tells you.</div>
  </div>
</div>

</div>

---

# 🧠 Mental Model Shift

<div class="mt-4" style="background: #0d1117;">

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold mb-3" style="color: #3fb950;">✅ Move Toward</div>
<div class="space-y-2">
  <div class="p-2 rounded" style="background: #161b22; border-left: 3px solid #3fb950; color: #e6edf3;">Task-based model routing</div>
  <div class="p-2 rounded" style="background: #161b22; border-left: 3px solid #3fb950; color: #e6edf3;">Cost-quality tradeoff analysis</div>
  <div class="p-2 rounded" style="background: #161b22; border-left: 3px solid #3fb950; color: #e6edf3;">Benchmark on YOUR data, not leaderboards</div>
  <div class="p-2 rounded" style="background: #161b22; border-left: 3px solid #3fb950; color: #e6edf3;">Fallback chains: fast first, escalate</div>
  <div class="p-2 rounded" style="background: #161b22; border-left: 3px solid #3fb950; color: #e6edf3;">Quarterly re-evaluation cycle</div>
</div>
</div>

<div>
<div class="font-bold mb-3" style="color: #f85149;">🛑 Move Away From</div>
<div class="space-y-2">
  <div class="p-2 rounded" style="background: #161b22; border-left: 3px solid #f85149; color: #e6edf3;">One premium model for everything</div>
  <div class="p-2 rounded" style="background: #161b22; border-left: 3px solid #f85149; color: #e6edf3;">Choosing based on hype or brand</div>
  <div class="p-2 rounded" style="background: #161b22; border-left: 3px solid #f85149; color: #e6edf3;">Ignoring cost until the bill arrives</div>
  <div class="p-2 rounded" style="background: #161b22; border-left: 3px solid #f85149; color: #e6edf3;">Trusting public benchmarks blindly</div>
  <div class="p-2 rounded" style="background: #161b22; border-left: 3px solid #f85149; color: #e6edf3;">"Set and forget" model selection</div>
</div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg border text-sm" style="background: #161b22; border-color: #30363d; color: #8b949e;">
  <b style="color: #3fb950;">Example:</b> Before: $2,400/month using Opus for everything. After: Routing 80% to Haiku/Sonnet, Opus only for architecture and security → $480/month, same quality where it matters.
</div>

</div>

---

# What You Can Do Today

<div class="mt-3 grid grid-cols-3 gap-3 text-xs" style="background: #0d1117;">

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-2" style="color: #3fb950;">⏱️ This Afternoon</div>
  <div class="space-y-2" style="color: #8b949e;">
    <div>• Audit current model usage: what tasks → which models?</div>
    <div>• Identify top 3 cost-heavy tasks</div>
    <div>• Check: could a cheaper model handle them?</div>
  </div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-2" style="color: #58a6ff;">🔧 This Week</div>
  <div class="space-y-2" style="color: #8b949e;">
    <div>• Build 50-example eval set from your workload</div>
    <div>• Benchmark 2-3 models on cost, quality, latency</div>
    <div>• Implement one fallback chain for highest-volume task</div>
  </div>
</div>

<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold mb-2" style="color: #d29922;">🚀 This Month</div>
  <div class="space-y-2" style="color: #8b949e;">
    <div>• Deploy model routing across team</div>
    <div>• Set up cost monitoring per task category</div>
    <div>• Schedule quarterly model review</div>
  </div>
</div>

</div>

---

# References & Resources

<div class="mt-3 grid grid-cols-2 gap-3 text-xs" style="background: #0d1117;">

<div>
<div class="font-bold mb-2" style="color: #e6edf3;">📊 Benchmarks & Comparisons</div>
<div class="space-y-2">
  <div class="p-2 rounded" style="background: #161b22;">
    📖 <a href="https://lmcouncil.ai/benchmarks" style="color: #58a6ff;">LM Council Benchmarks (March 2026)</a>
  </div>
  <div class="p-2 rounded" style="background: #161b22;">
    📖 <a href="https://www.jenova.ai/en/resources/gpt-vs-claude-vs-gemini" style="color: #58a6ff;">GPT vs Claude vs Gemini Comparison</a>
  </div>
  <div class="p-2 rounded" style="background: #161b22;">
    📖 <a href="https://www.digitalapplied.com/blog/gpt-5-4-vs-opus-4-6-vs-gemini-3-1-pro-best-frontier-model" style="color: #58a6ff;">GPT-5.4 vs Opus 4.6 vs Gemini 3.1 Pro</a>
  </div>
</div>
</div>

<div>
<div class="font-bold mb-2" style="color: #e6edf3;">🔗 Related Talks</div>
<div class="space-y-2">
  <div class="p-2 rounded" style="background: #161b22;">
    <span class="font-medium" style="color: #58a6ff;">Agent Teams</span>
    <span style="color: #8b949e;"> — Per-agent model selection in Squad</span>
  </div>
  <div class="p-2 rounded" style="background: #161b22;">
    <span class="font-medium" style="color: #58a6ff;">Enterprise Patterns</span>
    <span style="color: #8b949e;"> — Org-wide model governance</span>
  </div>
  <div class="p-2 rounded" style="background: #161b22;">
    <span class="font-medium" style="color: #58a6ff;">Context Engineering</span>
    <span style="color: #8b949e;"> — Maximizing model effectiveness</span>
  </div>
</div>
</div>

</div>

---
layout: end
---

<div class="h-full flex flex-col items-center justify-center" style="background: #0d1117;">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
  <h1 class="!text-4xl !font-bold mt-6" style="color: #e6edf3;">
    Model Selection
  </h1>
  <p class="mt-4" style="color: #8b949e;">Right Model, Right Task</p>
  <div class="mt-8 text-sm" style="color: #484f58;">CopilotTraining · Tech Talk</div>
</div>

<style>
/* GitHub Primer Brand — Dark Theme Override */
:root {
  --slidev-theme-background: #0d1117;
  --slidev-theme-foreground: #e6edf3;
}

.slidev-layout {
  background: #0d1117 !important;
  color: #e6edf3 !important;
}

.slidev-page {
  background: #0d1117 !important;
}

/* Typography */
h1, h2, h3 {
  color: #e6edf3 !important;
}

p, li, span {
  color: #e6edf3;
}

a {
  color: #58a6ff !important;
}

/* Tables — GitHub Primer dark style */
table {
  border-collapse: collapse;
  width: 100%;
}

th {
  color: #e6edf3 !important;
  background: #161b22 !important;
  border-bottom: 2px solid #30363d !important;
  padding: 0.5rem 0.75rem;
}

td {
  color: #8b949e !important;
  background: #0d1117 !important;
  border-bottom: 1px solid #21262d !important;
  padding: 0.5rem 0.75rem;
}

tr:hover td {
  background: #161b22 !important;
}

/* Code blocks */
code {
  background: #161b22 !important;
  color: #e6edf3 !important;
  border-radius: 6px;
}

/* Slide number overlay (override global white bg) */
.slidev-page::after {
  background: #161b22 !important;
  color: #8b949e !important;
  border: 1px solid #30363d;
}

/* Primer accent colors for emphasis */
strong, b {
  color: #e6edf3;
}
</style>
