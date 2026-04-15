---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Customization Best Practices
  Writing Great Instructions, Prompts, Skills & Agents
drawings:
  persist: false
transition: slide-left
title: Customization Best Practices
module: tech-talks/customization-best-practices
mdc: true
status: active
updated: 2026-04-15
---

<style>
  :root {
    --primer-fg: #e6edf3;
    --primer-fg-muted: #8b949e;
    --primer-fg-subtle: #6e7781;
    --primer-bg: #0d1117;
    --primer-bg-subtle: #161b22;
    --primer-bg-inset: #010409;
    --primer-border: #30363d;
    --primer-blue: #58a6ff;
    --primer-blue-bright: #79c0ff;
    --primer-green: #3fb950;
    --primer-purple: #bc8cff;
    --primer-red: #f85149;
    --primer-orange: #d29922;
  }
  .slidev-layout {
    background: var(--primer-bg) !important;
    color: var(--primer-fg) !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif !important;
  }
  .slidev-layout h1, .slidev-layout h2, .slidev-layout h3 {
    color: var(--primer-fg) !important;
  }
  .slidev-layout code {
    background: #1c2128;
    border: 1px solid var(--primer-border);
    border-radius: 6px;
    padding: 0.15em 0.4em;
    font-size: 0.85em;
    font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
    color: var(--primer-blue-bright);
  }
  .slidev-layout pre code {
    border: none;
    padding: 0;
  }
  .primer-card {
    background: var(--primer-bg-subtle);
    border: 1px solid var(--primer-border);
    border-radius: 12px;
    padding: 1.25rem;
  }
  .primer-accent {
    background: linear-gradient(135deg, #0c2d6b40 0%, #161b22 100%);
    border: 1px solid #58a6ff33;
    border-radius: 12px;
    padding: 1.25rem;
  }
  .primer-success {
    background: #0d1f0d;
    border: 1px solid #3fb95033;
    border-radius: 12px;
    padding: 1.25rem;
  }
  .primer-danger {
    background: #1f0d0d;
    border: 1px solid #f8514933;
    border-radius: 12px;
    padding: 1.25rem;
  }
  .primer-badge {
    display: inline-block;
    padding: 0.15em 0.6em;
    border-radius: 2em;
    font-size: 0.75rem;
    font-weight: 600;
  }
  .primer-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
  }
  .primer-table th {
    background: var(--primer-bg-subtle);
    border: 1px solid var(--primer-border);
    padding: 0.5rem 0.75rem;
    text-align: left;
    font-weight: 600;
    color: var(--primer-fg);
  }
  .primer-table td {
    border: 1px solid var(--primer-border);
    padding: 0.5rem 0.75rem;
    color: var(--primer-fg);
  }
</style>

<div class="h-full flex flex-col items-center justify-center">
  <div class="mb-6">
    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#58a6ff] to-[#bc8cff] flex items-center justify-center text-white text-3xl shadow-lg">
      🛠️
    </div>
  </div>
  <h1 class="!text-5xl !font-extrabold !tracking-tight !mb-4" style="color: #e6edf3 !important;">
    Customization Best Practices
  </h1>
  <p class="text-xl mt-2" style="color: #8b949e;">
    Writing Great Instructions, Prompts, Skills & Agents
  </p>
  <div class="mt-6 flex items-center gap-3">
    <span class="primer-badge" style="background: #0c2d6b; color: #58a6ff;">20 min</span>
    <span class="primer-badge" style="background: #21262d; color: #8b949e;">Developers</span>
    <span class="primer-badge" style="background: #2a1543; color: #bc8cff;">Patterns from 2,500+ repos</span>
  </div>
  <div class="mt-8 w-24 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full"></div>
</div>

---

# The Question

<div class="mt-12 flex justify-center">
  <div class="primer-accent max-w-2xl text-center">
    <p class="text-2xl font-bold mb-3" style="color: #58a6ff;">
      "I know Copilot has instructions, prompts, skills, and agents — but how do I write great ones?"
    </p>
    <p class="text-base" style="color: #8b949e;">
      Analysis of 2,500+ repos reveals a clear divide between files that transform AI output and files that get ignored.
    </p>
  </div>
