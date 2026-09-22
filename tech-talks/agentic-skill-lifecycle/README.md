---
status: active
updated: 2026-09-18
section: "Context & Customization"
references:
  - url: https://github.com/cajetzer/agent-primitives-hub/blob/main/docs/concepts.md
    label: "Agent Primitives Hub concepts and mental models"
    verified: 2026-09-18
  - url: https://github.com/cajetzer/agent-primitives-hub
    label: "Agent Primitives Hub reference implementation"
    verified: 2026-09-18
  - url: https://agentskills.io/specification
    label: "Agent Skills specification"
    verified: 2026-09-18
  - url: https://docs.github.com/en/copilot/concepts/agents/about-agent-skills
    label: "About Agent Skills"
    verified: 2026-09-18
  - url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills
    label: "Adding Agent Skills for GitHub Copilot CLI"
    verified: 2026-09-18
  - url: https://cli.github.com/manual/gh_skill
    label: "GitHub CLI gh skill reference"
    verified: 2026-09-18
  - url: https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows
    label: "About GitHub Agentic Workflows"
    verified: 2026-09-18
  - url: https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows
    label: "Creating GitHub Agentic Workflows"
    verified: 2026-09-18
  - url: https://github.github.com/gh-aw/reference/compilation-process/
    label: "Agentic Workflows compilation process"
    verified: 2026-09-18
  - url: https://github.github.com/gh-aw/reference/safe-outputs/
    label: "Agentic Workflows safe outputs"
    verified: 2026-09-18
  - url: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
    label: "About CODEOWNERS"
    verified: 2026-09-18
  - url: https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance
    label: "Enforcing code governance with rulesets"
    verified: 2026-09-18
  - url: https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow
    label: "GitHub App authentication in Actions"
    verified: 2026-09-18
---

# Agentic Skill Lifecycle: From Reusable Prompt to Governed Platform Capability

> **The Question This Talk Answers:**
> *"How do we make agent capabilities reusable across developers, repositories, cloud agents, and automation without losing control?"*

**Duration:** 20 minutes | **Target Audience:** Platform Engineers / DevOps / Developer Experience

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|---|---|---|
| **Relevant** | 🟢 High | Teams are moving from one-off prompts to shared skills and automated agent workflows, creating immediate lifecycle and governance needs |
| **Compelling** | 🟢 High | Reframes prompt reuse as a software supply-chain problem with concrete architecture, delivery modes, and failure recovery |
| **Actionable** | 🟢 High | Provides a practical sequence for publishing, pinning, distributing, upgrading, and rolling back reusable agent behavior |

**Overall Status:** 🟢 Ready to use

---

## 📽️ Slide Generation Mapping

1. Title — Agentic Skill Lifecycle
2. Central question — reuse across execution surfaces
3. Primitive versus scope
4. Context, execution, and governance architecture
5. End-to-end lifecycle loop
6. Author and validate in the canonical hub
7. Release identity and provenance
8. Three delivery lanes
9. Safe promotion sequence
10. Repository synchronization sequence
11. Agentic Workflow runtime
12. Failure modes and recovery
13. Use cases and adoption checklist

---

## The Problem

### Key Points

- **A successful prompt quickly becomes shared infrastructure**
  Once multiple teams depend on the same behavior, ownership, compatibility, provenance, and rollback matter.

- **Execution surfaces have different lifetimes**
  A local developer, a cloud agent, and an Actions runner do not share the same filesystem, installation, identity, or permission boundary.

- **Copies drift**
  Skills are installed or synchronized into consumer environments; changing the source repository does not magically update every existing copy.

- **Context is not enforcement**
  Instructions and skills influence agent behavior, but permissions, tests, rulesets, safe outputs, and human approval enforce boundaries.

### Narrative

The first reusable prompt feels simple: put proven instructions in a file and let the agent use them again. The platform problem begins when that procedure needs to work for twenty developers, a cloud coding agent, code review, and a scheduled GitHub Actions workflow. Each surface has a different lifetime and trust boundary.

The question is no longer only, “Is this a good prompt?” It becomes: Who owns the canonical source? Which version is approved? How does a consumer prove what it received? What happens when someone edits an installed copy? Which automation may update repositories? How do we roll back without moving tags or rewriting history?

Reusable agent behavior needs a lifecycle. The `agent-primitives-hub` repository demonstrates one practical operating model: keep skills in a canonical hub, validate and release them, deliver them through the minimum required lane, detect drift, and propose upgrades through normal repository governance.[^1][^2]

---

## The Solution: Manage Agent Behavior Like Software

### What It Does

The operating model separates six concerns:

