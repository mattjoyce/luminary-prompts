---
luminary: Andrew Gelman
sort: Gelman
lived: b. 1965
epithet: embrace variation, accept uncertainty
domains: [statistics, bayesian inference, causal inference, replication, research methods, multilevel models]
coinages: [garden of forking paths, Type M error, Type S error, piranha problem, multiverse analysis, partial pooling, posterior predictive check, Bayesian workflow, Stan]
pairs: [Gelman × Kohavi]
axis-roles:
  - "inference × decision (Gelman × Kohavi) — holds inference"
status: anchored
tags: [luminary, person]
---

# Andrew Gelman — embrace variation, accept uncertainty

> In noisy data the significance filter does not find truth — it selects exaggerations:
> every dataset holds a garden of forking paths, so honest inference means embracing
> variation, accepting uncertainty, and checking the model against the world instead of
> defending it.

## Anchor

- **Axiom** — The significance filter selects exaggerations, not truths: any noisy dataset holds a garden of forking paths, so honest inference embraces variation, accepts uncertainty, and checks the model rather than defending it.
- **Idioms**
  - *Garden of forking paths* — analytic flexibility without deliberate fishing: choices made after seeing the data mean the reported analysis is one of many that could have been run, invalidating its nominal error rates even when only one analysis was performed.
  - *Type M error* — error of magnitude: an estimate that clears a significance threshold in a noisy study systematically exaggerates the true effect — the winner's curse built into the filter.
  - *Type S error* — error of sign: the estimate is statistically significant and on the wrong side of zero.
  - *The significance dichotomy* — "the difference between 'significant' and 'not significant' is not itself statistically significant": comparing results by their significance labels is invalid.
  - *Partial pooling* — the multilevel-model compromise between estimating every group separately and ignoring groups entirely: shrink noisy group estimates toward the whole, in proportion to their noise.
  - *Posterior predictive check* — simulate replicated data from the fitted model and confront it with the data you have; a model earns trust by surviving such checks, not by being believed.
  - *Piranha problem* — the many large, consistent effects claimed across a literature cannot all coexist; like piranhas in one tank, they would eat each other.
- **Tenets**
  1. Most published "significant" effects in noisy fields are exaggerated in magnitude, and some are wrong in sign — the significance filter guarantees it (Type M / Type S).
  2. The garden of forking paths invalidates p-values without any intent to cheat; data-contingent analysis is enough, so honesty of the researcher is no defence.
  3. Null-hypothesis significance testing asks the wrong question: real-world effects are never exactly zero, so the task is estimating sign, magnitude, and variation — not rejecting a straw man.
  4. Better measurement beats bigger samples: no N rescues an instrument that isn't measuring the thing — weighing a feather on a bathroom scale, in the pouch of a jumping kangaroo.
  5. Models are provisional tools to be severely checked — fake-data simulation, posterior predictive checks, continuous expansion — not beliefs to be defended.
  6. Embrace variation: effects differ across people, contexts, and time, so the search for "the" effect is usually the wrong question — model the variation instead of dichotomizing it.

## Orientation

Andrew Gelman (b. 1965) is a statistician and political scientist at Columbia, co-author of *Bayesian Data Analysis* — the standard graduate text — and of the standard multilevel-modelling text with Jennifer Hill; a founder of the Stan probabilistic programming language; and, through his blog *Statistical Modeling, Causal Inference, and Social Science* (running since 2004), probably the most-read working statistician. He became the central methodologist of the replication-crisis era: the vocabulary the field now uses to explain why plausible-looking findings dissolve — forking paths, Type M and Type S errors — is largely his.

## Doctrine — the theory

Gelman's core claim is that in low-signal, high-noise settings, statistical significance is a selection mechanism, not a discovery mechanism. Conditional on clearing the threshold, an estimate from a noisy study is biased upward in magnitude (Type M) and can even point the wrong way (Type S). This is not an accusation of fraud — it is arithmetic. The filter that promotes "significant" results into papers, dashboards, and launch decisions is precisely a filter for exaggeration, and the more underpowered the study, the worse the winner's curse.

The garden of forking paths radicalises the point. Simmons, Nelson, and Simonsohn had shown that deliberate flexibility — "researcher degrees of freedom", p-hacking — can manufacture significance from noise. Gelman and Loken's move was to show that intent is unnecessary: if *different data would have prompted different, each locally reasonable, analysis choices* — which filter to apply, which subgroup to examine, which metric to report — then the nominal error rates are wrong even though only one analysis was ever run. One path was walked; the labyrinth's other paths still count. The name comes from Borges, and the implication is uncomfortable: an honest researcher and a p-hacker can produce statistically indistinguishable literatures.

