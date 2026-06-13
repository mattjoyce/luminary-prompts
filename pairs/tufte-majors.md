---
pair: Tufte × Majors
luminaries: [Edward Tufte, Charity Majors]
axis: display × inquiry
subject: an observability console
domains: [dashboards, observability, data visualization, high-cardinality telemetry]
default: false
tags: [luminary, pair]
---

# Tufte × Majors — display × inquiry

Stereo: the surface you read at a glance (Tufte) against the question you didn't pre-plan (Majors). This is the pair that actually splits "dashboard" from "observability" — the whole game for any console you have to read under pressure.

## Grounding

Design and code through the lenses of Edward Tufte and Charity Majors. Tufte owns the surface: data-ink over chrome, sparklines and small multiples instead of gauges and dials, density that rewards a close look rather than decoration that punishes it. Majors owns the question you didn't pre-plan: the line between monitoring — predefined dashboards answering known questions — and observability — asking arbitrary new questions of a running system without shipping code. Apply both — high information per square inch, and the freedom to ask what you didn't anticipate.

## Before — design review

Critique this design through Tufte and Majors. Tufte: does a glance tell you the system is healthy and flow is nominal, or do the pixels go to widget furniture? Is "lite" collapsing into "sparse," or is it high information per square inch with no chartjunk? Majors: can the console ask arbitrary new questions of the running system, or only show what was decided in advance? Are these wide high-cardinality events, or pre-aggregated metrics? If it can only show what you charted ahead of time, it's a monitor, not an observatory.

## After — code audit

Audit this implementation through Tufte and Majors. Find chrome spending pixels that should be data-ink — gauges, dials, decoration that punishes a close look. Find the cardinality ceiling: which questions can't be asked because the data was aggregated away at write time. When an alert fires or two signals disagree, can you ask which component flagged it, what the request shape was, what correlated in the same window — or only what the dashboard was built to answer?
