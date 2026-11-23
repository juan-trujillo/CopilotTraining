---
theme: default
addons:
  - "@/addons/github-copilot"
colorSchema: dark
class: gh-copilot-brand text-center
defaults:
  class: gh-copilot-brand
highlighter: shiki
lineNumbers: false
fonts:
  sans: Mona Sans
  mono: Mona Sans Mono
  local: Mona Sans,Mona Sans Mono
info: |
  ## Agentic Workflows for CI/CD
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: "Agentic Workflows for CI/CD: Agents Investigate, the Pipeline Decides"
module: tech-talks/agentic-workflows-cicd
mdc: true
section: Delegate and Coordinate
status: active
updated: 2026-11-23
---

<script setup>
import TitleSlide from './components/structure/TitleSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import GitHubBrandMark from './components/GitHubBrandMark.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
import MaturityJourneyRoadmapSlide from './components/MaturityJourneyRoadmapSlide.vue'
import { isDark } from './components/useTheme'
import githubLogoWhite from '../assets/brand/github/GitHub_Invertocat_White_Clearspace.svg'
import githubLogoBlack from '../assets/brand/github/GitHub_Invertocat_Black_Clearspace.svg'
</script>

<!-- SLIDE: Title -->
# Agentic Workflows for CI/CD
<TitleSlide
  title="Agentic Workflows for CI/CD"
  subtitle="Agents Investigate, the Pipeline Decides"
  tagline="Read-only agents, gated outputs, and human-owned deployments"
  meta="GitHub Agentic Workflows · 42 minutes · Developer Leads and GitHub admins · November 23, 2026"
>
  <template #logo>
    <img :src="isDark ? githubLogoWhite : githubLogoBlack" class="sv-title-logo" alt="GitHub" />
  </template>
</TitleSlide>

<!--
Duration: 0:30. Cumulative: 0:30.
Audience question: What will this talk help me decide?
Actor: the presenter frames the decision for a Developer Lead and a GitHub admin.
Open with the decision: which CI/CD judgments get an agent, and what may that agent write?
GitHub Agentic Workflows has been generally available since October 28, 2026 (GitHub Universe).
Talk track: tech-talks/agentic-workflows-cicd/talktrack.md
Source: https://github.github.com/gh-aw/introduction/overview/
-->

---

<!-- SLIDE: Core Question -->
# Core Question
<CoreQuestionSlide
  question="Which CI/CD judgments get an agent, and what may that agent write?"
  subtext="Put reasoning where a human reads logs, and keep every write narrow, reviewable, and human-gated."
  highlight="Read-only agents. Gated outputs. Human-owned deploys."
  :cards='[
    {icon: "🧑‍💻", title: "Developer Leads", description: "Turn red builds into evidence-backed issues and reviewed fixes."},
    {icon: "🛡️", title: "GitHub admins", description: "Set guardrails, defaults, and budgets that you can inspect."},
    {icon: "🚦", title: "Release owners", description: "Observe deployments while environment reviewers hold the gate."},
    {title: "GA on Oct 28, 2026", description: "Free, Team, and Enterprise on github.com."},
    {title: "65 → 2,426 lines", description: "ci-doctor.md to its lock file (observed, gh-aw main)."},
    {title: "1,000 / 5,000 AIC", description: "Default per-run and per-workflow daily credit limits."}
  ]'
/>

<!--
Duration: 0:45. Cumulative: 1:15.
Audience question: Who is this for, and what will I be able to do?
The top cards name the audience. The bottom cards are sourced or observed facts:
GA date (GitHub changelog), compile line counts (observed with gh-aw main at dbcd971 on 2026-11-23),
and the default guardrails (gh-aw cost-management reference). 1 AI Credit = $0.01.
Sources: https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/
https://github.github.com/gh-aw/reference/cost-management/
-->

---

<!-- SLIDE: Table of Contents -->
# Table of Contents
<TocSlide
  :sections='[
    {icon: "🧬", title: "Anatomy", subtitle: "Markdown in, hardened Actions out", blurb: "Compile a workflow and read the permission split.", slide: 4},
    {icon: "🔁", title: "CI", subtitle: "From red build to reviewed fix", blurb: "CI Doctor, PR Fix, and CI Coach with real code.", slide: 8},
    {icon: "🚀", title: "CD", subtitle: "Observe the release, own the gate", blurb: "Environments hold approval; agents report.", slide: 13},
    {icon: "🛠️", title: "Operate", subtitle: "Trust, govern, measure", blurb: "Layers, staged mode, defaults, and a rollout ladder.", slide: 18}
  ]'
/>

<!--
Duration: 0:30. Cumulative: 1:45.
Audience question: How is the hour organized?
Anatomy (7 min) → CI (10 min) → CD (8 min) → Operate (11.5 min) → close and discussion (3.5 min).
Each part adds authority: the mechanism, then examples that write an issue, a branch push, and a draft PR,
then the deployment boundary, then the operating model.
-->

---

<!-- SLIDE: Part 1 — Anatomy -->
# Part 1 — Anatomy
<SectionOpenerSlide
  :partNumber="1"
  title="Anatomy of an Agentic Workflow"
  subtitle="A Markdown file compiles to an Actions workflow with a read-only agent."
  :cards='[
    {icon: "📝", title: "Write", blurb: "Frontmatter plus instructions."},
    {icon: "⚙️", title: "Compile", blurb: "gh aw compile writes the lock file."},
    {icon: "🔍", title: "Review", blurb: "Read permissions beside write permissions."}
  ]'
  :terminal='{context: "ci-doctor.md: 65 lines. ci-doctor.lock.yml: 2,426 lines.", detail: "agent: read · safe_outputs: write"}'
/>

<!--
Duration: 0:15. Cumulative: 2:00.
Audience question: What is an agentic workflow made of?
The anchor for the talk lands in this section: the compiled lock file splits reading from writing.
Source: https://github.github.com/gh-aw/introduction/how-they-work/
-->

---

