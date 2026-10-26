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
  ## HydraFusion: How It Works and How to Use It
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: "HydraFusion: How It Works and How to Use It"
module: tech-talks/copilot-auto-mode
mdc: true
section: Choose and Configure
status: active
updated: 2026-10-26
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
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import HydraFusionExecutionPathsSlide from './components/HydraFusionExecutionPathsSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import { isDark } from './components/useTheme'
import githubLogoWhite from '../assets/brand/github/GitHub_Invertocat_White_Clearspace.svg'
import githubLogoBlack from '../assets/brand/github/GitHub_Invertocat_Black_Clearspace.svg'
</script>

<!-- SLIDE: Title -->
# HydraFusion
<TitleSlide
  title="HydraFusion"
  subtitle="How It Works and How to Use It"
  tagline="Patterns, reasoning effort, and practical use"
  meta="GitHub Copilot · 20 minutes · Research preview · October 26, 2026"
>
  <template #logo>
    <img :src="isDark ? githubLogoWhite : githubLogoBlack" class="sv-title-logo" alt="GitHub" />
  </template>
</TitleSlide>

<!--
Duration: 0:20. Cumulative: 0:20.
Audience question: What is HydraFusion?
Define it immediately: a runtime orchestrator available through the Copilot model
picker. It chooses the execution pattern, models and reasoning effort per step,
then returns one final response. It is a system rather than a foundation model.
This presentation explains the mechanism and client workflow. Live execution is
optional; no HydraFusion task run or generated product output is claimed here.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Core Question -->
# Core Question
<CoreQuestionSlide
  question="How does HydraFusion orchestrate models, and how do we use it?"
  subtext="Understand the runtime, enable it in Copilot, and try representative prompts."
  highlight="Read the execution and verify the result."
  :cards='[
    {icon: "⚙️", title: "Understand orchestration", description: "Compare Auto, HydraFusion and Max; trace the execution paths."},
    {icon: "💻", title: "Use it in Copilot", description: "Enable the preview and try explanation, implementation or analysis."},
    {icon: "🔍", title: "Read the outcome", description: "Inspect actual progress, changes and per-model usage."},
    {title: "3 patterns", description: "Single, Cascade and Critique; chosen for each prompt."},
    {title: "3 clients", description: "CLI, VS Code and the Copilot app."},
    {title: "Research preview", description: "No SLA; not intended for production workloads."}
  ]'
/>

<!--
Duration: 0:25. Cumulative: 0:45.
Audience question: What will I be able to understand and use?
The three top cards are outcome promises: understand orchestration, use it in
Copilot, and read the outcome. The bottom cards are documented operating facts,
not performance measurements. There are no required live calls.
Sources: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/
-->

---

<!-- SLIDE: Table of Contents -->
# Table of Contents
<TocSlide
  :sections='[
    {icon: "⚙️", title: "Understand the orchestrator", subtitle: "Auto, HydraFusion and Max", blurb: "Separate model routing from workflow orchestration.", slide: 4},
    {icon: "🔀", title: "Follow the execution", subtitle: "Single, Cascade and Critique", blurb: "Trace selective solving and review passes.", slide: 7},
    {icon: "💻", title: "Use HydraFusion", subtitle: "Enable, select and prompt", blurb: "Use exact commands and representative examples.", slide: 10},
    {icon: "🔍", title: "Evaluate the result", subtitle: "Progress, changes and usage", blurb: "Read what ran and what still needs verification.", slide: 14}
  ]'
/>

<!--
Duration: 0:15. Cumulative: 1:00.
Audience question: How is the technical explanation organized?
Understand → Follow → Use → Evaluate. Four navigation sections support three
outcomes; Understand and Follow both serve the orchestration outcome.
Budgets: introduction one minute; sections three, four, six and four minutes;
discussion two minutes. The four-minute Evaluate allocation includes recap,
actions and references. Live scan confirmed TOC destinations at 4, 7, 10 and 14.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Part 1 — Understand the orchestrator -->
# Part 1 — Understand the orchestrator
<SectionOpenerSlide
  :partNumber="1"
  title="Understand the orchestrator"
  subtitle="A model-picker entry delegates workflow, models and reasoning effort."
  :cards='[
    {icon: "➡️", title: "Auto", blurb: "Route the task to one model."},
    {icon: "⚙️", title: "HydraFusion", blurb: "Select a workflow for the prompt."},
    {icon: "🧠", title: "Max", blurb: "Apply depth-oriented orchestration."}
  ]'
  :terminal='{context: "HydraFusion is a runtime orchestrator.", detail: "Extra passes are selective; one solver can be enough."}'
