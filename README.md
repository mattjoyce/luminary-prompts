# Luminaries

**Paired-thinker prompts for design review and code audit.**

Each Luminary is a *pair* of software-engineering thinkers fused into a single stereo lens.
You aim it at a design or a diff, and it critiques the work from two complementary directions at
once. The point of pairing is the same as the point of stereo vision: one eye gives you a flat
picture, two eyes give you depth. A single great idea ("hide complexity", "make it observable")
applied alone tends to overshoot; held in tension against its complement, it stays honest.

These prompts are model-agnostic. Paste a grounding into any capable LLM (or read it yourself
before a review) and ask it to apply the pair to your design doc, your pull request, or your repo.

## Why these people, and why in pairs

Every pair is built on an **axis** — two forces that pull against each other and are both true.
Good software is what survives the tension between them:

| Pair | Axis | Aimed at |
|------|------|----------|
| **Hickey × Armstrong** | structure × runtime | a running software system |
| **Ousterhout × Liskov** | surface × substitution | the module boundary |
| **Brooks × Beck** | triage × step | how we approach the work |
| **Lamport × Thomas/Hunt** | system × self | knowing what the artifact does, and why |
| **Kay × Victor** | vision × experience | computing as a medium for the user |
| **Tufte × Majors** | display × inquiry | an observability console |
| **Naur × Procida** | theory × need | documentation |
| **Thompson × Feathers** | trust × comprehension | an unfamiliar repository |
| **Cabrera × Bateson** | operationalised × ecological | a framing of the problem |
| **Cabrera × Meadows** | anatomy × behaviour | a system that has to run over time |
| **Brooker × Helland** | dynamics × data | a distributed system at scale |
| **Warfield × MacCárthaigh** | durability × availability | a foundational service at AWS scale |
| **Helland × Stonebraker** | specialization × semantics | a data platform at scale |
| **Hickey × Evans** | simplicity × domain | a domain model in code |
| **Brooker × Kleppmann** | dynamics × foundations | a data-intensive system |
| **Nissenbaum × Solove** | context × taxonomy | a system that handles personal data |
| **Leveson × Hoare** | safety × correctness | a system that must not do harm |

The selection isn't a hall of fame — it's a working toolkit. The first eight pairs trace the core arc
of building something: deciding *which problem is real* and taking the *smallest safe step*
(Brooks × Beck), shaping *boundaries* that stay well-behaved under substitution (Ousterhout × Liskov),
keeping *structure simple* and the *runtime supervised* (Hickey × Armstrong), *specifying* before you
build and *understanding* what you built (Lamport × Thomas/Hunt), making the thing *visible and
touchable* (Kay × Victor), making it *legible at a glance* yet *interrogable in the unknown*
(Tufte × Majors), *documenting the living theory* for the *reader who just arrived* (Naur × Procida),
and finally deciding whether a stranger's repo is *good* and whether you can *trust* it
(Thompson × Feathers). The nine that follow widen that arc — *framing* the problem before you model it
(Cabrera × Bateson, Cabrera × Meadows), holding *data and behaviour at scale* (Brooker × Helland,
Brooker × Kleppmann, Helland × Stonebraker, Warfield × MacCárthaigh), *modelling the domain* itself
(Hickey × Evans), and the two stakes that aren't optional — *privacy* (Nissenbaum × Solove) and
*safety* (Leveson × Hoare). Each thinker earned their place by giving the field a lens that's still
sharp decades later — a question you can ask of any system and get a useful answer.

## How to use them

Each pair file has three parts:

1. **Grounding** — load this first. It sets both lenses in the model's head.
2. **Before — design review** — run against a design doc, spec, or proposal *before* you build.
3. **After — code audit** — run against the implementation or diff *after* you build.

(Two pairs name their passes differently: Naur × Procida runs a *reconciliation* pass and an
*authoring* pass; Thompson × Feathers runs a single *first-contact* pass.)

Typical flow:

