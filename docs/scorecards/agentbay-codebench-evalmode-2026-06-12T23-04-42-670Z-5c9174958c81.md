# AgentBay Eval Scorecard — agentbay-codebench
Generated: 2026-06-12T23:04:42.670Z
Commit: 5c9174958c81ed8281fe3756b71a6b5e8f7016b7
Corpus: AgentBay-native codebench v0 corpus built from the AgentBay project Knowledge export.
Source: https://www.aiagentsbay.com/api/v1/projects/cmmo13ysi000604l235syml4g/knowledge/export
Entries: 150
Queries: 50
Embedding model: voyage-3-lite
Eval mode: yes
Hardware: darwin arm64 | Apple M2 Pro | 16GB RAM
## Results
| Variant | P@1 | P@5 | P@10 | R@5 | R@10 | MRR | Top-1 Stability | p50 Latency | p95 Latency | mean rerankMs |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Full hybrid (rerank off) | 82.0% | 30.0% | 17.0% | 73.5% | 82.0% | 0.857 | 100.0% | 193.0ms | 246.0ms | 0.0ms |
| Full hybrid + rerank-2 | 82.0% | 30.4% | 17.8% | 74.5% | 85.3% | 0.857 | 100.0% | 269.0ms | 343.0ms | 246.7ms |

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
