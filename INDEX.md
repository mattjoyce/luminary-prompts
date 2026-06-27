---
title: Luminary Index
type: index
tags: [luminary, moc, map-of-content, index]
default: false
---

# 🔭 Luminary Index

A map of the **pairs** (each a stereo lens holding two thinkers in tension on one axis) and the
**luminaries** (the per-person anchor files in [`luminaries/`](luminaries/) that ground each lens in
curated text rather than model recall).

This file is also the **routing table** for pair selection. The selection skill does not pick *by
person* — person is the *output*. It classifies three things and looks the pair up here:

| Dimension | What it is | What it selects |
|---|---|---|
| **Subject** | your topic / domain | *which pair* — match against `Subject` + `Domains` below |
| **Stage** | planning vs reviewing | *which pass* — **Before — design review** vs **After — code audit** |
| **Intent** | your relation to the knowledge (Diátaxis) | *which slice of the anchor to load* |

Intent maps 1:1 onto the four reader-needs every luminary file serves — so the skill loads exactly the
slice you need: **understand** → Doctrine; **review/do** → Anchor + The lens + the matching pass;
**look up** → Concepts + Canon; **learn** → Orientation + Doctrine + The lens.

> [!tip] How to read a pair
> Every pair is `A × B — axis` over a *subject*. `A` asks one question, `B` asks the opposing one.
> The value is the tension, not either pole alone. `Hickey × Armstrong` is the `default`.

---

## 🧩 Framing & systems thinking — *the shape of the problem*

- [Cabrera × Bateson](pairs/cabrera-bateson.md) — **operationalised × ecological** · draw the distinctions, then ask whether they're real
- [Cabrera × Meadows](pairs/cabrera-meadows.md) — **anatomy × behaviour** · the structure you drew vs. how it behaves over time

## 🧠 The work & the process — *how we approach it*

- [Brooks × Beck](pairs/brooks-beck.md) — **triage × step** · is the problem real, and is the next move small?

## 🏗️ Structure, boundaries & the domain — *the thing at rest*

- [Hickey × Armstrong](pairs/hickey-armstrong.md) — **structure × runtime** · what's complected vs. what crashes and who supervises · `default`
- [Ousterhout × Liskov](pairs/ousterhout-liskov.md) — **surface × substitution** · deep vs. shallow boundaries, and the contract they keep
- [Hickey × Evans](pairs/hickey-evans.md) — **simplicity × domain** · strip the incidental vs. model the essential domain faithfully
- [Lamport × Thomas/Hunt](pairs/lamport-pragmatic.md) — **system × self** · the artifact knows what it does, and so do you

## 👤 Medium & interface — *computing for a person*

- [Kay × Victor](pairs/kay-victor.md) — **vision × experience** · computing as a medium of thought, seen and touched directly

## 📊 Display & inquiry — *reading a running system*

- [Tufte × Majors](pairs/tufte-majors.md) — **display × inquiry** · the glance you read vs. the question you didn't pre-plan

## ⚡ Scale, distribution & data — *under load and across boundaries*

- [Brooker × Helland](pairs/brooker-helland.md) — **dynamics × data** · how it behaves under load vs. what the data means across every boundary
- [Brooker × Kleppmann](pairs/brooker-kleppmann.md) — **dynamics × foundations** · behaviour under stress vs. the guarantees the data layer actually provides
- [Helland × Stonebraker](pairs/helland-stonebraker.md) — **specialization × semantics** · the right engine for the workload vs. what the data means when it leaves it
- [Warfield × MacCárthaigh](pairs/warfield-maccarthaigh.md) — **durability × availability** · will the data still be correct vs. will the service keep serving

## 📚 Documentation & adoption — *carrying and inheriting knowledge*

- [Naur × Procida](pairs/naur-procida.md) — **theory × need** · the living theory the doc carries vs. the reader's need on arrival
- [Thompson × Feathers](pairs/thompson-feathers.md) — **trust × comprehension** · should you trust it vs. can you comprehend it

## 🔐 Privacy & data ethics — *handling personal data* *(new domain)*

- [Nissenbaum × Solove](pairs/nissenbaum-solove.md) — **context × taxonomy** · is this flow appropriate to its context vs. exactly which privacy harm it creates

## 🛟 Safety & correctness — *a system that must not do harm* *(new domain)*

- [Leveson × Hoare](pairs/leveson-hoare.md) — **safety × correctness** · is the whole system safe vs. is each part proven correct

---

## 📇 All pairs at a glance — *the routing table*

