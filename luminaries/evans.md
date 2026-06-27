---
luminary: Eric Evans
sort: Evans
epithet: the model is the design
domains: [domain modeling, software design, strategic design, object modeling, complexity management]
coinages: [Domain-Driven Design, ubiquitous language, bounded context, anti-corruption layer, context map]
pairs: [Hickey × Evans]
axis-roles:
  - "simplicity × domain (Hickey × Evans) — holds domain"
status: anchored
tags: [luminary, person]
---

# Eric Evans — the model is the design

> The hard part of software is not the technology but the tangle of the domain; the
> cure is a model of that domain bound so tightly to the code and the language that
> the model *is* the design — and where the language breaks, the design is wrong.

## Anchor

- **Axiom** — Complexity lives in the domain, not the platform; you tame it by building a domain model, binding it to the code, and speaking one language for both, so that model, code, and conversation never drift apart.
- **Idioms**
  - *Ubiquitous language* — one shared vocabulary used identically by domain experts and developers in talk, diagrams, and code; a struggle to say a rule in it signals a flawed model.
  - *Bounded context* — an explicit boundary inside which a model and its terms have one consistent meaning; the same word may mean something different in another context.
  - *Context map* — an honest description of how separate bounded contexts relate and translate at their seams, instead of pretending one global model.
  - *Aggregate* — a cluster of objects treated as a single consistency boundary, reached only through one root.
  - *Anti-corruption layer* — a translation layer that keeps a clean model from being polluted by another context's incompatible one.
- **Tenets**
  1. The model is not analysis done before coding; the model and the implementation are the same thing, and a model the code has drifted from is dead.
  2. Language is the carrier of the model — knowledge leaks at every translation between analysts' words, coders' words, and the docs' words.
  3. No single unified model survives a large system; forcing one yields ambiguous, overloaded terms — draw bounded contexts and map between them.
  4. Spend your deepest modeling effort on the *core domain* (the competitive edge); buy or keep crude the generic and supporting parts.
  5. Breakthroughs come from making the implicit explicit — refactor toward deeper insight when the language strains.

## Orientation

Eric Evans is the author of *Domain-Driven Design: Tackling Complexity in the Heart of Software* (2003), the book that gave a generation of engineers a vocabulary for the part of software that isn't code. His thesis is that the difficulty in serious systems is the messy business reality they must model, and that most projects fail there — on a muddled understanding of the problem — long before any infrastructure choice matters. He gave the field both a tactical toolkit (entities, value objects, aggregates) and, more durably, a strategic one (bounded contexts, context maps) for keeping a model coherent as a system grows.

## Doctrine — the theory

The center of Evans' worldview is that a domain model is a rigorous, deliberately selective abstraction of the knowledge that matters — and that its value is destroyed the moment it stops being the code. So he refuses the waterfall split where analysts produce diagrams and coders produce something else: the model IS the design, co-created at the keyboard by developers and domain experts together. The binding agent is language. If the experts say "policy" and the code says `AccountRecord`, every conversation pays a translation tax and the model silently rots. A *ubiquitous language* — the same terms everywhere — isn't tidiness; it's the medium the model lives in. When you cannot cleanly say a business rule in that language, the language is telling you the model is wrong, and the right response is to refactor toward deeper insight rather than route around the friction.

The second move is strategic and is what keeps the lens sharp at scale. A large system has no single true model — different teams, different subdomains, the same word meaning genuinely different things. Pretending otherwise produces a big ball of mud where every term is overloaded and ambiguous. Evans' answer is the *bounded context*: name the boundary within which a model is consistent, accept that another context models the world differently, and draw a *context map* of how they translate. Then decide where to invest. The *core domain* — the thing that is your competitive edge — deserves your best people and deepest modeling; the generic parts should be bought or kept deliberately crude, and a clean context guarded from a messy one by an *anti-corruption layer*.

The generative habit is to treat language as the design surface. Listen to how domain experts actually talk; the model is in the nouns and verbs that carry real meaning, and the boundaries of meaning are the boundaries of the system.

**Why the lens:** it forces the question most designs skip — *do the model, the language, and the code still agree, and where the language breaks down, isn't that exactly where the design is wrong?*

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Ubiquitous language | One shared language used by experts and developers in talk, model, and code alike | *Domain-Driven Design* (2003) |
| Bounded context | An explicit boundary within which a model and its terms have one consistent meaning | *Domain-Driven Design* (2003) |
| Context map | A description of how distinct bounded contexts relate and translate at their seams | *Domain-Driven Design* (2003) |
| Aggregate | A cluster of objects treated as one consistency boundary, reached through a single root | *Domain-Driven Design* (2003) |
| Entity / value object | Identity-bearing objects vs. interchangeable attribute-only objects | *Domain-Driven Design* (2003) |
| Core domain | The part that is the business's competitive edge and deserves the deepest modeling | *Domain-Driven Design* (2003) |

## The lens

Point this lens at a design or a diff and ask:
- What word did the domain expert just use that isn't in the code — and what word is in the code that the expert would never say?
- Where does one term mean two different things, and is that the seam of a bounded context you haven't drawn yet?
- Is this model still the design, or has it become an analysis diagram the code has quietly drifted from?
- Which part of this is the core domain worth your deepest modeling, and which is generic and should be bought or kept crude?

## Canon

- *Domain-Driven Design: Tackling Complexity in the Heart of Software* (2003) — the book; the whole lens, tactical and strategic.
- *Domain-Driven Design Reference* (2015) — Evans' free, condensed definitions of every core pattern.

## Pairings

- **Hickey × Evans** — *simplicity × domain* — holds *domain*. → [`../pairs/hickey-evans.md`](../pairs/hickey-evans.md)
