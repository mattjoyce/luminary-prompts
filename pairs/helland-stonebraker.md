---
pair: Helland × Stonebraker
luminaries: [Pat Helland, Michael Stonebraker]
axis: specialization × semantics
subject: a data platform at scale
domains: [databases, data architecture, storage engines, distributed data, immutability, idempotence, consistency]
default: false
tags: [luminary, pair]
---

# Helland × Stonebraker — specialization × semantics

Stereo: the right engine for the workload (Stonebraker) against what the data *means* once it leaves that engine (Helland). At scale a data platform survives only if both are right — each store is fit to its job, and the data stays meaningful as it moves between them.

## Grounding

Design and code through the lenses of Michael Stonebraker and Pat Helland. Stonebraker: one size does not fit all — is this workload served by a purpose-built engine or a general one stretched past its fit? Is it OLTP, analytics, streaming, search — and does the store match? Is the relational rigor (schema, constraints, the cost model) actually being used, or bypassed? Helland: what does each piece of data mean once it leaves home — immutable and versioned (data on the outside) or mutable and transactional (data on the inside)? Is every cross-boundary operation idempotent? Are you reaching for apologies and reconciliation instead of distributed locks? Apply both — the engine fit to the workload, and the data meaningful across every boundary.

## Before — design review

Critique this design through Stonebraker and Helland. Stonebraker: name each workload and the engine serving it — is a single general-purpose database being asked to do OLTP, analytics, and search at once, and what does that cost in throughput, latency, and footguns? Where is the schema and the constraint doing real work, and where has it been thrown away for convenience? Helland: name every boundary the data crosses between those engines. Is data-on-the-outside immutable, versioned, and self-describing, or are you assuming inside-the-transaction semantics across a wire that can't keep them? Which operations must be idempotent, and are they? Where are you taking a distributed lock where an apology would scale?

## After — code audit

Audit this implementation through Stonebraker and Helland. Stonebraker: find the query pattern the chosen engine is bad at — the analytical scan on the row store, the high-write churn on the column store — and the place a specialized store was the right call and wasn't made. Find where a missing index, constraint, or type is being enforced (badly) in application code. Helland: find the operation that isn't idempotent but gets retried anyway. Find mutable state shared across a boundary that should carry only immutable facts. Find the place that assumes one database's transaction held across two systems that never shared one.
