---
luminary: Ron Kohavi
sort: Kohavi
epithet: most ideas fail the test
domains: [experimentation, A/B testing, online controlled experiments, metrics, data science, decision-making]
coinages: [OEC, overall evaluation criterion, HiPPO, sample ratio mismatch, A/A test, Twyman's law, experimentation platform]
pairs: [Gelman × Kohavi]
axis-roles:
  - "inference × decision (Gelman × Kohavi) — holds decision"
status: anchored
tags: [luminary, person]
---

# Ron Kohavi — most ideas fail the test

> Nobody's intuition survives contact with users — most ideas fail when tested — so
> build the cheapest trustworthy experiment you can, judge it by a metric that proxies
> long-term value, check trust before results, and let the data, not the HiPPO, make
> the call.

## Anchor

- **Axiom** — Most ideas fail when tested and nobody can predict which, so decisions belong to trustworthy controlled experiments judged by an OEC that proxies long-term value — with trust checked before results are read, and the HiPPO retired.
- **Idioms**
  - *OEC (overall evaluation criterion)* — the single metric (or weighted combination) an experiment is judged by; it must be measurable within the experiment yet proxy long-term value, not what is easy to move.
  - *HiPPO* — the Highest Paid Person's Opinion: what decides in the absence of experiments, and what a working experimentation culture displaces.
  - *Twyman's law* — any figure that looks interesting or different is usually wrong; the more exciting the result, the more likely it is a bug.
  - *Sample ratio mismatch (SRM)* — treatment/control counts deviating from the designed split; the single best smoke alarm that an experiment is invalid.
  - *A/A test* — run the pipeline against itself: if it declares "significant" differences more often than its alpha, the platform is lying to you.
  - *Experimentation flywheel* — drive the marginal cost of a trustworthy experiment low enough that testing everything becomes the culture, and decisions migrate from opinion to evidence.
- **Tenets**
  1. Most ideas fail: at Microsoft roughly a third of tested ideas improved the metrics they were designed to improve, a third were flat, and a third made things worse — and at a well-optimized product like Bing, the failure rate ran higher still.
  2. Trust before results: validate the instrument — SRM checks, A/A tests, outlier and bot filtering — before reading the outcome; an untrustworthy experiment is worse than no experiment.
  3. The OEC must proxy long-term value: optimize what is easy to move (clicks, short-term engagement) and you will degrade what matters (retention, revenue quality); metric design is where Goodhart's law is fought.
  4. Extreme results are bugs until proven otherwise — Twyman's law is an operating principle, not a quip.
  5. Value hides where intuition can't see it: a trivial Bing title-display change sat in the backlog for months, then tested out at over $100M a year — while celebrated big-bang launches routinely test flat. That asymmetry is *why* you must test.
  6. The platform is the point: institutionalize experimentation so the organization runs thousands of trustworthy experiments, because the payoff comes from volume, not from any single test.

## Orientation

Ron ("Ronny") Kohavi built the experimentation cultures of three defining online companies: director of data mining and personalization at Amazon, founder and long-time leader of Microsoft's Experimentation Platform (ExP) — where Bing scaled to tens of thousands of controlled experiments a year — and vice president at Airbnb. With Diane Tang and Ya Xu he wrote *Trustworthy Online Controlled Experiments* (2020), the standard text on A/B testing at scale. He matters because he turned "let's test it" from a slogan into an engineering discipline, with trust checks, metric design, and an institutional flywheel.

## Doctrine — the theory

Kohavi's foundation is epistemic humility, industrialized. The brute empirical fact from hundreds of thousands of experiments is that experts cannot predict which ideas will improve their product: most fail, and the distribution of wins is wildly skewed — tiny changes occasionally carry enormous value while heavily-invested launches test flat. An organization that accepts this stops adjudicating ideas by seniority — the HiPPO — and starts measuring them. The controlled experiment is the instrument because randomization is the only reliable way to turn a correlation on a dashboard into a causal claim about a change you shipped.

But the instrument lies by default. Logging bugs, bot traffic, redirect asymmetries, and carryover effects all masquerade as treatment effects, which is why trust is checked *before* results are read: sample ratio mismatch as the smoke alarm, A/A tests to calibrate the pipeline against itself, and Twyman's law standing guard over every exciting number. In Kohavi's telling, the most valuable alerts an experimentation platform fires are the ones that tell you your experiment is invalid — because acting on a corrupted result is worse than not testing at all.

The deepest work is metric design. The OEC forces the organization to say, in one criterion, what it means by better — measurable within the horizon of an experiment, yet a faithful proxy for long-term value. Get it wrong and the system optimizes the proxy while degrading the goal: more queries per session reads as engagement when it is actually worse search. Guardrail metrics fence the OEC in, and the debugging of metrics — not statistics — is where experimentation programs succeed or die.

The endgame is institutional: drive the marginal cost of a trustworthy experiment toward zero and volume does the rest. When testing is cheap, teams test everything, humility becomes procedural rather than personal, and the accumulated small wins compound into the product's edge.

**Why the lens:** Kohavi makes you ask of any measured claim — would this pipeline pass its own trust checks, is the metric an OEC or a convenient proxy, what was the decision rule before the data arrived, and if most of your ideas aren't failing, whether your tests are capable of telling you no.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Overall evaluation criterion (OEC) | The metric an experiment is judged by; must proxy long-term value while measurable in-experiment | Kohavi, Longbotham, Sommerfield & Henne, "Controlled experiments on the web" (2009) |
| HiPPO | The Highest Paid Person's Opinion — the decision procedure experiments replace | *Trustworthy Online Controlled Experiments* (2020) |
| Twyman's law | Any interesting or different figure is usually wrong; investigate before celebrating | *Trustworthy Online Controlled Experiments* (2020) |
| Sample ratio mismatch | Observed assignment counts deviating from design; a near-certain sign of invalidity | *Trustworthy Online Controlled Experiments* (2020) |
| A/A test | Identical treatment and control to validate the platform's false-positive rate | Kohavi et al., "Controlled experiments on the web" (2009) |
| Most ideas fail | ~1/3 win, 1/3 flat, 1/3 hurt at Microsoft; worse at optimized products | Kohavi, Crook & Longbotham, "Online Experimentation at Microsoft" (2009) |
| The Bing title experiment | A backlogged trivial change worth >$100M/year — value hides from intuition | Kohavi & Thomke, *Harvard Business Review* (2017) |
| Experimentation flywheel | Lower cost per experiment → volume → culture of evidence | *Trustworthy Online Controlled Experiments* (2020) |

## The lens

Point this lens at an experiment, an eval, a metrics dashboard, or a launch decision and ask:
- What is the OEC here — and is it a proxy for long-term value, or the number that was easiest to instrument?
- Would this pipeline pass its own trust checks: has anyone looked at the sample ratio, run an A/A, filtered the bots — would you believe this system if it reported nothing interesting?
- The headline number is exciting — apply Twyman's law: what logging bug, mismatch, or outlier could have produced it?
- What was the ship/no-ship decision rule *before* the data arrived — and what happens on a flat result?
- What fraction of your ideas fail their test? If it isn't most of them, your experiments may be incapable of saying no.

## Canon

- *Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing* (with Diane Tang & Ya Xu, 2020) — the standard text; trust checks, OEC design, pitfalls.
- "Controlled experiments on the web: survey and practical guide" (with Longbotham, Sommerfield & Henne, *Data Mining and Knowledge Discovery*, 2009) — the field's founding survey; OEC and A/A tests.
- "Online Experimentation at Microsoft" (with Crook & Longbotham, 2009) — the "most ideas fail" evidence.
- "Seven Rules of Thumb for Web Site Experimenters" (with Deng, Longbotham & Xu, KDD 2014) — the distilled operating heuristics.
- "The Surprising Power of Online Experiments" (with Stefan Thomke, *Harvard Business Review*, 2017) — the executive-level case, including the Bing title story.

## Pairings

- **Gelman × Kohavi** — *inference × decision* — holds *decision*. → [`../pairs/gelman-kohavi.md`](../pairs/gelman-kohavi.md)
