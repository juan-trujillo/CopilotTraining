---
status: active
updated: 2026-10-26
section: "Agent Architecture"
---

# HydraFusion: How It Works and How to Use It — Talk Track

**Deck:** [copilot-auto-mode](../../slides/tech-talks/copilot-auto-mode.md)

**Content baseline:** [Technical article and sources](README.md)

**Duration:** 20 minutes, including two minutes of discussion.

**Verified content date:** October 26, 2026.

Spoken text follows each slide heading. Italicized **Presenter cues** are delivery instructions, not audience-facing slide content. Timings include pauses, diagram walkthroughs and command inspection.

**Before presenting:** Use an existing repository for examples. No bundled exercise files are required. A live HydraFusion call is optional, requires preview access and consumes AI credits. Choose either the interactive or single-prompt example on slide 12; reserve at most two minutes for execution. Without a live call, use that time to inspect the commands and discuss expected evidence. Describe examples as proposed prompts, never as recorded results.

## 1. Title

**Time:** 0:00–0:20 · **Duration:** 0:20

HydraFusion brings model orchestration into Copilot's model picker. For each prompt, the system chooses an execution pattern, the participating models and their reasoning effort. We receive one final response. In the next twenty minutes, we will trace that mechanism, see how to enable it, and identify the evidence that makes a result useful.

## 2. Core Question

**Time:** 0:20–0:45 · **Duration:** 0:25

Our question is straightforward: how does HydraFusion orchestrate models, and how do we use it? There are three outcomes: understand the orchestration, enable it in a Copilot client, and inspect the result. The three patterns and three clients are documented capabilities. HydraFusion and Max are research preview, with no SLA, and are not intended for production workloads.

## 3. Table of Contents

**Time:** 0:45–1:00 · **Duration:** 0:15

We will distinguish the orchestrator from Auto, follow the execution paths, use the client controls, and evaluate what actually ran. The execution diagram is our anchor: the same picker entry can lead to different workflows for different prompts.

## 4. Part 1 — Understand the orchestrator

**Time:** 1:00–1:20 · **Duration:** 0:20

Selecting HydraFusion delegates a runtime decision: how to solve this prompt. Auto selects a model. HydraFusion selects a workflow as well as models and effort. Max applies depth-oriented tuning to the same architecture. Additional passes are selective; one solver can be enough.

## 5. Auto routes a model; HydraFusion selects a workflow

**Time:** 1:20–2:30 · **Duration:** 1:10

Start with the same ordinary coding prompt on both sides of this slide.

With Auto, Copilot considers task fit and service health, then selects a model. Its Efficiency, Balance and Intelligence tiers express routing preferences. That is a useful baseline for explanations and focused coding work.

With HydraFusion, the runtime also decides how to approach the task. It can use one solver, add a judge and further work if needed, or introduce independent review before revision. Model choice and reasoning effort belong to those runtime decisions.

The useful distinction is the scope of delegation. Selecting HydraFusion delegates coordination across solving and reviewing stages. It does not give us a fixed roster or a guaranteed number of passes. The picker exposes a system whose internal assignments can change.

*Presenter cue: Point from the shared input to the different system decisions. This is a conceptual comparison, not a captured execution trace.*

## 6. Max tunes the same architecture for deeper reasoning

**Time:** 2:30–4:00 · **Duration:** 1:30

HydraFusion and HydraFusion Max share the orchestration architecture. Their tuning differs.

The balanced HydraFusion option coordinates solving and review with token efficiency in mind. The October update describes medium reasoning for drafting and high reasoning for reviews. That division gives the review stage a different analysis budget from the initial draft.

Max applies depth-oriented tuning and can use extra-high reasoning. A useful candidate is a demanding analysis where exploring assumptions and competing designs matters enough to justify additional execution.

The decision remains task-specific. Max does not promise extra-high effort at every stage, a fixed execution path, or a correct answer. It gives the runtime a depth-oriented policy to apply where useful.

