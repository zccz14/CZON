---
"title": "CZONカスタムスタイルガイド"
"summary": "この文書では、CZONプロジェクトにおけるカスタムスタイルの適用方法について詳しく説明します。プロジェクトの.czonyディレクトリ内にstyle.cssファイルを作成し、CSSコードを記述することで、デフォルトのスタイルを上書きしたり、個性的な外観を追加したりすることができます。文書では、CZONがビルド時にこのファイルを検出して出力ディレクトリにコピーし、各HTMLページにスタイルリンクを追加して、カスタムスタイルが組み込みスタイルの後に読み込まれる（上書きを実現する）仕組みを解説しています。利用可能なCSS変数（背景色、文字色、リンク色など）の一覧を提供し、ブランドカラーのカスタマイズ、コンテンツエリアの幅調整、コードブロックのスタイル変更、特定要素の非表示など、複数の実践的な例を示しています。最後に、ファイル名は必ずstyle.cssとすること、変更後は再ビルドが必要なこと、CSS変数による上書きを推奨すること、CZONがTailwind CSSを使用しているため!importantが必要になる場合があることなどの注意点を強調しています。"
"tags":
  - "CZON"
  - "カスタムスタイル"
  - "CSS"
  - "フロントエンド開発"
  - "サイト構築"
  - "スタイル上書き"
  - "CSS変数"
  - "Tailwind CSS"
---

# カスタムスタイル

CZON は、`.czon/style.css` ファイルを通じてサイトのスタイルをカスタマイズすることをサポートしており、デフォルトのスタイルを上書きしたり、個性的な外観を追加したりすることができます。

## 使用方法

1. プロジェクトの `.czon` ディレクトリ内に `style.css` ファイルを作成します：

```
your-project/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- このファイルを作成
├── README.md
└── docs/
```

2. `style.css` にカスタム CSS を記述します：

```css
/* 例：リンクの色を変更 */
:root {
  --link-color: #0066cc;
}

/* 例：ダークモード時の背景を変更 */
html.dark {
  --bg-primary: #0d1117;
}
```

3. `czon build` を再度実行すると、カスタムスタイルがすべてのページに自動的に適用されます。

## 仕組み

- ビルド時に、CZON は `.czon/style.css` の存在を検出します。
- ファイルが存在する場合、出力ディレクトリ `.czon/dist/style.css` にコピーされます。
- 生成される各 HTML ページの `<head>` 内に、以下のスタイルリンクが追加されます：
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- カスタムスタイルは組み込みスタイルの後に読み込まれるため、デフォルトのスタイルを上書きすることができます。

## 利用可能な CSS 変数

CZON はテーマカラーを定義するために CSS 変数を使用しています。これらの変数を上書きすることで、配色を素早く調整できます：

```css
:root {
  /* 背景色 */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* 文字色 */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* リンク色とアクセント色 */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* ボーダー色 */
  --border-color: #dee2e6;
}

/* ダークモード用変数 */
html.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-tertiary: #404040;

  --text-primary: #e5e5e5;
  --text-secondary: #a0a0a0;
  --text-muted: #6c6c6c;

  --link-color: #58a6ff;
  --link-hover-color: #79b8ff;

  --border-color: #404040;
}
```

## 例

### ブランドカラーのカスタマイズ

```css
:root {
  --link-color: #e91e63;
  --link-hover-color: #c2185b;
}

html.dark {
  --link-color: #f48fb1;
  --link-hover-color: #f8bbd9;
}
```

### コンテンツエリアの幅調整

```css
.content {
  max-width: 60rem;
}
```

### コードブロックのスタイル変更

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### 特定要素の非表示

```css
/* 右サイドバー（目次）を非表示 */
.sidebar-right {
  display: none;
}
```

## 注意点

- カスタムスタイルのファイル名は `style.css` で、`.czon/` ディレクトリ内に配置する必要があります。
- スタイルを変更した後は、`czon build` を再度実行して反映させる必要があります。
- スタイルのカスタマイズには CSS 変数の上書きを使用することをお勧めします。これにより、ライトモードとダークモードの両方に対応できます。
- CZON は Tailwind CSS を使用しています。Tailwind によって生成されたスタイルを上書きする必要がある場合は、`!important` が必要になる場合があります。