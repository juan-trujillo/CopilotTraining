---
status: active
updated: 2026-04-17
section: "Context & Customization"
references:
  - url: https://microsoft.github.io/apm/introduction/what-is-apm/
    label: "What is APM — official documentation"
    verified: 2026-04-17
  - url: https://github.com/microsoft/apm
    label: "APM GitHub repository"
    verified: 2026-04-17
  - url: https://microsoft.github.io/apm/guides/marketplaces/
    label: "APM Marketplaces guide"
    verified: 2026-04-17
  - url: https://microsoft.github.io/apm/enterprise/security/
    label: "APM Enterprise security model"
    verified: 2026-04-17
  - url: https://microsoft.github.io/apm/guides/plugins/
    label: "APM Plugin authoring guide"
    verified: 2026-04-17
  - url: https://microsoft.github.io/apm/introduction/how-it-works/
    label: "How APM works — architecture overview"
    verified: 2026-04-17
---

# APM: Agent Package Manager

> **The Question This Talk Answers:**
> *"Marketplaces help me discover and install plugins — but how do I get reproducible agent setups, version locking, dependency resolution, and security scanning across my entire team? How do APM and marketplaces complement each other?"*

**Duration:** 20 minutes | **Target Audience:** Developers and platform engineers managing AI agent configuration at scale

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Every team using AI coding agents faces configuration drift — APM solves a universal pain point |
| **Compelling** | 🟢 High | Direct comparison with familiar package managers (npm, pip, cargo) makes the value immediately clear |
| **Credible** | 🟢 High | Open-source Microsoft project with active development; built on AGENTS.md, Agent Skills, and MCP standards |
| **Novel** | 🟢 High | First dependency manager for AI agent configuration — most teams don't know this exists |
| **Unique** | 🟢 High | Complements the Marketplaces talk by showing the governance/composition layer marketplaces don't provide |

---

## 🎯 Objectives

By the end of this session, attendees will be able to:

1. **Explain** why AI agent configuration needs dependency management just like application code
2. **Describe** APM's seven primitives and five-stage lifecycle (Consume → Compose → Lock → Build → Distribute)
3. **Differentiate** what marketplaces solve (discovery, distribution) from what APM adds (versioning, composition, reproducibility, security)
4. **Install** APM and set up a project manifest for multi-tool agent configuration
5. **Articulate** the security model that makes APM enterprise-ready (pre-deployment scanning, content hashing, audit trails)

---

## 📖 Talk Structure (20 minutes)

### Section 1: The Problem — Agent Configuration Drift (~3 min)

Software teams solved dependency management for application code decades ago. `npm`, `pip`, `cargo`, `go mod` — declare what you need, install it reproducibly, lock versions, ship.

AI agent configuration has no equivalent. Today teams:

- Copy instruction files between repos manually
- Write prompts from scratch for every project
- Configure MCP servers per-developer
- Hope everyone's setup matches

| Without APM | With APM |
|-------------|----------|
| Each dev configures agents manually | `apm install` sets up everything |
| Instructions drift across machines | `apm.lock.yaml` pins exact versions |
| No way to share or reuse prompts | Publish and install from any git host |
| MCP servers configured per-developer | Declared in manifest, installed consistently |
| Onboarding requires tribal knowledge | Clone, `apm install`, done |
| No audit trail for agent config | Lock file tracks every dependency |

The cost compounds with team size. A 5-person team with manual setup has 5 divergent agent configurations. A 50-person team has 50.

### Section 2: What APM Is — The Missing Package Manager (~4 min)

APM introduces `apm.yml` — a declarative manifest for AI agent configuration:

```yaml
name: my-project
version: 1.0.0
dependencies:
  apm:
    - microsoft/apm-sample-package
    - anthropics/skills/skills/frontend-design
    - github/awesome-copilot/agents/api-architect.agent.md
```

One command installs everything: `apm install`

APM resolves transitive dependencies, places files in correct directories, and generates a lock file that pins every version.

