---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot Marketplaces
  CopilotTraining Intro Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot Marketplaces - Extend, Create, Share
module: intro-talks/copilot-marketplaces
mdc: true
status: active
updated: 2026-03-03
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: #0d1117;">
  <!-- Hero: Label -->
  <div class="flex items-center gap-2 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
    <span class="text-sm font-medium tracking-wide uppercase" style="color: #8b949e;">GitHub Copilot</span>
  </div>
  <!-- Hero: Heading -->
  <h1 class="!text-6xl !font-bold !leading-tight text-center max-w-4xl" style="color: #e6edf3;">
    Marketplaces
  </h1>
  <!-- Hero: Description -->
  <p class="mt-6 text-xl text-center max-w-2xl" style="color: #8b949e;">
    Extend, Create, Share — Plugin ecosystems for Copilot CLI
  </p>
  <!-- Hero: Actions -->
  <div class="mt-8 flex gap-4">
    <div class="px-5 py-2 rounded-md text-sm font-medium" style="background: #238636; color: #ffffff;">
      20 Minutes
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      Experienced Developers
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-10" style="color: #e6edf3;">What We'll Cover</h1>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="text-2xl mb-2">🔌</div>
      <h3 class="!text-lg !font-semibold mb-1" style="color: #58a6ff;">What Are Plugins?</h3>
      <p class="text-sm" style="color: #8b949e;">Agents, skills, hooks, and MCP servers packaged for reuse</p>
    </div>
    <div class="p-5 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="text-2xl mb-2">📦</div>
      <h3 class="!text-lg !font-semibold mb-1" style="color: #58a6ff;">Browse & Install</h3>
      <p class="text-sm" style="color: #8b949e;">Find and install plugins from CLI marketplaces</p>
    </div>
    <div class="p-5 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="text-2xl mb-2">🔨</div>
      <h3 class="!text-lg !font-semibold mb-1" style="color: #58a6ff;">Create a Plugin</h3>
      <p class="text-sm" style="color: #8b949e;">Build your own plugin with plugin.json</p>
    </div>
    <div class="p-5 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <div class="text-2xl mb-2">🌐</div>
      <h3 class="!text-lg !font-semibold mb-1" style="color: #58a6ff;">Build a Marketplace</h3>
      <p class="text-sm" style="color: #8b949e;">Create a registry and share with your team</p>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-8" style="color: #e6edf3;">What Is a Plugin?</h1>
  <p class="text-lg mb-8" style="color: #8b949e;">A plugin is a package that extends Copilot CLI with one or more components:</p>
  <div class="grid grid-cols-2 gap-5">
    <div class="flex items-start gap-3 p-4 rounded-lg" style="background: #161b22;">
      <div class="text-2xl">🤖</div>
      <div>
        <h3 class="!text-base !font-semibold" style="color: #58a6ff;">Agents</h3>
        <p class="text-sm" style="color: #8b949e;">Specialized AI assistants defined in <code>.agent.md</code> files</p>
      </div>
    </div>
    <div class="flex items-start gap-3 p-4 rounded-lg" style="background: #161b22;">
      <div class="text-2xl">⚡</div>
      <div>
        <h3 class="!text-base !font-semibold" style="color: #3fb950;">Skills</h3>
        <p class="text-sm" style="color: #8b949e;">Reusable prompt-driven capabilities via <code>SKILL.md</code></p>
      </div>
    </div>
    <div class="flex items-start gap-3 p-4 rounded-lg" style="background: #161b22;">
      <div class="text-2xl">🪝</div>
      <div>
        <h3 class="!text-base !font-semibold" style="color: #d29922;">Hooks</h3>
        <p class="text-sm" style="color: #8b949e;">Event-driven automations in <code>hooks.json</code></p>
      </div>
    </div>
    <div class="flex items-start gap-3 p-4 rounded-lg" style="background: #161b22;">
      <div class="text-2xl">🔗</div>
      <div>
        <h3 class="!text-base !font-semibold" style="color: #a371f7;">MCP Servers</h3>
        <p class="text-sm" style="color: #8b949e;">External tool integrations via <code>.mcp.json</code></p>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-6" style="color: #e6edf3;">Plugin Anatomy</h1>
  <div class="p-6 rounded-lg border font-mono text-sm leading-relaxed" style="background: #161b22; border-color: #30363d; color: #e6edf3;">
    <div>my-plugin/</div>
    <div class="ml-4">├── <span style="color: #f85149;">plugin.json</span>           <span style="color: #8b949e;"># Required manifest</span></div>
    <div class="ml-4">├── <span style="color: #58a6ff;">agents/</span>               <span style="color: #8b949e;"># Custom agents</span></div>
    <div class="ml-8">└── helper.agent.md</div>
    <div class="ml-4">├── <span style="color: #3fb950;">skills/</span>               <span style="color: #8b949e;"># Reusable skills</span></div>
    <div class="ml-8">└── deploy/</div>
    <div class="ml-12">└── SKILL.md</div>
    <div class="ml-4">├── <span style="color: #d29922;">hooks.json</span>            <span style="color: #8b949e;"># Hook configuration</span></div>
    <div class="ml-4">└── <span style="color: #a371f7;">.mcp.json</span>             <span style="color: #8b949e;"># MCP server config</span></div>
  </div>
  <div class="mt-6 p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
    <p class="text-sm" style="color: #8b949e;">
      💡 Only <code style="color: #f85149;">plugin.json</code> is required. All other components are optional — include only what you need.
    </p>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-6" style="color: #e6edf3;">What Is a Marketplace?</h1>
  <div class="flex gap-8 items-start">
    <div class="flex-1">
      <p class="text-lg mb-6" style="color: #8b949e;">A marketplace is a <strong style="color: #e6edf3;">Git repository</strong> containing a <code>marketplace.json</code> that serves as a plugin registry.</p>
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style="background: #238636; color: #fff;">1</div>
          <span style="color: #e6edf3;">Host on GitHub, GitLab, or any Git service</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style="background: #238636; color: #fff;">2</div>
          <span style="color: #e6edf3;">Add <code>marketplace.json</code> to <code>.github/plugin/</code></span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style="background: #238636; color: #fff;">3</div>
          <span style="color: #e6edf3;">Users register and browse via CLI</span>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
        <p class="text-xs font-mono mb-2" style="color: #8b949e;">marketplace.json (simplified)</p>
        <pre class="!text-xs !leading-relaxed" style="color: #e6edf3;">{
  "name": "my-marketplace",
  "plugins": [
    {
      "name": "frontend-design",
      "version": "2.1.0",
      "source": "./plugins/frontend-design"
    }
  ]
}</pre>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-8" style="color: #e6edf3;">Default Marketplaces</h1>
  <p class="text-base mb-6" style="color: #8b949e;">Copilot CLI ships with two marketplaces pre-registered:</p>
  <div class="space-y-5">
    <div class="p-5 rounded-lg border flex items-start gap-5" style="background: #161b22; border-color: #30363d;">
      <div class="text-3xl">🏛️</div>
      <div>
        <h3 class="!text-xl !font-semibold mb-1" style="color: #58a6ff;">copilot-plugins</h3>
        <p class="text-sm mb-2" style="color: #8b949e;">Official GitHub-maintained plugins — skills, hooks, and extensibility tools</p>
        <code class="text-xs px-2 py-1 rounded" style="background: #21262d; color: #e6edf3;">github/copilot-plugins</code>
      </div>
    </div>
    <div class="p-5 rounded-lg border flex items-start gap-5" style="background: #161b22; border-color: #30363d;">
      <div class="text-3xl">🌟</div>
      <div>
        <h3 class="!text-xl !font-semibold mb-1" style="color: #3fb950;">awesome-copilot</h3>
        <p class="text-sm mb-2" style="color: #8b949e;">Community-contributed agents, prompts, instructions, and skills</p>
        <code class="text-xs px-2 py-1 rounded" style="background: #21262d; color: #e6edf3;">github/awesome-copilot</code>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-8" style="color: #e6edf3;">Browse & Discover</h1>
  <div class="space-y-6">
    <div>
      <p class="text-sm font-medium mb-2" style="color: #8b949e;">List registered marketplaces</p>
      <div class="p-4 rounded-lg font-mono text-base" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin marketplace list
      </div>
    </div>
    <div>
      <p class="text-sm font-medium mb-2" style="color: #8b949e;">Browse plugins in a marketplace</p>
      <div class="p-4 rounded-lg font-mono text-base" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin marketplace browse <span style="color: #58a6ff;">awesome-copilot</span>
      </div>
    </div>
    <div>
      <p class="text-sm font-medium mb-2" style="color: #8b949e;">Or in interactive mode</p>
      <div class="p-4 rounded-lg font-mono text-base" style="background: #161b22; color: #e6edf3;">
        <span style="color: #3fb950;">></span> /plugin marketplace browse <span style="color: #58a6ff;">copilot-plugins</span>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-8" style="color: #e6edf3;">Install Plugins</h1>
  <div class="space-y-5">
    <div>
      <p class="text-sm font-medium mb-2" style="color: #3fb950;">From a registered marketplace</p>
      <div class="p-3 rounded-lg font-mono text-sm" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin install <span style="color: #58a6ff;">database-data-management</span>@<span style="color: #d29922;">awesome-copilot</span>
      </div>
    </div>
    <div>
      <p class="text-sm font-medium mb-2" style="color: #3fb950;">From a GitHub repository</p>
      <div class="p-3 rounded-lg font-mono text-sm" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin install <span style="color: #58a6ff;">owner/repo</span>
      </div>
    </div>
    <div>
      <p class="text-sm font-medium mb-2" style="color: #3fb950;">From any Git URL</p>
      <div class="p-3 rounded-lg font-mono text-sm" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin install <span style="color: #58a6ff;">https://gitlab.com/owner/repo.git</span>
      </div>
    </div>
    <div>
      <p class="text-sm font-medium mb-2" style="color: #3fb950;">From a local path (development)</p>
      <div class="p-3 rounded-lg font-mono text-sm" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin install <span style="color: #58a6ff;">./my-plugin</span>
      </div>
    </div>
  </div>
  <div class="mt-5 p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
    <p class="text-xs" style="color: #8b949e;">💡 The repo must contain <code>plugin.json</code> in <code>.github/plugin/</code>, <code>.claude-plugin/</code>, or the repo root.</p>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-8" style="color: #e6edf3;">Manage Plugins</h1>
  <div class="space-y-6">
    <div>
      <p class="text-sm font-medium mb-2" style="color: #8b949e;">View installed plugins</p>
      <div class="p-4 rounded-lg font-mono text-base" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin list
      </div>
    </div>
    <div>
      <p class="text-sm font-medium mb-2" style="color: #8b949e;">Update a plugin</p>
      <div class="p-4 rounded-lg font-mono text-base" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin update <span style="color: #58a6ff;">plugin-name</span>
      </div>
    </div>
    <div>
      <p class="text-sm font-medium mb-2" style="color: #8b949e;">Remove a plugin</p>
      <div class="p-4 rounded-lg font-mono text-base" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin uninstall <span style="color: #58a6ff;">plugin-name</span>
      </div>
    </div>
  </div>
  <div class="mt-8 p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
    <p class="text-sm" style="color: #8b949e;">
      📁 Plugins stored at <code>~/.copilot/state/installed-plugins/</code>
    </p>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-6" style="color: #e6edf3;">Create a Plugin: plugin.json</h1>
  <div class="p-5 rounded-lg border" style="background: #161b22; border-color: #30363d;">
    <pre class="!text-sm !leading-relaxed" style="color: #e6edf3;">{
  <span style="color: #58a6ff;">"name"</span>: <span style="color: #3fb950;">"my-dev-tools"</span>,
  <span style="color: #58a6ff;">"description"</span>: <span style="color: #3fb950;">"React development utilities"</span>,
  <span style="color: #58a6ff;">"version"</span>: <span style="color: #3fb950;">"1.2.0"</span>,
  <span style="color: #58a6ff;">"author"</span>: {
    <span style="color: #58a6ff;">"name"</span>: <span style="color: #3fb950;">"Jane Doe"</span>,
    <span style="color: #58a6ff;">"email"</span>: <span style="color: #3fb950;">"jane@example.com"</span>
  },
  <span style="color: #58a6ff;">"license"</span>: <span style="color: #3fb950;">"MIT"</span>,
  <span style="color: #58a6ff;">"keywords"</span>: [<span style="color: #3fb950;">"react"</span>, <span style="color: #3fb950;">"frontend"</span>],
  <span style="color: #58a6ff;">"agents"</span>: <span style="color: #3fb950;">"agents/"</span>,
  <span style="color: #58a6ff;">"skills"</span>: [<span style="color: #3fb950;">"skills/"</span>],
  <span style="color: #58a6ff;">"hooks"</span>: <span style="color: #3fb950;">"hooks.json"</span>,
  <span style="color: #58a6ff;">"mcpServers"</span>: <span style="color: #3fb950;">".mcp.json"</span>
}</pre>
  </div>
  <div class="mt-4 flex gap-4">
    <div class="px-3 py-1 rounded text-xs" style="background: #21262d; color: #58a6ff;">name + version = identity</div>
    <div class="px-3 py-1 rounded text-xs" style="background: #21262d; color: #3fb950;">paths are relative to plugin root</div>
    <div class="px-3 py-1 rounded text-xs" style="background: #21262d; color: #d29922;">skills accepts string or array</div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-8" style="color: #e6edf3;">Dev → Test → Iterate</h1>
  <div class="space-y-4">
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style="background: #238636; color: #fff;">1</div>
      <div>
        <p class="!font-semibold" style="color: #e6edf3;">Install locally</p>
        <div class="mt-1 p-2 rounded font-mono text-sm" style="background: #161b22; color: #e6edf3;">copilot plugin install ./my-plugin</div>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style="background: #238636; color: #fff;">2</div>
      <div>
        <p class="!font-semibold" style="color: #e6edf3;">Verify components loaded</p>
        <div class="mt-1 p-2 rounded font-mono text-sm" style="background: #161b22; color: #e6edf3;">/agent &nbsp;&nbsp; <span style="color: #8b949e;"># list agents</span>&nbsp;&nbsp;&nbsp; /skills list &nbsp;&nbsp;<span style="color: #8b949e;"># list skills</span></div>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style="background: #238636; color: #fff;">3</div>
      <div>
        <p class="!font-semibold" style="color: #e6edf3;">Make changes → re-install (cache is used between sessions)</p>
        <div class="mt-1 p-2 rounded font-mono text-sm" style="background: #161b22; color: #e6edf3;">copilot plugin install ./my-plugin</div>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style="background: #238636; color: #fff;">4</div>
      <div>
        <p class="!font-semibold" style="color: #e6edf3;">Clean up when done</p>
        <div class="mt-1 p-2 rounded font-mono text-sm" style="background: #161b22; color: #e6edf3;">copilot plugin uninstall my-dev-tools</div>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-6" style="color: #e6edf3;">Build a Marketplace</h1>
  <div class="flex gap-6">
    <div class="flex-1">
      <p class="text-sm mb-4" style="color: #8b949e;">Create <code>marketplace.json</code> in <code>.github/plugin/</code></p>
      <div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
        <pre class="!text-xs !leading-relaxed" style="color: #e6edf3;">{
  <span style="color: #58a6ff;">"name"</span>: <span style="color: #3fb950;">"my-team-marketplace"</span>,
  <span style="color: #58a6ff;">"owner"</span>: {
    <span style="color: #58a6ff;">"name"</span>: <span style="color: #3fb950;">"Your Organization"</span>
  },
  <span style="color: #58a6ff;">"metadata"</span>: {
    <span style="color: #58a6ff;">"description"</span>: <span style="color: #3fb950;">"Curated plugins"</span>,
    <span style="color: #58a6ff;">"version"</span>: <span style="color: #3fb950;">"1.0.0"</span>
  },
  <span style="color: #58a6ff;">"plugins"</span>: [
    {
      <span style="color: #58a6ff;">"name"</span>: <span style="color: #3fb950;">"security-checks"</span>,
      <span style="color: #58a6ff;">"version"</span>: <span style="color: #3fb950;">"1.3.0"</span>,
      <span style="color: #58a6ff;">"source"</span>: <span style="color: #3fb950;">"./plugins/security"</span>
    }
  ]
}</pre>
      </div>
    </div>
    <div class="flex-1">
      <p class="text-sm mb-4" style="color: #8b949e;">Repository layout</p>
      <div class="p-4 rounded-lg border font-mono text-sm" style="background: #161b22; border-color: #30363d; color: #e6edf3;">
        <div>my-marketplace/</div>
        <div class="ml-4">├── .github/plugin/</div>
        <div class="ml-8">└── <span style="color: #f85149;">marketplace.json</span></div>
        <div class="ml-4">└── plugins/</div>
        <div class="ml-8">├── security/</div>
        <div class="ml-12">├── plugin.json</div>
        <div class="ml-12">└── agents/</div>
        <div class="ml-8">└── frontend/</div>
        <div class="ml-12">├── plugin.json</div>
        <div class="ml-12">└── skills/</div>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-8" style="color: #e6edf3;">Share Your Marketplace</h1>
  <div class="space-y-6">
    <div>
      <p class="text-sm font-medium mb-2" style="color: #3fb950;">Users register your marketplace</p>
      <div class="p-4 rounded-lg font-mono text-base" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin marketplace add <span style="color: #58a6ff;">your-org/your-marketplace</span>
      </div>
    </div>
    <div>
      <p class="text-sm font-medium mb-2" style="color: #3fb950;">Then install plugins from it</p>
      <div class="p-4 rounded-lg font-mono text-base" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin install <span style="color: #58a6ff;">security-checks</span>@<span style="color: #d29922;">my-team-marketplace</span>
      </div>
    </div>
    <div>
      <p class="text-sm font-medium mb-2" style="color: #8b949e;">Remove a marketplace</p>
      <div class="p-4 rounded-lg font-mono text-base" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin marketplace remove <span style="color: #58a6ff;">my-team-marketplace</span>
      </div>
    </div>
  </div>
  <div class="mt-6 p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
    <p class="text-sm" style="color: #8b949e;">
      🌐 Marketplaces work from GitHub, GitLab, any Git host, or local/shared filesystem.
    </p>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-6" style="color: #e6edf3;">Beyond GitHub: The Ecosystem</h1>
  <p class="text-base mb-6" style="color: #8b949e;">Plugin marketplaces are emerging across AI coding tools:</p>
  <div class="overflow-x-auto">
    <table class="w-full text-sm" style="color: #e6edf3;">
      <thead>
        <tr style="border-bottom: 1px solid #30363d;">
          <th class="text-left py-2 pr-4" style="color: #8b949e;">Feature</th>
          <th class="text-left py-2 px-3" style="color: #58a6ff;">Copilot CLI</th>
          <th class="text-left py-2 px-3" style="color: #a371f7;">Claude Code</th>
          <th class="text-left py-2 px-3" style="color: #d29922;">Cursor</th>
          <th class="text-left py-2 px-3" style="color: #3fb950;">Windsurf</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #21262d;">
          <td class="py-2 pr-4" style="color: #8b949e;">Plugin format</td>
          <td class="py-2 px-3"><code>plugin.json</code></td>
          <td class="py-2 px-3"><code>plugin.json</code></td>
          <td class="py-2 px-3">VS Code ext</td>
          <td class="py-2 px-3">VS Code ext</td>
        </tr>
        <tr style="border-bottom: 1px solid #21262d;">
          <td class="py-2 pr-4" style="color: #8b949e;">Custom marketplaces</td>
          <td class="py-2 px-3" style="color: #3fb950;">✅ Any Git repo</td>
          <td class="py-2 px-3" style="color: #3fb950;">✅ Any Git repo</td>
          <td class="py-2 px-3" style="color: #f85149;">❌</td>
          <td class="py-2 px-3" style="color: #f85149;">❌</td>
        </tr>
        <tr style="border-bottom: 1px solid #21262d;">
          <td class="py-2 pr-4" style="color: #8b949e;">CLI install</td>
          <td class="py-2 px-3" style="color: #3fb950;">✅</td>
          <td class="py-2 px-3" style="color: #3fb950;">✅</td>
          <td class="py-2 px-3" style="color: #8b949e;">GUI only</td>
          <td class="py-2 px-3" style="color: #8b949e;">GUI only</td>
        </tr>
        <tr>
          <td class="py-2 pr-4" style="color: #8b949e;">Cross-compatible</td>
          <td class="py-2 px-3" style="color: #3fb950;">✅</td>
          <td class="py-2 px-3" style="color: #3fb950;">✅</td>
          <td class="py-2 px-3" style="color: #f85149;">❌</td>
          <td class="py-2 px-3" style="color: #f85149;">❌</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-6" style="color: #e6edf3;">Cross-Compatibility</h1>
  <div class="flex items-center justify-center gap-8 mb-8">
    <div class="text-center">
      <div class="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3" style="background: #161b22; border: 1px solid #30363d;">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
      </div>
      <p class="text-sm font-medium" style="color: #58a6ff;">Copilot CLI</p>
    </div>
    <div class="text-4xl" style="color: #3fb950;">⟷</div>
    <div class="text-center">
      <div class="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3" style="background: #161b22; border: 1px solid #30363d;">
        <span class="text-4xl">🤖</span>
      </div>
      <p class="text-sm font-medium" style="color: #a371f7;">Claude Code</p>
    </div>
  </div>
  <div class="max-w-2xl mx-auto space-y-4">
    <div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <p class="text-sm" style="color: #e6edf3;">
        <code style="color: #58a6ff;">.github/plugin/</code> — recognized by <strong>both</strong> Copilot CLI and Claude Code
      </p>
    </div>
    <div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <p class="text-sm" style="color: #e6edf3;">
        <code style="color: #a371f7;">.claude-plugin/</code> — also recognized by <strong>both</strong> tools
      </p>
    </div>
    <div class="p-4 rounded-lg" style="background: #238636;">
      <p class="text-sm text-center font-medium" style="color: #fff;">
        One plugin → two ecosystems. Write once, use everywhere.
      </p>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-6" style="color: #e6edf3;">Claude Code Marketplace</h1>
  <div class="flex gap-6">
    <div class="flex-1 space-y-4">
      <p class="text-base" style="color: #8b949e;">Anthropic maintains <strong style="color: #e6edf3;">36+ official plugins</strong> at <code>anthropics/claude-code</code>:</p>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
          <span style="color: #3fb950;">•</span>
          <span class="text-sm" style="color: #e6edf3;">code-review — Confidence-scored code review</span>
        </div>
        <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
          <span style="color: #3fb950;">•</span>
          <span class="text-sm" style="color: #e6edf3;">frontend-design — Professional GUI generation</span>
        </div>
        <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
          <span style="color: #3fb950;">•</span>
          <span class="text-sm" style="color: #e6edf3;">feature-dev — Full dev workflow</span>
        </div>
        <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
          <span style="color: #3fb950;">•</span>
          <span class="text-sm" style="color: #e6edf3;">plugin-dev — Plugin development tools</span>
        </div>
        <div class="flex items-center gap-2 p-2 rounded" style="background: #161b22;">
          <span style="color: #3fb950;">•</span>
          <span class="text-sm" style="color: #e6edf3;">commit-commands — Git workflow automation</span>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <p class="text-sm mb-3" style="color: #8b949e;">Register it in Copilot CLI:</p>
      <div class="p-4 rounded-lg font-mono text-sm" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin marketplace add \<br>
        &nbsp;&nbsp;<span style="color: #58a6ff;">anthropics/claude-code</span>
      </div>
      <p class="text-sm mt-4 mb-3" style="color: #8b949e;">Then install its plugins:</p>
      <div class="p-4 rounded-lg font-mono text-sm" style="background: #161b22; color: #e6edf3;">
        <span style="color: #8b949e;">$</span> copilot plugin install \<br>
        &nbsp;&nbsp;<span style="color: #58a6ff;">code-review</span>@<span style="color: #d29922;">claude-code</span>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center px-16" style="background: #0d1117;">
  <h1 class="!text-4xl !font-bold mb-8" style="color: #e6edf3;">Quick Reference</h1>
  <div class="grid grid-cols-2 gap-5">
    <div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <h3 class="!text-sm !font-semibold mb-3" style="color: #58a6ff;">📦 Discover & Install</h3>
      <div class="font-mono text-xs space-y-1" style="color: #e6edf3;">
        <div>copilot plugin marketplace list</div>
        <div>copilot plugin marketplace browse <span style="color: #8b949e;">NAME</span></div>
        <div>copilot plugin install <span style="color: #8b949e;">PLUGIN@MKT</span></div>
        <div>copilot plugin install <span style="color: #8b949e;">owner/repo</span></div>
      </div>
    </div>
    <div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <h3 class="!text-sm !font-semibold mb-3" style="color: #3fb950;">🔧 Manage</h3>
      <div class="font-mono text-xs space-y-1" style="color: #e6edf3;">
        <div>copilot plugin list</div>
        <div>copilot plugin update <span style="color: #8b949e;">NAME</span></div>
        <div>copilot plugin uninstall <span style="color: #8b949e;">NAME</span></div>
      </div>
    </div>
    <div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <h3 class="!text-sm !font-semibold mb-3" style="color: #d29922;">🏪 Marketplaces</h3>
      <div class="font-mono text-xs space-y-1" style="color: #e6edf3;">
        <div>copilot plugin marketplace add <span style="color: #8b949e;">owner/repo</span></div>
        <div>copilot plugin marketplace remove <span style="color: #8b949e;">NAME</span></div>
      </div>
    </div>
    <div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
      <h3 class="!text-sm !font-semibold mb-3" style="color: #a371f7;">🛠️ Develop</h3>
      <div class="font-mono text-xs space-y-1" style="color: #e6edf3;">
        <div>copilot plugin install <span style="color: #8b949e;">./my-plugin</span></div>
        <div>/agent &nbsp; /skills list</div>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col items-center justify-center" style="background: #0d1117;">
  <div class="flex items-center gap-3 mb-8">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
  </div>
  <h1 class="!text-5xl !font-bold mb-4" style="color: #e6edf3;">Start Extending</h1>
  <p class="text-xl mb-8" style="color: #8b949e;">Browse → Install → Create → Share</p>
  <div class="flex gap-4 mb-10">
    <a href="https://github.com/github/copilot-plugins" class="px-5 py-2 rounded-md text-sm font-medium no-underline" style="background: #238636; color: #ffffff;">
      copilot-plugins →
    </a>
    <a href="https://github.com/github/awesome-copilot" class="px-5 py-2 rounded-md text-sm font-medium border no-underline" style="border-color: #30363d; color: #e6edf3;">
      awesome-copilot →
    </a>
  </div>
  <p class="text-sm" style="color: #484f58;">
    GitHub Copilot Marketplaces — Extend, Create, Share
  </p>
</div>
