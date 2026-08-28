---
pair: Codd × Acton
luminaries: [Edgar F. Codd, Mike Acton]
axis: logical × physical
subject: how the data is stored and read
domains: [data modeling, storage layout, schema design, normalization, performance, memory hierarchy, query interfaces]
default: false
tags: [luminary, pair]
---

# Codd × Acton — logical × physical

Stereo: a caller may depend on nothing but meaning (Codd) against the machine only ever moves bytes, and the layout decides the cost (Acton). Codd's achievement was that applications stopped knowing how data is stored; Acton's argument is that if you don't know how the data is stored you cannot reason about what anything costs. The resolution isn't a compromise, it's a location — independence at the interface, ruthless physical awareness beneath it, and somebody accountable for the distance between the two.

## Grounding

Design and code through the lenses of Edgar F. Codd and Mike Acton. Codd: what may a consumer of this data legitimately depend on? Only the meaning — never the ordering, the index, the access path, or the engine you happen to be running this quarter. Is each fact stored in exactly one place, with every non-key attribute depending on the whole key, or is redundancy quietly generating insert, update, and delete anomalies? Do callers say what they want, or must they know how to fetch it? Acton: the purpose of the program is to transform data, and if you don't understand the data you don't understand the problem. What is the real volume, the real distribution, the real access pattern? Which fields does the hot loop touch, and are they adjacent in memory? Where there's one, there's many — what does this cost at a million? Apply both — export meaning and hide mechanism, but never let the abstraction hide the numbers that decide whether the design works.

## Before — design review

Critique this design through Codd and Acton. Codd: write down what the interface promises and confirm none of it is an artifact of storage — no ordering guarantee nobody meant to make, no id encoding a partition, no field only the current writer populates. Normalize: name the fact that appears twice, and name the insert, update, and delete anomaly each duplication creates. Check that every non-key attribute depends on the whole key and nothing else; if not, there are two relations here under one name. Acton: state the actual data before accepting the model — how many rows, how large, arriving how fast, read by which operations in what proportion. Which access pattern dominates, and does the proposed layout serve it or serve the entity diagram? What does the common operation cost on the hardware it will run on, and if nobody can say, on what basis is this design good? Then the joint question: which denormalizations, caches, or column layouts will this eventually need, and can they be added later without changing what callers depend on? If not, the boundary is in the wrong place.

## After — code audit

Audit this implementation through Codd and Acton. Codd: find the consumer depending on something never promised — insertion order, a monotonic id, an index's existence, a physical file name. Find the same fact written in two places, the code that keeps them in sync, and the path where it doesn't. Find the query that says *how* instead of *what*. Acton: find the loop that reads two fields of a forty-field record and pays for all forty on every cache line. Find the per-item overhead — the pointer chase, the virtual call, the allocation, the padding — that was fine for one and is the entire cost at scale. Find the operation whose cost nobody has measured against real data. Then ask both together: where did a physical optimization leak into the logical contract, and where did the logical model make a necessary optimization impossible? Both are failures, and they usually turn up within a few files of each other.