The model pool is also changeable. Organization policies constrain access, and the runtime chooses the constituent models. We can select HydraFusion or Max, then observe the actual work. We cannot force a particular internal pattern or model.

*Presenter cue: Ask briefly which existing analysis task would benefit from deeper examination. Keep answers to one example; reserve the full discussion for the end.*

## 7. Part 2 — Follow the execution

**Time:** 4:00–4:20 · **Duration:** 0:20

Now we can trace the three documented paths: Single, Cascade and Critique. Each starts from a prompt and ends with one final response. The orchestrator makes the choice for each prompt, so a follow-up in the same conversation can take a different path.

## 8. Three conceptual execution paths

**Time:** 4:20–6:10 · **Duration:** 1:50

Read the diagram from left to right.

In **Single**, the selected model solves the task and returns the response. This preserves a direct solving path. A Single result is a valid orchestration choice.

In **Cascade**, an efficient solver drafts the result. A judge evaluates that work. The judge can accept it, or request repair or escalation when further work is needed. Follow the branch: additional solving is conditional on that evaluation.

In **Critique**, the first solver drafts the result, a separate model reviews it, and the original solver revises once using the feedback. The additional perspective comes with the execution time of review and revision.

Notice the actors. The orchestrator chooses the path. The solver produces work. A judge evaluates whether further work is needed. A critic provides an independent review. The original solver incorporates critique into its revision.

These arrows describe the architecture. They are not a record of a product run. A prompt asking for complex analysis does not prove that Critique ran; only actual client progress can establish the selected pattern.

The memorable idea is selective execution: one picker entry can produce one solving pass, conditional further work, or independent review. The system decides again for the next prompt.

*Presenter cue: Trace the Cascade accept branch and repair branch separately. Then trace the Critique return to the original solver.*

## 9. Judges and critics inspect work at review depth

**Time:** 6:10–8:00 · **Duration:** 1:50

The October update makes the review stages more useful by giving them better evidence and stage-specific reasoning.

For Cascade, the judge can evaluate the draft and request repair or escalation. For Critique, reviewers can use tools to inspect actual workspace files, and the system can use parallel critics. That enables review grounded in the work being produced.

Consider a proposed change that preserves a function signature but alters its behavior at a boundary. Reading the edited function alone may leave an open question about callers. Workspace inspection gives a critic a way to examine those callers. This illustrates why tool access matters; it is not a claim that a particular defect was found in a recorded run.

Reasoning effort also varies by stage: medium for drafting, high for reviews, and extra-high where Max uses it. More analysis still needs evidence and verification.

Two architectural boundaries help interpret the interface. HydraFusion coordinates its own internal passes and does not start subagents. It also has no independent context window. The displayed context limit conservatively reflects the constituent models.

The main conversation stays with the same model where possible for caching, while helpers receive relevant context. If a client requires compaction before switching a long conversation, follow that client guidance.

*Presenter cue: Keep workspace persistence and billing for slide 16. This slide explains how review obtains evidence.*

## 10. Part 3 — Use HydraFusion

**Time:** 8:00–8:15 · **Duration:** 0:15

Using it follows a familiar sequence: enable the preview in a supported client, select HydraFusion or Max, and send a normal Copilot prompt. Then inspect the execution path, response and workspace changes.

## 11. Enable HydraFusion, then select it in the picker

**Time:** 8:15–9:40 · **Duration:** 1:25

There are three client entry points.

In **Copilot CLI**, start with `copilot --experimental`, use `/model`, and select HydraFusion or HydraFusion Max from the research-preview options. If experimental mode is enabled inside an existing session, restart the CLI as documented. Use `copilot update` when an update is needed.

In **VS Code**, the documented baseline is version 1.140 or newer, or Insiders. Enable `chat.copilot.hydraFusion.enabled`, then select HydraFusion or Max in Chat.

In the **Copilot app**, enable HydraFusion under Settings, Experimental, and select the option in the picker.

