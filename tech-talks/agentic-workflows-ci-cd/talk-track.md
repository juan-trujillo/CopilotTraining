---
status: active
updated: 2026-11-24
section: "Delegate and Coordinate"
---

# Agentic Workflows in CI/CD — Talk Track

**Run time:** 42 minutes + 2 minutes Q&A = 44 minutes

**Audience:** Developer Leads, GitHub admins, platform engineers  
**Core argument:** Agent reasoning can explain and prepare evidence around CI/CD; deterministic checks and authorized people retain control of pass/fail and production promotion.

Use each objective to make the slide's answer explicit. Durations are speaker-time targets; references are untimed and Q&A has two minutes.

| Slide | Objective | Time |
|---|---|---:|
| 1. Agentic Workflows in CI/CD | Frame the audience, decision, and timebox. | 1 min |
| 2. A new reasoning layer around CI/CD | Establish the talk's claim: delegate interpretation, preserve deterministic gates and authority. | 1 min |
| 3. Follow one failure into release readiness | Preview the narrative from failed test to evidence-backed promotion decision. | 1 min |
| 4. Find the Right Task | Introduce the first section: observe, interpret, and keep authority clear. | 0.5 min |
| 5. Reason over varied evidence; keep assertions deterministic | Separate deterministic verification from context-heavy interpretation. | 1.5 min |
| 6. The boundary: interpret, propose, verify, authorize | Give the audience a reusable four-part judgment model. | 2 min |
| 7. Analyze and Report CI Failure | Introduce the diagnosis example and its source and lock artifacts. | 0.5 min |
| 8. GitHub Agentic Workflows | Trace Markdown through compilation, Actions, and the sandboxed agent. | 1.5 min |
| 9. One authored file becomes an Actions workflow | Connect frontmatter and instructions to the generated lock. | 1 min |
| 10. An event starts an agent with bounded tools | Trace a CI event through the agent and a scoped output. | 1 min |
| 11. A workflow declares trigger, reads, and writes | Read the example frontmatter and identify its permissions and output scope. | 2.5 min |
| 12. Give the agent a testable assignment | Show how instructions require evidence, uncertainty, and an explicit stop. | 1.5 min |
| 13. Compile, inspect, then activate | Make generated workflow review part of the development loop. | 2 min |
| 14. CI failure diagnosis, with evidence | Walk through one imagined failure report without presenting a hypothesis as a result. | 2.5 min |
| 15. Separate the runner result from the domain result | Clarify what a successful agent run does—and does not—prove. | 2 min |
| 16. Bound Effects | Introduce the write boundary, runtime trust, and downstream CI. | 0.5 min |
| 17. Safe outputs separate request from authority | Explain buffered requests and separate scoped write jobs. | 1.5 min |
| 18. Defense in depth has explicit trust boundaries | Name the runtime, config, and plan trust layers and what admins still review. | 2 min |
| 19. Generated PRs need an intentional CI trigger | Surface the default-token event behavior and narrow recovery option. | 2 min |
| 20. Readiness to Release | Introduce the move from CI diagnosis to release evidence. | 0.5 min |
| 21. Carry the pattern into CD as readiness evidence | Assemble release evidence without delegating production deployment. | 2.5 min |
| 22. Keep production promotion in a protected job | Explain the example Environment gate, reviewer, ref condition, and OIDC role. | 2 min |
| 23. Make failure and recovery visible | Apply the checklist to a missing run, weak diagnosis, denied output, or blocked release. | 2 min |
| 24. Universe 2026: two related launches | Report `gh-aw` GA and outcome-based Copilot Automations, keeping products distinct. | 1.5 min |
| 25. Pick the control plane that fits the job | Compare `gh-aw`, Copilot Automations, and deterministic Actions by need. | 2 min |
| 26. Pilot with one bounded workflow | Give leads and admins a staged, evidence-based adoption plan. | 2 min |
| 27. Take the decision back to your repo | Recap what to delegate and what must remain a gate. | 1 min |
| 28. What You Can Do Today | Translate the pilot into actions for today, this week, and this month. | 1 min |
| 29. References | Keep official docs available for follow-up. | — |
| 30. Thank you + Q&A | Take one or two short questions; return longer design questions to the team's review. | 2 min |