</div>

---

# The Problem: Generic AI → Generic Output

<div class="grid grid-cols-2 gap-5 mt-6">
  <div class="primer-danger">
    <div class="font-bold text-base mb-2" style="color: #f85149;">❌ What most files look like</div>
    <div class="font-mono text-xs p-3 rounded-lg mt-2" style="background: #1c2128; border: 1px solid #f8514933; color: #e6edf3;">
      <div>You are a helpful coding assistant.</div>
      <div>Write clean code. Follow best practices.</div>
      <div>Use TypeScript.</div>
    </div>
    <p class="text-xs mt-2" style="color: #8b949e;">No commands, no style examples, no boundaries — Copilot learns nothing.</p>
  </div>
  <div class="primer-success">
    <div class="font-bold text-base mb-2" style="color: #3fb950;">✅ What top repos do differently</div>
    <ul class="text-sm space-y-1.5" style="color: #e6edf3;">
      <li>🎯 <strong>Specific stack</strong> with versions</li>
      <li>⚡ <strong>Executable commands</strong> with flags</li>
      <li>📐 <strong>Code examples</strong> showing actual style</li>
      <li>🚧 <strong>Three-tier boundaries</strong> (always/ask/never)</li>
      <li>📁 <strong>Project structure</strong> with purposes</li>
      <li>🔄 <strong>Git workflow</strong> conventions</li>
    </ul>
  </div>
</div>

<div class="mt-4 text-center">
  <span class="text-xs" style="color: #6e7781;">Source: Analysis of 2,500+ agents.md files across public repositories — GitHub Blog</span>
</div>

---

# The 4 Primitives: A Progressive Stack