```
# Reviewing a design
cat pairs/hickey-armstrong.md | <your LLM> ── then paste your design doc

# Auditing a diff
cat pairs/ousterhout-liskov.md | <your LLM> ── then paste `git diff`
```

`GROUNDINGS.md` is every grounding concatenated into one file, for when you want to paste the whole
set at once. The individual files in `pairs/` are the canonical source.

`Hickey × Armstrong` is marked `default: true` — if you only ever reach for one, reach for that one.

An agent skill in [`skills/luminaries/`](skills/luminaries/SKILL.md) automates the routing: it reads
`INDEX.md` as its routing table, picks the pair by *subject*, *stage*, and *intent*, loads the
grounding plus the right anchor slices, and — for a large artifact — fans a panel of pairs across the
distinct axes it opens and collates them into one verdict. It self-locates the repo, so it works
wherever the repo is cloned (symlink its directory into your agent's skills folder to activate it).

## Anchors — one file per luminary

Every person also has an anchor file in [`luminaries/`](luminaries/): their axiom, the idioms they
coined, their irreducible tenets, the theory behind the work, and the questions their lens makes you
ask. The pairs lean on the model already *knowing* each thinker; the anchors pin that knowledge to
curated text so the lens doesn't drift with whatever a model happens to recall. Each anchor is shaped
by two of its own subjects — Naur (carry the living theory, not just surface mechanics) and Procida
(keep the four reader-needs apart) — per [`luminaries/_TEMPLATE.md`](luminaries/_TEMPLATE.md).

[`INDEX.md`](INDEX.md) maps every pair and luminary, and doubles as the routing table for choosing a
lens by *subject*, *stage* (plan vs review), and *intent* (the four Diátaxis needs).

## The luminaries

Each luminary has an anchor file in [`luminaries/`](luminaries/) carrying their axiom, idioms, tenets,
theory, and lens; [`INDEX.md`](INDEX.md) maps everyone to their pairs and axes. The roster
(alphabetical by surname):

- **[Joe Armstrong](luminaries/armstrong.md)** (1950–2019) — Erlang and OTP; "let it crash", process isolation, supervision trees. The patron saint of fault tolerance.
- **[Gregory Bateson](luminaries/bateson.md)** (1904–1980) — "the pattern which connects"; the map is not the territory; naming a thing is not explaining it.
- **[Kent Beck](luminaries/beck.md)** — Extreme Programming and TDD; tight feedback loops; *make the change easy, then make the easy change*.
- **[Marc Brooker](luminaries/brooker.md)** — AWS serverless; the *dynamics* of distributed systems — backoff-and-jitter, queueing, and metastable failure.
- **[Fred Brooks](luminaries/brooks.md)** (1931–2022) — *The Mythical Man-Month*; *No Silver Bullet* split essential from accidental complexity.
- **[Derek Cabrera](luminaries/cabrera.md)** — DSRP: every thought has Distinctions, Systems, Relationships, and Perspectives.
- **[Eric Evans](luminaries/evans.md)** — *Domain-Driven Design*; ubiquitous language, bounded contexts, the model is the design.
- **[Michael Feathers](luminaries/feathers.md)** — *Working Effectively with Legacy Code*; "legacy code is code without tests"; seams and characterization tests.
- **[Pat Helland](luminaries/helland.md)** — distributed-data architect; data on the outside vs. inside; immutability, idempotence, and apologies over locks.
- **[Rich Hickey](luminaries/hickey.md)** — Clojure and Datomic; *Simple Made Easy*; "complect" as the verb for braiding what should stay apart.
- **[Tony Hoare](luminaries/hoare.md)** (1934–2026) — Quicksort, Hoare logic, CSP; correctness by proof; the null reference, his "billion-dollar mistake".
- **[Alan Kay](luminaries/kay.md)** — Smalltalk and the modern GUI at Xerox PARC; the Dynabook; computing as a medium of thought.
- **[Martin Kleppmann](luminaries/kleppmann.md)** — *Designing Data-Intensive Applications*; the guarantees beneath data systems; CRDTs and local-first.
- **[Leslie Lamport](luminaries/lamport.md)** — logical clocks, Paxos, TLA+ (and LaTeX); name the states, transitions, and invariants before you write code.
- **[Nancy Leveson](luminaries/leveson.md)** — system safety; STAMP/STPA; safety is an emergent control property, not a sum of reliable parts.
- **[Barbara Liskov](luminaries/liskov.md)** — CLU and abstract data types; the Liskov Substitution Principle — a subtype never surprises its callers.
- **[Colm MacCárthaigh](luminaries/maccarthaigh.md)** — AWS (ELB, CloudFront, Route 53, s2n); static stability, constant work, shuffle sharding.
- **[Charity Majors](luminaries/majors.md)** — Honeycomb; observability vs. monitoring — wide high-cardinality events; ask new questions of a live system, and test in production.
- **[Donella Meadows](luminaries/meadows.md)** (1941–2001) — *Thinking in Systems*; stocks, flows, feedback, and leverage points (the obvious one usually pushes backwards).
- **[Peter Naur](luminaries/naur.md)** (1928–2024) — *Programming as Theory Building*; the program is the residue of a theory that lives in people.
- **[Helen Nissenbaum](luminaries/nissenbaum.md)** — contextual integrity; privacy is appropriate information flow, not secrecy or mere consent.
- **[John Ousterhout](luminaries/ousterhout.md)** — *A Philosophy of Software Design*; deep modules — a small interface hiding a lot of capability.
- **[Dave Thomas & Andy Hunt](luminaries/pragmatic-programmers.md)** — *The Pragmatic Programmers*; DRY, tracer bullets, no broken windows, no coincidence-coding.
- **[Daniele Procida](luminaries/procida.md)** — the Diátaxis framework: tutorial, how-to, reference, explanation — mixing them serves none.
- **[Daniel Solove](luminaries/solove.md)** — *A Taxonomy of Privacy*; privacy is plural, not singular; the "nothing to hide" rebuttal.
- **[Michael Stonebraker](luminaries/stonebraker.md)** — Ingres and Postgres; "one size does not fit all" — purpose-built engines beat one general store.
- **[Ken Thompson](luminaries/thompson.md)** — Unix, UTF-8, Go; *Reflections on Trusting Trust* — trust is not transitive.
- **[Edward Tufte](luminaries/tufte.md)** — *The Visual Display of Quantitative Information*; the data-ink ratio, sparklines, small multiples.
- **[Bret Victor](luminaries/victor.md)** — *Inventing on Principle*; immediate, visible feedback; now building Dynamicland.
- **[Andy Warfield](luminaries/warfield.md)** — AWS S3; end-to-end data integrity and formal verification — at scale, durability must be proven, not assumed.

## Install as a Claude Code plugin

This repo is a Claude Code plugin: the `Luminaries` skill ships in
[`skills/luminaries/`](skills/luminaries/SKILL.md) and is declared in
[`.claude-plugin/`](.claude-plugin/). Install it straight from the repo:

```
/plugin marketplace add mattjoyce/luminary-prompts
/plugin install luminaries@luminaries
```

The GitHub repo slug is `luminary-prompts`, but the marketplace and the plugin it carries are both
named `luminaries` — those names come from the manifests in [`.claude-plugin/`](.claude-plugin/),
not the repo slug; hence `luminaries@luminaries`.
(From a local clone instead: `/plugin marketplace add ./path/to/luminary-prompts`.) Once installed,
the skill self-locates the groundings and anchors, routes by *subject*, *stage*, and *intent*, and
runs a single pair, a multi-pair panel, or an anchor lookup. It needs no configuration — the repo's
own `INDEX.md` is its routing table.

## License

Released under [CC0 1.0](LICENSE) — public domain. Use, adapt, and share these prompts freely, with or
without attribution. The ideas belong to the luminaries; the framing is offered back to the commons.
