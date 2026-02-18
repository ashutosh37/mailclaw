---
name: agile-management
description: Manage projects using Agile methodology driven by "Context Engineering". Ensures dynamic feature changes are handled systematically, establishing clear context for every task to avoid hallucination.
---

# Agile Management & Context Engineering

## Overview

This skill brings the **BMAD (Breakthrough Method for Agile Ai Driven Development)** philosophy to your project. It focuses on **Context Engineering**—the art of preparing "crystal-clear" context for AI agents so they can implement tasks without needing to search for information or make assumptions.

**Core Principles:**
1.  **Context Before Code**: Never start coding without a fully defined User Story that includes all technical context (Models, APIs, UX).
2.  **Agile Adaptability**: Features change. We use "Stories" as the unit of work. If requirements change, we write a new story or update the draft.
3.  **Single Source of Truth**: Data models, APIs, and patterns are pulled from Architecture/PRD docs, not invented on the fly.

## Usage

### 1. Planning (Context Engineering)
Before implementing any feature, you must create a **User Story** that engineers the context for the developer.

```bash
# Run the context engineering task
@agile-management/tasks/create-story
```

### 2. Implementation
Once a story is status `Draft` or `Approved`, it is handed to a Developer Agent (or you acting as one). The Developer Agent simply follows the "Dev Notes" and "Tasks" in the story.

### 3. Architecture First
This skill relies on having documentation to pull context from.
-   `docs/architecture/tech-stack.md`
-   `docs/architecture/unified-project-structure.md`
-   `docs/data-models.md`, etc.

*If these do not exist, the first task is to create them.*

## The Workflow

1.  **Brainstorm**: Use `brainstorming` skill to define the features for the next Epic/Sprint.
2.  **Engineer Context**: Use `create-story` task to prepare the granular `story.md`.
3.  **Implement**: Execute the story tasks.
4.  **Review**: Verify against Acceptance Criteria.

## Roles

-   **Scrum Master (Context Engineer)**: You (the agent) when running `create-story`. Your job is to be rigorous, citing sources, and ensuring the "Developer" has everything they need.
-   **Developer**: You (the agent) when implementing. You are "dumb" in the sense that you follow the story and architecture exactly without inventing new patterns.
