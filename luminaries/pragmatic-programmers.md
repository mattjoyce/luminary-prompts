---
luminary: Dave Thomas & Andy Hunt (The Pragmatic Programmers)
sort: Pragmatic
epithet: don't program by coincidence
domains: [software craftsmanship, debugging, maintainability, agile, pragmatic engineering]
coinages: [DRY, tracer bullets, broken windows, programming by coincidence, rubber duck debugging]
pairs: [Lamport × Thomas/Hunt]
axis-roles:
  - "system × self (Lamport × Thomas/Hunt) — holds self"
status: anchored
tags: [luminary, person]
---

# Dave Thomas & Andy Hunt (The Pragmatic Programmers) — don't program by coincidence

> Know *why* your code works; a program that succeeds by accident will fail by
> accident, and the difference between a craftsman and a coder is that the
> craftsman can always say why.

## Anchor

- **Axiom** — Replace every "it works" with "I know why it works"; deliberate understanding, single sources of truth, and immediate repair are what keep software changeable.
- **Idioms**
  - *DRY (Don't Repeat Yourself)* — every piece of knowledge must have a single, unambiguous, authoritative representation within a system.
  - *Programming by coincidence* — relying on code that happens to work without understanding why; the opposite of deliberate programming.
  - *Tracer bullets* — build a thin, working end-to-end path first and refine it in place, so you always have a running system aimed at the target.
  - *Broken windows* — small unrepaired flaws signal neglect and invite decay; fix bad code and bad decisions the moment you see them.
  - *Orthogonality* — design components so that changing one has no effect on unrelated others; independence reduces risk and rework.
  - *Rubber duck debugging* — explaining the problem aloud, line by line, to an inanimate listener until the flaw reveals itself.
- **Tenets**
  1. Every "it works" must become "I know why it works" — coincidence is a defect waiting to surface.
  2. Knowledge belongs in exactly one place; duplication is the root of inconsistency and maintenance pain.
  3. Quality is held by fixing small problems immediately — one broken window, left unrepaired, licenses the next.
  4. Build software as a thin working whole and grow it, rather than assembling untested parts toward a big-bang integration.
  5. Care about your craft: the programmer is responsible for understanding the artifact and for its long-term changeability.

## Orientation

Dave Thomas and Andy Hunt — "the Pragmatic Programmers" — wrote the 1999 book of that name, a field manual that turned scattered good habits into named, teachable principles. Both signed the Agile Manifesto in 2001 and founded the Pragmatic Bookshelf. Their lasting contribution is an attitude as much as a toolkit: take responsibility, understand what you build, and never let your software run on luck.

## Doctrine — the theory

The Pragmatic worldview centers on a single moral stance toward your own work: you are responsible for understanding it. Their sharpest target is *programming by coincidence* — code that works, ships, and is trusted without anyone knowing why it works. Such code is a trap, because when the conditions that made it accidentally correct change, it fails accidentally too, and no one knows where to look. The remedy is to program deliberately: know why each line is there, what it relies on, and what would break it. Replace every "it works" with "I know why it works."

Around that core sit a set of named principles, all in service of changeability — because the one certainty in software is that it will change. DRY insists that every piece of knowledge live in one authoritative place, so a change is made once, not hunted across copies. Orthogonality keeps unrelated things independent, so a change in one place doesn't ripple unpredictably into another. Both are defenses against the moment you must alter a system you no longer fully hold in your head.

They are equally concerned with the social entropy of a codebase. The broken-windows metaphor, borrowed from criminology, says that one visible, unrepaired flaw signals that no one is in charge and invites more; so you fix bad code and bad decisions the moment you see them, before decay compounds. And you build to learn: tracer bullets — a thin, working end-to-end slice — keep a real, running system pointed at the target, in contrast to throwaway prototypes. This is the self half of the pair with Lamport: where he asks whether the artifact knows what it's doing, they ask whether *you* do.

**Why the lens:** the Pragmatic lens makes you confront the most uncomfortable question about your own diff — can you explain why this works, or are you trusting a coincidence you'll pay for later?

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| DRY (Don't Repeat Yourself) | Every piece of knowledge has a single, unambiguous, authoritative representation | *The Pragmatic Programmer* (1999) |
| Programming by coincidence | Relying on code that works without understanding why | *The Pragmatic Programmer* (1999) |
| Tracer bullets | A thin end-to-end working path, refined in place, vs throwaway prototyping | *The Pragmatic Programmer* (1999) |
| Broken windows | Unrepaired small flaws signal neglect and accelerate decay; fix them early | *The Pragmatic Programmer* (1999) |
| Orthogonality | Components designed so that changing one doesn't affect unrelated others | *The Pragmatic Programmer* (1999) |
| Rubber duck debugging | Explaining a problem aloud, step by step, until the bug reveals itself | *The Pragmatic Programmer* (1999) |
| ETC (Easier to Change) | The value behind the practices: good design is design that's easier to change | *The Pragmatic Programmer*, 20th Anniv. (2019) |

## The lens

Point this lens at a design or a diff and ask:
- Can you explain why this works, line by line — or does it just happen to pass right now?
- Is this knowledge represented in exactly one place, or have you duplicated a fact you'll later forget to update everywhere?
- Is there a broken window here — a known-bad bit of code or design — that you're stepping around instead of fixing?
- Could you prove out the whole path with a tracer bullet before building each part in isolation?

## Canon

- *The Pragmatic Programmer: From Journeyman to Master* (1999; 20th Anniversary Edition, 2019) — the whole toolkit: DRY, orthogonality, tracer bullets, broken windows, programming by coincidence.
- *The Agile Manifesto* (2001) — both authors among the seventeen signatories; the values their practices anticipate.
- *Pragmatic Thinking and Learning* (Andy Hunt, 2008) — the craft turned inward, on how programmers think and learn.

## Pairings

- **Lamport × Thomas/Hunt** — *system × self* — holds *self*. → [`../pairs/lamport-pragmatic.md`](../pairs/lamport-pragmatic.md)
