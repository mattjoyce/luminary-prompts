---
luminary: Barbara Liskov
sort: Liskov
lived: b. 1939
epithet: a subtype must keep the promise
domains: [data abstraction, type systems, language design, contracts, distributed systems]
coinages: [Liskov Substitution Principle, abstract data type, data abstraction, cluster]
pairs: [Ousterhout × Liskov]
axis-roles:
  - "surface × substitution (Ousterhout × Liskov) — holds substitution"
status: anchored
tags: [luminary, person]
---

# Barbara Liskov — a subtype must keep the promise

> If S is a subtype of T, an object of T may be replaced by an object of S without
> breaking any property a program relying on T depends on — a subtype must require
> no more of its callers and promise no less to them than the type it stands in for.

## Anchor

- **Axiom** — A subtype is not merely a type with extra methods; it is a promise — it must demand no more of its callers and guarantee no less to them than the supertype did, so that any code written against the supertype still holds when the subtype is substituted.
- **Idioms**
  - *Liskov Substitution Principle* — if S is a subtype of T, an S may be used anywhere a T is expected without altering the correctness the program relied on.
  - *abstract data type* — a type defined by the operations you can perform on it and the behavior they guarantee, not by its representation.
  - *data abstraction* — hiding a type's representation behind its operations, so clients depend only on behavior.
  - *behavioral subtyping* — subtyping defined by preserved pre-conditions, post-conditions, and invariants, not by matching method signatures.
  - *cluster* — CLU's module construct that packages an abstract type with its operations and hides its representation.
- **Tenets**
  1. A subtype's correctness is defined by behavior, not signatures; matching method names and types is necessary but nowhere near sufficient.
  2. Substitutability constrains subtypes — they may weaken pre-conditions and strengthen post-conditions, never the reverse; an "is-a" that breaks a guarantee is not a subtype.
  3. A type *is* its contract: what it requires, what it promises, what it keeps invariant — and that contract, not the representation, is what clients may depend on.
  4. Abstraction means hiding representation behind behavior; clients should be unable to tell, and unaffected by, how the type is built.
  5. The value of an abstraction is what it lets you stop thinking about; a good abstract type removes whole categories of concern from its clients.
  6. Inheritance is dangerous when used for code reuse rather than for honoring a behavioral contract.

## Orientation

Barbara Liskov (b. 1939) is an MIT computer scientist and 2008 Turing Award laureate who, in the 1970s, designed the CLU language and with it gave abstract data types a working form — types defined by their operations, with their representation hidden. Her 1987 keynote and later work with Jeannette Wing produced what the field now calls the Liskov Substitution Principle. She matters because she turned "abstraction" from an aspiration into a precise, checkable contract between a type and everyone who uses it.

## Doctrine — the theory

Liskov's lifelong subject is the boundary between a type and its users, and her conviction is that the boundary should be behavioral, not representational. A type, in her view, is defined by what you can do to it and what those operations guarantee — its contract — never by how it stores its bits. CLU made this concrete: a cluster packaged an abstract type with its operations and hid the representation entirely, so a client literally could not depend on the internals. Abstraction, built properly, is the power to stop thinking about something — to rely on a promise and ignore the machinery that keeps it.

The substitution principle is what that conviction demands of inheritance. If you claim S is a subtype of T, you are claiming that any program written and reasoned about in terms of T stays correct when handed an S. That is a strong claim, and it constrains S sharply: it may accept everything T accepted (pre-conditions no stronger), it must guarantee everything T guaranteed (post-conditions no weaker), and it must preserve T's invariants. A square that "is-a" rectangle but breaks the rectangle's promise that width and height vary independently is, by this test, no subtype at all — whatever the class hierarchy says.

The deep move is that correctness becomes compositional. If every subtype honors its supertype's contract, you can reason about a program in terms of the supertypes alone and trust that substitution will never surprise you. Contracts — pre-conditions, post-conditions, invariants — are the currency; signatures are merely their syntax. This is why Liskov's idea outlived the languages it was born in: it is a statement about what it means for one thing to faithfully stand in for another, which is the question at the heart of every interface, plugin, mock, and API version.

**Why the lens:** Liskov makes you ask the question type-checkers can't — not "does this match the signature?" but "does this implementation actually keep every promise its callers were entitled to rely on?"

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Liskov Substitution Principle | A subtype must be usable anywhere its supertype is, preserving correctness | Keynote *Data Abstraction and Hierarchy* (1987); Liskov & Wing (1994) |
| Abstract data type | A type defined by its operations and their guarantees, not its representation | *Programming with Abstract Data Types* (1974) |
| Data abstraction | Hiding representation behind operations, so clients depend only on behavior | CLU work, 1970s |
| Behavioral subtyping | Subtyping by preserved pre/post-conditions and invariants, not signatures | Liskov & Wing, *A Behavioral Notion of Subtyping* (1994) |
| Cluster (CLU) | Module packaging an abstract type with its operations, hiding representation | CLU language, 1970s |

## The lens

Point this lens at a design or a diff and ask:
- If a different implementation of this interface slots in tomorrow, does every caller still hold — or does some caller depend on a promise this interface never made?
- Does this subtype demand more of its callers, or guarantee less to them, than the supertype did? If so, it isn't one.
- What is this type's contract — its pre-conditions, post-conditions, invariants — and is it written down, or only implied by the happy path?
- Are we inheriting to honor a behavioral promise, or just to reuse code? The second one breaks substitution.

## Canon

- *Data Abstraction and Hierarchy* (1987 keynote) — where the substitution idea is first stated.
- *A Behavioral Notion of Subtyping* (1994, with Jeannette Wing) — the formal account: behavioral subtyping via contracts.
- *Programming with Abstract Data Types* (1974, with Stephen Zilles) — ADTs given a concrete language form.
- CLU (1970s) — the language; clusters, iterators, and exception handling, decades early.
- Turing Award lecture (2008) — her own retrospective on data abstraction and distributed computing.

## Pairings

- **Ousterhout × Liskov** — *surface × substitution* — holds *substitution*. → [`../pairs/ousterhout-liskov.md`](../pairs/ousterhout-liskov.md)
