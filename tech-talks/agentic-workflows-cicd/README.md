---
status: active
updated: 2026-11-23
section: "Delegate and Coordinate"
audience: [team-lead, platform-engineer, developer]
level: advanced
duration: 42
format: core-talk
decision: "Which CI/CD judgments get an agent, and what write authority does that agent hold?"
prerequisites: []
related: [agentic-lifecycle, pr-trust-stack, copilot-governance, agentic-workflows-ci-cd]
references:
  - url: https://github.com/github/gh-aw
    label: "github/gh-aw: GitHub Agentic Workflows (source, docs, sample workflows)"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/introduction/overview/
    label: "What are Agentic Workflows? (overview)"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/introduction/how-they-work/
    label: "How Agentic Workflows Work"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/introduction/architecture/
    label: "Security Architecture"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/reference/safe-outputs/
    label: "Safe Outputs reference"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/reference/triggering-ci/
    label: "Triggering CI on pull requests created by agentic workflows"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/reference/staged-mode/
    label: "Staged Mode"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/reference/threat-detection/
    label: "Threat Detection"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/reference/integrity/
    label: "GitHub Integrity Filtering"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/reference/governance/
    label: "Configuration Governance (gh aw env)"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/reference/cost-management/
    label: "Cost Management and AI Credits"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/guides/safe-rollout/
    label: "Safe Rollout ladder"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/guides/measuring-impact/
    label: "Measuring Impact"
    verified: 2026-11-23
  - url: https://github.github.com/gh-aw/gallery/ci-failure-investigation/
    label: "Gallery: Automated CI failure investigation"
    verified: 2026-11-23
  - url: https://github.com/githubnext/agentics
    label: "githubnext/agentics: sample agentic workflows (CI Doctor, CI Coach, PR Fix)"
    verified: 2026-11-23
  - url: https://github.com/github/gh-aw/issues/14295
    label: "Example CI Doctor report: nondeterministic map iteration"
    verified: 2026-11-23
  - url: https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/
    label: "Changelog: GitHub Agentic Workflows generally available"
    verified: 2026-11-23
  - url: https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/
    label: "GitHub Universe 2026: Evolving every layer of the stack"
    verified: 2026-11-23
  - url: https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available/
    label: "Changelog: GitHub Actions workflow lockfiles generally available"
    verified: 2026-11-23
  - url: https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations/
    label: "Changelog: Shared Copilot Automations"
    verified: 2026-11-23
  - url: https://github.blog/changelog/2026-10-28-copilot-automations-now-learn-from-outcomes-and-self-improve/
    label: "Changelog: Copilot Automations learn from outcomes"
    verified: 2026-11-23
  - url: https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/
    label: "What's coming to our GitHub Actions 2026 security roadmap"
    verified: 2026-11-23
  - url: https://docs.github.com/actions/reference/deployments-and-environments
    label: "GitHub Docs: Deployments and environments"
    verified: 2026-11-23
  - url: https://docs.github.com/actions/how-tos/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-azure
    label: "GitHub Docs: Configuring OpenID Connect in Azure"
    verified: 2026-11-23
  - url: https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect
    label: "Microsoft Learn: Authenticate to Azure from GitHub Actions by OpenID Connect"
    verified: 2026-11-23
  - url: https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/set-up-cicd-hosted-agent
    label: "Microsoft Learn: Set up CI/CD for a hosted agent (GitHub Actions, azd, OIDC)"
    verified: 2026-11-23
---

# Agentic Workflows for CI/CD: Agents Investigate, the Pipeline Decides

> **The Question This Talk Answers:**
> *"Which CI/CD judgments can an agent make for us, and what write authority does it get?"*

