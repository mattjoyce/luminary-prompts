# Ousterhout × Liskov — surface × substitution — the module boundary

*Prerelease code audit, 2026-07-02. Stage: After — the thing is built.*

## Frame

The module boundary under audit is not code but the skill's own information architecture.
The **interface** is `skills/luminaries/SKILL.md` plus the `INDEX.md` routing table: it promises
"route by subject/stage/intent, load a grounding plus anchor slices." The **implementations** behind
that interface are the 17 files in `pairs/` and the 30 anchors in `luminaries/`. Liskov asks whether
every implementation honours the contract the interface publishes, so that any pair or anchor can be
substituted in and the skill still works. Ousterhout asks whether the interface is *deep* — hiding
real routing power behind a small surface — or whether the same routing knowledge has leaked into so
many files that changing it ripples everywhere.

The mechanical result up front: **the two hard contracts hold — zero structural violations.** All 17
pair files carry `## Grounding` and the correct passes; all 30 anchors carry exactly the seven named
sections; all 30 anchors carry `coinages`, `pairs`, and `axis-roles` frontmatter; all 17 pairs carry
`luminaries`, `axis`, `subject`, `default`. The findings below are about *surface* and about two
softer contract edges, not about missing sections.

---

## Ousterhout's findings — surface

**🟠 Change amplification: the routing knowledge is denormalised across five files with no generator.**
The single fact "there is a pair Ousterhout × Liskov, axis *surface × substitution*, subject *the
module boundary*" is physically written in, at minimum: `pairs/ousterhout-liskov.md:2-5`
(frontmatter), its `:11` title, `INDEX.md:46` (categorised list), `INDEX.md:88` (the "at a glance"
routing table), `README.md:22` (the axis table), `GROUNDINGS.md:13` (the concatenated header), and
both `luminaries/ousterhout.md:9-10` and `luminaries/liskov.md:9-10` (`axis-roles`) plus their
`## Pairings` sections. That is roughly **nine loci for one axis string**. Adding or renaming a single
pair is a seven-to-nine-file edit with no tooling to keep them consistent. This is precisely the
"one design decision reflected in multiple modules" that `ousterhout.md:63` names as information
leakage. For a static prompt corpus it is a *defensible* tradeoff — there is no runtime, and human
authors can eyeball it — but it is real, and it should be named before release, not discovered on the
first pair someone adds. The strategic move (`ousterhout.md:71`) is a generator: derive `INDEX.md`'s
tables, `README.md`'s table, and `GROUNDINGS.md` from the `pairs/` frontmatter. Absent that, document
the invariant loudly.

**🟠 `GROUNDINGS.md` is a hand-maintained cache with no coherence check.** `GROUNDINGS.md:3` admits it:
"Canonical source is the individual files in `pairs/`." I diffed the Ousterhout × Liskov grounding —
`pairs/ousterhout-liskov.md:17` against `GROUNDINGS.md:15` — and today they are **byte-identical**, so
the cache is currently warm. But nothing enforces it. The moment someone sharpens a grounding in
`pairs/` and forgets the copy, the concatenated paste-file silently serves stale text, and the user
who "pastes the whole set at once" (`README.md:75`) gets a different lens than the skill loads. This
is a shallow duplication paying interface cost (a second file to maintain) without hiding anything.
Either generate it or add a CI check that the concatenation equals the sources.

**🟡 The two named exception pairs are a small leak in an otherwise deep interface.** The interface has
to special-case its own implementations: `SKILL.md:58-60` hardcodes that Naur × Procida uses
Reconciliation/Authoring passes and Thompson × Feathers uses a single First-contact pass, and
`README.md:62-63` repeats it in prose. The clean version of this abstraction reads whatever `## `
pass-headers a pair file actually declares and routes on them, so the interface needs no per-file
knowledge. As written, the pass-name vocabulary lives in *three* places (the skill, the readme, and
the pair files themselves) and can drift. That said — the skill is otherwise a genuinely **deep
module**: "classify subject/stage/intent, look up the pair, load the slice" is a small interface over
17 pairs × multiple passes × 4 intent slices of real capability. The leak is two named exceptions, not
a shallow design. Hence 🟡, not 🟠.

**🟡 A dead patch of surface: `## Pairings` is promised but never routed to.** `SKILL.md:63` declares
each anchor has "seven sections," and the seven exist. But the Intent→slice table (`SKILL.md:65-70`)
consumes only six of them — Doctrine, Anchor, The lens, Concepts, Canon, Orientation. **No intent ever
loads `## Pairings`.** It is navigational chrome that every anchor must carry and no reader path
requests. Not harmful, but it is interface the module pays for and never spends. Worth a line in the
template noting it is for human navigation, not for the loader.

