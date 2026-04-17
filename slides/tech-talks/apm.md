---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## APM: Agent Package Manager
  Dependency management for AI agent configuration
drawings:
  persist: false
transition: slide-left
title: APM — Agent Package Manager
module: tech-talks/apm
mdc: true
status: active
updated: 2026-04-17
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
  .primer-warning {
    background: #1f1a0d;
    border: 1px solid #d2992233;
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
      📦
    </div>
  </div>
  <h1 class="!text-5xl !font-extrabold !mb-4">
    APM: Agent Package Manager
  </h1>
  <p class="text-lg" style="color: #8b949e;">
    Dependency management for AI agent configuration
  </p>
  <div class="mt-8 flex gap-4">
    <div class="px-5 py-2 rounded-md text-sm font-medium" style="background: #238636; color: #ffffff;">
      20 Minutes
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      Technical Audience
    </div>
  </div>
  <div class="mt-6 flex items-center gap-3">
    <span class="primer-badge" style="background: #0c2d6b; color: #58a6ff;">microsoft/apm</span>
    <span class="primer-badge" style="background: #21262d; color: #8b949e;">Open Source</span>
  </div>
</div>

---

# The Problem You Already Solved… for Code

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <p class="text-sm font-bold mb-3" style="color: #3fb950;">Application Code ✅</p>
    <div class="primer-success !py-3">
      <div class="space-y-2 text-sm">
        <div>📄 <code>package.json</code> — declare dependencies</div>
        <div>🔒 <code>package-lock.json</code> — pin versions</div>
        <div>⬇️ <code>npm install</code> — reproducible setup</div>
        <div>🔄 Transitive dependency resolution</div>
        <div>🛡️ <code>npm audit</code> — security scanning</div>
      </div>
      <p class="text-xs mt-3" style="color: #3fb950;">Solved decades ago. Every language has one.</p>
    </div>
  </div>
  <div>
    <p class="text-sm font-bold mb-3" style="color: #f85149;">Agent Configuration ❌</p>
    <div class="primer-danger !py-3">
      <div class="space-y-2 text-sm">
        <div>📋 Copy instruction files between repos</div>
        <div>✍️ Write prompts from scratch every project</div>
        <div>⚙️ Configure MCP servers per-developer</div>
        <div>🤞 Hope everyone's setup matches</div>
        <div>❓ No audit trail for agent config</div>
      </div>
      <p class="text-xs mt-3" style="color: #f85149;">5 devs = 5 divergent configs. 50 devs = 50.</p>
    </div>
  </div>
</div>

---

# What Is APM?

<div class="mt-4">
  <p class="text-base mb-4" style="color: #8b949e;">
    Think <code>package.json</code> for AI agent configuration. Declare, resolve, lock, distribute.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <p class="text-sm font-bold mb-2" style="color: #58a6ff;">The Manifest: <code>apm.yml</code></p>
      <div class="font-mono text-xs p-3 rounded-lg" style="background: #1c2128; border: 1px solid #30363d; color: #e6edf3; line-height: 1.6;">
        <div><span style="color: #bc8cff;">name:</span> my-project</div>
        <div><span style="color: #bc8cff;">version:</span> 1.0.0</div>
        <div><span style="color: #bc8cff;">dependencies:</span></div>
        <div>&nbsp;&nbsp;<span style="color: #bc8cff;">apm:</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #79c0ff;">microsoft/apm-sample-package</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #79c0ff;">anthropics/skills/frontend-design</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #79c0ff;">github/awesome-copilot/agents/api-architect</span></div>
      </div>
      <div class="mt-3 font-mono text-sm p-2 rounded-lg" style="background: #0d1f0d; border: 1px solid #3fb95033; color: #3fb950;">
        $ apm install &nbsp;→&nbsp; Done. All configured.
      </div>
    </div>
    <div>
      <p class="text-sm font-bold mb-2" style="color: #58a6ff;">What You Get</p>
      <div class="space-y-2">
        <div class="primer-card !py-2 !px-3">
          <div class="text-sm">🔗 <strong>Transitive dependencies</strong> resolved automatically</div>
        </div>
        <div class="primer-card !py-2 !px-3">
          <div class="text-sm">🔒 <strong>Lock file</strong> pins every dep to exact commit</div>
        </div>
        <div class="primer-card !py-2 !px-3">
          <div class="text-sm">🌐 <strong>Any git host</strong> — GitHub, GitLab, Bitbucket, Azure DevOps</div>
        </div>
        <div class="primer-card !py-2 !px-3">
          <div class="text-sm">🛡️ <strong>Security scanning</strong> before deployment</div>
        </div>
        <div class="primer-card !py-2 !px-3">
          <div class="text-sm">📊 <strong>Audit trail</strong> — every change tracked, diffable in PRs</div>
        </div>
      </div>
    </div>
  </div>
</div>

---

# The Seven Primitives

<div class="mt-3">
  <p class="text-sm mb-3" style="color: #8b949e;">APM manages seven types of agent configuration. Each is a first-class citizen in the manifest and dependency tree.</p>
  <div class="grid grid-cols-4 gap-2">
    <div class="primer-accent !py-3 !px-3 text-center">
      <div class="text-2xl mb-1">📝</div>
      <div class="text-sm font-bold" style="color: #58a6ff;">Instructions</div>
      <div class="text-xs" style="color: #8b949e;">Standards &amp; guardrails</div>
    </div>
    <div class="primer-accent !py-3 !px-3 text-center">
      <div class="text-2xl mb-1">⚡</div>
      <div class="text-sm font-bold" style="color: #58a6ff;">Skills</div>
      <div class="text-xs" style="color: #8b949e;">Reusable capabilities</div>
    </div>
    <div class="primer-accent !py-3 !px-3 text-center">
      <div class="text-2xl mb-1">💬</div>
      <div class="text-sm font-bold" style="color: #58a6ff;">Prompts</div>
      <div class="text-xs" style="color: #8b949e;">Slash commands</div>
    </div>
    <div class="primer-accent !py-3 !px-3 text-center">
      <div class="text-2xl mb-1">🤖</div>
      <div class="text-sm font-bold" style="color: #58a6ff;">Agents</div>
      <div class="text-xs" style="color: #8b949e;">Specialized personas</div>
    </div>
    <div class="primer-card !py-3 !px-3 text-center">
      <div class="text-2xl mb-1">🪝</div>
      <div class="text-sm font-bold" style="color: #bc8cff;">Hooks</div>
      <div class="text-xs" style="color: #8b949e;">Lifecycle handlers</div>
    </div>
    <div class="primer-card !py-3 !px-3 text-center">
      <div class="text-2xl mb-1">🔌</div>
      <div class="text-sm font-bold" style="color: #bc8cff;">Plugins</div>
      <div class="text-xs" style="color: #8b949e;">Packaged bundles</div>
    </div>
    <div class="primer-card !py-3 !px-3 text-center">
      <div class="text-2xl mb-1">🔧</div>
      <div class="text-sm font-bold" style="color: #bc8cff;">MCP Servers</div>
      <div class="text-xs" style="color: #8b949e;">Tool integrations</div>
    </div>
    <div class="primer-card !py-3 !px-3 text-center" style="border-color: #3fb95033;">
      <div class="text-2xl mb-1">🗺️</div>
      <div class="text-sm font-bold" style="color: #3fb950;">All in one</div>
      <div class="text-xs" style="color: #8b949e;"><code>apm.yml</code></div>
    </div>
  </div>
  <p class="text-xs mt-3" style="color: #6e7781;">These map directly to the configuration surfaces of major AI coding tools. APM manages what already exists — it doesn't invent new abstractions.</p>
</div>

---

# The Five-Stage Lifecycle

<div class="mt-4 flex items-center justify-center gap-2 mb-6">
  <div class="px-3 py-2 rounded-lg text-sm font-bold" style="background: #0c2d6b; color: #58a6ff;">CONSUME</div>
  <div class="text-xl" style="color: #58a6ff;">→</div>
  <div class="px-3 py-2 rounded-lg text-sm font-bold" style="background: #0c2d6b; color: #58a6ff;">COMPOSE</div>
  <div class="text-xl" style="color: #58a6ff;">→</div>
  <div class="px-3 py-2 rounded-lg text-sm font-bold" style="background: #0c2d6b; color: #58a6ff;">LOCK</div>
  <div class="text-xl" style="color: #58a6ff;">→</div>
  <div class="px-3 py-2 rounded-lg text-sm font-bold" style="background: #0c2d6b; color: #58a6ff;">BUILD</div>
  <div class="text-xl" style="color: #58a6ff;">→</div>
  <div class="px-3 py-2 rounded-lg text-sm font-bold" style="background: #0c2d6b; color: #58a6ff;">DISTRIBUTE</div>
</div>
<div class="grid grid-cols-5 gap-2">
  <div class="primer-card !py-2 !px-2">
    <div class="text-sm font-bold mb-1" style="color: #58a6ff;">⬇️ Consume</div>
    <div class="text-xs" style="color: #8b949e;">Install from any git host. Resolve full dependency tree.</div>
    <div class="font-mono text-xs mt-1 p-1 rounded" style="background: #1c2128; color: #79c0ff;">apm install org/pkg</div>
  </div>
  <div class="primer-card !py-2 !px-2">
    <div class="text-sm font-bold mb-1" style="color: #58a6ff;">🧩 Compose</div>
    <div class="text-xs" style="color: #8b949e;">Combine org + team + project config in one manifest.</div>
    <div class="font-mono text-xs mt-1 p-1 rounded" style="background: #1c2128; color: #79c0ff;">apm.yml</div>
  </div>
  <div class="primer-card !py-2 !px-2">
    <div class="text-sm font-bold mb-1" style="color: #58a6ff;">🔒 Lock</div>
    <div class="text-xs" style="color: #8b949e;">Pin every dep to exact commit. Deterministic installs.</div>
    <div class="font-mono text-xs mt-1 p-1 rounded" style="background: #1c2128; color: #79c0ff;">apm.lock.yaml</div>
  </div>
  <div class="primer-card !py-2 !px-2">
    <div class="text-sm font-bold mb-1" style="color: #58a6ff;">🔨 Build</div>
    <div class="text-xs" style="color: #8b949e;">Compile to native formats for each AI tool.</div>
    <div class="font-mono text-xs mt-1 p-1 rounded" style="background: #1c2128; color: #79c0ff;">apm compile</div>
  </div>
  <div class="primer-card !py-2 !px-2">
    <div class="text-sm font-bold mb-1" style="color: #58a6ff;">📤 Distribute</div>
    <div class="text-xs" style="color: #8b949e;">Push to git. No registry needed. Or <code>apm pack</code> for offline.</div>
    <div class="font-mono text-xs mt-1 p-1 rounded" style="background: #1c2128; color: #79c0ff;">git push / apm pack</div>
  </div>
</div>

---

# Marketplaces vs APM — Different Layers

<div class="mt-3">
  <p class="text-sm mb-3" style="color: #8b949e;">
    Marketplaces handle <strong style="color: #58a6ff;">discovery &amp; distribution</strong>. APM adds <strong style="color: #bc8cff;">governance, composition &amp; reproducibility</strong>. They complement each other.
  </p>
  <table class="primer-table text-xs">
    <thead>
      <tr>
        <th>Capability</th>
        <th style="color: #58a6ff;">Marketplaces</th>
        <th style="color: #bc8cff;">APM</th>
        <th style="color: #3fb950;">Together</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Browse &amp; discover plugins</td><td style="color: #3fb950;">✅</td><td style="color: #6e7781;">—</td><td style="color: #3fb950;">✅</td></tr>
      <tr><td>One-command install</td><td style="color: #3fb950;">✅</td><td style="color: #3fb950;">✅</td><td style="color: #3fb950;">✅</td></tr>
      <tr><td>Cross-tool plugin format</td><td style="color: #3fb950;">✅</td><td style="color: #3fb950;">✅</td><td style="color: #3fb950;">✅</td></tr>
      <tr><td>Version locking (exact commit)</td><td style="color: #f85149;">❌</td><td style="color: #3fb950;">✅</td><td style="color: #3fb950;">✅</td></tr>
      <tr><td>Transitive dependency resolution</td><td style="color: #f85149;">❌</td><td style="color: #3fb950;">✅</td><td style="color: #3fb950;">✅</td></tr>
      <tr><td>Multi-source composition</td><td style="color: #f85149;">❌</td><td style="color: #3fb950;">✅</td><td style="color: #3fb950;">✅</td></tr>
      <tr><td>Security scanning (Unicode, bidi)</td><td style="color: #f85149;">❌</td><td style="color: #3fb950;">✅</td><td style="color: #3fb950;">✅</td></tr>
      <tr><td>CI/CD reproducibility</td><td style="color: #f85149;">❌</td><td style="color: #3fb950;">✅</td><td style="color: #3fb950;">✅</td></tr>
      <tr><td>Audit trail (lock file in PRs)</td><td style="color: #f85149;">❌</td><td style="color: #3fb950;">✅</td><td style="color: #3fb950;">✅</td></tr>
    </tbody>
  </table>
</div>

---

# Better Together: APM Consumes Marketplaces

<div class="grid grid-cols-2 gap-4 mt-4">
  <div>
    <p class="text-sm font-bold mb-2" style="color: #58a6ff;">Marketplace → APM Workflow</p>
    <div class="font-mono text-xs p-3 rounded-lg space-y-1" style="background: #1c2128; border: 1px solid #30363d; color: #e6edf3; line-height: 1.6;">
      <div style="color: #6e7781;"># Register a marketplace</div>
      <div>$ <span style="color: #79c0ff;">apm marketplace add</span> github/awesome-copilot</div>
      <div>&nbsp;</div>
      <div style="color: #6e7781;"># Browse available plugins</div>
      <div>$ <span style="color: #79c0ff;">apm marketplace browse</span> awesome-copilot</div>
      <div>&nbsp;</div>
      <div style="color: #6e7781;"># Install with full APM treatment</div>
      <div>$ <span style="color: #79c0ff;">apm install</span> code-review@awesome-copilot</div>
      <div>&nbsp;</div>
      <div style="color: #6e7781;"># Result: locked, scanned, tracked</div>
    </div>
    <div class="primer-card !py-2 !px-3 mt-3">
      <div class="text-xs" style="color: #8b949e;">
        <strong style="color: #e6edf3;">Provenance tracked in lock file:</strong><br/>
        <code>discovered_via: awesome-copilot</code><br/>
        <code>resolved_commit: abc123def...</code>
      </div>
    </div>
  </div>
  <div>
    <p class="text-sm font-bold mb-2" style="color: #bc8cff;">The Architecture Stack</p>
    <div class="space-y-2">
      <div class="primer-card !py-3 !px-4 text-center">
        <div class="text-sm font-bold">🤖 AI Coding Tools</div>
        <div class="text-xs" style="color: #8b949e;">Copilot · Claude · Cursor · OpenCode · Codex · Gemini</div>
      </div>
      <div class="text-center text-lg" style="color: #30363d;">▼</div>
      <div class="primer-accent !py-3 !px-4 text-center">
        <div class="text-sm font-bold" style="color: #58a6ff;">🏪 Plugin / Extension Systems</div>
        <div class="text-xs" style="color: #8b949e;">Marketplaces — discovery &amp; distribution</div>
      </div>
      <div class="text-center text-lg" style="color: #30363d;">▼</div>
      <div class="!py-3 !px-4 text-center rounded-xl" style="background: linear-gradient(135deg, #2a154340 0%, #161b22 100%); border: 1px solid #bc8cff33;">
        <div class="text-sm font-bold" style="color: #bc8cff;">📦 APM</div>
        <div class="text-xs" style="color: #8b949e;">Dependency mgmt · composition · lock files · audit</div>
      </div>
      <div class="text-center text-lg" style="color: #30363d;">▼</div>
      <div class="primer-card !py-2 !px-4 text-center">
        <div class="text-sm font-bold">📂 Git</div>
        <div class="text-xs" style="color: #8b949e;">Source of truth &amp; distribution</div>
      </div>
    </div>
  </div>
</div>

---

# Write Once, Deploy Everywhere

<div class="mt-3">
  <p class="text-sm mb-3" style="color: #8b949e;">
    <code>apm install</code> deploys native formats. <code>apm compile</code> bridges the rest. <strong style="color: #e6edf3;">Zero lock-in</strong> — stop using APM and your files still work.
  </p>
  <table class="primer-table text-xs">
    <thead>
      <tr>
        <th>AI Tool</th>
        <th><code>apm install</code> deploys</th>
        <th><code>apm compile</code> adds</th>
        <th>Support</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>GitHub Copilot</strong></td>
        <td><code>.github/</code> instructions, prompts, agents, hooks, plugins, MCP</td>
        <td><code>AGENTS.md</code></td>
        <td><span class="primer-badge" style="background: #0d1f0d; color: #3fb950;">Full</span></td>
      </tr>
      <tr>
        <td><strong>Claude</strong></td>
        <td><code>.claude/</code> commands, skills, MCP</td>
        <td><code>CLAUDE.md</code></td>
        <td><span class="primer-badge" style="background: #0d1f0d; color: #3fb950;">Full</span></td>
      </tr>
      <tr>
        <td><strong>Cursor</strong></td>
        <td><code>.cursor/rules/</code>, <code>.cursor/agents/</code>, skills, hooks, MCP</td>
        <td><code>.cursor/rules/</code></td>
        <td><span class="primer-badge" style="background: #0d1f0d; color: #3fb950;">Full</span></td>
      </tr>
      <tr>
        <td><strong>OpenCode</strong></td>
        <td><code>.opencode/</code> agents, commands, skills, MCP</td>
        <td>Via <code>AGENTS.md</code></td>
        <td><span class="primer-badge" style="background: #0d1f0d; color: #3fb950;">Full</span></td>
      </tr>
      <tr>
        <td><strong>Codex CLI</strong></td>
        <td>—</td>
        <td><code>AGENTS.md</code></td>
        <td><span class="primer-badge" style="background: #0c2d6b; color: #58a6ff;">Compile</span></td>
      </tr>
      <tr>
        <td><strong>Gemini</strong></td>
        <td>—</td>
        <td><code>GEMINI.md</code></td>
        <td><span class="primer-badge" style="background: #0c2d6b; color: #58a6ff;">Compile</span></td>
      </tr>
    </tbody>
  </table>
</div>

---

# The Prompt Supply Chain Problem

<div class="grid grid-cols-2 gap-4 mt-4">
  <div>
    <p class="text-sm font-bold mb-2" style="color: #f85149;">Why Agent Config ≠ App Config</p>
    <div class="primer-danger !py-3">
      <div class="text-sm mb-2" style="color: #e6edf3;">Traditional package managers have a <strong>gap</strong> between install and execute.</div>
      <div class="font-mono text-xs p-2 rounded" style="background: #1c2128; color: #8b949e; line-height: 1.5;">
        <div>npm install &nbsp;→&nbsp; <span style="color: #d29922;">review time</span> &nbsp;→&nbsp; npm start</div>
      </div>
      <div class="text-sm mt-3 mb-2" style="color: #e6edf3;">Agent configuration has <strong style="color: #f85149;">no such gap</strong>.</div>
      <div class="font-mono text-xs p-2 rounded" style="background: #1c2128; color: #8b949e; line-height: 1.5;">
        <div>file lands in .github/prompts/ &nbsp;→&nbsp; <span style="color: #f85149;">instantly ingested</span></div>
      </div>
      <p class="text-xs mt-2" style="color: #f85149;">File presence IS execution. No review window.</p>
    </div>
  </div>
  <div>
    <p class="text-sm font-bold mb-2" style="color: #3fb950;">APM's Pre-Deployment Gate</p>
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #58a6ff;">1</div>
        <div class="text-sm"><strong>Download</strong> — package cached in <code>apm_modules/</code></div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #58a6ff;">2</div>
        <div class="text-sm"><strong>Scan</strong> — hidden Unicode, bidi overrides, tag chars</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #3fb950;">3</div>
        <div class="text-sm"><strong>Deploy</strong> — only if clean → agent-readable dirs</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: #bc8cff;">4</div>
        <div class="text-sm"><strong>Hash</strong> — SHA-256 stored in <code>apm.lock.yaml</code></div>
      </div>
    </div>
    <div class="primer-card !py-2 !px-3 mt-3">
      <div class="text-xs"><span style="color: #f85149;">Critical findings block deployment.</span> Package available for inspection but never reaches agent dirs.</div>
    </div>
    <div class="primer-card !py-2 !px-3 mt-2">
      <div class="text-xs">CI-ready: <code>apm audit -f sarif -o audit.sarif</code> for GitHub Code Scanning</div>
    </div>
  </div>
</div>

---

# Hybrid Plugin Authoring

<div class="grid grid-cols-2 gap-4 mt-4">
  <div>
    <p class="text-sm font-bold mb-2" style="color: #bc8cff;">Three Modes</p>
    <table class="primer-table text-xs">
      <thead><tr><th>Mode</th><th>Manifests</th><th>Use When</th></tr></thead>
      <tbody>
        <tr><td style="color: #58a6ff;">APM-only</td><td><code>apm.yml</code></td><td>Full APM workflow</td></tr>
        <tr><td style="color: #58a6ff;">Plugin-only</td><td><code>plugin.json</code></td><td>Standard plugin, no APM needed</td></tr>
        <tr><td style="color: #bc8cff;">Hybrid</td><td>Both</td><td>Author with APM, export as plugin</td></tr>
      </tbody>
    </table>
    <p class="text-sm font-bold mt-3 mb-2" style="color: #bc8cff;">Hybrid Workflow</p>
    <div class="font-mono text-xs p-3 rounded-lg" style="background: #1c2128; border: 1px solid #30363d; color: #e6edf3; line-height: 1.6;">
      <div style="color: #6e7781;"># Initialize with plugin support</div>
      <div>$ <span style="color: #79c0ff;">apm init</span> my-plugin <span style="color: #bc8cff;">--plugin</span></div>
      <div>&nbsp;</div>
      <div style="color: #6e7781;"># Add dev-only deps (excluded from export)</div>
      <div>$ <span style="color: #79c0ff;">apm install</span> --dev owner/helpers</div>
      <div>&nbsp;</div>
      <div style="color: #6e7781;"># Export as standard plugin</div>
      <div>$ <span style="color: #79c0ff;">apm pack</span> --format plugin</div>
    </div>
  </div>
  <div>
    <p class="text-sm font-bold mb-2" style="color: #58a6ff;">Plugin Detection (Priority Order)</p>
    <div class="space-y-2">
      <div class="primer-card !py-2 !px-3">
        <div class="flex items-center gap-2">
          <span class="primer-badge" style="background: #0c2d6b; color: #58a6ff;">1st</span>
          <div class="text-sm"><code>plugin.json</code> <span style="color: #8b949e;">(root)</span></div>
        </div>
      </div>
      <div class="primer-card !py-2 !px-3">
        <div class="flex items-center gap-2">
          <span class="primer-badge" style="background: #0c2d6b; color: #58a6ff;">2nd</span>
          <div class="text-sm"><code>.github/plugin/plugin.json</code></div>
        </div>
      </div>
      <div class="primer-card !py-2 !px-3">
        <div class="flex items-center gap-2">
          <span class="primer-badge" style="background: #0c2d6b; color: #58a6ff;">3rd</span>
          <div class="text-sm"><code>.claude-plugin/plugin.json</code></div>
        </div>
      </div>
      <div class="primer-card !py-2 !px-3">
        <div class="flex items-center gap-2">
          <span class="primer-badge" style="background: #0c2d6b; color: #58a6ff;">4th</span>
          <div class="text-sm"><code>.cursor-plugin/plugin.json</code></div>
        </div>
      </div>
    </div>
    <div class="primer-success !py-2 !px-3 mt-3">
      <div class="text-xs" style="color: #e6edf3;">
        <strong>Cross-compatible:</strong> A single plugin works in Copilot CLI, Claude Code, and Cursor — APM normalizes the format.
      </div>
    </div>
  </div>
</div>

---

# Developer Stories

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="primer-success">
    <div class="text-2xl mb-2">👤</div>
    <p class="text-sm font-bold mb-2" style="color: #3fb950;">Solo / Small Team</p>
    <p class="text-xs" style="color: #e6edf3;">"I use Copilot AND Claude. The project needs 5 plugins."</p>
    <div class="primer-card !py-2 !px-3 mt-2" style="background: #1c2128;">
      <div class="text-xs" style="color: #8b949e;">Without APM: 5 install commands, hope versions match</div>
    </div>
    <div class="mt-2 font-mono text-xs p-2 rounded" style="background: #0d1f0d; border: 1px solid #3fb95033; color: #3fb950;">
      apm install → done
    </div>
  </div>
  <div class="primer-accent">
    <div class="text-2xl mb-2">👥</div>
    <p class="text-sm font-bold mb-2" style="color: #58a6ff;">Mid-size Team</p>
    <p class="text-xs" style="color: #e6edf3;">"We have org-wide security standards, team plugins, and project config."</p>
    <div class="primer-card !py-2 !px-3 mt-2" style="background: #1c2128;">
      <div class="text-xs" style="color: #8b949e;"><code>apm.yml</code> composes all three layers via dependency resolution</div>
    </div>
    <div class="mt-2 font-mono text-xs p-2 rounded" style="background: #0c2d6b40; border: 1px solid #58a6ff33; color: #58a6ff;">
      apm.lock.yaml → same setup everywhere
    </div>
  </div>
  <div class="primer-card" style="border-color: #bc8cff33;">
    <div class="text-2xl mb-2">🏢</div>
    <p class="text-sm font-bold mb-2" style="color: #bc8cff;">Enterprise</p>
    <p class="text-xs" style="color: #e6edf3;">"When security asks 'what agent config was active when release 4.2.1 shipped?'"</p>
    <div class="primer-card !py-2 !px-3 mt-2" style="background: #1c2128;">
      <div class="text-xs" style="color: #8b949e;"><code>git log apm.lock.yaml</code> answers that</div>
    </div>
    <div class="mt-2 font-mono text-xs p-2 rounded" style="background: #2a154340; border: 1px solid #bc8cff33; color: #bc8cff;">
      Versioned · Auditable · Reproducible
    </div>
  </div>
</div>

---

# ✅ What You Can Do Today

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="primer-success">
    <p class="text-sm font-bold mb-3" style="color: #3fb950;">⏱️ 15 Minutes — Try It</p>
    <div class="font-mono text-xs p-2 rounded mb-2" style="background: #1c2128; color: #79c0ff; line-height: 1.5;">
      <div>curl -sSL https://aka.ms/apm-unix | sh</div>
      <div>apm init my-project</div>
      <div>apm install microsoft/apm-sample-package</div>
    </div>
    <ul class="text-xs space-y-1" style="color: #e6edf3;">
      <li>📦 See files deploy to <code>.github/</code></li>
      <li>🔒 Check the generated <code>apm.lock.yaml</code></li>
      <li>🛡️ Run <code>apm audit</code></li>
    </ul>
  </div>
  <div class="primer-accent">
    <p class="text-sm font-bold mb-3" style="color: #58a6ff;">⏱️ 1 Hour — Team Setup</p>
    <ul class="text-xs space-y-2" style="color: #e6edf3;">
      <li>📝 Create <code>apm.yml</code> with your org standards + team config</li>
      <li>🏪 Add a marketplace: <code>apm marketplace add github/awesome-copilot</code></li>
      <li>🔗 Install from marketplace: <code>apm install plugin@marketplace</code></li>
      <li>📋 Commit <code>apm.lock.yaml</code> to your repo</li>
      <li>🔨 Run <code>apm compile</code> for multi-tool output</li>
    </ul>
  </div>
  <div class="primer-card" style="border-color: #bc8cff33;">
    <p class="text-sm font-bold mb-3" style="color: #bc8cff;">⏱️ 2-4 Hours — Enterprise</p>
    <ul class="text-xs space-y-2" style="color: #e6edf3;">
      <li>🔒 Set up <code>apm audit</code> in CI pipeline (SARIF output)</li>
      <li>📦 Create org-wide packages for shared standards</li>
      <li>🏪 Build a private marketplace for your org</li>
      <li>🤖 Use <a href="https://github.com/microsoft/agentrc" style="color: #58a6ff;">agentrc</a> to auto-generate instructions</li>
      <li>📊 Review <code>apm.lock.yaml</code> diffs in PRs</li>
    </ul>
  </div>
</div>

---

# 📖 References

<div class="grid grid-cols-2 gap-4 mt-6">
  <div>
    <p class="text-sm font-bold mb-3" style="color: #58a6ff;">APM Documentation</p>
    <div class="space-y-2 text-sm">
      <div class="primer-card !py-2 !px-3">
        <a href="https://microsoft.github.io/apm/" style="color: #58a6ff; text-decoration: none;">📖 APM Documentation — Complete Reference</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <a href="https://github.com/microsoft/apm" style="color: #58a6ff; text-decoration: none;">📦 microsoft/apm — GitHub Repository</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <a href="https://microsoft.github.io/apm/getting-started/quick-start/" style="color: #58a6ff; text-decoration: none;">🚀 Quick Start — Setup in Under a Minute</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <a href="https://microsoft.github.io/apm/enterprise/security/" style="color: #58a6ff; text-decoration: none;">🛡️ Enterprise Security Model</a>
      </div>
    </div>
  </div>
  <div>
    <p class="text-sm font-bold mb-3" style="color: #bc8cff;">Related Resources</p>
    <div class="space-y-2 text-sm">
      <div class="primer-card !py-2 !px-3">
        <a href="https://github.com/microsoft/agentrc" style="color: #58a6ff; text-decoration: none;">🤖 agentrc — Auto-generate Instructions from Code</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <a href="https://agents.md" style="color: #58a6ff; text-decoration: none;">📄 AGENTS.md — Open Standard</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <a href="https://agentskills.io" style="color: #58a6ff; text-decoration: none;">⚡ Agent Skills — Open Standard</a>
      </div>
      <div class="primer-card !py-2 !px-3">
        <span style="color: #58a6ff;">🏪 Companion Talk:</span>
        <span style="color: #8b949e;"> Copilot Marketplaces — Discovery &amp; Distribution</span>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col items-center justify-center">
  <div class="mb-6">
    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#58a6ff] to-[#bc8cff] flex items-center justify-center text-white text-3xl shadow-lg">
      📦
    </div>
  </div>
  <h1 class="!text-4xl !font-extrabold !mb-4">
    Agent Config Is Infrastructure
  </h1>
  <p class="text-lg" style="color: #8b949e;">
    Declare it. Lock it. Audit it. Ship it.
  </p>
  <div class="mt-8 flex items-center gap-4">
    <span class="primer-badge text-sm" style="background: #0c2d6b; color: #58a6ff;">microsoft/apm</span>
    <span class="primer-badge text-sm" style="background: #21262d; color: #8b949e;">Open Source</span>
  </div>
  <div class="mt-4 font-mono text-sm" style="color: #3fb950;">
    curl -sSL https://aka.ms/apm-unix | sh && apm install
  </div>
  <div class="mt-6 w-24 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full"></div>
</div>
