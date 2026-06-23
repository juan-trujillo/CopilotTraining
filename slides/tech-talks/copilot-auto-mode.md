---
theme: default
colorSchema: dark
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Auto Mode: Smarter Tokens, Smarter Routing
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot Auto Mode - Smarter Tokens, Smarter Routing
module: tech-talks/copilot-auto-mode
mdc: true
status: active
updated: 2026-06-23
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: #0d1117;">
  <div class="flex items-center gap-2 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
    <span class="text-sm font-medium tracking-wide uppercase" style="color: #8b949e;">GitHub Copilot</span>
  </div>
  <h1 class="!text-6xl !font-bold !leading-tight text-center max-w-4xl" style="color: #e6edf3;">
    Copilot Auto Mode
  </h1>
  <p class="mt-6 text-xl text-center max-w-2xl" style="color: #8b949e;">
    Smarter Tokens, Smarter Routing
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
      AI Practitioners
    </div>
  </div>
</div>

---

# The Question

<div class="h-full flex items-center justify-center" style="background: #0d1117;">
<div class="max-w-4xl">
<div class="text-6xl text-center mb-8">🤔</div>
<div class="text-3xl font-bold text-center mb-6 leading-snug" style="color: #e6edf3;">
"What is Auto actually doing under the hood — and when should I let it pick the model instead of pinning one myself?"
</div>
<div class="mt-8 flex gap-6 justify-center text-sm">
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #3fb950;">🧠 Routing</div>
<div class="text-xs mt-1" style="color: #8b949e;">HyDRA + model health</div>
</div>
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #58a6ff;">⚙️ Harness</div>
<div class="text-xs mt-1" style="color: #8b949e;">Prompt caching + tool search</div>
</div>
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #d29922;">💰 Credits</div>
<div class="text-xs mt-1" style="color: #8b949e;">Six habits that compound</div>
</div>
</div>
</div>
</div>

---
layout: center
---

# 📖 Table of Contents

<div class="grid grid-cols-2 gap-4 mt-6 max-w-5xl mx-auto">
  <div @click="$nav.go(7)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🎯</div>
    <div class="font-semibold" style="color: #e6edf3;">The Shift &amp; When to Use Auto</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Mental model + decision rubric</div>
  </div>

  <div @click="$nav.go(9)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">⚙️</div>
    <div class="font-semibold" style="color: #e6edf3;">Harness Efficiency</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Prompt caching &amp; on-demand tool search</div>
  </div>

  <div @click="$nav.go(13)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🧭</div>
    <div class="font-semibold" style="color: #e6edf3;">Smart Routing</div>
    <div class="text-xs mt-1" style="color: #8b949e;">HyDRA, model health, cache-aware boundaries</div>
  </div>

  <div @click="$nav.go(19)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">💡</div>
    <div class="font-semibold" style="color: #e6edf3;">Practical Habits</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Six habits to stretch credits</div>
  </div>

  <div @click="$nav.go(22)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">✅</div>
    <div class="font-semibold" style="color: #e6edf3;">What You Can Do Today</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Concrete next steps</div>
  </div>

  <div @click="$nav.go(23)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">📖</div>
    <div class="font-semibold" style="color: #e6edf3;">References</div>
    <div class="text-xs mt-1" style="color: #8b949e;">GitHub Blog, Docs, VS Code, HyDRA paper</div>
  </div>
</div>

---

# The Problem

<div class="grid grid-cols-2 gap-4 mt-4 text-xs" style="background: #0d1117;">
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="font-bold mb-2" style="color: #f85149;">🔁 Agentic Loops Repeat Tokens</div>
<div style="color: #8b949e;">Plan → edit → test → debug carries the same system prompt, repo context, tool schemas, and history every turn. Most of that payload is identical to the turn before — and the model pays to "read" it again.</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="font-bold mb-2" style="color: #f85149;">🧠 One Model ≠ Right for Every Task</div>
<div style="color: #8b949e;">A quick explanation, a focused edit, and a 15-file refactor have wildly different reasoning needs — but you pay premium-model rates for every one of them when you pin a single model.</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #d29922;">
<div class="font-bold mb-2" style="color: #d29922;">🤷 Manual Picking Doesn't Scale</div>
<div style="color: #8b949e;">No human can re-evaluate "which model is best, right now, for this turn?" hundreds of times a day across a team. The result: over-pay or under-deliver.</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #d29922;">
<div class="font-bold mb-2" style="color: #d29922;">💥 Switching Mid-Session Breaks Cache</div>
<div style="color: #8b949e;">Flipping models or tool settings invalidates the prompt prefix cache — the "optimization" can cost <i>more</i> than the original waste.</div>
</div>
</div>
<div class="mt-4 p-3 rounded-xl border text-center text-sm" style="background: #161b22; border-color: #f85149;">
<div class="font-bold" style="color: #e6edf3;">You don't need a better model. You need a smarter system around the model.</div>
</div>

