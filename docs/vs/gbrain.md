# AgentBay vs GBrain

## Short version

GBrain is ahead today for a single developer who wants a personal local brain with strong public retrieval claims. AgentBay is built for a different wedge: teams, projects, governance, hosted cloud, scope hierarchy, and MCP-native coding-agent memory that multiple agents can share.

## Comparison

| Capability | GBrain | AgentBay |
|---|---|---|
| Primary user model | Single-user personal brain | Team/project memory OS for coding agents |
| Public BrainBench result | P@5 49.1% on its corpus | Not reproduced yet; tracked in [benchmark reproduction issue #8](https://github.com/thomasjumper/agentbay/issues/8) |
| LOCOMO scorecards | No public AgentBay-compatible LOCOMO row found | [Published LOCOMO scorecards](../scorecards/) with full/graph-disabled/vector-only ablations |
| Entity graph | Semantic entity-to-entity graph; reports +31.4pp P@5 over graph-disabled | Existing entity extraction plus memory-to-memory graph; semantic entity-to-entity graph is tracked in [roadmap issue #7](https://github.com/thomasjumper/agentbay/issues/7) |
| Distribution | YC president audience and strong launch channel | Public repo, hosted dashboard, SDKs, MCP recipes, and transparent scorecards |
| Teams + role-based permissions | Not the core product shape | [Teams surface](https://aiagentsbay.com/teams) |
| Scope hierarchy | Personal brain orientation | Project / team / public memory scope |
| Knowledge decay | Personal knowledge workflow | Knowledge tiers with TTL/decay |
| Hosted governance | Self-host or local workflow | Hosted dashboard for teams, projects, approvals, and audit logs |
| MCP posture | MCP support | MCP-native install paths for Claude Code, Codex CLI, Cursor, OpenClaw, and Hermes |

## Honest concessions

- GBrain's BrainBench P@5 49.1% is a real public claim. AgentBay should not copy it into AgentBay scorecards until we reproduce both systems on the same corpus and hardware.
- GBrain's semantic entity-to-entity graph is ahead of AgentBay's current public layer. AgentBay has entity extraction and graph retrieval, but the richer typed entity edges are still roadmap work.
- GBrain's launch channel is unusually strong. AgentBay should win on product surface, governance, and transparent evaluation rather than pretending distribution is already equal.

## Where AgentBay is stronger

- AgentBay is built around shared engineering memory: projects, teams, scoped visibility, and audit-grade governance.
- AgentBay publishes scorecards on multiple corpora, including LOCOMO, and includes ablations even when numbers are uncomfortable.
- AgentBay lets multiple coding agents share the same project memory through MCP instead of centering the workflow on one personal brain.
- AgentBay has a hosted upgrade path for teams that need permissions and operational control.

GBrain is one user, one brain. AgentBay is teams, projects, governance.
