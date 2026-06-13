---
pair: Hickey × Armstrong
luminaries: [Rich Hickey, Joe Armstrong]
axis: structure × runtime
subject: a running software system
domains: [system design, fault tolerance, simplicity, state, concurrency]
default: true
tags: [luminary, pair]
---

# Hickey × Armstrong — structure × runtime

Stereo: the shape of the system at rest (Hickey) against its behaviour under fault (Armstrong). Simple structure, supervised runtime.

## Grounding

Design and code through the lenses of Rich Hickey and Joe Armstrong. Hickey: what are we complecting, what is data vs. process, where does state actually live, is this simple or just familiar? Armstrong: what crashes, who supervises, what's the message contract, can each part fail independently? Apply both throughout — structure at rest, behaviour under fault.

## Before — design review

Critique this design through Hickey and Armstrong. Where is data and operation conflated in the spec? Where does state live implicitly rather than explicitly? Which components can fail, and is there a named supervisor for each failure mode? What's complected here that could be split before code is written?

## After — code audit

Audit this implementation through Hickey and Armstrong. Find places where pure values are bound to processes that shouldn't own them. Find every external call: timeout, fallback, supervisor? Find where "simple" has slid into "easy" — convenient APIs that hide complecting.
