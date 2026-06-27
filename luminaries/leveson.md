---
luminary: Nancy Leveson
sort: Leveson
epithet: safety is a control property
domains: [system safety, software safety, systems engineering, accident causation, safety-critical systems]
coinages: [STAMP, STPA, CAST]
pairs: [Leveson × Hoare]
axis-roles:
  - "safety × correctness (Leveson × Hoare) — holds safety"
status: anchored
tags: [luminary, person]
---

# Nancy Leveson — safety is a control property

> Safety is an emergent property of the whole system's control structure, not the sum of
> reliable parts; accidents come from inadequate control over hazardous interactions —
> and software does not "fail," it does exactly what it was told under conditions its
> requirements never imagined.

## Anchor

- **Axiom** — Safety is a system-level emergent property enforced by a control structure; an accident is that structure failing to keep the system out of a hazardous state, not merely a component breaking.
- **Idioms**
  - *STAMP* (Systems-Theoretic Accident Model and Processes) — a causation model in which accidents are control failures: the system's safety constraints were not enforced.
  - *STPA* (System-Theoretic Process Analysis) — a forward hazard analysis built on STAMP that finds *unsafe control actions* by examining the control structure, not failure probabilities.
  - *CAST* (Causal Analysis based on STAMP) — the post-accident counterpart: ask why the control structure failed to enforce its constraints, instead of hunting a single root-cause component.
  - *Safety constraint* — the condition the control structure must enforce to keep the system safe (e.g. the beam stays off unless the shield is in place).
  - *Component-interaction accident* — a hazard reached with *every component working exactly as specified*; nothing "failed," and the system still harmed someone.
- **Tenets**
  1. Reliability and safety are different properties — perfectly reliable components can compose into an unsafe system, and raising component reliability can lower system safety.
  2. Software does not fail; it does exactly what it was told. Accidents trace to flawed, incomplete requirements that never anticipated the encountered conditions.
  3. Accidents are not chains of failures but the result of inadequate control over hazardous interactions.
  4. Safety can only be analyzed at the level of the whole control structure, because that is the level at which it emerges.
  5. "Root cause" and "operator error" are stop-words that hide the control flaws which permitted the accident — and will permit the next one.

## Orientation

Nancy G. Leveson is a professor of aeronautics and astronautics at MIT and the founder of modern system-safety engineering for software-intensive systems. Her analysis of the Therac-25 radiation-therapy deaths became the canonical case study of software-caused harm, and her models **STAMP** and **STPA** reframed accidents as control failures rather than component failures — now the dominant safety framework across aviation, medicine, automotive, and defense. She is the person who showed that making every part more reliable is not the same as making the system safe.

## Doctrine — the theory

Leveson reasons from systems theory: a system's important properties are *emergent* — they arise from the interactions of the parts and exist nowhere in any single part. Safety is exactly such a property. The traditional safety world, built on reliability engineering and fault trees, treats an accident as a chain of component failures: find the broken link, lower its probability, repeat. That worldview is adequate for simple electromechanical systems and dangerously wrong for software-intensive ones, because the deadliest modern accidents have *no broken component at all*.

This is her sharpest move and the one most people resist. Software cannot wear out or break; it computes the function it was given. When a software-controlled system kills someone, every line ran as written — the fault lives in the *requirements*: the assumptions about the environment, the timing, the operator, and the other components that turned out to be incomplete or wrong. Therac-25 had no failed transistor. It had software doing precisely what it was specified to do inside a race condition its requirements never imagined. You cannot find that with a fault tree, because nothing failed.

So she reframes the system as a *control structure* that must enforce *safety constraints*, with controllers, feedback, and process models at every level. An accident is the control structure failing to enforce a constraint — a missing feedback loop, an inconsistent process model, an unsafe control action issued at the wrong moment. **STPA** works forward to enumerate those unsafe control actions before they happen; **CAST** works backward after an accident to expose why the structure let one through, refusing the false comfort of a root cause or a blamed operator. The lens stays sharp because it is the only one that catches the accident already waiting inside correct components and complete code.

**Why the lens:** because the dangerous failures in modern systems aren't broken parts — they're correct parts doing exactly what they were told inside a control structure that never constrained the hazard.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| STAMP | Accidents as control failures: safety constraints not enforced by the control structure | *Engineering a Safer World* (2011) |
| STPA | Forward hazard analysis finding unsafe control actions in the control structure | *Engineering a Safer World* (2011) |
| CAST | Backward accident analysis of why the constraints were not enforced | *Engineering a Safer World* (2011) |
| Safety ≠ reliability | Reliable components can form an unsafe system, and the reverse | *Safeware* (1995) |
| Component-interaction accident | A hazard reached with every component working as specified | *Engineering a Safer World* (2011) |
| Software "failure" | Software does what it was told; the fault is in the requirements, not the execution | *Safeware* (1995) |

## The lens

Point this lens at a safety-critical or failure-prone system and ask:
- Draw the control structure: what enforces each safety constraint, and what feedback tells the controller the constraint still holds?
- Where could *every* component do exactly what it was specified to do and the system still reach a hazardous state?
- Which "requirements" silently assume environmental conditions that can be violated — and what does the system do when they are?
- When you investigate an accident or near-miss, are you stopping at "operator error" or a root-cause part, or asking why the control structure failed to prevent it?

## Canon

- *Engineering a Safer World: Systems Thinking Applied to Safety* (MIT Press, 2011) — the book; STAMP, STPA, and CAST in full (available open access).
- *Safeware: System Safety and Computers* (1995) — the foundational text linking software to system safety.
- "An Investigation of the Therac-25 Accidents" (*IEEE Computer*, 1993, with Clark Turner) — the canonical study of software-caused death.

## Pairings

- **Leveson × Hoare** — *safety × correctness* — holds *safety*. → [`../pairs/leveson-hoare.md`](../pairs/leveson-hoare.md)