---

# The Solution: Two Coordinated Levers

<div class="grid grid-cols-2 gap-5 mt-6 text-sm" style="background: #0d1117;">

<div class="p-5 rounded-lg border" style="background: #161b22; border-color: #58a6ff;">
<div class="text-2xl mb-2">⚙️</div>
<div class="text-lg font-bold mb-2" style="color: #58a6ff;">Harness Efficiency</div>
<div class="space-y-2" style="color: #e6edf3;">
<div>• <b>Prompt caching</b> reuses model state for repeated prompt prefixes</div>
<div>• <b>Tool search</b> loads tool definitions on demand, not upfront</div>
<div>• Result: each turn carries less repeat freight</div>
</div>
</div>

<div class="p-5 rounded-lg border" style="background: #161b22; border-color: #3fb950;">
<div class="text-2xl mb-2">🧭</div>
<div class="text-lg font-bold mb-2" style="color: #3fb950;">Smart Routing (Auto)</div>
<div class="space-y-2" style="color: #e6edf3;">
<div>• <b>HyDRA</b> learned router scores task fit per turn</div>
<div>• <b>Real-time model health</b> avoids degraded models</div>
<div>• Routes <i>up</i> when reasoning helps, stays efficient when it doesn't</div>
</div>
</div>

</div>

<div class="mt-5 p-3 rounded-lg text-center text-sm" style="background: #161b22; border-left: 4px solid #238636;">
<span style="color: #e6edf3;">Together: <b>more of each session goes toward the task itself</b> — not toward re-ingesting the same prefix or paying premium rates for trivial turns.</span>
</div>

---
layout: center
---

# 🧠 The Shift

<div class="max-w-4xl mx-auto mt-4">

<div class="text-2xl text-center font-bold mb-6" style="color: #e6edf3;">
Stop choosing models. Choose a <span style="color: #3fb950;">strategy</span>, and let Auto choose models.
</div>

<div class="grid grid-cols-2 gap-4 text-sm">
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="text-xs uppercase tracking-wide mb-1" style="color: #8b949e;">From</div>
<div style="color: #e6edf3;">"Pin the strongest model so I never under-deliver"</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #3fb950;">
<div class="text-xs uppercase tracking-wide mb-1" style="color: #8b949e;">To</div>
<div style="color: #e6edf3;">"Let Auto route per turn; override only at known-hard boundaries"</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="text-xs uppercase tracking-wide mb-1" style="color: #8b949e;">From</div>
<div style="color: #e6edf3;">"Switch models when it feels slow or dumb"</div>
</div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #3fb950;">
<div class="text-xs uppercase tracking-wide mb-1" style="color: #8b949e;">To</div>
<div style="color: #e6edf3;">"Keep the session stable so the prefix cache compounds"</div>
</div>
</div>

</div>

---

# When to Use Auto

<div class="text-xs mt-4" style="background: #0d1117;">

<table class="w-full">
<thead>
<tr>
<th class="text-left">Scenario</th>
<th class="text-left">Use Auto?</th>
<th class="text-left">Why</th>
</tr>
</thead>
<tbody>
<tr><td>Day-to-day chat, edits, explanations</td><td>✅ Yes</td><td>Auto's sweet spot — cache + routing both pay off</td></tr>
<tr><td>Long agentic coding-agent session</td><td>✅ Yes</td><td>Harness benefits compound across many turns</td></tr>
<tr><td>Multilingual codebases / prompts</td><td>✅ Yes</td><td>Routing parity proven across CJK / European / Other</td></tr>
<tr><td>Known-hard reasoning (architecture, security review)</td><td>⚠️ Override</td><td>Pin a reasoning-grade model for the <i>whole</i> session — don't flip mid-way</td></tr>
<tr><td>Compliance / reproducibility (same model end-to-end)</td><td>⚠️ Override</td><td>Pin for audit trail; document the choice</td></tr>
<tr><td>Free / Student plan</td><td>✅ Forced</td><td>Auto is the only option going forward</td></tr>
<tr><td>Org wants standardized behavior</td><td>✅ Admin-enforced</td><td>New controls let orgs set Auto as default or only option</td></tr>
</tbody>
</table>

