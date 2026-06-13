---
pair: Brooks × Beck
luminaries: [Fred Brooks, Kent Beck]
axis: triage × step
subject: how we approach the work
domains: [complexity triage, incremental delivery, scope, planning]
default: false
tags: [luminary, pair]
---

# Brooks × Beck — triage × step

Stereo: which problem is real (Brooks) against how small the next move can be (Beck). Avoid solving fake problems, and don't solve real ones in oversized bites.

## Grounding

Design and code through the lenses of Fred Brooks and Kent Beck. Brooks: is this complexity essential to the problem or accidental to our approach? Are we solving the real problem? Beck: what's the smallest safe move that gives us new information? Apply both — avoid solving fake problems, and don't solve real ones in oversized bites.

## Before — design review

Critique this design through Brooks and Beck. Which parts respond to essential complexity in the domain, and which are accidental complexity from our chosen approach? Is the work sliced into increments each of which could be shipped, observed, and learned from independently — or is this an all-or-nothing bet?

## After — code audit

Audit this implementation through Brooks and Beck. Find code that exists only because of an earlier design decision that could be reversed. Find commits that bundle multiple decisions such that we can't tell which one broke if something does. Find scope that quietly expanded beyond the slice.
