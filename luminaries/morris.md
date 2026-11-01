---
luminary: Kief Morris
sort: Morris
epithet: rebuild it from code, or fear it
domains: [infrastructure as code, cloud infrastructure, environment reproducibility, configuration drift, continuous delivery, platform engineering]
coinages: [automation fear spiral, configuration drift, snowflakes as code, reusable stack, multi-environment stack, micro stacks, deployment wrapper stack, Iron Age and Cloud Age, lifecycle contexts, immediate and eventual testing, application-driven infrastructure design]
pairs: [Farley × Morris]
axis-roles:
  - "pipeline × platform (Farley × Morris) — holds platform"
status: anchored
tags: [luminary, person]
---

# Kief Morris — rebuild it from code, or fear it

> An environment you cannot rebuild from code is one you will be afraid to change, so
> define every environment as an instance of the same stack code, parameterised rather
> than copied, applied continuously so drift has no time to accumulate, and sized so a
> failed change breaks only what it had to touch.

## Anchor

- **Axiom** — The test of an infrastructure design is whether you could destroy any environment and rebuild it, identically, from code alone; every difference that test would expose is either a declared parameter or an accident waiting to break a change.
- **Idioms**
  - *Automation fear spiral* — you don't trust the automation because the servers are inconsistent, the servers are inconsistent because you don't run the automation, so you change things by hand, which makes the automation less trustworthy; broken only by running it unattended, on a schedule, starting small.
  - *Configuration drift* — systems that were once identical becoming different over time through manual ad hoc changes, updates, and general entropy; countered by applying code continuously and by rebuilding instances before they can drift.
  - *Snowflake system* — an instance that cannot be rebuilt because what made it work was never captured in code; everyone is afraid to touch it (Fowler's bliki term; Morris extends it to *snowflakes as code*: per-environment copies of definition code that have diverged, so the code itself is the snowflake).
  - *Stack* — the unit of infrastructure defined, deployed, and changed together by one tool invocation; the architectural unit of IaC design. A *stack instance* is one deployment of that code; a *reusable stack* is one codebase that produces every environment from parameters.
  - *Multi-environment stack* — the antipattern of defining several environments in one stack instance, so a change meant for test can take down production.
  - *Blast radius* — how much a given change could break; shrunk by splitting monolithic stacks into application-group, service, or micro stacks that deploy independently.
  - *Iron Age / Cloud Age* — the era when infrastructure was physical and changed slowly by hand, versus the era when it is API-provisioned and continual change is the normal state; most "change management" habits were designed for the wrong age.
  - *Lifecycle contexts* — editing code, deploying it (provisioning), and using the resulting resources are three different contexts; infrastructure code only executes when deployed, so tests and designs must say which context they are about.
- **Tenets**
  1. Reproducibility is the property everything else depends on. If the environment cannot be rebuilt from code, you cannot test a change against a true copy, cannot recover from losing it, and will not dare to change it.
  2. Variation between environments must be declared, as a small set of parameters to one shared definition, never produced by copying and editing. Copy-paste environments turn every fix into N fixes and let the Nth quietly differ.
  3. Drift is the default. Any system not continuously reconciled to its code is diverging from it now; the fix is to apply unattended and often, not to inspect more carefully.
  4. Stability comes from making changes. Infrastructure that is changed rarely, by hand, with heavyweight approval, is the fragile kind; small frequent changes through an automated path are how a system stays stable.
  5. Size stacks by blast radius and by who owns them. A change should be deployable by one team, tested on its own, and able to fail without taking neighbours with it.
  6. Infrastructure code earns the word "code" only when it is tested and delivered like software: syntax and static checks offline, then previews, assertions, and outcome tests against real instances, in a pipeline, continually.

## Orientation

Kief Morris is a distinguished engineer at Thoughtworks in London and the author of *Infrastructure as Code* (O'Reilly), the book that gave the practice its name in the mainstream: first edition 2016 on server configuration with Chef and Puppet, second edition 2020 on stacks built with Terraform and CDK, third edition 2025 on componentised, composable infrastructure and the workflows and governance around it. He coined the automation fear spiral, gave configuration drift its working definition, and made the stack the architectural unit of infrastructure design. He matters because he asks the question the runtime engineers skip: not how the environment behaves, but how it came to exist and whether it could again.

## Doctrine — the theory

Morris starts from a shift he calls the move from the Iron Age to the Cloud Age. When infrastructure was physical, change was slow, expensive, and rightly rare, and the habits of that era (change boards, runbooks, hand-tuned servers kept alive for years) made sense. Once infrastructure is provisioned through an API, those habits produce the worst of both worlds: systems that change constantly through undocumented hand edits while the official process pretends they do not. His counter-claim is that stability comes from making changes. A system you change often, in small steps, through one automated path, is one you understand; a system you are afraid to change is one that has already drifted away from anything you could reason about.

The central failure mode is the automation fear spiral, which Morris named from his own habits. You run the configuration tool selectively, because you are not confident what it will do to servers that have been hand-tuned. Because you run it selectively, the servers diverge further. Because they diverge, the tool becomes less predictable, so you trust it less. The exit is not more care but more exposure: put a small part of a few systems under unattended, scheduled automation, watch it, and widen the scope. Fear is a symptom of drift, and drift is a symptom of automation that does not run.

From this follows the design discipline. Everything is a stack: a unit of resources defined, deployed, and changed together. Every environment is a stack instance of the same code, and the differences between environments (region, size, account, endpoint) are declared parameters, not edits. The multi-environment stack, where test and production share one instance, and the copy-paste environment, where each has its own diverging copy of the code, are the two antipatterns he returns to in every edition; the third edition names the latter *snowflakes as code*, because the sprawl of hand-crafted definitions has become the new snowflake. This is where the lens bites on the engineer who writes infrastructure code without access to the customer's real setup: every nuance they miss is, by definition, variation that was never declared. Morris's answer is to make the environment's definition the thing you hand over, so that "their setup" is something you can instantiate, not something you must be told about.

Stacks are then sized by blast radius and by ownership. A monolithic stack means any change can break everything and every team must coordinate through one deployment; splitting along application groups, services, or micro stacks lets one team change one thing and fail small. The third edition pushes this into design forces (cohesion and coupling, code ownership, change scope, organisational structure) and into application-driven design, where infrastructure is shaped vertically around the workloads that need it rather than horizontally by resource type. And infrastructure code is tested the way code is tested, with honesty about what that means: declarative definitions carry little unit-test value, so the weight goes to offline static checks, then previews, assertions, and outcome tests against real ephemeral or periodically rebuilt instances, progressively, in a pipeline. His 2026 writing extends the same logic to coding agents: have them write infrastructure code rather than touch infrastructure directly, for consistency, confidence, and composability, and put humans on the loop designing the guardrails rather than in it inspecting each change.

**Why the lens:** Morris makes you ask how this environment came to exist, whether you could destroy it and get it back from code, which of its differences from its siblings were chosen and which merely happened, and how much a single failed change could take with it.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Infrastructure as code | Provisioning and changing infrastructure through definitions rolled out by unattended, validated processes, using practices from software development | *Infrastructure as Code*, 1st ed (2016), ch. 1 |
| Core practices | Define everything as code; continually test and deliver all work in progress; build small, simple pieces that can change independently | *IaC*, 2nd ed (2020), 3rd ed (2025), ch. 1 |
| Principles of cloud infrastructure | Assume systems are unreliable; make everything reproducible; avoid snowflake systems; create disposable things; minimize variation; ensure any procedure can be repeated | *IaC*, 3rd ed (2025), ch. 2 |
| Automation fear spiral | Mistrust of automation causes manual change, which causes inconsistency, which deepens mistrust | "The Automation Fear Spiral" (kief.com, 2015); *IaC* 2nd ed, fig. 2-2 |
| Configuration drift | Once-identical systems diverging over time through ad hoc changes and entropy | "Configuration Drift" (kief.com, 2012); *IaC*, all editions |
| Snowflake system / snowflakes as code | A hand-maintained instance nobody can reproduce (Fowler's bliki term, 2012); Morris's extension: per-environment copies of definition code that have diverged | *IaC*, 3rd ed (2025), ch. 2 and 7 (2nd ed: "copy-paste environments") |
| Stack, stack instance, reusable stack | The unit deployed by one tool run; one deployment of that code; one codebase instantiated per environment, varied only by parameters | *IaC*, 2nd ed (2020), ch. 5–6; 3rd ed, ch. 6–7 |
| Stack sizing patterns | Monolithic stack and multi-environment stack (antipatterns); application group, single service, micro, and shared stacks | *IaC*, 2nd ed (2020), ch. 5; 3rd ed, ch. 7 |
| Stack parameter patterns | Manual parameters (antipattern), environment variables, configuration files, deployment wrapper stack, pipeline parameters, parameter registry | *IaC*, 3rd ed (2025), ch. 8 |
| Application-driven design | Shaping infrastructure vertically around workloads rather than horizontally by resource type | *IaC*, 3rd ed (2025), ch. 6 |
| Progressive testing | Offline stages (syntax, static analysis, supply chain) then online stages (preview, verification, outcomes) against persistent, ephemeral, or periodically rebuilt test stacks | *IaC*, 2nd ed (2020), ch. 8–9; 3rd ed, ch. 17–18 |
| Humans on the loop | Experts design the guardrails and workflow an agent runs inside, rather than inspecting each change | "The Humans On The Loop" (2026); term from autonomy literature |

## The lens

Point this lens at an infrastructure design, a stack codebase, or an environment and ask:
- If this environment were deleted tonight, could you rebuild it from the repository alone? Name the first thing that would be missing.
- How many stack instances does this code produce, and is every difference between them a declared parameter? List the differences that are not, and name any second copy of the definition living under another name (staging, the customer's fork, the "temporary" one).
- When did automation last apply this code unattended? If the answer is "we run it when we change something," the drift started the day after.
- Is anyone afraid to run the apply? Afraid of what, exactly? That fear is a list of undeclared state.
- What is the blast radius of one failed change to this stack? Which teams and which environments share its fate, and could it be split?
- Which lifecycle context is this test about: the code, the deployment, or the running resources? What does it prove that a dry-run preview would not?
- You are writing this for an environment you cannot see. What would you need from the customer so that their environment is something you can instantiate rather than something you must be told about?
- Does the change path for a one-line fix and for a rebuild of the whole environment go through the same pipeline? If not, which one is the real one?

## Canon

- *Infrastructure as Code: Designing and Delivering Dynamic Systems for the Cloud Age*, 3rd ed (O'Reilly, 2025) — the current statement: principles, design forces, components and stacks, environments, delivery workflows, testing, changing live infrastructure, governance.
- *Infrastructure as Code: Dynamic Systems for the Cloud Age*, 2nd ed (O'Reilly, 2020) — where the stack became the unit; the core practices, the principles chapter, stack and environment patterns, the testing strategy.
- *Infrastructure as Code: Managing Servers in the Cloud*, 1st ed (O'Reilly, 2016) — the server-configuration era; the original definition and the Iron Age framing.
- "The Automation Fear Spiral" (kief.com / infrastructure-as-code.com, 2015) — the three-step loop and how to break it, in his own first person.
- "Configuration Drift" (kief.com, 2012) — the working definition and the two remedies: apply continuously, or rebuild before it can drift.
- "The Humans On The Loop" and "Why I have my agents write infrastructure code" (infrastructure-as-code.com, 2026) — the lens applied to coding agents: code as the anchor for consistency, confidence, and composability.

## Pairings

- **Farley × Morris** — *pipeline × platform* — holds *platform*. → [`../pairs/farley-morris.md`](../pairs/farley-morris.md)
