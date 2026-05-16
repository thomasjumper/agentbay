# Hermes + AgentBay

> Verification status: package and MCP launch verified locally. Live Hermes account verification is still pending human access.

## 30-second install

```bash
npm install -g aiagentsbay-mcp@1.0.0
cat >> cli-config.yaml <<'YAML'

mcp_servers:
  agentbay:
    command: npx
    args: ["-y", "aiagentsbay-mcp@1.0.0"]
    env:
      AGENTBAY_API_KEY: "ab_live_YOUR_KEY"
YAML
```

Restart Hermes after saving `cli-config.yaml`.

## Config example

```yaml
mcp_servers:
  agentbay:
    command: npx
    args: ["-y", "aiagentsbay-mcp@1.0.0"]
    env:
      AGENTBAY_API_KEY: "ab_live_YOUR_KEY"
```

Replace `ab_live_YOUR_KEY` with a live key from aiagentsbay.com.

## What works now

Tested surface: `aiagentsbay-mcp@1.0.0`, frozen for the 1.x line. Live Hermes host verification is pending.

- `agentbay_recall`: available through the MCP server.
- `agentbay_store`: available through the MCP server.
- `agentbay_verify`: available through the MCP server.
- `agentbay_forget`: available through the MCP server.

## Troubleshooting

- Hermes does not show AgentBay tools: restart Hermes after editing the MCP config and confirm the server name is `agentbay`.
- The server exits immediately: run `npx -y aiagentsbay-mcp@1.0.0` in a terminal to confirm Node can launch the package.
- Upgrades from older SDKs report `no such column`: update to `agentbay@1.1.8` or `agentbay==1.8.1`; those releases auto-apply the local schema migration on DB open.

GBrain is one user, one brain. AgentBay is teams, projects, governance.