</div>

<div class="mt-4 p-3 rounded-lg text-xs text-center" style="background: #161b22; border-left: 3px solid #238636; color: #8b949e;">
Heuristic: <b style="color: #e6edf3;">override Auto for the <i>whole</i> session</b>, never mid-conversation.
</div>

---
layout: section
---

<div class="h-full flex flex-col items-center justify-center" style="background: #0d1117;">
  <div class="text-7xl mb-6">⚙️</div>
  <h1 class="!text-5xl !font-bold" style="color: #e6edf3;">Harness Efficiency</h1>
  <p class="mt-4 text-lg" style="color: #8b949e;">Less repeat freight per turn</p>
</div>

---

# Prompt Caching

<div class="grid grid-cols-2 gap-5 mt-4 text-sm" style="background: #0d1117;">

<div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #58a6ff;">
<div class="text-xs uppercase tracking-wide mb-1" style="color: #8b949e;">What it is</div>
<div style="color: #e6edf3;">The harness marks <b>cache-control breakpoints</b> in the prompt. The provider reuses the computed state for the repeated prefix on the next turn — no recompute.</div>
</div>

<div class="mt-3 p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #3fb950;">
<div class="text-xs uppercase tracking-wide mb-1" style="color: #8b949e;">Why it pays off</div>
<div style="color: #e6edf3;">The <b>repeating prefix</b> in an agentic loop — system prompt, instructions, project context, history — gets larger every turn. Caching turns "O(N) per turn" into "O(Δ) per turn."</div>
</div>
</div>

<div class="p-4 rounded-lg" style="background: #161b22; border: 1px solid #30363d; font-family: monospace; font-size: 0.7rem; color: #e6edf3;">
<div style="color: #8b949e;">// Per turn payload, conceptual</div>
<br/>
<div><span style="color: #f85149;">[ system prompt    ]</span>  ← <span style="color: #3fb950;">cached</span></div>
<div><span style="color: #f85149;">[ repo context     ]</span>  ← <span style="color: #3fb950;">cached</span></div>
<div><span style="color: #f85149;">[ instructions     ]</span>  ← <span style="color: #3fb950;">cached</span></div>
<div><span style="color: #d29922;">[ turn 1 ... N-1  ]</span>  ← <span style="color: #3fb950;">cached</span></div>
<div><span style="color: #58a6ff;">[ turn N (new)    ]</span>  ← <span style="color: #d29922;">computed</span></div>
<br/>
<div style="color: #8b949e;">Only the delta is "new work" for the model.</div>
</div>

</div>

<div class="mt-3 text-xs text-center" style="color: #8b949e;">
Source: <a href="https://aka.ms/vscode/blog/token-efficiency">VS Code — Token Efficiency Deep Dive</a>
</div>

---

# Tool Search (Deferred Tool Loading)

<div class="grid grid-cols-2 gap-5 mt-4 text-sm" style="background: #0d1117;">

<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="font-bold mb-2" style="color: #f85149;">❌ Before</div>
<div style="color: #e6edf3;">Every tool definition (MCP servers, terminal, file ops, workspace search, product actions) shipped <b>upfront on every turn</b>.</div>
<div class="mt-2 text-xs" style="color: #8b949e;">A "40 MCP servers enabled" workspace pays for 40 schemas every single request — even when only one is relevant.</div>
</div>

