# Hermes + AgentBay

> GBrain is one user, one brain. AgentBay is teams, projects, governance.

Hermes is useful when it can move quickly between tasks, but that speed loses value if each session starts cold. AgentBay gives Hermes a persistent memory backend through MCP so it can store decisions and recall them later. Shared AgentBay projects let another agent or teammate continue with the same context.

## Install

```bash
npm install -g aiagentsbay-mcp@1.0.0
```

## Configure

Add this `agentbay` server entry to Hermes `cli-config.yaml`:

```yaml
mcp_servers:
  agentbay:
    command: npx
    args: ["-y", "aiagentsbay-mcp@1.0.0"]
    env:
      AGENTBAY_API_KEY: "ab_live_YOUR_KEY"
```

Restart Hermes after saving the file so it can discover the new MCP tools.

## Try it

```text
You: Store in AgentBay: "The Hermes release checklist requires signed artifacts."
Hermes: Stored that memory.
You: What does the release checklist require?
Hermes: AgentBay recalls that Hermes releases require signed artifacts.
```

Use the same AgentBay project from another workstation and the release memory follows the team.

## Troubleshooting

- Hermes does not show AgentBay tools: restart Hermes after editing the MCP config and confirm the server name is `agentbay`.
- The server exits immediately: run `npx -y aiagentsbay-mcp@1.0.0` in a terminal to confirm Node can launch the package.
- Authentication fails: set `AGENTBAY_API_KEY` to a live key from aiagentsbay.com; do not leave the placeholder in place.
