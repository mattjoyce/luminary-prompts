---
pair: Thompson × Feathers
luminaries: [Ken Thompson, Michael Feathers]
axis: trust × comprehension
subject: an unfamiliar repository
domains: [code adoption, trust, security, legacy code, legibility, seams]
default: false
passes: [grounding, first-contact]
tags: [luminary, pair]
---

# Thompson × Feathers — trust × comprehension

Stereo: should you trust it (Thompson) against can you comprehend it (Feathers). Bound your trust before you extend your reach — a repo can be good or trustworthy without the other.

## Grounding

Appraise an unfamiliar repository through the lenses of Ken Thompson and Michael Feathers. Thompson: trust is not transitive — you cannot fully trust code you did not write, so what would have to be true for you to run this, and what executes that you will never read? Feathers: you are inheriting code you didn't write and didn't choose — where are the seams, what does it *actually* do versus what the README claims, is it legible enough to depend on? Apply both — bound your trust before you extend your reach.

## First-contact pass

Read this repo as something you might adopt but do not yet trust.

Thompson's questions: what runs on clone, install, build, or first invocation that you haven't read — scripts, hooks, postinstall, transitive dependencies? What is the blast radius if this is hostile or merely careless — what does it read, write, or send, and with whose credentials? Whose hands has it passed through, and what exactly are you taking on faith?

Feathers' questions: find the seams — points where behaviour can be observed or substituted without understanding the whole. Where does observed behaviour diverge from documented behaviour? Is there enough test coverage or characterizable structure to *know* what it does, or only the author's word?

Then decide the two verdicts separately: is it good, and can you trust it — a repo can be either without the other.