<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #3fb950;">
<div class="font-bold mb-2" style="color: #3fb950;">✨ With Tool Search</div>
<div style="color: #e6edf3;">The model <b>searches and loads tool definitions on demand</b> from a broad catalog — the full schemas don't ride in context unless they're needed.</div>
<div class="mt-2 text-xs" style="color: #8b949e;">Keep the available toolset broad; pay tokens only for the tools actually relevant to this turn.</div>
</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-xs">
<div class="p-3 rounded-lg text-center" style="background: #161b22; border: 1px solid #30363d; color: #e6edf3;">
<div class="text-xl mb-1">🧰</div>
<b>MCP scales</b><br/>
<span style="color: #8b949e;">Add servers without inflating every turn</span>
</div>
<div class="p-3 rounded-lg text-center" style="background: #161b22; border: 1px solid #30363d; color: #e6edf3;">
<div class="text-xl mb-1">🎯</div>
<b>Relevance, not volume</b><br/>
<span style="color: #8b949e;">Model sees the tools it needs, when it needs them</span>
</div>
<div class="p-3 rounded-lg text-center" style="background: #161b22; border: 1px solid #30363d; color: #e6edf3;">
<div class="text-xl mb-1">💰</div>
<b>Fixed-cost reduction</b><br/>
<span style="color: #8b949e;">Removes baseline tool-schema tax</span>
</div>
</div>

---

# Why This Matters in Agentic Loops

<div class="mt-4 text-sm" style="background: #0d1117;">

<div class="p-4 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
<div class="font-bold mb-3 text-center" style="color: #e6edf3;">A 30-turn coding-agent session, conceptual cost shape</div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div class="p-3 rounded-lg" style="background: #0d1117; border-left: 4px solid #f85149;">
<div class="font-bold mb-2" style="color: #f85149;">Without caching + tool search</div>
<div style="color: #8b949e;">Every turn re-sends the full prefix + every tool schema. Per-turn token cost <b>grows with history</b> and stays high.</div>
<div class="mt-2 font-mono" style="color: #e6edf3;">cost(turn N) ≈ prefix + tools + history(N) + new</div>
</div>

<div class="p-3 rounded-lg" style="background: #0d1117; border-left: 4px solid #3fb950;">
<div class="font-bold mb-2" style="color: #3fb950;">With caching + tool search</div>
<div style="color: #8b949e;">Cached prefix + on-demand tools. Per-turn token cost <b>tracks just the delta</b> of new work.</div>
<div class="mt-2 font-mono" style="color: #e6edf3;">cost(turn N) ≈ new + Δhistory + relevant_tools</div>
</div>
</div>
</div>

<div class="mt-4 p-3 rounded-lg text-center" style="background: #161b22; border-left: 4px solid #d29922; color: #e6edf3;">
The longer the session, the bigger the win — which is exactly the workload pattern of agentic coding.
</div>

</div>

---
layout: section
---

<div class="h-full flex flex-col items-center justify-center" style="background: #0d1117;">
  <div class="text-7xl mb-6">🧭</div>
  <h1 class="!text-5xl !font-bold" style="color: #e6edf3;">Smart Routing</h1>
  <p class="mt-4 text-lg" style="color: #8b949e;">Auto picks the model that fits — per turn, in context</p>
</div>

---

# How Auto Chooses a Model

<div class="text-sm mt-4" style="background: #0d1117;">

<div class="text-center mb-4" style="color: #e6edf3;">
Auto combines <b>two signals</b> on every routable turn:
</div>

<div class="grid grid-cols-2 gap-5">

<div class="p-5 rounded-lg border" style="background: #161b22; border-color: #58a6ff;">
<div class="text-2xl mb-2">❤️</div>
<div class="font-bold mb-2" style="color: #58a6ff;">Real-Time Model Health</div>
<div class="text-xs" style="color: #e6edf3;">
A dynamic engine tracks per-model:
<ul class="mt-2 list-disc list-inside" style="color: #8b949e;">
<li>Availability &amp; utilization</li>
<li>Latency / speed</li>
<li>Error rate</li>
<li>Cost</li>
</ul>
<div class="mt-2">A model can be <i>capable</i> for the task but still wrong if it's degraded right now.</div>
</div>
</div>

<div class="p-5 rounded-lg border" style="background: #161b22; border-color: #3fb950;">
<div class="text-2xl mb-2">🧠</div>
<div class="font-bold mb-2" style="color: #3fb950;">Task-Aware Routing (HyDRA)</div>
<div class="text-xs" style="color: #e6edf3;">
A learned router that considers:
<ul class="mt-2 list-disc list-inside" style="color: #8b949e;">
<li>Reasoning depth required</li>
<li>Code complexity</li>
<li>Debugging difficulty</li>
<li>Tool orchestration needs</li>
</ul>
<div class="mt-2">Identifies models that meet the quality bar, then picks the best fit among them.</div>
</div>
</div>

