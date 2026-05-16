# Claude Code + AgentBay

> GBrain is one user, one brain. AgentBay is teams, projects, governance.

Claude Code is strongest when it can carry context across sessions without making every repo depend on a long prompt. AgentBay gives Claude Code persistent project memory, then lets teammates and other agents recall the same decisions later. That makes handoffs feel like shared engineering memory instead of a transcript hunt.

## Install

```bash
npm install -g aiagentsbay-mcp@1.0.0
```

## Configure

Add this to `.mcp.json` in the project where you run Claude Code:

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

Restart Claude Code after saving the file.

## Try it

```text
You: Store this in AgentBay: "Checkout deploys must run pgvector migrations first."
Claude Code: Stored that deployment memory.
You: What should we check before the next checkout deploy?
Claude Code: AgentBay says checkout deploys must run pgvector migrations first.
```

Open the same AgentBay project from another teammate's agent and recall works there too.

## Troubleshooting

- `agentbay` does not appear in Claude Code: restart Claude Code from the project directory containing `.mcp.json`.
- `npx` is not found: install Node.js, then run `node --version` and `npm --version` from the same shell that launches Claude Code.
- Authentication fails: replace the placeholder with an API key from aiagentsbay.com and make sure it starts with `ab_live_`.
