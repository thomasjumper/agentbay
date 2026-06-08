# AgentBay Retrieval Scorecards

GBrain is one user, one brain. AgentBay is teams, projects, governance.

AgentBay publishes retrieval scorecards as diagnostic evidence, not as trophy numbers. The goal is to make the memory engine inspectable: what corpus was used, what retrieval variant ran, what embedding model produced vectors, and where full hybrid retrieval beats or loses to ablations.

The scorecards in this directory are public mirrors of scorecard markdown generated in the private `agentbay-app` repository. Only public-safe markdown crosses that boundary. Application source, environment files, billing/auth code, Vercel metadata, and private operational docs do not belong in this repository.

Each run ingests corpus entries through the same AgentBay `store()` path used by agents, then queries through the same `recall()` path. That keeps the reported numbers tied to the shipped memory behavior instead of a benchmark-only implementation. Every scorecard includes the commit, corpus, entry count, query count, embedding model, hardware, full results table, and notes about vector participation.

The current corpora cover two different kinds of memory stress. LOCOMO is a public long-context conversational memory corpus converted into evidence-backed recall queries. The AgentBay rich-prose corpus is smaller and native to this product: coding-agent memory, teams, projects, governance, onboarding, and eval scenarios written as longer natural-language facts.

Every scorecard includes three retrieval variants. Full hybrid uses AgentBay's combined retrieval stack. Graph disabled removes graph traversal from the mix. Vector only isolates dense retrieval. The comparison matters because a real memory OS cannot hide behind one strategy; the system needs lexical, tag, alias, vector, and graph retrieval to cooperate without suppressing strong evidence.

The metrics are standard retrieval diagnostics: precision at 1/5/10, recall at 5/10, MRR, top-1 stability, and p50/p95 recall latency. Scorecards require `voyage-3-lite` embeddings and are expected to run against an isolated transient Postgres database. Rows are intentionally published even when uncomfortable, because that is how regression targets stay honest.