## Slide-by-slide speaker cues

### Slide 1 — Agentic Workflows in CI/CD

**Objective:** Set the scope: repository automation in GitHub Actions, for practitioners who own both delivery flow and policy.

**Say:** “We are going to start with a failed check, not with a tour of AI features. The question is where an agent can make CI/CD information more useful while leaving the actual release decision inspectable.”

### Slide 2 — A new reasoning layer around CI/CD

**Objective:** State the thesis and avoid framing agentic workflows as replacements for builds or deployment jobs.

**Say:** “A test runner can tell us that a check failed. The agent can help explain why this failure is different from the last one. The check remains the authority on whether it passed.”

**Clarify:** A diagnosis is an interpretation of the check and its context; it does not change the check's recorded conclusion or grant deployment approval.

### Slide 3 — Follow one failure into release readiness

**Objective:** Preview the arc: investigate → compile and inspect → apply the same limits to release readiness.

**Say:** “We will trace one CI diagnosis, inspect how `gh-aw` packages that work, and then ask what the same pattern can safely contribute before production promotion.”

### Slide 4 — Find the Right Task

**Objective:** Introduce the first section: observe the run, interpret evidence, and keep authority clear.

**Say:** “First, choose a task where repository context can improve the explanation. We will locate the run and SHA, interpret the evidence, and leave the gate in charge of the result.”

### Slide 5 — Reason over varied evidence; keep assertions deterministic

**Objective:** Help attendees identify reasoning-heavy work versus deterministic gates.

**Say:** “Use an agent where the input is varied and evidence is scattered: logs, recent changes, tests, and repository conventions. Keep exact invariants—required checks, signatures, policy thresholds—in ordinary validation.”

**Clarify:** “Deterministic” here means the rule produces a reproducible pass/fail for the same inputs. A suggested explanation is useful to investigate, but a test or policy check must establish the result.

### Slide 6 — The boundary: interpret, propose, verify, authorize

**Objective:** Introduce the recurring decision model.

**Say:** “The agent interprets context and may propose an action. A deterministic check verifies a property. A person or a configured policy grants authority. Keep those verbs separate in workflow names, logs, and dashboards.”

**Clarify the four cards:** The first two are actions by the agent: interpret evidence and propose a bounded output. The third is a check or policy evaluating a condition. The fourth is a human or configured control authorizing a consequential action; it is not automatically the agent's decision.

### Slide 7 — Analyze and Report CI Failure

**Objective:** Introduce the failed-run walkthrough and the two workflow artifacts.

**Say:** “Now we will follow a failed CI run: select it, read the relevant evidence, and report a next check. The Markdown source and compiled lock are both part of the review.”

### Slide 8 — GitHub Agentic Workflows

**Objective:** Explain how Agentic Workflows adds a bounded AI agent to GitHub Actions.

**Say:** “GitHub Agentic Workflows is an open-source project for running AI-powered repository automation through Actions. Starting on the left, a developer writes the task and its boundaries in Markdown. The `gh aw` CLI compiles that source into an Actions workflow, which runs when its event matches. Actions starts the selected AI agent in a sandboxed runtime; it uses permitted tools to inspect context and report findings. For example, after a CI failure the agent can examine logs and propose a diagnosis. The CI check still determines pass or fail.”

**Clarify the diagram:** The arrows show an authoring step followed by a runtime step: compilation generates the `.lock.yml` before a matching event starts it. The sandbox represents the agent's runtime, not a guarantee that custom steps or the runner host are isolated or trustworthy.

**Transition:** “Let's open the Markdown source and see how it relates to the generated workflow.”

### Slide 9 — One authored file becomes an Actions workflow

**Objective:** Show where the frontmatter, instructions, and generated workflow belong.

**Say:** “This is a schematic of one authored file, `ci-failure.md`. The YAML frontmatter defines when it runs and its boundaries; the Markdown body tells the agent what to do. `gh aw compile` validates the configuration and generates `ci-failure.lock.yml`. Actions executes the lock, which loads the Markdown instructions at runtime. Review both files together.”

**Transition:** “The next two code slides expand the frontmatter and body of this same illustrative file; neither is the generated lock.”

