---
status: active
updated: 2026-03-30
section: "Context & Customization"
references:
  - url: https://code.visualstudio.com/docs/copilot/copilot-customization
    label: "Customize AI in Visual Studio Code"
    verified: 2026-03-30
  - url: https://code.visualstudio.com/docs/copilot/customization/custom-instructions
    label: "Use custom instructions in VS Code"
    verified: 2026-03-30
  - url: https://code.visualstudio.com/docs/copilot/customization/prompt-files
    label: "Use prompt files in VS Code"
    verified: 2026-03-30
  - url: https://code.visualstudio.com/docs/copilot/customization/agent-skills
    label: "Use Agent Skills in VS Code"
    verified: 2026-03-30
  - url: https://code.visualstudio.com/docs/copilot/customization/custom-agents
    label: "Custom agents in VS Code"
    verified: 2026-03-30
  - url: https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
    label: "Adding repository custom instructions for GitHub Copilot"
    verified: 2026-03-30
  - url: https://docs.github.com/en/copilot/reference/custom-instructions-support
    label: "Custom instructions support reference"
    verified: 2026-03-30
  - url: https://code.visualstudio.com/docs/copilot/customization/agent-plugins
    label: "Agent Plugins in VS Code"
    verified: 2026-03-30
  - url: https://code.visualstudio.com/docs/copilot/customization/hooks
    label: "Agent hooks in VS Code"
    verified: 2026-03-30
---

# Copilot Configuration Primitives: Making AI Understand Your Codebase

> **The Question This Talk Answers:**
> *"How can I make GitHub Copilot understand my codebase better?"*

**Duration:** 30 minutes | **Target Audience:** Developers / Engineering Teams

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Every team using Copilot asks this exact question — these 4 primitives are the official answer |
| **Compelling** | 🟢 High | Transforms Copilot from a generic coding assistant to a team-specific development partner through a progressive layering model |
| **Actionable** | 🟢 High | Create your first instructions file in 5 minutes, see immediate improvement. Each primitive has production-ready examples |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence (Generated Automatically)

1. **Title/Logo Slide** ← H1 title + subtitle
2. **Question/Objective Slide** ← "The Question This Talk Answers"
3. **Table of Contents Slide** ← Auto-generated from 🎬 sections
4. **Problem Slide** ← "The Problem"
5. **Solution Overview** ← "The Solution"
6. **Key Artifacts** ← Primitives inventory
7. **🧠 The Shift (Preview)** ← Core Insight one-liner
8. **When to Use Decision Tree** ← "When to Use This Pattern"
9. **Instructions Divider** ← 🎬 Section 1
10. **Instructions Content** ← 3 slides
11. **Skills Divider** ← 🎬 Section 2
12. **Skills Content** ← 2 slides
13. **Prompts Divider** ← 🎬 Section 3
14. **Prompts Content** ← 2 slides
15. **Agents Divider** ← 🎬 Section 4
16. **Agents Content** ← 3 slides
17. **Choosing Divider** ← 🎬 Section 5
18. **Use Cases** ← Real-World Use Cases (1-2 slides)
19. **🧠 Mental Model Shift (Full)** ← Full Move-Toward/Away/Against
20. **Actionable Outcomes** ← What You Can Do Today
21. **📖 References** ← References section
22. **End Slide** ← Auto-generated

### Major Sections (TOC Entries)

```markdown
<!-- 🎬 MAJOR SECTION: Instructions -->
<!-- 🎬 MAJOR SECTION: Skills -->
<!-- 🎬 MAJOR SECTION: Custom Prompts -->
<!-- 🎬 MAJOR SECTION: Agents -->
<!-- 🎬 MAJOR SECTION: Choosing the Right Primitive -->
```

---

## The Problem

### Key Points

- **Generic responses that ignore project conventions**
  Copilot suggests textbook patterns instead of code that matches your team's architecture, naming conventions, and technology stack

- **Repeated context in every conversation**
  Developers manually explain the same project details — "we use Prisma, not raw SQL" — in every chat session

- **Inconsistent AI behavior across a team**
  Each developer gets different quality responses because they provide different context. No shared baseline.

- **One-size-fits-all doesn't fit anyone**
  Default Copilot treats a React frontend and a Python data pipeline identically. It shouldn't.

### Narrative

When developers first adopt GitHub Copilot, the initial experience is impressive — but quickly hits a ceiling. You ask Copilot to add a database table and it generates raw SQL when your project uses Prisma. You ask for a test and it suggests Mocha patterns when your team standardized on Vitest. Every conversation starts from zero because Copilot has no memory of your project's conventions.

This isn't a limitation of the AI model — it's a context problem. Copilot's response quality is directly proportional to how much it knows about your specific codebase[^1]. Without explicit configuration, it answers generically, like a contractor who's never seen your blueprints.

The solution isn't better prompting. It's **configuration** — four primitives that, once set up, give every Copilot interaction persistent awareness of your codebase's architecture, conventions, and workflows[^3].

---

## The Solution: 4 Configuration Primitives

### What It Does

GitHub Copilot supports four configuration building blocks that progressively add context and capabilities to every AI interaction. Each primitive is a Markdown file committed to your repository, making your Copilot configuration version-controlled, team-shared, and reviewable[^1].

### Key Capabilities

- **Instructions**: Always-on guardrails — coding standards, project structure, and build procedures injected into every request automatically[^2]
- **Skills**: On-demand capability packs — specialized knowledge with scripts and resources, loaded only when relevant[^4]
- **Prompts**: Reusable task templates — standardized workflows invoked via `/command` syntax in chat[^3]
- **Agents**: Specialized AI personas — constrained tools, instructions, and model preferences for specific roles[^5]

