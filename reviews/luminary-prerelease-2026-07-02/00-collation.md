# Collation — Luminaries pre-release panel · 2026-07-02

Four stereo lenses were run independently and blind over the Luminaries repo at commit `44d3864`
(packaged as a Claude Code plugin, release pending). The question the panel judged: **is this repo
ready to meet strangers?** The three best-fit pairs were chosen on the artifact's own axes — it *is*
documentation (Naur × Procida, theory × need), it is about to be *an unfamiliar repository* to every
adopter (Thompson × Feathers, trust × comprehension), and its routing table + file format is *a module
boundary* with 47 implementations behind it (Ousterhout × Liskov, surface × substitution). The
wildcard aimed the repo's own method at its foundations: Cabrera × Bateson (operationalised ×
ecological) auditing whether the catalog's distinctions are real. Findings files: `01-naur-procida.md`,
`02-thompson-feathers.md`, `03-ousterhout-liskov.md`, `04-cabrera-bateson.md`.

## Verdict table

| Pair | Axis | One-line verdict |
|---|---|---|
| **Naur × Procida** | *theory × need* | The documented `$REPO` resolution has already drifted from how the skill actually runs — the how-to's first step silently fails the arriving user (1🔴 4🟠 3🟡) |
| **Thompson × Feathers** | *trust × comprehension* | The three files the plugin executes ship authoring residue (`</content>`), and the routing they encode has no mechanism keeping it true (2🔴 2🟠 4🟡) |
| **Ousterhout × Liskov** | *surface × substitution* | All 34 implementations mechanically honour the contract today — but one axis fact lives in ~9 loci with nothing enforcing agreement (0🔴 3🟠 4🟡) |
| **Cabrera × Bateson** (wildcard) | *operationalised × ecological* | The router's decision key cannot discriminate in the densest region of its own table, and the tie-breaker is circular (1🔴 3🟠 6🟡) |

## The shared meta-finding

**Every structural promise this repo makes is currently true, and nothing keeps any of them true.**
Three lenses reached this independently from different directions: Ousterhout × Liskov *verified* the
promises (17/17 pairs, 30/30 anchors pass the section-and-frontmatter contract; GROUNDINGS byte-identical
to source today) and then observed the same routing fact is hand-written in ~9 loci with no generator
or check (`03:26-48`). Thompson × Feathers reached the identical locus as its two must-fixes: no
characterization test that the routing table matches the files it routes to, and `GROUNDINGS.md` a
derived artifact with no drift check (`02:19-21`). Naur × Procida found the milder symptom: two
unguarded pair tables with nothing marking which is canonical (`01:41-47`). The wildcard found the
structural version: the ten-category map humans read is amputated from the flat table the router
consumes (`04:22`). One claim, four angles: **correctness here is maintained by authorial discipline,
not by mechanism — fine for a private corpus, a liability the day the first stranger sends a PR.**

## Where the pairs converge

**C1 🔴 — Routing coherence has no mechanism.** Found by Thompson × Feathers (`02:19,21` — legacy code
by definition; 🔴), Ousterhout × Liskov (`03:26-48` — change amplification / unenforced contract; 🟠),
Naur × Procida (`01:41-47` — no canonical marker; 🟡), Cabrera × Bateson (`04:22` — two-map split; 🟠).
**Unified fix:** one maintainer-run, read-only coherence script — assert every INDEX routing row has its
`pairs/<slug>.md`, every luminary link resolves, pair `luminaries:` ↔ anchor `pairs:` back-references
close, and `GROUNDINGS.md` equals the concatenation of its sources. Run before tagging; never runs on
the adopter's machine (this is the resolution T2 below licenses). Mark `INDEX.md` canonical in prose.

**C2 🔴 — `$REPO` resolution fails the plugin's primary use case.** Found by Naur × Procida (`01:17-29` —
🔴, `BASH_SOURCE` unset under tool execution, cwd is the *target* repo, resolution returns garbage) and
Thompson × Feathers (`02:27` — 🟡, `readlink -f` is a GNU-ism absent on the darwin systems this ships
from; `02:13` — the snippet is also the skill's only shell execution, the exact thing a cautious
adopter audits). **Unified fix:** in `SKILL.md:24-34`, lead with the plugin-install path (the harness's
known plugin root), keep the "directory containing `INDEX.md`, `pairs/`, `luminaries/`" rule as the
stated contract rather than a footnote, and demote or drop the cwd-relative snippet. Add T×F's one-line
blast-radius assurance to the README install block.

**C3 🟠 — The install front door can't be trusted as written.** Found by Thompson × Feathers (`02:11` —
`mattjoyce/luminary-prompts` unverifiable from inside a repo whose directory is `Luminaries`; breaks on
line one if the slug differs) and Naur × Procida (`01:71-78` — the `luminary-prompts` / `luminaries` /
`Luminaries` naming shift makes the reader second-guess a reference that must be boring). **Unified
fix:** before tagging, confirm the published GitHub slug matches `README.md:142` and `plugin.json:8`
exactly, and add one line explaining the repo-slug / plugin-name difference (or align the names).

**C4 🟠 — The corpus itself is sound — the defects are all in the meta-layer.** Naur × Procida: the
core thesis is transmitted redundantly and coherently; pair↔anchor structure is a clean bijection
(`01:84-92`). Ousterhout × Liskov: zero substitution violations across all 47 files; the skill is a
genuinely deep module (`03:16-20,72-88`). This convergence sets the frame for the verdict: nothing
found by any lens requires touching the 47 content files. Ship-gating work is confined to `SKILL.md`,
`INDEX.md`, `README.md`, and packaging.