| Pair | Axis | Subject | Domains | Default |
|---|---|---|---|---|
| [Cabrera × Bateson](pairs/cabrera-bateson.md) | operationalised × ecological | a framing of the problem | systems thinking, DSRP, framing, epistemology, mental models, critique | |
| [Cabrera × Meadows](pairs/cabrera-meadows.md) | anatomy × behaviour | a system that has to run over time | systems thinking, DSRP, system dynamics, stocks and flows, feedback loops, leverage points | |
| [Brooks × Beck](pairs/brooks-beck.md) | triage × step | how we approach the work | complexity triage, incremental delivery, scope, planning | |
| [Hickey × Armstrong](pairs/hickey-armstrong.md) | structure × runtime | a running software system | system design, fault tolerance, simplicity, state, concurrency | ✅ |
| [Ousterhout × Liskov](pairs/ousterhout-liskov.md) | surface × substitution | the module boundary | interface design, abstraction, contracts, modularity | |
| [Hickey × Evans](pairs/hickey-evans.md) | simplicity × domain | a domain model in code | domain modeling, simplicity, software design, abstraction, ubiquitous language, bounded contexts, state | |
| [Lamport × Thomas/Hunt](pairs/lamport-pragmatic.md) | system × self | knowing what the artifact does and why | formal specification, state machines, invariants, debugging, craftsmanship | |
| [Kay × Victor](pairs/kay-victor.md) | vision × experience | computing as a medium for the user | HCI, interaction design, direct manipulation, computing as medium, feedback | |
| [Tufte × Majors](pairs/tufte-majors.md) | display × inquiry | an observability console | dashboards, observability, data viz | |
| [Brooker × Helland](pairs/brooker-helland.md) | dynamics × data | a distributed system at scale | distributed systems, scalability, fault tolerance, consistency, idempotence, control planes, queueing, metastability | |
| [Brooker × Kleppmann](pairs/brooker-kleppmann.md) | dynamics × foundations | a data-intensive system | distributed systems, data systems, consistency, replication, partitioning, reliability, scalability, metastability | |
| [Helland × Stonebraker](pairs/helland-stonebraker.md) | specialization × semantics | a data platform at scale | databases, data architecture, storage engines, distributed data, immutability, idempotence, consistency | |
| [Warfield × MacCárthaigh](pairs/warfield-maccarthaigh.md) | durability × availability | a foundational service at AWS scale | durability, data integrity, static stability, blast radius, correlated failure | |
| [Naur × Procida](pairs/naur-procida.md) | theory × need | documentation | documentation, technical writing, program theory, knowledge transfer | |
| [Thompson × Feathers](pairs/thompson-feathers.md) | trust × comprehension | an unfamiliar repository | adoption, security, legacy code, seams | |
| [Nissenbaum × Solove](pairs/nissenbaum-solove.md) | context × taxonomy | a system that handles personal data | privacy, data governance, information flow, surveillance, data ethics, compliance | |
| [Leveson × Hoare](pairs/leveson-hoare.md) | safety × correctness | a system that must not do harm | safety engineering, formal methods, correctness, control systems, verification, requirements | |

## 👥 All luminaries — *the anchors*

Each person's anchor file pins their axiom, idioms, and tenets to curated text. `coinages` are the
semantic hooks the selector matches a subject against.

| Person | Anchor | In pairs |
|---|---|---|
| Joe Armstrong | [armstrong](luminaries/armstrong.md) | Hickey × Armstrong |
| Gregory Bateson | [bateson](luminaries/bateson.md) | Cabrera × Bateson |
| Kent Beck | [beck](luminaries/beck.md) | Brooks × Beck |
| Marc Brooker | [brooker](luminaries/brooker.md) | Brooker × Helland · Brooker × Kleppmann |
| Fred Brooks | [brooks](luminaries/brooks.md) | Brooks × Beck |
| Derek Cabrera | [cabrera](luminaries/cabrera.md) | Cabrera × Bateson · Cabrera × Meadows |
| Eric Evans | [evans](luminaries/evans.md) | Hickey × Evans |
| Michael Feathers | [feathers](luminaries/feathers.md) | Thompson × Feathers |
| Pat Helland | [helland](luminaries/helland.md) | Brooker × Helland · Helland × Stonebraker |
| Rich Hickey | [hickey](luminaries/hickey.md) | Hickey × Armstrong · Hickey × Evans |
| Tony Hoare | [hoare](luminaries/hoare.md) | Leveson × Hoare |
| Alan Kay | [kay](luminaries/kay.md) | Kay × Victor |
| Martin Kleppmann | [kleppmann](luminaries/kleppmann.md) | Brooker × Kleppmann |
| Leslie Lamport | [lamport](luminaries/lamport.md) | Lamport × Thomas/Hunt |
| Nancy Leveson | [leveson](luminaries/leveson.md) | Leveson × Hoare |
| Barbara Liskov | [liskov](luminaries/liskov.md) | Ousterhout × Liskov |
| Colm MacCárthaigh | [maccarthaigh](luminaries/maccarthaigh.md) | Warfield × MacCárthaigh |
| Charity Majors | [majors](luminaries/majors.md) | Tufte × Majors |
| Donella Meadows | [meadows](luminaries/meadows.md) | Cabrera × Meadows |
| Peter Naur | [naur](luminaries/naur.md) | Naur × Procida |
| Helen Nissenbaum | [nissenbaum](luminaries/nissenbaum.md) | Nissenbaum × Solove |
| John Ousterhout | [ousterhout](luminaries/ousterhout.md) | Ousterhout × Liskov |
| Dave Thomas & Andy Hunt | [pragmatic-programmers](luminaries/pragmatic-programmers.md) | Lamport × Thomas/Hunt |
| Daniele Procida | [procida](luminaries/procida.md) | Naur × Procida |
| Daniel Solove | [solove](luminaries/solove.md) | Nissenbaum × Solove |
| Michael Stonebraker | [stonebraker](luminaries/stonebraker.md) | Helland × Stonebraker |
| Ken Thompson | [thompson](luminaries/thompson.md) | Thompson × Feathers |
| Edward Tufte | [tufte](luminaries/tufte.md) | Tufte × Majors |
| Bret Victor | [victor](luminaries/victor.md) | Kay × Victor |
| Andy Warfield | [warfield](luminaries/warfield.md) | Warfield × MacCárthaigh |
