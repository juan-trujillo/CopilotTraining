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
