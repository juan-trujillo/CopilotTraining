# Tech Talks — Creation Guide

This directory contains technical deep-dive presentations for practitioners. Each talk lives in its own subdirectory (e.g., `copilot-cli/`, `agent-teams/`) and follows a consistent structure defined by [TEMPLATE.md](TEMPLATE.md).

---

## 📁 Directory Structure

Every tech talk produces:

```
tech-talks/{topic}/
├── research.md          # Phase 1 — raw research and source analysis
├── plan.md              # Phase 2 — content outline mapped to TEMPLATE sections
├── README.md            # Phase 3 — the finished tech talk
├── images/              # Downloaded or referenced visuals
└── examples/            # Standalone code samples
```

The final `README.md` follows the structure in [TEMPLATE.md](TEMPLATE.md), which defines every required section — from Content Fitness rubric to Slide Generation Mapping to the References list.

---

## 💻 Creating Tech Talks with the IDE Agent

Create a tech talk interactively in VS Code using Copilot Chat agents. This gives you more control — you can review and iterate between phases.

### How to Start

Open Copilot Chat and invoke:

```
@Tech Talk Generator create tech talk for [topic] using [URLs]
```

### The Three Phases

The agent follows the same prompt templates but pauses after each phase for your review:

#### Phase 1: Research
- Agent fetches URLs, runs web searches, downloads images
- Creates `tech-talks/{topic}/research.md` with full analysis
- **⏸️ Pauses** — shows you a summary, asks if you want to proceed

#### Phase 2: Plan
- Agent reads research.md and creates `plan.md`
- Maps content to every TEMPLATE.md section
- **⏸️ Pauses** — shows the plan, asks for approval

#### Phase 3: Build
- Agent reads everything and generates `README.md`
- Sets frontmatter (`status`, `updated`, `section`)
- **⏸️ Pauses** — shows the completed talk, offers handoff to slides

### Generating Slides (Separate Step)

Slides are **not** part of the agent's workflow. After Phase 3, use the handoff buttons or invoke directly:

```
@Slide Generator generate slides for tech-talks/{topic}
```

Or for generation + verification:

```
@Slide Manager generate and verify slides for tech-talks/{topic}
```

### Alternative: Skill-Based Workflow

You can also use the `@tech-talk-author` skill for a lighter-weight version:

```
@tech-talk-author create tech talk for [topic] using [URLs]
```

This follows the same 3-phase process but without the interactive pauses.

---

## � TEMPLATE.md — The Source of Truth

[TEMPLATE.md](TEMPLATE.md) defines the canonical structure. Every tech talk README must include these sections:

1. **Title + Primary Question** — the ONE question the talk answers
2. **📊 Content Fitness** — quality rubric (Relevant / Compelling / Actionable)
3. **📽️ Slide Generation Mapping** — how sections map to slides
4. **🧠 Mental Model Shift** — before/after transformation table
5. **The Problem** — what practitioners struggle with today
6. **The Solution** — the pattern or capability that solves it
7. **🔑 Key Artifacts** — configs, files, commands to know
8. **🎬 Major Sections** (3-6) — deep technical content with examples
9. **Use Cases** — real-world scenarios
10. **✅ Actionable Checklist** — what to do Monday morning
11. **📖 References** — numbered citations (`[^1]`, `[^2]`, etc.)

---

## 🗂️ Existing Tech Talks

| Directory | Topic |
|-----------|-------|
| `agent-teams/` | Multi-agent collaboration patterns |
| `agentic-journey/` | The evolution toward agentic development |
| `agentic-sdlc/` | AI across the software development lifecycle |
| `context-engineering-foundations/` | Foundational context engineering patterns |
| `copilot-chat/` | GitHub Copilot Chat fundamentals |
| `copilot-chat-internals/` | Under-the-hood: debug view, system prompts |
| `copilot-cli/` | Terminal-native AI with Copilot CLI |
| `copilot-hooks/` | Pre/post-processing hooks for Copilot |
| `copilot-acp/` | Agent Client Protocol for universal AI integration |
| `copilot-memory/` | Copilot memory and persistent context |
| `copilot-primitives/` | Core Copilot building blocks |
| `copilot-sdk/` | Programmatic Copilot integration |
| `copilot-web/` | Browser and mobile Copilot workflows |
| `enterprise-patterns/` | Enterprise-scale adoption patterns |
| `mcp-apps/` | Model Context Protocol applications |
| `multi-step-tasks/` | Complex multi-step agent tasks |
| `parallel-execution/` | Parallel agent execution strategies |
| `terminal-sandboxing/` | Sandboxed terminal execution |

For help choosing which talk to explore, see [DECISION-GUIDE.md](DECISION-GUIDE.md).

