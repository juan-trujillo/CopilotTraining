# Agentic Workflows — Research Compilation

**Status:** Phase 1 — Research Complete
**Date:** 2026-03-05
**Topic:** GitHub Agentic Workflows (gh-aw), Agent Factory, Safe Outputs, AgentCouncil Pattern

---

## 1. Executive Summary

GitHub Agentic Workflows (gh-aw) represents a paradigm shift in repository automation: from stepwise, prescriptive YAML-based workflows to high-level, intent-driven automation using AI coding agents. Instead of writing complex GitHub Actions configurations, developers describe desired outcomes in **natural language Markdown**, which is compiled into secure, sandboxed GitHub Actions workflows.

**Key Innovation:** Repository-level automation that runs AI coding agents (GitHub Copilot, Claude, Codex, Gemini) within GitHub Actions, with strong security guardrails through "safe outputs" — pre-approved, sanitized GitHub operations that prevent prompt injection and unauthorized repository modifications.

**Core Value Proposition:**
- **Simplicity:** Write workflows in Markdown instead of complex YAML
- **Security:** Read-only by default, write operations require explicit safe-output declarations
- **Flexibility:** AI agents adapt to repository context and make decisions
- **Integration:** Deep GitHub integration (Issues, PRs, Discussions, Projects, Code Scanning)

---

## 2. Core Concepts & Architecture

### 2.1 What Are Agentic Workflows?

An **agentic workflow** is a repository automation defined in a Markdown file with two parts:

1. **YAML Frontmatter** — Configuration block defining:
   - **Triggers:** When the workflow runs (`on: schedule`, `on: issues`, etc.)
   - **Permissions:** What the workflow can read (always minimal)
   - **Tools:** Which tools/APIs the agent can use (GitHub tools, MCPs, web search)
   - **Safe Outputs:** Pre-approved write operations (create issue, add label, open PR, etc.)

2. **Markdown Body** — Natural language instructions describing desired automation:
   - "Triage new issues and apply labels based on content"
   - "Create a weekly status report of repository activity"
   - "Analyze CI failures and suggest fixes"

**Example Workflow Structure:**
```markdown
---
on:
  schedule: daily
permissions:
  contents: read
  issues: read
  pull-requests: read
safe-outputs:
  create-issue:
    title-prefix: "[team-status] "
    labels: [report, daily-status]
    close-older-issues: true
---

## Daily Issues Report

Create an upbeat daily status report for the team as a GitHub issue.

## What to include
- Recent repository activity (issues, PRs, discussions, releases)
- Progress tracking and highlights
- Project status and recommendations
- Actionable next steps for maintainers
```

### 2.2 Compilation & Execution Flow

1. **Authoring:** Developer writes workflow in `<workflow-name>.md`
2. **Compilation:** `gh aw compile` converts Markdown → secure YAML lock file (`<workflow-name>.lock.yml`)
3. **Deployment:** Lock file stored in `.github/workflows/` and runs in GitHub Actions
4. **Execution:**
   - Workflow triggered by schedule/event
   - AI agent (Copilot/Claude/Codex) reads workflow instructions
   - Agent operates in isolated sandbox with read-only access
   - Agent uses declared tools to gather context
   - Agent generates structured output (JSON)
   - Safe-output handler validates and sanitizes agent output
   - Approved actions execute with minimal permissions (create issue, add label, etc.)

### 2.3 Security Architecture: Safe Outputs

**The Problem:** Giving AI agents direct write access to repositories is dangerous (prompt injection, unauthorized changes, data exfiltration).

**The Solution:** **Safe Outputs** — a separation-of-concerns model:

- **Agent Phase (Read-Only):** AI agent runs with zero write permissions, produces structured JSON output
- **Safe-Output Phase (Validated Writes):** Separate job with minimal write permissions validates agent output and executes pre-approved actions

**Available Safe Output Types:** (from `safe-outputs` reference)

| Category | Operations | Max Defaults |
|----------|-----------|--------------|
| **Issues** | `create-issue`, `update-issue`, `close-issue`, `link-sub-issue` | 1 per type |
| **Pull Requests** | `create-pull-request`, `update-pull-request`, `close-pull-request`, `push-to-pull-request-branch` | 1-10 |
| **Comments** | `add-comment`, `hide-comment` | 1-5 |
| **Labels & Assignments** | `add-labels`, `remove-labels`, `add-reviewer`, `assign-milestone`, `assign-to-agent`, `assign-to-user` | 1-3 |
| **Discussions** | `create-discussion`, `update-discussion`, `close-discussion` | 1-3 |
| **Projects** | `create-project`, `update-project`, `create-project-status-update` | 1-10 |
| **Code Review** | `create-pull-request-review-comment`, `submit-pull-request-review`, `resolve-pull-request-review-thread` | 10 |
| **Security** | `create-code-scanning-alert`, `autofix-code-scanning-alert` | unlimited |
| **System** | `noop`, `missing-tool`, `missing-data` | auto-enabled |
| **Custom** | User-defined MCP-based jobs | configurable |

