---
luminary: Nicole Forsgren
sort: Forsgren
epithet: measure outcomes, not output
domains: [software delivery performance, devops research, developer productivity, developer experience, engineering metrics, organizational culture, research methods]
coinages: [four key metrics, software delivery performance, DORA, State of DevOps report, 24 capabilities, inferential predictive design, SPACE framework, DevEx framework, outcomes not output, Westrum generative culture]
pairs: [Farley × Forsgren]
axis-roles:
  - "practice × evidence (Farley × Forsgren) — holds evidence"
status: anchored
tags: [luminary, person]
---

# Nicole Forsgren — measure outcomes, not output

> Which practices make a software organisation better is an empirical question, so
> measure team-level outcomes rather than individual output, trace them back to
> capabilities and culture, and use the numbers to learn, because a metric turned
> into a target stops measuring anything.

## Anchor

- **Axiom** — Which practices improve software delivery is an empirical question: measure outcomes at the level of the team and the system, not output at the level of the individual, trace them to capabilities and culture, and use the numbers to learn, because a metric made into a target gets gamed.
- **Idioms**
  - *Four key metrics* — software delivery performance measured as deployment frequency, lead time for changes (commit to running in production), change failure rate, and time to restore service; two of tempo, two of stability, read together because high performers improve both at once.
  - *Outcomes, not output* — a good performance measure focuses on a global outcome so teams are not pitted against each other, and on outcomes rather than output; lines of code, velocity, and utilization fail both tests.
  - *Capabilities* — the 24 technical, process, measurement, and cultural practices (continuous delivery, trunk-based development, loosely coupled architecture, working in small batches, monitoring, generative culture, and so on) that the DORA research found statistically predictive of delivery performance; the model predicts from capabilities to performance to organisational outcomes.
  - *Generative culture* — Westrum's top rung on a pathological, bureaucratic, generative scale: good information flow, cooperation across boundaries, inquiry rather than blame when things fail; operationalised as Likert items and found predictive of delivery performance and lower burnout.
  - *Inferential predictive design* — the research posture of Accelerate: hypotheses grounded in prior theory, tested against cross-sectional survey data, yielding predictive relationships rather than randomised causal proof.
  - *SPACE* — productivity in five dimensions, satisfaction and well-being, performance, activity, communication and collaboration, efficiency and flow; measure at least three and include at least one perceptual measure, because no single metric captures productivity.
  - *DevEx* — developer experience distilled to three dimensions: feedback loops, cognitive load, and flow state; measured by combining what developers report with what the engineering systems record.
- **Tenets**
  1. Software delivery performance is measurable, and it predicts organisational performance: high-performing technology organisations are more likely to exceed their profitability, market share, and productivity goals.
  2. Speed and stability are not a trade-off. The data clusters high performers who deploy more often, with shorter lead times, and with lower change failure rates and faster recovery, and low performers who are worse on all four.
  3. Practices earn their place by evidence, not by authority. Continuous delivery, trunk-based development, and small batches predicted performance; heavyweight external change approval predicted slower delivery and bought no stability in return.
  4. Culture is a measurable capability, not a mood. Westrum's typology can be scored, and the generative end predicts performance and lower burnout.
  5. Metrics are for learning, not judging. Use them to improve your own team over time; comparing teams in different contexts, or tying the numbers to appraisals, invites gaming and finger-pointing.
  6. Productivity has no single number. Activity counts are the easiest to collect and the worst to act on alone; a holistic view takes several dimensions in tension, including how developers say the work feels, because your tooling can tell you only what is inside it.

## Orientation

Nicole Forsgren is the lead author of *Accelerate: The Science of Lean Software and DevOps* (2018, with Jez Humble and Gene Kim) and the researcher behind the State of DevOps reports and the DORA programme that produced the four key metrics now used across the industry. Trained as an information-systems researcher (PhD in Management Information Systems, Master of Accounting) with earlier stints as a sysadmin, performance analyst, and professor, she co-founded DevOps Research and Assessment in 2015 and ran it as CEO until Google acquired it in 2018; she then led research and strategy at GitHub and Microsoft Research, where she co-authored the SPACE and DevEx frameworks, and joined Google in 2025. Her latest book is *Frictionless* (2025, with Abi Noda). She matters because she brought measurement discipline to the question engineering leaders argue about most, which practices actually work, and then spent the next decade warning people how not to use the numbers.

## Doctrine — the theory

