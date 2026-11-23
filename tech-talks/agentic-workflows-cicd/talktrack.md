---
status: active
updated: 2026-11-23
section: "Delegate and Coordinate"
---

# Agentic Workflows for CI/CD: Agents Investigate, the Pipeline Decides — Talk Track

**Deck:** [agentic-workflows-cicd](../../slides/tech-talks/agentic-workflows-cicd.md) (30 slides)

**Content baseline:** [Technical article and sources](README.md) · **Code:** [examples/](examples/)

**Audience:** Developer Leads and GitHub administrators.

**Duration:** 42 minutes, including a 2-minute discussion.

**Verified content date:** November 23, 2026. GitHub Agentic Workflows has been generally available on github.com since October 28, 2026 (GitHub Universe).

**One-sentence thesis:** reasoning joins the pipeline where a human reads logs, and every write stays narrow, reviewable, and human-gated.

**Anchor to repeat:** a 65-line `ci-doctor.md` compiles to a 2,426-line lock file where the `agent` job holds read permissions and the `safe_outputs` job holds the writes (observed with `gh-aw` main at commit `dbcd971` on November 23, 2026).

Spoken text follows each slide heading. Italicized **Presenter cues** are delivery instructions, not audience-facing content. Each slide lists its **Objective**, the one thing the audience should be able to do or decide after it.

**Before presenting**

