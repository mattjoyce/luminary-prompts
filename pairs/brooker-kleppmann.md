---
pair: Brooker × Kleppmann
luminaries: [Marc Brooker, Martin Kleppmann]
axis: dynamics × foundations
subject: a data-intensive system
domains: [distributed systems, data systems, consistency, replication, partitioning, reliability, scalability, metastability]
default: false
tags: [luminary, pair]
---

# Brooker × Kleppmann — dynamics × foundations

Stereo: how the system *behaves* under load and partial failure (Brooker) against what guarantees the data layer beneath it *actually* provides (Kleppmann). A data-intensive system survives only if the dynamics stay stable and the foundations are the ones you think you're standing on.

## Grounding

Design and code through the lenses of Marc Brooker and Martin Kleppmann. Brooker: where are the queues, timeouts, retries, and backoff — and is there a metastable failure mode the system can fall into and not climb out of? Is load shed, capped, or jittered? Can the key invariant be proven by formal model or simulation, not just argued? Kleppmann: what consistency model does this data layer *actually* provide — and is it the one the application assumes? How does replication behave under partition; how is data partitioned and what happens at the boundaries; where does a "transaction" stop being one? Apply both — the behaviour under stress and the guarantees underneath.

## Before — design review

Critique this design through Brooker and Kleppmann. Brooker: trace one request through retries and timeouts — does load amplify under failure (retry storms, queue collapse, metastability)? What stable-but-bad state exists, and what pulls the system out? Where does the control plane share fate with the data plane? Kleppmann: name the consistency guarantee at each store — linearizable, causal, eventual — and find the place the application silently assumes a stronger one. What happens to reads during failover, to writes during partition, to ordering across partitions? Is the "transaction" actually atomic across everything it spans?

## After — code audit

Audit this implementation through Brooker and Kleppmann. Brooker: find every external call and its timeout, retry policy, and backoff-with-jitter — then find the one that retries unbounded. Find the unbounded queue and the health check that flaps the fleet. Kleppmann: find the read that assumes read-your-writes across a replica that can't promise it. Find the cross-partition operation treated as atomic. Find the place last-write-wins is silently discarding data, and the eventual-consistency window the code never accounts for.