#### The Seven Primitives

| Primitive | What it does | Example |
|-----------|-------------|---------|
| **Instructions** | Coding standards and guardrails | "Use type hints in all Python files" |
| **Skills** | Reusable AI capabilities and workflows | Form builder, code reviewer |
| **Prompts** | Slash commands for common tasks | `/security-audit`, `/design-review` |
| **Agents** | Specialized AI personas | Accessibility auditor, API designer |
| **Hooks** | Lifecycle event handlers | Pre-tool validation, post-tool linting |
| **Plugins** | Pre-packaged agent bundles | Context engineering kit, commit helpers |
| **MCP Servers** | External tool integrations | Database access, API connectors |

#### The Five-Stage Lifecycle

```
CONSUME → COMPOSE → LOCK → BUILD → DISTRIBUTE
```

1. **Consume** — Install packages from any git host. APM resolves the full dependency tree.
2. **Compose** — Combine primitives from multiple sources. `apm.yml` is the single source of truth.
3. **Lock** — `apm.lock.yaml` pins every dependency to an exact commit. Identical setups guaranteed.
4. **Build** — `apm compile` produces optimized output: `AGENTS.md` for Copilot/Codex, `CLAUDE.md` for Claude.
5. **Distribute** — Any git repository is a valid APM package. No registry required.

### Section 3: Marketplaces + APM — Better Together (~5 min)

This is the key insight: Marketplaces and APM solve **different layers** of the same problem.

#### What Marketplaces Solve (Discovery & Distribution)

- **Browsing**: `copilot plugin marketplace browse awesome-copilot`
- **Installation**: `copilot plugin install code-review@copilot-plugins`
- **Cross-tool format**: `plugin.json` works in both Copilot CLI and Claude Code
- **Curation**: Maintainer-curated registries with descriptions and categorization

#### What Marketplaces Don't Solve

- **No lock files** — No guarantee two developers get the same version
- **No transitive dependencies** — Plugins can't depend on other plugins with resolution
- **No CI enforcement** — No deterministic reproducibility in build pipelines
- **No security scanning** — No pre-deployment content audit
- **No multi-source composition** — Can't combine org standards + team config + project config in one manifest

#### How APM Bridges the Gap

APM consumes marketplaces as a first-class source:

```bash
apm marketplace add github/awesome-copilot
apm install code-review@awesome-copilot
```

The installed plugin gets the full APM treatment:
- Pinned to exact commit in `apm.lock.yaml`
- Scanned for hidden Unicode (Glassworm-class attacks)
- Tracked with provenance (`discovered_via: awesome-copilot`)
- Composable with other dependencies

#### The Stack

```
┌──────────────────────────────────────────────────┐
│  AI Coding Tools                                  │
│  (Copilot, Claude, Cursor, OpenCode, Codex, Gemini)│
├──────────────────────────────────────────────────┤
│  Plugin / Extension Systems                       │
│  (Marketplaces — discovery & distribution)        │
├──────────────────────────────────────────────────┤
│  APM                                              │
│  (dependency mgmt, composition, lock files, audit)│
├──────────────────────────────────────────────────┤
│  Git                                              │
│  (source of truth, distribution)                  │
└──────────────────────────────────────────────────┘
```

APM is not a plugin system. It's the **governance, composition, and reproducibility layer** underneath.

### Section 4: Multi-Tool Output & Security (~4 min)

#### Write Once, Deploy Everywhere

APM deploys and compiles to native formats:

| AI Tool | `apm install` deploys | `apm compile` adds | Support |
|---------|----------------------|-------------------|---------|
| GitHub Copilot | `.github/instructions/`, `.github/prompts/`, agents, hooks, plugins, MCP | `AGENTS.md` (optional) | **Full** |
| Claude | `.claude/` commands, skills, MCP | `CLAUDE.md` | **Full** |
| Cursor | `.cursor/rules/`, `.cursor/agents/`, skills, hooks, MCP | `.cursor/rules/` | **Full** |
| OpenCode | `.opencode/agents/`, `.opencode/commands/`, skills, MCP | Via `AGENTS.md` | **Full** |
| Codex CLI | — | `AGENTS.md` | Instructions via compile |
| Gemini | — | `GEMINI.md` | Instructions via compile |

