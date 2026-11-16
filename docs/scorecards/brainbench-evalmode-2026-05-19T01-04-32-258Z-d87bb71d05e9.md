# AgentBay Eval Scorecard — brainbench
Generated: 2026-05-19T01:04:32.258Z
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
| Full hybrid | 5.5% | 9.9% | 7.5% | 33.3% | 52.6% | 0.208 | 98.9% | 378.0ms | 422.0ms |
| Graph disabled | 4.1% | 9.7% | 7.5% | 32.3% | 52.6% | 0.199 | 99.3% | 365.0ms | 458.0ms |
| Vector only | 5.5% | 10.9% | 9.0% | 40.3% | 62.5% | 0.230 | 100.0% | 373.0ms | 455.0ms |

## Comparison

| System | Corpus | Hardware | P@5 | R@5 | Notes |
|---|---|---|---:|---:|---|
| AgentBay full hybrid | brainbench | darwin arm64 \| Apple M2 Pro \| 16GB RAM | 9.9% | 33.3% | Reproduced by this scorecard. |
| GBrain | brainbench |  |  |  | Empty until reproduced locally on the identical corpus and hardware. Track reproduction in [#190](https://github.com/thomasjumper/agentbay-app/issues/190). |

## Notes

- The eval runner uses AgentBay `store()` for ingestion and `recall()` for retrieval.
- `recall()` writes `RecallEvent` rows during the run; corpus-level P/R/MRR are computed by the eval metrics library.
- Vector required: yes. Full-hybrid vector-hit count: 145.
- BrainBench is intentionally not vendored until the corpus license is confirmed in writing.
