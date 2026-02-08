# AI Analysis Report Generation - Basic Rules

## Document Reading Process (Must be strictly followed)

### Core Principle

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
2.  **Preserve Index**: Regardless of compression, you must preserve the index containing the path and title of every file.
3.  **Continue Reading**: Continue processing the remaining files using the compressed knowledge base.

### Phase 4: Completeness Verification

Before generating the report, you must confirm:

1.  All N files from the file list have been processed.
2.  The knowledge base contains basic information (at least the path and title) for each file.

**If omissions are found**: Return to Phase 2 to process the missing files.

### Phase 5: Generate Report (Segmented Writing)

Only after completing all the above phases can you begin generating the report.

Since the report content may be long, **you must write it in segments**. Writing the entire report at once is prohibited.

#### Step 1: Write the Skeleton File

First, use the Write tool to create the report file and write the following content:

*   Header format (Title, AI Analysis Time, File Count, Note, Separator line)
*   Titles for all sections (titles only, no body text)
*   Place a placeholder marker below each section title: `<!-- SECTION: [Section Name] -->`

**Example Skeleton**:

```markdown
# Report Title

**AI Analysis Time**: January 1, 2025
**Generated based on 42 Markdown files**
**Note**: This report is AI-generated. Content is for reference only.

---

## Overview

<!-- SECTION: Overview -->

## Chapter Two Title

<!-- SECTION: Chapter Two Title -->

...
```

#### Step 2: Fill Content Section by Section

In the order of the sections, use the Edit tool to replace each placeholder marker with the actual content one by one:

1.  Fill the content for **only one section** at a time.
2.  Replace `<!-- SECTION: [Section Name] -->` with the complete body text of that section.
3.  Limit the content written in a single operation to **within 2000 words**. If a section exceeds 2000 words, split it into multiple writes (first write the first half, leaving a temporary placeholder marker at the end, then continue writing the second half).

#### Step 3: Completeness Check

After all sections are filled:

1.  Read the complete file to confirm there are no remaining `<!-- SECTION:` placeholder markers.
2.  Confirm all link formats are correct (relative paths start with `../`, link text is the article title).
3.  Confirm the file count N in the header is correct.

### Prohibited Actions

*   ❌ Do not start generating the report before reading all files.
*   ❌ Do not skip any files, regardless of the total number.
*   ❌ Do not claim to "understand the whole picture" after reading only some files.
*   ❌ Do not fabricate non-existent files or content in the knowledge base.

---

## General Rules

### 1. Fact-Based Principle

*   Always base your work on factual content; avoid situations detached from facts.
*   All viewpoints must be supported by the original text.
*   Do not fabricate non-existent content.

### 2. Citation Link Specification

*   When citing links to original text, ensure the links are valid.
*   **Always link to the specific Markdown file**, not to a directory.
*   **The link text should be the corresponding title**, not the filename.
*   Since generation is done to the SUMMARY directory, use relative paths starting with `../` when referencing.

**Correct Example**:

```markdown
[Capital Endurance War: The Strategy for Individual Investors to Transcend Class](../INSIGHTS/6.md)
[From Creation to Distribution—Building an AI-Native Content Engine](../INSIGHTS/4.md)
```

**Incorrect Example**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Uses filename instead of title
[Capital Endurance War](../INSIGHTS/) ← Links to a directory
```

### 3. Header Format

Every report must begin with the following format:

```markdown
# [Report Title]

**AI Analysis Time**: YYYY-MM-DD
**Generated based on N Markdown files**
**Note**: This report is AI-generated. Content is for reference only.

---
```

Where `N` is the actual total number of Markdown files obtained in Phase 1.

### 4. Time Weighting

*   Consider the time span, giving higher weight to more recent articles.
*   However, do not overlook important older content.