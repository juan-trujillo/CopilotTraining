---
status: active
updated: 2026-04-15
section: "Context & Customization"
references:
  - url: https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/
    label: "How to write a great agents.md — Lessons from 2,500+ repos"
    verified: 2026-04-15
  - url: https://code.visualstudio.com/docs/copilot/customization/agent-skills
    label: "VS Code Docs — Agent Skills"
    verified: 2026-04-15
  - url: https://code.visualstudio.com/docs/copilot/customization/custom-agents
    label: "VS Code Docs — Custom Agents"
    verified: 2026-04-15
  - url: https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
    label: "GitHub Docs — Repository Custom Instructions"
    verified: 2026-04-15
  - url: https://agentskills.io
    label: "Agent Skills Open Standard"
    verified: 2026-04-15
  - url: https://code.visualstudio.com/docs/copilot/customization/prompt-files
    label: "VS Code Docs — Prompt Files"
    verified: 2026-04-15
---

# Customization Best Practices: Writing Great Instructions, Prompts, Skills & Agents

> **The Question This Talk Answers:**
> *"I know Copilot has instructions, prompts, skills, and agents — but how do I write great ones that actually improve AI output?"*

**Duration:** 20 minutes | **Target Audience:** Developers and Technical Leads

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Every Copilot user needs to customize AI behavior; most files fail because they're too vague |
| **Compelling** | 🟢 High | Data-driven patterns from 2,500+ real repositories — not theory, but field evidence |
| **Actionable** | 🟢 High | Concrete templates and anti-patterns developers can apply in their repos today |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence (Generated Automatically)

1. **Title Slide** ← H1 title + subtitle
2. **The Question** ← "The Question This Talk Answers"
3. **The Problem** ← Generic AI = generic output
4. **The 4 Primitives** ← Quick orientation of the progressive stack
5. **🧠 The Shift (Preview)** ← Core insight one-liner
6. **Instructions Deep Dive** ← Patterns + anti-patterns
7. **Prompt Files Deep Dive** ← Patterns + anti-patterns
8. **Skills Deep Dive** ← Patterns + anti-patterns
9. **Agents Deep Dive** ← Patterns + anti-patterns
10. **The Maturity Ladder** ← Progressive adoption path
11. **🧠 Mental Model Shift (Full)** ← Move Toward/Away/Against
12. **What You Can Do Today** ← 3 concrete actions
13. **References** ← Sources
14. **End Slide**

---

## The Problem

### Key Points

- **Vague instructions produce vague output** — "You are a helpful coding assistant" teaches Copilot nothing about your repo's conventions, stack, or boundaries.

- **Repetitive context** — Developers re-explain the same project context in every chat session because persistent configuration files are missing or shallow.

- **One-size-fits-all AI** — Without specialization, Copilot applies generic patterns that miss project-specific conventions, testing frameworks, and deployment workflows.

- **No guardrails** — Without explicit boundaries, agents may modify files they shouldn't, skip required test suites, or ignore established code review standards.

### Narrative

An analysis of over 2,500 `agents.md` files across public repositories revealed a stark divide: the top-performing files aren't just more detailed — they're structurally different. They give AI a specific job, exact commands to run, well-defined boundaries, and concrete examples of what good output looks like.[^1]

The pattern holds across all four customization file types. Whether you're writing `copilot-instructions.md`, a `.prompt.md` template, a `SKILL.md` capability pack, or an `.agent.md` persona — the same principles separate files that transform AI output from files that get ignored.

Most developers write their first instruction file, see marginal improvement, and conclude customization doesn't work. The reality is: they wrote a vague file. Specificity is the currency. The files that work encode your team's actual knowledge — build commands with flags, code style with examples, boundaries with consequences.

---

## The Solution: The 4 Customization Primitives

### What It Does

Four file types form a progressive stack that teaches Copilot to understand your project, follow your conventions, and operate within your boundaries. Each primitive builds on the previous one, adding capabilities without complexity.[^2]

### The Stack

