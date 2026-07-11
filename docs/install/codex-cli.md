# OpenAI Codex CLI + StremAI

## Recommended install

```bash
codex mcp add stremai --url https://stremai.com/api/mcp
```

If your Codex environment needs a Bearer token instead of browser sign-in:

```bash
codex mcp add stremai \
  --url https://stremai.com/api/mcp \
  --bearer-token-env-var AGENTBAY_API_KEY
```

Environment variable names keep the original `AGENTBAY_` prefix so existing setups do not break.

## Manual TOML config

```toml
[mcp_servers.stremai]
url = "https://stremai.com/api/mcp"
bearer_token_env_var = "AGENTBAY_API_KEY"
```

## Stdio fallback

```toml
[mcp_servers.stremai]
command = "/bin/sh"
args = ["-c", 'exec npx -y aiagentsbay-mcp@latest --api-key "$AGENTBAY_API_KEY"']

[mcp_servers.stremai.env]
AGENTBAY_API_KEY = "ab_live_YOUR_KEY"
```

The `aiagentsbay-mcp` package name is legacy compatibility; use `stremai` as the server alias in new configs.

## What works now

- `agentbay_memory_recall`: recall previous project decisions before editing.
- `agentbay_memory_store`: store decisions, patterns, pitfalls, and handoffs.
- `agentbay_memory_verify`: refresh confidence on known-good memories.
- `agentbay_memory_forget`: archive stale or incorrect memories.

## Troubleshooting

- The server is not listed: use TOML under `[mcp_servers.stremai]`.
- Codex cannot launch stdio fallback: run `npx -y aiagentsbay-mcp@latest --help` once to confirm Node can fetch the package.
- OAuth is not available in your Codex environment: use `--bearer-token-env-var AGENTBAY_API_KEY`.
