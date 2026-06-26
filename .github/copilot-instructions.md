# Copilot Instructions for CopilotTraining Content Development

## Git Remotes & PR Targets

This clone is the **juan-trujillo fork**. All commits, branches, and PRs go to
`juan-trujillo/CopilotTraining` — **never** `MSBart2/CopilotTraining` (the
upstream source).

- `origin` → `https://github.com/juan-trujillo/CopilotTraining.git` (fetch + push)
- `upstream` → `https://github.com/MSBart2/CopilotTraining` (fetch only; push URL is
  deliberately set to `DISABLED_no_push`)

When opening PRs, always explicitly target the fork:

```bash
gh pr create --repo juan-trujillo/CopilotTraining --base main --head <branch> ...
```

**Before any commit / push / PR-creation operation, echo the target repo URL in
your response so the user can confirm.** The user has had to correct the agent
about wrong-repo targeting multiple times across past sessions.

---

## Repository Structure

This repository contains three types of content, each with different purposes and guidelines:

- **`workshop/`** — Hands-on training modules with personas, exercises, and metrics (15+ years experience → newcomers)
- **`tech-talks/`** — Technical deep-dives for practitioners (30-60 min presentations on specific capabilities)
- **`exec-talks/`** — Executive thought leadership (strategic context for leadership decision-making)

---

## Content-Type Specific Guidelines

### Workshop Content (`workshop/` directory)

**Purpose:** Hands-on training with progressive skill-building through personas and exercises

**Key characteristics:**

- Persona-driven narratives (Sarah, Marcus, David, Elena, Rafael)
- Outcome-based language (what was built/validated, not "learned")
- Quantifiable metrics in Before/After comparisons
- Hands-on exercises with concrete artifacts

**For content creation:** Use `module-planner` or `module-creator` agents (detailed requirements in `.github/agents/`)

**Persona reference:** [workshop/00-orientation/PERSONAS.md](../workshop/00-orientation/PERSONAS.md)

### Tech Talk Content (`tech-talks/` directory)

**Purpose:** Technical deep-dives for practitioners exploring specific capabilities or patterns

**Key characteristics:**

- Clear problem statement and motivation
- Technical depth with practical examples
- Architectural diagrams and system flows
- Implementation guidance and tradeoffs
- Concrete takeaways for immediate application
- Required working artifacts (configs, workflows, code samples)

**For content creation:** Use `Tech Talk Generator` agent (detailed requirements in `.github/agents/tech-talk-generator.agent.md`)

**Template reference:** [tech-talks/TEMPLATE.md](../tech-talks/TEMPLATE.md)

**Tone:** Expert-to-expert, assumes technical background, focuses on "how" and "why"

### Executive Talk Content (`exec-talks/` directory)

**Purpose:** Thought leadership for technical leaders making strategic decisions about AI adoption

**Key characteristics:**

- Strategic framing with business context
- Industry parallels and analogies (aviation, manufacturing, etc.)
- Organizational implications and transformation patterns
- Risk mitigation and governance frameworks
- C-level/VP-level decision criteria

**Tone:** Authoritative but accessible, focuses on "what this means" for the organization

---

## Universal Formatting Guidelines

_Apply to all content types_

### Emoji Vocabulary

| ----- | ---------------------------------- | ---------------------------------------------------- |
| ⏰ | Time markers | `## ⏰ 10:30 AM — The Prompt Problem` |
| 📖 | Story/narrative sections | `## 📖 The Story` |
| 🎯 | Objectives, goals, exercises | `## 🎯 Learning Objectives` |
| 🧠 | Mindful moments (philosophical) | `## 🧠 Mindful Moment: Clarity Over Cleverness` |
| 📚 | Key concepts, documentation | `## 📚 Key Concepts` |
| 🔨 | Exercises section header | `## 🔨 Exercises` |
| ❌ | "Before" frustration | `#### ❌ The "Before" — What Frustration Looks Like` |
| ✨ | "After" improvement | `#### ✨ The "After" — The Improved Experience` |
| ✅ | Success criteria, checklists | `#### ✅ Success Criteria` |
| 💭 | Persona thoughts/reactions | `#### 💭 Elena's Realization` |
| 🚀 | Challenge extensions, quick starts | `#### 🚀 Challenge Extension` |
| 🔗 | Connections, cross-references | `## 🔗 Compounding Value` |
| ➡️ | Next steps, navigation | `## ➡️ Next Up` |
| 💡 | Tip callouts | `💡 **Pro Tip**: ...` |
| 🌐 | Bonus/web-related content | `## 🌐 Bonus: Advanced Techniques` |
| 📊 | Metrics tables | `## 📊 Success Metrics` |
| 🎭 | Behind the scenes | `## 🎭 Behind the Scenes` |
| ⭐ | Lead exercise marker (personas) | `⭐ *You lead this one*` |
| 🤝 | Collaboration marker (personas) | `🤝 *Team collaboration*` |
| 😰 | Fear/before state | `- 😰 Worried that...` |

