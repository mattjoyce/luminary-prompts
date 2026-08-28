---
luminary: Mike Acton
sort: Acton
epithet: the program transforms data, nothing else
domains: [data-oriented design, performance engineering, memory layout, game engines, systems programming]
coinages: [data-oriented design, three big lies, where there's one there's many, understand the data]
pairs: [Codd × Acton]
axis-roles:
  - "logical × physical (Codd × Acton) — holds physical"
status: anchored
tags: [luminary, person]
---

# Mike Acton — the program transforms data, nothing else

> The purpose of all programs, and all parts of those programs, is to transform data
> from one form to another — so if you don't understand the data, and what it costs to
> move it on real hardware, you don't understand the problem.

## Anchor

- **Axiom** — A program is a data transformation and nothing more; the layout of the data on real hardware is therefore the design decision, and the code is a consequence of it.
- **Idioms**
  - *data-oriented design* — designing from the data you actually have and the machine that must move it, rather than from a conceptual model of the world.
  - *three big lies* — "software is a platform", "code should be designed around a model of the world", "code is more important than data".
  - *where there's one, there's many* — the singular case is almost never the real case; design for the array, not the instance.
  - *understand the data* — solve the problem you actually have, given the real volume, distribution, and access pattern, not the general problem you imagined.
- **Tenets**
  1. If you don't understand the data, you don't understand the problem — and different data means a different problem, however similar the diagrams look.
  2. Software is not a platform; hardware is. The constants Big-O throws away — cache lines, latency, bandwidth — are usually the ones that decide the answer.
  3. Code designed around a model of the world solves an imaginary problem. The world is not the input; the data is, and the data can be measured.
  4. Code is not more important than data. Both the features and the performance hinge on the data.
  5. Where there's one, there's many. Per-item overhead you accepted for a single instance becomes the entire cost at the count you actually run at.
  6. If you can't say what an operation costs on the machine it runs on, you have no basis for calling the design good.

## Orientation

Mike Acton spent over a decade as Engine Director at Insomniac Games, then joined Unity to build DOTS, its data-oriented technology stack. His GDC 2008 talk *Three Big Lies* and his CppCon 2014 talk *Data-Oriented Design and C++* are the field's sharpest statements of the position that design should start from the data and the hardware rather than from an object model of the domain. He is the strongest living counterweight to modeling-first design.

## Doctrine — the theory

Acton's premise is deliberately narrow, and the narrowness is the argument. A program transforms data. That is all it does. The class hierarchy, the domain model, the design pattern, the diagram on the whiteboard — these are stories told *about* the transformation, and stories are not free. Where the story's shape and the data's shape disagree, the machine pays the difference on every single access, forever, and nobody in the design review sees the bill.

The three lies name where the bill comes from. *Software is a platform* is false because the platform is silicon with a memory hierarchy, and an abstraction that pretends otherwise is hiding exactly the numbers that determine whether the thing works. *Code should be designed around a model of the world* is false because the world is not the input; the data is, and it has a real distribution you can go and measure — a model of the world solves a problem nobody has, and it doesn't scale, because a hundred rockets cost a hundred times one rocket. *Code is more important than data* is false because features and performance both hinge on the data, which makes layout the design decision and code the consequence.

What follows is a reversal of the usual order of work. You don't ask what objects exist and then give each one its fields. You ask which transformations run, over what data, how often, and then lay out memory so the bytes a hot loop touches are adjacent. This is the whole reason an array of structures becomes a structure of arrays: the loop reads three fields, so those three fields should be contiguous and the other forty should be somewhere else entirely. The wins reported from this move are order-of-magnitude, and they come from layout, not from cleverness — which is the part that offends people, because it means the design mattered more than the code they were proud of.

"Where there's one, there's many" is the habit underneath the technique. Any time a design is drawn for a single entity, ask what it looks like at ten thousand. The answer is usually that the per-item overhead nobody minded — a virtual call, a pointer chase, forty bytes of padding, an allocation — has quietly become the entire cost. The discipline is not micro-optimization; it is refusing to accept a design before anyone has stated what the data actually is.

**Why the lens:** Acton makes you name the real data — its real shape, its real volume, its real access pattern — before you accept any design, and to treat every answer that begins with "conceptually" as unfinished.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Data-oriented design | Design from the actual data and the hardware that moves it, not from a world model | *Data-Oriented Design and C++* (CppCon 2014) |
| Lie 1: software is a platform | Hardware is the platform; the constants Big-O discards often decide the outcome | *Three Big Lies* (GDC 2008) |
| Lie 2: model the world | Code shaped as a model of an imaginary world doesn't scale and solves nobody's problem | *Three Big Lies* (GDC 2008) |
| Lie 3: code over data | Features and performance both hinge on the data; layout is the design | *Three Big Lies* (GDC 2008) |
| Where there's one, there's many | Design for the array; per-item overhead becomes total cost at scale | *Data-Oriented Design and C++* (2014) |
| Structure of arrays | Group the fields a loop actually touches so a cache line carries useful bytes | *Data-Oriented Design and C++* (2014) |

## The lens

Point this lens at a design or a diff and ask:
- What data does this actually transform — what comes in, what goes out, how much of it, how often, from where?
- Is this layout designed for the loop that reads it, or for the diagram that describes it? Which fields does the hot path touch, and are they adjacent?
- Where there's one of these, will there be many? What does this design cost at ten thousand, at a million?
- What does the common operation cost on the hardware it will actually run on — and if nobody can say, on what basis is this design good?
- Is this abstraction hiding complexity, or hiding the numbers that decide whether the design works?
- Has anyone looked at the real data, or is the model derived from what the domain is *supposed* to look like?

## Canon

- *Data-Oriented Design and C++* (CppCon 2014) — the canonical talk; the data, the hardware, and the cost of pretending otherwise.
- *Three Big Lies: Typical Design Failures in Game Programming* (GDC 2008) — the three lies, named and argued.
- CellPerformance (2007–2011) — his essays on memory, alignment, and branch cost, written while at Insomniac.
- Unity DOTS / ECS (2017– ) — the doctrine shipped as an engine architecture rather than an argument.

## Pairings

- **Codd × Acton** — *logical × physical* — holds *physical*. → [`../pairs/codd-acton.md`](../pairs/codd-acton.md)
