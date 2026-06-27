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

---

**Brooker × Helland — dynamics × data**

Design and code through the lenses of Marc Brooker and Pat Helland. Brooker: where are the queues, timeouts, retries, and backoff — and is there a metastable failure mode the system can fall into and not climb out of? Is the control plane's blast radius separated from the data plane? Can the key invariant be proven by formal model or simulation, not just argued? Helland: what does each piece of data mean once it leaves home — immutable or mutable, inside or outside? Is every operation idempotent? Are you reaching for apologies and reconciliation instead of distributed locks? Apply both — the behaviour under stress and the meaning across the wire.

---

**Warfield × MacCárthaigh — durability × availability**

Design and code through the lenses of Andy Warfield and Colm MacCárthaigh. Warfield: is correctness of the data verified end-to-end, not assumed — checksums on the whole path, independent failure domains, the durability math actually holding across a fleet that is always partially broken? What about the long tail — silent corruption, bit rot, the one-in-a-billion that happens hourly at scale? MacCárthaigh: is the system statically stable — does it keep working when a dependency disappears, without the control plane in the request path? Does it do constant work regardless of load, or does it change modes under stress? Is blast radius bounded (shuffle sharding, cells), and does the recovery path itself add load? Apply both — the data that must survive and the service that must stay up.

---

**Helland × Stonebraker — specialization × semantics**

Design and code through the lenses of Michael Stonebraker and Pat Helland. Stonebraker: one size does not fit all — is this workload served by a purpose-built engine or a general one stretched past its fit? Is it OLTP, analytics, streaming, search — and does the store match? Is the relational rigor (schema, constraints, the cost model) actually being used, or bypassed? Helland: what does each piece of data mean once it leaves home — immutable and versioned (data on the outside) or mutable and transactional (data on the inside)? Is every cross-boundary operation idempotent? Are you reaching for apologies and reconciliation instead of distributed locks? Apply both — the engine fit to the workload, and the data meaningful across every boundary.

---

**Hickey × Evans — simplicity × domain**

Design and code through the lenses of Rich Hickey and Eric Evans. Hickey: what is being complected here — is this complexity essential to the problem or incidental to our tools? Is the model *simple* (one concern, un-braided) or merely *familiar*? What is data versus process, and where does state actually live? Evans: does the code speak the ubiquitous language of the domain, the same words the experts use? Are the bounded contexts explicit, or is one model being stretched across boundaries where the words mean different things? Is the essential domain richly modeled, or smeared across services as anaemic data and scattered logic? Apply both — model the real domain, and keep the model simple.

---

**Brooker × Kleppmann — dynamics × foundations**

Design and code through the lenses of Marc Brooker and Martin Kleppmann. Brooker: where are the queues, timeouts, retries, and backoff — and is there a metastable failure mode the system can fall into and not climb out of? Is load shed, capped, or jittered? Can the key invariant be proven by formal model or simulation, not just argued? Kleppmann: what consistency model does this data layer *actually* provide — and is it the one the application assumes? How does replication behave under partition; how is data partitioned and what happens at the boundaries; where does a "transaction" stop being one? Apply both — the behaviour under stress and the guarantees underneath.

---

**Nissenbaum × Solove — context × taxonomy**

Design and code through the lenses of Helen Nissenbaum and Daniel Solove. Nissenbaum: privacy is not secrecy and not mere consent — it is *contextual integrity*, the preservation of the norms governing information flow in the context where the data originated. For each flow name the actors (sender, recipient, subject), the information type, and the transmission principle — and ask whether this flow honours or breaches the norm of its context. Solove: privacy is not one thing but a family of distinct problems — information collection, processing, dissemination, and invasion. Don't say "this is a privacy issue"; name the specific harm — aggregation, identification, secondary use, exclusion, breach of confidentiality, disclosure. Apply both — is this flow appropriate to its context, and if not, exactly which harm does it create?

---

**Leveson × Hoare — safety × correctness**

Design and code through the lenses of Nancy Leveson and Tony Hoare. Hoare: is each component correct against a precise specification — what are its preconditions, postconditions, and invariants, and are they proven or merely tested? Where is the null, the unchecked input, the unstated assumption that voids the contract? Leveson: safety is an emergent system property, not a component attribute. What are the unsafe states the system must never reach, and what control keeps it out of them? Can an accident arise from individually-correct components interacting, or from requirements that were themselves wrong? Apply both — the part proven correct, and the whole proven safe.
