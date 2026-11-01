---
luminary: Gerard J. Holzmann
sort: Holzmann
epithet: write code a machine can check
domains: [formal methods, model checking, safety-critical software, coding standards, static analysis, flight software]
coinages: [SPIN, PROMELA, the Power of Ten, bitstate hashing, supertrace, swarm verification, logic model checking, assertion density]
pairs: [Koopman × Holzmann]
axis-roles:
  - "field × proof (Koopman × Holzmann) — holds proof"
status: anchored
tags: [luminary, person]
---

# Gerard J. Holzmann — write code a machine can check

> Concurrency defects are found by exhaustively searching the state space, not by
> running the program — so model-check the logic, and write the code under rules
> restrictive enough that analysers can prove things about it before it ever flies.

## Anchor

- **Axiom** — What matters in critical software is what a tool can decide about it: verify the concurrent logic by exhaustive state-space search, and constrain the code — bounded loops, no recursion, no dynamic allocation, dense assertions, zero warnings from several analysers — so the checking never has to give up.
- **Idioms**
  - *SPIN* — an explicit-state logic model checker: it enumerates the reachable states of a concurrent model and reports a counterexample trace for any violated property, rather than sampling behaviours by running them.
  - *PROMELA* — the modelling language SPIN checks; deliberately small, with processes, channels, and non-determinism, so that abstraction is forced and the state space stays searchable.
  - *The Power of Ten* — ten rules for safety-critical code, each chosen because it makes the code mechanically analysable, not because it is tidy.
  - *Assertion density* — assertions per function, targeted at a minimum average of two; assertions are executable specification, and their absence is a measurable gap.
  - *Bitstate hashing / supertrace* — when the state space exceeds memory, store states as hash bits and accept a quantified, tiny probability of missing one — a large partial proof beats an abandoned complete one.
  - *Swarm verification* — run many small, differently-seeded, differently-configured searches in parallel rather than one enormous one; diverse partial searches cover more of a huge state space than a single exhaustive attempt that runs out of RAM.
  - *Logic model checking* — verifying properties of a design's logic (deadlock-freedom, safety, liveness, temporal claims) against the model rather than the deployment.
- **Tenets**
  1. Concurrency bugs live in interleavings, and testing samples interleavings; only exhaustive search over the state space gives you a reason to believe the race is not there.
  2. Coding rules earn their place by what they enable. Ban recursion and unbounded loops because they let you bound stack and prove termination; ban post-init malloc because it removes an entire class of unpredictable failure; ban clever preprocessor use and function pointers because they blind the analyser.
  3. Compile clean, from day one, at the most pedantic setting, and run more than one strong static analyser daily to zero warnings — a warning you decided to live with is a decision nobody will revisit.
  4. Assertions are specification you can run: two per function on average, checking things that must be true, with a defined non-trivial action on failure.
  5. Every return value gets checked and every parameter gets validated, or the rule is explicitly waived and the waiver is recorded — silence is not a decision.
  6. Model the design, not the program. The model is an abstraction whose whole purpose is to be small enough to search; the value comes from the properties you state about it, and stating them is where the design errors surface.
  7. A partial verification with known coverage beats an exhaustive one that never finished — engineer the search itself.

## Orientation

Gerard Holzmann spent his research career at Bell Labs, where he built SPIN, the explicit-state model checker that made verifying concurrent protocols practical and won the ACM System Software Award in 2001. He then founded and led NASA JPL's Laboratory for Reliable Software, where the same discipline was applied to flight software — including Mars Science Laboratory's Curiosity, whose critical code was model-checked, statically analysed, and reviewed against a coding standard he wrote. His "Power of Ten: Rules for Developing Safety-Critical Code" (2006) is the most-cited compression of that experience: ten rules chosen for what they let a machine prove.

## Doctrine — the theory

Holzmann's starting position is that a running program is a bad instrument for finding concurrency errors. Execution samples one interleaving out of an astronomically large set, and the defects that matter are exactly the ones a sampling process misses. The alternative is to build a model of the design's logic, state the properties it must hold — no deadlock, this never happens, that eventually happens — and let a tool enumerate reachable states until it either exhausts them or produces a counterexample. The counterexample is the payoff: it is a concrete, replayable trace of how your design goes wrong, delivered before any hardware exists.

