---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agentic Skill Lifecycle
  From reusable prompt to governed platform capability
drawings:
  persist: false
transition: slide-left
title: Agentic Skill Lifecycle
module: tech-talks/agentic-skill-lifecycle
mdc: true
status: active
updated: 2026-09-18
---

<style>
  :root {
    --bg: #0d1117;
    --surface: #161b22;
    --surface-2: #21262d;
    --border: #30363d;
    --fg: #e6edf3;
    --muted: #8b949e;
    --blue: #58a6ff;
    --green: #3fb950;
    --amber: #d29922;
    --red: #f85149;
    --purple: #bc8cff;
  }
  .slidev-layout {
    background: var(--bg) !important;
    color: var(--fg) !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important;
  }
  .slidev-layout h1, .slidev-layout h2, .slidev-layout h3 {
    color: var(--fg) !important;
  }
  .slidev-layout code {
    background: #1c2128;
    border: 1px solid var(--border);
    border-radius: 5px;
    color: #79c0ff;
    padding: 0.1em 0.35em;
  }
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1rem;
  }
  .card-blue { background: #0c2d4d; border-color: #1f6feb; }
  .card-green { background: #0d2818; border-color: #238636; }
  .card-amber { background: #2b2108; border-color: #9e6a03; }
  .card-red { background: #2d1117; border-color: #da3633; }
  .card-purple { background: #211638; border-color: #8957e5; }
  .badge {
    display: inline-block;
    border-radius: 999px;
    padding: 0.2rem 0.7rem;
    font-size: 0.72rem;
    font-weight: 700;
  }
  .muted { color: var(--muted); }
  .source {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: #6e7781;
    font-size: 0.62rem;
  }
  .arrow {
    color: var(--muted);
    font-size: 1.6rem;
    font-weight: 700;
  }
</style>

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <div class="absolute w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
       style="background: radial-gradient(circle, #3fb950 0%, #58a6ff 45%, transparent 70%);"></div>
  <div class="relative z-10 mb-6 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
       style="background: linear-gradient(135deg, #238636, #1f6feb); box-shadow: 0 0 45px #23863655;">
    ♻️
  </div>
  <h1 class="relative z-10 !text-6xl !font-extrabold !tracking-tight !mb-3">
    Agentic Skill Lifecycle
  </h1>
  <p class="relative z-10 text-xl" style="color: #c9d1d9; text-shadow: 0 1px 12px #000;">
    From reusable prompt to governed platform capability
  </p>
  <div class="relative z-10 mt-7 flex gap-3">
    <span class="badge" style="background: #0d2818; color: #3fb950;">20 minutes</span>
    <span class="badge" style="background: #0c2d4d; color: #58a6ff;">Platform Engineering</span>
    <span class="badge" style="background: #211638; color: #bc8cff;">Skills + Agentic Workflows</span>
  </div>
</div>

---

# The Central Question

<div class="mt-9 card card-blue max-w-4xl mx-auto p-7">
  <div class="text-4xl mb-4">💭</div>
  <div class="text-3xl font-bold leading-snug" style="color: #e6edf3;">
    How do we make agent capabilities reusable across every execution surface
    <span style="color: #58a6ff;">without losing control?</span>
  </div>
</div>

<div class="grid grid-cols-4 gap-3 mt-7 text-sm">
  <div class="card text-center">
    <div class="text-3xl mb-2">💻</div>
    <div class="font-bold">Developer</div>
    <div class="text-xs muted mt-1">Local client</div>
  </div>
  <div class="card text-center">
    <div class="text-3xl mb-2">☁️</div>
    <div class="font-bold">Cloud agent</div>
    <div class="text-xs muted mt-1">Repository context</div>
  </div>
  <div class="card text-center">
    <div class="text-3xl mb-2">⚙️</div>
    <div class="font-bold">Workflow runner</div>
    <div class="text-xs muted mt-1">Ephemeral runtime</div>
  </div>
  <div class="card text-center">
    <div class="text-3xl mb-2">🛡️</div>
    <div class="font-bold">Reviewer</div>
    <div class="text-xs muted mt-1">Evidence + approval</div>
  </div>
</div>

<div class="mt-5 text-lg font-semibold">
  A capability working on one laptop is <span style="color: #d29922;">not yet a platform capability.</span>
</div>

---

# Pick the Primitive — Then Pick the Scope

<div class="grid grid-cols-[1.2fr_auto_1fr] gap-5 mt-5 items-center">
  <div class="card">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold" style="background: #1f6feb;">1</div>
      <div class="text-xl font-bold">What kind of thing is it?</div>
    </div>
    <div class="grid grid-cols-2 gap-2 text-xs text-left">
      <div class="p-2 rounded-lg" style="background: #21262d;"><b style="color:#58a6ff;">Instruction</b><br><span class="muted">Repository truth</span></div>
      <div class="p-2 rounded-lg" style="background: #21262d;"><b style="color:#3fb950;">Skill</b><br><span class="muted">Reusable procedure</span></div>
      <div class="p-2 rounded-lg" style="background: #21262d;"><b style="color:#bc8cff;">Agent</b><br><span class="muted">Role + tools</span></div>
      <div class="p-2 rounded-lg" style="background: #21262d;"><b style="color:#d29922;">Workflow</b><br><span class="muted">Event + controls</span></div>
      <div class="p-2 rounded-lg" style="background: #21262d;"><b style="color:#79c0ff;">MCP / tool</b><br><span class="muted">External capability</span></div>
      <div class="p-2 rounded-lg" style="background: #21262d;"><b style="color:#f85149;">Ruleset</b><br><span class="muted">Enforcement</span></div>
    </div>
  </div>

  <div class="arrow">→</div>

  <div class="card">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold" style="background: #238636;">2</div>
      <div class="text-xl font-bold">Who needs it?</div>
    </div>
    <div class="space-y-2 text-sm text-left">
      <div class="p-2.5 rounded-lg border" style="border-color:#30363d;"><b>User</b><span class="float-right muted">personal lifetime</span></div>
      <div class="p-2.5 rounded-lg border" style="border-color:#30363d;"><b>Repository</b><span class="float-right muted">project lifetime</span></div>
      <div class="p-2.5 rounded-lg border" style="border-color:#30363d;"><b>Workflow run</b><span class="float-right muted">ephemeral lifetime</span></div>
      <div class="p-2.5 rounded-lg border" style="border-color:#30363d;"><b>Org / enterprise</b><span class="float-right muted">where supported</span></div>
    </div>
  </div>
</div>

<div class="mt-5 card card-amber text-sm">
  <b style="color:#d29922;">Context is not enforcement.</b>
  Instructions and skills guide behavior; permissions, tests, rulesets, and humans enforce boundaries.
</div>

<div class="source">Source: Agent Primitives Hub concepts; GitHub Agent Skills documentation</div>

---

# Architecture: Context → Execution → Governance

<div class="mt-5 space-y-3">
  <div class="card card-purple">
    <div class="flex items-center gap-4">
      <div class="text-3xl">🧠</div>
      <div class="w-32 text-left">
        <div class="font-bold" style="color:#bc8cff;">CONTEXT</div>
        <div class="text-xs muted">What the agent knows</div>
      </div>
      <div class="flex-1 grid grid-cols-3 gap-3 text-sm">
        <div class="p-2 rounded-lg" style="background:#161b22;">Repository instructions</div>
        <div class="p-2 rounded-lg" style="background:#161b22;">Relevant skills</div>
        <div class="p-2 rounded-lg" style="background:#161b22;">Agent role + tools</div>
      </div>
    </div>
  </div>

  <div class="text-center arrow">↓</div>

  <div class="card card-blue">
    <div class="flex items-center gap-4">
      <div class="text-3xl">⚡</div>
      <div class="w-32 text-left">
        <div class="font-bold" style="color:#58a6ff;">EXECUTION</div>
        <div class="text-xs muted">Where reasoning runs</div>
      </div>
      <div class="flex-1 grid grid-cols-3 gap-3 text-sm">
        <div class="p-2 rounded-lg" style="background:#161b22;">Local client</div>
        <div class="p-2 rounded-lg" style="background:#161b22;">Cloud agent</div>
        <div class="p-2 rounded-lg" style="background:#161b22;">Agentic Workflow</div>
      </div>
    </div>
  </div>

  <div class="text-center arrow">↓ proposed output</div>

  <div class="card card-green">
    <div class="flex items-center gap-4">
      <div class="text-3xl">🛡️</div>
      <div class="w-32 text-left">
        <div class="font-bold" style="color:#3fb950;">GOVERNANCE</div>
        <div class="text-xs muted">What may change</div>
      </div>
      <div class="flex-1 grid grid-cols-5 gap-2 text-xs">
        <div class="p-2 rounded-lg" style="background:#161b22;">Tests</div>
        <div class="p-2 rounded-lg" style="background:#161b22;">Permissions</div>
        <div class="p-2 rounded-lg" style="background:#161b22;">Safe outputs</div>
        <div class="p-2 rounded-lg" style="background:#161b22;">Rulesets</div>
        <div class="p-2 rounded-lg" style="background:#161b22;">Human review</div>
      </div>
    </div>
  </div>
</div>

---

# The Skill Lifecycle Loop

<div class="grid grid-cols-4 gap-3 mt-5 text-sm">
  <div class="card card-blue">
    <div class="text-2xl mb-1">✍️</div><b>1. Author</b>
    <div class="text-xs muted mt-1">Canonical source</div>
  </div>
  <div class="card card-blue">
    <div class="text-2xl mb-1">🧪</div><b>2. Validate</b>
    <div class="text-xs muted mt-1">Structure + tests</div>
  </div>
  <div class="card card-green">
    <div class="text-2xl mb-1">🏷️</div><b>3. Release</b>
    <div class="text-xs muted mt-1">Immutable identity</div>
  </div>
  <div class="card card-green">
    <div class="text-2xl mb-1">🔎</div><b>4. Approve</b>
    <div class="text-xs muted mt-1">Preview + review</div>
  </div>
  <div class="card card-purple">
    <div class="text-2xl mb-1">🚚</div><b>5. Deliver</b>
    <div class="text-xs muted mt-1">Minimum lane</div>
  </div>
  <div class="card card-purple">
    <div class="text-2xl mb-1">▶️</div><b>6. Execute</b>
    <div class="text-xs muted mt-1">Bounded runtime</div>
  </div>
  <div class="card card-amber">
    <div class="text-2xl mb-1">📡</div><b>7. Observe</b>
    <div class="text-xs muted mt-1">Evidence + drift</div>
  </div>
  <div class="card card-red">
    <div class="text-2xl mb-1">♻️</div><b>8. Evolve</b>
    <div class="text-xs muted mt-1">Upgrade · rollback · retire</div>
  </div>
</div>

<div class="mt-6 flex items-center justify-center gap-4">
  <div class="card text-left max-w-3xl">
    <div class="font-bold mb-2" style="color:#e6edf3;">Every transition leaves evidence</div>
    <div class="flex flex-wrap gap-2 text-xs">
      <span class="badge" style="background:#21262d;color:#8b949e;">source review</span>
      <span class="badge" style="background:#21262d;color:#8b949e;">validation result</span>
      <span class="badge" style="background:#21262d;color:#8b949e;">tag / SHA</span>
      <span class="badge" style="background:#21262d;color:#8b949e;">provenance</span>
      <span class="badge" style="background:#21262d;color:#8b949e;">consumer PR</span>
      <span class="badge" style="background:#21262d;color:#8b949e;">runtime output</span>
    </div>
  </div>
</div>

<div class="mt-4 text-lg font-semibold">Release is a checkpoint — <span style="color:#d29922;">not the finish line.</span></div>

---

# Author and Validate in the Canonical Hub

<div class="grid grid-cols-[1fr_1.25fr] gap-5 mt-5">
  <div class="card text-left">
    <div class="text-sm font-bold mb-3" style="color:#58a6ff;">REFERENCE REPOSITORY</div>
    <pre class="text-xs leading-6"><code>skills/
├── generate-design/
│   ├── SKILL.md
│   └── references/
├── implement-feature/
│   └── SKILL.md
└── review-code/
    └── SKILL.md</code></pre>
    <div class="mt-3 text-xs muted">
      <b style="color:#e6edf3;">SKILL.md</b> is the portable procedure.
      References, scripts, and assets load only when needed.
    </div>
  </div>

  <div class="space-y-3">
    <div class="card card-blue text-left">
      <div class="font-bold" style="color:#58a6ff;">Discovery contract</div>
      <div class="text-sm mt-1">The description tells clients <b>when</b> to load the skill. Vague descriptions create missed or incorrect activation.</div>
    </div>
    <div class="grid grid-cols-2 gap-3 text-sm">
      <div class="card">
        <div class="text-xl mb-1">📐</div>
        <b>Structure</b>
        <div class="text-xs muted mt-1">Name, metadata, paths</div>
      </div>
      <div class="card">
        <div class="text-xl mb-1">🌐</div>
        <b>Neutrality</b>
        <div class="text-xs muted mt-1">Proof-specific portability check</div>
      </div>
      <div class="card">
        <div class="text-xl mb-1">🧪</div>
        <b>Unit tests</b>
        <div class="text-xs muted mt-1">Deterministic helpers</div>
      </div>
      <div class="card">
        <div class="text-xl mb-1">📦</div>
        <b>Publish dry run</b>
        <div class="text-xs muted mt-1">Release readiness</div>
      </div>
    </div>
  </div>
</div>

<div class="mt-5 card card-green text-sm">
  <b style="color:#3fb950;">Source of truth:</b> change the hub → release a version → promote the artifact.
  Do not maintain consumer forks by hand.
</div>

<div class="source">Source: cajetzer/agent-primitives-hub README, skills/, scripts/, tests/, validate-skills.yml</div>

---

# Release Identity: What Exactly Is Pinned?

<div class="mt-7 flex items-stretch justify-center gap-3">
  <div class="card card-green w-48">
    <div class="text-2xl">🏷️</div>
    <div class="font-bold mt-2" style="color:#3fb950;">Release tag</div>
    <div class="text-xs muted mt-1">Human compatibility<br><code>v1.2.0</code></div>
  </div>
  <div class="arrow self-center">→</div>
  <div class="card card-blue w-48">
    <div class="text-2xl">🧬</div>
    <div class="font-bold mt-2" style="color:#58a6ff;">Commit SHA</div>
    <div class="text-xs muted mt-1">Exact hub state<br><code>40 chars</code></div>
  </div>
  <div class="arrow self-center">→</div>
  <div class="card card-purple w-48">
    <div class="text-2xl">🌳</div>
    <div class="font-bold mt-2" style="color:#bc8cff;">Skill tree SHA</div>
    <div class="text-xs muted mt-1">Exact directory<br><code>skills/review-code</code></div>
  </div>
  <div class="arrow self-center">→</div>
  <div class="card card-amber w-48">
    <div class="text-2xl">🔐</div>
    <div class="font-bold mt-2" style="color:#d29922;">Content SHA-256</div>
    <div class="text-xs muted mt-1">Copied-file digest<br>tool-defined</div>
  </div>
</div>

<div class="grid grid-cols-2 gap-4 mt-7 text-sm text-left">
  <div class="card">
    <div class="font-bold mb-2">Version communicates intent</div>
    <div class="muted">Patch = correction · Minor = compatible capability · Major = incompatible contract</div>
  </div>
  <div class="card card-red">
    <div class="font-bold mb-2" style="color:#f85149;">Never move a published tag</div>
    <div class="muted">Rollback selects an older approved release. It does not rewrite release identity.</div>
  </div>
</div>

---

# Three Delivery Lanes — One Approved Skill

<div class="grid grid-cols-3 gap-4 mt-5 text-left">
  <div class="card card-blue">
    <div class="flex items-center justify-between">
      <div class="text-3xl">💻</div>
      <span class="badge" style="background:#0d1117;color:#58a6ff;">persistent</span>
    </div>
    <div class="text-xl font-bold mt-3" style="color:#58a6ff;">User-installed</div>
    <div class="text-sm mt-3 space-y-2">
      <div>✓ One developer + client</div>
      <div>✓ Personal productivity</div>
      <div>✓ Early evaluation</div>
      <div class="muted">✗ Not visible to remote runners</div>
    </div>
  </div>

  <div class="card card-purple">
    <div class="flex items-center justify-between">
      <div class="text-3xl">⚙️</div>
      <span class="badge" style="background:#0d1117;color:#bc8cff;">ephemeral</span>
    </div>
    <div class="text-xl font-bold mt-3" style="color:#bc8cff;">Workflow runtime</div>
    <div class="text-sm mt-3 space-y-2">
      <div>✓ One compiled workflow run</div>
      <div>✓ Full commit-SHA pin</div>
      <div>✓ No repository vendoring</div>
      <div class="muted">✗ Not repository context</div>
    </div>
  </div>

  <div class="card card-green">
    <div class="flex items-center justify-between">
      <div class="text-3xl">📁</div>
      <span class="badge" style="background:#0d1117;color:#3fb950;">versioned</span>
    </div>
    <div class="text-xl font-bold mt-3" style="color:#3fb950;">Repository-installed</div>
    <div class="text-sm mt-3 space-y-2">
      <div>✓ Team + cloud agents</div>
      <div>✓ Reviewed with code</div>
      <div>✓ Repository provenance</div>
      <div class="muted">✗ Must manage drift</div>
    </div>
  </div>
</div>

<div class="mt-6 card text-center">
  <div class="text-lg font-bold">Choose the <span style="color:#d29922;">minimum lane</span> required by the consumer.</div>
  <div class="text-sm muted mt-1">More copies create more upgrade work and more opportunities for drift.</div>
</div>

<div class="source">Source: GitHub Agent Skills documentation; Agent Primitives Hub delivery model</div>

---

# Practical Sequence: Promote a Skill Safely

<div class="mt-4 flex items-center justify-between text-xs">
  <div class="card card-blue w-28"><b>1. Change</b><br><span class="muted">canonical source</span></div>
  <div class="arrow">→</div>
  <div class="card card-blue w-28"><b>2. Validate</b><br><span class="muted">tests + review</span></div>
  <div class="arrow">→</div>
  <div class="card card-green w-28"><b>3. Publish</b><br><span class="muted">immutable tag</span></div>
  <div class="arrow">→</div>
  <div class="card card-green w-28"><b>4. Preview</b><br><span class="muted">inspect trust</span></div>
  <div class="arrow">→</div>
  <div class="card card-purple w-28"><b>5. Pin</b><br><span class="muted">tag or SHA</span></div>
  <div class="arrow">→</div>
  <div class="card card-amber w-28"><b>6. Review</b><br><span class="muted">consumer change</span></div>
</div>

<div class="grid grid-cols-2 gap-5 mt-7 text-left">
  <div class="card">
    <div class="font-bold mb-3" style="color:#58a6ff;">Release</div>
    <pre class="text-xs leading-7"><code>gh skill publish --dry-run
gh skill publish --tag v1.1.0</code></pre>
  </div>
  <div class="card">
    <div class="font-bold mb-3" style="color:#3fb950;">Trust + install</div>
    <pre class="text-xs leading-7"><code>gh skill preview OWNER/HUB review-code@v1.1.0
gh skill install OWNER/HUB review-code --pin v1.1.0</code></pre>
  </div>
</div>

<div class="mt-5 card card-amber text-sm">
  <b style="color:#d29922;">gh skill preview feature:</b> verify command behavior, supported clients, and destination paths with your installed GitHub CLI before production rollout.
</div>

---

# Repository Synchronization: Automate Preparation, Not Approval

<div class="grid grid-cols-5 gap-2 mt-5 text-xs items-start">
  <div class="text-center">
    <div class="card card-blue min-h-24">
      <div class="text-2xl">👤</div><b>Operator</b>
      <div class="muted mt-1">target + ref + skills</div>
    </div>
    <div class="mt-3" style="color:#58a6ff;">1. dispatch</div>
  </div>
  <div class="text-center">
    <div class="card card-purple min-h-24">
      <div class="text-2xl">⚙️</div><b>Sync workflow</b>
      <div class="muted mt-1">allowlist + app token</div>
    </div>
    <div class="mt-3" style="color:#bc8cff;">2. authorize</div>
  </div>
  <div class="text-center">
    <div class="card card-green min-h-24">
      <div class="text-2xl">🏷️</div><b>Pinned hub</b>
      <div class="muted mt-1">verify commit + trees</div>
    </div>
    <div class="mt-3" style="color:#3fb950;">3. resolve</div>
  </div>
  <div class="text-center">
    <div class="card card-amber min-h-24">
      <div class="text-2xl">📁</div><b>Consumer</b>
      <div class="muted mt-1">drift check + copy</div>
    </div>
    <div class="mt-3" style="color:#d29922;">4. propose</div>
  </div>
  <div class="text-center">
    <div class="card card-red min-h-24">
      <div class="text-2xl">🛡️</div><b>Reviewer</b>
      <div class="muted mt-1">PR + ruleset</div>
    </div>
    <div class="mt-3" style="color:#f85149;">5. decide</div>
  </div>
</div>

<div class="mt-4 text-3xl tracking-[0.75rem]" style="color:#6e7781;">→ → → →</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">
  <div class="card card-green">
    <b style="color:#3fb950;">Short-lived identity</b>
    <div class="muted mt-1">GitHub App token scoped to the consumer</div>
  </div>
  <div class="card card-amber">
    <b style="color:#d29922;">Explicit drift repair</b>
    <div class="muted mt-1">Unexpected edits fail by default</div>
  </div>
  <div class="card card-blue">
    <b style="color:#58a6ff;">Reviewable output</b>
    <div class="muted mt-1">Branch + pull request; no merge or deploy</div>
  </div>
</div>

<div class="mt-4 text-xs muted">
  <code>.agent-skills-lock.json</code> is proof-specific platform inventory — not a built-in <code>gh skill</code> lock file.
</div>

<div class="source">Source: agent-primitives-hub/.github/workflows/sync-skills.yml and scripts/sync_skills.py</div>

---

# Agentic Workflow Runtime: Reasoning Inside Guardrails

<div class="flex items-center justify-center gap-4 mt-4">
  <div class="card card-blue w-64">
    <div class="text-sm font-bold" style="color:#58a6ff;">HUMAN-READABLE SOURCE</div>
    <div class="text-2xl mt-2">📄 <code>workflow.md</code></div>
  </div>
  <div class="text-center">
    <div class="arrow">→</div>
    <div class="text-xs muted"><code>gh aw compile</code></div>
  </div>
  <div class="card card-green w-64">
    <div class="text-sm font-bold" style="color:#3fb950;">GENERATED IMPLEMENTATION</div>
    <div class="text-2xl mt-2">🔒 <code>workflow.lock.yml</code></div>
  </div>
</div>

<div class="grid grid-cols-2 gap-5 mt-6 text-left">
  <div class="card">
    <div class="text-lg font-bold mb-3" style="color:#58a6ff;">⚙️ Deterministic rail</div>
    <div class="grid grid-cols-2 gap-2 text-sm">
      <div class="p-2 rounded" style="background:#21262d;">Checkout</div>
      <div class="p-2 rounded" style="background:#21262d;">Install</div>
      <div class="p-2 rounded" style="background:#21262d;">Build</div>
      <div class="p-2 rounded" style="background:#21262d;">Test</div>
      <div class="p-2 rounded" style="background:#21262d;">Validate</div>
      <div class="p-2 rounded" style="background:#21262d;">Artifacts</div>
    </div>
  </div>
  <div class="card card-purple">
    <div class="text-lg font-bold mb-3" style="color:#bc8cff;">🧠 Agentic rail</div>
    <div class="grid grid-cols-2 gap-2 text-sm">
      <div class="p-2 rounded" style="background:#161b22;">Investigate</div>
      <div class="p-2 rounded" style="background:#161b22;">Classify</div>
      <div class="p-2 rounded" style="background:#161b22;">Design</div>
      <div class="p-2 rounded" style="background:#161b22;">Explain</div>
      <div class="p-2 rounded" style="background:#161b22;">Bounded edit</div>
      <div class="p-2 rounded" style="background:#161b22;">Summarize</div>
    </div>
  </div>
</div>

<div class="mt-5 flex justify-center gap-3 text-xs">
  <span class="badge" style="background:#0d2818;color:#3fb950;">read-only reasoning</span>
  <span class="badge" style="background:#2b2108;color:#d29922;">minimum permissions</span>
  <span class="badge" style="background:#0c2d4d;color:#58a6ff;">network allowlist</span>
  <span class="badge" style="background:#211638;color:#bc8cff;">declared safe outputs</span>
</div>

<div class="mt-4 text-lg font-bold">A skill supplies procedure context. <span style="color:#f85149;">It does not grant authority.</span></div>

<div class="source">Source: GitHub Agentic Workflows docs, compilation process, safe outputs</div>

---

# Failure Modes → Recovery Patterns

<div class="grid grid-cols-2 gap-3 mt-4 text-sm text-left">
  <div class="card card-red flex gap-3">
    <div class="text-2xl">🏷️</div>
    <div><b style="color:#f85149;">Moving branch or tag</b><br><span class="muted">Same label, different behavior</span></div>
  </div>
  <div class="card card-green flex gap-3">
    <div class="text-2xl">🔒</div>
    <div><b style="color:#3fb950;">Immutable release</b><br><span class="muted">Protect tags; publish or select another version</span></div>
  </div>

  <div class="card card-red flex gap-3">
    <div class="text-2xl">✏️</div>
    <div><b style="color:#f85149;">Editing installed copies</b><br><span class="muted">Drift and unclear ownership</span></div>
  </div>
  <div class="card card-green flex gap-3">
    <div class="text-2xl">🚨</div>
    <div><b style="color:#3fb950;">Fail visibly</b><br><span class="muted">Fix the hub or explicitly repair drift</span></div>
  </div>

  <div class="card card-red flex gap-3">
    <div class="text-2xl">💻</div>
    <div><b style="color:#f85149;">Local-only proof</b><br><span class="muted">False confidence across surfaces</span></div>
  </div>
  <div class="card card-green flex gap-3">
    <div class="text-2xl">🧪</div>
    <div><b style="color:#3fb950;">Surface tests</b><br><span class="muted">Same approved identity in local, cloud, and Actions</span></div>
  </div>

  <div class="card card-red flex gap-3">
    <div class="text-2xl">🔑</div>
    <div><b style="color:#f85149;">Broad write token</b><br><span class="muted">Large prompt-injection blast radius</span></div>
  </div>
  <div class="card card-green flex gap-3">
    <div class="text-2xl">🛡️</div>
    <div><b style="color:#3fb950;">Bounded authority</b><br><span class="muted">Read-only agent + safe outputs + app token</span></div>
  </div>

  <div class="card card-red flex gap-3">
    <div class="text-2xl">👥</div>
    <div><b style="color:#f85149;">CODEOWNERS alone</b><br><span class="muted">Reviewer requested, merge still bypassable</span></div>
  </div>
  <div class="card card-green flex gap-3">
    <div class="text-2xl">✅</div>
    <div><b style="color:#3fb950;">Enforcing ruleset</b><br><span class="muted">Require code-owner approval before merge</span></div>
  </div>
</div>

<div class="mt-4 text-xl font-bold">Drift is information. <span style="color:#d29922;">Do not silently erase it.</span></div>

---

# Use Cases and Adoption Path

<div class="grid grid-cols-4 gap-3 mt-4 text-sm">
  <div class="card card-blue">
    <div class="text-3xl">💻</div>
    <div class="font-bold mt-2">Personal productivity</div>
    <div class="text-xs muted mt-2">User-installed pinned skill</div>
  </div>
  <div class="card card-green">
    <div class="text-3xl">☁️</div>
    <div class="font-bold mt-2">Team + cloud consistency</div>
    <div class="text-xs muted mt-2">Repository-installed skill</div>
  </div>
  <div class="card card-purple">
    <div class="text-3xl">⚙️</div>
    <div class="font-bold mt-2">Workflow-only automation</div>
    <div class="text-xs muted mt-2">Runtime-pinned skill</div>
  </div>
  <div class="card card-amber">
    <div class="text-3xl">🏢</div>
    <div class="font-bold mt-2">Platform-scale rollout</div>
    <div class="text-xs muted mt-2">Hub + synchronization PRs</div>
  </div>
</div>

<div class="card mt-5 text-left">
  <div class="text-sm font-bold mb-3" style="color:#e6edf3;">START SMALL</div>
  <div class="grid grid-cols-5 gap-2 text-xs">
    <div class="p-3 rounded-lg text-center" style="background:#0c2d4d;"><b>1</b><br>One repeated procedure</div>
    <div class="p-3 rounded-lg text-center" style="background:#0c2d4d;"><b>2</b><br>One canonical source</div>
    <div class="p-3 rounded-lg text-center" style="background:#0d2818;"><b>3</b><br>One immutable release</div>
    <div class="p-3 rounded-lg text-center" style="background:#211638;"><b>4</b><br>One required delivery lane</div>
    <div class="p-3 rounded-lg text-center" style="background:#2b2108;"><b>5</b><br>Evidence + rollback path</div>
  </div>
</div>

<div class="mt-6 text-2xl font-bold leading-snug">
  Source it. Test it. Version it. Distribute it.<br>
  <span style="color:#3fb950;">Observe it. Govern it.</span>
</div>

<div class="mt-5 text-sm muted">Reference implementation: github.com/cajetzer/agent-primitives-hub</div>

---
layout: center
class: text-center
---

# GitHub CLI Skill Reference

<div class="mt-8 card card-blue max-w-3xl mx-auto py-7">
  <div class="text-4xl">📚</div>
  <div class="mt-4 text-sm font-bold" style="color:#58a6ff;">OFFICIAL COMMAND REFERENCE</div>
  <a
    href="https://cli.github.com/manual/gh_skill"
    target="_blank"
    class="inline-block mt-3 text-2xl font-bold underline"
    style="color:#e6edf3;"
  >cli.github.com/manual/gh_skill</a>
  <div class="mt-5 flex flex-wrap justify-center gap-2 text-sm">
    <code class="badge" style="background:#0d1117;color:#79c0ff;">gh skill preview</code>
    <code class="badge" style="background:#0d1117;color:#79c0ff;">gh skill install</code>
    <code class="badge" style="background:#0d1117;color:#79c0ff;">gh skill publish</code>
    <code class="badge" style="background:#0d1117;color:#79c0ff;">gh skill update</code>
  </div>
</div>

<div class="mt-6 text-sm muted">The <code>gh skill</code> command family is in preview and subject to change.</div>
