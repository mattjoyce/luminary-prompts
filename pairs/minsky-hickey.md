---
pair: Minsky × Hickey
luminaries: [Yaron Minsky, Rich Hickey]
axis: constraint × openness
subject: a data model others will extend
domains: [data modeling, type systems, invariants, schema design, API evolution, simplicity, generated code]
default: false
tags: [luminary, pair]
---

# Minsky × Hickey — constraint × openness

Stereo: make the illegal state impossible to write down (Minsky) against don't weld the data to a shape you'll regret (Hickey). Constraint stops the wrong value from ever existing; openness stops the model calcifying around what you understood on the first day. Held together they answer the question a codebase being extended fast — by new hires, by contractors, by generative tools — has to answer: what must the model refuse, and what must it leave free?

## Grounding

Design and code through the lenses of Yaron Minsky and Rich Hickey. Minsky: count the values this type admits and compare that to the states the domain allows — every difference is a bug that has been written and not yet triggered. Make illegal states unrepresentable rather than validated; put the invariant in the shape, not in a comment, a check, or a reviewer's memory. Code for exhaustiveness, so a new case becomes a compile error at every site that must change rather than a grep. Hickey: and do it without complecting. Is this a value or a place? Has the essential information been braided together with a type, a class, an ordering, or a schema the domain never asked for? A closed model that must be edited in five modules to add one field has traded one rigidity for another — specify what a piece of data *requires*, not everything it may contain. Apply both — the wrong state should be unwritable, and the right extension should not need permission from every module that ever touched the data.

## Before — design review

Critique this design through Minsky and Hickey. Minsky: for each record and each enumeration, list the states it admits. Which combinations does the domain forbid, and what actually prevents them — the type, or a validation function, a comment, a convention, a code review? Which two fields are only meaningful together and should therefore be one variant rather than two optionals? When someone adds a case next quarter, what breaks: the compiler, or production? Hickey: which of these constraints is essential to the domain, and which is an artifact of the language, the ORM, or the serializer? What is being complected — value with identity, data with schema, information with the type that carries it? Where would a required field be better expressed as a requirement of the consumer than a property of the data? Then ask both of the same model: does each constraint prevent a real error, or only a shape nobody has thought of yet?

## After — code audit

Audit this implementation through Minsky and Hickey. Minsky: find the runtime check that re-establishes an invariant the type should have guaranteed, then find the second and third places the same check appears. Find the optional field that is never actually absent, and the one whose absence means three different things. Find the switch with a default case quietly swallowing a variant nobody handled. Hickey: find the value given an identity it never needed, and the closed schema that forced an unrelated module to change. Find where *easy* won over *simple* — the framework type, the inherited base class, the mutable record passed around as shared state. Then the joint question, which is the one that matters for fast-moving or generated code: if a new contributor or a coding agent added a field, a case, or a caller here tomorrow, would the compiler catch the mistakes the domain forbids, and would the code they never opened still be correct? Every *no* marks a place the model was too loose in one direction and too tight in the other.
