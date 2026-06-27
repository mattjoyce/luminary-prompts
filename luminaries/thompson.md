---
luminary: Ken Thompson
sort: Thompson
lived: b. 1943
epithet: trust is not transitive
domains: [operating systems, trust, security, language design, software tools]
coinages: [Reflections on Trusting Trust, UTF-8]
pairs: [Thompson × Feathers]
axis-roles:
  - "trust × comprehension (Thompson × Feathers) — holds trust"
status: anchored
tags: [luminary, person]
---

# Ken Thompson — trust is not transitive

> You cannot trust code you did not totally create yourself — because every layer
> beneath your source, the compiler and the machine, is a program someone else
> wrote, and a program can be made to lie about exactly what it did.

## Anchor

- **Axiom** — Trust does not compose: trusting the people and tools upstream of your code does not transfer to trusting the code they hand you, and no amount of source review reaches the layers below the source.
- **Idioms**
  - *Reflections on Trusting Trust* — the 1984 Turing lecture proving a compiler can hide a self-perpetuating backdoor that leaves no trace in any source code.
  - *The trusting-trust attack* — corrupt the compiler so it injects a flaw into a target program *and* into every future compiler it builds, then delete the malicious source; the binary keeps the secret.
  - *Trust is not transitive* — the principle that confidence in a chain of provenance must be earned link by link, not inherited.
  - *UTF-8* — the variable-width, ASCII-compatible Unicode encoding he designed with Rob Pike, written on a New Jersey diner placemat.
- **Tenets**
  1. The thing you must trust is not the artifact in front of you but the entire chain — toolchain, dependencies, hardware — that produced and runs it.
  2. Reading the source is necessary and never sufficient; what executes is always larger than what you read.
  3. The right security question is not "is this correct?" but "what runs here that I will never see, and whose hands has it passed through?"
  4. Simplicity and small tools are a trust strategy: the less there is, the more of it a person can actually account for.

## Orientation

Ken Thompson (b. 1943) shared the 1983 Turing Award with Dennis Ritchie for Unix, which he co-created at Bell Labs. He designed the B language, the first practical regular-expression engine, and — decades later, with Rob Pike and Robert Griesemer — the Go language; with Pike he also designed UTF-8. His Turing lecture, *Reflections on Trusting Trust*, is three pages that quietly detonate the assumption underneath all software security. He is the *trust* half of the unfamiliar-repository lens.

## Doctrine — the theory

The argument is a constructive proof. Thompson shows how to teach a C compiler to recognise when it is compiling the `login` program and silently insert a backdoor. Then the harder step: teach the compiler to recognise when it is compiling *itself*, and to re-insert both the backdoor and this recognition logic into the new compiler. Now remove the cheat from the source. The clean source compiles to a dishonest binary that perpetuates the attack forever. Audit every line of every program and you will find nothing — the betrayal lives below the level you are reading.

The moral generalises far past compilers. Provenance, not text, is the unit of trust, and provenance does not flow downhill: that you trust the maintainer does not mean you can trust the postinstall script, the transitive dependency, the model weights, the microcode. Each is a program you did not write, executing on your behalf, with your credentials. Thompson's question reframes "have I read this code?" — a question about you — into "what executes here that I have *not* read, and why do I extend my trust to the chain that made it?" — a question about the world.

This is why the lens stays sharp as the stack deepens. The modern developer clones a repo, runs install, pulls a hundred dependencies, and invokes a model none of which they have read — a vastly larger surface of unread execution than Thompson faced, governed by exactly his principle. The discipline is not paranoia; it is bounding your trust honestly before you extend your reach, and knowing the difference between code that is *good* and code you can *account for*.

**Why the lens:** Thompson turns the comfortable question "have I read it?" into the uncomfortable one that actually governs your safety — *what runs here that I never will read, and what is that chain of hands worth?*

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Reflections on Trusting Trust | Proof that a compiler can hide a self-perpetuating backdoor invisible in all source | *Reflections on Trusting Trust* (1984) |
| Trust is not transitive | Confidence in upstream people/tools does not transfer to the code they deliver | same |
| The compiler backdoor | Malicious compiler injects a flaw into a target and into future compilers, then erases its own source | same |
| UTF-8 | Variable-width, ASCII-compatible Unicode encoding (with Rob Pike) | Plan 9 / Unix, 1992 |
| Unix | The operating system co-created with Dennis Ritchie; origin of the small-tools philosophy | Bell Labs, 1969–70 |
| Original regex engine | First practical regular-expression search via on-the-fly NFA construction | Thompson, CACM 1968 |

## The lens

Point this lens at a repo, a dependency, or a build you are about to run and ask:
- What executes on clone, install, build, or first invocation that you have *not* read — scripts, hooks, postinstall, transitive deps?
- What is the blast radius if this is hostile or merely careless — what does it read, write, or send, and with whose credentials?
- Whose hands has this passed through, and which links in that chain are you taking purely on faith?
- Is your trust in this code, or in the *reputation* of whoever handed it to you — and are those the same thing?

## Canon

- *Reflections on Trusting Trust* (1984) — the ACM Turing Award lecture; the entire trust lens in three pages.
- *The UNIX Time-Sharing System* (Ritchie & Thompson, 1974) — the system and the philosophy of small, composable, accountable tools.
- *Regular Expression Search Algorithm* (CACM, 1968) — the original regex engine; precision built from the smallest possible mechanism.

## Pairings

- **Thompson × Feathers** — *trust × comprehension* — holds *trust*. → [`../pairs/thompson-feathers.md`](../pairs/thompson-feathers.md)