---

## Liskov's findings — substitution

**Substitution holds — this is the strong result.** The contract `SKILL.md` publishes is: *any* pair
file can be dropped into a route and it will have a Grounding plus the passes the skill expects, and
*any* anchor can be dropped in and it will have the seven sections and the frontmatter the loader
reads. I checked all 34 implementations mechanically:

- **Pairs (17/17 pass):** every file has `## Grounding`. Fifteen carry `## Before — design review` +
  `## After — code audit`; the two exceptions carry exactly the passes `SKILL.md:58-60` names for them
  (`naur-procida.md`: Reconciliation + Authoring; `thompson-feathers.md`: First-contact). The
  exceptions are *declared* in the interface, so they are not substitution violations — they are a
  documented widening, which is legitimate. No pair promises a pass the skill can't find; no pass the
  skill routes to is missing from its pair.
- **Anchors (30/30 pass):** every anchor has the identical seven-section signature — Anchor,
  Orientation, Doctrine — the theory, Concepts, The lens, Canon, Pairings — matching
  `luminaries/_TEMPLATE.md`. Every anchor carries `coinages`, `pairs`, `axis-roles`, and
  `status: anchored`. The `coinages` field — which `INDEX.md:104-105` promises is "the semantic hooks
  the selector matches a subject against" — is present on all 30, so the frontmatter contract the
  router depends on is honoured everywhere. No behavioural-subtype violation found.

**🟡 Referential integrity across the boundary is sound but unenforced.** The 17 pairs open 34 luminary
slots; 30 people fill them, four appearing in two pairs each (Brooker, Cabrera, Helland, Hickey) — the
arithmetic closes, and `INDEX.md`'s "In pairs" column (`:109-138`) agrees with each anchor's `pairs:`
frontmatter for the pair I traced. But this bidirectional link (pair `luminaries:` ↔ anchor `pairs:` ↔
anchor `## Pairings` ↔ `INDEX` roster) is another promise kept only by hand. A subtype that claims
"I am in pair X" while pair X has dropped it would type-check section-wise and still lie. This is the
same class as the Ousterhout leak, seen from the contract side: the promise is currently true, nothing
guarantees it stays true.

**🟡 A precondition the interface states but does not fully honour: `look up` doesn't load the axiom.**
`SKILL.md:68` maps intent **look up** → `Concepts` + `Canon`. But a reader looking up "what did
Liskov coin?" wants the *idioms* — which live in `## Anchor` (`liskov.md:24-29`), not in `## Concepts`.
The Concepts table (`liskov.md:54-60`) overlaps the Anchor idioms but is not a superset (e.g. the
Anchor's framing of *cluster* and the tenets are Anchor-only). So the "look up" caller can be handed
*less than the promise entitled them to* — a mild postcondition-weakening. Consider adding `Anchor` to
the look-up slice, or narrowing what look-up claims to serve.

---

## Convergence

Both eyes land on the **same defect from opposite sides**: the routing knowledge is duplicated across
`SKILL.md`, `INDEX.md`, `README.md`, `GROUNDINGS.md`, the pair frontmatter, and the anchor frontmatter,
and *nothing verifies the copies agree.* Ousterhout calls it information leakage and change
amplification (edit one axis, touch nine places); Liskov calls it an unenforced contract (every
cross-file promise is currently true but only by authorial discipline). They agree on the remedy:
**make one source canonical and derive or check the rest** — a generator from `pairs/` frontmatter, or
failing that a CI coherence check plus a loud "these are hand-synced" note. They also agree the core
skill is sound: a genuinely deep interface over implementations that, audited mechanically, all keep
their structural promises today.

## Tension

Where the two eyes pull apart is on **whether the duplication should exist at all.** Ousterhout wants
it *gone* — every redundant copy is complexity a future maintainer pays for; the deep move is to
generate `INDEX`/`README`/`GROUNDINGS` so the fact lives once. Liskov is content for it to *exist as
long as the contract is enforceable* — redundancy that is checked is not a defect, it is defence in
depth; a paste-friendly `GROUNDINGS.md` and a human-scannable `README` table have real value to
callers, and the fix is a *checker*, not deletion. Ousterhout would collapse the surface; Liskov would
keep the surface and prove it consistent. The repo should not average these into "half a generator" —
it should pick: either single-source-and-generate (Ousterhout) or keep-the-copies-and-CI-verify
(Liskov). Both are correct; shipping neither is the only wrong answer.