Zero lock-in: if you stop using APM, every output file still works natively.

#### Enterprise Security: The Prompt Supply Chain

Traditional package managers have a gap between install and execute. **Agent configuration has no such gap.** The moment a file lands in `.github/prompts/`, any watching IDE agent may ingest it. File presence IS execution.

APM's security model:

- **Pre-deployment scanning**: `apm install` scans before deploying to agent-readable directories
- **Hidden Unicode detection**: Catches tag characters (U+E0001–E007F), bidi overrides, Glassworm-class attacks
- **Content integrity hashing**: SHA-256 hash of each package stored in lock file
- **Compile-time scanning**: `apm compile` scans assembled output before writing
- **Pack-time scanning**: `apm pack` catches tainted content before publishing
- **On-demand auditing**: `apm audit` with SARIF/JSON/Markdown output for CI pipelines

Critical findings **block deployment**. The package is downloaded for inspection, but nothing reaches agent-readable directories until clean.

### Section 5: Getting Started & What to Do Monday (~4 min)

#### Installation (30 seconds)

```bash
# macOS / Linux
curl -sSL https://aka.ms/apm-unix | sh

# Windows
irm https://aka.ms/apm-windows | iex

# Or via Homebrew / pip / Scoop
brew install microsoft/apm/apm
```

#### Quick Start

```bash
# Initialize a new project
apm init my-project

# Add dependencies
apm install microsoft/apm-sample-package#v1.0.0

# Add a marketplace
apm marketplace add github/awesome-copilot

# Install from marketplace
apm install azure-cloud-development@awesome-copilot

# Compile for all tools
apm compile

# Audit for security
apm audit
```

#### Three Adoption Tiers

| Tier | Time | What You Get |
|------|------|-------------|
| **Try It** | 15 min | Install APM, `apm init`, add one package, see files deploy |
| **Team Setup** | 1 hour | Create `apm.yml` with org standards + team config, commit `apm.lock.yaml` |
| **Enterprise** | 2-4 hours | Add marketplace, set up `apm audit` in CI, create org-wide packages |

#### Works with agentrc

[agentrc](https://github.com/microsoft/agentrc) analyzes your codebase and generates tailored agent instructions from real code. Use agentrc to author high-quality instructions, then package them with APM to share across your org.

---

## 📚 Key Concepts

| Concept | Definition |
|---------|-----------|
| **apm.yml** | Declarative manifest for all agent configuration dependencies |
| **apm.lock.yaml** | Lock file pinning every dependency to an exact commit SHA |
| **Seven Primitives** | Instructions, skills, prompts, agents, hooks, plugins, MCP servers |
| **Marketplace** | Curated plugin index that APM can consume as a dependency source |
| **apm compile** | Generates native output files (AGENTS.md, CLAUDE.md, .cursor/rules/) |
| **apm audit** | Security scanner for hidden Unicode, bidi attacks, and content integrity |
| **apm pack** | Creates portable bundles for offline/air-gapped distribution |

---

## 🔗 Resources

- [APM Documentation](https://microsoft.github.io/apm/) — Complete reference
- [APM GitHub Repository](https://github.com/microsoft/apm) — Source code and discussions
- [APM Quick Start](https://microsoft.github.io/apm/getting-started/quick-start/) — Setup in under a minute
- [APM Security Model](https://microsoft.github.io/apm/enterprise/security/) — Enterprise security review
- [APM CLI Reference](https://microsoft.github.io/apm/reference/cli-commands/) — All commands
- [agentrc](https://github.com/microsoft/agentrc) — Auto-generate instructions from code
- [Companion Talk: Copilot Marketplaces](../../../intro-talks/copilot-marketplaces/) — Discovery and distribution layer
