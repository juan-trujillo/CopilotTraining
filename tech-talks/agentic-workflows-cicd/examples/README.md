# Examples

Workflow sources that back the talk. Each Markdown file compiles with `gh aw compile --validate --strict`. They were compiled with a `gh-aw` build from `main` at commit `dbcd971` on November 23, 2026; no workflow was executed and no model was called.

| File | Pattern | Write authority |
|---|---|---|
| [ci-doctor.md](ci-doctor.md) | `workflow_run` on a failed CI run | One issue and one comment |
| [pr-fix.md](pr-fix.md) | `/pr-fix` slash command | A push to the PR branch, after a maintainer asks |
| [ci-coach.md](ci-coach.md) | Weekday schedule with a deterministic capacity check | A draft PR, or a review issue for protected files |
| [deployment-incident-monitor.md](deployment-incident-monitor.md) | `workflow_run` on a failed Deploy workflow | One deduplicated incident issue |
| [release-notes.md](release-notes.md) | `release: published` | One draft issue for human review |
| [deploy.yml](deploy.yml) | Standard Actions deployment with OIDC and an environment | Deployment, gated by the environment's protection rules |
| [defaults.yml](defaults.yml) | `gh aw env` baseline | Organization defaults for credits and timeouts |

`ci-doctor.md`, `pr-fix.md`, and `ci-coach.md` are adapted from the MIT-licensed [githubnext/agentics](https://github.com/githubnext/agentics) samples. `deployment-incident-monitor.md` is adapted from the workflow of the same name in [github/gh-aw](https://github.com/github/gh-aw).

## Try one

```bash
gh extension install github/gh-aw
mkdir -p .github/workflows && cp ci-doctor.md .github/workflows/
# Change workflows: ["CI"] to your pipeline's name, then:
gh aw compile --strict
```

Open `.github/workflows/ci-doctor.lock.yml` and compare the permissions of the `agent` job with those of the `safe_outputs` job. To preview writes before they happen, add `staged: true` under `safe-outputs:`.

## Before you enable a workflow

- Review its trigger, engine authentication, tools, network access, permissions, and safe outputs.
- The engine's data handling applies to logs and repository content the agent reads.
- `pr-fix.md` references a `CI_TRIGGER_TOKEN` secret. Create a fine-grained PAT or use a GitHub App as described in [Triggering CI](https://github.github.com/gh-aw/reference/triggering-ci/), or remove that line.
- `deploy.yml` assumes an `environment: production` with required reviewers and a Microsoft Entra federated credential scoped to that environment. Replace `./scripts/deploy.sh` with your deployment step.
