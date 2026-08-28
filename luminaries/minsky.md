---
luminary: Yaron Minsky
sort: Minsky
epithet: make illegal states unrepresentable
domains: [type-driven design, data modeling, functional programming, API design, correctness]
coinages: [make illegal states unrepresentable, code for exhaustiveness, make common errors obvious, favor readers over writers]
pairs: [Minsky × Hickey]
axis-roles:
  - "constraint × openness (Minsky × Hickey) — holds constraint"
status: anchored
tags: [luminary, person]
---

# Yaron Minsky — make illegal states unrepresentable

> Put the invariant in the shape of the data, so the state the domain forbids has no
> value that can denote it — a state you cannot write down is one you never have to
> validate, document, test for, or debug.

## Anchor

- **Axiom** — Every bug that matters is a program in a state its author never intended; that state was representable before it was reached, and the fix is to make it unrepresentable rather than to check for it.
- **Idioms**
  - *make illegal states unrepresentable* — choose the type so that combinations the domain forbids have no inhabitant, rather than admitting them and rejecting them at runtime.
  - *code for exhaustiveness* — prefer closed variants the compiler must check, so adding a case becomes a compile error at every site that has to change.
  - *make common errors obvious* — shape the interface so the wrong call fails loudly and early, not quietly and late.
  - *favor readers over writers* — code is read far more often than written; brevity for the author is not the objective.
  - *avoid complex type-hackery* — types are bought for clarity, and an encoding harder to read than the rule it enforces has spent more than it earned.
- **Tenets**
  1. An invariant recorded in a comment, a validation function, or a reviewer's memory is an invariant that will eventually be violated. Put it in the type and it holds forever, for free, on every build.
  2. When a record's legal states are a strict subset of the cartesian product of its fields, the type is admitting states the domain forbids — that gap is a bug that has not been constructed yet.
  3. Exhaustiveness is a refactoring tool: a closed set of cases turns "find every place that handles this" from a grep into a work list the compiler hands you.
  4. Types are a lightweight specification, checked on every build, covering every input — which is the one thing a test suite can never claim.
  5. Two fields that are only meaningful in particular combinations are one variant wearing a disguise.
  6. Restraint is part of the discipline. Don't be puritanical about purity, and don't reach for type-hackery — the goal is clarity enforced, not cleverness demonstrated.

## Orientation

Yaron Minsky took a PhD in distributed systems at Cornell in 2002, joined the trading firm Jane Street in 2003, and is the reason it now runs on millions of lines of OCaml — the largest industrial bet on typed functional programming there is. He made the public case in *OCaml for the Masses* (2011) and co-wrote *Real World OCaml*. The phrase he is known for, "make illegal states unrepresentable", comes from his 2010 *Effective ML* lectures at Harvard and Northeastern, where it sits alongside eight other rules.

## Doctrine — the theory

Minsky's argument starts with a claim about where bugs come from. Very few of them are clever failures of logic. Most are a program sitting in a state nobody intended and nobody considered — a record where the status says success and the error field is populated, an entity that is both deleted and active, an index that is valid only if a flag set three functions ago is still true. Every one of those states was *representable* before it was reached. The customary response is to check: validate at the boundary, assert in the middle, add a test, write a comment for the next person. Minsky's response is to delete the state from the space of things that can be said at all.

That moves invariants into the type, which is the only place they get enforced without anyone remembering to enforce them. A record with a status field and an optional error message permits "succeeded, with an error"; the domain forbids it and the type allows it, so now every reader is owed a comment and every code path owes a check. Replace it with a variant of `Succeeded of result` and `Failed of error` and the illegal state has nowhere to live. Nothing enforces the rule, because there is no longer a rule to enforce — which is the difference between a constraint that costs vigilance and one that costs nothing.

Exhaustiveness is the second half, and it is the half that pays off over years rather than on the day the code is written. When the set of cases is closed and the compiler must see every branch, adding a case stops being an act of archaeology and becomes a list of compile errors you work through. This is what makes the discipline load-bearing under change rather than merely tidy at birth. It is also the property that matters most where code is being extended quickly by people, or by tools, that do not carry the original theory in their heads: the model itself refuses the mistake instead of relying on the extender to know better.

The restraint matters as much as the technique, and the other rules are all guards against the failure mode this style invites. Favor readers over writers. Avoid complex type-hackery. Don't be puritanical about purity. A type system used to show off produces encodings where the invariant is harder to read than the comment it replaced, and at that point the trade has gone the wrong way. Types are purchased with reader effort, and they have to buy more clarity than they cost.

**Why the lens:** Minsky makes you count the states your type admits, count the states the domain allows, and treat the difference as a defect that has been written and not yet triggered.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Make illegal states unrepresentable | Choose types so forbidden combinations have no inhabitant | *Effective ML* (2010) |
| Code for exhaustiveness | Use closed variants so the compiler flags every site when a case is added | *Effective ML* (2010) |
| Make common errors obvious | Shape interfaces so the likely mistake fails at compile time | *Effective ML* (2010) |
| Favor readers over writers | Optimize code for the person reading it later, not the person typing it | *Effective ML* (2010) |
| Avoid complex type-hackery | Types must buy more clarity than they cost in readability | *Effective ML* (2010) |
| Types as lightweight specification | A machine-checked partial spec covering every input, on every build | *OCaml for the Masses* (2011) |

## The lens

Point this lens at a design or a diff and ask:
- Enumerate the values this type admits. Which of them does the domain forbid? Each one is a bug someone will eventually construct.
- Which invariant here is held by a comment, a validation step, a naming convention, or a code review — and could be held by the shape of the data instead?
- Are these two fields independent, or does one only make sense when the other has a particular value? If the latter, they are one variant, not two fields.
- When someone adds a case next quarter, does the compiler hand them every site that must change, or must they grep and hope?
- Is there a default branch swallowing variants nobody has thought about?
- Is the encoding clearer than the rule it enforces, or has type-hackery made the invariant harder to see than a comment would have?

## Canon

- *Effective ML* (2010, lectures at Harvard and Northeastern) — the nine rules, including "make illegal states unrepresentable" and "code for exhaustiveness".
- *Effective ML Revisited* (Jane Street blog) — the rules elaborated after the talk.
- *OCaml for the Masses* (ACM Queue / CACM, 2011) — the industrial argument for typed functional programming at scale.
- *Real World OCaml* (2013; 2nd ed. 2022, with Anil Madhavapeddy and Jason Hickey) — the discipline as a working book.

## Pairings

- **Minsky × Hickey** — *constraint × openness* — holds *constraint*. → [`../pairs/minsky-hickey.md`](../pairs/minsky-hickey.md)