Forsgren's starting move is to treat the engineering organisation as a system that can be studied, not a craft to be argued about. Before Accelerate, the case for continuous delivery, trunk-based development, or small batches rested on engineering reasoning and the experience of a few well-known companies. She asked a researcher's question instead: across thousands of teams, do these practices predict better outcomes, and how would we know? Answering that needed a construct for "better" that teams of every kind could be scored on, which is where the four key metrics come from. They are deliberately global (one system, not one developer) and deliberately about outcomes (a change reaching production and staying there) rather than output (code written, tickets closed). Lines of code, velocity, and utilization fail because each rewards local activity and each is trivially gamed.

With the outcome measured, the second move is a predictive model. The capabilities are the independent variables, delivery performance the mediator, organisational performance the outcome. The model's most quoted finding is that tempo and stability move together; the data does not show a speed-versus-safety trade-off, it shows a cluster of teams that are good at both and a cluster that is bad at both. Beneath that sit specific results that cut against common management instinct: trunk-based development with short-lived branches predicts performance, while an external change advisory board predicts slower delivery with no improvement in change failure rate. Culture enters the same model as a measured variable. Westrum's pathological, bureaucratic, generative typology becomes a Likert scale, and the generative end predicts performance and lower burnout.

The third move, and the one that distinguishes her from an experimentalist, is honesty about what kind of evidence this is. Accelerate is cross-sectional survey research with snowball sampling, roughly 23,000 responses over four years, analysed with what the book calls inferential predictive design: hypotheses grounded in prior theory, relationships reported as prediction rather than randomised cause. Critics have pressed on exactly that seam. Keunwoo Lee's 2022 review argues that self-reported survey constructs are vulnerable to halo effects, that some correlations (deployment automation predicts fast deployment) are close to circular, that words like "drives" and "impacts" read as causal to any ordinary reader, that only a small subset of the claims passed peer review, and that the unreleased data cannot be independently checked. Humble and Forsgren answered on the survey design and the latent-variable methodology; the data remains unpublished. A fair reading is that the capabilities model is the best large-sample evidence the industry has about which practices travel, and that it is population-level prediction, not a guarantee about your organisation. Forsgren's own position is consistent with that: the metrics are a baseline to improve against, not a benchmark to be ranked by.

The later work turns the measurement lens on itself. Forsgren and Kersten's "DevOps Metrics" lays out why system data and survey data each have blind spots and must be combined. SPACE is a response to watching the four key metrics, and activity metrics generally, get misused: productivity cannot be measured by a single metric or dimension, activity is the worst dimension to use alone, and any serious measurement includes how developers themselves perceive their work. DevEx narrows that to three things an organisation can act on, feedback loops, cognitive load, and flow state, and the DORA guidance now says plainly that the goal is to improve your own team over time, not to compete with other teams, and that mandating the metrics as targets raises the odds they will be gamed.

**Why the lens:** Forsgren makes you ask, of any engineering practice or process change, what outcome it is supposed to move, whether that outcome is being measured at the level of the system rather than the person, what the evidence for the connection is and of what kind, and what the measurement is doing to the people being measured.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Four key metrics | Deployment frequency, lead time for changes, change failure rate, time to restore service, read together | *Accelerate* (2018), ch. 2; State of DevOps reports (2014–2019) |
| Outcomes, not output | A performance measure must target a global outcome and outcomes rather than output; LOC, velocity, utilization fail | *Accelerate* (2018), ch. 2 |
| Speed and stability together | High performers score better on tempo and stability at once; no observed trade-off | *Accelerate* (2018), ch. 2; State of DevOps reports |
| 24 capabilities | Technical, process, measurement, and cultural practices statistically predictive of delivery performance | *Accelerate* (2018), Appendix A |
| Trunk-based development | Short-lived branches merged into trunk at least daily, few active branches; predicts performance | *Accelerate* (2018), ch. 4 |
| Change approval finding | External approval bodies predict slower delivery with no stability gain; prefer peer review and automation | *Accelerate* (2018), ch. 7 |
| Westrum generative culture | Pathological, bureaucratic, generative typology scored by survey; generative predicts performance, lower burnout | Westrum, "A typology of organisational cultures" (2004); *Accelerate* (2018), ch. 3 |
| Inferential predictive design | Theory-grounded hypotheses tested on cross-sectional survey data; prediction, not randomised causation | *Accelerate* (2018), Part II |
| Survey vs system data | Surveys give a holistic periodic view; systems give continuous data on only what is inside them; use both | Forsgren & Kersten, "DevOps Metrics", *ACM Queue* (2017) |
| SPACE framework | Satisfaction and well-being, Performance, Activity, Communication and collaboration, Efficiency and flow | Forsgren, Storey, Maddila, Zimmermann, Houck & Butler, *ACM Queue* (2021) |
| Three dimensions, one perceptual | Measure at least three SPACE dimensions and include at least one survey-based perception measure | Forsgren et al., *ACM Queue* (2021) |
| DevEx framework | Feedback loops, cognitive load, flow state; perceptions plus workflow data | Noda, Storey, Forsgren & Greiler, *ACM Queue* (2023) |
| Metrics for learning, not league tables | Improve your own team over time; cross-team comparison and metric mandates invite gaming | dora.dev, "DORA's software delivery metrics: the four keys" |

