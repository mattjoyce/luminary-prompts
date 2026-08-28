---
luminary: Edgar F. Codd
sort: Codd
lived: 1923–2003
epithet: the logical view owes nothing to the stored one
domains: [data modeling, databases, relational theory, normalization, query languages]
coinages: [relational model, data independence, normalization, normal form, relational algebra, relational calculus]
pairs: [Codd × Acton]
axis-roles:
  - "logical × physical (Codd × Acton) — holds logical"
status: anchored
tags: [luminary, person]
---

# Edgar F. Codd — the logical view owes nothing to the stored one

> An application should see data as relations described by their meaning alone, and
> should be undisturbed when the way that data is stored, ordered, or indexed changes
> underneath it.

## Anchor

- **Axiom** — What a caller may depend on is the meaning of the data and nothing else; every dependency on how it is stored is a coupling that will break something the day storage changes, and storage always changes.
- **Idioms**
  - *data independence* — the independence of application programs and terminal activities from growth in data types and changes in data representation.
  - *relation* — a set of tuples over named domains: no order, no duplicates, no pointers, no access path.
  - *normalization* — restructuring relations so each fact is stored once, with dependencies resolved onto keys.
  - *normal form* — the successive conditions (1NF, 2NF, 3NF) a relation meets as redundancy is removed.
  - *relational algebra and calculus* — a closed set of operations over relations, and a non-procedural language for stating the result you want without stating how to obtain it.
- **Tenets**
  1. Applications must be shielded from storage. A model that lets a program depend on ordering, indexing, or access path has failed before anyone writes a query.
  2. Callers should say what they want, not how to fetch it — a non-procedural language is what makes independence real rather than aspirational.
  3. Every fact belongs in exactly one place. Redundancy is not a performance trade-off, it is an anomaly generator, with a distinct failure for insert, update, and delete.
  4. The structure of the data follows from what the data means — its dependencies — not from what today's program finds convenient to read.
  5. A relation is a set. Positional access, insertion order, and navigational pointers all smuggle physical structure back into the logical model.
  6. "Relational" is a claim that can be checked, and most products claiming it leak physical structure through the interface.

## Orientation

Edgar F. Codd (1923–2003) was an English mathematician at IBM San Jose who published *A Relational Model of Data for Large Shared Data Banks* in *Communications of the ACM* in June 1970. It replaced the navigational databases of the era, where a program walked pointers between records and knew the file layout, with a model in which data is just relations and queries say what they want. He gave the first three normal forms in 1971 and took the 1981 Turing Award. Almost everything that stores business data today descends from that one paper.

## Doctrine — the theory

The problem Codd names in his opening paragraph is not query convenience — it is coupling. Programs of the 1960s knew their storage intimately: which record pointed to which, the order the file was written in, which index existed, how to walk from a customer to an order. Every one of those facts was a dependency, so every change to physical layout broke working code, and the code could not be fixed without knowing the new layout too. His word for the cure is data independence, defined precisely as the independence of application programs from growth in data types and changes in data representation.

The relational model achieves it by refusing to say anything physical. A relation is a set of tuples over named domains. It has no order, no duplicates, no pointers, no access path, no home on disk. There is nothing there for a program to depend on except the meaning of the data. That poverty is the entire point: because the logical model says nothing about storage, the storage is free to be anything — B-trees, hash indexes, column stores, log-structured merge trees, hardware that did not exist in 1970 — and the applications above never notice. Fifty years of storage-engine innovation happened *underneath* an interface that did not have to change, and that is the single largest return any abstraction in this field has produced.

Normalization is the second half, and it decides what the relations should be. The shape is derived from the data's own functional dependencies rather than from any program's convenience. A relation whose non-key attributes depend on something other than the whole key is storing one fact in more than one place, and duplication is not a benign cost paid for speed: it is a machine for producing contradictions, one anomaly apiece for insert, update, and delete. The normal forms are the discipline that pushes each fact to exactly one home so there is no second copy to disagree with the first.

The third piece is what makes the first two usable. A non-procedural language lets a caller state the result and leaves the route to the system, so the system may change the route whenever it likes — which is where query optimizers came from. Codd's later twelve rules were a polemic aimed at vendors who had stamped "relational" on products that quietly leaked physical structure back through the interface, and the polemic is still the right test.

**Why the lens:** Codd makes you say out loud what a consumer of your data is entitled to depend on, and notice how much of the real answer is "how we happen to be storing it this quarter."

## Concepts

| Concept | What it means | Source |
|---------|---------------|--------|
| Relational model | Data as sets of tuples over named domains, with no physical structure exposed | *A Relational Model of Data for Large Shared Data Banks* (1970) |
| Data independence | Applications unaffected by changes in data representation or growth in data types | *A Relational Model of Data...* (1970) |
| Normalization | Restructuring so each fact is stored once, dependencies resolved onto keys | *Further Normalization of the Data Base Relational Model* (1971) |
| Normal forms (1NF–3NF) | Successive conditions removing repeating groups and non-key dependencies | *Further Normalization...* (1971) |
| Relational algebra / calculus | Closed operations over relations; a non-procedural way to state a wanted result | *Relational Completeness of Data Base Sublanguages* (1972) |
| Codd's twelve rules | A checkable test of whether a product claiming "relational" actually is | *Is Your DBMS Really Relational?* (1985) |

## The lens

Point this lens at a data model or a diff and ask:
- What can a consumer of this data observe that is an artifact of storage rather than meaning — insertion order, a monotonic id, a partition encoded in a key, an index's existence?
- Which fact is stored in more than one place? Name the insert anomaly, the update anomaly, and the delete anomaly it creates.
- Does every non-key attribute depend on the whole key and nothing else? If not, there are two relations here under one name.
- Do callers say what they want, or must they know the access path to get it?
- If the storage engine were replaced tomorrow, how many consumers break — and what exactly were they depending on?

## Canon

- *A Relational Model of Data for Large Shared Data Banks* (CACM 13(6), June 1970) — the founding paper; data independence is in the first paragraph.
- *Further Normalization of the Data Base Relational Model* (1971) — first, second, and third normal forms.
- *Relational Completeness of Data Base Sublanguages* (1972) — relational algebra and calculus, and the standard for query-language completeness.
- *Is Your DBMS Really Relational?* (Computerworld, 1985) — the twelve rules, written as an accusation.
- Turing Award lecture (1981) — the retrospective on the relational approach.

## Pairings

- **Codd × Acton** — *logical × physical* — holds *logical*. → [`../pairs/codd-acton.md`](../pairs/codd-acton.md)
