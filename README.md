# StremAI

**One brain for all your coding agents.**

StremAI is a shared memory layer for AI coding agents. Connected agents in tools like Claude Code, Cursor, Codex, and other MCP-compatible clients can store what they learn while working, and other connected agents can recall it later across sessions, machines, and tools.

Memory is user-controlled: entries are human-readable, attributed to the agent that stored them, and can be exported, archived, or erased from StremAI.

[![PyPI](https://img.shields.io/pypi/v/stremai.svg)](https://pypi.org/project/stremai/) [![npm](https://img.shields.io/npm/v/%40tmjumper%2Fstremai.svg?label=npm)](https://www.npmjs.com/package/@tmjumper/stremai) [![MCP](https://img.shields.io/npm/v/aiagentsbay-mcp.svg?label=mcp)](https://www.npmjs.com/package/aiagentsbay-mcp) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## The short version

- **Hosted MCP first.** Connect `https://stremai.com/api/mcp` with OAuth/browser sign-in where your MCP client supports it.
- **Works with the tools developers already use.** Claude Code, Cursor, Codex, Windsurf, OpenClaw, Hermes, and other MCP clients can use the same memory layer.
- **API keys are the fallback.** Use them for CI, scripts, or clients that cannot complete OAuth/browser sign-in.
- **Compatibility names remain.** Some packages and tools still use the original `agentbay` or `aiagentsbay-mcp` names so existing installs keep working.

## Connect Claude Code

```bash
claude mcp add --transport http stremai https://stremai.com/api/mcp --scope user
```

Then approve the sign-in in your browser. The `--scope user` flag makes the connection available outside the current project directory.

## Connect another MCP client

Use the hosted endpoint:

```json
{
  "mcpServers": {
    "stremai": {
      "type": "http",
      "url": "https://stremai.com/api/mcp"
    }
  }
}
```

If your client cannot complete OAuth/browser sign-in, create an API key in StremAI and use a Bearer header:

```json
{
  "mcpServers": {
    "stremai": {
      "type": "http",
      "url": "https://stremai.com/api/mcp",
      "headers": {
        "Authorization": "Bearer ab_live_your_key_here"
      }
    }
  }
}
```

## Local package fallback

For stdio-only clients or local experiments:

```bash
npx -y aiagentsbay-mcp@latest
```

The package name is legacy compatibility; new docs and server aliases use `stremai`.

Python:

```bash
pip install stremai
```

```python
from stremai import StremAI

brain = StremAI()
brain.store("JWT auth uses 24h refresh tokens", title="Auth pattern", type="PATTERN")
brain.recall("authentication")
```

## What StremAI remembers

StremAI is for the learned layer that accumulates while agents work:

- decisions and architectural context
- setup gotchas and repo-specific commands
- pitfalls that cost time once and should not cost time again
- handoffs between Claude Code, Cursor, Codex, and teammates
- project facts that should be available to the next connected agent

Keep your instruction files. `CLAUDE.md`, `AGENTS.md`, and project READMEs hold instructions you write. StremAI holds the memory agents learn while working.

## Useful entry points

- Website: [stremai.com](https://stremai.com)
- MCP docs: [stremai.com/docs/mcp-memory](https://stremai.com/docs/mcp-memory)
- Claude Code memory: [stremai.com/docs/claude-code-memory](https://stremai.com/docs/claude-code-memory)
- Python SDK: [stremai.com/docs/python-sdk](https://stremai.com/docs/python-sdk)
- AI answer inventory: [stremai.com/llms-full.txt](https://stremai.com/llms-full.txt)

## Install guides

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

## About this repo

This is StremAI's public install, comparison, scorecard, and MCP recipe surface. The repository name remains `agentbay` for compatibility with older links and package metadata.

The hosted application and some SDK implementation details are developed separately. File public docs issues here, and we route product or package issues internally when needed.

## License

[MIT](LICENSE) for everything in this repository.
