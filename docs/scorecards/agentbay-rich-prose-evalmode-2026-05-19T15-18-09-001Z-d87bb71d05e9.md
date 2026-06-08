# AgentBay Eval Scorecard — agentbay-rich-prose
Generated: 2026-05-19T15:18:09.001Z
Commit: d87bb71d05e9c744244b8857653fb6ba5aa00305
Corpus: AgentBay-native rich-prose evaluation corpus with coding-agent memory, project, team, and governance scenarios.
Entries: 200
Queries: 100
Embedding model: voyage-3-lite
Eval mode: yes
Hardware: darwin arm64 | Apple M2 Pro | 16GB RAM
## Results
| Variant | P@1 | P@5 | P@10 | R@5 | R@10 | MRR | Top-1 Stability | p50 Latency | p95 Latency |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Full hybrid | 3.0% | 5.6% | 5.5% | 9.3% | 18.3% | 0.128 | 100.0% | 10.0ms | 307.0ms |
| Graph disabled | 3.0% | 5.6% | 5.5% | 9.3% | 18.3% | 0.129 | 100.0% | 10.0ms | 167.0ms |
| Vector only | 5.0% | 6.0% | 5.1% | 10.0% | 17.0% | 0.147 | 100.0% | 10.0ms | 138.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | agentbay-rich-prose | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 5.6% | 9.3% | Reproduced by this scorecard. |
| GBrain | agentbay-rich-prose |  |  |  | Empty until reproduced locally on the identical corpus and hardware. Track reproduction in [#190](https://github.com/thomasjumper/agentbay-app/issues/190). |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 100.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
