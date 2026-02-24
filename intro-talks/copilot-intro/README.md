---
status: active
updated: 2026-02-23
section: "Intro Talks"
references:
  - url: https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot
    label: "What is GitHub Copilot"
    verified: 2026-02-23
  - url: https://code.visualstudio.com/docs/copilot/overview
    label: "GitHub Copilot in VS Code"
    verified: 2026-02-23
  - url: https://code.visualstudio.com/docs/copilot/copilot-chat
    label: "Copilot Chat overview"
    verified: 2026-02-23
  - url: https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review
    label: "Copilot Code Review"
    verified: 2026-02-23
  - url: https://docs.github.com/en/copilot/github-copilot-in-the-cli/about-github-copilot-in-the-cli
    label: "Copilot in the CLI"
    verified: 2026-02-23
  - url: https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
    label: "Custom instructions for Copilot"
    verified: 2026-02-23
---

# GitHub Copilot: Your AI Pair Programmer

> **The Question This Talk Answers:**
> *"What can GitHub Copilot actually do for an experienced developer, and how do I get the most out of it from day one?"*

**Duration:** 45 minutes | **Target Audience:** Experienced developers new to GitHub Copilot

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Every developer adopting Copilot needs a mental map of its capabilities before diving into specific features |
| **Compelling** | 🟢 High | Bridges the gap between "I've heard about it" and "I know exactly how to use it in my workflow" — practical, not hype |
| **Actionable** | 🟢 High | Developers leave with 5+ concrete techniques they can use immediately in their editor, terminal, and PRs |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

### Slide Sequence

1. **Title/Logo Slide** ← H1 title + subtitle
2. **Question/Objective Slide** ← "The Question This Talk Answers"
3. **Table of Contents** ← Auto-generated from major sections
4. **The Landscape** ← Why AI-assisted development matters now
5. **How Copilot Works** ← High-level architecture (context → model → suggestion)
6. **🧠 The Shift (Preview)** ← Core insight one-liner
7. **Code Completions** ← Inline suggestions, ghost text, NES
8. **Completions in Practice** ← Patterns that get better suggestions
9. **Copilot Chat: The Interface** ← Chat panel, inline chat, quick chat
10. **Chat Context Mastery** ← #file, @workspace, #codebase, agents
11. **Chat in Action** ← Real workflow examples
12. **Copilot CLI** ← Terminal AI assistance
13. **Copilot Code Review** ← PR review automation
14. **Customization Overview** ← Instructions, prompts, agents, MCP
15. **Customization Stack** ← How features compound
16. **🧠 Mental Model Shift (Full)** ← Move Toward / Away / Against
17. **Getting Started Today** ← Immediate actions
18. **📖 References** ← Resources and next steps
19. **End Slide**

---

## The Problem

### Key Points

- **Feature Overwhelm**
  Copilot has grown from simple code completions to a multi-surface AI platform — Chat, CLI, Code Review, Agents, MCP — and experienced developers don't know where to start.

- **Skepticism Without Context**
  Senior developers often dismiss AI coding tools based on early experiences with basic autocomplete — they haven't seen context-aware assistance.

- **Scattered Documentation**
  Official docs cover individual features but don't provide a cohesive "here's how it all fits together" mental model.

- **Wasted Potential**
  Most developers use less than 20% of Copilot's capabilities, treating it as fancy autocomplete when it can be a full development partner.

### Narrative

You're a developer with years of experience. You've built systems, debugged production incidents at 3 AM, and mentored junior engineers. Then someone says "you should try Copilot" — and suddenly you're watching it suggest `console.log` when you wanted a database migration.

The problem isn't Copilot. The problem is that nobody showed you the full picture. Code completions are just the entry point. Behind that tab-accept workflow is an entire AI collaboration platform: a chat interface that understands your codebase, a CLI that explains errors and suggests commands, automated code review that catches bugs in PRs, and a customization system that lets you teach Copilot your team's patterns.

This talk gives you that full picture in 45 minutes — not as a sales pitch, but as a practical guide from one developer to another. You'll leave knowing exactly which surfaces to use for which tasks, and how to start getting value immediately.

---

## The Solution: GitHub Copilot

### What It Does

GitHub Copilot is an AI-powered development platform that integrates directly into your editor, terminal, and GitHub workflow. It uses large language models with your code context to provide completions, answer questions, review code, and automate routine tasks. [^1]

### Key Capabilities

