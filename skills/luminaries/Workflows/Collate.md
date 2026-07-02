# Workflow — Collate (merge a panel into one verdict)

Run after a multi-pair panel (`Review.md` §B) when every pair has written its `NN-<pair-slug>.md`.
Produces `00-collation.md`. The format below is the one proven in real use — reproduce its shape.

Inputs: the artifact under review, and all per-pair finding files (read them all; do not summarize
from memory).

## Output structure for `00-collation.md`

1. **Title + frame.** One paragraph: what was reviewed, which pairs ran, and on what axes. State the
   question the panel was judging.

2. **Verdict table.** One row per pair — the at-a-glance result:

   | Pair | Axis | One-line verdict |
   |---|---|---|
   | **A × B** | *axis* | the single sharpest thing this lens found |

3. **The shared meta-finding.** The *one* thing multiple independent lenses converged on — stated as a
   single claim, with which pairs reached it from which different directions. This is the highest-value
   output: independent lenses agreeing is strong evidence.

4. **Where the pairs converge** — `C1…Cn`, ordered by confidence then severity. Each:
   - a severity tag (🔴 must-fix · 🟠 should-fix · 🟡 consider),
   - which pairs found it and from which angle (cite their files),
   - a **unified fix** — the concrete change, naming the file/ADR/line.

5. **The genuine cross-pair tension(s)** — `T1…Tn`. Where two lenses pull *opposite* ways and both are
   right. **Surface it as a decision the owner must make — do not average it to a mush.** Name the two
   poles, who holds each, and what each buys/costs. This section is the skill's reason to exist.

6. **Single-lens signals.** Per pair, the finding only that lens caught — each lens earning its keep.

7. **Build verdict.** Reconciled across all pairs: ship / ship-with-fixes / hold, and the shortlist of
   must-fixes that gates it.

## Rules

- **Read every pair file.** Collate from the actual findings, not recollection.
- **Convergence is signal; don't dilute it.** If three lenses independently land on the same locus,
  say so loudly — that's the headline.
- **Preserve tension.** Disagreement between pairs is a feature; record both sides intact.
- **Severity is honest.** 🔴 means a real defect with a concrete locus, not a stylistic preference.
- **Every finding has a locus.** File, ADR, line, or named decision — no free-floating opinions.
