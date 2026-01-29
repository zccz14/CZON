---
"title": "CZON 站點配置指南"
"summary": "本文檔詳細說明了 CZON 站點配置的方法和選項。配置位於 .czon/meta.json 檔案的 options.site 欄位中，包括 site.baseUrl（用於生成 sitemap.xml 和 robots.txt）、site.title（站點標題，預設值為 'CZON'）、site.gaID（Google Analytics Measurement ID）和 site.clarityID（Microsoft Clarity Project ID）。所有配置項都是可選的，修改後需要重新執行 czon build 才能生效。未配置 baseUrl 時將跳過 sitemap.xml 生成，分析工具只有在配置了對應 ID 後才會載入，不影響頁面效能。文件提供了配置位置、可用配置項、完整範例和注意事項，幫助使用者輕鬆設定站點。"
"tags":
  - "CZON"
  - "站點配置"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# 站點配置

CZON 支援透過 `.czon/meta.json` 檔案配置站點選項。這些配置是可選的，不會阻擋初次使用。

## 配置位置

配置項位於 `.czon/meta.json` 檔案的 `options.site` 欄位中：

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id"
    }
  },
  "files": []
}
```

## 可用配置項

### `site.baseUrl`

站點基礎 URL，用於生成 sitemap.xml 和 robots.txt。

- **類型**: `string`
- **格式**: 完整的 URL，如 `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

配置後會自動生成：

- `sitemap.xml` - 包含所有頁面的站點地圖
- `robots.txt` 中的 Sitemap 宣告

### `site.title`

站點標題，顯示在頁面標頭。

- **類型**: `string`
- **預設值**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "我的文件站"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID，用於整合 Google Analytics 統計。

- **類型**: `string`
- **格式**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

取得方式：前往 [Google Analytics](https://analytics.google.com/) 建立媒體資源，在「資料串流」中取得 Measurement ID。

### `site.clarityID`

Microsoft Clarity Project ID，用於整合 Clarity 使用者行為分析。

- **類型**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

取得方式：前往 [Microsoft Clarity](https://clarity.microsoft.com/) 建立專案，在專案設定中取得 Project ID。

## 完整範例

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "技術部落格",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## 注意事項

- 修改配置後需要重新執行 `czon build` 才能生效
- 所有 `site` 配置項都是可選的，可以只配置需要的部分
- 分析工具（GA、Clarity）只有在配置了對應 ID 後才會載入，不影響頁面效能
- 未配置 `baseUrl` 時，將跳過 sitemap.xml 生成