### Slide 10 — An event starts an agent with bounded tools

**Objective:** Trace one event through the runtime and distinguish a request from a write.

**Say:** “Suppose the selected CI run fails. GitHub Actions starts the compiled workflow and the configured AI engine uses its permitted tools to inspect the logs and repository context. If configured and a PR target exists, the agent can request a comment; a separate safe-output job processes the allowed write. Inspect the run and its evidence. If evidence or the target is missing, report that gap rather than guessing.”

**Emphasize:** This is an illustrative outcome, not a recorded run; a diagnosis does not change the original CI result.

### Slide 11 — A workflow declares trigger, reads, and writes

**Objective:** Read the representative failed-run configuration line by line.

**Say:** “This is the frontmatter of the source file we just saw, not the compiled workflow. The event narrows the source to completed `CI` runs on `main` with a failure conclusion. The agent reads Actions and PR context. The separate safe-output handler can post at most one comment to an identified PR. That scope is the contract, not a promise that every run has enough context.”

**Clarify the three numbered callouts:** **1** identifies the completed source workflow, branch, and failure outcome; the `gh-aw` compiler turns the conclusion filter into a guarded condition. **2** identifies the agent's read permissions and tools; `copilot-requests: write` authorizes Copilot requests, not a general repository write. **3** limits the requested comment to one; `target: "*"` still requires the agent to identify the intended PR. The callout numbers are labels for parts of this excerpt, not separate workflows.

**Emphasize:** The example must be compiled and the lock reviewed before use. `workflow_run` is a privileged boundary in GitHub Actions; the security checks and branch/ref scope matter.
For a first pilot, disable the comment output and inspect read-only reports before enabling this one bounded write.

### Slide 12 — Give the agent a testable assignment

**Objective:** Show that natural-language instructions can require observable proof and bound the action.

**Say:** “This is the Markdown body of that same source file, below its YAML frontmatter. The prompt asks for the first useful error, exact run and head SHA, a bounded hypothesis, confidence, and the next deterministic check. It explicitly prohibits code edits, check reruns, approvals, and unsupported claims.”

**Clarify:** The run ID and head SHA tie the claim to a specific execution and revision. A hypothesis is a possible explanation, not a verified cause. If the run, evidence, or target cannot be established, the requested result is a report of the missing information.

### Slide 13 — Compile, inspect, then activate

**Objective:** Make safe development lifecycle part of the practice.

**Say:** “The Markdown file is the authoring surface; the generated lock is what Actions executes. Compile with validation, inspect the event and effective permissions, then open a PR containing both artifacts. Review any added custom step as executable trusted code.”

**Clarify the lifecycle:** “Author” and “compile” produce the two files; “inspect” is the human review of generated behavior; “activate” means merging them and observing actual runs. A successful compile validates configuration—it does not prove a diagnosis or runner is trustworthy.

### Slide 14 — CI failure diagnosis, with evidence

**Objective:** Demonstrate the expected output shape, not an invented success metric.

**Say:** “In this illustrative report, CI run #4812 on head `7ac41d2` reports that `test/parser.spec.ts` expected three tokens and received four. The agent distinguishes that observation from its medium-confidence hypothesis that a delimiter is tokenized differently. The suggested next step is a focused parser test on that same SHA. A person or a separately authorized workflow runs the check; this report does not establish a fix.”

**Clarify:** The run, SHA, error, and hypothesis are example data, not an observed production result. “Medium” is the agent's stated confidence, not a measured probability. The slide does not show a failing line or proof of the cause.

**Ask the room:** “Which evidence would make this diagnosis useful enough to act on in your repo?”

### Slide 15 — Separate the runner result from the domain result

**Objective:** Prevent a green agent job from being mistaken for a passed test or accepted diagnosis.

**Say:** “The job can succeed because it posted a report. That is a runner result. The test may still be red; the diagnosis may still be wrong. Put those states in separate fields and links.”

**Clarify the three cards:** Green describes the agent job completing its reporting work; red describes the original CI check failing on its source SHA; “Investigate” is the developer's next decision. A green agent run does not turn the red check green.

### Slide 16 — Bound Effects

**Objective:** Introduce the boundaries around writes, runtime trust, and downstream CI.