1. **Classification** — choose the primitive that matches the job.
2. **Scope** — choose the narrowest audience and lifetime.
3. **Source** — maintain one canonical editable copy.
4. **Release** — validate and assign an immutable identity.
5. **Delivery** — install or synchronize to each required execution surface.
6. **Governance** — enforce permissions, review, tests, and merge policy outside the prompt.

### Key Capabilities

- **Portable procedures**: Agent Skills package reusable task instructions with optional scripts, references, and assets.[^3][^4]
- **Immutable promotion**: semantic versions communicate compatibility while Git identities prove exact content.
- **Consumer-specific delivery**: local user, workflow runtime, and repository installations serve different consumers.
- **Controlled automation**: Agentic Workflows compile human-readable Markdown into a hardened generated workflow with explicit permissions and safe outputs.[^7][^8][^9][^10]
- **Reviewable upgrades**: synchronization can propose consumer changes through pull requests rather than silently mutating repositories.

### Architecture Overview

The architecture has three layers.

**Context** contains repository instructions, relevant skills, and the selected agent profile. These elements tell the agent what is true, how to perform the task, and which role and tools apply.

**Execution** is the environment where reasoning runs: a developer's local client, a GitHub-hosted agent operating in repository context, or an Agentic Workflow running in GitHub Actions.

**Governance** determines what may happen after reasoning: deterministic tests, token permissions, network controls, safe outputs, CODEOWNERS, rulesets, and human approval. CODEOWNERS can request the responsible reviewers, while an enforced ruleset makes the approval requirement non-optional.[^11][^12]

> **Core principle:** The agent proposes work. Governance decides whether that work enters the default branch or changes an external system.

---

## 📦 Key Artifacts

### Primary Artifacts

- **`skills/*/SKILL.md`** — Canonical skill packages for design, implementation, and review.
- **`scripts/validate_skills.py`** — Structural and metadata validation.
- **`scripts/check_neutrality.py`** — Proof-specific check for customer-neutral reusable content.
- **`.github/workflows/validate-skills.yml`** — Deterministic validation on pull requests and the default branch.
- **`.github/workflows/sync-skills.yml`** — Proof-specific cross-repository synchronization workflow.
- **`scripts/sync_skills.py`** — Proof-specific copy, identity, inventory, and drift logic.
- **`.github/workflows/*.md`** — Human-readable Agentic Workflow source.
- **`.github/workflows/*.lock.yml`** — Compiled Agentic Workflow implementation.

### Important distinction

The proof's `.agent-skills-lock.json` is a custom repository-wide consumer inventory. It is not part of the Agent Skills specification and is not created by `gh skill`. The official CLI records installed-skill provenance in each installed `SKILL.md`; the proof adds a set-level inventory to coordinate platform synchronization.[^1][^5][^6]

---

## 🎯 Mental Model Shift

> **The Core Insight:** From sharing prompt files to operating a governed supply chain for reusable agent behavior.

### Move Toward

- ✅ **One canonical source**: Edit the hub, not consumer copies → clear ownership and review history.
- ✅ **Immutable releases**: Pin tags or commits → reproducible behavior and safe rollback.
- ✅ **Minimum delivery lane**: Install only where the consumer needs the capability → fewer copies and less drift.
- ✅ **Evidence at every transition**: validation, provenance, pull request, runtime output → auditable promotion.
- ✅ **Defense in depth**: context plus deterministic controls → useful agents without treating prompts as policy.

### Move Away From

- ⚠️ **Moving default branches as production dependencies** → different consumers receive different behavior.
- ⚠️ **Personal installation for mandatory team behavior** → cloud agents, runners, and teammates cannot reproduce it.
- ⚠️ **Editing installed skills directly** → drift and an unclear source of truth.
- ⚠️ **Assuming local success proves every surface** → clients and runtimes load different paths and tools.

### Move Against

- 🛑 **Broad write credentials in the reasoning job** → prompt injection gains a larger blast radius.
- 🛑 **Moving published tags** → the same version label points to different content.
- 🛑 **Treating CODEOWNERS as enforcement by itself** → review can still be bypassed without an enforcing rule.

---

## When to Use This Pattern

```text
Q: Who needs the reusable procedure?
│
├─ One developer across local projects
│  → User-installed pinned skill
│  └─ Best for: personal productivity and evaluation
│
├─ One Agentic Workflow execution
│  → Runtime-pinned skill
│  └─ Best for: Actions automation without repository vendoring
│
├─ Team members or GitHub-hosted agents in one repository
│  → Repository-installed project skill
│  └─ Best for: shared, reviewable repository behavior
│
└─ Many repositories need the same approved release
   → Canonical hub + synchronization pull requests
   └─ Best for: platform-managed distribution with drift controls
```

---

<!-- 🎬 MAJOR SECTION: Classify -->
## 1. Pick the Primitive, Then the Scope

