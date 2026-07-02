#!/usr/bin/env bun
/**
 * check-coherence.ts — maintainer-run, READ-ONLY coherence check for the Luminaries repo.
 *
 * Asserts the promises the corpus makes about itself:
 *   1. INDEX.md "All pairs at a glance" table ↔ pairs/*.md is a bijection
 *   2. INDEX.md categorized list covers exactly the same pair set (the two maps agree)
 *   3. Every pair file has ## Grounding + its contracted passes
 *      (standard: Before/After; declared exceptions: naur-procida, thompson-feathers)
 *   4. Every anchor has the seven template sections
 *   5. Every anchor has coinages / pairs / axis-roles frontmatter
 *   6. Pair `luminaries:` ↔ anchor `pairs:` back-references close both ways
 *   7. INDEX.md roster ↔ luminaries/*.md is a bijection
 *   8. GROUNDINGS.md still contains every pair's Grounding verbatim (whitespace-normalized)
 *   9. No stray content-envelope residue in shipped files
 *
 * Usage: bun scripts/check-coherence.ts [--root <repo>]
 * Exit 0 = coherent; exit 1 = findings (printed).
 * Never writes. Never touches the network. Zero dependencies.
 */

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

const rootIdx = process.argv.indexOf("--root");
const ROOT = rootIdx > -1 ? process.argv[rootIdx + 1] : join(import.meta.dir, "..");

const findings: string[] = [];
const fail = (msg: string) => findings.push(msg);

const read = (p: string) => readFileSync(p, "utf8");
const mdFiles = (dir: string) =>
  readdirSync(join(ROOT, dir)).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
const norm = (s: string) => s.replace(/\s+/g, " ").trim();

interface Front { [k: string]: string }
function frontmatter(text: string): Front {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  const out: Front = {};
  if (!m) return out;
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z-]+):\s*(.*)$/);
    if (kv) out[kv[1]] = kv[2].trim();
  }
  return out;
}
const list = (v: string | undefined) =>
  (v ?? "").replace(/^\[|\]$/g, "").split(",").map((s) => s.trim()).filter(Boolean);
const sections = (text: string) =>
  text.split("\n").filter((l) => l.startsWith("## ")).map((l) => l.slice(3).trim());
const sectionBody = (text: string, header: string) => {
  const lines = text.split("\n");
  const start = lines.findIndex((l) => l.startsWith("## ") && l.slice(3).trim().startsWith(header));
  if (start === -1) return null;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++)
    if (lines[i].startsWith("## ")) { end = i; break; }
  return lines.slice(start + 1, end).join("\n");
};

// ---- load pairs and anchors --------------------------------------------------
const PASS_EXCEPTIONS: Record<string, string[]> = {
  "naur-procida": ["Reconciliation pass", "Authoring pass"],
  "thompson-feathers": ["First-contact pass"],
};
const STANDARD_PASSES = ["Before — design review", "After — code audit"];

const pairs = mdFiles("pairs").map((f) => {
  const text = read(join(ROOT, "pairs", f));
  return { slug: basename(f, ".md"), file: `pairs/${f}`, text, fm: frontmatter(text), heads: sections(text) };
});
const anchors = mdFiles("luminaries").map((f) => {
  const text = read(join(ROOT, "luminaries", f));
  return { slug: basename(f, ".md"), file: `luminaries/${f}`, text, fm: frontmatter(text), heads: sections(text) };
});

// ---- 1+2: INDEX two maps vs pairs/ ------------------------------------------
const index = read(join(ROOT, "INDEX.md"));
const glanceSection = index.split("## 📇 All pairs at a glance")[1]?.split("\n## ")[0] ?? "";
const rosterSection = index.split("## 👥 All luminaries")[1] ?? "";
const categorySection = index.split("## 📇")[0]; // every pairs/ link above the at-a-glance table is the categorized list
const pairLinks = (s: string) => new Set([...s.matchAll(/\(pairs\/([a-z-]+)\.md\)/g)].map((m) => m[1]));

const glance = pairLinks(glanceSection);
const categorized = pairLinks(categorySection);
const onDisk = new Set(pairs.map((p) => p.slug));
for (const s of glance) if (!onDisk.has(s)) fail(`INDEX at-a-glance routes to missing pairs/${s}.md`);
for (const s of onDisk) if (!glance.has(s)) fail(`pairs/${s}.md missing from INDEX at-a-glance routing table`);
for (const s of categorized) if (!glance.has(s)) fail(`INDEX categorized list has ${s} but at-a-glance table does not`);
for (const s of glance) if (!categorized.has(s)) fail(`INDEX at-a-glance has ${s} but categorized list does not — the two maps disagree`);

