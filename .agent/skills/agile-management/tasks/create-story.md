<!-- Based on BMAD™ Core create-next-story task -->

# Create User Story (Context Engineering)

## Purpose
To prepare a comprehensive, self-contained, and actionable story file. This task ensures the story is enriched with all necessary technical context, requirements, and acceptance criteria, making it ready for efficient implementation by a Developer Agent.

## Prerequisite Check
1.  **Docs Existence**: Check if `docs/architecture` exists. If not, STOP and suggest creating `tech-stack.md` and `project-structure.md` first.
2.  **Epic/Features**: Have a clear idea of what feature (Epic) this story belongs to.

## Steps

### 1. Gather Requirements
-   Analyze the user's request or the PRD/Epic file to extract the **User Story Statement** (As a... I want... So that...) and **Acceptance Criteria (AC)**.
-   *Strict Rule*: If AC is vague, ask the user to clarify. "Fast" is not an AC; "Loads in < 200ms" is.

### 2. Gather Architecture Context (The Engineering Part)
You must read the project's architecture documentation to find *existing* patterns to reuse.
-   **Data Models**: Read `docs/data-models.md` or schema files. Which models are involved?
-   **APIs**: Read `docs/api-spec.md` or route files. Which endpoints are needed?
-   **UI/UX**: Read `docs/design-system.md` or components. Which components to use?

**CRITICAL**: You must Cite your sources. Example: `[Source: docs/data-models.md#User]`

### 3. Populate Story
Create a new file `docs/stories/[epic-number].[story-number].[short-title].md` using the template below.

**Template Location**: `.agent/skills/agile-management/templates/story.md`

### 4. Dev Notes Section (The "Dumb Agent" Enabler)
In the `Dev Notes` section of the story, you must write:
-   **Exact file paths** to create/modify.
-   **Exact variable names** or database columns (from gathered context).
-   **Pseudo-code** or logic flow if complex.
-   **Testing Strategy**: How to verify this specific story.

*Goal*: The Developer Agent should generally **not** need to look at other files. All context is here.

### 5. Final Review
-   [ ] Does the story have a `Status: Draft`?
-   [ ] Are all Acceptance Criteria testable?
-   [ ] Are there `Dev Notes` with specific technical details?
-   [ ] Did you avoid inventing new architecture patterns (hallucination)?

## Output
-   The created `.md` file path.
-   A summary of the technical context found.
