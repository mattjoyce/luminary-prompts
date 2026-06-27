---
pair: Leveson × Hoare
luminaries: [Nancy Leveson, Tony Hoare]
axis: safety × correctness
subject: a system that must not do harm
domains: [safety engineering, formal methods, correctness, control systems, verification, requirements]
default: false
tags: [luminary, pair]
---

# Leveson × Hoare — safety × correctness

Stereo: is the whole system *safe* (Leveson) against is each part *correct* against its specification (Hoare). Correctness is necessary and not sufficient: a system of provably correct components can still be unsafe, because safety is a property of the whole and its control, not a sum of the parts. You need both — prove the pieces, and prove the system can't reach a harmful state.

## Grounding

Design and code through the lenses of Nancy Leveson and Tony Hoare. Hoare: is each component correct against a precise specification — what are its preconditions, postconditions, and invariants, and are they proven or merely tested? Where is the null, the unchecked input, the unstated assumption that voids the contract? Leveson: safety is an emergent system property, not a component attribute. What are the unsafe states the system must never reach, and what control keeps it out of them? Can an accident arise from individually-correct components interacting, or from requirements that were themselves wrong? Apply both — the part proven correct, and the whole proven safe.

## Before — design review

Critique this design through Leveson and Hoare. Leveson: list the hazards — the states in which this system causes harm — and the control actions that prevent each. Is there a controller with an accurate model of the process it controls, or can the two drift apart? Could every component meet its spec and the system still be unsafe? Are the *requirements* the hazard? Hoare: state the contract of each critical component — precondition, postcondition, invariant. Which of these is asserted but unproven? Where does an interface admit a value (null, out-of-range, malformed) that the callee's correctness assumes away?

## After — code audit

Audit this implementation through Leveson and Hoare. Hoare: find the function whose postcondition isn't guaranteed by its body, the invariant a path can break, the null or unchecked case that silently voids the contract. Find correctness claimed by testing where it should be proven. Leveson: find the unsafe state no control action prevents, the place the software does exactly what it was told under conditions the requirements never anticipated, and the controller acting on a stale or wrong model of the world. Find the accident that needs no component to fail — only correct parts in an unsafe interaction.