**Say:** “The next question is how the agent's request crosses into an actual write. We will inspect the handler, the runtime assumptions, and the identity that triggers downstream CI.”

### Slide 17 — Safe outputs separate request from authority

**Objective:** Explain why an agent should ask for a write rather than receive a general-purpose token.

**Say:** “Safe outputs buffer structured requests and process them through a separate permission-controlled job. That creates room for target checks and per-operation limits. The agent's prose is not itself a GitHub API credential.”

**Clarify the flow:** The agent produces a request; the intermediate artifact holds it without making the GitHub write. The configured controls inspect it, and the handler performs an allowed operation with its own scoped permissions. A denied or missing output calls for inspecting the handler and policy, not assuming a comment was posted.

**Caveat:** Safe outputs may be configured for different operations, including merge behavior. Do not imply they always enforce human approval; inspect the actual config and organization policy.

### Slide 18 — Defense in depth has explicit trust boundaries

**Objective:** Give GitHub admins an accurate security review checklist.

**Say:** “The project documents substrate, configuration, and plan-level trust. The sandbox and firewall help constrain execution; safe outputs stage external effects; threat detection analyzes outputs. Admins still review executable steps, permissions, pins, secrets, runner trust, network destinations, and policy opt-outs.”

**Clarify the three cards:** **Substrate** is the infrastructure that runs and isolates the agent, including the runner and container or microVM. **Configuration** determines tools, permissions, credentials, and network access. **Plan** governs how requested effects move across stages and through checks to handlers. Custom steps and the runner host still need explicit trust review.

**Caveat:** Threat detection is another control, not a proof of safety. In the documented default warn mode, detection findings do not simply mean every action is blocked; know the configured policy.

### Slide 19 — Generated PRs need an intentional CI trigger

**Objective:** Expose the common event-cascade behavior and a least-privilege recovery.

**Say:** “A PR created with the default Actions `GITHUB_TOKEN` may not start CI automatically. Check the downstream event and whether its run is awaiting approval. If the team needs an automatic trigger, the `gh-aw` guide describes a fine-grained token or App for an extra empty commit; use only the repository scope and permission needed.”