| Primitive | File | Purpose | Loaded |
|-----------|------|---------|--------|
| **Instructions** | `.github/copilot-instructions.md` | Always-on coding standards & project context | Every request |
| **Prompts** | `.github/prompts/*.prompt.md` | Reusable task templates via `/command` | On demand |
| **Skills** | `.github/skills/*/SKILL.md` | Portable capability packs with scripts & resources | When relevant |
| **Agents** | `.github/agents/*.agent.md` | Specialized AI personas with constrained tools | When invoked |

### Architecture Overview

Instructions form the foundation — they're always active, silently guiding every Copilot interaction. Prompts sit on top, providing on-demand task templates. Skills add portable capabilities with scripts and resources that load progressively. Agents compose all three into constrained personas with specific tool access and model preferences.

The key insight: **you don't need all four to start.** Begin with instructions. Add prompts when you notice repeated tasks. Build skills when capabilities need portability. Create agents when you need specialized personas.

**Official Documentation:**
- 📖 [Repository Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)[^4]
- 📖 [Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills)[^3]
- 📖 [Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents)[^5]

---

## 📦 Key Artifacts

### Primary Artifacts

- **`copilot-instructions.md`** — Repository-wide custom instructions that apply to every Copilot interaction
- **`*.prompt.md`** — Reusable prompt templates with frontmatter defining mode, tools, and description
- **`SKILL.md`** — Skill definition with YAML frontmatter and referenced scripts/resources
- **`*.agent.md`** — Agent persona with tool restrictions, model preferences, and handoff definitions

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "talking to a generic AI" to "configuring a team of specialists that know your codebase"

### Move Toward (Embrace These Patterns)

- ✅ **Specific stack declarations**: "React 18 with TypeScript, Vite, and Tailwind CSS" → AI generates framework-appropriate code
- ✅ **Executable commands with flags**: `npm test -- --coverage --watchAll=false` → AI can validate its own work
- ✅ **Three-tier boundaries** (always/ask first/never): Clear guardrails → prevents destructive mistakes
- ✅ **Code examples over explanations**: One real snippet beats three paragraphs → AI matches your actual style

### Move Away From (Retire These Habits)

- ⚠️ **Vague identity statements**: "You are a helpful assistant" → teaches nothing, wastes tokens
- ⚠️ **Tool names without flags**: "Use pytest" instead of `pytest -v --tb=short` → ambiguous execution
- ⚠️ **Monolithic instruction files**: 2,000-line files with everything → context overload, poor relevance

### Move Against (Active Resistance Required)

- 🛑 **No boundaries at all**: Agents without "never do" constraints → risk modifying production configs, committing secrets
- 🛑 **Copy-pasting generic templates**: Templates without project-specific content → worse than no file at all

---

## When to Use This Pattern

### Decision Tree

```
Q: What customization do you need?
├─ Coding standards that always apply → Instructions (.github/copilot-instructions.md)
│  └─ Path-specific variants → .github/instructions/*.instructions.md
│
├─ Repeatable task you run often → Prompt File (.github/prompts/*.prompt.md)
│  └─ Needs tool/model constraints → Add frontmatter: tools, mode
│
├─ Capability that works across tools → Skill (.github/skills/*/SKILL.md)
│  └─ Includes scripts or templates → Add resources to skill directory
│
└─ Specialized persona with boundaries → Agent (.github/agents/*.agent.md)
   └─ Multi-step workflow → Add handoffs between agents
```

### Comparison with Related Features

| Aspect | Instructions | Prompts | Skills | Agents |
|--------|-------------|---------|--------|--------|
| **Best For** | Standards & context | Repeatable tasks | Portable capabilities | Specialized personas |
| **Loaded** | Always | On demand (`/cmd`) | When relevant | When invoked (`@name`) |
| **Includes** | Markdown only | Markdown + frontmatter | Markdown + scripts + resources | Markdown + tool/model config |
| **Portability** | GitHub ecosystem | VS Code + GitHub | Cross-tool (open standard) | VS Code + GitHub |
| **Setup Time** | 5 minutes | 10 minutes | 15 minutes | 15 minutes |

---

<!-- 🎬 MAJOR SECTION: Instructions -->
## Instructions: The Foundation

