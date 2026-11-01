---
luminary: Philip Koopman
sort: Koopman
epithet: you cannot test your way to safe
domains: [embedded systems, safety-critical software, automotive software, autonomy, dependability, software process]
coinages: [embedded software red flags, safety case, heavy tail of edge cases, fail-operational, single-point-of-failure watchdog, CRC Zoo, Hamming distance selection, safety performance indicator]
pairs: [Koopman × Holzmann]
axis-roles:
  - "field × proof (Koopman × Holzmann) — holds field"
status: anchored
tags: [luminary, person]
---

# Philip Koopman — you cannot test your way to safe

> A fielded device meets a world that is larger and meaner than your test plan, so
> safety comes from an argued safety case — hazards named, single points of failure
> removed, the process that built it evidenced — not from miles driven without a
> mishap.

## Anchor

- **Axiom** — Testing shows the presence of behaviour you thought to look for; safety is an argument you must build and defend, covering the hazards, the faults the hardware will actually inflict, and the heavy tail of situations nobody wrote a test for.
- **Idioms**
  - *Safety case* — a structured, written argument, supported by evidence, that a system is acceptably safe for a defined operating context; absent one, "we tested a lot" is not a claim.
  - *Embedded software red flags* — the recurring defect patterns that show up in design reviews of real firmware (unbounded stack, global-variable soup, a watchdog that only one task kicks, no peer review, no MISRA conformance) and predict field failures.
  - *Heavy tail of edge cases* — the rare-situation distribution never runs out; each new deployment mile buys less than the last, so brute-force field testing cannot reach the failure rates safety demands.
  - *Fail-operational vs. fail-safe* — a system that can shed function safely needs a safe state; one that cannot (a car at speed, a plane in flight) must keep working through the fault, which is a far harder and far more expensive requirement.
  - *Single-point-of-failure watchdog* — the classic embedded fake redundancy: a watchdog kicked by a task that cannot detect the failure it is supposed to catch, or fed from a timer interrupt that keeps running while the application is dead.
  - *CRC selection by Hamming distance* — a checksum is chosen by the bit-error patterns it is guaranteed to catch at your message length, not by whatever polynomial the last project used.
  - *Safety performance indicator* — a leading measure of whether the safety argument still holds in the field, as opposed to a lagging count of accidents you were hoping never to have.
- **Tenets**
  1. Safety is a property of the whole product in its operating context — hardware faults, electrical noise, bit flips, timing, the human operator, the maintenance story — not of the source code alone.
  2. You cannot test your way to safety: to demonstrate a failure rate of one in a billion hours you would have to run for far longer than a product programme exists, so most of the argument has to come from design, analysis, and process evidence.
  3. Process is evidence. Peer review, a documented coding standard actually enforced, requirements traceability, and configuration management are not bureaucracy; they are what you show when asked why the thing is safe, and their absence is itself a finding.
  4. Redundancy that shares a cause is not redundancy. Two channels running the same buggy software, or a watchdog fed by the code it is supposed to police, buys nothing.
  5. The cheap defects are found by reading. Peer review removes a large fraction of defects at a fraction of the cost of finding them in test, and a fraction of a fraction of finding them in the field.
  6. Autonomy does not repeal any of this: machine-learned components have no specification to verify against, so the burden shifts onto the safety case, the operational design domain, and the indicators that tell you the argument has stopped being true.

## Orientation

Philip Koopman is a professor at Carnegie Mellon, a former Navy submarine officer and Harris Semiconductor engineer, and the author of *Better Embedded System Software* (2010) — the field's practical handbook for firmware that has to work. He is known for three bodies of work: the embedded design-review checklists distilled from a couple of hundred industrial reviews; the CRC and checksum research that tells you which polynomial actually protects your message length; and safety-critical automotive work, including expert testimony on unintended-acceleration litigation and principal contribution to UL 4600, the standard for arguing autonomous-product safety. He matters because he sits at the seam where firmware meets physics, liability, and a public that did not consent to be a test subject.

## Doctrine — the theory

Koopman's world starts one layer below where most software argument starts. The code runs on a part that will experience brownouts, EMI, cosmic-ray bit flips, a stack that is one interrupt deeper than anyone measured, and a field lifetime measured in decades of unattended operation. Correctness of the program text is necessary and nowhere near sufficient. So the question he asks is never "does it work?" but "what happens when the thing that will happen, happens?" — and then, "who checked?"

From that follows his central negative result: testing does not scale to safety. If a system must fail less often than once per some enormous number of operating hours, no achievable amount of field exposure can demonstrate it, and the more optimized the system, the longer the tail of situations that a test campaign will never sample. This is why he pushes so hard on the *safety case*: an explicit written argument, with claims, sub-claims, and evidence, that a reviewer can attack. A safety case makes the reasoning falsifiable. A pile of test reports makes it merely voluminous.