- Run the deck locally: `cd slides && npx slidev tech-talks/agentic-workflows-cicd.md`.
- Optional live moment (2 minutes, slide 7): in a scratch repository, run `gh extension install github/gh-aw`, copy `examples/ci-doctor.md` into `.github/workflows/`, and run `gh aw compile --strict`. Open the lock file at the `agent` and `safe_outputs` jobs. No model call, secret, or AI credit is needed to compile.
- Describe every example as a proposed workflow. The only recorded results in this talk are the compile line counts and the public issue `github/gh-aw#14295`.
- Have the [deployment and runner applicability summary](https://github.github.com/gh-aw/reference/enterprise-configuration/#deployment-and-runner-applicability) open for GHES, data-residency, and ARC questions.

## Timing at a glance

| # | Slide | Objective | Time |
|---|---|---|---|
| 1 | Title | Frame the decision | 0:00–0:30 |
| 2 | Core Question | Identify who decides what | 0:30–1:15 |
| 3 | Table of Contents | Preview the four parts | 1:15–1:45 |
| 4 | Part 1 — Anatomy | Introduce the mechanism | 1:45–2:00 |
| 5 | Markdown in, Actions out | Read a workflow file | 2:00–4:15 |
| 6 | Actions run the pipeline; agents read it | Choose agentic versus deterministic work | 4:15–6:00 |
| 7 | Compile and review the lock file | Verify read versus write | 6:00–8:45 |
| 8 | Part 2 — CI | Introduce escalating authority | 8:45–9:00 |
| 9 | CI Doctor starts when CI fails | Wire an agent to a pipeline | 9:00–11:15 |
| 10 | The protocol and a real report | Judge a diagnosis by its evidence | 11:15–14:00 |
| 11 | PR Fix repairs on command | Bound a real write | 14:00–16:30 |
| 12 | CI Coach proposes one optimization | Gate a scheduled agent | 16:30–18:45 |
| 13 | Part 3 — CD | Introduce the deployment boundary | 18:45–19:00 |
| 14 | The deploy stays deterministic | Locate the production gate | 19:00–21:15 |
| 15 | A failed deploy becomes an incident issue | Report without touching the environment | 21:15–23:15 |
| 16 | Release notes are a draft for human review | Draft, then publish by hand | 23:15–24:30 |
| 17 | Who proposes, executes, and approves | Assign authority per action | 24:30–26:45 |
| 18 | Part 4 — Operate | Introduce the admin view | 26:45–27:00 |
| 19 | Six layers bound a run | Explain containment | 27:00–29:00 |
| 20 | Staged mode and protected files | Preview writes and protect paths | 29:00–31:00 |
| 21 | Guardrails in the frontmatter | Set limits per workflow | 31:00–32:15 |
| 22 | Govern with defaults and review | Set baselines and enforce them | 32:15–33:30 |
| 23 | Measure cost and adoption | Read cost beside adoption | 33:30–35:00 |
| 24 | The rollout ladder | Sequence autonomy | 35:00–36:00 |
| 25 | What Universe 2026 added | Apply the launches | 36:00–37:15 |
| 26 | When this pattern stops fitting | Name the boundary | 37:15–38:30 |
| 27 | Before and After | Recap the shift | 38:30–39:00 |
| 28 | What You Can Do Today | Choose a next experiment | 39:00–39:45 |
| 29 | References | Find sources | 39:45–40:00 |
| 30 | Thank You | Discuss a first candidate | 40:00–42:00 |

## 1. Title

**Objective:** Frame the decision the talk helps the audience make.

**Time:** 0:00–0:30 · **Duration:** 0:30

Over the next forty minutes we answer one question: which CI/CD judgments get an agent, and what may that agent write? GitHub Agentic Workflows became generally available at Universe on October 28. We will use it where a person reads logs today, and we will keep the pipeline itself deterministic and human-approved.

*Presenter cue: Name the two roles in the room, the Developer Lead and the GitHub admin, and say that each part adds something for both.*

## 2. Core Question

**Objective:** Identify who in the room owns which part of the decision, and anchor three facts.

**Time:** 0:30–1:15 · **Duration:** 0:45

The three cards on top are who we are talking to. Developer Leads turn red builds into evidence-backed issues. GitHub admins set guardrails, defaults, and budgets they can inspect. Release owners observe deployments while environment reviewers hold the gate. The three cards below are facts. Agentic Workflows is generally available on github.com for Free, Team, and Enterprise. A 65-line workflow compiled to a 2,426-line lock file in our test. And the defaults are 1,000 AI Credits per run and 5,000 per workflow per day, where one credit is one cent.

*Presenter cue: Say "observed" for the 65 and 2,426 figures and "default" for the credit limits. Neither is a productivity claim.*

**Sources:** [GA changelog](https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/) · [Cost management](https://github.github.com/gh-aw/reference/cost-management/)

## 3. Table of Contents

**Objective:** Preview the four parts and how authority grows across them.

**Time:** 1:15–1:45 · **Duration:** 0:30

Four parts. Anatomy shows the mechanism and the permission split. CI applies it three times with growing authority. CD keeps deployment deterministic and shows who approves what. Operate gives admins the layers, defaults, numbers, and a rollout path.

## 4. Part 1 — Anatomy

**Objective:** Introduce the three steps of the mechanism: write, compile, review.

**Time:** 1:45–2:00 · **Duration:** 0:15

You write Markdown, the compiler produces an Actions workflow, and you review the permissions. The line at the bottom is our anchor: the agent job reads, and the safe outputs job writes.

## 5. Markdown in, Actions out

**Objective:** Read a minimal workflow file and name its three parts.

**Time:** 2:00–4:15 · **Duration:** 2:15

This is a complete workflow. The frontmatter says when it runs, what it may read, and the one write it may request: here, a comment. The body is plain language that the engine reads at run time. When we run `gh aw compile`, the tool validates the file and writes a lock file next to it. We commit both and review both in the pull request. GitHub Copilot is the default engine, and Claude Code, OpenAI Codex, Google Gemini, and Pi are also supported. The Copilot engine authenticates either with `copilot-requests: write` for organization billing or with a `COPILOT_GITHUB_TOKEN` secret.

*Presenter cue: Point to `permissions: read-all` and `add-comment` in turn. The practitioner writes the intent, the compiler generates the job, and GitHub Actions runs it.*

**Sources:** [Overview](https://github.github.com/gh-aw/introduction/overview/) · [How they work](https://github.github.com/gh-aw/introduction/how-they-work/)

## 6. Actions run the pipeline; agents read it

**Objective:** Decide which CI/CD work stays in standard Actions and which gains an agent.

**Time:** 4:15–6:00 · **Duration:** 1:45

The left column stays exactly where it is: build, test, lint, package, deploy, and rules that have one right answer. The right column is where reasoning helps: investigate a failed run, draft release notes, open an incident issue, propose a CI optimization. These agentic workflows run on GitHub Actions and can include deterministic steps, so they complement CI/CD. The runner, the logs, and your policies remain the control plane. One cost guideline from the docs: if a deterministic tool can answer the question, use it, and gate the agent on its result.

*Presenter cue: Ask the room for one task from each column in their own pipeline.*

**Sources:** [How they work](https://github.github.com/gh-aw/introduction/how-they-work/) · [Cost management](https://github.github.com/gh-aw/reference/cost-management/)

## 7. Compile and review the lock file

**Objective:** Verify, from the lock file, that the agent cannot write and that writes wait for detection.

**Time:** 6:00–8:45 · **Duration:** 2:45

This is the reveal. We compiled the CI Doctor example, 65 lines of Markdown, and got 2,426 lines of Actions YAML with six jobs: pre-activation, activation, agent, detection, safe outputs, and conclusion. Look at the agent job: actions, contents, issues, and pull requests, all read. Now look at safe outputs: issues write and pull requests write, and it runs only when the detection job succeeds. That separation is the review artifact. If a new secret or action appears in a lock file that already exists, the compiler's safe update mode asks for an explicit `--approve`. If compile fails or the lock file drifts from the Markdown, fix the Markdown and recompile. The lock file is generated output.

*Presenter cue: If you run the live compile, open the lock file and search for `agent:` and `safe_outputs:`. The excerpt is from `gh-aw` main at commit `dbcd971`, so counts can differ in later releases.*

**Sources:** [Security architecture](https://github.github.com/gh-aw/introduction/architecture/) · [CLI reference](https://github.github.com/gh-aw/setup/cli/)

## 8. Part 2 — CI

**Objective:** Introduce three CI agents ordered by write authority.

**Time:** 8:45–9:00 · **Duration:** 0:15

Three agents, and each writes more than the one before: an issue, then a push to a branch, then a draft pull request. For each one we name the trigger, the read scope, the single write, and the reviewer.

## 9. CI Doctor starts when CI fails

**Objective:** Wire a read-only agent to an existing CI workflow with real frontmatter.

**Time:** 9:00–11:15 · **Duration:** 2:15

CI Doctor starts when your CI workflow completes with a failure on main. The trigger is `workflow_run`, and the compiler adds repository and fork checks to it. The permissions are all read. The safe outputs allow one issue with a fixed prefix and one comment. To adopt it, change `workflows: ["CI"]` to the name of your pipeline, compile, and commit the Markdown and the lock file together.

*Presenter cue: Here the failed CI workflow starts CI Doctor, the read-only agent investigates, and the safe outputs job opens the issue. Full file: `examples/ci-doctor.md`, adapted from the MIT-licensed `githubnext/agentics`.*

**Sources:** [CI Doctor source](https://github.com/githubnext/agentics/blob/main/workflows/ci-doctor.md) · [Triggers](https://github.github.com/gh-aw/reference/triggers/)

## 10. The protocol and a real report

**Objective:** Judge a diagnosis by its evidence.

**Time:** 11:15–14:00 · **Duration:** 2:45

On the left is the protocol in the Markdown body: read the earliest failed job first, classify the failure, correlate with the head commit, state a confidence level, and comment on an open issue when one already covers the cause. On the right is a public example. In `github/gh-aw` issue 14295, CI Doctor reported nondeterministic Go map iteration as the likely cause of a failing assertion, named the failed job, and suggested sorting the list. GitHub's gallery presents it as the example output. This is one sourced example, not an accuracy measurement. A good diagnosis cites log lines. If yours does not, or if confidence is always high, tighten the protocol, recompile, and inspect the run with `gh aw audit`.

*Presenter cue: Foreshadow Part 4: build logs are untrusted text, and slide 19 walks through what contains a planted instruction.*

**Sources:** [github/gh-aw#14295](https://github.com/github/gh-aw/issues/14295) · [Gallery](https://github.github.com/gh-aw/gallery/ci-failure-investigation/)

## 11. PR Fix repairs on command

**Objective:** Bound a write that changes a branch, and start CI on the agent's commit.

**Time:** 14:00–16:30 · **Duration:** 2:30

PR Fix runs when a maintainer comments `/pr-fix` on a pull request with failing checks. By default the people who can trigger it are admins, maintainers, and anyone with write access. The agent reads the failing logs, edits, runs the repository's tests, and requests a push. This is a real write: a commit lands on the PR branch, so a named maintainer invokes it. Two details matter to admins. Pushes made with the default `GITHUB_TOKEN` do not start CI, so the workflow uses an extra empty commit authenticated by a fine-grained PAT or, preferably for organizations, a GitHub App. And edits to protected paths, such as `.github/`, manifests, and lockfiles, trigger a human review request.

*Presenter cue: The three options in the docs are an empty commit with a PAT, an empty commit with a GitHub App, and a full token override that changes the PR author and widens access. GitHub documentation also describes approval-required runs for some PR events. Recommend the narrowest credential that makes required checks run, then confirm the run's actor.*

**Sources:** [Triggering CI](https://github.github.com/gh-aw/reference/triggering-ci/) · [PR Fix source](https://github.com/githubnext/agentics/blob/main/workflows/pr-fix.md)

## 12. CI Coach proposes one optimization

**Objective:** Gate a scheduled agent on a deterministic check and cap its spend.

**Time:** 16:30–18:45 · **Duration:** 2:15

CI Coach runs on weekdays and proposes one CI optimization as a draft pull request. Before the agent starts, a bash step counts open `[ci-coach]` pull requests and exits non-zero at three, so the agent never starts when reviewers are behind. `max-ai-credits: 500` is a hard stop for one run. The pull request is a draft that expires after two days. If it touches `.github/`, the `fallback-to-issue` policy delivers the change as a review issue for a human to apply.

*Presenter cue: This is the deterministic-first pattern. Run the cheap check, then let the agent run only when it can be useful.*

**Sources:** [Cost management](https://github.github.com/gh-aw/reference/cost-management/) · [Safe outputs: pull requests](https://github.github.com/gh-aw/reference/safe-outputs-pull-requests/)

## 13. Part 3 — CD

**Objective:** Introduce the deployment boundary.

**Time:** 18:45–19:00 · **Duration:** 0:15

Deployment stays deterministic. No agent in this talk holds a deployment credential or an approval right. Agents read and draft, and environments approve.

## 14. The deploy stays deterministic

**Objective:** Locate the production gate in environment protection rules and OIDC trust.

**Time:** 19:00–21:15 · **Duration:** 2:15

The deploy is a standard workflow. `environment: production` connects the job to an environment, and the Azure login uses OpenID Connect, so the workflow holds no long-lived cloud secret. The line `environment: production` only names the environment. The gate lives in repository settings: required reviewers, up to six users or teams, where one approval releases the job, and an option to prevent self-review. A Microsoft Entra federated credential can trust only jobs that reference that environment. One plan note: on GitHub Free, Pro, and Team, required reviewers are available for public repositories only, so private repositories need GitHub Enterprise. Microsoft Learn's Foundry hosted-agent quickstart uses this same pattern.

*Presenter cue: Admins should leave with three settings to check: required reviewers, deployment branches limited to protected branches, and the federated credential subject.*

**Sources:** [Deployments and environments](https://docs.github.com/actions/reference/deployments-and-environments) · [Azure sign-in with OIDC](https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect) · [CI/CD for a hosted agent](https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/set-up-cicd-hosted-agent)

## 15. A failed deploy becomes an incident issue

**Objective:** Report a failed deployment with evidence and no access to the environment.

**Time:** 21:15–23:15 · **Duration:** 2:00

The incident monitor watches the Deploy workflow with `workflow_run`, which fires for Actions-native deployments. It reads the failed job's log and the commits since the last good deployment, then opens one issue with a likely cause and a confidence level. Three controls keep the on-call channel calm: `skip-if-match` skips the run while an incident issue is open, `close-older-issues` supersedes stale reports, and `expires` closes the issue after seven days. For deployments reported by an external system, the `gh-aw` sample uses `deployment_status` with `state: [error, failure]`.

*Presenter cue: Failure signal: an incident with no evidence. The workflow says what is unknown and calls `noop` for duplicates.*

**Sources:** [Incident monitor sample](https://github.com/github/gh-aw/blob/main/.github/workflows/deployment-incident-monitor.md) · [Triggers](https://github.github.com/gh-aw/reference/triggers/)

## 16. Release notes are a draft for human review

**Objective:** Use an agent to draft a recurring summary while a human owns publication.

**Time:** 23:15–24:30 · **Duration:** 1:15

When a release is published, the agent reads the merged pull requests since the previous release and opens one issue with the draft and a reviewer checklist: breaking changes confirmed, migration notes verified, links checked. A human publishes elsewhere. The pattern fits any recurring summary: the agent drafts and the human owns publication.

**Sources:** [Gallery: release notes](https://github.github.com/gh-aw/gallery/ai-release-notes/)

## 17. Who proposes, executes, and approves

**Objective:** Assign a proposer, an executor, and an approver to every CI/CD action.

**Time:** 24:30–26:45 · **Duration:** 2:15

Read left to right. The agent proposes with read-only access: an issue, a branch push, a draft PR. Scoped jobs execute, and detection must succeed first. Named humans approve: the developer or on-call engineer reads the evidence, the maintainer runs `/pr-fix`, code owners review changes to `.github/`, and environment reviewers approve deployments. Creating an issue is a proposal. A branch push and closing older issues are real writes, which is why PR Fix needs a named maintainer and the issue workflows cap the count. One supply chain companion: GitHub Actions workflow lockfiles reached general availability at Universe. They pin actions and their transitive dependencies, Dependabot refreshes the entries, and admins can require them with a policy.

*Presenter cue: This slide is the transfer tool. Invite the room to fill the three columns for their own pipeline.*

**Sources:** [Lockfiles GA](https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available/) · [Security architecture](https://github.github.com/gh-aw/introduction/architecture/)

## 18. Part 4 — Operate

**Objective:** Introduce the admin view: trust, govern, measure.

**Time:** 26:45–27:00 · **Duration:** 0:15

Now the GitHub admin's view. Layers, controls, defaults, numbers, and a rollout path that grows autonomy with evidence.

## 19. Six layers bound a run

**Objective:** Explain what limits damage when a build log contains a planted instruction.

**Time:** 27:00–29:00 · **Duration:** 2:00

Suppose a pull request author makes a failing test print a line that tells the agent to open fifty issues. The agent reads that line as data. Compile-time checks pinned the actions. Admission checked who triggered the run. The agent container reaches only allowlisted domains. Integrity filtering drops GitHub content below the trust level before the agent reads it. The agent job has no write permission. Its output passes threat detection and sanitization. And safe outputs allow one issue with a fixed prefix. This is a design walk-through, not a recorded test. What remains is the question of correctness: safe outputs bound what the agent can write, and they do not prove its diagnosis. That is why the issue carries a confidence level and log evidence.

*Presenter cue: Mention that custom jobs, direct write permissions, and relaxed controls such as `strict: false` or a disabled sandbox or detection are separate trust boundaries that deserve review.*

**Sources:** [Security architecture](https://github.github.com/gh-aw/introduction/architecture/) · [Threat detection](https://github.github.com/gh-aw/reference/threat-detection/) · [Integrity filtering](https://github.github.com/gh-aw/reference/integrity/)

## 20. Staged mode and protected files

**Objective:** Preview every write before enabling it, and route supply-chain files to a human.

**Time:** 29:00–31:00 · **Duration:** 2:00

Staged mode runs the full workflow and replaces each built-in write with a preview in the step summary, so reviewers can judge the decisions before any write exists. Global `staged: true` puts every output type in preview, and a type-level `staged: false` cannot lift it. Staging is not a sandbox: custom jobs, scripts, external MCP servers, and custom credentials need their own controls. Protected files guard dependency manifests and lockfiles, `AGENTS.md`, `.github/`, `CODEOWNERS`, and top-level documentation. For pull request creation and pushes the default is to request review, and `fallback-to-issue` and `blocked` are available. Merging blocks protected-file changes by default.

**Sources:** [Staged mode](https://github.github.com/gh-aw/reference/staged-mode/) · [Safe outputs: pull requests](https://github.github.com/gh-aw/reference/safe-outputs-pull-requests/)

## 21. Guardrails in the frontmatter

**Objective:** Set network, integrity, credit, and role limits per workflow.

**Time:** 31:00–32:15 · **Duration:** 1:15

Four one-line decisions. `network` limits the agent container to approved domains. `min-integrity` sets the trust floor, from merged down to none, and public repositories default to approved. `max-ai-credits` stops a run at a budget. `roles` decides who may trigger it. When you set nothing, the defaults are 1,000 AI Credits per run, 5,000 per workflow per day, a 20-minute agent step, a 60-minute agent job, and a 10-minute detection job. Those are per-workflow defaults and they are not an enterprise spend ceiling.

**Sources:** [Integrity filtering](https://github.github.com/gh-aw/reference/integrity/) · [Cost management](https://github.github.com/gh-aw/reference/cost-management/)

## 22. Govern with defaults and review

**Objective:** Distinguish setting a baseline from enforcing it.

**Time:** 32:15–33:30 · **Duration:** 1:15

`gh aw env` manages defaults as Actions variables at enterprise, organization, or repository scope. Export with `get`, edit the YAML, preview with `--dry-run`, then apply. The most specific scope wins: workflow frontmatter, then repository, organization, enterprise, and finally the compiler fallback. Because a workflow author can override a default in frontmatter, defaults set a baseline and review enforces it: a CODEOWNERS entry on `.github/workflows/`, required review on lock-file changes, the Require lockfile policy, and safe update mode on compile. A few defaults are read by the compiler, so a CI job that runs `gh aw compile` must pass them in.

**Sources:** [Configuration governance](https://github.github.com/gh-aw/reference/governance/)

## 23. Measure cost and adoption

**Objective:** Read cost, budget, and adoption together.

**Time:** 33:30–35:00 · **Duration:** 1:30

Cost has two parts: Actions minutes and inference. `gh aw logs` shows recent runs, `gh aw audit` opens a single run, and `gh aw forecast` projects monthly credits. Forecast left experimental at GA and now includes threat-detection credits and monthly ranges. Use `gh aw logs WORKFLOW --adoption` to see which outputs people accepted, rejected, or left pending, and `gh aw health` for success rates. Read adoption next to cost: a cheap workflow that nobody reads shows up. Adoption is a signal; it does not establish attributed value on its own.

**Sources:** [Cost management](https://github.github.com/gh-aw/reference/cost-management/) · [Measuring impact](https://github.github.com/gh-aw/guides/measuring-impact/)

## 24. The rollout ladder

**Objective:** Sequence autonomy from report-only to direct writes.

**Time:** 35:00–36:00 · **Duration:** 1:00

Four rungs: report-only, staged, shadow, and direct writes. Staged answers what the workflow would do. Shadow answers whether the real write path behaves correctly on a safe target. The commands at the bottom are a first week: `add-wizard`, `compile --strict`, `trial`, `run`, and `logs --adoption`. Move up a rung when the evidence below it is in hand: diagnoses that cite logs, previews that match what a human would write, and acceptance you can see.

**Sources:** [Safe rollout](https://github.github.com/gh-aw/guides/safe-rollout/)

## 25. What Universe 2026 added

**Objective:** Connect the October 28 launches to CI/CD adoption decisions.

**Time:** 36:00–37:15 · **Duration:** 1:15

Several launches line up. Agentic Workflows is generally available on github.com for Free, Team, and Enterprise. `gh aw forecast` left experimental, `add-wizard` has new templates, and you can pick a model provider per workflow. Actions workflow lockfiles reached GA with a Require lockfile policy. Copilot Automations added shared, cloud-run automations that belong to the repository, and automations that propose their own improvements for you to review. GitHub Enterprise now includes access to Copilot features. The default Copilot engine needs a Copilot license, so confirm how Enterprise access applies to your authentication.

*Presenter cue: Distinguish the two surfaces. Agentic Workflows are Markdown files in your repository that compile to Actions and reuse your runner groups and policies. Copilot Automations are a managed, cloud-run surface. Choose by where the team wants the artifact to live and who manages it.*

**Sources:** [GA changelog](https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/) · [Universe 2026](https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/) · [Shared automations](https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations/) · [Self-improving automations](https://github.blog/changelog/2026-10-28-copilot-automations-now-learn-from-outcomes-and-self-improve/)

## 26. When this pattern stops fitting

**Objective:** Name the boundary before adopting.

**Time:** 37:15–38:30 · **Duration:** 1:15

Keep fixed rules deterministic, and gate the agent on their result. Keep authority human-gated: production approval with environment reviewers, `.github/` changes with code owners, and a retirement path when adoption is low. Check before you adopt: GHES, data-residency, self-hosted, and ARC combinations have component prerequisites, so read the applicability summary first. And when a team wants a managed surface with no repository file, Copilot Automations may fit better.

**Sources:** [Enterprise configuration](https://github.github.com/gh-aw/reference/enterprise-configuration/#deployment-and-runner-applicability)

## 27. Before and After

**Objective:** Recap the shift from reading logs by hand to reviewing evidence.

**Time:** 38:30–39:00 · **Duration:** 0:30

Before, a person opens the run, scans logs, searches earlier failures, and writes it up. After, CI Doctor opens one evidence-backed issue and turns duplicates into comments. The agent job reads and safe outputs writes. Staged mode, caps, and adoption data guide the rollout. The three numbers are one observed compile result and two configuration facts. They are not productivity measurements.

## 28. What You Can Do Today

**Objective:** Choose a next experiment that produces evidence.

**Time:** 39:00–39:45 · **Duration:** 0:45

Today: install `gh-aw`, compile `examples/ci-doctor.md`, and compare the agent and safe outputs permissions. This week: point CI Doctor at your CI workflow with `staged: true`, add a CODEOWNERS entry for `.github/workflows/`, and read the preview for one failed run. This month: enable real issues with `max: 1`, preview org defaults with `--dry-run`, and review adoption to promote, tighten, or retire. Start report-only and move up one rung at a time.

## 29. References

**Objective:** Point to sources for every claim.

**Time:** 39:45–40:00 · **Duration:** 0:15

Every source is in the README frontmatter with its verified date, including the pages not shown here: Triggering CI, Safe rollout, the Copilot Automations changelogs, and the Actions security roadmap.

## 30. Thank You

**Objective:** Surface a first candidate workflow in the audience's environment.

**Time:** 40:00–42:00 · **Duration:** 2:00

The prompt on the slide is the transfer question: which CI judgment does your team repeat most, who would review the output, and what is the one write the agent may request? Take two or three answers and help the room name the trigger, the read scope, the write, and the reviewer.

**Likely questions**

- *What does it cost?* Point to `gh aw forecast`, the default per-run and per-day credit limits, and that Actions minutes add to inference.
- *Does it run on GHES or ARC?* Point to the deployment and runner applicability summary and say combinations have prerequisites.
- *What about prompt injection?* Return to slide 19: the layers bound writes, and the evidence lets a human verify.
- *Copilot Automations or Agentic Workflows?* Where the artifact lives and who manages it.
- *Can it merge for us?* A merge safe output exists and blocks protected-file changes by default. This talk keeps merging and deployment with humans.
