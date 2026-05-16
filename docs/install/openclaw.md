# OpenClaw + AgentBay

> GBrain is one user, one brain. AgentBay is teams, projects, governance.

OpenClaw runs well as a long-lived coding presence, so stale or missing context can quietly compound. AgentBay gives OpenClaw project memory it can auto-recall before work and auto-capture after useful turns. That makes OpenClaw's community or repo work visible to the rest of the team's agents.

## Install

```bash
npm install -g agentbay-openclaw@0.4.3
```

## Configure

Add this plugin entry to `openclaw.json`:

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

Restart OpenClaw after saving the file.

## Try it

```text
You: Store this in AgentBay: "Discord onboarding questions should link the MCP setup first."
OpenClaw: Stored that project memory.
You: What should I link when someone asks about onboarding?
OpenClaw: AgentBay recalls that onboarding questions should link the MCP setup first.
```

The next teammate or agent in the same project can reuse that community context.

## Troubleshooting

- OpenClaw says AgentBay is not configured: confirm `apiKey` is present or set `AGENTBAY_API_KEY`.
- Recall never runs: make sure `autoRecall` is `true` and restart OpenClaw after editing `openclaw.json`.
- Memories land in the wrong place: set `projectId` explicitly instead of relying on the plugin default project.
