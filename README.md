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

The selection isn't a hall of fame — it's a working toolkit. Between them these sixteen cover the
full arc of building something: deciding *which problem is real* and taking the *smallest safe step*
(Brooks × Beck), shaping *boundaries* that stay well-behaved under substitution (Ousterhout × Liskov),
keeping *structure simple* and the *runtime supervised* (Hickey × Armstrong), *specifying* before you
build and *understanding* what you built (Lamport × Thomas/Hunt), making the thing *visible and
touchable* (Kay × Victor), making it *legible at a glance* yet *interrogable in the unknown*
(Tufte × Majors), *documenting the living theory* for the *reader who just arrived* (Naur × Procida),
and finally deciding whether a stranger's repo is *good* and whether you can *trust* it
(Thompson × Feathers). Each thinker earned their place by giving the field a lens that's still sharp
decades later — a question you can ask of any system and get a useful answer.

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

## The luminaries

**Rich Hickey** — Creator of Clojure and Datomic. His talk *Simple Made Easy* drew the line between
*simple* (un-braided, one concern) and *easy* (familiar, near to hand), and gave us "complect" as the
verb for the sin of braiding things that should stay apart.

**Joe Armstrong** (1950–2019) — Co-creator of Erlang and the OTP platform. Championed "let it crash":
build for failure, isolate processes, and put a supervisor over every part so the system heals instead
of defending. The patron saint of fault tolerance.

**John Ousterhout** — Stanford professor; creator of Tcl/Tk and co-author of the Raft consensus
algorithm. *A Philosophy of Software Design* argues for **deep modules** — a small interface hiding a
lot of capability — over shallow ones that just relocate complexity.

**Barbara Liskov** — MIT professor and Turing Award laureate. Designed CLU and pioneered abstract data
types. The **Liskov Substitution Principle** is hers: a subtype must honour everything its supertype
promised, so a substitute never surprises its callers.

**Fred Brooks** (1931–2022) — Managed IBM's System/360 and wrote *The Mythical Man-Month*. His essay
*No Silver Bullet* split **essential** complexity (inherent to the problem) from **accidental**
complexity (an artifact of our tools and choices) — still the first question worth asking.

**Kent Beck** — Created Extreme Programming and rediscovered Test-Driven Development; a signatory of the
Agile Manifesto. Known for tight feedback loops and the maxim: *make the change easy, then make the
easy change.*

**Leslie Lamport** — Turing Award laureate for foundational work in distributed systems (logical
clocks, Paxos). Creator of the **TLA+** specification language — and of LaTeX. Insists you name the
states, transitions, and invariants before you write code.

**Dave Thomas & Andy Hunt** — The Pragmatic Programmers, authors of the book of that name and
signatories of the Agile Manifesto. Gave the craft DRY, "don't live with broken windows", tracer
bullets, and a horror of **coincidence-coding** — code that works for reasons you can't explain.

**Alan Kay** — Turing Award laureate; led the team at Xerox PARC that built Smalltalk, the modern GUI,
and the overlapping-window interface. Coined much of object-oriented programming and the **Dynabook**
vision of computing as a personal medium of thought.

**Bret Victor** — Interaction designer and researcher behind *Inventing on Principle* and *Learnable
Programming*, now building Dynamicland. Argues that creators deserve **immediate, visible feedback** —
you should be able to see and touch the thing you're making, not imagine it.

**Edward Tufte** — Statistician and the founding authority on information design. *The Visual Display
of Quantitative Information* gave us the **data-ink ratio**, "chartjunk", sparklines, and small
multiples: maximum information per square inch, minimum decoration.

**Charity Majors** — Co-founder and CTO of Honeycomb. The clearest voice on **observability** versus
monitoring: instrument wide, high-cardinality events so you can ask new questions of a live system
without shipping code — and yes, test in production.

**Peter Naur** (1928–2024) — Turing Award laureate, co-author of the Algol 60 report (the N in
Backus–Naur Form). His essay *Programming as Theory Building* reframes a program as the *residue* of a
theory that lives in the team's heads — lose the theory and the code becomes unmaintainable.

**Daniele Procida** — Creator of the **Diátaxis** documentation framework, which separates docs into
four distinct needs — tutorial, how-to, reference, explanation — and warns that mixing them serves
none. Widely adopted across the Django and open-source worlds.

**Ken Thompson** — Turing Award laureate; co-creator of Unix, the B language, and Go, plus UTF-8 and
the original regular-expression engine. His lecture *Reflections on Trusting Trust* proved that **trust
is not transitive** — you can't fully trust code you didn't write all the way down.

**Michael Feathers** — Author of *Working Effectively with Legacy Code*, where "legacy code" is simply
code without tests. Gave us **seams** — places to observe or substitute behaviour without understanding
the whole — and characterization tests for code you've inherited.

**Marc Brooker** — Senior Principal Engineer at AWS, working on Lambda, EC2, and the foundations of
serverless. Writes prolifically on the *dynamics* of distributed systems — retries and backoff,
queueing, simulation, formal methods, and **metastable failures**: the stable-but-broken states a
system falls into under load and can't climb out of without intervention.

**Pat Helland** — Distributed-systems architect (Tandem, Microsoft, Amazon, Salesforce). His essays —
*Life Beyond Distributed Transactions*, *Data on the Outside vs. Data on the Inside*, *Memories,
Guesses, and Apologies* — reframed scale around **immutability, idempotence, and apologies**: at size
you trade distributed locks for data that means the same thing wherever it lands.

**Andy Warfield** — VP and Distinguished Engineer at AWS, working on S3. A virtualization pioneer
(Xen) turned authority on storage at scale, championing **end-to-end data integrity** and the formal
verification of storage nodes — because at S3's scale the one-in-a-billion corruption happens every
hour, so durability must be *proven*, not assumed.

**Colm MacCárthaigh** — Senior Principal Engineer at AWS (ELB, CloudFront, Route 53, s2n). The clearest
voice on **availability under stress**: static stability (keep serving when a dependency is gone),
constant-work designs that don't change mode under load, and shuffle sharding to bound blast radius so
one bad tenant can't take down everyone.

## License

Released under [CC0 1.0](LICENSE) — public domain. Use, adapt, and share these prompts freely, with or
without attribution. The ideas belong to the luminaries; the framing is offered back to the commons.
