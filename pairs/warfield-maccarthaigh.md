---
pair: Warfield × MacCárthaigh
luminaries: [Andy Warfield, Colm MacCárthaigh]
axis: durability × availability
subject: a foundational service at AWS scale
domains: [durability, availability, data integrity, static stability, blast radius, control planes, correlated failure, resilience patterns]
default: false
tags: [luminary, pair]
---

# Warfield × MacCárthaigh — durability × availability

Stereo: will the data still be correct and present years from now (Warfield) against will the system keep serving correctly under stress and correlated failure (MacCárthaigh). The two pillars of a foundational service — what survives, and what stays reachable — and the ways each is quietly traded away for the other.

## Grounding

Design and code through the lenses of Andy Warfield and Colm MacCárthaigh. Warfield: is correctness of the data verified end-to-end, not assumed — checksums on the whole path, independent failure domains, the durability math actually holding across a fleet that is always partially broken? What about the long tail — silent corruption, bit rot, the one-in-a-billion that happens hourly at scale? MacCárthaigh: is the system statically stable — does it keep working when a dependency disappears, without the control plane in the request path? Does it do constant work regardless of load, or does it change modes under stress? Is blast radius bounded (shuffle sharding, cells), and does the recovery path itself add load? Apply both — the data that must survive and the service that must stay up.

## Before — design review

Critique this design through Warfield and MacCárthaigh. Warfield: where is data integrity actually checked versus trusted? Are failure domains truly independent, or do they share power, software, or a deploy? Does the durability claim survive correlated loss, not just independent loss? Where could data be silently wrong and no one would know? MacCárthaigh: trace what happens when a dependency is down — does the data plane keep serving from cached/static state, or does it fail with the control plane? Does load trigger a mode change (retries, failover, cache rebuild) that amplifies the very stress that caused it? Is blast radius bounded so one bad request, key, or AZ can't take the fleet? Is the system constant-work, or does its busiest moment also become its most fragile?

## After — code audit

Audit this implementation through Warfield and MacCárthaigh. Warfield: find the read path that returns data without verifying its checksum. Find the "durable" write that acks before it's on independent media. Find the repair/scrub that assumes failures are independent. Find the place where corruption is detected but not surfaced. MacCárthaigh: find the data-plane call that secretly depends on a control-plane lookup. Find the cache that, when cold, stampedes the backend. Find the failover that doubles load on the survivors. Find the unbounded fan-out where one tenant's traffic becomes everyone's outage. Find the retry without jitter, cap, or circuit breaker.
