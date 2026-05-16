# OpenClaw + AgentBay

## 30-second install

```bash
npm install -g agentbay-openclaw@0.4.3
cat > openclaw.json <<'JSON'
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
JSON
```

Restart OpenClaw after saving `openclaw.json`.

## Config example

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

Replace `ab_live_YOUR_KEY` and `proj_YOUR_PROJECT_ID` with values from aiagentsbay.com.

## What works now

Tested surface: `agentbay-openclaw@0.4.3`.

- `agentbay_recall`: OpenClaw can pull relevant project memory before work.
- `agentbay_store`: OpenClaw can capture useful decisions after work.
- `agentbay_verify`: available through the AgentBay MCP surface when OpenClaw is also configured for `aiagentsbay-mcp@1.0.0`.
- `agentbay_forget`: available through the AgentBay MCP surface when OpenClaw is also configured for `aiagentsbay-mcp@1.0.0`.

## Troubleshooting

- OpenClaw says AgentBay is not configured: confirm `apiKey` is present or set `AGENTBAY_API_KEY`.
- Recall never runs: make sure `autoRecall` is `true` and restart OpenClaw after editing `openclaw.json`.
- Upgrades from older SDKs report `no such column`: update to `agentbay@1.1.8` or `agentbay==1.8.1`; those releases auto-apply the local schema migration on DB open.

GBrain is one user, one brain. AgentBay is teams, projects, governance.