### Architecture Overview

The four primitives form a progressive stack. Instructions are the foundation — always present, zero-effort. Skills add specialized capabilities loaded on-demand by AI relevance matching. Prompts encode repeatable workflows triggered by the developer. Agents sit at the top, orchestrating the other primitives into constrained personas with specific tool access.

Each primitive builds on the ones below it. An agent can reference instructions and invoke skills. A prompt can specify which agent to run with. Instructions form the shared baseline that everything else inherits[^3].

```
┌──────────────────────────────────────────┐
│  Agents (.agent.md)                      │  ← Orchestration
│  Constrained personas, tools, handoffs   │
├──────────────────────────────────────────┤
│  Prompts (.prompt.md)                    │  ← Task Templates
│  Reusable workflows, /commands           │
├──────────────────────────────────────────┤
│  Skills (SKILL.md + resources)           │  ← Capabilities
│  On-demand expertise, scripts, examples  │
├──────────────────────────────────────────┤
│  Instructions (.instructions.md)         │  ← Foundation
│  Always-on guardrails, coding standards  │
└──────────────────────────────────────────┘
```

**Official Documentation:**
- 📖 [Customize AI in VS Code](https://code.visualstudio.com/docs/copilot/copilot-customization) — Overview of all customization options
- 📖 [Adding repository custom instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot) — GitHub-side documentation

---

## 📦 Key Artifacts

**Every primitive is demonstrated with a production-ready example file:**

### Primary Artifacts

- **[`examples/copilot-instructions.md`](examples/copilot-instructions.md)** — Repository-wide instructions: coding standards, build procedures, file structure
- **[`examples/models.instructions.md`](examples/models.instructions.md)** — Path-specific instructions: database model conventions applied only to `src/models/**/*.ts`
- **[`examples/component.prompt.md`](examples/component.prompt.md)** — Prompt file: React component scaffolding with variable interpolation
- **[`examples/test-runner-skill.md`](examples/test-runner-skill.md)** — Skill definition: test execution, failure analysis, and fix suggestions
- **[`examples/database.agent.md`](examples/database.agent.md)** — Custom agent: database administrator with constrained tools and model preferences

### Supporting Files

- **[`examples/`](examples/)** — Complete working examples you can copy into any project
- **[Awesome Copilot](https://github.com/github/awesome-copilot)** — Community-contributed instructions, prompts, skills, and agents[^8]

---

## 🎯 Mental Model Shift

> **The Core Insight:** From repeating context in every conversation to encoding knowledge once in configuration files that make every interaction smarter.

### Move Toward (Embrace These Patterns)

- ✅ **File-based configuration over manual context**: Encode conventions in `.github/` once instead of repeating them in every prompt → Copilot automatically applies your standards to every interaction[^2]
- ✅ **Progressive enhancement**: Start with one `copilot-instructions.md`, add skills and agents only when clear need emerges → Avoids over-engineering, delivers value immediately
- ✅ **Team-shared AI knowledge in version control**: Configuration files become reviewable institutional knowledge → New team members get project-aware AI from day one
- ✅ **Layered context**: Instructions for baseline, skills for capabilities, agents for orchestration → Each layer serves a different purpose without duplication

### Move Away From (Retire These Habits)

- ⚠️ **Copy-pasting context into every prompt**: Instructions eliminate this repetitive work → Saves minutes per interaction, hundreds of hours per year across a team
- ⚠️ **One-size-fits-all AI interaction**: Different tasks need different context levels → A planning task needs different tools than an implementation task
- ⚠️ **Treating Copilot configuration as optional**: Default Copilot is 10x less effective than configured Copilot → Every team should at minimum have instructions

### Move Against (Active Resistance Required)

- 🛑 **Over-engineering with agents first**: 80% of teams get most value from instructions alone → Premature complexity wastes setup time and can even reduce quality
- 🛑 **Massive instruction files**: Keep instructions under 2 pages — bloated files consume context that should be used for your actual question → Quality degrades when instructions exceed token budget
- 🛑 **Task-specific content in instructions**: Instructions should be general conventions, not step-by-step workflows → Use prompts for task-specific workflows instead

> **Example Transformation:** Before: Developer types "Add a user endpoint" and gets generic Express boilerplate with `var`, no types, and `console.log` error handling. After: Same prompt produces TypeScript endpoint with Prisma queries, custom error classes, JSDoc comments, and co-located test file — because instructions define the conventions and a prompt encodes the scaffolding workflow.

---

## When to Use This Pattern

### Decision Tree

```
Q: What kind of customization do you need?
│
├─ "Copilot should always know our conventions"
│  → Use: Instructions (.github/copilot-instructions.md)
│  └─ Best for: Coding standards, build procedures, architecture docs
│
├─ "Different rules for different parts of the codebase"
│  → Use: Path-specific Instructions (.instructions.md with applyTo)
│  └─ Best for: Language-specific rules, framework conventions per directory
│
├─ "Reusable capabilities across projects and tools"
│  → Use: Skills (.github/skills/*/SKILL.md)
│  └─ Best for: Testing workflows, deployment scripts, portable expertise
│
├─ "Standardized workflows the team can invoke"
│  → Use: Prompts (.github/prompts/*.prompt.md)
│  └─ Best for: Component scaffolding, code review checklists, PR templates
│
└─ "Specialized AI persona with constrained tools"
   → Use: Agents (.github/agents/*.agent.md)
   └─ Best for: Planning vs. implementation, database admin, security review
```

### Comparison with Related Primitives

| Aspect | **Instructions** | **Skills** | **Prompts** | **Agents** |
|--------|-----------------|------------|-------------|------------|
| **Loading** | Always-on | On-demand (AI matches) | User invokes (`/`) | User selects |
| **Scope** | Every request | When relevant | Single task | Full session |
| **File Path** | `.github/copilot-instructions.md` | `.github/skills/*/SKILL.md` | `.github/prompts/*.prompt.md` | `.github/agents/*.agent.md` |
| **Can Include** | Markdown text | Scripts, examples, resources | Variables, tool specs | Tool restrictions, handoffs |
| **Portability** | VS Code + GitHub.com | VS Code + CLI + coding agent + extensions | VS Code (syncs across devices) | VS Code + coding agent |
| **Best For** | Coding standards | Specialized capabilities | Repeatable workflows | Role-based personas |
| **Setup Time** | 5 minutes | 15 minutes | 10 minutes | 20 minutes |

---

<!-- 🎬 MAJOR SECTION: Instructions -->
## Instructions: The Foundation

Instructions are Markdown files that provide persistent context to every Copilot interaction. They're the simplest and most impactful primitive — a single file can transform Copilot from "generic coding assistant" to "team-aware development partner"[^2].

### How Instructions Work

When you create a `.github/copilot-instructions.md` file in your repository, its contents are automatically injected into every Copilot Chat request made in that repository context[^1]. No special syntax, no activation step — just Markdown that Copilot reads before answering.

VS Code shows which instruction files were used in the **References** section of each chat response, so you can verify they're being applied[^2].

### Repository-Wide Instructions

The primary instructions file lives at `.github/copilot-instructions.md` and applies to all requests:

```markdown
# Repository Instructions

This repository uses TypeScript with strict type checking enabled.

## Build and Test
- Always run `npm install` before building
- Build: `npm run build`
- Tests are in `__tests__/` directories co-located with source files
- Use Jest for testing with the config in `jest.config.js`
- Run tests: `npm test`

## Coding Standards
- Prefer functional programming patterns
- Use explicit return types for all functions
- Add JSDoc comments for exported functions
- Use named exports (avoid default exports)

## File Structure
src/
  components/       # React components
  utils/           # Utility functions
  services/        # API clients
  __tests__/       # Tests co-located with source

## Error Handling
- Use custom error classes that extend Error
- Log errors with structured logging (use logger.error())
- Never swallow errors silently
```

See the full example in [`examples/copilot-instructions.md`](examples/copilot-instructions.md).

### Path-Specific Instructions

For codebases where different areas have different conventions, use `.instructions.md` files with `applyTo` glob patterns[^2]:

```markdown
---
applyTo: "src/models/**/*.ts"
---

# Database Model Instructions

When working with database models in this project:

1. Use Prisma schema definitions in `prisma/schema.prisma`
2. Include JSDoc comments with field descriptions
3. Define relationships explicitly with `@relation`
4. Add indexes for foreign keys
5. Use snake_case for database column names, camelCase in TypeScript
6. Always include audit fields: `createdAt` and `updatedAt`
```

Path-specific instructions are stored in `.github/instructions/` and only activate when Copilot is working on files matching the glob pattern. They combine with repository-wide instructions — both are used when both match[^1].

**Key Points:**
- Instructions are always-on — no manual activation required
- Keep under 2 pages for optimal performance (context budget)
- Personal instructions > repository instructions > organization instructions (priority order)
- Use the `/init` command to auto-generate instructions from your workspace[^2]

### Multi-Agent Instruction Files

VS Code now recognizes **AGENTS.md** and **CLAUDE.md** files alongside `copilot-instructions.md`[^2]:

- **`AGENTS.md`** — Placed at workspace root (or in subfolders with the experimental `chat.useNestedAgentsMdFiles` setting), recognized by multiple AI agents. Useful when teams work with VS Code, Claude Code, and other AI tools simultaneously.
- **`CLAUDE.md`** — For compatibility with Claude Code. Detected in workspace root, `.claude/` folder, or user home directory.

Both formats are always-on, like `copilot-instructions.md`, and combine additively.

### Organization-Level Instructions

Instructions can now be defined at the **GitHub organization level**, applying shared standards across multiple repositories without duplicating files[^2].

### Parent Repository Discovery

In monorepo setups, enable `chat.useCustomizationsInParentRepositories` to discover customizations from parent repository roots. VS Code walks up the folder hierarchy to find `.git` and collects all customization files between your workspace folder and the repo root[^1].

### AI-Assisted Generation

Type **`/create-instruction`** in chat to generate a targeted instructions file with AI assistance. Describe the convention you want to enforce, and Copilot generates the `.instructions.md` file with appropriate `applyTo` pattern. You can also extract instructions from an ongoing conversation — correct Copilot's style during chat, then ask "extract an instruction from this"[^2].

### New Instruction File Fields

Instructions files now support additional frontmatter fields[^2]:
- **`name`** — Display name shown in the UI (defaults to file name)
- **`description`** — Short description shown on hover in the Chat view
- **`applyTo`** — Glob pattern (unchanged, but now also supports `**` to match all files)

---

<!-- 🎬 MAJOR SECTION: Skills -->
## Skills: On-Demand Expertise

Skills are directories containing a `SKILL.md` file plus supporting scripts, examples, and resources. Unlike instructions that are always active, skills are loaded on-demand when Copilot determines they're relevant to your current task[^4].

### How Skills Work: Progressive Loading

Skills use a three-level loading system that keeps context efficient[^4]:

| Level | What Loads | When |
|-------|-----------|------|
| **1. Discovery** | Skill name + description only | Always (lightweight metadata) |
| **2. Instructions** | Full SKILL.md body | When your prompt matches the skill description |
| **3. Resources** | Scripts, examples, templates | When Copilot references them during execution |

This means you can have dozens of skills installed without impacting context — only relevant skills load their full content.

### Skill Structure

```
.github/skills/
  test-runner/
    SKILL.md              # Instructions + metadata
    test-template.ts      # Template test file
    scripts/
      run-tests.sh        # Test execution script
    examples/
      api-test.ts         # Example test for reference
```

### Example: Test Runner Skill

```markdown
---
name: test-runner
description: Run tests, analyze failures, and suggest fixes for unit and
  integration tests. Use when asked to test, debug test failures, or add
  test coverage.
---

# Test Runner Skill

## When to Use
- User asks to test an API endpoint
- User wants to validate request/response contracts
- Debugging failing integration tests

## Process
1. Identify the endpoint under test from route files in `src/routes/`
2. Check existing tests in `tests/api/` for patterns
3. Use the test template in [template](./test-template.ts)
4. Run tests with `npm run test:api`
```

See the full skill definition in [`examples/test-runner-skill.md`](examples/test-runner-skill.md).

### Skills Are an Open Standard

Agent Skills work across VS Code, GitHub Copilot CLI, and GitHub Copilot coding agent[^7]. Skills you write for VS Code automatically work in the terminal and in GitHub's automated coding workflows. The specification is maintained at [agentskills.io](https://agentskills.io/).

**Key Points:**
- Skills are loaded on-demand, not always active (saves context budget)
- Can include executable scripts, test templates, and reference examples
- Portable across VS Code, Copilot CLI, and Copilot coding agent[^7]
- Store project skills in `.github/skills/`, personal skills in `~/.copilot/skills/`

### New Skill Frontmatter Fields

Skills now support additional control over visibility and invocation[^4]:

- **`argument-hint`** — Hint text shown in the chat input when the skill is invoked as a slash command
- **`user-invocable`** — Controls whether the skill appears as a `/` slash command (default: `true`). Set to `false` to hide from the menu while still allowing automatic loading.
- **`disable-model-invocation`** — Controls whether the agent can auto-load the skill based on relevance (default: `false`). Set to `true` to require manual `/` invocation only.

### Extension-Contributed Skills

VS Code extensions can now contribute skills using the `chatSkills` contribution point in `package.json`[^4]. The skill directory must contain a `SKILL.md` file following the Agent Skills specification, and the `name` field must match the parent directory name.

### AI-Assisted Generation

Type **`/create-skill`** in chat and describe the capability you want. Copilot generates a `SKILL.md` file with the directory structure, instructions, and frontmatter. You can also extract a skill from an ongoing conversation — after a multi-turn debugging session, ask "create a skill from how we just debugged that"[^4].

### New Skill Frontmatter Fields

Skills now support additional control over visibility and invocation[^4]:

- **`argument-hint`** — Hint text shown in the chat input when the skill is invoked as a slash command
- **`user-invocable`** — Controls whether the skill appears as a `/` slash command (default: `true`). Set to `false` to hide from the menu while still allowing automatic loading.
- **`disable-model-invocation`** — Controls whether the agent can auto-load the skill based on relevance (default: `false`). Set to `true` to require manual `/` invocation only.

### Extension-Contributed Skills

VS Code extensions can now contribute skills using the `chatSkills` contribution point in `package.json`[^4]. The skill directory must contain a `SKILL.md` file following the Agent Skills specification, and the `name` field must match the parent directory name.

### AI-Assisted Skill Generation

Type **`/create-skill`** in chat and describe the capability you want. Copilot generates a `SKILL.md` file with the directory structure, instructions, and frontmatter. You can also extract a skill from an ongoing conversation — after a multi-turn debugging session, ask "create a skill from how we just debugged that"[^4].

---

<!-- 🎬 MAJOR SECTION: Custom Prompts -->
## Custom Prompts: Reusable Workflows

Prompt files are Markdown templates that encode repeatable development workflows. Unlike instructions (always-on) or skills (AI-activated), prompts are explicitly invoked by developers using `/command` syntax in chat[^3].

### How Prompts Work

Create a `.prompt.md` file in `.github/prompts/`, and it becomes available as a slash command. Type `/` in chat, select your prompt, and optionally provide parameters[^3]:

```
/component MyButtonGroup
```

### Prompt File Structure

```markdown
---
name: component
description: Generate a React component with TypeScript, tests, and docs
tools: ['editFiles', 'createFile']
agent: agent
---

# Component Generator

Create a new React component following our team's standards.

## Files to Create

Generate the following structure:

src/components/{{componentName}}/
  {{componentName}}.tsx           # Component implementation
  {{componentName}}.types.ts      # TypeScript interfaces
  {{componentName}}.module.css    # CSS Modules styles
  __tests__/
    {{componentName}}.test.tsx    # Unit tests
  index.ts                        # Barrel export

## Requirements
- Use functional components with hooks
- Include TypeScript props interface with JSDoc
- Follow conventions in [coding standards](../../copilot-instructions.md)
- Add unit tests using Vitest
```

See the full prompt in [`examples/component.prompt.md`](examples/component.prompt.md).

### What Makes Prompts Powerful

Prompts can reference instructions files via Markdown links, ensuring consistency without duplication. They support variable interpolation (`${input:variableName}`, `${selection}`, `${file}`) and can specify which agent and tools to use[^3]:

```markdown
---
tools: ['editFiles', 'search', 'readFile']
agent: agent
model: Claude Sonnet 4 (copilot)
---
```

**Key Points:**
- Prompts are user-invoked — they only run when you type `/command`
- Can reference instructions files to reuse conventions without duplication
- Support variables: `${selection}`, `${file}`, `${input:name:placeholder}`
- Specify tools and agent to constrain execution
- Store in `.github/prompts/` (workspace) or user profile (global)

### New Prompt Features

- **`argument-hint`** — Hint text shown in the chat input field to guide users on how to interact with the prompt[^3]
- **`vscode/askQuestions` tool** — Prompts can use this tool to interactively ask users for inputs during execution[^3]
- **Settings Sync** — User prompt files can now sync across devices via VS Code Settings Sync[^3]
- **Prompt Recommendations** — Use `chat.promptFilesRecommendations` to show prompts as recommended actions when starting a new chat session[^3]

### AI-Assisted Generation

Type **`/create-prompt`** in chat to generate a prompt file. You can also extract a reusable prompt from an ongoing conversation — after a multi-turn session, ask "turn this into a reusable prompt"[^3].

### New Prompt Features

- **`argument-hint`** — Hint text shown in the chat input field to guide users on how to interact with the prompt[^3]
- **`vscode/askQuestions` tool** — Prompts can use this tool to interactively ask users for inputs during execution[^3]
- **Settings Sync** — User prompt files can now sync across devices via VS Code Settings Sync[^3]
- **Prompt Recommendations** — Use `chat.promptFilesRecommendations` to show prompts as recommended actions when starting a new chat session[^3]

### AI-Assisted Prompt Generation

Type **`/create-prompt`** in chat to generate a prompt file. You can also extract a reusable prompt from an ongoing conversation — after a multi-turn session, ask "turn this into a reusable prompt"[^3].

---

<!-- 🎬 MAJOR SECTION: Agents -->
## Agents: Specialized AI Personas

Custom agents combine instructions, tool restrictions, and model preferences into a specialized persona that you select from the agents dropdown in chat[^5]. Where instructions set the rules and prompts define tasks, agents define **who** the AI becomes for a session.

### Why Constrain the AI?

Different tasks need different capabilities. A planning agent should only read files (preventing accidental edits). A security reviewer needs search tools but not terminal access. A database admin needs terminal and SQL tools but shouldn't touch frontend code[^5].

Agents let you configure exactly which tools are available — and which aren't.

### Agent File Structure

```markdown
---
name: planner
description: Generate implementation plans by researching the codebase.
  Read-only — never modifies files.
tools: ['search', 'readFile', 'listFiles', 'fetch']
model: Claude Sonnet 4 (copilot)
handoffs:
  - label: Start Implementation
    agent: agent
    prompt: Implement the plan outlined above.
    send: false
---

# Planning Agent

You are a senior software architect creating implementation plans.

## Your Process
1. Understand the requirement by asking clarifying questions
2. Research the existing codebase using search and file reading
3. Identify affected files and components
4. Generate a step-by-step implementation plan with:
   - Files to create or modify
   - Key code changes described in detail
   - Test strategy
   - Potential risks or considerations

## Rules
- NEVER modify files — you are read-only
- Always cite specific files and line numbers
- Include effort estimates for each step
```

### Handoffs: Multi-Agent Workflows

Agents support **handoffs** — suggested next steps that transition between agents with context preserved[^5]. After the planning agent finishes, a "Start Implementation" button appears that switches to the implementation agent with the plan as context:

```yaml
handoffs:
  - label: Start Implementation
    agent: agent
    prompt: Implement the plan outlined above.
    send: false
  - label: Review Code
    agent: security-reviewer
    prompt: Review the implementation for security issues.
```

This creates guided, sequential workflows: Plan → Implement → Review. Each agent has its own tools and constraints, but context flows between them.

### Example: Database Administrator Agent

The database agent in [`examples/database.agent.md`](examples/database.agent.md) demonstrates a fully specified agent with:
- Constrained tools (terminal, code_editor, database_query)
- Specific model selection (claude-sonnet-4)
- Temperature setting (0.3 for consistency)
- Detailed persona instructions covering schema design, migrations, and query optimization

**Key Points:**
- Agents constrain which tools the AI can use for a specific role
- Handoffs enable guided multi-agent workflows (Plan → Implement → Review)
- Agents can reference instructions and invoke skills
- Subagents can run as delegated tasks within an agent session[^5]
- Store in `.github/agents/` (workspace) or user profile (global)

### New Agent Capabilities (March 2026)

**Model priority lists** — The `model` field now accepts an array of models. The system tries each in order until an available one is found[^5]:

```yaml
model: ['Claude Opus 4.5', 'GPT-5.2', 'Claude Sonnet 4']
```

**Visibility and invocation control:**
- **`user-invocable`** — Controls whether the agent appears in the agents dropdown (default: `true`). Set to `false` to create agents only accessible as subagents. Replaces the deprecated `infer` field.
- **`disable-model-invocation`** — Prevents the agent from being invoked as a subagent by other agents (default: `false`).

**Subagent orchestration** — The `agents` field lists which agents can be used as subagents within this agent[^5]:

```yaml
agents: ['Researcher', 'Implementer']  # Only these subagents allowed
```

Use `*` to allow all agents, or `[]` to prevent any subagent use.

**Agent-scoped hooks (Preview)** — Define hooks directly in agent frontmatter that only run when that agent is active[^5]:

```yaml
hooks:
  PostToolUse:
    - type: command
      command: "./scripts/format-changed-files.sh"
```

**Handoff model override** — Each handoff can now specify its own `model` to use when the handoff executes[^5].

**Target environments** — The `target` field specifies `vscode` or `github-copilot` for agents that work with the Copilot coding agent[^5].

### AI-Assisted Generation

Type **`/create-agent`** in chat to generate a custom agent file with AI assistance[^5].

### New Agent Capabilities (March 2026)

**Model priority lists** — The `model` field now accepts an array of models. The system tries each in order until an available one is found[^5]:

```yaml
model: ['Claude Opus 4.5', 'GPT-5.2', 'Claude Sonnet 4']
```

**Visibility and invocation control:**
- **`user-invocable`** — Controls whether the agent appears in the agents dropdown (default: `true`). Set to `false` to create agents only accessible as subagents. Replaces the deprecated `infer` field.
- **`disable-model-invocation`** — Prevents the agent from being invoked as a subagent by other agents (default: `false`).

**Subagent orchestration** — The `agents` field lists which agents can be used as subagents within this agent[^5]:

```yaml
agents: ['Researcher', 'Implementer']  # Only these subagents allowed
```

Use `*` to allow all agents, or `[]` to prevent any subagent use.

**Agent-scoped hooks (Preview)** — Define hooks directly in agent frontmatter that only run when that agent is active[^5]:

```yaml
hooks:
  PostToolUse:
    - type: command
      command: "./scripts/format-changed-files.sh"
```

**Handoff model override** — Each handoff can now specify its own `model` to use when the handoff executes[^5].

**Target environments** — The `target` field specifies `vscode` or `github-copilot` for agents that work with the Copilot coding agent[^5].

### AI-Assisted Agent Generation

Type **`/create-agent`** in chat to generate a custom agent file with AI assistance[^5].

---

<!-- 🎬 MAJOR SECTION: Choosing the Right Primitive -->
## Choosing the Right Primitive

### Start Simple, Add Complexity When Needed

Most teams should follow this progression:

| Week | Action | Impact |
|------|--------|--------|
| **Week 1** | Add `copilot-instructions.md` with project basics | Immediate: project-aware responses |
| **Week 2** | Add path-specific `.instructions.md` files | Targeted: language-specific conventions |
| **Week 3** | Create first prompt for your most common task | Consistent: standardized team workflows |
| **Month 2** | Add skills for capabilities that span projects | Portable: cross-tool expertise |
| **Month 3** | Create agents for complex orchestration needs | Advanced: multi-step autonomous workflows |

### Common Mistakes

| Mistake | Why It Fails | What to Do Instead |
|---------|-------------|-------------------|
| Start with agents | Over-engineers simple problems | Start with instructions |
| 5-page instructions file | Consumes context budget for actual work | Keep under 2 pages |
| Task-specific instructions | Bloats every request with irrelevant context | Use prompts for tasks |
| Duplicating rules across files | Creates maintenance burden and conflicts | Reference instructions from prompts |
| Skipping configuration entirely | Leaves 80% of Copilot's value unused | Spend 5 minutes on instructions |

---

## Beyond the 4 Primitives

The four primitives are the core configuration layer, but several adjacent features enhance and extend them:

### Chat Customizations Editor (Preview)

A centralized UI for creating and managing all customizations in one place[^1]. Open it via the gear icon in Chat view or run **Chat: Open Chat Customizations**. The editor provides tabs for Instructions, Skills, Prompts, Agents, Plugins, and MCP Servers — with embedded code editing and AI generation capabilities.

AI-assisted generation commands are available for all primitive types: `/create-instruction`, `/create-prompt`, `/create-skill`, `/create-agent`, and `/create-hook`.

### Agent Hooks (Preview)

Hooks execute shell commands at key lifecycle points during agent sessions[^13]. Unlike instructions that guide behavior, hooks provide **deterministic, code-driven automation**:

| Hook Event | When It Fires | Use Case |
|-----------|--------------|----------|
| `SessionStart` | First prompt submitted | Initialize resources |
| `UserPromptSubmit` | User sends a prompt | Audit, inject context |
| `PreToolUse` | Before any tool invocation | Block dangerous operations |
| `PostToolUse` | After tool completes | Run formatters, linters |
| `SubagentStart/Stop` | Subagent lifecycle | Track nested agent usage |
| `Stop` | Session ends | Generate reports, cleanup |

Hooks are configured in `.github/hooks/*.json` and can also be scoped to specific agents via agent frontmatter. Use `/create-hook` to generate hook configuration with AI assistance.

### Agent Plugins (Preview)

Prepackaged bundles of customizations installable from plugin marketplaces[^14]. A single plugin can provide slash commands, skills, custom agents, hooks, and MCP servers. Discover plugins via `@agentPlugins` in the Extensions view or from the Chat Customizations editor.

Default marketplaces include [copilot-plugins](https://github.com/github/copilot-plugins) and [awesome-copilot](https://github.com/github/awesome-copilot/).

---

## Beyond the 4 Primitives

The four primitives are the core configuration layer, but several adjacent features enhance and extend them:

### Chat Customizations Editor (Preview)

A centralized UI for creating and managing all customizations in one place[^1]. Open it via the gear icon in Chat view or run **Chat: Open Chat Customizations**. The editor provides tabs for Instructions, Skills, Prompts, Agents, Plugins, and MCP Servers — with embedded code editing and AI generation capabilities.

### Agent Hooks (Preview)

Hooks execute shell commands at key lifecycle points during agent sessions[^13]. Unlike instructions that guide behavior, hooks provide **deterministic, code-driven automation**:

| Hook Event | When It Fires | Use Case |
|-----------|--------------|----------|
| `SessionStart` | First prompt submitted | Initialize resources |
| `UserPromptSubmit` | User sends a prompt | Audit, inject context |
| `PreToolUse` | Before any tool invocation | Block dangerous operations |
| `PostToolUse` | After tool completes | Run formatters, linters |
| `SubagentStart/Stop` | Subagent lifecycle | Track nested agent usage |
| `Stop` | Session ends | Generate reports, cleanup |

Hooks are configured in `.github/hooks/*.json` and can also be scoped to specific agents via agent frontmatter.

### Agent Plugins (Preview)

Prepackaged bundles of customizations installable from plugin marketplaces[^14]. A single plugin can provide slash commands, skills, custom agents, hooks, and MCP servers. Discover plugins via `@agentPlugins` in the Extensions view or from the Chat Customizations editor.

Default marketplaces include [copilot-plugins](https://github.com/github/copilot-plugins) and [awesome-copilot](https://github.com/github/awesome-copilot/).

---

## Real-World Use Cases

### Use Case 1: Monorepo with Multiple Technologies

**The Problem:** Large repository with React frontend, Node.js backend, and React Native mobile — Copilot suggests wrong patterns for each area.

**The Solution:** Path-specific instructions apply TypeScript/React conventions for `src/web/**`, Express patterns for `src/api/**`, and React Native best practices for `src/mobile/**`.

```markdown
---
applyTo: "src/web/**/*.tsx"
---
# Frontend Instructions
- Use React functional components with hooks
- Style with TailwindCSS utility classes
- Use React Query for data fetching
```

**Outcome:** 40% reduction in code review style comments. Copilot matches the right framework conventions automatically.

---

### Use Case 2: Test-Driven Development Standardization

**The Problem:** Team practices TDD but each developer generates tests differently — inconsistent patterns, missing edge cases.

**The Solution:** `/test` prompt file generates tests following team standards. Test-runner skill analyzes failures and suggests fixes using project-specific patterns.

**Outcome:** New developers write conformant tests from day one. 25% faster debugging of test failures through skill-guided analysis.

---

### Use Case 3: Database Schema Changes with Safety

**The Problem:** Multiple developers making schema changes create inconsistent migrations, missing indexes, and no rollback safety.

**The Solution:** Database admin agent with constrained tools enforces Third Normal Form, generates up/down migrations, suggests indexes, and provides EXPLAIN ANALYZE.

**Outcome:** Zero production migration rollbacks in 6 months. 60% faster schema review process.

---

### Use Case 4: Accelerated Onboarding

**The Problem:** New team members take 2 weeks to make their first meaningful commit because they don't understand codebase conventions.

**The Solution:** Instructions document architecture and conventions. `/onboard` prompt provides guided codebase tour. Copilot answers "where is X?" questions correctly from day one.

**Outcome:** Onboarding time reduced from 2 weeks to 3 days for first meaningful commit.

---

## ✅ What You Can Do Today

**Immediate Actions (5-15 minutes):**
- [ ] Create `.github/copilot-instructions.md` with your project's tech stack, build commands, and coding standards
- [ ] Try the `/init` command in chat to auto-generate instructions from your workspace[^2]
- [ ] Open an existing chat and check the References section — verify instructions are being applied

**Short-Term Implementation (1 hour):**
- [ ] Add path-specific `.instructions.md` files for areas with different conventions (frontend vs. backend, tests vs. source)
- [ ] Create your first `.prompt.md` for the task you do most frequently (component scaffolding, PR description, etc.)
- [ ] Review [Awesome Copilot](https://github.com/github/awesome-copilot) for community examples to adapt[^8]

**Advanced Exploration (2-4 hours):**
- [ ] Build a skill for a capability your team uses often (test running, API testing, deployment)
- [ ] Create a planning agent with read-only tools and handoff to implementation
- [ ] Set up multi-agent workflow: Plan → Implement → Review with constrained tool access

**Next Steps After Completion:**
1. ✅ Start with instructions — get value in 5 minutes
2. 📖 Browse the [customization overview](https://code.visualstudio.com/docs/copilot/copilot-customization) for deeper reference[^1]
3. 💬 Share your instructions with your team via version control
4. 🚀 Explore [agent skills standard](https://agentskills.io/) for cross-tool portability[^7]

---

## Related Patterns

### Complementary Features

- **[Copilot Chat: Context Mastery](../copilot-chat/)** — How to use #file, @workspace, and #codebase for per-request context alongside always-on instructions
- **[Context Engineering Foundations](../context-engineering-foundations/)** — The deeper principles behind why context shapes AI output quality
- **[MCP Servers](../mcp-apps/)** — Extend Copilot with external tool access via Model Context Protocol — complements agents with external data sources

### Decision Flow

**If this talk doesn't fit your needs:**

```
Q: What's your actual goal?
├─ Better per-request context → See: Copilot Chat (../copilot-chat/)
├─ Understanding context theory → See: Context Engineering (../context-engineering-foundations/)
├─ External tool integration → See: MCP Servers (../mcp-apps/)
└─ Full workflow automation → Combine: This talk + MCP Servers
```

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📖 References

[^1]: **Customize AI in Visual Studio Code** — https://code.visualstudio.com/docs/copilot/copilot-customization — Overview of all customization options including quick reference table
[^2]: **Use custom instructions in VS Code** — https://code.visualstudio.com/docs/copilot/customization/custom-instructions — Complete guide to instructions files, path-specific patterns, and auto-generation
[^3]: **Use prompt files in VS Code** — https://code.visualstudio.com/docs/copilot/customization/prompt-files — Prompt file structure, variables, agent references, and slash commands
[^4]: **Use Agent Skills in VS Code** — https://code.visualstudio.com/docs/copilot/customization/agent-skills — Skills standard, progressive loading, and cross-tool portability
[^5]: **Custom agents in VS Code** — https://code.visualstudio.com/docs/copilot/customization/custom-agents — Agent definition, handoffs, tool constraints, and subagents
[^6]: **Adding repository custom instructions for GitHub Copilot** — https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot — GitHub-side documentation for instructions
[^7]: **Agent Skills open standard** — https://agentskills.io/ — Cross-tool skills specification and reference
[^8]: **Awesome Copilot repository** — https://github.com/github/awesome-copilot — Community-contributed instructions, prompts, skills, and agents
[^9]: **About customizing GitHub Copilot responses** — https://docs.github.com/en/copilot/concepts/prompting/response-customization — Conceptual overview of response customization
[^10]: **Custom instructions support reference** — https://docs.github.com/en/copilot/reference/custom-instructions-support — Which GitHub features support which instruction types
[^11]: **Custom instructions library** — https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions — Curated examples of working instructions
[^12]: **VS Code Copilot Chat documentation** — https://code.visualstudio.com/docs/copilot/chat/copilot-chat — Chat interface and context management
[^13]: **Agent hooks in VS Code** — https://code.visualstudio.com/docs/copilot/customization/hooks — Lifecycle automation with shell commands at key agent events
[^14]: **Agent Plugins in VS Code** — https://code.visualstudio.com/docs/copilot/customization/agent-plugins — Prepackaged bundles of customizations from plugin marketplaces
[^13]: **Agent hooks in VS Code** — https://code.visualstudio.com/docs/copilot/customization/hooks — Lifecycle automation with shell commands at key agent events
[^14]: **Agent Plugins in VS Code** — https://code.visualstudio.com/docs/copilot/customization/agent-plugins — Prepackaged bundles of customizations from plugin marketplaces

---

## 📚 Official Documentation

- 📖 [Customize AI in VS Code — Overview](https://code.visualstudio.com/docs/copilot/copilot-customization) — Quick reference table and getting started guide
- 📖 [Custom Instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions) — Always-on and path-specific instruction files
- 📖 [Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) — On-demand capability packs with progressive loading
- 📖 [Prompt Files](https://code.visualstudio.com/docs/copilot/customization/prompt-files) — Reusable task templates with variable support
- 📖 [Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Specialized AI personas with tool constraints
- 📖 [GitHub Repository Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot) — GitHub-side configuration
- 📖 [Agent Hooks](https://code.visualstudio.com/docs/copilot/customization/hooks) — Lifecycle automation with shell commands
- 📖 [Agent Plugins](https://code.visualstudio.com/docs/copilot/customization/agent-plugins) — Prepackaged customization bundles from marketplaces
- 📖 [Agent Hooks](https://code.visualstudio.com/docs/copilot/customization/hooks) — Lifecycle automation with shell commands
- 📖 [Agent Plugins](https://code.visualstudio.com/docs/copilot/customization/agent-plugins) — Prepackaged customization bundles from marketplaces

---

## 🎭 Behind the Scenes

### How Primitives Load at Runtime

Understanding the loading order clarifies why the layered architecture matters:

1. **Session Start**: VS Code scans for `.github/copilot-instructions.md` and `AGENTS.md` — these are always loaded
2. **File Open**: VS Code checks `.instructions.md` files for matching `applyTo` patterns — loaded if glob matches current file
3. **Chat Request**: Skill discovery runs — names and descriptions are checked against user prompt for relevance
4. **Skill Match**: If a skill description matches, its full `SKILL.md` body is loaded into context (Level 2)
5. **Agent Selection**: When user switches to a custom agent, its instructions and tool constraints replace defaults
6. **Prompt Invocation**: When user types `/command`, prompt file merges with current instructions + agent context
7. **Hook Execution**: At each lifecycle point (PreToolUse, PostToolUse, etc.), registered hooks execute shell commands deterministically
8. **Plugin Discovery**: Installed agent plugins contribute additional skills, agents, hooks, and MCP servers alongside local customizations
7. **Hook Execution**: At each lifecycle point (PreToolUse, PostToolUse, etc.), registered hooks execute shell commands deterministically
8. **Plugin Discovery**: Installed agent plugins contribute additional skills, agents, hooks, and MCP servers alongside local customizations

### Context Budget Management

All primitives share the model's context window. This is why the progressive loading architecture matters — always-on instructions consume baseline budget, on-demand skills only load when needed, and unused agents consume nothing.

**Rule of thumb**: Instructions (2 pages max) + active skill + prompt + your conversation history should fit comfortably within context. If you're hitting limits, your instructions are probably too long.

### Tool Priority Resolution

When multiple primitives specify tools, the priority order is[^3]:

1. Tools specified in prompt file (highest priority)
2. Tools from the referenced custom agent in prompt file
3. Default tools for the selected agent (lowest priority)

**Key Takeaway:** If a prompt specifies tools, those override any agent-level tool restrictions. Design your tool lists intentionally to avoid accidental privilege escalation.
