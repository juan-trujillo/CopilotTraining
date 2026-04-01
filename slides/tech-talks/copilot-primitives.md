---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Configuration Primitives
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot Configuration Primitives - Making AI Understand Your Codebase
module: tech-talks/copilot-primitives
mdc: true
status: active
updated: 2026-03-30
---


<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 1 — Title                                                       -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: #0d1117;">
  <!-- Label -->
  <div class="flex items-center gap-2 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="#e6edf3"><path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258-.203-.532-.172-1.662.062-2.129.626-.081 1.469.258 1.969.726.594-.194 1.219-.291 1.985-.291.765 0 1.39.097 1.953.274.484-.451 1.343-.79 1.969-.709.218.435.25 1.564.046 2.113.5.613.766 1.436.766 2.274 0 1.984-1.453 3.485-3.547 3.759.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291 16 3.726 12.406 0 7.984 0 3.562 0 0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162-1.031 0-1.641-.581-2.078-1.662-.172-.435-.36-.693-.719-.742-.187-.016-.25-.097-.25-.193 0-.194.313-.339.625-.339.453 0 .844.29 1.25.887.313.468.641.678 1.031.678.391 0 .641-.146 1-.516.266-.275.469-.517.657-.678Z"/></svg>
    <span class="text-sm font-medium tracking-wide uppercase" style="color: #8b949e;">GitHub Copilot</span>
  </div>
  <!-- Heading -->
  <h1 class="!text-6xl !font-bold !leading-tight text-center max-w-4xl" style="color: #e6edf3;">
    Configuration Primitives
  </h1>
  <!-- Subtitle -->
  <p class="mt-6 text-xl text-center max-w-2xl" style="color: #8b949e;">
    Making AI Understand Your Codebase
  </p>
  <!-- Badges -->
  <div class="mt-8 flex gap-4">
    <div class="px-5 py-2 rounded-md text-sm font-medium" style="background: #238636; color: #ffffff;">
      30 Minutes
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      Developers
    </div>
    <div class="px-5 py-2 rounded-md text-sm font-medium border" style="border-color: #30363d; color: #e6edf3;">
      Engineering Teams
    </div>
  </div>
</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 2 — The Question                                                -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# The Central Question

<div class="h-full flex items-center justify-center" style="background: #0d1117;">
<div class="max-w-4xl">
<div class="text-6xl text-center mb-8">💭</div>
<div class="text-3xl font-bold text-center mb-6 leading-snug" style="color: #e6edf3;">
"How can I make GitHub Copilot understand my codebase better?"
</div>
<div class="mt-8 flex gap-6 justify-center text-sm">
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #3fb950;">👩‍💻 Developers</div>
<div class="text-xs mt-1" style="color: #8b949e;">Conventions &amp; code quality</div>
</div>
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #58a6ff;">🧑‍💼 Team Leads</div>
<div class="text-xs mt-1" style="color: #8b949e;">Consistency &amp; onboarding</div>
</div>
<div class="px-4 py-2 rounded-lg border text-center" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #d29922;">⚙️ Platform Teams</div>
<div class="text-xs mt-1" style="color: #8b949e;">Governance &amp; standards</div>
</div>
</div>
</div>
</div>

---
layout: center
name: toc
---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 3 — Table of Contents                                           -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 📖 Table of Contents

<div class="grid grid-cols-3 gap-4 mt-8">
  <div @click="$nav.go(7)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">📋</div>
    <div class="font-semibold" style="color: #e6edf3;">Instructions</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Always-on guardrails &amp; path-specific rules</div>
  </div>

  <div @click="$nav.go(9)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🧰</div>
    <div class="font-semibold" style="color: #e6edf3;">Skills</div>
    <div class="text-xs mt-1" style="color: #8b949e;">On-demand expertise packs</div>
  </div>

  <div @click="$nav.go(10)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">⚡</div>
    <div class="font-semibold" style="color: #e6edf3;">Prompts</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Reusable task workflows</div>
  </div>

  <div @click="$nav.go(11)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🤖</div>
    <div class="font-semibold" style="color: #e6edf3;">Agents</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Specialized personas &amp; handoffs</div>
  </div>

  <div @click="$nav.go(13)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🔀</div>
    <div class="font-semibold" style="color: #e6edf3;">Choosing the Right Primitive</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Comparison &amp; adoption path</div>
  </div>

  <div @click="$nav.go(14)" class="cursor-pointer p-4 rounded-xl border transition-all hover:scale-105" style="background: #161b22; border-color: #30363d;">
    <div class="text-2xl mb-2">🆕</div>
    <div class="font-semibold" style="color: #e6edf3;">What's New (March 2026)</div>
    <div class="text-xs mt-1" style="color: #8b949e;">Editor, Hooks, Plugins</div>
  </div>
</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 4 — The Problem                                                 -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# The Problem

<div class="grid grid-cols-2 gap-4 mt-6 text-xs" style="background: #0d1117;">

<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #f85149;">
<div class="font-bold mb-2" style="color: #f85149;">Generic responses that ignore your conventions</div>
<div style="color: #8b949e;">You use Prisma — Copilot suggests raw SQL. You use Vitest — it generates Mocha patterns. Every suggestion needs manual correction.</div>
</div>

<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #d29922;">
<div class="font-bold mb-2" style="color: #d29922;">Repeated context in every conversation</div>
<div style="color: #8b949e;">"We use TypeScript with strict mode, our tests are in __tests__/, we use..." — copy-pasted into every single chat session.</div>
</div>

<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #e3b341;">
<div class="font-bold mb-2" style="color: #e3b341;">Inconsistent AI behavior across the team</div>
<div style="color: #8b949e;">Same question, different developer, wildly different response quality — because context varies person to person.</div>
</div>

