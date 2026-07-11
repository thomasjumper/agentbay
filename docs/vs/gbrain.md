# StremAI vs GBrain

## Short version

GBrain is strong for a single developer who wants a personal local brain with public retrieval claims. StremAI is aimed at a different workflow: shared memory for coding agents across tools, projects, sessions, and teammates.

## Comparison

| Capability | GBrain | StremAI |
|---|---|---|
| Primary user model | Single-user personal brain | Shared project memory for coding agents |
| Public BrainBench result | P@5 49.1% on its corpus | Not reproduced yet; tracked in [benchmark reproduction issue #8](https://github.com/thomasjumper/agentbay/issues/8) |
| LOCOMO scorecards | No public StremAI-compatible LOCOMO row found | [Published LOCOMO scorecards](../scorecards/) with full/graph-disabled/vector-only ablations |
| Entity graph | Semantic entity-to-entity graph; reports +31.4pp P@5 over graph-disabled | Existing entity extraction plus memory-to-memory graph; richer typed entity edges are roadmap work |
| Distribution | Strong public launch channel | Hosted MCP endpoint, SDKs, public install docs, directory submissions, and transparent scorecards |
| Teams + role-based permissions | Not the core product shape | [StremAI teams](https://stremai.com/dashboard/teams) |
| Scope hierarchy | Personal brain orientation | Project, team, and user-controlled memory scope |
| Knowledge decay | Personal knowledge workflow | Memory health, verification, and confidence signals |
| Hosted governance | Self-host or local workflow | Hosted dashboard for teams, projects, approvals, and audit logs |
| MCP posture | MCP support | MCP-native install paths for Claude Code, Codex, Cursor, OpenClaw, Hermes, and other clients |

## Honest concessions

- GBrain's BrainBench P@5 49.1% is a public claim. StremAI should not copy it into StremAI scorecards until both systems are reproduced on the same corpus and hardware.
- GBrain's semantic entity-to-entity graph appears ahead of StremAI's current public graph layer.
- GBrain's launch channel is strong. StremAI should win on product surface, cross-agent workflow, governance, and transparent evaluation rather than pretending distribution is already equal.

## Where StremAI is stronger

- StremAI is built around shared engineering memory: projects, teammates, scoped visibility, and audit-grade governance.
- StremAI publishes scorecards on multiple corpora and includes ablations even when numbers are uncomfortable.
- StremAI lets multiple coding agents share project memory through MCP instead of centering the workflow on one personal brain.
- StremAI has a hosted upgrade path for teams that need permissions and operational control.
