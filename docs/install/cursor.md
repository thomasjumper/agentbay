# Cursor + AgentBay

> GBrain is one user, one brain. AgentBay is teams, projects, governance.

Cursor already knows the files in front of it; AgentBay helps it remember what happened before this chat and outside this machine. Store project decisions once and Cursor can recall them in later sessions. The same memory can also be available to Claude Code, Codex CLI, or a teammate working in the same AgentBay project.

## Install

```bash
npm install -g aiagentsbay-mcp@1.0.0
```

## Configure

Add this to `.cursor/mcp.json` in the project, or to Cursor's global MCP config if you want it available across workspaces:

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

Restart Cursor or reload MCP tools after saving the file.

## Try it

```text
You: Store in AgentBay: "Use the semantic tier for durable architecture decisions."
Cursor: Stored that memory.
You: Which tier should I use for architecture decisions?
Cursor: AgentBay recalls that durable architecture decisions belong in the semantic tier.
```

Open the same project in another MCP-aware agent and the decision is still available.

## Troubleshooting

- Cursor shows no AgentBay tools: reload Cursor's MCP tools or restart the editor after editing `.cursor/mcp.json`.
- The command works in Terminal but not Cursor: use the full path from `which npx` as the `command` value.
- Recall returns nothing: store a memory first, then make sure the same AgentBay account is configured in the other workspace.
