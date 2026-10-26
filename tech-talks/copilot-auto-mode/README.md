---
status: active
updated: 2026-10-26
section: "Agent Architecture"
references:
  - url: https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/
    label: "October 14: HydraFusion updates and Max"
    verified: 2026-10-26
  - url: https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion
    label: "Using HydraFusion: setup, execution, billing and limitations"
    verified: 2026-10-26
  - url: https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/
    label: "Project HydraFusion: architecture and offline evaluations"
    verified: 2026-10-26
  - url: https://docs.github.com/en/copilot/concepts/models/auto-model-selection
    label: "Auto model selection and routing tiers"
    verified: 2026-10-26
---

# HydraFusion: How It Works and How to Use It

> **The Question This Talk Answers:**
> *"How does HydraFusion orchestrate models, how do we use it, and when does Max fit?"*

**Duration:** 20 minutes, including examples and two minutes of discussion.
**Audience:** Developers and architects using Copilot.
**Verified:** October 26, 2026. HydraFusion and HydraFusion Max remain **research preview**, with no SLA, and are not intended for production workloads.

HydraFusion is a runtime orchestrator available through Copilot's model picker. It chooses how to solve a prompt: which execution pattern to use, which models run the steps, and how much reasoning effort each step receives. The result is one final response backed by the selected workflow.[^1]

**Local presentation:**

```powershell
Set-Location C:\code\CopilotTraining\slides
npm run dev -- .\tech-talks\copilot-auto-mode.md
```

The presentation works without HydraFusion access. Optional live Copilot calls require preview access and consume AI credits.

**Presenter reference:** [Timed, slide-by-slide talk track](talktrack.md) for the 20-minute deck.

<!-- 🎬 MAJOR SECTION: Understand the orchestrator -->
## Understand the orchestrator

**Time budget: 3 minutes**, following a one-minute introduction.

### Auto, HydraFusion and Max

| Option | What the system selects | Typical use |
|---|---|---|
| **Auto** | One model based on task fit and service health. | Routine coding, explanations and focused edits. |
| **HydraFusion** | Execution pattern, models and reasoning effort per step. | Substantial, well-scoped work where review or escalation may help. |
| **HydraFusion Max** | The same orchestration architecture, tuned for deeper reasoning. | Demanding tasks where depth and thoroughness justify additional execution. |

HydraFusion is a system behind a picker entry, not a new foundation model. Selecting it delegates workflow and model coordination. Extra passes are selective: straightforward work can still use one solving model.[^1]

Auto's Efficiency, Balance and Intelligence tiers adjust routing preferences in VS Code, CLI and the Copilot app. They continue to select a model for the task. HydraFusion adds execution-pattern selection.[^2]

### What Max changes

The October 14 update introduces HydraFusion Max alongside the balanced HydraFusion option. Drafting uses medium reasoning, reviews use high reasoning, and Max can use extra-high reasoning. Max applies depth-oriented tuning while continuing to consider token efficiency through orchestration.[^3]

The announced model pool included Claude Opus 5.5, GPT-6 Astra, GPT-6.1 Sol and GPT-6 Luna. This is an **October 14 snapshot**. Models can change, and organization policies limit the eligible pool. The user cannot choose HydraFusion's constituent models or force a particular pattern.[^1][^3]

<!-- 🎬 MAJOR SECTION: Follow the execution -->
## Follow the execution

**Time budget: 4 minutes.**

### Three patterns, one final response

These paths are **conceptual architecture**, not captured product output:

```text
Single:   selected model -> final response
Cascade:  efficient draft -> judge -> accept, repair or escalate
Critique: draft -> independent review -> original solver revises once
```

| Pattern | Mechanism | Tradeoff |
|---|---|---|
| **Single** | One selected model solves the task. | Preserves the latency and efficiency of a direct solving pass. |
| **Cascade** | A judge inspects the initial work and can request repair or escalation to stronger inference. | Adds evaluation while reserving further solving for work that needs it. |
| **Critique** | A separate model reviews the draft, and the original solver revises once using the feedback. | Adds an independent perspective and review latency. |

HydraFusion chooses a pattern **for each prompt**. Different prompts in one conversation can follow different paths. The selection step is lightweight; review and revision account for the extra passes. Intermediate drafts may be changed or discarded, while the user receives the final response and visible progress.[^1]

### October's workspace-aware review

The October update makes Cascade's judging and repair more explicit. Critique uses tools to inspect the actual workspace and can use parallel critics. Reasoning effort is assigned per stage, so solving and reviewing can receive different effort levels.[^3]

HydraFusion's internal orchestration is separate from subagents; HydraFusion does not start them. Its main conversation stays on the same model where possible to benefit from caching, while helpers receive the context they need. It has no independent context window: the displayed limit is conservative and reflects the constituent models' limits.[^1]

**Current operating boundary:** Discarding a draft does not automatically undo edits it already made. Inspect workspace state after completion, interruption or failure. The launch article's earlier descriptions of tool-less review and fail-safe patch application are historical; current documentation governs the preview's operating behavior.[^1][^4]

<!-- 🎬 MAJOR SECTION: Use HydraFusion -->
## Use HydraFusion

**Time budget: 6 minutes**, including one optional short example.

### Enable it in the client

