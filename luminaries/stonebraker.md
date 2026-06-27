---
luminary: Michael Stonebraker
sort: Stonebraker
lived: b. 1943
epithet: one size does not fit all
domains: [database systems, storage engines, query processing, transaction processing, analytics, data integration]
coinages: [Ingres, Postgres, "one size fits all", C-Store, H-Store]
pairs: [Helland × Stonebraker]
axis-roles:
  - "specialization × semantics (Helland × Stonebraker) — holds specialization"
status: anchored
tags: [luminary, person]
---

# Michael Stonebraker — one size does not fit all

> The general-purpose database is a jack of all trades and master of none; for any
> serious workload a purpose-built engine — measured, not assumed — will beat it by
> an order of magnitude, and engineering, not hype, is what proves which one wins.

## Anchor

- **Axiom** — There is no universal DBMS; the right specialized engine, architected to a workload's actual access pattern, beats one general engine by 10–100×, and the claim is settled by measurement, not marketing.
- **Idioms**
  - *One size fits all (refuted)* — the traditional row-store RDBMS sold as universal is beaten badly on every specialized workload; the idea's "time has come and gone."
  - *Column store (C-Store)* — store data by column so analytic scans read only the columns they touch and compress aggressively; built as C-Store, commercialized as Vertica.
  - *Main-memory OLTP (H-Store)* — drop the disk-era architecture entirely for transactions that fit in RAM; built as H-Store, commercialized as VoltDB.
  - *The four overheads* — in a classic OLTP engine, logging, locking, latching, and buffer management dwarf the useful work; remove them for 10–50×.
  - *Object-relational* — extend the relational model with user-defined types and functions rather than abandoning it; the Postgres contribution.
- **Tenets**
  1. Workload access patterns differ so radically (small concurrent writes vs. big scans vs. streams vs. arrays) that no single storage/execution architecture can serve them all well.
  2. A specialized engine's advantage must be measured against the general one, not asserted; the right answer is a portfolio of purpose-built engines, not one box.
  3. Discarding the relational model's hard-won lessons — declarative queries, a real optimizer, ACID where it counts — in the name of novelty means reinventing them later, badly.
  4. NoSQL and MapReduce hype mostly re-learned 25 years of database lessons the slow way; new is not the same as better.

## Orientation

Michael Stonebraker (b. 1943) built the systems modern databases descend from: **Ingres** and **Postgres** at Berkeley, then C-Store, H-Store, and SciDB at MIT. He won the 2014 Turing Award "for fundamental contributions to the concepts and practices underlying modern database systems." His enduring argument is a refusal: the industry's instinct to run everything through one general-purpose RDBMS is wrong, and he spent a career building the specialized engines that prove it. He is also database systems' sharpest hype critic — relational rigor in one hand, a measured benchmark in the other.

## Doctrine — the theory

Start from the workload, not the database. OLTP is many tiny concurrent writes needing low latency; analytics is enormous scans and aggregations; streaming is unbounded continuous queries; science is dense arrays. These access patterns are so different that the architecture that serves one well is structurally wrong for another. A row store stores whole tuples together — perfect for "fetch and update one record," catastrophic for "scan one column of a billion rows." So Stonebraker's move is never "tune the database"; it is "what shape is this workload, and what engine is built to that shape?" Column stores (C-Store/Vertica) crush row stores on analytics by reading only the touched columns; main-memory engines (H-Store/VoltDB) crush disk-oriented OLTP by deleting the disk-era machinery altogether.

That deletion is the empirical heart of it. *OLTP Through the Looking Glass* dissected where the cycles actually go in a transactional engine and found the real work was a sliver — the rest was logging, locking, latching, and buffer management, all artifacts of an architecture designed for 1970s disks. Strip those four overheads and throughput jumps by an order of magnitude. The lesson generalizes: most "database performance" is overhead inherited from assumptions that no longer hold, and the way to find it is to measure, not to theorize.

But specialization is not nihilism. Stonebraker is scathing about NoSQL and MapReduce precisely because they threw away the relational model's earned wisdom — schemas, declarative queries, the query optimizer, transactional guarantees — and then re-derived crude versions under new names. His critique is conservative in the best sense: build the new engine the workload demands, but keep the rigor; do not mistake abandoning the optimizer for innovation.

**Why the lens:** it forces the question every default ducks — *what is this workload actually doing, what engine is shaped for that, and have you measured the gap or just reached for the database you already had?*

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| One size does not fit all | No single DBMS architecture serves all workloads; specialized engines beat general ones | *One Size Fits All* (2005) |
| Column store (C-Store) | Store data by column so analytic scans read only needed columns and compress well | *C-Store* (2005) → Vertica |
| Main-memory OLTP (H-Store) | Remove disk-era overhead for transactions that fit in RAM, for 10–50× throughput | *End of an Architectural Era* (2007) → VoltDB |
| The four overheads | Logging, locking, latching, and buffer management dominate OLTP cycles over useful work | *OLTP Through the Looking Glass* (2008) |
| Object-relational | Extend, don't abandon, the relational model with user-defined types and functions | Postgres (1986–) |

## The lens

Point this lens at a design or a diff and ask:
- What is this workload's real access pattern — small concurrent writes, big scans, streams, arrays — and is the engine architected for that, or just the database you happened to already run?
- How many times faster would a purpose-built engine be, and have you *measured* it, or assumed the general one is "good enough"?
- What hard-won lesson — declarative queries, a real optimizer, ACID where it counts — is being thrown away here in the name of novelty, and will you reinvent it badly later?
- Where are OLTP and analytics sharing one engine, paying a row-store tax on every scan?

## Canon

- *One Size Fits All: An Idea Whose Time Has Come and Gone* (2005, with Çetintemel) — the doctrine in a single paper.
- *C-Store: A Column-oriented DBMS* (2005) — column storage for analytics; became Vertica.
- *The End of an Architectural Era (It's Time for a Complete Rewrite)* (2007) — the case for specialized engines; H-Store/VoltDB.
- *OLTP Through the Looking Glass, and What We Found There* (2008) — where the OLTP cycles actually go.
- *MapReduce: A Major Step Backwards* (2008, with DeWitt) — the critique of re-learning database lessons badly.

## Pairings

- **Helland × Stonebraker** — *specialization × semantics* — holds *specialization*. → [`../pairs/helland-stonebraker.md`](../pairs/helland-stonebraker.md)