Availability depends on the plan, preview access and organization policy. If the entry is missing, check those conditions and administrator access. Ordinary tool permissions remain in place.

Once a response completes in VS Code or the app, the response details expose participating models. The interface helps us see what ran; the settings simply make the feature available.

*Presenter cue: Point to each client column. There is no need to open all three clients.*

## 12. Start, select, prompt, then inspect progress

**Time:** 9:40–12:00 · **Duration:** 2:20

The interactive sequence is short: start experimental mode, open `/model`, select HydraFusion or Max, and send a prompt. Watch actual progress, then use `/usage` to inspect session consumption.

*Presenter cue: Use the first twenty seconds for that explanation. Choose one of the following delivery paths for the remaining two minutes.*

**With a live call:** Run from an existing repository containing a README. Either send the prompt in the interactive session or use this single-prompt command, rather than running both:

```powershell
copilot --experimental --model hydrafusion -p "Summarize this repository's README and list any setup assumptions. Do not edit files."
```

While it runs, narrate only visible evidence: the selected pattern, planned passes, progress, elapsed time and warnings. Record a usage starting point when comparing session consumption. At the two-minute limit, press Esc if execution is unfinished and identify what remains unverified. Use slide 13 for brief inspection and examples.

**Without a live call:** Read the command and ask what would make its answer acceptable. The summary needs to match the README; setup assumptions need to be distinguished from documented requirements. Identify the progress fields to inspect and explain that `/usage` reports session totals. Discuss what evidence would establish that the read-only instruction was respected.

**Spoken transition:** The command specifies the task and its boundary. The runtime selects the path. The response and client evidence tell us what actually happened.

*Presenter cue: No generated response, trace, elapsed time or credit amount is supplied by this talk. If a call fails or access is unavailable, describe that fact and continue with the command walkthrough.*

## 13. Try explanation, implementation or demanding analysis

**Time:** 12:00–14:00 · **Duration:** 2:00

These three prompts illustrate useful work and the evidence to inspect.

For **explanation**, choose an existing function and ask for its behavior and boundary cases, with no edits. Compare the explanation against the code. An answer that sounds plausible still needs that comparison.

For **implementation**, ask for a bounded change: add an optional timeout, preserve callers, add edge-case tests and run them. Supply the relevant files and compatibility requirements. Inspect the diff and independently run the repository's relevant checks. A test-runner success is evidence about those tests; acceptance also depends on whether they cover the requested behavior.

For **analysis**, provide two recovery designs and concrete failure scenarios. Ask for assumptions and tradeoffs. Inspect scenario coverage and unresolved questions. This is a useful place to consider Max when analysis depth matters.

The prompt category does not force a pattern. An explanation can use Single; an implementation can take whatever path the runtime selects. The useful practice is to pair each request with a clear inspection goal.

If the preceding live call completed, use its actual response for the first comparison. If it did not complete, state that clearly and identify the next check. A visible incomplete result is useful evidence about the attempt.

*Presenter cue: Keep all three examples concise. Use the remaining time to inspect the actual live result, or ask which acceptance check fits one proposed prompt.*

## 14. Part 4 — Evaluate the result

**Time:** 14:00–14:15 · **Duration:** 0:15

Evaluation connects three things: what the progress says ran, what the response and files contain, and what the session consumed. An internal review contributes analysis. Independent checks establish whether the result fits our task.

## 15. Inspect what ran and whether the result fits

**Time:** 14:15–15:30 · **Duration:** 1:15

Start with actual execution evidence: pattern, passes, elapsed time and warnings. Avoid inferring the path from the quality of the answer.

Next inspect the response and participating models. In VS Code or the app, use the response details. For an edit, read the changed files and verify the relevant behavior. Rerun the appropriate checks independently.

Then inspect usage. CLI `/usage` reports per-model session consumption. A starting and ending reading helps attribute consumption to a particular comparison; a single ending total can include earlier work.

