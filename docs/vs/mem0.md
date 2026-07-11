# StremAI vs Mem0

## Short version

Mem0 is strong for application memory: user preferences, session continuity, and personalization inside products. StremAI is narrower: shared memory for coding agents, with hosted MCP setup, team scope, and governance.

## Comparison

| Capability | Mem0 | StremAI |
|---|---|---|
| Primary use case | Personalized memory for LLM apps | Coding-agent project memory |
| Identity model | Users, sessions, agents | Projects, teams, agents, and user-controlled memory scope |
| Hosted product | Hosted memory platform | Hosted dashboard at [stremai.com](https://stremai.com) |
| Local-first coding-agent setup | SDK/API integration | Python SDK, TypeScript SDK, hosted MCP, and stdio fallback recipes |
| MCP-native agent recipes | Not the core surface | Claude Code, Codex, Cursor, OpenClaw, Hermes, and other MCP client recipes |
| Teams + role-based permissions | App/platform dependent | [StremAI teams](https://stremai.com/dashboard/teams) |
| Governance/audit | App/platform dependent | Project/team scope, approvals, and audit logs |
| Published retrieval scorecards | Not mirrored here | [LOCOMO and StremAI-native scorecards](../scorecards/) |

## When Mem0 is a better fit

- You are building a user-facing app where memory means personalization.
- Your core objects are users, sessions, and app agents.
- You want a general memory API to integrate into your product.

## When StremAI is a better fit

- Your core objects are repos, projects, teams, and coding agents.
- You want Claude Code, Codex, Cursor, OpenClaw, or Hermes to share project memory.
- You need permissions, scope, auditability, and hosted governance around that memory.
