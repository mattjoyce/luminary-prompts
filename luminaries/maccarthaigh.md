---
luminary: Colm MacCárthaigh
sort: MacCárthaigh
epithet: keep serving when dependencies fail
domains: [availability, resilience engineering, static stability, blast radius, control planes, cryptography]
coinages: [static stability, constant work, shuffle sharding]
pairs: [Warfield × MacCárthaigh]
axis-roles:
  - "durability × availability (Warfield × MacCárthaigh) — holds availability"
status: anchored
tags: [luminary, person]
---

# Colm MacCárthaigh — keep serving when dependencies fail

> A system is only as available as it is on its *worst* day — so build it to do the
> same constant work whether its dependencies are healthy or gone: keep the control
> plane out of the request path, never let recovery add load, and bound the blast
> radius so one bad input can't take everyone down.

## Anchor

- **Axiom** — The honest test of an availability design is what it does the *moment* a dependency disappears; the answer must be "exactly what it was doing before," not "react, retry, and hope."
- **Idioms**
  - *Static stability* — continuing to operate correctly from already-known state when a dependency vanishes, making no new calls or changes during the failure.
  - *Constant work* — doing the same fixed amount of work at all times, so the busiest, most-stressed moment is identical to the calmest and the system never changes mode under load.
  - *Shuffle sharding* — assigning each tenant a random small subset of workers from a large pool, so any one bad tenant or input degrades only a thin, mostly-unique slice instead of everyone.
  - *Blast radius* — the set of customers and requests one failure, bad input, or poisoned key can affect; the quantity you design to shrink by construction.
  - *Bimodal behaviour* — a system that behaves differently under stress than at rest; the precise thing static stability and constant work exist to eliminate.
- **Tenets**
  1. Availability is measured on the worst day; optimizing the healthy case at the cost of the failure case optimizes the wrong thing.
  2. The control plane must not sit in the request path — the data plane should keep serving from static, already-known state when the control plane is gone.
  3. Constant-work designs beat reactive ones: a system that always does the same work can't be surprised by load, because its peak *is* its baseline.
  4. Recovery must not add load — failover that doubles traffic on survivors, or caches that stampede when cold, turn a small failure into an outage.
  5. Bound the blast radius by construction (shuffle sharding, cells), so one poisoned request, key, or tenant can never become everyone's outage.

## Orientation

Colm MacCárthaigh is a Distinguished Engineer at AWS who has built and run some of the internet's largest data-plane systems — Route 53, CloudFront, Elastic Load Balancing — and created s2n, AWS's small, security-first TLS implementation; before AWS he was a core Apache httpd contributor. His subject is availability under failure: how to keep serving when a dependency vanishes, without the control plane in the request path and without recovery adding load. The patterns he has made canonical — static stability, constant work, shuffle sharding — are now the standard vocabulary for bounding blast radius at scale.

## Doctrine — the theory

Availability is not the average; it is the floor. A system that is elegant and cheap when everything is healthy, but *reacts* to stress — failing over, rebuilding caches, calling out to a control plane — has banked savings on the good days and bought fragility for the bad ones. MacCárthaigh's reflex is to make the bad day look exactly like every other day, so there is no special mode for the system to fall into when it is least able to cope.

The sharpest expression is static stability: a system should keep working using state it *already has* when a dependency disappears. If the data plane needs a fresh control-plane lookup to serve a request, then the control plane's outage is automatically your outage. So you push configuration out ahead of time and serve from it statically; the data plane should run, unchanged, with the control plane completely gone. Control planes are complex and change often, which is exactly why they fail more — and exactly why they belong off the request path.

The way you *get* static stability is constant work. Process the full configuration every interval whether or not it changed; push the whole table rather than computing diffs; size for the peak and always run there. A constant-work system has no "stressed" mode because its busiest second is identical to its quietest — which kills bimodal behaviour, the property where a system runs one way normally and dangerously differently under load. The counter-intuition is that doing *more*, steadily, is often more reliable than doing the clever minimal thing that changes shape under pressure.

Finally, bound the blast radius, because shared fate is the enemy. Shuffle sharding gives each tenant a random small subset of workers from a big pool; because two tenants rarely share their whole subset, one abusive or poisoned tenant degrades only a thin, mostly-unique slice and most customers never notice. Combined with cells and isolation, the blast radius of any single failure is bounded by construction rather than by luck. Recovery paths get the same scrutiny: failover must not double load on survivors, retries must be capped and jittered, cold caches must not stampede — because the recovery that adds load is precisely how a small failure becomes a large one.

**Why the lens:** MacCárthaigh asks the question most availability designs skip — what does this system *do* the instant a dependency is gone? — and insists the honest answer be "the same constant work as always," not "react and hope."

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Static stability | Keep operating from already-known state when a dependency fails; no new calls needed | *Static Stability Using Availability Zones* (Amazon Builders' Library) |
| Constant work | Do the same fixed work at all times so load can't trigger a mode change | *Reliability, Constant Work, and a Good Cup of Coffee* (Builders' Library) |
| Shuffle sharding | Random per-tenant subsets of a worker pool to isolate blast radius | *Workload Isolation Using Shuffle-Sharding* (Builders' Library) |
| Control / data plane split | Keep configuration-changing systems off the request-serving path | Builders' Library; AWS resilience guidance |
| Blast radius | The scope of customers and requests one failure or bad input can affect | AWS resilience guidance |
| Bimodal behaviour | A system that behaves differently under stress than at rest | *Reliability, Constant Work…* (Builders' Library) |
| s2n | AWS's small, security-first TLS/SSL implementation, which he created | s2n (open source, 2015) |

## The lens

Point this lens at a design or implementation and ask:
- The instant a dependency disappears, what does this system do? If the answer isn't "keep serving from what it already has," it isn't statically stable.
- Is there a control-plane call on the request path? What happens to data-plane availability when that control plane is down?
- Does this do constant work, or does its behaviour change under load (failover, cache rebuild, retry storm)? Where exactly is the mode change?
- What's the blast radius of one bad request, key, or tenant — and what bounds it (shuffle sharding, cells) so it can't become everyone's outage?
- Does any recovery path add load to the thing that is already failing?

## Canon

- *Static Stability Using Availability Zones* (Amazon Builders' Library) — the canonical statement of serving from known state when dependencies fail.
- *Reliability, Constant Work, and a Good Cup of Coffee* (Amazon Builders' Library) — constant-work designs and the case against bimodal behaviour.
- *Workload Isolation Using Shuffle-Sharding* (Amazon Builders' Library) — bounding blast radius with random subsets.
- s2n (2015– ) — the TLS library; small, simple, and heavily tested, security treated as an availability and safety discipline.

## Pairings

- **Warfield × MacCárthaigh** — *durability × availability* — holds *availability*. → [`../pairs/warfield-maccarthaigh.md`](../pairs/warfield-maccarthaigh.md)
