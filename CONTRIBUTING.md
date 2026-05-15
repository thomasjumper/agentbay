# Contributing to AgentBay

Thanks for your interest. This repo is the public install + docs surface for AgentBay; the hosted application source lives in a separate private repository.

## What lives here

- README and overview docs
- Install recipes per agent host (Claude Code, Codex CLI, Cursor, OpenClaw, Hermes)
- Comparison pages versus other memory products
- Public mirrors of our retrieval scorecards (the methodology and methodology repo are kept in sync from the application repo)
- Runnable examples for the SDKs

## What doesn't live here

- The Next.js hosted application source (private)
- Internal billing, auth, and operational tooling
- Production secrets or environment configuration

If you're filing an issue about the **hosted dashboard** at aiagentsbay.com, please use this repo's issues anyway — we triage from here and route internally.

## Reporting a bug

1. Open an issue using the **Bug report** template.
2. Include the SDK version (`pip show agentbay` / `npm list agentbay`), the host (Claude Code, Cursor, etc.), and a minimal reproduction.
3. If the bug is in the hosted dashboard, link the affected page and an approximate timestamp.

## Proposing a feature

1. Open an issue using the **Feature request** template.
2. Describe the use case first, then the proposed surface change. We bias toward use-case-driven additions.

## Pull requests

We welcome PRs against:

- The README and docs
- Install recipes and examples
- The comparison pages (provided changes are factually accurate and cite sources)

We do **not** accept PRs that:

- Inline marketing language without specifics (the wedge is "teams, projects, governance" — every claim should be backed by a specific capability or a scorecard row)
- Modify scorecard markdowns directly (these are synced from the application repo)
- Add unrelated infrastructure (CI, formatters, linters) without prior discussion

## Code of conduct

Be specific. Be honest about trade-offs. Disagree with arguments, not people.

## License

By contributing, you agree your contributions will be licensed under the MIT License — see [LICENSE](LICENSE).