<div class="p-4 rounded-lg" style="background: #161b22; border-left: 4px solid #58a6ff;">
<div class="font-bold mb-2" style="color: #58a6ff;">One-size-fits-all doesn't fit anyone</div>
<div style="color: #8b949e;">Default Copilot treats your React frontend and Python data pipeline identically — no awareness of project boundaries.</div>
</div>

</div>

<div class="mt-4 p-3 rounded-xl border text-center text-sm" style="background: #161b22; border-color: #30363d;">
<div class="font-bold" style="color: #e6edf3;">Configuration primitives let you encode project knowledge once and share it with the whole team</div>
</div>

<div style="position: absolute; bottom: 16px; left: 32px; opacity: 0.4; font-size: 0.75rem; color: #8b949e;">[1] code.visualstudio.com/docs/copilot/copilot-customization</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 5 — The Solution: 4 Configuration Primitives                    -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# The Solution: 4 Configuration Primitives

<div class="mt-4" style="background: #0d1117;">

<div class="rounded-xl p-5 border space-y-3" style="background: #161b22; border-color: #30363d;">

  <div class="flex items-center gap-4 p-3 rounded-lg border" style="background: #0d1117; border-color: #30363d;">
    <div class="text-2xl w-10">📋</div>
    <div>
      <span class="font-bold" style="color: #e6edf3;">Instructions</span>
      <span class="ml-2 text-sm" style="color: #8b949e;">Always-on guardrails injected into every request</span>
    </div>
    <div class="ml-auto text-xs font-mono" style="color: #58a6ff;">.instructions.md</div>
  </div>

  <div class="flex items-center gap-4 p-3 rounded-lg border" style="background: #0d1117; border-color: #30363d;">
    <div class="text-2xl w-10">🧰</div>
    <div>
      <span class="font-bold" style="color: #e6edf3;">Skills</span>
      <span class="ml-2 text-sm" style="color: #8b949e;">On-demand capability packs loaded by relevance</span>
    </div>
    <div class="ml-auto text-xs font-mono" style="color: #58a6ff;">SKILL.md</div>
  </div>

  <div class="flex items-center gap-4 p-3 rounded-lg border" style="background: #0d1117; border-color: #30363d;">
    <div class="text-2xl w-10">⚡</div>
    <div>
      <span class="font-bold" style="color: #e6edf3;">Prompts</span>
      <span class="ml-2 text-sm" style="color: #8b949e;">Reusable task templates via /command</span>
    </div>
    <div class="ml-auto text-xs font-mono" style="color: #58a6ff;">.prompt.md</div>
  </div>

  <div class="flex items-center gap-4 p-3 rounded-lg border" style="background: #0d1117; border-color: #30363d;">
    <div class="text-2xl w-10">🤖</div>
    <div>
      <span class="font-bold" style="color: #e6edf3;">Agents</span>
      <span class="ml-2 text-sm" style="color: #8b949e;">Specialized personas with constrained tools</span>
    </div>
    <div class="ml-auto text-xs font-mono" style="color: #58a6ff;">.agent.md</div>
  </div>

</div>

<div class="mt-4 text-center text-sm" style="color: #8b949e;">All Markdown files · Version controlled · Team-shared</div>

</div>

<div style="position: absolute; bottom: 16px; left: 32px; opacity: 0.4; font-size: 0.75rem; color: #8b949e;">[3] code.visualstudio.com/docs/copilot/customization/overview</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 6 — The Shift                                                   -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 🧠 The Shift

<div class="h-full flex flex-col items-center justify-center -mt-12" style="background: #0d1117;">
  <div class="max-w-4xl w-full">

<div class="grid grid-cols-3 gap-8 items-center">

<div class="text-center p-6 rounded-xl border" style="background: #161b22; border-color: #f85149;">
  <div class="text-4xl mb-4">🔄</div>
  <div class="text-lg font-bold" style="color: #f85149;">Repeating context</div>
  <div class="text-sm mt-2" style="color: #8b949e;">in every conversation</div>
</div>

<div class="text-center">
  <div class="text-5xl" style="color: #3fb950;">→</div>
</div>

<div class="text-center p-6 rounded-xl border" style="background: #161b22; border-color: #3fb950;">
  <div class="text-4xl mb-4">📁</div>
  <div class="text-lg font-bold" style="color: #3fb950;">Encode once</div>
  <div class="text-sm mt-2" style="color: #8b949e;">in configuration files</div>
</div>

</div>

<div class="mt-10 text-center">
  <div class="text-xl italic" style="color: #c9d1d9;">
    "Every interaction becomes smarter — automatically."
  </div>
</div>

  </div>
</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 7 — Instructions: The Foundation                                -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 📋 Instructions: The Foundation

<div class="mt-4 grid grid-cols-2 gap-6" style="background: #0d1117;">

<div>

<div class="font-bold mb-2" style="color: #e6edf3;">How It Works</div>

<div class="space-y-1 text-sm" style="color: #c9d1d9;">

- Create `.github/copilot-instructions.md`
- Contents **automatically injected** into every request
- No special syntax — just Markdown
- Appears in **References** section of chat responses
- Use <code>/create-instruction</code> to scaffold from the editor

</div>

<div class="font-bold mt-4 mb-2" style="color: #e6edf3;">Two Types</div>

<div class="space-y-2">
<div class="p-2 rounded text-sm border" style="background: #161b22; border-color: #30363d;">
  <span class="font-bold" style="color: #3fb950;">Repository-wide</span>
  <span class="ml-1" style="color: #8b949e;">.github/copilot-instructions.md</span>
