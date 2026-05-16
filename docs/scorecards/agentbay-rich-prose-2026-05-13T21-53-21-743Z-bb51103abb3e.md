# AgentBay Eval Scorecard — agentbay-rich-prose
Generated: 2026-05-13T21:53:21.743Z
Commit: bb51103abb3ef8507170f2d96d3a63b242778d44
Corpus: AgentBay-native rich-prose evaluation corpus with coding-agent memory, project, team, and governance scenarios.
Entries: 200
Queries: 100
Embedding model: voyage-3-lite
Hardware: darwin arm64 | Apple M2 Pro | 16GB RAM
## Results
| Variant | P@1 | P@5 | P@10 | R@5 | R@10 | MRR | Top-1 Stability | p50 Latency | p95 Latency |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Full hybrid | 5.0% | 6.4% | 5.9% | 10.7% | 19.7% | 0.156 | 100.0% | 303.0ms | 444.0ms |
| Graph disabled | 4.0% | 6.4% | 5.7% | 10.7% | 19.0% | 0.145 | 100.0% | 302.0ms | 398.0ms |
| Vector only | 6.0% | 5.6% | 4.9% | 9.3% | 16.3% | 0.150 | 100.0% | 305.0ms | 408.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | agentbay-rich-prose | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 6.4% | 10.7% | Reproduced by this scorecard. |
| GBrain | agentbay-rich-prose |  |  |  | Empty until reproduced locally on the identical corpus and hardware. |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 100.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
