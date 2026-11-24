# AgentBay Eval Scorecard — agentbay-codebench
Generated: 2026-05-17T13:45:17.344Z
Commit: b36b121fa879d16c20636f852083ae28961ac9fd
Corpus: AgentBay-native codebench v0 corpus built from the AgentBay project Knowledge export.
Source: https://www.aiagentsbay.com/api/v1/projects/cmmo13ysi000604l235syml4g/knowledge/export
Entries: 150
Queries: 50
Embedding model: voyage-3-lite
Eval mode: yes
Hardware: darwin arm64 | Apple M2 Pro | 16GB RAM
## Results
| Variant | P@1 | P@5 | P@10 | R@5 | R@10 | MRR | Top-1 Stability | p50 Latency | p95 Latency |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Full hybrid | 72.0% | 25.6% | 16.2% | 62.8% | 76.8% | 0.758 | 100.0% | 290.0ms | 308.0ms |
| Graph disabled | 72.0% | 22.8% | 16.0% | 58.2% | 77.5% | 0.771 | 100.0% | 269.0ms | 301.0ms |
| Vector only | 78.0% | 26.8% | 18.0% | 67.5% | 85.5% | 0.821 | 100.0% | 271.0ms | 320.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | agentbay-codebench | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 25.6% | 62.8% | Reproduced by this scorecard. |
| GBrain | agentbay-codebench |  |  |  | Empty until reproduced locally on the identical corpus and hardware. Track reproduction in [#190](https://github.com/thomasjumper/agentbay-app/issues/190). |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 50.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
