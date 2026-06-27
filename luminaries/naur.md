---
luminary: Peter Naur
sort: Naur
lived: 1928–2024
epithet: the theory is the program
domains: [program theory, knowledge transfer, language design, documentation, software epistemology]
coinages: [Programming as Theory Building, Backus–Naur Form, datalogy]
pairs: [Naur × Procida]
axis-roles:
  - "theory × need (Naur × Procida) — holds theory"
status: anchored
tags: [luminary, person]
---

# Peter Naur — the theory is the program

> A program is the *residue* of a theory held in the minds of the people who built
> it; the source code is what's left over once the understanding has been written
> down — and the understanding is the part that actually matters.

## Anchor

- **Axiom** — A program is the residue of a theory that lives in people, not files; lose the theory and the code becomes unmaintainable no matter how complete the documentation.
- **Idioms**
  - *Programming as theory building* — programming is the act of building a theory of how a problem and its solution fit, not the act of producing text.
  - *Theory (Ryle's sense)* — a person's ability to explain, justify, extend, and respond to the unforeseen — knowledge that cannot be fully reduced to rules or documents.
  - *Residue* — the source and docs are what remains after the theory; valuable, but not the thing itself.
  - *Program revival* — a "dead" program (its theory lost) cannot truly be revived by reading it; a new theory must be built, which is rarely cheaper than rebuilding.
  - *Datalogy* — his preferred name for the field, emphasising data and human activity over "computer" and "science."
- **Tenets**
  1. The primary asset of a software project is the team's theory, and it is destroyed by turnover, not by time.
  2. Documentation can point at the theory but can never contain it — it is a residue, useful only to someone building the theory anew.
  3. Modifications made without the theory degrade the program, even when each change "works."
  4. Method and process cannot substitute for understanding; you cannot proceduralise the having of a theory.

## Orientation

Peter Naur (1928–2024) was a Danish astronomer-turned-computing-pioneer, co-author of the Algol 60 report — the **N** in Backus–Naur Form — and the 2005 Turing Award laureate for the design and definition of Algol 60. Late in his career he wrote a short, unassuming essay, *Programming as Theory Building* (1985), that quietly reframed what software *is*. Where everyone else treated the code as the product, Naur argued the code is only the residue of something that lives in human heads. It is the most important idea in the project's documentation lens, and the one most teams discover only after they've lost the theory.

## Doctrine — the theory

Naur borrows from the philosopher Gilbert Ryle: to *have a theory* is to be able to do things — explain why the system is the way it is, say what is essential versus incidental, respond sensibly to a situation no one anticipated. That capability is not contained in the source code, the design docs, or the wiki. It lives in the people who built the thing, as a structured understanding of how the world's problem maps onto the program's solution. The text is downstream of the theory; it is a residue.

The consequence is bleak and clarifying at once. A program's death is not entropy in the code — it is the loss of the team that held the theory. You can have pristine, complete, up-to-date documentation and still own a dead program, because no document confers the ability to extend the system into the unforeseen. Naur's word for the fantasy that it could is *method*: the belief that process and paperwork can stand in for understanding. They cannot. A new developer reading every page does not thereby acquire the theory; they must *rebuild* it, and rebuilding is often no cheaper than starting over.

This is why the Naur half of the documentation lens is so sharp, and so uncomfortable for a project that wants to "anchor" theory in files. Naur would say: you cannot anchor a theory in a document — you can only leave a residue good enough that a reader can rebuild the theory faster. That is the honest job of every Luminary file here. It is not a container for the lens; it is scaffolding for someone reconstructing the lens in their own head.

**Why the lens:** every other documentation question is mechanical until you ask Naur's — *does this transmit the living theory, or only describe surface mechanics that have already drifted from it?*

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Programming as theory building | Programming is constructing a theory of problem-to-solution fit; code is its residue | *Programming as Theory Building* (1985) |
| Theory (Ryle's sense) | The ability to explain, justify, and extend a system — irreducible to rules or text | *Programming as Theory Building* (1985) |
| Program death & revival | A program whose theory is lost cannot be revived by reading; the theory must be rebuilt | *Programming as Theory Building* (1985) |
| Backus–Naur Form (BNF) | A formal notation for the grammar of a programming language | Algol 60 report (1960/63) |
| Datalogy | His proposed name for the discipline, centring data and human activity | Naur's writings, 1960s onward |

## The lens

Point this lens at a design, a doc, or a diff and ask:
- If everyone who built this left tomorrow, what understanding leaves with them — and is any of it written *anywhere*?
- Does this document transmit the theory of *why*, or only the mechanics of *what* — and have the mechanics already drifted from the why?
- If only this doc survived, could a competent stranger rebuild the theory from it, or only mimic the surface?
- Where is a change being made by someone who lacks the theory — and how would we even tell?

## Canon

- *Programming as Theory Building* (1985) — the essay; later collected in *Computing: A Human Activity* (1992). The whole lens is here, in fewer than ten pages.
- *Report on the Algorithmic Language Algol 60* (1960; revised 1963) — Naur as editor; the origin of BNF as a precise way to define language.
- *Computing: A Human Activity* (1992) — his collected papers; the title is itself the argument.

## Pairings

- **Naur × Procida** — *theory × need* — holds *theory*. → [`../pairs/naur-procida.md`](../pairs/naur-procida.md)
