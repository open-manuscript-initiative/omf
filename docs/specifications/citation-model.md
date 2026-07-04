---
title: Citation Model
sidebar_position: 14
---

# OMI-SPEC-005: Citation Model

## Status

**Draft**

Version: 0.1

---

# Purpose

The Citation Model defines how scholarly references are represented within the Open Manuscript Initiative (OMI).

Rather than storing citations as formatted text, OMI models them as semantic objects connected to bibliographic metadata.

This separation enables flexible citation styles, machine processing, validation, and interoperability.

---

# Design Principles

The Citation Model follows these principles:

- Semantic first
- Presentation independent
- Persistent
- Machine readable
- Interoperable
- Extensible
- Style independent

---

# What Is a Citation?

A citation represents a semantic relationship between one scholarly object and another.

It is **not** a formatted string.

Instead, it references a bibliographic object through a persistent identifier.

---

# Citation Architecture

```
Citation
    │
    ├── Anchor
    ├── Bibliographic Record
    ├── Citation Style
    └── Rendering
```

The Citation object remains independent from visual formatting.

---

# Citation Components

Each citation contains:

- Identifier
- Citation Type
- Bibliographic Target
- Anchor
- Locator
- Prefix
- Suffix
- Notes
- Version

---

# Citation Targets

A citation may reference:

- Journal Article
- Book
- Book Chapter
- Conference Paper
- Thesis
- Dissertation
- Dataset
- Software
- Preprint
- Standard
- Web Resource
- Archival Source
- Manuscript
- Image
- Map
- Audio
- Video

The model is extensible through plugins.

---

# Persistent Identifiers

Whenever available, citations should use persistent identifiers.

Supported identifiers include:

- DOI
- ISBN
- ISSN
- ORCID
- ROR
- Handle
- ARK
- URL

A citation may contain multiple identifiers.

---

# Bibliographic Records

Bibliographic metadata is stored independently from citations.

A single bibliographic record may be referenced by multiple Citation objects.

```
Bibliographic Record

↓

Citation A

Citation B

Citation C
```

This eliminates duplicated metadata.

---

# Locators

Citations may include precise locators.

Examples:

- page
- page range
- chapter
- section
- paragraph
- figure
- table
- appendix
- line
- folio

Examples:

```
p. 24

pp. 24–31

Chapter 5

Figure 3
```

---

# Citation Relationships

Citations may express different scholarly relationships.

Examples:

- supports
- refutes
- extends
- discusses
- compares
- reproduces
- translates
- critiques

Future versions may introduce explicit citation semantics.

---

# Citation Styles

Citation styles are **presentation profiles**.

Examples include:

- APA
- Chicago
- MLA
- Harvard
- IEEE
- Vancouver
- OSCOLA
- Turabian

Style selection never changes the underlying Citation object.

---

# Discipline Profiles

Different disciplines may introduce specialised citation types.

History

- Archival Source
- Charter
- Manuscript
- Regest

Law

- Case Law
- Legislation
- Treaty

Medicine

- Clinical Guideline
- Trial Registry

Computer Science

- Software Package
- Repository
- API Documentation

---

# Citation Rendering

Rendering depends on the publication profile.

Example:

HTML

↓

Inline citation

PDF

↓

Footnote

EPUB

↓

Hyperlinked citation

JATS XML

↓

Structured XML

---

# Validation

The system may validate:

- DOI format
- ISBN checksum
- ISSN checksum
- ORCID format
- duplicate references
- incomplete metadata
- broken URLs

Validation rules are configurable.

---

# Interoperability

Future mappings include:

- CSL JSON
- BibTeX
- RIS
- Crossref
- DataCite
- JATS XML
- Dublin Core
- Zotero
- EndNote
- Mendeley

---

# Versioning

Citations participate in document version control.

Changes to citation metadata are tracked independently from manuscript text.

---

# Plugin Extensions

Plugins may introduce:

- citation types
- validation rules
- metadata fields
- rendering rules

without modifying the OMI Core.

---

# Future Work

Future specifications will define:

- Citation Graph
- Linked Open Citations
- Citation Intent Model
- Authority Control
- Reference Resolver

---

# Summary

The OMI Citation Model represents citations as semantic, reusable, and presentation-independent scholarly objects.

By separating citation semantics from rendering, OMI enables consistent citation management, automatic style generation, metadata validation, and interoperability across the scholarly publishing ecosystem.