<!-- SLIDE: Markdown in, Actions out -->
# Markdown in, Actions out
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="📝"
  pillLabel="Anatomy · The source file"
  title="A workflow is frontmatter plus instructions"
  codePosition="left"
  :code='{language: "markdown", filename: ".github/workflows/issue-clarifier.md", content: "&#45;&#45;&#45;\non:\n  issues:\n    types: [opened]\npermissions: read-all\nsafe-outputs:\n  add-comment:\n&#45;&#45;&#45;\n\n# Issue Clarifier\n\nAnalyze the current issue and ask for\nadditional details if the issue is unclear."}'
  :features='[
    {icon: "🧭", title: "Frontmatter", description: "Trigger, permissions, and the one write the agent may request."},
    {icon: "💬", title: "Instructions", description: "Natural-language body that the engine reads at run time."},
    {icon: "🔒", title: "Lock file", description: "gh aw compile writes a .lock.yml. Commit and review both files."}
  ]'
  :insight='{icon: "🎯", text: "You write the intent. The compiler generates the job. GitHub Actions runs it."}'
  :progressDots='{current: 1, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50"}'
/>

<!--
Duration: 2:15. Cumulative: 4:15.
Audience question: What do I actually write?
Actor: the practitioner writes Markdown; the compiler (gh aw compile) generates the Actions workflow; GitHub Actions runs it.
Walk the three parts: trigger (issues opened), permissions (read-all), the single allowed write (add-comment).
Engines: GitHub Copilot (default), Claude Code, OpenAI Codex, Google Gemini, Pi.
Copilot authenticates with copilot-requests: write (organization billing) or a COPILOT_GITHUB_TOKEN secret.
Sources: https://github.github.com/gh-aw/introduction/overview/
https://github.github.com/gh-aw/introduction/how-they-work/
-->

---

<!-- SLIDE: Standard Actions run the pipeline agents read it -->
# Standard Actions run the pipeline agents read it
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🧩"
  pillLabel="Anatomy · Where agents fit"
  title="Actions run the pipeline. Agents read and report on it."
  :left='{header: "Keep in standard Actions", icon: "⚙️", items: [
    {title: "Build, test, lint", detail: "Identical inputs give predictable steps and outputs."},
    {title: "Package, sign, publish", detail: "Deterministic and reproducible."},
    {title: "Deploy to an environment", detail: "Approval gates and OIDC stay in the workflow."},
    {title: "Fixed-rule policy checks", detail: "One right answer needs no reasoning."}
  ]}'
  :right='{header: "Add an agentic workflow", icon: "🧠", items: [
    {title: "Investigate a failed run", detail: "Read logs, classify, and correlate with changes."},
    {title: "Draft release notes", detail: "Summarize merged pull requests for a human."},
    {title: "Open an incident issue", detail: "Gather evidence for the on-call engineer."},
    {title: "Propose a CI optimization", detail: "A draft PR from the run history."}
  ]}'
  :insight='{icon: "🔗", text: "Agentic workflows run on Actions and can include deterministic steps. They complement CI/CD."}'
  :progressDots='{current: 2, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50"}'
/>

<!--
Duration: 1:45. Cumulative: 6:00.
Audience question: Which CI/CD work belongs to an agent?
Draw the line by the nature of the task. Build, test, lint, package, deploy stay deterministic.
Investigation, triage, review, summarization, and drafting use reasoning.
The Actions runner, logs, and policies remain the control plane, so admins keep the controls they already use.
Cost guidance from gh-aw: if deterministic tools can solve a task, use them, and gate the agent on their result.
Sources: https://github.github.com/gh-aw/introduction/how-they-work/
https://github.github.com/gh-aw/reference/cost-management/
-->

---

<!-- SLIDE: Compile and review the lock file -->
# Compile and review the lock file
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="🔍"
  pillLabel="Anatomy · The permission split"
  title="The agent job reads. The safe_outputs job writes."
  codePosition="left"
  :code='{language: "yaml", filename: "ci-doctor.lock.yml (excerpt)", content: "agent:\n  permissions:\n    actions: read\n    contents: read\n    issues: read\n    pull-requests: read\ndetection:\n  permissions: { contents: read }\nsafe_outputs:\n  needs: [activation, agent, detection]\n  if: needs.detection.result == &#39;success&#39;\n  permissions:\n    issues: write\n    pull-requests: write"}'
  :features='[
    {icon: "📏", title: "65 → 2,426 lines", description: "Observed with gh-aw main. Six jobs, with writes in one."},
    {icon: "✅", title: "Writes wait for detection", description: "safe_outputs runs only after the detection job succeeds."},
    {icon: "🔐", title: "Safe update mode", description: "A new secret or action in a lock file needs gh aw compile --approve."}
  ]'
  :insight='{icon: "⌨️", text: "gh aw compile --strict  ·  --zizmor adds a security scan  ·  failure signal: compile errors or lock drift."}'
  :progressDots='{current: 3, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50"}'
/>

<!--
Duration: 2:45. Cumulative: 8:45.
Audience question: What do I review in the pull request, and what proves the agent cannot write?
Actor: the compiler generates six jobs (pre_activation, activation, agent, detection, safe_outputs, conclusion).
The agent job holds read permissions. The safe_outputs job holds issues: write and pull-requests: write and runs
only when the detection job succeeds. This excerpt is from compiling examples/ci-doctor.md with the gh-aw main
build at commit dbcd971 on 2026-11-23. Compilation pins actions to commit SHAs and validates expressions.
Safe update mode: when a workflow already has a lock file, a newly added secret or action needs explicit approval.
Recovery: the lock file is generated output. Fix the Markdown and recompile; never edit the lock by hand.
Sources: https://github.github.com/gh-aw/introduction/architecture/
https://github.github.com/gh-aw/setup/cli/
-->

---

<!-- SLIDE: Part 2 — CI -->
# Part 2 — CI
<SectionOpenerSlide
  :partNumber="2"
  title="CI: From Red Build to Reviewed Fix"
  subtitle="Three agents, each with a bigger write and a named reviewer."
  :cards='[
    {icon: "🏥", title: "CI Doctor", blurb: "A failed run becomes one issue."},
    {icon: "🔧", title: "PR Fix", blurb: "A maintainer asks for a repair."},
    {icon: "🚀", title: "CI Coach", blurb: "One optimization as a draft PR."}
  ]'
  :terminal='{context: "Authority grows: issue, then branch push, then draft PR.", detail: "Each write has an owner."}'
/>

<!--
Duration: 0:15. Cumulative: 9:00.
Audience question: How do agents help when CI fails or drifts?
Escalate the write authority on purpose so the audience sees how the controls change with it.
Source: https://github.com/githubnext/agentics
-->

---