**Security Features:**
- **Input Sanitization:** XML escaping, HTTPS-only URLs, domain allowlisting, size limits
- **Permission Isolation:** Agent has read-only access; only safe-output handlers have write permissions
- **Auditability:** Every action tracked with workflow-id markers in issue/PR bodies
- **Rate Limiting:** Configurable max operations per safe-output type
- **Cross-Repository Controls:** Explicit `target-repo` and `allowed-repos` declarations
- **Expiration Management:** Auto-close issues/PRs after configurable time periods
- **Bot Mention Escaping:** Automatically neutralizes `@copilot`, `@github-actions` to prevent cascading triggers

---

## 3. Agent Factory Pattern (Peli's Factory)

### 3.1 Overview

The **Agent Factory** is a design philosophy for repository automation: instead of building one monolithic "do-everything" agent, create **many specialized, focused workflows** that each handle a specific task or pattern.

**Origin:** GitHub Next and Microsoft Research built 100+ agentic workflows in the `github/gh-aw` repository to explore what repository-level automation can achieve. This collection is called **"Peli's Agent Factory"** (named after Peli de Halleux).

**Philosophy:**
1. **Embrace Diversity:** Create many specialized workflows as opportunities arise
2. **Use Them Continuously:** Run workflows in real development, not just demos
3. **Observe What Works:** Identify which patterns succeed and which fail
4. **Share the Knowledge:** Catalog effective structures for others to adapt

### 3.2 Factory Categories (from Peli's Agent Factory Blog)

The factory contains workflows organized into categories:

| Category | Examples | Pattern |
|----------|----------|---------|
| **Continuous Improvement** | Simplicity, Refactoring, Style, Documentation | Daily code quality improvements |
| **Issue & PR Management** | Triage, labeling, project coordination | Automated triaging and organization |
| **Metrics & Analytics** | Daily reports, trend analysis, workflow health | Read-only monitoring and insights |
| **Quality & Testing** | CI failure diagnosis, test improvements | Fault investigation and remediation |
| **Security & Compliance** | Code scanning, dependency audits | Security monitoring and fixes |
| **Operations & Release** | Release notes, deployment coordination | Release automation |
| **Multi-Repository** | Feature sync, cross-repo tracking | Multi-repo coordination |
| **Interactive & ChatOps** | Command-triggered workflows | On-demand agent invocation |
| **Project Coordination** | Epic breakdown, task planning | Project management automation |
| **Tool & Infrastructure** | Meta-workflows that monitor other workflows | Self-monitoring and optimization |

### 3.3 Key Patterns from the Factory

**Pattern 1: Continuous Simplicity**
- Runs daily
- Scans repository for code that can be simplified
- Opens PRs with simplification suggestions
- Human reviews and merges (or closes)

**Pattern 2: Continuous Documentation**
- Monitors code changes
- Identifies outdated documentation
- Proposes documentation updates as PRs
- Maintains consistency between code and docs

**Pattern 3: Orchestrator-Worker**
- Orchestrator workflow dispatches multiple worker workflows
- Each worker handles a specific subtask
- Orchestrator collects results and synthesizes report
- Enables multi-day, multi-phase agent tasks

**Pattern 4: Meta-Workflows**
- Workflows that monitor other workflows
- Analyze workflow execution logs
- Identify performance bottlenecks
- Suggest workflow improvements
- Creates a self-optimizing system

**Pattern 5: Issue Group Management**
- Parent issue with sub-issues (tasks)
- Workflow monitors sub-issue completion
- Updates parent issue with progress
- Auto-closes parent when all sub-issues completed

---

## 4. AgentCouncil Pattern

### 4.1 Overview

**AgentCouncil** is a multi-agent pattern from the community (Shlomi Shaki) that runs **three different AI models in parallel** on the same problem, then synthesizes their outputs into a final answer. It's designed to overcome single-model blind spots and produce higher-quality results.

**Repository:** https://github.com/Sentry01/AgentCouncil

**Core Idea:** Different models have different strengths and blind spots. By running multiple models in parallel and having them interact, you get novel synthesis (collaborative mode) or battle-tested answers (adversarial mode) that no single model produces alone.