</div>

<div class="mt-4 p-2 text-xs text-center rounded" style="background: #0d1117; border-left: 3px solid #238636; color: #8b949e;">
First-turn intent + healthy candidates → routing decision. Stays put until a natural cache reset.
</div>

</div>

---

# HyDRA in One Slide

<div class="grid grid-cols-2 gap-5 mt-4 text-sm" style="background: #0d1117;">

<div>
<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #3fb950;">
<div class="font-bold mb-2" style="color: #3fb950;">Trained on Divergence, Not Difficulty</div>
<div class="text-xs" style="color: #e6edf3;">
For each training query, responses from a <b>less capable</b> and a <b>more capable</b> model are quality-scored.
<div class="mt-2">The router learns <i>when</i> the stronger model adds value — not whether the task is subjectively "hard."</div>
</div>
</div>

<div class="mt-3 p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #58a6ff;">
<div class="font-bold mb-2" style="color: #58a6ff;">Context-Aware</div>
<div class="text-xs" style="color: #e6edf3;">
For multi-turn sessions, HyDRA looks at:
<ul class="mt-1 list-disc list-inside" style="color: #8b949e;">
<li>Original user intent</li>
<li>Recent assistant responses</li>
<li>Conversation metadata</li>
</ul>
</div>
</div>
</div>

<div class="p-4 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
<div class="font-bold mb-2 text-center" style="color: #e6edf3;">The Routing Frontier</div>
<div class="text-xs text-center" style="color: #8b949e;">
quality ↑ vs. cost ↓ — three operating points
</div>
<div class="mt-3 space-y-2 text-xs">
<div class="p-2 rounded" style="background: #0d1117; border-left: 3px solid #d29922;">
<b style="color: #d29922;">Peak</b> — exceeds Sonnet baseline at <b style="color: #e6edf3;">12.9% savings</b>
</div>
<div class="p-2 rounded" style="background: #0d1117; border-left: 3px solid #58a6ff;">
<b style="color: #58a6ff;">Conservative</b> — ties OpenRouter Auto (70.8% SWE-bench) at <b style="color: #e6edf3;">3.3× the savings</b>
</div>
<div class="p-2 rounded" style="background: #0d1117; border-left: 3px solid #3fb950;">
<b style="color: #3fb950;">Aggressive</b> — balances quality for <b style="color: #e6edf3;">72.5% savings</b>; outperforms both Azure Foundry modes
</div>
</div>
</div>

</div>

<div class="mt-3 text-xs text-center" style="color: #8b949e;">
Source: <a href="https://github.blog/ai-and-ml/github-copilot/getting-more-from-each-token-how-copilot-improves-context-handling-and-model-routing/">GitHub Blog</a> · <a href="https://arxiv.org/pdf/2605.17106">HyDRA paper</a>
</div>

---

# Cache-Aware Routing

<div class="mt-4 text-sm" style="background: #0d1117;">

<div class="p-4 rounded-lg mb-4" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="font-bold mb-1" style="color: #f85149;">The trap</div>
<div style="color: #e6edf3;">Switching models on every turn <i>sounds</i> flexible — but it <b>breaks the prompt prefix cache</b>. The recompute cost can dwarf the routing benefit.</div>
</div>

<div class="p-4 rounded-lg mb-4" style="background: #161b22; border-left: 4px solid #3fb950;">
<div class="font-bold mb-1" style="color: #3fb950;">Auto's answer</div>
<div style="color: #e6edf3;">Route only at <b>natural cache boundaries</b>:</div>
</div>

<div class="grid grid-cols-2 gap-4 text-xs">
<div class="p-3 rounded-lg text-center" style="background: #161b22; border: 1px solid #30363d; color: #e6edf3;">
<div class="text-2xl mb-1">🆕</div>
<b>First turn of a session</b><br/>
<span style="color: #8b949e;">No cache to lose</span>
</div>
<div class="p-3 rounded-lg text-center" style="background: #161b22; border: 1px solid #30363d; color: #e6edf3;">
<div class="text-2xl mb-1">📦</div>
<b>After compaction</b><br/>
<span style="color: #8b949e;">Prefix resets when older turns are summarized</span>
</div>
</div>

