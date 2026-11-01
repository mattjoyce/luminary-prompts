---
luminary: Dave Farley
sort: Farley
epithet: every commit is a release candidate
domains: [continuous delivery, deployment pipelines, continuous integration, software engineering practice, release management, test automation]
coinages: [deployment pipeline, release candidate, commit stage, "only build your binaries once", "every check-in leads to a potential release", "done means released", "if it hurts, do it more frequently, and bring the pain forward", optimise for learning, optimise for managing complexity, LMAX Disruptor]
pairs: [Farley × Morris, Farley × Forsgren]
axis-roles:
  - "pipeline × platform (Farley × Morris) — holds pipeline"
  - "practice × evidence (Farley × Forsgren) — holds practice"
status: anchored
tags: [luminary, person]
---

# Dave Farley — every commit is a release candidate

> Software should be releasable at every commit, and the deployment pipeline is the
> automated, falsifiable argument that it is: one artifact, built once, carried through
> ever more production-like gates, rejected the moment any gate fails, so that the
> decision to release becomes a business choice rather than an engineering gamble.

## Anchor

- **Axiom** — Treat every commit as a candidate for production and build the automated pipeline that proves or rejects it fast; whatever makes that proof slow, manual, or unrepeatable (long-lived branches, hand-built environments, rebuilt artifacts, config outside version control) is the defect to fix first.
- **Idioms**
  - *Deployment pipeline* — "an automated manifestation of your process for getting software from version control into the hands of your users" (Humble & Farley, 2010); a sequence of gates, each more production-like than the last, that a release candidate must pass.
  - *Release candidate* — what every check-in becomes the moment it is committed; the pipeline's job is to eliminate unfit candidates as early and cheaply as possible, not to bless chosen ones at the end.
  - *Commit stage* — the first gate: compile, unit and smoke tests, fast enough that the committer waits for the result before moving on; its purpose is to fail fast.
  - *Only build your binaries once* — the artifact tested is the artifact deployed; rebuilding per environment means you never tested what you shipped.
  - *Done means released* — a feature is not finished when the code is merged or the story is accepted but when it is in users' hands; everything short of that is inventory.
  - *If it hurts, do it more frequently, and bring the pain forward* — the cost of integration, deployment, or release grows with the gap between repetitions, so shrink the gap until the pain is small and constant.
  - *Optimise for learning / optimise for managing complexity* — the two halves of *Modern Software Engineering*: iteration, feedback, incrementalism, empiricism and experimentation on one side; modularity, cohesion, separation of concerns, information hiding and managed coupling on the other.
- **Tenets**
  1. Releasability is a property of the whole system (code, config, data, environment, process), so it has to be verified on every change by machinery, not asserted at a release meeting.
  2. Integration cost is a function of time since the last integration. Branches are not the sin; the sin is the delay they encourage, which is why the test is "merged to trunk at least daily", not "no branches".
  3. The artifact must be invariant across the pipeline and the deployment mechanism identical in every environment. Deviations between staging and production are where the untested path lives.
  4. Deploy and release are different acts. Engineering's job is to make any commit deployable; whether a given version reaches users is a business decision, and separating the two is what lets the business decide freely.
  5. Testability and deployability are design properties. Code that is hard to test, or a system that is hard to deploy, is telling you about coupling and hidden state; listen rather than add process.
  6. Engineering is empirical: a practice earns its place by surviving feedback, not by authority, and Farley argues from mechanism (why fast feedback and small steps work) rather than from survey data.

## Orientation

Dave Farley co-wrote *Continuous Delivery* (2010) with Jez Humble, the book that took the deployment pipeline out of ThoughtWorks project folklore and made "every check-in a potential release" a discipline with named principles. As head of software development at LMAX he was one of the three main creators, with Martin Thompson and Michael Barker, of the Disruptor, the ring-buffer messaging core of one of the fastest financial exchanges built on the JVM, and he co-authored version 2 of the Reactive Manifesto (2014). *Modern Software Engineering* (2021) is his attempt to say what the engineering discipline underneath those practices actually is. Since 2020 his Continuous Delivery YouTube channel has argued the same positions, weekly and bluntly.