<!-- SLIDE: CI Doctor starts when CI fails -->
# CI Doctor starts when CI fails
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="🏥"
  pillLabel="CI · CI Doctor"
  title="CI Doctor reads a failed run and writes one issue"
  codePosition="left"
  :code='{language: "yaml", filename: "ci-doctor.md (frontmatter)", content: "on:\n  workflow_run:\n    workflows: [\u0022CI\u0022]\n    types: [completed]\n    branches: [main]\nif: github.event.workflow_run.conclusion == &#39;failure&#39;\npermissions:\n  actions: read\n  contents: read\n  issues: read\n  pull-requests: read\nsafe-outputs:\n  create-issue:\n    title-prefix: \u0022[CI failure] \u0022\n    max: 1\n  add-comment:\n    max: 1"}'
  :features='[
    {icon: "🎯", title: "Trigger", description: "workflow_run fires when CI completes. The compiler adds repository and fork checks."},
    {icon: "🔒", title: "Read scope", description: "The agent job reads Actions, contents, issues, and pull requests."},
    {icon: "✍️", title: "One write", description: "safe_outputs creates at most one issue and one comment per run."}
  ]'
  :progressDots='{current: 1, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50"}'
/>

<!--
Duration: 2:15. Cumulative: 11:15.
Audience question: How do I wire an agent to my CI workflow?
Actor: the deterministic CI workflow fails; workflow_run starts CI Doctor; the read-only agent investigates;
the safe_outputs job opens the issue.
Change workflows: ["CI"] to the name of your pipeline. Run gh aw compile and commit the .md and .lock.yml together.
The full file is tech-talks/agentic-workflows-cicd/examples/ci-doctor.md (adapted from githubnext/agentics, MIT).
Sources: https://github.com/githubnext/agentics/blob/main/workflows/ci-doctor.md
https://github.github.com/gh-aw/reference/triggers/
-->

---

<!-- SLIDE: The protocol and a real report -->
# The protocol and a real report
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🧪"
  pillLabel="CI · Protocol and evidence"
  title="The Markdown protocol produces a diagnosis you can verify"
  :left='{header: "Protocol in the Markdown body", icon: "📋", items: [
    {title: "Earliest failed job first", detail: "Find the first real error before the follow-on errors."},
    {title: "Classify the failure", detail: "Code, dependency, config, runner, flaky, or external."},
    {title: "Correlate with the head SHA", detail: "Compare changes; search open issues for the error."},
    {title: "State confidence, then deduplicate", detail: "High, medium, or low. Comment on an open issue; noop if nothing is new."}
  ]}'
  :right='{header: "Sourced example: github/gh-aw#14295", icon: "🔎", items: [
    {title: "Failing assertion", detail: "A Go test compared an engine list in unstable order."},
    {title: "Likely cause", detail: "Nondeterministic map iteration."},
    {title: "Evidence", detail: "The report names the failed job and links the run."},
    {title: "Suggested fix", detail: "Sort and format the engine list deterministically."}
  ]}'
  :insight='{icon: "🧐", text: "The issue is a proposal with log evidence. A developer verifies it before acting."}'
  :progressDots='{current: 2, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50"}'
/>

<!--
Duration: 2:45. Cumulative: 14:00.
Audience question: How do I know the diagnosis is worth trusting?
Left: the investigation protocol in the Markdown body. Right: the sourced example. In github/gh-aw#14295 a CI Doctor
run reported nondeterministic Go map iteration as the likely cause of a failing assertion; GitHub presents it as the gallery
example. This is a sourced example, not a measurement of accuracy.
The failure signal is a diagnosis without log lines or a confidence level that is always high. The recovery is to tighten the
protocol in the Markdown, recompile, and inspect the run with gh aw audit RUN_ID.
Log text is untrusted input; Part 4 walks through what contains a planted instruction.
Sources: https://github.com/github/gh-aw/issues/14295
https://github.github.com/gh-aw/gallery/ci-failure-investigation/
-->

---

<!-- SLIDE: PR Fix repairs on command -->
# PR Fix repairs on command
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="🔧"
  pillLabel="CI · PR Fix"
  title="A maintainer comments /pr-fix. The agent requests a push."
  codePosition="left"
  :code='{language: "yaml", filename: "pr-fix.md (frontmatter)", content: "on:\n  slash_command:\n    name: pr-fix\n  reaction: \u0022eyes\u0022\npermissions: read-all\ntools:\n  github:\n    min-integrity: none\nsafe-outputs:\n  push-to-pull-request-branch:\n    github-token-for-extra-empty-commit:\n      ${{ secrets.CI_TRIGGER_TOKEN }}\n  add-comment:\n    max: 1"}'
  :features='[
    {icon: "✍️", title: "A real write", description: "A commit lands on the PR branch, so a maintainer with write access invokes it."},
    {icon: "🔁", title: "CI on the new commit", description: "GITHUB_TOKEN pushes skip CI. A PAT or App empty commit starts the checks."},
    {icon: "🛡️", title: "Protected files", description: "Edits to .github/, manifests, and lockfiles trigger a human review request."}
  ]'
  :progressDots='{current: 3, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50"}'
/>

<!--
Duration: 2:30. Cumulative: 16:30.
Audience question: How does an agent fix a PR without owning the branch?
Actor: a maintainer comments /pr-fix (default roles: admin, maintainer, write); the read-only agent reads the failing logs,
edits, and runs the repository checks; the safe_outputs job pushes to the PR branch.
min-integrity: none is acceptable here because a maintainer chose this PR.
CI trigger options (gh-aw Triggering CI reference): extra empty commit with a fine-grained PAT (Contents read/write on the
target repositories), extra empty commit with a GitHub App (preferred for organizations), or a full github-token override
(changes the PR author and grants broader access). GitHub documentation also describes approval-required runs for some
PR events created with GITHUB_TOKEN. Choose the narrowest credential that makes required checks run, then confirm the run actor.
Sources: https://github.github.com/gh-aw/reference/triggering-ci/
https://github.com/githubnext/agentics/blob/main/workflows/pr-fix.md
-->

---

