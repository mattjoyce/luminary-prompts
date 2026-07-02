---
pair: Lamport × Thomas/Hunt
luminaries: [Leslie Lamport, Dave Thomas & Andy Hunt (The Pragmatic Programmers)]
axis: system × self
subject: knowing what the artifact does and why
domains: [formal specification, state machines, invariants, debugging, craftsmanship]
default: false
tags: [luminary, pair]
---

# Lamport × Thomas/Hunt — system × self

Stereo: the artifact knows what it's doing (Lamport) against you know what you're doing (Thomas/Hunt). Specification on one channel, understanding on the other.

## Grounding

Design and code through the lenses of Leslie Lamport and the Pragmatic Programmers. Lamport: name the states, the transitions, the invariants — specify before implementing. Thomas/Hunt: no coincidence-coding, no voodoo, debug to understanding. Apply both — the artifact knows what it's doing, and you know what you're doing.

## Before — design review

Critique this design through Lamport and Thomas/Hunt. Are the states finite and enumerable, the legal transitions named, the invariants explicit? Which assumptions are stated and which are silent? If you couldn't defend a line of the spec under questioning, it shouldn't be in the spec yet.

## After — code audit

Audit this implementation through Lamport and Thomas/Hunt. Find unreachable states, ignored transitions, invariants that are hoped for rather than checked. Find lines that work but whose *why* is unclear — that's coincidence-coding. Replace every "it works" with "I know why it works."