Do not use scope to decide which primitive to create. First classify the content by the job it performs.[^1]

| Content | Primitive |
|---|---|
| Repository fact or universal rule | Repository instruction |
| Reusable task procedure | Agent Skill |
| Specialized role and tool set | Custom agent |
| Event-driven automation | Agentic Workflow |
| External capability or data | MCP server/tool |
| Mandatory review or merge rule | Ruleset/CODEOWNERS |

Then select the narrowest supported scope that reaches every intended consumer:

- personal;
- repository/project;
- workflow run;
- organization or enterprise where the product supports it.

A code-review checklist remains a skill at every scope. What changes is its delivery mechanism and lifetime.

Instructions and skills are context, not security boundaries. If a rule must be enforced, implement it with permissions, deterministic checks, hooks, environments, rulesets, or human approval.

---

<!-- 🎬 MAJOR SECTION: Lifecycle -->
## 2. The Skill Lifecycle

### Author

An Agent Skill is a directory containing at least `SKILL.md`. The portable core is Markdown with required `name` and `description` metadata. Optional scripts, references, and assets support the procedure.[^3][^4]

The description is operationally important. Clients discover available skills by name and description, then progressively load the selected instructions and supporting files. A vague description creates missed or incorrect activation.

### Validate

The reference hub validates:

- package structure and metadata;
- customer neutrality;
- deterministic helper behavior;
- publication readiness.

```powershell
python .\scripts\validate_skills.py
python .\scripts\check_neutrality.py
python -m unittest discover -s .\tests
gh skill publish --dry-run
```

### Release

Use semantic versions to communicate compatibility:

- patch for backward-compatible corrections;
- minor for backward-compatible capability;
- major for incompatible behavior or contract changes.

Treat published tags as immutable. A rollback selects a previous approved release; it does not move a tag.

### Preview and approve

Skills contain instructions and may include scripts, tool permissions, package requirements, or network dependencies. Preview and review them before installation.[^5][^6]

```powershell
gh skill preview OWNER/HUB review-code@v1.1.0
```

### Deliver

Choose the minimum delivery lane required by the consumer. Do not copy every skill into every repository by default.

### Observe and maintain

Track provenance, test the required execution surfaces, detect consumer drift, and propose upgrades through review. Retire skills that are unused, superseded, unsafe, or no longer compatible.

---

<!-- 🎬 MAJOR SECTION: Identity -->
## 3. Release Identity and Provenance

| Identifier | Answers |
|---|---|
| Release tag | Which human-friendly compatibility version? |
| Commit SHA | Which exact hub repository state? |
| Skill tree SHA | Which exact skill directory content in Git? |
| Content SHA-256 | Do copied files match the expected digest? |

The official CLI records source provenance in installed skill metadata so `gh skill list` and `gh skill update` can identify and compare the source.[^5][^6]

The proof-specific synchronization tool records the hub commit, selected skill tree identities, destination paths, and copied-content hashes in `.agent-skills-lock.json`. That inventory coordinates a set of repository-installed skills, but it is not a built-in `gh skill` lock file.[^1]

---

<!-- 🎬 MAJOR SECTION: Delivery -->
## 4. Three Delivery Lanes

| Lane | Consumer | Lifetime | Best use |
|---|---|---|---|
| User-installed | One developer/client | Until locally changed or removed | Personal productivity and evaluation |
| Workflow runtime | One Agentic Workflow run | Runtime activation | Actions automation without vendoring |
| Repository-installed | Team and repository-aware agents | Repository history | Shared behavior and cloud-agent discovery |

### User lane

User skills live in client-specific home directories. One developer may need separate installations for different clients. They do not automatically appear on another laptop, a GitHub-hosted runner, or a cloud agent.

### Workflow lane

An Agentic Workflow can declare a skill and pin it to a full commit SHA. The compiler resolves and locks the workflow implementation. This lane is isolated from user and repository installations.[^7][^8][^9]

### Repository lane

Repository skills are committed to a supported project path and reviewed with the code. This lane is appropriate when teammates or GitHub-hosted agents require the capability in repository context.[^4][^5]

---

<!-- 🎬 MAJOR SECTION: Promotion -->
## 5. Practical Promotion and Synchronization

### Direct promotion sequence

```text
Change canonical source
  → validate and review
  → publish immutable release
  → preview released skill
  → select delivery lane
  → pin approved identity
  → install or synchronize
  → review consumer change
```

Example CLI flow:

```powershell
gh skill publish --dry-run
gh skill publish --tag v1.1.0
gh skill preview OWNER/HUB review-code@v1.1.0
gh skill install OWNER/HUB review-code --pin v1.1.0
```