<!-- SLIDE: CI Coach proposes one optimization -->
# CI Coach proposes one optimization
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="🚀"
  pillLabel="CI · CI Coach"
  title="A deterministic check gates the agent. The output is a draft PR."
  codePosition="left"
  :code='{language: "yaml", filename: "ci-coach.md (frontmatter)", content: "on:\n  schedule: daily on weekdays\n  steps:\n    - id: capacity\n      run: |\n        # count open [ci-coach] PRs\n        [[ \u0022$COUNT\u0022 -lt 3 ]]\nif: needs.pre_activation.outputs\n  .capacity_result == &#39;success&#39;\nmax-ai-credits: 500\nsafe-outputs:\n  create-pull-request:\n    draft: true\n    expires: 2d\n    protected-files: fallback-to-issue"}'
  :features='[
    {icon: "🔢", title: "Review capacity gates spend", description: "The bash check exits 1 at three open proposals, so the agent never starts."},
    {icon: "💳", title: "Hard credit stop", description: "max-ai-credits: 500 caps one run (1 AIC = $0.01)."},
    {icon: "📁", title: "CI files go to a human", description: "fallback-to-issue turns a .github/ change into a review issue."}
  ]'
  :progressDots='{current: 4, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50"}'
/>

<!--
Duration: 2:15. Cumulative: 18:45.
Audience question: How do I run a scheduled agent without a flood of PRs or a surprise bill?
Actor: a schedule starts the workflow; a deterministic bash step counts open [ci-coach] PRs; the agent runs only below the cap;
the safe_outputs job opens a draft PR that expires after two days.
This is the deterministic-first pattern: run cheap checks, then gate the agent on their result.
fallback-to-issue: when a proposal touches protected files such as .github/, the change is delivered as a review issue.
Never change tests to hide a failure is written into the workflow body.
Sources: https://github.github.com/gh-aw/reference/cost-management/
https://github.github.com/gh-aw/reference/safe-outputs-pull-requests/
-->

---

<!-- SLIDE: Part 3 — CD -->
# Part 3 — CD
<SectionOpenerSlide
  :partNumber="3"
  title="CD: Observe the Release, Own the Gate"
  subtitle="The deployment stays deterministic. Agents gather evidence and draft."
  :cards='[
    {icon: "🚦", title: "Gate", blurb: "Environments hold approval."},
    {icon: "🚨", title: "Observe", blurb: "A failed deploy becomes an incident."},
    {icon: "📝", title: "Draft", blurb: "Release notes await a human."}
  ]'
  :terminal='{context: "No agent in this talk holds a deployment credential.", detail: "agents read · environments approve"}'
/>

<!--
Duration: 0:15. Cumulative: 19:00.
Audience question: Where do agents belong around a deployment?
They observe and draft. The environment's protection rules and OIDC trust stay the authority.
Source: https://docs.github.com/actions/reference/deployments-and-environments
-->

---

<!-- SLIDE: The deploy stays deterministic -->
# The deploy stays deterministic
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="🚦"
  pillLabel="CD · The gate"
  title="The environment holds the gate. OIDC holds the credential."
  codePosition="left"
  :code='{language: "yaml", filename: "deploy.yml (excerpt)", content: "jobs:\n  deploy:\n    runs-on: ubuntu-latest\n    environment: production\n    permissions:\n      id-token: write\n      contents: read\n    steps:\n      - uses: azure/login@v2\n        with:\n          client-id: ${{ secrets.AZURE_CLIENT_ID }}\n          tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n          # subscription-id: same pattern"}'
  :features='[
    {icon: "👥", title: "Required reviewers", description: "Up to six users or teams; one approval releases the job."},
    {icon: "🔑", title: "Environment-scoped OIDC", description: "A Microsoft Entra federated credential can trust only this environment."},
    {icon: "💳", title: "Plan prerequisite", description: "Required reviewers on private repositories need GitHub Enterprise."}
  ]'
  :insight='{icon: "🛡️", text: "environment: production names the gate. Protection rules in settings enforce it."}'
  :progressDots='{current: 1, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
/>

<!--
Duration: 2:15. Cumulative: 21:15.
Audience question: Who approves a production deployment when agents are in the pipeline?
Actor: the Deploy workflow runs the deployment; the environment's required reviewers approve; Microsoft Entra trusts the
workflow through a federated credential whose subject is the production environment.
Configure in repository settings: required reviewers (optional: prevent self-review), deployment branches limited to
protected branches, and the Entra federated credential for the environment. On GitHub Free, Pro, and Team, required reviewers
are limited to public repositories.
Microsoft Learn's Foundry hosted-agent quickstart uses the same pattern: GitHub Actions, azd, OIDC sign-in, and a smoke test.
Sources: https://docs.github.com/actions/reference/deployments-and-environments
https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect
https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/set-up-cicd-hosted-agent
-->

---

<!-- SLIDE: A failed deploy becomes an incident issue -->
# A failed deploy becomes an incident issue
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="🚨"
  pillLabel="CD · Incident monitor"
  title="The incident monitor reports. It never touches the environment."
  codePosition="left"
  :code='{language: "yaml", filename: "deployment-incident-monitor.md", content: "on:\n  workflow_run:\n    workflows: [\u0022Deploy\u0022]\n    types: [completed]\n  skip-if-match:\n    query: \u0022is:issue is:open label:deployment-failure\u0022\nif: github.event.workflow_run.conclusion == &#39;failure&#39;\nsafe-outputs:\n  create-issue:\n    title-prefix: \u0022[Incident] \u0022\n    labels: [incident, deployment-failure]\n    expires: 7d\n    close-older-issues: true\n  noop:"}'
  :features='[
    {icon: "🔕", title: "One open incident at a time", description: "skip-if-match skips the run while an incident issue is open."},
    {icon: "🧹", title: "Self-cleaning", description: "close-older-issues and expires retire stale reports."},
    {icon: "🔌", title: "External deploy tools", description: "Use deployment_status with state: [error, failure] for other systems."}
  ]'
  :progressDots='{current: 2, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
/>

<!--
Duration: 2:00. Cumulative: 23:15.
Audience question: What does the on-call engineer get when a deploy fails?
Actor: the Deploy workflow fails; workflow_run starts the monitor; the read-only agent reads the failed job log and the commits
since the last good deployment; the safe_outputs job opens one incident issue with a confidence level.
workflow_run fires for Actions-native deployments. github/gh-aw's own sample uses deployment_status with state: [error, failure];
use that trigger for deployments that an external system reports. The skip-if-match query uses the object form with a single label.
Failure signal: an incident issue with no evidence or an unsupported root cause. The workflow says what is unknown and calls noop
for duplicates.
Sources: https://github.com/github/gh-aw/blob/main/.github/workflows/deployment-incident-monitor.md
https://github.github.com/gh-aw/reference/triggers/
-->

---

