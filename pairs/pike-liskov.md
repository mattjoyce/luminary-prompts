---
pair: Pike × Liskov
luminaries: [Rob Pike, Barbara Liskov]
axis: representation × abstraction
subject: the shape of the data in a system
domains: [data structures, data modeling, representation, abstraction, interface design, information hiding, contracts]
default: false
tags: [luminary, pair]
---

# Pike × Liskov — representation × abstraction

Stereo: choose the representation as if the whole design turns on it (Pike) against hide it as if no one may ever know what you chose (Liskov). Both are true and they pull opposite ways — the shape of the data decides what the code has to become, and the shape of the data is exactly what callers must never depend on. What survives the tension is a structure picked with the care Pike demands, sitting behind a boundary as tight as Liskov requires.

## Grounding

Design and code through the lenses of Rob Pike and Barbara Liskov. Pike: data dominates — is this algorithm complicated because the problem is, or because the data is in the wrong shape? If the representation were right, would the control flow be self-evident? Find the flags, the mode parameters, the mutually-exclusive optional fields; each is the shadow of a structure that doesn't fit. Prefer simple data and simple algorithms, because fancy ones carry big constants and more bugs and n is usually small. Liskov: none of that shape may leak. What is this type's contract — what it requires, what it promises, what it keeps invariant — and could the representation be swapped tomorrow without a caller noticing? Does any client depend on ordering, layout, or an internal the interface never promised? Apply both — get the structure right, then make sure nobody can tell what you got right.

## Before — design review

Critique this design through Pike and Liskov. Pike: name the core data structures first, before any interface, service boundary, or class. Draw them. Does the shape match the problem, or the framework that was already in the repo? If the algorithms don't fall out of the structures as obvious traversals, the structures are wrong, so say what the right ones would be. Find every boolean flag, mode parameter, and nullable field whose legal combinations are a subset of what the type admits — each is a representation decision the design hasn't finished making. Liskov: for each of those structures, what is exported and what is hidden? Write the contract of every boundary — required, promised, invariant — then describe a second implementation that would satisfy it. If you can't describe one, the interface has been drawn around the current representation rather than around the meaning. Where does the design let a caller observe ordering, identity, or layout it was never promised?

## After — code audit

Audit this implementation through Pike and Liskov. Pike: find the function whose complexity is a symptom — the nested special cases, the loop carrying three flags, the parameter selecting among five behaviours — and trace it back to the structure that forced it. Find data converted into a second shape on every call because the stored shape was wrong. Find the fancy algorithm running on n=12. Liskov: find the caller that reached through the abstraction — the one that knows the list is sorted, that the id is sequential, that the map iterates in insertion order — and decide whether the interface promised that or the client merely noticed it. Find the subtype that demands more of its callers or promises less to them than the type it stands in for. Then the joint question: if you replaced this representation with the better one Pike is pointing at, how many call sites would break — and is that number a fact about the change, or an indictment of the boundary?