## The lens

Point this lens at an engineering process, a tooling change, a branching or ownership policy, or an "are we getting better?" dashboard and ask:
- What outcome is this practice supposed to move, in which of the four key metrics or in which organisational result? If you cannot name it, you are measuring activity.
- Is the number a global outcome of the system, or local output of a person or team? Will it pit teams against each other?
- Where does lead time actually go, from commit to running in production? Long-lived branches, queued reviews, and approval gates all hide inside "work in progress"; which of them has anyone timed?
- Does the gate you are defending buy any stability? Show the change failure rate with and without it, or admit it is there for comfort.
- Are speed and stability being tracked together? A faster deploy cadence with a rising failure rate is not improvement, and a falling failure rate bought by deploying less is not either.
- Who sees this metric and what happens to them when it moves? If it feeds an appraisal or a ranking, assume it will be gamed and ask what behaviour the gaming produces.
- Are you comparing this team to itself last quarter, or to a team with a different codebase, risk profile, and customer? Only the first is a measurement.
- Have you asked the developers? Where do they say the friction is, in feedback loops, cognitive load, or flow? What does the system data say that contradicts them, and vice versa?
- When a merge breaks production, what happens next: find the cause, or find the culprit? Score it on Westrum's scale, then ask what that predicts.
- What kind of evidence supports the claim? Survey correlation across a population, a before-and-after in your own organisation, or an engineer's first-principles argument? Name it, name the baseline, and name what would change your mind.

## Canon

- *Accelerate: The Science of Lean Software and DevOps* (with Jez Humble & Gene Kim, IT Revolution, 2018; Shingo Publication Award 2019) — the four key metrics, the 24 capabilities, Westrum culture, and Part II on the research method and its limits.
- *State of DevOps* and *Accelerate State of DevOps* reports (Puppet, then DORA and Google Cloud, 2014–2019) — the annual survey research the book distils; elite performers appear in 2018.
- "DevOps Metrics: Your biggest mistake might be collecting the wrong data" (with Mik Kersten, *ACM Queue* 15(6), 2017; reprinted *CACM* 61(4), 2018) — survey data versus system data and why neither suffices alone.
- "The SPACE of Developer Productivity: There's more to it than you think" (with Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck & Jenna Butler, *ACM Queue* 19(1), 2021) — the five myths, five dimensions, and the rule of three plus one perceptual measure.
- "DevEx: What Actually Drives Productivity" (Abi Noda, Margaret-Anne Storey, Nicole Forsgren & Michaela Greiler, *ACM Queue* 21(2), 2023) — feedback loops, cognitive load, flow state.
- "DevEx in Action: A study of its tangible impacts" (with Eirini Kalliamvakou, Abi Noda, Michaela Greiler, Brian Houck & Margaret-Anne Storey, *ACM Queue* 21(6), 2023) — the dimensions measured against productivity, quality, and retention outcomes.
- *Frictionless: 7 Steps to Remove Barriers, Unlock Value, and Outpace Your Competition in the AI Era* (with Abi Noda, Shift Key Press, 2025) — the DevEx method as an operating manual.
- Keunwoo Lee, "A review of *Accelerate*" (2022), and Humble & Forsgren, "Response to Keunwoo Lee's review of *Accelerate*" (2022) — the methodological critique and reply; read both before citing the book as proof.

## Pairings

- **Farley × Forsgren** — *practice × evidence* — holds *evidence*. → [`../pairs/farley-forsgren.md`](../pairs/farley-forsgren.md)
