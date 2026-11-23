---
description: |
  Drafts release notes when a release is published. The draft arrives as an
  issue for human review before anything is published elsewhere. Adapted from
  the release-notes sample in the GitHub Agentic Workflows gallery.

on:
  release:
    types: [published]

permissions:
  contents: read
  pull-requests: read
  issues: read

safe-outputs:
  create-issue:
    title-prefix: "[release-notes] "
    labels: [release-notes]
    close-older-issues: true

timeout-minutes: 15
---

# Release Notes Generator

Draft notes for release `${{ github.event.release.tag_name }}`.

Summarize the merged pull requests since the previous release: user-visible
changes, fixes, deprecations, and any upgrade or rollback notes. Link each
item to its pull request. Create one issue that contains the draft and a short
checklist for the human reviewer: breaking changes confirmed, migration notes
verified, links checked.
