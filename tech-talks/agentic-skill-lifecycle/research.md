---
status: active
updated: 2026-09-18
---

# Research: Agentic Skill Lifecycle Management

## Research question

How should a platform team manage reusable agent behavior from authoring through release, distribution, execution, upgrade, rollback, and retirement across local developers, repositories, cloud agents, and GitHub Agentic Workflows?

## Primary reference implementation

Repository: <https://github.com/cajetzer/agent-primitives-hub>

The repository is a customer-neutral proof for authoring, validating, releasing, and distributing reusable Agent Skills. It contains:

- canonical skills under `skills/`;
- repository instructions and agent definitions under `.github/`;
- validation and neutrality scripts under `scripts/`;
- deterministic tests under `tests/`;
- a validation workflow;
- a proof-specific synchronization workflow;
- a proof-specific consumer inventory schema;
- Agentic Workflow examples and generated lock files;
- a detailed concepts document covering scope, provenance, governance, and anti-patterns.

## Core mental model

Reusable agent behavior is not one large prompt. The major primitives answer different questions:

| Primitive | Question |
|---|---|
| Skill | How should this task be performed? |
| Repository instruction | What is always true in this repository? |
| Custom agent | What role should perform the task, using which tools? |
| Agentic Workflow | When should the task run automatically, under which controls? |
| MCP server/tool | Which external capability can the agent call? |
| Ruleset/CODEOWNERS | Who must approve and what may merge? |

Primitive selection and scope selection are separate decisions. A review procedure remains a skill whether it is installed for one user, committed to one repository, or loaded for one workflow run.

## Skill lifecycle discovered in the source

1. Author a skill in the canonical hub.
2. Validate package structure and metadata.
3. Run neutrality checks and deterministic tests.
4. Validate publication readiness.
5. Publish an immutable release.
6. Preview content before trust.
7. Pin the approved version or commit.
8. Deliver it to the required consumer surface.
9. Execute it with the relevant instructions, agent, and tools.
10. Record provenance and observe outcomes.
11. Detect drift between installed copies and the approved source.
12. Upgrade through a reviewed change.
13. Roll back by selecting an older immutable release.
14. Retire unused or unsafe skills deliberately.

## Three delivery lanes

### User-installed local skill

- Consumer: one developer and one supported client.
- Lifetime: persists in the user's local skills directory until changed or removed.
- Best for: personal productivity and early evaluation.
- Limitation: not automatically available to teammates, Actions, cloud agents, or another client's home directory.

### Runtime-pinned workflow skill

- Consumer: one compiled Agentic Workflow run.
- Lifetime: installed for the workflow runtime.
- Best for: Actions automation that should not vendor skills into every repository.
- Control: pin to a full commit SHA and verify the compiled workflow lock.
- Limitation: does not make the skill visible to cloud agents or local clients outside the run.

### Repository-installed project skill

- Consumer: collaborators and supported agents operating in repository context.
- Lifetime: versioned with the repository.
- Best for: shared team behavior, cloud agents, and code review.
- Control: change by pull request and protect the path through review policy.
- Limitation: consumer copies can drift if edited directly.

## Identity and provenance

The source distinguishes four identities:

- release tag: human-readable compatibility version;
- commit SHA: exact state of the complete hub repository;
- skill tree SHA: exact Git tree for one skill directory;
- content SHA-256: tool-defined digest of copied files.

These identifiers are complementary. A semantic version communicates intent, while immutable hashes provide exact identity.

## Built-in versus proof-specific mechanisms

### Built into `gh skill`

- discovery, preview, install, list, update, and publish commands;
- user and project installation scopes;
- optional pinning;
- provenance written into installed `SKILL.md`;
- update behavior based on installed provenance.

### Built into GitHub Agentic Workflows

- Markdown workflow source;
- compilation to `.lock.yml`;
- pinning and validation during compilation;
- workflow permissions;
- network controls;
- read-only agent execution;
- declared safe outputs handled outside the main agent reasoning context.

### Proof-specific in `agent-primitives-hub`