Instructions are the bedrock of your customization stack. They're always active, silently shaping every Copilot interaction in the context of your repository.[^4]

### Three Levels of Instructions

| Level | File | Scope |
|-------|------|-------|
| **Repository-wide** | `.github/copilot-instructions.md` | Every request in this repo |
| **Path-specific** | `.github/instructions/*.instructions.md` | Files matching `applyTo` glob |
| **Agent-level** | `AGENTS.md` (anywhere in repo tree) | Nearest ancestor applies |

### What Works: The 6 Core Areas

Analysis of 2,500+ repositories shows the best instruction files cover six areas[^1]:

1. **Commands** — Build, test, lint commands with flags: `npm test -- --coverage`
2. **Testing** — Framework, patterns, where tests live: `tests/` with Jest + React Testing Library
3. **Project structure** — Key directories and their purposes
4. **Code style** — With real examples, not descriptions
5. **Git workflow** — Branch naming, commit conventions, PR requirements
6. **Boundaries** — What to never touch: secrets, vendor dirs, production configs

### Pattern: A Great `copilot-instructions.md`

```markdown
# Project: FanHub — Sports Fan Engagement Platform

## Tech Stack
- **Frontend:** React 18, TypeScript 5.3, Vite 5, Tailwind CSS 3.4
- **Backend:** Node.js 20, Express 4, PostgreSQL 16
- **Testing:** Jest + React Testing Library (unit), Playwright (e2e)

## Commands
- Build: `npm run build` (TypeScript compilation + Vite bundle)
- Test: `npm test -- --coverage --watchAll=false`
- Lint: `npm run lint -- --fix`
- Dev server: `npm run dev` (hot reload on port 3000)

## Code Style
- Use functional components with hooks (no class components)
- Prefer `async/await` over `.then()` chains
- Name files: `kebab-case.ts` for modules, `PascalCase.tsx` for components

## Boundaries
- Never modify files in `vendor/` or `node_modules/`
- Never commit `.env` files or hardcoded secrets
- Always run `npm test` before suggesting a PR is complete
```

### Anti-Pattern: A Vague `copilot-instructions.md`

```markdown
You are a helpful coding assistant. Write clean code.
Follow best practices. Use TypeScript.
```

**Why it fails:** No specific stack versions, no executable commands, no project structure, no boundaries. Copilot learns nothing it couldn't infer from the codebase alone.

---

<!-- 🎬 MAJOR SECTION: Prompt Files -->
## Prompt Files: Reusable Tasks

Prompt files turn repeated workflows into one-command actions. They're stored in `.github/prompts/` and invoked with `/command` in chat.[^6]

### Anatomy of a Prompt File

```markdown
---
mode: agent
tools: ['editFiles', 'codebase', 'terminal']
description: "Generate unit tests for a given module"
---

# Generate Unit Tests

For the file I've selected:
1. Analyze the module's public API (exported functions, classes, types)
2. Generate comprehensive unit tests covering:
   - Happy path for each public function
   - Edge cases (null, undefined, empty, boundary values)
   - Error conditions and thrown exceptions
3. Place tests in the corresponding `__tests__/` directory
4. Run `npm test -- --testPathPattern={filename}` to verify
5. Ensure >80% coverage for the module
```

### Pattern: Effective Prompt Files

- **Single purpose** — One prompt = one task. "Generate tests" not "Generate tests, update docs, and fix lint errors"
- **Specify mode** — `mode: agent` for multi-step tasks, `mode: ask` for analysis/questions
- **Declare tools** — Only the tools this task needs: `['editFiles', 'terminal']` not everything
- **Include validation** — End with a command that verifies the output: `npm test`, `npm run lint`

### Anti-Pattern: Kitchen-Sink Prompts

```markdown
---
tools: ['*']
---
Help me with whatever I need. Be thorough.
```

**Why it fails:** No focus, all tools available, no validation step. The prompt adds no value over a plain chat message.

---

<!-- 🎬 MAJOR SECTION: Skills -->
## Skills: Portable Capabilities

Skills are the most powerful primitive — they package instructions with scripts, templates, and examples into portable capability packs that work across VS Code, Copilot CLI, and the cloud agent.[^3]

