---
id: core-principles
title: OMI-SPEC-000 — Core Principles
sidebar_position: 1
description: Foundational principles of the Open Manuscript Initiative.
---

# OMI-SPEC-000 — Core Principles

**Status:** Draft  
**Version:** 0.1

---

# Abstract

The Open Manuscript Initiative (OMI) is founded on the belief that scholarly knowledge should exist independently of any particular software, publisher, file format, or rendering technology.

This document defines the architectural principles that guide every OMI specification and implementation.

These principles are normative. All future OMI specifications SHOULD remain consistent with them.

---

# 1. Vision

Scholarly knowledge should be:

- portable
- interoperable
- machine-readable
- human-readable
- publisher-independent
- software-independent
- preservable for future generations

OMI exists to achieve these goals.

---

# 2. Separation of Concerns

OMI separates concepts that traditional document editors merge together.

The following layers are independent:

```
Knowledge

↓

Semantics

↓

Structure

↓

Relationships

↓

Presentation
```

Only the presentation layer depends on the publication format.

Everything else remains stable.

---

# 3. Content is Canonical

The scholarly content is the canonical representation.

All rendered forms are derived from it.

Examples include:

- PDF
- HTML
- DOCX
- EPUB
- JATS XML
- LaTeX
- future formats

None of these formats defines the manuscript.

They merely render it.

---

# 4. Semantics Before Formatting

Formatting is presentation.

Semantics are knowledge.

OMI stores semantic meaning rather than visual appearance.

Examples:

Instead of:

> Bold

OMI stores:

> Heading

Instead of:

> Italic

OMI stores:

> Scientific name

Instead of:

> Footnote formatting

OMI stores:

> Scholarly annotation

---

# 5. Everything is a Scholarly Object

Every meaningful element is represented as an independent scholarly object.

Examples include:

- manuscript
- section
- paragraph
- heading
- figure
- table
- equation
- citation
- bibliography entry
- annotation
- review
- dataset
- supplementary material

Objects possess stable identities independent of rendering.

---

# 6. Relationships are First-Class Citizens

Relationships are not hidden inside formatting.

They are explicit semantic objects.

Examples include:

- citation
- annotation
- review
- cross-reference
- dependency
- provenance

Relationships remain portable.

---

# 7. Stable Identity

Every scholarly object should possess a stable identifier.

Identifiers remain valid even after editing.

Stable identity enables:

- annotations
- citations
- collaboration
- peer review
- versioning

---

# 8. Presentation is Renderer-Dependent

Presentation depends entirely on the target publication format.

The same manuscript may become:

- PDF
- HTML
- EPUB
- DOCX
- JATS XML
- Braille
- speech synthesis
- future media

without changing the underlying manuscript.

---

# 9. Identity and Content are Independent

Personal identity is not intrinsic to scholarly content.

Authors, reviewers, editors, translators, and AI assistants interact with manuscripts through well-defined semantic roles.

Privacy and anonymity are implementation concerns supported by the data model rather than embedded in document content.

---

# 10. Open by Design

All OMI specifications SHALL be:

- openly documented
- openly versioned
- openly implementable
- vendor-neutral
- extensible

No implementation shall become mandatory.

---

# 11. Preservation First

Scholarly manuscripts must remain understandable decades into the future.

Therefore OMI avoids dependencies on:

- proprietary software
- proprietary file formats
- proprietary cloud services
- proprietary rendering engines

The semantic manuscript remains the archival record.

---

# 12. Interoperability

OMI is designed to cooperate with existing scholarly infrastructure.

Examples include:

- JATS
- Crossref
- DataCite
- ORCID
- DOI
- ROR
- CSL
- Dublin Core
- Schema.org
- IIIF

OMI complements existing standards rather than replacing them.

---

# 13. Artificial Intelligence

Artificial intelligence is treated as a scholarly participant.

AI-generated suggestions:

- are annotations
- remain attributable
- are reviewable
- are reversible
- never replace the canonical manuscript automatically

Human authors retain editorial authority.

---

# 14. Extensibility

OMI is intentionally extensible.

New scholarly object types, annotation types, publication formats, and workflows may be introduced without breaking existing manuscripts.

Backward compatibility should be preserved whenever practical.

---

# 15. Community Governance

OMI is a community-driven specification.

Its evolution should be guided by:

- transparency
- public discussion
- scholarly consensus
- technical excellence
- long-term sustainability

No single institution or vendor owns the standard.

---

# 16. Philosophy

The Open Manuscript Initiative is not merely a document format.

It is an open semantic architecture for scholarly communication.

OMI separates knowledge from presentation, meaning from formatting, and scholarly content from software.

By doing so, it enables manuscripts to move freely across disciplines, publishers, technologies, and generations while preserving their intellectual integrity.

> **Write naturally. Structure once. Publish everywhere.**