**Duration:** 42 minutes, including 2 minutes of discussion | **Target Audience:** Developer Leads and GitHub administrators
**Verified:** November 23, 2026. GitHub Agentic Workflows has been generally available on github.com since October 28, 2026. Compiler output in this article comes from the `github/gh-aw` main branch at commit `dbcd971`. [^ga]

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | A Developer Lead whose `main` branch is red at 6:40 AM, and the GitHub admin who decides whether agents may run in Actions. The decision: which judgments get an agent and what it may write. |
| **Compelling** | 🟢 High | A 65-line Markdown file compiles to a 2,426-line Actions workflow in which the agent job is read-only and every write lives in a separate job. |
| **Actionable** | 🟢 High | Five working workflow files, compile and trial commands, a staged-mode rollout ladder, and metrics from `gh aw logs` and `gh aw forecast`. Each example names its failure signal and recovery path. |

**Overall Status:** 🟢 Ready to use

---

## The Opportunity

A Developer Lead owns a service repository. `main` turned red at 6:40 AM. Before anyone can fix the build, someone must open the failed run, find the first real error among thousands of log lines, decide whether it is a code bug, a flaky test, or a runner problem, search for the last time it happened, and write that up so the next person does not repeat the work.

That sequence is reading, correlating, and summarizing. Those are the tasks coding agents do well. The build, the tests, and the deployment are deterministic and belong in the pipeline as they are today.

**GitHub Agentic Workflows** (`gh-aw`) puts the agent where the human reads logs. You describe the job in Markdown, `gh aw compile` turns it into a hardened GitHub Actions workflow, and the agent runs with read-only permissions. Anything it wants to change in GitHub travels through a separate, permission-scoped job called **safe outputs**. [^overview]

**The thesis:** reasoning joins the pipeline at the points where a human would read logs, while writes stay narrow, reviewable, and human-gated.

**The audience decision:** for each CI/CD judgment (diagnose a failure, repair a branch, tune the pipeline, summarize a release), choose the agent's trigger, its read scope, and its write authority.

<!-- 🎬 MAJOR SECTION: Anatomy of an Agentic Workflow -->
## Part 1: Anatomy of an Agentic Workflow

### Markdown in, Actions out

A workflow is a Markdown file with YAML frontmatter. The frontmatter holds the trigger, permissions, and allowed writes. The body holds the instructions in natural language. [^overview]

```markdown
---
on:
  issues:
    types: [opened]
permissions: read-all          # the agent reads everything it may see
safe-outputs:
  add-comment:                 # the only write it can request
---

# Issue Clarifier

Analyze the current issue and ask for additional details if the issue is unclear.
```

`gh aw compile` validates the file and writes a `.lock.yml` next to it. GitHub Actions runs the lock file. You commit both files and review both in the pull request. [^howitworks]

### Where agents sit in CI/CD

| Keep in standard Actions | Add an agentic workflow |
|---|---|
| Build, unit and integration tests, lint | Investigate why a run failed |
| Packaging, signing, publishing | Draft release notes from merged PRs |
| Deployment to an environment | Open an incident issue with evidence |
| Policy checks with a fixed rule | Propose a CI optimization as a draft PR |

Agentic workflows run on GitHub Actions and can include deterministic steps. They complement CI/CD. The GitHub Actions runner, logs, and policies stay the control plane. [^howitworks]

Supported engines are GitHub Copilot (default), Claude Code, OpenAI Codex, Google Gemini, and Pi. The default Copilot engine authenticates with `copilot-requests: write` (organization billing) or a `COPILOT_GITHUB_TOKEN` secret. [^howitworks]

### Compile, then review the lock file

We compiled the CI Doctor example from this talk with the `gh-aw` main build:

| Source | Lock file | Jobs in the lock file |
|---|---|---|
| `ci-doctor.md`, 65 lines | `ci-doctor.lock.yml`, 2,426 lines | `pre_activation`, `activation`, `agent`, `detection`, `safe_outputs`, `conclusion` |

The review that matters is the permission split:

- The **agent** job has `actions`, `contents`, `issues`, and `pull-requests` set to `read`.
- The **safe_outputs** job holds `issues: write` and `pull-requests: write`, runs after the agent and the detection job, and applies only the outputs the frontmatter allows.

