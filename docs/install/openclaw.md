# OpenClaw + StremAI

## Recommended config

Use the StremAI hosted MCP endpoint when your OpenClaw setup supports remote MCP:

```json
{
  "mcp": {
    "servers": {
      "stremai": {
        "type": "http",
        "url": "https://stremai.com/api/mcp"
      }
    }
  }
}
```

## OpenClaw native plugin fallback

```bash
npm install -g agentbay-openclaw@latest
```

```json
{
  "plugins": {
    "entries": {
      "agentbay-openclaw": {
        "enabled": true,
        "config": {
          "apiKey": "ab_live_YOUR_KEY",
          "projectId": "proj_YOUR_PROJECT_ID",
          "autoRecall": true,
          "autoCapture": true,
          "topK": 5
        }
      }
    }
  }
}
```

`agentbay-openclaw` is the legacy compatibility package name. The connected memory product is StremAI.

## What works now

- `agentbay_memory_recall`: OpenClaw can pull relevant project memory before work.
- `agentbay_memory_store`: OpenClaw can capture useful decisions after work.
- `agentbay_memory_verify`: available through the StremAI MCP surface.
- `agentbay_memory_forget`: available through the StremAI MCP surface.

## Troubleshooting

- OpenClaw says StremAI is not configured: confirm the remote MCP server or plugin config is present.
- Recall never runs in the native plugin: make sure `autoRecall` is `true` and restart OpenClaw after editing `openclaw.json`.
- The plugin cannot authenticate: confirm `apiKey` and `projectId` match your StremAI project.
