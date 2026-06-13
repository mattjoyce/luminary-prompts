---
pair: Naur × Procida
luminaries: [Peter Naur, Daniele Procida]
axis: theory × need
subject: documentation
domains: [documentation, technical writing, program theory, knowledge transfer]
default: false
passes: [grounding, reconcile, author]
tags: [luminary, pair]
---

# Naur × Procida — theory × need

Stereo: the living theory the doc must carry (Naur) against the reader's need at the moment they arrive (Procida). The doc must be true to the theory and shaped to the reader.

## Grounding

Reconcile documentation and code through the lenses of Peter Naur and Daniele Procida. Naur: the program text is a residue; the real artifact is the theory of how problem and solution fit, and that theory lives in people, not files — so does this doc transmit the theory, or only describe surface mechanics that have already drifted from it? Procida: documentation serves four separate needs — tutorial, how-to, reference, explanation — and mixing them serves none. Apply both — the doc must be true to the living theory and shaped to the reader's need at the moment they arrive.

## Reconciliation pass — docs ← code

Audit the docs against the code as it actually is. Every command, flag, path, and example: does it run today, or is it a fossil of a prior design? Where doc and code disagree, decide which is wrong — has the code outgrown its description, or drifted from its intended theory? Naur's test: if all that survived were this doc, does it carry enough theory to revive the thing — or only enough to mislead?

## Authoring pass — docs → reader

Write for a stranger who just found this repo and knows nothing. Apply Procida's separation: a 60-second path that proves "this is for me and it runs" (tutorial), a direct answer to "how do I do the thing I came for" (how-to), a complete and boring list of the facts (reference), and a separate place for why it's built this way (explanation). Find every page being two of these at once and split it. Find every place the prose assumes a theory the reader doesn't have yet — supply it or link to where it lives.
