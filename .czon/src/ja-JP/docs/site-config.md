---
"title": "CZON サイト設定ガイド"
"summary": "このドキュメントでは、CZON サイト設定の方法とオプションについて詳しく説明します。設定は .czon/meta.json ファイルの options.site フィールドに配置され、site.baseUrl（sitemap.xml と robots.txt の生成用）、site.title（サイトタイトル、デフォルト値は 'CZON'）、site.gaID（Google Analytics Measurement ID）、site.clarityID（Microsoft Clarity Project ID）が含まれます。すべての設定項目はオプションであり、変更後は czon build を再実行する必要があります。baseUrl が設定されていない場合は sitemap.xml の生成がスキップされ、分析ツールは対応する ID が設定された場合にのみ読み込まれ、ページパフォーマンスには影響しません。ドキュメントでは、設定場所、利用可能な設定項目、完全な例、および注意事項を提供し、ユーザーが簡単にサイトを設定できるよう支援します。"
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

設定項目は、`.czon/meta.json` ファイルの `options.site` フィールドにあります：

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
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
- **フォーマット**: 完全な URL（例：`https://example.com`）

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

設定すると、以下が自動生成されます：

- `sitemap.xml` - すべてのページを含むサイトマップ
- `robots.txt` 内の Sitemap 宣言

### `site.title`

サイトのタイトルです。ページヘッダーに表示されます。

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

取得方法：[Google Analytics](https://analytics.google.com/) にアクセスし、プロパティを作成後、「データストリーム」で Measurement ID を取得してください。

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

取得方法：[Microsoft Clarity](https://clarity.microsoft.com/) にアクセスし、プロジェクトを作成後、プロジェクト設定で Project ID を取得してください。

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

- **モバイル端末**: ハンバーガーメニューアイコンを表示し、クリックするとすべてのナビゲーションリンクが展開されます。
- **デスクトップ端末**: ヘッダー内に直接ナビゲーションリンクを表示しますが、画面幅の 40% を超えないようにします。超える部分は「More」ドロップダウンメニューで表示されます。

## 完全な例

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "技術ブログ",
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