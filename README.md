# AgentBay

**Memory OS for coding agents — persistent memory for teams, projects, and governance.**

> GBrain is one user, one brain. AgentBay is teams, projects, governance.

[![PyPI](https://img.shields.io/pypi/v/agentbay.svg)](https://pypi.org/project/agentbay/) [![npm](https://img.shields.io/npm/v/agentbay.svg)](https://www.npmjs.com/package/agentbay) [![MCP](https://img.shields.io/npm/v/aiagentsbay-mcp.svg?label=mcp)](https://www.npmjs.com/package/aiagentsbay-mcp) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A persistent memory layer for AI coding agents. Works with Claude Code, OpenAI Codex CLI, Cursor, OpenClaw, Hermes, and any MCP-aware client. Local-first install, clean upgrade to hosted cloud, with role-based teams, projects, and audit-grade governance built in.

## Install

Pick your stack:

```bash
# Python
pip install agentbay

# TypeScript / Node
npm install agentbay

# Hosted via MCP (Claude Code, Cursor, Codex CLI, Windsurf, ChatGPT)
npx aiagentsbay-mcp
```

## Quick start

```python
from agentbay import AgentBay

brain = AgentBay(project_id="proj_checkout")
brain = brain.login()
brain.store("Deploys require pgvector(512) migrations first",
            title="deploy memory")
brain.recall("what should we check before deploy?")

# every teammate's agent in this project now recalls this
```

Same brain, every agent. When Cursor stores it, Claude Code recalls it.

## Why AgentBay

| Need | AgentBay | GBrain | Mem0 | Letta | Zep |
|---|---|---|---|---|---|
| Local-first install | ✓ | ✓ | partial | — | — |
| Hosted cloud upgrade | ✓ | self-host (ngrok) | ✓ | ✓ | ✓ |
| Teams + role-based perms | ✓ | — | partial | — | — |
| Project / team / public scope hierarchy | ✓ | — | — | — | — |
| Knowledge tiers with TTL/decay | ✓ | — | — | — | — |
| Approval modes + audit logs | ✓ | scoped ops | — | — | — |
| Multi-agent MCP-native | ✓ | ✓ | ✓ | — | ✓ |
| Single-dev retrieval lift (BrainBench-class) | in progress (see scorecards) | ✓ | — | — | — |
| **Published retrieval scorecards** | **✓ (LOCOMO + native)** | ✓ (BrainBench) | — | — | — |

### Where we lose

GBrain currently leads on single-dev retrieval evals; AgentBay does not yet claim a BrainBench-class win. AgentBay publishes its own [scorecards](docs/scorecards/) anyway, including ablation rows where graph or hybrid retrieval loses to vector-only. That is the transparency lever: the comparison stays checkable, even when the numbers are uncomfortable.

We publish our retrieval numbers. See [`docs/scorecards/`](docs/scorecards/) — reproducible LOCOMO and AgentBay-native rich-prose corpora, three-row ablations (Full hybrid / Graph disabled / Vector only) on every release.

## Connect your agent

- [Claude Code](docs/install/claude-code.md)
- [OpenAI Codex CLI](docs/install/codex-cli.md)
- [Cursor](docs/install/cursor.md)
- [OpenClaw](docs/install/openclaw.md)
- [Hermes](docs/install/hermes.md)

## Comparison reads

- [vs. GBrain](docs/vs/gbrain.md)
- [vs. Mem0](docs/vs/mem0.md)
- [vs. Letta](docs/vs/letta.md)
- [vs. Zep](docs/vs/zep.md)

## Hosted dashboard

Sign in at **[aiagentsbay.com](https://aiagentsbay.com)** to manage teams, projects, knowledge sharing, and audit logs.

## Source

AgentBay's SDKs (Python, TypeScript), MCP server, and hosted dashboard are developed in private. Canonical install paths are PyPI (`agentbay`), npm (`agentbay`, `aiagentsbay-mcp`), and the hosted dashboard at [aiagentsbay.com](https://aiagentsbay.com). This repo is the public surface for install docs, comparison pages, retrieval scorecards, and MCP recipes. File issues against this repo for any AgentBay component — we route internally.

## Contributing

This repo is the public install + docs surface for AgentBay. The SDKs and hosted application source are private. Issues, discussions, and docs PRs are welcome here.

See [CONTRIBUTING.md](CONTRIBUTING.md).

Star this repo to follow the public install surface, and sign in at [aiagentsbay.com](https://aiagentsbay.com) when you are ready to sync agent memory with a team.

## License

[MIT](LICENSE) for everything in this repository.
