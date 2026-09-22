---
status: active
updated: 2026-09-16
section: "Executive Talks"
references:
  - url: https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud
    label: "About GitHub Enterprise Cloud"
    verified: 2026-09-16
  - url: https://docs.github.com/en/enterprise-server@latest/admin/overview/about-github-enterprise-server
    label: "About GitHub Enterprise Server"
    verified: 2026-09-16
  - url: https://docs.github.com/en/enterprise-server@latest/admin/overview/about-upgrades-to-new-releases
    label: "About upgrades to new GHES releases"
    verified: 2026-09-16
  - url: https://docs.github.com/en/enterprise-server@latest/admin/monitoring-and-managing-your-instance/configuring-high-availability/about-high-availability-configuration
    label: "GHES high availability"
    verified: 2026-09-16
  - url: https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency
    label: "GitHub Enterprise Cloud with data residency"
    verified: 2026-09-16
  - url: https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency
    label: "Data storage with GHE.com"
    verified: 2026-09-16
  - url: https://docs.github.com/en/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer
    label: "About GitHub Enterprise Importer"
    verified: 2026-09-16
  - url: https://docs.github.com/en/migrations/elm/about-live-migrations
    label: "About Enterprise Live Migrations"
    verified: 2026-09-16
  - url: https://docs.github.com/en/copilot/get-started/plans
    label: "GitHub Copilot plans"
    verified: 2026-09-16
  - url: https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent
    label: "About Copilot cloud agent"
    verified: 2026-09-16
  - url: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/code-review
    label: "About GitHub Copilot code review"
    verified: 2026-09-16
  - url: https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security
    label: "About GitHub Advanced Security"
    verified: 2026-09-16
  - url: https://docs.github.com/en/enterprise-server@3.22/get-started/learning-about-github/about-github-advanced-security
    label: "GitHub Advanced Security on GHES 3.22"
    verified: 2026-09-16
  - url: https://docs.github.com/en/code-security/concepts/secret-security/push-protection
    label: "About push protection"
    verified: 2026-09-16
  - url: https://docs.github.com/en/code-security/concepts/code-scanning/setup-types
    label: "Code scanning setup types"
    verified: 2026-09-16
  - url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/security-at-scale/about-security-campaigns
    label: "About security campaigns"
    verified: 2026-09-16
  - url: https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning
    label: "About Copilot Autofix"
    verified: 2026-09-16
  - url: https://docs.github.com/en/billing/concepts/product-billing
    label: "GitHub product billing"
    verified: 2026-09-16
---

# GitHub Cloud: A Platform Decision, Not a Hosting Decision

*An executive-ready business case for moving from GitHub Enterprise Server to GitHub Enterprise Cloud*

**Duration:** 30–40 minutes | **Audience:** Engineering, platform, security, architecture, and technology leaders

---

## The Executive Question

> **Will moving to GitHub Enterprise Cloud produce measurable improvements in security, reliability, engineering effectiveness, access to AI, and operational simplicity that justify the disruption and risk of migration?**

That is a stronger question than, "Can Cloud reduce our infrastructure cost?"

Cost matters, but a migration justified only by COGS is fragile. Infrastructure savings can be consumed by migration effort, coexistence, integration changes, retraining, and new consumption charges. The durable case is capability uplift: a safer, more reliable, more productive engineering system that is simpler to operate.

The recommendation in this talk is conditional:

> **Move when Cloud creates a measurable operating advantage. Stay, defer, or use a hybrid transition where regulatory, isolation, integration, or readiness constraints outweigh that advantage.**

---

## Why Now?

GitHub is no longer only the place where source code is stored. It is increasingly the control plane for software delivery:

- Identity, policy, repository governance, and audit
- Pull requests, automation, rulesets, and release workflows
- Secret prevention, code scanning, dependency security, and remediation
- Copilot assistance, code review, cloud coding agents, and agentic security remediation

This changes the platform decision. A self-hosted appliance can still be the right answer, but its opportunity cost now includes delayed or unavailable access to cloud-native capabilities—not just the labor required to operate it.

GitHub Enterprise Server receives feature releases on a managed release cycle. GitHub Enterprise Cloud is continuously operated and updated by GitHub. The practical question is whether the organization values customer-controlled infrastructure more than rapid access to a managed, integrated engineering platform.

