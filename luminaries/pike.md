---
luminary: Rob Pike
sort: Pike
lived: b. 1956
epithet: data dominates
domains: [systems programming, data structures, language design, simplicity, concurrency]
coinages: [data dominates, rules of programming, n is usually small, concurrency is not parallelism]
pairs: [Pike × Liskov]
axis-roles:
  - "representation × abstraction (Pike × Liskov) — holds representation"
status: anchored
tags: [luminary, person]
---

# Rob Pike — data dominates

> Choose the right data structures and organize them well, and the algorithms will
> almost always be self-evident — data structures, not algorithms, are central to
> programming.

## Anchor

- **Axiom** — The shape of the data decides the shape of the program; get the structures right and the code that operates on them stops being where the difficulty lives.
- **Idioms**
  - *data dominates* — Rule 5: if you've chosen the right data structures and organized things well, the algorithms will almost always be self-evident.
  - *rules of programming* — five rules on where a programmer's attention actually belongs, published in *Notes on Programming in C* (1989).
  - *n is usually small* — fancy algorithms have big constants and more bugs; at the sizes real programs see, simple data and simple algorithms win.
  - *measure, don't guess* — Rules 1 and 2: you can't tell where a program spends its time, so profile before you tune, and don't tune unless one part overwhelms the rest.
  - *concurrency is not parallelism* — concurrency is a way of structuring a program as independently executing parts; parallelism is executing parts simultaneously.
- **Tenets**
  1. Data structures, not algorithms, are central to programming — this is Pike's own gloss on Rule 5, and he means it as a claim about causation, not taste.
  2. If the algorithm is intricate, suspect the representation before you admire the code; complicated control flow is usually the shadow of a structure that doesn't fit.
  3. Use simple algorithms *and* simple data structures. Fancy ones are slower for small n, buggier at every n, and n is usually small.
  4. You cannot predict where the time goes. Measure first; a speed hack installed before a profile is a guess with extra code.
  5. Rule 5 is not original to him — he credits Fred Brooks, whose *show me your tables and the flowcharts will be obvious* says the same thing thirteen years earlier.
  6. Simplicity in a system is something someone has to defend; complexity accumulates on its own.

## Orientation

Rob Pike (b. 1956) worked at Bell Labs on Unix, designed Plan 9 and Inferno, co-invented UTF-8 with Ken Thompson in 1992, co-wrote *The Unix Programming Environment* and *The Practice of Programming* with Brian Kernighan, and co-created Go at Google. His *Rules of Programming*, five short paragraphs from *Notes on Programming in C* (1989), have outlasted most of the textbooks written since. The fifth rule is why he is here: data dominates.

## Doctrine — the theory

Pike's five rules are an argument about attention. Where should a programmer's thinking go? The first four clear the deck by demolishing the places it habitually goes. Not into speed hacks, because you can't tell where the time is spent (Rule 1). Not into tuning, until you've measured and found one part overwhelming the rest (Rule 2). Not into fancy algorithms, which carry big constants and are slow when n is small, and n is usually small (Rule 3). Not into intricate implementations, which are buggier and harder to get right than simple ones (Rule 4). Rule 5 then says where the attention belongs: data.

The claim in Rule 5 is causal, not aesthetic. A good representation doesn't merely accompany simple code, it *produces* it. When the shape of the data matches the shape of the problem, the operations you need turn out to be short traversals of that shape, and the algorithm is whatever is left once you have stopped fighting the representation. The contrapositive is the useful half in review: intricate control flow is a symptom. Nested special cases, a flag that must be checked before another flag, a function that takes a mode parameter to say which of five things it is today, a value converted into a second form on every call — each is the shadow of a structure that doesn't fit, and no amount of refactoring the code will fix a problem that lives in the data.

He does not claim it as his own. *Notes on Programming in C* credits Rule 5 to Brooks, who wrote in 1975 that shown the flowcharts and denied the tables he would remain mystified, but shown the tables he would not usually need the flowcharts. Torvalds later put it more bluntly on the Git list: bad programmers worry about the code, good programmers worry about data structures and their relationships. Three people, three decades, one claim, arrived at independently — which is the strongest evidence the corpus has that it is a fact about programming rather than a preference.

The work is the doctrine applied. UTF-8 was a data structure argument settled in an evening: choose a bit layout from which self-synchronization, ASCII compatibility, and byte-order independence all fall out, and every parser anyone will ever write becomes short. Go ships a deliberately small vocabulary of concrete data shapes — slices, maps, structs, channels — on the bet that a few well-chosen structures beat a rich type system for building things people can read.

**Why the lens:** Pike makes you look at the code you were about to defend and ask whether it is complicated because the problem is, or because the data is in the wrong shape.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Data dominates (Rule 5) | Right data structures make the algorithms self-evident; data structures are central | *Notes on Programming in C* (1989) |
| Rules 1–2 (measure) | You can't tell where time is spent; profile before tuning, and only when one part dominates | *Notes on Programming in C* (1989) |
| Rules 3–4 (n is usually small) | Fancy algorithms have big constants and more bugs; prefer simple data and simple algorithms | *Notes on Programming in C* (1989) |
| UTF-8 | Variable-width encoding whose bit layout yields self-synchronization and ASCII compatibility | With Ken Thompson, 1992 |
| Concurrency is not parallelism | Concurrency structures a program as independent parts; parallelism runs them at once | Talk, 2012 |
| Simplicity as design work | A small, concrete vocabulary of data shapes over an expressive type system | Go (2007– ), Plan 9 |

## The lens

Point this lens at a design or a diff and ask:
- Show me the data structures first. Are they right, or are they what the framework handed you?
- If the representation were correct, would this algorithm be obvious? If yes, the code isn't the problem — the structure is.
- What are the flags, mode parameters, and mutually-exclusive optional fields here? Each one is a representation decision that was never finished.
- Where is data converted into a second shape on every call, and why isn't it stored in that shape?
- Is this the fancy algorithm, and what is n actually? Measured, or assumed?

## Canon

- *Notes on Programming in C* (1989) — the five rules, including Rule 5 and its attribution to Brooks.
- *The Practice of Programming* (1999, with Brian Kernighan) — the rules worked out at book length; the chapter on data structures is the doctrine in practice.
- *The Unix Programming Environment* (1984, with Brian Kernighan) — composition over configuration, from the inside.
- *Concurrency Is Not Parallelism* (2012 talk) — the distinction most concurrency arguments are missing.
- UTF-8 (1992, with Ken Thompson) — a representation chosen so the code that reads it stays short.
- Plan 9 from Bell Labs; Go (2007– , with Thompson and Robert Griesemer) — the doctrine shipped.

## Pairings

- **Pike × Liskov** — *representation × abstraction* — holds *representation*. → [`../pairs/pike-liskov.md`](../pairs/pike-liskov.md)
