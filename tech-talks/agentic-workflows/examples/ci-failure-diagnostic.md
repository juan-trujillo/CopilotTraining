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