---

## The Business Problem Being Solved

The strongest migration candidates typically experience several of these conditions:

1. **Platform work competes with product work.** Engineers spend time on upgrades, capacity, backups, high availability, recovery testing, runners, monitoring, and incident response for the development platform.
2. **Security controls arrive or scale slowly.** Preventative controls exist, but rollout depends on appliance versions, runner capacity, local integrations, and operational readiness.
3. **Capability access is delayed.** Cloud-first features create a widening gap between what engineering teams want to use and what the installed GHES release supports.
4. **Governance is fragmented.** Policies, organization structures, repository settings, and audit integrations have accumulated inconsistently.
5. **Reliability risk is internally owned.** The organization is accountable for platform availability, capacity, backup integrity, replica health, failover, and recovery execution.
6. **Developer workflows are constrained by the platform boundary.** Cloud-native agents, AI review, and integrated remediation cannot be adopted as a coherent operating model.

Migration should solve these problems—not merely relocate repositories.

---

## Do Not Lead with COGS

COGS savings are an input, not the thesis.

| Weak business case | Executive-ready business case |
|---|---|
| "Cloud hosting is cheaper." | "Cloud removes specific reliability and operational risks while unlocking measurable engineering outcomes." |
| "We can retire appliances." | "We can redirect platform capacity from undifferentiated maintenance to governance, paved roads, and developer enablement." |
| "Licensing will be simpler." | "We have a transparent total-consumption model and controls for seats, Actions, security, Copilot, and AI usage." |
| "Everyone else is moving." | "A representative pilot demonstrated target improvements with acceptable migration risk." |

If the only measurable result is lower infrastructure spend, disruption will be hard to justify. The decision should be based on five outcomes.

---

## The Five-Outcome Business Case

### 1. Security posture

Measure whether Cloud improves prevention, coverage, consistency, and remediation:

- Percentage of repositories with required secret and code scanning
- Secrets blocked before they enter history
- Median time to remediate critical alerts
- Percentage of repositories governed by enterprise rulesets
- Security debt addressed through campaigns
- Percentage of eligible fixes accelerated with Autofix or agentic remediation

### 2. Reliability

Measure service outcomes rather than assuming SaaS is automatically more reliable:

- Developer-impacting platform incidents
- Availability against the organization's engineering-platform SLO
- Recovery time and recovery-point performance
- Capacity-related degradation
- Planned maintenance disruption
- Confidence and evidence from recovery testing

### 3. Engineering effectiveness

Measure flow and quality—not lines of code or commit volume:

- Pull-request cycle time and review wait time
- Lead time for changes
- Deployment frequency
- Change failure rate
- Escaped defects
- Developer onboarding time
- Percentage of suitable work completed with AI assistance or agents

### 4. Operational simplicity

Measure work that can be eliminated or redirected:

- Hours spent on upgrades, patches, backup, restore, HA, capacity, and appliance incidents
- Number of platform components and bespoke integrations operated internally
- Time to deploy an enterprise policy or security control
- Time to provision and govern a new organization or repository
- Platform-engineering capacity redirected to higher-value paved roads

### 5. Strategic capability access

Measure the organization's ability to adopt new engineering models:

- Time from capability release to governed availability
- Adoption of Copilot, code review, cloud agent, campaigns, and Autofix
- Percentage of repositories ready for agentic workflows
- Coverage of automated tests, security checks, and merge gates
- Ability to run controlled experiments without waiting for a platform upgrade

---

## Cloud vs. Server: Balanced Executive Scorecard

This comparison is version-aware. GHES capabilities must be validated against the installed release and target upgrade path.

