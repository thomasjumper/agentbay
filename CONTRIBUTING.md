# Contributing to StremAI

Thanks for your interest. This repo is the public install, docs, comparison, scorecard, and MCP recipe surface for StremAI. The repository name remains `agentbay` for compatibility with older links.

## What lives here

- README and overview docs
- Install recipes per agent host: Claude Code, Codex, Cursor, OpenClaw, Hermes
- Comparison pages versus other memory products
- Public mirrors of retrieval scorecards
- Runnable examples for the SDKs

## What does not live here

- The Next.js hosted application source
- Internal billing, auth, and operational tooling
- Production secrets or environment configuration

If you are filing an issue about the hosted dashboard at `stremai.com`, use this repo's issues and we will route internally.

## Reporting a bug

1. Open an issue using the bug report template.
2. Include the package version (`pip show stremai`, `npm list @tmjumper/stremai`, or `aiagentsbay-mcp` version), the host agent, and a minimal reproduction.
3. If the bug is in the hosted dashboard, link the affected page and an approximate timestamp.

## Proposing a feature

1. Open an issue using the feature request template.
2. Describe the use case first, then the proposed surface change. We bias toward use-case-driven additions.

## Pull requests

We welcome PRs against:

- README and docs
- Install recipes and examples
- Comparison pages, when changes are factually accurate and cite sources

We do not accept PRs that:

- Add unsupported marketing claims
- Modify scorecard markdowns directly; these are synced from the application repo
- Add unrelated infrastructure without prior discussion

## Code of conduct

Be specific. Be honest about trade-offs. Disagree with arguments, not people.

## License

By contributing, you agree your contributions will be licensed under the MIT License. See [LICENSE](LICENSE).
