---
luminary: Joe Armstrong
sort: Armstrong
lived: 1950–2019
epithet: let it crash
domains: [fault tolerance, concurrency, distributed systems, message passing, language design]
coinages: [let it crash, concurrency-oriented programming, error kernel]
pairs: [Hickey × Armstrong]
axis-roles:
  - "structure × runtime (Hickey × Armstrong) — holds runtime"
status: anchored
tags: [luminary, person]
---

# Joe Armstrong — let it crash

> You cannot build a reliable system out of components that must not fail; you build
> it out of isolated processes that are *allowed* to fail cleanly, watched by
> something whose only job is to restart them to a known-good state.

## Anchor

- **Axiom** — Reliability is not the absence of failure but the containment of it: isolate state in share-nothing processes, let each crash cleanly on error, and put a supervisor above it whose sole job is to restart it to a known-good state.
- **Idioms**
  - *let it crash* — on an unforeseen error, let the process die and be restarted clean rather than limp on in a corrupt state; don't litter code with defensive handling.
  - *concurrency-oriented programming (COP)* — structuring a program as many isolated, share-nothing processes that mirror the concurrency of the real world and talk only by messages.
  - *error kernel* — the small, trusted core that genuinely must not fail; everything outside it is allowed to crash and restart.
  - *supervision tree* — a hierarchy of supervisor processes whose only job is to start, watch, and restart worker processes (OTP).
  - *share-nothing processes* — processes that hold no shared memory, so one's failure or corruption cannot reach another.
- **Tenets**
  1. The world is concurrent, distributed, and failure-prone; software is most robust when its structure mirrors that, not when it pretends otherwise.
  2. Defensive programming is mostly waste — you cannot anticipate every fault, so handling errors in-line just hides corruption; better to crash and restart.
  3. Isolation is the precondition of fault tolerance: if processes share memory, one failure corrupts many and no supervisor can save you.
  4. Fault tolerance is a whole-system property achieved by redundancy and supervision, never by making any single component perfect.
  5. Keep the part that must not fail — the error kernel — small enough to get right; let everything else be disposable.
  6. Independent things should coordinate by asynchronous, copy-only message passing — no shared state, no locks.

## Orientation

Joe Armstrong (1950–2019) co-created Erlang at Ericsson in the late 1980s, and the OTP framework that hardened it, to solve one problem: keep telephone switches running for years while bugs, hardware faults, and upgrades happen underneath them. His 2003 PhD thesis, *Making reliable distributed systems in the presence of software errors*, is the canonical statement of the approach. He is the patron of fault tolerance — the engineer who decided the way to survive failure was to embrace it.

## Doctrine — the theory

Armstrong starts from a fact most languages design *around* rather than *for*: things fail. Hardware fails, networks partition, and — most stubbornly — software ships with bugs. A telephone exchange cannot be taken down to fix them. So the question is never "how do we prevent failure?" but "how do we keep working while parts of us fail?" His answer inverts the usual instinct: instead of making each component defend itself against every conceivable error, make components cheap, isolated, and disposable, and put the intelligence in how they are watched and restarted.

The mechanism is isolation. An Erlang system is thousands of lightweight processes that share no memory and can touch each other only by sending immutable messages. Because nothing is shared, one process going wrong cannot corrupt another's state — failure is contained by construction. That containment is what makes *let it crash* safe: when a process meets a situation its author never foresaw, the right move is not to limp on with possibly-corrupt state but to die immediately and let a supervisor restart it from a known-good beginning. Errors become events to recover from, not conditions to thread through every function.

Above the workers sit supervision trees — processes whose entire job is to start, monitor, and restart other processes according to a declared strategy. The system's reliability lives in this structure, not in the correctness of any leaf. Underpinning it is the error kernel: the minimal core that truly must not fail, kept tiny and verified, while everything around it is allowed to be fallible *because* it is restartable. Reliability, in this view, is architecture — redundancy plus isolation plus supervision — not heroism in the individual function.

**Why the lens:** Armstrong makes you ask the question optimistic code skips — not "how do I stop this from failing?" but "when this fails, what contains the damage, and who restarts it?"

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Let it crash | On an unforeseen error, fail fast and restart clean rather than handle defensively | PhD thesis (2003) |
| Share-nothing process | Lightweight process holding no shared memory; communicates only by message | Erlang design / thesis (2003) |
| Supervision tree | Hierarchy of supervisor processes that start, watch, and restart workers | OTP / thesis (2003) |
| Error kernel | The minimal trusted core that must not fail; the rest is restartable | PhD thesis (2003) |
| Concurrency-oriented programming | Modeling a system as many isolated processes mirroring real-world concurrency | Armstrong's writing, 2000s |
| Message passing | Asynchronous, copy-only communication between processes — no shared state, no locks | Erlang design |

## The lens

Point this lens at a design or a diff and ask:
- For every component here, name its supervisor: when it dies, what notices, and what restarts it to a known-good state?
- Where is this process defending against errors it cannot really anticipate — could it just crash and be restarted instead?
- What state is shared between these units, and could one's failure corrupt another? If so, the isolation is an illusion.
- What is the error kernel here — the part that truly must not fail — and is it small enough to trust?

## Canon

- *Making reliable distributed systems in the presence of software errors* (2003) — the PhD thesis; the whole doctrine, from let-it-crash to supervision trees.
- *Programming Erlang* (2007; 2nd ed. 2013) — the practitioner's path into processes, messages, and OTP.
- Erlang and OTP — the language and framework as the doctrine in working form.
- *Coders at Work* (2009, interviewed by Peter Seibel) — Armstrong on simplicity, failure, and why he built it this way.

## Pairings

- **Hickey × Armstrong** — *structure × runtime* — holds *runtime*. → [`../pairs/hickey-armstrong.md`](../pairs/hickey-armstrong.md)