`gh skill` is a preview feature. Verify commands and client mappings with the installed CLI version before a production rollout.[^5][^6]

### Platform synchronization sequence

The reference workflow demonstrates a controlled cross-repository promotion:

1. Receive an allowlisted target, immutable source ref, and selected skills.
2. Check out automation and pinned source separately.
3. Create a short-lived GitHub App installation token scoped to the consumer.[^13]
4. Check out the consumer repository.
5. Verify the checked-out source identity.
6. Block unexpected consumer drift unless repair is explicit.
7. Copy selected skills and write the proof-specific inventory.
8. Run consumer validation.
9. Create a branch and pull request.
10. Leave merge and deployment to reviewers and repository rules.

This pattern makes upgrades visible and reviewable. It does not silently mutate the default branch.

---

<!-- 🎬 MAJOR SECTION: Runtime -->
## 6. Agentic Workflows: Reasoning Inside Guardrails

Agentic Workflow source is written in Markdown with YAML frontmatter. `gh aw compile` generates a hardened `.lock.yml` implementation. Commit and review both; never edit the generated lock file manually.[^7][^8][^9]

### Deterministic steps

Use deterministic automation for behavior that must be exact:

- checkout;
- dependency installation;
- builds and tests;
- schema validation;
- artifact upload;
- policy checks.

### Agentic steps

Use agentic execution for behavior that requires interpretation:

- investigation;
- design;
- classification;
- root-cause analysis;
- bounded changes;
- review summaries.

The agent runs read-only by default. A workflow declares narrow safe outputs for allowed writes, which are validated and applied outside the main reasoning job.[^10]

Permissions and network access remain explicit. A runtime-pinned skill supplies reusable procedure context; it does not grant authority.

---

## Real-World Use Cases

### Personal evaluation

A developer installs a pinned design skill locally, tests it against several repositories, and proposes it for team adoption only after the procedure proves useful.

### Shared cloud-agent behavior

A repository commits an approved implementation skill so cloud agents and code review can discover the same process as local collaborators.

### Workflow-only audit

A scheduled Agentic Workflow loads a pinned audit skill for one run. The repository avoids vendoring a skill that no human or cloud agent needs outside automation.

### Platform-scale distribution

A platform team publishes approved releases in a canonical hub and opens synchronization pull requests in allowlisted consumer repositories. Each repository retains normal ownership and merge policy.

---

## Failure Modes and Recovery

| Failure mode | Risk | Recovery |
|---|---|---|
| Install from moving branch | Silent behavior changes | Pin an immutable release or commit |
| Move a published tag | Same version, different content | Protect tags; publish a new version |
| Edit installed copy | Drift and unclear source | Change hub or explicitly repair |
| Test only locally | False confidence across surfaces | Test the same approved identity on each required surface |
| Broad write token | Prompt-injection blast radius | Read-only reasoning, narrow safe outputs, short-lived app token |
| CODEOWNERS without enforcement | Review can be bypassed | Require code-owner approval in a ruleset |
| Long-lived personal credential | Fragile employee-bound automation | Use a repository-scoped GitHub App installation token |

---

## What You Can Do Today

- [ ] Choose one repeated, high-value procedure.
- [ ] Represent it as a skill rather than adding it to a giant instruction file.
- [ ] Keep one canonical editable source.
- [ ] Add structural validation and deterministic tests.
- [ ] Publish one immutable release.
- [ ] Choose only the delivery lane your first consumer needs.
- [ ] Record provenance and define how drift is detected.
- [ ] Require a pull request for repository upgrades.
- [ ] Define rollback before scaling distribution.

> **Final takeaway:** Manage reusable agent behavior like software—source it, test it, version it, distribute it, observe it, and govern it.

---

## 📖 References

[^1]: [Agent Primitives Hub concepts and mental models](https://github.com/cajetzer/agent-primitives-hub/blob/main/docs/concepts.md)
[^2]: [Agent Primitives Hub reference implementation](https://github.com/cajetzer/agent-primitives-hub)
[^3]: [Agent Skills specification](https://agentskills.io/specification)
[^4]: [About Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
[^5]: [Adding Agent Skills for GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills)
[^6]: [`gh skill` CLI reference](https://cli.github.com/manual/gh_skill)
[^7]: [About GitHub Agentic Workflows](https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows)
[^8]: [Creating GitHub Agentic Workflows](https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows)
[^9]: [Agentic Workflows compilation process](https://github.github.com/gh-aw/reference/compilation-process/)
[^10]: [Agentic Workflows safe outputs](https://github.github.com/gh-aw/reference/safe-outputs/)
[^11]: [About CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
[^12]: [Enforcing code governance with rulesets](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance)
[^13]: [GitHub App authentication in Actions](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)

