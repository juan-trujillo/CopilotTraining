# Agentic Workflows for CI/CD — Research Notes

**Date:** 2026-11-23
**Topic:** GitHub Agentic Workflows (`gh-aw`) applied to the CI and CD stages of the SDLC
**Audience:** Developer Leads and GitHub administrators
**Format:** 42-minute core talk (30 slides)

## 1. Brief

| Item | Decision |
|---|---|
| Practitioner | A Developer Lead whose `main` is red, and the GitHub admin who decides whether agents run in Actions |
| Decision | Which CI/CD judgments get an agent, and what write authority does it hold? |
| Thesis | Reasoning joins the pipeline where a human reads logs; every write stays narrow, reviewable, and human-gated |
| Tension | Agent usefulness grows with read access and write authority; trust grows with separation and evidence |
| Artifact | Five workflows (`ci-doctor`, `pr-fix`, `ci-coach`, `deployment-incident-monitor`, `release-notes`), one deterministic `deploy.yml`, and `defaults.yml` |
| Anchor | `ci-doctor.md` (65 lines) compiles to a 2,426-line lock file; `agent` job reads, `safe_outputs` job writes |
| Evidence | Observed compile output, a public CI Doctor issue (`github/gh-aw#14295`), documented defaults |
| Boundary | Fixed rules, deployment approval, topology prerequisites, low adoption |
| Transfer | Name the CI judgment your team repeats most, its trigger, read scope, single write, and reviewer |

## 2. Sources

### Primary (requested)

| Source | How it was used | Verification |
|---|---|---|
| https://github.com/github/gh-aw | Cloned at `dbcd971` (2026-11-23). Docs under `docs/src/content/docs`, sample workflows under `.github/workflows` | Read locally; compiled with a build of this commit |
| https://github.github.com/gh-aw/introduction/overview/ | Definition, engines, compile model, read-only default | Fetched 2026-11-23 |

### GitHub (added)

| Source | Used for | Verification |
|---|---|---|
| gh-aw docs: how-they-work, architecture, safe-outputs, safe-outputs-pull-requests, staged-mode, threat-detection, integrity, triggers, triggering-ci, governance, cost-management, safe-rollout, measuring-impact, cli, gallery pages | Mechanism, controls, defaults, commands | Read from the cloned repository |
| https://github.com/githubnext/agentics (`ci-doctor`, `ci-coach`, `pr-fix`, `cost-tracker`) | Example workflows | Fetched from `raw.githubusercontent.com` |
| https://github.com/github/gh-aw/issues/14295 | Sourced CI Doctor report | Referenced by the gh-aw gallery page |
| GitHub Changelog, Oct 28 2026: Agentic Workflows GA; Actions workflow lockfiles GA; shared Copilot Automations; Automations learn from outcomes; new tools and triggers | Universe launches | Verified through search result excerpts. The blog host was not reachable from the authoring environment for a direct fetch |
| GitHub Blog, Universe 2026: Evolving every layer of the stack | Copilot Enterprise access, Automations context | Search result excerpt |
| GitHub Blog, Actions 2026 security roadmap | Context for lockfiles and egress controls | Search result excerpt |
| GitHub Docs: Deployments and environments; Configuring OpenID Connect in Azure | Required reviewers, protection rules, plan prerequisites, OIDC | Search result excerpts |

### Microsoft (added)

| Source | Used for | Verification |
|---|---|---|
| Microsoft Learn: Authenticate to Azure from GitHub Actions by OpenID Connect | `azure/login`, federated credential pattern | Search result excerpt |
| Microsoft Learn: Set up CI/CD for a hosted agent (Microsoft Foundry) | GitHub Actions + `azd` + OIDC + smoke test pattern | Search result excerpt |
| Microsoft Learn training: CI/CD pipelines for multi-agent systems with GitHub Actions | Related reading | Search result excerpt |

## 3. Universe 2026 scan (October 28, 2026)

| Launch | Relevance to CI/CD | Used in deck |
|---|---|---|
| GitHub Agentic Workflows generally available | Production status on github.com for Free, Team, Enterprise; default Copilot engine needs a Copilot license | Slides 2, 25 |
| `gh aw forecast` out of experimental (threat-detection credits, monthly ranges); new `add-wizard` templates; model provider per workflow | Budgeting and faster start | Slides 23, 24, 25 |
| GitHub Actions workflow lockfiles GA (`gh actions-lock`, Require lockfile policy, Dependabot sync) | Supply-chain companion for CD; `gh aw compile --actions-lock` integrates | Slides 17, 22, 25 |
| Copilot Automations: shared automations; learn from outcomes; new triggers and tools | A managed, cloud-run alternative surface | Slides 25, 26 |
| GitHub Enterprise includes access to Copilot | Licensing context for the default engine | Slide 25 |
| Copilot Fusion; Copilot projects; session continuity | Not CI/CD-specific | Not used |