// ---- 3: pass contract ---------------------------------------------------------
for (const p of pairs) {
  if (!p.heads.some((h) => h.startsWith("Grounding"))) fail(`${p.file}: missing ## Grounding`);
  const wanted = PASS_EXCEPTIONS[p.slug] ?? STANDARD_PASSES;
  for (const pass of wanted)
    if (!p.heads.some((h) => h.startsWith(pass))) fail(`${p.file}: missing contracted pass "## ${pass}"`);
}

// ---- 4+5: anchor sections + frontmatter ---------------------------------------
const TEMPLATE_SECTIONS = ["Anchor", "Orientation", "Doctrine", "Concepts", "The lens", "Canon", "Pairings"];
for (const a of anchors) {
  for (const s of TEMPLATE_SECTIONS)
    if (!a.heads.some((h) => h.startsWith(s))) fail(`${a.file}: missing template section "## ${s}"`);
  for (const key of ["coinages", "pairs", "luminary"])
    if (!a.fm[key]) fail(`${a.file}: missing frontmatter "${key}:"`);
  if (!/^axis-roles:/m.test(a.text)) fail(`${a.file}: missing frontmatter "axis-roles:"`);
}

// ---- 6: back-references close both ways ---------------------------------------
const anchorByName = new Map(anchors.map((a) => [a.fm["luminary"], a]));
const pairByDisplay = new Map(pairs.map((p) => [p.fm["pair"], p]));
for (const p of pairs) {
  for (const person of list(p.fm["luminaries"])) {
    const a = anchorByName.get(person);
    if (!a) { fail(`${p.file}: luminary "${person}" has no anchor with luminary: "${person}"`); continue; }
    if (!list(a.fm["pairs"]).includes(p.fm["pair"]))
      fail(`${a.file}: pairs: does not back-reference "${p.fm["pair"]}" (${p.file} claims ${person})`);
  }
}
for (const a of anchors) {
  for (const disp of list(a.fm["pairs"])) {
    const p = pairByDisplay.get(disp);
    if (!p) { fail(`${a.file}: pairs: names "${disp}" but no pair file declares pair: "${disp}"`); continue; }
    if (!list(p.fm["luminaries"]).includes(a.fm["luminary"]))
      fail(`${p.file}: luminaries: does not include "${a.fm["luminary"]}" (${a.file} claims membership)`);
  }
}

// ---- 7: roster bijection --------------------------------------------------------
const rosterLinks = new Set([...rosterSection.matchAll(/\(luminaries\/([a-z-]+)\.md\)/g)].map((m) => m[1]));
const anchorSlugs = new Set(anchors.map((a) => a.slug));
for (const s of rosterLinks) if (!anchorSlugs.has(s)) fail(`INDEX roster links missing luminaries/${s}.md`);
for (const s of anchorSlugs) if (!rosterLinks.has(s)) fail(`luminaries/${s}.md missing from INDEX roster`);

// ---- 8: GROUNDINGS freshness ----------------------------------------------------
const groundingsNorm = norm(read(join(ROOT, "GROUNDINGS.md")));
for (const p of pairs) {
  const body = sectionBody(p.text, "Grounding");
  if (body === null) continue; // already failed above
  const bodyNorm = norm(body);
  if (bodyNorm && !groundingsNorm.includes(bodyNorm))
    fail(`GROUNDINGS.md has drifted from ${p.file} ## Grounding (source is canonical — regenerate the copy)`);
}

// ---- 9: no content-envelope residue in shipped files -----------------------------
const RESIDUE = "</" + "content>";
const shippedDirs = ["pairs", "luminaries", "skills/luminaries", "skills/luminaries/Workflows", ".claude-plugin"];
const shipped: string[] = readdirSync(ROOT).filter((f) => f.endsWith(".md")).map((f) => f);
for (const d of shippedDirs)
  if (existsSync(join(ROOT, d)))
    for (const f of readdirSync(join(ROOT, d)))
      if (f.endsWith(".md") || f.endsWith(".json")) shipped.push(join(d, f));
for (const f of shipped)
  if (read(join(ROOT, f)).includes(RESIDUE)) fail(`${f}: contains stray ${RESIDUE} residue`);

// ---- report ----------------------------------------------------------------------
if (findings.length) {
  console.error(`✗ ${findings.length} coherence finding(s):\n`);
  for (const f of findings) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`✓ coherent: ${pairs.length} pairs, ${anchors.length} anchors, INDEX maps agree, back-references closed, GROUNDINGS fresh, no residue.`);