```bash
gh aw compile --strict            # schema, expression, and permission validation
gh aw compile --strict --zizmor   # add the zizmor security scanner
gh aw compile --actions-lock      # refresh .github/workflows/actions.lock (needs gh-actions-lock)
```

Compilation pins actions to commit SHAs, validates expressions, and runs `actionlint`, `zizmor`, and `poutine` when enabled. When a workflow already has a lock file, *safe update mode* asks for `--approve` before a new secret or action enters it. During this talk's compile, a new `CI_TRIGGER_TOKEN` reference triggered that prompt. [^architecture] [^cli]

**Failure signal:** `gh aw compile` fails, or the lock file differs from what the Markdown produces. **Recovery:** fix the source and recompile; the lock file is generated output and is never edited by hand.

<!-- 🎬 MAJOR SECTION: CI: From Red Build to Reviewed Fix -->
## Part 2: CI — From Red Build to Reviewed Fix

### CI Doctor: a failed run becomes an investigated issue

CI Doctor starts when the deterministic CI workflow completes with a failure on `main`. Its trigger is `workflow_run`, and the compiler adds repository-identity and fork checks to that trigger. [^triggers]

```yaml
on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]
    branches: [main]
if: github.event.workflow_run.conclusion == 'failure'
permissions:
  actions: read
  contents: read
  issues: read
  pull-requests: read
safe-outputs:
  create-issue:
    title-prefix: "[CI failure] "
    max: 1
  add-comment:
    max: 1
```

The Markdown body is an investigation protocol: read the earliest failed job first, classify the failure, correlate it with the head SHA's changes, assign a confidence level, and consolidate duplicates into one comment. The full file is in [examples/ci-doctor.md](examples/ci-doctor.md). [^agentics]