/>

<!--
Duration: 0:20. Cumulative: 1:20.
Audience question: What does selecting HydraFusion delegate to the system?
Separate one-model routing from selective orchestration. Straightforward work
can still get one solving pass; additional review is selected when useful.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Auto routes a model HydraFusion selects a workflow -->
# Auto routes a model HydraFusion selects a workflow
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="⚙️"
  pillLabel="Understand · Routing and orchestration"
  title="Auto routes a model; HydraFusion selects a workflow"
  :left='{header: "Auto · one-model routing", icon: "➡️", items: [
    {title: "Input: a normal prompt", detail: "Auto considers task fit and service health."},
    {title: "System decision", detail: "Select one model to handle the task."},
    {title: "Useful baseline", detail: "Routine explanations and focused coding work."}
  ]}'
  :right='{header: "HydraFusion · runtime orchestration", icon: "🔀", items: [
    {title: "Input: a normal prompt", detail: "The orchestrator selects how to solve it."},
    {title: "System decisions", detail: "Execution pattern, participating models and stage effort."},
    {title: "Selective passes", detail: "One solver, conditional escalation or independent review."}
  ]}'
  :insight='{icon: "💡", text: "HydraFusion is a system behind a picker entry, not a new foundation model."}'
  :progressDots='{current: 1, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50"}'
/>

<!--
Duration: 1:10. Cumulative: 2:30.
Audience question: What changes when I select HydraFusion instead of Auto?
Follow the same prompt through two different system decisions. Auto chooses a
model; HydraFusion also chooses a workflow and reasoning effort. This is a
conceptual comparison, not an observed routing trace. Extra passes are selective.
Auto tiers Efficiency, Balance and Intelligence apply in VS Code, CLI and the
Copilot app. They adjust routing preferences rather than adding execution
patterns. Routing considers cache boundaries and significant task-complexity
changes; avoid claiming selection happens only at the first turn or compaction.
A pinned model identifies the selected model but does not make output deterministic.
Sources: https://docs.github.com/en/copilot/concepts/models/auto-model-selection
https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: HydraFusion and Max share the orchestration architecture -->
# HydraFusion and Max share the orchestration architecture
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🧠"
  pillLabel="Understand · HydraFusion and Max"
  title="Max tunes the same architecture for deeper reasoning"
  :left='{header: "HydraFusion", icon: "⚖️", items: [
    {title: "Balanced execution", detail: "Coordinate solving and review with token efficiency in mind."},
    {title: "Stage-specific reasoning", detail: "Drafting uses medium; reviews use high effort."},
    {title: "Starting point", detail: "Well-scoped coding work where review may help."}
  ]}'
  :right='{header: "HydraFusion Max", icon: "🧠", items: [
    {title: "Depth-oriented tuning", detail: "Use the same workflow architecture for demanding tasks."},
    {title: "Higher effort where useful", detail: "Max can use extra-high reasoning."},
    {title: "When to evaluate it", detail: "Complex analysis where thoroughness justifies more execution."}
  ]}'
  :insight='{icon: "🔀", text: "The system chooses models and effort. Users cannot force a pattern or constituent model."}'
  :progressDots='{current: 2, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50"}'
/>

<!--
Duration: 1:30. Cumulative: 4:00.
Audience question: What does Max change?
Both options use the same orchestration architecture. Max applies depth-oriented
tuning and can use extra-high reasoning while still considering token efficiency.
Do not imply every stage runs at extra-high effort or every prompt adds passes.
The October 14 announced pool included Claude Opus 5.5, GPT-6 Astra, GPT-6.1 Sol
and GPT-6 Luna. This is a dated snapshot, not a fixed roster or an administrator
allowlist. Models and workflows can change; organization policies constrain access.
The extra analysis budget is something to evaluate against a task, not a quality
guarantee. Runtime assignments remain system decisions.
Sources: https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/
https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Part 2 — Follow the execution -->
# Part 2 — Follow the execution
<SectionOpenerSlide
  :partNumber="2"
  title="Follow the execution"
  subtitle="The system chooses a path for each prompt and returns one final response."
  :cards='[
    {icon: "➡️", title: "Single", blurb: "One solving pass."},
    {icon: "⚖️", title: "Cascade", blurb: "Draft, judge, then further work if needed."},
    {icon: "🔍", title: "Critique", blurb: "Independent review and solver revision."}
  ]'
  :terminal='{context: "The following paths are conceptual architecture.", detail: "A follow-up can select a different path."}'