| Client | Enable and select | Inspect execution |
|---|---|---|
| **CLI** | Start `copilot --experimental`; use `/model` to select HydraFusion or HydraFusion Max (Research Preview). | Watch the pattern and pass progress; `/usage` shows per-model session consumption. |
| **VS Code** | Version 1.140+ or Insiders; enable `chat.copilot.hydraFusion.enabled`; select HydraFusion or Max in Chat. | Watch steps; hover over a completed-response footer for models. |
| **Copilot app** | Current app; Settings → Experimental → HydraFusion; select HydraFusion or Max. | Watch progress; hover over the response for models. |

If CLI requires an update, the documented command is `copilot update`. Enabling `/experimental on` inside an existing CLI session requires restarting. A single-prompt invocation is also documented:[^1]

```powershell
copilot --experimental --model hydrafusion -p "Summarize this repository's README and list any setup assumptions. Do not edit files."
```

Run this command from an existing repository with a README. It is an optional live call and consumes AI credits; its result is generated at runtime.

The October announcement lists Pro, Pro+, Business and Enterprise. Preview enablement and allowed-model policies govern availability. If the option is absent, verify the client setting and administrator policy. Auto can run the same examples, with the selected option clearly labeled.[^1][^3]

### Three example prompts

| Example | Representative prompt | What to inspect |
|---|---|---|
| **Explain a function** | "Explain this function and list its boundary cases. Do not edit files." | Whether the explanation matches the code; observe the selected pattern. |
| **Implement a bounded change** | "Add an optional timeout, preserve existing callers, add edge-case tests and run them." | Modified files, regression tests and actual execution progress. |
| **Analyze a difficult design** | "Compare two recovery designs using these failure scenarios. State assumptions, tradeoffs and unresolved questions." | Completeness of assumptions and reasoning; Max is a candidate when deeper analysis matters. |

These prompts illustrate uses, **not guaranteed routing outcomes**. Single is a valid result even for an example that sounds review-worthy. A prompt cannot force Cascade or Critique.[^1]

### Use the examples with existing repository context

For an explanation, supply a function already available in the current repository. For an implementation, name the relevant files, compatibility requirements and checks. For design analysis, provide the candidate designs and failure scenarios. The prompts need that context; no separate exercise files are required.

**Presentation timebox:** Allow two minutes of setup, two minutes of optional live model execution, and two minutes of inspection or discussion. If execution reaches its limit, press Esc, inspect the current files and state which checks remain unverified. Without a live call, discuss the prompts and inspection goals without inventing a response.

<!-- 🎬 MAJOR SECTION: Evaluate the result -->
## Evaluate the result

**Time budget: 4 minutes**, followed by two minutes of discussion.

### Inspect progress, changes and usage

CLI reports the selected pattern, planned passes, progress and elapsed time. Completed conversations retain a summary, including warnings. Use the actual display to understand what ran. `/usage` exposes per-model session consumption; `/collect-debug-logs` creates a more detailed diagnostic archive. Inspect and redact that archive before sharing through an approved channel.[^1]

Acceptance still comes from the actual result: correct behavior, relevant tests, the workspace diff and any unresolved cases. If the result differs from the contract, supply a precise failing example, narrow the task and rerun. More review passes provide additional analysis; a model's approval does not replace the acceptance checks.

HydraFusion bills each participating model at its standard rate. There is no separate orchestration charge, and the Auto discount does not apply. Multiple passes can increase AI credits and elapsed time. Use measured usage for local comparisons; organization administrators own model and preview policies.[^1]

### Interpret the performance evidence

GitHub's launch article reports controlled offline comparisons against Opus 5:[^4]

| Benchmark | Estimated workflow cost | Verified quality difference |
|---|---|---|
| TerminalBench 2.1 | 67% lower | +4.9 percentage points |
| DeepSWE | 36% lower | -1.5 percentage points |
| CheckpointBench | 65% lower | -0.1 percentage points |

These historical runs used specific policies, model pools, pricing assumptions and medium reasoning. They demonstrate quality/cost tradeoffs. They are **not a benchmark of October Max or a forecast of local savings**. The full table is reference material; the presentation needs only the caveat.

For a local comparison, use identical task inputs and matching repository revisions in separate sessions. Record the selected option, observed pattern, acceptance checks, elapsed time and AI credits. One run illustrates behavior; repeated comparable runs are needed to assess consistency.

### A practical starting point

Use Auto for routine work. Try HydraFusion on a well-scoped, non-production task with explicit checks. Try Max when deeper reasoning is worth evaluating. Keep normal tool permissions, inspect edits after interruptions, and use current documentation to recheck preview behavior before delivery.

**Closing question:** Which existing task would make a useful comparison because its result is easy to verify?

## 📖 References

### Official documentation

[^1]: [Using HydraFusion](https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion) — current setup, patterns, billing, progress and limitations.
[^2]: [Auto model selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection) — task routing and Auto tiers.

### Official announcements and research

[^3]: [October 14 update and Max](https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/) — stage-specific reasoning and updated workflows.
[^4]: [Project HydraFusion](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/) — architecture and historical offline evaluations.

Private official-source discovery was used to cross-check the topic. All published claims use public official sources; private-only roadmap details are excluded.
