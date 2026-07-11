# StremAI vs Letta

## Short version

Letta is a framework for building stateful agents with explicit memory structures. StremAI does not try to own the agent runtime. It gives existing coding agents a shared memory layer through MCP and SDKs.

## Comparison

| Capability | Letta | StremAI |
|---|---|---|
| Primary abstraction | Stateful agent framework | Shared memory for coding agents |
| Where the agent lives | Inside Letta's agent model | Claude Code, Codex, Cursor, OpenClaw, Hermes, or any MCP-aware client |
| Memory model | Core memory, recall memory, archival memory | Learned project context, decisions, pitfalls, handoffs, and governance signals |
| Local coding-agent setup | Framework/API integration | `pip install stremai`, `npm install @tmjumper/stremai`, hosted MCP, or `npx aiagentsbay-mcp@latest` fallback |
| Teams + role-based permissions | Not the central product shape | [StremAI teams](https://stremai.com/dashboard/teams) |
| Governance/audit | Depends on the app you build | Hosted projects, approval modes, and audit logs |
| Published retrieval scorecards | Not mirrored here | [LOCOMO and StremAI-native scorecards](../scorecards/) |

## When Letta is a better fit

- You want to build and host the agent itself inside a memory-aware framework.
- You want Letta's agent identity and memory blocks to be the center of your system.
- Your project is more agent-platform engineering than coding-agent workflow.

## When StremAI is a better fit

- Your team already uses coding agents and wants shared memory without replacing them.
- You need project memory across multiple tools and teammates.
- Governance, permissions, and audit logs matter as much as recall quality.
