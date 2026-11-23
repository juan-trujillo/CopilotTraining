---
description: |
  Weekday CI optimization coach. Analyzes recent workflow runs and proposes one
  focused draft pull request. A deterministic pre-check caps open proposals so
  the agent runs only when review capacity exists. Adapted from the CI Coach
  sample in githubnext/agentics (MIT).

on:
  schedule: daily on weekdays
  workflow_dispatch:
  permissions:
    pull-requests: read
  steps:
    - id: capacity
      env:
        GH_TOKEN: ${{ github.token }}
      run: |
        COUNT=$(gh pr list --repo "$GITHUB_REPOSITORY" --state open \
          --search 'in:title "[ci-coach]"' --json number --jq 'length')
        [[ "$COUNT" -lt 3 ]]     # exit 1 (skip the agent) at 3 open proposals

if: needs.pre_activation.outputs.capacity_result == 'success'

permissions: read-all

network:
  allowed: [defaults, node]

max-ai-credits: 500              # hard stop for one run (1 AIC = $0.01)

tools:
  github:
    toolsets: [default]
  bash: true

safe-outputs:
  create-pull-request:
    draft: true
    title-prefix: "[ci-coach] "
    expires: 2d
    protected-files: fallback-to-issue   # CI files become a review issue, not a PR

timeout-minutes: 30
---

# CI Optimization Coach

Analyze the last 30 days of runs of `.github/workflows/ci.yml` and find the one
change with the best savings in minutes or cost: caching, parallelism, redundant
jobs, or path filters.

1. Use `gh run list` and `gh run view` to collect duration and failure data.
2. Choose one change and estimate the savings from the data you collected.
3. Edit the files, run the project's validation commands, and open a draft pull
   request that shows the data, the change, and the expected savings.
4. If CI is already efficient, call `noop` with a one-line reason.

Never change tests to hide a failure. Workflow files under `.github/` are
protected, so a proposal that touches them arrives as a review issue.
