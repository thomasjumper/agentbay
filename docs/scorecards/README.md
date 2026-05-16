# AgentBay Retrieval Scorecards

GBrain is one user, one brain. AgentBay is teams, projects, governance.

AgentBay publishes retrieval scorecards as diagnostic evidence, not as trophy numbers. The goal is to make the memory engine inspectable: what corpus was used, what retrieval variant ran, what embedding model produced vectors, and where full hybrid retrieval beats or loses to ablations.

The scorecards in this directory are public mirrors of scorecard markdown generated in the private `agentbay-app` repository. Only public-safe markdown crosses that boundary. Application source, environment files, billing/auth code, Vercel metadata, and private operational docs do not belong in this repository.

Each run ingests corpus entries through the same AgentBay `store()` path used by agents, then queries through the same `recall()` path. That keeps the reported numbers tied to the shipped memory behavior instead of a benchmark-only implementation. Every scorecard includes the commit, corpus, entry count, query count, embedding model, hardware, full results table, and notes about vector participation.

The current corpora cover two different kinds of memory stress. LOCOMO is a public long-context conversational memory corpus converted into evidence-backed recall queries. The AgentBay rich-prose corpus is smaller and native to this product: coding-agent memory, teams, projects, governance, onboarding, and eval scenarios written as longer natural-language facts.

Every scorecard includes three retrieval variants. Full hybrid uses AgentBay's combined retrieval stack. Graph disabled removes graph traversal from the mix. Vector only isolates dense retrieval. The comparison matters because a real memory OS cannot hide behind one strategy; the system needs lexical, tag, alias, vector, and graph retrieval to cooperate without suppressing strong evidence.

The metrics are standard retrieval diagnostics: precision at 1/5/10, recall at 5/10, MRR, top-1 stability, and p50/p95 recall latency. Scorecards require `voyage-3-lite` embeddings and are expected to run against an isolated transient Postgres database. Rows are intentionally published even when uncomfortable, because that is how regression targets stay honest.

Competitor rows stay empty until reproduced on the same corpus, hardware, and methodology. No GBrain benchmark number is copied into these scorecards unless AgentBay reproduces it under matching conditions.

## Headline Table

The table below is generated from the committed scorecard markdown files and sorted newest first. In GitHub, use browser find or copy the table into a spreadsheet to sort by metric.

| Date | Corpus | Scorecard | Embedding model | Full hybrid P@5 | Full hybrid R@5 | Full hybrid MRR | Full hybrid p50 | Vector-only P@5 | Vector-only R@5 | Vector-only MRR |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-05-15 | LOCOMO | [`locomo-2026-05-15T12-23-41-171Z-61783239ba55.md`](locomo-2026-05-15T12-23-41-171Z-61783239ba55.md) | voyage-3-lite | 3.8% | 15.7% | 0.146 | 1574.0ms | 3.9% | 15.3% | 0.134 |
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
