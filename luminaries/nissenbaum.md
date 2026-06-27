---
luminary: Helen Nissenbaum
sort: Nissenbaum
epithet: privacy is appropriate information flow
domains: [privacy, information ethics, contextual integrity, data governance, surveillance]
coinages: [contextual integrity, context-relative informational norms, transmission principles]
pairs: [Nissenbaum × Solove]
axis-roles:
  - "context × taxonomy (Nissenbaum × Solove) — holds context"
status: anchored
tags: [luminary, person]
---

# Helen Nissenbaum — privacy is appropriate information flow

> Privacy is not secrecy and not control — it is the preservation of context-relative
> informational norms; a flow violates privacy when it breaches the norms appropriate
> to the context it occurs in, no matter how public the data or how freely it was given.

## Anchor

- **Axiom** — Privacy is the right to *appropriate* flow of personal information; appropriateness is judged against the entrenched norms of the social context the information lives in, not against secrecy or consent.
- **Idioms**
  - *Contextual integrity* — privacy is preserved when information flows conform to the norms of their context, and breached when they don't.
  - *Context-relative informational norms* — every social context (health, friendship, employment, civic life) carries its own entrenched expectations about which flows are appropriate.
  - *Transmission principle* — the constraint on a flow: the terms under which information moves from one party to another (confidence, consent, reciprocity, compulsion, entitlement).
  - *The five parameters* — every flow is fully described by data subject, sender, recipient, information type, and transmission principle; alter any one and you may have changed whether it is appropriate.
  - *Appropriate flow* — the unit of privacy: not whether a flow exists, but whether it fits its context.
- **Tenets**
  1. Privacy is neither keeping information secret nor controlling it — it is whether a flow matches the norms of its context.
  2. No information is inherently "private" or "public"; appropriateness depends on subject, sender, recipient, type, and transmission principle together.
  3. A fully consensual flow can still violate privacy if it breaches the transmission principle its context entrenched.
  4. New technologies threaten privacy precisely when they re-route flows across contexts that evolved separate norms.
  5. Context norms are not arbitrary tastes; they serve the purposes and values of the context, and that is the ground on which a flow is judged.

## Orientation

Helen Nissenbaum is a philosopher of information technology and a professor of information science whose 2010 book *Privacy in Context* gave the modern privacy debate its most-used framework. Where law and policy oscillated endlessly between "privacy is secrecy" and "privacy is control," she reframed it as **contextual integrity**: privacy is the appropriateness of an information flow relative to the social context it occurs in. It is the frame that finally explains why consent doesn't settle things, why "it was already public" doesn't either, and why data crossing from one sphere of life into another can feel like a violation even when no secret was exposed.

## Doctrine — the theory

Start from how social life is actually organized: not as one undifferentiated public, but as distinct contexts — the doctor's office, the family, the classroom, the marketplace, the voting booth — each with its own ends, roles, and entrenched norms about who may know what. Those norms are not incidental etiquette; they are tied to the *purpose* of the context. A doctor needs your symptoms in order to heal you; that identical flow to your employer serves a different and often hostile end. So information is never simply "out" or "secret." It is always somewhere, flowing under some terms.

From that, privacy gets a precise definition and a decision procedure. Decompose any flow into the five parameters — subject, sender, recipient, information type, transmission principle — and ask whether the resulting flow conforms to the context's norms. A privacy violation is a flow that breaches those norms. This is why the usual defenses miss: "I consented" can't license a flow whose transmission principle was confidentiality, and "it was already public in context A" says nothing about whether it belongs in context B. It is also why aggregation and re-purposing feel wrong even when every datum was freely surrendered — each crossed a context boundary the original norm never authorized.

The frame is generative because it never asks the unanswerable question ("is this private?"). It asks a structural one: which context did this data come from, where is it going, under what terms, and do those terms hold? And when a flow *does* breach a norm, contextual integrity doesn't auto-condemn it — it asks whether the breach better serves the context's own ends and values, or merely someone else's. That is how you evaluate a system the theory's author never saw.

**Why the lens:** because consent and secrecy both miss the question that actually decides privacy — does this flow belong in the context it just entered?

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Contextual integrity | Privacy is preserved when flows conform to context-relative informational norms | *Privacy in Context* (2010) |
| Context-relative informational norms | Each social context carries entrenched expectations about appropriate flows | *Privacy in Context* (2010) |
| The five parameters | Subject, sender, recipient, information type, transmission principle | "Privacy as Contextual Integrity" (2004) |
| Transmission principle | The condition under which a flow passes between parties (consent, confidence, reciprocity) | *Privacy in Context* (2010) |
| Privacy ≠ secrecy ≠ control | A datum being public or consented does not make its flow appropriate | *Privacy in Context* (2010) |

## The lens

Point this lens at a data-handling design and ask:
- Name every flow this system creates: who is the subject, who sends, who receives, what type of information, under what transmission principle?
- Which context did each piece of data originate in — and does this flow carry it into a context with different norms?
- Where are you treating consent, or "it was already public," as a licence when the originating context's norm would still forbid this flow?
- If this flow does breach a context norm, does it do so to better serve *that context's* own ends and values — or someone else's?

## Canon

- *Privacy in Context: Technology, Policy, and the Integrity of Social Life* (2010) — the book; the full theory of contextual integrity and the five-parameter analysis.
- "Privacy as Contextual Integrity" (*Washington Law Review*, 2004) — the founding article; the decision procedure stated in law-review form.
- *Obfuscation: A User's Guide for Privacy and Protest* (2015, with Finn Brunton) — the activist corollary: when you cannot stop an inappropriate flow, pollute it.

## Pairings

- **Nissenbaum × Solove** — *context × taxonomy* — holds *context*. → [`../pairs/nissenbaum-solove.md`](../pairs/nissenbaum-solove.md)