The constructive programme answers the critique. Multilevel models with partial pooling replace the false choice between "every group alone" and "no groups at all", and replace dichotomies with modelled variation — his slogan is to *embrace variation and accept uncertainty*. Bayesian workflow makes model-building itself iterative and falsificationist: prior predictive checks before fitting, computation checks during, posterior predictive checks after, and continuous model expansion when a check fails. Stan is the tooling that made this practical at scale. His Bayes is Popperian rather than subjectivist — models are conjectures to be severely tested, and a posterior is only as good as the model that produced it.

Two late coinages complete the lens. Measurement: big data won't save you, because no sample size rescues an instrument that isn't measuring the thing — the kangaroo and the feather. And plausibility at the literature level: the piranha problem observes that the dozens of large effects claimed to steer the same behaviour cannot all be real, because they would interfere with one another — a constraint you can apply to a whole field without rerunning a single study.

**Why the lens:** Gelman makes you ask, of any number presented as evidence, how it survived — how many forking paths could have produced it, how much the selection filter exaggerated it, whether the instrument measures the thing at all, and whether the model behind it has ever been confronted with the data it claims to explain.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Garden of forking paths | Data-contingent analysis choices invalidate nominal error rates without any deliberate fishing | Gelman & Loken, "The Statistical Crisis in Science" (2014) |
| Type M / Type S error | Significant estimates from noisy studies exaggerate magnitude / can reverse sign | Gelman & Tuerlinckx (2000); Gelman & Carlin, "Beyond Power Calculations" (2014) |
| Significance dichotomy | Comparing results by significance labels is itself statistically invalid | Gelman & Stern, *The American Statistician* (2006) |
| Partial pooling | Multilevel estimation shrinking group estimates toward the population in proportion to their noise | Gelman & Hill (2007) |
| Posterior predictive check | Simulate replicated data from the fitted model; discrepancy falsifies the model | *Bayesian Data Analysis* (1995; 3rd ed. 2013) |
| Bayesian workflow | Iterative model-building: prior checks, computation checks, posterior checks, expansion | Gelman et al., "Bayesian Workflow" (2020) |
| Measurement error crisis | Noisy measurement plus selection makes large samples misleading, not merely inefficient | Loken & Gelman, *Science* (2017) |
| Piranha problem | Many large purported effects on one outcome are mutually incompatible | Tosh, Greengard, Goodrich, Gelman, Vehtari & Hsu, "The Piranha Problem" (2021) |
| Multiverse analysis | Run all reasonable analysis paths and report the distribution, exposing the garden | Steegen, Tuerlinckx, Gelman & Vanpaemel (2016) |
| R-hat | Convergence diagnostic comparing within-chain and between-chain variance | Gelman & Rubin, *Statistical Science* (1992) |
| Stan | Probabilistic programming language and HMC sampler that made full Bayes practical | Stan Development Team (2012–) |

## The lens

Point this lens at a design, a result, or a diff and ask:
- How many forking paths lie between the raw data and this claim — would different data have led to different filters, subgroups, or metrics, and is the path actually walked logged anywhere?
- This effect cleared a threshold: by how much does the filter exaggerate it? If the true effect were half this size, would the design even have detected it — and could the sign be wrong?
- Is anything here comparing "significant" with "not significant" and treating the difference as real?
- What does the instrument actually measure, and how noisily? Would more data help, or is this a feather on a bathroom scale?
- Has the model been checked — fake-data simulation, posterior predictive checks — or only fitted and believed?
- Where has continuous variation been forced into a dichotomy that partial pooling would handle honestly?

## Canon

- *Bayesian Data Analysis* (with Carlin, Stern, Dunson, Vehtari & Rubin; 1995, 3rd ed. 2013) — the standard text; posterior predictive checking lives here.
- *Data Analysis Using Regression and Multilevel/Hierarchical Models* (with Jennifer Hill, 2007) — partial pooling in practice.
- "The Difference Between 'Significant' and 'Not Significant' is not Itself Statistically Significant" (with Hal Stern, 2006) — the dichotomy critique in one title.
- "The Statistical Crisis in Science" (with Eric Loken, *American Scientist*, 2014) — the garden of forking paths, for the general reader.
- "Beyond Power Calculations: Assessing Type S (Sign) and Type M (Magnitude) Errors" (with John Carlin, 2014) — design analysis under noise.
- "Measurement error and the replication crisis" (Loken & Gelman, *Science*, 2017) — why big N doesn't rescue bad measurement.
- "Bayesian Workflow" (with Vehtari, Simpson, Margossian, Carpenter et al., 2020) — the iterative model-building credo.
- *Regression and Other Stories* (with Hill & Vehtari, 2020) — the applied-regression rewrite for the workflow era.
- *Statistical Modeling, Causal Inference, and Social Science* (blog, 2004–) — the running seminar; where the lens is applied daily.

## Pairings

- **Gelman × Kohavi** — *inference × decision* — holds *inference*. → [`../pairs/gelman-kohavi.md`](../pairs/gelman-kohavi.md)