/>

<!--
Duration: 0:20. Cumulative: 4:20.
Audience question: What happens between a prompt and the final response?
Introduce the three conceptual paths. Each prompt gets a fresh pattern choice,
so a follow-up can take a different path in the same conversation.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Three conceptual execution paths -->
# Three conceptual execution paths
<HydraFusionExecutionPathsSlide />

<!--
Duration: 1:50. Cumulative: 6:10.
Audience question: How do the three patterns differ?
Trace the actors: orchestrator chooses; solver drafts; judge decides whether
further work is needed; critic reviews; original solver revises. These are
conceptual architecture diagrams rather than captured product progress.
Cascade adds evaluation and reserves repair/escalation for work that needs it.
Critique adds an independent perspective and review latency. The selection step
is lightweight; solving, review and revision account for the additional passes.
A different prompt in the same conversation can get another path. Never treat a
prompt category or an application-level fallback value as evidence of routing.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
Architecture: https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/
-->

---

<!-- SLIDE: October review stages inspect the workspace -->
# October review stages inspect the workspace
<FourCardGridSlide
  :partNumber="2"
  pillIcon="🔍"
  pillLabel="Follow · October 14 mechanisms"
  title="Judges and critics inspect work at review depth"
  :cards='[
    {icon: "⚖️", title: "Cascade judge and repair", description: "The judge evaluates the draft and can request repair or escalation when needed."},
    {icon: "📁", title: "Workspace-aware critics", description: "Critics use tools to inspect actual files. Parallel critics can review the work."},
    {icon: "🧠", title: "Reasoning per stage", description: "Medium for drafting, high for review; Max can use extra-high reasoning."},
    {icon: "🔀", title: "Separate from subagents", description: "HydraFusion coordinates its internal passes. It does not start subagents."}
  ]'
  :insight='{icon: "", text: "Context display is conservative across constituent models; HydraFusion has no independent context window."}'
  :progressDots='{current: 2, total: 2, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50"}'
/>

<!--
Duration: 1:50. Cumulative: 8:00.
Audience question: How does the current review stage get better evidence?
Explain judge/repair, tool-using critics and potentially parallel independent
reviews. The simple draft/review/revision path remains useful but does not
describe every possible current internal arrangement.
The main conversation stays on the same model where possible for caching;
helpers receive the relevant context they need. The displayed context limit is
conservative and reflects constituent models. Compact when the client requires
it before switching a long conversation.
Current docs and October updates supersede launch-era tool-less-review wording.
Persistent workspace-edit behavior belongs in Evaluate, after client usage.
Sources: https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/
https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Part 3 — Use HydraFusion -->
# Part 3 — Use HydraFusion
<SectionOpenerSlide
  :partNumber="3"
  title="Use HydraFusion"
  subtitle="Enable the preview, select an option, and send a normal Copilot prompt."
  :cards='[
    {icon: "💻", title: "Enable", blurb: "CLI, VS Code or Copilot app."},
    {icon: "⚙️", title: "Select", blurb: "HydraFusion or HydraFusion Max."},
    {icon: "💬", title: "Prompt", blurb: "Explain, implement or analyze."}
  ]'
  :terminal='{context: "Send a normal Copilot prompt.", detail: "Inspect the path, response and workspace changes."}'
/>

<!--
Duration: 0:15. Cumulative: 8:15.
Audience question: How do I start using it?
This six-minute section covers client setup, CLI workflow and three example
prompts. Live execution is optional and capped at two minutes. Keep the final
two minutes available for example discussion plus inspection or fallback.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Enable the preview in one client -->
# Enable the preview in one client
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="💻"
  pillLabel="Use · Enable and select"
  title="Enable HydraFusion, then select it in the picker"
  :columns='[
    {icon: "⌨️", title: "Copilot CLI", description: "Start copilot --experimental.", items: ["Use /model.", "Select HydraFusion or HydraFusion Max (Research Preview)."]},
    {icon: "💻", title: "VS Code", description: "Use version 1.140+ or Insiders.", items: ["Enable chat.copilot.hydraFusion.enabled.", "Select HydraFusion or Max in Chat."]},
    {icon: "🪟", title: "Copilot app", description: "Use the current app.", items: ["Settings → Experimental → HydraFusion.", "Select HydraFusion or Max."]}
  ]'
  :insight='{icon: "🛡️", text: "Availability depends on plan, preview access and allowed-model policy. Check settings and administrator access."}'
  :progressDots='{current: 1, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
