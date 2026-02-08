# AI Analysis Report Generation - Basic Rules

## Document Reading Process (Must be strictly followed)

### Core Principles

This repository may contain hundreds or thousands of Markdown files. You must **read each file one by one**; skipping is not allowed.
To handle the large volume of files, adopt a **progressive reading and summarization** strategy.

### Phase 1: Obtain Complete File List

1.  Execute `npx czon@latest ls-files` to get all Markdown files.
2.  Record the total number of files, N.
3.  Save the file list as a queue for reading.

### Phase 2: Batch Reading and Summarization

Process files in batches. A batch size of 10-20 files is recommended, but you can adjust based on file size and complexity.

**For each batch:**

1.  **Read**: Use the Read tool to read the complete content of each file in the batch one by one.
2.  **Extract**: Extract relevant information based on the **current style's focus points** (see Style Guide below).
3.  **Batch Summary**: Organize the extracted information for that batch into a structured summary.
4.  **Accumulate**: Merge the batch summary into the "Knowledge Base" (see Knowledge Base structure in the Style Guide below).

### Phase 3: Context Management

When the context limit is approached:

1.  **Compress Knowledge Base**: Compress the knowledge base according to the **current style's compression strategy** (see Style Guide below).
2.  **Preserve Index**: Regardless of compression, you must preserve the path and title index for all files.
3.  **Continue Reading**: Continue processing the remaining files using the compressed knowledge base.

### Phase 4: Completeness Verification

Before generating the report, you must confirm:

1.  All N files from the file list have been processed.
2.  The knowledge base contains basic information for each file (at minimum, the path and title).

**If omissions are found**: Return to Phase 2 to process the missing files.

### Phase 5: Generate Report

Only after completing all the above phases can you begin generating the report.

### Prohibited Actions

-   ❌ Do not start generating the report before reading all files.
-   ❌ Do not skip any files, regardless of the total number.
-   ❌ Do not claim to "understand the whole picture" after reading only some files.
-   ❌ Do not fabricate non-existent files or content in the knowledge base.

---

## General Rules

### 1. Fact-Based Principle

-   Always base your work on factual content; avoid situations detached from facts.
-   All viewpoints must be supported by the original text.
-   Do not fabricate non-existent content.

### 2. Citation Link Standards

-   When citing links to original text, ensure the links are valid.
-   **Always link to specific Markdown files**, not directories.
-   **Link text should be the corresponding title**, not the filename.
-   Since generation is done to the `SUMMARY/` directory, use relative paths starting with `../` for citations.

**Correct Examples**:

```markdown
[Capital Endurance War: The Strategy for Individual Investors to Transcend Class](../INSIGHTS/6.md)
[From Creation to Distribution—Building an AI-Native Content Engine](../INSIGHTS/4.md)
```

**Incorrect Examples**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Uses filename instead of title
[Capital Endurance War](../INSIGHTS/) ← Links to a directory
```

### 3. Header Format

Each report must begin with the following format:

```markdown
# [Report Title]

**AI Analysis Time**: YYYY-MM-DD
**Generated based on N Markdown files**
**Note**: This report is AI-generated; content is for reference only.

---
```

Where `N` is the actual total number of Markdown files obtained in Phase 1.

### 4. Time Weighting

-   Consider the time span, giving higher weight to more recent articles.
-   However, do not neglect important older content.

### 5. Output Location

-   Generate all reports to the `SUMMARY/` directory.
-   Name files according to the specified format.