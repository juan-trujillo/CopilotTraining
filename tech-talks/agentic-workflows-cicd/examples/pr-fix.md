---
description: |
  On-demand repair of a pull request with failing checks. A maintainer comments
  /pr-fix; the agent reads the failing logs and requests a push to the PR branch.
  Adapted from the PR Fix sample in githubnext/agentics (MIT).

on:
  slash_command:
    name: pr-fix                 # maintainers with write access can invoke it
  reaction: "eyes"

permissions: read-all

network: defaults

tools:
  bash: true
  github:
    min-integrity: none          # a maintainer chose this PR, so any author is in scope

safe-outputs:
  push-to-pull-request-branch:
    github-token-for-extra-empty-commit: ${{ secrets.CI_TRIGGER_TOKEN }}
  add-comment:
    max: 1

timeout-minutes: 20
---

# PR Fix

Fix the failing checks on pull request #${{ github.event.issue.number }} in
${{ github.repository }}.

Maintainer instructions, if any: "${{ steps.sanitized.outputs.text }}"

1. Read the pull request, its discussion, and the logs of each failing check.
2. Identify the root cause. Prefer the smallest change that fixes it.
3. Check out the PR branch, make the change, and run the repository's tests,
   formatter, and linter.
4. If the checks you ran now pass, request a push to the PR branch. If you
   cannot reach a passing state, push nothing and explain what blocked you.
5. Add one comment that lists what you changed and the evidence that it works.

Never edit files under `.github/`, dependency manifests, or lockfiles; those
paths are protected and need a human change.