### 4.2 The Two Modes

**Collaborative Mode 🤝 (Default)**
1. **Draft Phase:** Alpha, Beta, Gamma explore the problem independently from different angles
2. **Improve Phase:** Each agent reads the other two drafts and writes an improved version, stealing the best ideas
3. **Synthesize Phase:** Orchestrator authors the definitive response from all three enriched perspectives

**Best for:** Brainstorming, creative problem-solving, exploring design spaces, research where breadth matters

**Adversarial Mode 🗡️**
1. **Draft Phase:** Alpha, Beta, Gamma tackle the problem independently
2. **Triage Phase:** Orchestrator identifies the strongest position
3. **Attack Phase:** Other two agents try to tear apart the leading position
4. **Verdict Phase:** Orchestrator decides: did the leader survive, need modification, or get overturned?

**Best for:** Architecture decisions, security reviews, comparing specific approaches, high-stakes answers that need scrutiny

### 4.3 Agent Roles (Default Model Assignments)

| Agent | Collaborative Role | Adversarial Role | Draft Model | Review Model |
|-------|-------------------|------------------|-------------|--------------|
| **Alpha** | Deep Explorer | Drafter & Red Teamer | claude-opus-4.6 | gpt-5.3-codex |
| **Beta** | Practical Builder | Fact-Checker & Validator | gpt-5.3-codex | gemini-3.1-pro |
| **Gamma** | Elegant Minimalist | Optimizer & Devil's Advocate | gemini-3.1-pro | claude-opus-4.6 |
| **Orchestrator** | Author (synthesis) | Judge (verdict) | claude-opus-4.6 | gpt-5.3-codex |

### 4.4 Implementation for GitHub Copilot CLI

AgentCouncil is implemented as:
1. **A skill** for Copilot CLI (`~/.copilot/skills/agent-council/skill.md`) — triggers with `council: your question`
2. **A standalone agent** (`~/.copilot/agents/AgentCouncil.agent.md`) — run with `copilot --agent AgentCouncil`

**Mode Detection (Automatic):**
- Adversarial triggers: `debate`, `adversarial`, `challenge`, `stress-test`, `which is better`, `argue`, `attack`, `defend`, `versus`, `vs`
- Collaborative triggers: `council`, `brainstorm`, `collaborate`, `explore`, `build on`, `novel`, `creative`, `ideas`

**Cost & Speed:**
- Collaborative: 7 model calls (3 + 3 + 1), ~2 rounds, ~2x single-agent latency
- Adversarial: 6 model calls (3 + 2 + 1), ~2 rounds, ~2x single-agent latency

### 4.5 Domain Adaptation

The council shifts agent focus based on question domain:

| Domain | Alpha Focus | Beta Focus | Gamma Focus |
|--------|-------------|------------|-------------|
| **Code** | Implementation + security self-review | API accuracy, versions, edge cases | Performance, readability, alternatives |
| **Architecture** | System design + failure modes | Tech claims, benchmarks, scalability | Simplicity, clarity, alternatives |
| **Research** | Comprehensive analysis + bias check | Source verification, citations | Actionability, counter-arguments |
| **Writing** | Content + tone self-critique | Factual accuracy, consistency | Flow, conciseness, formatting |

---

## 5. Creating Workflows (from create.md)

### 5.1 Installation

```bash
# Install gh CLI extension
curl -sL https://raw.githubusercontent.com/github/gh-aw/main/install-gh-aw.sh | bash

# Verify installation
gh aw version

# Upgrade to latest
gh extension upgrade aw
```

### 5.2 Workflow Creation Commands

```bash
# Create new workflow
gh aw new <workflow-name>

# Compile workflows to lock files
gh aw compile [workflow-name]

# Debug workflow runs
gh aw logs [workflow-name]
gh aw audit <run-id>

# Upgrade workflows
gh aw fix --write
gh aw compile --validate
```

### 5.3 Common Actions (Agent Prompts)

The gh-aw repository provides specialized prompt files for different workflow actions:

1. **Create New Workflow** (`ROOT/.github/aw/create-agentic-workflow.md`)
   - Load when: User wants to create automation from scratch
   - Use cases: "Create a workflow that triages issues", "Design weekly research automation"

2. **Update Existing Workflow** (`ROOT/.github/aw/update-agentic-workflow.md`)
   - Load when: User wants to modify or improve a workflow
   - Use cases: "Add web-fetch tool to issue-classifier", "Update PR reviewer to use discussions"

3. **Debug Workflow** (`ROOT/.github/aw/debug-agentic-workflow.md`)
   - Load when: User needs to investigate, audit, or fix errors
   - Use cases: "Why is this workflow failing?", "Analyze logs for workflow X"

