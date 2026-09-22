---
status: active
updated: 2026-09-18
duration: 20 minutes
audience: Platform Engineers / DevOps / Developer Experience
---

# Talking Points: Agentic Skill Lifecycle

## Pacing guide

| Slide | Target |
|---|---:|
| 1 | 0:45 |
| 2 | 1:15 |
| 3 | 1:45 |
| 4 | 1:30 |
| 5 | 1:45 |
| 6 | 1:45 |
| 7 | 1:30 |
| 8 | 2:00 |
| 9 | 1:30 |
| 10 | 2:15 |
| 11 | 1:45 |
| 12 | 1:30 |
| 13 | 1:45 |
| **Total** | **20:00** |

## Slide 1 — Agentic Skill Lifecycle

**Opening**

“A reusable prompt looks like content. The moment multiple teams depend on it, it becomes infrastructure.”

**Explain**

- This talk is about the lifetime around an Agent Skill, not only the `SKILL.md` format.
- We will follow one capability from canonical source through release, delivery, execution, upgrade, and rollback.
- The reference implementation is `cajetzer/agent-primitives-hub`.

**Emphasize**

Reuse creates operational questions: ownership, compatibility, provenance, permissions, drift, and recovery.

**Transition**

“The platform question is not whether one person can run the skill. It is whether every required surface can run the approved skill safely.”

## Slide 2 — The Central Question

**Opening**

“One developer, one repository, one workflow runner, and one reviewer all need different things from the same capability.”

**Explain**

- The developer needs a convenient local installation.
- A cloud agent needs repository-visible context.
- An Actions runner needs an immutable runtime dependency.
- The reviewer needs evidence of source, version, and validation.

**Emphasize**

A capability that works on a laptop is not yet a platform capability.

**Transition**

“Before deciding where the files go, classify what kind of reusable primitive you are creating.”

## Slide 3 — Pick the Primitive, Then the Scope

**Opening**

“Teams often collapse two separate decisions into one: what is this, and who receives it?”

**Explain**

- Repository truths belong in instructions.
- Reusable procedures belong in skills.
- Roles and tool boundaries belong in custom agents.
- Event-driven automation belongs in Agentic Workflows.
- Mandatory approval belongs in repository governance.
- After classification, choose user, repository, workflow-run, or another supported scope.

**Emphasize**

The same `review-code` procedure remains a skill at every scope. Only its delivery and lifetime change.

**Caution**

Instructions and skills are context. They cannot replace permissions, tests, or rulesets.

**Transition**

“Those primitives combine in an architecture with a clean separation between context, execution, and governance.”

## Slide 4 — Context, Execution, Governance

**Opening**

“The most useful boundary in this system is the boundary between advice and authority.”

**Explain**

- Context tells the agent what is true and how to work.
- Execution determines where the reasoning runs.
- Governance decides what the result is allowed to change.
- A user request or repository event starts the flow.
- The output remains proposed work until deterministic checks and human/repository policy accept it.

**Optional detail**

Mention that MCP tools add capability, but permissions and safe outputs determine authority.

**Transition**

“With those layers established, we can follow the capability through its full lifetime.”

## Slide 5 — The Lifecycle Loop

**Opening**

“The lifecycle is a loop because release is not the finish line.”

**Explain**

- Author and validate in one canonical source.
- Release an immutable version.
- Preview and approve before trust.
- Deliver to the minimum required consumer lane.
- Execute and collect evidence.
- Detect drift and compatibility issues.
- Upgrade, roll back, or retire.

**Emphasize**

Every transition should leave evidence: a validation result, immutable identity, provenance record, pull request, or runtime output.

**Optional detail**

Retirement can mean removing an obsolete consumer copy, deprecating a release, or replacing the skill with a safer contract.

**Transition**

“The source repository shows what the first two stages look like in practice.”

## Slide 6 — Author and Validate in the Hub

**Opening**

“The hub is the only editable source of truth; installed copies are artifacts.”

**Explain**

- The example hub contains `generate-design`, `implement-feature`, and `review-code`.
- `SKILL.md` holds the portable procedure; references, scripts, and assets support it.
- The description is part of runtime behavior because it drives discovery.
- Validation covers package shape, neutral/reusable content, deterministic tests, and publish readiness.
- **Structure** confirms that the skill package is well formed: valid name and metadata, the required `SKILL.md`, and valid file and reference paths.
- **Neutrality** detects customer-specific names or assumptions that would prevent reuse. This is a policy check for the example hub, not a universal Agent Skills requirement.
- **Unit tests** verify that deterministic scripts and helper functions behave correctly. They test executable logic, not the model's generated prose.
- **Publish dry run** simulates packaging and publishing without creating a release, catching missing files, invalid metadata, and packaging issues before a version is assigned.

**Emphasize**

Do not fix a consumer by editing its installed copy. Fix the hub, release a new version, and promote it.

**Optional detail**

The neutrality scan is specific to this proof's goal of publishing customer-neutral skills; it is not a universal Agent Skills requirement.

**Transition**

“Once validation passes, the next question is: what exactly are we calling version 1.1?”

## Slide 7 — What Exactly Is Pinned?

**Opening**

“Version and identity are related, but they answer different questions.”

**Explain**

- The semantic tag communicates compatibility to humans.
- The commit SHA identifies the complete hub state.
- The tree SHA identifies one skill directory.
- The content hash verifies copied files outside Git.

**Emphasize**

Tags must be immutable. If a release is wrong, publish a new release or roll back to an older approved one.

**Caution**

A tag is readable, but it is only trustworthy when governance prevents moving or deleting it.

**Transition**