<div class="mt-4 p-3 rounded-lg text-center text-xs" style="background: #161b22; border-left: 3px solid #d29922; color: #e6edf3;">
Between those points, the selected model <b>stays in place</b> so the cache can keep building.
</div>

</div>

---

# Multilingual Routing

<div class="text-sm mt-4" style="background: #0d1117;">

<div class="p-4 rounded-lg mb-3" style="background: #161b22; border-left: 4px solid #58a6ff;">
<div style="color: #e6edf3;">Trained on conversations across <b>16 language families</b> — CJK, European, and others.</div>
</div>

<div class="grid grid-cols-4 gap-3 mt-4 text-xs">
<div class="p-3 rounded-lg text-center" style="background: #161b22; border: 1px solid #30363d;">
<div class="text-2xl mb-1" style="color: #3fb950;">✅</div>
<b style="color: #e6edf3;">English</b>
<div style="color: #8b949e;">baseline</div>
</div>
<div class="p-3 rounded-lg text-center" style="background: #161b22; border: 1px solid #30363d;">
<div class="text-2xl mb-1" style="color: #3fb950;">≤ 4 pts</div>
<b style="color: #e6edf3;">European</b>
<div style="color: #8b949e;">within baseline</div>
</div>
<div class="p-3 rounded-lg text-center" style="background: #161b22; border: 1px solid #30363d;">
<div class="text-2xl mb-1" style="color: #3fb950;">≤ 4 pts</div>
<b style="color: #e6edf3;">CJK</b>
<div style="color: #8b949e;">within baseline</div>
</div>
<div class="p-3 rounded-lg text-center" style="background: #161b22; border: 1px solid #30363d;">
<div class="text-2xl mb-1" style="color: #3fb950;">≤ 4 pts</div>
<b style="color: #e6edf3;">Other scripts</b>
<div style="color: #8b949e;">within baseline</div>
</div>
</div>

<div class="mt-4 p-3 rounded-lg text-center text-xs" style="background: #161b22; border-left: 3px solid #238636; color: #e6edf3;">
<b>No statistically significant quality gap</b> across language groups — evaluated on a held-out set sampled from 19-language production VS Code chat telemetry.
</div>

</div>

---
layout: section
---

<div class="h-full flex flex-col items-center justify-center" style="background: #0d1117;">
  <div class="text-7xl mb-6">💡</div>
  <h1 class="!text-5xl !font-bold" style="color: #e6edf3;">Practical Habits</h1>
  <p class="mt-4 text-lg" style="color: #8b949e;">Six habits that compound with Auto</p>
</div>

---

# Six Habits to Stretch Credits

<div class="grid grid-cols-2 gap-3 mt-4 text-xs" style="background: #0d1117;">

<div class="p-3 rounded-lg" style="background: #161b22; border-left: 4px solid #3fb950;">
<div class="font-bold mb-1" style="color: #3fb950;">1. Start with Auto</div>
<div style="color: #8b949e;">Strong default. Routes based on what you're actually trying to do, every time.</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border-left: 4px solid #3fb950;">
<div class="font-bold mb-1" style="color: #3fb950;">2. Keep context focused</div>
<div style="color: #8b949e;">New session per task. Compact long ones. <b>@mention</b> files you already know are relevant.</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border-left: 4px solid #58a6ff;">
<div class="font-bold mb-1" style="color: #58a6ff;">3. Don't change models/settings mid-session</div>
<div style="color: #8b949e;">Switches break the prefix cache. Set up the session once; keep related work together.</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border-left: 4px solid #58a6ff;">
<div class="font-bold mb-1" style="color: #58a6ff;">4. Plan before parallelizing</div>
<div style="color: #8b949e;">Parallel agents burn credits in parallel. Have Copilot plan first, then split deliberately.</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border-left: 4px solid #d29922;">
<div class="font-bold mb-1" style="color: #d29922;">5. Use only the tools you need</div>
<div style="color: #8b949e;">Broad MCP surfaces still add baseline. Use <a href="https://aka.ms/agent-finder/changelog">Agent Finder</a> to curate per task.</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border-left: 4px solid #d29922;">
<div class="font-bold mb-1" style="color: #d29922;">6. Check your usage</div>
<div style="color: #8b949e;">AI Usage page surfaces feature/model breakdown. In Copilot CLI, watch session-level usage live.</div>
</div>