If a result is wrong, give one precise failing example, narrow the task, and rerun the relevant checks. If execution is incomplete, retain that distinction.

For a meaningful comparison, use identical inputs and matching repository revisions in separate sessions. Record the option, observed pattern, accepted checks, actual time and credits. One run illustrates behavior; repeated comparable runs help assess consistency.

## 16. Keep workspace changes, billing and preview limits visible

**Time:** 15:30–16:50 · **Duration:** 1:20

Four operating boundaries matter.

First, a discarded draft can leave file edits behind. Discarding the draft and reverting its edits are separate events. Inspect workspace state after completion, interruption or failure, and preserve unrelated changes during recovery.

Second, every participating model bills at its standard rate. There is no separate orchestration surcharge, and HydraFusion does not receive the Auto discount. Additional passes can add time and AI-credit consumption.

Third, organization policies govern eligible models and preview access. Normal tool permissions continue to apply.

Fourth, HydraFusion and Max remain research preview, without an SLA, and are not intended for production workloads.

Historical offline evaluations illustrate quality and cost tradeoffs under their original conditions. They do not benchmark the current Max option or forecast savings for a local task. The practical comparison is repeated work with matching inputs and independently checked outcomes.

*Presenter cue: Historical benchmark figures remain supporting material in the article and deck notes; avoid adding a benchmark detour to this time slot.*

## 17. From a picker entry to an inspectable runtime

**Time:** 16:50–17:20 · **Duration:** 0:30

We can now interpret the picker entry as a runtime choice. Auto routes a model; HydraFusion orchestrates a workflow. The three patterns explain the possible paths. The clients expose actual execution evidence. We verify behavior and workspace state, then inspect per-model consumption. Three patterns, three client surfaces and one final response are structural facts, rather than measured productivity gains.

## 18. What You Can Do Today

**Time:** 17:20–17:50 · **Duration:** 0:30

Start with one client and a read-only explanation whose accuracy is easy to check. Next, try one bounded non-production edit with explicit acceptance checks. Record real time and usage. Consider Max for demanding analysis, and compare matching inputs in separate sessions. Recheck the preview documentation as models and behavior evolve.

## 19. References

**Time:** 17:50–18:00 · **Duration:** 0:10

Use the current documentation for operating behavior, the October update for the new mechanisms, and the launch article for architecture and historical evaluations.

## 20. Thank You

**Time:** 18:00–20:00 · **Duration:** 2:00 discussion

Understand the orchestrator, follow the execution, use the client controls, and evaluate the actual result.

Which existing task would make a useful comparison because its result is easy to verify?

*Presenter cue: Invite one or two concrete examples. Ask what repository context is needed, what remains human-approved, and which check establishes acceptance. Use these short answers when relevant:*

- **Can we force Critique?** The runtime chooses the pattern for each prompt; prompt wording does not guarantee it.
- **Does Max guarantee a better result?** Max provides depth-oriented tuning. Compare checked outcomes, time and usage on the actual task.
- **Does discarding a draft undo its files?** Automatic rollback cannot be assumed. Inspect workspace state.
- **What if the option is unavailable?** Check the client setting, version, preview access and organization policy.
- **Can we use this for production workloads?** The research preview is not intended for production workloads and has no SLA.

**Closing:** Choose one bounded experiment, define the evidence first, and use what actually ran to decide the next step.

*Presenter cue: Close at twenty minutes.*

## Source notes

This track adapts the existing deck and its [source article](README.md); it adds no observed model-run results.

- [Using HydraFusion](https://docs.github.com/en/enterprise-cloud@latest/early-access/copilot/hydrafusion): setup, execution patterns, progress, billing and limitations.
- [October 14 update and Max](https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/): stage reasoning, judge/repair and workspace-aware critics.
- [Auto model selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection): model routing and preferences.
- [Project HydraFusion](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/): architecture and historical evaluation context.
