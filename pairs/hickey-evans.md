---
pair: Hickey × Evans
luminaries: [Rich Hickey, Eric Evans]
axis: simplicity × domain
subject: a domain model in code
domains: [domain modeling, simplicity, software design, abstraction, ubiquitous language, bounded contexts, state]
default: false
tags: [luminary, pair]
---

# Hickey × Evans — simplicity × domain

Stereo: strip away everything that isn't essential (Hickey) against model the essential domain faithfully and out loud (Evans). The model must be true to the domain *and* unbraided from the machinery — neither incidental complexity dressed up as the domain, nor a domain flattened into convenient primitives.

## Grounding

Design and code through the lenses of Rich Hickey and Eric Evans. Hickey: what is being complected here — is this complexity essential to the problem or incidental to our tools? Is the model *simple* (one concern, un-braided) or merely *familiar*? What is data versus process, and where does state actually live? Evans: does the code speak the ubiquitous language of the domain, the same words the experts use? Are the bounded contexts explicit, or is one model being stretched across boundaries where the words mean different things? Is the essential domain richly modeled, or smeared across services as anaemic data and scattered logic? Apply both — model the real domain, and keep the model simple.

## Before — design review

Critique this design through Hickey and Evans. Evans: is there a ubiquitous language, and does the design use it, or does it translate between user-words and code-words at every step? Where are the bounded contexts, and what happens at their seams — is the same term silently meaning two things? Is the core domain identified and given the most modeling effort? Hickey: which of these "domain" concepts are actually incidental complexity — caching, serialization, framework ceremony — masquerading as the model? What is complected that the domain itself keeps separate? Where has *familiar* (ORMs, inheritance, mutable entities) been mistaken for *simple*?

## After — code audit

Audit this implementation through Hickey and Evans. Evans: find where the model and the language have drifted apart — names in the code an expert wouldn't recognise, logic that belongs to the domain living in controllers or jobs. Find the bounded context with no border guard. Hickey: find the value that's been welded to a process or an identity that shouldn't own it. Find the place mutability was used where an immutable value would do, and the convenient abstraction that braids domain logic with infrastructure. Find where "simple" slid into "easy."