</div>

<div class="mt-3 text-xs text-center" style="color: #8b949e;">
Source: <a href="https://docs.github.com/en/copilot/how-tos/manage-and-track-spending/manage-company-spending">How to get more out of your AI credits</a>
</div>

---

# What's Expanding

<div class="text-sm mt-4" style="background: #0d1117;">

<div class="mb-3 p-3 rounded-lg" style="background: #161b22; border-left: 4px solid #3fb950;">
<b style="color: #3fb950;">Live today:</b> <span style="color: #e6edf3;">Auto with task intent in VS Code, github.com, and mobile.</span>
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-4 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
<div class="text-2xl mb-2">🛠️</div>
<b style="color: #e6edf3;">More surfaces</b>
<div class="mt-1" style="color: #8b949e;">Auto with task intent coming to <b>Copilot CLI</b>, <b>GitHub App</b>, and additional IDEs.</div>
</div>

<div class="p-4 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
<div class="text-2xl mb-2">🎓</div>
<b style="color: #e6edf3;">Free / Student plans</b>
<div class="mt-1" style="color: #8b949e;">Simplified to use <b>Auto as the only model selection</b> option.</div>
</div>

<div class="p-4 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
<div class="text-2xl mb-2">🏛️</div>
<b style="color: #e6edf3;">Admin controls</b>
<div class="mt-1" style="color: #8b949e;">Organizations can <b>set Auto as default</b> or <b>enforce Auto as the only option</b>.</div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg text-center text-xs" style="background: #161b22; border-left: 3px solid #d29922; color: #e6edf3;">
Strategic read: <b>Auto is becoming the path of least resistance</b> across the entire Copilot surface. Build habits that compound with it.
</div>

</div>

---
layout: center
---

# 🧠 Mental Model Shift

<div class="grid grid-cols-3 gap-4 mt-6 max-w-6xl mx-auto text-xs">

<div class="p-4 rounded-lg" style="background: #161b22; border-top: 3px solid #3fb950;">
<div class="font-bold mb-3" style="color: #3fb950;">✅ Move Toward</div>
<ul class="space-y-2" style="color: #e6edf3;">
<li>• <b>Auto as default</b>, especially on first turn</li>
<li>• <b>Stable session settings</b> — pick once, then build cache</li>
<li>• <b>Compaction at task boundaries</b> (also a re-route opportunity)</li>
<li>• <b>Curated tool surfaces</b> via Agent Finder</li>
</ul>
</div>

<div class="p-4 rounded-lg" style="background: #161b22; border-top: 3px solid #d29922;">
<div class="font-bold mb-3" style="color: #d29922;">⚠️ Move Away From</div>
<ul class="space-y-2" style="color: #e6edf3;">
<li>• Switching models mid-conversation to "try" something different</li>
<li>• Pinning the most expensive model "to be safe"</li>
<li>• One mega-session for unrelated tasks</li>
<li>• Manual reasoning-depth re-tuning per turn</li>
</ul>
</div>

<div class="p-4 rounded-lg" style="background: #161b22; border-top: 3px solid #f85149;">
<div class="font-bold mb-3" style="color: #f85149;">🛑 Move Against</div>
<ul class="space-y-2" style="color: #e6edf3;">
<li>• Enabling every MCP server "just in case"</li>
<li>• Assuming Auto = cheap — it routes <i>up</i> when the task demands it</li>
<li>• Bypassing Auto out of habit on tasks where it would win</li>
<li>• Optimizing tokens by hand and breaking the cache</li>
</ul>
</div>

</div>

<div class="mt-6 text-center text-sm" style="color: #8b949e;">
The whole point: <span style="color: #e6edf3;"><b>use the model that fits the work</b></span> — not the biggest, not the cheapest.
</div>

---

# ✅ What You Can Do Today

<div class="text-sm mt-4 space-y-3" style="background: #0d1117;">

