# AgentBay Eval Scorecard — agentbay-rich-prose
Generated: 2026-05-15T23:24:56.284Z
Commit: b02f895ab3572cfbfa2b81bd528daa9b35d2634e
Corpus: AgentBay-native rich-prose evaluation corpus with coding-agent memory, project, team, and governance scenarios.
Entries: 200
Queries: 100
Embedding model: voyage-3-lite
Eval mode: yes
Hardware: darwin arm64 | Apple M2 Pro | 16GB RAM
## Results
| Variant | P@1 | P@5 | P@10 | R@5 | R@10 | MRR | Top-1 Stability | p50 Latency | p95 Latency |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Full hybrid | 6.0% | 5.8% | 4.8% | 9.7% | 16.0% | 0.144 | 100.0% | 310.0ms | 387.0ms |
| Graph disabled | 6.0% | 5.8% | 4.7% | 9.7% | 15.7% | 0.142 | 100.0% | 306.0ms | 329.0ms |
| Vector only | 6.0% | 5.8% | 4.7% | 9.7% | 15.7% | 0.147 | 100.0% | 306.0ms | 406.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | agentbay-rich-prose | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 5.8% | 9.7% | Reproduced by this scorecard. |
| GBrain | agentbay-rich-prose |  |  |  | Empty until reproduced locally on the identical corpus and hardware. Track reproduction in [#190](https://github.com/thomasjumper/agentbay-app/issues/190). |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 100.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
