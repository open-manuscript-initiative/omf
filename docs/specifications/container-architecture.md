---
title: Container Architecture
sidebar_position: 20
---

# OMI-SPEC-012: Container Architecture

## Status

**Draft**
```md
## Recommended Container Layout

The following directory structure is normative unless otherwise specified by an extension or profile.

paper.omi
├── META-INF/
│   ├── manifest.json
│   ├── mimetype
│   ├── checksums.json
│   └── signatures.json
├── manuscript/
│   ├── document.json
│   ├── metadata.json
│   ├── history.json
│   └── review.json
├── annotations.json
├── citations.json
├── anchors.json
├── provenance.json
├── media/
│   ├── images/
│   ├── figures/
│   ├── assets/
│   └── datasets/
├── profiles/
└── plugins/
```
