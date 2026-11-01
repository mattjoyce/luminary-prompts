---
pair: Farley × Morris
luminaries: [Dave Farley, Kief Morris]
axis: pipeline × platform
subject: the path a change takes into an environment
domains: [continuous delivery, deployment pipelines, infrastructure as code, environments, configuration drift, release management, platform engineering]
default: false
tags: [luminary, pair]
---

# Farley × Morris — pipeline × platform

Stereo: the route a change travels from commit to production (Farley) against the environment it lands in and whether that environment could be rebuilt from code (Morris). One eye asks whether the pipeline proves the candidate fit; the other asks whether the thing it was proved against is the thing that actually exists.

## Grounding

Design and code through the lenses of Dave Farley and Kief Morris. Farley: could this be released from the head of trunk right now, and what machinery proves it on every commit? Is the artifact built once and promoted unchanged, deployed by the same mechanism into every environment with only version-controlled configuration varying? How long do branches actually live, and when main goes red can you name the single commit? Morris: if this environment were deleted tonight, could you rebuild it from the repository alone, and what is the first thing that would be missing? Is every environment an instance of the same stack code with its differences declared as parameters, or a copy that has quietly diverged? When did automation last apply the code unattended, who is afraid to run the apply, and how much would one failed change take with it? Apply both, remembering that a flawless pipeline into a snowflake environment proves nothing about production, and a reproducible platform reached by a manual, branch-heavy path rots just the same; the change and the place it lands must both come from code, through one path, often.

## Before — design review

Critique this delivery design, pipeline, or infrastructure plan through Farley and Morris. Farley: trace the route from commit to production and name each gate, what it rejects, and how long it takes. Where is anything rebuilt, re-resolved, or repackaged between stages, so that the tests certified a sibling of what ships? Is deployment one mechanism parameterised by configuration, or a different procedure per environment? What is the planned integration interval, measured in hours rather than in the branching model's name, and what does it do to the blast radius of a bad merge? Where does the deploy decision separate from the release decision? Morris: how many stack instances will this code produce, and is every difference between them a declared parameter? Does test share a stack instance with production, so a change meant for one can break the other? Which lifecycle context does each proposed test cover (the code, the deployment, or the running resources), and what does it prove that a preview would not? How is each stack sized, by blast radius and by who owns it, and when several teams own neighbouring stacks, can one team change one thing and fail without taking the others with it? For an environment the authors cannot reach, a customer's or another team's, Farley asks what in the pipeline stands in for it, where the divergence is written down, and what smoke test runs on arrival to catch what the stand-in missed; Morris asks what you would need from its owners so that their environment is something you can instantiate rather than something you must be told about. Ask whether the path and the platform are both defined in code, and which of the two the plan is quietly trusting to stay as it was.

## After — code audit

Audit this pipeline configuration, stack code, or infrastructure diff through Farley and Morris. Farley: follow one artifact through the pipeline as it is configured, not as it is described. Find the stage that rebuilds, the environment deployed by a different script, the configuration living outside version control, the gate that is manual, slow, or routinely skipped. Read the branch history: measure how long branches live and how many changes land per pipeline run, and ask whether a red main can be pinned to one commit. Morris: diff the environments against each other and against the code. Find the second copy of the stack definition under another name, the parameter set by hand, the resource that exists but is defined nowhere, the multi-environment stack where test and production live in one instance. Check when the code was last applied unattended and whether a preview run today shows drift. Check whether the infrastructure tests exercise the deployment and the resulting resources, or only parse the syntax. For code written against an environment nobody on the team can see, check which assumptions about that environment are declared parameters, which are hard-coded guesses, and what runs at the boundary to catch the guesses that were wrong. Report where the pipeline and the platform disagree about what production is.
