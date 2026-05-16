# AgentBay vs Zep

> GBrain is one user, one brain. AgentBay is teams, projects, governance.

## TL;DR

Zep is genuinely strong when your agent memory problem is best modeled as a temporal knowledge graph over users, sessions, and business data. AgentBay is different because it combines graph and hybrid retrieval with coding-agent project scope, team governance, and public ablation scorecards. Pick Zep if your application needs a graph memory platform for personalized app context; pick AgentBay if your coding agents need shared project memory with governance and MCP install paths.

## At a glance

| Dimension | Zep | AgentBay |
|---|---|---|
| Primary memory model | Temporal knowledge graph for agent memory | Hybrid retrieval plus project/team scoped coding-agent memory |
| Main data shape | Users, sessions, groups, facts, entities, and business data | Projects, teams, agents, knowledge tiers, tags, aliases, and graph links |
| Retrieval surface | Memory context strings and graph search APIs | MCP tools and SDK calls for coding agents |
| Graph capability | Core product strength | Included alongside vector, lexical, tag, and alias retrieval |
| Fact evolution | Temporal graph handles changing facts over time | Knowledge tiers with TTL/decay and scoped project memory |
| Team/project governance |  | Role-based project/team controls, approval modes, and audit logs |
| Best fit | Application memory over user/business context | Coding-agent memory across teammates, repos, and tools |
| Evaluation posture | Research and docs around graph memory exist | Public LOCOMO and AgentBay-native scorecards with ablations |

Empty competitor cells mean: Empty until verified.

## Where Zep is strong

- Temporal knowledge graph is central to the product, not an add-on.
- Strong fit for applications that need user/session memory and business context assembled for agents.
- Graph search and memory context APIs make it useful as an agentic tool.
- Handles changing facts over time as part of the graph model.

## Where AgentBay is different

- Teams/projects/governance lead the experience: role-based permissions, project/team scope, approvals, and audit logs.
- AgentBay is tuned for coding agents and ships per-agent MCP recipes for common developer tools.
- Hybrid retrieval combines graph with vector, lexical, tag, and alias signals rather than making graph the whole story.
- Public ablation scorecards show when graph/hybrid retrieval helps and when vector-only wins.
- Hosted AgentBay projects let teams share memory across Claude Code, Codex CLI, Cursor, Hermes, and OpenClaw.

## Transparency

AgentBay publishes its retrieval [`docs/scorecards/`](../scorecards/) including ablation rows where graph or hybrid retrieval lose to vector-only. Competitor cells in our scorecard tables stay empty until AgentBay reproduces them on identical corpus and hardware. That matters especially in a graph-memory comparison: AgentBay should prove graph lift in its own runs rather than borrowing Zep's claims.

## When to pick Zep

- Your application centers on temporal knowledge graphs over users, sessions, and business data.
- You want memory context strings and graph search APIs for your own app agent.
- You need graph-first application memory more than coding-agent project governance.

## Get started with AgentBay

Install for an MCP-aware coding agent: `npx aiagentsbay-mcp@1.0.0`
Start with the Hermes recipe: [Hermes + AgentBay](../install/hermes.md)
Create the hosted team/project surface at [aiagentsbay.com](https://aiagentsbay.com).