## Doctrine — the theory

Farley's starting observation is that the dangerous part of software was never the typing. It is the distance between a change and knowing whether it works in production, and everything that lengthens that distance (a branch that lives for a month, a release that happens quarterly, an environment built by hand, a binary rebuilt for each stage) multiplies both the number of changes in flight and the ambiguity about which one broke what. The deployment pipeline is his answer: instantiate the whole route to production as code, start it on every commit, and order the gates so the cheapest, fastest checks reject the most candidates first. A pipeline is not a build server. It is a model of the release process that can be run, and therefore disagreed with.

Two consequences do most of the work. First, build the artifact once and promote that same artifact; anything else means the tests certified a sibling, not the thing you shipped. Second, make deployment the same mechanism in every environment and keep every piece of configuration in version control, so that the difference between the environment you can reach and the one you cannot is a diff you can read, not an oral tradition. This is where his lens bites on infrastructure written without access to the customer's environment: the pipeline cannot visit that environment, so its job becomes making the divergence explicit, versioned, and smoke-tested at the boundary rather than discovered on site.

On integration he is often quoted as a slogan and is better read as an argument. The claim is that merge cost and semantic conflict grow with the time since two lines of work last met, so the thing to minimise is that interval. A branch merged twice a day is continuous integration by his own definition; a branch merged after three weeks is not, no matter how green its own CI is. "Who broke main" is only answerable when main receives small changes one at a time and each one gets its own pipeline run; gatekeeping merges with human approval slows the signal without replacing it. The reviewer's job is to ask what the integration interval actually is and what that does to the blast radius, not to recite "don't branch".

*Modern Software Engineering* generalises all of this into two obligations: get better at learning (iterate, get feedback quickly, work incrementally, be empirical and experimental) and get better at managing complexity (modularity, cohesion, separation of concerns, information hiding, controlled coupling). He defines engineering as an empirical, scientific approach to finding efficient, economic solutions to practical problems, and he reads testability as the cheapest available instrument for it: the properties that make code easy to test are the properties that make it well designed, so friction in testing is design feedback. This is also where he differs from his neighbours in this toolkit. Beck shrinks the step inside the code and asks for a failing test first; Farley takes Beck's step as given and asks what happens to it between commit and production. Majors starts after the deploy, in production truth; Farley's claim is about the path to that truth and about rejecting candidates that should never have arrived. Forsgren measures which practices correlate with performance across thousands of teams; Farley argues from mechanism why they should, and the pair is honest only when the mechanism is tested against her numbers.

