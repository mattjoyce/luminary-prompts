---
name: Luminaries
description: Review a design, spec, pull request, diff, or repository through paired-thinker stereo lenses — two software-engineering thinkers held in tension on one axis. Routes by subject (the topic), stage (plan vs review), and intent (Diátaxis need) to the right pair, loads its grounding plus the relevant anchor slices, and applies it. Three modes — a single best-fit pair, a multi-pair panel that fans out one lens per axis and collates, or a single-luminary anchor lookup. USE WHEN luminary, luminaries, paired-thinker review, design review, code audit, review this design/spec/PR/diff/repo through a lens, Hickey/Armstrong/Ousterhout/Liskov/etc lens, stereo lens, which luminary for X, run a luminary panel, critique this architecture. NOT FOR generic linting or test running.
---

# Luminaries — paired-thinker review lenses

Each **pair** is two software-engineering thinkers fused into one stereo lens, held in tension on a
single **axis** (e.g. *structure × runtime*). You aim it at a design or a diff and it critiques from
two complementary directions at once. One eye gives a flat picture; two give depth. A single idea
applied alone overshoots; held against its complement it stays honest. **The value is the tension —
surface it, never average it.**

This skill is the implementation of the routing table described in the repo's `INDEX.md`. It does not
pick *by person* — person is the *output*. It classifies the work, looks the pair up, and loads the
grounding.

## Resolve the repo (no hardcoded paths)

The groundings, anchors, and routing table live in this repo. This skill ships inside it at
`skills/luminaries/`, so the **repo root is two directories up** from this file. Resolve it first
(works through the PAI symlink because `readlink -f` follows it):

```bash
SKILL_DIR="$(cd "$(dirname "$(readlink -f "${BASH_SOURCE:-skills/luminaries/SKILL.md}")")" && pwd)"
REPO="$(cd "$SKILL_DIR/../.." && pwd)"
# Routing table:   $REPO/INDEX.md
# Pair groundings: $REPO/pairs/<slug>.md
# Person anchors:  $REPO/luminaries/<surname>.md
# All groundings:  $REPO/GROUNDINGS.md
```

If you cannot resolve it programmatically, the repo root is the directory containing `INDEX.md`,
`pairs/`, and `luminaries/`.

## Route in three classifications

Read `$REPO/INDEX.md` — its **"All pairs at a glance"** table is the routing table (`Pair | Axis |
Subject | Domains | Default`). Classify the request along three independent dimensions:

| Dimension | What it is | What it selects |
|---|---|---|
| **Subject** | the topic / domain of the work | **which pair** — match the request against `Subject` + `Domains` (and, for finer matches, the `coinages` in each anchor's frontmatter) |
| **Stage** | planning vs reviewing built work | **which pass** — *Before — design review* (a spec/proposal) vs *After — code audit* (an implementation/diff) |
| **Intent** | your relation to the knowledge (Diátaxis) | **which anchor slice** to load |

**Subject → pair.** Match the user's artifact/topic against the `Subject` and `Domains` columns.
Strong domain overlap wins. If two pairs tie, prefer the one whose axis names the actual tension in
the work. If nothing clearly matches, use the **default**: `Hickey × Armstrong` (`structure × runtime`).

**Stage → pass.** Load the pass that matches where the work is:

| Stage | Pass to load from `pairs/<slug>.md` |
|---|---|
| Planning / a design doc / spec / proposal | `## Before — design review` |
| Built / an implementation / PR / diff / repo | `## After — code audit` |

Two pairs name their passes differently — honor their files:
- **Naur × Procida** — `## Reconciliation pass — docs ← code` (does the doc still match the system?) and `## Authoring pass — docs → reader` (write for the reader who just arrived).
- **Thompson × Feathers** — a single `## First-contact pass` (one pass, not two — trust + comprehend an unfamiliar repo).

**Intent → anchor slice.** Each `luminaries/<surname>.md` carries **seven sections** serving **four
reader-needs**. Load only the slice the intent needs:

| Intent (Diátaxis) | Load from each person's anchor |
|---|---|
| **understand** (why it works) | `## Doctrine — the theory` |
| **review / do** (apply it now) | `## Anchor` + `## The lens` + the matching pass |
| **look up** (a term/source) | `## Concepts` + `## Canon` |
| **learn** (meet the thinker) | `## Orientation` + `## Doctrine` + `## The lens` |

## Three modes

### 1. Single-pair review (default — fast)
One stereo lens on one artifact. Route → load `pairs/<slug>.md` **Grounding** + the matching **pass**;
optionally load the **Anchor** slice of each of the pair's two people to pin the lens. Apply to the
target; report findings in the pair's two voices, then where they converge and where they pull apart.
→ `Workflows/Review.md`.

### 2. Multi-pair panel (substantial artifact — fan out + collate)
When the work opens several distinct axes (an architecture, a corpus, a big PR), pick **2–5 pairs on
distinct axes** and run each **independently** — ideally one agent per pair so no lens contaminates
another — then **collate**: convergence across lenses is the highest-confidence signal; genuine
cross-pair tensions are surfaced, not averaged. → `Workflows/Review.md` then `Workflows/Collate.md`.

### 3. Anchor lookup (one luminary)
"What does X's lens ask?" / "what did X coin?" → load the intent-appropriate slice of
`luminaries/<surname>.md`. No artifact required.

## How to pass a target

- **A file/dir:** read it as the artifact under review.
- **A diff:** `git diff` (or a PR) is the artifact for an *After* pass.
- **A pasted spec:** the pasted text is the artifact for a *Before* pass.
- **No target, just a question:** anchor-lookup mode.

## Output

- **Single-pair:** findings inline (or a sibling file `<target>.luminary-<slug>.md` if the user wants it saved).
- **Panel:** write one file per pair plus a `00-collation.md`, following `Workflows/Collate.md`.
  Default location: a `reviews/luminary-<topic>-<date>/` folder beside the artifact (date supplied by the user).

## Selection examples

- *"review my distributed queue design for metastable failure"* → Subject = distributed system under load → **Brooker × Helland** (`dynamics × data`), Before pass.
- *"audit this module's interface"* → **Ousterhout × Liskov** (`surface × substitution`), After pass.
- *"are these docs still true after the refactor?"* → **Naur × Procida**, Reconciliation pass.
- *"can I trust this repo I just cloned?"* → **Thompson × Feathers**, First-contact pass.
- *"panel-review this whole architecture"* → mode 2 across the axes the architecture opens.
- *"what does Hickey's lens ask?"* → mode 3, anchor lookup, `understand`/`do` slice.
</content>
