---
pair: Gelman × Kohavi
luminaries: [Andrew Gelman, Ron Kohavi]
axis: inference × decision
subject: a claim backed by measurement
domains: [experimentation, A/B testing, evals, benchmarks, metrics, statistical inference, replication, uncertainty]
default: false
tags: [luminary, pair]
---

# Gelman × Kohavi — inference × decision

Stereo: what the noisy data honestly supports (Gelman) against the ship/no-ship call that must be made anyway (Kohavi). One eye guards against believing too much; the other against deciding too little.

## Grounding

Design and code through the lenses of Andrew Gelman and Ron Kohavi. Gelman: how many forking paths stand between the raw data and this claim — and is the path actually walked logged anywhere? Is the effect exaggerated in magnitude or wrong in sign (Type M, Type S) because a selection filter promoted it? Where is continuous variation being dichotomized — significant/not-significant, pass/fail — that should be modelled instead? Kohavi: is the experiment trustworthy before you read the result — sample ratio mismatch, A/A drift, instrumentation bugs — remembering Twyman's law, that the exciting number is usually a bug? Is the metric an OEC that proxies long-term value, or the number that was easy to move? And what was the decision rule before the data arrived? Apply both — respect the noise and still make the call, remembering that most ideas fail and the honest posture is uncertainty without paralysis.

## Before — design review

Critique this experiment, eval, or metrics plan through Gelman and Kohavi. Gelman: is the analysis pre-specified, or will it walk the garden of forking paths — how many defensible analyses could this data support, and who chooses after seeing it? Is the design powered for a realistic effect, or will it only reach significance when the estimate is exaggerated (Type M) or backwards (Type S)? Where does the plan dichotomize — thresholds, pass/fail gates — what should be estimated with uncertainty? Does the instrument measure the thing, or is more data being asked to rescue bad measurement? Kohavi: what is the OEC, and does it proxy long-term value rather than what is easy to instrument? Where are the trust checks — A/A runs, sample ratio mismatch alarms, bot filtering — and do they run before anyone sees results? What is the ship/no-ship rule, fixed in advance, and what happens on a flat result? Ask what this experiment can honestly decide, not what it can be made to say.

## After — code audit

Audit this harness, analysis, or results claim through Gelman and Kohavi. Find the forking paths the code took silently: filters, exclusions, metric definitions, and stopping rules chosen after the data was visible, none of them logged. Find the winner's curse: effects reported because they were large and significant, and therefore probably exaggerated — weigh the claimed lift against a realistic prior of small effects. Find the dichotomies: thresholds that convert continuous evidence into pass/fail and throw the uncertainty away. Find the comparison of "significant" with "not significant" masquerading as a finding. Kohavi: recompute the denominators — is there sample ratio mismatch; would an A/A run come back clean; does Twyman's law apply to the headline number? Check the metric against the OEC — did the code optimize the proxy and leave the goal behind — and check that the harness logs enough to replay the analysis that was actually run, not the one that was described.