<!-- SLIDE: Release notes are a draft for human review -->
# Release notes are a draft for human review
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="📝"
  pillLabel="CD · Release notes"
  title="On release published, the agent drafts. A human publishes."
  codePosition="left"
  :code='{language: "yaml", filename: "release-notes.md (frontmatter)", content: "on:\n  release:\n    types: [published]\npermissions:\n  contents: read\n  pull-requests: read\n  issues: read\nsafe-outputs:\n  create-issue:\n    title-prefix: \u0022[release-notes] \u0022\n    labels: [release-notes]\n    close-older-issues: true"}'
  :features='[
    {icon: "📝", title: "Draft, then review", description: "The agent summarizes merged PRs into one issue with a reviewer checklist."},
    {icon: "🔒", title: "Read scope", description: "contents, pull-requests, and issues are read-only. The one write is an issue."},
    {icon: "✅", title: "Checklist for the human", description: "Breaking changes confirmed, migration notes verified, links checked."}
  ]'
  :progressDots='{current: 3, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
/>

<!--
Duration: 1:15. Cumulative: 24:30.
Audience question: How do agents help with a release without publishing one?
Actor: a published release triggers the workflow; the read-only agent summarizes the merged pull requests since the previous
release; the safe_outputs job opens one draft issue; a human reviews and publishes elsewhere.
The pattern fits any recurring summary: the agent drafts, the human owns publication.
Source: https://github.github.com/gh-aw/gallery/ai-release-notes/
-->

---

<!-- SLIDE: Who proposes, executes, and approves -->
# Who proposes, executes, and approves
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="🗺️"
  pillLabel="CD · Authority map"
  title="Every action has a proposer, an executor, and an approver"
  :columns='[
    {icon: "🧠", title: "Agent proposes", description: "Read-only access. One typed request per output.", items: ["Diagnosis or incident → issue", "Fix → PR-branch push", "CI change → draft PR", "Release notes → draft issue"]},
    {icon: "⚙️", title: "Pipeline executes", description: "Scoped jobs with explicit permissions.", items: ["safe_outputs: scoped writes", "Detection must succeed first", "Deploy workflow: OIDC sign-in", "Staged mode previews writes"]},
    {icon: "✅", title: "Humans approve", description: "Named owners decide.", items: ["Developer or on-call: evidence", "Maintainer: runs /pr-fix", "Code owners: .github/ changes", "Environment reviewers: deploy"]}
  ]'
  :insight='{icon: "🔗", text: "Actions workflow lockfiles are GA (Oct 28): pin transitive actions and require them."}'
  :progressDots='{current: 4, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
/>

<!--
Duration: 2:15. Cumulative: 26:45.
Audience question: Who has authority over each CI/CD action?
Read left to right: the agent proposes with read-only access; scoped jobs execute; named humans approve.
Creating an issue is a proposal. A PR-branch push and closing older issues are real writes, which is why PR Fix needs a named
maintainer and the issue workflows cap the count. Production deployment keeps the environment's required reviewers as the gate.
Supply chain companion: GitHub Actions workflow lockfiles are GA. gh actions-lock writes .github/workflows/actions.lock,
Dependabot refreshes the matching entry in the same PR, and admins can require lockfiles at enterprise, organization, or
repository level. gh aw compile --actions-lock refreshes it for agentic workflows.
Sources: https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available/
https://github.github.com/gh-aw/introduction/architecture/
-->

---

<!-- SLIDE: Part 4 — Operate -->
# Part 4 — Operate
<SectionOpenerSlide
  :partNumber="4"
  title="Operate It: Trust, Govern, Measure"
  subtitle="Layered defenses, org defaults, and a rollout ladder grow autonomy with evidence."
  :cards='[
    {icon: "🛡️", title: "Trust", blurb: "Six layers bound what a run can do."},
    {icon: "🏛️", title: "Govern", blurb: "Defaults, review, and budgets."},
    {icon: "📊", title: "Measure", blurb: "Cost, forecast, and adoption."}
  ]'
  :terminal='{context: "Move up one rung at a time.", detail: "report-only → staged → shadow → direct writes"}'
/>

<!--
Duration: 0:15. Cumulative: 27:00.
Audience question: How do I run this safely across many repositories?
This section is for the GitHub admin: the layers, the controls, the defaults, the numbers, and the rollout path.
Source: https://github.github.com/gh-aw/introduction/architecture/
-->

---

<!-- SLIDE: Six layers bound a run -->
# Six layers bound a run
<FrameworkMappingRowsSlide
  :partNumber="4"
  pillIcon="🛡️"
  pillLabel="Operate · Defense in depth"
  title="Six layers contain a planted instruction in a build log"
  subtitle="Scenario: a failing test prints a line that tells the agent to open 50 issues."
  :rows='[
    {label: "Compile", description: "Pins actions to SHAs, validates expressions, runs optional scanners.", tag: "compile --strict"},
    {label: "Admission", description: "Checks the actor repository role before the agent starts.", tag: "on.roles"},
    {label: "Isolation", description: "Agent runs in a container; network is limited to an allowlist.", tag: "network:"},
    {label: "Integrity", description: "Drops GitHub content below the trust level before the agent reads it.", tag: "min-integrity"},
    {label: "Detection", description: "Scans output and patches for injection, secret leaks, malicious code.", tag: "detection job"},
    {label: "Safe outputs", description: "Typed, capped, sanitized writes by a separate job.", tag: "max: 1"}
  ]'
  footnote="Layers bound what a misled agent can write. The issue evidence lets a human verify the diagnosis."
  :progressDots='{current: 1, total: 8, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50"}'
/>

<!--
Duration: 2:00. Cumulative: 29:00.
Audience question: What limits the damage if a build log contains a planted instruction?
Actor: a pull request author controls text in the test output; the agent reads it as data.
This is a design walk-through, not a recorded test. With the layers above, the agent job has no write permission, reaches only
allowlisted domains, can request at most one issue with a fixed title prefix, and its output passes detection and sanitization
before the safe_outputs job writes. What remains: safe outputs bound actions; they do not prove the diagnosis is correct.
That is why the issue carries a confidence level and log evidence.
Custom jobs, direct write permissions, and relaxed controls (strict: false, disabled sandbox or detection) are separate trust
boundaries: review them as changes to the trust model.
Sources: https://github.github.com/gh-aw/introduction/architecture/
https://github.github.com/gh-aw/reference/threat-detection/
https://github.github.com/gh-aw/reference/integrity/
-->

