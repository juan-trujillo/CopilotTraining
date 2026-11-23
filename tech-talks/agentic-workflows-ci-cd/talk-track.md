---
status: active
updated: 2026-11-20
section: "Delegate and Coordinate"
---

# Agentic Workflows in CI/CD — Talk Track

**Run time:** 41 minutes + 2 minutes Q&A = 43 minutes  
**Audience:** Developer Leads, GitHub admins, platform engineers  
**Core argument:** Agent reasoning can explain and prepare evidence around CI/CD; deterministic checks and authorized people retain control of pass/fail and production promotion.

Use each objective to make the slide's answer explicit. Durations are speaker-time targets; the references and thank-you slides are not timed.

| Slide | Objective | Time |
|---|---|---:|
| 1. Agentic Workflows in CI/CD | Frame the audience, decision, and timebox. | 1 min |
| 2. A new reasoning layer around CI/CD | Establish the talk's claim: delegate interpretation, preserve deterministic gates and authority. | 2 min |
| 3. Follow one failure into release readiness | Preview the narrative from failed test to evidence-backed promotion decision. | 1 min |
| 4. Where can an agent add value? | Separate deterministic verification from context-heavy interpretation. | 1 min |
| 5. The boundary: interpret, propose, verify, authorize | Give the audience a reusable four-part judgment model. | 2 min |
| 6. `gh-aw`: Markdown in, Actions workflow out | Define the product and its source/compiled artifact relationship. | 2 min |
| 7. A workflow declares trigger, reads, and writes | Read the example frontmatter and identify its permissions and output scope. | 3 min |
| 8. Give the agent a testable assignment | Show how instructions require evidence, uncertainty, and an explicit stop. | 2 min |
| 9. Compile, inspect, then activate | Make generated workflow review part of the development loop. | 2 min |
| 10. CI failure diagnosis, with evidence | Walk through one imagined failure report and show how to avoid turning a hypothesis into a result. | 3 min |
| 11. Separate the runner result from the domain result | Clarify what a successful agent run does—and does not—prove. | 2 min |
| 12. Safe outputs separate request from authority | Explain buffered requests and separate scoped write jobs. | 2 min |
| 13. Defense in depth has explicit trust boundaries | Name the runtime, config, and plan trust layers and what admins still review. | 2 min |
| 14. Generated PRs need an intentional CI trigger | Surface the default-token event behavior and narrow recovery option. | 2 min |
| 15. Carry the pattern into CD as readiness evidence | Move from a CI failure to release evidence without delegating production deployment. | 3 min |
| 16. Keep production promotion in a protected job | Explain the example Environment gate, reviewer, ref condition, and OIDC role. | 2 min |
| 17. Make failure and recovery visible | Apply the checklist to a missing run, weak diagnosis, denied output, or blocked release. | 2 min |
| 18. Universe 2026: two related launches | Report `gh-aw` GA and outcome-based Copilot Automations, keeping products distinct. | 2 min |
| 19. Pick the control plane that fits the job | Compare `gh-aw`, Copilot Automations, and deterministic Actions by need. | 2 min |
| 20. Pilot with one bounded workflow | Give leads and admins a staged, evidence-based adoption plan. | 2 min |
| 21. Take the decision back to your repo | Recap what to delegate and what must remain a gate. | 1 min |
| 22. References | Keep official docs available for follow-up. | — |
| 23. Thank you + Q&A | Take one or two short questions; return longer design questions to the team's review. | 2 min |

## Slide-by-slide speaker cues

### Slide 1 — Agentic Workflows in CI/CD

**Objective:** Set the scope: repository automation in GitHub Actions, for practitioners who own both delivery flow and policy.

**Say:** “We are going to start with a failed check, not with a tour of AI features. The question is where an agent can make CI/CD information more useful while leaving the actual release decision inspectable.”

### Slide 2 — A new reasoning layer around CI/CD

**Objective:** State the thesis and avoid framing agentic workflows as replacements for builds or deployment jobs.

