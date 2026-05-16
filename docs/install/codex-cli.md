# OpenAI Codex CLI + AgentBay

> GBrain is one user, one brain. AgentBay is teams, projects, governance.

Codex CLI often works across multiple short terminal sessions, which makes memory easy to lose. AgentBay gives Codex a persistent project memory it can store into and recall from later. When the same project is shared with a team, another agent can pick up the decision trail without replaying the whole conversation.

## Install

```bash
npm install -g aiagentsbay-mcp@1.0.0
```

## Configure

Add this to `~/.codex/config.toml`:

```toml
[mcp_servers.agentbay]
command = "npx"
args = ["-y", "aiagentsbay-mcp@1.0.0"]

[mcp_servers.agentbay.env]
AGENTBAY_API_KEY = "ab_live_YOUR_KEY"
```

Restart Codex CLI after saving the file.

## Try it

```text
You: Store in AgentBay: "The billing tests need STRIPE_WEBHOOK_SECRET set."
Codex CLI: Stored that project memory.
You: Recall what billing tests need before I run them.
Codex CLI: AgentBay recalls that billing tests need STRIPE_WEBHOOK_SECRET set.
```

Open the same project on another machine and Codex can recall the same memory.

## Troubleshooting

- The server is not listed: check that the table is under `[mcp_servers.agentbay]`, not a JSON `mcpServers` block.
- Codex cannot launch the server: run `npx -y aiagentsbay-mcp@1.0.0` once to confirm Node can fetch the package.
- AgentBay returns auth errors: use a live API key in `AGENTBAY_API_KEY`; setup tokens are only for first-run exchange.
