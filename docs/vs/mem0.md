# AgentBay vs Mem0

> GBrain is one user, one brain. AgentBay is teams, projects, governance.

## TL;DR

Mem0 is genuinely strong when you are building personalized LLM apps that need memories tied to users, sessions, or agents. AgentBay is different because it is engineered around coding agents, project-scoped memory, and team governance rather than general app personalization. Pick Mem0 if your core problem is remembering end-user preferences inside an app; pick AgentBay if your coding agents need shared project memory across tools and teammates.

## At a glance

| Dimension | Mem0 | AgentBay |
|---|---|---|
| Primary use case | Personalized memory for LLM applications | Memory OS for coding agents |
| Main identity model | User, session, and AI agent identifiers | Project, team, public scope, and agent memory |
| Best fit | Chatbots, assistants, support, learning, companion, and productivity apps | Claude Code, Codex CLI, Cursor, Hermes, OpenClaw, and MCP-aware coding workflows |
| Retrieval/storage shape | Hybrid memory architecture with vector and graph stores | Hybrid retrieval with vector, lexical, tag, alias, and graph signals |
| Team governance |  | Role-based project/team controls, approval modes, and audit logs |
| Local coding-agent setup | SDK/API integration into your app | Local-first SDKs plus MCP server recipes for coding agents |
| Evaluation posture | Memory evaluation docs exist | Public LOCOMO and AgentBay-native scorecards with ablations |
| Hosted path | Managed platform available | Hosted dashboard at aiagentsbay.com for teams and projects |

Empty competitor cells mean: Empty until verified.

## Where Mem0 is strong

- Clear focus on personalization and continuity for LLM apps.
- User, session, and agent identifiers map naturally to app-level memory needs.
- Hybrid vector/graph memory architecture for extracting and retrieving memories.
- Broad application patterns beyond coding agents, including support, learning, productivity, and companion use cases.

## Where AgentBay is different

- Teams/projects/governance lead the product: AgentBay scopes memory for engineering work, not only user personalization.
- MCP recipes let existing coding agents use AgentBay without rebuilding the app around a memory API.
- Project-scoped memory supports handoffs between Cursor, Claude Code, Codex CLI, Hermes, OpenClaw, and teammates.
- Hosted controls cover role-based permissions, approvals, and audit logs for shared engineering memory.
- AgentBay publishes reproducible retrieval scorecards rather than treating memory quality as an opaque claim.

## Transparency

AgentBay publishes its retrieval [`docs/scorecards/`](../scorecards/) including ablation rows where graph or hybrid retrieval lose to vector-only. Competitor cells in our scorecard tables stay empty until AgentBay reproduces them on identical corpus and hardware. That keeps the Mem0 comparison focused on verified product shape rather than borrowed benchmark claims.

## When to pick Mem0

- You are building a user-facing app where long-term personalization is the main job.
- Your memory model is naturally per-user, per-session, or per-agent inside your own application.
- You want a general memory API rather than a coding-agent-specific memory surface.

## Get started with AgentBay

Install for an MCP-aware coding agent: `npx aiagentsbay-mcp@1.0.0`
Start with the Cursor recipe: [Cursor + AgentBay](../install/cursor.md)
Create the hosted team/project surface at [aiagentsbay.com](https://aiagentsbay.com).