- **Code Completions**: Real-time inline suggestions as you type — from single lines to entire functions [^2]
- **Copilot Chat**: Conversational AI with deep codebase understanding via context variables and agents [^3]
- **Copilot CLI**: Terminal assistance for commands, error explanations, and shell scripting [^5]
- **Code Review**: Automated PR review with specific, actionable feedback [^4]
- **Customization**: Repository instructions, custom prompts, agents, and MCP servers [^6]

### Architecture Overview

At its core, Copilot works on a simple loop: **context in → model processes → suggestion out**. The quality of what you get depends almost entirely on the context you provide.

When you type code, Copilot gathers context from your open file, related files, and project structure. It sends this to a hosted model that generates suggestions. The same principle applies to Chat (where you explicitly control context with variables like `#file` and `@workspace`) and Code Review (where the PR diff is the context).

Understanding this context-driven model is the single most important thing for getting value from Copilot. More context = better suggestions. That's the thread connecting every feature you'll see today.

**Official Documentation:**
- 📖 [GitHub Copilot Overview](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot) — What Copilot is and how it works [^1]
- 📖 [Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview) — Editor integration guide [^2]

---

## 🎯 Mental Model Shift

> **The Core Insight:** From "AI writes code for me" to "AI amplifies my expertise when I give it the right context"

### Move Toward (Embrace These Patterns)

- ✅ **Context-First Thinking**: Open relevant files, use `#file` references, write descriptive comments before asking for help → Copilot suggestions go from generic to architecture-aware
- ✅ **Conversational Iteration**: Use Chat for exploration and refinement, not just one-shot requests → Complex problems get solved through dialogue, not prompt engineering
- ✅ **Multi-Surface Workflow**: Use completions for typing flow, Chat for exploration, CLI for terminal tasks, Code Review for PRs → Each surface is optimized for a different part of your workflow
- ✅ **Teach Your Patterns**: Use `copilot-instructions.md` and custom prompts to encode team conventions → Every team member gets consistent, pattern-following suggestions

### Move Away From (Retire These Habits)

- ⚠️ **Tab-Only Usage**: Accepting or rejecting inline completions and ignoring everything else → Missing 80% of Copilot's value (Chat, CLI, Review, Agents)
- ⚠️ **Zero-Context Prompting**: Asking Chat questions without referencing specific files or code → Generic responses that could come from any documentation search
- ⚠️ **Manual Everything**: Still writing boilerplate, tests, and docs entirely by hand → Time spent on mechanical tasks that AI handles well

### Move Against (Active Resistance Required)

- 🛑 **Blind Acceptance**: Accepting every suggestion without reading it → AI-generated bugs are still bugs; your expertise is the quality gate
- 🛑 **Replacing Understanding**: Using Copilot to write code you don't understand → Accumulates technical debt that becomes unmaintainable

> **Example Transformation:** Before: Developer opens a file, types code, occasionally accepts a completion. After: Developer opens relevant files for context, uses Chat to explore the problem space, writes implementation with inline completions, asks Copilot to generate tests, and uses Code Review on the PR — all in one workflow.

---

## When to Use Each Surface

### Decision Tree

```
Q: What are you trying to do right now?
├─ Writing code → Use: Inline Completions
│  └─ Best for: Flow state, boilerplate, pattern continuation
│
├─ Exploring / asking questions → Use: Copilot Chat
│  └─ Best for: Understanding code, debugging, refactoring strategies
│
├─ Working in terminal → Use: Copilot CLI
│  └─ Best for: Command syntax, error explanations, shell scripts
│
├─ Reviewing a PR → Use: Copilot Code Review
│  └─ Best for: Catching bugs, style issues, missing edge cases
│
└─ Want consistent team patterns → Use: Customization
   └─ Best for: Instructions, prompts, agents, MCP servers
```

### Comparison of Surfaces

