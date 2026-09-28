# AgentBay Eval Scorecard — brainbench
Generated: 2026-05-19T01:08:57.134Z
Commit: d87bb71d05e9c744244b8857653fb6ba5aa00305
Corpus: BrainBench corpus loaded from local, license-confirmed NDJSON files.
Entries: 240
Queries: 145
Embedding model: voyage-3-lite
Eval mode: yes
Hardware: darwin arm64 | Apple M2 Pro | 16GB RAM
## Results
| Variant | P@1 | P@5 | P@10 | R@5 | R@10 | MRR | Top-1 Stability | p50 Latency | p95 Latency |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Full hybrid | 4.8% | 10.9% | 7.7% | 36.8% | 54.5% | 0.207 | 100.0% | 372.0ms | 582.0ms |
| Graph disabled | 4.8% | 9.8% | 7.5% | 32.6% | 52.3% | 0.203 | 100.0% | 369.0ms | 531.0ms |
| Vector only | 6.2% | 10.3% | 8.8% | 37.2% | 60.0% | 0.216 | 100.0% | 355.0ms | 405.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | brainbench | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 10.9% | 36.8% | Reproduced by this scorecard. |
| GBrain | brainbench |  |  |  | Empty until reproduced locally on the identical corpus and hardware. Track reproduction in [#190](https://github.com/thomasjumper/agentbay-app/issues/190). |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 145.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