4. **Upgrade Workflows** (`ROOT/.github/aw/upgrade-agentic-workflows.md`)
   - Load when: User wants to upgrade to new gh-aw version
   - Use cases: "Upgrade all workflows", "Fix deprecated fields"

5. **Create Shared Component** (`ROOT/.github/aw/create-shared-agentic-workflow.md`)
   - Load when: User wants to create reusable workflow or wrap MCP server
   - Use cases: "Create shared Notion integration", "Wrap Slack MCP server"

### 5.4 File Structure After Creation

```
.github/
  workflows/
    <workflow-name>.md         # Source workflow (human-editable)
    <workflow-name>.lock.yml   # Compiled workflow (generated, do not edit)
  agents/
    agentic-workflows.agent.md # Agent for creating workflows
.gitattributes               # Mark lock files as generated
.vscode/
  settings.json              # Editor configuration
  mcp.json                   # Model Context Protocol config
```

**Important:** Only commit:
- `.gitattributes`
- `.github/workflows/<workflow-name>.md`
- `.github/workflows/<workflow-name>.lock.yml`

Do NOT commit configuration files unless explicitly instructed.

---

## 6. Safe Outputs Deep Dive

### 6.1 Issue Operations

**Create Issue** (`create-issue`)
```yaml
safe-outputs:
  create-issue:
    title-prefix: "[ai] "
    labels: [automation, agentic]
    assignees: [user1, copilot]
    max: 5
    expires: 7  # auto-close after 7 days
    group: true  # link as sub-issues under parent
    close-older-issues: true  # close previous issues from same workflow
    target-repo: "owner/repo"  # cross-repository
    allowed-repos: ["org/repo1", "org/repo2"]
```

**Features:**
- **Auto-Expiration:** Issues auto-close after configurable time period (supports `7d`, `2w`, `1m`, `1y`, `2h` formats)
- **Issue Grouping:** Multiple issues automatically organized as sub-issues under parent issue (max 64 sub-issues)
- **Auto-Close Older Issues:** Close previous open issues from same workflow when new issue created (prevents issue spam)
- **Workflow Markers:** Hidden `<!-- gh-aw-workflow-id: WORKFLOW_NAME -->` marker in body for searchability

**Searching for Workflow-Created Items:**
```
# Find all open issues from daily-team-status workflow
repo:owner/repo is:issue is:open "gh-aw-workflow-id: daily-team-status" in:body

# Find all PRs from security-audit workflow
repo:owner/repo is:pr "gh-aw-workflow-id: security-audit" in:body
```

### 6.2 Pull Request Operations

**Create Pull Request** (`create-pull-request`)
```yaml
safe-outputs:
  create-pull-request:
    title-prefix: "[ai] "
    labels: [automation]
    reviewers: [user1, copilot]
    draft: true
    max: 3
    expires: 14  # same-repo only
    if-no-changes: "warn"  # "warn", "error", or "ignore"
    base-branch: "vnext"  # target branch
    fallback-as-issue: false  # disable issue fallback
    github-token-for-extra-empty-commit: ${{ secrets.CI_TOKEN }}
```

