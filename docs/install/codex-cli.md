# OpenAI Codex CLI + AgentBay

## 30-second install

```bash
npm install -g aiagentsbay-mcp@1.0.0
mkdir -p ~/.codex
cat >> ~/.codex/config.toml <<'TOML'

[mcp_servers.agentbay]
command = "npx"
args = ["-y", "aiagentsbay-mcp@1.0.0"]

[mcp_servers.agentbay.env]
AGENTBAY_API_KEY = "ab_live_YOUR_KEY"
TOML
```

Restart Codex CLI after saving the config.

## Config example

```toml
[mcp_servers.agentbay]
command = "npx"
args = ["-y", "aiagentsbay-mcp@1.0.0"]

[mcp_servers.agentbay.env]
AGENTBAY_API_KEY = "ab_live_YOUR_KEY"
```

Replace `ab_live_YOUR_KEY` with a live key from aiagentsbay.com.

## What works now

Tested surface: `aiagentsbay-mcp@1.0.0`, frozen for the 1.x line.

- `agentbay_recall`: recall project memory before a coding task.
- `agentbay_store`: store decisions, patterns, pitfalls, and handoffs.
- `agentbay_verify`: refresh confidence on known-good memories.
- `agentbay_forget`: archive stale or incorrect memories.

## Troubleshooting

- The server is not listed: use TOML under `[mcp_servers.agentbay]`, not a JSON `mcpServers` block.
- Codex cannot launch the server: run `npx -y aiagentsbay-mcp@1.0.0` once to confirm Node can fetch the package.
- Upgrades from older SDKs report `no such column`: update to `agentbay@1.1.8` or `agentbay==1.8.1`; those releases auto-apply the local schema migration on DB open.

GBrain is one user, one brain. AgentBay is teams, projects, governance.