The second move is to treat process as first-class technical evidence. When Koopman reviews firmware he looks for the absence of peer review, the absence of an enforced coding standard, unbounded stack usage, a forest of globals, and watchdogs wired so that the failure mode they exist to catch cannot possibly trip them. These are not style complaints; each is a mechanism by which a defect reaches a customer. The observation that peer review finds defects far cheaper than test, and test far cheaper than the field, is the economic engine under the whole discipline.

The third move is honesty about redundancy and about what a fault-tolerant architecture actually costs. Two channels are only two channels if their failure causes are independent, and a system with no safe state to fall back to has bought itself a fail-operational requirement it usually has not budgeted for. Much of what passes for redundancy in shipped products is a story people tell about a diagram.

His autonomy work extends the same logic to systems whose behaviour was learned rather than specified. There is no specification to trace requirements to, so the argument has to be carried by the operational design domain, the hazard analysis, the mitigation architecture around the learned component, and leading indicators that reveal the argument decaying before an accident does.

**Why the lens:** Koopman makes you ask what the physical world will do to this device over its whole life, whether anyone can write down why it is safe, and whether the evidence for that argument exists or is being substituted for by hours of testing that could never have found the thing that kills you.

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Safety case | A structured argument plus evidence that a system is acceptably safe in a defined context | UL 4600 (2020); *How Safe Is Safe Enough?* (2022) |
| Embedded software red flags | Recurring firmware defect patterns predictive of field failure, drawn from industrial design reviews | *Better Embedded System Software* (2010); "A Case Study of Toyota Unintended Acceleration and Software Safety" (2014) |
| You can't test your way to safety | Required failure rates exceed what any feasible test campaign can demonstrate | *How Safe Is Safe Enough?* (2022) |
| Heavy tail of edge cases | Rare situations do not run out; marginal miles buy diminishing evidence | Koopman & Wagner, "Challenges in Autonomous Vehicle Testing and Validation" (2016) |
| Fail-operational vs. fail-safe | Whether the system has a safe state to fall into, or must keep functioning through the fault | *Better Embedded System Software* (2010) |
| Watchdog anti-patterns | Watchdogs kicked by a task or ISR that cannot observe the failure they exist to detect | *Better Embedded System Software* (2010) |
| CRC/checksum selection | Choose the polynomial by guaranteed Hamming distance at your message length, not by habit | Koopman & Chakravarty, "Cyclic Redundancy Code (CRC) Polynomial Selection for Embedded Networks" (DSN 2004) |
| Operational design domain (ODD) | The bounded conditions under which the safety argument is claimed to hold | UL 4600 (2020) |
| Safety performance indicator | A leading field measure that the safety argument still holds | UL 4600 (2020) |

## The lens

Point this lens at firmware, a device design, or a safety claim and ask:
- What is the hazard list, and for each hazard, what mechanism keeps the system out of the unsafe state — and what happens when *that* mechanism fails?
- Where is the safety case written down? If someone attacked its weakest sub-claim, what evidence would you produce?
- What is the worst-case stack depth, and who measured it? What is the worst-case interrupt latency, and who measured it?
- What kicks the watchdog, and could the failure you fear leave that thing running happily?
- Is this fail-safe or fail-operational — is there a safe state to reach, and can the system actually reach it in time?
- Is the redundancy independent, or do both channels share a cause: same code, same clock, same supply, same wrong requirement?
- Which checksum is on this bus, and what Hamming distance does it guarantee at this message length?
- Where is the peer review, the enforced coding standard, the requirements trace? If none exist, what is your safety argument standing on?
- If the answer to "how do you know it's safe" is a number of test hours, ask what failure rate you need and how many hours that would take.

## Canon

- *Better Embedded System Software* (2010) — the practical handbook; red flags, watchdogs, real-time, process, review checklists.
- *How Safe Is Safe Enough? Measuring and Predicting Autonomous Vehicle Safety* (2022) — why testing does not scale to safety, and what a safety case must carry instead.
- "Cyclic Redundancy Code (CRC) Polynomial Selection for Embedded Networks" (with Tridib Chakravarty, DSN 2004) — plus the CRC Zoo tables; choose a checksum by evidence.
- "A Case Study of Toyota Unintended Acceleration and Software Safety" (2014) — what a real safety-critical firmware review finds, and what it means when the process evidence is missing.
- "Challenges in Autonomous Vehicle Testing and Validation" (with Michael Wagner, SAE 2016) — the heavy tail argument.
- UL 4600, *Standard for Safety for the Evaluation of Autonomous Products* (2020) — the safety-case-driven standard he helped shape.

## Pairings

- **Koopman × Holzmann** — *field × proof* — holds *field*. → [`../pairs/koopman-holzmann.md`](../pairs/koopman-holzmann.md)