**Clarify the two cards:** Current [GitHub Actions documentation](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow#triggering-a-workflow-from-a-workflow) says `pull_request` events for `opened`, `synchronize`, and `reopened` can create **approval-required** runs when caused by `GITHUB_TOKEN`; a user with write access can approve them. A `push` caused by that token generally does not create a new run. The [gh-aw CI guide](https://github.github.com/gh-aw/reference/triggering-ci/) describes the extra-commit option. Check the current run state, policy, actor, and SHA rather than assuming no run exists.

**Do not:** Show a real token or normalize broad PAT use.

### Slide 20 — Readiness to Release

**Objective:** Introduce release readiness as an evidence-gathering task, with promotion controlled separately.

**Say:** “We can carry the same pattern into CD: assemble the evidence, expose gaps, and let the protected production job control promotion.”

### Slide 21 — Carry the pattern into CD as readiness evidence

**Objective:** Show the safe extension from CI diagnosis to release preparation.

**Say:** “Before a release, an agent can assemble what changed, link required checks, identify the staged artifact, and summarize staging evidence. That makes a human decision better informed. The proposed pattern keeps deployment in a conventional workflow with its own immutable artifact and policy.”

**Clarify:** The readiness note is a proposed design pattern, not a built-in `gh-aw` deployment gate. An artifact digest identifies what is being considered for release; a missing digest, failed check, or absent staging result is a gap to report and resolve, not permission to promote.

### Slide 22 — Keep production promotion in a protected job

**Objective:** Explain the conventional Actions control plane that remains authoritative.

**Say:** “The example restricts the job to `main` and references the `production` Environment. Configure reviewers and branch rules there. The deploy job requests permission to obtain an OIDC token; configure cloud-side trust for a narrowly scoped role where supported. In the proposed architecture the agent does not receive production credentials or approval authority.”

**Clarify the code:** `workflow_dispatch` starts the workflow manually; `environment: production` references an Environment whose protections must be configured separately. `id-token: write` permits requesting an OIDC token—it does not configure cloud trust or deploy an artifact by itself. The script is illustrative; ensure it verifies and deploys the intended artifact.

### Slide 23 — Make failure and recovery visible

**Objective:** Leave the audience with an operational response for partial or incorrect outcomes.

**Say:** “When evidence is missing, report that. When an output is denied, inspect the safe-output job and its policy. When CI does not start, check the actor and head SHA. When a release check fails, the protected deployment job remains blocked. Never convert an analysis outage into a deployment success.”

**Clarify the cards:** Missing trigger evidence calls for checking the source run and PR association; an unsupported diagnosis calls for checking its citations; a denied safe output calls for inspecting the handler and policy; a blocked promotion stays blocked until the check is resolved or the release owner takes the authorized next step.

### Slide 24 — Universe 2026: two related launches

**Objective:** Tie the design discussion to the current product landscape with exact distinctions.

**Say:** “On October 28, GitHub announced Agentic Workflows GA. It also announced that Copilot Automations can use outcomes to propose improvements for review. Those are related developments, but separate products and control planes. The `gh-aw` sample remains source-controlled Markdown compiled to Actions.”

**Clarify:** The outcome-based improvement proposals belong to Copilot Automations; the illustrated `gh-aw` workflow does not acquire that behavior from the announcement. The date describes announcements, not a measured result for this team's workflow.

### Slide 25 — Pick the control plane that fits the job

**Objective:** Give leads and admins a practical selection heuristic.

**Say:** “Choose `gh-aw` when workflow source and compiled Actions behavior need repo review. Consider Copilot Automations when the need is team-managed Copilot automation and outcome-based proposals. Keep deterministic Actions for assertions, promotion, and deploy. Some systems can combine all three, but draw their handoffs explicitly.”

**Clarify:** “Control plane” here means where the team configures, reviews, and operates the work. These are selection considerations, not mutually exclusive products: `gh-aw` itself runs through Actions, and a conventional Actions job can remain the deployment gate.

### Slide 26 — Pilot with one bounded workflow

**Objective:** Convert the talk into a small pilot with measurable, non-invented outcomes.

**Say:** “Start in a low-risk repo, read-only on a single failure class. Baseline diagnosis latency, maintainer time to first useful action, false or unsupported claims, output denials, and CI event behavior. Decide whether to proceed from those observations; do not set an adoption target before you have a baseline.”

**Clarify the four numbered cards:** These are an intended sequence: select a repeatable case, measure the existing process, pilot a read-only report, then decide whether evidence justifies a scoped write. The metrics are things to measure, not claimed improvements.

### Slide 27 — Take the decision back to your repo

**Objective:** Close on the transferable principle.

**Say:** “Choose one reasoning task, one evidence contract, one bounded output, and one human recovery path. Let the existing checks continue to decide whether code passed. Let the configured deployment policy decide who can promote.”

**Clarify the three number cards:** These are **counts, not sequential steps**. They summarize the proposed “after” state:

- **1 bounded reasoning task:** Start with a specific job, such as diagnosing a CI failure.
- **2 versioned artifacts:** Review the authored Markdown source and generated `.lock.yml` Actions workflow together.
- **3 distinct roles:** The agent interprets evidence; CI checks determine pass/fail; a person or configured policy authorizes promotion.

These counts frame this example, not requirements that every workflow must follow. The comparison illustrates a proposed approach rather than measured before-and-after results.

### Slide 28 — What You Can Do Today

**Objective:** Turn the pilot into concrete steps for today, this week, and this month.

**Say:** “Today, pick a low-risk failure class and record the current effort. This week, try a read-only diagnosis and inspect the compiled lock and its evidence. This month, consider one safe output only if the pilot supports it, and keep deployment separate.”

**Clarify:** “Today / this week / this month” is a suggested adoption horizon, not a deadline or promise. The step from read-only to a scoped write is conditional on the team's observed results and policy.

### Slide 29 — References

**Objective:** Make primary and supporting sources easy to find after the talk.

**Say:** No narration needed; leave the links visible briefly.

### Slide 30 — Thank you + Q&A

**Objective:** Take focused questions without obscuring the core boundary.

**Say:** “For a first pilot, what is the CI/CD decision you would like to make easier to inspect?”
