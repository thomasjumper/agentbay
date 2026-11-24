# AgentBay Eval Scorecard — agentbay-rich-prose
Generated: 2026-06-12T21:39:46.980Z
Commit: 83356c612c218566fc72d8673d44de3e354dc8cb
Corpus: AgentBay-native rich-prose evaluation corpus with coding-agent memory, project, team, and governance scenarios.
Entries: 200
Queries: 100
Embedding model: voyage-3-lite
Eval mode: yes
Hardware: darwin arm64 | Apple M2 Pro | 16GB RAM
## Results
| Variant | P@1 | P@5 | P@10 | R@5 | R@10 | MRR | Top-1 Stability | p50 Latency | p95 Latency |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Full hybrid | 4.0% | 5.4% | 5.6% | 9.0% | 18.7% | 0.132 | 100.0% | 7.0ms | 212.0ms |
| Graph disabled | 4.0% | 5.6% | 5.1% | 9.3% | 17.0% | 0.129 | 100.0% | 7.0ms | 23.0ms |
| Vector only | 7.0% | 6.2% | 5.0% | 10.3% | 16.7% | 0.161 | 100.0% | 7.0ms | 20.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | agentbay-rich-prose | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 5.4% | 9.0% | Reproduced by this scorecard. |
| GBrain | agentbay-rich-prose |  |  |  | Empty until reproduced locally on the identical corpus and hardware. Track reproduction in [#190](https://github.com/thomasjumper/agentbay-app/issues/190). |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 100.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