/>

<!--
Duration: 1:25. Cumulative: 9:40.
Audience question: Which settings expose the options?
Read each client's enable/select steps. The October announcement lists Pro,
Pro+, Business and Enterprise; current plan and administrator policy govern
availability. Missing options call for an access check, not a permission bypass.
CLI updates use copilot update when needed. Enabling /experimental on inside
an existing CLI session requires restarting. In VS Code/app, hover the completed
response/footer for participating models. Keep ordinary tool permissions.
The deck itself requires no preview access or model call. Verified local server:
Set-Location C:\code\CopilotTraining\slides
$env:CI='true'
node .\node_modules\@slidev\cli\bin\slidev.mjs .\tech-talks\copilot-auto-mode.md --remote --port 3047
This invocation served HTTP 200 and the twenty-slide live scan. CI=true kept
the helper responsive in the noninteractive host; choose a free local port.
Sources: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/
-->

---

<!-- SLIDE: Start select prompt and inspect in CLI -->
# Start select prompt and inspect in CLI
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="⌨️"
  pillLabel="Use · Exact CLI workflow"
  title="Start, select, prompt, then inspect progress"
  codePosition="left"
  :code='{language: "powershell", filename: "Interactive CLI workflow", content: "copilot --experimental\n\n# Inside the session:\n/model\n# Select HydraFusion or HydraFusion Max\n\n# Send a normal prompt; watch progress.\n/usage"}'
  :features='[
    {icon: "👁️", title: "Visible execution", description: "Watch actual pattern, planned passes, progress and elapsed time."},
    {icon: "📊", title: "Per-model usage", description: "/usage reports session consumption. Record a starting point for prompt comparisons."},
    {icon: "⏱️", title: "Optional live call", description: "Cap execution at two minutes. Then inspect or disclose what remains unverified."}
  ]'
  :progressDots='{current: 2, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
/>

<!--
Duration: 2:20. Cumulative: 12:00.
Audience question: What commands do I run and what should I see?
Use the first twenty seconds for the interactive sequence. Optionally use the
remaining two minutes for ONE live call; do not run interactive and single-prompt
examples as two competing calls. These commands were not executed by the deck
generator. Model calls consume AI credits and require preview access.
Exact optional single-prompt command, executed only by a presenter choosing to:
Run from an existing repository with a README:
copilot --experimental --model hydrafusion -p "Summarize this repository's README and list any setup assumptions. Do not edit files."
The command is documented; its response is generated at runtime. Do not invent
a captured trace, planned pattern, elapsed time, credit value or successful result.
Use actual progress: selected pattern, passes, warnings and elapsed time.
At two minutes, press Esc if unfinished. Reserve the next two minutes for
inspection/fallback and example prompts. If not running live, walk through
commands and discuss which fields would be inspected without simulating output.
The presentation remains complete with no call. Auto can run the same examples
if explicitly labeled Auto; it is not evidence of HydraFusion execution.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Three prompts and what to inspect -->
# Three prompts and what to inspect
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="💬"
  pillLabel="Use · Representative prompts"
  title="Try explanation, implementation or demanding analysis"
  :columns='[
    {icon: "📖", title: "Explain", description: "Explain this function and list its boundary cases. Do not edit files.", items: ["Inspect: explanation against actual code.", "Observe: the selected pattern."]},
    {icon: "🔧", title: "Implement", description: "Add an optional timeout; preserve callers, add edge-case tests and run them.", items: ["Inspect: changed files and regressions.", "Verify: actual test results."]},
    {icon: "🧠", title: "Analyze", description: "Compare two recovery designs against these failure scenarios. State assumptions and tradeoffs.", items: ["Inspect: coverage and unresolved questions.", "Consider Max when depth matters."]}
  ]'
  :insight='{icon: "🔀", text: "Prompts and inspection goals, not observed outputs or routing guarantees. Single remains a valid outcome."}'
  :progressDots='{current: 3, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
/>

