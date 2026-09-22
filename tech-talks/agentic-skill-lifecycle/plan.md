---
status: active
updated: 2026-09-18
---

# Content Plan: Agentic Skill Lifecycle Management

## Working title

**Agentic Skill Lifecycle: From Reusable Prompt to Governed Platform Capability**

## Central question

How do platform teams make agent capabilities reusable across developers, repositories, cloud agents, and automation without losing control of versions, provenance, permissions, and upgrades?

## Audience

Platform engineers, DevOps practitioners, developer-experience teams, and architects responsible for shared AI-assisted development capabilities.

## Duration

20 minutes maximum.

## Thesis

Reusable agent behavior should be managed like software: classify it correctly, keep one canonical source, validate it, release immutable versions, deliver it only to the consumers that need it, observe drift, and govern changes outside the model.

## Narrative arc

The talk begins with a classification problem: teams often put facts, procedures, roles, automation triggers, and policy into one large prompt. It separates primitive selection from scope selection, then presents a three-layer architecture of context, execution, and governance.

The middle of the talk follows one Agent Skill through its lifetime. The skill is authored and validated in a canonical hub, released with an immutable identity, then delivered through one of three lanes: local user installation, workflow-runtime installation, or repository installation. A practical synchronization sequence demonstrates how a platform team can promote selected skills through pull requests while detecting drift.

The final section places skills inside GitHub Agentic Workflows, distinguishes deterministic and agentic work, and closes with failure modes, recovery patterns, and a deliberately small adoption path.

## Slide 1: Agentic Skill Lifecycle

Open with the claim that a successful reusable prompt creates a new platform problem. Once behavior is shared, the team must answer who owns it, what version is approved, where it runs, how it changes, and how it is rolled back.

The visual should show a small instruction card evolving into a circular lifecycle. Avoid a product-feature collage.

Key line:

> Reuse turns prompt craft into supply-chain management.

## Slide 2: The central question

Present the audience question:

> How do we make agent capabilities reusable across every execution surface without losing control?

Show four consumers: developer laptop, repository/cloud agent, GitHub Actions workflow, and human reviewer. The point is that a capability working on one laptop is not yet a platform capability.

Transition:

> Before we choose where it lives, we need to identify what kind of primitive it is.

## Slide 3: Pick the primitive, then the scope

Use a two-step visual.

Step 1 classifies the job:

- repository truth → instruction;
- reusable procedure → skill;
- specialized role/tools → custom agent;
- event-driven automation → Agentic Workflow;
- external capability → MCP/tool;
- mandatory merge rule → governance control.

Step 2 chooses the narrowest supported scope:

- personal;
- repository;
- workflow run;
- organization or enterprise where supported.

Emphasize that context is not enforcement.

Key line:

> “What is it?” and “who receives it?” are different decisions.

## Slide 4: Context, execution, governance

Show a layered architecture:

1. Context layer: instructions, skills, agent profile.
2. Execution layer: local client, cloud agent, Agentic Workflow.
3. Governance layer: deterministic tests, permissions, safe outputs, CODEOWNERS, rulesets, human approval.

The flow starts with a user request or repository event and ends with a proposed output. Governance decides whether that output changes the default branch or an external system.

## Slide 5: The lifecycle loop

Use an eight-stage loop:

1. Author.
2. Validate.
3. Release.
4. Preview and approve.
5. Deliver.
6. Execute.
7. Observe and detect drift.
8. Upgrade, rollback, or retire.

Each transition must leave evidence:

- source review;
- validation result;
- immutable identity;
- provenance;
- consumer pull request;
- runtime logs or outputs;
- drift result.

Avoid describing this as a package manager only. The lifecycle spans human review, automation, and runtime controls.

## Slide 6: Author and validate in the hub

Use the source repository as the concrete example.

The hub contains three canonical skills:

- `generate-design`;
- `implement-feature`;
- `review-code`.

Each skill centers on `SKILL.md` and can include references, scripts, and assets. The description matters because it drives discovery and progressive loading.

Validation layers:

- structural validation;
- neutrality scan;
- deterministic unit tests;
- `gh skill publish --dry-run`.

The source is edited in the hub. Consumer copies are installed/generated artifacts.

## Slide 7: What exactly is pinned?

Explain four identities:

- semantic release tag;
- hub commit SHA;
- skill tree SHA;
- copied-content SHA-256.

Use a visual chain:

`v1.2.0` → hub commit → skill tree → installed copy.

The semantic version explains compatibility. Hashes provide exact identity. Existing tags must not be moved. Rollback means selecting an older approved immutable version.

## Slide 8: Three delivery lanes