<div class="p-3 rounded-lg" style="background: #161b22; border-left: 4px solid #3fb950;">
<b style="color: #3fb950;">⏱️ This afternoon</b>
<ul class="mt-1 text-xs list-disc list-inside" style="color: #e6edf3;">
<li>Switch your default to <b>Auto</b> for the next 5 sessions; note where it routes you and where it surprises you.</li>
<li>Open the <b>AI Usage page</b> and identify your single most expensive pattern this week.</li>
</ul>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border-left: 4px solid #58a6ff;">
<b style="color: #58a6ff;">📅 This week</b>
<ul class="mt-1 text-xs list-disc list-inside" style="color: #e6edf3;">
<li>Stop mid-session model switching. Pick once, finish the task, then start fresh.</li>
<li>Compact long sessions at <b>task boundaries</b>, not arbitrary points — that's a free re-route opportunity.</li>
<li>Run <b>Agent Finder</b> over your enabled MCP tools and disable anything not in active use for your current task type.</li>
</ul>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border-left: 4px solid #d29922;">
<b style="color: #d29922;">🎯 This month</b>
<ul class="mt-1 text-xs list-disc list-inside" style="color: #e6edf3;">
<li>For known-hard tasks (deep refactor, security review), <b>pin a reasoning-grade model for the whole session</b> — don't flip in the middle.</li>
<li>If you admin a Copilot org: evaluate the new admin controls (Auto as default / enforce-only).</li>
<li>Read the <a href="https://aka.ms/vscode/blog/token-efficiency">VS Code token-efficiency deep dive</a> to see the harness changes in detail.</li>
</ul>
</div>

</div>

---

# 📖 References

<div class="text-sm mt-4 space-y-2" style="background: #0d1117;">

<div class="p-3 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
<b style="color: #e6edf3;">🔗 Primary source</b>
<div class="text-xs mt-1">
<a href="https://github.blog/ai-and-ml/github-copilot/getting-more-from-each-token-how-copilot-improves-context-handling-and-model-routing/">github.blog — Getting more from each token: how Copilot improves context handling and model routing</a>
</div>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
<b style="color: #e6edf3;">📚 Official docs</b>
<ul class="text-xs mt-1 list-disc list-inside space-y-1">
<li><a href="https://docs.github.com/en/copilot/concepts/auto-model-selection">docs.github.com — Auto model selection (concepts)</a></li>
<li><a href="https://docs.github.com/en/copilot/how-tos/manage-and-track-spending/manage-company-spending">docs.github.com — How to get more out of your AI credits</a></li>
</ul>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
<b style="color: #e6edf3;">🔬 Technical deep dives</b>
<ul class="text-xs mt-1 list-disc list-inside space-y-1">
<li><a href="https://aka.ms/vscode/blog/token-efficiency">VS Code — Token efficiency: prompt caching, cache-control breakpoints, provider-specific tool search</a></li>
<li><a href="https://arxiv.org/pdf/2605.17106">arXiv — HyDRA routing paper (PDF)</a></li>
</ul>
</div>

<div class="p-3 rounded-lg" style="background: #161b22; border: 1px solid #30363d;">
<b style="color: #e6edf3;">🛠️ Companion tools</b>
<ul class="text-xs mt-1 list-disc list-inside space-y-1">
<li><a href="https://aka.ms/agent-finder/changelog">Agent Finder in GitHub Copilot — changelog</a></li>
<li><a href="https://github.com/orgs/community/discussions/categories/copilot-conversations">GitHub Community — Copilot discussions</a></li>
</ul>
</div>

</div>

---
layout: end
---

<div class="h-full flex flex-col items-center justify-center" style="background: #0d1117;">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
  <h1 class="!text-4xl !font-bold mt-6" style="color: #e6edf3;">
    Copilot Auto Mode
  </h1>
  <p class="mt-4" style="color: #8b949e;">Smarter Tokens, Smarter Routing</p>
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

h1, h2, h3 {
  color: #e6edf3 !important;
}

p, li, span {
  color: #e6edf3;
}

a {
  color: #58a6ff !important;
}

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

code {
  background: #161b22 !important;
  color: #e6edf3 !important;
  border-radius: 6px;
}

.slidev-page::after {
  background: #161b22 !important;
  color: #8b949e !important;
  border: 1px solid #30363d;
}

strong, b {
  color: #e6edf3;
}
</style>