## The genuine cross-pair tensions

**T1 — Readable artifact vs verified artifact.** Thompson (`02:37`): the repo's greatest trust asset is
being *just markdown* — every tool added is new unread execution adopters must trust; fix the residue
and *stop*. Feathers (`02:39`), Liskov and Ousterhout (`03:121-131`): an unchecked hand-synced routing
table is legacy code, and the corpus will grow. **The decision the owner must make:** how much
machinery may this repo carry? The panel's own escape hatch — a maintainer-run read-only checker (C1)
— is licensed by both sides *only* because it never executes on the adopter's machine. But O×L adds a
sharpening the owner cannot dodge: **pick one** — single-source-and-generate (Ousterhout) or
keep-copies-and-verify (Liskov). Half a generator is the only wrong answer.

**T2 — A crisper map vs an honest map.** Cabrera (`04:12-26`) wants more explicit structure: a
discriminator for the distributed trio, a category column the router can use, tension-axes marked
apart from coverage-pairs. Bateson (`04:50`) warns the crisper this table gets the more confidently it
lies — the repo enshrines Bateson as an anchor while its core artifact commits the box-drawing he
called the root error; single-pair mode 1 is sold as the default while mode 2 (the panel) is the
honest act for any real system. **The decision:** make the router more decidable, or make it more
honest about undecidability. The panel's own existence argues for Bateson's floor: put *"when in
doubt, fan out"* in the table's first paragraph — then Cabrera's discriminator can be added without
the map overclaiming.

**T3 — What an anchor claims to be.** Naur (`01:99-109`): a thin deferential residue pointing at
canon — overclaiming completeness is the fantasy his lens punctures (and the README currently makes
that overclaim, `01:31-39`). Procida: self-sufficient service to the reader's need *now*. **The
decision:** state the stance once in `luminaries/_TEMPLATE.md` and reconcile `README.md:90-93` to it.
Not averageable — "somewhat complete" serves neither.

## Single-lens signals — each lens earning its keep

- **Naur × Procida:** no tutorial quadrant — nothing a stranger can run in 60 seconds with guaranteed
  success (`01:53-60`); the README serves three Diátaxis modes on one page (`01:62-69`).
- **Thompson × Feathers:** the stray `</content>` residue itself (`SKILL.md:111`,
  `Workflows/Review.md:46`, `Workflows/Collate.md:47`) — unowned artifact in exactly the three files a
  marketplace install feeds to an agent (`02:9`); the `.gitignore` `${HOME}/` provenance tell —
  scan for other unintended artifacts before tagging (`02:15`); no `pairs/_TEMPLATE.md` and no
  "adding a pair" checklist — the routing-breaking change is the unscaffolded one (`02:23`).
- **Ousterhout × Liskov:** `## Pairings` is contract surface no intent ever loads — dead weight every
  anchor must carry (`03:61-66`); the *look up* slice under-delivers its promise (coinages live in
  `## Anchor`, which look-up never loads, `03:99-105`).
- **Cabrera × Bateson:** the circular tie-breaker (`SKILL.md:48-49` presupposes the classification it
  owes the user) and the hidden real discriminator — the co-luminary pole — in the distributed trio
  (`04:12-20`); the blind spot: six luminaries on distributed data, zero pairs for adversarial
  security, performance, or concurrency — the map's resolution mirrors its author (`04:36`);
  "(new domain)" edit-history fossils at `INDEX.md:70,74` (`04:38`).

## Build verdict

**SHIP-WITH-FIXES.** No lens found rot in the corpus itself — 47 content files, zero violations, the
thesis transmitted faithfully. Everything gating sits in the thin executable/packaging layer and is
cheap. The gate:

1. 🔴 Delete the three stray `</content>` lines — `skills/luminaries/SKILL.md:111`,
   `skills/luminaries/Workflows/Review.md:46`, `skills/luminaries/Workflows/Collate.md:47` (C1-adjacent, T×F).
2. 🔴 Rewrite `$REPO` resolution to lead with the plugin-install path; make the INDEX/pairs/luminaries
   directory rule the contract, not the footnote — `SKILL.md:24-34` (C2).
3. 🔴 Fix or honestly document routing in the distributed trio: add a per-row discriminator (the
   co-luminary pole) or an explicit "when in doubt, fan out" rule replacing the circular tie-breaker —
   `SKILL.md:48-49`, `INDEX.md:93-95` (C×B; T2's floor).
4. 🔴 Verify the published repo slug matches `README.md:142` / `plugin.json:8` before the tag (C3).
5. 🟠→gate by choice: the maintainer-run read-only coherence checker (C1). The panel judges this the
   cheapest permanent close of its own meta-finding; T1 records the owner's licensed alternative
   (generate instead) and the one forbidden move (neither).

Should-fix, non-gating: tutorial block + README mode-split (N×P), `pairs/_TEMPLATE.md` + add-a-pair
checklist (T×F), strip "(new domain)" fossils (C×B), README anchor-promise reconciled to the residue
framing (N×P/T3), mark INDEX canonical (N×P), note the security/performance blind spot or add the pair
(C×B).
