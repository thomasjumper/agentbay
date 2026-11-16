# External Benchmark Scorecard — GBrain LongMemEval

Generated: 2026-05-19T01:20:00Z
AgentBay base: `d87bb71d05e9c744244b8857653fb6ba5aa00305`
Corpus: LongMemEval `_s`
Source: https://huggingface.co/datasets/xiaowu0162/longmemeval
Dataset version checked: `longmemeval_s` downloaded 2026-05-19
Dataset size: 500 questions, approximately 50 sessions per haystack
Hardware: darwin arm64 | Apple M2 Pro | 16GB RAM

## Reproduction Status

This reproduction is blocked and should not be cited as a completed scorecard.

The dataset is publicly downloadable, but AgentBay's current eval CLI does not yet have a faithful LongMemEval runner. The existing `longmemeval` command only counts rows and returns `runnable: false`, while `run --corpus ...` imports a single corpus into one project. LongMemEval requires per-question isolation: each question has its own haystack, and importing all sessions into one AgentBay project would contaminate retrieval.

## Methodology Attempted

- Read GBrain's public LongMemEval report and runner docs from `garrytan/gbrain` and `garrytan/gbrain-evals`.
- Downloaded LongMemEval `_s` from Hugging Face successfully.
- Confirmed the faithful AgentBay runner must create or reset an isolated substrate per question, import only that question's haystack, and then run AgentBay full and vector-only against the same imported haystack.

## Results

| System | P@5 | R@5 | R@10 | MRR | p50 | p95 | Status | Delta vs GBrain R@5 | Delta vs vector-only R@5 |
|---|---:|---:|---:|---:|---:|---:|---|---:|---:|
| GBrain full | n/a | 97.6% claimed | n/a | n/a | n/a | n/a | Not rerun on this hardware in a completed run | -- | n/a |
| AgentBay full | n/a | n/a | n/a | n/a | n/a | n/a | Blocked: faithful per-question runner not implemented | n/a | n/a |
| AgentBay vector-only | n/a | n/a | n/a | n/a | n/a | n/a | Blocked: faithful per-question runner not implemented | n/a | -- |

## Interpretation

No competitive claim should be made from this file. The honest finding is that the current AgentBay eval infrastructure is not yet sufficient to reproduce LongMemEval faithfully. Shipping a single-project import would be faster, but it would measure a different task and would violate the brief's transparency discipline.