**Why the lens:** Farley makes you ask whether this system could be released from any commit, what machinery proves it, and which gaps (in time between integrations, between artifact and deployment, between environments) are hiding the failure you will otherwise meet in production.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Deployment pipeline | Automated manifestation of the process from version control to users; staged gates of increasing confidence | "The Deployment Pipeline" (ThoughtWorks, 2007); *Continuous Delivery* (2010), ch. 5 |
| Release candidate | Every check-in, from the moment it is committed; the pipeline's job is to eliminate unfit ones early | *Continuous Delivery* (2010), ch. 1 and 5 |
| Commit stage | First gate: compile, unit and smoke tests, fast enough to wait for; fails fast | *Continuous Delivery* (2010), ch. 5 and 7 |
| Only build your binaries once | Test and deploy the identical artifact; never rebuild per environment | *Continuous Delivery* (2010), ch. 5 |
| Deploy the same way to every environment | One deployment mechanism, parameterised by config, from dev to production; smoke-test each deployment before promoting | *Continuous Delivery* (2010), ch. 5 |
| If any part of the pipeline fails, stop the line | A red stage means fix or revert; nothing is promoted past a failure | *Continuous Delivery* (2010), ch. 5 |
| Keep everything in version control | Code, config, schema migrations, environment definitions; if it affects the system it is versioned | *Continuous Delivery* (2010), ch. 1 and 2 |
| Done means released | Work counts as finished only when it is in users' hands | *Continuous Delivery* (2010), ch. 1 |
| If it hurts, do it more frequently, and bring the pain forward | Painful activities get cheaper when repeated often and moved earlier | *Continuous Delivery* (2010), ch. 1 |
| Deploy vs release | Deployability is engineering's responsibility; releasing a version to users is a business decision | *Continuous Delivery* (2010), ch. 10 |
| Continuous integration (Farley's definition) | Committing to trunk at least once a day; longer intervals are branching in effect, whatever the tool calls them | *Continuous Delivery* (2010), ch. 3; davefarley.net, "Continuous Integration and Feature Branching" |
| Optimise for learning | Iteration, feedback, incrementalism, empiricism, experimentation | *Modern Software Engineering* (2021), Part II |
| Optimise for managing complexity | Modularity, cohesion, separation of concerns, information hiding and abstraction, managing coupling | *Modern Software Engineering* (2021), Part III |

## The lens

Point this lens at a delivery process, a repo's branching and CI setup, or an infrastructure change and ask:
- Could you release from the current head of trunk right now? If not, which of code, config, data, or environment is the reason, and what would make that reason visible on every commit?
- How long do branches actually live here, measured, and what is the median time between a change and its first run against everything else? That number, not the branching model's name, is the integration risk.
- When main goes red, can you name the single commit? If several changes land per pipeline run, or merges wait days for approval, you have traded the fast signal for a committee.
- Is the artifact in production byte-identical to the one that passed the tests? Where does anything get rebuilt, re-resolved, or re-packaged between stages?
- Is deployment the same mechanism in every environment, with only configuration varying? Is that configuration in version control, and can you diff staging against production?
- For an environment you cannot reach: what in the pipeline stands in for it, where is the divergence written down, and what smoke test runs on arrival to catch what the stand-in missed?
- Which gate is slow, flaky, or manual, and what has the team stopped doing because of it? Bring that pain forward or remove it.
- Where is the deploy decision separated from the release decision? If exposing users is the only way to deploy, the business cannot choose.
- Is the hard-to-test part of this system hard to test because of a missing tool, or because of coupling and hidden state the tests are reporting?

## Canon

- *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation* (with Jez Humble, Addison-Wesley, 2010; Jolt Excellence Award 2011) — the principles, the deployment pipeline, configuration and environment management, deploying versus releasing.
- "The Deployment Pipeline (Extending the range of Continuous Integration)" (ThoughtWorks, 2007) — Farley's own early statement of the staged release-candidate model; the 2006 Humble, Read and North paper called the same idea the "deployment production line".
- *Modern Software Engineering: Doing What Works to Build Better Software Faster* (Addison-Wesley, 2021) — the definition of engineering as empirical; optimise for learning and for managing complexity; testability as design feedback.
- *Continuous Delivery Pipelines: How to Build Better Software Faster* (self-published, 2021) — the short practical companion on pipeline anatomy and branching.
- "Disruptor: High performance alternative to bounded queues for exchanging data between concurrent threads" (with Thompson, Barker, Gee and Stewart, 2011) — the LMAX work; mechanical sympathy and single-writer design in practice.
- davefarley.net and the Continuous Delivery YouTube channel (2020–) — "Don't Feature Branch", "Continuous Integration and Feature Branching", and the weekly arguments; read for the reasoning, not the headlines.

## Pairings

- **Farley × Morris** — *pipeline × platform* — holds *pipeline*. → [`../pairs/farley-morris.md`](../pairs/farley-morris.md)
- **Farley × Forsgren** — *practice × evidence* — holds *practice*. → [`../pairs/farley-forsgren.md`](../pairs/farley-forsgren.md)