Use three columns.

### Local user lane

- installed into one client's user directory;
- persists for that user;
- best for personal use and evaluation;
- invisible to remote runners and other users.

### Workflow runtime lane

- declared in Agentic Workflow configuration;
- pinned to a full commit SHA;
- installed for the workflow run;
- avoids vendoring workflow-only skills.

### Repository lane

- committed under a recognized project skills path;
- available in repository context;
- best for team and cloud-agent consistency;
- upgraded through pull request.

Key line:

> One approved skill can have three delivery mechanisms, because the consumers have different lifetimes.

## Slide 9: Promote a skill safely

Show the happy-path sequence:

1. Change the canonical source.
2. Run validation and review.
3. Publish an immutable release.
4. Preview the released skill.
5. Select the delivery lane.
6. Pin the approved identity.
7. Install or synchronize it.
8. Review the consumer change.

Use only short command excerpts:

```powershell
gh skill publish --dry-run
gh skill publish --tag v1.1.0
gh skill preview OWNER/HUB review-code@v1.1.0
gh skill install OWNER/HUB review-code --pin v1.1.0
```

Mention that exact syntax and preview behavior should be checked against the installed GitHub CLI version.

## Slide 10: Repository synchronization sequence

Use a sequence diagram based on `sync-skills.yml`.

Actors:

- platform operator;
- synchronization workflow;
- pinned hub checkout;
- consumer repository;
- human reviewer.

Flow:

1. Operator supplies target, immutable source ref, and selected skills.
2. Workflow validates the target.
3. GitHub App issues a short-lived installation token.
4. Workflow checks out hub source and consumer separately.
5. Script verifies source identity and existing drift.
6. Selected skills are copied.
7. Proof-specific inventory is generated.
8. Workflow opens a pull request.
9. Rulesets and reviewers decide whether it merges.

Call out:

- `.agent-skills-lock.json` is custom to this proof.
- `repair_drift` is explicit.
- the workflow does not merge or deploy.

## Slide 11: Agentic Workflow runtime

Show two rails:

### Deterministic rail

- checkout;
- dependency installation;
- build;
- test;
- schema validation;
- artifact upload.

### Agentic rail

- investigation;
- classification;
- design;
- root-cause analysis;
- bounded code change.

Workflow source is Markdown. `gh aw compile` creates the generated `.lock.yml`. Both are reviewed; the lock file is not edited manually.

The agent runs read-only by default. Declared safe outputs provide narrow write operations outside the main reasoning job. Permissions and network access remain explicit.

## Slide 12: Failure modes and recovery

Use a two-column risk/recovery layout.

Moving branch or tag:

- Risk: same label, different behavior.
- Recovery: immutable release and protected tags.

Editing installed copy:

- Risk: drift and unclear ownership.
- Recovery: fail synchronization, fix the hub, or explicitly repair.

Testing only locally:

- Risk: false confidence across cloud and Actions.
- Recovery: test the same approved version on each required surface.

Broad write token:

- Risk: prompt-injection blast radius.
- Recovery: read-only reasoning, narrow safe outputs, short-lived app token.

CODEOWNERS only:

- Risk: reviewer requested but merge still bypassable.
- Recovery: ruleset requiring code-owner review.

## Slide 13: Use cases and adoption

Use four use-case cards:

- personal productivity;
- team/cloud consistency;
- workflow-only automation;
- platform-scale distribution.

Close with a five-step adoption checklist:

1. Pick one repeated, high-value procedure.
2. Keep one canonical source.
3. Publish one immutable release.
4. Choose one required delivery lane.
5. Define the evidence and rollback path before scaling.

Final line:

> Manage reusable agent behavior like software: source it, test it, version it, distribute it, observe it, and govern it.

## References strategy

Use 13 references:

1. Source repository concepts.
2. Source repository README.
3. Agent Skills specification.
4. GitHub Agent Skills concepts.
5. GitHub CLI Agent Skills how-to.
6. `gh skill` manual.
7. GitHub Agentic Workflows concepts.
8. Creating Agentic Workflows.
9. Compilation process.
10. Safe outputs.
11. CODEOWNERS.
12. Enterprise rulesets.
13. GitHub App authentication in Actions.

## Presenter pacing

| Slides | Time |
|---|---:|
| 1-2: framing | 2:00 |
| 3-4: model and architecture | 3:00 |
| 5-8: lifecycle and delivery | 7:00 |
| 9-11: practical sequences and runtime | 5:00 |
| 12-13: recovery and adoption | 3:00 |
| **Total** | **20:00** |

The optional command details and client-path nuances belong in the presenter guide, not on the slides.