- `.agent-skills-lock.json` as a repository-wide consumer inventory;
- `scripts/sync_skills.py`;
- synchronization of selected skills to consumer repositories;
- custom content hashing for copied directories;
- drift blocking and explicit `--repair-drift`;
- target allowlisting in the synchronization workflow.

The deck must not imply that `.agent-skills-lock.json` is created by `gh skill`.

## Repository synchronization sequence

The proof's `sync-skills.yml`:

1. accepts a target repository, immutable source ref, selected skills, and a drift-repair flag;
2. checks out the automation repository;
3. checks out the pinned skill source;
4. validates the target against an allowlist;
5. creates a short-lived GitHub App installation token;
6. checks out the consumer repository;
7. runs `sync_skills.py`;
8. runs a neutrality check against the consumer;
9. creates a dedicated branch;
10. commits the generated skills and consumer inventory;
11. pushes the branch;
12. opens a pull request;
13. leaves merge and deployment to humans and repository policy.

## Drift behavior

`sync_skills.py` hashes installed skill directories and compares them with the proof-specific consumer inventory. If an installed copy changed locally, synchronization fails unless repair is explicitly enabled. This is a deliberate safety property: local modifications are surfaced instead of silently overwritten.

## Agentic Workflow operating model

- Workflow authors edit a Markdown source file.
- `gh aw compile` creates the generated `.lock.yml`.
- Both source and lock file are reviewed and committed.
- Deterministic steps handle exact tasks such as checkout, validation, tests, and artifact upload.
- Agentic steps handle interpretation such as investigation, classification, design, and bounded changes.
- The agent is read-only by default.
- Declared safe outputs provide narrow write operations after validation.
- Permissions and network access should be minimized.

## Governance layers

| Layer | Protects against |
|---|---|
| Skill validation | Malformed packages and metadata |
| Neutrality checks | Accidental organization/customer coupling |
| Tests | Broken deterministic helpers |
| Pins and provenance | Moving or unknown source |
| Drift checks | Unreviewed consumer edits |
| Workflow permissions | Excess token capability |
| Network controls | Unnecessary data egress |
| Safe outputs | Unbounded agent writes |
| CODEOWNERS | Missing specialist review requests |
| Rulesets | Merge-policy bypass |
| Human approval | Incorrect but technically valid output |

CODEOWNERS requests responsible reviewers. Enforcement requires branch protection or rulesets that require code-owner approval.

## Use cases

1. A platform team publishes a review procedure for all application repositories.
2. A developer evaluates a design skill locally before proposing team adoption.
3. An Agentic Workflow loads a pinned analysis skill only for a scheduled audit.
4. A cloud coding agent uses a repository-installed implementation skill.
5. A synchronization workflow proposes approved upgrades to many consumers.
6. A team rolls back a problematic skill by selecting an earlier immutable release.

## Anti-patterns

- combining instructions, procedures, roles, triggers, and enforcement in one prompt;
- installing from a moving default branch for production use;
- editing generated or installed consumer copies;
- using a personal skill for mandatory team behavior;
- treating context files as security controls;
- treating CODEOWNERS alone as merge enforcement;
- granting a broad write token to the agent;
- using long-lived personal credentials for platform automation;
- moving an existing release tag;
- assuming an open format behaves identically in every client.

## Official sources

1. <https://agentskills.io/specification>
2. <https://docs.github.com/en/copilot/concepts/agents/about-agent-skills>
3. <https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills>
4. <https://cli.github.com/manual/gh_skill>
5. <https://github.blog/changelog/2026-04-16-manage-agent-skills-with-github-cli/>
6. <https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows>
7. <https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows>
8. <https://github.github.com/gh-aw/reference/compilation-process/>
9. <https://github.github.com/gh-aw/reference/safe-outputs/>
10. <https://github.com/github/gh-aw>
11. <https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners>
12. <https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance>
13. <https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow>

## Presentation implications

- Use one lifecycle loop as the organizing narrative.
- Explain primitive versus scope early.
- Make the three delivery lanes the central architecture decision.
- Show the proof-specific synchronization sequence as an example, not a standard requirement.
- Reserve command detail for the presenter guide.
- Close with a small adoption path rather than a feature checklist.

