---
luminary: Marc Brooker
sort: Brooker
epithet: stability is a dynamic property
domains: [distributed systems, serverless, queueing theory, fault tolerance, formal methods, metastability]
coinages: [full jitter, decorrelated jitter]
pairs: [Brooker × Helland, Brooker × Kleppmann]
axis-roles:
  - "dynamics × data (Brooker × Helland) — holds dynamics"
  - "dynamics × foundations (Brooker × Kleppmann) — holds dynamics"
status: anchored
tags: [luminary, person]
---

# Marc Brooker — stability is a dynamic property

> A distributed system's correctness is a *static* property, but its survival is a
> *dynamic* one — what kills it at scale is rarely a wrong answer, it's a stable,
> self-sustaining bad state that load feeds and the system can't climb out of.

## Anchor

- **Axiom** — Correctness asks "can this give a wrong answer?"; Brooker asks "on a bad day, can this get stuck giving *no* answer, and never recover on its own?" — the second question is where outages live.
- **Idioms**
  - *Metastable failure* — a stable-but-broken equilibrium: some trigger pushes the system into a degraded state that its own behaviour sustains even after the trigger is gone (concept from the HotOS 2021 paper; Brooker made it operational for practitioners).
  - *Full jitter* — a randomized backoff strategy that samples the next retry delay uniformly from `[0, cap]`, de-synchronizing clients so retries smooth instead of pulsing.
  - *Decorrelated jitter* — a backoff strategy that grows the delay from the *previous* delay rather than the attempt count, spreading load further still.
  - *Load shedding* — deliberately rejecting work above capacity to keep the system inside its healthy equilibrium instead of tipping into the bad one.
  - *Retry amplification* — under partial failure, retries add load that causes more failures that cause more retries: a positive feedback loop, not a safety net.
- **Tenets**
  1. A provably correct system can still collapse; failure at scale is about dynamics — load, feedback, queueing — not logic.
  2. Retries are a load amplifier, so every retry needs a cap, a budget, and jitter; an unbounded retry is a latent outage.
  3. The dangerous failures are metastable: design an *exit* from the bad state, not just defences against entering it.
  4. You cannot find these states by inspection; use formal models (TLA+) and deterministic simulation to enumerate the schedules humans miss.
  5. Queueing theory, not intuition, governs behaviour near saturation — latency goes vertical at high utilization, long before anything "fails."

## Orientation

Marc Brooker is a senior principal engineer at AWS who has spent fifteen-plus years building EC2, EBS, and now Lambda and serverless — and writing, on his blog and in the Amazon Builders' Library, some of the clearest available explanations of *why* large distributed systems break. His subject is dynamics: timeouts, retries, backoff, queueing, and the metastable states a system can fall into and not climb out of. Where most engineers reason about whether a design is correct, Brooker reasons about what it *does* under load and partial failure — and reaches for TLA+ and simulation rather than argument.

## Doctrine — the theory

A distributed system has two kinds of properties. *Static* ones — is it correct, does it ever return a wrong answer? — and *dynamic* ones — what does it do over time, under load, as failures come and go? Almost all engineering attention goes to the first, and almost all catastrophic outages come from the second. Brooker's move is to treat a running system as a feedback-control system, not a logic proof: the question is stability, and stability is a property of the dynamics.

The central object is the metastable failure. A trigger — a brief overload, a deploy, a dependency blip — pushes the system into a degraded state, and then the system's *own* behaviour keeps it there after the trigger has passed. Retry storms are the canonical case: timeouts cause retries, retries add load, load causes more timeouts. The system has two stable equilibria, healthy and collapsed, and once in the bad one it will not self-recover. So the design question is not only "what can push us over the edge?" but "once over, what specific mechanism pulls us back?" — load shedding, backoff with jitter, circuit breakers, capped work.

This is why jitter and queueing theory are not micro-optimizations but load-bearing. Without jitter, retries synchronize and arrive in waves that hammer a recovering system; full and decorrelated jitter spread them so the system smooths instead of pulsing. And queueing theory warns that latency does not degrade linearly — near full utilization it explodes — so capacity and load-shedding decisions have to respect that nonlinearity, not a mental model of straight lines.

And it is why Brooker insists on formal methods and simulation. Humans cannot enumerate the rare interleavings where these dynamics bite. TLA+ lets you model-check the invariant; deterministic simulation lets you run the system through millions of adverse schedules and watch what happens. His stance is blunt: if the property matters, prove it or simulate it — do not argue it in a design doc.

**Why the lens:** most designs are checked for whether they can give a wrong answer; Brooker checks for whether, on a bad day, they can get *stuck* — and whether anything in the design will ever pull them back out.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Metastable failure | A stable, self-sustaining degraded state the system stays in after the trigger is gone | *Metastable Failures in Distributed Systems* (HotOS 2021); Brooker's blog |
| Backoff with jitter | Randomized, increasing retry delays that de-synchronize clients and damp load | *Exponential Backoff And Jitter* (AWS, 2015); Builders' Library (2019) |
| Full / decorrelated jitter | Named randomized backoff strategies; full samples `[0, cap]`, decorrelated grows from the last delay | *Exponential Backoff And Jitter* (AWS, 2015) |
| Load shedding | Rejecting work above capacity to keep the system in its healthy equilibrium | Builders' Library; Brooker's blog |
| Deterministic simulation | Running a system through controlled, repeatable adverse schedules to expose rare dynamics | Brooker's writing on simulation testing |
| Formal methods at AWS (TLA+, P) | Model-checking design invariants before and while building | *Formal methods at Amazon* (CACM); "Fifteen Years of TLA+ at AWS" (2024) |

## The lens

Point this lens at a design or implementation and ask:
- Trace one request through every retry and timeout — under partial failure, does total load go *up* or down? If up, you've built an amplifier.
- What stable-but-broken state can this fall into, and once the trigger passes, what *specific* mechanism pulls it back out?
- Where is work unbounded — a queue with no cap, a retry with no budget, a health check that can flap the whole fleet?
- Is the critical invariant argued in prose, or has it been model-checked or simulated? If only argued, you don't yet know.

## Canon

- *Exponential Backoff And Jitter* (AWS Architecture Blog, 2015) — names and benchmarks full and decorrelated jitter; the origin of the canonical retry guidance.
- *Timeouts, Retries, and Backoff with Jitter* (Amazon Builders' Library, 2019) — the operational distillation of the same.
- *Metastable Failures in Distributed Systems* (HotOS 2021) + Brooker's blog series — the failure class he made legible to practitioners.
- *Millions of Tiny Databases* (NSDI 2020) — Physalia; blast-radius and control-plane design in production.
- [brooker.co.za/blog](https://brooker.co.za/blog/) — the running corpus on queueing, simulation, and formal methods.

## Pairings

- **Brooker × Helland** — *dynamics × data* — holds *dynamics*. → [`../pairs/brooker-helland.md`](../pairs/brooker-helland.md)
- **Brooker × Kleppmann** — *dynamics × foundations* — holds *dynamics*. → [`../pairs/brooker-kleppmann.md`](../pairs/brooker-kleppmann.md)
