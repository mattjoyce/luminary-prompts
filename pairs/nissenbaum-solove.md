---
pair: Nissenbaum × Solove
luminaries: [Helen Nissenbaum, Daniel Solove]
axis: context × taxonomy
subject: a system that handles personal data
domains: [privacy, data governance, information flow, surveillance, data ethics, compliance]
default: false
tags: [luminary, pair]
---

# Nissenbaum × Solove — context × taxonomy

Stereo: whether a data flow is *appropriate* to the context it came from (Nissenbaum) against *which specific privacy harm* a flow creates when it isn't (Solove). One supplies the test for violation; the other supplies the vocabulary for the damage. Together they replace the vague word "privacy" with something you can actually check.

## Grounding

Design and code through the lenses of Helen Nissenbaum and Daniel Solove. Nissenbaum: privacy is not secrecy and not mere consent — it is *contextual integrity*, the preservation of the norms governing information flow in the context where the data originated. For each flow name the actors (sender, recipient, subject), the information type, and the transmission principle — and ask whether this flow honours or breaches the norm of its context. Solove: privacy is not one thing but a family of distinct problems — information collection, processing, dissemination, and invasion. Don't say "this is a privacy issue"; name the specific harm — aggregation, identification, secondary use, exclusion, breach of confidentiality, disclosure. Apply both — is this flow appropriate to its context, and if not, exactly which harm does it create?

## Before — design review

Critique this design through Nissenbaum and Solove. Nissenbaum: map every flow of personal data — who sends it, who receives it, about whom, what type, under what expectation? Find the flow that takes data gathered in one context (health, payment, a private message) and moves it into another (advertising, analytics, a third party) where the original norm no longer holds. Solove: for each questionable flow, name the harm from the taxonomy. Is this *aggregation* (harmless pieces combined into a revealing whole)? *Secondary use* (data repurposed beyond why it was given)? *Exclusion* (the subject can't see or correct what's held)? Don't let "we anonymise it" stand in for an answer — aggregation and re-identification are named harms.

## After — code audit

Audit this implementation through Nissenbaum and Solove. Nissenbaum: find the actual flow that contradicts the stated context — the analytics SDK on the medical form, the log that ships message contents to a vendor, the field collected "for delivery" and read by marketing. Trace where consent in one context is being treated as consent for all. Solove: find the join that performs aggregation, the identifier that enables identification, the export that becomes disclosure, the retention with no deletion path (exclusion). Name each harm and the line of code that commits it.