**Say:** “A test runner can tell us that a check failed. The agent can help explain why this failure is different from the last one. The check remains the authority on whether it passed.”

### Slide 3 — Follow one failure into release readiness

**Objective:** Preview the arc: investigate → compile and inspect → apply the same limits to release readiness.

**Say:** “We will trace one CI diagnosis, inspect how `gh-aw` packages that work, and then ask what the same pattern can safely contribute before production promotion.”

### Slide 4 — Where can an agent add value?

**Objective:** Help attendees identify reasoning-heavy work versus deterministic gates.

**Say:** “Use an agent where the input is varied and evidence is scattered: logs, recent changes, tests, and repository conventions. Keep exact invariants—required checks, signatures, policy thresholds—in ordinary validation.”

### Slide 5 — The boundary: interpret, propose, verify, authorize

**Objective:** Introduce the recurring decision model.

**Say:** “The agent interprets context and may propose an action. A deterministic check verifies a property. A person or a configured policy grants authority. Keep those verbs separate in workflow names, logs, and dashboards.”

### Slide 6 — `gh-aw`: Markdown in, Actions workflow out

**Objective:** Define the mechanism before the audience sees code.

**Say:** “An agentic workflow has YAML frontmatter for trigger and controls, plus Markdown instructions for the task. The `gh aw` CLI compiles it into a `.lock.yml` Actions workflow. You review and version both files.”

### Slide 7 — A workflow declares trigger, reads, and writes

**Objective:** Read the representative failed-run configuration line by line.

**Say:** “The event narrows the source to completed `CI` runs on `main` with a failure conclusion. The agent reads Actions and PR context. The separate safe-output handler can post at most one comment to an identified PR. That scope is the contract, not a promise that every run has enough context.”

**Emphasize:** The example must be compiled and the lock reviewed before use. `workflow_run` is a privileged boundary in GitHub Actions; the security checks and branch/ref scope matter.
For a first pilot, disable the comment output and inspect read-only reports before enabling this one bounded write.

### Slide 8 — Give the agent a testable assignment

**Objective:** Show that natural-language instructions can require observable proof and bound the action.

**Say:** “The prompt asks for the first useful error, exact run and head SHA, a bounded hypothesis, confidence, and the next deterministic check. It explicitly prohibits code edits, check reruns, approvals, and unsupported claims.”

### Slide 9 — Compile, inspect, then activate

**Objective:** Make safe development lifecycle part of the practice.

**Say:** “The Markdown file is the authoring surface; the generated lock is what Actions executes. Compile with validation, inspect the event and effective permissions, then open a PR containing both artifacts. Review any added custom step as executable trusted code.”

### Slide 10 — CI failure diagnosis, with evidence

**Objective:** Demonstrate the expected output shape, not an invented success metric.

**Say:** “Imagine the test fails after a recent parser change. The agent should cite the failing job, line, and head SHA, and report a hypothesis such as a fixture mismatch only if it can point to evidence. It does not get to call the test fixed. A person runs the suggested command or lets the ordinary CI pipeline validate a patch.”

**Ask the room:** “Which evidence would make this diagnosis useful enough to act on in your repo?”

### Slide 11 — Separate the runner result from the domain result

**Objective:** Prevent a green agent job from being mistaken for a passed test or accepted diagnosis.

**Say:** “The job can succeed because it posted a report. That is a runner result. The test may still be red; the diagnosis may still be wrong. Put those states in separate fields and links.”

### Slide 12 — Safe outputs separate request from authority

**Objective:** Explain why an agent should ask for a write rather than receive a general-purpose token.

**Say:** “Safe outputs buffer structured requests and process them through a separate permission-controlled job. That creates room for target checks and per-operation limits. The agent's prose is not itself a GitHub API credential.”

**Caveat:** Safe outputs may be configured for different operations, including merge behavior. Do not imply they always enforce human approval; inspect the actual config and organization policy.

