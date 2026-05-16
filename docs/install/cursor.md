# Cursor + AgentBay

## 30-second install

```bash
npm install -g aiagentsbay-mcp@1.0.0
mkdir -p .cursor
cat > .cursor/mcp.json <<'JSON'
{
  "mcpServers": {
    "agentbay": {
      "command": "npx",
      "args": ["-y", "aiagentsbay-mcp@1.0.0"],
      "env": {
        "AGENTBAY_API_KEY": "ab_live_YOUR_KEY"
      }
    }
  }
}
JSON
```

Reload Cursor's MCP tools or restart the editor.

## Config example

```json
{
  "mcpServers": {
    "agentbay": {
      "command": "npx",
      "args": ["-y", "aiagentsbay-mcp@1.0.0"],
      "env": {
        "AGENTBAY_API_KEY": "ab_live_YOUR_KEY"
      }
    }
  }
}
```

Replace `ab_live_YOUR_KEY` with a live key from aiagentsbay.com.

## What works now

Tested surface: `aiagentsbay-mcp@1.0.0`, frozen for the 1.x line.

- `agentbay_recall`: recall previous project decisions inside Cursor.
- `agentbay_store`: store memory that Claude Code, Codex CLI, or teammates can reuse.
- `agentbay_verify`: confirm memory that still matches the codebase.
- `agentbay_forget`: archive memory that is no longer true.

## Troubleshooting

- Cursor shows no AgentBay tools: reload MCP tools or restart Cursor after editing `.cursor/mcp.json`.
- The command works in Terminal but not Cursor: replace `npx` with the full path from `which npx`.
- Upgrades from older SDKs report `no such column`: update to `agentbay@1.1.8` or `agentbay==1.8.1`; those releases auto-apply the local schema migration on DB open.

GBrain is one user, one brain. AgentBay is teams, projects, governance.
