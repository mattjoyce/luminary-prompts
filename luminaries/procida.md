---
luminary: Daniele Procida
sort: Procida
epithet: four needs, kept apart
domains: [documentation, technical writing, information architecture, knowledge transfer, developer experience]
coinages: [Diátaxis, tutorial / how-to / reference / explanation]
pairs: [Naur × Procida]
axis-roles:
  - "theory × need (Naur × Procida) — holds need"
status: anchored
tags: [luminary, person]
---

# Daniele Procida — four needs, kept apart

> Documentation is not one thing but four — learning, doing, looking up, and
> understanding — and any page that tries to serve more than one of them serves
> none of them well.

## Anchor

- **Axiom** — A reader always arrives with exactly one of four needs; serve that need and only that need, because the four needs are mutually corrosive when mixed on a page.
- **Idioms**
  - *Diátaxis* — the framework that splits documentation into four needs-based forms arranged on two axes; from the Greek for "across-arrangement."
  - *Tutorial* — learning-oriented; a guided lesson whose author is responsible for the beginner's success, not the beginner.
  - *How-to guide* — task-oriented; a recipe that gets a competent user to a specific result, assuming the skill the tutorial taught.
  - *Reference* — information-oriented; an austere, accurate description of the machinery, consulted in the act of work, not read through.
  - *Explanation* — understanding-oriented; discursive context, the "why" and the alternatives, read away from the keyboard.
- **Tenets**
  1. Documentation should be organised around what the *user is doing*, not around what the *product is*.
  2. The four needs are distinct because their cognitive mode differs — learning vs. working, acquiring skill vs. applying it — and a page can only be in one mode at a time.
  3. Most bad documentation is not badly written; it is the right content serving the wrong need, or two needs at once.
  4. A tutorial that stops to explain, or a reference that stops to teach, has failed both jobs.

## Orientation

Daniele Procida is a core Django developer and a Director of Engineering at Canonical, where documentation is treated as an engineering discipline. In a 2017 PyCon Australia talk, *What Nobody Tells You About Documentation*, he named a failure everyone had felt but no one had isolated: documentation projects collapse not from bad prose but from category confusion — tutorials bleeding into reference, how-tos pausing to explain. The fix he proposed, later formalised as **Diátaxis**, is now adopted across Django, Cloudflare, Gatsby, and much of open source. It is the *need* half of the documentation lens.

## Doctrine — the theory

Procida's move is to stop asking "what should the docs say?" and start asking "what is the reader *doing* when they arrive?" Two questions discriminate every documentation need. Is the reader acquiring skill or applying it? Are they at study, or at work? Cross those axes and four quadrants fall out — tutorial, how-to, reference, explanation — and each quadrant has its own voice, its own success test, and its own failure mode. The structure is not a style guide; it is a map of human need.

The generative claim is that these needs *interfere*. A tutorial's job is to guarantee the beginner's success, so it must withhold detail and choices; a reference's job is to be complete and neutral, so it must offer every detail and make no choices. Put them on the same page and each sabotages the other — the learner drowns in options, the expert wades through hand-holding. This is why "just write good docs" fails: quality is not the variable. *Fit to need* is. Once the needs are separated, each form becomes easy to write, because you finally know what it is for and what it must refuse to do.

The deepest part is the orientation toward the user's *activity* over the product's *structure*. Documentation organised by the system's modules mirrors the code; documentation organised by Diátaxis mirrors the reader's situation. The first is a description of the artifact; the second is a service to the person using it. That inversion — author serves the reader's moment, not the maintainer's mental model — is the whole framework in one turn.

**Why the lens:** every documentation problem dissolves once you ask Procida's question — *which of the four needs is this serving, and is it quietly trying to serve a second?*

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Diátaxis | Four needs-based documentation forms arranged on two axes | *Diátaxis* (diataxis.fr) |
| Tutorial | Learning-oriented lesson; author owns the learner's success | *What Nobody Tells You About Documentation* (2017) |
| How-to guide | Goal-oriented recipe for a competent user; serves a task | same |
| Reference | Information-oriented, austere description; consulted, not read | same |
| Explanation | Understanding-oriented discussion of the why and the alternatives | same |
| The two axes | Acquisition vs. application × study vs. work — these generate the four quadrants | *Diátaxis* (diataxis.fr) |

## The lens

Point this lens at a doc, a README, or a docs tree and ask:
- Which of the four needs does the reader have *right now* — are they learning, doing, looking up, or trying to understand?
- Is this page trying to be two quadrants at once — a tutorial that keeps explaining, a reference that keeps teaching?
- Is this organised around what the product *is*, or around what the user is *doing*?
- Does the tutorial take responsibility for the beginner's success, or does it quietly assume they already know?

## Canon

- *What Nobody Tells You About Documentation* (PyCon Australia, 2017) — the talk that first cleaved documentation into the four needs.
- *Diátaxis* (diataxis.fr) — the canonical, continuously refined statement of the framework and its two axes.
- *The Documentation System* (Divio, c. 2017–2020) — the early write-up that carried the four-quadrant model into widespread open-source adoption.

## Pairings

- **Naur × Procida** — *theory × need* — holds *need*. → [`../pairs/naur-procida.md`](../pairs/naur-procida.md)