**Features:**
- **Multiple PRs per Run:** Set `max` > 1 to create multiple PRs independently
- **Auto-Expiration:** Auto-close PRs after time period (same-repo only)
- **Base Branch Targeting:** Specify non-default target branch (useful for cross-repo PRs)
- **CI Triggering:** Use `github-token-for-extra-empty-commit` to trigger CI (default: PR creation doesn't trigger CI)
- **Git Commands Enabled:** When `create-pull-request` configured, git commands (`checkout`, `branch`, `add`, `commit`, etc.) automatically enabled

**Push to PR Branch** (`push-to-pull-request-branch`)
```yaml
safe-outputs:
  push-to-pull-request-branch:
    target: "*"
    title-prefix: "[bot] "
    labels: [automated]
    max: 3
    if-no-changes: "warn"
```

**Security:** Cannot push to PRs from forks (fails early with clear error)

### 6.3 Code Review Operations

**PR Review Comments** (`create-pull-request-review-comment`)
```yaml
safe-outputs:
  create-pull-request-review-comment:
    max: 10
    side: "RIGHT"  # "LEFT" or "RIGHT"
    footer: "if-body"  # "always", "none", or "if-body"
```

**Submit PR Review** (`submit-pull-request-review`)
```yaml
safe-outputs:
  submit-pull-request-review:
    max: 1
    target: "triggering"  # or "*" or specific PR number
    footer: false  # omit AI-generated footer
```

**Features:**
- **Buffered Comments:** All `create-pull-request-review-comment` outputs collected and submitted as single review
- **Review Events:** `APPROVE`, `REQUEST_CHANGES`, `COMMENT` (default)
- **Automatic Submission:** If agent doesn't call `submit_pull_request_review`, buffered comments submitted as COMMENT review automatically

**Resolve Review Thread** (`resolve-pull-request-review-thread`)
```yaml
safe-outputs:
  resolve-pull-request-review-thread:
    max: 10
```

**Agent Output Format:**
```json
{
  "type": "resolve_pull_request_review_thread",
  "thread_id": "PRRT_kwDOABCD..."
}
```

### 6.4 Project Operations

**Create Project** (`create-project`)
```yaml
safe-outputs:
  create-project:
    max: 1
    github-token: ${{ secrets.GH_AW_PROJECT_GITHUB_TOKEN }}  # required (default GITHUB_TOKEN lacks Projects v2 access)
    target-owner: "myorg"
    title-prefix: "Project"
    views:  # auto-create views
      - name: "Sprint Board"
        layout: board
        filter: "is:issue is:open"
      - name: "Task Tracker"
        layout: table
```

**Update Project** (`update-project`)
```yaml
safe-outputs:
  update-project:
    project: "https://github.com/orgs/myorg/projects/42"
    max: 20
    github-token: ${{ secrets.GH_AW_PROJECT_GITHUB_TOKEN }}
    views:
      - name: "Roadmap"
        layout: roadmap
```

**Supported Field Types:**
- `TEXT` - Text fields (default)
- `DATE` - Date fields (format: YYYY-MM-DD)
- `NUMBER` - Numeric fields (story points, estimates)
- `ITERATION` - Sprint/iteration fields (matched by iteration title)
- `SINGLE_SELECT` - Dropdown fields (creates missing options automatically)

**Create Project Status Update** (`create-project-status-update`)
```yaml
safe-outputs:
  create-project-status-update:
    project: "https://github.com/orgs/myorg/projects/73"
    max: 1
    github-token: ${{ secrets.GH_AW_PROJECT_GITHUB_TOKEN }}
```

**Agent Output:**
```json
{
  "project": "https://github.com/orgs/myorg/projects/73",
  "status": "ON_TRACK",  // or AT_RISK, OFF_TRACK, COMPLETE, INACTIVE
  "start_date": "2026-01-06",
  "target_date": "2026-01-31",
  "body": "## Run Summary\n\n**Discovered:** 25 items..."
}
```

### 6.5 Special Operations

**No-Op** (`noop`) — **CRITICAL FOR WORKFLOWS**
```yaml
safe-outputs:
  create-issue:  # noop enabled automatically
  noop: false    # explicitly disable (not recommended)
```

**Agent MUST call `noop` when no GitHub action is needed:**
```json
{
  "noop": {
    "message": "No action needed: analysis complete - no issues found"
  }
}
```

**Failure Mode:** If agent finishes without calling any safe-output tool, workflow fails silently with `agent did not produce any safe outputs` error. This is the #1 runtime failure mode.

**When to Call Noop:**
- No issues found during code scan
- No breaking changes detected
- Repository already in desired state
- Condition for action not met

**Workflow Dispatch** (`dispatch-workflow`)
```yaml
safe-outputs:
  dispatch-workflow: [worker-workflow, scanner-workflow]  # shorthand
  # or
  dispatch-workflow:
    workflows: [worker-workflow, scanner-workflow]
    max: 3
```

**Features:**
- Triggers other workflows using `workflow_dispatch` event
- Compile-time validation (workflows must exist and have `workflow_dispatch` trigger)
- Cannot self-reference (prevents infinite loops)
- 5-second delay between consecutive dispatches (rate limiting)
- Same-repository only

**Agent Session Creation** (`create-agent-session`)
```yaml
safe-outputs:
  create-agent-session:
    base: "main"
    max: 1
```

**Assign to Agent** (`assign-to-agent`)
```yaml
safe-outputs:
  assign-to-agent:
    name: "copilot"
    model: "claude-opus-4.6"
    custom-agent: "agent-id"
    allowed: [copilot]
    max: 1
    target: "triggering"
    target-repo: "owner/repo"
    pull-request-repo: "owner/repo"
    base-branch: "develop"
```

### 6.6 Global Configuration

**Custom GitHub Token**
```yaml
safe-outputs:
  github-token: ${{ secrets.CUSTOM_PAT }}  # global
  create-issue:
  create-pull-request:
    github-token: ${{ secrets.PR_PAT }}    # per-output override
```

**Text Sanitization**
```yaml
safe-outputs:
  allowed-domains: [api.github.com]  # GitHub domains always included
  allowed-github-references: []      # Escape all GitHub references
```

**Bot Mention Limit** (prevents cascading automation triggers)
```yaml
safe-outputs:
  max-bot-mentions: 3  # or ${{ inputs.max-mentions }}
```

**Safe Outputs Job Concurrency**
```yaml
safe-outputs:
  concurrency-group: "safe-outputs-${{ github.repository }}"
```

**Custom Messages**
```yaml
safe-outputs:
  messages:
    footer: "> Generated by [{workflow_name}]({run_url})"
    append-only-comments: true
    run-started: "Processing {event_type}..."
    run-success: "✓ Completed successfully"
    run-failure: "✗ Encountered {status}"
```

**Workflow Call Outputs** (automatic for composability)
```yaml
outputs:
  created_issue_number
  created_issue_url
  created_pr_number
  created_pr_url
  comment_id
  comment_url
  push_commit_sha
  push_commit_url
```

---

## 7. Key Learnings from the Factory

### 7.1 Design Patterns That Work

**1. Repository-Level Automation is Powerful**
- Agents embedded in development workflow have outsized impact
- Continuous daily improvements compound over time
- Meta-workflows (agents monitoring agents) become incredibly valuable

**2. Specialization Reveals Possibilities**
- Focused agents find more useful applications than monolithic coding agents
- Each workflow solves one problem well
- Easier to debug, iterate, and improve single-purpose workflows

**3. Guardrails Enable Innovation**
- Strict constraints (safe outputs, sandboxing) make experimentation safer
- Teams more willing to try agent automation when risks are bounded
- Security-first design builds trust

**4. Cost-Quality Tradeoffs Are Real**
- Longer analyses aren't always better
- Focused workflows with clear success criteria perform better
- Monitor workflow execution costs and optimize

### 7.2 Common Failure Modes

**1. Agent Doesn't Produce Output**
- Forgot to call `noop` when no action needed
- Solution: Always include explicit `noop` instructions in workflow prompt

**2. Permission Errors**
- Safe output requires permission not granted in frontmatter
- Solution: Review required permissions for each safe-output type

**3. Too Many Operations**
- Agent tries to create more items than `max` allows
- Solution: Set appropriate `max` values or adjust workflow scope

**4. Prompt Injection Attempts**
- Malicious input tries to manipulate agent behavior
- Solution: Safe outputs sanitize text automatically, but monitor for anomalies

### 7.3 Best Practices

**1. Start Small**
- Begin with read-only workflows (metrics, reports, analysis)
- Graduate to safe write operations (labels, comments)
- Finally, enable code changes (PRs) with review gates

**2. Human-in-the-Loop**
- Use `draft: true` for PRs (require human review before merge)
- Use `expires` to auto-close old PR suggestions
- Monitor workflow runs and adjust prompts

**3. Clear Success Criteria**
- Define explicit goals in workflow instructions
- Include examples of desired output
- Specify edge cases and failure modes

**4. Iterative Improvement**
- Start with basic workflow
- Observe behavior over multiple runs
- Refine prompts based on actual output
- Add guardrails as needed

---

## 8. Technical Implementation Details

### 8.1 Compilation Process

**Input:** `<workflow-name>.md` (Markdown with YAML frontmatter)

**Compilation Steps:**
1. Parse YAML frontmatter (triggers, permissions, tools, safe-outputs)
2. Extract Markdown body (agent instructions)
3. Generate secure YAML workflow with:
   - Agent job (read-only, sandboxed)
   - Safe-output handler jobs (minimal write permissions)
   - Permission isolation
   - Input sanitization
   - Audit logging
4. Write `<workflow-name>.lock.yml` (GitHub Actions workflow)

**Output:** Secure, deployable GitHub Actions workflow

**Lock File Properties:**
- Generated file (marked with `linguist-generated=true`)
- Should not be manually edited
- Git merge strategy: `merge=ours` (prevents merge conflicts)
- Re-compiled whenever source `.md` changes

### 8.2 Agent Execution Environment

**Sandbox Properties:**
- Isolated container (Ubuntu slim image by default)
- Read-only filesystem by default
- No network access unless `network:` declared
- Limited tool access (only declared tools available)
- Environment variables filtered
- GitHub token with minimal permissions

**Tool Access:**
- **GitHub Tools:** Issues, PRs, commits, files, search, projects (via safe inputs)
- **MCP Servers:** Model Context Protocol servers declared in frontmatter
- **Web Access:** Optional web-fetch capability (requires `network: web-fetch`)
- **Custom Tools:** Can define custom MCP-based tools

### 8.3 Safe Output Validation

**Validation Pipeline:**
1. Agent produces JSON output (structured safe-output requests)
2. Schema validation (ensure output matches expected format)
3. Content sanitization (XML escape, URL validation, domain filtering)
4. Permission check (verify safe-output type is declared in frontmatter)
5. Rate limiting (enforce `max` constraints)
6. Cross-repository validation (check `target-repo` against `allowed-repos`)
7. Execute approved operations with minimal permissions
8. Log all actions with workflow-id markers

**Sanitization Rules:**
- XML entities escaped
- URLs must be HTTPS
- Domain allowlisting (GitHub domains + declared `allowed-domains`)
- Bot mentions limited (`max-bot-mentions`)
- GitHub references escaped (if `allowed-github-references` configured)
- 0.5MB / 65k line limits
- Control character stripping

---

## 9. Use Cases & Examples

### 9.1 Issue Triage Automation

**Scenario:** Automatically label and assign new issues based on content

```markdown
---
on:
  issues:
    types: [opened]
permissions:
  contents: read
  issues: write
tools:
  github:
    toolsets: [issues, labels]
safe-outputs:
  add-labels:
    allowed: [bug, feature, docs, question]
    max: 3
  add-comment:
    max: 1
---

## Issue Triage Workflow

Analyze new issues and apply appropriate labels based on content.

### Instructions
1. Read the issue title and body
2. Identify the issue type (bug, feature request, documentation, question)
3. Apply 1-3 relevant labels from the allowed list
4. Add a friendly comment explaining the labeling decision

### Examples
- "App crashes on startup" → `bug`
- "Add dark mode" → `feature`
- "How do I configure X?" → `question`, `docs`

If the issue is unclear, apply `question` and ask for clarification.
```

### 9.2 CI Failure Diagnosis

**Scenario:** Analyze CI failures and create issues with diagnostic information

```markdown
---
on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]
    conclusion: [failure]
permissions:
  actions: read
  contents: read
  issues: write
safe-outputs:
  create-issue:
    title-prefix: "[ci-failure] "
    labels: [ci, automation]
    max: 1
    close-older-issues: true
    expires: 7
---

## CI Failure Diagnostic

When CI fails, analyze logs and create diagnostic issue.

### Instructions
1. Fetch the failed workflow run logs
2. Identify the failing step and error message
3. Search for similar past issues
4. Create a diagnostic issue with:
   - Failure summary
   - Error message and stack trace
   - Link to failed run
   - Suggested next steps
   - Related issues (if any)

Focus on actionable information. If this appears to be a flaky test, note that.
```

### 9.3 Weekly Repository Health Report

**Scenario:** Generate weekly report of repository activity and recommendations

```markdown
---
on:
  schedule: weekly
permissions:
  contents: read
  issues: read
  pull-requests: read
safe-outputs:
  create-issue:
    title-prefix: "[weekly-report] "
    labels: [report, weekly]
    close-older-issues: true
---

## Weekly Repository Health Report

Create a comprehensive weekly report of repository activity.

### Sections to Include
1. **Activity Summary** (past 7 days)
   - Issues opened/closed
   - PRs merged
   - Commits pushed
   - Top contributors

2. **Progress Metrics**
   - Open issue trend
   - PR merge time average
   - Stale issue count

3. **Highlights**
   - Notable merged PRs
   - New contributors
   - Milestone progress

4. **Recommendations**
   - Issues needing attention
   - Old PRs to review
   - Documentation gaps

5. **Next Week Goals**
   - Upcoming milestones
   - Priorities

Use charts/tables where helpful. Keep tone upbeat and actionable.
```

### 9.4 Multi-Agent Orchestration

**Scenario:** Orchestrator workflow dispatches specialized worker workflows

```markdown
---
on:
  schedule: daily
permissions:
  actions: write  # for dispatch-workflow
  contents: read
safe-outputs:
  dispatch-workflow:
    workflows: [analyze-issues, analyze-prs, analyze-ci]
    max: 3
  create-issue:
    title-prefix: "[orchestrator-report] "
    labels: [orchestrator, daily]
    close-older-issues: true
---

## Daily Orchestrator

Coordinate multiple analysis workflows and synthesize results.

### Instructions
1. Dispatch worker workflows in parallel:
   - `analyze-issues`: Triage and label new issues
   - `analyze-prs`: Review and comment on PRs
   - `analyze-ci`: Diagnose CI failures

2. Wait for workers to complete (check workflow runs)

3. Collect results from worker-created issues/comments

4. Create orchestrator summary issue with:
   - Worker status (success/failure)
   - Key findings from each worker
   - Cross-cutting insights
   - Prioritized action items

Include links to worker-generated issues for details.
```

---

## 10. Comparison to Traditional GitHub Actions

| Aspect | Traditional GitHub Actions | Agentic Workflows |
|--------|---------------------------|-------------------|
| **Definition** | YAML with explicit steps | Markdown with natural language instructions |
| **Execution** | Deterministic, step-by-step | AI agent interprets intent and decides actions |
| **Flexibility** | Fixed logic, requires code changes | Adapts to context, learns from repository state |
| **Complexity** | Complex YAML for non-trivial tasks | Simple Markdown, AI handles complexity |
| **Write Access** | Whatever permissions granted | Read-only by default, safe-outputs for writes |
| **Security** | Trust workflow author | Sandboxed execution + output validation |
| **Use Cases** | CI/CD, testing, deployment | Analysis, triage, recommendations, improvements |
| **Human Involvement** | Set-and-forget | Human-in-the-loop (review PR suggestions, etc.) |
| **Cost Model** | Runner minutes (fixed) | Runner minutes + AI model inference (variable) |

**Complementary, Not Replacement:**
- Use traditional GitHub Actions for deterministic tasks (build, test, deploy)
- Use agentic workflows for adaptive tasks (analyze, recommend, improve)
- "Continuous AI" augments CI/CD, doesn't replace it

---

## 11. References

[^1]: GitHub Blog: [Automate repository tasks with GitHub Agentic Workflows](https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/)

[^2]: GitHub Agentic Workflows Documentation: [Introduction & Overview](https://github.github.com/gh-aw/introduction/overview/)

[^3]: GitHub Agentic Workflows Documentation: [How They Work](https://github.github.com/gh-aw/introduction/how-they-work/)

[^4]: GitHub Agentic Workflows Documentation: [Security Architecture](https://github.github.com/gh-aw/introduction/architecture/)

[^5]: GitHub Agentic Workflows Reference: [Safe Outputs](https://github.github.io/gh-aw/reference/safe-outputs/)

[^6]: GitHub Agentic Workflows Blog: [Welcome to Peli's Agent Factory](https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/)

[^7]: GitHub Agentic Workflows Blog: [Meet the Workflows](https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows/)

[^8]: GitHub Repository: [Create Workflow Documentation](https://github.com/github/gh-aw/blob/main/create.md)

[^9]: GitHub Repository: [Sentry01/AgentCouncil](https://github.com/Sentry01/AgentCouncil)

[^10]: Josh-Ops Blog: [Getting Started with GitHub Agentic Workflows](https://josh-ops.com/posts/github-agentic-workflows/)

[^11]: Trpkovski Blog: [Agentic Workflows: Write GitHub Actions in Markdown](https://www.trpkovski.com/2026/02/22/agentic-workflows-write-github-actions-in-markdown)

[^12]: Dev.to: [GitHub Agentic Workflows: A Hands-On Guide to AI-Powered CI/CD](https://dev.to/htekdev/github-agentic-workflows-a-hands-on-guide-to-ai-powered-cicd-255e)

[^13]: Yuv.ai Blog: [GitHub Agentic Workflows: Write CI/CD in Natural Language](https://yuv.ai/blog/gh-aw)

[^14]: Ken Muse Blog: [GitHub Agentic Workflows Bring AI Agents to Actions](https://www.kenmuse.com/blog/github-agentic-workflows-bring-ai-agents-to-actions/)

[^15]: GitHub Agentic Workflows: [Quick Start Guide](https://github.github.com/gh-aw/setup/quick-start/)

---

## 12. Code Examples Directory

The following code examples have been extracted to `examples/`:

1. `daily-status-report.md` — Basic scheduled workflow with issue creation
2. `issue-triage.md` — Event-triggered workflow with labeling
3. `ci-failure-diagnostic.md` — CI integration workflow
4. `weekly-health-report.md` — Comprehensive reporting workflow
5. `orchestrator-pattern.md` — Orchestrator-worker pattern
6. `safe-outputs-issue-config.yaml` — Issue safe-output configuration
7. `safe-outputs-pr-config.yaml` — PR safe-output configuration
8. `safe-outputs-project-config.yaml` — Project safe-output configuration
9. `agent-council-collaborative.md` — AgentCouncil collaborative mode example
10. `agent-council-adversarial.md` — AgentCouncil adversarial mode example

---

**Research Phase Complete** — Ready for Planning Phase
