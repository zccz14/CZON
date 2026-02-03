---
"title": "Objective and Neutral Style Analysis Report Guide"
"summary": "This document is a guide on creating objective and neutral style analysis reports. It details the key points to focus on when analyzing documents (such as file paths, dates, project names, personas, objective facts, etc.) and defines the structure of the knowledge base (including file index, project index, persona index, timeline, and theoretical framework index). The document also provides compression strategies, guiding how to condense content when necessary while emphasizing the retention of key indexes. The style positioning requires introducing content from an objective and neutral perspective, avoiding subjective evaluations and emotional tones. The target audience includes new readers, potential collaborators, and investors. The document lists prohibited actions (e.g., do not add emotional expressions or speculation) and required chapter structures (e.g., Overview, Project Introduction, Key Themes, Timeline, Key Personas, and Theoretical Framework Summary), and specifies the output file and quality checklist."
"tags":
  - "Document Analysis"
  - "Objective and Neutral"
  - "Knowledge Base Structure"
  - "Information Extraction"
  - "Style Guide"
  - "Report Writing"
  - "Structured Data"
---

# Objective and Neutral Style Analysis Report

## Reading Focus Points

When reading each file, focus on extracting:

- File path and title
- Date information
- Involved project names and functional descriptions
- Mentioned personas and their roles
- Objective facts and data
- Specific information such as version numbers, milestones, etc.

**Ignore**: Subjective evaluations, emotional expressions, speculative content

## Knowledge Base Structure

```
### File Index
| File Path | Title | Date |
|-----------|-------|------|

### Project Index
| Project Name | Description | Related Files |
|--------------|-------------|---------------|

### Persona Index
| Persona | Role | Related Files |
|---------|------|---------------|

### Timeline
| Date | Event | Source File |
|------|-------|-------------|

### Theory/Framework Index
| Name | Core Idea | Source File |
|------|-----------|-------------|
```

## Compression Strategy

When compressing the knowledge base is necessary:

1. **Must Retain**: File index (path + title), Project index, Persona index
2. **Can Condense**: Timeline (keep key nodes), Theory index (keep names and sources)
3. **Can Discard**: Detailed descriptions, minor events

---

## Style Positioning

Introduce content from an objective and neutral perspective, avoiding subjective evaluations and emotional tones. Emphasize facts and data to ensure the accuracy and reliability of information.

**Target Audience**: New readers needing a quick overview of the repository, potential collaborators, investors
**Writing Tone**: Professional, restrained, neutral, akin to writing a resume or CV
**Purpose**: Help readers comprehensively understand the basic information and core viewpoints of the content, enabling them to form their own judgments

## Prohibited Actions

- ❌ Do not add emotional expressions (e.g., "exciting," "unfortunately")
- ❌ Do not engage in speculation (e.g., "might," "perhaps," "probably")
- ❌ Do not use subjective evaluative vocabulary (e.g., "excellent," "terrible," "interesting")
- ❌ Do not evaluate quality or superiority/inferiority
- ❌ Do not use first-person pronouns

## Required Chapter Structure

### Overview

- Repository Owner Introduction (Name/ID, Identity, Main Domains)
- Time Span of Repository Content
- Main Project List (Brief Enumeration)

### Project Introduction

For each main project, use the following structure:

```markdown
### [Project Name]

- **Origin**: The source and background of the project
- **Core Functions**:
  - Function Point 1
  - Function Point 2
- **Version Iterations**: If there is version history, provide a brief explanation
- **Related Files**: [Article Title](../path/to/file.md)
```

### Key Themes

Organize content by theme:

```markdown
### 1. [Theme Name]

- [Article Title1](../path/to/file1.md): Summary of core viewpoint
- [Article Title2](../path/to/file2.md): Summary of core viewpoint
```

### Timeline

Use table format to display key events:

```markdown
| Date       | Key Event             |
| ---------- | --------------------- |
| YYYY-MM-DD | Event Description (Objective Statement) |
```

### Key Personas

Use table format:

```markdown
| Persona    | Role       | Remarks         |
| ---------- | ---------- | --------------- |
| Name/ID    | Position/Relationship | Related Objective Information |
```

### Theoretical Framework Summary

For theories/frameworks proposed in the repository:

```markdown
### [Framework Name]

- **Core Idea**: One-sentence summary
- **Key Elements**: List core components
- **Mathematical Expression**: If formulas exist, list them
```

## Output File

`SUMMARY/1-objective.md`

## Quality Checklist

- [ ] No subjective evaluative vocabulary
- [ ] No emotional expressions
- [ ] All links point to specific files
- [ ] Link text is the article title
- [ ] Includes all required chapters
- [ ] Timeline and persona tables are correctly formatted