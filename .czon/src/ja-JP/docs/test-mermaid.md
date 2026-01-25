---
"title": "Mermaid図表テストドキュメント"
"summary": "このドキュメントは、CZONプラットフォームにおけるMermaid図表のレンダリングサポートを検証するためのテストファイルです。フローチャート、シーケンス図、ガントチャート、クラス図、状態図、円グラフなど、様々なMermaid図表タイプの例を提供し、基本構造から複雑な応用までの図表定義を示しています。さらに、ドキュメントには誤った構文のテストも含まれており、システムが不正な図表をどのように処理するかを検証します。これらの例を通じて、ドキュメントはCZONプラットフォーム内のMermaid統合の機能性と堅牢性を包括的にテストし、図表が正しくレンダリングされ、異常状況が適切に処理されることを保証します。"
"tags":
  - "Mermaid"
  - "図表テスト"
  - "CZON"
  - "フローチャート"
  - "シーケンス図"
  - "ガントチャート"
  - "クラス図"
  - "状態図"
"date": "2024-01-01"
---

# Mermaid 図表テスト

これは、CZONにおけるMermaid図表レンダリング機能を検証するためのテストファイルです。

## フローチャートの例

```mermaid
graph TD
    A[開始] --> B{続行しますか？}
    B -->|はい| C[操作を実行]
    B -->|いいえ| D[終了]
    C --> E[結果を確認]
    E --> F{成功しましたか？}
    F -->|はい| G[完了]
    F -->|いいえ| H[再試行]
    H --> C
    G --> D
```

## シーケンス図の例

```mermaid
sequenceDiagram
    participant User
    participant System
    participant Database

    User->>System: リクエストを送信
    System->>Database: データを照会
    Database-->>System: 結果を返却
    System-->>User: 結果を表示
```

## ガントチャートの例

```mermaid
gantt
    title プロジェクトスケジュール
    dateFormat  YYYY-MM-DD
    section 設計
    要件分析     :done,    des1, 2024-01-01, 7d
    プロトタイプ設計 :active,  des2, 2024-01-08, 5d
    詳細設計     :         des3, after des2, 5d
    section 開発
    フロントエンド開発 :         dev1, after des3, 10d
    バックエンド開発 :         dev2, after des3, 15d
    section テスト
    単体テスト     :         test1, after dev1, 5d
    結合テスト     :         test2, after dev2, 5d
```

## クラス図の例

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

## 状態図の例

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing : 処理を開始
    Processing --> Success : 処理成功
    Processing --> Error : 処理失敗
    Success --> [*]
    Error --> [*]
```

## 円グラフの例

```mermaid
pie title ブラウザ使用率
    "Chrome" : 65.2
    "Firefox" : 15.3
    "Safari" : 12.5
    "Edge" : 5.2
    "その他" : 1.8
```

## 誤った構文のテスト（エラーメッセージが表示されるはずです）

```mermaid
graph TD
    A --> B
    // ここに矢印の定義が不足しています
    C --> D
```

このテストファイルには、CZONのMermaid統合が正常に動作するかを検証するための、様々なMermaid図表タイプが含まれています。