<!--
Duration: 2:00. Cumulative: 14:00.
Audience question: What useful prompts can I try?
Discuss the prompt and inspection goal together. Prompt category does not force
an execution pattern. Use this time to inspect any optional live result or
disclose incomplete checks; keep discussion of all three prompts concise.
Use a function already available in the current repository for the explanation
prompt. For implementation, name the relevant files, compatibility requirements
and checks. For analysis, provide the designs and failure scenarios.
These examples require repository context, not separate exercise files.
If no live call ran, discuss what a correct response would cover without
fabricating output. If code changed, inspect the files and independently run
the repository's relevant checks.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Part 4 — Evaluate the result -->
# Part 4 — Evaluate the result
<SectionOpenerSlide
  :partNumber="4"
  title="Evaluate the result"
  subtitle="Use actual progress, file changes and usage to understand what ran."
  :cards='[
    {icon: "👁️", title: "Progress", blurb: "Inspect actual pattern and passes."},
    {icon: "📁", title: "Result", blurb: "Verify behavior and workspace changes."},
    {icon: "📊", title: "Usage", blurb: "Read participating-model consumption."}
  ]'
  :terminal='{context: "A review pass contributes analysis.", detail: "Correctness still needs independent checks."}'
/>

<!--
Duration: 0:15. Cumulative: 14:15.
Audience question: What can I inspect after execution?
Connect actual progress to the final result and usage. This four-minute section
includes the two body slides plus brief recap, actions and references.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Inspect progress result workspace and usage -->
# Inspect progress result workspace and usage
<FourCardGridSlide
  :partNumber="4"
  pillIcon="👁️"
  pillLabel="Evaluate · Observable evidence"
  title="Inspect what ran and whether the result fits"
  :cards='[
    {icon: "🔀", title: "Actual execution", description: "Read the selected pattern, planned passes, progress, elapsed time and warnings."},
    {icon: "💬", title: "Response and models", description: "Inspect the final response. In VS Code or the app, hover the response for model details."},
    {icon: "📁", title: "Workspace and behavior", description: "Read changed files, verify relevant behavior and independently rerun appropriate checks."},
    {icon: "📊", title: "Session usage", description: "Use /usage for per-model session consumption. Record a starting point for comparisons."}
  ]'
  :insight='{icon: "", text: "If a result is wrong: give one precise failing example, narrow the task, and rerun relevant checks."}'
  :progressDots='{current: 1, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50"}'
/>

<!--
Duration: 1:15. Cumulative: 15:30.
Audience question: How do I read a completed or incomplete execution?
Use actual client evidence. A completed conversation retains a summary and any
warnings. Do not infer the execution path from answer quality or prompt wording.
CLI /usage is session consumption; compare starting and ending states before
attributing usage to a prompt. Inspect behavior separately from test-runner status.
If unfinished, record what is and is not verified. An extra review pass supplies
analysis, not automatic acceptance. Narrow the task when assumptions remain unclear.
/collect-debug-logs creates a diagnostic archive. Inspect/redact it before
sharing through an approved channel; do not publish it automatically.
For comparison use identical inputs and matching repository revisions in separate sessions.
Record option, observed pattern, accepted checks, actual time and AI credits.
One run illustrates behavior; repeated comparable runs assess consistency.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: Workspace billing and preview boundaries -->
# Workspace billing and preview boundaries
<FourCardGridSlide
  :partNumber="4"
  pillIcon="🛡️"
  pillLabel="Evaluate · Operating boundaries"
  title="Keep workspace changes, billing and preview limits visible"
  :cards='[
    {icon: "📁", title: "Draft edits can persist", description: "Discarding a draft does not undo edits automatically. Inspect files after stops or failures."},
    {icon: "📊", title: "Per-model billing", description: "Each model uses its standard rate. No orchestration surcharge; no Auto discount."},
    {icon: "🛡️", title: "Access and permissions", description: "Administrator policy governs models and preview access. Normal tool permissions stay in force."},
    {icon: "🔬", title: "Research preview", description: "HydraFusion and Max have no SLA and are not intended for production workloads."}
  ]'
  :insight='{icon: "", text: "Historical offline results show quality/cost tradeoffs; they do not forecast Max or local savings."}'
  :progressDots='{current: 2, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50"}'
/>

<!--
Duration: 1:20. Cumulative: 16:50.
Audience question: Which operating boundaries change how I use the preview?
Discarding a draft and reverting its file edits are different events. Inspect
the workspace after completion, interruption or failure. Preserve unrelated
changes and recover deliberately. Current docs supersede launch patch-safety
and tool-less-critic wording.
Every participating model bills at its standard rate. No separate orchestration
charge and no Auto discount. Extra passes can increase latency and AI credits.
Do not supply fabricated timings, credit amounts or projected local savings.
Full historical offline comparisons against Opus 5, notes only:
| Benchmark | Estimated workflow cost | Verified quality difference |
| TerminalBench 2.1 | 67% lower | +4.9 percentage points |
| DeepSWE | 36% lower | -1.5 percentage points |
| CheckpointBench | 65% lower | -0.1 percentage points |
These historical policies, pools, pricing assumptions and medium-effort runs
show tradeoffs. Quality was not uniformly higher. They do not benchmark October
Max or forecast a local workload. Evaluate actual repeated comparable tasks.
Sources: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion#billing-for-hydrafusion
https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/
https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/
-->

