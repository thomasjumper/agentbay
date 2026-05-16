# AgentBay vs GBrain

> GBrain is one user, one brain. AgentBay is teams, projects, governance.

## TL;DR

GBrain is genuinely strong for a single developer who wants a local brain, skillpack workflows, and strong recent retrieval evals around a personal knowledge base. AgentBay is different because it is built for teams sharing memory across projects and agents, with a hosted dashboard for role-based permissions, project/team scope, approval modes, and audit-grade governance. Pick GBrain if your main problem is making one person's agent remember better; pick AgentBay if multiple people, machines, or coding agents need shared project memory they can govern.

## At a glance

| Dimension | GBrain | AgentBay |
|---|---|---|
| Primary user model | One person's brain and workspace | Teams, projects, and multiple coding agents |
| Single-dev retrieval lift | Wins today on BrainBench-class evals | in progress (see scorecards) |
| Setup model | Local repo, Bun install, CLI initialization | `pip install agentbay`, `npm install agentbay`, or `npx aiagentsbay-mcp@1.0.0` |
| Knowledge shape | Markdown brain, skills, typed links, timeline | Project-scoped memories, knowledge tiers, tags, graph links, hosted project surfaces |
| Agent workflow | Skillpack-driven personal agent workflows | MCP-native memory for Claude Code, Codex CLI, Cursor, Hermes, OpenClaw, and teammates |
| Team permissions | Not the core product shape | Role-based team/project permissions in the hosted dashboard |
| Governance | Local workflow checks and contributor gates | Project/team scope, approval modes, audit logs, and hosted governance controls |
| Published eval posture | BrainBench and related GBrain eval material | Public LOCOMO and AgentBay-native scorecards with ablations |

## Where GBrain is strong

- Strong single-developer retrieval story, including a recent BrainBench lead that AgentBay should treat as real.
- Local-first personal brain workflow with a CLI and a markdown-centered mental model.
- Skillpack system that gives agents concrete operating procedures, not just memory retrieval.
- Rich personal ingestion and entity-linking story for one operator's notes, media, and workflows.

## Where AgentBay is different

- Teams/projects/governance are first-class: hosted projects, team scope, role-based permissions, approval modes, and audit logs.
- AgentBay plugs into existing coding agents through MCP instead of asking a team to standardize on one personal brain workflow.
- Project-scoped memory lets Cursor, Claude Code, Codex CLI, Hermes, and OpenClaw share the same context.
- Public scorecards include ablation rows, so users can see where hybrid or graph retrieval helps and where it does not.
- The hosted upgrade path at aiagentsbay.com gives teams a managed surface for shared memory instead of only local brain files.

## Transparency

AgentBay publishes its retrieval [`docs/scorecards/`](../scorecards/) including ablation rows where graph or hybrid retrieval lose to vector-only. Competitor cells in our scorecard tables stay empty until AgentBay reproduces them on identical corpus and hardware. That means GBrain's BrainBench lead is acknowledged here, but not pasted into AgentBay tables as if we had reproduced it.

## When to pick GBrain

- You are one developer optimizing a personal brain and want the strongest current single-user retrieval story.
- You want a markdown-centered local brain with skills and typed links around your own notes.
- You are comfortable with GBrain's repo-based install and local workflow model.

## Get started with AgentBay

Install for an MCP-aware coding agent: `npx aiagentsbay-mcp@1.0.0`
Start with the Claude Code recipe: [Claude Code + AgentBay](../install/claude-code.md)
Create the hosted team/project surface at [aiagentsbay.com](https://aiagentsbay.com).