## 4. Observed evidence (compile run)

Environment: `gh-aw` built from `main` at `dbcd971` on 2026-11-23 with `go build ./cmd/gh-aw`; `gh aw compile --validate --strict` for each file in [examples/](examples/).

| Workflow | Markdown lines | Lock-file lines | Result |
|---|---|---|---|
| `ci-doctor.md` | 65 | 2,426 | Compiled |
| `pr-fix.md` | 46 | 2,578 | Compiled; safe update mode flagged the new `CI_TRIGGER_TOKEN` secret and asked for `--approve` |
| `ci-coach.md` | 59 | 2,449 | Compiled |
| `deployment-incident-monitor.md` | 58 | 2,401 | Compiled |
| `release-notes.md` | 33 | 2,365 | Compiled |

For `ci-doctor.lock.yml`:

- Jobs: `workflow_run` trigger, `pre_activation`, `activation`, `agent`, `detection`, `safe_outputs`, `conclusion`.
- `agent` permissions: `actions: read`, `contents: read`, `issues: read`, `pull-requests: read`.
- `detection` permissions: `contents: read`.
- `safe_outputs` permissions: `issues: write`, `pull-requests: write`; `needs: [activation, agent, detection]` and `if: ... needs.detection.result == 'success'`.
- The compiler also generated `agentics-maintenance.yml` because the workflows use `expires`.

The compile run did not execute any workflow, call a model, or consume AI credits. No run output other than `github/gh-aw#14295` is claimed.

## 5. Claims register

| Claim | Type | Source |
|---|---|---|
| GA on October 28, 2026 for Free, Team, Enterprise on github.com | Sourced | GA changelog |
| 65 → 2,426 lines for `ci-doctor` | Observed | Compile run above |
| Agent job read-only; writes in `safe_outputs` after detection succeeds | Observed | `ci-doctor.lock.yml` |
| Default guardrails: 1,000 AIC per run, 5,000 per workflow per day; 1 AIC = $0.01 | Sourced | Cost management reference |
| Default roles `admin`, `maintainer`, `write` | Sourced | Triggers reference |
| `min-integrity` default `approved` for public repositories, none for private | Sourced | Integrity reference |
| Protected files include `.github/`, manifests, lockfiles, `AGENTS.md`, `CODEOWNERS` | Sourced | Safe outputs: pull requests |
| `GITHUB_TOKEN`-created PRs do not trigger CI by default; three token options | Sourced | Triggering CI reference |
| Required reviewers: up to six; private repositories need Enterprise on Free/Pro/Team plans | Sourced | GitHub Docs (search excerpt) |
| `github/gh-aw#14295` reported nondeterministic map iteration | Sourced | gh-aw gallery page |
| Safe outputs bound actions and do not prove diagnoses correct | Design statement | Architecture reference; authors' framing |
| The six-layer walk-through for a planted log instruction | Design walk-through, not a test | Architecture reference |

## 6. Independent critique (cross-model review of the structural proposal)

Findings and how the talk responds:

1. **Timing summed to 45 minutes.** Re-planned to 42:00 including 2:00 discussion; every slide has a duration and cumulative time in its speaker notes and the talk track.
2. **`deployment_status` may not fire for Actions-native deployments.** The CD example uses `workflow_run` on the Deploy workflow. `deployment_status` appears as the trigger for deployments reported by external systems.
3. **`environment: production` does not configure reviewers by itself.** Slide 14 names required reviewers, deployment branches, the federated credential subject, and the plan prerequisite.
4. **Defaults guide behavior and review enforces it.** Slide 22 states precedence (frontmatter first) and lists CODEOWNERS, required review, Require lockfile, and safe update mode as enforcement.
5. **CI-token claim.** The talk presents the gh-aw documentation and notes GitHub's approval-required runs for some events; it recommends the narrowest credential.
6. **Make the threat concrete.** Slide 19 walks a planted log instruction through six layers and states what remains: correctness of the diagnosis.
7. **Authority clarity.** Slide 17 distinguishes proposing, executing, and approving, and labels a branch push as a real write.
8. **Reproducible try path.** Slide 24 and the README give the `add-wizard` → `compile` → `trial` → `run` → `logs --adoption` sequence.
9. **Observed anchor.** The anchor uses the observed 65 → 2,426 figures with the compiler commit.
10. **Cost.** Slide 23 pairs Actions minutes with inference and notes the per-workflow nature of the daily default.

## 7. Open items

- Re-verify the `github.blog` and Microsoft Learn URLs from a network that can reach them; the authoring environment verified them through search excerpts only.
- Re-run `gh aw compile --strict` against the latest release before presenting, since line counts and job names can change between releases.
- If your organization uses GHES, data residency, self-hosted, or ARC runners, check the applicability summary before piloting.