---

<!-- SLIDE: Before and After -->
# Before and After
<BeforeAfterSlide
  header="From a picker entry to an inspectable runtime"
  :leftItems='["Identify the selected option", "Read the final response", "Inspect changed code", "Estimate execution cost"]'
  :rightItems='["Distinguish routing from orchestration", "Read the actual pattern and passes", "Verify behavior and workspace state", "Inspect per-model session usage"]'
  :metrics='[
    {value: "3", detail: "conceptual execution patterns"},
    {value: "3", detail: "supported client surfaces"},
    {value: "1", detail: "final response per prompt"}
  ]'
/>

<!--
Duration: 0:30. Cumulative: 17:20.
Audience question: What understanding should I retain?
Recap the technical progression: one-model routing versus workflow selection;
per-prompt paths; client use; inspection of actual execution and result.
The three metrics are documented structural facts, not measured improvements.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: What You Can Do Today -->
# What You Can Do Today
<WhatYouCanDoTodaySlide
  :today='["Enable the preview in one client.", "Try a read-only explanation.", "Observe actual progress and models."]'
  :thisWeek='["Try one bounded non-production edit.", "Inspect files and rerun relevant checks.", "Record real elapsed time and usage."]'
  :thisMonth='["Compare identical inputs across sessions.", "Evaluate Max on demanding analysis.", "Recheck changing preview guidance."]'
  footer="Understand the workflow, use normal Copilot prompts, and verify the actual result."
/>

<!--
Duration: 0:30. Cumulative: 17:50.
Audience question: What is a useful next experiment?
Enable one client and start read-only. Then try a bounded non-production edit
with explicit checks. Evaluate Max where depth matters. Use comparable initial
inputs, retain normal permissions, and inspect actual files and usage.
Source: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
-->

---

<!-- SLIDE: References -->
# References
<ReferencesSlide
  :groups='[
    {title: "Current operating guidance", color: "purple", items: [
      {href: "https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion", label: "Using HydraFusion", description: "Setup, patterns, progress, billing and limitations."},
      {href: "https://docs.github.com/en/copilot/concepts/models/auto-model-selection", label: "Auto model selection", description: "Routing behavior and Auto tiers."}
    ]},
    {title: "Mechanism and dated evidence", color: "green", items: [
      {href: "https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/", label: "October 14 update and Max", description: "Stage effort, judge/repair and workspace-aware critics."},
      {href: "https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/", label: "Project HydraFusion", description: "Architecture and historical offline evaluations."}
    ]}
  ]'
/>

<!--
Duration: 0:10. Cumulative: 18:00.
Audience question: Where can I verify the mechanism and operating details?
Current documentation governs behavior; October update explains new mechanisms.
Launch evaluations are historical evidence. Canonical source verified October 26.
https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
https://docs.github.com/en/copilot/concepts/models/auto-model-selection
https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/
https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/
-->

---

<!-- SLIDE: Thank You -->
# Thank You
<ThankYouSlide
  title="Understand. Follow. Use. Evaluate."
  subtitle="HydraFusion: How It Works and How to Use It"
  :cards='[
    {value: "Workflow", detail: "Selected for each prompt."},
    {value: "Use", detail: "Enable, select and prompt."},
    {value: "Evidence", detail: "Inspect progress, results and usage."}
  ]'
  prompt="Which existing task would make a useful comparison because its result is easy to verify?"
>
  <template #logo>
    <GitHubBrandMark class="sv-thanks-logo" />
  </template>
</ThankYouSlide>

<!--
Duration: 2:00 discussion. Cumulative: 20:00.
Audience question: Which task makes a useful local comparison?
Invite concrete examples of explanation, implementation or demanding analysis.
Ask which evidence would establish a useful result and which unresolved
assumptions would justify a follow-up. Clarify that prompts cannot force a
pattern; Max adds depth-oriented execution rather than a correctness guarantee.
Reiterate research-preview/no-SLA/non-production boundaries if relevant.
Close at twenty minutes, including discussion.
Sources: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
https://docs.github.com/en/copilot/concepts/models/auto-model-selection
-->