---

<!-- SLIDE: Staged mode and protected files -->
# Staged mode and protected files
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="🎭"
  pillLabel="Operate · Safe outputs"
  title="Preview every write. Route supply-chain files to a human."
  codePosition="left"
  :code='{language: "yaml", filename: "safe-outputs (excerpt)", content: "safe-outputs:\n  staged: true        # preview every write\n  create-pull-request:\n    draft: true\n    protected-files: fallback-to-issue\n  push-to-pull-request-branch:\n  add-comment:\n    max: 1\n\n# step summary shows each preview:\n# 🎭 Staged Mode: Issue Creation Preview"}'
  :features='[
    {icon: "🎭", title: "Staged mode", description: "Each issue, comment, or PR appears as a preview in the step summary."},
    {icon: "📁", title: "Protected files", description: "Manifests, lockfiles, AGENTS.md, .github/, and CODEOWNERS need a human."},
    {icon: "🔢", title: "Typed and capped", description: "max, title-prefix, labels, and expires apply to each output type."}
  ]'
  :insight='{icon: "💡", text: "Global staged: true puts every type in preview. A type-level staged: false cannot lift it."}'
  :progressDots='{current: 2, total: 8, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50"}'
/>

<!--
Duration: 2:00. Cumulative: 31:00.
Audience question: How do I see what the agent would write before it writes?
Actor: the agent requests outputs; staged mode replaces each built-in write with a preview in the step summary.
Staging is not a sandbox: custom jobs, scripts, external MCP servers, custom credentials, and memory persistence need their own
controls.
Protected files: create-pull-request, push-to-pull-request-branch, and merge-pull-request enforce the protected set by default.
create-pull-request and push default to request-review; fallback-to-issue and blocked are available; merge-pull-request blocks by
default and adds a caution veto after threat-detection warnings.
Sources: https://github.github.com/gh-aw/reference/staged-mode/
https://github.github.com/gh-aw/reference/safe-outputs-pull-requests/
-->

---

<!-- SLIDE: Guardrails in the frontmatter -->
# Guardrails in the frontmatter
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="🧱"
  pillLabel="Operate · Guardrails"
  title="Network, integrity, credits, and roles are one-line decisions"
  codePosition="left"
  :code='{language: "yaml", filename: "frontmatter guardrails", content: "network:\n  allowed: [defaults, node]   # firewall\ntools:\n  github:\n    min-integrity: approved  # trust floor\nmax-ai-credits: 500          # per-run stop\ntimeout-minutes: 20\non:\n  roles: [admin, maintainer, write]\n\n# defaults when unset:\n#   1,000 AIC per run\n#   5,000 AIC per workflow per day"}'
  :features='[
    {icon: "🌐", title: "Network allowlist", description: "The firewall limits the agent container to approved domains."},
    {icon: "🧾", title: "Integrity levels", description: "merged, approved, unapproved, none. Public repositories default to approved."},
    {icon: "💳", title: "Credit defaults", description: "1,000 AIC per run and 5,000 per workflow per day. 1 AIC = $0.01."}
  ]'
  :progressDots='{current: 3, total: 8, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50"}'
/>

<!--
Duration: 1:15. Cumulative: 32:15.
Audience question: Which limits can I set per workflow?
Integrity filtering is based on author association and merge status; the MCP gateway removes content below the minimum before the
agent reads it. Roles default to admin, maintainer, and write.
Default guardrails: 20-minute agentic step, 60-minute agent job, 10-minute detection job, 1,000 AIC per run, and 5,000 AIC per
workflow per 24 hours. These are per-workflow defaults. They are not an enterprise spend ceiling.
Sources: https://github.github.com/gh-aw/reference/integrity/
https://github.github.com/gh-aw/reference/cost-management/
-->

---

<!-- SLIDE: Govern with defaults and review -->
# Govern with defaults and review
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="🏛️"
  pillLabel="Operate · Governance"
  title="Defaults set the baseline. Review and policy enforce it."
  codePosition="left"
  :code='{language: "yaml", filename: "defaults.yml", content: "default_max_ai_credits: \u00221K\u0022\ndefault_max_daily_ai_credits: \u00225K\u0022\ndefault_timeout_minutes: \u002220\u0022\ndefault_detection_job_timeout_minutes: \u002210\u0022\n\n# preview:\n#   gh aw env update defaults.yml \\\n#     --scope org --org MY_ORG --dry-run\n# apply: the same command without --dry-run\n\n# precedence, most specific first:\n#   workflow frontmatter, repository,\n#   organization, enterprise, compiler"}'
  :features='[
    {icon: "🪜", title: "Scopes, most specific first", description: "Frontmatter, repository, organization, enterprise, then the compiler fallback."},
    {icon: "🔏", title: "Enforcement is review", description: "CODEOWNERS on .github/workflows/, required review, and Require lockfile."},
    {icon: "⏱️", title: "Compile-time defaults", description: "Pass GH_AW_DEFAULT_MAX_TURNS and the detection model to CI compile jobs."}
  ]'
  :progressDots='{current: 4, total: 8, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50"}'
/>

<!--
Duration: 1:15. Cumulative: 33:30.
Audience question: How do I set the same limits across many repositories, and what makes them stick?
Actor: the admin exports defaults with gh aw env get, edits the YAML, previews with --dry-run, and applies at enterprise,
organization, or repository scope. A workflow author can still override defaults in frontmatter, so defaults guide behavior and
review enforces it: a CODEOWNERS entry on .github/workflows/, required review on lock-file changes, the Require lockfile policy,
and safe update mode on compile.
Some defaults are read by the compiler (GH_AW_DEFAULT_MAX_TURNS, GH_AW_DEFAULT_DETECTION_MODEL, GH_AW_DEFAULT_UTC); CI jobs that
run gh aw compile must pass them in.
Source: https://github.github.com/gh-aw/reference/governance/
-->

---

<!-- SLIDE: Measure cost and adoption -->
# Measure cost and adoption
<FrameworkMappingRowsSlide
  :partNumber="4"
  pillIcon="📊"
  pillLabel="Operate · Measure"
  title="Read cost, budget, and adoption together"
  subtitle="Actions minutes plus inference. Threat detection has its own credits."
  :rows='[
    {label: "Cost", description: "Duration, tokens, and AIC for recent runs.", tag: "gh aw logs"},
    {label: "One run", description: "Token use, tool calls, and spend for a single run.", tag: "gh aw audit"},
    {label: "Budget", description: "Monthly AIC forecast, including threat detection.", tag: "gh aw forecast"},
    {label: "Adoption", description: "Which outputs people accepted, rejected, or left pending.", tag: "logs --adoption"},
    {label: "Health", description: "Success rates and completion across workflows.", tag: "gh aw health"}
  ]'
  footnote="A cheap workflow that nobody reads shows up when adoption sits beside cost."
  :progressDots='{current: 5, total: 8, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50"}'
