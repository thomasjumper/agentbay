# AgentBay Eval Scorecard — agentbay-rich-prose
Generated: 2026-05-16T23:05:42.945Z
Commit: f500a996e506c1e255a4a891836fa2daa34e70f6
Corpus: AgentBay-native rich-prose evaluation corpus with coding-agent memory, project, team, and governance scenarios.
Entries: 200
Queries: 100
Embedding model: voyage-3-lite
Eval mode: yes
Hardware: darwin arm64 | Apple M2 Pro | 16GB RAM
## Results
| Variant | P@1 | P@5 | P@10 | R@5 | R@10 | MRR | Top-1 Stability | p50 Latency | p95 Latency |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Full hybrid | 5.0% | 6.0% | 4.8% | 10.0% | 16.0% | 0.152 | 100.0% | 308.0ms | 347.0ms |
| Graph disabled | 5.0% | 5.6% | 4.9% | 9.3% | 16.3% | 0.141 | 100.0% | 306.0ms | 339.0ms |
| Vector only | 5.0% | 5.8% | 4.7% | 9.7% | 15.7% | 0.142 | 100.0% | 309.0ms | 434.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | agentbay-rich-prose | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 6.0% | 10.0% | Reproduced by this scorecard. |
| GBrain | agentbay-rich-prose |  |  |  | Empty until reproduced locally on the identical corpus and hardware. Track reproduction in [#190](https://github.com/thomasjumper/agentbay-app/issues/190). |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 100.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
