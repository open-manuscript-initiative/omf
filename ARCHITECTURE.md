# Architecture

## Purpose

The Open Manuscript Initiative (OMI) is designed as a modular, platform-independent ecosystem for scholarly authoring, peer review, publishing, and preservation.

The architecture prioritizes interoperability, extensibility, and long-term sustainability over implementation details.

Technology choices may evolve over time without changing the conceptual architecture.

---

# Architectural Principles

The system is based on the following principles.

## Platform Independence

The core should operate independently of any publishing platform.

Integrations with systems such as OJS, OMP, OPS, repositories, or institutional services are implemented through adapters.

---

## Modular Design

Each major capability is implemented as an independent module.

Modules communicate through well-defined interfaces rather than direct dependencies.

---

## Open Standards

Whenever possible, OMI relies on established open standards, including:

- JATS XML
- CSL
- DOI
- ORCID
- Crossref
- DataCite
- Dublin Core
- Schema.org

---

## API First

Every major capability should be accessible through documented APIs.

The user interface is considered a client of the same APIs.

---

## Extensibility

The platform is designed to support plugins and extensions without modifying the core.

---

## Human-Centered Design

Technology should simplify scholarly work rather than dictate workflows.

Users remain in control of every important editorial decision.

---

# High-Level Architecture

```
                    +----------------------+
                    |      User Interface  |
                    +----------+-----------+
                               |
                               |
                    +----------v-----------+
                    |      Core Services   |
                    +----------+-----------+
                               |
      ---------------------------------------------------------
      |         |          |          |          |             |
      v         v          v          v          v             v

  Editor   References   Review   Publishing   AI   Collaboration

      |         |          |          |          |             |
      ---------------------------------------------------------
                               |
                               v
                     Integration Layer
                               |
          -----------------------------------------
          |          |          |         |        |
          v          v          v         v        v

         OJS        OMP        OPS    Repositories  External APIs
```

---

# Core Components

## Document Model

Represents the scholarly manuscript independently of presentation.

The document model is the heart of OMI.

---

## Editor

Provides semantic editing instead of layout-oriented editing.

---

## Citation Engine

Maintains citations, references, bibliographies, and identifiers.

---

## Review Engine

Supports multiple peer-review workflows.

---

## Publishing Engine

Generates publication formats from the semantic document.

---

## Collaboration

Handles comments, discussions, permissions, and version history.

---

## AI Services

Provide optional assistance without replacing editorial responsibility.

---

## Integration Layer

Responsible for communication with external systems.

No external platform should directly depend on internal components.

---

# Plugin System

Plugins extend functionality through stable interfaces.

Examples include:

- import/export formats;
- metadata providers;
- citation styles;
- journal integrations;
- AI providers.

---

# Data Flow

```
Author
   ↓
Editor
   ↓
Document Model
   ↓
Review
   ↓
Editorial Decision
   ↓
Publishing
   ↓
Repository / Journal / Archive
```

---

# Scalability

The architecture is designed to support:

- single-user installations;
- institutional deployments;
- cloud-hosted services;
- distributed infrastructures.

---

# Future Architecture Documents

This document provides a conceptual overview.

Detailed specifications are maintained separately in the `docs/` directory.
