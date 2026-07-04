---
title: Annotation Model
sidebar_position: 11
---

# OMI-SPEC-002: Annotation Model

## Status

**Draft**

Version: 0.1

---

# Purpose

Annotations are a fundamental component of scholarly communication.

Rather than treating annotations as static footnotes tied to page layout, OMI models them as semantic objects attached to meaningful portions of a manuscript.

Annotations exist independently of visual presentation.

---

# Design Principles

The Annotation Model is based on the following principles:

- Semantic anchoring
- Layout independence
- Multiple annotation types
- Persistent identifiers
- Collaborative editing
- Machine readability
- Long-term preservation

---

# What Is an Annotation?

An annotation is a semantic object associated with one or more elements of a manuscript.

Unlike traditional footnotes, annotations are attached to **content**, not to page positions.

---

# Semantic Anchors

Every annotation is connected to one or more **Anchors**.

An Anchor defines the exact scope to which an annotation applies.

Examples:

- one word
- multiple words
- an entire sentence
- several paragraphs
- a figure
- a table
- an equation
- a bibliography entry

---

# Anchor Types

Examples include:

- Text Range
- Paragraph
- Section
- Figure
- Table
- Formula
- Citation
- Metadata
- Whole Document

---

# Annotation Types

OMI supports multiple annotation categories.

## Scholarly Notes

- Footnote
- Endnote
- Explanatory Note
- Commentary

---

## Editorial Notes

- Copyediting
- Proofreading
- Formatting Suggestion

---

## Peer Review

- Reviewer Comment
- Confidential Comment
- Editorial Decision
- Revision Request

---

## Collaboration

- Discussion
- Suggestion
- Question
- Task

---

## AI Assistance

- Language Suggestion
- Style Recommendation
- Metadata Suggestion
- Citation Suggestion
- Accessibility Suggestion

AI annotations are always distinguishable from human annotations.

---

# Multiple Anchors

A single annotation may refer to multiple locations.

Example:

```text
Paragraph 2
Paragraph 5
Figure 3
```

All are connected to one annotation object.

---

# Overlapping Anchors

Annotations may overlap.

Example:

```text
┌───────────────┐
This sentence contains several semantic objects.
     └──────────────┐
```

The system must preserve all relationships.

---

# Annotation Metadata

Each annotation contains:

- Identifier
- Type
- Author
- Timestamp
- Status
- Visibility
- Anchor
- Content
- Version History

---

# Visibility

Annotations may be visible to different audiences.

Examples:

- Private
- Authors
- Reviewers
- Editors
- Publishers
- Public

---

# Lifecycle

Annotations evolve during the manuscript lifecycle.

Example:

Author

↓

Reviewer Comment

↓

Author Reply

↓

Editorial Decision

↓

Published Footnote

---

# Rendering

Annotations are presentation independent.

The same annotation may appear as:

- footnote
- endnote
- margin note
- tooltip
- inline comment
- review panel
- popup

Rendering depends on the selected publication format.

---

# Publishing

Publication profiles define how annotations are rendered.

Examples:

PDF

↓

Footnotes

HTML

↓

Tooltips

EPUB

↓

Endnotes

JATS XML

↓

Semantic elements

---

# Versioning

Annotations participate in version control.

Every change is recorded.

Previous versions remain recoverable.

---

# Interoperability

Annotations should be exchangeable with external systems whenever possible.

Future mappings may include:

- Web Annotation Data Model
- JATS
- DOCX Comments
- PDF Annotations
- Hypothes.is
- OJS Review Comments

---

# Extensibility

Additional annotation types may be introduced through plugins.

Examples:

- Legal Annotation
- Mathematical Proof Comment
- Historical Source Commentary
- Linguistic Annotation

---

# Future Work

Future specifications will define:

- Review Model
- Collaboration Model
- AI Annotation API
- Conflict Resolution
- Annotation Storage

---

# Summary

The OMI Annotation Model replaces layout-dependent notes with semantic annotations connected to persistent anchors.

This approach enables a single manuscript to support scholarly notes, peer review, editorial workflows, AI assistance, and publication-specific rendering while preserving semantic meaning across every publication format.
