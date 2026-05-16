# AgentBay vs Letta

> GBrain is one user, one brain. AgentBay is teams, projects, governance.

## TL;DR

Letta is genuinely strong when you want to build stateful agents with persistent identity, memory blocks, archival memory, and a MemGPT-style architecture. AgentBay is different because it is a memory OS that existing coding agents can plug into through MCP instead of a framework where you build and host the agent itself. Pick Letta if you want to design a persistent agent inside Letta's architecture; pick AgentBay if your team already uses Claude Code, Codex CLI, Cursor, Hermes, or OpenClaw and needs shared project memory.

## At a glance

| Dimension | Letta | AgentBay |
|---|---|---|
| Primary abstraction | Stateful agent with persistent identity | Shared memory layer for coding agents |
| Architecture lineage | MemGPT-style memory hierarchy and self-editing memory | MCP-native memory OS for external agents |
| Where the agent lives | In Letta's agent model and APIs | In Claude Code, Codex CLI, Cursor, Hermes, OpenClaw, or any MCP-aware client |
| Memory model | Core memory blocks, recall memory, archival memory | Working, episodic, semantic, procedural tiers plus project/team scope |
| Best fit | Building deeply stateful agents from a framework | Adding persistent project memory to existing coding-agent workflows |
| Team/project governance |  | Role-based project/team controls, approval modes, and audit logs |
| Coding-agent install path | SDK/API integration | Per-agent MCP recipes in this repo |
| Evaluation posture |  | Public LOCOMO and AgentBay-native scorecards with ablations |

Empty competitor cells mean: Empty until verified.

## Where Letta is strong

- Clear agent-state model with persistent identity across sessions.
- MemGPT lineage and a documented memory hierarchy for long-running agents.
- Memory blocks and archival memory give developers explicit structures for agent context.
- Good fit when the agent itself should be designed inside a stateful agent framework.

## Where AgentBay is different

- Teams/projects/governance come first: shared engineering memory has scope, permissions, approvals, and audit logs.
- AgentBay does not require rebuilding your agent inside a new framework; MCP-aware coding agents can plug in directly.
- Project memory travels across Claude Code, Codex CLI, Cursor, Hermes, OpenClaw, and teammate machines.
- AgentBay exposes coding-agent install recipes as the primary path, not as an afterthought.
- Public scorecards show retrieval behavior and ablations for AgentBay's own memory layer.

## Transparency

AgentBay publishes its retrieval [`docs/scorecards/`](../scorecards/) including ablation rows where graph or hybrid retrieval lose to vector-only. Competitor cells in our scorecard tables stay empty until AgentBay reproduces them on identical corpus and hardware. That is why this page compares Letta's agent-state model to AgentBay's shipped memory surface without importing unreproduced numbers.

## When to pick Letta

- You want to build a persistent agent with its own identity and memory architecture.
- You are comfortable adopting Letta's agent model as the center of your application.
- Your main problem is long-running agent state, not shared coding-agent memory across a team.

## Get started with AgentBay

Install for an MCP-aware coding agent: `npx aiagentsbay-mcp@1.0.0`
Start with the Codex CLI recipe: [OpenAI Codex CLI + AgentBay](../install/codex-cli.md)
Create the hosted team/project surface at [aiagentsbay.com](https://aiagentsbay.com).