### How Skills Load (Progressive Context)

```
1. Discovery → Copilot reads name + description from SKILL.md frontmatter
2. Instructions → SKILL.md body loads into context when skill is relevant
3. Resources → Referenced scripts/templates load only when accessed
```

This three-level loading means you can install many skills without consuming context. Only relevant content loads for each task.

### Anatomy of a Skill

```
.github/skills/
  webapp-testing/
    SKILL.md              ← Instructions + frontmatter
    test-template.js      ← Referenced template
    examples/
      login-test.js       ← Example scenario
      api-test.js
```

```markdown
---
name: webapp-testing
description: >
  Guide for testing web applications using Playwright.
  Use this when asked to create or run browser-based tests.
---

# Web Application Testing

## When to Use
- Creating new Playwright tests
- Debugging failing browser tests
- Setting up test infrastructure

## Creating Tests
1. Review the [test template](./test-template.js) for structure
2. Use role-based selectors (prefer `getByRole` over CSS)
3. Place tests in `tests/e2e/`

## Running Tests
- Run all: `npx playwright test`
- Debug: `npx playwright test --debug`
- Specific: `npx playwright test tests/e2e/login.spec.ts`

## Boundaries
- Never modify application source code from this skill
- Always use `data-testid` for dynamic content
```

### Pattern: Effective Skills

- **Description tells when to use it** — "Guide for testing web apps using Playwright. Use when asked to create or run browser-based tests." Copilot matches descriptions to tasks.
- **Reference resources with links** — `[test template](./test-template.js)` ensures progressive loading
- **Include runnable commands** — Skills that can validate their own output are dramatically more effective
- **Keep the name lowercase-hyphenated** — `webapp-testing` not `WebApp Testing`. Names with invalid characters silently fail to load.

### Anti-Pattern: Monolithic Skills

A single `SKILL.md` with 500 lines covering testing, deployment, monitoring, and documentation. Skills are specialists — split by capability.

---

<!-- 🎬 MAJOR SECTION: Agents -->
## Agents: Specialized Personas

Agents are the most expressive primitive — they combine instructions, tool restrictions, model preferences, and handoffs into constrained personas that can operate autonomously.[^5]

### Anatomy of an Agent File

```markdown
---
description: Expert technical writer for this project
tools: ['editFiles', 'search/codebase', 'terminal']
model: ['Claude Sonnet 4.5', 'GPT-5.2']
handoffs:
  - label: Review Docs
    agent: code-reviewer
    prompt: Review the documentation changes above.
---

You are an expert technical writer for this project.

## Your Role
- Read code from `src/` and generate documentation in `docs/`
- Write for a developer audience with clarity and practical examples

## Commands
- Build docs: `npm run docs:build`
- Lint markdown: `npx markdownlint docs/`

## Boundaries
- ✅ Always: Write to `docs/`, run markdownlint, follow style examples
- ⚠️ Ask first: Before modifying existing docs in a major way
- 🚫 Never: Modify code in `src/`, edit config files, commit secrets
```

### Pattern: The Three-Tier Boundary System

The most effective agents from the 2,500-repo analysis use a three-tier boundary system[^1]:

| Tier | Marker | Purpose | Example |
|------|--------|---------|---------|
| **Always** | ✅ | Required actions | "Run tests before committing" |
| **Ask First** | ⚠️ | Needs human approval | "Before modifying database schemas" |
| **Never** | 🚫 | Hard constraints | "Never commit secrets or API keys" |

### Pattern: Constrained Tool Access

Don't give agents all tools. Match tools to the role:

| Agent Role | Tools | Why |
|-----------|-------|-----|
| **Planner** | `search/codebase`, `web/fetch` | Read-only prevents accidental edits |
| **Implementer** | `editFiles`, `terminal` | Needs to write code and run commands |
| **Reviewer** | `search/codebase`, `search/usages` | Analysis only, no modifications |
| **Docs Writer** | `editFiles`, `search/codebase`, `terminal` | Write docs, read code, validate |

### Pattern: Handoffs for Workflows

