# AgentCouncil — Collaborative Mode Example

## Prompt (in Copilot CLI)

```bash
council: How should we structure the API for a multi-tenant SaaS application?
```

## How It Works

**Phase 1: Draft** (Parallel Execution)
- **Alpha (Deep Explorer)** using Claude Opus 4.6: Explores design patterns, security implications, tenant isolation strategies
- **Beta (Practical Builder)** using GPT-5.3-Codex: Focuses on implementation details, common pitfalls, scalability concerns
- **Gamma (Elegant Minimalist)** using Gemini 3.1 Pro: Emphasizes simplicity, minimizing complexity, developer experience

**Phase 2: Improve** (Cross-Pollination)
- Alpha reads Beta and Gamma's drafts, writes improved version stealing best ideas
- Beta reads Alpha and Gamma's drafts, writes improved version stealing best ideas
- Gamma reads Alpha and Beta's drafts, writes improved version stealing best ideas

**Phase 3: Synthesize**
- **Orchestrator** using Claude Opus 4.6: Authors definitive response combining all three enriched perspectives into novel synthesis

## Example Output Structure

```markdown
# Multi-Tenant SaaS API Architecture

## Recommended Approach
[Synthesis from all three agents]

### Tenant Isolation Strategy
[Alpha's security insights + Beta's practical concerns + Gamma's simplicity focus]

### Database Design
[Beta's implementation details + Alpha's scalability considerations + Gamma's simplification ideas]

### API Structure
[Gamma's elegant design + Beta's practical patterns + Alpha's edge case handling]

## Alternative Approaches Considered
[Perspectives that didn't make the final cut but worth noting]

## Implementation Checklist
[Actionable steps synthesized from all three agents]
```

## When to Use Collaborative Mode

- Brainstorming sessions
- Exploring design spaces with no clear "right answer"
- Building something new where diverse perspectives help
- Research where breadth and synthesis matter
