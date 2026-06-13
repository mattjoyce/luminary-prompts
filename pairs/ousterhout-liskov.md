---
pair: Ousterhout × Liskov
luminaries: [John Ousterhout, Barbara Liskov]
axis: surface × substitution
subject: the module boundary
domains: [interface design, abstraction, contracts, modularity]
default: false
tags: [luminary, pair]
---

# Ousterhout × Liskov — surface × substitution

Stereo: the shape of the boundary (Ousterhout) against the promise it keeps (Liskov). Good boundaries are well-cut and well-behaved.

## Grounding

Design and code through the lenses of John Ousterhout and Barbara Liskov. Ousterhout: is this interface deep or shallow, hiding complexity or just relocating it? Liskov: what does this component promise, and does every implementation honour the contract under substitution? Apply both — good boundaries are well-cut and well-behaved.

## Before — design review

Critique this design through Ousterhout and Liskov. Are the interfaces deep (small surface, large capability) or shallow (thin behaviour, broad surface)? Is each contract — preconditions, postconditions, invariants — stated, or merely implied? If a different implementation slotted in tomorrow, where would callers break?

## After — code audit

Audit this implementation through Ousterhout and Liskov. Look for parameter shapes and error types that leak internals. Look for implementations that honour the contract only in the happy path. Look for callers that depend on behaviour the interface never actually promised.