“That approved identity can now travel through three different delivery lanes.”

## Slide 8 — Three Delivery Lanes

**Opening**

“There is no single installation that automatically reaches every agent surface.”

**Explain**

- **User lane:** persistent for one user and client; best for personal use and evaluation.
- **Workflow lane:** installed for one Agentic Workflow run; best for workflow-only dependencies.
- **Repository lane:** committed with the project; best for shared team and cloud-agent behavior.

**Emphasize**

Choose the minimum lane needed. More copies mean more upgrade work and more opportunities for drift.

**Useful example**

The same `review-code` release might be:

- installed locally for a developer;
- pinned by full SHA in an audit workflow;
- committed into a repository for Copilot code review.

The content should be the same approved release even though the delivery mechanisms differ.

**Transition**

“The promotion process should make that identity explicit rather than relying on whatever the default branch contains today.”

## Slide 9 — Promote a Skill Safely

**Opening**

“The happy path is intentionally boring: validate, publish, preview, pin, review.”

**Explain**

- Run local and CI validation.
- Publish an immutable release.
- Preview the released package before installation.
- Select the required delivery lane.
- Pin the release or exact commit.
- Review any repository change.

**Command guidance**

Do not read every command aloud. Point out the verbs:

- `publish --dry-run`;
- `publish --tag`;
- `preview`;
- `install --pin`.

**Caution**

`gh skill` is preview functionality. Verify current CLI behavior and destination paths before production rollout.

**Transition**

“For one repository, direct installation may be enough. At platform scale, the proof automates the same promotion through pull requests.”

## Slide 10 — Repository Synchronization

**Opening**

“The synchronization workflow automates preparation, not approval.”

**Explain each card from left to right**

1. **Operator — “target + ref + skills” — Dispatch:** An operator starts the workflow by choosing the consumer repository, the immutable hub ref, and the skills to promote.
2. **Sync workflow — “allowlist + app token” — Authorize:** The workflow confirms that the consumer is allowlisted, then creates a short-lived GitHub App token scoped to that repository.
3. **Pinned hub — “verify commit + trees” — Resolve:** The workflow resolves the supplied ref, checks out that exact hub commit, and verifies the selected skill trees.
4. **Consumer — “drift check + copy” — Propose:** The script checks the consumer's installed copies for unexpected edits. If the drift policy permits the change, it copies the approved skills, updates the proof-specific inventory, and creates a branch and pull request.
5. **Reviewer — “PR + ruleset” — Decide:** Reviewers inspect the pull request, and repository rulesets enforce the required approval before merge.

**Explain the lower controls**

- **Short-lived identity** supports step 2: the GitHub App token is scoped to the consumer.
- **Explicit drift repair** supports step 4: unexpected edits fail by default instead of being silently overwritten.
- **Reviewable output** connects steps 4 and 5: automation creates a branch and pull request, but does not merge or deploy.

**Emphasize**

- It does not merge.
- It does not deploy.
- It does not silently repair drift.

**Caution**

`.agent-skills-lock.json` is custom to this proof. Official `gh skill` provenance lives in installed `SKILL.md`; Agentic Workflow `.lock.yml` is a different construct again.

**Transition**

“Now place the pinned skill inside an automated agent runtime without giving the reasoning job uncontrolled authority.”

## Slide 11 — Agentic Workflow Runtime

**Opening**

“Use AI for interpretation and deterministic automation for invariants.”

**Explain**

- Authors edit a Markdown workflow source.
- `gh aw compile` generates the hardened `.lock.yml`.
- Deterministic steps own checkout, builds, tests, schema checks, and artifacts.
- Agentic steps own investigation, design, classification, and bounded changes.
- The reasoning job is read-only by default.
- Safe outputs declare narrow writes that are validated outside the reasoning context.

**Emphasize**

A runtime skill provides procedure context. It does not grant permissions.

**Optional detail**

Network allowlists and minimum token permissions reduce the damage available to prompt injection.

**Transition**

“Most lifecycle failures happen when one of these boundaries is blurred.”

## Slide 12 — Failure Modes and Recovery

**Opening**

“The recovery pattern is usually to restore identity and review—not to hide the difference.”

**Explain**

- Moving tags → protect tags and release a new version.
- Editing installed copies → fail drift checks and fix the hub or explicitly repair.
- Local-only testing → run the same approved identity on every required surface.
- Broad write token → use read-only reasoning, safe outputs, and short-lived app tokens.
- CODEOWNERS alone → add an enforcing ruleset.

**Emphasize**

Drift is information. Silent overwrite destroys the evidence needed to understand what changed.

**Transition**

“The right operating model depends on the consumer, so close by selecting the smallest useful adoption path.”

## Slide 13 — Use Cases and Adoption

**Opening**

“Do not start by building an enterprise catalog. Start with one repeated procedure.”

**Explain**

- Personal productivity → user-installed skill.
- Team/cloud consistency → repository-installed skill.
- Workflow-only automation → runtime-pinned skill.
- Multi-repository rollout → canonical hub plus synchronization pull requests.

**Adoption checklist**

1. Pick one repeated, high-value procedure.
2. Keep one canonical editable source.
3. Validate and publish one immutable release.
4. Choose one required delivery lane.
5. Define evidence, upgrade, and rollback before expanding.

**Close**

“Manage reusable agent behavior like software: source it, test it, version it, distribute it, observe it, and govern it.”

## Slide 14 — GitHub CLI Skill Reference

Use the official GitHub CLI manual for current `gh skill` syntax, options, and supported clients:

https://cli.github.com/manual/gh_skill

The command family is in preview, so verify the current documentation before production rollout.

