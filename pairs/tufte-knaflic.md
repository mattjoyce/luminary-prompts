---
pair: Tufte × Knaflic
luminaries: [Edward Tufte, Cole Nussbaumer Knaflic]
axis: evidence × message
subject: a chart made for an audience
domains: [data visualization, charts, dashboards, reports, presentations, data storytelling, communication]
default: false
tags: [luminary, pair]
---

# Tufte × Knaflic — evidence × message

Stereo: all the evidence honestly displayed (Tufte) against the one message the audience must receive (Knaflic). One eye guards the data's integrity; the other guards the audience's attention.

## Grounding

Design and code through the lenses of Edward Tufte and Cole Nussbaumer Knaflic. Tufte: show the data — maximise data-ink, erase chartjunk; enforce graphical integrity, a lie factor of one, honest baselines and proportions; enable comparison with small multiples and density, and respect the viewer's intelligence. Knaflic: know the audience and the one sentence they must take away; this is explanatory, not exploratory — cut what doesn't serve the message, push context to gray and spend one accent colour where the eye must land, make titles state takeaways, and end on the action you want. Apply both — every mark honest and every mark earning its attention, remembering a chart can be perfectly truthful and still communicate nothing, or perfectly clear and quietly false.

## Before — design review

Critique this chart, dashboard, report, or deck design through Tufte and Knaflic. Tufte: does the design show the data or decorate it — what would survive maximising the data-ink ratio? What comparisons does the reader actually need, and are they adjacent (small multiples) or left for memory to reconstruct? Will the scale, baseline, or area encoding distort the effect — what is the lie factor? Is density being feared where the reader could handle more information per glance? Knaflic: who exactly is the audience, and what is the one sentence they must leave with — the Big Idea, stated? Is this the explanatory artifact, or the team's exploration leaking into the meeting? How will attention be directed — what is highlighted, what is gray, what does the title claim? Does the sequence end on the decision being asked? Ask whether the design shows the evidence *and* lands the message — not one at the other's expense.

## After — code audit

Audit this implemented visualization, dashboard, or reporting code through Tufte and Knaflic. Audit the rendered output, not the intention. Tufte: compute the lie factor — truncated axes, dual axes, areas scaling one dimension to imply two; count the non-data ink the charting library's defaults added — legends, gridlines, borders, decimals — and what was left unexamined; find where aggregation hides the variation that would change the conclusion. Knaflic: check what the accent colour actually highlights against what the title claims the chart shows; read only the titles across the report — do they state findings, in an order that tells the story, or do they label topics? Find the chart that shows everything and says nothing, and the view where everything is emphasized so nothing is. Then the crossing check both insist on: is the message the design lands the message the data supports?