---

## Tone and Voice

- **Respectful** — Treat all experience levels with dignity
- **Practical** — Focus on what works, not theory for theory's sake
- **Honest** — Acknowledge limitations and tradeoffs
- **Encouraging** — Celebrate progress, normalize learning curves

---

## Slide Generation Guidelines

When creating Slidev presentations, follow these principles:

- **Maximum 15-20 slides per module** — Force focused, essential content only
- **Extract content from source README** — Preserve persona quotes, metrics, and exercise objectives
- **Visual hierarchy** — Use emoji vocabulary consistently (🎯, ⏰, 📊, etc.)
- **Beautiful, polished design** — Dark cockpit-style with Tailwind CSS, never use Mermaid diagrams

### Slide Frontmatter Requirements

All slide files **must** include these fields in the YAML frontmatter:

- `status: active` or `status: archived` — Indicates whether the deck is live or frozen
- `updated: YYYY-MM-DD` — Date of last modification

**Archived slides (`status: archived`) must never be modified, regenerated, or fixed by any agent or skill.** If an agent encounters an archived slide, it must stop and inform the user. The build scripts (`build-all.sh`, `build-all.ps1`) automatically skip archived slides — their last-built output remains deployed until manually removed.

### Tech Talk / Exec Talk Frontmatter Requirements

All tech talk and exec talk README.md files **must** include YAML frontmatter at the top:

```yaml
---
status: active # or "archived"
updated: 2026-02-08 # last modification date
section: "Context & Customization" # index-custom.html sub-group
---
```

**Fields:**

- `status` — `active` or `archived`. Archived talks must never be modified by agents.
- `updated` — Date of last modification (YYYY-MM-DD). Agents must update this when modifying content.
- `section` — The sub-group in `slides/index-custom.html` where the slide card belongs. Valid values:
  - `Copilot Surfaces` — Chat, CLI, Web, Memory, Terminal Sandboxing
  - `Context & Customization` — Instructions, Hooks, SDK, MCP, Primitives
  - `Agent Architecture` — Teams, Multi-Step Tasks, Parallel Execution
  - `Agentic Transformation` — Journey, SDLC, Enterprise Patterns
  - `Executive Talks` — Used for exec-talks only
- `references` — _(optional)_ Array of authoritative URLs used as sources for the talk's content. Each entry has:
  - `url` — _(required)_ Full URL to the official documentation or source
  - `label` — _(required)_ Short human-readable description of the page
  - `verified` — _(required)_ Date (YYYY-MM-DD) when the URL was last confirmed accurate and accessible

  Example:

  ```yaml
  references:
    - url: https://docs.github.com/en/copilot/...
      label: "Official overview page"
      verified: 2026-02-17
  ```

  Agents should populate `references` from the talk's `research.md` URLs when creating or updating content. The `scripts/check-references.mjs` script validates that all reference URLs are still accessible.

**Change detection:** When generating slides, compare the README's `updated` date against the slide file's `updated` date. If the README is newer, the slide needs regeneration. If the slide is newer or equal, it's already up to date.

### Slide Index "NEW" Badge

`slides/index-custom.html` displays a **NEW** badge on cards for slides updated within the last 7 days. This is driven by a `SLIDE_DATES` JavaScript map inside the HTML file, which maps topic slugs to their `updated:` dates from frontmatter.

**After any slide is created, modified, or has its `updated:` date changed**, agents must run the sync script to keep the badge data current:

```bash
node slides/scripts/sync-index-dates.mjs
```

Use `--check` to verify without modifying (useful in CI). The script reads `updated:` from all slide frontmatter and rewrites the `SLIDE_DATES` map in `index-custom.html`.

**For slide generation:** Use the `slide-generator` agent (see `.github/agents/slide-generator.agent.md`)

### Recommended Workflow

```
Use slide-generator agent to create slides for workshop/03-custom-prompts
```

This generates slides from the module README (selective, 15-20 slides), updates the slide index, and reports completion.

**Persona reference:** [workshop/00-orientation/PERSONAS.md](../workshop/00-orientation/PERSONAS.md)

---

## Quick Voice Checklist