| Decision dimension | GitHub Enterprise Cloud | GitHub Enterprise Server |
|---|---|---|
| **Service operation** | GitHub operates and continuously updates the platform | Customer operates the appliance, capacity, monitoring, backup, HA, recovery, and upgrades |
| **Feature velocity** | New capabilities generally arrive first on GitHub.com | Features arrive through supported GHES releases and customer-controlled upgrades |
| **Infrastructure control** | SaaS with defined service and connectivity boundaries | Strong control of infrastructure placement, networks, maintenance timing, and isolation |
| **Data location** | GitHub.com plus managed GHE.com residency options with documented exceptions | Customer selects appliance, replica, and backup locations |
| **Disconnected operation** | Requires supported connectivity to GitHub services | Strongest option for disconnected or tightly isolated environments |
| **Governance** | Centralized enterprise and organization controls; continuously evolving | Instance-level control; capability depends on installed release |
| **Security platform** | Broadest current portfolio and fastest access to new campaigns, AI detections, and agentic remediation | Strong core scanning and prevention capabilities; customer owns deployment and operational currency |
| **Copilot and agents** | Standard Copilot plans, cloud coding agent, and Copilot code review | Standard hosted Copilot plans are not currently documented for GHES; GHES 3.22 has a distinct offline Copilot CLI technical preview |
| **Migration flexibility** | Supported target for GEI and Enterprise Live Migrations | Preserves current environment; migration fidelity and integration remediation must be planned |
| **Cost model** | Subscription plus metered/consumption categories | Subscription plus customer-funded infrastructure, operations, runners, resilience, and upgrades |

### Where Server can still be the right choice

Remaining on GHES is defensible when one or more requirements are non-negotiable:

- Disconnected or air-gapped operation
- Customer-controlled infrastructure or network placement
- Data-location requirements not met by available GHE.com regions and data-flow boundaries
- Direct control of maintenance, backup, failover, forensic access, or infrastructure providers
- Legacy or tightly coupled integrations whose remediation risk exceeds current Cloud value
- A transition period while identity, compliance, or repository readiness gaps are corrected

The honest comparison is not "Cloud is secure; Server is not." Both can be operated securely. The difference is responsibility, service velocity, available capabilities, and the organization's ability to operate each model well.

---

## Security: From Appliance Maintenance to Continuous Control

Cloud changes the security operating model; it does not outsource security accountability.

With GHEC, GitHub operates the service. The customer still owns:

- Identity lifecycle and least privilege
- Enterprise and repository policies
- Integration and token governance
- Audit use and retention
- Alert triage and remediation
- Runner, workflow, and software-supply-chain controls

With GHES, the customer owns those responsibilities **plus** platform patching, upgrades, capacity, network configuration, backup, high availability, disaster recovery, and security-content currency.

The business case is strongest when Cloud lets security and platform teams spend less time maintaining the control plane and more time increasing control coverage and reducing remediation time.

---

## Advanced Security: Core Parity, Cloud-Native Advantage

Avoid claiming that core security scanning exists only in Cloud.

| Capability | Claim-safe position |
|---|---|
| **Secret scanning** | Available on both, subject to product licensing and release support |
| **Push protection** | Available on both for supported repository scenarios; GitHub.com also has public-repository user-level protection |
| **Code scanning / CodeQL** | Available on both; GHES requires customer-provided execution capacity or external CI and current content/tooling |
| **Default setup** | Available on both in supported releases, reducing workflow maintenance |
| **PR security gates** | Both can require reviews and status checks; effectiveness depends on correctly enabled and scoped controls |
| **Security campaigns** | Cloud has the stronger documented portfolio for organizing and tracking remediation at scale |
| **Classic Copilot Autofix** | Cloud capability included with Code Security for eligible code-scanning findings |
| **Agentic Autofix** | Cloud-only public preview using the Copilot cloud agent to produce a tested pull request |

The strategic Cloud advantage is the integrated loop:

> Prevent the secret → detect the vulnerability → block or annotate the pull request → organize remediation → propose or execute a fix → retain human approval.

That loop is valuable only when it is governed, measured, and connected to repository rules.

---

## AI and Agentic Development Change the Equation

Copilot is the clearest material platform differentiator.

### GitHub Enterprise Cloud

- Standard Copilot Business and Enterprise plans with central policy
- Copilot assistance across supported development surfaces
- Copilot code review on GitHub.com and supported clients
- Copilot cloud agent working asynchronously in an Actions-powered environment
- Agent-assisted security remediation
- Consumption visibility through seats, AI credits, and Actions usage

### GitHub Enterprise Server

- Standard hosted Copilot plans are not currently documented as available for GHES
- GHES 3.22 introduces a separate Copilot CLI technical preview using a customer-configured compatible model endpoint
- That preview is not equivalent to the hosted Copilot service, cloud coding agent, or Copilot code review
- The customer operates model credentials, endpoint capacity, availability, and provider governance

