# TODO Extraction Report

## Document Reading Process (Must be strictly followed)

### Core Principles

This repository may contain hundreds or thousands of Markdown files. You must **read each file one by one**, without skipping any.
To handle the large volume of files, adopt a **progressive reading and summarization** strategy.

### Phase 1: Obtain Complete File List

1.  Execute `npx czon@latest ls-files` to get all Markdown files.
2.  Record the total number of files, N.
3.  Save the file list as a queue for reading.

### Phase 2: Batch Reading and Extraction

Process files in batches. A suggested batch size is 10-20 files, but you can adjust based on file size and complexity.

**For each batch:**

1.  **Read**: Use the Read tool to read the complete content of each file in the batch, one by one.
2.  **Extract TODOs**: Identify and record all TODO items according to the "TODO Extraction Rules" below.
3.  **Batch Summary**: Organize the TODO items extracted from this batch into the "TODO Knowledge Base".
4.  **Accumulate**: Merge the batch results into the global TODO Knowledge Base.

### Phase 3: Context Management

When the context approaches its limit:

1.  **Compress Knowledge Base**: For extracted TODO entries, retain core information (description, source file, status) and discard detailed original text references.
2.  **Preserve Index**: Regardless of compression, you must preserve the path and title index for all files.
3.  **Continue Reading**: Use the compressed knowledge base to continue processing the remaining files.

### Phase 4: Completeness Verification

Before generating the final report, you must confirm:

1.  All N files from the file list have been processed.
2.  All extracted TODO items have a clear source file.

**If omissions are found**: Return to Phase 2 to process the missed files.

---

## TODO Extraction Rules

### Explicit TODOs

Content that explicitly expresses intent for future action, including but not limited to the following marker words:

-   "TODO", "FIXME", "HACK"
-   "待办", "待完成", "待处理", "待实现" (Chinese for "to-do", "to be completed", "to be handled", "to be implemented")
-   "计划做", "计划实现", "计划添加" (Chinese for "plan to do", "plan to implement", "plan to add")
-   "接下来要做", "接下来要", "下一步" (Chinese for "next to do", "next", "next step")
-   "需要实现", "需要添加", "需要完成", "需要解决" (Chinese for "need to implement", "need to add", "need to complete", "need to solve")

### Implicit TODOs

Content that expresses intent or planning but does not clearly indicate completion:

-   "我会...", "我打算...", "我准备..." (Chinese for "I will...", "I plan to...", "I am preparing to...")
-   "应该...", "需要一个..." (Chinese for "should...", "needs a...")
-   "未来会...", "之后会..." (Chinese for "will in the future...", "will later...")
-   "还没有...", "暂时没有..." (Chinese for "not yet...", "temporarily don't have...")
-   Describing a feature idea without signs of implementation.

### Extraction Elements

For each identified TODO item, record the following information:

| Field         | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| Description   | A brief description of the TODO (summarized in one sentence).               |
| Source File   | File path and article title.                                                |
| Original Text | Relevant original text snippet (1-2 sentences).                             |
| Inferred Date | The date the TODO was proposed (inferred from article content).             |

#### Additional Elements for Status-Related Extraction

For TODOs judged as "🔄 In Progress", additionally record:

| Field             | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| Completed Portion | Progress already made (specifically what has been done).                    |
| Remaining Portion | Content not yet completed (what still needs to be done).                    |
| Progress Evidence | Original text snippet from a later article demonstrating progress (cite source article). |

For TODOs judged as "✅ Completed", additionally record:

| Field         | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| Basis for Completion | Why it is judged as completed (cite specific evidence and source article).  |
| Outcome       | Specific results or outputs achieved upon completion.                       |

---

## Status Judgment Rules

Determine the current status of each TODO by cross-referencing content from multiple articles:

### ✅ Completed

-   Later articles explicitly mention "completed", "implemented", "launched", "resolved".
-   Related functionality can be observed to exist in the codebase or product.
-   The related issue is no longer mentioned in later articles, with clear signs of resolution.

### 🔄 In Progress

-   Later articles mention it's being worked on, with partial progress.
-   Related intermediate artifacts exist (e.g., design documents, prototypes) but are not fully complete.
-   The topic is still being discussed in recent articles.

### ⬜ Not Started

-   Only a plan or idea was proposed, with no subsequent progress seen.
-   Not mentioned again in other articles.
-   Explicitly labeled as a future plan.

---

## Priority Marking Rules

Automatically judge priority based on the author's values and areas of focus as reflected in the article content:

### 🔴 High Priority

