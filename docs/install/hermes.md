# Hermes + StremAI

> Verification status: package and MCP launch verified locally. Live Hermes host verification still depends on account access.

## Recommended config

```yaml
mcp_servers:
  stremai:
    type: http
    url: https://stremai.com/api/mcp
```

Restart Hermes after saving `cli-config.yaml`. If Hermes supports browser sign-in for remote MCP, approve the StremAI connection.

## API-key fallback

```yaml
mcp_servers:
  stremai:
    type: http
    url: https://stremai.com/api/mcp
    headers:
      Authorization: "Bearer ab_live_YOUR_KEY"
```

## Stdio fallback

```yaml
mcp_servers:
  stremai:
    command: npx
    args: ["-y", "aiagentsbay-mcp@latest", "--api-key", "ab_live_YOUR_KEY"]
```

The `aiagentsbay-mcp` package name is legacy compatibility; use `stremai` as the server alias in new configs.

## What works now

- `agentbay_memory_recall`: available through the MCP server.
- `agentbay_memory_store`: available through the MCP server.
- `agentbay_memory_verify`: available through the MCP server.
- `agentbay_memory_forget`: available through the MCP server.

## Troubleshooting

- Hermes does not show StremAI tools: restart Hermes after editing the MCP config and confirm the server name is `stremai`.
- The stdio server exits immediately: run `npx -y aiagentsbay-mcp@latest --help` in a terminal to confirm Node can launch the package.
- OAuth is not supported by your Hermes build: use the API-key fallback.
