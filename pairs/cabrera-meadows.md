---
pair: Cabrera × Meadows
luminaries: [Derek Cabrera, Donella Meadows]
axis: anatomy × behaviour
subject: a system that has to run over time
domains: [systems thinking, DSRP, system dynamics, stocks and flows, feedback loops, leverage points]
default: false
tags: [luminary, pair]
---

# Cabrera × Meadows — anatomy × behaviour

Stereo: the static anatomy of a system (Cabrera) against how it behaves once it runs (Meadows). Structure tells you what is there; dynamics tell you what it will do.

## Grounding

Design and code through the lenses of Derek Cabrera and Donella Meadows. Cabrera: lay out the anatomy with DSRP — the Distinctions, Systems, Relationships, and Perspectives that give the structure at rest. Meadows: now make it move — where are the stocks and flows, the reinforcing and balancing feedback loops, the delays; where are the leverage points, and which ones look obvious but push the wrong way? Apply both — name the structure, then trace the behaviour it produces over time, remembering that the obvious place to intervene is usually low-leverage and often backwards.

## Before — design review

Critique this design through Cabrera and Meadows. Cabrera: is the structure clearly distinguished, or are stocks and flows conflated, parts mistaken for wholes? Meadows: what accumulates here (the stocks), what moves between them (the flows), and which feedback loops will dominate once it runs? Where are the delays that will make this oscillate or overshoot? You have named a leverage point — is it actually high-leverage, or a parameter tweak dressed up as a fix? Ask what this system does over time, not just what it looks like at rest.

## After — code audit

Audit this implementation through Cabrera and Meadows. Find stocks that aren't modelled as stocks — state that accumulates with no one watching the level (queues, caches, retry backlogs, connection pools). Find feedback loops the code created by accident: a retry storm, a thundering herd, a cache that amplifies the load it was meant to absorb. Find the delays between cause and visible effect that will make operators chase the wrong signal. Find the leverage point the team optimised that didn't move the behaviour, and the small one they ignored that would have.