| Aspect | Completions | Chat | CLI | Code Review |
|--------|------------|------|-----|-------------|
| **Best For** | Writing code in flow | Exploration & questions | Terminal tasks | PR quality |
| **Context** | Auto (open files) | Explicit (#file, @workspace) | Command history | PR diff |
| **Interaction** | Tab to accept | Conversational | Natural language | Automated |
| **Speed** | Instant | Seconds | Seconds | Minutes |

---

<!-- 🎬 MAJOR SECTION: The Landscape -->
## The Landscape: AI-Assisted Development

### Why Now?

The shift to AI-assisted development isn't about replacing developers — it's about removing friction from the 60-70% of development work that's mechanical: writing boilerplate, looking up API syntax, translating between languages, writing test scaffolding, and documenting code. [^1]

GitHub Copilot integrates into the tools you already use — your editor, your terminal, your PR workflow — rather than asking you to context-switch to a separate AI interface. This matters because the best AI assistance is the kind that meets you where you already work.

### How Copilot Works (High Level)

```
Your Code Context  ──→  Language Model  ──→  Suggestion
                         (hosted by GitHub)
```

**The context pipeline:**
1. **Gather** — Copilot collects context: current file, open tabs, project structure, instructions files
2. **Process** — A large language model analyzes the context and your intent
3. **Suggest** — Results appear as inline completions, chat responses, CLI suggestions, or review comments

**Key insight:** The model is the same across surfaces. What changes is the context each surface provides. Inline completions see your current file and neighbors. Chat sees what you explicitly reference. Understanding this makes you effective across all surfaces.

---

<!-- 🎬 MAJOR SECTION: Code Completions -->
## Code Completions: Your Typing Accelerator

### Inline Suggestions

As you type, Copilot generates suggestions shown as ghost text. Press **Tab** to accept, **Esc** to dismiss, or keep typing to refine. [^2]

**What Copilot sees for completions:**
- The current file content (before and after cursor)
- Open editor tabs (neighboring files)
- Language and framework from file extension
- Comments and function signatures as intent signals

### Getting Better Completions

The quality of completions is directly tied to the context available. Here are patterns that consistently produce better results:

**Write intent before implementation:**
```python
# Calculate the monthly subscription cost including tax and any active discounts
# Returns the final amount rounded to 2 decimal places
def calculate_monthly_cost(subscription, tax_rate, discounts):
```
Copilot now understands the full intent — not just "write a function."

**Open relevant files:**
If you're implementing a new API endpoint, have the data model, existing endpoints, and router file open. Copilot uses open tabs as context.

**Be specific in naming:**
```typescript
// Vague — Copilot guesses
function process(data) { }

// Specific — Copilot knows exactly what to generate
function validateUserRegistrationForm(formData: RegistrationForm) { }
```

### Next Edit Suggestions (NES)

Copilot doesn't just complete your current line — it can predict your **next edit location** and suggest changes there. After accepting a completion, watch for suggestions at other locations in the file that need corresponding updates (imports, type definitions, test cases). [^2]

---

<!-- 🎬 MAJOR SECTION: Copilot Chat -->
## Copilot Chat: Your Codebase Expert

### Three Ways to Chat

| Mode | Trigger | Best For |
|------|---------|----------|
| **Chat Panel** | Side panel | Extended conversations, complex questions |
| **Inline Chat** | `Ctrl+I` / `Cmd+I` | Quick edits in context, refactoring |
| **Quick Chat** | `Ctrl+Shift+I` / `Cmd+Shift+I` | Fast questions without leaving your code |

### Context Variables: The Power Feature

Context variables are how you tell Chat exactly what to look at. This is the difference between generic answers and codebase-specific solutions. [^3]

| Variable | What It Does | Example |
|----------|-------------|---------|
| `#file` | References a specific file | "Explain #file:auth.ts" |
| `@workspace` | Searches your entire workspace | "@workspace how is auth implemented?" |
| `#codebase` | Semantic search across project | "#codebase find error handling patterns" |
| `#selection` | Uses selected code | Select code → "Refactor #selection" |
| `@terminal` | Accesses terminal context | "@terminal why did my last command fail?" |
| `@vscode` | VS Code settings and features | "@vscode how do I enable word wrap?" |

### Chat in Practice

**Debugging with context:**
```
I'm getting a NullReferenceException in #file:OrderService.cs at line 47.
@workspace show me how other services handle null order lookups.
```

**Architecture exploration:**
```
@workspace explain the authentication flow from login to token refresh.
Include which files are involved.
```

**Code generation with constraints:**
```
Generate a REST endpoint for user profiles following the patterns in #file:UserController.cs.
Use the same error handling and validation approach.
```

**Key insight:** The more specific your context references, the better the response. `@workspace how does auth work` is good. `Explain the JWT validation in #file:middleware/auth.ts and how it connects to #file:services/token.ts` is much better.

---

<!-- 🎬 MAJOR SECTION: CLI & Code Review -->
## Copilot in the CLI

### Terminal AI Assistance

Copilot CLI brings AI assistance to your terminal — an interactive, conversational AI that understands your project context. Instead of searching Stack Overflow, just ask. [^5]

**Interactive mode — start a session and ask naturally:**

```bash
$ copilot
> "Explain what this command does:
   find . -name '*.log' -mtime +30 -delete"

> "Compress all PNG files in this directory recursively"

> "Why am I getting ENOSPC: no space left on device?"
```

**Programmatic mode — single-command execution for scripts:**

```bash
copilot -p "Analyze why the build failed" \
  --allow-tool 'shell(command)'
```

### Copilot Code Review

Copilot Code Review analyzes pull requests and provides specific, actionable feedback — catching issues that are easy to miss in manual review. [^4]

**What it catches:**
- Logic errors and edge cases
- Security vulnerabilities (SQL injection, XSS, etc.)
- Performance issues (N+1 queries, unnecessary allocations)
- Missing error handling
- Inconsistencies with codebase patterns

**How to use it:**
- Enable in repository settings or request review from `@copilot` on a PR
- Review comments appear inline on the PR diff, just like human reviewer comments
- Each comment includes a specific explanation and suggested fix

**Key value:** Code Review doesn't replace human reviewers — it handles the mechanical checks so human reviewers can focus on architecture, design, and business logic decisions.

---

<!-- 🎬 MAJOR SECTION: Customization -->
## Customization: Teaching Copilot Your Patterns

### The Customization Stack

Out of the box, Copilot knows general programming. With customization, it knows **your team's** programming. [^6]

| Layer | File | What It Does |
|-------|------|-------------|
| **Instructions** | `.github/copilot-instructions.md` | Team conventions applied to every response |
| **Custom Prompts** | `.github/prompts/*.prompt.md` | Reusable, shareable prompt templates |
| **Agent Skills** | `.github/skills/*/SKILL.md` | Domain knowledge loaded when relevant |
| **MCP Servers** | `.vscode/mcp.json` | Connect to databases, APIs, external tools |
| **Custom Agents** | `.github/agents/*.agent.md` | Role-based AI specialists |

### How They Compound

Each customization layer builds on the previous ones:

```
Without customization:
  "Create a user endpoint" → Generic REST boilerplate

With instructions:
  "Create a user endpoint" → Follows your team's error handling,
  naming conventions, and authentication patterns

With instructions + custom prompts + MCP:
  "Create a user endpoint" → Follows patterns, uses your prompt
  template, queries your database schema for the model
```

### Getting Started with Customization

**Step 1: Create `copilot-instructions.md`** (5 minutes)
```markdown
# Project Instructions
- Use TypeScript with strict mode
- Follow REST conventions: plural nouns, proper HTTP methods
- All endpoints require authentication via JWT
- Use Zod for request validation
- Return consistent error format: { error: string, code: number }
```

This single file transforms every Copilot interaction from generic to team-specific.

---

## Real-World Use Cases

### Use Case 1: Onboarding to a New Codebase

**The Problem:** You've joined a team with a large codebase. Understanding the architecture, patterns, and conventions takes weeks.

**The Solution:** Use Copilot Chat with `@workspace` to explore the codebase conversationally.

```
@workspace explain the overall architecture of this project.
What are the main components and how do they interact?
```

```
@workspace show me the patterns used for database access.
Which ORM/library is used and what's the query convention?
```

**Outcome:** Onboarding understanding from 2-3 weeks → 2-3 days for core architecture comprehension.

---

### Use Case 2: Writing Tests for Existing Code

**The Problem:** You need to add tests for a module that has none. Writing test scaffolding and mocking is tedious.

**The Solution:** Use inline Chat to generate tests that follow your project's existing test patterns.

```
Look at #file:tests/UserService.test.ts for the testing pattern.
Generate tests for #file:services/OrderService.ts using the same approach.
Cover: happy path, null inputs, authorization failures, and database errors.
```

**Outcome:** Test writing time from 2 hours → 20 minutes for comprehensive coverage with consistent patterns.

---

### Use Case 3: Cross-Language Translation

**The Problem:** You need to port a Python data processing script to TypeScript for a Node.js service.

**The Solution:** Share the source file via `#file` and ask Chat to translate with your project's conventions.

```
Translate #file:scripts/data_processor.py to TypeScript.
Follow the patterns in #file:src/services/DataService.ts.
Use the existing error handling and logging approach.
```

**Outcome:** Manual translation from 4 hours → 30 minutes with consistent patterns and proper type definitions.

---

## ✅ What You Can Do Today

**Immediate Actions (15 minutes):**
- [ ] Open your project in VS Code and try typing with awareness of Copilot completions
- [ ] Open Copilot Chat (side panel) and ask: `@workspace explain the architecture of this project`
- [ ] Try inline Chat (`Ctrl+I`) on a function: "Add error handling to this function"

**Short-Term Implementation (1 hour):**
- [ ] Create `.github/copilot-instructions.md` with 5-10 team conventions
- [ ] Install Copilot CLI: `gh copilot` (auto-installs on first run) or `npm install -g @github/copilot`
- [ ] Try interactive mode: run `copilot` in your project directory and ask about your codebase
- [ ] Request a Copilot Code Review on your next PR

**Advanced Exploration (2-4 hours):**
- [ ] Create 2-3 `.prompt.md` files for common tasks (code review checklist, test generation, API endpoint scaffold)
- [ ] Explore agent mode for multi-file changes
- [ ] Set up an MCP server for your database or API

**Next Steps After This Talk:**
1. ✅ Complete the immediate actions above
2. 📖 Deep dive: [Copilot Chat — Context Mastery](../tech-talks/copilot-chat/) for advanced context techniques
3. 📖 Deep dive: [Copilot CLI](../tech-talks/copilot-cli/) for terminal workflow optimization
4. 📖 Workshop: [CopilotTraining Workshop](../workshop/) for hands-on customization exercises
5. 🚀 Explore: [Customization Instructions Module](../workshop/01-instructions/) for team-wide Copilot configuration

---

## Related Patterns

### Complementary Features

- **[Copilot Chat — Context Mastery](../tech-talks/copilot-chat/)** — Deep dive into context variables, agents, and advanced chat techniques
- **[Copilot CLI](../tech-talks/copilot-cli/)** — Comprehensive terminal AI workflow patterns
- **[Copilot Code Review](../tech-talks/copilot-code-review/)** — Advanced PR review automation and configuration
- **[Custom Instructions](../workshop/01-instructions/)** — Hands-on workshop for creating effective `copilot-instructions.md`
- **[MCP Applications](../tech-talks/mcp-apps/)** — Connecting Copilot to external tools and data sources

### Decision Flow

**After this intro, what should you explore next?**

```
Q: What's your priority?
├─ Better code suggestions → See: Copilot Chat (context mastery)
├─ Team-wide consistency → See: Workshop Module 1 (instructions)
├─ Automated code review → See: Copilot Code Review (tech talk)
├─ Terminal productivity → See: Copilot CLI (tech talk)
└─ Full customization stack → See: Workshop Modules 1-6
```

---

## 📖 References

### Official Documentation

[^1]: **[What is GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)** — Overview of capabilities and how Copilot works
[^2]: **[GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview)** — Editor integration, completions, and inline suggestions

### Feature-Specific Docs

[^3]: **[Copilot Chat in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat)** — Chat interface, context variables, and agents
[^4]: **[Copilot Code Review](https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review)** — PR review automation and configuration
[^5]: **[Copilot in the CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli/about-github-copilot-in-the-cli)** — Terminal AI assistance with explain and suggest commands
[^6]: **[Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)** — Repository-level instruction files for team patterns

### Related CopilotTraining Content

[^7]: **[CopilotTraining Workshop](../workshop/)** — Hands-on modules for Copilot customization (8-9 hours)
[^8]: **[Copilot Chat Tech Talk](../tech-talks/copilot-chat/)** — Deep dive into context mastery and advanced chat techniques
[^9]: **[Copilot CLI Tech Talk](../tech-talks/copilot-cli/)** — Comprehensive terminal AI workflow guide

---

## 🎭 Behind the Scenes

### The Context Window

Every Copilot interaction is constrained by a context window — the maximum amount of text the model can process at once. Understanding this explains why:

1. **Open files matter**: Copilot uses open tabs as context for completions. More relevant open files = better suggestions.
2. **Specific references beat broad queries**: `#file:auth.ts` gives Chat exactly what it needs. `@workspace` searches semantically but may miss edge cases.
3. **Instructions are always included**: Your `copilot-instructions.md` is prepended to every request, which is why keeping it concise and focused matters.

### Why Customization Compounds

Each customization layer adds to the context available to Copilot:

- **Instructions** set the baseline (always applied)
- **Prompts** add task-specific structure (applied when invoked)
- **Skills** add domain knowledge (loaded when relevant)
- **MCP** adds live data access (queried on demand)
- **Agents** bundle all of the above into role-specific configurations

This is why teams that invest in customization see compounding returns — each layer makes every other layer more effective.
