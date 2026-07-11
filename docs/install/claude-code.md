# Claude Code + StremAI

## Recommended install

```bash
claude mcp add --transport http stremai https://stremai.com/api/mcp --scope user
```

Approve the browser sign-in when Claude Code opens it. `--scope user` makes the connection available across projects, not only the current directory.

## Manual MCP config

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

## API-key fallback

Use this for CI, scripts, or clients that cannot complete OAuth/browser sign-in:

```json
{
  "mcpServers": {
    "stremai": {
      "type": "http",
      "url": "https://stremai.com/api/mcp",
      "headers": {
        "Authorization": "Bearer ab_live_YOUR_KEY"
      }
    }
  }
}
```

## Stdio fallback

```json
{
  "mcpServers": {
    "stremai": {
      "command": "npx",
      "args": ["-y", "aiagentsbay-mcp@latest", "--api-key", "ab_live_YOUR_KEY"]
    }
  }
}
```

The `aiagentsbay-mcp` package name is legacy compatibility; use `stremai` as the server alias in new configs.

## What works now

- `agentbay_memory_recall`: recall relevant project memory before work.
- `agentbay_memory_store`: store decisions, patterns, pitfalls, and handoffs.
- `agentbay_memory_verify`: refresh confidence on known-good memories.
- `agentbay_memory_forget`: archive stale or incorrect memories.

## Troubleshooting

- Claude Code does not show StremAI tools: restart Claude Code after adding the MCP server.
- The connection only works in one folder: re-add the server with `--scope user`.
- OAuth is not supported by your client: use the API-key fallback.