<div class="mt-2">
  <div class="flex flex-col gap-2">
    <div class="flex items-stretch gap-3">
      <div class="w-10 flex flex-col items-center justify-center">
        <div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #58a6ff;">1</div>
        <div class="flex-1 w-0.5 mt-1" style="background: #30363d;"></div>
      </div>
      <div class="flex-1 primer-card !py-2">
        <div class="flex items-center gap-2">
          <span class="font-bold text-sm">Instructions</span>
          <code class="!text-xs">.github/copilot-instructions.md</code>
        </div>
        <p class="text-xs mt-1" style="color: #8b949e;">Always-on coding standards & project context — loaded every request</p>
      </div>
    </div>
    <div class="flex items-stretch gap-3">
      <div class="w-10 flex flex-col items-center justify-center">
        <div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #58a6ff;">2</div>
        <div class="flex-1 w-0.5 mt-1" style="background: #30363d;"></div>
      </div>
      <div class="flex-1 primer-card !py-2">
        <div class="flex items-center gap-2">
          <span class="font-bold text-sm">Prompt Files</span>
          <code class="!text-xs">.github/prompts/*.prompt.md</code>
        </div>
        <p class="text-xs mt-1" style="color: #8b949e;">Reusable task templates invoked via <code>/command</code> — on demand</p>
      </div>
    </div>
    <div class="flex items-stretch gap-3">
      <div class="w-10 flex flex-col items-center justify-center">
        <div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #bc8cff;">3</div>
        <div class="flex-1 w-0.5 mt-1" style="background: #30363d;"></div>
      </div>
      <div class="flex-1 primer-card !py-2">
        <div class="flex items-center gap-2">
          <span class="font-bold text-sm">Skills</span>
          <code class="!text-xs">.github/skills/*/SKILL.md</code>
        </div>
        <p class="text-xs mt-1" style="color: #8b949e;">Portable capability packs with scripts & resources — cross-tool standard</p>
      </div>
    </div>
    <div class="flex items-stretch gap-3">
      <div class="w-10 flex flex-col items-center">
        <div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #bc8cff;">4</div>
      </div>
      <div class="flex-1 primer-card !py-2">
        <div class="flex items-center gap-2">
          <span class="font-bold text-sm">Agents</span>
          <code class="!text-xs">.github/agents/*.agent.md</code>
        </div>
        <p class="text-xs mt-1" style="color: #8b949e;">Specialized AI personas with constrained tools & model preferences</p>
      </div>
    </div>
  </div>
</div>

---

# 🧠 The Shift

<div class="h-full flex flex-col items-center justify-center -mt-8">
  <div class="primer-accent max-w-xl text-center py-8 px-10">
    <p class="text-xs uppercase tracking-widest mb-4 font-semibold" style="color: #58a6ff;">Core Insight</p>
    <p class="text-2xl font-bold" style="color: #e6edf3;">
      From "talking to a generic AI"<br/>
      to <span style="color: #58a6ff;">"configuring a team of specialists<br/>that know your codebase"</span>
    </p>
    <div class="mt-6 w-16 h-0.5 mx-auto" style="background: #58a6ff;"></div>
    <p class="text-sm mt-4" style="color: #8b949e;">
      Your repo <strong>IS</strong> the prompt. The files you commit shape every AI interaction.
    </p>
  </div>
</div>

---

# Instructions: The Foundation

<div class="grid grid-cols-2 gap-4 mt-4">
  <div>
    <p class="text-sm font-bold mb-3" style="color: #58a6ff;">Three Levels</p>
    <table class="primer-table">
      <thead><tr><th>Level</th><th>File</th></tr></thead>
      <tbody>
        <tr><td>Repo-wide</td><td><code>.github/copilot-instructions.md</code></td></tr>
        <tr><td>Path-specific</td><td><code>.github/instructions/*.instructions.md</code></td></tr>
        <tr><td>Agent-level</td><td><code>AGENTS.md</code> (nearest ancestor)</td></tr>
      </tbody>
    </table>
    <p class="text-sm font-bold mt-4 mb-2" style="color: #58a6ff;">The 6 Core Areas</p>
    <div class="text-sm space-y-1" style="color: #e6edf3;">
      <div>1️⃣ <strong>Commands</strong> — with flags: <code>npm test -- --coverage</code></div>
      <div>2️⃣ <strong>Testing</strong> — framework, patterns, location</div>
      <div>3️⃣ <strong>Project structure</strong> — key dirs & purposes</div>
      <div>4️⃣ <strong>Code style</strong> — real examples, not descriptions</div>
      <div>5️⃣ <strong>Git workflow</strong> — branches, commits, PRs</div>
      <div>6️⃣ <strong>Boundaries</strong> — never touch: secrets, vendor</div>
    </div>
  </div>
  <div>
    <p class="text-sm font-bold mb-3" style="color: #3fb950;">✅ Great Example</p>
    <div class="font-mono text-xs p-3 rounded-lg overflow-y-auto" style="background: #1c2128; border: 1px solid #30363d; max-height: 260px; color: #e6edf3; line-height: 1.5;">
      <div style="color: #8b949e;"># Project: FanHub</div>
      <div>&nbsp;</div>
      <div style="color: #8b949e;">## Tech Stack</div>
      <div>React 18, TypeScript 5.3, Vite 5</div>
      <div>Node.js 20, Express 4, PostgreSQL 16</div>
      <div>&nbsp;</div>
      <div style="color: #8b949e;">## Commands</div>
      <div>Build: <span style="color: #79c0ff;">npm run build</span></div>
      <div>Test: <span style="color: #79c0ff;">npm test -- --coverage</span></div>
      <div>Lint: <span style="color: #79c0ff;">npm run lint -- --fix</span></div>
      <div>&nbsp;</div>
      <div style="color: #8b949e;">## Boundaries</div>
      <div>🚫 Never modify vendor/ or node_modules/</div>
      <div>🚫 Never commit .env or secrets</div>
      <div>✅ Always run tests before PR</div>
    </div>
  </div>
</div>

---

# Prompt Files: Reusable Tasks

<div class="grid grid-cols-2 gap-4 mt-4">
  <div>
    <p class="text-sm font-bold mb-3" style="color: #bc8cff;">Anatomy of a Prompt File</p>
    <div class="font-mono text-xs p-3 rounded-lg" style="background: #1c2128; border: 1px solid #30363d; color: #e6edf3; line-height: 1.5;">
      <div style="color: #8b949e;">---</div>
      <div><span style="color: #bc8cff;">mode:</span> agent</div>
      <div><span style="color: #bc8cff;">tools:</span> ['editFiles', 'terminal']</div>
      <div><span style="color: #bc8cff;">description:</span> Generate unit tests</div>
      <div style="color: #8b949e;">---</div>
      <div>&nbsp;</div>
      <div style="color: #8b949e;"># Generate Unit Tests</div>
      <div>For the selected file:</div>
      <div>1. Analyze the public API</div>
      <div>2. Generate tests covering:</div>
      <div>&nbsp;&nbsp;- Happy path</div>
      <div>&nbsp;&nbsp;- Edge cases</div>
      <div>&nbsp;&nbsp;- Error conditions</div>
      <div>3. Run <span style="color: #79c0ff;">npm test</span> to verify</div>
    </div>
  </div>
  <div>
    <p class="text-sm font-bold mb-3" style="color: #3fb950;">Patterns That Work</p>
    <div class="space-y-3">
      <div class="primer-success !py-2 !px-3">
        <div class="text-sm"><strong>Single purpose</strong></div>
        <div class="text-xs" style="color: #8b949e;">One prompt = one task. Not "test + docs + lint"</div>
      </div>
      <div class="primer-success !py-2 !px-3">
        <div class="text-sm"><strong>Specify mode</strong></div>
        <div class="text-xs" style="color: #8b949e;"><code>mode: agent</code> for multi-step, <code>mode: ask</code> for analysis</div>
      </div>
      <div class="primer-success !py-2 !px-3">
        <div class="text-sm"><strong>Declare tools</strong></div>
        <div class="text-xs" style="color: #8b949e;">Only what this task needs, not <code>['*']</code></div>
      </div>
      <div class="primer-success !py-2 !px-3">
        <div class="text-sm"><strong>Include validation</strong></div>
        <div class="text-xs" style="color: #8b949e;">End with a command that verifies: <code>npm test</code></div>
      </div>
    </div>
    <p class="text-sm font-bold mt-3 mb-2" style="color: #f85149;">Anti-Pattern</p>
    <div class="primer-danger !py-2 !px-3">
      <div class="font-mono text-xs" style="color: #e6edf3;">tools: ['*']</div>
      <div class="font-mono text-xs" style="color: #e6edf3;">Help me with whatever I need.</div>
    </div>
  </div>
</div>

---

# Skills: Portable Capabilities

<div class="grid grid-cols-2 gap-4 mt-3">
  <div>
    <p class="text-sm font-bold mb-2" style="color: #bc8cff;">Progressive Loading</p>
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #58a6ff;">1</div>
        <div class="text-sm"><strong>Discovery</strong> — reads name + description only</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #58a6ff;">2</div>
        <div class="text-sm"><strong>Instructions</strong> — loads SKILL.md body when relevant</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #58a6ff;">3</div>
        <div class="text-sm"><strong>Resources</strong> — scripts/templates load on access</div>
      </div>
    </div>
    <p class="text-sm font-bold mt-3 mb-2" style="color: #bc8cff;">Directory Structure</p>
    <div class="font-mono text-xs p-3 rounded-lg" style="background: #1c2128; border: 1px solid #30363d; color: #e6edf3;">
      <div>.github/skills/</div>
      <div>&nbsp;&nbsp;webapp-testing/</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;SKILL.md</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;test-template.js</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;examples/</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;login-test.js</div>
    </div>
    <div class="mt-2 flex items-center gap-2">
      <span class="primer-badge" style="background: #2a1543; color: #bc8cff;">Open Standard</span>
      <span class="text-xs" style="color: #6e7781;">Works across VS Code, CLI, cloud agent</span>
    </div>
  </div>
  <div>
    <p class="text-sm font-bold mb-2" style="color: #3fb950;">Patterns That Work</p>
    <div class="space-y-2">
      <div class="primer-card !py-2 !px-3">
        <div class="text-sm">📝 <strong>Description says when to use it</strong></div>
        <div class="text-xs" style="color: #8b949e;">"Guide for testing web apps with Playwright. Use when asked to create or run browser-based tests."</div>
      </div>
      <div class="primer-card !py-2 !px-3">
        <div class="text-sm">🔗 <strong>Reference resources with links</strong></div>
        <div class="text-xs" style="color: #8b949e;"><code>[test template](./test-template.js)</code> → progressive loading</div>
      </div>
      <div class="primer-card !py-2 !px-3">
        <div class="text-sm">⚡ <strong>Include runnable commands</strong></div>
        <div class="text-xs" style="color: #8b949e;">Skills that validate their own output are more effective</div>
      </div>
      <div class="primer-card !py-2 !px-3">
        <div class="text-sm">🏷️ <strong>Lowercase-hyphenated names</strong></div>
        <div class="text-xs" style="color: #8b949e;"><code>webapp-testing</code> not <code>WebApp Testing</code> — invalid chars fail silently</div>
      </div>
    </div>
    <p class="text-sm font-bold mt-3 mb-1" style="color: #f85149;">Anti-Pattern</p>
    <div class="primer-danger !py-2 !px-3">
      <div class="text-xs" style="color: #e6edf3;">500-line monolithic SKILL.md covering testing, deploy, monitoring, docs. Skills are specialists — split by capability.</div>
    </div>
  </div>
</div>

---

# Agents: Specialized Personas

<div class="grid grid-cols-2 gap-4 mt-3">
  <div>
    <p class="text-sm font-bold mb-2" style="color: #bc8cff;">Example Agent File</p>
    <div class="font-mono text-xs p-3 rounded-lg overflow-y-auto" style="background: #1c2128; border: 1px solid #30363d; max-height: 230px; color: #e6edf3; line-height: 1.5;">
      <div style="color: #8b949e;">---</div>
      <div><span style="color: #bc8cff;">description:</span> Expert technical writer</div>
      <div><span style="color: #bc8cff;">tools:</span> ['editFiles', 'codebase',</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'terminal']</div>
      <div><span style="color: #bc8cff;">model:</span> ['Claude Sonnet 4.5']</div>
      <div><span style="color: #bc8cff;">handoffs:</span></div>
      <div>&nbsp;&nbsp;- <span style="color: #bc8cff;">label:</span> Review Docs</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #bc8cff;">agent:</span> code-reviewer</div>
      <div style="color: #8b949e;">---</div>
      <div>&nbsp;</div>
      <div>You are an expert technical writer.</div>
      <div>&nbsp;</div>
      <div style="color: #8b949e;">## Boundaries</div>
      <div>✅ Always: Write to docs/, run lint</div>
      <div>⚠️ Ask first: Modifying existing docs</div>
      <div>🚫 Never: Edit src/, commit secrets</div>
    </div>
  </div>
  <div>
    <p class="text-sm font-bold mb-2" style="color: #58a6ff;">The Three-Tier Boundary System</p>
    <table class="primer-table text-xs">
      <thead><tr><th>Tier</th><th>Purpose</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td style="color: #3fb950;">✅ Always</td><td>Required</td><td>Run tests before commit</td></tr>
        <tr><td style="color: #d29922;">⚠️ Ask First</td><td>Approval needed</td><td>Schema changes</td></tr>
        <tr><td style="color: #f85149;">🚫 Never</td><td>Hard constraint</td><td>Commit secrets</td></tr>
      </tbody>
    </table>
    <p class="text-sm font-bold mt-3 mb-2" style="color: #58a6ff;">Constrain Tools by Role</p>
    <table class="primer-table text-xs">
      <thead><tr><th>Role</th><th>Tools</th></tr></thead>
      <tbody>
        <tr><td>Planner</td><td><code>search</code>, <code>web/fetch</code></td></tr>
        <tr><td>Implementer</td><td><code>editFiles</code>, <code>terminal</code></td></tr>
        <tr><td>Reviewer</td><td><code>search</code>, <code>usages</code></td></tr>
      </tbody>
    </table>
    <p class="text-sm font-bold mt-3 mb-1" style="color: #f85149;">Anti-Pattern: The "God Agent"</p>
    <div class="primer-danger !py-1 !px-3">
      <div class="font-mono text-xs" style="color: #e6edf3;">tools: ['*'] — "Do whatever is asked"</div>
      <div class="text-xs" style="color: #8b949e;">No specialization = no value over default Copilot</div>
    </div>
  </div>
</div>

---

# Agent Handoffs: Guided Workflows

<div class="mt-4">
  <div class="flex items-center justify-center gap-2 mb-6">
    <div class="primer-card !px-4 !py-3 text-center">
      <div class="text-sm font-bold">🗺️ Planner</div>
      <div class="text-xs" style="color: #8b949e;">Read-only tools</div>
    </div>
    <div class="text-2xl" style="color: #58a6ff;">→</div>
    <div class="primer-card !px-4 !py-3 text-center">
      <div class="text-sm font-bold">⚙️ Implementer</div>
      <div class="text-xs" style="color: #8b949e;">Edit + terminal</div>
    </div>
    <div class="text-2xl" style="color: #58a6ff;">→</div>
    <div class="primer-card !px-4 !py-3 text-center">
      <div class="text-sm font-bold">🔍 Reviewer</div>
      <div class="text-xs" style="color: #8b949e;">Search only</div>
    </div>
    <div class="text-2xl" style="color: #58a6ff;">→</div>
    <div class="primer-card !px-4 !py-3 text-center">
      <div class="text-sm font-bold">🧪 Tester</div>
      <div class="text-xs" style="color: #8b949e;">Terminal only</div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <p class="text-sm font-bold mb-2" style="color: #bc8cff;">Handoff Configuration</p>
      <div class="font-mono text-xs p-3 rounded-lg" style="background: #1c2128; border: 1px solid #30363d; color: #e6edf3; line-height: 1.5;">
        <div style="color: #bc8cff;">handoffs:</div>
        <div>&nbsp;&nbsp;- <span style="color: #bc8cff;">label:</span> Start Implementation</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #bc8cff;">agent:</span> implementer</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #bc8cff;">prompt:</span> Implement the plan above.</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #bc8cff;">send:</span> false</div>
      </div>
    </div>
    <div>
      <p class="text-sm font-bold mb-2" style="color: #58a6ff;">Key Benefits</p>
      <div class="space-y-2 text-sm">
        <div>🎯 Each agent has the <strong>right tools</strong> for its phase</div>
        <div>🔒 Planner can't accidentally edit code</div>
        <div>👁️ Human reviews between steps (<code>send: false</code>)</div>
        <div>🔄 Context flows naturally through the chain</div>
      </div>
    </div>
  </div>
</div>

---

# The Maturity Ladder

<div class="mt-4 flex flex-col gap-3">
  <div class="flex items-stretch gap-3">
    <div class="w-10 flex flex-col items-center">
      <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background: #3fb950;">1</div>
      <div class="flex-1 w-0.5 mt-1" style="background: #3fb950; opacity: 0.3;"></div>
    </div>
    <div class="flex-1 primer-success !py-3">
      <div class="flex items-center justify-between">
        <div>
          <span class="font-bold text-base">Instructions</span>
          <span class="primer-badge ml-2" style="background: #0d1f0d; color: #3fb950;">Day 1</span>
        </div>
      </div>
      <p class="text-sm mt-1" style="color: var(--primer-fg-muted);">Add <code>copilot-instructions.md</code> — every Copilot interaction improves immediately</p>
    </div>
  </div>
  <div class="flex items-stretch gap-3">
    <div class="w-10 flex flex-col items-center">
      <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background: #58a6ff;">2</div>
      <div class="flex-1 w-0.5 mt-1" style="background: #58a6ff; opacity: 0.3;"></div>
    </div>
    <div class="flex-1 primer-accent !py-3">
      <div class="flex items-center justify-between">
        <div>
          <span class="font-bold text-base">Prompt Files</span>
          <span class="primer-badge ml-2" style="background: #0c2d6b; color: #58a6ff;">Week 1</span>
        </div>
      </div>
      <p class="text-sm mt-1" style="color: var(--primer-fg-muted);">Create 2-3 prompts for repeated tasks — workflows become one-command actions</p>
    </div>
  </div>
  <div class="flex items-stretch gap-3">
    <div class="w-10 flex flex-col items-center">
      <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background: #bc8cff;">3</div>
      <div class="flex-1 w-0.5 mt-1" style="background: #bc8cff; opacity: 0.3;"></div>
    </div>
    <div class="flex-1 primer-card !py-3" style="border-color: #bc8cff33;">
      <div class="flex items-center justify-between">
        <div>
          <span class="font-bold text-base">Skills</span>
          <span class="primer-badge ml-2" style="background: #2a1543; color: #bc8cff;">Week 2-3</span>
        </div>
      </div>
      <p class="text-sm mt-1" style="color: var(--primer-fg-muted);">Package capabilities with scripts & templates — portable across all AI tools</p>
    </div>
  </div>
  <div class="flex items-stretch gap-3">
    <div class="w-10 flex flex-col items-center">
      <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background: #bc8cff;">4</div>
    </div>
    <div class="flex-1 primer-card !py-3" style="border-color: #bc8cff33;">
      <div class="flex items-center justify-between">
        <div>
          <span class="font-bold text-base">Agent Team</span>
          <span class="primer-badge ml-2" style="background: #2a1543; color: #bc8cff;">Month 1</span>
        </div>
      </div>
      <p class="text-sm mt-1" style="color: var(--primer-fg-muted);">Build 3-5 specialists with constrained tools & handoffs — AI as a team, not a single generalist</p>
    </div>
  </div>
</div>

---

# 🧠 Mental Model Shift

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="primer-success">
    <p class="text-sm font-bold mb-2" style="color: #3fb950;">✅ Move Toward</p>
    <ul class="text-xs space-y-2" style="color: var(--primer-fg);">
      <li><strong>Specific stack declarations</strong><br/>"React 18, TypeScript 5.3, Vite 5"</li>
      <li><strong>Executable commands with flags</strong><br/><code>npm test -- --coverage</code></li>
      <li><strong>Three-tier boundaries</strong><br/>Always / Ask first / Never</li>
      <li><strong>Code examples over explanations</strong><br/>One snippet > three paragraphs</li>
    </ul>
  </div>
  <div class="primer-card" style="border-color: #d2992233; background: #1f1a0d;">
    <p class="text-sm font-bold mb-2" style="color: #d29922;">⚠️ Move Away From</p>
    <ul class="text-xs space-y-2" style="color: var(--primer-fg);">
      <li><strong>Vague identity statements</strong><br/>"You are a helpful assistant"</li>
      <li><strong>Tool names without flags</strong><br/>"Use pytest" vs <code>pytest -v --tb=short</code></li>
      <li><strong>Monolithic 2,000-line files</strong><br/>Context overload, poor relevance</li>
    </ul>
  </div>
  <div class="primer-danger">
    <p class="text-sm font-bold mb-2" style="color: #f85149;">🛑 Move Against</p>
    <ul class="text-xs space-y-2" style="color: var(--primer-fg);">
      <li><strong>No boundaries at all</strong><br/>Risk: modifying production configs, committing secrets</li>
      <li><strong>Copy-pasting generic templates</strong><br/>Worse than no file at all without project-specific content</li>
    </ul>
  </div>
</div>

---

# ✅ What You Can Do Today

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="primer-success">
    <p class="text-sm font-bold mb-3" style="color: #3fb950;">⏱️ 15 Minutes</p>
    <ul class="text-xs space-y-2" style="color: var(--primer-fg);">
      <li>📝 Create <code>.github/copilot-instructions.md</code> with your stack, commands, and boundaries</li>
      <li>📁 Add one path-specific instruction for your test directory</li>
      <li>📋 Adapt the starter template from this talk</li>
    </ul>
  </div>
  <div class="primer-accent">
    <p class="text-sm font-bold mb-3" style="color: #58a6ff;">⏱️ 1 Hour</p>
    <ul class="text-xs space-y-2" style="color: var(--primer-fg);">
      <li>🔧 Create 2-3 prompt files for tasks you repeat weekly</li>
      <li>📦 Build your first skill for your primary test framework</li>
      <li>🤖 Create a <code>@docs-agent</code> that reads code and writes docs</li>
    </ul>
  </div>
  <div class="primer-card" style="border-color: #bc8cff33;">
    <p class="text-sm font-bold mb-3" style="color: #bc8cff;">⏱️ 2-4 Hours</p>
    <ul class="text-xs space-y-2" style="color: var(--primer-fg);">
      <li>🔄 Build a 3-agent workflow: Planner → Implementer → Reviewer</li>
      <li>🌐 Publish a reusable skill to your org's shared library</li>
      <li>🏗️ Set up path-specific instructions for your monorepo</li>
    </ul>
  </div>
</div>

---

# 📖 References

<div class="grid grid-cols-2 gap-4 mt-6">
  <div>
    <p class="text-sm font-bold mb-3" style="color: #58a6ff;">Official Documentation</p>
    <div class="space-y-2 text-sm">
      <div class="primer-card !py-2 !px-3">
        <a href="https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot" style="color: #58a6ff; text-decoration: none;">📖 Repository Custom Instructions</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <a href="https://code.visualstudio.com/docs/copilot/customization/agent-skills" style="color: #58a6ff; text-decoration: none;">📖 Agent Skills — VS Code Docs</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <a href="https://code.visualstudio.com/docs/copilot/customization/custom-agents" style="color: #58a6ff; text-decoration: none;">📖 Custom Agents — VS Code Docs</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <a href="https://code.visualstudio.com/docs/copilot/customization/prompt-files" style="color: #58a6ff; text-decoration: none;">📖 Prompt Files — VS Code Docs</a>
      </div>
    </div>
  </div>
  <div>
    <p class="text-sm font-bold mb-3" style="color: #bc8cff;">Research & Standards</p>
    <div class="space-y-2 text-sm">
      <div class="primer-card !py-2 !px-3">
        <a href="https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/" style="color: #58a6ff; text-decoration: none;">📊 Lessons from 2,500+ repos — GitHub Blog</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <a href="https://agentskills.io" style="color: #58a6ff; text-decoration: none;">🌐 Agent Skills Open Standard</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <a href="https://github.com/github/awesome-copilot" style="color: #58a6ff; text-decoration: none;">⭐ Awesome Copilot — Community Skills</a>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col items-center justify-center">
  <div class="mb-6">
    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#58a6ff] to-[#bc8cff] flex items-center justify-center text-white text-3xl shadow-lg">
      ✨
    </div>
  </div>
  <h1 class="!text-4xl !font-extrabold !mb-4" style="color: var(--primer-fg) !important;">
    Your Repo IS the Prompt
  </h1>
  <p class="text-lg" style="color: var(--primer-fg-muted);">
    Start with instructions. Add prompts. Build skills. Compose agents.
  </p>
  <div class="mt-8 flex items-center gap-4">
    <span class="primer-badge text-sm" style="background: #0c2d6b; color: #58a6ff;">primer.style</span>
    <span class="primer-badge text-sm" style="background: var(--primer-bg-subtle); color: var(--primer-fg-subtle);">GitHub Copilot</span>
  </div>
  <div class="mt-6 w-24 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full"></div>
</div>
