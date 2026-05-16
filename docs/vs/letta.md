# AgentBay vs Letta

## Short version

Letta is a framework for building stateful agents with explicit memory structures. AgentBay is not trying to own the agent runtime. It gives existing coding agents a shared memory layer through SDKs and MCP.

## Comparison

| Capability | Letta | AgentBay |
|---|---|---|
| Primary abstraction | Stateful agent framework | Shared memory OS for coding agents |
| Where the agent lives | Inside Letta's agent model | Claude Code, Codex CLI, Cursor, OpenClaw, Hermes, or any MCP-aware client |
| Memory model | Core memory, recall memory, archival memory | Working, episodic, semantic, procedural tiers plus project/team scope |
| Local coding-agent setup | Framework/API integration | `pip install agentbay`, `npm install agentbay`, `npx aiagentsbay-mcp@1.0.0` |
| Teams + role-based permissions | Not the central product shape | [Teams surface](https://aiagentsbay.com/teams) |
| Governance/audit | Depends on the app you build | Hosted projects, approval modes, and audit logs |
| Published retrieval scorecards | Not mirrored here | [LOCOMO and AgentBay-native scorecards](../scorecards/) |

## When Letta is a better fit

- You want to build and host the agent itself inside a memory-aware framework.
- You want Letta's agent identity and memory blocks to be the center of your system.
- Your project is more agent-platform engineering than coding-agent workflow.

## When AgentBay is a better fit

- Your team already uses coding agents and wants memory without replacing them.
- You need shared project memory across multiple tools and teammates.
- Governance, permissions, and audit logs matter as much as recall quality.

GBrain is one user, one brain. AgentBay is teams, projects, governance.
