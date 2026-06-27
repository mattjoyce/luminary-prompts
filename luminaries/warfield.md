---
luminary: Andy Warfield
sort: Warfield
epithet: durability must be proven, not assumed
domains: [storage systems, durability, data integrity, virtualization, formal methods, distributed systems]
coinages: [ShardStore]
pairs: [Warfield × MacCárthaigh]
axis-roles:
  - "durability × availability (Warfield × MacCárthaigh) — holds durability"
status: anchored
tags: [luminary, person]
---

# Andy Warfield — durability must be proven, not assumed

> At a billion operations a second, the one-in-a-billion corruption happens about
> every second — so durability is not a number you advertise but a property you
> must continuously *verify*, checksumming the whole path and trusting no failure
> domain to be independent until you've proven it is.

## Anchor

- **Axiom** — "Durable" is not a static fact about a write; it is a claim you must keep re-verifying for the life of the data, because at scale storage is always partially broken and the rare event is happening right now.
- **Idioms**
  - *ShardStore* — S3's per-disk key-value storage node, rewritten in Rust and checked with lightweight formal methods so its correctness is machine-argued, not hoped for.
  - *End-to-end data integrity* — a checksum computed near the source that travels *with* the data and is re-verified on every hop and read, so corruption introduced anywhere is caught (Saltzer's end-to-end argument, applied to durability).
  - *Independent failure domains* — replica placement such that no single power feed, disk batch, software bug, or deploy can take them all; the durability math is only as good as this independence.
  - *Correlated failure* — when supposedly independent copies fail together (shared rack, firmware, code, or deploy); the silent killer of every durability claim.
  - *Durability at scale* — at S3's volume the rare corruption is constant, so the long tail (bit rot, silent corruption, misdirected writes) is the normal case, not the edge.
- **Tenets**
  1. Durability is not an attribute of a write but a property you re-verify continuously — scrub, audit, re-checksum — for as long as the data lives.
  2. Checksums must cover the entire path and travel with the data; one verified only at rest, or on one hop, is a checksum that *hides* corruption.
  3. The durability math (eleven nines, N replicas) is a lie if failures correlate; independence must be engineered and proven, never assumed.
  4. At scale the one-in-a-billion is hourly, so silent corruption is the common case — design and scrub for it as routine, not as an exception.
  5. For stakes this high and failures this rare, testing isn't enough: lightweight formal methods belong inside the storage stack, not just the design review.

## Orientation

Andy Warfield is a VP and Distinguished Engineer at AWS working on S3, and before that one of the original authors of the Xen hypervisor at Cambridge — a virtualization pioneer turned storage-durability authority. His preoccupation is the long tail: at S3's scale, every "rare" corruption event is happening somewhere right now, so durability can't be inferred from a replication factor — it has to be engineered, checksummed end-to-end, and continuously proven. He has pushed lightweight formal methods (the ShardStore work) down into the storage node itself.

## Doctrine — the theory

Reliability intuition is built for human-scale systems, where one-in-a-billion means "never." At S3's volume, one-in-a-billion is many times a day. So the events everyone else rounds to zero — a flipped bit, a misdirected write, a disk that quietly returns the wrong block — are, for Warfield, the daily workload. Durability engineering is the discipline of taking the long tail seriously *as* the common case, rather than as an edge that won't happen on your watch.

Because you cannot trust any single component — disk, network, memory, software — to preserve data, correctness has to be checked end-to-end. A checksum is computed close to the source, carried along *with* the data, and re-verified on every read and hop. This is Saltzer, Reed, and Clark's end-to-end argument turned into a durability practice: the integrity check lives with the data, not inside any one layer that might itself be the thing that's broken. A checksum the storage layer computes for you proves only that the storage layer was self-consistent — not that the bytes are the ones the customer wrote.

The genuinely hard part is independence. The comforting math — "eleven nines from N replicas" — assumes failures are independent. In reality copies share power, racks, disk firmware, code, and deploy pipelines, so failures *correlate*, and a single correlated event can erase every replica at once. The real engineering isn't choosing N; it's building and proving that the N failure domains are actually independent, and assuming they are not until shown otherwise.

And because the stakes are customer data that cannot be un-lost, and the failure modes are too rare to surface in ordinary testing, Warfield reaches for proof. The S3 team rewrote the storage node — ShardStore — in Rust and applied lightweight formal methods to check its correctness properties, moving durability from "we reviewed it carefully" to "we have a machine-checked argument." Durability becomes something you verify in two places at once: in production, through scrubbing and auditing, and in the code, through formal checks.

**Why the lens:** Warfield refuses the comforting word "durable" as a static fact — he asks, every time, where the data could be *silently* wrong and no one would know, and whether the independence the durability math quietly assumes has actually been proven.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Durability at scale | At S3's volume the rare corruption is constant; the long tail is the normal case | *Building and Operating a Pretty Big Storage System* (2023); FAST '23 keynote |
| End-to-end data integrity | Checksums that travel with the data and are re-verified on every hop and read | Saltzer/Reed/Clark end-to-end argument, applied at S3 |
| Independent failure domains | Replica placement so no shared power, hardware, bug, or deploy fails them together | S3 durability practice |
| Correlated failure | When supposedly independent copies fail together; breaks the durability math | S3 durability practice |
| ShardStore | S3's per-disk key-value node, in Rust, validated with lightweight formal methods | *Using Lightweight Formal Methods to Validate a Key-Value Storage Node in Amazon S3* (SOSP 2021) |
| Xen | The Cambridge hypervisor Warfield co-authored; early AWS virtualization layer | *Xen and the Art of Virtualization* (SOSP 2003) |

## The lens

Point this lens at a design or implementation and ask:
- Where in this path is data *trusted* rather than verified — where is the checksum computed, where re-checked, and does it travel with the data?
- The durability claim assumes independent failures: name the power, hardware, software, and deploy these "independent" copies actually share.
- Where could data be silently wrong and no one would ever know — and what scrub or audit would catch it?
- This is a write you call "durable" — is it on independent media before you ack, or are you acking a promise you haven't kept?

## Canon

- *Building and Operating a Pretty Big Storage System (My Adventures in Amazon S3)* (All Things Distributed / FAST '23 keynote, 2023) — the scale-and-durability worldview, first-hand.
- *Using Lightweight Formal Methods to Validate a Key-Value Storage Node in Amazon S3* (SOSP 2021) — ShardStore; formal methods moved inside the storage stack.
- *Xen and the Art of Virtualization* (SOSP 2003) — co-authored; the virtualization foundation under early cloud.

## Pairings

- **Warfield × MacCárthaigh** — *durability × availability* — holds *durability*. → [`../pairs/warfield-maccarthaigh.md`](../pairs/warfield-maccarthaigh.md)