**What good output looks like.** In [github/gh-aw#14295](https://github.com/github/gh-aw/issues/14295), a CI Doctor run reported nondeterministic Go map iteration as the likely cause of a failing assertion. The issue named the failed job, explained why the order varied, and recommended sorting the engine list. GitHub's gallery presents that report as the example output. [^gallery]

**The untrusted-input boundary.** Build logs can contain text written by anyone who can open a pull request. The workflow treats logs as data and the containment holds even when the agent is misled:

| Layer | What it limits |
|---|---|
| Read-only agent job | The agent cannot push, merge, or edit issues directly |
| Network allowlist (`network: defaults`) | The agent container reaches only approved domains |
| `max: 1` on `create-issue` | One issue per run, with a fixed title prefix |
| Secret redaction and threat detection | Leaked tokens and suspicious output are caught before any write |

Safe outputs bound what the agent can *do*. They do not prove that its diagnosis is *correct*. The issue carries a confidence level and log evidence so a human can verify it in a minute. [^architecture] [^detection]

**Failure signal:** a diagnosis that cites no log lines, or a confidence level that is always "high". **Recovery:** tighten the protocol in the Markdown, recompile, and use `gh aw audit <run-id>` to inspect the run.

### /pr-fix: a maintainer asks for a repair

PR Fix runs when a maintainer comments `/pr-fix` on a pull request with failing checks. The default role allowlist is `admin`, `maintainer`, and `write`. [^triggers]

```yaml
on:
  slash_command:
    name: pr-fix
  reaction: "eyes"
safe-outputs:
  push-to-pull-request-branch:
    github-token-for-extra-empty-commit: ${{ secrets.CI_TRIGGER_TOKEN }}
  add-comment:
    max: 1
```

This output is a real write: a commit lands on the PR branch. A named human invokes it, the PR branch is the only destination, and edits to protected files (see Part 4) trigger a human review request. The agent reads the failing logs, edits, runs the repository's tests, and pushes only when the checks it ran pass. [^prfix]

### CI Coach: scheduled, capped, and reviewed

CI Coach looks at 30 days of CI runs and proposes one optimization as a draft pull request. Its first step is deterministic: a `bash` pre-check counts open `[ci-coach]` pull requests and skips the agent at three. Review capacity gates the spend.

```yaml
on:
  schedule: daily on weekdays
  steps:
    - id: capacity
      run: |
        COUNT=$(gh pr list --state open --search 'in:title "[ci-coach]"' \
          --json number --jq 'length')
        [[ "$COUNT" -lt 3 ]]
if: needs.pre_activation.outputs.capacity_result == 'success'
max-ai-credits: 500
safe-outputs:
  create-pull-request:
    draft: true
    expires: 2d
    protected-files: fallback-to-issue
```

When a proposal touches `.github/`, the `fallback-to-issue` policy converts it into a review issue that carries the change for a human to apply. [^cost] [^prs]

### Make agent PRs run CI

Pull requests created with the default `GITHUB_TOKEN` do not trigger CI workflow runs by default, which GitHub Actions does to prevent event cascades. The `gh-aw` docs describe three ways to start CI on an agent's PR. [^triggerci]

| Option | Configuration | Scope and tradeoff |
|---|---|---|
| Extra empty commit with a PAT | `github-token-for-extra-empty-commit: ${{ secrets.MY_PAT }}` | Fine-grained PAT with Contents read/write on the target repositories; the PR author stays the Actions bot |
| Extra empty commit with a GitHub App | `github-token-for-extra-empty-commit: app` | Short-lived installation token; preferred for organizations |
| Full token override | `github-token: ${{ secrets.CI_USER_PAT }}` | Changes the PR author to the token's owner and grants broader access |

GitHub's current documentation also describes approval-required runs for some PR events created with `GITHUB_TOKEN`. Choose the narrowest credential that makes your required checks run, and check that the run's `actor` is the PAT or App identity.

<!-- 🎬 MAJOR SECTION: CD: Observe the Release, Own the Gate -->
## Part 3: CD — Observe the Release, Own the Gate

### The deploy stays deterministic and the environment holds the gate

The deployment is a standard workflow. Its `environment: production` setting connects the job to the environment's protection rules, and the Azure login uses OpenID Connect so the workflow holds no long-lived cloud secret. [^envs] [^oidc]

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production        # required reviewers and branch rules live here
    permissions:
      id-token: write
      contents: read
    steps:
      - uses: azure/login@v2       # federated credential scoped to the environment
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
```

The setting `environment: production` only names the environment. The gate is configured in repository settings:

- **Required reviewers** (up to six users or teams; one approval releases the job) with the option to prevent self-review.
- **Deployment branches** limited to protected branches.
- **A federated credential in Microsoft Entra** whose subject is the `production` environment, so only jobs that reference that environment can obtain a token.
- **Plan prerequisites:** on GitHub Free, Pro, and Team, required reviewers are available for public repositories only; private repositories need GitHub Enterprise.

No agentic workflow in this talk holds a deployment credential or approval right. The Microsoft Learn quickstart for hosted agents in Microsoft Foundry uses this same pattern: GitHub Actions with `azd`, OIDC sign-in, and a smoke test after deploy. [^foundry]

### Deployment incident monitor: a failed deploy becomes an incident issue

The incident monitor watches the **Deploy** workflow. It uses `workflow_run`, which fires for Actions-native deployments. For deployments reported by an external system, `gh-aw`'s own sample uses the `deployment_status` trigger with `state: [error, failure]`. [^dim]

```yaml
on:
  workflow_run:
    workflows: ["Deploy"]
    types: [completed]
    branches: [main]
  skip-if-match:
    query: "is:issue is:open label:deployment-failure"
if: github.event.workflow_run.conclusion == 'failure'
safe-outputs:
  create-issue:
    title-prefix: "[Incident] "
    labels: [incident, deployment-failure]
    expires: 7d
    close-older-issues: true
  noop:
```

Three controls keep the on-call channel quiet: `skip-if-match` skips the run while an incident is open, `close-older-issues` supersedes stale reports, and `expires` closes the issue after seven days. The agent gathers the failed step's log and the commits since the last good deployment, then reports the likely cause with a confidence level.

### Release notes: a draft for human review

On `release: published`, a workflow summarizes the merged pull requests and opens one issue that contains the draft and a reviewer checklist. Publication elsewhere stays a human step. [^gallery2]

### The authority map

| Action | Proposes | Executes | Approves |
|---|---|---|---|
| Diagnose a failed run | Agent (read-only) | `safe_outputs` job creates one issue | Developer reads the evidence |
| Repair a PR branch | Agent after `/pr-fix` | `safe_outputs` job pushes to the PR branch | Maintainer who invoked it, then normal PR review |
| Optimize CI | Agent (draft PR or review issue) | `safe_outputs` job | Code owners on `.github/` |
| Deploy to production | Merge to `main` | Deploy workflow with OIDC | Environment required reviewers |
| Open an incident | Agent (read-only) | `safe_outputs` job | On-call engineer |

**Supply chain companion.** GitHub Actions workflow lockfiles reached general availability at Universe 2026. `gh actions-lock` writes `.github/workflows/actions.lock` with the exact commits of actions and their transitive dependencies. Dependabot refreshes the matching entry in the same pull request, and enterprise, organization, and repository administrators can enable a **Require lockfile** policy. `gh aw compile --actions-lock` refreshes it for agentic workflows. [^lockfiles]

<!-- 🎬 MAJOR SECTION: Operate It: Trust, Govern, Measure -->
## Part 4: Operate It — Trust, Govern, Measure

### Defense in depth

An agentic run passes through layers. Each layer constrains the one above it. [^architecture]

1. **Compile time:** schema validation, expression safety checks, action SHA pinning, and optional `actionlint`, `zizmor`, `poutine` scans.
2. **Pre-activation:** role and permission checks on whoever triggered the run (default allowlist: `admin`, `maintainer`, `write`).
3. **Isolation:** the agent runs in a container behind the **Agent Workflow Firewall (AWF)**, with MCP servers in their own containers behind an MCP gateway.
4. **Integrity filtering:** the gateway removes GitHub content below the configured trust level before the agent reads it.
5. **Threat detection:** a dedicated job scans agent output and patches for prompt injection, secret leaks, and malicious code before safe outputs apply.
6. **Safe outputs:** typed, capped, sanitized writes performed by a separate job.

Custom jobs, direct write permissions, and relaxed controls (`strict: false`, disabled sandbox or detection) form separate trust boundaries. Review them as changes to the trust model. [^overview]

### Safe outputs, staged mode, and protected files

Safe outputs form a typed vocabulary: `create-issue`, `add-comment`, `create-pull-request`, `push-to-pull-request-branch`, `dispatch-workflow`, and more. Each accepts limits such as `max`, `title-prefix`, `labels`, and `expires`. [^safeoutputs]

**Staged mode** runs the whole workflow and replaces each write with a 🎭 preview in the run's step summary:

```yaml
safe-outputs:
  staged: true            # preview every write in the workflow
```

```yaml
safe-outputs:
  create-pull-request:
    staged: true          # preview only pull requests
  add-comment:            # comments run normally
```

Global staging puts every type in preview, and a type-level `staged: false` cannot lift it. [^staged]

**Protected files** guard supply-chain paths by default: dependency manifests and lockfiles, engine instruction files such as `AGENTS.md`, `.github/`, `CODEOWNERS`, and top-level documentation. The default for `create-pull-request` is `request-review`; `fallback-to-issue` and `blocked` are available. `merge-pull-request` blocks protected-file changes by default. [^prs]

### Frontmatter guardrails

```yaml
network:
  allowed: [defaults, node]         # firewall domain allowlist
tools:
  github:
    min-integrity: approved         # merged > approved > unapproved > none
max-ai-credits: 500                 # per-run hard stop (1 AIC = $0.01)
on:
  roles: [admin, maintainer, write] # who can trigger (default)
```

- **Integrity** is based on author association and merge status. The default is `approved` for public repositories and `none` for private ones. [^integrity]
- **Credits:** default guardrails are 1,000 AIC per run and 5,000 AIC per workflow per day, with a 20-minute agent step timeout, a 60-minute agent job timeout, and a 10-minute detection job timeout. These are per-workflow defaults. They are not an enterprise spend ceiling. [^cost]

### Govern at scale

`gh aw env` manages defaults as GitHub Actions variables at enterprise, organization, or repository scope. The most specific scope wins:

1. workflow frontmatter
2. repository variable
3. organization variable
4. enterprise variable
5. compiler fallback

```bash
gh aw env get org-defaults.yml --scope org --org MY_ORG
gh aw env update org-defaults.yml --scope org --org MY_ORG --dry-run
gh aw env update org-defaults.yml --scope org --org MY_ORG
```

Defaults set the baseline. They do not enforce it, because a workflow author can override them in frontmatter. Enforcement comes from code ownership and review: a `CODEOWNERS` entry on `.github/workflows/`, a required review on lock-file changes, the **Require lockfile** policy, and safe update mode on compile. Some defaults (`GH_AW_DEFAULT_MAX_TURNS`, `GH_AW_DEFAULT_DETECTION_MODEL`) are read at compile time, so CI jobs that run `gh aw compile` pass them in. [^governance]

### Measure cost and value

| Question | Command |
|---|---|
| What did recent runs cost in time and AIC? | `gh aw logs --start-date -30d` |
| What happened in one run? | `gh aw audit <run-id>` |
| What will next month cost? | `gh aw forecast` (includes threat-detection credits and monthly ranges) |
| Did people accept the outputs? | `gh aw logs <workflow> --adoption` |
| Are workflows healthy? | `gh aw health` |

Cost has two parts: GitHub Actions minutes for the jobs and inference for the agent. A run has a short `pre_activation` job and an agent job, each with about 1.5 minutes of runner setup. Compare forecast with actual spend, and read acceptance rate beside cost so a cheap workflow that nobody reads shows up. [^cost] [^measure]

### The rollout ladder

1. **Report-only:** the workflow opens issues or comments. Nothing changes in code.
2. **Staged:** `staged: true` previews every write. Reviewers judge the decisions.
3. **Shadow evaluation:** a disposable repository receives the real write path.
4. **Direct writes:** the same workflow writes to production, under caps and protected files.

```bash
gh aw add-wizard githubnext/agentics/ci-doctor   # add a workflow, choose engine and auth
gh aw compile --strict                           # validate and generate the lock file
gh aw trial githubnext/agentics/ci-doctor        # run it in a throwaway host repository
gh aw run ci-doctor                              # run it in your repository
gh aw logs ci-doctor --adoption                  # check what reviewers accepted
```

Move up a rung when the evidence from the rung below is in hand: diagnoses that cite logs, previews that match what you would write, and acceptance you can see in `--adoption`. [^rollout]

### What Universe 2026 added

| Launch (Oct 28, 2026) | Why it matters for CI/CD |
|---|---|
| **GitHub Agentic Workflows generally available** | Production-ready on github.com for Free, Team, and Enterprise; the default Copilot engine needs a Copilot license. |
| **`gh aw forecast` out of experimental** | Budget with threat-detection credits and monthly ranges. |
| **New templates for `gh aw add-wizard`, model provider per workflow** | A faster start from tested samples and per-workflow model choice. |
| **GitHub Actions workflow lockfiles GA** | Pinned transitive dependencies and a Require lockfile policy. |
| **Copilot Automations: shared, self-improving** | A managed, cloud-run option for team workflows; improvements arrive as proposals you approve. |
| **GitHub Enterprise includes Copilot access** | Enterprise customers can use Copilot features without a separate subscription; confirm how that applies to your engine authentication. |

[^universe] [^ga] [^automations]

### When this pattern stops fitting

- **Fixed rules:** a check with one right answer belongs in a deterministic Actions step. Run it first and gate the agent on its result.
- **Deployment and approval authority:** keep the environment's required reviewers as the gate.
- **Deployment topology:** GHES, data-residency, self-hosted, and ARC combinations have component prerequisites. Check the [deployment and runner applicability summary](https://github.github.com/gh-aw/reference/enterprise-configuration/#deployment-and-runner-applicability) before you commit.
- **Team-managed, no-YAML automation:** Copilot Automations may fit better when the team wants a managed surface with no repository file.
- **Low acceptance:** if `--adoption` shows reviewers ignore the output, tighten the prompt or retire the workflow.

---

## What You Can Do Today

### 15 Minutes — Prove the Core Behavior

Install the extension and compile the CI Doctor example from this talk. Open the lock file and find the `agent` job's `permissions` block and the `safe_outputs` job's `permissions` block.

```bash
gh extension install github/gh-aw
cp tech-talks/agentic-workflows-cicd/examples/ci-doctor.md .github/workflows/
gh aw compile --strict
```

### 1 Hour — Integrate It into Real Work

Change `workflows: ["CI"]` to your pipeline's name, set `safe-outputs.staged: true`, compile, and trigger a failed run on a branch. Read the 🎭 preview. Check that the diagnosis cites log lines and that the confidence level matches the evidence.

### 2–4 Hours — Run a Bounded Pilot

Pick one repository. Run CI Doctor staged for a week, then enable real issue creation with `max: 1`. Add a `CODEOWNERS` entry for `.github/workflows/`. Export defaults with `gh aw env get`, set per-run and per-day credit limits, and review `gh aw logs --adoption` at the end of the week.

### Apply It to Your Work

Name the CI/CD judgment your team repeats most often (for example, "why did this run fail?"). Write down the trigger, what the agent may read, the one write it may request, and the person who reviews that write.

---

## References

See the `references` list in this file's frontmatter for every source, including the GitHub Universe 2026 announcements and the Microsoft Learn guidance for GitHub Actions with Azure.

[^ga]: GitHub Changelog, "GitHub Agentic Workflows generally available," October 28, 2026. Verified through search results on November 23, 2026; the GitHub blog host was not reachable from the authoring environment for a direct fetch. https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/
[^overview]: https://github.github.com/gh-aw/introduction/overview/
[^howitworks]: https://github.github.com/gh-aw/introduction/how-they-work/
[^architecture]: https://github.github.com/gh-aw/introduction/architecture/
[^cli]: https://github.github.com/gh-aw/setup/cli/
[^triggers]: https://github.github.com/gh-aw/reference/triggers/
[^agentics]: https://github.com/githubnext/agentics/blob/main/workflows/ci-doctor.md
[^gallery]: https://github.github.com/gh-aw/gallery/ci-failure-investigation/
[^gallery2]: https://github.github.com/gh-aw/gallery/ai-release-notes/
[^detection]: https://github.github.com/gh-aw/reference/threat-detection/
[^prfix]: https://github.com/githubnext/agentics/blob/main/workflows/pr-fix.md
[^cost]: https://github.github.com/gh-aw/reference/cost-management/
[^prs]: https://github.github.com/gh-aw/reference/safe-outputs-pull-requests/
[^triggerci]: https://github.github.com/gh-aw/reference/triggering-ci/
[^envs]: https://docs.github.com/actions/reference/deployments-and-environments
[^oidc]: https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect
[^foundry]: https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/set-up-cicd-hosted-agent
[^dim]: https://github.com/github/gh-aw/blob/main/.github/workflows/deployment-incident-monitor.md
[^lockfiles]: https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available/
[^safeoutputs]: https://github.github.com/gh-aw/reference/safe-outputs/
[^staged]: https://github.github.com/gh-aw/reference/staged-mode/
[^integrity]: https://github.github.com/gh-aw/reference/integrity/
[^governance]: https://github.github.com/gh-aw/reference/governance/
[^measure]: https://github.github.com/gh-aw/guides/measuring-impact/
[^rollout]: https://github.github.com/gh-aw/guides/safe-rollout/
[^universe]: https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/
[^automations]: https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations/