### The business outcome

The Cloud case is not "developers get autocomplete." It is the ability to create a governed engineering loop:

```text
Issue or security finding
        ↓
Cloud agent creates a scoped change
        ↓
Tests, code scanning, secret prevention, and policy checks run
        ↓
Copilot and human reviewers assess the pull request
        ↓
Rulesets enforce the merge decision
        ↓
Outcome and consumption are measured
```

The human remains accountable for intent, architecture, risk, and merge approval.

---

## Reliability and Operational Simplicity

GHEC shifts platform operation to GitHub. It does not remove the need for:

- Service ownership and incident communication
- Identity and policy administration
- Runner and workflow strategy
- Integration resilience
- Consumption governance
- Business continuity planning for dependent engineering processes

GHES offers active/passive high availability and backup tooling, but customers configure and monitor replicas, execute failover, redirect traffic, maintain backups, test restore, plan capacity, and schedule upgrades. GitHub explicitly distinguishes HA from backup, horizontal scaling, and zero-downtime upgrades.

Measure the value of Cloud using operational evidence:

| Baseline | Target |
|---|---|
| Platform maintenance hours per quarter | Reduction and capacity redirected |
| Planned maintenance disruption | Reduction or elimination of appliance upgrade windows |
| Capacity incidents | Reduced developer impact |
| Recovery exercise result | Improved confidence and lower internally owned recovery complexity |
| Time to enable a new control | Faster governed rollout |

Do not use an undocumented reliability guarantee. Use the organization's current incident and effort data.

---

## Consumption and Cost: The Full Economic Model

Do not compare an appliance invoice with a Cloud seat price.

### Current GHES inputs

- Enterprise licenses
- Compute, storage, network, load balancing, and facilities or cloud hosting
- Backup, replicas, disaster recovery, monitoring, and security tooling
- Actions runner and artifact infrastructure
- Platform engineering and operations labor
- Upgrade projects, testing, maintenance windows, and incident response
- Advanced Security and other product licenses
- Opportunity cost of delayed capabilities

### GHEC inputs

- Enterprise licenses
- GitHub Code Security and Secret Protection active committers
- Copilot seats and AI-credit consumption
- GitHub Actions minutes or self-hosted runner costs
- Packages, Codespaces, storage, and data transfer where applicable
- GHE.com residency or connectivity requirements
- Migration, coexistence, integration remediation, and change management
- Ongoing platform product, governance, security, and FinOps capacity

### Customer-input model

```text
Risk-adjusted annual value
  = avoided platform operations
  + avoided infrastructure and recovery cost
  + quantified security risk reduction
  + engineering flow improvement
  + strategic capability value
  - recurring Cloud consumption
  - transition and coexistence cost
  - adoption and execution risk
```

Every value must have an owner, source, baseline, target, and confidence range.

### Recommended sensitivity cases

| Case | Assumption |
|---|---|
| **Conservative** | Slow adoption, long coexistence, limited productivity uplift, high remediation effort |
| **Expected** | Successful representative pilot, planned waves, moderate adoption and operational reduction |
| **Upside** | Strong governance, broad security coverage, high agent-ready workload, rapid decommissioning |

If the recommendation succeeds only in the upside case, it is not ready.

---

## Minimize Disruption with a Wave-Based Migration

Migration is a transformation program, not a transparent lift-and-shift.

### Phase 1: Discover

- Inventory repositories, owners, visibility, size, LFS, metadata, rules, apps, webhooks, Actions, runners, packages, and external dependencies
- Classify regulated and restricted workloads
- Identify archived, abandoned, duplicate, and migration-exempt repositories
- Baseline security, reliability, flow, experience, and operating effort

### Phase 2: Design and remediate readiness

- Select GitHub.com or GHE.com based on identity, residency, and collaboration needs
- Design enterprise, organization, team, identity, role, and policy structures
- Resolve unsupported integrations and data types
- Establish runner, network, package, audit, and key-management patterns
- Define consumption budgets and ownership

### Phase 3: Pilot representative workloads

Do not pilot only the easiest repositories. Include:

- A typical product repository
- A large or complex repository
- A security-sensitive repository
- A repository with Actions and integrations
- A team willing to test Copilot and agentic workflows

