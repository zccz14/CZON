---
"title": "Mermaid圖表測試文件"
"summary": "本文件是一個測試檔案，旨在驗證CZON平台對Mermaid圖表的渲染支援。文件中提供了流程圖、序列圖、甘特圖、類別圖、狀態圖和圓餅圖等多種\
  Mermaid圖表類型的範例，展示了從基本結構到複雜應用的圖表定義。此外，文件還包含一個錯誤語法測試，用於驗證系統對錯誤圖表的處理能力。透過這些範例，文件\
  全面測試了CZON平台中Mermaid整合的功能性和穩健性，確保圖表能夠正確渲染並處理異常情況。"
"tags":
  - "Mermaid"
  - "圖表測試"
  - "CZON"
  - "流程圖"
  - "序列圖"
  - "甘特圖"
  - "類別圖"
  - "狀態圖"
"date": "2024-01-01"
---

# Mermaid 圖表測試

這是一個測試檔案，用於驗證 CZON 中的 Mermaid 圖表渲染功能。

## 流程圖範例

```mermaid
graph TD
    A[開始] --> B{是否繼續?}
    B -->|是| C[執行操作]
    B -->|否| D[結束]
    C --> E[檢查結果]
    E --> F{是否成功?}
    F -->|是| G[完成]
    F -->|否| H[重試]
    H --> C
    G --> D
```

## 序列圖範例

```mermaid
sequenceDiagram
    participant User
    participant System
    participant Database

    User->>System: 提交請求
    System->>Database: 查詢資料
    Database-->>System: 返回結果
    System-->>User: 顯示結果
```

## 甘特圖範例

```mermaid
gantt
    title 專案時間表
    dateFormat  YYYY-MM-DD
    section 設計
    需求分析     :done,    des1, 2024-01-01, 7d
    原型設計     :active,  des2, 2024-01-08, 5d
    詳細設計     :         des3, after des2, 5d
    section 開發
    前端開發     :         dev1, after des3, 10d
    後端開發     :         dev2, after des3, 15d
    section 測試
    單元測試     :         test1, after dev1, 5d
    整合測試     :         test2, after dev2, 5d
```

## 類別圖範例

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

## 狀態圖範例

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing : 開始處理
    Processing --> Success : 處理成功
    Processing --> Error : 處理失敗
    Success --> [*]
    Error --> [*]
```

## 圓餅圖範例

```mermaid
pie title 瀏覽器使用率
    "Chrome" : 65.2
    "Firefox" : 15.3
    "Safari" : 12.5
    "Edge" : 5.2
    "其他" : 1.8
```

## 錯誤語法測試（應該顯示錯誤訊息）

```mermaid
graph TD
    A --> B
    // 這裡缺少箭頭定義
    C --> D
```

這個測試檔案包含了多種 Mermaid 圖表類型，用於驗證 CZON 的 Mermaid 整合是否正常運作。