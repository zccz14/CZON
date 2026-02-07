# Objective and Neutral Style Analysis Report

## Reading Focus Points

When reading each file, focus on extracting:

- File path and title
- Date information
- Involved project names and functional descriptions
- Mentioned individuals and their roles
- Objective facts and data
- Specific information like version numbers, milestones, etc.

**Ignore**: Subjective evaluations, emotional expressions, speculative content.

## Knowledge Base Structure

```
### File Index
| File Path | Title | Date |
|-----------|-------|------|

### Project Index
| Project Name | Description | Related Files |
|--------------|-------------|---------------|

### People Index
| Person | Role | Related Files |
|--------|------|---------------|

### Timeline
| Date | Event | Source File |
|------|-------|-------------|

### Theory/Framework Index
| Name | Core Idea | Source File |
|------|-----------|-------------|
```

## Compression Strategy

When compressing the knowledge base is necessary:

1.  **Must Retain**: File Index (path + title), Project Index, People Index
2.  **Can Be Streamlined**: Timeline (retain key nodes), Theory Index (retain name and source)
3.  **Can Be Discarded**: Detailed descriptions, minor events

---

## Style Positioning

Introduce content from an objective and neutral perspective, avoiding subjective evaluations and emotional coloring. Emphasize facts and data to ensure the accuracy and reliability of information.

**Target Audience**: New readers needing a quick overview of the repository, potential collaborators, investors.
**Writing Tone**: Professional, restrained, neutral, akin to writing a resume or curriculum vitae.
**Purpose**: To help readers comprehensively understand the basic information and core viewpoints of the content, enabling them to form their own judgments.

## Prohibited Actions

- ❌ Do not add emotional expressions (e.g., "exciting", "unfortunately").
- ❌ Do not engage in speculation (e.g., "maybe", "perhaps", "probably").
- ❌ Do not use subjective evaluative vocabulary (e.g., "excellent", "terrible", "interesting").
- ❌ Do not evaluate quality, goodness, or badness.
- ❌ Do not use first-person pronouns.

## Required Chapter Structure

### Overview

- Repository Owner Introduction (Name/ID, Identity, Main Areas)
- Time Span of Repository Content
- Main Project List (brief enumeration)

### Project Introduction

For each main project, use the following structure:

```markdown
### [Project Name]

- **Origin**: The source and background of the project.
- **Core Functions**:
  - Function Point 1
  - Function Point 2
- **Version Iteration**: Briefly describe version history, if any.
- **Related Files**: [Article Title](../path/to/file.md)
```

### Key Themes

Organize content by thematic categories:

```markdown
### 1. [Theme Name]

- [Article Title 1](../path/to/file1.md): Summary of core viewpoint.
- [Article Title 2](../path/to/file2.md): Summary of core viewpoint.
```

### Timeline

Use table format to display key events:

```markdown
| Date       | Key Event             |
| ---------- | --------------------- |
| YYYY-MM-DD | Event description (objective statement) |
```

### Main Individuals

Use table format:

```markdown
| Person    | Role      | Notes         |
| --------- | --------- | ------------- |
| Name/ID   | Position/Relationship | Related objective information |
```

### Theoretical Framework Summary

For theories/frameworks proposed in the repository:

```markdown
### [Framework Name]

- **Core Idea**: Summarize in one sentence.
- **Key Elements**: List core components.
- **Mathematical Expression**: List formulas, if any.
```

## Output File

`SUMMARY/1-objective.md`

## Quality Checklist

- [ ] No subjective evaluative vocabulary.
- [ ] No emotional expressions.
- [ ] All links point to specific files.
- [ ] Link text is the article title.
- [ ] All required chapters are included.
- [ ] Timeline and People tables are correctly formatted.