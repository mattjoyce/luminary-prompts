---
luminary: Charity Majors
sort: Majors
epithet: questions you never planned to ask
domains: [observability, distributed systems, telemetry, operations, debugging]
coinages: [observability vs monitoring, wide structured events, test in production]
pairs: [Tufte × Majors]
axis-roles:
  - "display × inquiry (Tufte × Majors) — holds inquiry"
status: anchored
tags: [luminary, person]
---

# Charity Majors — questions you never planned to ask

> Monitoring tells you whether the things you predicted are okay; observability lets
> you ask any question of a running system — including the ones you never thought to
> ask — without shipping new code to find the answer.

## Anchor

- **Axiom** — Observability is the power to ask arbitrary new questions of your live system without shipping new code; if you can only see what you decided to chart in advance, you have monitoring, not observability.
- **Idioms**
  - *Observability (software sense)* — can you understand any internal state of your system from the outside, including states you never anticipated? (term borrowed from control theory; she brought it to software practice.)
  - *Unknown-unknowns* — the failures you didn't know to look for; observability targets these, monitoring only the known-unknowns.
  - *High-cardinality* — fields with huge numbers of distinct values (user IDs, request IDs); the most useful debugging dimensions, and the ones metrics throw away.
  - *Arbitrarily-wide structured events* — one rich event per request carrying hundreds of context fields, instead of pre-aggregated metrics.
  - *Test in production* — production is the only fully real environment, so build to observe and recover there rather than pretending staging is enough.
- **Tenets**
  1. Monitoring answers known-unknowns; observability answers unknown-unknowns — different capabilities, not points on one maturity curve.
  2. Aggregate at write time and you've already thrown away the cardinality you'll need to debug; keep wide, raw, high-cardinality events.
  3. You cannot predict every question you'll need to ask, so don't bake your dashboards into the only questions allowed.
  4. Production is the only real environment; "test in prod" is not recklessness but honesty about where truth lives.
  5. The three pillars — metrics, logs, traces — are billing models, not a definition; the unit that matters is the wide structured event.

## Orientation

Charity Majors is co-founder and CTO of Honeycomb, an operations engineer who turned a hard-won debugging insight into a category. After running infrastructure at Parse and then Facebook, she argued that traditional monitoring — dashboards answering questions you already knew to ask — breaks down for modern distributed systems, where nearly every incident is novel. Her answer, *observability*, is the ability to interrogate a live system about anything, without deploying new code. She is also the field's most quotable advocate for testing in production.

## Doctrine — the theory

Majors starts from the nature of modern systems: distributed, concurrent, and complex enough that every serious failure is one you've never seen before. In that world the old discipline — decide in advance what might go wrong, build a dashboard and an alert for each — quietly fails, because the thing that actually breaks is the thing nobody charted. The known-unknowns are handled; the system dies of unknown-unknowns. So the question that defines her lens is not "is the metric I worried about okay?" but "can I ask what the hell is happening right now, even though I never anticipated this?"

That reframing has a hard technical consequence: cardinality. The dimensions most useful for debugging — which user, which request, which build, which shard — have enormous numbers of possible values, and conventional metrics throw exactly those away by aggregating at write time. Once the data is pre-summarised, whole classes of question become permanently unanswerable; no amount of dashboard cleverness recovers detail that was discarded on the way in. Hence her insistence on *wide, high-cardinality, structured events*: capture one rich record per request with hundreds of fields, and decide what to ask later, at read time, when you finally know what you need.

The cultural edge — "test in production" — follows from the same honesty. You cannot fully reproduce a real distributed system in staging; production is the only environment that is genuinely real, with real traffic, real data, real concurrency. Pretending otherwise is the actual risk. The mature response is not to fear prod but to instrument it so well that you can watch a deploy, ask any question, and recover fast — observability is what makes operating in reality survivable.

**Why the lens:** Majors guards the question you didn't pre-plan — *can this system answer something nobody anticipated, or only replay the dashboards built in advance?*

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Observability | Ability to ask arbitrary questions about a system's internal state from outside, without new code | *Observability Engineering* (2022); term from control theory (Kálmán, 1960) |
| Monitoring vs observability | Monitoring checks known failure modes; observability explores unknown ones | Majors' essays and talks |
| High-cardinality | Fields with very many distinct values; the essential, and most often discarded, debugging dimensions | Honeycomb; *Observability Engineering* (2022) |
| Wide structured events | One context-rich event per request, vs many pre-aggregated metrics | *Observability Engineering* (2022) |
| Test in production | Treating prod as the only fully real environment; observe and recover there | Majors, "I test in prod" |
| Unknown-unknowns | Failures you didn't anticipate and so could never have pre-charted | Majors' talks |

## The lens

Point this lens at a design or implementation and ask:
- Can this console ask a question nobody anticipated — or only replay the dashboards someone built in advance?
- What cardinality got aggregated away at write time, and which questions can we therefore never ask?
- When an alert fires, can I pivot to *which* user, request, build, or region — or only see that some aggregate moved?
- Are we measuring known-unknowns (is the thing I feared okay?), or can we chase unknown-unknowns (what is actually happening right now)?

## Canon

- *Observability Engineering* (O'Reilly, 2022, with Liz Fong-Jones & George Miranda) — the book-length definition and practice.
- Honeycomb blog — essays drawing the monitoring-vs-observability line and the case for high-cardinality wide events.
- Conference talks and "test in production" writing — the operational philosophy in short, quotable form.

## Pairings

- **Tufte × Majors** — *display × inquiry* — holds *inquiry*. → [`../pairs/tufte-majors.md`](../pairs/tufte-majors.md)
