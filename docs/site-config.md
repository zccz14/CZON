# 站点配置

CZON 支持通过 `.czon/meta.json` 文件配置站点选项。这些配置是可选的，不会阻塞初次使用。

## 配置位置

配置项位于 `.czon/meta.json` 文件的 `options.site` 字段中：

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

## 可用配置项

### `site.baseUrl`

站点基础 URL，用于生成 sitemap.xml 和 robots.txt。

- **类型**: `string`
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

配置后会自动生成：

- `sitemap.xml` - 包含所有页面的站点地图
- `robots.txt` 中的 Sitemap 声明

### `site.title`

站点标题，显示在页面头部。

- **类型**: `string`
- **默认值**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "我的文档站"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID，用于集成 Google Analytics 统计。

- **类型**: `string`
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

获取方式：前往 [Google Analytics](https://analytics.google.com/) 创建媒体资源，在「数据流」中获取 Measurement ID。

### `site.clarityID`

Microsoft Clarity Project ID，用于集成 Clarity 用户行为分析。

- **类型**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

获取方式：前往 [Microsoft Clarity](https://clarity.microsoft.com/) 创建项目，在项目设置中获取 Project ID。

## 完整示例

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "技术博客",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## 注意事项

- 修改配置后需要重新运行 `czon build` 才能生效
- 所有 `site` 配置项都是可选的，可以只配置需要的部分
- 分析工具（GA、Clarity）只有在配置了对应 ID 后才会加载，不影响页面性能
- 未配置 `baseUrl` 时，将跳过 sitemap.xml 生成