</div>
<div class="p-2 rounded text-sm border" style="background: #161b22; border-color: #30363d;">
  <span class="font-bold" style="color: #58a6ff;">Path-specific</span>
  <span class="ml-1" style="color: #8b949e;">.github/instructions/*.instructions.md</span>
</div>
</div>

<div class="mt-3 text-xs" style="color: #8b949e;">Also recognized: <code style="color: #c9d1d9;">AGENTS.md</code>, <code style="color: #c9d1d9;">CLAUDE.md</code>, <code style="color: #c9d1d9;">COPILOT.md</code></div>

</div>

<div>

<div class="font-bold mb-2" style="color: #e6edf3;">Example</div>

```markdown
# Repository Instructions

This repo uses TypeScript with strict
type checking enabled.

## Build and Test
- Build: `npm run build`
- Tests: `npm test` (Vitest)
- Tests in `__tests__/` co-located

## Coding Standards
- Functional programming patterns
- Explicit return types on exports
- JSDoc for all public functions
- Named exports only (no default)
```

</div>

</div>

<div style="position: absolute; bottom: 16px; left: 32px; opacity: 0.4; font-size: 0.75rem; color: #8b949e;">[2] code.visualstudio.com/docs/copilot/customization/custom-instructions</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 8 — Path-Specific Instructions                                  -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 📋 Path-Specific Instructions

<div class="mt-4 grid grid-cols-2 gap-6" style="background: #0d1117;">

<div>

<div class="font-bold mb-2" style="color: #e6edf3;">Targeted Rules via Glob Patterns</div>

<div class="text-sm mb-3" style="color: #c9d1d9;">Apply <strong>different conventions</strong> to different parts of your codebase automatically:</div>

```markdown
---
applyTo: "src/models/**/*.ts"
---

# Database Model Instructions

1. Use Prisma schema definitions
2. Include JSDoc with field descriptions
3. Define relationships with @relation
4. Add indexes for foreign keys
5. snake_case DB columns, camelCase TS
6. Always include createdAt, updatedAt
```

<div class="mt-3 text-sm" style="color: #8b949e;">Path-specific + repo-wide instructions combine when both match.</div>

</div>

<div>

<div class="font-bold mb-2" style="color: #e6edf3;">Common Patterns</div>

<div class="space-y-3 mt-2">
<div class="p-3 rounded-lg text-sm" style="background: #161b22;">
  <div class="font-mono text-xs" style="color: #3fb950;">applyTo: "**/*.test.ts"</div>
  <div class="mt-1" style="color: #c9d1d9;">Test writing standards</div>
</div>
<div class="p-3 rounded-lg text-sm" style="background: #161b22;">
  <div class="font-mono text-xs" style="color: #58a6ff;">applyTo: "src/api/**/*.ts"</div>
  <div class="mt-1" style="color: #c9d1d9;">API route conventions</div>
</div>
<div class="p-3 rounded-lg text-sm" style="background: #161b22;">
  <div class="font-mono text-xs" style="color: #d29922;">applyTo: "**/*.css"</div>
  <div class="mt-1" style="color: #c9d1d9;">Styling guidelines</div>
</div>
<div class="p-3 rounded-lg text-sm" style="background: #161b22;">
  <div class="font-mono text-xs" style="color: #8534F3;">applyTo: "docs/**/*.md"</div>
  <div class="mt-1" style="color: #c9d1d9;">Documentation standards</div>
</div>
</div>

<div class="mt-4 p-3 rounded-lg border text-sm" style="background: #161b22; border-color: #d29922;">
  <span style="color: #d29922;">💡 Tip:</span> <span style="color: #c9d1d9;">Keep instructions under 2 pages — context budget matters</span>
</div>

</div>

</div>

<div style="position: absolute; bottom: 16px; left: 32px; opacity: 0.4; font-size: 0.75rem; color: #8b949e;">[6] docs.github.com/copilot/customizing-copilot/adding-repository-custom-instructions</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 9 — Skills: On-Demand Expertise                                 -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 🧰 Skills: On-Demand Expertise

<div class="mt-4 grid grid-cols-2 gap-6" style="background: #0d1117;">

<div>

<div class="font-bold mb-2" style="color: #e6edf3;">Progressive 3-Level Loading</div>

<div class="space-y-3 mt-2">
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold text-sm" style="color: #e6edf3;">Level 1: Discovery</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Name + description always visible (lightweight)</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold text-sm" style="color: #e6edf3;">Level 2: Instructions</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Full SKILL.md loaded when prompt matches</div>
</div>
<div class="p-3 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold text-sm" style="color: #e6edf3;">Level 3: Resources</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Scripts, templates, examples loaded on-demand</div>
</div>
</div>

<div class="font-bold mt-4 mb-2" style="color: #e6edf3;">Open Standard</div>

<div class="p-3 rounded-lg border text-sm" style="background: #161b22; border-color: #30363d;">
  <span style="color: #c9d1d9;">Works across</span>
  <span class="font-bold" style="color: #e6edf3;"> VS Code</span>,
  <span class="font-bold" style="color: #e6edf3;">Copilot CLI</span>, and
  <span class="font-bold" style="color: #e6edf3;">coding agent</span>
  <div class="text-xs mt-1" style="color: #8b949e;">agentskills.io · Use <code>/create-skill</code> to scaffold</div>
</div>

</div>

<div>

<div class="font-bold mb-2" style="color: #e6edf3;">Skill Structure</div>

```
.github/skills/
  test-runner/
    SKILL.md           # Instructions
    test-template.ts   # Template file
    scripts/
      run-tests.sh     # Executable
    examples/
      api-test.ts      # Reference
```

<div class="font-bold mt-3 mb-2" style="color: #e6edf3;">Example SKILL.md</div>

```markdown
---
name: test-runner
description: Run tests, analyze
  failures, suggest fixes
