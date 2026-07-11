# StremAI Examples

These examples are intentionally small. They verify the public packages can store a temporary memory, recall it, and clean it up again.

## Python

[`python/first_recall.py`](python/first_recall.py) uses `stremai`.

```bash
python3 -m venv /tmp/stremai-example-python
. /tmp/stremai-example-python/bin/activate
pip install --no-cache-dir stremai
AGENTBAY_API_KEY=ab_live_... AGENTBAY_PROJECT_ID=proj_... python examples/python/first_recall.py
```

## TypeScript

[`typescript/first_recall.ts`](typescript/first_recall.ts) uses `@tmjumper/stremai`.

```bash
npm install @tmjumper/stremai tsx
AGENTBAY_API_KEY=ab_live_... AGENTBAY_PROJECT_ID=proj_... npx tsx examples/typescript/first_recall.ts
```

## MCP

[`mcp/claude-code.json`](mcp/claude-code.json) is the same hosted StremAI MCP shape referenced by the install recipe.
