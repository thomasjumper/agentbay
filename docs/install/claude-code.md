# Claude Code + AgentBay

## 30-second install

```bash
npm install -g aiagentsbay-mcp@1.0.0
cat > .mcp.json <<'JSON'
{
  "mcpServers": {
    "agentbay": {
      "type": "stdio",
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

Restart Claude Code from the project directory after saving `.mcp.json`.

## Config example

```json
{
  "mcpServers": {
    "agentbay": {
      "type": "stdio",
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

- `agentbay_recall`: recall project memory from Claude Code.
- `agentbay_store`: store durable project knowledge.
- `agentbay_verify`: mark a memory as still accurate.
- `agentbay_forget`: archive stale or incorrect memory.

## Troubleshooting

- Claude Code does not show AgentBay tools: restart Claude Code from the directory that contains `.mcp.json`.
- `npx` is not found: install Node.js, then run `node --version` and `npm --version` from the same shell that launches Claude Code.
- Upgrades from older SDKs report `no such column`: update to `agentbay@1.1.8` or `agentbay==1.8.1`; those releases auto-apply the local schema migration on DB open.

GBrain is one user, one brain. AgentBay is teams, projects, governance.