---

# Test Runner Skill

## Process
1. Locate test files matching glob
2. Run with `npm test -- --reporter`
3. Analyze failure stack traces
4. Suggest targeted fixes
```

</div>

</div>

<div style="position: absolute; bottom: 16px; left: 32px; opacity: 0.4; font-size: 0.75rem; color: #8b949e;">[4] code.visualstudio.com/docs/copilot/customization/agent-skills</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 10 — Custom Prompts: Reusable Workflows                         -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# ⚡ Custom Prompts: Reusable Workflows

<div class="mt-4 grid grid-cols-2 gap-6" style="background: #0d1117;">

<div>

<div class="font-bold mb-2" style="color: #e6edf3;">How Prompts Work</div>

<div class="space-y-1 text-sm" style="color: #c9d1d9;">

- Create `.github/prompts/*.prompt.md`
- Invoke in chat: type `/` + prompt name
- **On-demand** — only runs when you call it
- Supports variables: `${selection}`, `${file}`, `${input:name}`
- Can reference instructions via Markdown links
- Specifies agent and tools in frontmatter

</div>

<div class="font-bold mt-4 mb-2" style="color: #e6edf3;">Usage</div>

```
/component MyButtonGroup
/test UserService
/security-review
```

<div class="mt-3 p-3 rounded-lg border text-sm" style="background: #161b22; border-color: #58a6ff;">
  <span style="color: #58a6ff;">Key difference:</span>
  <span style="color: #c9d1d9;"> Instructions are always-on. Prompts are </span><span class="font-bold" style="color: #e6edf3;">user-invoked</span><span style="color: #c9d1d9;">.</span>
</div>

<div class="mt-2 text-xs" style="color: #8b949e;">Use <code>/create-prompt</code> to scaffold · Syncs via Settings Sync</div>

</div>

<div>

<div class="font-bold mb-2" style="color: #e6edf3;">Example Prompt File</div>

```markdown
---
name: component
description: Scaffold a React component
  with tests and documentation
tools: ['editFiles', 'createFile']
agent: agent
---

# Component Generator

Create a new React component:

src/components/{{componentName}}/
  {{componentName}}.tsx
  {{componentName}}.types.ts
  {{componentName}}.module.css
  __tests__/
    {{componentName}}.test.tsx
  index.ts

## Requirements
- Functional component with hooks
- TypeScript props interface
- Follow [coding standards](
    ../../copilot-instructions.md)
```

</div>

</div>

<div style="position: absolute; bottom: 16px; left: 32px; opacity: 0.4; font-size: 0.75rem; color: #8b949e;">[3] code.visualstudio.com/docs/copilot/customization/prompt-files</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 11 — Agents: Specialized Personas                               -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 🤖 Agents: Specialized Personas

<div class="mt-4 grid grid-cols-2 gap-6" style="background: #0d1117;">

<div>

<div class="font-bold mb-2" style="color: #e6edf3;">What Agents Do</div>

<div class="space-y-1 text-sm" style="color: #c9d1d9;">

- Define **who** the AI becomes for a session
- Constrain available **tools** (read-only, full access, etc.)
- Set **model priority** arrays (fallback chain)
- Enable **handoffs** between agents
- Support **subagent** delegation for parallel work

</div>

<div class="font-bold mt-4 mb-2" style="color: #e6edf3;">Why Constrain Tools?</div>

<div class="space-y-2">
<div class="p-2 rounded text-sm border" style="background: #161b22; border-color: #30363d;">
  <span class="font-bold" style="color: #58a6ff;">Planner:</span>
  <span style="color: #8b949e;"> search, readFile, listFiles</span>
  <span class="text-xs ml-1" style="color: #58a6ff;">(read-only)</span>
</div>
<div class="p-2 rounded text-sm border" style="background: #161b22; border-color: #30363d;">
  <span class="font-bold" style="color: #3fb950;">Implementer:</span>
  <span style="color: #8b949e;"> editFiles, terminal, search</span>
  <span class="text-xs ml-1" style="color: #3fb950;">(full access)</span>
</div>
<div class="p-2 rounded text-sm border" style="background: #161b22; border-color: #30363d;">
  <span class="font-bold" style="color: #d29922;">Reviewer:</span>
  <span style="color: #8b949e;"> search, readFile, fetch</span>
  <span class="text-xs ml-1" style="color: #d29922;">(analysis only)</span>
</div>
</div>

</div>

<div>

<div class="font-bold mb-2" style="color: #e6edf3;">Example Agent</div>

```markdown
---
name: planner
description: Generate implementation
  plans. Read-only.
tools:
  - search
  - readFile
  - listFiles
  - fetch
model:
  - Claude Sonnet 4 (copilot)
  - GPT-4.1 (copilot)
  - o4-mini (copilot)
handoffs:
  - label: Start Implementation
    agent: agent
    prompt: Implement the plan above.
---

# Planning Agent

You are a senior software architect.

## Rules
- NEVER modify files
- Cite specific files and lines
- Include effort estimates
- Flag decisions needing discussion
```

</div>

</div>

<div style="position: absolute; bottom: 16px; left: 32px; opacity: 0.4; font-size: 0.75rem; color: #8b949e;">[5] code.visualstudio.com/docs/copilot/customization/custom-agents</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 12 — Handoffs: Multi-Agent Workflows                            -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 🤖 Handoffs: Multi-Agent Workflows

<div class="mt-6" style="background: #0d1117;">

<div class="flex items-center justify-center gap-4">

<div class="p-4 rounded-xl border text-center w-44" style="background: #161b22; border-color: #58a6ff;">
  <div class="text-3xl mb-2">📋</div>
  <div class="font-bold" style="color: #58a6ff;">Plan</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Read-only research</div>
  <div class="text-xs mt-1" style="color: #58a6ff;">search, readFile</div>
</div>

<div class="text-2xl" style="color: #3fb950;">→</div>

<div class="p-4 rounded-xl border text-center w-44" style="background: #161b22; border-color: #3fb950;">
  <div class="text-3xl mb-2">🔨</div>
  <div class="font-bold" style="color: #3fb950;">Implement</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Full editing access</div>
  <div class="text-xs mt-1" style="color: #3fb950;">editFiles, terminal</div>
</div>

<div class="text-2xl" style="color: #3fb950;">→</div>

<div class="p-4 rounded-xl border text-center w-44" style="background: #161b22; border-color: #8534F3;">
  <div class="text-3xl mb-2">🔍</div>
  <div class="font-bold" style="color: #8534F3;">Review</div>
  <div class="text-xs mt-1" style="color: #8b949e;">Security analysis</div>
  <div class="text-xs mt-1" style="color: #8534F3;">search, fetch</div>
</div>

</div>

<div class="mt-6 rounded-lg border text-sm max-w-xl mx-auto p-4" style="background: #161b22; border-color: #30363d;">

```yaml
# In planner.agent.md frontmatter
handoffs:
  - label: Start Implementation
    agent: agent
    prompt: Implement the plan outlined above.
    send: false
  - label: Review Code
    agent: security-reviewer
    prompt: Review for security issues.
```

</div>

<div class="mt-4 text-center text-sm" style="color: #8b949e;">Each agent has its own tools and constraints — context flows between them via handoffs</div>

</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 13 — Choosing the Right Primitive                               -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# Choosing the Right Primitive

<div class="mt-4" style="background: #0d1117;">

<table class="w-full text-sm">
<thead>
<tr style="border-bottom: 1px solid #30363d;">
  <th class="text-left p-2" style="color: #8b949e;">Aspect</th>
  <th class="text-left p-2" style="color: #e6edf3;">📋 Instructions</th>
  <th class="text-left p-2" style="color: #e6edf3;">🧰 Skills</th>
  <th class="text-left p-2" style="color: #e6edf3;">⚡ Prompts</th>
  <th class="text-left p-2" style="color: #e6edf3;">🤖 Agents</th>
</tr>
</thead>
<tbody style="color: #c9d1d9;">
<tr style="border-bottom: 1px solid #161b22;">
  <td class="p-2 font-medium" style="color: #8b949e;">Loading</td>
  <td class="p-2">Always-on</td>
  <td class="p-2">AI matches</td>
  <td class="p-2">User invokes /</td>
  <td class="p-2">User selects</td>
</tr>
<tr style="border-bottom: 1px solid #161b22;">
  <td class="p-2 font-medium" style="color: #8b949e;">Scope</td>
  <td class="p-2">Every request</td>
  <td class="p-2">When relevant</td>
  <td class="p-2">Single task</td>
  <td class="p-2">Full session</td>
</tr>
<tr style="border-bottom: 1px solid #161b22;">
  <td class="p-2 font-medium" style="color: #8b949e;">Includes</td>
  <td class="p-2">Markdown</td>
  <td class="p-2">Scripts, files</td>
  <td class="p-2">Variables</td>
  <td class="p-2">Tool restrictions</td>
</tr>
<tr style="border-bottom: 1px solid #161b22;">
  <td class="p-2 font-medium" style="color: #8b949e;">Portability</td>
  <td class="p-2">VS Code + GH</td>
  <td class="p-2">VS Code + CLI</td>
  <td class="p-2">VS Code</td>
  <td class="p-2">VS Code + CLI</td>
</tr>
<tr>
  <td class="p-2 font-medium" style="color: #8b949e;">Setup</td>
  <td class="p-2" style="color: #3fb950;">5 min</td>
  <td class="p-2" style="color: #58a6ff;">15 min</td>
  <td class="p-2" style="color: #58a6ff;">10 min</td>
  <td class="p-2" style="color: #d29922;">20 min</td>
</tr>
</tbody>
</table>

<div class="mt-5 p-4 rounded-lg border" style="background: #161b22; border-color: #d29922;">
  <div class="font-bold text-sm" style="color: #d29922;">💡 Progressive Adoption Path</div>
  <div class="text-sm mt-2" style="color: #c9d1d9;">
    <span class="font-bold" style="color: #3fb950;">Week 1:</span> copilot-instructions.md →
    <span class="font-bold" style="color: #58a6ff;">Week 2:</span> path-specific instructions →
    <span class="font-bold" style="color: #58a6ff;">Week 3:</span> first prompt →
    <span class="font-bold" style="color: #d29922;">Month 2+:</span> skills &amp; agents
  </div>
</div>

</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 14 — What's New: Chat Customizations Editor                     -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 🆕 What's New: Chat Customizations Editor

<div class="mt-4" style="background: #0d1117;">

<div class="p-4 rounded-lg border mb-4" style="background: #161b22; border-color: #3fb950; border-left: 4px solid #3fb950;">
<div class="font-bold" style="color: #3fb950;">Centralized UI for managing all configuration primitives</div>
<div class="text-sm mt-1" style="color: #8b949e;">March 2026 — VS Code 1.100+</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold mb-2" style="color: #e6edf3;">Scaffold Commands</div>
<div class="space-y-2">
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <code style="color: #58a6ff;">/create-instruction</code> <span style="color: #8b949e;">— New .instructions.md with applyTo</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <code style="color: #58a6ff;">/create-prompt</code> <span style="color: #8b949e;">— New .prompt.md with frontmatter</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <code style="color: #58a6ff;">/create-skill</code> <span style="color: #8b949e;">— New SKILL.md + directory structure</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <code style="color: #58a6ff;">/create-agent</code> <span style="color: #8b949e;">— New .agent.md with tools &amp; model</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <code style="color: #58a6ff;">/create-hook</code> <span style="color: #8b949e;">— New agent hook definition</span>
</div>
</div>
</div>

<div>
<div class="font-bold mb-2" style="color: #e6edf3;">Editor Tabs</div>
<div class="space-y-2">
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <span style="color: #e6edf3;">📋 Instructions</span> <span style="color: #8b949e;">— Browse, edit, toggle repo-wide &amp; path-specific</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <span style="color: #e6edf3;">🧰 Skills</span> <span style="color: #8b949e;">— View loaded skills, test matching</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <span style="color: #e6edf3;">⚡ Prompts</span> <span style="color: #8b949e;">— Preview, test with sample inputs</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <span style="color: #e6edf3;">🤖 Agents</span> <span style="color: #8b949e;">— Configure tools, model, handoffs</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <span style="color: #e6edf3;">🔌 Plugins</span> <span style="color: #8b949e;">— Install, configure, manage bundles</span>
</div>
</div>
</div>

</div>

</div>

<div style="position: absolute; bottom: 16px; left: 32px; opacity: 0.4; font-size: 0.75rem; color: #8b949e;">[13] code.visualstudio.com/docs/copilot/customization/chat-customizations</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 15 — What's New: Agent Hooks                                    -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 🆕 What's New: Agent Hooks

<div class="mt-4" style="background: #0d1117;">

<div class="p-4 rounded-lg border mb-4" style="background: #161b22; border-color: #3fb950; border-left: 4px solid #3fb950;">
<div class="font-bold" style="color: #3fb950;">Lifecycle hooks that run shell commands at key moments in agent execution</div>
<div class="text-sm mt-1" style="color: #8b949e;">Available in VS Code Insiders — ships stable April 2026</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold mb-2" style="color: #e6edf3;">Hook Lifecycle Events</div>
<table class="w-full text-xs">
<thead>
<tr style="border-bottom: 1px solid #30363d;">
  <th class="text-left p-1" style="color: #8b949e;">Event</th>
  <th class="text-left p-1" style="color: #8b949e;">Fires When</th>
</tr>
</thead>
<tbody style="color: #c9d1d9;">
<tr style="border-bottom: 1px solid #161b22;">
  <td class="p-1"><code>SessionStart</code></td>
  <td class="p-1">Agent session begins</td>
</tr>
<tr style="border-bottom: 1px solid #161b22;">
  <td class="p-1"><code>PreToolUse</code></td>
  <td class="p-1">Before any tool call</td>
</tr>
<tr style="border-bottom: 1px solid #161b22;">
  <td class="p-1"><code>PostToolUse</code></td>
  <td class="p-1">After a tool call completes</td>
</tr>
<tr style="border-bottom: 1px solid #161b22;">
  <td class="p-1"><code>PreMessage</code></td>
  <td class="p-1">Before sending user message</td>
</tr>
<tr style="border-bottom: 1px solid #161b22;">
  <td class="p-1"><code>PostMessage</code></td>
  <td class="p-1">After agent response</td>
</tr>
<tr>
  <td class="p-1"><code>Stop</code></td>
  <td class="p-1">Agent session ends</td>
</tr>
</tbody>
</table>
</div>

<div>
<div class="font-bold mb-2" style="color: #e6edf3;">Example: Auto-format on Save</div>

```json
// .vscode/settings.json
"github.copilot.chat.agent.hooks": {
  "PostToolUse": [
    {
      "tool": "editFile",
      "command": "npx prettier --write",
      "args": ["${filePath}"],
      "blocking": true
    }
  ]
}
```

<div class="mt-3 p-2 rounded border text-xs" style="background: #161b22; border-color: #30363d;">
  <span style="color: #d29922;">💡</span>
  <span style="color: #c9d1d9;"> Hooks can also be scoped to a specific agent via <code>hooks</code> in agent frontmatter</span>
</div>
</div>

</div>

</div>

<div style="position: absolute; bottom: 16px; left: 32px; opacity: 0.4; font-size: 0.75rem; color: #8b949e;">[14] code.visualstudio.com/docs/copilot/customization/agent-hooks</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 16 — What's New: Agent Plugins                                  -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 🆕 What's New: Agent Plugins

<div class="mt-4" style="background: #0d1117;">

<div class="p-4 rounded-lg border mb-4" style="background: #161b22; border-color: #3fb950; border-left: 4px solid #3fb950;">
<div class="font-bold" style="color: #3fb950;">Shareable bundles that package skills, agents, hooks, and MCP servers together</div>
<div class="text-sm mt-1" style="color: #8b949e;">Preview — March 2026</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div>
<div class="font-bold mb-2" style="color: #e6edf3;">What a Plugin Contains</div>

<div class="space-y-2">
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <span style="color: #e6edf3;">🧰 Skills</span> <span style="color: #8b949e;">— Domain expertise packs</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <span style="color: #e6edf3;">🤖 Agents</span> <span style="color: #8b949e;">— Preconfigured personas</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <span style="color: #e6edf3;">⚙️ Hooks</span> <span style="color: #8b949e;">— Lifecycle automations</span>
</div>
<div class="p-2 rounded border" style="background: #0d1117; border-color: #30363d;">
  <span style="color: #e6edf3;">🔌 MCP Servers</span> <span style="color: #8b949e;">— External tool integrations</span>
</div>
</div>

<div class="font-bold mt-4 mb-2" style="color: #e6edf3;">Discovery</div>

<div class="p-3 rounded border" style="background: #0d1117; border-color: #30363d;">
  <div style="color: #c9d1d9;">Use <code style="color: #58a6ff;">@agentPlugins</code> in chat to browse and install plugins from the marketplace</div>
</div>

</div>

<div>
<div class="font-bold mb-2" style="color: #e6edf3;">Plugin Manifest</div>

```json
{
  "name": "react-patterns",
  "version": "1.2.0",
  "description": "React best practices",
  "skills": ["./skills/component"],
  "agents": ["./agents/reviewer.agent.md"],
  "hooks": {
    "PostToolUse": [{
      "tool": "editFile",
      "command": "npx eslint --fix",
      "args": ["${filePath}"]
    }]
  },
  "mcpServers": {
    "storybook": {
      "command": "npx",
      "args": ["storybook-mcp"]
    }
  }
}
```

<div class="mt-3 text-xs" style="color: #8b949e;">
  Community sources: <code style="color: #c9d1d9;">github.com/copilot-plugins</code> · <code style="color: #c9d1d9;">awesome-copilot</code>
</div>

</div>

</div>

</div>

<div style="position: absolute; bottom: 16px; left: 32px; opacity: 0.4; font-size: 0.75rem; color: #8b949e;">[15] code.visualstudio.com/docs/copilot/customization/agent-plugins</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 17 — Real-World Use Cases                                       -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# Real-World Use Cases

<div class="mt-4 grid grid-cols-2 gap-4" style="background: #0d1117;">

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold" style="color: #e6edf3;">🏗️ Monorepo Conventions</div>
  <div class="text-xs mt-1 font-medium" style="color: #8b949e;">Primitive: Path-specific Instructions</div>
  <div class="text-sm mt-2" style="color: #c9d1d9;">React frontend, Node backend, React Native mobile — each gets its own conventions via applyTo globs</div>
  <div class="mt-2 text-sm font-bold" style="color: #3fb950;">40% fewer code review style comments</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold" style="color: #e6edf3;">🧪 Test Standardization</div>
  <div class="text-xs mt-1 font-medium" style="color: #8b949e;">Primitive: Prompt + Skill</div>
  <div class="text-sm mt-2" style="color: #c9d1d9;">/test command generates conformant tests. Test-runner skill analyzes failures and suggests fixes.</div>
  <div class="mt-2 text-sm font-bold" style="color: #3fb950;">Conformant tests from day 1</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold" style="color: #e6edf3;">🗄️ Database Safety</div>
  <div class="text-xs mt-1 font-medium" style="color: #8b949e;">Primitive: Agent + Hooks</div>
  <div class="text-sm mt-2" style="color: #c9d1d9;">DB admin agent enforces 3NF, generates up/down migrations. PostToolUse hook validates SQL before commit.</div>
  <div class="mt-2 text-sm font-bold" style="color: #3fb950;">Zero migration rollbacks in 6 months</div>
</div>

<div class="p-4 rounded-lg border" style="background: #161b22; border-color: #30363d;">
  <div class="font-bold" style="color: #e6edf3;">🚀 Fast Onboarding</div>
  <div class="text-xs mt-1 font-medium" style="color: #8b949e;">Primitive: Instructions + Prompt + Plugin</div>
  <div class="text-sm mt-2" style="color: #c9d1d9;">Instructions document architecture. /onboard prompt provides guided codebase tour. Plugin bundles the full setup.</div>
  <div class="mt-2 text-sm font-bold" style="color: #3fb950;">2 weeks → 3 days to first commit</div>
</div>

</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 18 — Mental Model Shift                                         -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 🧠 Mental Model Shift

<div class="mt-4 grid grid-cols-2 gap-6" style="background: #0d1117;">

<div>

<div class="font-bold mb-3" style="color: #3fb950;">✅ Move Toward</div>

<div class="space-y-2 text-sm">
<div class="p-2 rounded border" style="background: #161b22; border-color: #3fb950;">
  <span class="font-bold" style="color: #e6edf3;">File-based config</span>
  <div class="text-xs mt-1" style="color: #8b949e;">Encode conventions once in .github/ instead of repeating in every prompt</div>
</div>
<div class="p-2 rounded border" style="background: #161b22; border-color: #3fb950;">
  <span class="font-bold" style="color: #e6edf3;">Progressive enhancement</span>
  <div class="text-xs mt-1" style="color: #8b949e;">Start simple, add complexity only when clear need emerges</div>
</div>
<div class="p-2 rounded border" style="background: #161b22; border-color: #3fb950;">
  <span class="font-bold" style="color: #e6edf3;">Team-shared AI knowledge</span>
  <div class="text-xs mt-1" style="color: #8b949e;">Config in version control = reviewable institutional knowledge</div>
</div>
</div>

</div>

<div>

<div class="font-bold mb-3" style="color: #f85149;">🛑 Move Against</div>

<div class="space-y-2 text-sm">
<div class="p-2 rounded border" style="background: #161b22; border-color: #f85149;">
  <span class="font-bold" style="color: #e6edf3;">Over-engineering with agents first</span>
  <div class="text-xs mt-1" style="color: #8b949e;">80% of teams get most value from instructions alone</div>
</div>
<div class="p-2 rounded border" style="background: #161b22; border-color: #f85149;">
  <span class="font-bold" style="color: #e6edf3;">Massive instruction files</span>
  <div class="text-xs mt-1" style="color: #8b949e;">Keep under 2 pages — bloat consumes your context budget</div>
</div>
<div class="p-2 rounded border" style="background: #161b22; border-color: #f85149;">
  <span class="font-bold" style="color: #e6edf3;">Task-specific content in instructions</span>
  <div class="text-xs mt-1" style="color: #8b949e;">General conventions only — use prompts for specific tasks</div>
</div>
</div>

<div class="font-bold mt-4 mb-2" style="color: #d29922;">⚠️ Move Away</div>

<div class="p-2 rounded border text-sm" style="background: #161b22; border-color: #d29922;">
  <span class="font-bold" style="color: #e6edf3;">Copy-pasting context every conversation</span>
  <div class="text-xs mt-1" style="color: #8b949e;">Instructions eliminate this entirely — encode once, apply everywhere</div>
</div>

</div>

</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 19 — What You Can Do Today                                      -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# ✅ What You Can Do Today

<div class="mt-4 grid grid-cols-3 gap-4" style="background: #0d1117;">

<div class="p-4 rounded-xl border" style="background: #161b22; border-color: #3fb950;">
  <div class="text-sm font-bold mb-3" style="color: #3fb950;">⏱️ 5 Minutes</div>
  <div class="space-y-2 text-sm" style="color: #c9d1d9;">
    <div>☐ Create <code class="text-xs">.github/copilot-instructions.md</code></div>
    <div>☐ Add tech stack + build commands</div>
    <div>☐ Try <code class="text-xs">/create-instruction</code></div>
  </div>
</div>

<div class="p-4 rounded-xl border" style="background: #161b22; border-color: #58a6ff;">
  <div class="text-sm font-bold mb-3" style="color: #58a6ff;">⏱️ 1 Hour</div>
  <div class="space-y-2 text-sm" style="color: #c9d1d9;">
    <div>☐ Add path-specific instructions</div>
    <div>☐ Create first <code class="text-xs">.prompt.md</code></div>
    <div>☐ Browse <a href="https://github.com/github/awesome-copilot" style="color: #58a6ff;">Awesome Copilot</a> examples</div>
  </div>
</div>

<div class="p-4 rounded-xl border" style="background: #161b22; border-color: #d29922;">
  <div class="text-sm font-bold mb-3" style="color: #d29922;">⏱️ 2-4 Hours</div>
  <div class="space-y-2 text-sm" style="color: #c9d1d9;">
    <div>☐ Build a skill for a common task</div>
    <div>☐ Create a planning agent</div>
    <div>☐ Set up multi-agent workflow</div>
  </div>
</div>

</div>

<div class="mt-6 p-4 rounded-lg border text-center" style="background: #161b22; border-color: #3fb950;">
  <div class="text-lg font-bold" style="color: #3fb950;">Start with instructions. Get value in 5 minutes.</div>
  <div class="text-sm mt-1" style="color: #8b949e;">Add complexity only when clear need emerges.</div>
</div>

---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 20 — References                                                 -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# 📖 References

<div class="grid grid-cols-2 gap-4 text-xs mt-6" style="background: #0d1117;">

<div class="space-y-2">
  <div class="font-bold mb-1" style="color: #e6edf3;">Official Documentation</div>
  <div style="color: #c9d1d9;">[1] <strong>Customize AI in VS Code</strong> — code.visualstudio.com/docs/copilot/copilot-customization</div>
  <div style="color: #c9d1d9;">[2] <strong>Custom instructions</strong> — code.visualstudio.com/docs/copilot/customization/custom-instructions</div>
  <div style="color: #c9d1d9;">[3] <strong>Prompt files</strong> — code.visualstudio.com/docs/copilot/customization/prompt-files</div>
  <div style="color: #c9d1d9;">[4] <strong>Agent Skills</strong> — code.visualstudio.com/docs/copilot/customization/agent-skills</div>
  <div style="color: #c9d1d9;">[5] <strong>Custom agents</strong> — code.visualstudio.com/docs/copilot/customization/custom-agents</div>
  <div style="color: #c9d1d9;">[6] <strong>Repository instructions</strong> — docs.github.com/copilot/customizing-copilot</div>
</div>

<div class="space-y-2">
  <div class="font-bold mb-1" style="color: #e6edf3;">Standards & Community</div>
  <div style="color: #c9d1d9;">[7] <strong>Agent Skills standard</strong> — agentskills.io</div>
  <div style="color: #c9d1d9;">[8] <strong>Awesome Copilot</strong> — github.com/github/awesome-copilot</div>
  <div style="color: #c9d1d9;">[9] <strong>Response customization</strong> — docs.github.com/copilot/concepts/prompting</div>
  <div style="color: #c9d1d9;">[10] <strong>Instructions support</strong> — docs.github.com/copilot/reference</div>
  <div style="color: #c9d1d9;">[11] <strong>VS Code Chat docs</strong> — code.visualstudio.com/docs/copilot/chat</div>
  <div style="color: #c9d1d9;">[12] <strong>Agent Hooks reference</strong> — code.visualstudio.com/docs/copilot/customization/agent-hooks</div>
  <div style="color: #c9d1d9;">[13] <strong>Chat Customizations</strong> — code.visualstudio.com/docs/copilot/customization/chat-customizations</div>
  <div style="color: #c9d1d9;">[14] <strong>Agent Plugins</strong> — code.visualstudio.com/docs/copilot/customization/agent-plugins</div>
</div>

</div>

---
layout: end
---

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- SLIDE 21 — End                                                        -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div class="h-full flex flex-col items-center justify-center" style="background: #0d1117;">
  <div class="text-6xl mb-6">📋 🧰 ⚡ 🤖</div>
  <h1 class="!text-5xl !font-bold" style="color: #e6edf3;">
    Configuration Primitives
  </h1>
  <div class="mt-4 text-xl" style="color: #8b949e;">
    Making AI Understand Your Codebase
  </div>
  <div class="mt-8 text-sm" style="color: #8b949e;">
    Start with instructions → Add complexity when needed
  </div>
  <div class="mt-6 w-32 h-1 rounded-full" style="background: linear-gradient(to right, transparent, #8534F3, transparent);"></div>
</div>
