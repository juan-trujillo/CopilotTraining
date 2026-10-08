# AgentCouncil — Adversarial Mode Example

## Prompt (in Copilot CLI)

```bash
debate: Redis vs Memcached for session store — which survives at scale?
```

## How It Works

**Phase 1: Draft** (Parallel Execution)
- **Alpha (Drafter & Red Teamer)** using Claude Opus 4.6: Presents Redis case, then red-teams own position
- **Beta (Fact-Checker & Validator)** using GPT-5.3-Codex: Presents Memcached case, validates technical claims
- **Gamma (Optimizer & Devil's Advocate)** using Gemini 3.1 Pro: Presents hybrid approach, challenges both

**Phase 2: Triage** (Identify Strongest Position)
- **Orchestrator** using Claude Opus 4.6: Reviews all three positions, identifies strongest argument
- If consensus exists (all three agree), skip to verdict

**Phase 3: Attack** (Stress-Test the Leader)
- The two non-leading agents attack the leading position
- Try to find flaws, edge cases, trade-offs the leader missed
- Challenge assumptions and claims

**Phase 4: Verdict**
- **Orchestrator** using GPT-5.3-Codex: Delivers final judgment:
  - **SURVIVED:** Leading position withstood attacks, confirmed as best
  - **MODIFIED:** Leading position improved by incorporating attack insights
  - **OVERTURNED:** Attacks revealed fatal flaws, different position wins

## Example Output Structure

```markdown
# Redis vs Memcached for Session Store — Verdict

## 🎯 Leading Position (Phase 2)
Redis — identified as strongest argument based on:
- Persistence capabilities
- Data structure support
- Active community

## ⚔️ Attack Phase (Beta & Gamma challenge Redis)

### Attack 1: Complexity Cost (Beta)
"Redis's rich feature set introduces operational complexity..."

### Attack 2: Memory Efficiency (Gamma)
"Memcached's simpler design achieves better memory density..."

## 🏛️ Verdict: MODIFIED

Redis remains the recommended choice, BUT:
- Use Redis in **single-threaded mode** for session store (addresses memory efficiency concern)
- Implement **automated failover** (addresses complexity concern)
- Consider **Memcached for read-heavy workloads** where persistence isn't needed

### Modified Recommendation
Redis with simplified configuration + operational automation + Memcached for specific use cases
```

## When to Use Adversarial Mode

- Architecture decisions you'll live with for years
- Security reviews (missed vulnerabilities are expensive)
- Comparing two specific approaches (A vs B)
- Anything where you need confidence the answer holds up under scrutiny
