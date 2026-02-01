---
"title": "CZON サイト設定ガイド"
"summary": "このドキュメントでは、CZON サイト設定の方法とオプションについて詳しく説明します。設定は .czon/meta.json ファイルの options.site フィールドに配置され、site.baseUrl（sitemap.xml と robots.txt の生成に使用）、site.title（サイトタイトル、デフォルト値は 'CZON'）、site.gaID（Google Analytics Measurement ID）、site.clarityID（Microsoft Clarity Project ID）が含まれます。すべての設定項目はオプションであり、変更後は czon build を再実行する必要があります。baseUrl が設定されていない場合は sitemap.xml の生成がスキップされ、分析ツールは対応する ID が設定された場合にのみ読み込まれ、ページパフォーマンスには影響しません。ドキュメントでは、設定場所、利用可能な設定項目、完全な例、および注意事項を提供し、ユーザーが簡単にサイトを設定できるよう支援します。"
"tags":
  - "CZON"
  - "サイト設定"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# サイト設定

CZON は、`.czon/meta.json` ファイルを通じてサイトオプションを設定することをサポートしています。これらの設定はオプションであり、初回使用をブロックすることはありません。

## 設定場所

設定項目は `.czon/meta.json` ファイルの `options.site` フィールドにあります：

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "home": "guide.html",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "ホーム", "href": "index.html" },
        { "title": "概要", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## 利用可能な設定項目

### `site.baseUrl`

サイトのベース URL です。sitemap.xml と robots.txt の生成に使用されます。

- **タイプ**: `string`
- **フォーマット**: 完全な URL、例： `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

設定すると自動的に生成されます：

- `sitemap.xml` - すべてのページを含むサイトマップ
- `robots.txt` 内の Sitemap 宣言

### `site.title`

サイトタイトルです。ページヘッダーに表示されます。

- **タイプ**: `string`
- **デフォルト値**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "マイドキュメントサイト"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID です。Google Analytics 統計の統合に使用されます。

- **タイプ**: `string`
- **フォーマット**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

取得方法：[Google Analytics](https://analytics.google.com/) にアクセスしてプロパティを作成し、「データストリーム」で Measurement ID を取得してください。

### `site.clarityID`

Microsoft Clarity Project ID です。Clarity ユーザー行動分析の統合に使用されます。

- **タイプ**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

取得方法：[Microsoft Clarity](https://clarity.microsoft.com/) にアクセスしてプロジェクトを作成し、プロジェクト設定で Project ID を取得してください。

### `site.home`

ホームページのパス設定です。ホームページのリダイレクト先をカスタマイズするために使用されます。

- **タイプ**: `string`
- **デフォルト値**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**動作説明**：

- **ルートホームページにアクセスした場合**：ユーザーが `/index.html` にアクセスすると、ブラウザの言語に基づいて自動的に `/{検出された言語}/{home}` にリダイレクトされます。
- **ヘッダータイトルをクリックした場合**：現在の言語ディレクトリ内の `home` パスにリダイレクトされます。

**使用シナリオ**：

- ユーザーが初回アクセス時に特定のページ（例：入門ガイド、製品紹介など）に直接入ってほしい場合。
- サイトのホームページが記事リストではなく、特定のドキュメントページである場合。

### `site.navLinks`

クイックナビゲーションリンクの設定です。ページヘッダーにナビゲーションリンクを表示します。

- **タイプ**: `Array<{ title: string, href: string }>`
- **デフォルト値**: `undefined`（ナビゲーションを表示しない）

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "ホーム", "href": "index.html" },
        { "title": "ドキュメント", "href": "docs.html" },
        { "title": "概要", "href": "about.html" }
      ]
    }
  }
}
```

**レスポンシブ動作**：

- **モバイル端末**：ハンバーガーメニューアイコンを表示し、クリックするとすべてのナビゲーションリンクが展開されます。
- **デスクトップ端末**：ヘッダー内に直接ナビゲーションリンクを表示しますが、画面幅の 40% を超えないようにします。超える部分は「More」ドロップダウンメニューで表示されます。

## 完全な例

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "技術ブログ",
      "home": "getting-started.html",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "ホーム", "href": "index.html" },
        { "title": "ドキュメント", "href": "docs.html" },
        { "title": "ブログ", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## 注意事項

- 設定を変更した後は、`czon build` を再実行する必要があります。
- すべての `site` 設定項目はオプションであり、必要な部分のみを設定できます。
- 分析ツール（GA、Clarity）は、対応する ID が設定された場合にのみ読み込まれ、ページパフォーマンスには影響しません。
- `baseUrl` が設定されていない場合は、sitemap.xml の生成がスキップされます。