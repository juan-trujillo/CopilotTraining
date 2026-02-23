# .github Configuration

This folder contains GitHub Copilot customizations and GitHub Actions workflows that power the CopilotTraining content system.

---

## File Overview

| Path | Purpose |
|------|---------|
| `copilot-instructions.md` | Global Copilot context — loaded for every conversation in this repo |
| `.copilotignore` | Excludes files from Copilot's context window |
| `agents/` | Custom Copilot agents for content generation |
| `skills/` | Reusable skills invoked by agents or directly |
| `prompts/` | Prompt templates used by workflows |
| `workflows/` | GitHub Actions for CI/CD and automated content generation |
| `ISSUE_TEMPLATE/` | Issue forms that trigger automated pipelines |

---

## copilot-instructions.md

The main instruction file for GitHub Copilot in this repository. Covers:

- **Repository structure** — Where workshop, tech-talk, and exec-talk content lives
- **Content guidelines** — Persona-driven narratives, outcome-based language, metrics requirements
- **Emoji vocabulary** — Consistent visual language across all content
- **Frontmatter requirements** — Status, dates, sections for slide indexing
- **Slide generation** — Rules for Slidev presentations

This file is automatically loaded as context whenever Copilot works in this repo.

---

## agents/

Custom agents for content orchestration. Invoke via `@agent-name` in Copilot Chat.

| Agent | What It Does |
|-------|-------------|
| **Module Planner** | Research and plan workshop modules; creates README.md with exercise planning table |
| **Module Creator** | End-to-end module creation — orchestrates planning + exercise file generation |
| **Tech Talk Generator** | Creates tech talks (research → plan → README) from URLs or topics |
| **Slide Generator** | Transforms README content into Slidev presentations (15-20 slides) |

### Usage Examples

```
@module-planner Create a module on Copilot Memory using these URLs: [...]
@tech-talk-generator Create a tech talk on terminal sandboxing
@slide-generator Generate slides for tech-talks/copilot-cli
```

---

## skills/

Reusable capabilities that agents invoke, or that you can call directly.

| Skill | What It Does |
|-------|-------------|
| **exercise-author** | Creates individual exercise files from a module's planning table |
| **module-author** | Generates module README.md with personas, metrics, and exercise outline |
| **tech-talk-author** | Creates tech talk content using the 3-phase workflow (research → plan → build) |

Skills live in subfolders with a `SKILL.md` file defining their behavior.

---

## prompts/

Prompt templates used by GitHub Actions workflows.

| Path | Purpose |
|------|---------|
| `tech-talk/research-instructions.md` | Phase 1: Research prompts for Copilot CLI |
| `tech-talk/planning-instructions.md` | Phase 2: Content planning prompts |
| `tech-talk/build-instructions.md` | Phase 3: README generation prompts |
| `tech-talk/slides-instructions.md` | Phase 4: Slide generation prompts |

These ensure consistency between IDE-generated and pipeline-generated content.

---

## workflows/

GitHub Actions for deployment and automated content generation.

| Workflow | Trigger | What It Does |
|----------|---------|-------------|
| `deploy-slides.yml` | Push to main | Builds and deploys Slidev presentations to GitHub Pages |
| `pr-validate-slides.yml` | Pull request | Validates slide syntax and formatting |
| `cleanup-runs.yml` | Manual/scheduled | Cleans up old workflow runs |
| `tech-talk-1-research.yml` | Issue opened | Phase 1: Copilot CLI researches URLs, downloads images |
| `tech-talk-2-plan.yml` | Label added | Phase 2: Creates content plan from research |
| `tech-talk-3-build.yml` | `/approve-plan` comment | Phase 3: Generates full README |
| `tech-talk-4-slides.yml` | Label added | Phase 4: Generates Slidev slides |

See `workflows/TECH-TALK-GENERATION-README.md` for the full tech talk pipeline documentation.

---

## ISSUE_TEMPLATE/

Issue forms that trigger automated workflows.

| Template | What It Does |
|----------|-------------|
| `tech-talk-request.yml` | Opens a tech talk request that kicks off the 4-phase generation pipeline |

### Tech Talk Pipeline

1. **Open an issue** using the Tech Talk Request template
2. **Phase 1-2 run automatically** — research and planning
3. **Review the plan** posted as a comment, then comment `/approve-plan`
4. **Phase 3 generates the README** and opens a PR
5. **Add `tech-talk:slides` label** to generate slides

---

## Quick Reference

**Create a new tech talk:**
Open an issue → Tech Talk Request → fill in topic and URLs

**Generate slides manually:**
```
@slide-generator Generate slides for tech-talks/copilot-cli
```

**Create a workshop module:**
```
@module-creator Create module for [topic] using [URLs]
```

**Check what Copilot sees:**
Review `.copilotignore` for excluded files; review `copilot-instructions.md` for loaded context.
