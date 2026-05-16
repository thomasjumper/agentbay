# AgentBay vs Mem0

## Short version

Mem0 is strong for application memory: user preferences, session continuity, and personalization inside products. AgentBay is narrower and sharper: memory OS for coding agents, with teams, projects, governance, and MCP install paths.

## Comparison

| Capability | Mem0 | AgentBay |
|---|---|---|
| Primary use case | Personalized memory for LLM apps | Coding-agent project memory |
| Identity model | Users, sessions, agents | Projects, teams, agents, and public/team/project scopes |
| Hosted product | Hosted memory platform | Hosted dashboard at [aiagentsbay.com](https://aiagentsbay.com) |
| Local-first coding-agent setup | SDK/API integration | Python SDK, TypeScript SDK, and `aiagentsbay-mcp@1.0.0` recipes |
| MCP-native agent recipes | Not the core surface | Claude Code, Codex CLI, Cursor, OpenClaw, and Hermes recipes |
| Teams + role-based permissions | App/platform dependent | [Teams surface](https://aiagentsbay.com/teams) |
| Governance/audit | App/platform dependent | Project/team scope, approvals, and audit logs |
| Published retrieval scorecards | Not mirrored here | [LOCOMO and AgentBay-native scorecards](../scorecards/) |

## When Mem0 is a better fit

- You are building a user-facing app where memory means personalization.
- Your core objects are users, sessions, and app agents.
- You want a general memory API to integrate into your product.

## When AgentBay is a better fit

- Your core objects are repos, projects, teams, and coding agents.
- You want Claude Code, Codex CLI, Cursor, OpenClaw, or Hermes to share project memory.
- You need permissions, scope, auditability, and hosted governance around that memory.

GBrain is one user, one brain. AgentBay is teams, projects, governance.