### Slide 13 — Defense in depth has explicit trust boundaries

**Objective:** Give GitHub admins an accurate security review checklist.

**Say:** “The project documents substrate, configuration, and plan-level trust. The sandbox and firewall help constrain execution; safe outputs stage external effects; threat detection analyzes outputs. Admins still review executable steps, permissions, pins, secrets, runner trust, network destinations, and policy opt-outs.”

**Caveat:** Threat detection is another control, not a proof of safety. In the documented default warn mode, detection findings do not simply mean every action is blocked; know the configured policy.

### Slide 14 — Generated PRs need an intentional CI trigger

**Objective:** Expose the common event-cascade behavior and a least-privilege recovery.

**Say:** “A PR created with the default Actions `GITHUB_TOKEN` does not trigger other workflow runs by default. If a workflow creates a patch PR and expects CI, plan that identity deliberately. The `gh-aw` guide describes a fine-grained token or App for an extra empty commit; use only the repo scope and permission needed.”

**Do not:** Show a real token or normalize broad PAT use.

### Slide 15 — Carry the pattern into CD as readiness evidence

**Objective:** Show the safe extension from CI diagnosis to release preparation.

**Say:** “Before a release, an agent can assemble what changed, link required checks, identify the staged artifact, and summarize staging evidence. That makes a human decision better informed. The proposed pattern keeps deployment in a conventional workflow with its own immutable artifact and policy.”

### Slide 16 — Keep production promotion in a protected job

**Objective:** Explain the conventional Actions control plane that remains authoritative.

**Say:** “The example pins promotion to `main` and references the `production` Environment. Configure reviewers and branch rules there. A short-lived OIDC identity can reach a narrowly scoped cloud role in the deploy job. The agent never receives that authority or an input that bypasses it.”

### Slide 17 — Make failure and recovery visible

**Objective:** Leave the audience with an operational response for partial or incorrect outcomes.

**Say:** “When evidence is missing, report that. When an output is denied, inspect the safe-output job and its policy. When CI does not start, check the actor and head SHA. When a release check fails, the protected deployment job remains blocked. Never convert an analysis outage into a deployment success.”

### Slide 18 — Universe 2026: two related launches

**Objective:** Tie the design discussion to the current product landscape with exact distinctions.

**Say:** “On October 28, GitHub announced Agentic Workflows GA. It also announced that Copilot Automations can use outcomes to propose improvements for review. Those are related developments, but separate products and control planes. The `gh-aw` sample remains source-controlled Markdown compiled to Actions.”

### Slide 19 — Pick the control plane that fits the job

**Objective:** Give leads and admins a practical selection heuristic.

**Say:** “Choose `gh-aw` when workflow source and compiled Actions behavior need repo review. Consider Copilot Automations when the need is team-managed Copilot automation and outcome-based proposals. Keep deterministic Actions for assertions, promotion, and deploy. Some systems can combine all three, but draw their handoffs explicitly.”

### Slide 20 — Pilot with one bounded workflow

**Objective:** Convert the talk into a small pilot with measurable, non-invented outcomes.

**Say:** “Start in a low-risk repo, read-only on a single failure class. Baseline diagnosis latency, maintainer time to first useful action, false or unsupported claims, output denials, and CI event behavior. Decide whether to proceed from those observations; do not set an adoption target before you have a baseline.”

### Slide 21 — Take the decision back to your repo

**Objective:** Close on the transferable principle.

**Say:** “Choose one reasoning task, one evidence contract, one bounded output, and one human recovery path. Let the existing checks continue to decide whether code passed. Let the configured deployment policy decide who can promote.”

### Slide 22 — References

**Objective:** Make primary and supporting sources easy to find after the talk.

**Say:** No narration needed; leave the links visible briefly.

### Slide 23 — Thank you + Q&A

**Objective:** Take focused questions without obscuring the core boundary.

**Say:** “For a first pilot, what is the CI/CD decision you would like to make easier to inspect?”
