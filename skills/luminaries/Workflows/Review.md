# Workflow — Review (single pair or panel)

Procedure for applying one or more stereo lenses to an artifact. Assumes you have resolved `$REPO`
and read `$REPO/INDEX.md` (the routing table). See `../SKILL.md` for routing.

## A. Single-pair review

1. **Route.** Classify Subject / Stage / Intent (SKILL.md). Pick the best-fit pair; default to
   `Hickey × Armstrong` if nothing dominates.
2. **Load the lens.** Read `$REPO/pairs/<slug>.md`:
   - the `## Grounding` block (always), and
   - the **pass** for the stage (`## Before — design review` or `## After — code audit`, or the pair's
     named passes for Naur × Procida / Thompson × Feathers).
   For a sharper lens, also read the `## Anchor` slice of each of the two people in
   `$REPO/luminaries/<surname>.md` (the surnames are in the pair's `luminaries:` frontmatter).
3. **Read the artifact.** The design doc, spec, diff, or repo under review.
4. **Apply both eyes.** Critique in each thinker's voice separately — A asks one question, B asks the
   opposing one. Be concrete: quote the line, name the file, point at the decision.
5. **Surface the tension.** Close with where the two lenses **converge** (highest-confidence findings)
   and where they **pull apart** (a real design tension to decide, not average away).
6. **Output.** Inline by default; save to `<target>.luminary-<slug>.md` if asked.

## B. Multi-pair panel (fan-out)

Use when the artifact opens several distinct axes (architectures, corpora, large PRs).

1. **Choose the axes.** Pick **2–5 pairs**, each naming a *distinct* tension the artifact actually
   opens. Don't stack overlapping pairs — diversity of axis is the point. Note which pairs and why.
2. **Fan out — one lens per agent.** Run each pair **independently and blind to the others**, so no
   lens contaminates another. Prefer one subagent per pair (parallel). Each agent:
   - receives `$REPO` + its assigned pair slug + the artifact,
   - runs step A.2–A.5 for its pair alone,
   - writes `NN-<pair-slug>.md` (e.g. `01-hickey-armstrong.md`) with its findings, severity-tagged
     (🔴 must-fix · 🟠 should-fix · 🟡 consider), each finding quoting the concrete locus.
3. **Collate.** Once all pairs return, run `Collate.md` over their files to produce `00-collation.md`.
   Convergence across independent lenses = highest confidence; surfaced tensions = the honest output.
4. **Output.** A `reviews/luminary-<topic>-<date>/` folder beside the artifact, holding `00-collation.md`
   plus one file per pair. (Ask the user for the date — runtime clocks aren't available in workflow scripts.)

## Discipline (the project's own thesis)

- **Two eyes, not one.** Never collapse a pair to a single voice; the depth is in holding both.
- **Surface tension, don't average it.** "On balance it's fine" hides the decision the reviewer owes.
- **Concrete loci only.** Every finding points at a line, file, ADR, or named decision.
- **Independence before synthesis.** In panel mode, lenses must not read each other before collation.
</content>