Competitor rows stay empty until reproduced on the same corpus, hardware, and methodology. In particular, GBrain comparison work is tracked in issue [#190](https://github.com/thomasjumper/agentbay-app/issues/190); no GBrain benchmark number is copied into these scorecards unless AgentBay reproduces it under matching conditions.

## Headline Table

The table below is generated from the committed scorecard markdown files and sorted newest first. In GitHub, use browser find or copy the table into a spreadsheet to sort by metric.

| Date | Corpus | Scorecard | Embedding model | Full hybrid P@5 | Full hybrid R@5 | Full hybrid MRR | Full hybrid p50 | Vector-only P@5 | Vector-only R@5 | Vector-only MRR |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-05-19 | AgentBay rich prose | [`agentbay-codebench-evalmode-2026-05-19T15-19-36-583Z-d87bb71d05e9.md`](agentbay-codebench-evalmode-2026-05-19T15-19-36-583Z-d87bb71d05e9.md) | voyage-3-lite | 30.0% | 73.5% | 0.857 | 294.0ms | 30.0% | 73.5% | 0.861 |
| 2026-05-19 | AgentBay rich prose | [`agentbay-rich-prose-evalmode-2026-05-19T15-18-09-001Z-d87bb71d05e9.md`](agentbay-rich-prose-evalmode-2026-05-19T15-18-09-001Z-d87bb71d05e9.md) | voyage-3-lite | 5.6% | 9.3% | 0.128 | 10.0ms | 6.0% | 10.0% | 0.147 |
| 2026-05-19 | LOCOMO | [`locomo-evalmode-2026-05-19T18-59-50-752Z-d87bb71d05e9.md`](locomo-evalmode-2026-05-19T18-59-50-752Z-d87bb71d05e9.md) | voyage-3-lite | 5.8% | 23.2% | 0.205 | 2311.0ms | 5.6% | 22.0% | 0.198 |
| 2026-05-17 | AgentBay rich prose | [`agentbay-codebench-evalmode-2026-05-17T13-45-17-344Z-b36b121fa879.md`](agentbay-codebench-evalmode-2026-05-17T13-45-17-344Z-b36b121fa879.md) | voyage-3-lite | 25.6% | 62.8% | 0.758 | 290.0ms | 26.8% | 67.5% | 0.821 |
| 2026-05-17 | AgentBay rich prose | [`agentbay-codebench-evalmode-2026-05-17T13-47-02-285Z-b36b121fa879.md`](agentbay-codebench-evalmode-2026-05-17T13-47-02-285Z-b36b121fa879.md) | voyage-3-lite | 25.2% | 61.8% | 0.772 | 281.0ms | 26.4% | 66.8% | 0.821 |
| 2026-05-17 | AgentBay rich prose | [`agentbay-codebench-evalmode-2026-05-17T13-59-02-158Z-818d47b79fd8.md`](agentbay-codebench-evalmode-2026-05-17T13-59-02-158Z-818d47b79fd8.md) | voyage-3-lite | 25.2% | 61.8% | 0.776 | 288.0ms | 26.4% | 66.8% | 0.821 |
| 2026-05-17 | AgentBay rich prose | [`agentbay-codebench-evalmode-2026-05-17T14-00-39-976Z-818d47b79fd8.md`](agentbay-codebench-evalmode-2026-05-17T14-00-39-976Z-818d47b79fd8.md) | voyage-3-lite | 24.8% | 60.8% | 0.765 | 281.0ms | 26.8% | 67.5% | 0.822 |
| 2026-05-16 | AgentBay rich prose | [`agentbay-rich-prose-evalmode-2026-05-16T23-05-42-945Z-f500a996e506.md`](agentbay-rich-prose-evalmode-2026-05-16T23-05-42-945Z-f500a996e506.md) | voyage-3-lite | 6.0% | 10.0% | 0.152 | 308.0ms | 5.8% | 9.7% | 0.142 |
| 2026-05-16 | AgentBay rich prose | [`agentbay-rich-prose-evalmode-2026-05-16T23-08-20-923Z-f500a996e506.md`](agentbay-rich-prose-evalmode-2026-05-16T23-08-20-923Z-f500a996e506.md) | voyage-3-lite | 6.2% | 10.3% | 0.158 | 310.0ms | 5.8% | 9.7% | 0.153 |
| 2026-05-16 | LOCOMO | [`locomo-evalmode-2026-05-16T18-32-35-913Z-f500a996e506.md`](locomo-evalmode-2026-05-16T18-32-35-913Z-f500a996e506.md) | voyage-3-lite | 4.9% | 20.3% | 0.190 | 2214.0ms | 4.6% | 19.0% | 0.167 |
| 2026-05-16 | LOCOMO | [`locomo-evalmode-2026-05-16T23-02-55-359Z-f500a996e506.md`](locomo-evalmode-2026-05-16T23-02-55-359Z-f500a996e506.md) | voyage-3-lite | 5.0% | 20.7% | 0.186 | 2506.0ms | 4.6% | 19.2% | 0.165 |
| 2026-05-15 | AgentBay rich prose | [`agentbay-rich-prose-2026-05-15T23-22-15-635Z-b02f895ab357.md`](agentbay-rich-prose-2026-05-15T23-22-15-635Z-b02f895ab357.md) | voyage-3-lite | 6.0% | 10.0% | 0.151 | 311.0ms | 5.8% | 9.7% | 0.146 |
| 2026-05-15 | AgentBay rich prose | [`agentbay-rich-prose-evalmode-2026-05-15T23-24-56-284Z-b02f895ab357.md`](agentbay-rich-prose-evalmode-2026-05-15T23-24-56-284Z-b02f895ab357.md) | voyage-3-lite | 5.8% | 9.7% | 0.144 | 310.0ms | 5.8% | 9.7% | 0.147 |
| 2026-05-15 | LOCOMO | [`locomo-2026-05-15T12-23-41-171Z-61783239ba55.md`](locomo-2026-05-15T12-23-41-171Z-61783239ba55.md) | voyage-3-lite | 3.8% | 15.7% | 0.146 | 1574.0ms | 3.9% | 15.3% | 0.134 |
| 2026-05-15 | LOCOMO | [`locomo-2026-05-15T18-26-11-918Z-408b35ac1de8.md`](locomo-2026-05-15T18-26-11-918Z-408b35ac1de8.md) | voyage-3-lite | 3.7% | 15.5% | 0.140 | 1563.0ms | 3.6% | 14.8% | 0.127 |
| 2026-05-15 | LOCOMO | [`locomo-evalmode-2026-05-15T23-18-21-442Z-b02f895ab357.md`](locomo-evalmode-2026-05-15T23-18-21-442Z-b02f895ab357.md) | voyage-3-lite | 5.0% | 21.3% | 0.196 | 2235.0ms | 5.1% | 21.1% | 0.185 |
| 2026-05-14 | AgentBay rich prose | [`agentbay-rich-prose-2026-05-14T22-02-14-012Z-61783239ba55.md`](agentbay-rich-prose-2026-05-14T22-02-14-012Z-61783239ba55.md) | voyage-3-lite | 5.8% | 9.7% | 0.137 | 341.0ms | 5.8% | 9.7% | 0.147 |
| 2026-05-14 | LOCOMO | [`locomo-2026-05-14T01-36-14-618Z-19249d7ae828.md`](locomo-2026-05-14T01-36-14-618Z-19249d7ae828.md) | voyage-3-lite | 2.8% | 11.7% | 0.082 | 1576.0ms | 3.4% | 13.7% | 0.103 |
| 2026-05-13 | AgentBay rich prose | [`agentbay-rich-prose-2026-05-13T21-53-21-743Z-bb51103abb3e.md`](agentbay-rich-prose-2026-05-13T21-53-21-743Z-bb51103abb3e.md) | voyage-3-lite | 6.4% | 10.7% | 0.156 | 303.0ms | 5.6% | 9.3% | 0.150 |

## Reproduce Locally

The eval runner currently lives in the private application repository at `agentbay-app/packages/eval-cli/`. Reproduction requires:

- `VOYAGE_API_KEY` for `voyage-3-lite` embeddings.
- A transient Postgres database with pgvector enabled.
- The app repository dependencies installed with `npm ci`.

From the private app repo, the current reproduction commands are:

```bash
npm run eval -- run --corpus agentbay-rich-prose
npm run eval -- run --corpus locomo
```

The runner writes markdown scorecards to `evals/scorecards/`. The public mirror is intentionally one-way: generated scorecards move from private app repo to this public docs directory after review.
