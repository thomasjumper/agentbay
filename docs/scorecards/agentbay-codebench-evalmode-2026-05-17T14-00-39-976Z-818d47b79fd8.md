# AgentBay Eval Scorecard — agentbay-codebench
Generated: 2026-05-17T14:00:39.976Z
Commit: 818d47b79fd88c5ea52b7c59484086fe2717f2f1
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
| Full hybrid | 72.0% | 24.8% | 16.4% | 60.8% | 77.3% | 0.765 | 100.0% | 281.0ms | 297.0ms |
| Graph disabled | 74.0% | 22.8% | 16.0% | 57.8% | 77.5% | 0.780 | 100.0% | 269.0ms | 290.0ms |
| Vector only | 78.0% | 26.8% | 17.8% | 67.5% | 84.5% | 0.822 | 100.0% | 267.0ms | 296.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | agentbay-codebench | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 24.8% | 60.8% | Reproduced by this scorecard. |
| GBrain | agentbay-codebench |  |  |  | Empty until reproduced locally on the identical corpus and hardware. Track reproduction in [#190](https://github.com/thomasjumper/agentbay-app/issues/190). |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 50.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
