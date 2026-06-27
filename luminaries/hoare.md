---
luminary: Tony Hoare
sort: Hoare
lived: 1934–2026
epithet: correctness is proved, not tested
domains: [formal methods, program correctness, concurrency, programming languages, verification, algorithms]
coinages: [Quicksort, Hoare logic, Communicating Sequential Processes, billion-dollar mistake]
pairs: [Leveson × Hoare]
axis-roles:
  - "safety × correctness (Leveson × Hoare) — holds correctness"
status: anchored
tags: [luminary, person]
---

# Tony Hoare — correctness is proved, not tested

> A program's correctness should be established by mathematical proof against a precise
> specification, not by testing alone — and the surest route to a correct design is
> simplicity radical enough that there are *obviously* no deficiencies.

## Anchor

- **Axiom** — Treat a program as a formal object: state what must be true before and after it runs, then *prove* it conforms; testing can reveal bugs but never establish their absence.
- **Idioms**
  - *Hoare logic* — a formal system of axioms and inference rules for proving that a program meets its specification.
  - *Hoare triple {P} C {Q}* — read: if precondition P holds before command C executes, then postcondition Q holds after it (provided C terminates).
  - *Loop invariant* — the assertion preserved by every iteration; the engine of any proof about a loop.
  - *Communicating Sequential Processes (CSP)* — a formal language for concurrency in which independent processes share no state and interact only by message-passing.
  - *The billion-dollar mistake* — his own verdict on inventing the null reference (ALGOL W, 1965): a small local convenience that became decades of crashes and vulnerabilities.
- **Tenets**
  1. Testing can show the presence of bugs but never their absence; only proof establishes correctness.
  2. "Correct" is meaningless without a specification — a stated precondition and postcondition — to be correct *against*.
  3. There are two ways to build a design: simple enough to have *obviously* no deficiencies, or complex enough to have *no obvious* ones — and the first is far harder and far better.
  4. Concurrency is safest when processes share nothing and communicate only through explicit messages.
  5. A small convenience admitted into a language — the null reference — can cost the field billions; design decisions compound.

## Orientation

Sir Tony Hoare (1934–2026) was a British computer scientist, the 1980 Turing Award laureate, and the inventor of Quicksort. He gave programming two of its deepest tools for trusting code: **Hoare logic**, which lets you *prove* a program meets its specification, and **CSP**, which tames concurrency by forbidding shared state and routing all interaction through messages. He is equally remembered for an act of candour — naming the null reference his "billion-dollar mistake" — and for the line every system designer keeps on the wall about the two ways to construct a design.

## Doctrine — the theory

Hoare treats programming as a branch of mathematics. A program is not something you poke at until it appears to work; it is a formal object whose behaviour can be reasoned about with the same rigour as a theorem. Nearly everything he is known for falls out of that single stance.

If correctness is provable, a program first needs a precise *specification* — what must hold before it runs, what it guarantees after — because "correct" has no meaning without a statement of intent. That is the **Hoare triple** {P} C {Q}, and the **loop invariant** is how you discharge the hard part, reasoning about repetition without running it. If correctness is provable, then testing is demoted from arbiter to sampler: it exercises some behaviours and can only ever show that bugs are present, never that they are absent — a point he pressed alongside Dijkstra. And if proof is the goal, *simplicity stops being an aesthetic preference and becomes a precondition for trust*: you cannot prove, or even fully understand, a design whose complexity conceals its own deficiencies. Hence the two-ways aphorism, and its sting — the simple way is "far more difficult."

The same worldview drives **CSP**. Concurrency is exactly where informal reasoning collapses, so Hoare gives it an algebra: processes that share no memory and interact only through well-defined communication, making concurrent behaviour tractable rather than a field of invisible races. And it explains his most-quoted regret. The null reference was a tiny local convenience that silently destroyed a global invariant — *every reference is valid* — and the mind that prizes provable invariants is precisely the one that can see, decades on, how ruinous it is to break one cheaply. Hand this lens a problem Hoare never saw and the questions are always the same: what does this promise, can the promise be proven, and is it simple enough that the proof is even possible?

**Why the lens:** because the question that decides whether code is trustworthy is not "did the tests pass?" but "what does this program promise — and can that promise be proven, or made so simple it obviously holds?"

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Hoare logic | Axiomatic system for proving programs meet their specifications | "An Axiomatic Basis for Computer Programming" (1969) |
| Hoare triple {P} C {Q} | If P holds before C, then Q holds after C terminates | "An Axiomatic Basis..." (1969) |
| Loop invariant | An assertion preserved by every iteration; the core of a loop proof | "An Axiomatic Basis..." (1969) |
| Communicating Sequential Processes | Concurrency by message-passing between shared-nothing processes | "Communicating Sequential Processes" (1978); *CSP* (1985) |
| Quicksort | In-place divide-and-conquer sort by partitioning around a pivot | "Quicksort" (1961/62) |
| Billion-dollar mistake | The null reference, introduced in ALGOL W (1965), later disowned | QCon talk (2009) |

## The lens

Point this lens at a design or a diff and ask:
- What is this code's specification — precisely, what must be true before it runs and what does it guarantee after? If you cannot state it, you cannot call it correct.
- What is the invariant of each loop and each shared data structure, and does every path preserve it?
- Are you trusting this because the tests passed, or because you can argue it *cannot* be wrong? Tests show bugs present, never absent.
- Is this design simple enough that its correctness is obvious, or merely complex enough that its bugs are not — and where could a null or an unguarded shared state break an invariant the rest of the code assumes?

## Canon

- "An Axiomatic Basis for Computer Programming" (*CACM*, 1969) — the paper; Hoare logic and the {P} C {Q} triple.
- "The Emperor's Old Clothes" (Turing Award lecture, *CACM* 1981) — the case for simplicity; source of the two-ways aphorism.
- *Communicating Sequential Processes* (1985; first paper 1978) — the book; the algebra of message-passing concurrency.

## Pairings

- **Leveson × Hoare** — *safety × correctness* — holds *correctness*. → [`../pairs/leveson-hoare.md`](../pairs/leveson-hoare.md)
