# Naur × Procida — theory × need

*Pre-release review of the Luminaries repo, read as documentation. Naur asks whether this corpus
carries the program's living theory or only surface mechanics that have drifted from it. Procida asks
which of the four reader-needs each document serves, and whether the stranger who just arrived gets
what they came for. The repo is itself documentation, so both the reconciliation pass (docs ← code)
and the authoring pass (docs → reader) apply in full.*

The artifact is unusually well-suited to this lens because it is documentation *about* how to read
things — and it names Naur and Procida as two of its own subjects (`README.md:93`,
`luminaries/_TEMPLATE.md`). That raises the bar: it must live up to the frameworks it sells.

---

## Findings — Naur's voice (does the corpus carry the theory, or has it drifted?)

**🔴 N1 — The documented `$REPO` resolution has already drifted from how the skill is actually run.**
Locus: `skills/luminaries/SKILL.md:24-31`.
The snippet is `SKILL_DIR="$(cd "$(dirname "$(readlink -f "${BASH_SOURCE:-skills/luminaries/SKILL.md}")")" && pwd)"`.
When a *model* executes this via a shell tool it is not sourcing the file, so `BASH_SOURCE` is unset
and the expression falls back to the **relative** path `skills/luminaries/SKILL.md`. That resolves
only if the current directory is the repo root — but the skill's whole reason to exist is reviewing
*someone else's* artifact, so cwd is the target repo (or, once installed as a plugin, an arbitrary
project directory), never this repo. `readlink -f` then returns empty and `$REPO` becomes garbage.
The prose fallback that actually holds ("the repo root is the directory containing `INDEX.md`,
`pairs/`, and `luminaries/`", `SKILL.md:33-34`) is demoted to a footnote. Naur's test: if only this
doc survived, it would teach a reader to *mimic* a resolution that cannot work, not to rebuild the
real one. Fix: lead with the plugin-provided install path (e.g. the harness's known skill directory /
`CLAUDE_PLUGIN_ROOT`), and treat the cwd-relative snippet as the last resort, not the first.

**🟠 N2 — The README promises more than the corpus's own theory permits.**
Locus: `README.md:90-93` vs `luminaries/naur.md:46`.
The README sells the anchors as pinning knowledge "to curated text so the lens doesn't drift with
whatever a model happens to recall." Naur's *own* anchor says the opposite in plain words: "you
cannot anchor a theory in a document — you can only leave a residue good enough that a reader can
rebuild the theory faster. That is the honest job of every Luminary file here." The honest framing
exists — but only inside `naur.md`. A README-only reader inherits the un-Naurian promise that a file
holds the theory. The doc contradicts the theory it ships one directory away. Reconcile the README to
the residue framing its own corpus teaches (anchors *seed a rebuild*, they do not *contain* the lens).

**🟡 N3 — Two un-guarded reference tables for the same pair→subject facts.**
Locus: `README.md:19-37` ("Pair / Axis / Aimed at") and `INDEX.md:82-100` ("Pair / Axis / Subject /
Domains"). `GROUNDINGS.md:4` protects itself with "Canonical source is the individual files in
`pairs/`." The two pair tables carry no such marker, so nothing names which is authoritative when they
drift (they agree today: e.g. Lamport × Thomas/Hunt reads "knowing what the artifact does, and why"
in both). Since `SKILL.md:38` already treats `INDEX.md` as *the* routing table, say so — mark INDEX
canonical and README's table illustrative.

---

## Findings — Procida's voice (which need does each doc serve, and is it quietly serving two?)

**🟠 P1 — There is no tutorial. The arriving stranger has no guaranteed-success 60-second path.**
Locus: `README.md:55-73` ("How to use them").
Every entry path is a *how-to*: `cat pairs/hickey-armstrong.md | <your LLM>` assumes the reader has
already chosen a pair and has an artifact of their own to paste. The install block (`README.md:135-149`)
is also a how-to. Nothing lets a newcomer run one fixed, bundled thing and watch it work — the
learning-oriented quadrant whose author owns the beginner's success (`procida.md:26`, tenet 1). Add a
true tutorial: one copy-paste block using the `default` pair and a tiny bundled example artifact,
producing visible stereo output, so the reader's first experience is "it ran, this is for me."

**🟠 P2 — The README is three Diátaxis modes on one page, and the seams show.**
Locus: `README.md` as a whole — explanation (`:14-52`, "why these people", the arc), reference
(`:19-37` table, `:104-134` 30-name roster), and how-to (`:55-73`, `:135-149`) interleaved.
Procida's tenet (`procida.md:33`): a page in two modes serves neither. The reader who came to *use*
the tool scrolls past ~50 lines of philosophy; the reader who came to *understand* wades through
`/plugin install` commands. Consider splitting: keep the README as the tutorial + how-to front door,
and move the "why these people / the core arc" explanation (`:14-52`) into a linked explanation doc or
into `INDEX.md`, which is already the structural map.

**🟡 P3 — The install reference is not "boring and accurate"; the naming shift will make a reader
second-guess it.** Locus: `README.md:142-143`.
`/plugin marketplace add mattjoyce/luminary-prompts` followed by `/plugin install luminaries@luminaries`
is functionally correct (the marketplace registers under its manifest `name` "luminaries",
`.claude-plugin/marketplace.json:2`), but the reader is given no reason why the repo is
`luminary-prompts` while the marketplace and plugin are `luminaries`. Reference must be consultable
without doubt (`procida.md:27`). Add a one-line note ("the marketplace is named `luminaries`; the repo
slug differs") or align the names.

---

## Where the two eyes converge (highest confidence)

- **The core theory is transmitted, and transmitted redundantly.** Both eyes agree the project's own
  thesis — *two lenses in tension; surface the tension, never average it* — is carried consistently
  across `README.md:6-9`, `SKILL.md:11-12`, `Workflows/Review.md:41-46`, and `Workflows/Collate.md:31,43`.
  Naur: the *why* is present, not just the *what*. Procida: each document restates its single job in
  its own voice. This is the strongest evidence the corpus is coherent about what it is.
- **The pair↔anchor structure is clean.** 17 pair files on disk match the 17 rows in both the README
  and INDEX tables; 30 anchor files match the 30-name roster and the INDEX table; every pair-referenced
  person has an anchor and every anchor is referenced. A rare case where counts, links, and paths all
  reconcile.
- **The `$REPO` resolution (N1) is where both eyes land hardest.** Naur reads it as a mechanic drifted
  from reality; Procida reads it as a how-to whose *first step* silently fails the arriving user. One
  defect, two independent condemnations — fix it first.

## Where the two eyes pull apart (a tension for the owner to decide, not average)

**How self-contained should an anchor file claim to be?**
Naur pulls toward *less*: an anchor can only ever be scaffolding for rebuilding a theory, so it should
stay thin, deferential, and push the reader outward to the canon and the original essays — over-claiming
completeness is the exact fantasy (`naur.md:44`, "method") his lens exists to puncture.
Procida pulls toward *more*: the reader who just arrived needs the anchor to serve its four needs
*in place*, now, without first going to read Naur's 1985 paper — a doc that defers too much fails the
need at the moment of arrival.
These are both right and they cannot be blended into "make it somewhat complete." The owner must
choose a stance and state it (probably in `luminaries/_TEMPLATE.md`): is an anchor a *deferential
residue that points at canon*, or a *self-sufficient service to the reader*? N2 is the same tension
surfacing in the README's promise. Decide it once, deliberately.