```yaml
handoffs:
  - label: Start Implementation
    agent: implementer
    prompt: Implement the plan outlined above.
    send: false
```

Handoffs create guided workflows: Plan → Implement → Review → Test. Each agent has the right tools and context for its phase.

### Anti-Pattern: The "God Agent"

```markdown
---
tools: ['*']
---
You are a helpful assistant. Do whatever is asked.
```

**Why it fails:** No specialization, no boundaries, no tool constraints. This is just Copilot with extra steps. The value of agents is in their constraints.

---

## The Maturity Ladder

### Progressive Adoption Path

```
Stage 1: Instructions (Day 1)
  └─ Add copilot-instructions.md with stack, commands, style, boundaries
     Impact: Every Copilot interaction improves immediately

Stage 2: Prompt Files (Week 1)
  └─ Create 2-3 prompts for repeated tasks (test generation, PR description)
     Impact: Common workflows become one-command actions

Stage 3: Skills (Week 2-3)
  └─ Package specialized capabilities with scripts and templates
     Impact: Portable capabilities work across all AI tools

Stage 4: Agent Team (Month 1)
  └─ Build 3-5 specialized agents with constrained tools and handoffs
     Impact: AI operates as a team of specialists, not a single generalist
```

**Key principle:** Each stage compounds the value of the previous ones. Agents reference instructions. Skills include prompt patterns. Instructions set the foundation everything else builds on.

---

## ✅ What You Can Do Today

**Immediate Actions (15 minutes):**
- [ ] Create `.github/copilot-instructions.md` with your tech stack, build commands, code style, and boundaries
- [ ] Add one path-specific instruction file for your test directory: `.github/instructions/testing.instructions.md`
- [ ] Review the [starter template](#pattern-a-great-copilot-instructionsmd) above and adapt for your project

**Short-Term Implementation (1 hour):**
- [ ] Create 2-3 prompt files in `.github/prompts/` for tasks you repeat weekly
- [ ] Build your first skill in `.github/skills/` for your primary testing framework
- [ ] Create a `@docs-agent` that reads code and generates documentation

**Advanced Exploration (2-4 hours):**
- [ ] Build a 3-agent workflow with handoffs: Planner → Implementer → Reviewer
- [ ] Publish a reusable skill to your organization's shared skill library
- [ ] Set up path-specific instructions for different parts of your monorepo

---

## Related Patterns

### Complementary Features

- **[Copilot Primitives](../copilot-primitives/)** — Conceptual overview of the 4-primitive architecture
- **[Agent Teams](../agent-teams/)** — Multi-agent coordination and orchestration patterns
- **[Copilot Hooks](../copilot-hooks/)** — Programmable governance for agent enforcement
- **[Enterprise Patterns](../enterprise-patterns/)** — Scaling customization across organizations

### Decision Flow

```
Q: What do you need?
├─ Understand the 4 primitives conceptually → See: Copilot Primitives
├─ Write great customization files → You're here ✓
├─ Coordinate multiple agents → See: Agent Teams
└─ Scale across an organization → See: Enterprise Patterns
```

---

## 📖 References

[^1]: **[How to write a great agents.md — Lessons from 2,500+ repos](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/)** — GitHub Blog analysis of real-world patterns
[^2]: **[About customizing GitHub Copilot responses](https://docs.github.com/en/copilot/concepts/prompting/response-customization)** — Copilot customization concepts
[^3]: **[Agent Skills — VS Code Docs](https://code.visualstudio.com/docs/copilot/customization/agent-skills)** — SKILL.md format, discovery, progressive loading
[^4]: **[Repository Custom Instructions — GitHub Docs](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)** — copilot-instructions.md and path-specific instructions
[^5]: **[Custom Agents — VS Code Docs](https://code.visualstudio.com/docs/copilot/customization/custom-agents)** — .agent.md format, handoffs, tool restrictions
[^6]: **[Prompt Files — VS Code Docs](https://code.visualstudio.com/docs/copilot/customization/prompt-files)** — .prompt.md format and slash commands
[^7]: **[Agent Skills Open Standard](https://agentskills.io)** — Cross-tool skill portability specification
