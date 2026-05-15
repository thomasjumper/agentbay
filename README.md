# AgentBay

**Memory OS for coding agents — persistent memory, collaboration, and governance for coding agents.**

GBrain is one user, one brain. AgentBay is teams, projects, governance.

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

brain = AgentBay()                                    # local, zero config
brain.store("Our deploy pipeline uses pgvector(512)")
brain.recall("how do we store embeddings?")
brain.login()                                         # syncs to cloud + teams
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
| **Published retrieval scorecards** | **✓ (LOCOMO + native)** | ✓ (BrainBench) | — | — | — |

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

## Contributing

This repo is the public install + docs surface for AgentBay. The hosted application source is private. The SDKs (Python, TypeScript, MCP) ship to PyPI and npm and are open to issues + community input here.

See [CONTRIBUTING.md](CONTRIBUTING.md). Issues and discussions are welcome.

## License

[MIT](LICENSE) for everything in this repository.