Before submitting content, verify:

- [ ] **Outcomes not learning** — Shows what was built/validated, not what was discovered
- [ ] **Metrics included** — At least 2-3 quantified improvements in Before/After
- [ ] **Evidence-based** — Demonstrates through action, not claims understanding
- [ ] **Persona-authentic** — Uses the persona's unique lens (Sarah=ROI, David=expertise, etc.)
- [ ] **Professional tone** — Treats all as experienced professionals validating tools

---

## Agent Invocation Guidelines

When calling subagents (via `runSubagent`), keep prompts minimal:

- **Trust agent configuration** — Agents already have access to this file and their own `.agent.md` instructions
- **Don't repeat rules** — Never re-state guidelines from copilot-instructions.md or agent definitions
- **Be concise** — Just specify the target (e.g., "Generate slides for workshop/03-custom-prompts")
- **Let agents work** — They're configured to follow workspace conventions automatically

**Bad example:**

> "Generate slides following the slide generation guidelines, using emoji vocabulary, dark cockpit-style, max 15-20 slides..."

**Good example:**

> "Generate slides for workshop/03-custom-prompts"

---

## Slidev Build & Deployment Gotchas

**Pinned versions — do NOT loosen:**

- `slides/package.json`: `@slidev/cli` pinned to `52.12.0` (fixes the GitHub
  Pages arrow-key 404 routing bug introduced in `52.13+`).
- `slides/package.json` `overrides`: `fuse.js` pinned to `7.1.0` (fixes a stuck
  Goto-slide dropdown).

**Build-manifest skip — most common cause of "navigation is broken" reports:**

The deploy workflow (`.github/workflows/deploy-slides.yml`) uses a date-based
skip manifest. If a deck's frontmatter `updated:` field matches the previous
build entry, the cached `dist/` is reused — even after dependency pins changed.
Decks built before the Slidev pin landed will keep serving the broken `52.16.0`
build until their `updated:` date changes.

**Diagnostic:** view-source on the deployed deck and check the
`<meta property="slidev:version" content="...">` tag. Anything other than
`52.12.0` means the deck was never rebuilt with the current pin.

**Fix pattern (single deck):**

1. Bump `updated:` to today in `slides/<category>/<deck>.md` frontmatter.
2. Sync the matching entry in `slides/index-custom.html` `SLIDE_DATES` map
   (or run `node slides/scripts/sync-index-dates.mjs`).
3. Commit, push, merge — the deploy workflow rebuilds only that deck.

This exact pattern was used in PRs #4 (copilot-sdlc-pm), #9 (agentic-sdlc),
and #10 (copilot-primitives).

**`setup/main.ts` must be colocated with each category — second-most common
cause of "deep links land on slide 1":**

Slidev resolves the `setup/` directory relative to each **deck file's parent
directory**, NOT the project root or cwd. A single `slides/setup/main.ts` at
the project root is silently ignored when decks live in
`slides/<category>/<deck>.md` (which all of them do).

The canonical setup at `slides/setup/main.ts` contains the `?slide=N`
query-param handler that turns the GitHub-Pages 404 redirect
(`/deck/22` → `/deck/?slide=22`) back into a real `router.replace('/22')`.
Without it, every deep link silently lands on slide 1 and the URL ends up
ugly (`/1?slide=22`).

**The fix is a 1-line re-export shim per category:**

```ts
// slides/<category>/setup/main.ts
export { default } from '../../setup/main'
```

These shims exist in `tech-talks/`, `intro-talks/`, `exec-talks/`, and
`workshop/`. **If you add a new category dir, you MUST add its setup shim**
or every deep link in that category will break. Verify a build picked up the
setup by grepping `dist/assets/*.js` for `slide-number-overlay` (only present
when setup is loaded). Bundle size also grows by ~1 kB.

This shim pattern landed alongside a one-time bump of the deploy workflow
cache-key prefix (`slides-dist-` → `slides-dist-v2-`) so all 35 cached decks
were forced to rebuild against the new setup.

---

## gh CLI Gotchas

- `gh pr create --body "..."` fails when the body contains escaped quotes (`\"`).
  For any non-trivial PR body, write to a temp file and use `--body-file`.
- `gh pr merge` requires a positional `<number>` argument when `--repo` is used:

  ```bash
  gh pr merge 10 --repo juan-trujillo/CopilotTraining --squash --delete-branch
  ```

- If `git push` returns a 403 with an unexpected username (e.g.
  `testuser2_*`), run `gh auth setup-git` to wire the active `gh` token into
  git's credential helper.
