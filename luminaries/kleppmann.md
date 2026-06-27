---
luminary: Martin Kleppmann
sort: Kleppmann
epithet: the guarantees beneath data systems
domains: [data systems, distributed systems, replication, consistency models, stream processing, local-first software]
coinages: [local-first software, turning the database inside out, unbundling the database]
pairs: [Brooker × Kleppmann]
axis-roles:
  - "dynamics × foundations (Brooker × Kleppmann) — holds foundations"
status: anchored
tags: [luminary, person]
---

# Martin Kleppmann — the guarantees beneath data systems

> Every data system is a bundle of tradeoffs, and the job is to know *exactly* which
> guarantees it provides and which it only appears to — because the gap between what
> people assume and what the system delivers is where the corruption and outages live.

## Anchor

- **Axiom** — Reason about a data system from the precise guarantees it actually makes, under named failures — never from the marketing word ("consistent", "available", "ACID"), because the assumed guarantee and the real one diverge exactly where data gets lost.
- **Idioms**
  - *Reliability, scalability, maintainability* — the three concerns every data system is judged on: works despite faults, copes with load, stays workable by humans.
  - *Turning the database inside out* — treat an immutable event log as the source of truth and derive caches, indexes, and views as rebuildable stream projections.
  - *Unbundling the database* — pull the monolith's storage, indexing, replication, and query apart into composable, log-connected pieces.
  - *Local-first software* — software where data lives on the user's device, syncs peer-to-peer, works offline, and outlives any vendor.
  - *Faults vs. failures* — a fault is one component going wrong; a failure is the whole system stopping; reliability means tolerating faults so they don't become failures.
- **Tenets**
  1. "Consistent" and "available" are not guarantees — name the exact model (linearizability, causal, snapshot isolation) or you don't know what you have.
  2. Most production data bugs are an application assuming a guarantee the storage layer never made (cross-shard atomicity, serializability, read-your-writes).
  3. There is no best data system, only tradeoffs — replication topology, partitioning scheme, isolation level — each chosen against a specific workload.
  4. An immutable log is a sounder source of truth than a mutable table; everything else can be a deterministic, rebuildable projection of it.
  5. Centralizing data in the cloud is often habit, not necessity; much of it could live on-device and sync without coordination.

## Orientation

Martin Kleppmann is the author of *Designing Data-Intensive Applications* (2017), the book that became the field's map of how storage, replication, and distribution actually behave — and a researcher at the University of Cambridge working on distributed systems, CRDTs, and local-first software. His signature is precision: where vendors and engineers reach for soft words, he insists on the exact guarantee, the exact failure mode, the exact tradeoff. He is also a builder of the alternative — log-centric "unbundled" architectures and, lately, software that gives users their data back.

## Doctrine — the theory

Kleppmann's worldview begins with suspicion of the words. "Highly available," "consistent," "eventually consistent," "ACID" — each means different things to different vendors, and the slack in the language is where systems quietly betray you. So his method is to replace every reassuring adjective with a precise, disputable claim: not "it's consistent" but "it provides linearizability for single keys and only causal consistency across keys"; not "it's transactional" but "it offers snapshot isolation, which is *not* serializability and will let write skew through." The discipline matters because the dangerous bugs aren't in the storage engine — they're in the application layered on top, assuming a guarantee the layer below never promised. Naming the real guarantee is half the engineering.

Above that sits a framing for judging any system at all: three concerns. Is it *reliable* — does it keep working correctly when components fault, since faults are inevitable and the trick is stopping them from becoming failures? Is it *scalable* — does it have a describable answer for growth in load, not a hope? Is it *maintainable* — can humans operate, understand, and evolve it? Everything beneath — replication (single-leader, multi-leader, leaderless), partitioning, transactions, consistency models, consensus — is a catalog of tradeoffs serving those three, with no universally right pick.

Then the constructive turn. A classic database bundles storage, indexing, replication, caching, and query into one opaque box. Kleppmann's *unbundling* / *turning the database inside out* reframes the system as an immutable log of events as the single source of truth, from which every derived view — a cache, a search index, a materialized aggregate — is computed by a stream processor and is, crucially, *rebuildable*: blow it away and recompute from the log. That same instinct — data as something you own and can reconstruct — drives his work on CRDTs and *local-first software*: data that lives primarily on your devices, merges concurrent edits without a central server, works offline, and survives the company that made the app.

**Why the lens:** it converts vague reassurance about a data system into the precise, disputable guarantees you can actually design against — *what does this guarantee, under which failures, and what is the application wrongly assuming on top of it?*

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Reliability, scalability, maintainability | The three concerns every data system is judged on | *DDIA* (2017) |
| Replication & partitioning | Copying data across nodes (leader/leaderless) and sharding it to scale past one machine | *DDIA* (2017) |
| Consistency models | Precise guarantees about what reads observe — linearizability, causal, read-your-writes | *DDIA* (2017) |
| Transactions & isolation | What "ACID" actually buys; snapshot isolation is not serializability | *DDIA* (2017) |
| Turning the database inside out | Immutable event log as source of truth; views are rebuildable stream projections | *Turning the Database Inside Out* (2015) |
| Local-first software | Data lives on-device, syncs peer-to-peer via CRDTs, works offline, outlives the vendor | *Local-First Software* (2019) |

## The lens

Point this lens at a design or a diff and ask:
- Stop saying "consistent" — which *exact* consistency model does this provide, and under which failures does it stop providing it?
- What is the application assuming the storage layer guarantees that it actually doesn't — cross-shard atomicity, serializability, read-your-writes?
- Where is the source of truth: a mutable table, or an immutable log you could rebuild every derived view from?
- Could this data live on the user's device and sync without a central server, or have you centralized it only out of habit?

## Canon

- *Designing Data-Intensive Applications* (2017) — the book; the map of every tradeoff beneath modern data systems.
- *Turning the Database Inside Out with Apache Samza* (2015) — the unbundling, log-centric argument.
- *Local-First Software: You Own Your Data, in Spite of the Cloud* (2019, Ink & Switch) — the seven ideals; CRDTs for ownership and offline.

## Pairings

- **Brooker × Kleppmann** — *dynamics × foundations* — holds *foundations*. → [`../pairs/brooker-kleppmann.md`](../pairs/brooker-kleppmann.md)
