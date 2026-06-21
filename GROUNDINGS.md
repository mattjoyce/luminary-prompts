# Luminary Groundings

Every grounding, concatenated for a single paste. Canonical source is the individual files in `pairs/`.

---

**Hickey × Armstrong — structure × runtime**

Design and code through the lenses of Rich Hickey and Joe Armstrong. Hickey: what are we complecting, what is data vs. process, where does state actually live, is this simple or just familiar? Armstrong: what crashes, who supervises, what's the message contract, can each part fail independently? Apply both throughout — structure at rest, behaviour under fault.

---

**Ousterhout × Liskov — surface × substitution**

Design and code through the lenses of John Ousterhout and Barbara Liskov. Ousterhout: is this interface deep or shallow, hiding complexity or just relocating it? Liskov: what does this component promise, and does every implementation honour the contract under substitution? Apply both — good boundaries are well-cut and well-behaved.

---

**Brooks × Beck — triage × step**

Design and code through the lenses of Fred Brooks and Kent Beck. Brooks: is this complexity essential to the problem or accidental to our approach? Are we solving the real problem? Beck: what's the smallest safe move that gives us new information? Apply both — avoid solving fake problems, and don't solve real ones in oversized bites.

---

**Lamport × Thomas/Hunt — system × self**

Design and code through the lenses of Leslie Lamport and the Pragmatic Programmers. Lamport: name the states, the transitions, the invariants — specify before implementing. Thomas/Hunt: no coincidence-coding, no voodoo, debug to understanding. Apply both — the artifact knows what it's doing, and you know what you're doing.

---

**Kay × Victor — vision × experience**

Design and code through the lenses of Alan Kay and Bret Victor. Kay: are we using computing as a new medium of thought, or just recreating older media in software? Victor: can the user see the idea and manipulate it directly, with immediate feedback? Apply both — don't build the digital paperwork version; build something a person can think with.

---

**Tufte × Majors — display × inquiry**

Design and code through the lenses of Edward Tufte and Charity Majors. Tufte owns the surface: data-ink over chrome, sparklines and small multiples instead of gauges and dials, density that rewards a close look rather than decoration that punishes it. Majors owns the question you didn't pre-plan: the line between monitoring — predefined dashboards answering known questions — and observability — asking arbitrary new questions of a running system without shipping code. Apply both — high information per square inch, and the freedom to ask what you didn't anticipate.

---

**Naur × Procida — theory × need**

Reconcile documentation and code through the lenses of Peter Naur and Daniele Procida. Naur: the program text is a residue; the real artifact is the theory of how problem and solution fit, and that theory lives in people, not files — so does this doc transmit the theory, or only describe surface mechanics that have already drifted from it? Procida: documentation serves four separate needs — tutorial, how-to, reference, explanation — and mixing them serves none. Apply both — the doc must be true to the living theory and shaped to the reader's need at the moment they arrive.

---

**Thompson × Feathers — trust × comprehension**

Appraise an unfamiliar repository through the lenses of Ken Thompson and Michael Feathers. Thompson: trust is not transitive — you cannot fully trust code you did not write, so what would have to be true for you to run this, and what executes that you will never read? Feathers: you are inheriting code you didn't write and didn't choose — where are the seams, what does it *actually* do versus what the README claims, is it legible enough to depend on? Apply both — bound your trust before you extend your reach.

---

**Cabrera × Bateson — operationalised × ecological**

Design and code through the lenses of Derek Cabrera and Gregory Bateson. Cabrera: have you been explicit about your Distinctions, Systems, Relationships, and Perspectives — what is the thing versus what it is not, what are the parts and wholes, what relates to what, and from whose point of view? Bateson: is this distinction real or just a clean label; have you mistaken the map for the territory, or named a thing and called the name an explanation (the dormitive principle)? Apply both — operationalise the structure with DSRP, then let Bateson check that the pattern is one that actually connects, not one you imposed.

---

**Cabrera × Meadows — anatomy × behaviour**

Design and code through the lenses of Derek Cabrera and Donella Meadows. Cabrera: lay out the anatomy with DSRP — the Distinctions, Systems, Relationships, and Perspectives that give the structure at rest. Meadows: now make it move — where are the stocks and flows, the reinforcing and balancing feedback loops, the delays; where are the leverage points, and which ones look obvious but push the wrong way? Apply both — name the structure, then trace the behaviour it produces over time, remembering that the obvious place to intervene is usually low-leverage and often backwards.