-   Directly related to core business goals: entrepreneurship, investment, product launch, revenue targets.
-   Directly related to actively developed projects (e.g., CZON, CZONE, EA, etc.).
-   The author explicitly expresses urgency or importance in the text.
-   Critical tasks blocking other work.

### 🟡 Medium Priority

-   Technical improvements, tool optimization, process enhancement.
-   Positively impacts product quality but is not urgent.
-   The author expresses interest but no clear timeline requirement.

### 🟢 Low Priority

-   Exploratory ideas, research-oriented thoughts.
-   Non-urgent improvement suggestions.
-   Ideas of the "do when I have time" type.
-   Purely for learning or experimental purposes.

---

## Output Format

### Header Format

```markdown
# AI Summary: TODO Items

**AI Analysis Time**: YYYY-MM-DD
**Generated based on N Markdown files**
**Note**: This report is automatically extracted by AI. Status and priority are AI-inferred results, for reference only.

---
```

Where `N` is the actual total number of Markdown files obtained in Phase 1.

### Overview

```markdown
## Overview

| Status        | Count |
| ------------- | ----- |
| ⬜ Not Started | X     |
| 🔄 In Progress | X     |
| ✅ Completed   | X     |
| **Total**     | **X** |
```

### TODO List

Grouped by status for display. Within each group, sort by priority (High → Medium → Low).
Use different display formats for TODOs with different statuses:

#### ⬜ Not Started Format

```markdown
## ⬜ Not Started

### 🔴 [Brief TODO Description]

- **Source**: [Article Title](../../../path/to/file.md)
- **Date**: YYYY-MM-DD
- **Original Text**:
  > Quote the relevant original text snippet

---
```

#### 🔄 In Progress Format

```markdown
## 🔄 In Progress

### 🔴 [Brief TODO Description]

- **Source**: [Article Title](../../../path/to/file.md)
- **Date**: YYYY-MM-DD
- **Original Text**:
  > Quote the relevant original text snippet
- **Progress**:
  - **Completed**: Describe the progress already made, specifically what has been done.
  - **Remaining**: Describe the content not yet completed, what still needs to be done.
  - **Evidence**: [Later Article Title](../../../path/to/later-file.md)
    > Quote the original text snippet from the later article demonstrating progress.

---
```

#### ✅ Completed Format

```markdown
## ✅ Completed

### 🔴 [Brief TODO Description]

- **Source**: [Article Title](../../../path/to/file.md)
- **Date**: YYYY-MM-DD
- **Original Text**:
  > Quote the relevant original text snippet
- **Basis for Completion**: Explain why it is judged as completed, citing specific evidence.
  - Evidence Source: [Related Article Title](../../../path/to/evidence-file.md)
- **Outcome**: Describe the specific results or outputs achieved upon completion.

---
```

---

## Link Reference Specification

-   When referencing original text links, ensure the links are valid.
-   **Always link to the specific Markdown file**, not to a directory.
-   **The link text should be the corresponding title**, not the filename.
-   Since generating to the `.czon/AIGC/TODO/` directory, use relative paths starting with `../../../` for references.

**Correct Example**:

```markdown
[Capital Endurance War: The Strategy for Individual Investors to Cross Classes](../../../INSIGHTS/6.md)
```

**Incorrect Example**:

```markdown
[INSIGHTS/6.md](../../../INSIGHTS/6.md) ← Uses filename instead of title.
```

---

## Segmented Writing Rules

Because the report content may be long, **you must write in segments**. It is forbidden to write the entire report at once.

### Step 1: Write the Skeleton File

First, create the report file. Write the header, overview placeholder, section titles for each status, and placeholder markers.

### Step 2: Fill Content Chapter by Chapter

Replace placeholder markers with actual content in order of chapters:

1.  Fill the content for **only one chapter** at a time.
2.  Limit the content written in a single operation to **within 2000 words**.
3.  If a single chapter exceeds 2000 words, split it into multiple write operations.

### Step 3: Completeness Check

After all chapters are filled:

1.  Read the complete file to confirm there are no leftover placeholder markers.
2.  Confirm all link formats are correct.
3.  Confirm the statistical numbers in the Overview match the actual TODO count.

---

## Prohibited Actions

-   ❌ Do not start generating the report before reading all files.
-   ❌ Do not skip any files.
-   ❌ Do not fabricate non-existent TODO items.
-   ❌ Do not fabricate completion status (mark as "Not Started" when uncertain).
-   ❌ Do not omit explicitly marked TODOs (e.g., items with "TODO" in the text).