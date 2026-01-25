---
"title": "Mermaid Diagram Test Document"
"summary": "This document is a test file designed to verify the CZON platform's rendering support for Mermaid diagrams. It provides examples of various Mermaid diagram types, including flowcharts, sequence diagrams, Gantt charts, class diagrams, state diagrams, and pie charts, showcasing diagram definitions from basic structures to complex applications. Additionally, the document includes an error syntax test to verify the system's ability to handle incorrect diagrams. Through these examples, the document comprehensively tests the functionality and robustness of the Mermaid integration in the CZON platform, ensuring diagrams render correctly and handle exceptions appropriately."
"tags":
  - "Mermaid"
  - "Diagram Testing"
  - "CZON"
  - "Flowchart"
  - "Sequence Diagram"
  - "Gantt Chart"
  - "Class Diagram"
  - "State Diagram"
"date": "2024-01-01"
---

# Mermaid Diagram Test

This is a test file to verify the Mermaid diagram rendering functionality in CZON.

## Flowchart Example

```mermaid
graph TD
    A[Start] --> B{Continue?}
    B -->|Yes| C[Execute Action]
    B -->|No| D[End]
    C --> E[Check Result]
    E --> F{Success?}
    F -->|Yes| G[Complete]
    F -->|No| H[Retry]
    H --> C
    G --> D
```

## Sequence Diagram Example

```mermaid
sequenceDiagram
    participant User
    participant System
    participant Database

    User->>System: Submit Request
    System->>Database: Query Data
    Database-->>System: Return Result
    System-->>User: Display Result
```

## Gantt Chart Example

```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Design
    Requirements Analysis     :done,    des1, 2024-01-01, 7d
    Prototype Design         :active,  des2, 2024-01-08, 5d
    Detailed Design          :         des3, after des2, 5d
    section Development
    Frontend Development     :         dev1, after des3, 10d
    Backend Development      :         dev2, after des3, 15d
    section Testing
    Unit Testing             :         test1, after dev1, 5d
    Integration Testing      :         test2, after dev2, 5d
```

## Class Diagram Example

```mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +void eat()
        +void sleep()
    }
    class Dog {
        +void bark()
    }
    class Cat {
        +void meow()
    }

    Animal <|-- Dog
    Animal <|-- Cat
```

## State Diagram Example

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing : Start Processing
    Processing --> Success : Process Succeeded
    Processing --> Error : Process Failed
    Success --> [*]
    Error --> [*]
```

## Pie Chart Example

```mermaid
pie title Browser Usage Share
    "Chrome" : 65.2
    "Firefox" : 15.3
    "Safari" : 12.5
    "Edge" : 5.2
    "Other" : 1.8
```

## Error Syntax Test (Should Display an Error Message)

```mermaid
graph TD
    A --> B
    // Missing arrow definition here
    C --> D
```

This test file includes various Mermaid diagram types to verify if the Mermaid integration in CZON is working correctly.