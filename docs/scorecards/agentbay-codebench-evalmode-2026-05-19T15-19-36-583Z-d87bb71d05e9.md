# AgentBay Eval Scorecard — agentbay-codebench
Generated: 2026-05-19T15:19:36.583Z
Commit: d87bb71d05e9c744244b8857653fb6ba5aa00305
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
| Full hybrid | 82.0% | 30.0% | 17.4% | 73.5% | 83.7% | 0.857 | 100.0% | 294.0ms | 324.0ms |
| Graph disabled | 82.0% | 30.0% | 17.4% | 73.5% | 83.7% | 0.857 | 100.0% | 157.0ms | 165.0ms |
| Vector only | 82.0% | 30.0% | 17.0% | 73.5% | 81.7% | 0.861 | 100.0% | 120.0ms | 128.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | agentbay-codebench | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 30.0% | 73.5% | Reproduced by this scorecard. |
| GBrain | agentbay-codebench |  |  |  | Empty until reproduced locally on the identical corpus and hardware. Track reproduction in [#190](https://github.com/thomasjumper/agentbay-app/issues/190). |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 50.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
