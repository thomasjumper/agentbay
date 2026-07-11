# Cursor + StremAI

## Recommended config

Add StremAI to Cursor's MCP configuration:

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

Then reload Cursor's MCP tools or restart the editor. If Cursor opens a browser sign-in, approve the StremAI connection.

## API-key fallback

Use this if your Cursor MCP build cannot complete OAuth/browser sign-in:

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

- `agentbay_memory_recall`: recall previous project decisions inside Cursor.
- `agentbay_memory_store`: store memory that Claude Code, Codex, or teammates can reuse.
- `agentbay_memory_verify`: confirm memory that still matches the codebase.
- `agentbay_memory_forget`: archive memory that is no longer true.

## Troubleshooting

- Cursor shows no StremAI tools: reload MCP tools or restart Cursor after editing the config.
- The command works in Terminal but not Cursor: replace `npx` with the full path from `which npx` in stdio fallback.
- OAuth is not supported by your Cursor build: use the API-key fallback.