The state space is enormous, so the craft is in shrinking and searching it. This is where his engineering shows: partial-order reduction to skip equivalent interleavings, bitstate hashing to trade a quantified sliver of completeness for reaching a far larger space, swarm verification to run many diverse partial searches in parallel instead of one that dies on memory. He is explicit that a partial verification with characterised coverage is worth more than the exhaustive one you could not finish, which is an unusually pragmatic stance for a formal-methods researcher and is exactly why the work landed in flight software rather than staying in papers.

The Power of Ten rules are the same idea applied to source text. Each rule exists because it converts an undecidable question into a decidable one. Bounded loops make termination provable and worst-case timing computable. No recursion and no dynamic allocation after initialisation make memory behaviour static and stack depth analysable. One level of pointer dereference and no function pointers keep the call graph visible so the analyser can follow control flow. Restricted preprocessor use keeps the text you review the text that compiles. Two assertions per function on average put executable claims in the code where a tool and a reviewer can both use them. Zero warnings from multiple analysers, daily, from day one, keeps the signal alive — because the first warning you tolerate is the one that trains everyone to scroll past the rest.

Underneath all of it is a stance about where confidence comes from: not from the developer's conviction, not from the test suite's green bar, but from a mechanical procedure that would have said no. Anything that stops a tool from being able to say no is a cost, however pretty the code looks.

**Why the lens:** Holzmann makes you ask what in this system has actually been *decided* by a tool rather than believed by a person — and whether the way the code is written even permits the question.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| SPIN | Explicit-state model checker for concurrent systems; yields counterexample traces | *The SPIN Model Checker* (2003); ACM System Software Award (2001) |
| PROMELA | SPIN's modelling language — processes, channels, non-determinism, deliberately small | *Design and Validation of Computer Protocols* (1991) |
| The Power of Ten | Ten coding rules for safety-critical code, chosen for mechanical analysability | "The Power of Ten" (*IEEE Computer*, 2006) |
| Bitstate hashing / supertrace | Hash-bit state storage trading quantified completeness for far greater reach | Holzmann, "An improved protocol reachability analysis technique" (1988) |
| Partial-order reduction | Skip interleavings provably equivalent to ones already explored | *The SPIN Model Checker* (2003) |
| Swarm verification | Many small diverse parallel searches instead of one exhaustive run | Holzmann, Joshi & Groce, "Swarm Verification" (ASE 2008) |
| Assertion density | Assertions per function, ≥2 average, as runnable specification | "The Power of Ten" (2006) |
| JPL C coding standard | The institutional standard operationalising the ten rules for flight code | JPL Institutional Coding Standard for C (2009) |
| Mars Code | Model checking, static analysis, and tool-assisted review on MSL flight software | Holzmann, "Mars Code" (*CACM*, 2014) |

## The lens

Point this lens at a concurrent design, a critical module, or a coding standard and ask:
- What property do you claim about this concurrency, and what searched the state space to check it — or is the claim that the tests passed?
- Can you write the design as a model small enough to check? If not, is that because the problem is hard or because the design is unbounded?
- Does every loop have a provable upper bound, and can you compute worst-case stack depth from the source?
- Is any memory allocated after initialisation, and what is the plan for the allocation that fails at hour ten thousand?
- What is the assertion density, and do the assertions state things that must be true, or merely things that are true today?
- Are all return values checked and all parameters validated — and where they are not, is there a recorded waiver or just silence?
- Does this compile with zero warnings at the most pedantic setting, under more than one analyser, today?
- How much of the state space did the last verification run actually cover, and do you know the number?
- What in this system has a tool proved, and what has only been believed?

## Canon

- "The Power of Ten — Rules for Developing Safety-Critical Code" (*IEEE Computer*, 2006) — the ten rules and, more importantly, the reason each one exists.
- *The SPIN Model Checker: Primer and Reference Manual* (2003) — the practical text on logic model checking with SPIN and PROMELA.
- *Design and Validation of Computer Protocols* (1991) — the foundations: protocols, PROMELA, reachability analysis.
- "Swarm Verification" (with Rajeev Joshi & Alex Groce, ASE 2008) — engineering the search when the state space will not fit.
- "Mars Code" (*CACM*, 2014) — how model checking, static analysis, and review were actually applied to Curiosity's flight software.
- JPL Institutional Coding Standard for the C Programming Language (2009) — the ten rules turned into an enforceable standard.

## Pairings

- **Koopman × Holzmann** — *field × proof* — holds *proof*. → [`../pairs/koopman-holzmann.md`](../pairs/koopman-holzmann.md)