/>

<!--
Duration: 1:30. Cumulative: 35:00.
Audience question: How do I know the workflows are worth their cost?
Cost has two parts: GitHub Actions minutes and inference. A run has a short pre_activation job and an agent job, each with about
1.5 minutes of runner setup. gh aw forecast left experimental at GA and now includes threat-detection credits and monthly ranges.
Compare forecast with actual spend. Read adoption beside cost: gh aw logs WORKFLOW --adoption separates accepted, rejected, and
pending outputs. Adoption is a signal; it does not establish attributed value on its own.
Sources: https://github.github.com/gh-aw/reference/cost-management/
https://github.github.com/gh-aw/guides/measuring-impact/
-->

---

<!-- SLIDE: The rollout ladder -->
# The rollout ladder
<MaturityJourneyRoadmapSlide
  :partNumber="4"
  pillIcon="🪜"
  pillLabel="Operate · Rollout"
  title="Move up one rung when the evidence below it is in hand"
  subtitle="Each rung changes one thing: how much the workflow may write."
  :stages='[
    {label: "1", name: "Report-only", description: "Issues and comments. No code changes.", icon: "📄", isTarget: false},
    {label: "2", name: "Staged", description: "Preview every write. Reviewers judge decisions.", icon: "🎭", isTarget: false},
    {label: "3", name: "Shadow", description: "Real writes land in a disposable repository.", icon: "🧪", isTarget: false},
    {label: "4", name: "Direct writes", description: "Same workflow, with caps and protected files.", icon: "✅", isTarget: true}
  ]'
  caption="Try it: gh aw add-wizard → compile --strict → trial → run → logs --adoption"
  :progressDots='{current: 6, total: 8, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50"}'
/>

<!--
Duration: 1:00. Cumulative: 36:00.
Audience question: How do I start without trusting the agent on day one?
The ladder is from the gh-aw Safe Rollout guide. Staged answers "what would the workflow do?" Shadow evaluation answers "does the
real write path behave correctly on a safe target?"
Commands: gh aw add-wizard githubnext/agentics/ci-doctor; gh aw compile --strict; gh aw trial githubnext/agentics/ci-doctor;
gh aw run ci-doctor; gh aw logs ci-doctor --adoption.
Promotion evidence: diagnoses that cite logs, previews that match what a human would write, and acceptance visible in --adoption.
Source: https://github.github.com/gh-aw/guides/safe-rollout/
-->

---

<!-- SLIDE: What Universe 2026 added -->
# What Universe 2026 added
<FrameworkMappingRowsSlide
  :partNumber="4"
  pillIcon="🌌"
  pillLabel="Operate · GitHub Universe 2026"
  title="Launches from October 28 that strengthen this pattern"
  subtitle="Agentic Workflows, Actions, and Copilot Automations moved together."
  :rows='[
    {label: "GA", description: "Agentic Workflows on github.com for Free, Team, and Enterprise.", tag: "Oct 28"},
    {label: "Forecast", description: "gh aw forecast leaves experimental; adds threat-detection credits.", tag: "gh aw forecast"},
    {label: "Templates", description: "New add-wizard templates; pick a model provider per workflow.", tag: "add-wizard"},
    {label: "Lockfiles", description: "Actions workflow lockfiles reach GA; admins can require them.", tag: "Require lockfile"},
    {label: "Automations", description: "Shared, cloud-run automations that propose their own improvements.", tag: "Self-improving"},
    {label: "Enterprise", description: "GitHub Enterprise includes access to Copilot features.", tag: "Copilot"}
  ]'
  footnote="The default Copilot engine needs a Copilot license; confirm how Enterprise access applies to your engine authentication."
  :progressDots='{current: 7, total: 8, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50"}'
/>

<!--
Duration: 1:15. Cumulative: 37:15.
Audience question: What changed at Universe that affects CI/CD adoption?
Sources for each row: GA changelog (GA, forecast, add-wizard templates, model providers per workflow); Actions workflow lockfiles
GA changelog (Require lockfile policy, Dependabot keeps entries in sync); Copilot Automations changelogs (shared automations belong
to the repository and bill the repository owner; automations propose prompt, tool, or trigger changes that you review and accept);
Universe blog (GitHub Enterprise includes access to Copilot).
Copilot Automations are a managed, cloud-run surface. Agentic Workflows are Markdown files in the repository compiled to Actions that
reuse your runner groups and policies. Choose by where the team wants the artifact to live and who manages it.
Sources: https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/
https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/
https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available/
https://github.blog/changelog/2026-10-28-copilot-automations-now-learn-from-outcomes-and-self-improve/
-->

---

<!-- SLIDE: When this pattern stops fitting -->
# When this pattern stops fitting
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🧭"
  pillLabel="Operate · Boundaries"
  title="Name the boundary before you adopt the pattern"
  :columns='[
    {icon: "⚙️", title: "Keep deterministic", description: "Fixed rules and approvals run as plain Actions steps.", items: ["Checks with one right answer", "Build, test, and deploy steps", "Gate the agent on their result"]},
    {icon: "🚦", title: "Keep human-gated", description: "Authority stays with named owners.", items: ["Production approval: environment reviewers", "Changes to .github/: code owners", "Low adoption: tighten or retire"]},
    {icon: "🔎", title: "Check before you adopt", description: "Confirm topology and the right surface.", items: ["GHES, data residency, ARC: read the applicability summary", "Team-managed, no-YAML: Copilot Automations"]}
  ]'
  :progressDots='{current: 8, total: 8, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50"}'
/>

<!--
Duration: 1:15. Cumulative: 38:30.
Audience question: When should I choose a different tool?
Fixed-rule checks belong in deterministic steps, run first, with the agent gated on the result. Production approval stays with the
environment's required reviewers. Deployment topology matters: GHES, data-residency, self-hosted Linux, and ARC combinations have
component prerequisites; read the deployment and runner applicability summary in the gh-aw enterprise configuration reference.
Copilot Automations may fit when a team wants a managed surface and no repository file. If --adoption shows reviewers ignore
the output, tighten the prompt or retire the workflow.
Sources: https://github.github.com/gh-aw/reference/enterprise-configuration/#deployment-and-runner-applicability
https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations/
-->

