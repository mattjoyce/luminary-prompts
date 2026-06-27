---
luminary: John Ousterhout
sort: Ousterhout
lived: b. 1954
epithet: deep modules, simple interfaces
domains: [software design, interface design, modularity, abstraction, complexity]
coinages: [deep module, shallow module, define errors out of existence, tactical tornado]
pairs: [Ousterhout × Liskov]
axis-roles:
  - "surface × substitution (Ousterhout × Liskov) — holds surface"
status: anchored
tags: [luminary, person]
---

# John Ousterhout — deep modules, simple interfaces

> A module's worth is the ratio of the functionality it provides to the size of the
> interface you must understand to use it; the best modules are *deep* — narrow
> interface, powerful implementation — and the worst are *shallow*, exposing almost
> as much as they hide.

## Anchor

- **Axiom** — Complexity is everything that makes software hard to understand or modify, the interface is the part of a module no caller can avoid, so the best modules are deep: a small, simple interface over a large, powerful implementation.
- **Idioms**
  - *deep module* — a module whose interface is simple relative to the functionality it implements; it hides a lot behind a little.
  - *shallow module* — a module whose interface is nearly as complex as its implementation; it pays interface cost without hiding much.
  - *complexity* — anything about a system's structure that makes it hard to understand or change; caused by dependencies and obscurity, accumulating incrementally.
  - *define errors out of existence* — designing an API so the conditions others would throw exceptions for simply don't arise.
  - *strategic vs tactical programming* — investing in design to reduce future complexity (strategic) versus optimizing only to ship this feature now (tactical).
  - *tactical tornado* — a prolific developer who ships fast while leaving a wake of complexity others must clean up.
- **Tenets**
  1. Complexity is not one big mistake but the accumulation of many small ones; it must be fought continuously, not refactored away later.
  2. The two sources of complexity are dependencies and obscurity — whatever makes change ripple or makes the system hard to understand.
  3. Interface simplicity beats implementation simplicity: it is fine to make a module's insides harder if doing so makes its interface easier.
  4. Many exceptions are design failures; you can often define errors out of existence by choosing semantics where the special case doesn't occur.
  5. Working code is not enough — investing a steady fraction of effort in design beats shipping fast and paying compounding interest.
  6. Comments capture what the code cannot — design intent and the non-obvious — not a restatement of the syntax.

## Orientation

John Ousterhout (b. 1954) is a Stanford computer scientist who created the Tcl/Tk scripting language, co-designed the Raft consensus algorithm, and led the log-structured file system and RAMCloud projects. In 2018 he distilled decades of building and teaching into *A Philosophy of Software Design*, a short book arguing that the central job of programming is managing complexity. He matters because he made "good design" concrete — measurable in interfaces, dependencies, and obscurity rather than left to taste.

## Doctrine — the theory

Ousterhout reduces software design to a single enemy: complexity, defined operationally as anything that makes a system hard to understand or modify. Complexity isn't dramatic; it's the steady accumulation of small dependencies and small obscurities, each individually defensible, that together make a codebase no one can change with confidence. Because it accrues incrementally, it can only be fought incrementally — there is no future refactor that pays off the debt if you keep taking it on.

His central instrument is the module, judged by depth. A module is an interface plus an implementation, and its true cost to the rest of the system is its interface — the part everyone must understand. So the goal is to maximize functionality delivered per unit of interface: deep modules, simple interfaces over powerful implementations. Shallow modules — thin wrappers, pass-through methods, classes whose interface is nearly as big as their body — are the anti-pattern, because they levy interface cost without hiding much. It is even worth making an implementation more complex if that lets its interface get simpler, because the interface is paid by many callers and the implementation by one author.

From depth flows the rest. Hide information rather than leaking it across boundaries; pull complexity downward into the module so callers don't carry it; and design errors out of existence — choose semantics where the exceptional case simply isn't exceptional, instead of forcing every caller to handle it. All of this is strategic programming: treating working code as the floor, not the goal, and continually investing a fraction of effort in design so complexity doesn't compound. Its opposite, tactical programming — and its avatar the tactical tornado — gets features out fast and leaves everyone else maintaining the wreckage.

**Why the lens:** Ousterhout makes you ask the question "it works" never answers — is this interface pulling its weight, or is it making everyone who touches it carry complexity the module should have swallowed?

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Deep module | Simple interface over a powerful implementation; hides much behind little | *A Philosophy of Software Design* (2018) |
| Shallow module | Interface nearly as complex as its implementation; little is hidden | *A Philosophy of Software Design* (2018) |
| Complexity | Anything making software hard to understand or modify; from dependencies + obscurity | *A Philosophy of Software Design* (2018) |
| Define errors out of existence | Designing APIs so exceptional conditions don't arise | *A Philosophy of Software Design* (2018) |
| Strategic vs tactical programming | Investing in design versus optimizing only to ship now | *A Philosophy of Software Design* (2018) |
| Information leakage | One design decision reflected in multiple modules, coupling them | *A Philosophy of Software Design* (2018) |

## The lens

Point this lens at a design or a diff and ask:
- Is this module deep or shallow — how much functionality does it hide behind how much interface, and is the ratio worth it?
- What does a caller have to know to use this? Could the interface get smaller even if the implementation got harder?
- Which of these exceptions could be defined out of existence by choosing different semantics?
- Is this change strategic or tactical — am I investing in the design, or just getting it working and leaving complexity for the next person?

## Canon

- *A Philosophy of Software Design* (2018; 2nd ed. 2021) — the book; deep modules, complexity, and strategic design in one volume.
- *In Search of an Understandable Consensus Algorithm* (2014, with Diego Ongaro) — the Raft paper; design-for-understandability applied to consensus.
- Stanford CS190, Software Design Studio — the course the book grew out of.
- Tcl/Tk (1988 onward) — the scripting language; an early bet on simple, embeddable interfaces.

## Pairings

- **Ousterhout × Liskov** — *surface × substitution* — holds *surface*. → [`../pairs/ousterhout-liskov.md`](../pairs/ousterhout-liskov.md)