Measure migration fidelity, downtime, developer disruption, security coverage, flow, support demand, and consumption.

### Phase 4: Migrate in waves

- Group repositories by dependency and risk
- Use trial migrations and documented validation
- Freeze or reconcile source changes because GEI does not provide delta migration
- Use Enterprise Live Migrations where supported and appropriate
- Re-enable and validate webhooks, apps, rules, secrets, runners, and external systems
- Maintain explicit cutover, communication, contingency, and escalation plans

### Phase 5: Stabilize and decommission

- Monitor adoption, reliability, security, flow, and consumption
- Resolve exceptions and remaining integrations
- Retire duplicate controls and infrastructure only after acceptance criteria are met
- Capture realized value against the approved business case

---

## Migration Decision Gates

| Gate | Proceed when | Pause when |
|---|---|---|
| **Identity and governance** | Target account model, provisioning, roles, policies, and audit are tested | Ownership, external collaboration, or break-glass access is unresolved |
| **Residency and compliance** | Legal and security approve documented data flows and exceptions | Required region or processing boundary is unsupported |
| **Network and integrations** | Runners, apps, APIs, packages, webhooks, and private connectivity are validated | A critical integration has no safe migration path |
| **Repository fidelity** | Representative migrations meet metadata and validation criteria | Unsupported data creates unacceptable operational or legal loss |
| **Change readiness** | Training, support, communications, and adoption owners are funded | Migration is treated as a platform-only project |
| **Operating model** | Cloud governance, security operations, platform product ownership, and FinOps are assigned | Teams assume SaaS means no ongoing ownership |
| **Business outcomes** | Pilot shows measurable capability uplift under conservative or expected assumptions | The case depends mainly on COGS or optimistic productivity claims |

---

## Executive Recommendation

Recommend migration when:

1. Cloud resolves documented platform, security, reliability, or capability constraints.
2. The organization can quantify target improvements and owns the measurements.
3. Identity, residency, integration, and repository risks have viable controls.
4. A representative pilot validates the target operating model.
5. The expected case—not only the upside case—justifies transition cost and disruption.

Recommend deferral, exception, or continued GHES operation when disconnected operation, infrastructure sovereignty, unsupported data-location requirements, or critical integration constraints are dominant.

### The decision statement

> **We are not moving repositories to save on servers. We are modernizing the engineering control plane to improve security, reliability, developer flow, and access to governed AI—provided a representative pilot proves those outcomes with acceptable risk.**

---

## Next Actions

1. Establish current-state baselines for the five outcomes.
2. Confirm the installed GHES release and classify exact capability gaps.
3. Select the target Cloud model: GitHub.com or GHE.com with data residency.
4. Build the customer-input economic model with conservative, expected, and upside cases.
5. Inventory migration dependencies and unsupported data.
6. Run a representative pilot with explicit proceed/pause gates.
7. Return to the executive team with measured evidence and a wave plan.

---

## 📚 References

- [About GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud)
- [About GitHub Enterprise Server](https://docs.github.com/en/enterprise-server@latest/admin/overview/about-github-enterprise-server)
- [About upgrades to new GHES releases](https://docs.github.com/en/enterprise-server@latest/admin/overview/about-upgrades-to-new-releases)
- [GHES high availability](https://docs.github.com/en/enterprise-server@latest/admin/monitoring-and-managing-your-instance/configuring-high-availability/about-high-availability-configuration)
- [GitHub Enterprise Cloud with data residency](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency)
- [Data storage with GHE.com](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency)
- [About GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer)
- [About Enterprise Live Migrations](https://docs.github.com/en/migrations/elm/about-live-migrations)
- [GitHub Copilot plans](https://docs.github.com/en/copilot/get-started/plans)
- [About Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
- [About GitHub Copilot code review](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/code-review)
- [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security)
- [GitHub Advanced Security on GHES 3.22](https://docs.github.com/en/enterprise-server@3.22/get-started/learning-about-github/about-github-advanced-security)
- [About push protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection)
- [Code scanning setup types](https://docs.github.com/en/code-security/concepts/code-scanning/setup-types)
- [About security campaigns](https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/security-at-scale/about-security-campaigns)
- [About Copilot Autofix](https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning)
- [GitHub product billing](https://docs.github.com/en/billing/concepts/product-billing)