---

<!-- SLIDE: Before and After -->
# Before and After
<BeforeAfterSlide
  header="From reading logs by hand to reviewing evidence"
  :leftItems='["Open the failed run and scan the logs", "Search earlier failures by hand", "Write up the cause for the next person", "Decide agent access case by case"]'
  :rightItems='["CI Doctor opens one evidence-backed issue", "Duplicates become comments on the open issue", "The agent job reads; safe_outputs writes", "Staged mode, caps, and adoption data guide rollout"]'
  :metrics='[
    {value: "65 → 2,426", detail: "lines: ci-doctor.md to its lock file (observed)"},
    {value: "max: 1", detail: "issue per CI Doctor run, set in frontmatter"},
    {value: "1,000 AIC", detail: "default per-run credit guardrail"}
  ]'
/>

<!--
Duration: 0:30. Cumulative: 39:00.
Audience question: What should I retain?
Recap the progression: reading logs becomes reviewing evidence; the permission split is visible in the lock file; limits live in
frontmatter and org defaults. The metrics are configuration facts and one observed compile result, not measured productivity gains.
Sources: tech-talks/agentic-workflows-cicd/README.md
https://github.github.com/gh-aw/reference/cost-management/
-->

---

<!-- SLIDE: What You Can Do Today -->
# What You Can Do Today
<WhatYouCanDoTodaySlide
  :today='["Install gh-aw and compile examples/ci-doctor.md.", "Open the lock file and compare agent and safe_outputs permissions.", "Name the CI judgment your team repeats most."]'
  :thisWeek='["Point CI Doctor at your CI workflow with staged: true.", "Add a CODEOWNERS entry for .github/workflows/.", "Read the staged preview for one failed run."]'
  :thisMonth='["Enable real issues with max: 1.", "Preview org defaults with gh aw env update --dry-run.", "Review gh aw logs --adoption; promote, tighten, or retire."]'
  footer="Start report-only, read the evidence, and move up one rung at a time."
/>

<!--
Duration: 0:45. Cumulative: 39:45.
Audience question: What is a useful next experiment?
Today: gh extension install github/gh-aw; copy examples/ci-doctor.md into .github/workflows/; gh aw compile --strict.
This week: change workflows: ["CI"] to the pipeline name, set safe-outputs staged: true, trigger a failed run on a branch.
This month: enable real issue creation with max: 1, set per-run and per-day credit limits, review adoption.
Transfer question for the room: which CI judgment does your team repeat most, who reviews the output, and what is the one write?
Source: tech-talks/agentic-workflows-cicd/README.md
-->

---

<!-- SLIDE: References -->
# References
<ReferencesSlide
  :groups='[
    {title: "GitHub Agentic Workflows", color: "purple", items: [
      {href: "https://github.com/github/gh-aw", label: "github/gh-aw", description: "Source, docs, and sample workflows."},
      {href: "https://github.github.com/gh-aw/introduction/overview/", label: "What are Agentic Workflows?", description: "Overview."},
      {href: "https://github.github.com/gh-aw/introduction/architecture/", label: "Security Architecture", description: "Layers, safe outputs, detection."}
    ]},
    {title: "CI and operate", color: "green", items: [
      {href: "https://github.github.com/gh-aw/gallery/ci-failure-investigation/", label: "CI failure investigation", description: "CI Doctor and example output."},
      {href: "https://github.github.com/gh-aw/reference/safe-outputs/", label: "Safe Outputs", description: "Typed writes and limits."},
      {href: "https://github.github.com/gh-aw/reference/governance/", label: "Governance", description: "gh aw env defaults."}
    ]},
    {title: "GitHub Universe 2026", color: "purple", items: [
      {href: "https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/", label: "Agentic Workflows GA", description: "October 28 changelog."},
      {href: "https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/", label: "Universe 2026 recap", description: "Evolving every layer of the stack."},
      {href: "https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available/", label: "Workflow lockfiles GA", description: "Require lockfile policy."}
    ]},
    {title: "Microsoft and GitHub Docs", color: "green", items: [
      {href: "https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect", label: "Azure sign-in with OIDC", description: "Microsoft Learn."},
      {href: "https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/set-up-cicd-hosted-agent", label: "CI/CD for a hosted agent", description: "GitHub Actions, azd, OIDC."},
      {href: "https://docs.github.com/actions/reference/deployments-and-environments", label: "Deployments and environments", description: "Protection rules and reviewers."}
    ]}
  ]'
/>

<!--
Duration: 0:15. Cumulative: 40:00.
Audience question: Where can I verify each claim?
The README frontmatter lists every source with its verified date (2026-11-23), including Triggering CI, Safe Rollout, the Copilot Automations changelogs, the
Actions 2026 security roadmap, and the githubnext/agentics sample workflows. The companion PDF and the talk track repeat the list.
Sources: tech-talks/agentic-workflows-cicd/README.md
-->

---

<!-- SLIDE: Thank You -->
# Thank You
<ThankYouSlide
  title="Read. Bound. Approve. Measure."
  subtitle="Agentic Workflows for CI/CD: Agents Investigate, the Pipeline Decides"
  :cards='[
    {value: "Read-only", detail: "The agent job reads; writes live in safe_outputs."},
    {value: "Gated", detail: "Staged mode, caps, and protected files bound each write."},
    {value: "Human-owned", detail: "Environments and code owners hold the approvals."}
  ]'
  prompt="Which CI judgment does your team repeat most, who would review the output, and what is the one write the agent may request?"
>
  <template #logo>
    <GitHubBrandMark class="sv-thanks-logo" />
  </template>
</ThankYouSlide>

<!--
Duration: 2:00 discussion. Cumulative: 42:00.
Audience question: Which task is the right first candidate in my environment?
Invite concrete examples: the trigger, the read scope, the one write, and the reviewer.
Likely questions: costs (forecast and the default guardrails), GHES and ARC support (applicability summary), prompt injection
(Part 4 layers), and Copilot Automations versus Agentic Workflows (where the artifact lives and who manages it).
Close at 42 minutes including discussion.
Sources: https://github.github.com/gh-aw/introduction/overview/
-->
