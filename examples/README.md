# AgentBay Examples

GBrain is one user, one brain. AgentBay is teams, projects, governance.

These examples are intentionally small. They verify the public packages can store a temporary memory, recall it, and clean it up again.

## Python

[`python/first_recall.py`](python/first_recall.py) uses `agentbay==1.8.1`.

```bash
python3 -m venv /tmp/agentbay-example-python
. /tmp/agentbay-example-python/bin/activate
pip install --no-cache-dir agentbay==1.8.1
AGENTBAY_API_KEY=ab_live_... AGENTBAY_PROJECT_ID=proj_... python examples/python/first_recall.py
```

## TypeScript

[`typescript/first_recall.ts`](typescript/first_recall.ts) uses `agentbay@1.1.8`.

```bash
npm install agentbay@1.1.8 tsx
AGENTBAY_API_KEY=ab_live_... AGENTBAY_PROJECT_ID=proj_... npx tsx examples/typescript/first_recall.ts
```

## MCP

[`mcp/claude-code.json`](mcp/claude-code.json) is the same Claude Code MCP snippet referenced by the install recipe.
