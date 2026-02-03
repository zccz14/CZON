---
"title": "Basic Rules for AI Analysis Report Generation"
"summary": "This document provides fundamental rules for AI analysis report generation, emphasizing strict adherence to the document reading process. This process includes five stages: obtaining the file list, batch reading and summarization, context management, completeness verification, and report generation. Core principles include reading all files one by one, basing content on facts, standardizing citation links, and considering temporal weighting. General rules require reports to start with a specific format, be output to a designated directory, and prohibit generating reports or skipping any files before all files have been read."
"tags":
  - "AI Analysis"
  - "Report Generation"
  - "Document Reading"
  - "Rules"
  - "Markdown"
  - "Fact-Based"
  - "Citation Standards"
  - "Process Management"
---

# AI Analysis Report Generation - Basic Rules

## Document Reading Process (Must be Strictly Followed)

### Core Principles

This repository may contain hundreds or thousands of Markdown files. You must **read each file one by one**; skipping is not allowed.
To handle the large volume of files, a **progressive reading and summarization** strategy is employed.

### Stage 1: Obtain Complete File List

1.  Execute `npx czon@latest ls-files` to get all Markdown files.
2.  Record the total number of files, N.
3.  Save the file list as a queue for reading.

### Stage 2: Batch Reading and Summarization

Process files in batches. A batch size of 10-20 files is recommended, but you can adjust based on file size and complexity.

**For each batch:**

1.  **Read**: Use the Read tool to read the full content of each file in the batch, one by one.
2.  **Extract**: Extract relevant information based on the **current style's focus points** (see Style Guide below).
3.  **Batch Summary**: Organize the extracted information for the batch into a structured summary.
4.  **Accumulate**: Merge the batch summary into the "Knowledge Base" (see Knowledge Base structure in the Style Guide below).

### Stage 3: Context Management

When the context limit is approached:

1.  **Compress Knowledge Base**: Compress the knowledge base according to the **current style's compression strategy** (see Style Guide below).
2.  **Retain Index**: Regardless of compression, an index of all file paths and titles must be preserved.
3.  **Continue Reading**: Use the compressed knowledge base to continue processing the remaining files.

### Stage 4: Completeness Verification

Before generating the report, you must confirm:

1.  All N files from the file list have been processed.
2.  The knowledge base contains basic information for each file (at minimum, the path and title).

**If omissions are found**: Return to Stage 2 to process the missing files.

### Stage 5: Generate Report

Only after completing all the above stages can you begin generating the report.

### Prohibited Actions

- ❌ Do not start generating the report before reading all files.
- ❌ Do not skip any files, regardless of the total number.
- ❌ Do not claim to "understand the full picture" after reading only a portion of the files.
- ❌ Do not fabricate non-existent files or content in the knowledge base.

---

## General Rules

### 1. Fact-Based Principle

-   Always base content on factual information; avoid situations detached from facts.
-   All viewpoints must be supported by source text.
-   Do not fabricate non-existent content.

### 2. Citation Link Standards

-   When citing source links, ensure the links are valid.
-   **Always link to specific Markdown files**, not directories.
-   **Link text should be the corresponding title**, not the filename.
-   Since generation is to the `SUMMARY/` directory, use relative paths starting with `../` for citations.

**Correct Examples**:

```markdown
[Capital Persistence War: The Strategy for Individual Investors to Transcend Class](../INSIGHTS/6.md)
[From Creation to Distribution—Building an AI-Native Content Engine](../INSIGHTS/4.md)
```

**Incorrect Examples**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Uses filename instead of title
[Capital Persistence War](../INSIGHTS/) ← Links to a directory
```

### 3. Header Format

Every report must begin with the following format:

```markdown
# [Report Title]

**AI Analysis Time**: YYYY-MM-DD
**Note**: This report is AI-generated. Content is for reference only.

---
```

### 4. Temporal Weighting

-   Consider the time span, giving higher weight to more recent articles.
-   However, do not ignore important older content.

### 5. Output Location

-   All reports are generated into the `SUMMARY/` directory.
-   Filenames follow the specified naming format.