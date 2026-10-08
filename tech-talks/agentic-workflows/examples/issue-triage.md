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
