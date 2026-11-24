# External Benchmark Scorecard — Mem0 LongMemEval

Generated: 2026-05-19T01:20:00Z
AgentBay base: `d87bb71d05e9c744244b8857653fb6ba5aa00305`
Corpus: LongMemEval cleaned `_s`
Source: https://github.com/mem0ai/memory-benchmarks
Framework version checked: `mem0ai/memory-benchmarks@4b61c5d31b9c668a12b4f5e78064248a02c82d2b`
Dataset size: 500 questions
Hardware: darwin arm64 | Apple M2 Pro | 16GB RAM

## Reproduction Status

This reproduction is blocked and should not be cited as a completed scorecard.

Mem0's open benchmark framework is available and includes result files, but its LongMemEval headline is an answer/judge pass-rate benchmark at top-50/top-200, not the P@5/R@5/R@10/MRR retrieval scorecard requested here. The framework's default `top-k` is 200 and default cutoffs are 10, 20, 50, and 200. Publishing those rows beside GBrain's R@5 and AgentBay's P@5/R@5 would be metric-mismatched.

## Methodology Attempted

- Read `mem0ai/mem0` README benchmark claims.
- Read `mem0ai/memory-benchmarks` README and `benchmarks/longmemeval/run.py`.
- Confirmed the public framework supports Mem0 Cloud and OSS, and reports LongMemEval pass rate after search plus answer/judge evaluation.
- Confirmed AgentBay still needs the same faithful per-question LongMemEval substrate described in the GBrain LongMemEval blocked scorecard before an AgentBay row can be produced.

## Results

| System | P@5 | R@5 | R@10 | MRR | p50 | p95 | Status | Delta vs Mem0 | Delta vs vector-only |
|---|---:|---:|---:|---:|---:|---:|---|---:|---:|
| Mem0 full | n/a | n/a | n/a | n/a | n/a | n/a | Blocked: public framework headline is QA/judge pass rate, not retrieval P/R/MRR | n/a | n/a |
| AgentBay full | n/a | n/a | n/a | n/a | n/a | n/a | Blocked: faithful per-question runner not implemented | n/a | n/a |
| AgentBay vector-only | n/a | n/a | n/a | n/a | n/a | n/a | Blocked: faithful per-question runner not implemented | n/a | -- |

## Interpretation

No competitive retrieval claim should be made from this file. Mem0 may be strong on LongMemEval, but this run did not produce the requested retrieval metrics on shared hardware. The next engineering step is to add a LongMemEval runner that can report retrieval metrics directly from retrieved memory IDs before invoking any answerer or judge model.
