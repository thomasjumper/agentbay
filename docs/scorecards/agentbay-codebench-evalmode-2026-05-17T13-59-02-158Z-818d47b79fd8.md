# AgentBay Eval Scorecard — agentbay-codebench
Generated: 2026-05-17T13:59:02.158Z
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
| Full hybrid | 74.0% | 25.2% | 16.6% | 61.8% | 79.3% | 0.776 | 100.0% | 288.0ms | 307.0ms |
| Graph disabled | 74.0% | 22.4% | 16.0% | 57.2% | 77.5% | 0.773 | 100.0% | 270.0ms | 319.0ms |
| Vector only | 78.0% | 26.4% | 17.8% | 66.8% | 84.5% | 0.821 | 100.0% | 281.0ms | 467.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | agentbay-codebench | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 25.2% | 61.8% | Reproduced by this scorecard. |
| GBrain | agentbay-codebench |  |  |  | Empty until reproduced locally on the identical corpus and hardware. Track reproduction in [#190](https://github.com/thomasjumper/agentbay-app/issues/190). |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 50.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
