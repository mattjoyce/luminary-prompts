---
luminary: Rich Hickey
sort: Hickey
epithet: simple is not easy
domains: [language design, simplicity, state and identity, data modeling, concurrency]
coinages: [complect, place-oriented programming, value of values, hammock-driven development]
pairs: [Hickey × Armstrong, Hickey × Evans]
axis-roles:
  - "structure × runtime (Hickey × Armstrong) — holds structure"
  - "simplicity × domain (Hickey × Evans) — holds simplicity"
status: anchored
tags: [luminary, person]
---

# Rich Hickey — simple is not easy

> *Simple* is the opposite of *complex*, not of *hard*: it means un-braided — one
> role, one concern, nothing complected — and it is an objective property of the
> artifact, regardless of how *easy* (familiar, close at hand) it happens to feel.

## Anchor

- **Axiom** — Simple and easy are different axes; simple is an objective property of a thing (one braid, one concern), easy is just its distance from you, and choosing easy over simple is how systems rot.
- **Idioms**
  - *complect* — to interleave or braid two concerns into one, manufacturing complexity; the root act that makes systems hard.
  - *simple vs easy* — simple = un-braided / one-fold (objective); easy = near-at-hand / familiar (relative); the two are orthogonal.
  - *place-oriented programming (PLOP)* — treating state as overwritable memory places, conflating value, identity, and time; a holdover from scarce RAM.
  - *value of values* — values are immutable, comparable, shareable facts; systems built on values are easier to reason about than ones built on mutable objects.
  - *hammock-driven development* — solving hard problems by deliberate, unhurried thought away from the keyboard, engaging the background mind.
  - *epochal time model* — identity is a succession of immutable state-values over time; state is the value an identity has at a moment.
- **Tenets**
  1. Simplicity is assessable by counting how many concerns are braided together — it is objective, not a matter of taste.
  2. Most complexity is incidental: we complect things that could stand apart — state with identity, data with behavior, policy with mechanism.
  3. Programmers chronically choose easy (familiar, close at hand) over simple, and pay for it forever in maintenance.
  4. Data beats objects: bare immutable values beat methods-bundled-with-state for building systems you can reason about.
  5. State, identity, and time should be modeled explicitly; mutable place is a performance optimization that leaked into our semantics.
  6. You cannot test or refactor your way out of complexity braided in at design time — you must un-braid it.

## Orientation

Rich Hickey is the creator of Clojure (2007), a Lisp for the JVM built on immutable data, and of Datomic, a database that treats data as an accreting set of immutable facts. He is best known for *Simple Made Easy* (2011), the talk that drew a hard line between simple and easy and handed a generation of programmers the verb *complect*. He reasons about software the way a logician reasons about proofs — from the properties of the artifact, not the habits of its author — and that is why his lens still cuts.

## Doctrine — the theory

Hickey begins by refusing to slur together two words English lets us conflate. *Simple* comes from *sim-plex*, "one fold"; its opposite is *complex*, "braided together" — complected. *Easy* descends from a root meaning "to lie near," adjacent, at hand. Simple is about the structure of the thing; easy is about its distance from you — your tools, your training, your habits. They are different axes: a thing can be simple and unfamiliar (hard but simple), or familiar and tangled (easy but complex). Most of what feels productive — the convenient framework, the object bundling state with behavior, the macro hiding a join — buys easy at the cost of simple.

Complexity, in this lens, is not volume; it is braiding. Every time you interleave two concerns that could have stood apart — value with place, identity with state, what with how — you complect them, and the cost is paid not now but every time anyone must reason about, change, or compose the result. Because we can hold only a few things in our heads at once, complecting is the thing that actually limits the systems we can build. And it is largely a choice, made at design time, that no amount of later testing or tooling undoes.

From this follows the program: prefer values to objects (a value is just a fact — immutable, comparable, with no hidden identity), model state, identity, and time explicitly rather than letting mutable memory stand in for all three, and pull concerns apart even when keeping them together would be easier. Clojure and Datomic are this doctrine compiled — a language where data structures don't change underneath you, a database where the past is never overwritten. The discipline that produces such designs is not faster typing but slower thinking — hammock-driven development, the deliberate cultivation of understanding before code.

**Why the lens:** Hickey makes you ask the one question velocity hides — not "does this work, is this familiar?" but "what have I braided together here that could have stood apart, and who pays for it later?"

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Simple vs easy | Simple = un-braided / objective; easy = familiar / relative; orthogonal axes | *Simple Made Easy* (2011) |
| Complect | To braid two concerns into one, manufacturing complexity | *Simple Made Easy* (2011) |
| Place-oriented programming (PLOP) | Treating state as overwritable memory places; conflates value, identity, time | *The Value of Values* (2012) |
| Value of values | Immutable values as the substrate for reasoning; data over objects | *The Value of Values* (2012) |
| Epochal time model | Identity as a succession of immutable states; state = an identity's value at a time | *Are We There Yet?* (2009) |
| Hammock-driven development | Deliberate, unhurried problem analysis away from the keyboard | *Hammock Driven Development* (2010) |

## The lens

Point this lens at a design or a diff and ask:
- What is complected here — which two concerns are braided that could stand apart (state and identity, data and behavior, what and how)?
- Is this simple, or just easy — am I reaching for it because it's untangled, or because it's familiar and close at hand?
- Where am I overwriting a place instead of producing a new value — and what history am I destroying by doing so?
- Could this be a plain immutable value instead of an object that owns state? What would I actually lose?

## Canon

- *Simple Made Easy* (Strange Loop, 2011) — the talk; the simple/easy distinction and the verb *complect*, in one hour.
- *The Value of Values* (2012) — why immutable values beat mutable objects as the substrate of systems.
- *Are We There Yet?* (2009) — the epochal time model: untangling identity, state, value, and time.
- *Hammock Driven Development* (2010) — design as deliberate thought before code.
- Clojure (2007) and Datomic (2012) — the doctrine as shipped software.

## Pairings

- **Hickey × Armstrong** — *structure × runtime* — holds *structure*. → [`../pairs/hickey-armstrong.md`](../pairs/hickey-armstrong.md)
- **Hickey × Evans** — *simplicity × domain* — holds *simplicity*. → [`../pairs/hickey-evans.md`](../pairs/hickey-evans.md)
